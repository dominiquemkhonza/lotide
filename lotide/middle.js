
/* 
MIDDLE function
  a) should take in an array
  b) return the most-middle elements of a given-array
*/ 


/////// actual function ///////
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let first = array.length / 2 - 1;
    let second = array.length / 2;
    return [array[first], array[second]];
  } else {
    return [array[Math.floor(array.length /2)]];
  }
};

module.exports = middle;


////// test code //////
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1]));
console.log(middle([1, 2]));