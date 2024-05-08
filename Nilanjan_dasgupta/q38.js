

const Student = { RollNo : 101, Name:"Nilanjan" };
  

function Conv( obj , key )
{
  obj[key.toLowerCase()] = Student[key];
  return Student;
}
  

function ObjKeys( obj) {
  let arr1 = Object.keys(obj);
  let ans = {};
  for(let i of arr1)
  {
  Conv(ans,i);
  
  }
  return ans;
}
  
a = ObjKeys(Student);
console.log(a);