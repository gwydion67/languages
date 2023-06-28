var a = 20;
let b = 30;

console.log(a,b);

var a = 23;
//let b = 44;
//- variables declared with let keyword cannot be re-declared

if(true)
{
    let b = 40;
    console.log(b); //we get output 40 which is of the 'b' inside the if block
}

console.log(b); //here the output is again 30 which is the value present outside the if block

// variables declared with let are block scoped 


//CONST

//const keyword similar to let except it cannot be re-defined i.e it has a constant value throughout its scope

const d = 11;

// d=9; this gives an error

console.log(d);
