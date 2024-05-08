const isPerfectNumber = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num && num !== 0;
  };
  
  // Example usage:
  const numberToCheck = 28;
  const result = isPerfectNumber(numberToCheck);
  
  if (result) {
    console.log(`${numberToCheck} is a perfect number.`);
  } else {
    console.log(`${numberToCheck} is not a perfect number.`);
  }
  