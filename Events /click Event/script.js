// select element
// addEventListener()
// what even , wat to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changecolor() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changecolor);
