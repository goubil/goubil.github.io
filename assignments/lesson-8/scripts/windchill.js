/* f = 35.74 + 0.6215 t - 35.75 s ^0.16 + 0.4275 t s^0.16 */
var h = 90;
var l = 66;
var t = (h + l) / 2;
var s = 5;
var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
document.getElementById('f').innerHTML = Math.round(f) + "&deg;F";

