let food = [20, 40, 100, 30];
let gas = [68, 54, 65, 10, 22];
let game = [66, 45, 32, 78, 9];

function calculate(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`you are spending too much `);
  }
  console.log(`your goot total is less than 100`);
  return total;
}

const gasToal = calculate(gas);
const foodTotal = calculate(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
