const fetchData = require("./fetchData");

test("The data is Stuff and things", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Stuff and things");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
