const {assertEqual} = require('./assertEqual');

/*
  Count Letters
    a) Take in a sentence (string)
    b) Return a count of how many times each letter in the sentence appears

*/ 

// function to count letters in a String

const countLetters = function(words) {
  // check if string is valid or not
  if (words.length == 0) {
    console.log("No string!")
    return;
  }
  // iterate over string
  for (let i = 0; i < words.length; i++) {
    // variable to store value of count
    let count = 0; 
    for (let j = 0; j < words.length; j++) {
      if (words[i] == words[j] && i > j) 
      {
        break;
      }
      if (words[i] == words [j]) 
      {
        count++
      }
    }
    if (count > 0)
    console.log(`${words[i]} : ${count}`);
  }
  
}

module.exports = countLetters;



