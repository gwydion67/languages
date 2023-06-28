// sum of every element in an array

let num = [1,2,3, 5,10];
let sum = 0;
for(let i =0; i<num.length; i++){
    sum += num[i];
}

console.log(sum);

// reduce method : 

let result = num.reduce(function( acc, value){
    let newsum = acc + value;
    return newsum;
},0 ) // 0 is the initial accumulator ; after the each iteration the new accumulator is the value returned by the calback function

console.log(result);

let product = num.reduce(function(acc = 1,value){
    let newprod = acc * value;
    return newprod;
});

console.log(product);