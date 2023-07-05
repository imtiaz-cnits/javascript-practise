// Array forEach()
const numbers = [45, 4, 9, 16, 25];
let space="";
function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-----------");

    space += value + "<br>";
    space += index + "<br>";
    space += array + "<br>";
    space += "--------------------" + "<br>";
}

    // array method
    numbers.forEach(myFunction);
    document.getElementById('for-each').innerHTML=space;


// Array map()
const points1 = [45, 4, 9, 16, 25];
const points2 = points1.map(arrayMap);

document.getElementById('arr-map').innerHTML=points2;

function arrayMap(value, index, array) {
    return value * 3;
}

// Array filter()
const newFilter = [45, 4, 9, 16, 25, 78, 43];
const over18 = newFilter.filter(filterFunc);

document.getElementById('arr-filter').innerHTML=over18;

function filterFunc(value, index, array) {
    return value > 18;
}

// Array reduce()
const doReduce = [45, 4, 9, 16, 25, 3];
const total = doReduce.reduce(reduceFunc);

document.getElementById('arr-reduce').innerHTML= "The Sum is " + total;

function reduceFunc(total, value, index, array) {
    return total + value;
}

// Array.from()
console.log(Array.from("ABCDEFG"));


