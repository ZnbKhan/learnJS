function outer(){
    let cnt=4;
    return function(){
        cnt++;
        return cnt;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
