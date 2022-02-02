//----------- listing the hours-----
$(".container").addClass("time-block").addClass("SaveBtn");
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
  containerV.append(XV).append('<input class="time-block task-input" type="form" id="formId" placeholder="Log your task here">').append('<input class="saveBtn task-input" type="submit" value="💾SAVE💾">');
}
console.log($('div'&&'li'));
console.log(today);
console.log(currentDay);
console.log(day.length);
console.log(XV);
//-------------Handle form submit-----------
var formV = $('#formId > li'); // children li of formd
var taskListV = $('#task-list');

/*function formSubmit(now) {
    now.preventDefault();
  
    // select form element by its `name` attribute and get its value
    var newTask = $('input[name="task-input"]').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!newTask) {
      console.log('No text was entered.');
      return;
    }
  
    // print to the page
    taskListV.append(newTask);
  
    // clear the form input element
    $('input[name="task-input"]').val();
  }
  // Create a submit event listener on the form element
formV.on('submit', formSubmit);

*/


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

