// first step grab the elments

document.addEventListener('DOMContentLoaded', ()=>{
    const todoInput = document.getElementById('todo-input');
// console.log(todoInput);

const addTskBtn  = document.getElementById('add-task-btn');
// console.log(addTskBtn);

const todoList = document.getElementById('todo-list');
// console.log(todoList);

let tasks =  JSON.parse(localStorage.getItem("task")) || [];

tasks.forEach((task) => renderTask(task))

addTskBtn.addEventListener('click', function(){
    let taskText = todoInput.value.trim();

    if(taskText === "") return;
    
    let taskObj = {
        id:Date.now(),
        text:taskText,
        isCompleted:false
    }
    
    tasks.push(taskObj);
    saveTasks();
    renderTask(taskObj)
    todoInput.value = " ";
    console.log(tasks);
     
});

// pick up task from local storage and just render it.
function renderTask(task){
//   console.log(task.text);
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id)
  li.innerHTML = `<span>${task.text}</span>
                  <button>Delete</button>`;

   li.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
        // console.log(e.target);
        return;   
    }  
    task.isCompleted = !task.isCompleted;
     li.classList.toggle("completed")
     saveTasks();
   });

   li.querySelector('button').addEventListener('click', (e)=>{
     e.stopPropagation();  //event bubling, prevent toggle from firing
     tasks = tasks.filter((t)=> t.id !== task.id)
     li.remove()
     saveTasks();
   })
   todoList.appendChild(li);                
}


function saveTasks(){
    localStorage.setItem('task', JSON.stringify(tasks))
}
})


// End at 5:38