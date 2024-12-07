const arr = [6, 4, 7, 1, 56];
const arrStr = ["vv", "d", "a", "b"];

console.log(arr);

const arrAsc = arr.sort();

console.log(arr);
console.log(arrAsc);

// no sorting for strings
console.log(arrStr);

console.log(arr.sort((a, b) => b - a));

class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

const student1 = new Student("John", "Smith", 25);
const student2 = new Student("Mary", "Joe", 27);
const student3 = new Student("Greg", "Math", 32);
const student4 = new Student("Stew", "Jenkins", 45);

const students = [student1, student2, student3, student4];

console.log(students.sort((student1, student2) => student2.age - student1.age));

console.log("---------------");
console.log(students.sort((student1, student2) =>  student1.age - student2.age));