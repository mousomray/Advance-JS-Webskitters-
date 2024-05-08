// Replace all using / /g (Regular Expression with the global flag ("g" stands for global).

const ami = 'apple orange apple banana apple';
const replacedString = ami.replace(/apple/g, 'cherry');

console.log(replacedString); 