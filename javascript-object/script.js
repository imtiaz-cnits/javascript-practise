// JavaScript Objects
let name = "Anika";
let age = 25;
let hobby = "Gardening";

const girl = {
  name: "Anika",
  age: 25,
  hobby: "Gardening",
};

console.log(girl);

//Dot Notation
console.log(girl.name);
// Brackets Notation
console.log(girl["hobby"]);

// Object Manipulation
const user = {
  name: "Imtiaz",
  age: 26,
  hobby: "Coding",
  isMarried: false,
  address: "Banglabazar",
};

console.log(user);

// ADD (With Dot & Brackets Note)
user.email = "imtiaz.cnits01@gmail.com";
user["Phone"] = 8801788428280;
user["01. Behance"] = "Yes";

// UPDATE
user.isMarried = true;
user.age = user.age + 1;

// DELETE
delete user.address;

//Object Methods and this Keyword
const person = {
  name: "Imtiaz",
  age: 26,
  hobby: "Coding",
  friends: ["Vorosha", "Jony"],
  selectColor: null,
  calculateAge: function () {
    console.log(`Hi I'm Imtiaz, my age is ${this.age}`);
  },
};

console.log(person);
person.calculateAge();

// Traversing Object

const admin = {
  name: "Anika",
  age: 26,
  gender: "female",
  phone: "12345678",
  email: "anika@gmail.com",
};

// Way one
for (let key in admin) {
  console.log(key, admin[key]);
}

//Way two
console.log(Object.keys(admin));
console.log(Object.values(admin));

//Way three
for (let val of Object.values(admin)) {
  console.log(val);
}

// Exercise of Salary Sum
const salaries = {
  imtiaz: 4000,
  rahat: 3000,
  anika: 5000,
  robi: 2000,
};

// Using for...in
let sum = 0;

for (let key in salaries) {
  console.log(key, salaries[key]);
  sum += salaries[key];
}
console.log(sum);

// Using for...of
// console.log(Object.values(salaries));

// for (let val of Object.values(salaries)) {
//   console.log(val);
//   sum += val;
// }
// console.log(sum);

// Cloning an Object
const data = {
  name: "Mahad",
  age: 6,
};

const cloneData = {};
cloneData.name = data.name;
cloneData.age = data.age;

for (let key in data) {
  console.log(key, data[key]);
  cloneData[key] = data[key];
}

// const cloneData = Object.assign({}, data);

console.log(cloneData);
