// Array Properties and methods

let names = ["john", "bobo", "barry", "olga", "ben"];

// length
console.log(names.length);
console.log(names[2]);

console.log(names[names.length - 1]);

// concat
const lastNames = ["paper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse

console.log(allNames.reverse());

//unshift  - push element in front of the array
allNames.unshift("amul");
allNames.unshift("$");
console.log(allNames);

//shift - remove element in front of the array
allNames.shift();
allNames.shift();
console.log(allNames);

// push
allNames.push("amul");
allNames.push("$");
console.log(allNames);

// pop
allNames.pop();
allNames.pop();
console.log(allNames);

// splice - mutates original array
const specificNames = allNames.splice(2, 1);
console.log(specificNames);
console.log(allNames);
