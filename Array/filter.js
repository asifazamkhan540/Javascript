// This is javascript Array method practice

let numbers = [2, 5, 7, 8, 12, 15];    
let a = numbers.filter(function(numbers){
    return numbers > 5;
})
 console.log(a);


 let num = [5, 12, 3, 20, 8, 15];
 let b = num.filter(function(num){
    return num < 10 ;
 })
 console.log(b);


 let names = ["Ali", "Asif", "Ahmed", "sara", "Usaman"];
 let c = names.filter(function(names){
    return names.length > 4;
 })
 console.log(c)