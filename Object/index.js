//  This is JavaScript object

const student = {
  name: "Aman",
  age: 18,
};
student.age = 19;
console.log(student.age);


let person = {
  name: "Ali",
  Age: "18",
  city: "Swat",
}
console.log(person.city);


let car = {
  Brand: "Toyota",
  Model: "corolla",
  year: "2024"
}
delete car.year;
console.log(car.Brand);
console.log(car);


let laptop = {
  Brand: "Dell",
  Ram: "8GB",
}
laptop.storage = "512GB";
console.log(laptop);


let phone = {};
phone.Brand = "Samsung";
phone.model = "s24";
phone.price = "8000";
console.log(phone);


let user = {
  name: "Ali",
  skill: "JavaScript",
  Country: "pakistan",
  Coures: {
    Book: "English",
  }
}
console.log(user);
console.log(user.Coures.Book);


let school = {
  schoolName : "City High School",
  studentProfile :{
    fullName : "Asif Azam", 
    grad : 10,
    Addres :{
      City :"Swat",
      zipCode : 231331,
    }
  }
}

console.log(school)


let students = {
    name: "Asif",
    age: 18,
    city: "Swat"
};

console.log(student.name);
student.age = 19;
student.skill = "JavaScript";
delete student.city;
console.log(student);


let product = {
  name : "laptop",
  price : 900,
  brand : "Dell"
}
console.log(product);


let users = {
    name: "John",
    age: 25
};

console.log(user.name);
user.age = 30;



let book = {
  title : "javaScript",
  pages : 250,
}

book.price = 100;
console.log(book)


let employee = {
  name : "Ahmed",
  Salary : 50000,
}

if(employee.Salary >= 50000){
  console.log("Good Salary");
}else{
  console.log("Low salary")
}


let gamer = {
  name : "Ali",
  games : ["payback", "Minecraft", "FIFA"],
}
console.log(gamer.games[1]);


let account = {
    username: "khan",
    balance: 5000,
};

console.log(account.username);
account.balance = 7000;


const defaultSettings = {
    theme: "light",
    notifications :false
};


const customSettings = {
    theme: "dark",
    notifications : true
};

const finalSettings = Object.assign({}, customSettings, defaultSettings );
console.log(finalSettings);


const firstUser = { 
    age: 20, 
    city: "Swat",
};

const secondUser = {
     name: "Ali",   
    age: 25,
    city: "Mingora",
    job: "Developer"
};

const result = Object.assign({}, firstUser, secondUser);
console.log(result);