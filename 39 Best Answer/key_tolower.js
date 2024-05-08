function convertKeysToLowerCase(obj) {
    const newObj = {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
    return newObj;
  }
  
  // Example object
  const originalObject = {
    Name: 'John',
    Age: 30,
    Country: 'USA'
  };
  
  // Creating a new object with lowercase keys
  const newObj = convertKeysToLowerCase(originalObject);
  console.log(newObj);
  