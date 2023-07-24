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

// Function Expression
const calcSumExp = function (numb1, numb2) {
  let sum1 = numb1 + numb2;
  return sum1;
};

console.log(calcSumExp(40, 70));

// Arrow Function 01
const calcSumArr = (numbe1, numbe2) => numbe1 + numbe2;
console.log(calcSumArr(50, 80));

// Arrow Function 02
const mulSumArr = (point1) => point1 * 2;
console.log(mulSumArr(8));

// Rest Parameter
function multiply(...args) {
  console.log(args);

  let mulp = 1;
  for (let total of args) {
    mulp = mulp * total;
  }
  return mulp;
}

console.log(multiply(1, 2, 3, 4, 5, 6, 8));
