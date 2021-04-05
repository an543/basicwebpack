/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Refactor.js":
/*!*********************!*\
  !*** ./Refactor.js ***!
  \*********************/
/***/ ((module) => {



class Refactor{

    generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
    generateTable(table, data) {
        for (let element of data) {
            let row = table.insertRow();
            console.log(element);
            let key;
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
}

module.exports = Refactor;

/***/ }),

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
    console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
    console.log("Loaded");
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");



const Refactor = __webpack_require__ (/*! ../../Refactor.js */ "./Refactor.js");
(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)("", function (data) {
    console.log(data);
});

(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let refactor = new Refactor();
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            refactor.generateTableHead(table, data);
            refactor.generateTable(table, dataRecords);
            /*
            let data = Object.keys(records.data[0]);
            generateTable(table, records.data); // generate the table first
            generateTableHead(table, data); // then the head
             */
        }

    });
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)("this worked  in the bundle");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vUmVmYWN0b3IuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9UZXN0SnMuanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy8uL3NyYy9qcy9nZXRKU09OLmpzIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VudGl0bGVkMTMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDWTtBQUNiO0FBQ2hDLGlCQUFpQixtQkFBTyxFQUFFLHdDQUFtQjtBQUM3QyxtREFBTTtBQUNOLGlEQUFPO0FBQ1A7QUFDQSxDQUFDOztBQUVELGlEQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DLDJDQUEyQztBQUMzQztBQUNBOztBQUVBLEtBQUs7QUFDTCx5REFBWSIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNsYXNzIFJlZmFjdG9ye1xyXG5cclxuICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuICAgICAgICBsZXQgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XHJcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICAgICAgbGV0IGtleTtcclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWZhY3RvcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nSXQobWVzc2FnZSkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZFwiKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci5zZW5kKCk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gXCIuL1Rlc3RKcy5qc1wiO1xyXG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gXCIuL0NvbnNvbGVMb2dJdC5qc1wiO1xyXG5pbXBvcnQgZ2V0SlNPTiBmcm9tIFwiLi9nZXRKU09OXCI7XHJcbmNvbnN0IFJlZmFjdG9yID0gcmVxdWlyZSAoXCIuLi8uLi9SZWZhY3Rvci5qc1wiKTtcclxuVGVzdEpTKCk7XHJcbmdldEpTT04oXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KTtcclxuXHJcbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcclxuICAgIGZ1bmN0aW9uKGVyciwgcmVjb3Jkcykge1xyXG4gICAgICAgIGlmIChlcnIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nOiAnICsgZXJyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVmYWN0b3IgPSBuZXcgUmVmYWN0b3IoKTtcclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKChyZWNvcmRzLmRhdGFbMF0pKTtcclxuICAgICAgICAgICAgbGV0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgcmVmYWN0b3IuZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICAgICAgICByZWZhY3Rvci5nZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMocmVjb3Jkcy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgcmVjb3Jkcy5kYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XHJcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbkNvbnNvbGVMb2dJdChcInRoaXMgd29ya2VkICBpbiB0aGUgYnVuZGxlXCIpO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9