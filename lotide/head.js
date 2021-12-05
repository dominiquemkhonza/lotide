/* 
Create a function that returns the first item in the array 
  a) should return the 1st element on its own
*/

////// assertequal function //////
const {assertEqual} = require('./assertEqual');

const head = function(array) {
  return array[0]
};


////////  test assertations ///
module.exports = head;
