
window.onload = () => {
    console.log("Get DOM elements by id:", document.getElementById("keyboard-text-input"));
    console.log("Get DOM elements by class:", document.getElementsByClassName("mb-3"));
    console.log("Get DOM elements by tag name:", document.getElementsByTagName("div"));
    console.log("Get DOM elements by query selector:", document.querySelector(".mb-3"));
    console.log("Get DOM elements by query selector:", document.querySelectorAll(".mb-3"));

    let textInput = document.getElementById("keyboard-text-input");
    let textOutput = document.getElementById("keyboard-text-output");

    console.log("Text input field:", textInput);
    console.log("Text output element:", textOutput);
    console.log("Text output element classList", textOutput.classList);

    textOutput.classList.add("font-weight-bold");
    textOutput.classList.remove("test-class");
    console.log("Text output element classList", textOutput.classList);

    textOutput.innerText = "Hard coded text value.";
    // textOutput.innerText = "";

    textInput.addEventListener("keypress", (event) => {
        console.log("Keypress event object:", event.key);
        console.log("Typeof key value:", typeof event.key);
        console.log("Convert key to number:", Number(event.key));
        console.log("Check is converted key is NaN:", isNaN(Number(event.key)))


        let convertedKeyValue = Number(event.key);
        if (isNaN(convertedKeyValue)) {
            event.preventDefault();

            alert("Value is not a number. Please enter only digits.")
        } else {

            // textOutput.innerHTML = convertedKeyValue;
            // textOutput.innerHTML = event.target.value;
        }
    })

    textInput.oninput = (event) => {
        console.log("Input event target value:", event.target.value);
        textOutput.innerHTML = event.target.value;
    };

    let showPromptBtn = document.getElementById("show-prompt-btn");
    console.log("BTN", showPromptBtn)
    showPromptBtn.onclick = () => {
        console.log("CLICK")
        let text;
        let favDrink = prompt("What's your favorite drink?");
    
        switch (favDrink) {
            case "Coca-Cola":
                text = "Excellent choice. Coca-Cola is good for your soul.";
                break;
            case "Pepsi":
                text = "Pepsi is my favorite too!";
                break;
            case "Sprite":
                text = "Really? Are you sure the Sprite is your favorite?";
                break;
            default:
                text = "I have never heard of that one..";
        }
    
        textOutput.innerHTML = text;
    }
}