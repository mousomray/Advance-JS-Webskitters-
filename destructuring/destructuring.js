let objects = {
    Name: "Mousom",
    Age: 21,
    City: "Kolkata", 
    Sports: "Cricket"
}

// Print Normally 
console.log(objects.City);

// Print with Desstructuring 

let {Name, Age, City, Sports} = objects;

console.log(Age);