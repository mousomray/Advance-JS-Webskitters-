// Common value between Two Array

function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  
  console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));