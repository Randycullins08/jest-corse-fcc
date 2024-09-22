function asyncData(time) {
  return new Promise((resolve, reject) => {
    if (time === 1000) {
      setTimeout(() => {
        resolve("Async test done");
      }, time);
    } else {
      reject(new Error("Error"));
    }
  });
}

module.exports = asyncData;
