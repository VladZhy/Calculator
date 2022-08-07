import Calculator from './Calculator';
import { CalculatorData, CurrentCalculatorDisplay } from './Observer';

let isResult;
let currentSign;
let firstNumber;
let secondNumber;

let calculator = new Calculator();

const calculatorData = new CalculatorData();
const currentCalculatorDisplay = new CurrentCalculatorDisplay(calculatorData);

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
        if (calculatorData.numbers[calculatorData.currentArray].length === 1 && calculatorData.numbers[calculatorData.currentArray][0] === 0) {
            return;
        }

        // Resets if a person clicks on a number right after getting the result
        if (isResult && currentSecondArrayIsEmpty()) {
            calculatorData.setCalculatorData([[number], []], 0);
            inputScreen.value = currentCalculatorDisplay.output;
            isResult = false;
            return;
        }

        // Adds number into the current array
        calculatorData.pushNumberCalculatorData(number);

        // Resets operation buttons colors after the first number of the second array is added
        if (currentSecondArrayHasNumber()) {
            buttonsColorReset();
        }

        inputScreen.value = currentCalculatorDisplay.output;
    }

    function togglePositiveNegative() {
        calculatorData.togglePositiveNegativeCalculatorData();
        inputScreen.value = currentCalculatorDisplay.output;
    }

    function handlerResetButton() {
        calculatorData.setCalculatorData([[], []], 0);
        currentSign = '';
        buttonsColorReset();
        inputScreen.value = currentCalculatorDisplay.output;
    }

    function handlerEraseButton() {
        calculatorData.handlerEraseButtonCalculatorData();
        inputScreen.value = currentCalculatorDisplay.output;
    }

    function performOperation(buttonName, sign) {
        const dataSettings = function () {
            currentSign = sign;
            buttonsColorReset();
            buttonName.style.backgroundColor = 'orange';
        }

        // If current array is one and greater than zero
        if (calculatorData.currentArray === 0 && calculatorData.numbers[0].length > 0) {
            calculatorData.currentArray = 1;
            dataSettings();
        }

        if (currentSecondArrayIsEmpty()) {
            isResult = false;
            dataSettings();
        }

        if (bothArraysContainNumbers()) {
            convertArraysIntoNumbers();
            calculatorData.setCalculatorData([operationsBySign().toString().split(''), []], 1);
            dataSettings();
            inputScreen.value = currentCalculatorDisplay.output;
        }
    }

    function handlerEqualsButton() {
        if (bothArraysContainNumbers()) {
            convertArraysIntoNumbers();
            calculatorData.setCalculatorData([operationsBySign().toString().split(''), []], 1);
            currentSign = '';
            buttonsColorReset();
            isResult = true;
            inputScreen.value = currentCalculatorDisplay.output;
        }
    }

    const handlerPercentButton = function () {
        convertArraysIntoNumbers();
        const dataSettings = function () {
            currentSign = '';
            buttonsColorReset();
            inputScreen.value = currentCalculatorDisplay.output;
        }

        if ((calculatorData.currentArray === 0 || calculatorData.numbers[1].length === 0) && calculatorData.numbers[0].length > 0) {
            calculatorData.setCalculatorData([[firstNumber * 0.01], []], 1);
            dataSettings();
        }

        if (currentSecondArrayHasNumber()) {
            secondNumber = secondNumber * 0.01;
            calculatorData.setCalculatorData([operationsBySign().toString().split(''), []], 1);
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
        calculatorData.addDecimalSeparatorCalculatorData();
        inputScreen.value = currentCalculatorDisplay.output;
    }
}

function convertArraysIntoNumbers() {
    firstNumber = Number(calculatorData.numbers[0].join(''));
    secondNumber = Number(calculatorData.numbers[1].join(''));
}

function operationsBySign() {
    if (currentSign === 'Divide') {
        return [calculator.divide(firstNumber, secondNumber)];
    }

    if (currentSign === 'Multiply') {
        return [calculator.multiply(firstNumber, secondNumber)];
    }

    if (currentSign === 'Minus') {
        return [calculator.minus(firstNumber, secondNumber)];
    }

    if (currentSign === 'Plus') {
        return [calculator.plus(firstNumber, secondNumber)];
    }

}

function currentSecondArrayIsEmpty() {
    return calculatorData.currentArray === 1 && calculatorData.numbers[1].length === 0;
}

function bothArraysContainNumbers() {
    return calculatorData.numbers[0].length > 0 && calculatorData.numbers[1].length > 0;
}

function currentSecondArrayHasNumber() {
    return calculatorData.currentArray === 1 && calculatorData.numbers[1].length > 0;
}