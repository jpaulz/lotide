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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push[i];
    } else {
      results[letter] = [i];
    }
  }
  return results;
};
const result1 = letterPositions("hello");
assertArrayEqual(result1["h"], [0]);
assertArrayEqual(result1["e"], [1]);
assertArrayEqual(result1["l"], [2, 3]);
assertArrayEqual(result1["o"], [4]);
// assertArrayEqual(letterPositions("hello"), {h: [0], e: [1], l: [2, 3], o: [4]});
// const countLetters = function(string) {
//   const results = {};
//   for (let letter of string) {
//     if (results[letter]) {
//       results[letter] += 1;
//     } else {
//       results[letter] = 1;
//     }
//   }
//   return results;
// };

// const result1 = countLetters("television");

// assertEqual(result1["t"], 1);
// assertEqual(result1["e"], 2);
// assertEqual(result1["z"], undefined);