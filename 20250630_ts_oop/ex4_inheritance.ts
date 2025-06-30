// Objective: Implement inheritance and override base class methods.

// Task: Create a base class `Employee` with:

// - name: string
// - getDetails(): string

// Create a derived class `Manager` that adds:
// - department: string
// - Overrides getDetails() to include department

class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetails(): string {
    return this.name;
  }
}

class Manager extends Employee {
  private _department: string;

  constructor(name: string, department: string) {
    super(name);
    this._department = department;
  }

  getDetails(): string {
    return `${super.getDetails()} (${this._department})`;
  }
}

// Test
const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());
