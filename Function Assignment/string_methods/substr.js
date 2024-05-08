/* substr() is similar to slice().
 The difference is that the second parameter specifies the length of the extracted part.*/


let my = "Mousom, Gublu, Ghantu, Laltu";

var part1 = my.substr(15,6);
var part2 = my.substr(15); // End is not define
var part3 = my.substr(-13,6); // Negative count

console.log(part3);

