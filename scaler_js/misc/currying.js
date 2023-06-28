let sum = function(x,y){
    console.log(x+y);
}

sum(2,3);

let sumCurried = function(x){
    return function(y){
        console.log(x+y);
    }
}

let sumWithNum = sumCurried(2);
sumWithNum(3);