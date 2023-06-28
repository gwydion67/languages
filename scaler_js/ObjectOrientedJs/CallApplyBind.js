let person1 = {
    firstName : "Abhishek",
    lastName : "Kumar",
    age : 20,

    printDetails : function(){
        console.log(`HI i am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    }
}


let person2 = {
    firstName : "Abhinav",
    lastName : "Kumar",
    age : 19,

    printDetails : function(){
        console.log(`HI i am ${this.firstName} ${this.lastName} and I am ${this.age} years old`)
    }
}

person1.printDetails();
person2.printDetails();

// here we are creating same function for multiple objects 
// this is violating dry rule
// we could create a class or constructor function and pass the method into the prototype of the constructor function

// but if we do not want to create classes but need similar function in multiple objects 

// we can do that using call methods

// call

let person3 = {
    firstName : "Raghav",
    lastName : "Kumar",
    age : 19,
}

person1.printDetails.call(person3);

/// what we can also do is bring the function outside the object 
 
let printDetails = function(city,state){
    console.log(`HI i am ${this.firstName} ${this.lastName} and I am ${this.age} years old and i am from ${city},${state}`)
}

printDetails.call(person1, 'ranchi' , 'jharkhand');

// we can also make the function accept some parameter 


// APPLY METHOD 
// in apply method we have to  put the arguments in an array 
// this is the only difference between call and apply methods

printDetails.apply(person1 , ['ranchi', 'jharkhand']);


//BIND METHOD
// bind allows us to store a function to an object and enable us to call it on a later point of time

let myfunc = printDetails.bind(person2, 'patna', 'bihar');
console.log(myfunc);
myfunc();
