function swapKeysAndValues(obj) {
    const swapped = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}

// Example usage:
const original = { a: 1, b: 2, c: 3 };
console.log(swapKeysAndValues(original));
// Output: { '1': 'a', '2': 'b', '3': 'c' }
