/* In JavaScript, a map is a data structure that stores key-value pairs and allows you to iterate through the keys or values. */

let mymap = new Map(); // Creating a Map 

// Adding key-value pairs to the Map
mymap.set("key1","value1");
mymap.set("key2","value2");
mymap.set("key3","value3");
mymap.set("key4","value4");
mymap.set("key5","value5");

// Getting values from the Map 
console.log(mymap.get('key5')); // Output value 5 
console.log(mymap.get('key2')); // Output value 2 

// Iterating through the Map
mymap.forEach((value,key) => {
    console.log(`${key} = ${value}`);
});

// Checking if a key exists in the Map
console.log(mymap.has('key2')); // Output: true

// Deleting a key from the Map
mymap.delete('key3');

// Checking the size of the Map
console.log(mymap.size); // Output: 2

/* Map value update 
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set('Kucho', 1);
myMap.set('Hello', 2);
myMap.set('World', 3);

// Updating the value for an existing key
if (myMap.has('Kucho')) {
  myMap.set('Kucho', 20); // Overwriting the existing value
} else {
  console.log("Key 'Kucho' does not exist in the Map.");
}

// Displaying the updated Map
console.log("Updated Map:");
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});*/




