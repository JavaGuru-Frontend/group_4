
for(let i = 0; i < 10; i++) {
    console.log("Current index:", i);
};
console.log("");

for(let i = 10; i > 0; i--) { 
    console.log("Current index:", i);
};

let frontendTools = ["CSS", "HTML", "JS", "React", undefined, "Angular"];



// console.log("Array element index 0:", frontendTools[0]);
// console.log("Array element index 1:", frontendTools[1]);
// console.log("Array element index 2:", frontendTools[2]);


for(let i = 0; i < frontendTools.length; i++) {
    console.log(`Array element index ${i}:`, frontendTools[i]);
    
    // if(typeof frontendTools[i] === "string") {
    //     frontendTools[i] = frontendTools[i].toLowerCase();
    //     console.log("Element after text transformation:", frontendTools[i]);
    // } else {
    //     console.log(`Element ${i} is not a string:`, frontendTools[i])
    // }

    if(frontendTools[i]) {
        frontendTools[i] = frontendTools[i].toLowerCase();
        console.log("Element after text transformation:", frontendTools[i]);
    } else {
        console.log(`Element ${i} is not a valid value:`, frontendTools[i])
    }

    console.log("");
};

console.log("Frontend tools lower-case:", frontendTools);


frontendTools.forEach((item) => {
    console.log("Array element:", item);
});


frontendTools.forEach((item, i) => {
    console.log(`Array element index ${i}:`, item);
});

frontendTools.forEach((item, i) => {
    console.log(`Array element index ${i}:`, item);

    if(item) {
        frontendTools[i] = item.toLowerCase();
    } else {
        console.log(`Element ${i} is not a string:`, item);
    }    

    console.log("Element after text transformation:", frontendTools[i]);
});

console.log("Frontend tools lower-case:", frontendTools);

frontendTools.forEach((item) => {
    console.log("frontendTools array item", item);

    for(let i = 0; i < 10; i++) {
        console.log("Nested loop iteration:", i + " - " + item);
    };
    console.log("");
});
