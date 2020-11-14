
$(document).ready(function() {

var today = new Date().toISOString().slice(0, 10)
var splitArray = today.split("-");
var currentDay = parseInt(splitArray[2]);
var currentMonth = parseInt(splitArray[1]);
var currentYear = parseInt(splitArray[0]);
var count = 1;

$("#covid19").on("click", function(e) {
	e.preventDefault();
	console.log(currentDay);
	
	for (var i = 1; i < currentDay + 1; i++) {
		$(`#${i}`).text(i);
		count++;
		console.log(count + "more")
		 if (i < 10) {
		const settings = {
			"async": true,
			"crossDomain": true,
			"url": `https://covid-193.p.rapidapi.com/history?country=usa&day=${currentYear}-${currentMonth}-0${i}`,
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
				"x-rapidapi-host": "covid-193.p.rapidapi.com"
			}
		};
		console.log(i);
		ajaxOne(settings, i);
		
	
	} else {
		const settings = {
			"async": true,
			"crossDomain": true,
			"url": `https://covid-193.p.rapidapi.com/history?country=usa&day=${currentYear}-${currentMonth}-${i}`,
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
				"x-rapidapi-host": "covid-193.p.rapidapi.com"
			}
		};
		ajaxTwo(settings, i);
		}
	}
});

function ajaxOne(settings, i) {
	$.ajax(settings).then(function (response) {
		console.log(response);
		console.log(response.response[0].cases.total);
		$(`#${i}`).text(response.response[0].cases.total);
	});
}
function ajaxTwo(settings, i) {
	$.ajax(settings).then(function (response) {
		console.log(response.response[0].cases.total);
		$(`#${i}`).text(response.response[0].cases.total);
	});
}

});