// The replace() method replaces a specified value with another value in a string:

/* The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

replace() method is case sensitive .

By default, the replace() method replaces only the first match:
*/


// Normal example of replace() 
var mystring = "I love to play cricket";
var myreplace = mystring.replace("cricket","football");

// Using replace with case sensitive (use a regular expression with an /i flag (insensitive))
var hobby = "My hobies is gaming";
var changes = hobby.replace(/GAMING/i,"playing");

// Change all matches ( use a regular expression with a /g flag (global match))
var ami = "I am a student of student"
//var c = ami.replace("student","teacher"); // Change will be first student 
var c = ami.replace(/student/g,"teacher"); // change will all students




let a = "I am a player of player"
let b = a.replace("player","student");
console.log(b);