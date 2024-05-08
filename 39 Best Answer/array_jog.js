const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const result = array1.map((num, index) => num + (array2[index] || 0));

console.log(result); // Output: [4, 5, 8, 10, 12, 13]
