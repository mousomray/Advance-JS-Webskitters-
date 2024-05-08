//*****Defaults Parameter: The default parameters are used to initialize the named parameters with default values in case, when no value or undefined is passed.  */

//** function Name(paramet1 = value1, paramet2 = value2 .. .) {
    // statements
//} */

// function DefaultParm(num1, num2 = 50) {
//     return num1 * num2;
// }
 
// console.log(DefaultParm(4))
function DefaultParm(...name) {
    return name;
}
 
console.log(DefaultParm(1,12,3,4,5,6,8,7))


// Eta ami google theke niyechi
function greet(name = "Your name"){
    console.log("Hello " + name + " !");
}

greet(); // Run default parametre "Your name"

greet("Gublu"); // Run given parametre