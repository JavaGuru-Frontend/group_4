// У нас уже приготовлена вёрстка для калькулятора
// нам необходимо добавить нужные addEventListener на кнопки и добавить функции которые будут вызываться на нажатие этих кнопок
// Результат вычеслений вывести в поле output используя метод innerHTML

let output = document.getElementById("output");

// Add event listeners to all buttons
let buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let buttonType = button.getAttribute("data-type");
    let buttonValue = button.getAttribute("data-id");

// Handling number buttons

    if (buttonType === "number") {
      let currentValue = output.innerHTML;
// zeka ZukulisAigars тебе понятно что делает строчка ниже ?
      output.innerHTML = currentValue === "0" ? buttonValue : currentValue + buttonValue;

// Handling operators

    } else if (buttonType === "operator") {
      output.setAttribute("data-value", output.innerHTML);
      output.setAttribute("data-operator", buttonValue);
      output.innerHTML = "0";

// Get stored values and calculate     

    } else if (buttonType === "equal") {
      let currentValue = output.innerHTML;
      let storedValue = output.getAttribute("data-value");
      let operator = output.getAttribute("data-operator");
      let result;

// Handling operators

      switch (operator) {
        case "+":
          result = Number(storedValue) + Number(currentValue);
          break;
        case "-":
          result = Number(storedValue) - Number(currentValue);
          break;
        case "*":
          result = Number(storedValue) * Number(currentValue);
          break;
        case "/":
          result = Number(storedValue) / Number(currentValue);
          break;
      }

// Output result

      output.innerHTML = result;
      output.removeAttribute("data-value");
      output.removeAttribute("data-operator");
    
// History list

      lethistoryList = document.getElementById("history");
      let calculation = `${storedValue} ${operator} ${currentValue} = ${result}`;
      let calculationItem = document.createElement("li");
      calculationItem.innerHTML = calculation;
// zeka ZukulisAigars посмотри строчку 60
// Need some help here, next line is simly stolen from google, and I have no idea how it works and error in console says that historylist not defined
      historyList.appendChild(calculationItem);
    } else if (buttonType === "clear") {
        
// Clear output

      output.innerHTML = "0";
      output.removeAttribute("data-value");
      output.removeAttribute("data-operator");
    }
  });
});