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

const middle = function(array) {
  if (array.length % 2 === 0) {
    return array.slice(Math.floor((array.length - 1) / 2),(Math.floor(array.length / 2) + 1));
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
  
};
module.exports = middle;
