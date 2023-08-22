const add = require("./calculator/add");
const sub = require("./calculator/sub");
const mul = require("./calculator/mul");
const div = require("./calculator/div");

// console.log(add(5, 6));
// console.log(sub(13, 6));
// console.log(mul(5, 6));
// console.log(div(12, 6));

const a = parseInt(process.argv[2]);
const oprt = process.argv[3];
const b = parseInt(process.argv[4]);

console.log(a, oprt, b);

if (oprt === "+") {
  console.log(add(a, b));
} else if (oprt === "-") {
  console.log(sub(a, b));
} else if (oprt === "*") {
  console.log(mul(a, b));
} else if (oprt === "/") {
  console.log(div(a, b));
} else {
  console.log("Invalid");
}
