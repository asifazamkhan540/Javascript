// This is javaScript Array method Arrray map practice
            
let number = [1, 2, 3, 4, 5,];
let a = number.map(function(number){
    return number*2;
})
console.log(a);


const  prices = [10, 20, 30, 50, 100];
let x = prices.map(function(prices){
    return prices * 2;
})
console.log(x);


let nam = ["Asif", "Ali", "Ahmad"];
let b = nam.map(function(nam){
    return nam + "khan";
})
console.log(b);


let fruits = ["Apple", "banna", "mango"];
let c = fruits.map(function(fruits){
    return fruits.toUpperCase();
})
console.log(c);


let num = [10, 20, 30, 40];
let e = num.map(function(num){
    return num / 2;
});
console.log(e);