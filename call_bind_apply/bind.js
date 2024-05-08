// bind in JavaScript creates a new function that, when called, has its this keyword set to a specific value, with optional preset arguments.

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

// bind Method 
let result = person1.fullname.bind(person2,'Pune','India');
console.log(result());


// call method using chatgpt code
function ami(city,desh){
    return console.log("My name is " + this.name + " I stay in " + city + " My country is " + desh );
}

let kaka = {name:'Mousom'}

let chatbind = ami.bind(kaka,"Kolkata","India");
chatbind();