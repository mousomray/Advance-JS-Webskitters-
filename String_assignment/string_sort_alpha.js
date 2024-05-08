//String set alphabetically 

const sortStringAlphabetically = (str) => {
    return str.split('').sort().join('');
  };
  
  // Test case
  const result = sortStringAlphabetically('webmaster');
  console.log(result); // Output: 'abeemrstw'
  