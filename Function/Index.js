// This is javaScript function

function hello(){
    console.log("Hello Word");
}
hello();


function WellCome(){
    console.log ("WellCome to JavaScript"); 
}
WellCome();


function MyName(){
    console.log("Ahmad");
}
MyName();


function Add(price, number){
    return price + number;
} 
let addUdate = Add(6,5);
console.log(add);


function greet(){
    console.log("Ali");
}
greet()
    

function fullName (){
    console.log("Ali", "khan");
}
fullName();


function multiply (){
    console.log(2 * 4);
}
multiply();


function add(prices1, prices2, prices3){
    return prices1 + prices2 + prices3;
}
let addResult = add(2, 4, 3);
console.log(addResult);


function numbers(num1, num2, num3){
    return num1 * num2 / num3;
}
let numbersResult = numbers(3, 5, 2);
console.log(numbersResult);


function cart(a, b, c,){
    return a + b - c;
}
let cartUpdate = cart(4, 2, 7);
console.log(cartUpdate);


function subtractAndAdd(num1,num2,num3){
 return num1 - num2 + num3;
}
console.log(subtractAndAdd(2,3,4));
console.log(subtractAndAdd(3,2,4));


// function multiplictionNumber (num1 , num2, num3){
//     return num1 * num2 * num3;
// }
// let multiplictionlResults = multiplictionNumber(5,4,2);
// console.log(multiplictionResults);



function nameUpdate(nam){
    return nam;
}
let nameResult = nameUpdate("Hello Asif");
console.log(nameResult);


function multiplicationUpdate (num1, num2){
    return num1 * num2;
}
let multiplictionResult = multiplicationUpdate(5,10);
console.log(multiplictionResult);


function checkage(age){
    if(age >= 18){
        return "You can enter";
    }
    else{
        return "you cannot enter";
    }
}
let ageResult = checkage(12);
console.log(ageResult);


function checkNumber (num){
    if(num > 0){
        return "Positive";
    }
    else if(num < 0){
        return "Negative";              
    }
    else if (num === 0){
        return "Zero";
    }
    else{
        return "NaN";
    }
}
let NumberResult = checkNumber(1);
console.log( NumberResult);


function car(x){
    return x * x;
}
let carResult = car(4);
console.log(carResult);