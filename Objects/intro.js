// Arrays, Functions and Objects
// Objects - key/value pairs methods
//dot notation

// Objects in javascript are collection of properties
// properties are also refers to keys

const person = {
  name: "amul",
  age: 19,
  education: true,
  married: false,
  siblings: ["amul", "atul"],
  greeting() {
    console.log("hello my name is amul");
  },
};

console.log(person.name);
console.log(person.age);
console.log(siblings[1]);
person.greeting();
