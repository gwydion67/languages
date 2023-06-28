//check if the square of a given number is even or not

//imperative way of writing code 

const a = 4;
const asquared = a*a;

let isEven;

if(asquared % 2 == 0){
    isEven = true;
}

else {
    isEven = falsle;
}
console.log(isEven);

//Declarative way 

const checkSquare = (x) => (x*x %2 == 0 ? true : false);
console.log(checkSquare(5));

///function are of two types : pure and impure 
//pure function always give same output for same output
//while inpure functions may give different outputs for same inputs
//this can be due to for eg. dependence on a variable defined outside the scope of the function
//a pure function must also not use any external resource such as console
// instead function should only do what they are made to do and return the final output

