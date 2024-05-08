let studentsresult = {
    David: 80,
    Vinoth: 77,
    Divya: 88,
    Ishitha: 95,
    Thomas: 68
};

// Calculate average marks
const marksArray = Object.values(studentsresult); // Fetch value from object
const average = marksArray.reduce((sum, mark) => sum + mark, 0) / marksArray.length;

// Determine grade based on average marks
let grade ='';

if (average < 60) {
    grade = 'F';
} else if (average < 70) {
    grade = 'D';
} else if (average < 80) {
    grade = 'C';
} else if (average < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);

