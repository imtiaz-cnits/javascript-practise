// JavaScript Objects

let person = {
  name: "Imtiaz",
  age: 26,
  isMarried: true,

  homeAddress: {
    long: 46.34,
    lat: 34.9,
  },

  friends: ["Rahat", "Robi", "Vorosha"],
};

console.log(person);
console.log(person.isMarried);
console.log(person.homeAddress.long);
console.log(person.friends[1]);

// JS Template Literals
let name = "Imtiaz";

console.log(`My Name is ${name}`);

// Swap two numbers
let apple = 10;
let orange = 20;

let temp = apple;
apple = orange;
orange = temp;

console.log(apple, orange);

console.log(apple);

//if else condition
let number = 0;

if (number > 0) {
  console.log("This is a positive number");
} else if (number < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is Zero Number");
}

//switch condition
let color = "red";

switch (color) {
  case "black":
    console.log("This is black color");
    break;

  case "white":
    console.log("This is white color");
    break;

  case "red":
    console.log("This is red color");
    break;
}

//ternary operator
let point1 = 30;
let point2 = 18;

let maxNum = point1 > point2 ? point1 : point2;

console.log(maxNum);


//Problem FizzBuzz
//Take a number
//If it is divisible by 3, then print Fizz
//If it is divisible by 5, then print Buzz
//If it is divisible by 3 & 5, then print FizzBuzz
//otherwise print nothing

let put = 15;

// if (put % 3 === 0 && put % 5 === 0){
// console.log('FizzBuzz');
// } else if (put % 3 === 0) {
// console.log('Fizz');
// } else if (put % 5 === 0) {
//   console.log('Buzz');
// } else {
//   console.log('Nothing');
// };

//FizzBuzz with Ternary operator

console.log(
  put % 3 === 0 && put % 5 === 0
  ? "FizzBuzz"
  : put % 3 === 0
  ? "Fizz"
  : put % 5 === 0
  ? "Buzz"
  : "Nothing"

  );

