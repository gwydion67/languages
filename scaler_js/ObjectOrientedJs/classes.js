class person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`welcom ${this.name}`);
    }
}

let person1 = new person('abhishek', 20);

console.log(person1);
person1.welcome();

////////////////////////////////
