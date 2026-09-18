// ==== Task 1 =====
let click = document.querySelector("#click-btn");
let output = document.querySelector("#output");
click.addEventListener("click", () => {
    let para = document.createElement("p");
    para.classList.add("message");
    para.textContent = "you Click  the button";
    output.appendChild(para);
});

// ==== Task 2 ==== 
let inpput = document.querySelector("#user-input");
let btn = document.querySelector("#add-btn");
let not = document.querySelector("#notes-container");
btn.addEventListener("click", () => {
    let x = document.createElement("div");
    x.classList.add("user-text");
    x.textContent = inpput.value;
    not.appendChild(x);
    inpput.value = "";
}); 


// ==== Task 3 ==== 
let name = document.querySelector("#name-input");
let namebtn = document.querySelector("#add-name-btn");
let namelist = document.querySelector("#name-list");

namebtn.addEventListener("click", () =>{
    let li = document.createElement("li");
    li.textContent = name.value;
    namelist.appendChild(li)
    name.value = ""
});


// ==== Task 4 ==== 

let taskinput = document.querySelector("#task-input");
let taskbtn = document.querySelector("#task-btn");
let errorbox = document.querySelector("#error-box");
let tasklist = document.querySelector("#task-list");

taskbtn.addEventListener("click", () =>{
    if(taskinput.value === ""){
        errorbox. textContent = "please enter some text!"
    }
    else{
       errorbox. textContent = "";
       let li = document.createElement("li");
        li.textContent = taskinput.value;
        li.classList.add("Valid-item");
        tasklist.appendChild(li);
        taskinput.value = ""
    }
});