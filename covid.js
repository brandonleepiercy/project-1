$(document).ready(function() {

var today = new Date().toISOString().slice(0, 10)

const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://covid-19-data.p.rapidapi.com/report/country/code?date=${today}&code=usa`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
};

$("#covid").on("click", function(e) {
	e.preventDefault();
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
	
});


});