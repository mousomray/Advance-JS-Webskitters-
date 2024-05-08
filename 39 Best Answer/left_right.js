// Left-to-right function composition for asynchronous functions
const composeAsync = (...fns) => async (initialValue) => {
    return fns.reduce(async (acc, fn) => {
      return fn(await acc);
    }, initialValue);
  };
  
  // Example asynchronous functions
  const asyncDouble = async (x) => {
    return x * 2;
  };
  
  const asyncAddFive = async (x) => {
    return x + 5;
  };
  
  const asyncSquare = async (x) => {
    return x * x;
  };
  
  // Usage example
  const composedAsyncFunctions = composeAsync(asyncDouble, asyncAddFive, asyncSquare);
  
  const initialValue = 3; // Initial value
  
  composedAsyncFunctions(initialValue)
    .then((result) => {
      console.log('Result:', result); // Output: Result: 56 (3 * 3 = 9, 9 + 5 = 14, 14 * 2 = 28)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  