// Conditional Statements
// Comparison Operators
// >,<, >= ,<= , == , ===, != , !==
//else if and !
const num1 = 6;
const num2 = 6;
const result = num1 >= num2;
if (6 > 6) {
  console.log("5 is smaller then 6");
} else if (result) {
  console.log("both are equal");
} else {
  console.log("6 is greater then 5");
}

// == checks only value
// === checks value and type

const number1 = 5;
const number2 = "5";

const value = number1 == number2;
const value2 = number1 === number2;

console.log(value);
console.log(value2);
