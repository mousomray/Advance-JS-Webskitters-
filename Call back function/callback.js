//**The reduce() method executes a reducer function on each element of the array and returns a single output value. */

//syntex
//**reduce(callbackFn)
//reduce(callbackFn, initialValue) */

//**reduce() Parameters
// The reduce() method takes in:

// callback - The function to execute on each array element (except the first element if no initialValue is provided). It takes in
// accumulator - It accumulates the callback's return values.
// currentValue - The current element being passed from the array.
// initialValue (optional) - A value that will be passed to callback() on first call. If not provided, the first element acts as the accumulator on the first call and callback() won't execute on it. */

//example1

const message = ["JavaScript ", "is ", "scripting language."];

// function to join each string elements
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = message.reduce(joinStrings);
console.log(joinedString);


//example 2


const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21