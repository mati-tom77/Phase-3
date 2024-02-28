// question 5
// function random(start, end) {
//   return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// // module.exports = { random };
// // const randomNumberModule = require("./randomNumber");

// const randomNum = random(1,20);
// console.log(randomNum);
// // randomNumber.js

// Function to generate a random number
function random() {
  return Math.random();
}
// Execute the function inside the module
const randomNumber = random();

// Log the variable on the console
console.log(randomNumber);

// Export the module so that it is accessible to other modules
module.exports = {
  random
};



