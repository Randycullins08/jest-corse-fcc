const sum = require("./sum");
const myNumberFunction = require("./myNumberFunction");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("1 is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

test("throws error on invalid input", () => {
  expect(() => {
    myNumberFunction("asdf");
  }).toThrow();
});
