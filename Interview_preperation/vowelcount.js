function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;

    const vowels = 'aeiou';

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);
