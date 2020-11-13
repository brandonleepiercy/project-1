$(document).ready(function() {

var resultsBox = document.getElementById("results");
var userLat = "";
var userLong = "";
var newDate = new Date();
var currentDT = parseInt(Math.trunc(newDate.getTime()/1000));
var dateCodes = [];
var weatherData = [];
var prevFiveDays = [];

console.log(currentDT);
console.log(typeof(currentDT));
getLocation();
generateDateCodes();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        resultsBox.innerHTML = "Geolocation not supported";
    }
};

async function showPosition(position) {
    resultsBox.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
    userLat=position.coords.latitude;
    userLong=position.coords.longitude;
    console.log(userLat);
    console.log(userLong);
    console.log(currentDT);
    await $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+dateCodes[0]+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        weatherData.push(response);
    });
    await $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+dateCodes[1]+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        weatherData.push(response);
    });
    await $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+dateCodes[2]+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        weatherData.push(response);
    });
    await $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+dateCodes[3]+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        weatherData.push(response);
    });
    await $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat="+userLat+"&lon="+userLong+"&dt="+dateCodes[4]+"&appid=87438d87c7c61316f75aa6c75715e39a",
        method: "GET"
    }).then(function(response) {
        weatherData.push(response);
    });
    console.log(weatherData);
    postDateCodes(weatherData);
};

function generateDateCodes() {
    dateCodes.push(currentDT); 
    var newDateCodeArray = [];
    for(i=1;i<5;i++){
        var newDateCode = (currentDT-(86400*i));
        newDateCodeArray.push(newDateCode);
    };
    dateCodes = dateCodes.concat(newDateCodeArray);
    console.log(dateCodes);
};

async function postDateCodes(arr) {
    console.log(await arr[0].current.temp);
    for(i=0;i<4;i++){
    };
};

});