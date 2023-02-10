// innerHTML
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item</li>
      <li>list item</li>`;
document.body.appendChild(ul);
