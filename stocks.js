$(document).ready(function() {

var today = new Date().toISOString().slice(0, 10);
console.log(today)
var splitArray = today.split("-");
var currentDay = parseInt(splitArray[2]);
var currentMonth = parseInt(splitArray[1]);
var currentYear = parseInt(splitArray[0]);

var stocPricekArray = [
   
]

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
function buttonClick() {

$.ajax(stocksSettings).done(function (response) {
    //November Logic
  
    for (var i = 1; i < currentDay; i++) {
        if(response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()] !==undefined) {

        stocPricekArray.push({day: i, price: response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + i.toString()]["4. close"]});
        var object = stocPricekArray.find(e => e.day == i);
        $(`#${i}`).text(object.price);
        
        } else if (response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()] !==undefined){
            
        stocPricekArray.push({day: i, price: response["Time Series (Daily)"][currentYear + "-" + currentMonth + "-" + "0" + i.toString()]["4. close"]});
            var object = stocPricekArray.find(e => e.day == i);
            $(`#${i}`).text(object.price);
            console.log("-------------");
        
    }
  }

});
}
buttonClick();

});