const rotateArray = (arr, k) => {
    const n = arr.length;
    k = k % n; // Handle cases where k is greater than the array length
    return arr.slice(-k).concat(arr.slice(0, -k));
};

// Example usage
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
