var today = new Date().toISOString().slice(0, 10)

const covidSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/report/country/name?date=2020-04-01&name=USA&format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2a3ff2005fmsh8e47ce61e569efdp1fefefjsn5fa2b36d932c",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
};

function buttonCLicked(){

$.ajax(covidSettings).done(function (response) {
	console.log(response);
});

}