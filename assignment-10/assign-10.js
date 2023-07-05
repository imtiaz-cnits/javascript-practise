// Accessing Array Elements
const array_one = ["World", "Green", "Health"];
document.getElementById('arr-ele').innerHTML=
array_one[0];

// The length Property
const fruits = ["Mango", "Apple", "Orange", "Kiwi", "Banana"];
document.getElementById('arr-len').innerHTML=
fruits.length;

// Adding Array Elements
const webdev = ["HTML", "JavaScript", "CSS"];
document.getElementById('add-arr').innerHTML=
webdev;

function pushFunc() {
    webdev.push("PHP");
    document.getElementById('add-arr').innerHTML=
    webdev;
}

// Associative Arrays
const person = [];
person[0] = "Rahat";
person[1] = "Malitha";
person[2] = 21;
person[3] = "Banglabazar";
document.getElementById('aso-arr').innerHTML=
person[0] + " " + person.length;

// How to Recognize an Array
// Solution1:
const design = ["Graphics", "Motion", "UI/UX", "3D"];
document.getElementById('sol-1').innerHTML=
Array.isArray(design);
// Solution2:
const development = ["Web", "Software", "App"];
document.getElementById('sol-2').innerHTML=
development instanceof Array;