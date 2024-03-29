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
    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            clearIfNewOperandLine();
            addIfZeroDisplayed(e.key);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operateIfWithPreviousResult();
            registerOperandAndOperator(e.key);
            break;
        case "Enter":
            if (firstOperand !== "") {
                secondOperand = display.innerText;
                display.innerText = operate(currentOperator, +firstOperand, +secondOperand);
                firstOperand = display.innerText;
                secondOperand = "";
                currentOperator = "";
            }
            break;
        case "Backspace":
            display.innerText = display.innerText.slice(0, display.innerText.length - 1);
            if (display.innerText === "") { display.innerText = "0" };
    }
});
