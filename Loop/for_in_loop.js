//**JavaScript for-in loop is used to iterate over the properties of an object. JavaScript for-in loop iterates only over those keys of an object which have their enumerable property set to “true”. */


//syntex
// for (let i in obj1) {
//     // Prints all the keys in
//     // obj1 on the console
//     console.log(i);
// }

// const courses = { 
//     Course1: 'JavaScript', 
//     Course2: 'React', 
//     Course3: 'Angular'
// }; 
// let value = ''; 
  
// //using for in loop 
// for (let item in courses) { 
//     value += courses[item] + " "; 
// } 
// console.log(value);

//
// const student = {
//     name: 'pritam',
//     class: 7,
//     age: 12
// }

// //using for...in
// for ( let key in student ) {

//     // display the properties
//     console.log(`${key} => ${student[key]}`);
// }


//for in loop in string
const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}



// Eta ami google theke niyechhi 
let myfamily = ["Lalita","Sudip","Mahua","Mousom"];

for(let i in myfamily){
    console.log(i);
}

/*var names = {
    Name : "Ali",
    Age : 25,
    Merital : "Single"
};

for(let i in names){
    console.log(i + ":" + names[i]);
}*/