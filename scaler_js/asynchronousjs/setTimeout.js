 // setTimeout(cb,2000)

 function greet(){
    console.log('hello from set timeout');
 }

setTimeout(greet,5000);

// set timeout is an asynchronous funtion

console.log('before');

setTimeout(greet,3000);

console.log('after');

////////////////////////
////////////////////////