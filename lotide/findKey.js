const {eqArrays} = require('./eqArrays');
const {assertEqual} = require('./assertEqual');

// Make a more complex version of findKeyByValue in Lotide
// takes an object and a callback
// scan the object -> return the first key for which the callback returns a truthy value
// if no key is found, return undefined


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) { 
      return key;
  }
}
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");