try {
    let first_number = getValidNumber('Enter first number');
    let second_number;
  
    if (first_number) {
      second_number = getValidNumber('Enter second number');
    }

    let attempts = 0;

    for (let i = 1; i <= 3; i++) {
        operator = prompt('Enter operator: + - * /');
    
        if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
            break;
        } else {
            attempts++;
            if (attempts === 3) {
                alert('You have exceeded the maximum number of attempts. Please learn more about operators and try again later.');
                break;
            }
        }
    }
    
    let result;
    
    switch(operator) {
        case '+':
            result = first_number + second_number;
            console.log(`${first_number} + ${second_number} = ${result}`);
            break;
    
        case '-':
            result = first_number - second_number;
            console.log(`${first_number} - ${second_number} = ${result}`);
            break;
    
        case '*':
            result = first_number * second_number;
            console.log(`${first_number} * ${second_number} = ${result}`);
            break;
    
        case '/':
            result = first_number / second_number;
            console.log(`${first_number} / ${second_number} = ${result}`);
            break;
    
        default:
            console.log('Error: Invalid operator');
            throw new Error('Maximum number of attempts reached');
        
    }
}


catch (err) {
    alert('Program finished: ' + err.message);
}
  
function getValidNumber(promptMessage) {
    let attempts = 0;
    let number;
  
    while (attempts < 3) {
        number = Number(prompt(promptMessage));
            if (!isNaN(number)) {
                return number;
            }

        attempts++;
        alert(`Wrong input ${number} is not a valid number, please enter a number`);
    }
  
    throw new Error('Maximum number of attempts reached');
}





  
  