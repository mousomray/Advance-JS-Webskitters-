let array = [1, 2, 3, 1, 2, 4, 2, 1];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] && !duplicates.includes(array[i])) {
      duplicates.push(array[i]);
      break; 
    }
  }
}

console.log(duplicates); 
