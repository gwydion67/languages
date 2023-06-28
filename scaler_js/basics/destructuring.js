//the destructuring makes it possible to unpack values from arrays or objects into distinct variables

let arr = ['hello', 'world'];

let [a,b] = arr;


//for objects we need to have the same keys to destructure them

let obj = {
    name : "abhishek",
    age : 20,
    gender : "M"
}

let {name , age , gender} = obj;

let {name : m , age : A , gender : g} = obj;

