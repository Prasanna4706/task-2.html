// Declare input values using const since they won't change
const num1 = 10;  // Replace with prompt("Enter first number:") for browser input
const num2 = 5;   // Replace with prompt("Enter second number:")

// Use let for variables that will store computed results
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;

// Declare variables for division and modulo, with initial values
let quotient;
let remainder;

// Check for division by zero
if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "Error: Division by zero";
  remainder = "Error: Modulo by zero";
}

// Log the results using clear messages
console.log("Arithmetic Operations:");
console.log(`Sum (${num1} + ${num2}) = ${sum}`);
console.log(`Difference (${num1} - ${num2}) = ${difference}`);
console.log(`Product (${num1} * ${num2}) = ${product}`);
console.log(`Quotient (${num1} / ${num2}) = ${quotient}`);
console.log(`Remainder (${num1} % ${num2}) = ${remainder}`);
