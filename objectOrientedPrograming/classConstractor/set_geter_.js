class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get getStudentName() {
    return this.name;
  }

  set setStudentName(value) {
    this.name = value;
  }
}
const student = new Student("sagor", 20);
student.setStudentName = "shahin";
console.log(student);
console.log(student.getStudentName);
