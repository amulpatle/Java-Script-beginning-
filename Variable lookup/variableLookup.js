//Variable Lookup
//{} - code block

const globalNumber = 5;
function add(num1, num2) {
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}
console.log(add(5, 6));
