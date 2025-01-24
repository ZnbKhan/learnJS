// grab all elments

let input = document.getElementById('input')
console.log(input);

let addBtn = document.querySelector('button');
// console.log(addBtn);
let list = document.getElementById('list')
console.log(list);



addBtn.addEventListener('click', ()=>{
   let text = input.value;
   //    console.log(text);

   let allTodo = JSON.parse(localStorage.getItem("list")) || [];

   allTodo.push(text);

   localStorage.setItem("list", JSON.stringify(allTodo));

   input.value = "";
   display()
})

function display(){
    list.innerHTML = " ";
    let allTodo = JSON.parse(localStorage.getItem("list")) || [];
    allTodo.forEach((elem,i)=>{
       let para = document.createElement('p');
       para.innerHTML = `${elem} <span onclick="remove(${i})"> &times<span>`;
       list.appendChild(para);
    })
}

display();

function remove(i){
    let allTodo = JSON.parse(localStorage.getItem("list")) || [];
    allTodo.splice(i,1);
    localStorage.setItem("list", JSON.stringify(allTodo));
    display();
}
