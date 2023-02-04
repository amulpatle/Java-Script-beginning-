const months = [
  "January",
  "Fabruary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "thusday",
  "Friday",
  "Saturday",
];

const date = new Date();

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);
console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()},${
  months[month]
},${date.getFullYear()}`;

console.log(sentence);
