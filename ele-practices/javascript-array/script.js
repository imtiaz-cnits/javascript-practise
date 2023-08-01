// Iterating an Array
const numbers = [1, 2, 3, 4, 5];

//using for loop
for (let index = 0; index < numbers.length; index++) {
  console.log(index, numbers[index]);
}

// using for...of loop
for (let num of numbers) {
  console.log(num);
}

// using for...each loop
numbers.forEach(function (num, index) {
  console.log(index, num);
});

// Sort and reversing an array
const srt = [6, 3, , 7, 2, 1, 9];

srt.sort();
console.log(srt);

let developers = [
  { name: "Imtiaz", age: 26 },
  { name: "Rahat", age: 21 },
  { name: "Anika", age: 24 },
];

developers
  .sort(function (d1, d2) {
    if (d1.age > d2.age) return +1;
    if (d1.age === d2.age) return 0;
    if (d1.age < d2.age) return -1;
  })
  .reverse();

console.log(developers);

//Array method - every and some
const numb = [2, 6, 4, -9, 1, 3];

const data = numb.every(function (port) {
  return port > 0;
});

console.log(data);

// Array method - concat and slice
const test1 = [1, 2, 3, 4];
const test2 = [5, 6, 7];

const sum = test1.concat(test2);
console.log(sum);

const test3 = [1, 2, 3, 4, 5, 6, 7, 8];

const sliceArr = test3.slice(3, 6);
console.log(sliceArr);

// Spread operator
const anikaboss = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(...anikaboss);

const hello1 = [1, 2, 3];
const hello2 = [4, 5, 6];

const total = [...hello1, ...hello2];
console.log(total);

// Joining an Array
let ui = [1, 2, 3, 4];

let joinArray = ui.join("-");
console.log(joinArray);

// Spliting an Array/string
let message = "Hi I am Imtiaz";
const arrayMessage = message.split(" ");

console.log(arrayMessage);

// ES6 Features: Map
let newArr = [1, 2, 3, 4, 5];

// const mulByTwo = newArr.map(function (mapFunc) {
//   return mapFunc * 2;
// });

// Using Arrow Function
const mulByTwo = newArr.map((mapFunc) => mapFunc * 2);

console.log(mulByTwo);

// ES6 Features: Filtering an Array
let filArr = [1, 2, 3, 4, 5, 6];

// let onlyOddNumber = [];

// for (let filter of filArr) {
//   if (filter % 2 !== 1) {
//     onlyOddNumber.push(filter);
//   }
// }
// console.log(onlyOddNumber);

const onlyOddNumber = filArr.filter(function (filter) {
  return filter % 2 === 1;
});
console.log(onlyOddNumber);

// ES6 Features: Reduce
let math = [10, 20, 40];

let mathsum = 0;

for (let num0 of math) {
  mathsum = mathsum + num0;
}

console.log(mathsum);

const nums = math.reduce(function (mathsum, math) {
  return mathsum + math;
}, 0);

console.log(nums);
