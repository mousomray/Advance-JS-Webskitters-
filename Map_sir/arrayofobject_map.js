let myarr = [
    {Name: "Mousom",Salary: 12000, City:"Uttarpara"},
    {Name: "Rakesh",Salary: 15000, City:"Uttarpara"},
    {Name: "Rana",Salary: 20000, City:"Uttarpara"},
    {Name: "Rabi",Salary: 30000, City:"Uttarpara"},
    {Name: "Rahul",Salary: 25000, City:"Uttarpara"},

]

let newarr = myarr.map((item,key) =>{
    console.log(key,item.Name,item.Salary);
});