let userProfile = {
    name: "Ali",
    age: 18,
    skill: ["Html", "css", "JavaScript"],
    isAvailable: true
}
console.log(userProfile);
// Add to country
userProfile.country = "pakistan";
// Updataing age 
userProfile.age = 19;
console.log(userProfile);
// delete the isAvilable property 
delete userProfile.isAvailable;
console.log(userProfile);
// Output : css
console.log(userProfile.skill[1]);
// Adding new property 
userProfile.address = {
    city: "swat",
    zipCode: 2313,
};
console.log(userProfile.address.city);


let Booking = {
    customerName: "Ahmed",
    age: 12,
    isStudent: true,
    basePrice: 1000
}
console.log(Booking);
// Add the new property 
Booking.status = "Ault Ticket";
Booking.Status = "Minor Ticket";
console.log(Booking);
// Useing condition 
if (Booking.age >= 18) {
    Booking.status = "Adult"
} else {
    Booking.status = "minor ticket "
};


let gread = (Marks) => {
    if (Marks >= 90 && Marks <= 100) {
        return "A"
    }
    else if (Marks >= 80 && Marks <= 89) {
        return "B"
    }
    else if (Marks >= 70 && Marks <= 79) {
        return "C"
    }
    else if (Marks >= 60 && Marks <= 69) {
        return "D"
    }
    else {
        return "Fail"
    }
};

let greadResult = gread(56);
console.log(greadResult);


let order = {
    itemName: "Headphoes",
    price: 3000,
    isFreeShoping: false
}
console.log(order);
// useing condition 
if (order.isFreeShoping === true) {
    console.log(order.shippingCost = 0);
} else {
    console.log(order.shippingCost = 250);
};
totalAmount = order.price + order.shippingCost;
console.log(order);


let Student = {
    name: "Ahmed",
    totalMarks: 500,
    obtainedMarks: 410,
    calcultatePercentage(){ 
        return (this.obtainedMarks / this.totalMarks) * 100; 
    },
    getPassStatus() {  
        if (this.calcultatePercentage() >= 50){
            return "Pass";
        }
        else { 
            return "Failed";   
        }
    }
};
console.log(Student.calcultatePercentage());   
console.log(Student.getPassStatus());


let bankAccount = {
    accountHolder: "Ali",
    balance: 1000,
    deposit(amount) {
        this.balance = this.balance + amount;
        return "Deposit successful! New balance" + this.balance; 
    },
    withdraw(amount) {
        this.balance = this.balance - amount;
        return "Withdraw successful! New balance" + this.balance;
    }
};
console.log(bankAccount.deposit(500));
console.log(bankAccount.balance);
console.log(bankAccount.withdraw(500));
console.log(bankAccount.balance);

  
let cart = ["laptop", "Mouse", "keyboard"];
let cartUpdate = cart.push("HeadPhones"); 
let cartremove = cart.pop();
console.log(cart.length);
console.log(cart[1]);
console.log(cart);


let tasks = ["Check Email", "Write code" , "Review PR"];
tasks.unshift("Urgent Bug Fix");
tasks.shift();
console.log(tasks[0]);
console.log(tasks.length);
console.log(tasks);


let user = {
    name : "Ali",
    age : 17,
    hasTicket : true,
    isVipMember : false,
    canWatchMovie(movieAgeLimit){
        if(this.hasTicket && (this.age >= movieAgeLimit || this.isVipMember)){
            return "Access Granted: Enjoy the movie!"
        }else{
            return "Access Denied: Age limit or tictet missing"   
        }
    }
};
console.log(user.canWatchMovie(18));
console.log(user.canWatchMovie(13)); 