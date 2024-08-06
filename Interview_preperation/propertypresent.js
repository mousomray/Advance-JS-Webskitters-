const myarrayobject = (arr) => {
    return arr.filter(obj => obj.hasOwnProperty("age"));
}

console.log(myarrayobject([
    { name: "John", age: 30 },
    { name: "Jane", gender: "female" },
    { name: "Bob", age: 25, gender: "male" }
]));

