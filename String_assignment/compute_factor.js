const computeFactors = (num) => {
    const factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  };
  
  // Example usage:
  const number = 20;
  const factorsOfNumber = computeFactors(number);
  console.log(`The factors of ${number} are:`, factorsOfNumber);
  