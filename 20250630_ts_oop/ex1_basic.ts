// Objective: Practice class creation and constructors.

// Task: Define a class called `Car` with the following properties:
// - make (string)
// - model (string)
// - year (number)
// Add a method `getDetails()` that returns a string like: "2022 Toyota Corolla"

class Car {
  make: string;
  model: string;
  year: number;

  // Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Test
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());
