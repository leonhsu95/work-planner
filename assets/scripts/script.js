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
                            "id": "scheduler-input"+hour.format("H"),
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
                            "class":"save-button", 
                            "type": "submit"
                        });
        
        saveIconEl.attr("class","fas fa-save");
        
        rowEl.append(saveEl);
        saveEl.append(saveFormEl);
        saveFormEl.append(saveButtonEl);
        saveButtonEl.append(saveIconEl);
}

// Saving Text Area Content in Object Arrays
var events = {
    hours: [],
    items: [],
}


function saveHour (hour) {
    var hourItem = $("#textarea[id^='scheduler-input']").val();
    var index = events.hours.indexOf(hour);    
    
    if (hourItem !== ""){
        // Adding new events in textarea
        if (index === -1) {
            events.hours.push(hour);
            events.items.push(hourItem);
        }
        // No edits or change in textarea
        else if (hourItem === events.items[index]) {
            return null;
        }
       
        // If no event item, no action
        else {
            return null;
        }
    }
     localStorage.setItem("#scheduler-input", JSON.stringify(events));
}



// Save Button Click Event
$(".save-button").on("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    saveHour(hour);
})
