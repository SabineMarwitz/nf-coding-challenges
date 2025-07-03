import { isEven } from "./isEven";

test("get true for even number", () => {
  expect(isEven(2)).toBe(true);
});

test("get false for odd number", () => {
  expect(isEven(3)).toBe(false);
});

test("get true for 0", () => {
  expect(isEven(0)).toBe(true);
});

test("get true for negative even number", () => {
  expect(isEven(-4)).toBe(true);
});
