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

/***/ "./app/helpers/Dom.js":
/*!****************************!*\
  !*** ./app/helpers/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcFunc\": () => (/* binding */ calcFunc)\n/* harmony export */ });\n/* harmony import */ var _helpers_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/math */ \"./app/helpers/math.js\");\n/* harmony import */ var _helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/logger */ \"./app/helpers/logger.js\");\n\r\n\r\n//elements\r\nconst equalsBtn = document.getElementById('equalsBtn')\r\nconst userInput = document.getElementById('userInput')\r\nconst allKeyNumbers = document.getElementsByClassName('numbers')\r\nconst deleteBtn = document.getElementById('deleteBtn');\r\n//event listeners\r\nfunction calcFunc(){\r\ngiveNumbersMeaning();\r\n(0,_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.addEvents)()\r\nequalsBtn.addEventListener('click' , ()=>{\r\n    _helpers_logger__WEBPACK_IMPORTED_MODULE_1__.logger.number2 = userInput.value;\r\n    userInput.value = (0,_helpers_math__WEBPACK_IMPORTED_MODULE_0__.equals)(Number(_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.logger.number1),Number(_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.logger.number2),_helpers_logger__WEBPACK_IMPORTED_MODULE_1__.logger.callback);\r\n})\r\n}\r\n\r\nfunction giveNumbersMeaning(){\r\n    for(let num of allKeyNumbers){\r\n        num.addEventListener('click', ()=>{\r\n            userInput.value += num.value;\r\n        })\r\n    }\r\n    deleteBtn.addEventListener('click', ()=>{\r\n        userInput.value = userInput.value.slice(0, userInput.value.length-1);\r\n    })\r\n}\n\n//# sourceURL=webpack://calc/./app/helpers/Dom.js?");

/***/ }),

/***/ "./app/helpers/logger.js":
/*!*******************************!*\
  !*** ./app/helpers/logger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => (/* binding */ logger),\n/* harmony export */   \"addEvents\": () => (/* binding */ addEvents)\n/* harmony export */ });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./app/helpers/math.js\");\n\r\n\r\n//elements\r\nconst multiplyBtn = document.getElementById('multiplyBtn')\r\nconst subtractBtn = document.getElementById('subtractBtn')\r\nconst divideBtn = document.getElementById('divideBtn')\r\nconst addBtn = document.getElementById('addBtn')\r\nconst userInput = document.getElementById('userInput')\r\n\r\n\r\n//logger Object\r\nconst logger= {number1: 0,\r\nnumber2:0, callback:''};\r\n\r\n//general update object function\r\nconst updateLogger = (number1,callback) =>{\r\n    logger.number1 = number1;\r\n    logger.callback = callback;\r\n}\r\n//eventListeners\r\nfunction addEvents(){\r\nmultiplyBtn.addEventListener('click',()=>{\r\n    updateLogger(userInput.value, _math__WEBPACK_IMPORTED_MODULE_0__.multiply);\r\n    userInput.value = '';\r\n})\r\n\r\ndivideBtn.addEventListener('click', ()=>{\r\n    updateLogger(userInput.value, _math__WEBPACK_IMPORTED_MODULE_0__.divide);\r\n    userInput.value = '';\r\n})\r\naddBtn.addEventListener('click',()=>{\r\n    updateLogger(userInput.value, _math__WEBPACK_IMPORTED_MODULE_0__.add);\r\n    userInput.value = '';\r\n} )\r\nsubtractBtn.addEventListener('click', ()=>{\r\n    updateLogger(userInput.value, _math__WEBPACK_IMPORTED_MODULE_0__.sub);\r\n    userInput.value = '';\r\n} )\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/logger.js?");

/***/ }),

/***/ "./app/helpers/math.js":
/*!*****************************!*\
  !*** ./app/helpers/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"equals\": () => (/* binding */ equals)\n/* harmony export */ });\n\r\nfunction add(n1, n2){\r\n    return n1+n2;\r\n}\r\n\r\nfunction sub(n1, n2){\r\n    return n1-n2;\r\n}\r\n\r\nfunction multiply(n1, n2){\r\n    return n1*n2;\r\n}\r\n\r\nfunction divide(n1, n2){\r\n    return n1/n2;\r\n}\r\n\r\nfunction equals(n1, n2, callback){\r\n    return callback(n1,n2);\r\n}\n\n//# sourceURL=webpack://calc/./app/helpers/math.js?");

/***/ }),

/***/ "./app/src/main.js":
/*!*************************!*\
  !*** ./app/src/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./app/src/styles.css\");\n/* harmony import */ var _helpers_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/Dom */ \"./app/helpers/Dom.js\");\n\r\n\r\n\r\n(0,_helpers_Dom__WEBPACK_IMPORTED_MODULE_1__.calcFunc)();\r\n\n\n//# sourceURL=webpack://calc/./app/src/main.js?");

/***/ }),

/***/ "./app/src/styles.css":
/*!****************************!*\
  !*** ./app/src/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calc/./app/src/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/src/main.js");
/******/ 	
/******/ })()
;