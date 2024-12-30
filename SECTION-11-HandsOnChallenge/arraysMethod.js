// let arr = [1, "shy", "zainy", 8,"c", "2"];

const filterNumbers = (arr)=>{
 return arr.filter((elem)=>{return typeof(elem) == 'number'})
}

// console.log(filterNumbers(arr));

// ***********************************************************
let arr = [1,2,3,4,5];
const reverseArray = (arr)=>{
    let newArr = [];
    let n = arr.length;
    for(let i =n-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(reverseArray(arr));

// *****************************************************************

const findMax = (arr)=>{
    // let largest = 0;
    // for(const a of arr){
    //     if(a > largest) largest =a;
    // }
    // return largest;

    return Math.max(...arr);
}


// console.log(findMax(arr));

// *********************************************************************

const removeDuplicates = ()=>{
    
}


