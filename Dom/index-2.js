// ===== JavaScript Dom methodes practice =====

// <!-- task 1 -->
let a = document.querySelector("#box1");
a.classList.remove("active");
console.log(a.classList);

let b = document.querySelector("#box1");
b.classList.add("highlight");
console.log(b.classList);



// <!-- Task 2 -->
let c = document.querySelector("#box2").className = "card highlight";
console.log(c);

let e = document.querySelector("#box2");
e.style.color = "Blue";
e.style.fontSize = "20px";

let box = document.querySelector("#box1").classList.contains("ksy");
console.log(box);

let x = document.createElement("p");
console.log(x);   
