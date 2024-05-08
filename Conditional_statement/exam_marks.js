
// Using If else
/*var marks = 80;

if(marks>=80){
    console.log("Your grade is A");
} else if (marks>=60){
    console.log("Your grade is B");
}else if (marks>=30){
    console.log("Your grade is C");
}else{
    console.log("You are Fail");
}*/

// Using Switch case 
var marks = 80;

switch(true) {
    case marks >= 80 && marks <=100:
        console.log("Your grade is A");
        break;
    case marks >= 60 && marks <=79:
        console.log("Your grade is B");
        break;
    case marks >= 35 && marks <=59:
        console.log("Your grade is C");
        break;
    default:
        console.log("You are Fail");
        break;
}




