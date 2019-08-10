module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/Header */ "carbon-components-react/lib/components/UIShell/Header");
/* harmony import */ var carbon_components_react_lib_components_UIShell_Header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_Header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenuButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderMenuButton */ "carbon-components-react/lib/components/UIShell/HeaderMenuButton");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenuButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderMenuButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderName */ "carbon-components-react/lib/components/UIShell/HeaderName");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderName__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderName__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderNavigation */ "carbon-components-react/lib/components/UIShell/HeaderNavigation");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderMenuItem */ "carbon-components-react/lib/components/UIShell/HeaderMenuItem");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderMenu */ "carbon-components-react/lib/components/UIShell/HeaderMenu");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderMenu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderMenu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderGlobalBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderGlobalBar */ "carbon-components-react/lib/components/UIShell/HeaderGlobalBar");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderGlobalBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderGlobalBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! carbon-components-react/lib/components/UIShell/HeaderGlobalAction */ "carbon-components-react/lib/components/UIShell/HeaderGlobalAction");
/* harmony import */ var carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _carbon_icons_react_lib_search_20__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/icons-react/lib/search/20 */ "@carbon/icons-react/lib/search/20");
/* harmony import */ var _carbon_icons_react_lib_search_20__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_carbon_icons_react_lib_search_20__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _carbon_icons_react_lib_notification_20__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/icons-react/lib/notification/20 */ "@carbon/icons-react/lib/notification/20");
/* harmony import */ var _carbon_icons_react_lib_notification_20__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_carbon_icons_react_lib_notification_20__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _carbon_icons_react_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/icons-react/lib/app-switcher/20 */ "@carbon/icons-react/lib/app-switcher/20");
/* harmony import */ var _carbon_icons_react_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_carbon_icons_react_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/justdave/reactDev/my-carbon-app/pages/index.js";














class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  onClick() {
    console.log('clicked button!');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_Header__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      "aria-label": "Open menu",
      onClick: () => {
        this.onClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderName__WEBPACK_IMPORTED_MODULE_4___default.a, {
      prefix: "",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "My Carbon App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderNavigation__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "My Carbon App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Link 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Link 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Link 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenu__WEBPACK_IMPORTED_MODULE_7___default.a, {
      menuLinkName: "Link 4",
      "aria-label": "Link 4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Sub-link 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Sub-link 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderMenuItem__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Sub-link 3"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderGlobalBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9___default.a, {
      "aria-label": "Search",
      onClick: () => {
        this.onClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carbon_icons_react_lib_search_20__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9___default.a, {
      "aria-label": "Notifications",
      onClick: () => {
        this.onClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carbon_icons_react_lib_notification_20__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(carbon_components_react_lib_components_UIShell_HeaderGlobalAction__WEBPACK_IMPORTED_MODULE_9___default.a, {
      "aria-label": "App Switcher",
      onClick: () => {
        this.onClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carbon_icons_react_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justdave/reactDev/my-carbon-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@carbon/icons-react/lib/app-switcher/20":
/*!**********************************************************!*\
  !*** external "@carbon/icons-react/lib/app-switcher/20" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@carbon/icons-react/lib/app-switcher/20");

/***/ }),

/***/ "@carbon/icons-react/lib/notification/20":
/*!**********************************************************!*\
  !*** external "@carbon/icons-react/lib/notification/20" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@carbon/icons-react/lib/notification/20");

/***/ }),

/***/ "@carbon/icons-react/lib/search/20":
/*!****************************************************!*\
  !*** external "@carbon/icons-react/lib/search/20" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@carbon/icons-react/lib/search/20");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/Header":
/*!************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/Header" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/Header");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderGlobalAction":
/*!************************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderGlobalAction" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderGlobalAction");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderGlobalBar":
/*!*********************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderGlobalBar" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderGlobalBar");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderMenu":
/*!****************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderMenu" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderMenu");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderMenuButton":
/*!**********************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderMenuButton" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderMenuButton");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderMenuItem":
/*!********************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderMenuItem" ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderMenuItem");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderName":
/*!****************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderName" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderName");

/***/ }),

/***/ "carbon-components-react/lib/components/UIShell/HeaderNavigation":
/*!**********************************************************************************!*\
  !*** external "carbon-components-react/lib/components/UIShell/HeaderNavigation" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("carbon-components-react/lib/components/UIShell/HeaderNavigation");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map