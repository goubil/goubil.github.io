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

/* f = 35.74 + 0.6215 t - 35.75 s ^0.16 + 0.4275 t s^0.16 */
var h = 90;
var l = 66;
var t = (h + l) / 2;
var s = 5;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById('f').innerHTML = Math.round(f) + "&deg;F";


}