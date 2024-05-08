var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var most_fre=1
var count=0
var item
for(var i=0;i<arr1.length;i++)
{
    
    for(var j=i;j<arr1.length;j++)
    {
        if(arr1[i]==arr1[j])
        count++;
        if(most_fre<count)
        {
        most_fre=count
        item=arr1[i]
        }
    }
    count=0;
  
}
console.log("Most frequesnt element is "+item+"("+most_fre+"times)");
