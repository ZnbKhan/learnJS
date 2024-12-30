// create a promise
 function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let sucess = false;
            if(sucess){
                resolve("Promise is resolved")
            }
            else{
                reject("Promise is rejected");
            }
        }, 3000)
    });
 }


fetchData()
   .then((data)=> console.log(data))
   .catch((error)=> console.log(error));
 