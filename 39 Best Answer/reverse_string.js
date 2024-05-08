// Print reverse String 

let reversestring = (n) =>{
    return String(n).split('').reverse().join('');
}

let result = reversestring("Hello World");
console.log(result);