// The sort() method
const it = ["Software", "Design", "Website", "JavaScript"];
document.getElementById('sort-1').innerHTML=
it;

it.sort();
document.getElementById('sort-2').innerHTML=
it;

// The reverse() method
const sports = ["Cricket", "Football", "Hockey", "Soccer"];
document.getElementById('reverse-1').innerHTML=
sports;
// First Sort
sports.sort();
// Then reverse it
sports.reverse();
document.getElementById('reverse-2').innerHTML=
sports;

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById('num-sort-1').innerHTML=
points;

points.sort(function(a,b) {
    return(a - b);
})
document.getElementById('num-sort-2').innerHTML=
points;

// The Compare Function
const run = [38, 2, 198, 42, 76, 6];
document.getElementById('compare').innerHTML=
run;

function compFunc1() {
    run.sort();
    document.getElementById('compare').innerHTML=
    run;
}

function compFunc2() {
    run.sort(function(a,b){
        return a - b;
    });
    document.getElementById('compare').innerHTML=
    run;
}



