let a = 0;
let b = -1;
let c = 4;
let temp;

if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(c, b, a); 
