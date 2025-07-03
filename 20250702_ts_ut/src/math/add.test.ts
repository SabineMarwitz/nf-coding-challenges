import { add } from "./add";

describe("add()", () => {
  test("add positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  test("add negative number", () => {
    expect(add(-4, 5)).toBe(1);
  });
  test("add 0", () => {
    expect(add(0, 0)).toBe(0);
  });
});
