function ami(a, b, ...c) {
    let sum = 0;
    for (let i of c) {
        sum += i;
    }
    return a + b + sum;
}

console.log(ami(5, 5, 10, 5)); 
