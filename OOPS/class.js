// Define class using es6 

// Parent class
class vehicle{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return(`The name of bike is ${this.name}`);
    }
}
// Making object with the help of the constructor
let bike1 = new vehicle('Hayabuzs','Suzuki','1340cc');

// Normally Run 
console.log(`bike name ${bike1.name} company name is ${bike1.maker} engine ${bike1.engine}`);

// Run using Function
console.log(bike1.getDetails());




/* 
1) class 
2) object 
3) inheritance 
4) this key word 
*/