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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_vercel_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/vercel.svg */ \"(app-pages-browser)/./public/vercel.svg\");\n/* harmony import */ var _barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Divider,InputNumber!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Divider,InputNumber!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/input-number/index.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Divider,InputNumber!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/divider/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_contract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/contract */ \"(app-pages-browser)/./src/app/contract.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const connectWallet = async ()=>{\n        if (_app_contract__WEBPACK_IMPORTED_MODULE_3__.web3 && _app_contract__WEBPACK_IMPORTED_MODULE_3__.contract) {\n            try {\n                const accounts = await _app_contract__WEBPACK_IMPORTED_MODULE_3__.web3.eth.requestAccounts();\n                setAccount(accounts[0]);\n            } catch (error) {\n                console.error(\"Error accessing accounts:\", error);\n            }\n        } else {\n            console.error(\"Web3 or contract is not initialized\");\n        }\n    };\n    const mint = async ()=>{\n        try {\n            await _app_contract__WEBPACK_IMPORTED_MODULE_3__.contract.methods.mint();\n        } catch (e) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black w-full py-[5px] text-white text-center\",\n                children: \"Token Minter\"\n            }, void 0, false, {\n                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center w-full mt-[20px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: _public_vercel_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"logo\",\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] border-2 min-h-[80vh] justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    className: \"!bg-black !text-white\",\n                    onClick: connectWallet,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col lg:flex-row gap-[30px] mt-[20px] px-[30px] border-2 min-h-[80vh] justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[22px] font-bold\",\n                                children: \"Mint Token\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[10px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        style: {\n                                            borderRadius: 16,\n                                            height: 48,\n                                            backgroundColor: \"#F0F0F0\"\n                                        },\n                                        placeholder: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"!bg-black !text-white !h-[40px] !rounded-[16px]\",\n                                        onClick: mint,\n                                        children: \"Mint Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-[22px] font-bold\",\n                                children: \"Burn Token\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[10px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        style: {\n                                            borderRadius: 16,\n                                            height: 48,\n                                            backgroundColor: \"#F0F0F0\"\n                                        },\n                                        placeholder: \"Amount\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"!bg-black !text-white !h-[40px] !rounded-[16px]\",\n                                        children: \"Burn Token\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-[20px] border-[1px] border-gray-200 p-[24px] flex-1 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mb-[20px]\",\n                                children: \"Your Token Balance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-[10px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-[#00000099]\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center gap-[5px]\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    className: \"text-[#A8A8A8]\",\n                                                    children: \"0\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Divider_InputNumber_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youvandrafebrial/Downloads/token-minterr/token-minter-template-simple/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"v+GsaBOyRPoPwJh7mxQ3zpEGSB8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXVDO0FBQ2E7QUFDckI7QUFDa0I7QUFDaEI7QUFFbEIsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFFdEQsTUFBTUksZ0JBQWdCO1FBQ3BCLElBQUlOLCtDQUFJQSxJQUFJQyxtREFBUUEsRUFBRTtZQUNwQixJQUFJO2dCQUNGLE1BQU1NLFdBQVcsTUFBTVAsK0NBQUlBLENBQUNRLEdBQUcsQ0FBQ0MsZUFBZTtnQkFDL0NKLFdBQVdFLFFBQVEsQ0FBQyxFQUFFO1lBQ3hCLEVBQUUsT0FBT0csT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDN0M7UUFDRixPQUFPO1lBQ0xDLFFBQVFELEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBRUEsTUFBTUUsT0FBTztRQUNYLElBQUk7WUFDRixNQUFNWCxtREFBUUEsQ0FBQ1ksT0FBTyxDQUFDRCxJQUFJO1FBQzdCLEVBQUUsVUFBSyxDQUNQO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTswQkFBa0Q7Ozs7OzswQkFJakUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDaEIsa0RBQUtBO29CQUFDaUIsS0FBS3JCLDBEQUFJQTtvQkFBRXNCLEtBQUk7b0JBQU9DLE9BQU87b0JBQUtDLFFBQVE7Ozs7Ozs7Ozs7O1lBR2xELENBQUNmLHdCQUNBLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ25CLDhGQUFNQTtvQkFBQ21CLFdBQVU7b0JBQXdCSyxTQUFTZDs4QkFBZTs7Ozs7Ozs7OztxQ0FLcEUsOERBQUNRO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBd0I7Ozs7OzswQ0FDdEMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2pCLDhGQUFXQTt3Q0FDVndCLE9BQU87NENBQ0xDLGNBQWM7NENBQ2RKLFFBQVE7NENBQ1JLLGlCQUFpQjt3Q0FDbkI7d0NBQ0FDLGFBQVk7Ozs7OztrREFFZCw4REFBQzdCLDhGQUFNQTt3Q0FBQ21CLFdBQVU7d0NBQWtESyxTQUFTUjtrREFBTTs7Ozs7Ozs7Ozs7OzBDQUlyRiw4REFBQ1M7Z0NBQUdOLFdBQVU7MENBQXdCOzs7Ozs7MENBQ3RDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNqQiw4RkFBV0E7d0NBQ1Z3QixPQUFPOzRDQUNMQyxjQUFjOzRDQUNkSixRQUFROzRDQUNSSyxpQkFBaUI7d0NBQ25CO3dDQUNBQyxhQUFZOzs7Ozs7a0RBRWQsOERBQUM3Qiw4RkFBTUE7d0NBQUNtQixXQUFVO2tEQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt4RSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBWTs7Ozs7OzBDQUMxQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNNO2dEQUFHTixXQUFVOzs7Ozs7MERBQ2QsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDTTtvREFBR04sV0FBVTs4REFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUduQyw4REFBQ2xCLDhGQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEI7R0F2RndCTTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgbG9nbyBmcm9tICdAL3B1YmxpYy92ZXJjZWwuc3ZnJztcbmltcG9ydCB7IEJ1dHRvbiwgRGl2aWRlciwgSW5wdXROdW1iZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHdlYjMsIGNvbnRyYWN0IH0gZnJvbSAnLi4vYXBwL2NvbnRyYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh3ZWIzICYmIGNvbnRyYWN0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLnJlcXVlc3RBY2NvdW50cygpO1xuICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgYWNjb3VudHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIldlYjMgb3IgY29udHJhY3QgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBtaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnQoKTtcbiAgICB9IGNhdGNoe1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHctZnVsbCBweS1bNXB4XSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgIFRva2VuIE1pbnRlclxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIG10LVsyMHB4XVwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgeyFhY2NvdW50ID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLVszMHB4XSBtdC1bMjBweF0gcHgtWzMwcHhdIGJvcmRlci0yIG1pbi1oLVs4MHZoXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIiFiZy1ibGFjayAhdGV4dC13aGl0ZVwiIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXR9PlxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLVszMHB4XSBtdC1bMjBweF0gcHgtWzMwcHhdIGJvcmRlci0yIG1pbi1oLVs4MHZoXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzIwcHhdIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0yMDAgcC1bMjRweF0gZmxleC0xXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bMjJweF0gZm9udC1ib2xkXCI+TWludCBUb2tlbjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLVsxMHB4XVwiPlxuICAgICAgICAgICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjBGMEYwJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCIhYmctYmxhY2sgIXRleHQtd2hpdGUgIWgtWzQwcHhdICFyb3VuZGVkLVsxNnB4XVwiIG9uQ2xpY2s9e21pbnR9PlxuICAgICAgICAgICAgICAgIE1pbnQgVG9rZW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSBmb250LWJvbGRcIj5CdXJuIFRva2VuPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtWzEwcHhdXCI+XG4gICAgICAgICAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGMEYwRjAnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIiFiZy1ibGFjayAhdGV4dC13aGl0ZSAhaC1bNDBweF0gIXJvdW5kZWQtWzE2cHhdXCI+XG4gICAgICAgICAgICAgICAgQnVybiBUb2tlblxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bMjBweF0gYm9yZGVyLVsxcHhdIGJvcmRlci1ncmF5LTIwMCBwLVsyNHB4XSBmbGV4LTEgdy1mdWxsXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItWzIwcHhdXCI+WW91ciBUb2tlbiBCYWxhbmNlPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtWzEwcHhdXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWyMwMDAwMDA5OV1cIj48L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLVs1cHhdXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bI0E4QThBOF1cIj4wPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImxvZ28iLCJCdXR0b24iLCJEaXZpZGVyIiwiSW5wdXROdW1iZXIiLCJJbWFnZSIsIndlYjMiLCJjb250cmFjdCIsInVzZVN0YXRlIiwiSG9tZSIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiY29ubmVjdFdhbGxldCIsImFjY291bnRzIiwiZXRoIiwicmVxdWVzdEFjY291bnRzIiwiZXJyb3IiLCJjb25zb2xlIiwibWludCIsIm1ldGhvZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJoMSIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});