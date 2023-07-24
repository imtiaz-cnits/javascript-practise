// JavaScript String indexOf()
let indx = "Please locate where 'locate' occurs!";
document.getElementById('indxof').innerHTML=
indx.indexOf('occurs');

// JavaScript String lastIndexOf()
let lstindx = "Please locate where 'locate' occurs!";
document.getElementById('lastindxof').innerHTML=
lstindx.lastIndexOf('locate');

// JS String indexOf() Starting Position
let indxstpos = "Please locate where 'locate' where occurs!";
document.getElementById('str-pos').innerHTML=
indxstpos.indexOf('where', 16);

// JavaScript String match()
let txt1 = "The rain in SPAIN stays mainly in the plain";
document.getElementById('str-match').innerHTML=
txt1.match(/ain/g);

// JavaScript String match()
let txt2 = "The rain in SPAIN stays mainly in the plain";
document.getElementById('case-match').innerHTML=
txt2.match(/ain/gi);

// JavaScript String includes()
let txt3 = "Hello world, welcome to the universe.";
document.getElementById('incl').innerHTML=
txt3.includes("world");

// JavaScript String includes()
let txt4 = "Hello world, welcome to the universe.";
document.getElementById('incl-pos').innerHTML=
txt4.includes("world", 12);

// JavaScript String startsWith()
let txt5 = "Imtiaz love Javascript";
document.getElementById('str-sw').innerHTML=
txt5.startsWith("Imtiaz");

// JS String endsWith()
let txt6 = "Imtiaz Ahmed";
document.getElementById('str-ew').innerHTML=
txt6.endsWith("Ahmed");