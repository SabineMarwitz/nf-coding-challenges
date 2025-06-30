// Objective: Implement abstract classes and enforce contract in subclasses.

// Task: Create an abstract class `Shape` with:
// - abstract method `getArea(): number`
// - name: string

// Create subclasses `Rectangle` and `Circle` that implement getArea.

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super("rectangle");
    this._width = width;
    this._height = height;
  }

  getArea(): number {
    return this._width * this._height;
  }
}

class Circle extends Shape {
  private _radius: number;
  static PI = 3.14;

  constructor(radius: number) {
    super("circle");
    this._radius = radius;
  }

  getArea(): number {
    return this._radius * 3.14;
  }
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach((shape) =>
  console.log(`${shape.name} area: ${shape.getArea()}`)
);
