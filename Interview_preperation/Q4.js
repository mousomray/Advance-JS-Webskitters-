function filterByProperty(arr, property) {
    return arr.filter(obj => obj.hasOwnProperty(property));
}

const input = [{ a: 1 }, { b: 2 }, { a: 0 }, { c: 3 }, { a: 'yes' }]
    ;
const property = 'a';
const result = filterByProperty(input, property);
console.log(result);  