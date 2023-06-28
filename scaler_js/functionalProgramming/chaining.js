let arr = [
    {name : "A" , age : 13 , gender : "M"},
    {name : "B" , age : 15 , gender : "M"},
    {name : "C" , age : 21 , gender : "F"},
    {name : "D" , age : 17 , gender : "M"},
    {name : "E" , age : 16 , gender : "F"},
    {name : "F" , age : 31 , gender : "M"},
    {name : "G" , age : 25 , gender : "F"},
    {name : "H" , age : 43 , gender : "M"}
]

// age of all the mens 

let males = arr.filter(function(obj){
    return obj.gender == 'M';
})

let ageOfMales = males.map(function(male){
    return male.age;
})

// doing this using chaining 

let AOM = arr.filter(function(obj){
    return obj.gender == 'M';
}).map(function(male){
    return male.age;
})

// filter positive elements and give the total amount
const transactions = [1000, 3000, 4000, 2000, -898 , 3800, -4500];

let deposit = transactions.filter(function(n){
    return n>0;
}).reduce(function(acc , value){
    return acc + value;
},0)

console.log(deposit);