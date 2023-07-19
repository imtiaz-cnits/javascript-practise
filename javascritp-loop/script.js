// for loop

for (let index = 1; index <= 5; index++) {
    console.log("Hi Imtiaz", index);
}


// while loop
let index2 = 1;
while(index2 <=3) {
    console.log("Hi Rahat", index2);
    index2++;
}


//do...while loop
let service = 10;
do {
    console.log('Hi Robi', service);
    service++;
} while(service <= 15);
console.log(service);


//for...in loop
const man = {
    name : 'Imtiaz',
    age : 24
}

for (let key in man) {
    console.log(key, man[key]);
}

let arr = [1,2,3,4,5];
console.log(arr);

for (let indx in arr) {
    console.log(indx, arr[indx]);
}


//for...of loop
let power = [6,7,8,9,0];

for (let act of power) {
    console.log(act);
}


//nested loop
for (let imtiaz = 1; imtiaz <= 3; imtiaz++) {
    for (let anika = 1; anika <= 3; anika++) {
        console.log(imtiaz, anika);
    }
}