const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log(isPrime(7)); // Output: true
console.log(isPrime(14)); // Output: false
