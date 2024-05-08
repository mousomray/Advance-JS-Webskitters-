let str1='The Quick BroWn Fox' 
let str2=""
for(let i=0;i<str1.length;i++)
{
   if(str1[i]==str1[i].toUpperCase())
   str2+=str1[i].toLowerCase()
   else
   str2+=str1[i].toUpperCase()
}
console.log(str2);