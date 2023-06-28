const fs = require('fs');


// reading a file synchronously
console.log('first line');

let data = fs.readFileSync('text1.txt','utf-8')

console.log(data);


console.log('last line');

console.log();



// reading the file asynchronously




console.log('first line');

function callback(error,file){
    if(error){
        console.log(error);
    }
    else{
        console.log(file)
    }
}
fs.readFile('text1.txt','utf-8',callback);
fs.readFile('text2.txt','utf-8',callback);
fs.readFile('text3.txt','utf-8',callback);

console.log('last line');




// making the calls serially

console.log('-------------------------');console.log('-----------------------------');
console.log('first line');

fs.readFile('text1.txt','utf-8',callback1);
function callback1(error,file){
    if(error){
        console.log(error);
    }
    else{
        console.log(file)
        fs.readFile('text2.txt','utf-8',callback2);
    }
}
function callback2(error,file){
    if(error){
        console.log(error);
    }
    else{
        console.log(file)
        fs.readFile('text3.txt','utf-8',callback3);
    }
}
function callback3(error,file){
    if(error){
        console.log(error);
    }
    else{
        console.log(file)
    }
}
console.log('last line');

