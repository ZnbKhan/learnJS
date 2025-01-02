// alert("connected")

// grab the elment -- first event then text
let chngTextBtn = document.getElementById('changeTextButton');

// console.log(chngTextBtn);

// chngTextBtn.addEventListener('click', ()=>{
//     console.log(this);   
// })

// arraow function gives us a window object 
// Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical scope.
// In contrast, regular functions have their this bound to the element that triggered the event.

chngTextBtn.addEventListener('click', function (){
    // console.log(this);
    let paraText = document.getElementById('myParagraph');
    // console.log(paraText);
    paraText.innerHTML = "Hii, I'm zainy";
    
      
})

/* 
When using a regular function as an event listener, this refers to the element that fired the event (e.g., the button clicked).
When using an arrow function, this refers to the value of this in the enclosing scope, which is often not the element that fired the event.
*/

/* 
innerHTML for working with structured HTML. when we add paraText.innerHTML = '<bold>zainy<bold> actullay bold the zainy
innerText for visible, styled text. when we add paraText.innerText = 'visible text'; just for style the text like hidden
textContent for raw, unformatted text. when we add paraText.textContent = '<bold>zainy<bold> actullay shows <body>zainy<bold>
*/

// *****************************************************************************************************************************************
// Example 2
document.getElementById('highlightFirstCity').addEventListener('click', function (){
    // console.log(this);
    let citieslist = document.getElementById('citiesList');
    // console.log(citieslist);
    // console.log(citieslist.firstElementChild); //firstElemtChild -- return elemrnt, firstChild -- returns a textNode or comment any node
    // console.log(citieslist.firstElementChild.classList);

    citieslist.firstElementChild.classList.add("highlight")
    
})

// ***********************************************************************************************************************************************
// Example 3
let coffeBtn = document.getElementById('changeOrder');
coffeBtn.addEventListener('click', function(){
    // console.log(this);
    let coffeeType = document.getElementById('coffeType')
    console.log(coffeeType);
    if(coffeeType.innerText === 'Latte'){ 
        coffeeType.innerHTML = "Expresso";
        coffeBtn.innerHTML = "change Order To Latte"
    }
    else
    { coffeeType.innerHTML = "Latte";  
     coffeBtn.innerHTML = "change Order To Expresso"
    }

})
