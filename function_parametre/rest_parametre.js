//**The rest parameter is an improved way to handle function parameters, allowing us to more easily handle various inputs as parameters in a function. */

// function functionname(...parameters)
// {
// statement;
// }


// Without rest parameter
function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3  



// es6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15    


// rest with function and other arguments
function fun(a,b,...c){
    console.log(`${a} ${b}`); 
    console.log(c); 
    console.log(c[0]); 
    console.log(c.length); 
    console.log(c.indexOf('Lionel')); 
}
fun('Mukul','Latiyan','Lionel','Messi','Barcelona');