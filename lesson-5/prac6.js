
// pattern
//   (Name) is a(age) - year - old(male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};

function listMonsters(list) {
  Object.entries(munsters).forEach(monster => {
    let name = monster[0];
    let age = monster[1].age
    let gender = monster[1].gender

    console.log(`${name} is a ${age} year-old ${gender}.`)
  })

}

console.log(listMonsters(munsters))