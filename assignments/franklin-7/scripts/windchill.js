var h = parseFloat(document.getElementById("hightemp").innerHTML);
var l = parseFloat(document.getElementById("lowtemp").innerHTML);
var avgtemp = (l + h) / 2;

var ws = parseFloat(document.getElementById("windspeed").innerHTML);

var final = 35.74 + (0.6215 * avgtemp) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * avgtemp) * Math.pow(ws, 0.16);

final = final.toFixed(2);

document.getElementById("windchill").innerHTML = final;


