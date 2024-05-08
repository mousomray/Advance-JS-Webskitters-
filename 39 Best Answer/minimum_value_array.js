function getMinMappedValue(arr, mapFunction) {
    const mappedValues = arr.map(mapFunction);
    return Math.min(...mappedValues);
  }
  
  // Example array and mapping function
  const numbers = [3, 7, 11, 5];
  const square = (num) => num * num;
  
  // Finding the minimum value after mapping each element using the square function
  const minValue = getMinMappedValue(numbers, square);
  console.log('Minimum mapped value:', minValue);
  