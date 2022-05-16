function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   { return a / b; }

function operate(op, a, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return subtract(a, b);
    if (op === "*") return multiply(a, b);
    if (op === "/") return divide(a, b);
}

function clearIfNewOperandLine() {
    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }
}

function addIfZeroDisplayed(numToAdd) {
    if (display.innerText === "0") {
        display.innerText = numToAdd;
    }

    else {
        display.innerText += numToAdd;
    }    
}

function operateIfWithPreviousResult () {
    if (currentOperator !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);       
        secondOperand = "";
    }
}

function registerOperandAndOperator(operand) {
    firstOperand = display.innerText;
    currentOperator = operand;
    newOperandLine = true;
}

const display = document.querySelector(".current-display");

let firstOperand = "";
let secondOperand = "";
let currentOperator = "";
let newOperandLine = false;

const btnZero = document.querySelector(".digit-zero");
const btnOne = document.querySelector(".digit-one");
const btnTwo = document.querySelector(".digit-two");
const btnThree = document.querySelector(".digit-three");
const btnFour = document.querySelector(".digit-four");
const btnFive = document.querySelector(".digit-five");
const btnSix = document.querySelector(".digit-six");
const btnSeven = document.querySelector(".digit-seven");
const btnEight = document.querySelector(".digit-eight");
const btnNine = document.querySelector(".digit-nine");

btnZero.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(0);
});

btnOne.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(1);
});

btnTwo.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(2);
});

btnThree.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(3);
});

btnFour.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(4);
});

btnFive.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(5);
});

btnSix.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(6);
});

btnSeven.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(7);
});

btnEight.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(8);
});

btnNine.addEventListener('click', () => {
    clearIfNewOperandLine();
    addIfZeroDisplayed(9);
});

const btnPlus = document.querySelector(".operator-plus");
const btnMinus = document.querySelector(".operator-minus");
const btnMultiply = document.querySelector(".operator-multiply");
const btnDivide = document.querySelector(".operator-divide");
const btnEquals = document.querySelector(".operator-equals");

btnPlus.addEventListener('click', () => {
    operateIfWithPreviousResult();
    registerOperandAndOperator("+");
});

btnMinus.addEventListener('click', () => {
    operateIfWithPreviousResult();
    registerOperandAndOperator("-");
});

btnMultiply.addEventListener('click', () => {
    operateIfWithPreviousResult();
    registerOperandAndOperator("*");
});

btnDivide.addEventListener('click', () => {
    operateIfWithPreviousResult();
    registerOperandAndOperator("/");
});

btnEquals.addEventListener('click', () => {
    if (firstOperand !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);
        firstOperand = display.innerText;
        secondOperand = "";
        currentOperator = "";
    }
});

const btnAC = document.querySelector(".all-clear");

btnAC.addEventListener('click', () => {
    display.innerText = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperator = "";
});

document.addEventListener('keydown', e => {
    switch (true) {
        case e.key === "1":
            clearIfNewOperandLine();
            addIfZeroDisplayed(1);
            break;
        case e.key === "2":
            clearIfNewOperandLine();
            addIfZeroDisplayed(2);
            break;
        case e.key === "3":
            clearIfNewOperandLine();
            addIfZeroDisplayed(3);
            break;
        case e.key === "4":
            clearIfNewOperandLine();
            addIfZeroDisplayed(4);
            break;
        case e.key === "5":
            clearIfNewOperandLine();
            addIfZeroDisplayed(5);
            break;
        case e.key === "6":
            clearIfNewOperandLine();
            addIfZeroDisplayed(6);
            break;
        case e.key === "7":
            clearIfNewOperandLine();
            addIfZeroDisplayed(7);
            break;
        case e.key === "8":
            clearIfNewOperandLine();
            addIfZeroDisplayed(8);
            break;
        case e.key === "9":
            clearIfNewOperandLine();
            addIfZeroDisplayed(9);
            break;
        case e.key === "0":
            clearIfNewOperandLine();
            addIfZeroDisplayed(0);
            break;
        case e.key === "+":
            operateIfWithPreviousResult();
            registerOperandAndOperator("+");
            break;
        case e.key === "-":
            operateIfWithPreviousResult();
            registerOperandAndOperator("-");
            break;
        case e.key === "*":
            operateIfWithPreviousResult();
            registerOperandAndOperator("*");
            break;
        case e.key === "/":
            operateIfWithPreviousResult();
            registerOperandAndOperator("/");
            break;
        case e.key === "Enter":
            if (firstOperand !== "") {
                secondOperand = display.innerText;
                display.innerText = operate(currentOperator, +firstOperand, +secondOperand);
                firstOperand = display.innerText;
                secondOperand = "";
                currentOperator = "";
            }
            break;
        case e.key === "Backspace":
            display.innerText = display.innerText.slice(0,display.innerText.length - 1);
            if (display.innerText === "") { display.innerText = "0" };
    }
});
