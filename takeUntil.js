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


const takeUntil = function(arr, callback) {
  // const result = [];
  let index = 0;
  for (let item of arr) {
    if (callback(item)) {
      return arr.slice(0, index);
    // result.push(callback(item));
    }
    index++;
    // return result;
  
  
  //"slice of the array with elements taken from the beginning."
  //It should keep going until the callback/predicate returns a truthy value.
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);