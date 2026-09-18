// JavaScript Dom  
// <!-- Task 1 -->

let a = document.getElementById("main-title");
console.log(a);

let b = document.querySelector(".description");
console.log(b);

let c = document.getElementsByClassName("item produce");
console.log(c);

let e = document.querySelectorAll(".item.dairy");
console.log(e);

let f = document.getElementsByTagName("label");
console.log(f);

let g = document.getElementsByName("category");
console.log(g);
console.log(g[0].value);

// <!-- Task 2 -->

let title = document.querySelector("#main-title");
console.log(title);

let paragraph = document.querySelector(".description").innerHTML;
console.log(paragraph);


let item = document.querySelector(".item.produce").innerHTML;
console.log(item);

let ul = document.querySelector("#grocery-list");
console.log(ul);

let li = document.querySelectorAll(".item");
console.log(li);

let x = document.querySelectorAll(".produce");
console.log(x);

let z = document.querySelectorAll(".dairy");
console.log(z);

let y = document.querySelectorAll("#user-form input [type='checkbox'");
console.log(y);


let h = document.querySelector(".description");
h.style.fontSize = "20px";
h.style.color = "green";

let i = document.querySelector(".produce");
i.style.backgroundColor = "yellow";
i.style.padding = "10px";

let d = document.querySelector("#main-title");
console.log(d.classList.add("title"));

let u = document.querySelector(".produce");
console.log(u.classList.add("Select"));





