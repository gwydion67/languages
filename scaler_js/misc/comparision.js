let a = 2; 
let b = '2'; 

console.log(a==b);  /// only checks the value
console.log(a===b); /// checks for the values as well as the type of the variable

// == is also know as loose checking 
// === is know as strict checking

if(a){
    console.log('i am truthy')
}
else{
    console.log('i am falsy')
}

// in js every value has a boolean values

// these value correspond to falsy:
// false 
// 0
// -0
// 0n
// '' , "", ``(empty string)
// null
// undefined
// Nan
