/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n // Selected DOM elements\n\nvar html = document.querySelector('html');\nvar body = document.querySelector('body');\nvar menuToggle = document.querySelector('.menu-toggle');\nvar menuIcon = document.querySelector('.icon-menu');\nvar siteMenu = document.querySelector('.site-menu');\nvar socialMenu = document.querySelector('.social-menu');\nvar toTopBtn = document.querySelector('.to-top'); // Site and social menu toggle\n\nif (menuToggle) {\n  menuToggle.addEventListener('click', function () {\n    siteMenu.classList.toggle('collapsed');\n    socialMenu.classList.toggle('collapsed');\n    menuIcon.classList.toggle('icon-menu');\n    menuIcon.classList.toggle('icon-close');\n  });\n} // Random emoji for 404 error message.\n\n\nvar randomErrorEmoji = function randomErrorEmoji() {\n  var error = document.getElementsByClassName('error-emoji')[0];\n  var emojiArray = ['\\\\(o_o)/', '(o^^)o', '(˚Δ˚)b', '(^-^*)', '(≥o≤)', '(^_^)b', '(·_·)', '(=\\'X\\'=)', '(>_<)', '(;-;)', '\\\\(^Д^)/'];\n\n  if (error) {\n    var errorEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];\n    error.appendChild(document.createTextNode(errorEmoji));\n  }\n};\n\nrandomErrorEmoji(); // Object-fit polyfill for post cover\n\n/* eslint-disable no-undef */\n\nobjectFitImages('img.post-cover'); // Show toTopBtn when scroll to 600px\n\n/* eslint-disable no-undef */\n\nvar lastPosition = 0;\nvar ticking = false;\nwindow.addEventListener('scroll', function () {\n  lastPosition = body.scrollTop === 0 ? html.scrollTop : body.scrollTop;\n\n  if (!ticking) {\n    window.requestAnimationFrame(function () {\n      if (lastPosition >= 600) {\n        toTopBtn.classList.remove('is-hide');\n      } else {\n        toTopBtn.classList.add('is-hide');\n      }\n\n      ticking = false;\n    });\n  }\n\n  ticking = true;\n}); // Smooth Scroll to top when click toTopBtn\n\nvar scroll = new SmoothScroll('a[href*=\"#\"]');\ntoTopBtn.addEventListener('click', function () {\n  scroll.animateScroll(0);\n}); // HMR interface\n\nif (false) {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzEyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XHJcblxyXG4vLyBTZWxlY3RlZCBET00gZWxlbWVudHNcclxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpO1xyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLW1lbnUnKTtcclxuY29uc3Qgc2l0ZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1tZW51Jyk7XHJcbmNvbnN0IHNvY2lhbE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29jaWFsLW1lbnUnKTtcclxuY29uc3QgdG9Ub3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tdG9wJyk7XHJcblxyXG4vLyBTaXRlIGFuZCBzb2NpYWwgbWVudSB0b2dnbGVcclxuaWYgKG1lbnVUb2dnbGUpIHtcclxuICBtZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2l0ZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XHJcbiAgICBzb2NpYWxNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xyXG4gICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaWNvbi1tZW51Jyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpY29uLWNsb3NlJyk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIFJhbmRvbSBlbW9qaSBmb3IgNDA0IGVycm9yIG1lc3NhZ2UuXHJcbmNvbnN0IHJhbmRvbUVycm9yRW1vamkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcnJvci1lbW9qaScpWzBdO1xyXG4gIGNvbnN0IGVtb2ppQXJyYXkgPSBbXHJcbiAgICAnXFxcXChvX28pLycsICcob15eKW8nLCAnKMuazpTLmiliJywgJyheLV4qKScsICco4omlb+KJpCknLCAnKF5fXiliJywgJyjOh1/OhyknLFxyXG4gICAgJyg9XFwnWFxcJz0pJywgJyg+XzwpJywgJyg7LTspJywgJ1xcXFwoXtCUXikvJyxcclxuICBdO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JFbW9qaSA9IGVtb2ppQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1vamlBcnJheS5sZW5ndGgpXTtcclxuICAgIGVycm9yLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVycm9yRW1vamkpKTtcclxuICB9XHJcbn07XHJcbnJhbmRvbUVycm9yRW1vamkoKTtcclxuXHJcbi8vIE9iamVjdC1maXQgcG9seWZpbGwgZm9yIHBvc3QgY292ZXJcclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxub2JqZWN0Rml0SW1hZ2VzKCdpbWcucG9zdC1jb3ZlcicpO1xyXG5cclxuLy8gU2hvdyB0b1RvcEJ0biB3aGVuIHNjcm9sbCB0byA2MDBweFxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG5sZXQgbGFzdFBvc2l0aW9uID0gMDtcclxubGV0IHRpY2tpbmcgPSBmYWxzZTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICBsYXN0UG9zaXRpb24gPSBib2R5LnNjcm9sbFRvcCA9PT0gMCA/IGh0bWwuc2Nyb2xsVG9wIDogYm9keS5zY3JvbGxUb3A7XHJcbiAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgaWYgKGxhc3RQb3NpdGlvbiA+PSA2MDApIHtcclxuICAgICAgICB0b1RvcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9Ub3BCdG4uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aWNraW5nID0gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBTbW9vdGggU2Nyb2xsIHRvIHRvcCB3aGVuIGNsaWNrIHRvVG9wQnRuXHJcbmNvbnN0IHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJyk7XHJcbnRvVG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNjcm9sbC5hbmltYXRlU2Nyb2xsKDApO1xyXG59KTtcclxuXHJcbi8vIEhNUiBpbnRlcmZhY2VcclxuaWYgKG1vZHVsZS5ob3QpIG1vZHVsZS5ob3QuYWNjZXB0KCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL21haW4uY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLmNzcz83NzM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/main.css\n");

/***/ })

/******/ });