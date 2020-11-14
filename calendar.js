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
    var table = "<table id='table1' class='table'><tr><th class='th col'>Monday</th><th class='th col'>Tuesday</th><th class='th col'>Wednesday</th><th class='th col'>Thursday</th><th class='th col'> Friday </th><th class='th col'>Saturday</th><th class='th col'>Sunday</th></tr><tr>";

    for (var i = 0; i < getDay(d); i++) {
      table += '<td class="td"></td>';
    }

    while (d.getMonth() == month) {
      table += `<td id="${d.getDate()}" class="td">` + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (var i = getDay(d); i < 7; i++) {
        table += '<td class="td"></td>';
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