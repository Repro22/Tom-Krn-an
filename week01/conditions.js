let x = 201;

// == or ===

if (x == 100) {
    // true
    console.log("equals 100");
} else if (x == 200)  {
    // false
    console.log("not equals 200");
} else {
    // false
    console.log("something else");
}

// && and
x = 2;
if (x >= 1 && x <= 10){
    console.log("x is between 1 and 10");
}

// || or
x = 10;
if (x == 1 || x == 10){
    console.log("x is 1 or 10");
}

// not
if (x != 20){
    console.log("logical not");
}

// == ===
// != !==

const a = 10;
const b = "10";

if (a == b){
    console.log("== works");
}

if (a === b){
    console.log("=== works");
}

if (a === parseInt(b)){
    console.log("=== works conversion 1");
}

if (a.toString() === b){
    console.log("=== works conversion 2");
}



