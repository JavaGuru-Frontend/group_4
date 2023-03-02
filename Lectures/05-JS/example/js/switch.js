
const myName = "Slim Shady";

switch (myName) {
    case "What?": 
        console.log("What?");
        break; 
    case "Who?": 
        console.log("Who?");
        break;
    case "Huh?": 
        console.log("Huh?")
        break;
    default:
        console.log("Chika-chika, Slim Shady.");
        break;
}  



if(myName === "What?") {
    console.log("What?");
} else if(myName === "Who?") {
    console.log("Who?");
} else if(myName === "Huh?") {
    console.log("Huh?")
} else {
    console.log("Chika-chika, Slim Shady.");
}