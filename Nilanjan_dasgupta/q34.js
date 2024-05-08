// function demo()
// {
//     return new Promise((relosve,reject)=>
//     {
//         setTimeout(()=>{
//             const error=true
//             if (error)
//             {
//                 relosve();
//                 console.log("thanks for resolve my problem");
//             }
//             else{
//                 reject();
//             }
//         },2000)
//     })

// }
// async function convert()
// {
//     console.log("waiting.....");
//     let result=await demo()
// }
// convert()
// async function convert()
// {
//     return "nilanjan"
// }
// console.log(convert())
async function convert()
{
    let result= await ("nilanjan")
    return result
}
console.log(convert())