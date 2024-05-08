
function multiply(num1,num2) {
var num1=parseInt(document.getElementById('first').value);
var num2=parseInt(document.getElementById('second').value);
    var num3=num1*num2;
    document.getElementById('ans').innerHTML=num3
}
function div(num1,num2) {
var num1=parseInt(document.getElementById('first').value);
var num2=parseInt(document.getElementById('second').value);
    var num3=num1/num2;
    document.getElementById('ans').innerHTML=num3
}
function reset()
{
    document.getElementById('first').value=""
    document.getElementById('second').value=""
    document.getElementById('ans').innerHTML=""
}
