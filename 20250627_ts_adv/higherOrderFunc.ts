type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;
const sub: MathOperation = (a, b) => a - b;
const mul: MathOperation = (a, b) => a * b;
const div: MathOperation = (a, b) => a / b;

function applyOperation(a: number, b: number, action: MathOperation): number {
  return action(a, b);
}

console.log(applyOperation(6, 3, add));
console.log(applyOperation(6, 3, sub));
console.log(applyOperation(6, 3, mul));
console.log(applyOperation(6, 3, div));
