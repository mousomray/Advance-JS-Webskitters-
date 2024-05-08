/* In this code start and end are Syncronous program and setTimeout() are Asyncronous code 
because setTimeout() will be executed after long time */ 

console.log("Start");
setTimeout(function(){
    console.log("Hey I am good");
},3000);
console.log("End");

