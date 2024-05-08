//**Higher-Order Function: A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function. */



const greet = function(name){ 
	return function(m){ 
	
		console.log(`Hi!! ${name}, ${m}`); 
	} 
} 

const greet_message = greet('students'); 
greet_message("Welcome To webskitters")


//example 2

// function greet(name){ 
// 	return `Hi!! ${name} `; 
// } 

// function greet_name(greeting,message,name){ 
// 	console.log(`${greeting(name)} ${message}`); 
// } 

// greet_name(greet,'Welcome To webskitters','JavaScript');