// The Break Statement
let text1 = "";
for (let i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text1 += "You have the number " + i + "<br>";
}
document.getElementById('break').innerHTML=text1;

// The Continue Statement
let text2 = "";
for (let j = 0; j < 10; j++) {
    if (j === 4) { continue; }
    text2 += "Let's Give you " + j + "<br>";
}
document.getElementById('cont').innerHTML=text2;

// JavaScript Labels
const code = ["PHP", "Java", "C#", "Kotlin", "Flutter", "JS"];
let text3 = "";
list: {
    text3 += code[0] + "<br>";
    text3 += code[1] + "<br>";
    text3 += code[2] + "<br>";
    break list;
    text3 += code[3] + "<br>";
    text3 += code[4] + "<br>";
}
document.getElementById('label').innerHTML=text3;

// Iterating Over a String
const tech = "Web Development";
let text4 = "";
for (const x of tech) {
    text4 += x + "<br>";
}
document.getElementById('itring').innerHTML=text4;

// JavaScript Sets
const letters = new Set(["x", "y", "z", "c", "v"]);

letters.add("m"); // Add Values to the Set

const j = "j"; //Add variables to a Set
letters.add("j")

document.getElementById('set-1').innerHTML=letters.size;

// The forEach() Method
const points = new Set(["m", "n", "o", "p"]);
let text5 = "";
points.forEach(function(Value) {
    text5 += Value + "<br>";
})
document.getElementById('set-2').innerHTML=text5;