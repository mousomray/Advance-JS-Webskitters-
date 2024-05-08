function rev(str)
{
    let main=str
   const arrayString=str.split("")
   const reverseArray=arrayString.reverse()
   const ans=reverseArray.join("")
   if(ans==str)
   console.log("String is palindrome");
   else
   console.log("String is not palindrome");
}
let names="madam"
rev(names)