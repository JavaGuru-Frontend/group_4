// create class Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.species = 'cat'
  }
  
  getInfo() {
    return `${this.name}, ${this.species}`
  } 
}

const myCat = new Cat('Jevgenijs');  