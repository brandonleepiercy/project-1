$(document).ready(function() {



var today = moment().toISOString().slice(0, 10);
var splitArray = today.split("-");
var currentDay = parseInt(splitArray[2]);
var currentMonth = parseInt(splitArray[1]);
var currentYear = parseInt(splitArray[0]);

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dayName = days[new Date().getDay()];

console.log(dayName);
console.log("hello");

var stocPricekArray = [
   
]

const todayStock = {
	"async": true,
	"crossDomain": true,
	"url": "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=SPY",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
};

const stocksSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=SPY&outputsize=compact&datatype=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	}
};
//do on click when we have html
$("#economy").on("click", function(e) {
    e.preventDefault();
    $(".info-div").html("<br>")
    $("h1").text("SPY Daily Performance");

$.ajax(stocksSettings).done(function (response) {
  console.log(response);
    for (var i = 1; i < currentDay; i++) {
   
        if(response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()] !==undefined) {

        stocPricekArray.push({day: i, price: response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()]["4. close"]});
        var object = stocPricekArray.find(e => e.day == i);
        $(`#${i}`).text(object.price);
        if (object !== undefined && response !== undefined) {
           // console.log(response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()]["1. open"]);
            if (response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()]["1. open"] > response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()]["4. close"] ) {
                $(`#${i}`).attr("style", "color: red");
            } else {
                $(`#${i}`).attr("style", "color: green")
                }
            }
        } else if (response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()] !==undefined){
        
        stocPricekArray.push({day: i, price: response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()]["4. close"]});
            var object = stocPricekArray.find(e => e.day == i);
            $(`#${i}`).text(object.price);
            if (object !== undefined && response !== undefined) {
                if (response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()]["1. open"] > response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()]["4. close"] ) {
                    $(`#${i}`).attr("style", "color: red");
                } else {
                    $(`#${i}`).attr("style", "color: green")
                    }
                }
            }
        }
        console.log(stocPricekArray);
        $.ajax(todayStock).done(function (response) {
            console.log(response);
            if (response !== undefined && dayName !== "Sat" && dayName !== "Sun") {
                $(`#${currentDay}`).text(response["Global Quote"]["05. price"]);
                console.log(response["Global Quote"]["05. price"]);
                console.log("stock price^")
                console.log(response)
                if (response["Global Quote"]["05. price"] > response["Global Quote"]["02. open"]){
                    $(`#${currentDay}`).attr("style", "color: green");
                } else if (response["Global Quote"]["05. price"] < response["Global Quote"]["02. open"]) {
                    $(`#${currentDay}`).attr("style", "color: red");
                } else {
                    $(`#${currentDay}`).attr("style", "color: black");
                }
            }
        });
        });
    });
});