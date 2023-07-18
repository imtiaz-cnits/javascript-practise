// Problem: Grading System
// Take number
// if the mark is in between 80 - 100, print A+
// if the mark is in between 70 - 79, print A
// if the mark is in between 60 - 69, print A-
// if the mark is in between 50 - 59, print B
// if the mark is in between 40 - 49, print C
// if the mark is in between 33 - 39, print D
// if the mark is in between 0 - 32, print F
// also print out the invalid marks

let mark = 310;

if (mark < 0 || mark > 100) {
    console.log("Invalid Marks");
} else if (mark >= 80 && mark <= 100) {
    console.log("A+");
} else if (mark >= 70 && mark <= 79) {
    console.log("A");
} else if (mark >= 60 && mark <= 69) {
    console.log("A-");
} else if (mark >= 50 && mark <= 59) {
    console.log("B");
} else if (mark >= 40 && mark <= 49) {
    console.log("C");
} else if (mark >= 33 && mark <= 39) {
    console.log("D");
} else {
    console.log("F");
};


// Take a Number
// check condition of number > 0
// check condition of number === 0
// check condition of number < 0

let cond = 0;

switch(true) {
    case cond > 0:
        console.log("This is positive number");
        break;

    case cond === 0:
        console.log("This is Zero number");
        break;

    case cond < 0:
        console.log("This is negative number");
        break;
}