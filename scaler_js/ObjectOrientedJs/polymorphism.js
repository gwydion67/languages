// polymorphism basically means behaviour to put on many forms
class Animal {


    sound(){
        console.log('Animals make different sounds');
    }
}

class Dog{
    sound(){
        console.log('Dogs bark')
    }
}

class Cat{
    sound(){
        console.log('cats meow')
    }
}
let animal1 = new Animal();
let tommy = new Dog();
tommy.sound();
let perry  = new Cat();
perry.sound();

animal1.sound();
