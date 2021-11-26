// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

//Question 3

let ages3 = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
let res3 = ages3.hasOwnProperty('Spot')
console.log("Q3,", res3)

//Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let res = 
munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase()
console.log(res);

//Question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
const newObj = Object.assign(ages, additionalAges);
console.log(newObj)

//Question 10

let advice = "Few things in life are as important as house training your pet dinosaur.";


const searchTerm = 'house'
const index = advice.indexOf(searchTerm)

console.log(advice.slice(0, index))

// Expected return value:
// => 'Few things in life are as important as '
