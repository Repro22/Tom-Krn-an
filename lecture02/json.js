// JSON = JS object notation

// object literals or simply objects

// key-value pairs (must be unique)
const student1 = {
    "name" : "John",
    "surname" : "Smith",
    // keys can be numbers or any type
    10 : 34,
    "address" : {
        "street" : "Kolbenova",
        "city" : "Prague"
    }
};

console.log(student1.name);
console.log(student1.address.city);
// I can't
//console.log(student1.10);

console.log(student1["name"]);
console.log(student1["10"]);

const student2 = {
    "name" : "Mary",
    "age" : 27
};

const myStudents = [student1];
myStudents.push(student2);

for (let i = 0; i < myStudents.length; i++) {
    const st = myStudents[i];
    console.log("name: " + st.name);
    console.log("surname: " + st.surname);
}