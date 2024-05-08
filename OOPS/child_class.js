class myclass{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    getdata(){
        console.log("My name is " + this.name + ". Age is " + this.age + ". I stay in " + this.city);
    }
}

class childclass extends myclass{
    constructor(name,age,city){
        super(name,age,city);
    }
    fetchdata(){
        console.log("My name is " + this.name + ". Age is " + this.age + ". I stay in " + this.city);
    }
}

let amarbacha = new childclass('Mousom',23,'Uttarpara');

amarbacha.getdata();
