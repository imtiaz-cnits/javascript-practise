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
