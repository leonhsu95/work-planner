// Display Current Time
var currentDay = moment().format("dddd, Do MMMM");
var currentDayEl = $('#current-day');
currentDayEl.text("Today is " + currentDay);

// Timeblock Elements
var main = $("#main");
var rowEl = $("<div>");
rowEl.attr("class","row time-block");
main.append(rowEl);

var hourEl = $("<div>");
hourEl.attr("class","col-3 col-sm-2 col-lg-1 schedule-hour");
hourEl.text("9am");
rowEl.append(hourEl);

var schedulePlannerEl = $("<div>");
var textAreaEl = $("<textarea>");

schedulePlannerEl.attr("class","col-6 col-sm-8 col-lg-10 description schedule-planner");
textAreaEl.attr({
                    "class":"mt-10", 
                    "cols":"5",
                    "rows":"3"
                });
rowEl.append(schedulePlannerEl);
schedulePlannerEl.append(textAreaEl);

var saveEl= $("<div>");
var saveFormEl = $("<form>");
var saveButtonEl = $("<button>");
var saveIconEl =  $("<i>");

saveEl.attr("class","col-6 col-sm-2 col-lg-1 save-button");
saveFormEl.attr("class","save-form");
saveButtonEl.attr({
                    "class":"save", 
                    "type": "submit"
                });

saveIconEl.attr("class","fas fa-save");

rowEl.append(saveEl);
saveEl.append(saveFormEl);
saveFormEl.append(saveButtonEl);
saveButtonEl.append(saveIconEl);








/*var main = document.querySelector("main");
var rowEl = document.createElement("div");
rowEl.setAttribute("class", "row time-block");
rowEl.appendChild(main);*/