let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };

console.log("1", Object.keys(capitals))

console.log("2", Object.values(capitals)[0])

console.log("3", Object.entries(capitals))

console.log("4", capitals)

// lesson 
let str = "hello"
str.concat('World!')
console.log(str)
str = str.concat(' there!')

console.log(str)

//iterating
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}

//iterating over an Object

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets)
let counter = 0;

// while (counter < pets.length) {
//   let currentPet = pets[counter]
//   let currentPetNumber = numberOfPets[currentPet]
//   console.log(`I have ${currentPetNumber} ${currentPet}`)
//   counter++;

// }

for (let curPet in numberOfPets) {
  let currentPetNum = numberOfPets[curPet];
  console.log (`I have ${currentPetNum} ${curPet}`)
}


function add(x, y) {

  // input x: integer
  // input y: integer
  // operation: function with take parameter x and add parameter y to it 
  // output: integer (sum of x + y) 

  // used in calc.js within body class
  return x + y
}