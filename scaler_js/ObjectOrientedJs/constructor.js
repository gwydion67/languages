function createCar (_name,_company,_color){
    this.name = _name;
    this.company = _company;
    this.color = _color;

    this.drive = function(){
        console.log(`i am driving ${this.name} and it is of ${this.color} color`);
    }
}

let car1 = new createCar('x4','bmw','red');

console.log(car1);
car1.drive();


