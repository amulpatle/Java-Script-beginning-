// forEach
// does not return new array

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

// function showperson(person) {
//   console.log(person);
// }
// people.forEach(showperson);

function showperson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showperson);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
