const myarr = (input) => {
    return Array.isArray(input);
};

// Example usage:
console.log(myarr([1, 2, 3])); // Output: true
console.log(myarr("Hello")); // Output: false
