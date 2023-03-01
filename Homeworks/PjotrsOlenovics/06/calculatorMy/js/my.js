let num1 = parseFloat(prompt("Number 1"));
let num2 = parseFloat(prompt("Number 2"));
let operator = prompt("Choose a math action (+, -, *, /):");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  console.log("Error");
}

console.log(`Result: ${result}`);