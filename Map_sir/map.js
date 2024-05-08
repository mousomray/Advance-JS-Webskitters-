/* The map() method of Array instances creates a new array populated with the calling a provided function on every element in the calling array. */

let numbers = [2,4,6,8,10];

// function to return the square of a number
function square(number){
    return number * number;
}

let square_numbers = numbers.map(square);
console.log(square_numbers);