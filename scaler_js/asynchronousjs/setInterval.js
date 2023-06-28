function Hello(){
    console.log('hello world!');
}

let timer = setInterval(Hello , 1000);

setTimeout(function(){
    clearInterval(timer)
}, 4000);
