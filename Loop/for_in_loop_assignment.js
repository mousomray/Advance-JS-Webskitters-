const student = {
    id: 1,
    name: "Leanne Graham",
    mobile: 9903419235,
    email: "Sincere@april.biz",
    city: "Kolkata"
}

//console.log(student.city);

let value = "";

// Print Index 
for(let i in student){
  value += i + ' ';
  
}
console.log(value);

// Print Value
for(let i in student){
  value += student[i] + ' ';
  
}
console.log(value);




// Print With Index
for (let i in student) {
    value += student[i] + ' ';
    console.log(`${i} = ${student[i]}`);
}






