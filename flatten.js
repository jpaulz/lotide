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

const flatten = function(arrayOfArrays) {
  const newArray = [];
  arrayOfArrays.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(item) {
        newArray.push(item);
      });
    } else {
      newArray.push(element);
    }
  });
  
  return newArray;
 
};
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);