var firstNumber = 2;
var secondNumber = 5;

console.log("first number: " + firstNumber); // 2

//pre-increment
console.log("pre-increment: " + ++firstNumber); // 3

//post-increment
console.log("post increment: " + firstNumber++); // 3
console.log("after post-inc: " + firstNumber); // 4

//operations
secondNumber += 8; // 5+8
secondNumber++; // 13+1

console.log("second number: " + secondNumber); // 14

var thirdNumber = 100;

//operations
thirdNumber -= 19; // 100-19
thirdNumber--; // 81-1
console.log("third number: " + thirdNumber); // 80

//post decrement
console.log("post decrement: " + thirdNumber--); // 80
console.log("after post-dec: " + thirdNumber); // 79

//pre decrement
console.log("pre decrement: " + --thirdNumber); // 78
