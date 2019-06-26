const eqArrays = function(arr1, arr2) {
  let output = true;
  arr1.forEach(function(element, index) {
    if (element !== arr2[index]) {
      output = false;
    }
  });
  return output;
};
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("Array matches");
  } else {
    console.log("Array doesn't match");
  }
};
assertArrayEqual(["hduf"], ["hgir8"]);
assertArrayEqual(["hduf"], ["hduf"]);
