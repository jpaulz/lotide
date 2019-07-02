// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArrayEqual = require('./assertArrayEqual');
const eqArrays = require('./eqArrays');

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   assertEqual: assertEqual,
//   assertArrayEqual: assertArrayEqual,
//   eqArrays: eqArrays
// };

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArrayEqual,
  eqArrays
};