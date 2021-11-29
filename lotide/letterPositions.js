// This function will return all indices (index point,
// zero-based positions) in the string where each 
// character is found

// For each letter -> multiple numbers may be needed
// to represent all the places in the string that
// it shows up

const letterPositions = function(sentence) {
  const results = {};
  let count = -1;
  //logic to update results here
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        counter += 1;
        results[letter].push(count);
      } else {
        count += 1;
        results[letter] = [count];
      }
    } else {
      count += 1;
    }
  }
  return results;

};


console.log(letterPositions("helloworld"));