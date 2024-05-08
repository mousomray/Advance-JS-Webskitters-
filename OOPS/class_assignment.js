/* Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */


class person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    personDetails(){
        return(`The name of person is ${this.name}`);
    }
}
// Making object with the help of the constructor
let person1 = new person('Mousom','23','India');
let person2 = new person('Virat','35','India');

console.log(`Person name is ${person1.name} Age is ${person1.age} Country is ${person1.country}`);

console.log(`Person name is ${person2.name} Age is ${person2.age} Country is ${person2.country}`);

