// Copy in assertArraysEqual function // 

const {assertArraysEqual} = require('./assertArraysEqual');

const {eqArrays} = require('./eqArrays');

/* MAP function will take in 2 arguments: 
  a) an array to map
  b) a callback function 
*/

  const words = ["sono", "una", "mistica",  "cyber", "principessa"];

  const map = function(list, callback) {
    const results = []
    for (let item of list) {
      results.push(callback(item))
    }
    return results;
  }
  
  const results1 = map(words, word => word[0]);
  
  console.log(results1);