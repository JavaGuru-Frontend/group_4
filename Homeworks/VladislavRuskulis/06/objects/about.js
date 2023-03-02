let pageData = {
    user: {
        name: "Vladislav",
        lastName: "Ruskulis",
        city: "Daugavpils",
        age: 28
    },
    header: "My page",
   navigation:[
    {
        link: "top",
        title: "About me"
    },
    {
        link: "pop",
        title: "Place and work experience"
    },
    {
        link: "spot",
        title: "My contacts"
    }
   ],
    section1: {
        header: "About me:",
        text: "Hello!My name is Vladislavs Ruskulis I am from Daugavpils. I am a motivated and ambitious Front-end Developer who enjoy solving complex problems and helping my team to succeed am naturally inquisitive and methodical in my thinking, always aiming to break down problems into small achievable actions. am looking for opportunities where I can to learn, solving problems with a team of ambitious people."
    },
    section2: {
        header: "Place and work experience:",
        table: {
            headers:["Название фирмы", "Время работы"],
            lines:[
                {
                    name:"LDZ RSS",
                    time:"7 y."
                },
                {
                    name:"Peacock",
                    time:"1 y."
                },
                {
                    name:"Entergreen",
                    time:"1 y."
                }
            ]

        }
    },
    section3: {
        header: "My contacts:",
       contacts:[
        {
            type:'tel',
            value:'+37124226777'
        },
        {
            type:'mailto',
            value:'Ruskus228@gmail.com'
        },
        {
            type:'skype',
            value:'@xujaka'
        }
       ]
    },

}


