/*
Task 1: Creating a Counter Using Closures
Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.
*/

function createCounter(){
    let cnt =0;
    return function(){
        cnt++;
        return cnt;
    }
}

let cnter = createCounter();
console.log(cnter());
console.log(cnter());


/* 
Task 2: Rate Limiter Function
*/

function rateLimiter(fn, limit){

}

/* 
Task 3: Memoization Function

*/

function memoize(fn){
    
}
