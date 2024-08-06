const myfunction = (myarray) =>{
    return myarray.flat(Infinity);
}

const input = [[1, 2], [3, 4], [5, 6]]

console.log(myfunction(input));