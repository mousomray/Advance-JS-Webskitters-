class bike{
    constructor(company){
        this.company = company;
    }
}
class vehcile extends bike{
    constructor(company,name,price){
        super(company);
        this.name = name;
        this.price = price;
    }
}

let v = new vehcile("Honda","Shine",2500);

console.log(v.company + ' ' + v.name + " is my bike its price is " + v.price);