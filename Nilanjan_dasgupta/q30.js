function mergeArray(array1,array2)
{
   
    array3=[...new Set(array1.concat(array2))]
    return array3;


}
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
var array3=[]

console.log(mergeArray(array1,array2));