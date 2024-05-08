
// Print reverse number 

let reversenumber = (n) =>{
    return String(n).split('').reverse().join('');
}

let result = reversenumber(987654321);
console.log(result);