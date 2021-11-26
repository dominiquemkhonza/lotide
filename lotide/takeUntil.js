
  /* 
  a) return slice of the array with elements taken from the beginning
  b) iterate until callback/predicate returns a "truthy" value
  */ 

//////// test code /////////

const data = ["He", "loves", "me!", "🌺", "He", "loves", "me", "not!"];
const data2 = [5, 4, 3, 2, 1, 0, "Happy New Years!", -1, -2, -3, -4, -5];

///////////////////////////

const takeUntil = function(list, callback) {
  let newList = [];

  for(let i = 0; i < list.length; i++)
  {
    if(callback(list[i])){
      console.log(`${list[i]} is false`);
      return newList;
    }

    newList.push(list[i]);
  }

  return newList;

}


const results = takeUntil(data, x => x === '🌺');
console.log(results);
const results2 = takeUntil(data2, x => x < 0);
console.log(results2);

