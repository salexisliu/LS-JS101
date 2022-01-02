let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
//return multiples

function mul3(arr){
  let res  = arr.map((array => {
    return array.filter((el) =>
      (el % 3 === 0)
    )
  }))
  return res
}

console.log(mul3(arr))