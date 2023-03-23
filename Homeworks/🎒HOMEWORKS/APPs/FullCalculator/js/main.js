
let output   = document.getElementsByClassName("output")[0];
let equation = "";
let number   = "";
let id       = "";
let type     = "";
let historyList = JSON.parse(localStorage.getItem('calculatorHistory')) || []

let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        id = this.getAttribute("data-id");
        type = this.getAttribute("data-type");

        switch (type) {
            case "clear":
                clear();
                break;

            case "operator":
                operator();
                break;

            case "symbol":
                symbol();
                break;

            case "equal":
                equal();
                break;

            default:
                btnDefault();
                break;
        }
    }, false);
}

let saveToLocalStorage = (equation) => {

    const historyItem = {
        equation: `${equation} = ${eval(equation)}`
    }

    historyList.push(historyItem)

    localStorage.setItem('calculatorHistory', JSON.stringify(historyList));
}

let loadFromLocalStorage = () => {
    document.getElementById('history').innerHTML = ''

    if (historyList.length > 0) {
        for(let i = 0; i < historyList.length; i++) {
            document.getElementById('history').innerHTML += 
            `
                <li class="history__item">${historyList[i].equation}</li>
            `
        }

        // historyList.forEach(element => {
        //     document.getElementById('history').innerHTML += 
        //     `
        //         <li class="history__item">${element.equation}</li>
        //     `
        // });
    }
}

// clear:
let clear = () => {
    number = "";
    equation = "";
    output.innerHTML = 0;
}


// operator:
let operator = () => {
    equation += id;
    output.innerHTML = number + " " + id;
    number = "";
}


// symbol:
let symbol = () => {
    number += id;
    equation += id;
    output.innerHTML = number;
}


// equal:
let equal = () => {
    number = eval(equation);

    saveToLocalStorage(equation)

    equation = number;
    output.innerHTML = number;

    loadFromLocalStorage();
}


// default:
let btnDefault = () => {
    number += id;
    equation += id;
    output.innerHTML = number;
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode != 13) {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute("data-id");

            if (id == event.key) {
                buttons[i].click();
            }
        }
    }
    else {
        equal();
    }
}, false);

loadFromLocalStorage();