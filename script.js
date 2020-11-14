$(document).ready(function (){

var today = new Date();
var month = today.getMonth();
var year = today.getFullYear();
var key = "xL7n7LjuM75890uTCBZ7aflm935l0FoW";
var queryURL = `https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=58GJOcaZcxd80kUCOX40Few3k4A1sWCn`

console.log(month)
console.log(year)

$.ajax({
        url: queryURL,
         method: "GET"
        }).then(function(response) {
          console.log(response);
        });

});

