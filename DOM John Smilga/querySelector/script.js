// select the element or group of elements the we want
// decide the effect we awnt to apply to the selection

//querySelector('any css' ); - selects single
//querySelectorAll('any css') - selects all

const listItem = document.querySelector("#result");
// console.log(listItem);

listItem.style.background = "blue";

const list = document.querySelector(".special");
// console.log(list);
list.style.color = "red";

const item = document.querySelectorAll(".special");

item.forEach(function (list) {
  console.log(list);
  list.style.color = "yellow";
});
