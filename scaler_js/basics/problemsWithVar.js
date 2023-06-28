var a = 21;

var a = 35;

console.log(a);

//here we are re-declaring a variable but this does not give any error 
//rather it gives the later declaration the priority

if(a == 35)
{
    var b = 40;
    console.log(b);
}

console.log(b);
//here b is defined in the scop of the if statement only while is accessible even outside of it
// variables declared by var keyword are not block scoped but funcion scoped
