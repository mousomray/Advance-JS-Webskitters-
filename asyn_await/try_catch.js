async function ami() {
    let sudip = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Sudip passed the exam');
        }, 2000);
    });

    let mousom = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Mousom failed in exam');
        }, 5000);
    });

    try {
        let s = await sudip;
        console.log(s);
        let m = await mousom;
        // This block will not execute due to rejection in the mousom promise
    } catch (error) {
        console.log(error);
    }
}

ami();
