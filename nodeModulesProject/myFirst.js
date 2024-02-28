// // Step a: Log a simple text on the console
console.log("My first module");

// // Step c: Create the myMultiplier function
function myMultiplier(number) {
  return number * 2;
}

// // Step d: Execute the myMultiplier function with the number 4
const result = myMultiplier(4);

// // Step e: Log the result on the console
console.log(result);
// question 1
// // Step f: Export the myMultiplier function
module.exports = {
  myMultiplier
};
// // // Import the necessary modules and functions
// const fs = require("fs");
// const { myMultiplier } = require("./myFirst");
//  const { myMultiplier: myMultiplier2 } = require("./mySecond");

// // // // Call the myMultiplier function from myFirst module and write the result to file
//  const result1 = myMultiplier(14);
// fs.appendFileSync(
//   "results.txt",
//   `The value of 14 when passed through the myMultiplier function is ${result1}.\n`
// );

// Call the myMultiplier function from mySecond module and write the result to file
// const result2 = myMultiplier2(14);
// fs.appendFileSync(
//   "results.txt",
//   `The value of 14 when passed through the myMultiplier function is ${result2}.\n`
// );
