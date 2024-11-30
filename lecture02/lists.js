// arrays, lists, collections, vectors, sets

// myColl is a variable that contains this collection. Collection is OBJECT
const myColl = [1, 2, "Hello", false];

// get number of elements
console.log(myColl.length);

// get Nth element
// access by index. Started with 0 !. First element has index = 0;
console.log(myColl[2]);

// change Nth element
myColl[2] = myColl[2] + ", World!";
console.log(myColl[2]);

// add elements
myColl.push("new item");

// get the last element in a collection
console.log(myColl[myColl.length - 1]);

