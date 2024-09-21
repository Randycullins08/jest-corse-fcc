function myNumberFunction(input) {
  if (typeof input === "number") {
    return "Good job";
  } else {
    throw new Error("Invalid Input");
  }
}

module.exports = myNumberFunction;
