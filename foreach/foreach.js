/*The forEach loop in JavaScript is a method used to iterate over elements of an array, object, or Map and execute a provided function once for each element.*/

// foreach with array 
let numbers = [1,2,3,4,5];

numbers.forEach((amarboyas) => {
    console.log(amarboyas);
  });


// Using forEach with an object (Note: not a direct method for objects, using Object.keys)
let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
  };
  
  Object.keys(person).forEach((key) => {
    console.log(`${key}: ${person[key]}`);
  });

  // Using forEach with Map 

  let mymap = new Map();

  mymap.set("Virat",50);
  mymap.set("Rohit",27);
  mymap.set("Gill",30);

  mymap.forEach((value,key) =>{
    console.log(`${key} : ${value}`);
  });

  




 


