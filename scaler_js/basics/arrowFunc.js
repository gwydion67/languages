let a = 2;

let test1 = function(){
    console.log(a+2);
}

let test2 = () => {
    console.log(4);
}

let test3 = a => {
    console.log(a+5);
}

let test4 = (a,b) => console.log(a+b);

test3(2);