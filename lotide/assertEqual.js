
/* 
assertEqual = A function that helps test our code
**** assert **** function exists to determine if we have failed assertions
*/

const assertEqual = function(actual, expected){
  if (actual === expected) {
    console.log(`💚 Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertation Failed: ${actual} !== ${expected}`);
  }
};

////// test code //////
assertEqual("Ti", "Amo");
assertEqual(777, 777);

module.exports = {assertEqual}
