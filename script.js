
let numBtns=Array.from(document.getElementsByClassName('number')); //number buttons
let displayBox=document.querySelector('.display-box'); //text display box on top of number buttons in calc
let operators=Array.from(document.getElementsByClassName('operation'));
let equalBtn=document.querySelector('.equals');

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
    displayBox.value='';
}))

//when equals key is pressed we need to:
//set value of number2(b) to value in the text box
//call the calculate function with the values of a,b, operator
//set display box value to the returned value from calculate function

equalBtn.addEventListener('click',function(e){
    b=displayBox.value;
    displayBox.value=calculate(a,b,operation);
    a=displayBox.value;
})



numBtns.forEach((element)=>//add event listeners to each button
element.addEventListener('click', populate)
)
//==function declarations==//
//==make them able to handle multiple arguments unless not possible ei exponents ** maybe not as the action key will call the function each time so i dont think this is necessary

function populate(e){ //takes the target value from the number button pressed
    displayBox.value+=e.target.value;
}


function calculate(a,b,operation){
    a=Number(a);
    b=Number(b);
    
    if(operation==`+`) return a+b;
    if(operation==`-`) return a-b;
    if(operation==`*`) return a*b;
    if(operation==`/`) return a/b;

}

//clear all function and event listener
document.querySelector('.clear').addEventListener('click',clearAll);

function clearAll(){
    a='';
    b='';
    displayBox.value='';
}