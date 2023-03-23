class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getInfo() {
        return `My name is ${this.name} I am ${this.age} years old. Ping me ${this.email}`;
    } 
}

let person1 = new Person('Jevgenijs', '30', 'jevgneijsvoronovs@gmail.com');

class Male extends Person {
    constructor(name, age, email) {
        super(name, age, email);
        this.gender = "male"
    }
}

class Female extends Person {
    constructor(name, age, email) {
        super(name, age, email);
        this.gender = "female"
    }
}
