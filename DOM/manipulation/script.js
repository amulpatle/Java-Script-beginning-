// const heading = document.querySelector(".heading");
// heading.innerHTML = "web dev is awesome";
// heading.style.color = "red";
// heading.style.fontSize = "100px";

// heading.classList.add("title");
// heading.classList.remove("heading");

// create elemtn

const heading = document.createElement("h1");
heading.innerHTML = "javascript is awesome";
heading.classList.add("title");
const parent = document.querySelector(".parent");
parent.appendChild(heading);

const subHeading = document.createElement("h3");
subHeading.innerHTML = "web dev is awesome";
parent.appendChild(subHeading);

heading.insertAdjacentElement("beforebegin", subHeading);

console.log(heading);
