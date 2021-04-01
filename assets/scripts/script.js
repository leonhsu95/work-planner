// Display Current Time
var currentTime = moment();
var currentDay = moment().format("dddd, Do MMMM");
var currentDayEl = $('#current-day');
currentDayEl.text("Today is " + currentDay);

// Timeblock Elements
var main = $("#main");
var rowEl = $("<div>");
rowEl.attr("class","row time-block");
main.append(rowEl);


// Creating Timeblocks Dynamically
for (let i = 0; i < 9; i++) {
        var hour = moment().startOf("day").add(i+9,"h");

        var hourEl = $("<div>");
        hourEl.attr("class","col-3 col-sm-2 col-lg-1 scheduler-hour hour");
        hourEl.text(hour.format("hA"));
        rowEl.append(hourEl);
        
        var schedulerPlannerEl = $("<div>");
        var textAreaEl = $("<textarea>");
        
        schedulerPlannerEl.attr("class","col-6 col-sm-8 col-lg-10 scheduler-planner");
        textAreaEl.attr({
                            "id": hour.format("H"),
                            "class":"scheduler-input", 
                            "cols":"5",
                            "rows":"3"
                        });

        // Changing Colour based on Hour Passed
        if (moment(hour).isBefore(currentTime, "hour")){
            textAreaEl.addClass('past');
        }

        else if(moment(hour).isSame(currentTime, "hour")){
            textAreaEl.addClass('present');
        }

        else{
            textAreaEl.addClass('future');
        }

        rowEl.append(schedulerPlannerEl);
        schedulerPlannerEl.append(textAreaEl);
        
        var saveEl= $("<div>");
        var saveFormEl = $("<form>");
        saveFormEl.attr("form","event-form")
        var saveButtonEl = $("<button>");
        var saveIconEl =  $("<i>");
        
        saveEl.attr("class","col-6 col-sm-2 col-lg-1 save-button");
        saveFormEl.attr("class","save-form");
        saveButtonEl.attr({
                            "class":"save-button-handler save-button", 
                            "type": "submit",
                            "hour": hour.format("H"),
                        });
        
        saveIconEl.attr("class","fas fa-save");
        
        rowEl.append(saveEl);
        saveEl.append(saveFormEl);
        saveFormEl.append(saveButtonEl);
        saveButtonEl.append(saveIconEl);
}


// function saveHour() {
//     var hour =
//         return $(this).attr('id');
//     })
    
//     var event = $('.scheduler-input').val()
//     console.log(event);
//     localStorage.setItem(hour)
// }



// Save Button Click Event
$(".save-button-handler").on("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    
    var hour= $(this).attr("hour");
    var userEvent= $("#" + $(this).attr("hour")).val();

    localStorage.setItem(hour, JSON.stringify(userEvent));

    // Saving textarea Input when website reloads

    for (i = 9; i < 18; i++) {
        var savedEvent = JSON.parse(localStorage.getItem(i));
        // userEvent.attr("value",savedEvent);

      
    console.log(savedEvent);
    }
    // console.log(hour);
  

})
