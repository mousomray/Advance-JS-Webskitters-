function resolveAfter25seconds() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve('resolved');
        },2000);
    })
}

async function asynccall(){
    console.log('Calling');
    const result = await resolveAfter25seconds()
    console.log(result);
}
asynccall();