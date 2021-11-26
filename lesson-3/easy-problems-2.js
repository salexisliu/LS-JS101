// q1
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace("important", "urgent")

//q2
let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.slice().reverse()


let sorted = [...numbers].sort((a, b) => b - a)

console.log(numbers)
console.log(reversed)
console.log(sorted)

//q 5

numbers.splice(2,1)
console.log("splice", numbers)

//q6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newarray = []
console.log(newarray.concat(...flintstones))

console.log(flintstones)

//q7
let flintstones7 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
const newObj = Object.entries(flintstones7).filter(pair => pair[0] === "Barney").shift();


console.log(newObj)

//q9
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(32));


function countLowercase(string) {
  let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "t") {
    count++;
  }
}
return count
}
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let statement3 = "t t t t t t t";
console.log(countLowercase(statement3))
console.log(statement3.split('').filter(char => char === 't').length);