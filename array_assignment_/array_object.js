// Creating an array of objects
let fruits = [
    { name: 'Apple', color: 'Red' },
    { name: 'Banana', color: 'Yellow' },
    { name: 'Orange', color: 'Orange' }
  ];
  
  // Running a for loop to iterate through the array of objects
  
  // For loop 
  for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i].name + ", Color: " + fruits[i].color);
  }

  // For of loop 
  for(let i of fruits){
    console.log("Fruit: " + i.name + "Color: " + i.color);
  };

  // For in loop 
  for(let i in fruits){
    console.log("Fruit: " + fruits[i].name + ", Color: " + fruits[i].color);
  }


  
   