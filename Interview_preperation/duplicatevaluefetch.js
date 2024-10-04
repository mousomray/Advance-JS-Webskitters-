// Duplicate value fetch
function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }
  
  console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 2]));