// ===== Task 1 =====
let food = document.querySelector("#food-list");
let item = document.createElement("li");
item.textContent = "Burger";
food.appendChild(item);

// ===== Task 2 =====
let comment = document.querySelector("#comments-container");
let commentUpdate = document.createElement("div");
commentUpdate.classList.add("comment-card");
commentUpdate.textContent = "This article helped me understand appendChild";
comment.appendChild(commentUpdate);

// ===== Task 3 =====
let list = document.querySelector("#task-list");
let listUpdate = document.createElement("li");
listUpdate.textContent = "practice appendchild mini project";
let btn = document.createElement("button");
btn.textContent = "delete";
listUpdate.appendChild(btn);
list.appendChild(listUpdate);

// ===== Task 4 =====
let profile = document.querySelector("#skills-box");
let profileUpdate = document.createElement("span");
profileUpdate.classList.add("badge");
profileUpdate.textContent = "JavaScript";
profile.appendChild(profileUpdate);

// ===== Task 5 ===== 
let box = document.querySelector("#box");

let boxUpdate = document.createElement("p");
boxUpdate.textContent = "Hello JavaScript";
box.appendChild(boxUpdate);

// ===== Task 6 =====
let ul = document.querySelector("#ul");
let ulUpdate = document.createElement("li");
ulUpdate.textContent = "Pizza";
ul.appendChild(ulUpdate)

let div = document.querySelector("#div");
let divUpdate = document.createElement("h1");
 let para = document.createElement("p")
divUpdate.textContent = "My Skills";
para.textContent = "I am learning JavaScript";
div.appendChild(divUpdate);
div.appendChild(para)
