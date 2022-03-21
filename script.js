
let numBtns=Array.from(document.getElementsByClassName('number')); //number buttons
let displayBox=document.querySelector('.display-box'); //text display box on top of number buttons in calc

numBtns.forEach((element)=>//add event listeners to each button
element.addEventListener('click', populate)
)
//==function declarations==//
//==make them able to handle multiple arguments unless not possible ei exponents ** maybe not as the action key will call the function each time so i dont think this is necessary

function populate(e){ //takes the target value from the number button pressed
    console.log(e.target.value);
    displayBox.value+=e.target.value;
}


function addNumbers(...num){

  let sum=num.reduce((prev,curr)=>
      prev+curr,0);

return sum;
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b;
}

function exponent(a,b){
    return a**b;
}
console.log(subtract(2,3));
