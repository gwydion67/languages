'use strict'


// using strict mode


// this points to an empty object when used in the global block

console.log(this);

// inside a function this keyword gives undefined 

function displayThis(){
    console.log(this);
}

displayThis();

// for a function inside an object the this keyword points to the object itself

let myobj = {
    name : 'abhishek',
    age : 20, 

    myfn : function (){
        console.log(this);
    }
}

myobj.myfn();

// for function inside a function inside an object this keyword gives undefined

let myobj2 = {
    name : 'abhishek',
    age : 20, 

    myfn : function (){
        function myfun3(){
            console.log(this);
        }

        myfun3();
    }
}

myobj2.myfn()

// IN BROWSER

// console.log(this) => window obj
// function => undefined 
// obj->function => windows obj
// obj->function->function => undefined
