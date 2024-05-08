let gradebook = new Map();

// Adding students and their grades to the gradebook
gradebook.set('Alice', 85);
gradebook.set('Bob', 70);
gradebook.set('Charlie', 92);
gradebook.set('Diana', 78);
gradebook.set('Eva', 88);

// Displaying the list of students and their corresponding grades
console.log("Student Grades:");
gradebook.forEach((grade, student) => {
  console.log(`${student}: ${grade}`);
});

// Calculating the average grade for all students
let totalGrade = 0;
gradebook.forEach((grade) => {
  totalGrade += grade;
});
let averageGrade = totalGrade / gradebook.size;
console.log(`Average Grade: ${averageGrade}`);

// Removing a student from the gradebook
gradebook.delete('Bob');

// Updating the grade of a specific student
gradebook.set('Diana', 82);

// Displaying the updated list of students and their corresponding grades
console.log("\nUpdated Student Grades:");
gradebook.forEach((grade, student) => {
  console.log(`${student}: ${grade}`);
});
