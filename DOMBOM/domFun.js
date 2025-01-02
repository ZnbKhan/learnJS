// alert("connected");

// example 1
// 1. button clicks then change text
//      a. need to have refrence of p hold in varibale
//      b. call a onclick event listener on button
//      c. chng text of paragraph

// mistake -- hitesh sir said always first grap event listener then perform further task
// 1. button clicks the para should chnage
//     a.grap a button
//     b. add event listner
//     c. grab atext need to change

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let myPragraph = document.getElementById("myParagraph");
    // console.log(myPragraph);
    myPragraph.textContent = "The paragraph is changed";
  });

//   example - 2
// 1. user clicks the button then first is being highlighted
//     a. grab a button
//     b. add event listner on button
//     c. add css styling to first child of ul

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(citiesList);
    // console.log(citiesList.firstElementChild.classList);
    citiesList.firstElementChild.classList.add("highlight");
  });

//   Ecample 3
// 1.click on the button and that chng the order
//   a. grab the button
//   b. add event listener on it
//   c. change inner html of span

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeType = document.getElementById("coffeType");
  //   console.log(coffeType);
  coffeType.textContent = "Espresso";
  coffeType.style.backgroundColor = "red";
  coffeType.style.padding = "5px";
});

// Example 4
//  1. create element then insert that elment

document.getElementById("addNewItem").addEventListener("click", function () {
  let NewItem = document.createElement("li");
  console.log(NewItem);
  NewItem.textContent = "Butter";
  let shoppingList = document.getElementById("shoppingList");
  console.log(shoppingList);
  shoppingList.appendChild(NewItem);
});

//Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("taskList");
    console.log(tasklist.lastElementChild);
    tasklist.lastElementChild.remove();
  });

  // Example 6
  document.getElementById('clickMeButton').addEventListener('click', function(){
    alert("you clicked");
  })

  // Example 7
  document.getElementById('teaList').addEventListener('click', function(event){
    // console.log(this);
    console.log(event.target);
    if(event.target && event.target.matches(".teaItem")){
      alert("You Selected: " + event.target.textContent)
    }
    
  })

  // Example 8 
  // grab the form
  document.getElementById('feedBackForm').addEventListener('submit', function(event){
  //  console.log(event);
  // console.log(this);
  //  alert("Form Submitted")
  //  stop default behaviour of form
    event.preventDefault();

    let feedBack = document.getElementById('feedBackInput').value;
    // console.log(feedBack);

    let feedBackDisplay = document.getElementById('feedBackDisplay');
    // console.log(feedBackDisplay);

    feedBackDisplay.textContent = `Feedback is: ${feedBack}`
    
    // let newItem = document.createElement("p");
    // newItem.textContent = feedBack;

    // feedBackDisplay.appendChild(newItem)

  })

  // Example 9
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent = `DOM Fully Loaded`
  })


  // Example 10
  document.getElementById('toggleHighLight').addEventListener('click', function(){
    let descriptionText = document.getElementById('descriptionText')
    // console.log(descriptionText);
    // descriptionText.classList.add('highlight') //highlight is css class
    descriptionText.classList.toggle('highlight')
  })