
let numBtns=Array.from(document.getElementsByClassName('number')); //number buttons
let displayBox=document.querySelector('.display-box'); //text display box on top of number buttons in calc
let operators=Array.from(document.getElementsByClassName('operation'));


let a, b, operation; //numbers 1 and 2

//when operator key is pressed we need to:
//set value of operator to key pressed
//set value of number1 (a) to value in the text box
//clear value of the box

operators.forEach(element=>element.addEventListener('click', function(e){
    a=displayBox.value;
    console.log(a);
    operation=e.target.value;
    console.log(operation);
}))

//when equals key is pressed we need to:
//set value of number2(b) to value in the text box
//call the calculate function with the values of a,b, operator
//set display box value to the returned value from calculate function


numBtns.forEach((element)=>//add event listeners to each button
element.addEventListener('click', populate)
)
//==function declarations==//
//==make them able to handle multiple arguments unless not possible ei exponents ** maybe not as the action key will call the function each time so i dont think this is necessary

function populate(e){ //takes the target value from the number button pressed
    console.log(e.target.value);
    displayBox.value+=e.target.value;
}


function calculate(a,b,operation){

    if(operation=`+`) return a+b;
    if(operation=`-`) return a-b;
    if(operation=`*`) return a*b;
    if(operation=`/`) return a/b;

}
