"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/contract.ts":
/*!*****************************!*\
  !*** ./src/app/contract.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contract: function() { return /* binding */ contract; },\n/* harmony export */   web3: function() { return /* binding */ web3; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _app_ABI_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/ABI.json */ \"(app-pages-browser)/./src/app/ABI.json\");\n\n\nlet web3;\nlet contract;\nif ( true && typeof window.ethereum !== \"undefined\") {\n    web3 = new web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"](window.ethereum);\n    const contractAddress = \"0xf6737F78974A2EEF0A9424E98f6E16f1dF130F24\"; // ganti dengan address contract kalian\n    contract = new web3.eth.Contract(_app_ABI_json__WEBPACK_IMPORTED_MODULE_1__, contractAddress);\n} else {\n    console.log(\"Ethereum wallet not detected. Please install MetaMask or another wallet.\");\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udHJhY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QjtBQUNVO0FBRWxDLElBQUlFO0FBQ0osSUFBSUM7QUFFSixJQUFJLEtBQWtCLElBQWUsT0FBT0MsT0FBT0MsUUFBUSxLQUFLLGFBQWE7SUFDekVILE9BQU8sSUFBSUYsNENBQUlBLENBQUNJLE9BQU9DLFFBQVE7SUFDL0IsTUFBTUMsa0JBQWtCLDhDQUE4Qyx1Q0FBdUM7SUFDN0dILFdBQVcsSUFBSSxLQUFjSSxHQUFHLENBQUNDLFFBQVEsQ0FBQ1AsMENBQUdBLEVBQUVLO0FBQ25ELE9BQU87SUFDSEcsUUFBUUMsR0FBRyxDQUFDO0FBQ2hCO0FBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udHJhY3QudHM/NDMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IEFCSSBmcm9tIFwiLi4vYXBwL0FCSS5qc29uXCI7XG5cbmxldCB3ZWIzOiBXZWIzIHwgdW5kZWZpbmVkO1xubGV0IGNvbnRyYWN0OiBhbnk7IFxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ZjY3MzdGNzg5NzRBMkVFRjBBOTQyNEU5OGY2RTE2ZjFkRjEzMEYyNFwiOyAvLyBnYW50aSBkZW5nYW4gYWRkcmVzcyBjb250cmFjdCBrYWxpYW5cbiAgICBjb250cmFjdCA9IG5ldyAod2ViMyBhcyBhbnkpLmV0aC5Db250cmFjdChBQkksIGNvbnRyYWN0QWRkcmVzcyk7IFxufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnRXRoZXJldW0gd2FsbGV0IG5vdCBkZXRlY3RlZC4gUGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgb3IgYW5vdGhlciB3YWxsZXQuJyk7XG59XG5cbmV4cG9ydCB7IHdlYjMsIGNvbnRyYWN0IH07XG4iXSwibmFtZXMiOlsiV2ViMyIsIkFCSSIsIndlYjMiLCJjb250cmFjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3RBZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contract.ts\n"));

/***/ })

});