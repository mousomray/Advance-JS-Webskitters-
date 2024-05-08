const arrayWithDuplicates = ["apple", "Banana", "apple", "orange", "banana"];
const uniqueArray = arrayWithDuplicates.filter((value, index, self) => self.indexOf(value.toLowerCase()) === index);

console.log(uniqueArray); // Output: ["apple", "Banana", "orange"]
