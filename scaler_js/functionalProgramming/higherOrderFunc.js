//higher order functions are functions that operate on other functions
//this can be by receiving a callback function as an argument


let arr = [1,2,3,4,5];

//array containing squares of the array

let sq = [];

for (let i=0 ;i< arr.length ; i++){
    sq.push(arr[i]*arr[i]);
}

console.log(sq);


// map

const num = arr;

const sqNum = num.map( function (n){
    return n*n;
} )

console.log(sqNum);

//Map will loop through every element of your array and will perform specific operations that you have provided 
// and map returns a new array with your results

const transactions = [1000, 3000, 4000, 2000, -898 , 3800, -4500];
const inrtoDollar = 80;
const inDollar = transactions.map(function (n){
    // return n/inrtoDollar;
    return(n/inrtoDollar).toFixed(0);
});

console.log(inDollar);

//using for each

let inDollars = transactions.forEach((n) => {
    // return(n/inrtoDollar).toFixed(0); //does not return 
    console.log((n/inrtoDollar).toFixed(0));
});  


// console.log(inDollars);
