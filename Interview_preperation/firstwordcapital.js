// First word capital
const capitalfirst = (str) =>{
    return str.replace(/\b\w/g, char => char.toUpperCase());
};

console.log(capitalfirst("hello world"));