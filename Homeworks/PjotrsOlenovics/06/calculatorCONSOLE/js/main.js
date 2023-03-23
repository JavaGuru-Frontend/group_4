let firstNumber = prompt("Введите первое число");
let secondNumber = prompt("Введите второе число");
let operator = prompt("Введите математический знак (+, -, *, /)");

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

let result;
switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    console.log("Ошибка: неверный знак операции");
    break;
}
console.log(`Результат: ${result}`);