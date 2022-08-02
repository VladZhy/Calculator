import Calculator from './Calculator';

const numbers = [[], []];
let currentArray = 0;
let currentSign;
let isResult;
let firstNumber;
let secondNumber;

let calculator = new Calculator();

export function buildInterface(placeholder) {

    const root = document.createElement("div");

    const divSeparator1 = document.createElement("div");
    const divSeparator2 = document.createElement("div");
    const divSeparator3 = document.createElement("div");
    const divSeparator4 = document.createElement("div");
    const divSeparator5 = document.createElement("div");
    const divSeparator6 = document.createElement("div");

    const inputScreen = document.createElement("input");
    inputScreen.setAttribute("type", "text");
    inputScreen.setAttribute("class", "input-screen");

    const buttonReset = document.createElement("button");
    buttonReset.innerHTML = 'C';
    buttonReset.addEventListener('click', () => handlerResetButton());

    const buttonErase = document.createElement("button");
    buttonErase.innerHTML = '&lt;';
    buttonErase.addEventListener('click', () => handlerEraseButton());

    const buttonPercent = document.createElement("button");
    buttonPercent.innerHTML = '%';
    buttonPercent.addEventListener('click', () => handlerPercentButton());

    const buttonDivide = document.createElement("button");
    buttonDivide.innerHTML = '/';
    buttonDivide.addEventListener('click', () => performOperation(buttonDivide, 'Divide'));

    const buttonMultiply = document.createElement("button");
    buttonMultiply.innerHTML = '*';
    buttonMultiply.addEventListener('click', () => performOperation(buttonMultiply, 'Multiply'));

    const buttonMinus = document.createElement("button");
    buttonMinus.innerHTML = '-';
    buttonMinus.addEventListener('click', () => performOperation(buttonMinus, 'Minus'));

    const buttonPlus = document.createElement("button");
    buttonPlus.innerHTML = '+';
    buttonPlus.addEventListener('click', () => performOperation(buttonPlus, 'Plus'));

    const buttonEquals = document.createElement("button");
    buttonEquals.innerHTML = '=';
    buttonEquals.addEventListener('click', () => handlerEqualsButton());

    const buttonPositiveNegative = document.createElement("button");
    buttonPositiveNegative.innerHTML = '+/-';
    buttonPositiveNegative.addEventListener('click', () => togglePositiveNegative());

    const buttonDecimalSeparator = document.createElement("button");
    buttonDecimalSeparator.innerHTML = '.';
    buttonDecimalSeparator.addEventListener('click', () => addDecimalSeparator());

    const buttonZero = buildNumericButton(0);
    const buttonOne = buildNumericButton(1);
    const buttonTwo = buildNumericButton(2);
    const buttonThree = buildNumericButton(3);
    const buttonFour = buildNumericButton(4);
    const buttonFive = buildNumericButton(5);
    const buttonSix = buildNumericButton(6);
    const buttonSeven = buildNumericButton(7);
    const buttonEight = buildNumericButton(8);
    const buttonNine = buildNumericButton(9);

    root.append(divSeparator1)
    divSeparator1.append(inputScreen);
    root.append(divSeparator2);
    divSeparator2.append(buttonReset, buttonErase, buttonPercent, buttonDivide);
    root.append(divSeparator3);
    divSeparator3.append(buttonSeven, buttonEight, buttonNine, buttonMultiply);
    root.append(divSeparator4);
    divSeparator4.append(buttonFour, buttonFive, buttonSix, buttonMinus);
    root.append(divSeparator5);
    divSeparator5.append(buttonOne, buttonTwo, buttonThree, buttonPlus);
    root.append(divSeparator6);
    divSeparator6.append(buttonZero, buttonPositiveNegative, buttonDecimalSeparator, buttonEquals);

    placeholder.replaceWith(root);

    function buildNumericButton(number) {
        const button = document.createElement("button");
        button.innerHTML = `${number}`;
        button.addEventListener('click', () => pushNumbers(number));
        return button;
    }

    function pushNumbers(number) {
        // Checks if there is no decimal separator after zero
        if (numbers[currentArray].length === 1 && numbers[currentArray][0] === 0) {
            return;
        }

        // Resets if a person clicks on a number right after getting the result
        if (isResult && currentSecondArrayIsEmpty()) {
            currentArray = 0;
            numbers[0] = [number];
            display();
            isResult = false;
            return;
        }

        // Adds number into the current array
        numbers[currentArray].push(number);

        // Resets operation buttons colors after the first number of the second array is added
        if (currentSecondArrayHasNumber()) {
            buttonsColorReset();
        }

        display();
    }

    function display() {
        // Checks if the current array is the second, but it doesn't have any numbers
        if (currentSecondArrayIsEmpty()) {
            inputScreen.value = numbers[0].join('');
        } else {
            inputScreen.value = numbers[currentArray].join('');
        }
    }

    function togglePositiveNegative() {
        if (currentSecondArrayIsEmpty()) {
            if (numbers[0][0] !== '-') {
                numbers[0].unshift('-');
                display();
            } else if (numbers[0][0] === '-') {
                numbers[0].shift();
                display();
            }
        } else if (numbers[currentArray][0] !== '-' && numbers[currentArray].length > 0) {
            numbers[currentArray].unshift('-');
            display();
        } else if (numbers[currentArray][0] === '-' && numbers[currentArray].length > 0) {
            numbers[currentArray].shift();
            display();
        }
    }

    function handlerResetButton() {
        numbers[0] = [];
        numbers[1] = [];
        currentArray = 0;
        currentSign = '';
        buttonsColorReset();
        inputScreen.value = '';
    }

    function handlerEraseButton() {
        if (currentSecondArrayIsEmpty()) {
            numbers[0].pop();
            currentArray = 0;
        } else {
            numbers[currentArray].pop();
        }
        display();
    }

    function performOperation(buttonName, sign) {
        if (currentArray === 0 && numbers[0].length > 0) {
            currentArray = 1;
            currentSign = sign;
            buttonsColorReset();
            buttonName.style.backgroundColor = 'orange';
        }

        if (currentArray !== 0 && numbers[1].length === 0) {
            currentSign = sign;
            isResult = false;
            buttonsColorReset();
            buttonName.style.backgroundColor = 'orange';
        }

        if (bothArraysContainNumbers()) {
            convertArraysIntoNumbers();
            numbers[0] = operationsBySign().toString().split('');
            numbers[1] = [];
            currentArray = 1;
            currentSign = sign;
            buttonsColorReset();
            buttonName.style.backgroundColor = 'orange';
            display();
        }
    }

    function handlerEqualsButton() {
        if (bothArraysContainNumbers()) {
            convertArraysIntoNumbers();
            numbers[0] = operationsBySign().toString().split('');
            numbers[1] = [];
            currentArray = 1;
            currentSign = '';
            buttonsColorReset();
            isResult = true;
            display();
        }
    }

    const handlerPercentButton = function () {
        convertArraysIntoNumbers();
        const dataSettings = function () {
            numbers[1] = [];
            currentArray = 1;
            currentSign = '';
            buttonsColorReset();
            display();
        }

        if ((currentArray === 0 || numbers[1].length === 0) && numbers[0].length > 0) {
            numbers[0] = [firstNumber * 0.01];
            dataSettings();

        }

        if (currentSecondArrayHasNumber()) {
            secondNumber = secondNumber * 0.01;
            numbers[0] = operationsBySign().toString().split('');
            dataSettings();
        }
    }

    function buttonsColorReset() {
        buttonDivide.style.backgroundColor = '';
        buttonMultiply.style.backgroundColor = '';
        buttonMinus.style.backgroundColor = '';
        buttonPlus.style.backgroundColor = '';
    }

    function addDecimalSeparator() {
        if (numbers[currentArray].length > 0 && !numbers[currentArray].includes('.') && !checkIfNumberIsDecimal()) {
            numbers[currentArray].push('.');
            display();
        }
    }
}

function convertArraysIntoNumbers() {
    firstNumber = Number(numbers[0].join(''));
    secondNumber = Number(numbers[1].join(''));
}

function checkIfNumberIsDecimal() {
    let number = Number(numbers[currentArray].join(''));
    return (number - Math.floor(number)) !== 0 ? true : false;
}

function operationsBySign() {
    if (currentSign === 'Divide') {
        return calculator.divide(firstNumber, secondNumber);
    }

    if (currentSign === 'Multiply') {
        return calculator.multiply(firstNumber, secondNumber);
    }

    if (currentSign === 'Minus') {
        return calculator.minus(firstNumber, secondNumber);
    }

    if (currentSign === 'Plus') {
        return calculator.plus(firstNumber, secondNumber);
    }
}

function currentSecondArrayIsEmpty() {
    return currentArray === 1 && numbers[1].length === 0;
}

function bothArraysContainNumbers() {
    return numbers[0].length > 0 && numbers[1].length > 0;
}

function currentSecondArrayHasNumber() {
    return currentArray === 1 && numbers[1].length > 0;
}