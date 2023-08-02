// Regular Expression

const regExp = /imtiaz/i;

console.log(regExp.test("Hi I am Imtiaz"));

// More methods
const regExpression = /anika/gi;

console.log(regExpression);
console.log(regExpression.source);
console.log(regExpression.exec("My name is anika"));

// More
const str = "Hi my name is Anika Anika Anika";

console.log(str.match(regExpression));
console.log(str.search(regExpression));
console.log(str.replace(regExpression, "Mahad"));
