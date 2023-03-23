const output = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");

let currentNumber = "";
let operator = "";
let previousNumber = "";
let result = "";

function addNumber(number) {
  currentNumber += number;
  output.innerHTML = currentNumber;
}

function selectOperator(selectedOperator) {
  operator = selectedOperator;
  previousNumber = currentNumber;
  currentNumber = "";
}

function clearAll() {
  currentNumber = "";
  operator = "";
  previousNumber = "";
  output.innerHTML = "0";
}

function calculate() {
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  output.innerHTML = result;
  previousNumber = "";
  currentNumber = result.toString();
}

function handleButtonClick(e) {
  const type = e.target.dataset.type;
  const id = e.target.dataset.id;

  switch (type) {
    case "number":
      addNumber(id);
      break;
    case "operator":
      selectOperator(id);
      break;
    case "equal":
      calculate();
      break;
    case "clear":
      clearAll();
      break;
    case "symbol":

      break;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});