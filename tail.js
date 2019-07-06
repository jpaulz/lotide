const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

const tail = function(item) {
  return item.slice(1);
  
};
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// console.log(words.length);
module.exports = tail;
