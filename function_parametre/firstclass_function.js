/* First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function. JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object. */

const Arithmetics = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`;
    },
    sub: (a, b) => {
        return `${a} - ${b} = ${a - b}`;
    },
    mul: (a, b) => {
        return `${a} * ${b} = ${a * b}`;
    },
    div: (a, b) => {
        if (b !== 0) return `${a} / ${b} = ${a / b}`;
        return 'Cannot Divide by zero !!';
    }
};

console.log(Arithmetics.add(20, 30)); 



