// Creating a promise
let promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      let data = 'This is the resolved data!';
      
      // reject("Your data is rejected") ---> [If you want to reject data]
      
      // Resolve the promise with the data
      resolve(data);
      
    },2000); // Simulating a delay of 2 seconds
  });
  
  // Using the promise
  promise.then((result) => {
    // Success callback when the promise is resolved
    console.log('Resolved:', result);
  }).catch((error) => {
    // Error callback if the promise is rejected
    console.log('Rejected:', error);
  });

  
  

  