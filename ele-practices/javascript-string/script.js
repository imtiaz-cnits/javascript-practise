//string method - charAt, toUpperCase, toLowerCase, includes,
//startsWith, endsWith, search, indexOf, lastIndexOf

let id = 'Hi my Name is Imtiaz';

console.log(id.charAt());
console.log(id.toUpperCase());
console.log(id.toLowerCase());
console.log(id.includes('Imtiaz'));
console.log(id.startsWith('is'));
console.log(id.endsWith('z'));
console.log(id.search('Name'));
console.log(id.indexOf('my'));
console.log(id.lastIndexOf('is'));

// toString
let num1 = [1,2,3];

console.log(typeof num1.toString());

//concat
let set1 = 'Hi';
let set2 = ' My Name is';
let set3 = ' Anika.';

let set = set1.concat(set2,set3);
console.log(set);

//split
let message = "Hello world! How Are You?";

console.log(message.split(' '));

//slice
let fruit = "Let's cut Orange Now";

console.log(fruit.slice(0,5));
console.log(fruit.slice(-10,-1));

//subString
console.log(fruit.substring(3,8));

//substr
console.log(fruit.substr(6, 14));