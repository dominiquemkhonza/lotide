const {eqArrays} = require('./eqArrays');
const {assertArraysEqual} = require('./assertArraysEqual');

/*
    a) Without function will return a subset of a given array, removing unwanted elements
*/

const without = function(source, itemsToRemove) {

  let betterList = [];

  for (let i = 0; i < source.length; i++) {
    let bufferList = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[i]) {
        bufferList = true;
      }
    }
    if (bufferList === false) {
      betterList.push(source[i]);
    }
  }
return betterList;

}

////// test code //////
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(without(["Hello", "stranger!"], ["Hello"]))

