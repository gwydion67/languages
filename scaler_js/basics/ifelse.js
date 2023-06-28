const prompt=require("prompt-sync")({sigint:true}); 

let x = Math.floor((Math.random()*100)+1);
let num;

while(true)
{
    num = parseInt(prompt("enter a guess   "));
    if(num > x){
        console.log("try lower   ");
    }
    else if(num < x){
        console.log("try higher   ");
    }
    else if(num == x){
        console.log("YaYY you got it");
        break;
    }
}