/* 
Task 1: Create Inheritance Using Prototypes
Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()
*/

function Animal(){
}

Animal.prototype.makeSound = function(){};

function  Dog(){
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function(){}

/* 
Task 2: Shape and Rectangle Inheritance

*/

function Shape(color){
    this.color = color
  this.getColor = function (){
    return `${this.color}`
  }
}

function Rectangle(height,width, color){
    Shape.call(this,color)
    this.height = height
    this.width = width
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function(){
    return this.height * this.width;
}

let rect = new Rectangle(2,3,"red");
console.log(rect.getArea());
