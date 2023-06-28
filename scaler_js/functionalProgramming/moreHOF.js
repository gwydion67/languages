// Find : find returns the first element of an array that sattisfies the given condition

const transactions = [1000, 3000, 4000, 2000, -898 , 3800, -4500];

let firstWithdrawal = transactions.find(function(n){
    return n<0
})
console.log(firstWithdrawal);

let index = transactions.findIndex(function(n){
    return n<0;
});
console.log(index);

//some : some method return a boolean value, it returns true if atleast one element sattisfies the given condition

let checkWithdrawal = transactions.some(function(n){
    return n<0;
})

console.log(checkWithdrawal);

//every : gives true iff every element sattisfies the condition

let checkWithdrawalevery = transactions.every(function(n){
    return n<0;
})

console.log(checkWithdrawalevery);