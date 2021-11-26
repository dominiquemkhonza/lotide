// Debug function meant to reverse the characters of words passed via command line arguments 


///// GIVEN CODE ///////

const backwards = process.argv;

const reverse = function(string) {
  let result = "";
  for (let i = string.length -1; i >= 0; i--) {
    result += string[i];
  } return result;
};
  for (let i = 2; i < backwards.length; i++) {
    let string = backwards[i];
    console.log(reverse(string));
  }; 

console.log(reverse("In the mood for love..."));

module.exports = reverse;