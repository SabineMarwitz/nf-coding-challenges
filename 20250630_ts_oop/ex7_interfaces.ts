// Objective: Use interfaces to enforce structure.

// Task: Define an interface `Animal` with:
// - name: string
// - makeSound(): string

// Create a class `Dog` that implements `Animal`.

interface Animal {
  name: string;

  makeSound(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    return `${this.name} says Woof!`;
  }
}

// Test
const dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"
