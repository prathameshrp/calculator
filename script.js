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
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b === 0) return "Like that's even allowed to do!"
        return (a / b).toFixed(5)
    },

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
let allowDecimal = true;
let displayValue = "";

function operate(operation) {
    const expressionElements = operation.split(operator);
    console.log(expressionElements);
    operand1 = parseFloat(expressionElements[0]);
    operand2 = parseFloat(expressionElements[1]);
    if(operand1 === NaN || !operand1) return "ERROR";
    operand1 = operatorMap[operator](operand1, operand2);
    if (operand1 % 1 === 0) return Math.round(operand1);
    return operand1;

}

function populateDisplay(e) {
    e.stopImmediatePropagation();
    const clickedOn = e.target;
    if (clickedOn.getAttribute("id") === "keyboard" || clickedOn.tagName.toLowerCase() === "div") return;
    else if (clickedOn.getAttribute("id") === "calculate") {

        displayValue = operate(displayValue);
        operator = '';
    }
    else if(clickedOn.getAttribute("id") === "modulo")
    {
        operand1 = parseFloat(displayValue)*0.1;
        displayValue = operand1;
    }
    else if (clickedOn.classList.contains("operator")) {

        if (operator !== '') {
            displayValue = operate(displayValue);
        }

        operator = `${clickedOn.value}`;
        displayValue += clickedOn.value;
        decimal.removeAttribute("disabled");

    }

    else {
        const val = clickedOn.value;
        displayValue += val;
    }

    display.textContent = displayValue;
}

const keyboard = document.querySelector("#keyboard");
const display = document.querySelector("#display");

keyboard.addEventListener("click", populateDisplay);

const clear = keyboard.querySelector("#clear");

clear.addEventListener("click", () => {
    displayValue = '';
    operand1 = '';
    operand2 = '';
    operator = '';
    display.textContent = '';
    decimal.removeAttribute("disabled");

})
const decimal = keyboard.querySelector("#decimal");

decimal.addEventListener("click", () => decimal.setAttribute("disabled", true));

const backSpace = keyboard.querySelector("#extra");

backSpace.addEventListener("click", ()=>
{
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
})