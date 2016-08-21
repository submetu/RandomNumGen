var num1=parseInt(propmpt("Enter number 1"));
var num2=parseInt(prompt("Enter number 2"));

var randNum=Math.floor(Math.random() * (num2-num1+1)) + num1;
alert(randNum);