// high-order functions
// anonym. functions

const arr = [6, 4, 7, 1, 56];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] + 1);
}

console.log(arr2);

// MAP

const arr3 = arr.map((item) => item + 1);
console.log(arr3);

const arr4 = arr.map((item) => {
    console.log(item);
    return item + 1;
});
console.log(arr4);

// FOREACH

arr.forEach((item) => {
    console.log(item);
    // return is ignored
    return item + 1;
});

// REDUCE

const minValue = arr.reduce((currentMinValue, currentValue) => currentValue < currentMinValue ? currentValue : currentMinValue);
console.log("minValue = " + minValue);

// FILTER
function isEven(n){
    return n % 2 === 0;
}

const arrEven = arr.filter((item) => isEven(item));
console.log("arrEven = " + arrEven);



