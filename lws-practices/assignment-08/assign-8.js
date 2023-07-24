// Floating Point Precision
let x = 0.2 + 0.1;
document.getElementById('flt-pre').innerHTML=
"0.2 + 0.1 = " + x;

let y = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById('flt-pre-1').innerHTML=
"0.2 + 0.1 = " + y;

let m = 19;
let n = "15";
let o = m+n;
document.getElementById('add-1').innerHTML=
o;

// JavaScript Numbers
let myNumber = 32;
document.getElementById("add-2").innerHTML =
"Decimal 32 = " + "<br><br>" + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);
