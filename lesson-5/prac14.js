let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// The return value should look like this:
// Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables.The sizes should be uppercase, and the colors should be capitalized.

// Copy Code
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

function getInfo(obj) {
 let capitalize = word => word[0].toUpperCase() + word.slice(1)

 return Object.values(obj).map(fruitObj => {
   if (fruitObj['type'] === "fruit") {
     return fruitObj['colors'].map(char => capitalize(char))
   } else {
     return fruitObj['size'].toUpperCase();
   }
 })

}

console.log(getInfo(obj))

console.log(obj)