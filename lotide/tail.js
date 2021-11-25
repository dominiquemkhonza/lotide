const {assertEqual} = require('./assertEqual');

const tail = function(array) {
  return array.length > 2 ? array.slice(1) : [];
};

module.exports = tail;
module.exports = tail;
//*  test assertations //*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!