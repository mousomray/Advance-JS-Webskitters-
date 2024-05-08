let text = "This is a sample text. This text will be used to count word frequency. Sample text.";

// Creating a map to store word frequencies
let wordFrequency = new Map();

// Splitting text into words and counting frequencies
text.split(/\s+/).forEach((word) => {
  let cleanedWord = word.toLowerCase().replace(/[^\w\s]/g, '');
  if (wordFrequency.has(cleanedWord)) {
    wordFrequency.set(cleanedWord, wordFrequency.get(cleanedWord) + 1);
  } else {
    wordFrequency.set(cleanedWord, 1);
  }
});

// Displaying word frequencies
console.log("Word Frequencies:");
wordFrequency.forEach((frequency, word) => {
  console.log(`${word}: ${frequency}`);
});

// Finding and displaying the most frequent word(s)
let maxFrequency = 0;
let mostFrequentWords = [];

wordFrequency.forEach((frequency, word) => {
  if (frequency > maxFrequency) {
    maxFrequency = frequency;
    mostFrequentWords = [word];
  } else if (frequency === maxFrequency) {
    mostFrequentWords.push(word);
  }
});

console.log("\nMost Frequent Word(s):");
mostFrequentWords.forEach((word) => {
  console.log(`${word}: ${maxFrequency} times`);
});

// Finding and displaying the least frequent word(s)
let minFrequency = Infinity;
let leastFrequentWords = [];

wordFrequency.forEach((frequency, word) => {
  if (frequency < minFrequency) {
    minFrequency = frequency;
    leastFrequentWords = [word];
  } else if (frequency === minFrequency) {
    leastFrequentWords.push(word);
  }
});

console.log("\nLeast Frequent Word(s):");
leastFrequentWords.forEach((word) => {
  console.log(`${word}: ${minFrequency} times`);
});
