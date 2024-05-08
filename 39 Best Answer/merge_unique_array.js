const merge_array = (array1, array2) => {
    const mergedArray = [...new Set([...array1, ...array2])];
    return mergedArray;
  };
  
  const array1 = [1, 2, 3];
  const array2 = [2, 30, 1];
  console.log(merge_array(array1, array2));
  