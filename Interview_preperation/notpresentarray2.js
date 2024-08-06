function difference(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
}

// Example usage:
const arr1 = [10, 12, 13, 7, 8, 11, 12];
const arr2 = [12, 13, 7, 20, 18, 6, 10];
const result = difference(arr1, arr2);
console.log(result);  // Output: [1, 2, 3]
