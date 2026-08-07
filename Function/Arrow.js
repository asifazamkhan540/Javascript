// This is JavaScript Arrow function

let add = (a , b) => a + b;
let addResult = add(2 , 8);
console.log(addResult);


let hello = () => "Hello";
console.log(hello());


let multiply = (num1, num2) => num1 * num2;
let multiplyUpdate = multiply(5, 8);
console.log(multiplyUpdate);


let cheakNumber = (num) => {
    if(num % 2 === 0){
        return "Even Number"
    }
    else{
        return "Odd Number"
    }
}
let cheakResult = cheakNumber(8);
console.log(cheakResult);


let NumberUpdate = (Number) =>{
    if(Number > 0){
        return "This is positive Number"
    }
    else if (Number < 0){
        return "This is Negative Number"
    }
    else if (Number === 0){
        return "The Number is Zero"
    }
    else{
       return "Not matching Number"
    }
}
let NumberResult = NumberUpdate();
console.log(NumberResult);


function getGrade (Num1) {
    if (Num1 >= 90){
        return "A"
    }
    else if (Num1 >= 80 && Num1 <= 89){
        return "B"
    }
    else if (Num1 >= 70 && Num1 <= 79){
        return "C"
    }
    else if (Num1 >= 60 && Num1 <= 69){
        return "D"
    }
    else {
        return "F"
    }
}
let getGradeResult = getGrade(70);
console.log(getGradeResult);


let findlarger = (a , b) => {
    if (a > b ){
        return "A is larger"
    }
    else{
        return "B is larger"
    }
}
let findlargerResult = findlarger(15, 20);
console.log(findlargerResult);

 
let operatorCheack = (a, b,  operator) => {
    if (operator === "+"){
        return a + b
    }
    else if (operator === "-"){
        return  a - b
    }
    else if (operator === "*"){
        return a * b
    }
    else if (operator === "/"){
        return a / b
    }
    else {
        return "Not matching operator"
    }
}
let operatorResult = operatorCheack(10 ,5 , "/");
console.log(operatorResult);


let Numbercheck = (name) => "Hello" + name;
console.log(Numbercheck (" World"));


let functionCheck = (Number1) => Number1 * 4;
let functionUpdate = functionCheck(4);
console.log(functionUpdate);

