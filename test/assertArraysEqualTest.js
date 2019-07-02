

// const eqArrays = require('../eqArrays.js');
// const assertArrayEqual = require('../assertArraysEqual');
// const middle = require('../middle');


// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]


const assertArrayEqual = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 'booh' for 'booh'", () => {
    assertArrayEqual.deepEqual(middle(["booh"]), ["booh"]);
  });
  it("returns [2, 3]] for [2, 3]]", () => {
    assertArrayEqual.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [3, 4]]", () => {
    assertArrayEqual.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [2] for [2]]", () => {
    assertArrayEqual.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [3]]", () => {
    assertArrayEqual.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});