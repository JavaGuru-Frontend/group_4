console.log("Answer to life, the universe and everything")
const answerToLifeTheUniverseAndEverything = 42;
console.log("Type of answer to everything:",typeof answerToLifeTheUniverseAndEverything);

const answerAsString = String(answerToLifeTheUniverseAndEverything);
console.log("Answer as string:", typeof answerAsString);

const answerAsNumber = Number(answerAsString);
console.log("Answer as number again:", typeof answerAsNumber);
console.log("");

console.log("Converting stuff to Number");
console.log("Empty string to number:",  Number("")); // 0
console.log("True to number:", Number(true)); // 1
console.log("False to number:", Number(false)); // 0
console.log("Null to number:", Number(null)); // 0
console.log("Undefined to number:", Number(undefined)); // NaN
console.log("");

console.log("Converting stuff to String");
console.log("String to string:", String("42")); // "42"
console.log("True to string:", String(true)); // "true"
console.log("False to string:", String(false)); // "false"
console.log("Null to string:",  String(null)); // "null"
console.log("Undefined to string:", String(undefined)); // "undefined"
console.log("");

console.log("Converting stuff to Boolean");
console.log("Empty string to boolean:", Boolean('')); // false
console.log("0 to boolean:",  Boolean(0)); // false     
console.log("NaN to boolean:", Boolean(NaN)); // false
console.log("Null to boolean:", Boolean(null)); // false
console.log("Undefined to boolean:", Boolean(undefined)); // false
console.log("False to boolean", Boolean(false)); // false
console.log("");

const notWhatYouExpect = 4 + 5 + 6 + "7" // 157
console.log("Implicit coercion numbers to string:", notWhatYouExpect);

const stringAndBooleanConcat = "Some text" + true;
console.log("Implicit coercion boolean to string:", stringAndBooleanConcat);
console.log("");


console.log("true AND false", true && false); // false
console.log("true AND true:", true && true); // true
console.log("true VAI false", true || false); // true
console.log("true VAI !false", true || !false); //true
console.log("true AND !false", true && !false); // true

console.log("");