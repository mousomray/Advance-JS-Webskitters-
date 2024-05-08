const findSecondLowestAndGreatest = (arr) => {
  arr.sort((a, b) => a - b);
  const secondLowest = arr[1];
  const secondGreatest = arr[arr.length - 2];
  
  return `${secondLowest},${secondGreatest}`;
};

// Example usage:
const sampleArray = [1, 2, 3, 4, 5];
const result = findSecondLowestAndGreatest(sampleArray);
console.log(result); 
