// unordered collection of key-value pairs
//each key value pair is know as a property

//Object literal notation

var person = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age : 20,
    OwnsCar : false
};

console.log(person);

//dot notation

person.roll = "21EC30001";

console.log(person);

console.log(person.age);

// bracket notation

console.log(person['OwnsCar']);

//nested objects 
var school = {
    name: "xyz",
    since: "1999",

    clasees : {
        from: 2,
        till: 12
    }
};

console.log(school);