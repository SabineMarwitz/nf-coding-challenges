// Factory Exercises
// 2. Shape Factory
//
// Task: Implement a ShapeFactory that returns different shapes
// (e.g., Circle, Square, Triangle) based on a string input.
// Each shape should implement a draw() method.

interface Shape {
  draw(): void;
}

class CircleShape implements Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class SquareShape implements Shape {
  draw() {
    console.log("Drawing Square");
  }
}

class ShapeFactory {
  static create(shape: "circle" | "square"): Shape {
    if (shape === "circle") return new CircleShape();
    return new SquareShape();
  }
}

// Test
const shape1 = ShapeFactory.create("circle");
shape1.draw(); // Output: Drawing Circle
const shape2 = ShapeFactory.create("square");
shape2.draw(); // Output: Drawing Square
