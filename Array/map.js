// This is javaScript Array method Arrray map practice
            
let numbers = [1, 2, 3, 4, 5,];
let UpdateNumbers = numbers.map(function(number){   
    return number * 2;
})
console.log(UpdateNumbers);


const  prices = [10, 20, 30, 50, 100];
let PricesResult = prices.map((prices)=>{
    return prices * 2; 
})
console.log(PricesResult);


let names = ["Asif", "Ali", "Ahmad"];
let updatedNames = names.map(function(names ){
    return names + " " + "khan";
})
console.log(updatedNames);


let fruits = ["Apple", "banna", "mango"];
let UpdateFruits = fruits.map(function(fruits){
    return fruits.toUpperCase();
});
console.log(UpdateFruits);



let num = [10, 20, 30, 40];
let numResult = num.map(function(num){
    return num / 2;
});
console.log(numResult);