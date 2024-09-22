function fetchPromise(time) {
  return new Promise((resolve, reject) => {
    if (time === 1000) {
      setTimeout(() => {
        resolve("Promise done");
      }, time);
    } else {
      reject(new Error("Error"));
    }
  });
}

module.exports = fetchPromise;
