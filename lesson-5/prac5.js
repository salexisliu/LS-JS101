let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

function monstersAge(family) {

  let totalMaleAge = 0;
  for (let monster in munsters) {
    if (munsters[monster].gender === 'male') {
      totalMaleAge += munsters[monster].age
    }
  }
  return totalMaleAge;
}

console.log(monstersAge(munsters))