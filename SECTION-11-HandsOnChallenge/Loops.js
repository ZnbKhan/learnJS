const sumOfN = (n)=>{
   let sum =0;
   while(n>0){
     sum = sum+n;
     n--;
   }
   return sum;
}

// console.log(sumOfN(5));

// *******************************************
// const printMultipicationTable = (n)=>{
//   for(let i=1;i<=10;i++){
//       console.log(n + "*" + i + "=" + n*i);
//   }
// }

const printMultipicationTable = (n)=>{
   const table = [];
   for(let i=1;i<=10;i++){
     table.push(`${n} * ${i} = ${n*i}`)
   }
   return table;
}

// console.log(printMultipicationTable(5))

// ***********************************************
let str = "zainykhAn"
const countVowels = (str)=>{
   let cnt =0;
   let n = str.length;
   for(let i=0;i<n;i++){
    if(str[i] === 'a' || str[i] === 'A' || str[i] === 'e' || str[i] === 'E' || str[i] === 'i' || str[i] === 'I' || str[i] === 'o' || str[i] ==='O' || str[i] ==='u' || str[i] ==='U')
        cnt++;
   }
   return cnt;
   
}

console.log(countVowels(str))