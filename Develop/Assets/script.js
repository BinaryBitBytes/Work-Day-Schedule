//$('.body').addClass("body");
//$('.lead').addClass("description");
//$('.').;
//$('#currentDay').css("hour");
//simple comment change for push to git
//containerEl.append('<h2>With jQuery we can:</h2>');
//----------- listing the hours-----
// var titleEl = document.createElement("h1");
// titleEl.textContent = "Hello friends";
//titleEl.text('Hello friends');
// titleEl.className = 'fancy';
//titleEl.attr('class', 'fancy');
// titleEl.classList.add('p-5') - (`p-5` is for padding)
//titleEl.addClass('p-5');
// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
//titleEl.css('border', 'rgb(122, 242, 242) 5px solid');
// rootEl.appendChild(titleEl);
//containerEl.append(titleEl);
// titleEl.append("Welcome to jQuery");
$(".container").addClass("time-block")
.addClass("SaveBtn");
$(".lead").addClass("description");
var containerEl = $('.container');
var titleEl = $('<h1>');
containerEl.append('<h2>With jQuery we can:</h2>');
var x = [
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
var currentDay= $("#currentDay").addClass("hour").text(today.format("HH")).html(x);
for (var i = 0; i < x.length; i++) {
  // Create a new `<div>` for each ability and its text content
  var xEl = $('<li>');
  // abilityEl.textContent = abilities[i];
  xEl.text(x[i]);
  // `my-3` class adds margin on top and bottom
  xEl.addClass('my-3');
  // Alternatively
  // var abilityEl = $("<div>" + abilities[i] + "</div>");
  // Add this new `<div>` to the abilities `<div>` container element.
  containerEl.append(xEl);
}
// select all `<div>` elements on the page
// document.querySelectorAll('div');
console.log($('div'));
/*
addClass("body")
addClass("textarea")
addClass("jumbotron")
addClass("description")
addClass("time-block")
addClass("row")
addClass("hour")
addClass("past")
addClass("present")
addClass("future")
addClass("saveBtn")
addClass("saveBtn i:hover")
*/

