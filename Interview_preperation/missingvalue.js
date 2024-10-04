// Calculate missing value
const missing = (arr) =>{
    const n = arr.length + 1;
    const total = (n * (n + 1)) / 2;
    const arrsum = arr.reduce((sum,num) => sum + num, 0);
    return total - arrsum;
}

const array = [1,2,4,5];

console.log(missing(array));