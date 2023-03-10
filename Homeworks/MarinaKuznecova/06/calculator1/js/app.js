let number1      = '';
let number2      = '';
let operator     = '';

let runApp = () => {
    num1 = Number(prompt('введите число 1:'));
    num2 = Number(prompt('введите число 2:'));
    operator = prompt('введите действие + - * / q');


if ( isNaN(number1) || isNaN(number2) ) {
    console.log('ERROR');
} else {
    switch (operator) {
        case "+":
            console.log(number1 + number2);
               runApp();
               break;

        case "-":
            console.log(number1 - number2);
               runApp();
               break;

        case "*":
            console.log(number1 * number2);
                runApp();
                break;

        case "/":
               if (number2 !== 0) {
            console.log(number1 / number2);
               }
                runApp();
                break;

         case "q": 
                break;


          default:   
            console.log('This operator is not exists');
               runApp();
               break;   

            }
        }
    }

document.addEventListener('keyDown', (event) => {
   console.log(event);
});
runApp();

    

  
  
  
  
