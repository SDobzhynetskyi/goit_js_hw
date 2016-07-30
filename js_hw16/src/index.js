function Human() {
  this.name;
  this.age;
  this.height;
  this.weight;
  this.sex;
}
var newHuman = new Human();

function Worker() {
  this.company;
  this.position;
  this.salary;
  this.work = function () {
    console.log(this.name + " is working on " + this.company  + " ("+ this.sex+").");
  };
}
var newWorker = new Worker();

function Student() {
  this.placeEducation;
  this.stipend;
  this.study = function () {
    console.log(this.name + " is student of " + this.placeEducation + " ("+ this.sex+").");
  };
}
var newStudent = new Student();

newWorker.__proto__ = newHuman;
newStudent.__proto__ = newHuman;

var newWorker_1 = new Worker();
    newWorker_1.name = "Mike";
    newWorker_1.company = "Yahoo";
    newWorker_1.sex = "Male";
newWorker_1.work();

var newWorker_2 = new Worker();
    newWorker_1.name = "Lola";
    newWorker_1.company = "Microsoft";
    newWorker_1.sex = "Female";
newWorker_1.work();

var newStudent_1 = new Student();
    newStudent_1.name = "Frank";
    newStudent_1.placeEducation = "School";
    newStudent_1.sex = "Male";
newStudent_1.study();

var newStudent_1 = new Student();
    newStudent_1.name = "Elizabeth";
    newStudent_1.placeEducation = "National University";
    newStudent_1.sex = "Female";
newStudent_1.study();
