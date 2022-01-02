let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.

// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function makeObj(arr) {
  let obj = {}
  arr.forEach(subarray => {
    let key = subarray[0]
    let value = subarray[1]
    
    obj[key] = value;

  })
  return obj
}

console.log(makeObj(arr))