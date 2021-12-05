
/* 
      a) create function "tail" which returns everything except for the first item of an array
      b) do not modify the array that is passed in 
*/

////// assertEqual code //////
//const {assertEqual} = require('./assertEqual');//
/////////////////////////////

//const words = ["profound", "metaphysical", "truths", "are", "present", "in", "nature"];

const tail = function(array) {
  let result = array.slice(1);
  return result;
};

//tail(words);
//assertEqual(words.length, 5);
module.exports = tail;
