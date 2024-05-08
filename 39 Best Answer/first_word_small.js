const swapCase = str => {
    let swapped = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        swapped += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }
    return swapped;
};

const inputString = 'My name is Mousom Ray';
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: 'tHE qUICK bROWN fOX'
