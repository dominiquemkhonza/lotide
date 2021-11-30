const {eqArrays} = require('./eqArrays');

/* Take two arrays and console.log appropriate message to the console */

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ assertation passed : ${array1}  === ${array2}`); 
    } else {
    console.log(`🔴 assertation failed : ${array1} !== ${array2}`); 
    }
};

/*

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "6", "3"], ["1", "2", "3"]), true);
*/ 
module.exports = assertArraysEqual;