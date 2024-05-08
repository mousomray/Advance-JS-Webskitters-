// Removing without popping 

/*// Using splice 
let array = [1, 2, 3, 4, 5];
let indexToRemove = 3; // Index of the element you want to remove

// Remove the element at the specified index without using pop()
if (indexToRemove >= 0 && indexToRemove < array.length) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]*/

// Using Filter 
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3; // Element you want to remove

// Remove the specified element without using pop()
array = array.filter(item => item !== elementToRemove);

console.log(array); // Output: [1, 2, 4, 5]

