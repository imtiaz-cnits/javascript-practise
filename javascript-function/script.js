// Function Basics

// Function Declaration
function aboutMe(name, age) {
  const message = `I'm ${name} and age is ${age}`;
  console.log(message);
}

// Function Call
aboutMe("Imtiaz", 26);
aboutMe("Anika", 25);

// Another method
function calcSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = calcSum(15, 24);
console.log(result);

// Default Parameter
function total(number1, number2 = 35, number3 = 45) {
  let sum = number1 + number2 + number3;
  return sum;
}

console.log(total(12));
