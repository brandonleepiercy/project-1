var resultsBox = document.getElementById("results");
var userLat = "";
var userLong = "";
var newDate = new Date();
var currentDT = Math.trunc(newDate.getTime()/1000);

$(document).ready(function() {
  getLocation();
  

});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        resultsBox.innerHTML = "Geolocation not supported";
    }
};

function showPosition(position) {
    resultsBox.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
    userLat=position.coords.latitude;
    userLong=position.coords.longitude;
    console.log(userLat);
    console.log(userLong);
    console.log(currentDT);
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+currentDT+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
};