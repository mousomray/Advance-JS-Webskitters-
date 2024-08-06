const ami = (kaka) => {
    return kaka
        .split(' ').map(word => word.split('').reverse().join('')).join(' '); // Join the reversed words back into a string
}

console.log(ami("Hello World"));  // Output: "olleH dlroW"
