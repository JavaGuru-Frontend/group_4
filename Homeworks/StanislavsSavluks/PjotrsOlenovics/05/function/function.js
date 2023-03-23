let a = 100;
let b = 20
let c = 50;

function plus(a, b) {
    const result = a + b;
    console.log(result)
}
function minus(a, b) {
    const result = a - b;
    console.log(result)
}
function multi(a, b) {
    const rresult = a * b;
    console.log(result)
}
function divide(a, b) {
    const result = a / b;
    console.log(result)
}
function proc(a, c) {
    const result = a / 100 * c;
    console.log(result)
}

console.log(plus(a, b));
console.log(minus(a, b));
console.log(multi(a, b));
console.log(divide(a, b));
console.log(proc(a, c));