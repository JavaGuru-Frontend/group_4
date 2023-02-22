
    let now = new Date();
    console.log(now.year);
    now.year = 2023; 
    console.log(now);

        const person = {
            firstName: "Agatha", 
            lastName: "Christie",
            dateofbirth: 1890,
            dateofdeath: 1976,
 
            companiesFounded: [ 
                "YouTube", 
                "Twitter", 
                "Delfi", 
                "Wikipedia", 
                "NewCity", 
                "Netflix", 
                "AllyExpress"
            ],
            rolesInCompanies: { 
                twitter: {      
                    role: "Potential the British author",

                    isFounder: false 
                },
                wikipedia: {
                    role: "British author",
                    isFounder: true
                }
            }
        }
        
        console.log(`${person.firstName} ${person.lastName}`);
        console.log(`Date of birth ${person.firstName} ${person.lastName}:`, person.dateofbirth);
        console.log(`Date of death ${person.firstName} ${person.lastName}:`, person.dateofdeath);
        console.log("Person role in England:", person.rolesInCompanies.twitter.role);
        person.rolesInCompanies.twitter.role = " an English writer known for her 66 detective novels and 14 short story collections";
        console.log("Person new role in England:", person.rolesInCompanies.twitter.role);
        console.log("");
   
