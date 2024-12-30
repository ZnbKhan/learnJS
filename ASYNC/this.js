
// const person = {
//     name:'znb',
//     greet: function(){
//         console.log(this);
        
//     }
// }

// const person = {
//     name:'znb',
//     greet: ()=>{
//         console.log(this);
        
//     }
// }

// person.greet();
// let another = person.greet;
// console.log(another);

// function outer(){
//     console.log(this);
//     const innerFunction = ()=>{
//      console.log(this);
     
//     }

//     innerFunction();

// }

// outer();


const obj = {
    name: 'test object',
    outer:  ()=>{
        console.log(this.name);
        const person = {
            name:'znb',
            greet: function(){
                console.log(this.name);
                
            }
        }
        
        const inner = function (){
          console.log(this.name);
          
        }
        inner();
    }
    

}

 obj.outer()