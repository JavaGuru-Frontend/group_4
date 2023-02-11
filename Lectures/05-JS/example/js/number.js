
let intiger = 3;
let decimalNumber = 3.14;
console.log("Whole number:", intiger);
console.log("Decimal number:", decimalNumber);

let scientificNumber = 123e2;
console.log("Scientific number value:", scientificNumber);


let acceptableIntigerValue = 999999999999999; 
 
let faultyIntigerValue = 9999999999999999;  
console.log("Number with up to 15 digits:", acceptableIntigerValue);
console.log("Number with more than 15 digits", faultyIntigerValue);


let specialJavaScriptMath = 0.2 + 0.1;
console.log("What is this JavaScript?", specialJavaScriptMath);
console.log("Type of 'special math':", typeof specialJavaScriptMath);


let fixedJavaScriptMath = specialJavaScriptMath.toFixed(1); 
console.log("Fixed length value:", fixedJavaScriptMath);
console.log("Type of 'fixed math':", typeof fixedJavaScriptMath);

let possibilitiesWithFrontend = 1e999;
console.log("Where's the limit of possibilities with Frontend?:", possibilitiesWithFrontend);

let possibilietiesWithoutFrontend = possibilitiesWithFrontend * 0; 
console.log("What possibilities are there without Frontend?:", possibilietiesWithoutFrontend); 
console.log(typeof possibilietiesWithoutFrontend); 
console.log(isNaN(possibilietiesWithoutFrontend)); 