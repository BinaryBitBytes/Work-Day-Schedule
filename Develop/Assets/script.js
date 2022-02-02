//$('.body').addClass("body");
//$('.lead').addClass("description");
//$('.').;
//$('#currentDay').css("hour");
//simple comment change for push to git
//containerV.append('<h2>With jQuery we can:</h2>');
//----------- listing the hours-----
// var titleV = document.createElement("h1");
// titleV.textContent = "Hello friends";
//titleV.text('Hello friends');
// titleV.className = 'fancy';
//titleV.attr('class', 'fancy');
// titleV.classList.add('p-5') - (`p-5` is for padding)
//titleV.addClass('p-5');
// titleV.style.border = "rgb(122, 242, 242) 3px solid";
//titleV.css('border', 'rgb(122, 242, 242) 5px solid');
// rootEl.appendChild(titleV);
//containerV.append(titleV);
// titleV.append("Welcome to jQuery");
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
var currentDay= $("#container").addClass("hour").text(today.format("HH")).each(day);
//.html('<span>'+day+'</span>'+'<br>'+'<br>'+'<span>'+"My Dog just farted"+'</span>');
//'.add(document.getElementsByTagName("button" [day.length]))');
for (var i = 0; i < day.length; i++) {
  // Create a new `<div>` for each ability and its text content
  var XV = $('<li>');
  // abilityEl.textContent = abilities[i];
  XV.text(day[i]);
  // `my-3` class adds margin on top and bottom
  XV.addClass('my-3');
  // Alternatively
  // var abilityEl = $("<div>" + abilities[i] + "</div>");
  // Add this new `<div>` to the abilities `<div>` container element.
  containerV.append(XV).append('<input type=form text=""Log your task here>'+'<input type="submit" value="💾SAVE💾">');
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

