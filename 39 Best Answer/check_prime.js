function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Usage example
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(12)); // Output: false
  console.log(isPrime(29)); // Output: true
  