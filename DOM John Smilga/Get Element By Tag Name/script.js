//select the element or group of element the we want
// decide the effect we want to apply tot the selection

//getElementsByTagName('tagname')
// node-list = array-like object
// index, length property but not array methods
const heading = document.getElementsByTagName("h2");
heading[0].style.color = "red";
// console.log(heading.length);

const item = document.getElementsByTagName("li");

// item.forEach(function (item) {
//   console.log(item);
// });

const betterItems = [...item];
betterItems.forEach(function (item) {
  console.log(item);
});
