let str = 'The quick brown fox jumps over the lazy dog';
let pattern = /fox/g;
let matches = str.match(pattern);

console.log(matches); // Output: ["fox"]
