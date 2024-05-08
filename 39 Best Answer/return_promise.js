// Asynchronous function example
async function exampleAsyncFunction() {
    // Simulating an asynchronous operation with a setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Async operation completed');
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Converting the asynchronous function to return a promise
  function convertToPromise() {
    return new Promise((resolve, reject) => {
      exampleAsyncFunction()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  // Usage example
  convertToPromise()
    .then((result) => {
      console.log(result); // Output: Async operation completed
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  