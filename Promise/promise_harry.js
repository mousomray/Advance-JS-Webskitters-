let promise = new Promise((resolve, reject) => {
    console.log('Hello');
    resolve(56)
})
console.log('Hello one');
setTimeout(function(){
  console.log('Hello Two in 2 seconds');
},2000)

console.log("My name is " + "Hello Three");

console.log(promise);

// Why we use promise 

/* 
1)Fetch Google.com home page ===> alert(google.com homepage done)
2)Fetch Data from the data api 
3)Fetch picture from the server
4)Print Downloading 
5)Rest of the script 
*/