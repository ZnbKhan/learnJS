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
console.log(myCar);

let myNewCar = new Car("Tata", "Safari")
console.log(myNewCar);
