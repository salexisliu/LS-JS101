

let array = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']]

let res = array.map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {
      return item > 13;
    } else {
      return item.length < 6;
    }
  })
} )

console.log(res)