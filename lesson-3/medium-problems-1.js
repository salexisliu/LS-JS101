//q1 
function ascii(string) {
  for (let i = 0; i < 10; i++) {
  console.log(" ".repeat(i) + string)
}
}

console.log(ascii("hello I am sam"))

//q2
let munstersDescription = "The Munsters are creepy and spooky.";

function switchCase(string) {
  return string.split("").map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("")
}

console.log(switchCase(munstersDescription))

//Q3
function factors(number) {
  let divisor = number;
  let factors = [];

  while (number > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
}
return factors
}


console.log(factors(-5));

//q8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};


function messWithDemographics(demoObject) {

  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  
}

messWithDemographics(munsters)
console.log(munsters)

// q 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}


