function addValues(value1, value2) {
  return value1 + value2;
}

const add = function (a, b) {
  return a + b;
};
const firstval = addValues(5, 6);
const secondVal = addValues(9, 55);
const Arrays = [firstval, secondVal, add(11, 3)];
console.log(Arrays);

const mul = (a, b) => a * b;
console.log(mul(6, 7));
