function windChill(windspeed, highTemp, lowTemp) {
    "use strict";
    var temp = (highTemp + lowTemp) / 2;
    var s = Math.pow(windspeed, 0.16);
    var calcWindChill = 35.74 + (0.6215 * temp) - (35.75 * s) + (0.4275 * temp * s);
    calcWindChill = calcWindChill.toFixed(0);
    return calcWindChill;
}