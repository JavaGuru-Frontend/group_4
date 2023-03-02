let number1 = Number(prompt('введите число 1:'));

if (isNaN(number1)) {
    alert('введите число');
}

let number2 = Number(prompt('введите число 2:'));

if (isNaN(number2)) {
    alert('введите число');
}

let operator = (prompt('введите математический знак + - * /'));

let result;

// if (operator = '+') {
//     result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
// } else if (operator = '-') {
//     result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
// } else if ('*') {
//     result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
// } else if ('/') {
//     result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
// }



switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('введите математический знак + - * /');
        break;
}
