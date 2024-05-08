let myob = {
    name : 'Mousom',
    City : 'Kolkata',
    Age : 22,
    Hobbies : 'Gym'
};

// For using JSON.stringify object convert to string
let myjson = JSON.stringify(myob);

// For using JSON.parse string back to object
let backobject = JSON.parse(myjson);

console.log(backobject);