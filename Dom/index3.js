let para = document.getElementById("para");
let dic = document.getElementById("dic");
let inc = document.getElementById("inc");
let count = 0;

inc.addEventListener("click", ()=> {
    para.innerHTML = count++ ;
});


dic.addEventListener("click", () => {   
    para.innerHTML = count--;
});  
