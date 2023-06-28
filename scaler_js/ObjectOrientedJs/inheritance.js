class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(_name,_age,_classStrength){
        super(_name,_age);
        this.classStrength = _classStrength;
    }

    test(){
        super.welcome();
    }
}

class Student extends Person{

}

let teacher1 = new Teacher('someone',42,33);
console.log(teacher1);
teacher1.welcome();

