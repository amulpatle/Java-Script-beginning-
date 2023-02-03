// Arrays , Functions and Objects
// return
// default undefined, shortcuts, ignores after

const wallHeight = 80;

function calculate(value) {
  console.log("the value in cm is : " + value * 2.54 + " cm");
  return value * 2.54;
}
const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);
// Every function default return type is undefined if we do not return anything
console.log(calculate(66));
