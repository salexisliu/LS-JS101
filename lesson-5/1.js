
let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let totalA = a.reduce((num, next) => num + next) 
  let totalB = b.reduce((num, next) => num + next)
  
  return totalA - totalB
  
}
)


console.log(scores)