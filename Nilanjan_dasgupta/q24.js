const s_year=1996
const e_year=2023
for(i=s_year;i<=e_year;i++)
{
    if(i%4==0 && i%100!=0 ||i%400==0)
        console.log(i);
}