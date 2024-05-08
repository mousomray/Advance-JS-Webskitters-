const originalArray = [1, 2, 3, 4, 5, 6];
const numToRemove = 3;

const newArray = originalArray.slice(0, originalArray.length - numToRemove);
console.log(newArray); // Outputs: [1, 2, 3]
