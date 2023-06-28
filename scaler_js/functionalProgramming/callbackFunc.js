const prompt=require("prompt-sync")({sigint:true}); 
//calback is a function that is passed to another functions
function printFirstName(firstname){
    console.log(firstname);
}

printFirstName('abhishek');


function printLastName(lastname){
    console.log(lastname);
}

printLastName('kumar');


// using callback

function printFirstNamec(firstname, cb){
    console.log(firstname);
    cb('Kumar');
}

function printLastNamec(lastname){
    console.log(lastname);
}

printFirstNamec('Abhishek', printLastNamec);

////////////////////////////////////////////////////

const ifEven = (n) => {
    return (n%2 == 0);
}

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num);
    let isEven = (isNumEven == true)?'even' : 'odd';

    console.log(`the number ${num} is an ${isEven} number `);

}

let a = prompt('enter a number   ');
printResult(ifEven, a);