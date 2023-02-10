// select the element or group of elements the we want
//decide the effect we want to apply to the selection

// childNodes - retuns all childNodes including whitespace which is treated as a text node

// children
//firstChild
// lastChild

const result = document.querySelector("#result");
const allChilren = result.childNodes;
// console.log(allChilren);

const children = result.children;
console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);
