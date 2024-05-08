function singularOrPlural(word, number) {
    // Check if the number is not equal to 1, return plural form, else return singular form
    return number !== 1 ? `${word}s` : word;
  }
  
  // Usage example
  const inputNumber = 5;
  const result = singularOrPlural('apple', inputNumber);
  console.log(`You have ${inputNumber} ${result}.`);
  