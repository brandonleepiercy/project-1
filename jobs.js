// var currentdate = new Date();
// var datetime = " " + currentdate.getDate() + "/" +
//     (currentdate.getMonth() + 1) + "/" +
//     currentdate.getFullYear() + " @ " +
//     currentdate.getHours() + ":" +
//     currentdate.getMinutes() + ":" +
//     currentdate.getSeconds();

// document.write(datetime);

$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }
});

function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    alert('Your latitude is :' + lat + ' and longitude is ' + long);
}

function errorFunction(position) {
    alert('Error!');
}
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://indeed9.p.rapidapi.com/search",
    "method": "POST",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-key": "307037ba87msh679b27d5898dc92p15467bjsnd808822351aa",
        "x-rapidapi-host": "indeed9.p.rapidapi.com"
    },
    "data": {
        "position": "datascientist",
        "page": "1",
        "city": "san francisco"
    }
};

$.ajax(settings).done(function(response) {
    // $('#search').show(response.context[""])
    $('#indeed').text(response.jobs[0].company)
    console.log(response);
});