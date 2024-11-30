class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.age = 0;
    }

    getInfo() {
        const ageToPrint = this.age > 0 ? this.age + " years old" : "age is not set";
        return this.name + " " + this.surname + " (" + ageToPrint + ")";
    }
}

const student1 = new Student("John", "Smith");
student1.age = 25;
const student2 = new Student("Mary", "Joe");

const students = [student1, student2];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].getInfo());
}