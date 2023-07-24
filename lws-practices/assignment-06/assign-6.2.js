// JavaScript String Methods
let txt1 = "Rahat is";
let txt2 = "a Good Boy";
let txt3 = txt1.concat(" ",txt2);
document.getElementById('concat').innerHTML=txt3;

// JavaScript String trim()
let cuts1 = "     Rahat Malitha     ";
let cuts2 = cuts1.trim();
document.getElementById('cut').innerHTML=
"Length of Txt 1 = " + cuts1.length +
"<br> Length of Txt 2 = " + cuts2.length;

// JavaScript String padStart()
let jsPad = "O";
document.getElementById('pd-s').innerHTML=
jsPad.padStart(6,"c");

// JavaScript String padEnd()
let jsPade = "H";
document.getElementById('pd-e').innerHTML=
jsPade.padEnd(4,"p");

// JavaScript String charAt()
let character = "Rahat Malitha";
document.getElementById('ch-at').innerHTML=
character.charAt(6);

// JavaScript String split()
let split = "a,b,c,d,e,f";
const newArr = split.split(",");
document.getElementById('spl-str').innerHTML=
newArr[3];