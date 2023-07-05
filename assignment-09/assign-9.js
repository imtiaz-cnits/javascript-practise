// The toString() Method
let q = 145;
document.getElementById("to-str").innerHTML=
q.toString() + "<br>" +
(145).toString() + "<br>" +
(100+45).toString();

// The toExponential() Method
let a = 8.479;
document.getElementById("to-exp").innerHTML=
a.toExponential() + "<br>" +
a.toExponential(2) + "<br>" +
a.toExponential(5) + "<br>" +
a.toExponential(7);

// The Number() Method
document.getElementById('to-num').innerHTML=
Number(true) + "<br>" +
Number(false) + "<br>" +
Number("10") + "<br>" +
Number("  10") + "<br>" +
Number("10   ") + "<br>" +
Number("  10  ") + "<br>" +
Number("15.47") + "<br>" +
Number("15,47") + "<br>" +
Number("15 47") + "<br>" +
Number("John");

// The parseInt() Method
document.getElementById('parse-int').innerHTML=
parseInt("-15") + "<br>" +
parseInt("-15.33") + "<br>" +
parseInt("20") + "<br>" +
parseInt("15.89") + "<br>" +
parseInt("-15 7") + "<br>" +
parseInt("19 Years") + "<br>" +
parseInt("Years 19");

// The parseFloat() Method
document.getElementById('parse-flt').innerHTML=
parseFloat("20") + "<br>" +
parseFloat("20.67") + "<br>" +
parseFloat("20 89") + "<br>" +
parseFloat("14 Years") + "<br>" +
parseFloat("Years 20");

// JavaScript MIN_VALUE & MAX_VALUE
let l = Number.MIN_VALUE;
document.getElementById('min-val').innerHTML=
l;

let k = Number.MAX_VALUE;
document.getElementById('max-val').innerHTML=
k;



