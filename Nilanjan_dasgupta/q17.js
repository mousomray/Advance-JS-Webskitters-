let num=154
let count=0
let num1=num
let ams=num1
let sum=0
while (num!=0) {
    num=parseInt(num/10)
    count++;
}
while(num1!=0)
{
    let rem=num1%10
     sum=sum+Math.pow(rem,count)
    num1=parseInt(num1/10)
}
if(ams==sum)
{
    console.log("Amstrong");
}
else{
    console.log("Not amstrong");
}