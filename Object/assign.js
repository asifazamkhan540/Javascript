// The javaScript object method assign

let personalInfo = {
    firstNmae : "Ali",
    city : "lahore"
};

let jobInfo = {
    firstNmae : "khan",
    title : " web Developer",
    remote : true
};
let result = Object.assign({},personalInfo, jobInfo);
console.log(result);


let userSetting = {
    them : "ligth",
    notification : true,
    fontsize : "medium"
};
 
let newInfo = {
    them : "Dark",
    fontsize : "large"
};
console.log(Object.assign({},userSetting, newInfo));


let originalproduct = {
    id : 101,
    name : "laptop",
    price : 800
};

let productCopy = {};
productCopy.price = 900;

console.log(Object.assign({}, originalproduct, productCopy));


let person = {
    name : "Ali",
    age  : 18,
};

let locations = {
    city : "swat",
    country : "pakistan",
};
console.log(Object.assign({}, person, locations));


let first = {
    name : "Ali",
    age : 20
};
let second = {
    name : "Ahmed",
    city : "lahore"
};
console.log(Object.assign({}, first, second));


let basic = {
    name : "Ali"
};

let eduction = {
    feild : "computer science"
};

let skill = {
    skill : "JavaScript"
};
console.log(Object.assign({}, basic, eduction, skill));

 
let user1 = {
    name : "Ahmed",
    age : 25
};

let user2 = {
    age : 20,
    city : "swat"
};
console.log(Object.assign({},user1, user2));


let boy = {
    name : "Ahmed",
    city : "mingora",
};

let job = {
    title : "web developer",
    salary : 50000,
};
console.log(Object.assign({},boy,job));


let Home = {
    city : "swat",
    country : "pakistan",
};

let work = {
    city : "Dubai",
    job : "Developer"
};
console.log(Object.assign({}, Home, work));