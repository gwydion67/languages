function test(){
    let a = 2; 
     
    function test1(){
        console.log(a);
    }
    return test1;
}

let fun = test();
console.log(fun)
fun();

/// this returned functions are know as closures

function greet (){
    let name = 'abhishek';
    let age = 20;
    function displayName(){
        console.log(`HI ${name}`);

        function displayAge(){
            console.log(`${name}'s age is ${age}`)
        }

        return displayAge;
    }

    return displayName;
}

let g1 = greet();

// g1();

let g2 = g1();
g2();

