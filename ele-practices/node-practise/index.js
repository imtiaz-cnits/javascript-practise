// Understanding Modules

const { add, sub } = require("./add");

console.log(add(5, 3));
console.log(sub(12, 5));

console.log(__dirname);
console.log(__filename);
