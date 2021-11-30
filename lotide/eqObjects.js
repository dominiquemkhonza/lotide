const {assertEqual} = require('./assertEqual');

// eqObjects will return true if both objects have
// identical keys with identical values
// Otherwise, return false ->

const eqObjects = function(objOne, objTwo) {
  // grab keys for each of the objects
  // create the values
  const objOneKeys = Object.keys(objOne);
  const objTwoKeys = Object.keys(objTwo);
  
  // check if we have the same number of keys (length)
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  // check values of each object
  for (let key in objOne) {
    if (!(key in objTwo)) return false; {
      if (objOne[key] !== objTwo[key]) return false;
    }
  }
  
  return true; 
};
