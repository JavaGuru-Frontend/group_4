const buttons = document.getElementsByClassName('btn');
const output = document.getElementById('output');
const historyElement = document.getElementById('history');

let equation = '';
let id = '';
let type = '';
// let mathCount = localStorage.length || 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {

        id = buttons[i].getAttribute('data-id');
        type = buttons[i].getAttribute('data-type');

        switch (type) {

            case 'operator':
                operatorBtn();
                break;

            case 'number':
                numberBtn();
                break;

            case 'equal':
                equalBtn();
                break;

            case "clear":
                clearBtn();
                break;

            default:
                DefaultBtn();
                break;
        }
    }, false);
}

let saveToLocalStorage = (equation) => {
    //   localStorage.setItem(`key${mathCount}`, `${equation} = ${eval(equation)}`);
    let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    history.push({ equation: `${equation} = ${eval(equation)}` });
    localStorage.setItem(`calculatorHistory`, JSON.stringify(history));
}

let loadFromLocalStorage = () => {
    historyElement.innerHTML = '';

let history = JSON.parse(localStorage.getItem('calculatorHistory'));
history.forEach(element => {
    historyElement.innerHTML += `<li>${element.equation}</li>`;
});
/*
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            historyElement.innerHTML += localStorage.getItem(`key${i}`);
        }
    }
    */
}

let operatorBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

let numberBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

let equalBtn = () => {
    //   mathCount = mathCount + 1;
    saveToLocalStorage(equation);
    equation = eval(equation);
    output.innerHTML = eval(equation);
    loadFromLocalStorage();
}

let clearBtn = () => {
    equation = '';
    output.innerHTML = '0';
}

let DefaultBtn = () => {
    equation += id;
    output.innerHTML = equation;
}

document.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute('data-id');

            if (id === event.key) {
                buttons[i].click();
            }
        }
    } else {
        document.getElementById('equal').click();
    }
})

loadFromLocalStorage();