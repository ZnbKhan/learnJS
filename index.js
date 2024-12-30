// console.log(2+3);

let cities = {
    london:8900,
    India:2400,
    Malasia:4000
};

let newCity = {};

for(const city in cities){
    // console.log(cities[city]);
    
    if(city === "India") break;

    newCity[city] = cities[city];
}

// console.log(newCity);

let arr = [1,2,3,4];
for(let a of arr){
    // console.log(arr[a]);    
}
