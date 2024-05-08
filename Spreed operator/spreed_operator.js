let myspreed = {
    lan1: 'JS',
    lan2: 'C',
    lan3: 'Python',
    lan4: 'C+',
    lan5: 'C++',
    lan6: 'Ruby'
}

let {lan1, lan2, lan3,...otherparametre} = myspreed;

console.log(lan1);
console.log(lan2);
console.log(lan3);
console.log(otherparametre);