const {assertEqual} = require('./assertEqual');

// implement findKeyByValue 

/*test code 
const placesIveBeen = { 
  italy : "napoli",
  usa : "new york",
  iceland : "reyjavik" 
}; 
*/ 

const findKeyByValue = function(object, key) {
  // Find & return the KEY of given findKeyByValue
  // a) Object.keys to search through all object keys
  for (const property of Object.keys(object)) {
    if (object[property] == key) {
      return property;
    }
  }
};

/* 
console.log(findKeyByValue(placesIveBeen, "new york")); */


module.exports = findKeyByValue;