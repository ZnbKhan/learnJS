const person = {
    name:"zainab",
    age:19.5,
    introduce(){
        return `Hii my name is ${this.name} and I am ${this.age} years old`;
    }
}

// console.log(person.introduce());

for(const p in person){
    // console.log(p);
    // break;
    
}

function outer(){
    function inner(){
        return `Inner Function Called`;
    }
    // 2+3;
   return inner();
}

console.log(outer());
