// Can you give me some examples of how to define a function within a class in JavaScript? 

class MyClass {
    constructor(name) {
      this.name = name;
    }
  
    
    myfunction() {
      return `Hello, ${this.name}!`;
    }
  }
  
  
  const myObj = new MyClass('Mousom');
  
  
  console.log(myObj.myfunction());
  

