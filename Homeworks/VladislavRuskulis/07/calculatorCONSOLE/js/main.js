let number1     = '';
let math        = '';
let number2     = '';


let runApp = () => {
    number1 = Number(prompt('Введите первое число'));
    math = prompt('Введите математический знак');
    number2 = Number(prompt('Введите второе число'));

    if (isNaN(number1) || isNaN(number2)) {
        alert('ERROR')
    } else {

        switch (math) {
            case "+":
                alert(number1 + number2);
                runApp();
                break;

            case "-":
                alert(number1 - number2)
                runApp();
                break;

            case "*":
                alert(number1 * number2)
                runApp();
                break;

            case "/":

                if (number2 !== 0) {
                    alert(number1 / number2);
                }

                runApp();
                break;

            default:
                alert('this operator is not exist');
                runApp();
                break;
        }
    }
}



runApp();






//     if ('+' === math) {
//         const res = number1 + number2;
//         alert(`${number1} ${math} ${number2} = ${res}`)
//     } else if ('-' === math) {
//         const res = number1 - number2;
//         alert(`${number1} ${math} ${number2} = ${res}`)
//     } else if ('*' === math) {
//         const res = number1 * number2;
//         alert(`${number1} ${math} ${number2} = ${res}`)
//     } else if (`/` === math) {
//         const res = number1 / number2;
//         if (number2 === 0) {
//             alert('Нелья делить на нуль')
//         } else {
//             alert(`${number1} ${math} ${number2} = ${res}`)

//         }
//     }
// }
