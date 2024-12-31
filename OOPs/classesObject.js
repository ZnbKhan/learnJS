// OOP --> Encapsulation, Inheritence, Polymorphism, Abstraction
// objects -- instances of classes

// declaring object literal
let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    start: function(){
        return `${this.make} car gots started in ${this.year}`
    }
}

// console.log(car.start());

// constructor function
function Person(name, age){
    this.name=name
    this.age=age
}

let  john = new Person("john", 20)
// console.log(john.name);

// ***********************************************
// Prototypal Chaining

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function (){
    return `${this.type} makes a sound`;
}

//array mai maine nya prototype add kr diya h
Array.prototype.hitesh = function(){
    return `Custom Methods ${this}`
}

let myArr = [1,2,3];
// console.log(myArr.hitesh());
let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.hitesh());

// ******************************************************
// classes and inheritence

class Vehicle {
    constructor(make, model){   //unlkie functional contructor in class we have method called constructor, its optional
        this.make = make
        this.model = model
    }

    start(){   //methods under the hood are funtions but need no to write function while declaring them
        return `${this.model} is a car from ${this.model}`
    }
}

class Car extends Vehicle {  // don't have constructor so it's borrow from it's parent
    drive(){
        return `${this.make}: This is an inheritence Example`;
    }
}

let myCar = new Car("Toyota", "Corola")
// console.log(myCar.start());
// console.log(myCar.drive());


let vechOne = new Vehicle("Toyota", "Corola");
console.log(vechOne.make);
// console.log(vechOne.drive());
console.log(vechOne.start());








