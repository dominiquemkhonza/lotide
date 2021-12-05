
const middle  = require('../middle');

const assert = require ('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]); 
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });


  it("returns ['chiamo'] for ['Mi','chiamo',Dominique']", () => {
    assert.deepEqual(middle(['Mi','chiamo','Dominique']), ['chiamo']); 
  });

  it("returns [5,6] for [1,2,3,4,5,6,7,8,9,10]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10]), [5,6]); 
  });

});