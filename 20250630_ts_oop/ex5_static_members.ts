// Objective: Use static methods and properties.

// Task: Create a `MathHelper` class with:
// - static PI = 3.14
// - static method `circleArea(radius: number): number`

class MathHelper {
  static PI = 3.14;

  static circleArea(radius: number): number {
    return radius * this.PI;
  }
}

// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5

