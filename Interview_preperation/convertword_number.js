function convertString(input) {
    const numWords = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return input
        .toUpperCase()  // Convert all letters to uppercase
        .replace(/\d/g, match => numWords[match]);  // Replace digits with corresponding words
}

// Example usage:
console.log(convertString("Hello World 123"));  // Output: "HELLO WORLD ONE TWO THREE"
