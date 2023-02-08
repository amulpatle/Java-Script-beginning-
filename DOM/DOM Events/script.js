const button = document.querySelector("#btn");
const heading = document.querySelector("#heading");

button.addEventListener("click", function (event) {
  heading.style.color = "purple";
  heading.style.fontSize = "60px";
  console.log("button clicked", event);
});
