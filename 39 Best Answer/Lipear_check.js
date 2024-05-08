const startYear = 2000;
const endYear = 2025;
const leapYearsInRange = [];

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYearsInRange.push(year);
    }
}

console.log(leapYearsInRange); // Output: [2000, 2004, 2008, 2012, 2016, 2020, 2024]
