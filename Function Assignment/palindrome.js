function mypali(number){
    const mynum = number.toString();
    const revnum = mynum.split('').reverse().join('');

    if(mynum === revnum){
        return console.log(number + " Is a palindrome number");
    }else{
        return console.log(number + " Is not a palindrome number");
    }
   
}
mypali(220);