// JavaScript if
if (new Date().getHours() < 18) {
    document.getElementById('greet').innerHTML="Have a Good Day!";
}

// JavaScript if .. else
const hour = new Date().getHours();
let greeting;

if(hour < 18) {
    greeting = "Have a Good Day!";
} else {
    greeting = "Have a Good Evening!";
}
document.getElementById('greet-1').innerHTML=greeting;

// JS Switch Statement - getDay() Method
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById('weekday').innerHTML= "Today is " + day;

// Strict Comparison
let x = "0";
switch (x) {
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "No Value Found";
}
document.getElementById('strc-comp').innerHTML= text;