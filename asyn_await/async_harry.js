async function mousom() {

    let kolkataweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degrees");
        }, 5000)
    })

    let bangaloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Degrees");
        }, 9000)
    })
    /*kolkataweather.then(alert); We can get weather alert
    bangaloreweather.then(alert);*/

    console.log("Fetching Kolkata weather please wait");
    let kw = await kolkataweather;
    console.log("The Kolkata weather is " + kw);
    console.log("Fetching Bangalore weather please wait");
    let bw = await bangaloreweather;
    console.log("Bangalore weather is " + bw);
    return [kw, bw];

}

// Create a another function Cherry 
const Cherry = async() => {
    console.log("Hello I am Cherry and I am now waiting");
}

const main1 = async() => {
    console.log("Welcome to weather controll room");
    let m = await mousom();
    let c = await Cherry();
}
main1();




// Then will be apply only for promise and async. async is a type of promise 
/*async function mousom(){
    return 5;
}

mousom().then((x) =>{
    console.log(x);
});*/
