const myNumberFunction = require("./myNumberFunction");

test("throws error on invalid input", () => {
  expect(() => {
    myNumberFunction("asdf");
  }).toThrow();
});
