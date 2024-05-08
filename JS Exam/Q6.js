let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let counts = {};
let maxCount = 0;
let frequentItem;

for (let i = 0; i < arr1.length; i++) {
  let currentItem = arr1[i];
  if (counts[currentItem] === undefined) {
    counts[currentItem] = 1;
  } else {
    counts[currentItem]++;
  }
  if (counts[currentItem] > maxCount) {
    maxCount = counts[currentItem];
    frequentItem = currentItem;
  }
}

let result = `${frequentItem} ( ${maxCount} times )`;
console.log("Sample Output:", result);
