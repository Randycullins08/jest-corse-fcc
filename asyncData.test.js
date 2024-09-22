const asyncData = require("./asyncData");

test("Async test done", async () => {
  const data = await asyncData(1000);
  expect(data).toBe("Async test done");
});

test("The fetch fails with an error", async () => {
  return await expect(asyncData(2000)).rejects.toThrow("Error");
});
