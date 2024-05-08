//The apply method in JavaScript is used to invoke a function while setting the this value and passing an array (or array-like object) as the arguments to that function.

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

// Apply Mathod
console.log(person1.fullname.apply(person2,['Pune','India']));


// apply method using chatgpt code
function ami(city,desh){
    return console.log("My name is " + this.name + " I stay in " + city + " My country is " + desh );
}

let kaka = {name:'Mousom'}

ami.apply(kaka,["Kolkata","India"]);
