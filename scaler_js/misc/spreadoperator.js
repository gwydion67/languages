// spread operator {...}

let firstPerson = {
    name :  ' abhishek',
    age : 20 
}

let secondPerson = {...firstPerson};

secondPerson.name = 'tony'

console.log(firstPerson);
console.log(secondPerson);

// problem with spread 

let first = {
    name : "Abhishek",
    age : 20, 
    address : {
        city : 'ranchi',
        state : 'jharkhand'
    }
}

let second = {...first};// shallow copy 
second.address.city = 'delhi'

console.log(first)
console.log(second)

// this does not create a separate object and address object is passed as reference
// we can re-spread the nested objects but it becomes tedious if there are multiple nested objects

// the solution is Deep copy

/// DEEP COPY

let second2 = JSON.parse(JSON.stringify(first));

second2.address.city = 'kerala';

console.log(first);
console.log(second2);