const capitalizeFirstLetter = (str) => {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  };
  
  // Test case
  const result = capitalizeFirstLetter('the quick brown fox');
  console.log(result); // Output: 'The Quick Brown Fox'
  