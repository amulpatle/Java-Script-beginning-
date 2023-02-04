function morning(name) {
  return `good morning ${name}`;
}

function greet(name, cb) {
  const myName = "AMul";
  console.log(`${cb(name)}, my name is ${myName}`);
}

greet("bobo", morning);
greet("patle Ji ", morning);
