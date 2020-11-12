var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var day = today.getDay();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var wrapper = $(".wrapper")

function createCalendar(elem, year, month) {

    var d = new Date(year, month);
    var table = "<table class='table'><tr><th id='th'>Monday</th><th id='th'>Tuesday</th><th id='th'>Wednesday</th><th id='th'>Thursday</th><th id='th'>Friday</th><th id='th'>Saturday</th><th id='th'>Sunday</th></tr><tr>";

    for (var i = 0; i < getDay(d); i++) {
      table += '<td id="td" class="td"></td>';
    }

    while (d.getMonth() == month) {
      table += '<td id="${d.getDate()} td" class="td">' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (var i = getDay(d); i < 7; i++) {
        table += '<td id="td" class="td"></td>';
      }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
  }

  function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  createCalendar(calendar, year, month);