/* Function to check number as a parameter and check whether its prime or not */ 

const isPrime = number => {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  // Example usage:
  const num = 17;
  if (isPrime(num)) {
    console.log(num + ' is a prime number');
  } else {
    console.log(num + ' is not a prime number');
  }
  