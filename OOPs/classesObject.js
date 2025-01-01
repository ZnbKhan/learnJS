// OOP --> Encapsulation, Inheritence, Polymorphism, Abstraction
// objects -- instances of classes

// declaring object literal
let car = {
    make:"Toyota",
    model:"Camry",
    year:2020,
    start: function(){  //don't use arrow function bcz that don't bind bind object or instances instead of bind with lexical scope or global scope, so use normal function here
        return `${this.make} car gots started in ${this.year}`
    }
}

// console.log(car.start());

// constructor function -- revision of last lecture
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

// inheritence
class Car extends Vehicle {  // don't have constructor so it's borrow from it's parent
    drive(){
        return `${this.make}: This is an inheritence Example`;
    }
}

let myCar = new Car("Toyota", "Corola")
// console.log(myCar.start());
// console.log(myCar.drive());


let vechOne = new Vehicle("Toyota", "Corola");
// console.log(vechOne.make);
// console.log(vechOne.drive());
// console.log(vechOne.start());



// New Video

// Encapsulation
// want to restrict to direct acess to an object  data

class BankAccount{
    #balanced = 0;  // maked it private

    deposit(amount){
        this.#balanced +=amount
        return this.#balanced;
    }

    getBalance(){
        return `$ ${this.#balanced}`;
    }
}

let account = new BankAccount();
// console.log(account.getBalance())

// Abstraction -- Hiding internal complexity
class CoffeMachine{
    start(){
        // call a db
        // filter
        return `Starting the machine...`;
    }
    brewCoffe(){
        // really complex calc
        return `Brewing Coffe...`;
    }

    pressButton(){
        let msg = this.start();
        let msgTwo =  this.brewCoffe();

        return `${msg} + ${msgTwo}`
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
// console.log(myMachine.pressButton());


//  Polymorphism -- ability of something to have more than one form
class Bird{
    fly(){
        return `Hey, I am Flying...`;
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly...`;
    }
}

class Sparrow extends Bird{
    fly(){
        return `Hey I am sparraow, I am littel cute bird`;
    }
}

let bird = new Bird();
// console.log(bird.fly());

let smallPenguin = new Penguin();
// console.log(smallPenguin.fly());

let sparr = new Sparrow();
// console.log(sparr.fly());  //method overriding done here


// Static method  -- can be anything (methods, properties)
// statics are special method which only be called via class itself -- nobody can use this
class Calculator{
    static add(a,b){
        return a+b;
    }
}

let miniClac = new Calculator();
// console.log(miniClac.add(2,23));

// console.log(Calculator.add(2,3));


// Getters and Setters
class Empolyee{
    #salary;
    constructor(name, salary){
        this.name=name;
        this._salary = salary;
    }

    set salary(value){
        if(value<0){
            console.error("Invlaid Salary");
        }else{
            this._salary=value;
        }
    }
    get salary(){
        return `You are not allowed to see salary`;
    }
}

let emp1 = new Empolyee("Alice", 50000);
console.log(emp1._salary);









