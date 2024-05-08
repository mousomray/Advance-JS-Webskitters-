const findLongestWord = (str) => {
  const words = str.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
};

// Test case
const result = findLongestWord('Web Development Tutorial');
console.log(result); // Output: 'Development'
