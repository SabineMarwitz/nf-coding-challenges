import { greet } from "./greet";

test("returns greeting with given name", () => {
  expect(greet("Lisa")).toBe("Hello, Lisa!");
});

test("returns greeting if no name is given", () => {
  expect(greet()).toBe("Hello, !");
});

test("returns greeting with any string", () => {
  expect(greet("world")).toBe("Hello, world!");
});
