async function getResponse(){
    url = "https://jsonplaceholder.typicode.com/users";
    let result= await fetch(url)
    result = await result.json()

    console.log(result);
}

getResponse()