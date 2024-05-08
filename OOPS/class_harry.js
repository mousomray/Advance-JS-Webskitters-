class railwayform{
    submit(){
        alert(this.name + ': Your Form submitted for train number : ' + this.trainnumber);
    }
    cancel(){
        alert(this.name + ': Your Form is cancel for train number : ' + this.trainnumber);
    }
    fill(givenname,trainnumber){
        this.name = givenname;
        this.trainnumber = trainnumber;
    }
}

// Create a form for Harry
let harry = new railwayform();

// Fill the form with details
harry.fill("Harry",134564);

// Create a form for Rohan
let rohan1 = new railwayform();
let rohan2 = new(railwayform);

// Fill the form with details
rohan1.fill("Rohan",175634);
rohan2.fill("Rohan",254954);

harry.submit();
rohan1.submit();
rohan2.cancel();