/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/Calculator.js":
/*!**********************************!*\
  !*** ./public/src/Calculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Calculator {\r\n    divide(firstNumber, secondNumber) {\r\n        return [firstNumber / secondNumber];\r\n    }\r\n\r\n    multiply(firstNumber, secondNumber) {\r\n        return [firstNumber * secondNumber];\r\n    }\r\n\r\n    minus(firstNumber, secondNumber) {\r\n        return [firstNumber - secondNumber];\r\n    }\r\n\r\n    plus(firstNumber, secondNumber) {\r\n        return [firstNumber + secondNumber];\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calculator);\n\n//# sourceURL=webpack://calculator/./public/src/Calculator.js?");

/***/ }),

/***/ "./public/src/CalculatorInterface.js":
/*!*******************************************!*\
  !*** ./public/src/CalculatorInterface.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildInterface\": () => (/* binding */ buildInterface)\n/* harmony export */ });\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./public/src/Calculator.js\");\n\r\n\r\nconst numbers = [[], []];\r\nlet currentArray = 0;\r\nlet currentSign;\r\nlet isResult;\r\nlet firstNumber;\r\nlet secondNumber;\r\n\r\nlet calculator = new _Calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction buildInterface(placeholder) {\r\n\r\n    const root = document.createElement(\"div\");\r\n\r\n    const divSeparator1 = document.createElement(\"div\");\r\n    const divSeparator2 = document.createElement(\"div\");\r\n    const divSeparator3 = document.createElement(\"div\");\r\n    const divSeparator4 = document.createElement(\"div\");\r\n    const divSeparator5 = document.createElement(\"div\");\r\n    const divSeparator6 = document.createElement(\"div\");\r\n\r\n    const inputScreen = document.createElement(\"input\");\r\n    inputScreen.setAttribute(\"type\", \"text\");\r\n    inputScreen.setAttribute(\"class\", \"input-screen\");\r\n\r\n    const buttonReset = document.createElement(\"button\");\r\n    buttonReset.innerHTML = 'C';\r\n    buttonReset.addEventListener('click', () => handlerResetButton());\r\n\r\n    const buttonErase = document.createElement(\"button\");\r\n    buttonErase.innerHTML = '&lt;';\r\n    buttonErase.addEventListener('click', () => handlerEraseButton());\r\n\r\n    const buttonPercent = document.createElement(\"button\");\r\n    buttonPercent.innerHTML = '%';\r\n    buttonPercent.addEventListener('click', () => handlerPercentButton());\r\n\r\n    const buttonDivide = document.createElement(\"button\");\r\n    buttonDivide.innerHTML = '/';\r\n    buttonDivide.addEventListener('click', () => performOperation(buttonDivide, 'Divide'));\r\n\r\n    const buttonMultiply = document.createElement(\"button\");\r\n    buttonMultiply.innerHTML = '*';\r\n    buttonMultiply.addEventListener('click', () => performOperation(buttonMultiply, 'Multiply'));\r\n\r\n    const buttonMinus = document.createElement(\"button\");\r\n    buttonMinus.innerHTML = '-';\r\n    buttonMinus.addEventListener('click', () => performOperation(buttonMinus, 'Minus'));\r\n\r\n    const buttonPlus = document.createElement(\"button\");\r\n    buttonPlus.innerHTML = '+';\r\n    buttonPlus.addEventListener('click', () => performOperation(buttonPlus, 'Plus'));\r\n\r\n    const buttonEquals = document.createElement(\"button\");\r\n    buttonEquals.innerHTML = '=';\r\n    buttonEquals.addEventListener('click', () => handlerEqualsButton());\r\n\r\n    const buttonPositiveNegative = document.createElement(\"button\");\r\n    buttonPositiveNegative.innerHTML = '+/-';\r\n    buttonPositiveNegative.addEventListener('click', () => togglePositiveNegative());\r\n\r\n    const buttonDecimalSeparator = document.createElement(\"button\");\r\n    buttonDecimalSeparator.innerHTML = '.';\r\n    buttonDecimalSeparator.addEventListener('click', () => addDecimalSeparator());\r\n\r\n    const buttonZero = buildNumericButton(0);\r\n    const buttonOne = buildNumericButton(1);\r\n    const buttonTwo = buildNumericButton(2);\r\n    const buttonThree = buildNumericButton(3);\r\n    const buttonFour = buildNumericButton(4);\r\n    const buttonFive = buildNumericButton(5);\r\n    const buttonSix = buildNumericButton(6);\r\n    const buttonSeven = buildNumericButton(7);\r\n    const buttonEight = buildNumericButton(8);\r\n    const buttonNine = buildNumericButton(9);\r\n\r\n    root.append(divSeparator1)\r\n    divSeparator1.append(inputScreen);\r\n    root.append(divSeparator2);\r\n    divSeparator2.append(buttonReset, buttonErase, buttonPercent, buttonDivide);\r\n    root.append(divSeparator3);\r\n    divSeparator3.append(buttonSeven, buttonEight, buttonNine, buttonMultiply);\r\n    root.append(divSeparator4);\r\n    divSeparator4.append(buttonFour, buttonFive, buttonSix, buttonMinus);\r\n    root.append(divSeparator5);\r\n    divSeparator5.append(buttonOne, buttonTwo, buttonThree, buttonPlus);\r\n    root.append(divSeparator6);\r\n    divSeparator6.append(buttonZero, buttonPositiveNegative, buttonDecimalSeparator, buttonEquals);\r\n\r\n    placeholder.replaceWith(root);\r\n\r\n    function buildNumericButton(number) {\r\n        const button = document.createElement(\"button\");\r\n        button.innerHTML = `${number}`;\r\n        button.addEventListener('click', () => pushNumbers(number));\r\n        return button;\r\n    }\r\n\r\n    function pushNumbers(number) {\r\n        // Checks if there is no decimal separator after zero\r\n        if (numbers[currentArray].length === 1 && numbers[currentArray][0] === 0) {\r\n            return;\r\n        }\r\n\r\n        // Resets if a person clicks on a number right after getting the result\r\n        if (isResult && currentSecondArrayIsEmpty()) {\r\n            currentArray = 0;\r\n            numbers[0] = [number];\r\n            display();\r\n            isResult = false;\r\n            return;\r\n        }\r\n\r\n        // Adds number into the current array\r\n        numbers[currentArray].push(number);\r\n\r\n        // Resets operation buttons colors after the first number of the second array is added\r\n        if (currentSecondArrayHasNumber()) {\r\n            buttonsColorReset();\r\n        }\r\n\r\n        display();\r\n    }\r\n\r\n    function display() {\r\n        // Checks if the current array is the second, but it doesn't have any numbers\r\n        if (currentSecondArrayIsEmpty()) {\r\n            inputScreen.value = numbers[0].join('');\r\n        } else {\r\n            inputScreen.value = numbers[currentArray].join('');\r\n        }\r\n    }\r\n\r\n    function togglePositiveNegative() {\r\n        if (currentSecondArrayIsEmpty()) {\r\n            if (numbers[0][0] !== '-') {\r\n                numbers[0].unshift('-');\r\n                display();\r\n            } else if (numbers[0][0] === '-') {\r\n                numbers[0].shift();\r\n                display();\r\n            }\r\n        } else if (numbers[currentArray][0] !== '-' && numbers[currentArray].length > 0) {\r\n            numbers[currentArray].unshift('-');\r\n            display();\r\n        } else if (numbers[currentArray][0] === '-' && numbers[currentArray].length > 0) {\r\n            numbers[currentArray].shift();\r\n            display();\r\n        }\r\n    }\r\n\r\n    function handlerResetButton() {\r\n        numbers[0] = [];\r\n        numbers[1] = [];\r\n        currentArray = 0;\r\n        currentSign = '';\r\n        buttonsColorReset();\r\n        inputScreen.value = '';\r\n    }\r\n\r\n    function handlerEraseButton() {\r\n        if (currentSecondArrayIsEmpty()) {\r\n            numbers[0].pop();\r\n            currentArray = 0;\r\n        } else {\r\n            numbers[currentArray].pop();\r\n        }\r\n        display();\r\n    }\r\n\r\n    function performOperation(buttonName, sign) {\r\n        if (currentArray === 0 && numbers[0].length > 0) {\r\n            currentArray = 1;\r\n            currentSign = sign;\r\n            buttonsColorReset();\r\n            buttonName.style.backgroundColor = 'orange';\r\n        }\r\n\r\n        if (currentArray !== 0 && numbers[1].length === 0) {\r\n            currentSign = sign;\r\n            isResult = false;\r\n            buttonsColorReset();\r\n            buttonName.style.backgroundColor = 'orange';\r\n        }\r\n\r\n        if (bothArraysContainNumbers()) {\r\n            convertArraysIntoNumbers();\r\n            numbers[0] = operationsBySign().toString().split('');\r\n            numbers[1] = [];\r\n            currentArray = 1;\r\n            currentSign = sign;\r\n            buttonsColorReset();\r\n            buttonName.style.backgroundColor = 'orange';\r\n            display();\r\n        }\r\n    }\r\n\r\n    function handlerEqualsButton() {\r\n        if (bothArraysContainNumbers()) {\r\n            convertArraysIntoNumbers();\r\n            numbers[0] = operationsBySign().toString().split('');\r\n            numbers[1] = [];\r\n            currentArray = 1;\r\n            currentSign = '';\r\n            buttonsColorReset();\r\n            isResult = true;\r\n            display();\r\n        }\r\n    }\r\n\r\n    const handlerPercentButton = function () {\r\n        convertArraysIntoNumbers();\r\n        const dataSettings = function () {\r\n            numbers[1] = [];\r\n            currentArray = 1;\r\n            currentSign = '';\r\n            buttonsColorReset();\r\n            display();\r\n        }\r\n\r\n        if ((currentArray === 0 || numbers[1].length === 0) && numbers[0].length > 0) {\r\n            numbers[0] = [firstNumber * 0.01];\r\n            dataSettings();\r\n\r\n        }\r\n\r\n        if (currentSecondArrayHasNumber()) {\r\n            secondNumber = secondNumber * 0.01;\r\n            numbers[0] = operationsBySign().toString().split('');\r\n            dataSettings();\r\n        }\r\n    }\r\n\r\n    function buttonsColorReset() {\r\n        buttonDivide.style.backgroundColor = '';\r\n        buttonMultiply.style.backgroundColor = '';\r\n        buttonMinus.style.backgroundColor = '';\r\n        buttonPlus.style.backgroundColor = '';\r\n    }\r\n\r\n    function addDecimalSeparator() {\r\n        if (numbers[currentArray].length > 0 && !numbers[currentArray].includes('.') && !checkIfNumberIsDecimal()) {\r\n            numbers[currentArray].push('.');\r\n            display();\r\n        }\r\n    }\r\n}\r\n\r\nfunction convertArraysIntoNumbers() {\r\n    firstNumber = Number(numbers[0].join(''));\r\n    secondNumber = Number(numbers[1].join(''));\r\n}\r\n\r\nfunction checkIfNumberIsDecimal() {\r\n    let number = Number(numbers[currentArray].join(''));\r\n    return (number - Math.floor(number)) !== 0 ? true : false;\r\n}\r\n\r\nfunction operationsBySign() {\r\n    if (currentSign === 'Divide') {\r\n        return calculator.divide(firstNumber, secondNumber);\r\n    }\r\n\r\n    if (currentSign === 'Multiply') {\r\n        return calculator.multiply(firstNumber, secondNumber);\r\n    }\r\n\r\n    if (currentSign === 'Minus') {\r\n        return calculator.minus(firstNumber, secondNumber);\r\n    }\r\n\r\n    if (currentSign === 'Plus') {\r\n        return calculator.plus(firstNumber, secondNumber);\r\n    }\r\n}\r\n\r\nfunction currentSecondArrayIsEmpty() {\r\n    return currentArray === 1 && numbers[1].length === 0;\r\n}\r\n\r\nfunction bothArraysContainNumbers() {\r\n    return numbers[0].length > 0 && numbers[1].length > 0;\r\n}\r\n\r\nfunction currentSecondArrayHasNumber() {\r\n    return currentArray === 1 && numbers[1].length > 0;\r\n}\n\n//# sourceURL=webpack://calculator/./public/src/CalculatorInterface.js?");

/***/ }),

/***/ "./public/src/script.js":
/*!******************************!*\
  !*** ./public/src/script.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CalculatorInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalculatorInterface */ \"./public/src/CalculatorInterface.js\");\n\r\n\r\nconst jsDiv = document.querySelector('.js-calculator');\r\n\r\n(0,_CalculatorInterface__WEBPACK_IMPORTED_MODULE_0__.buildInterface)(jsDiv);\n\n//# sourceURL=webpack://calculator/./public/src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/script.js");
/******/ 	
/******/ })()
;