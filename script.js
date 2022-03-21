//==function declarations==//
//==make them able to handle multiple arguments unless not possible ei exponents ** maybe not as the action key will call the function each time so i dont think this is necessary


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
