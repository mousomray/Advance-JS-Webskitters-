// Fibonacci Series
function fibonacci(n) {
    if (n <= 0) {
        return 0; // Base case for F(0)
    } else if (n === 1) {
        return 1; // Base case for F(1)
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}

// Example usage
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(8)); // Output: 55