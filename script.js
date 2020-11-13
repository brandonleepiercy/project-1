const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://extract-news.p.rapidapi.com/v0/article?url=https%3A%2F%2Fwww.theverge.com%2F2020%2F4%2F17%2F21224728%2Fbill-gates-coronavirus-lies-5g-covid-19",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "37f3968791msh437719ecb19973ap14c303jsn24e90ef1fa69",
		"x-rapidapi-host": "extract-news.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});