array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
array3=[]
for (i=0;i<array1.length && array2.length;i++)
{
    array3.push(array1[i]+array2[i])
}
if(i==array1.length)
{
    for(x=i;x<array2.length;x++)
    {
        array3.push(array2[x])
    }
}
else{
    for(x=i;x<array1.length;x++)
    {
        array3.push(array1[x])
    }
}

console.log(array3);