function addition(...add) {
    let sum = 0;
    for (let i = 0; i < add.length; i++) {
        sum += add[i];
    }
    return sum;
}


console.log(addition(5, 10, 15));
console.log(addition(2, 4, 6, 8));
console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 
