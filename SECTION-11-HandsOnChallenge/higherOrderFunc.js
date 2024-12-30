let arr = [1,2,3,4, -90, -10];

const squareNumbers = (arr)=>{  
    return arr.map((elem)=>{ return elem*elem});
}
// map create new array and add new elemnts in it
// arr.map((elem, index, arr)=>{}, thisArgument)

// console.log(squareNumbers(arr));


// *************************************************
const filterEvenNumbers = (arr)=>{
//    const evenNumber = arr.filter((elem)=>{
//      if(elem%2 === 0 )
//         return elem;
//    })

//    return evenNumber;
return arr.filter((elem)=>{return elem%2==0})
}
// filter also creates a new array
// arr.filter((elem, arr, index)=>{}, thisArgument)
// filter callback return true or false

// console.log(filterEvenNumbers(arr));


// *************************************************
// const sumOfPositiveNumber = (arr)=>{
//     let sum = 0
//      let newA = arr.filter((elem)=>{ return elem >0;})
//      for(const a of newA)
//         sum = sum + a;
//     return sum;
// }

const sumOfPositiveNumber = (arr)=>{
    return arr.filter((elem)=>{return elem>0})
    .reduce((sum, elem)=>sum+elem,0);

}

// console.log(sumOfPositiveNumber(arr));


// **************************************************
let person = [
    {name:"zainy",
     age:20
    },
    {name:"shya",
        age:20
    }
]
const getNames = (person)=>{
  return person.map((p)=>{return p.name})
  
}

//console.log(getNames(person))

// ************************************************
let names = ["zainab", "shy", "zainy", "shya", "zainab khan"];
const findLongestWord = (names)=>{
    return names.reduce((longest, currWord)=>
        {return currWord.length > longest.length? currWord:longest}, "")
  
};

console.log(findLongestWord(names));
