// JavaScript Objects
let name = 'Anika';
let age = 25;
let hobby = 'Gardening';

const girl = {
    name: 'Anika',
    age: 25,
    hobby: 'Gardening',
}

console.log(girl);

//Dot Notation
console.log(girl.name);
// Brackets Notation
console.log(girl['hobby']);



// Object Manipulation
const user = {
    name: 'Imtiaz',
    age: 26,
    hobby: 'Coding',
    isMarried: false,
    address: 'Banglabazar',
}

console.log(user);

// ADD (With Dot & Brackets Note)
user.email = 'imtiaz.cnits01@gmail.com';
user['Phone'] = 8801788428280;
user['01. Behance'] = 'Yes';

// UPDATE
user.isMarried = true;
user.age = user.age + 1;

// DELETE
delete user.address;



//Object Methods and this Keyword
const person = {
    name: 'Imtiaz',
    age: 26,
    hobby: 'Coding',
    friends: ['Vorosha', 'Jony'],
    selectColor: null,
    calculateAge: function() {
        console.log(`Hi I'm Imtiaz, my age is ${this.age}`);
    }
};

console.log(person);
person.calculateAge();
