const {assertEqual} = require('./assertEqual');

// Create a function that takes two arrays and returns true or false based on a perfect match
// Take two arrays
// Assess values
// Boolean expression

const eqArrays = function(array1, array2) {

  for (var i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]) return false;
  }
  return true;
  
}

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true );
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);