const properties = [
    {
        name: "Modern Family House",
        city: "London",
        price: 450000,
        bedrooms: 4,
        type: "House"
    },
    {
        name: "Luxury Apartment",
        city: "Manchester",
        price: 320000,
        bedrooms: 3,
        type: "Apartment"
    },
    {
        name: "City Center Flat",
        city: "Birmingham",
        price: 280000,
        bedrooms: 2,
        type: "Apartment"
    },
    {
        name: "Large Family Home",
        city: "Leeds",
        price: 520000,
        bedrooms: 5,
        type: "House"
    },
    {
        name: "Small Modern Flat",
        city: "Liverpool",
        price: 220000,
        bedrooms: 2,
        type: "Apartment"
    }
];

console.log(properties)
for (let i = 0; i < properties.length; i++){
    if (properties[i].price < 300000) {
        console.log(properties[i]);
    }
    else {
        console.log("skip this")
    }
}
for (let i = 0; i < properties.length; i++){
    if (properties[i].type === "House"){
        console.log(properties[i]);
    }
    else {
        console.log("Not same Type");
    }
}
for (let i = 0; i < properties.length; i++){
    if (properties[i].bedrooms === 3) {
        console.log(properties[i])
    }
    else {
        console.log("Not same bedrooms")
    }
}

let total = 0;

for (let i = 0; i < properties.length; i++){
    total += properties[i].price;
}
console.log(total);


let highestPrice = 0;

for (let i = 0; i < properties.length; i++) {

    if (properties[i].price > highestPrice){
        highestPrice = properties[i].price;
    }
}
console.log(highestPrice);


let smallestprice = 220000;

for(let i = 0; i < properties.length; i++){
    if(properties[i].price < smallestprice){
        smallestprice = properties[i].price;
    }
}
console.log(smallestprice);


let Alltotal = 0;

for (let i = 0; i < properties.length; i++){
    Alltotal += properties[i].price;
};
let average = total / properties.length;
console.log(average);

  
let findcity = (city) => {

    for (let i = 0; i < properties.length; i++){

        if (properties[i].city === city){
            return properties[i];
        }
    }  
    return "City not found";
}
let result = findcity("London");

console.log(result);
