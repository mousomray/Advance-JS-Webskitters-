const removevowel = (str) =>{
    return str.replace(/[aeiou]/ig, '')
}

const input = "Hello, World!";
const result = removevowel(input);
console.log(result);  // Output: "Hll, Wrld!"
