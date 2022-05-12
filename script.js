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

let firstOperand = "";
let secondOperand = "";
let currentOperator = "";

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
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "0";
    }

    else {
        display.innerText += "0";
    }
})

btnOne.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "1";
    }

    else {
        display.innerText += "1";
    }
})

btnTwo.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "2";
    }

    else {
        display.innerText += "2";
    }
})

btnThree.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "3";
    }

    else {
        display.innerText += "3";
    }
})

btnFour.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "4";
    }

    else {
        display.innerText += "4";
    }
})

btnFive.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "5";
    }

    else {
        display.innerText += "5";
    }
})

btnSix.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "6";
    }

    else {
        display.innerText += "6";
    }
})

btnSeven.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "7";
    }

    else {
        display.innerText += "7";
    }
})

btnEight.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "8";
    }

    else {
        display.innerText += "8";
    }
})

btnNine.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (newOperandLine) {
        display.innerText = "";
        newOperandLine = false;
    }

    if (display.innerText === "0") {
        display.innerText = "9";
    }

    else {
        display.innerText += "9";
    }
})

const btnPlus = document.querySelector(".operator-plus");
const btnMinus = document.querySelector(".operator-minus");
const btnMultiply = document.querySelector(".operator-multiply");
const btnDivide = document.querySelector(".operator-divide");
const btnEquals = document.querySelector(".operator-equals");

let newOperandLine = false;

btnPlus.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (currentOperator !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);       
        secondOperand = "";
    }

    firstOperand = display.innerText;
    currentOperator = "+"
    newOperandLine = true;
})

btnMinus.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (currentOperator !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);       
        secondOperand = "";
    }

    firstOperand = display.innerText;
    currentOperator = "-"
    newOperandLine = true;
})

btnMultiply.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (currentOperator !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);       
        secondOperand = "";
    }

    firstOperand = display.innerText;
    currentOperator = "*"
    newOperandLine = true;
})

btnDivide.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (currentOperator !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);       
        secondOperand = "";
    }

    firstOperand = display.innerText;
    currentOperator = "/"
    newOperandLine = true;
})

btnEquals.addEventListener('click', () => {
    const display = document.querySelector(".current-display");

    if (firstOperand !== "") {
        secondOperand = display.innerText;
        display.innerText = operate(currentOperator, +firstOperand, +secondOperand);
        firstOperand = display.innerText;
        secondOperand = "";
        currentOperator = "";
    }
})

const btnAC = document.querySelector(".all-clear");

btnAC.addEventListener('click', () => {
    const display = document.querySelector(".current-display");
    display.innerText = "0";

    firstOperand = "";
    secondOperand = "";
    currentOperator = "";
})
