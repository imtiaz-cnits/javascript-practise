// Js Array join() Methods
const dev = ["HTML", "PHP", "CSS", "JS"];
document.getElementById('join').innerHTML=
dev.join(" _ ");

// JavaScript Array pop()
const laptop = ["Dell", "Hp", "Lenovo", "Asus"];
document.getElementById('pop-1').innerHTML=
laptop.pop();
document.getElementById('pop-2').innerHTML=
laptop;

// JavaScript Array shift()
const birds = ["Magpie", "Parrot", "Finch", "Piegeon", "Martin"];
document.getElementById('shift-1').innerHTML=
birds; birds.shift();
document.getElementById('shift-2').innerHTML=
birds;

// The concat() method
const web = ["e-commerce", "blog"];
const web2 = ["travel", "portfolio", "edu"];
const category = web.concat(web2);
document.getElementById('merge').innerHTML=
category;

// JavaScript Array splice()
const avenger = ["Thor", "Iron Man", "Black Widow", "Captain America"];
document.getElementById('splice-1').innerHTML=
avenger;
avenger.splice(3,0, "Hawk Eye");
document.getElementById('splice-2').innerHTML=
avenger;



