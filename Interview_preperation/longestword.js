// Longest word
const findLongest = (str) =>{
    return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(findLongest("I am A coadeeeee asasasasassa"));