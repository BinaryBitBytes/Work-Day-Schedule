//----------- storing text in local storage-----
//var text =$('div').text();
//localStorage.setItem('div',text);
//alert(localStorage.getItem('div'));
//-------------- listing the hours-----
const today = moment();
$("input").css('textarea');
$('body').css('body');
$(".container").addClass("time-block SaveBtn");
$(".lead").addClass("description");
var containerV = $('.container');
var titleV = $('<h1>');
var task=[''];
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
$(".lead").append().filter("p:last").text(today.format("LLLL"));
var currentDay= $("#container").addClass("row").text(today.format("HH")).each(day);
for (var i = 0; i < day.length; i++) {
  // Create a new `<div>` for each ability and its text content
  var XV = $('<li>');
  XV.text(day[i]);
  XV.addClass('hour');
  containerV.append(XV).append('<input class="time-block task-input" type="form" id="formId" placeholder="Log your task here">')
  .append('<input class="saveBtn task-input" type="submit" value="💾SAVE💾">');
}
/////////////working on local storage//////
function save(){
var text = $('.saveBtn').text();
window.localStorage.setItem('.saveBtn', text);
alert('Task Saved');
(localStorage.getItem('.saveBtn'));
};
function load(){
var text= $('.saveBtn').text();
const stored = window.localStorage.getItem('saveBtn', text);
console.log(stored);
window.localStorage.getItem('saveBtn');
};
function clear(){
    localStorage.clear();
}
//$('input .saveBtn').click(submit, window.localStorage.setItem(form);//(function storeSave(task){myStorage = window.localStorage.setItem(task, onclick.SubmitEvent);});
////
////working on local storage
console.log($('div'&&'li'));
console.log(today);
console.log(currentDay);
console.log(day.length);
console.log(XV);
//-------------Handle form submit-----------
var formV = $('#formId > li'); // children li of formd
var taskListV = $('#task-list');
//-------
//var old=$('.past').append().children('<li>').Array.prototype.sort(today);//.append();
//var current=$('.present').children('li');//.Array.prototype.sort(today).append();
//var next=$('.future').children('<li>');//.Array.prototype.sort(today).append();

/*var currentHour=$('day');
if(day==currentHour){
    alert('old');
} else if(today<currentDay){
    alert('new');}
else{
    alert('tacos');
};


//var oldHour=(old);
//var nextHour=(next);
console.log(currentHour);
//console.log(oldHour);
//console.log(nextHour);
/*var checkOut = function check(old,current,next) {
    var old=$('.past').append().children('<li>').Array.prototype.sort(today);//.append();
    var current=$('.present').children('<li>');//.Array.prototype.sort(today).append();
    var next=$('.future').children('<li>');//.Array.prototype.sort(today).append();
    var currentHour=(current);
    var oldHour=(old);
    var nextHour=(next);
    if(oldHour>currentHour){
        console.log('hello');
    };
    console.log(currentHour);
    console.log(oldHour);
    console.log(nextHour);
    return;
}; */

    /*if(currentHour>oldHour) {
        console.log("True ✅ True ✅");
    
    // If both conditions are not true, check if expression1 is true
    } else if (nextHour>oldHour) {
        console.log("True ✅ False ❌");
    
    // If expression1 is not true, then check if expression2 is true
    } else if (currentHour && nextHour) {
        console.log("False ❌ True ✅");
    
    // If none of the conditions above evaluate to true, both expressions must be false
    } else {
        console.log("False ❌ False ❌");
    }

  }); 
  */

/*-----representation of :nth-child()--------
$('#top').children('ul').children('li:nth-child(even)')
.addClass('bg-primary text-dark mb-3 p-3')
.css('border-radius', '.4rem');
--------- */

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
addClass("body")✅
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
addClass("saveBtn i:hover")*/