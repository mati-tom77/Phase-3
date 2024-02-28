// question 2
// Step a: Create the myMultiplier function
function myMultiplier(number) {
  return number * 3;
}

// Step b: Execute the myMultiplier function with the number 4
const result = myMultiplier(4);

// Step c: Log the result on the console
console.log(result);

// Step d: Export the myMultiplier function
module.exports = {
  myMultiplier
};