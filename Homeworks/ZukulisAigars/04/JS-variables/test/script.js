const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

addButton.addEventListener("click", function() {
    const result = parseFloat(input1.value) + parseFloat(input2.value);
    alert(result);
});

subtractButton.addEventListener("click", function() {
    const result = parseFloat(input1.value) - parseFloat(input2.value);
    alert(result);
});

multiplyButton.addEventListener("click", function() {
    const result = parseFloat(input1.value) * parseFloat(input2.value);
    alert(result);
});

divideButton.addEventListener("click", function() {
    const result = parseFloat(input1.value) / parseFloat(input2.value);
    alert(result);
});
console.log("Sum of inputs" + result);
console.log(" a-b is " + d);
console.log(" ab is " + e);
console.log(" a/b is " + f);