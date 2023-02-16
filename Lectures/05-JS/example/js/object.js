
const person = {
    firstName: "Elon", 
    lastName: "Musk",
    age: 50, 
    companiesFounded: [ 
        "X.com", 
        "PayPal", 
        "SpaceX", 
        "The Musk Foundation", 
        "Tesla", 
        "SolarCity", 
        "Neuralink", 
        "The Boring Company"
    ],
    rolesInCompanies: { 
        twitter: {
            role: "Potential business owner",
            isFounder: false 
        },
        tesla: {
            role: "Business owner",
            isFounder: true
        }
    }
}

console.log("Person full name:", person.firstName + person.lastName); 
console.log(`Age of ${person.firstName} ${person.lastName}:`, person.age);
console.log("Person role at Twitter:", person.rolesInCompanies.twitter.role);

person.rolesInCompanies.twitter.role = "Business owner";

console.log("Person new role at Twitter:", person.rolesInCompanies.twitter.role);
console.log("");