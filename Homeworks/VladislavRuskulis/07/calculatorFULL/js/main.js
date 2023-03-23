let output = document.getElementsByClassName('output')[0];
let buttons = document.getElementsByClassName('btn');
let equation = "";
let number = "";
let type = '';
let id = '';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        debugger;
        type = this.getAttribute('data-type');
        id = this.getAttribute('data-id');

        switch (type) {
            case 'operator':
                operator();
                break;

            case 'number':
                numberClick();
                break;

            case 'equal':
                equal();
                break;

            case 'clear':
                clear();
                break;

            case 'symbol':
                symbol();
                break;

            default:
                break;
        }
    });

}

document.addEventListener('keydown', function (event) {
    const keyBackSpaceCode = 8;
    if (event.keyCode === keyBackSpaceCode) {
        clear();
    }
});


let operator = () => {
    equation += id;
    output.innerHTML = number + "" + id;
    number = "";
}

let numberClick = () => {
    number += id;
    equation += id;
    output.innerHTML = number;
}


let equal = () => {
    output.innerHTML = eval(equation);
    number = eval(equation);
    equation = number;
}

let clear = () => {
    number = "";
    equation = "";
    output.innerHTML = 0;
}

let symbol = () => {
    number += id;
    equation += id;
    output.innerHTML = number;
}

document.addEventListener('keyup', (event) => {
    if (event.key != "Enter") {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute("data-id");

            if (id === event.key) {
                buttons[i].click();
            }
        }
    }
    else {
        equal();
    }
})


