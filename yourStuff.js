$(document).ready(function() {
var today = new Date();
var day = today.getDay();
var month = today.getMonth();

var scheduleArray= [];

function checkStorage(){
    scheduleArray = [];
    if (month === 9 || month === 4 || month === 6 || month === 11 ) {
        for (var i = 1; i < 30; i ++ ) {
            if (localStorage.getItem(i) !== "") {
              scheduleArray.push(localStorage.getItem(i));
              setUpInput(i, localStorage.getItem(i));
            } else {
                setUpInput(i, "");
            }
        }

    } else if (month !== 2) {
        for (var i = 1; i < 31; i ++ ) {
            if (localStorage.getItem(i) !== "") {
                scheduleArray.push(localStorage.getItem(i));
                setUpInput(i, localStorage.getItem(i));
              } else {
                setUpInput(i, "");
           }
        }

    } else {
        for (var i = 1; i < 28; i ++ ) {
            if (localStorage.getItem(i) !== "") {
                scheduleArray.push(localStorage.getItem(i));
                setUpInput(i, localStorage.getItem(i));
             } else {
                setUpInput(i, "");
            }
        }
    }
}

function setUpInput(i, value) {
    var newInput = $(
    `<br><input class = "your-stuff ${i}" type = "text" placeholder = "Change">
    ${value} 
    </input>`)
    $(`#${i}`).empty()
    $(`#${i}`).append(newInput);
    console.log($(`#${i}`).children());
    console.log("^div");
}

$("body").on("keydown", "input.your-stuff", function(e) {
  // e.preventDefault();
    if(e.keyCode === 13)  {
    localStorage.setItem($(this).parent().attr("id"), $(this).val());
    checkStorage();
    }
 });

 $("#your").on("click", function(e) {
     e.preventDefault();
     $(".info-div").text(":)")
     $("h1").text("Your Schedule");
     $(".info-div").attr("style", "color: black");

     console.log("hello world")
    checkStorage();
 })

});

