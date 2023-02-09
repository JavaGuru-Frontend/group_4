
let companyDescription = "Space X is an American aerospace manufacturer, a provider of space transportation services, and a communications corporation headquartered in Hawthorne, California.";
console.log("Company description:", companyDescription);

console.log("Type of 'companyDescription' variable:", typeof companyDescription);

console.log("Character count (length):", companyDescription.length); 
console.log("");


let newCompanyDescription = companyDescription.replace("Space X", "Space XY");
console.log("New company description:", newCompanyDescription);
console.log("");


let founderEmail = "  Elon.Musk@SpaceX.com "
console.log("Founder email:", founderEmail);

let trimmedEmail = founderEmail.trim();
console.log("Trimmed email:", trimmedEmail);


let lowercaseEmail = founderEmail.toLocaleLowerCase();
console.log("Formatted email (lowercase):", lowercaseEmail);


let uppercaseEmail = founderEmail.toLocaleUpperCase();
console.log("Formatted email (uppercase):", uppercaseEmail);
console.log("");

let firstName = "Elon";
let surname = "Musk";


let fullName = firstName + surname;
console.log("Full name 1:", fullName);

fullName = firstName + " " + surname;
console.log("Full name 2:", fullName);


fullName = firstName.concat(" ", surname); 
console.log("Full name 3", fullName);
console.log("");

let companyPostalCode = "CA 90250";
let postalCodeState = companyPostalCode.slice(0, 2); 
console.log("Company postal code:", companyPostalCode);
console.log("Postal code state:", postalCodeState);
console.log("");


let singleQuote = 'someText';
let doubleQuote = "someText";

let stringLiteral = `This text can contain a variable value: ${companyName}`; 

console.log("String value with a dynamic value from variable:", stringLiteral);

let correctEscapedString = "Use escape characters for double qotes (\"\")";
console.log(correctEscapedString);

let correctUnescapedString = "Or use single quotes inside double quoted string ('')"; 
console.log(correctUnescapedString);