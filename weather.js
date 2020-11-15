$(document).ready(function() {

    var resultsBox = document.getElementById("results");
    var userLat = "";
    var userLong = "";
    var newDate = new Date();
    var currentDT = parseInt(Math.trunc(newDate.getTime()/1000));
    var dateCodes = [];
    var weatherData = [];
    var prevFiveDays = [];
    var toggleSwitch = document.getElementById("weather");
    
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
        buildFiveDays(weatherData);
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
    
    async function buildFiveDays(arr) {
        console.log(await arr[0].current.temp);
        for(i=0;i<weatherData.length;i++){
            var tempInK=await arr[i].current.temp;
            var tempInF=Math.floor(((tempInK-273.15)*9)/5+32);
            console.log(tempInF);
            var dataDT=await arr[i].current.dt;
            var dataDTMilli=dataDT*1000;
            var dateObject=new Date(dataDTMilli);
            var readableDate=dateObject.toLocaleString("en-US", {day: "numeric"});
            console.log(readableDate);
            var humidity=await arr[i].current.humidity + "%";
            console.log(humidity);
            var newObject = {
                date: readableDate,
                temp: tempInF,
                hum: humidity
            };
            prevFiveDays.push(newObject);
        };
        console.log(prevFiveDays);
    };
    
    function toggle() {
        if (toggleSwitch.value=="off"){
            toggleSwitch.value = "on";
        } else if (toggleSwitch.value=="on"){
            toggleSwitch.value = "off";
        };
        console.log(toggleSwitch.value);
    };
    
    function populate() {
        if(toggleSwitch.value=="on"){
            for(i=0;i<prevFiveDays.length;i++){
                var newString = "Temp: "+prevFiveDays[i].temp+" Humidity: "+prevFiveDays[i].hum;
                console.log(newString);
                var boxToEdit = document.getElementById(prevFiveDays[i].date);
                console.log(boxToEdit);
                boxToEdit.innerHTML = newString;
            };
        };
    };
    
    $("#weather").on("click" , function() {
        toggle();
        populate();
    });
    
    });