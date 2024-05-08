function rev_num(num)
{
   let sum=0
    while(num!=0)
    {
        let rem=num%10;
        sum=sum*10+rem;
        num=parseInt(num/10);
    }
    console.log(sum);
}
let number=32243
rev_num(number)