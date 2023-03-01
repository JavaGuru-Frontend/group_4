// Создать консольный калькулятор
// создать 3 переменный для 1 и 2 числел и математического знака 
// использовать метод promt что бы попросить пользователя ввести перовое число
// результат сохранить в переменную 
// повторить результат для 2 числа и математического знака 
// выполнить вывести результат вычеслений 
// можно использовать if else или конструкцию switch

const number1 = Number(prompt('Введите первое число'))
const math = prompt('Введите математический знак')
const number2 = Number(prompt('Введите второе число'))
if ('+' === math) {
    const res = number1 + number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if ('-' === math) {
    const res = number1 - number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if ('*' === math) {
    const res = number1 * number2;
    alert(`${number1} ${math} ${number2} = ${res}`)
} else if (`/` === math) {
    const res = number1 / number2;
    if (number2 === 0) {
        alert('Нелья делить на нуль')
    } else {
        alert(`${number1} ${math} ${number2} = ${res}`)

    }
}

