//----------- listing the hours-----
$(".container").addClass("time-block")
.addClass("SaveBtn");
$(".lead").addClass("description");
var containerV = $('.container');
var titleV = $('<h1>');
containerV.append('<h2>Availiable hours:</h2>');
var day = [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM"];
var today = moment();
var currentDay= $("#container").addClass("row").text(today.format("HH")).each(day);
for (var i = 0; i < day.length; i++) {
  // Create a new `<div>` for each ability and its text content
  var XV = $('<li>');
  XV.text(day[i]);
  XV.addClass('hour');
  containerV.append(XV).append('<input class=time-block type=form text=""Log your task here>'+'<input class="saveBtn" type="submit" value="💾SAVE💾">');
}
console.log($('div'&&'li'));
/*
addClass("body")
addClass("textarea")
addClass("jumbotron")
addClass("description") ✅
addClass("time-block")✅
addClass("row")✅
addClass("hour")✅
addClass("past")
addClass("present")
addClass("future")
addClass("saveBtn")✅
addClass("saveBtn i:hover")
*/

