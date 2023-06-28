class Person {
    constructor(_name, _age) {
        var name = _name;
        this.age = _age;

        this.getName = function () {
            return name;
        };
    }
}

let per1 = new Person("Adam" , 333);

// Person.name = 'steve';
console.log(per1);
console.log(per1.getName());



