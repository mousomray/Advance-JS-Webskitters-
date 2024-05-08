function isPrime(num)
{
    for( i=2;i<num;i++)
    {
        if(num%i==0){
            console.log("Number is not Prime");
            break;
        }
    }
    if(i==num)
    console.log("Number is prime");

}
isPrime(7)