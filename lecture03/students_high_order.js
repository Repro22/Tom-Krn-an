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

const younger30 = students.filter((student) => student.age <= 30);
const younger40 = students.filter((student) => student.age <= 40);
const younger50 = students.filter((student) => student.age <= 50);

console.log(younger30);
console.log(younger40);
console.log(younger50);
console.log(students);

// students with max age
const studentMA = students.reduce((studentWithMaxAge, currentStudent) => currentStudent.age > studentWithMaxAge.age ? currentStudent : studentWithMaxAge);
console.log("name = " + studentMA.name + "; maxAge =" + studentMA.age);