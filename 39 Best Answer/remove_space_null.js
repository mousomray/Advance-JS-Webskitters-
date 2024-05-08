const removes = arr => arr.filter(Boolean);

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const result = removes(sampleArray);

console.log(result); // Output: [15, -22, 47]
