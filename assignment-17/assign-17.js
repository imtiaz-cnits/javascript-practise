// JS For Loop
const car = ["BMW", "Toyota", "Nissan", "Volvo", "Audi"];

let view= "";
for (let i = 0; i<car.length; i++) {
    view += car[i] + "<br>";
}
document.getElementById('simp-loop').innerHTML=view;

let text2 = "";
for (j = 0; j < 5; j++) {
    text2 += "The Number is " + j + "<br>";
}
document.getElementById('loop-1').innerHTML=text2;

// JavaScript For In Loop
const student = {fname: "Rahat", lname: "Malitha", age: 20};

let text3 = "";
for (let name in student) {
    text3 += student[name] + " ";
}
document.getElementById('loop-2').innerHTML=text3;

// JavaScript For Of Loop
const u = "JavaScript";

let text4 = "";
for (let r in u) {
    text4 += u[r] + "<br>";
}
document.getElementById('loop-3').innerHTML=text4;

// JavaScript While Loop
let t = 0;
let text5 = "";

while (t < 10) {
    text5 += "The countdown towards " + t + "<br>";
    t++;
}
document.getElementById('loop-4').innerHTML=text5;