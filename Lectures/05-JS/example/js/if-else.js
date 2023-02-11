
let isTrafficLightGreen = true;

if (isTrafficLightGreen) {
    console.log("Cross the road.") 
} else {
    console.log("Wait for a green light.")
}

isTrafficLightGreen = false;

if (isTrafficLightGreen) {
    console.log("Cross the road.")
} else {
    console.log("Wait for a green light.") 
}

let isTrafficLightYellow = false;
let isTrafficLightRed = true;

if (isTrafficLightGreen) {
    console.log("Cross the road.");
} else if (isTrafficLightYellow) {
    console.log("Wait for the next traffic light.")
} else if (isTrafficLightRed) {
    console.log("Wait for a green light.") 
} else {
    console.log("Traffic light must not be working.")
}

console.log("")

isTrafficLightRed = false;

if (isTrafficLightGreen) {
    console.log("Cross the road.");
} else if (isTrafficLightYellow) {
    console.log("Wait for the next traffic light.")
} else if (isTrafficLightRed) {
    console.log("Wait for a green light.") 
} else {
    console.log("Traffic light must not be working.") 
}

console.log("")