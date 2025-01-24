let form = document.querySelector('form');
// console.log(form);
let mainDiv = document.getElementById('main');
// console.log(mainDiv);

form.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let phoneNumber = e.target.number.value;
    
    
    let userData =   JSON.parse(localStorage.getItem("userDetails")) || [];
    userData.push({
        'name':name,
        'email':email,
        'phoneNumber':phoneNumber
    }); 
    
    localStorage.setItem("userDetails", JSON.stringify(userData))
    e.target.reset();
    // console.log(userData); 
    displayDataFromLocalStorage();
    
})

function displayDataFromLocalStorage(){
  mainDiv.innerHTML="";
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
//   console.log(userDetails);
   userDetails.forEach((item,i)=>{
     const divi = document.createElement('div');
     divi.innerHTML = `<h5>Name: ${item.name}</h5>
                       <p>Item: ${item.email}</p>
                       <p>Phone-Number: ${item.phoneNumber}</p>
                       <span onclick=removeData(${i})> <b>&times<b></span>`;

    mainDiv.appendChild(divi)                 
  })
}
displayDataFromLocalStorage();

function removeData(index){
  let userData= JSON.parse(localStorage.getItem("userDetails"))
  userData.splice(index,1);
  
  localStorage.setItem("userDetails", JSON.stringify(userData))
  displayDataFromLocalStorage();
}



