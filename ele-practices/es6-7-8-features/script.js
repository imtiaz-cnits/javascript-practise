// Array and Object Destructuring

function greeting(user) {
  const { name, age, address } = user;
  const { long, lat } = user.address;

  console.log(
    `Hello, I'm ${name} and ${age} years old, from Long ${long}, Lat ${lat}`
  );
}

let user = {
  name: "Imtiaz",
  age: 26,
  address: {
    long: 324.78,
    lat: 457.89,
  },
};

greeting(user);

// ES6 Features: Set
let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(400);
set.add(200);

console.log(set);
console.log(set.size);

set.delete(200);
console.log(set);

for (let el of set) {
  console.log(el);
}

set.forEach((el) => console.log(el));

// set.clear();
console.log(set);

// ES6 Features: Map
let map = new Map();

map.set("Mango", "Aam");
map.set("Banana", "Kela");
map.set("Score", 100);

console.log(map);

for (let ele of map) {
  console.log(ele);
}

console.log(map.has("Score"));

map.delete("Banana");
console.log(map);

console.log(map.keys());
console.log(map.values());

// Weak Set
const ws = new WeakSet();

const object1 = {};
const object2 = {};
const object3 = {};

ws.add(object1);
ws.add(object2);
ws.add(object3);

console.log(ws);

console.log(ws.has(object1));

ws.delete(object3);

// Weak Map
const wm = new WeakMap();

wm.set(object1, 1657);
console.log(wm.has(object1));
console.log(wm.get(object1));

// Module: Import & Exporting
import addNumber from "./main.js";

console.log(addNumber(20, 45));

// Pad Start & Pad End
const mintue = "4";
const hour = "8";

console.log(mintue.padStart(4, "0"));
console.log(mintue.padEnd(3, "2"));

// Trim Start & Tri End
let trimName = "   Imtiaz   ";

console.log(trimName.length);

trimName = trimName.trimStart();
trimName = trimName.trimEnd();
console.log(trimName.length);
