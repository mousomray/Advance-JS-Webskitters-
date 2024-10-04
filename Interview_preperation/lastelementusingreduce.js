// Print last element using reduce
const arraya = [1, 2, 3, 4, 5];

const lastElement = arraya.reduce((_, current) => current);

console.log(lastElement); // Output: 5