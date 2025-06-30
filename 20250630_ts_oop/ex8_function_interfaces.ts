// Objective: Define function types with interfaces.

// Task: Define an interface `MathOperation` that describes a function:
// (x: number, y: number) => number

// Implement two variables `add` and `multiply` that match the interface.

interface MathOperation {
  (x: number, y: number): number;
}

// Your code
const add: MathOperation = (x: number, y: number) => {
  return x + y;
};
const multiply: MathOperation = (x: number, y: number) => {
  return x * y;
};

// Test
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
