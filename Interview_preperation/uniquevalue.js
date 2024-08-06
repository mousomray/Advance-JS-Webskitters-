

const uniquevalue = (value) =>{
    const uvalue = new Set(value)
    return [...uvalue];
}
input = [1, 2, 2, 3, 4, 4, 5]
console.log(uniquevalue(input));
