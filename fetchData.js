function fetchData(callback) {
  setTimeout(() => {
    callback("Stuff and things");
  }, 1000);
}

module.exports = fetchData;
