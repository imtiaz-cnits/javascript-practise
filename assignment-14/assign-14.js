// Using new Date()
const nDate = new Date();
document.getElementById('new-date').innerHTML=nDate;

// The getFullYear() Method
const fullYear = new Date();
document.getElementById("full-year").innerHTML=fullYear.getFullYear();

const fullMonth = new Date();
document.getElementById("full-month").innerHTML=fullMonth.getMonth();

const fullDate = new Date();
document.getElementById("full-date").innerHTML=fullDate.getDate();