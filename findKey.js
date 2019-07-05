const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

const findKey = function(input, callback) {
  const keys = Object.keys(input);
  for (let key of keys) {
    if (callback(input[key])) {
      console.log(input[key]);
      return key;
    }
  }
  return undefined;
};
const myFunc = (x) => x.stars === 2;
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, myFunc), "noma");