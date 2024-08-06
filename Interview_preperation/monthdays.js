const daysInMonth = (month) => {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28; // Not accounting for leap years
        default:
            return 'Invalid month';
    }
};

console.log(daysInMonth(2)); // Output: 28
console.log(daysInMonth(4)); // Output: 30
console.log(daysInMonth(7)); // Output: 31
