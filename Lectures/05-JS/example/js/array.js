
listOfFrontendTools = ["React", "Bootstrap", "CSS", "HTML"];

console.log("Some frontend tools you might use:", listOfFrontendTools);

listOfFrontendTools = []
console.log("Reset array to empty:", listOfFrontendTools);

listOfFrontendTools.push("React");
console.log("Pushed element 0", listOfFrontendTools);

listOfFrontendTools.push("Bootstrap");
console.log("Push element 1", listOfFrontendTools);

listOfFrontendTools.push("CSS");
console.log("Push psh element 2", listOfFrontendTools);

listOfFrontendTools.push("HTML");
console.log("Push element 3", listOfFrontendTools);
console.log("");

listOfFrontendTools.unshift("Vue");
console.log("Add an elemento the beginning on array:", listOfFrontendTools);
console.log("");

console.log("Remove last element from end of array and get its value:", listOfFrontendTools.pop());
console.log("Array after pop():", listOfFrontendTools);
console.log("");

console.log("Does the array include 'Angular'?:", listOfFrontendTools.includes("Angular"));
console.log("Does the array include 'Vue'?:", listOfFrontendTools.includes("Vue"));
console.log("");


console.log("What is the index of 'React' element?:", listOfFrontendTools.indexOf("React"));


console.log("What is the first element of the array?:", listOfFrontendTools[0]);
console.log("What is the second element of the array?:", listOfFrontendTools[1]);

console.log("How many elements are in the array?:", listOfFrontendTools.length);
console.log("What is the last element of the array?", listOfFrontendTools[listOfFrontendTools.length -1])