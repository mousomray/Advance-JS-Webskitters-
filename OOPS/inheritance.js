// Parent class 
class Bike 
{
    constructor()
    {
        this.company = "Honda";
    }
}

// Child class
class Vechicle extends Bike {
    constructor(name,price){
        super();
        this.name = name;
        this.price = price;
    }
}
let v = new Vechicle("Shine","70000");
console.log(v.company + " " + v.name + " " + v.price);