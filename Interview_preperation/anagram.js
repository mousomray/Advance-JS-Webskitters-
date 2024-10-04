// Anagram 
const ana = (str1, str2) =>{
    const normalize = str => str.replace(/\s+/g,'').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2)
}

const str1 = "Listen"
const str2 = "Silent"

console.log(ana(str1, str2));