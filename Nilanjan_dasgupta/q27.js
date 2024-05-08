const array=[1,2,4,2,5,5,5]
const duplicate=[]
for(let i=0;i<array.length;i++)
{
    for(j=i+1;j<array.length;j++){
    if(array[i]==array[j])
    duplicate.push(array[i])
}
}
console.log(duplicate);