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

let operand1 = '';
let operator = '';
let operand2 = '';

let exp = "2-3";

function operate(operation) {
    const expressionElements = operation.split('');
    operand1 = parseInt(expressionElements[0]);
    operator = expressionElements[1];
    operand2 = parseInt(expressionElements[2]);

    operand1 = operatorMap[operator](operand1, operand2);
    return operand1;
    
}

console.log(operate(exp));