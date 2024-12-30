// created a constructor function
// function name start with Capital letter, we can start with small letter as well it just a convention

function Person(name,age){
    this.name = name;
    this.age = age;
}


function Car(make, model){
    this.make = make;
    this.model = model;
}

// in order to make object we have to use `new` keyword
//  this and new are interlinked with each other
// this is refrening to newly created object
let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe = ()=>{
        return `This is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("Lemon Tea");
// console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}

// we can add a properties and methods like this
Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
let cat = new Animal("cat")
// console.log(dog.sound());
// console.log(cat.sound());

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea")
// console.log(tea);

// let coffe =  Drink("coffe")

//A constructor function is like a blueprint or template for creating objects. 
// You use the new keyword to create an instance of the object.

// Function Name: Constructor function names are usually capitalized (e.g., Car), so you can tell they are meant to be used with new.
// this Keyword: Inside the constructor, this refers to the new object being created. You use this to set properties of the object.
// new Keyword: When you use new Car(), JavaScript automatically creates a new object and calls the constructor function to initialize it.

// In summary, a constructor function helps you create multiple objects with the same properties and methods, but each object can have its own values.




