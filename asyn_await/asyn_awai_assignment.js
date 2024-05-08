function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("Function: Your promise has been resolved");
                resolve();
            } else {
                console.log("Function: Your promise has not been resolved");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    });
}

async function execute() {
    try {
        await func1();
        console.log("Mousom: Thanks for resolving");
    } catch (error) {
        console.log("Mousom: Very bad bro. Reason: " + error);
    }
}

execute();
