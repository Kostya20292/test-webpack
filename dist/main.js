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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_changeLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/changeLink */ \"./src/modules/changeLink.js\");\n/* harmony import */ var _modules_translatePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/translatePage */ \"./src/modules/translatePage.js\");\n\n\n\n(0,_modules_changeLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_translatePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://bpmobile-test-main/./src/index.js?");

/***/ }),

/***/ "./src/modules/changeLink.js":
/*!***********************************!*\
  !*** ./src/modules/changeLink.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    const cards = document.querySelectorAll('.cards__item');\n    const continueBtn = document.querySelector('.cards__button');\n\n    const changeLink = () => {\n        cards.forEach((item) => {\n            if (!item.classList.contains('cards__item-hide')) {\n                item.dataset.link === 'apple'\n                    ? continueBtn.setAttribute('href', 'https://www.apple.com')\n                    : continueBtn.setAttribute('href', 'https://google.com');\n            }\n        });\n    };\n\n    cards.forEach((item, index) => {\n        item.addEventListener('click', () => {\n            if (item.classList.contains('cards__item-hide')) {\n                cards.forEach((card, idx) => {\n                    card.classList.add('cards__item-hide');\n                    card.style.background = `url(./img/shape-${idx}-hide.svg) no-repeat`;\n                });\n                cards[index].classList.remove('cards__item-hide');\n                cards[\n                    index\n                ].style.background = `url(./img/shape-${index}.svg) no-repeat`;\n            }\n        });\n    });\n\n    continueBtn.addEventListener('click', changeLink);\n});\n\n\n//# sourceURL=webpack://bpmobile-test-main/./src/modules/changeLink.js?");

/***/ }),

/***/ "./src/modules/getLanguages.js":
/*!*************************************!*\
  !*** ./src/modules/getLanguages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (language) => {\n    const pageHeader = document.querySelector('header');\n    const contentTitle = document.querySelector('.content__title');\n    const cards = document.querySelectorAll('.cards__item');\n\n    const languageList = await fetch(`../languages/${language}.json`).then(\n        (response) => {\n            return response.json();\n        }\n    );\n\n    if (language === 'es') {\n        pageHeader.classList.add('header--es');\n    }\n\n    if (language === 'fr') {\n        cards.forEach((card) => {\n            card.classList.add('card--fr');\n        });\n        pageHeader.classList.add('header--fr');\n    }\n\n    if (language === 'nl') {\n        pageHeader.classList.add('header--nl');\n    }\n\n    if (language === 'ru') {\n        cards.forEach((card) => {\n            card.classList.add('card--ru');\n        });\n        contentTitle.classList.add('content__title--ru');\n        pageHeader.classList.add('header--ru');\n    }\n\n    return languageList;\n});\n\n\n//# sourceURL=webpack://bpmobile-test-main/./src/modules/getLanguages.js?");

/***/ }),

/***/ "./src/modules/translatePage.js":
/*!**************************************!*\
  !*** ./src/modules/translatePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLanguages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLanguages */ \"./src/modules/getLanguages.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n    const urlLanguage = location.search.substring(6);\n    const currentLanguage = urlLanguage || navigator.language || 'en';\n    const elementsContent = document.querySelectorAll('[data-content]');\n\n    const lang = await (0,_getLanguages__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentLanguage);\n\n    for (let el of elementsContent) {\n        const elText = el.dataset.content;\n        el.innerHTML = lang[elText];\n\n        if (el.dataset.cost) {\n            if (el.innerHTML.includes('{{price}}/')) {\n                el.innerHTML = el.innerHTML.replace(\n                    '{{price}}/',\n                    `${el.dataset.cost} `\n                );\n            } else if (el.innerHTML.includes('{{price}}')) {\n                el.innerHTML = el.innerHTML.replace(\n                    '{{price}}',\n                    `${el.dataset.cost} `\n                );\n            }\n        }\n    }\n});\n\n\n//# sourceURL=webpack://bpmobile-test-main/./src/modules/translatePage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;