//  Simple  creating object
// let myPerson= {
// name: "Abebe",
// Age: 13
// };
// console.log(myPerson);
// // let objectConstuctor = new Object(); to create  constructor function 
// function Person (name, age) {
// this.name = name,
// this.age = age
// }
// console.log(Person);
// Creating 2 objects using the same constructor above
// const myPerson = new Person ("Hana", 43);
// const herPerson = new Person ("Kibrom", 43);
// console.log(myPerson);
// console.log(this);
// // 
// function Student(name, gender) {
// this.name = name
// }
// console.log(Student);
// // Adding “grade” method/prototype for future objects to inherit the method
// Student.prototype.grade = 5;
// console.log(Student);
// var studentOne = new Student();
// console.log(studentOne.grade); // 5
// console.log(Student);
// var studentTwo = new Student();
// console.log(studentTwo.grade); // returns 5
// 
// function Person(name, age) {
// this.name = name;
// this.age = age;
// }
// Person.prototype.showAge = function () {
// return this.age;
// };
// const personOne = new Person("Chala", 33);
// console.log(personOne.showAge()); // returns 33
// function Person(name, age) {
// this.name = name;
// this.age = age;
// }
// Adding showAge method/prototype to Person
// Person.prototype.showAge = function () {
// return this.age;
// };
// function Student(grade, name, age) {
// this.grade = grade;
// Person.call(this, name, age);
// }
// // Make Student inherit Person's properties
// console.log(Student.prototype);
// Student.prototype = Object.create(Person.prototype);
// console.log(Student.prototype);// returns 33
// Declaring a class
// class Person {
// constructor(name, age) {
// this.name = name;
// this.age = age;
// }
// getName() {
// return this.name + " , " + this.age;
// // return `${this.greeting}, ${this.name}!`;
// }
// }
// Creating an instance of the above class
// const personOne = new Person("Almaz", 24);
// console.log(personOne.getName()); // prints Almaz , 24
// // const personOne2 = new Person("Selam", 34);
// // console.log(personOne2.age); // prints 33
// function Person1(name, age) {
// this.name = name;
// }
// Syntax for class inheritance:
// class ChildClassName extends ParentClassName {}
// Example of single class inheritance:
//parent class
// class Person {
// constructor(gender) {
// this.gender = gender;
// }
// }
// // child class inheriting properties of Person by extension
// class Student extends Person {
// showGender() {
// return this.gender;
// }
// }
// //instance of our child class
// const studentOne = new Student("Female");
// Child class accessing the gender property from parent class
// console.log(studentOne.showGender()); // prints Female
// multi-level class
// class Person {
// constructor(gender, rank) {
// this.gender = gender;
// this.rank = rank;
// }
// }
// class Student extends Person {
// showGender() {
// return this.gender;
// }
// }
// class RankedStudent extends Student {
// showRank() {
// return this.rank;
// }
// }
// //instance of our RankedStudent class
// const RankedStudentOne = new Student("Female", "firstRank");
// // Child class accessing the rank property from super/parent class
// console.log(RankedStudentOne.showGender()); // prints firstRank
// using super word
// class CarBrand {
// constructor(brand) {
// this.brand = brand;
// }
// sayCarBrand() {
// return this.brand;
// }
// }
// class CarYear extends CarBrand {
// constructor(brand, year) {
// super(brand);
// this.year = year;
// }
// }
// const carOne = new CarYear("Honda", 2013);
// console.log(carOne.sayCarBrand());// prints honda
// Array Destructuring:
// const students = ["Sisay", "Hunde", "Sara"];
// console.log(students);
// const firstStudent = students[0];
// const secondStudent = students[1];
// const thirdStudent = students[2];
// console.log(firstStudent); // prints Sisay
// console.log(secondStudent); // prints Hunde
// console.log(thirdStudent); // prints Sara
// 
// const students = ["Sisay", "Hunde", "Sara"];
// const [firstStudent, secondStudent, thirdStudent] = students;
// console.log(firstStudent); // prints Sisay
// console.log(secondStudent); // prints Hunde
// console.log(thirdStudent); // prints Sara
// 
// const students = ["Sisay", "Hunde"];
// const [firstStudent, secondStudent, thirdStudent] = students;
// console.log(firstStudent); // prints Sisay
// console.log(secondStudent); // prints Hunde
// console.log(thirdStudent); // prints undefined
// const students = ["Sisay", "Hunde", "Sara"];
// const [firstStudent, secondStudent] = students;
// console.log(firstStudent); // prints Sisay
// console.log(secondStudent); // prints Hunde
// const students = ["Sisay", "Hunde", "Sara"];
// const [firstStudent, , thirdStudent] = students;
// console.log(firstStudent); // prints Sisay
// console.log(thirdStudent); // prints Sara
// function calculate(a, b) {
// const ad = a + b;
// const subt = a - b;
// const mult = a * b;
// const div = a / b;
// return [ad, subt, mult, div];
// }
// const [ad, subt, mult, div] = calculate(24, 8);
// console.log(calculate(24, 8)) // prints [32, 16, 192, 3]
// 
// function getProfile() {
// return ["John", "Doe", ["Red", "Green", "Blue", ["Yellow",
// "Gray"]]];
// }
// let [pro1, pro2, [pro3, pro4, pro5, [pro6, pro7]]] = getProfile();
// console.log(pro3); // prints red
// console.log(pro7); // prints Gray
// 
// let alem = 10,
// balcha = 20;
// console.log(alem); // 10
// console.log(balcha); // 20
// let tempVar = alem;
// alem = balcha;
// balcha = tempVar;
// console.log(alem); // 20

//Parent component
// import React, { Component } from "react";
// import ChildDestructuringProps from "./ChildDestructuringProps";
// class ParentDestructuringProps extends Component {
// render() {
// return (
// <div >
// <ChildDestructuringProps Name="Abebe"
// Age="is 55" />
// </div>
// );
// } 
// }
// export default ParentDestructuringProps;
// // / Child component
// import React, { Component } from "react";
// class ChildDestructuringProps extends Component {
// render() {
// const { Name, Age } = this.props;
// return (
// <h1>{Name} {Age}</h1>
// );
// }
// }
// export default ChildDestructuringProps;