
let starsInObservableUniverse = 457309583495083450934859043853095839058340583045834n; 
console.log("Number of stars in observable universe:", starsInObservableUniverse);
console.log("");


let isJavaScriptAwesome = true;
let isAboveStatementNotTrue = false;

let yearInventedHTML = 1991;
let yearInventedJS = 1995;

let isHTMLolderthanJS = yearInventedHTML < yearInventedJS; 

console.log("HTML is older than JavaScript:", isHTMLolderthanJS);
console.log(typeof isHTMLolderthanJS);


let uniqueSymbol1 = Symbol('xyz');
let uniqueSymbol2 = Symbol('xyz');


let areBothUniqueValuesIdentical = uniqueSymbol1 === uniqueSymbol2; 
console.log("Are both symbols made from same value identical:", areBothUniqueValuesIdentical);
console.log("");


let plansForToday = "Do homework.";
let bingeNetflix = true;
plansForToday = null;
console.log("My plans for today:", plansForToday);


let plansForTomorrow;
console.log("What are your plans for tomorrow?:", plansForTomorrow);