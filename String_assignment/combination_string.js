const generateCombinations = (str) => {
    const combinations = [];
    
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        combinations.push(str.slice(i, j));
      }
    }
    
    return combinations;
  };
  
  // Test case
  const result = generateCombinations('dog');
  console.log(result); // Output: ['d', 'do', 'dog', 'o', 'og', 'g']
  