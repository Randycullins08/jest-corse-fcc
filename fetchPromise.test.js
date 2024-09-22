const fetchPromise = require("./fetchPromise");

test("The data is Promise done", () => {
  return expect(fetchPromise(1000)).resolves.toBe("Promise done");
});

test("The fetch fails with an error", () => {
  return expect(fetchPromise(2000)).rejects.toThrow("Error");
});
