function long_sub(str)
{
    
     array_string=str.split(" ")
    max=array_string[0]
    for( i=1;i<array_string.length;i++)
    {
             ele=array_string[i]
             if(max.length<ele.length)
                  max=ele
                  
    }
  console.log(max);
}
 str="Web Development Class"
long_sub(str)