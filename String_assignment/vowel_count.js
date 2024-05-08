const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    str = str.toLowerCase();
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    
    return count;
  };
  
  // Test case
  const result = countVowels('The quick brown fox');
  console.log(result); // Output: 5
  