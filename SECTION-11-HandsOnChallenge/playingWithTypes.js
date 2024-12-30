const stringToNumber = (str)=>{
  let num = Number(str);
  if(num)
    return "Number";
else
 return "Not a Number";
}

// console.log(stringToNumber("1a"));


const flipBoolean = (num)=>{
    let boole = Boolean(num)

    return !boole;
    
}

// console.log(flipBoolean(""));

const whatAmI = (input)=>{
    if(typeof input === 'number')
        return "I am a Number";
    if(typeof input === 'string')
        return "I am string";
    return "Oh! I am confused";
}

// console.log(whatAmI());


const isTruthy = (input)=>{
   if(input) return "Truthy";
   return "falsey"
}

console.log(isTruthy());
