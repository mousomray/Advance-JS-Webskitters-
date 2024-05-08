console.log('hello');


const user={
  name:"pritam",
  email:"p@gmail.com",

}

const nm="test"

//document.getElementById('d1').innerHTML='my name is '+ "<br/>" + user.name + "my email id is " + user.email;
document.getElementById('d1').innerHTML=`my name is ${user.name} my email id is ${user.email} ${nm}`