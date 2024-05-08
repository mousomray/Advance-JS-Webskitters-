for (let i = 100; i <= 999; i++) {
    let sum = 0;
    let temp = i;

    for (let j = temp; j > 0; j = Math.floor(j / 10)) {
        let digit = j % 10;
        sum += digit ** 3;
    }

    if (sum === i) {
        console.log(i + " is an Armstrong number.");
    }
}
