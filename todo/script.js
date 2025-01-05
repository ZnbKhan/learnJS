// first step grab the elments

const todoInput = document.getElementById('todo-input');
console.log(todoInput);

const addTskBtn  = document.getElementById('add-task-btn');
console.log(addTskBtn);

const todoList = document.getElementById('todo-list');
console.log(todoList);

let tasks = [];
addTskBtn.addEventListener('click', function(){
    let taskText = todoInput.value.trim();

    if(taskText === "") return;
    
    let taskObj = {
        id:Date.now(),
        text:taskText,
        isCompleted:false
    }
    
    tasks.push(taskObj);
    console.log(tasks);
    
       
})