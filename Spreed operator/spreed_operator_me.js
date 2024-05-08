// Combining arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an array using spread operator
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [7, 8, 9]

// Passing elements of an array as arguments to a function
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
const result = sum(...numbers);
console.log(result); // Output: 60
