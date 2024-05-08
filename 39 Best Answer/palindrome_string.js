
// String Palindrome

const isPalindrome = (str) => {
  // Convert the string to lowercase
  const lowerCaseStr = str.toLowerCase();

  // Reverse the string
  const reversedStr = lowerCaseStr.split('').reverse().join('');

  // Check if the string and its reverse are equal
  return lowerCaseStr === reversedStr;
};

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("nurses run")); // Output: true
console.log(isPalindrome("hello")); // Output: false
