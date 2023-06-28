let myobj = {};
console.log(myobj.hasOwnProperty('name'));

// prototype objects are objects that get linked to the objects that we create by default

// for objects created using some class
// we have a prototype object for the the class and this prototype has another prototype inside it  which contains the prototype functions
// this is known as prototype chaining

////////////////////////////////////////

function Person(_name,_age){
    this.name = _name;
    this.age = _age;

    this.getNameandAge = function(){
        console.log(`I am ${this.name} and i am ${this.age} years old`)
    }
}

let per1 = new Person('adam',24);
let per2 = new Person('eve', 22);

console.log(per1,per2)


// here the getnameandage function is same for both the objects 
//this clearly is not a good way of writing code 
// what we can do is write the function in a prototype of the class 
// and then same function will be available for use of every object

Person.prototype.getName = function(){
    console.log(`I am ${this.name}`);
}

let per3 = new Person('abhi',24);
let per4 = new Person('shek', 22);

console.log(per3,per4);





