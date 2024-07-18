/*
    A calculator that doesn't break my code.

    basic functions -

    - add
    - subtract
    - multiply
    - divide

    input = string of 3 characters: operand1, operator, operand2

    store it in 3 variables and perform the operation

 */

    // A very straightforward approach:

// function add(...nums) {

//     return nums.reduce((total, num) => total+num, 0);
// }

//this sh*t is hot:
const operatorMap = {
    "+": (a,b) => a+b,
    "-": (a,b) => a-b,
    "*": (a,b) => a*b,
    "/": (a,b) => a/b,

}


//f*ck this:
// function add(a, b) {
//     return a+b;
// }

// function sub(a, b) {
//     return a-b;
// }

// function multiply(a, b) {
//     return a*b;
// }

// function divide(a, b) {
//     return a/b;
// }

// console.log(add(2,3), sub(2,3), multiply(2,3), divide(2,3));
// console.log();

let operand1 = '';
let operator = '';
let operand2 = '';

let displayValue = "";

function operate(operation) {
    console.log(operation, operator)
    const expressionElements = operation.split(operator);
    console.log(expressionElements);
    operand1 = parseInt(expressionElements[0]);
    operand2 = parseInt(expressionElements[1]);
    console.log(operator);
    operand1 = operatorMap[operator](operand1, operand2);
    return operand1;
    
}

function populateDisplay(e)
{
    const clickedOn = e.target;
    if(e.target.getAttribute("id") === "keyboard") return;
    else if(e.target.getAttribute("id") === "calculate")      
        {
            displayValue = operate(displayValue);
            operator = '';
        }
    else if(e.target.classList.contains("operator"))
    {

        if(operator !== ''){
            displayValue = operate(displayValue);
        }
        
        operator = `${e.target.value}`;
        displayValue+= e.target.value;
    }   
   
    else{
    const val = e.target.value;
    displayValue += val;
    }
    display.textContent = displayValue;
}

const keyboard = document.querySelector("#keyboard");
const display = document.querySelector("#display");

keyboard.addEventListener("click", populateDisplay);
// console.log(operate(exp));

