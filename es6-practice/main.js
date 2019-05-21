console.log('hello world');

let name = 'Allison';
name = 'Emily';

const emily = 'emily';

console.log(name);
console.log(emily);

const color = [
  'red',
  'blue',
  'green',
  'purple'
];

// console.log('--standard loop--');
// for (let i = 0; i < colors.length; i++) {
//   console.log(color[i])
// }

  // console.log('--For of--')
  // for (let color of colors) {
  //   console.log(color[i]);
  // }

  // console.log('-- with index')
  // for (let [index, element] of colors.entries()) {
  //   console.log(element + ' is in ' + index)
  // }

  // console.log('-- eith index')
  // for (let [index,element] of collrs.entries()) {
  //   console.log(element + )
  // }

  // function addNumbers(a, b) {
  //   return a+b;
  // }

  // addNumbers(1,2)
  // const subtractNumbers = (a,b) => {
  //   a - b
  //   console.log(a)
  //   return

console.log('-- Array manipulation');
const persons = [
  {
    id: 1,
    name: "Lucas",
    mood: "Hungry"
  },
  {
    id: 2,
    name: "Sasha",
    mood: "Excited"
  },
  {
    id: 3,
    name: "David",
    mood: "Uncaffinated"
  }
];

console.log(persons[0])
const personWithId1 = persons.find(person => person.id === 1)
console.log(personWithId1)

const peopleWithId1 = persons.filter(person => person.id ===1)
console.log(peopleWithId1)

persons.forEach(person => {
  if(person.mood === 'Hungry') {
    console.log(person)
  }
})

persons.forEach(person => {
  if(person.mood === 'Hungry') {
    console.log(`${person.name} is ${person.mood}!`)
  }
})

const newArray = persons.map(person => {
  if (person.mood === 'Excited') {
    person.mood = 'Tired'
    return person;
  }
  return null;
})

console.log('persons after mapping: ', persons)
