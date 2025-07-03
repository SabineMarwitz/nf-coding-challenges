import { capitalize } from "./capitalize";

test("capitalizes a single lowercase word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes a single lowercase letter", () => {
  expect(capitalize("h")).toBe("H");
});

test("handle empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize a camel case word", () => {
  expect(capitalize("javaScript")).toBe("JavaScript");
});

