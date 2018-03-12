var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF === 'franklin.php') {
    var windspeed = 5;
    var highTemp = 90;
    var lowTemp = 66;
    var calcWindChill = windChill(windspeed, highTemp, lowTemp);
    document.getElementById("windChill").innerHTML = calcWindChill + "&deg;F";
}

if (pageHREF === 'springfield.php') {
    var windspeed = 15;
    var highTemp = 72;
    var lowTemp = 45;
    var calcWindChill = windChill(windspeed, highTemp, lowTemp);
    document.getElementById("windChill").innerHTML = calcWindChill + "&deg;F";
}

if (pageHREF === 'greenville.php') {
    var windspeed = 10;
    var highTemp = 85;
    var lowTemp = 60;
    var calcWindChill = windChill(windspeed, highTemp, lowTemp);
    document.getElementById("windChill").innerHTML = calcWindChill + "&deg;F";
}

function windChill(windspeed, highTemp, lowTemp) {
    "use strict";
    var temp = (highTemp + lowTemp) / 2;
    var s = Math.pow(windspeed, 0.16);
    var calcWindChill = 35.74 + (0.6215 * temp) - (35.75 * s) + (0.4275 * temp * s);
    calcWindChill = calcWindChill.toFixed(0);
    return calcWindChill;
}