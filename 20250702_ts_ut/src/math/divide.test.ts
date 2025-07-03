import { divide } from "./divide";

test("divide function", () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(7, -1)).toBe(-7);
  expect(divide(0, 10)).toBe(0);
});

test("divides by 0 should throw an error", () => {
  expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
});
