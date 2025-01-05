/* 
Task 1: Simulating Asynchronous Behavior

*/

function simulateAsyncTask(){
    console.log("Task Started");
    setTimeout(()=>{
        console.log("Task Finished");
    },2000)
}

// simulateAsyncTask();

/* 
Task 2: Simulate Multiple Async Tasks with Different Delays
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

*/

function simulateMultipleTask(){
    setTimeout(()=>{
      console.log("Task 1 Finished");
      
    },1000)

    setTimeout(()=>{
        console.log("Task 2 Finished");
        
    },2000)

    setTimeout(()=>{
        console.log("Task 3 Finished");
        
    },3000)
}

// simulateMultipleTask();

/* 
Task 3: Async Task with Callback Function
Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/

function fetchDataWithCallback(callback){
    setTimeout(()=>{
      console.log("Fetching data ...");
      const data = "Fetched data";
      callback(data);
    },2000)

}

function handleData(data){
    console.log(data);
    
}

fetchDataWithCallback(handleData);