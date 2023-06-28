// to check even number in an array and put them in a new array

let numbers = [1,2,20, 35, 12, 17 , 46];
let evenarray = [];
for( let i=0;i<numbers.length;i++){
    if(numbers[i]%2 == 0){
        evenarray.push(numbers[i]);
    }
}
console.log(evenarray);

// Declarative way : using filter method 

// filter returns a new array that match a given condition

let evennums = numbers.filter(function(n){
    return (n%2 == 0);
})

console.log(evennums);

//
//

const transactions = [1000, 3000, 4000, 2000, -898 , 3800, -4500];

const deposits = transactions.filter(function(n){
    return n>0 ;
})

console.log(deposits);
