const head = require('../head');
const chai = require ('chai');  
const assert = chai.assert;

assert(head([111, 777, 333]), 777);
assert(head(["Mi", "chiamo", "Dominique"]), "Mi");
assert(head([5,6,7]), 5);
assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe("#head", () => {
  it("returns 2 for [2, 4, 6", () => {
    assert.strictEqual(head([2, 4, 6]), 2);
  });

  it("returns 'Mi' for ['Mi', 'chiamo', 'Dominique'", () => {
    assert.strictEqual(head(["Mi, chiamo", "Dominique"]),"Mi");
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });

});