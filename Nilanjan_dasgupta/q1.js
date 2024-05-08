function rev(str)
{
   const arrayString=str.split("")
   const reverseArray=arrayString.reverse()
   const ans=reverseArray.join("")
   console.log(ans)
}
let names="Nilanjan"
rev(names)