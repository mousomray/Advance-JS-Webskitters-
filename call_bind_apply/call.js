// The call method in JavaScript is used to invoke a function while explicitly setting the value of this inside that function.

const person1 = {
    fname:'Mousom',
    lname:'Ray',
    fullname:function(hometown,country){
        return this.fname + ' ' + this.lname + ' ' + hometown + ' ' + country;
    }
}

const person2 = {
    fname:'Sudip',
    lname:'Ray',
}

// Call Method 
console.log(person1.fullname.call(person2,'Pune','India'));


// call method using chatgpt code
function ami(city,desh){
    return console.log("My name is " + this.name + " I stay in " + city + " My country is " + desh );
}

let kaka = {name:'Mousom'}

ami.call(kaka,"Kolkata","India");



