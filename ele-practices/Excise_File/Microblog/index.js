// localStorage.setItem("name", "Imtiaz");
// localStorage.setItem("age", 26);

// const age = localStorage.getItem("age");
// console.log(age);

// localStorage.setItem("name", "Anika");
// console.log(localStorage.getItem("name"));

// // // // Stringify and Parsing Data from Local Storage // // // //
const users = [
  { name: "Imtiaz", age: 26 },
  { name: "Anika", age: 24 },
];

localStorage.setItem("users", JSON.stringify(users));
const userFrom = localStorage.getItem("users");

console.log(JSON.parse(userFrom));
