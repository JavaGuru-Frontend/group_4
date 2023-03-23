
let userForm = document.getElementById("user-form");
let formInputs = Array.from(userForm.elements);


const validationRules = {
    speciality: (value) => {
        let isValid = Boolean(value);
        return isValid
    },
    firstname: (value) => {
        let regEx = /[A-Z]\w+/;
        let isValid = regEx.test(value);

        return isValid
    },
    poNumber: (value) => {
        let isValid = Boolean(value);

        return isValid
    },
    poPattern: (value, country) => {
        let isValid;
        if(value) {
            const regEx = {
                lv: /^(LV-)?\d{4}$/,
                lt: /^(LT-)?\d{4}$/,
                ee: /^(EE-)?\d{4}$/,
            };
            isValid = regEx[country].test(value);
        } else {
            isValid = true;
        }

        return isValid
    }
}

const validateField = (event) => {
    let inputField = event.target;
    
    switch(inputField.name) {
        case "speciality":
            handleValidity(inputField, "Speciality field must contain a value.");
            break;
        case "firstname":
            handleValidity(inputField, "Firstname must start with a capital letter.");
            break;
        case "poNumber":
            handleValidity(inputField, "PO number field must contain value.");
            handlePoValidity("Wrong format PO number for selected country");
            break;
        case "country":
            handlePoValidity("Wrong format PO number for selected country");
            break;
        default:
            console.log("Not matching input field validation case found. Make sure the input element name attribute has correct value.");
            break;
    }
}

const isValid = (inputField) => {
    return validationRules[inputField.name](inputField.value)
}


const handleValidity = (inputField, errorMsg) => {
    if(isValid(inputField)) {
        setFieldValid(inputField);
    } else {
        setFieldInvalid(inputField, errorMsg);
    }
}


const handlePoValidity = (errorMsg) => {
    const poField = document.getElementById("po-number");
    const countryField = document.getElementById("country");

    if(validationRules.poPattern(poField.value, countryField.value)) {
        setFieldValid(poField);
    } else {
        setFieldInvalid(poField, errorMsg);
    }
}

const setFieldValid = (inputField) => {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");

    inputField.setCustomValidity("");
}

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
    inputField.setCustomValidity(errorMsg);

    inputField.reportValidity();
}

const resetErrorState = (event) => {
    let inputField = event.target;

    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity("");
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    let keyValuePairs = [];

    formInputs.forEach((inputField) => {
        if(inputField.tagName !== "BUTTON") {
             let valuePairString = `${inputField.name}: ${inputField.value}`;      
    
            keyValuePairs.push(valuePairString)
        }
    });
    alert(keyValuePairs.join("; "));
}

formInputs.forEach((inputField) => {
    if(inputField.tagName !== "BUTTON" && inputField.tagName !== "SELECT") {
        inputField.addEventListener("input", resetErrorState);
        inputField.addEventListener("blur", validateField);
    } else if(inputField.tagName === "SELECT") {
        inputField.addEventListener("change", handlePoValidity);
    }
})
userForm.addEventListener("submit", handleFormSubmit)