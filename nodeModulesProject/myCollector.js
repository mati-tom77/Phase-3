// question 3
// Step a: Import functions from "myFirst" and "mySecond" modules
const { myMultiplier: myMultiplier1 } = require("./myFirst");
const { myMultiplier: myMultiplier2 } = require("./mySecond");
// // Step b: Pass the value 5 to both functions
// const result1 = myMultiplier1(5);
// const result2 = myMultiplier2(5);

// // Step c: Log the results on the console
// console.log(`Result from myFirst module: ${result1}`);
// console.log(`Result from mySecond module: ${result2}`);

// question 4

const fs = require('fs');

const number = 16;

const result1 = myMultiplier1(number);
const result2 = myMultiplier2(number);

const filePath = 'results.txt';

fs.appendFileSync(filePath, `The value of ${number} when passed through the myMultiplier1 function is ${result1}.\n`);
fs.appendFileSync(filePath, `The value of ${number} when passed through the myMultiplier2 function is ${result2}.\n`);



