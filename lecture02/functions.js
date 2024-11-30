// this is a pure function (depends on its args only)
function sum(a, b) {
    return a + b;
}

// function with arguments and return statement
function myMath(x, y) {
    const s = sum(x, y);
    return 2 * s;
}

console.log(sum(2, 3));
console.log(myMath(2, 3));

function noArg() {
    console.log("Hello!");
}

noArg();

let externalVariable = 100;

function notPureFunc(a, b){
    return a + b + externalVariable;
}

