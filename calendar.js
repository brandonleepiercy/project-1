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
var today2 = new Date().toISOString().slice(0, 10);
var splitArray = today2.split("-");

var currentDay = parseInt(splitArray[2]);

function createCalendar(elem, year, month) {
  console.log("clicked");
    var d = new Date(year, month);
    var table = "<table class='table'><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>";

    for (var i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == month) {
      table += `<td>
        <div class = "date-number">${d.getDate()}</div>
        <div class = "info-div" id = "${d.getDate()}"><br></div>
      </td>`;

      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (var i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
   
    table += '</tr></table>';

    elem.innerHTML = table;
$(`#${currentDay}`).parent().attr("style", "background-color: rgb(214, 214, 214);");
  }

  function getDay(date) {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }


  createCalendar(calendar, year, month);

  $("#home").on("click", function(e){
    $(".info-div").html("<br>")
  });

   