class BankAccount{
    #balance;
    constructor(balance){
        if(balance<0){
          throw console.error("Initial balance can't be negative");
        }
        this.#balance=balance;
    }

    set balance(value){
       if(value <0)
        throw console.error(`can't have negative salary`);
      
       this.#balance = value;     
    }

    get balance(){
       return this.#balance;
    }

    deposit(amount){
        console.log(`${amount} is being deposited the account`);
        this.#balance +=amount;
        return this.#balance
    }

    withdraw(amount){
        console.log(`${amount} is being withdraw from account`)
        this.#balance -=amount;
        return this.#balance;
    }
    
}

let emp1 = new BankAccount(1000);
// emp1.balance = -300;
// console.log(emp1.balance);
// console.log(emp1.deposit(500));
// console.log(emp1.withdraw(100));
// console.log(emp1.balance);





/*
Object Creation (Constructor):
The constructor directly assigns values to properties (often private fields).
It does not call the setter.

Property Reassignment (Setter):
After the object is created, if you reassign the property, the setter is called automatically.
This is where validation or other logic is enforced.

Why Constructor Bypasses the Setter:
The constructor typically initializes multiple properties at once, so directly assigning values 
ensures better performance and avoids redundant validation during object creation.

During Object Creation (via constructor):
When you create an object using the new keyword, the constructor is called.
Inside the constructor, you typically assign initial values to the object's properties.
If you're using getters and setters, the property assignments in the constructor do not call the setter directly. Instead, you manually assign to the underlying field (e.g., _balance or #balance), bypassing the setter logic.
When Reassigning Properties (After Object Creation):

If you reassign a property after the object is created, the setter is called automatically (if defined).
This allows you to enforce validation or add custom logic during updates.
*/


class Shape{
    //  constructor(){
        // return `Shape class constructor called always`
         // Constructor should not return anything explicitly
        // just initialize properties here (if needed)
    //  }
    area(){
     return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
      this.radius = radius;
    }
   area(){
     return Math.PI * this.radius * this.radius;
   }
}

class Rectangle extends Shape{
    constructor(length, bredth){
        super();
        this.length=length;
        this.bredth=bredth;
    }
   area(){
      return this.length*this.bredth;
   }
}

let shape = new Shape();
console.log(shape.area());

let circle = new Circle(7);
console.log(circle.area());

let rect = new Rectangle(2,3);
console.log(rect.area());


