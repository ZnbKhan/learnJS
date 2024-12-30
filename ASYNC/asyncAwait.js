// creation of promise
function fetchData (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let sucess = false;
            if(sucess){
                resolve({name:"shy", URL:"abc"});
                reject({name:"Not Found", URL:"Invalid"});
            }else{
            }
        }, 1000)
    })
}

async function getData(){
    try{
       console.log("fetching data...");
       const data = await fetchData();
       console.log("sucessfully fetched data");
       console.log(data);  
    }
    catch(error){
        console.log("Not able to fetched data", error);
        
    }
}

getData();