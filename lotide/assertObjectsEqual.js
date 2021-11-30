const eqObjects = require('./eqObjects');


// takes in two objects & prints appropriate message 
// to console
const assertObjectsEqual = function(actual, expected) {
// import the util library's inspect function
  const inspect = require('util').inspect; 


  if (eqObjects(actual, expected)) {
    console.log(`💚 Assertation Passed: ${inspect(actual)}  === ${inspect(expected)}`); 
   } 
   
   else {
    console.log(`💔 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`); 
    }

};

const myEmotions = {
  morning : "elated",
  afternoon : "hungry",
  evening : "tired"
};

const yourEmotions = {
  morning : "elated",
  afternoon : "hungry",
  evening : "tired"
};

const myBirthday = {
  month : 06,
  day : 12,
  year : 1996
};

const yourBirthday = {
  month : 01,
  day : 30,
  year : 1996
};

// test
assertObjectsEqual({morning : 'elated', afternoon : 'hungry', evening : 'tired'}, {morning : 'elated', afternoon : 'hungry', evening : 'tired'});

assertObjectsEqual(yourBirthday, myBirthday);

module.exports = assertObjectsEqual;