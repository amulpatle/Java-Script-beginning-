let name = "john";
function connect() {
  const name = "peter";
  const age = 45;
  console.log(`hey my name is ${name} and i am ${age} year old`);
  becomeglobal = "global variable";
}

connect();

console.log(`hey my name is ${name} and i am `);
console.log(becomeglobal);
