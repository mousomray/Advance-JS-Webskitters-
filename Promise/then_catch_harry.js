let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(()=>{
        //console.log("I am a promise and I am fullfilled");
        resolve(true);
       // reject(new Error('I am an Error')); // It will give an error
                
    },2000)
})
p.then((done) => {  // For doing this resolve() area should be show 
    console.log("Your promise is done");
})

/*p.catch((error) =>{  // For doing this reject() area should be show 
    console.log("There is an error so promise is reject");
});*/





