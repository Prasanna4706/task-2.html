const num1 = 10; 
const num2 = 5;  
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient;
let remainder;
if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "Error: Division by zero";
  remainder = "Error: Modulo by zero";
}
console.log("Arithmetic Operations:");
console.log(`Sum (${num1} + ${num2}) = ${sum}`);
console.log(`Difference (${num1} - ${num2}) = ${difference}`);
console.log(`Product (${num1} * ${num2}) = ${product}`);
console.log(`Quotient (${num1} / ${num2}) = ${quotient}`);
console.log(`Remainder (${num1} % ${num2}) = ${remainder}`);
