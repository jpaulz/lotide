// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
//   } else {
//     console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
//   }
    
// };

const eqArrays = function(arr1, arr2) {
  let output = true;
  arr1.forEach(function(element, index) {
    if (element !== arr2[index]) {
      output = false;
    }
  });
  return output;
};

module.exports = eqArrays;
