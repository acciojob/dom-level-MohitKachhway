let ul = document.querySelector("ul");
let li = ul.children;
let l = document.getElementById("level");
let ind = Array.from(li).indexOf(l)
alert(`The level of the element is: ${ind}`)
