"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/confirmation",{

/***/ "./src/pages/confirmation/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/confirmation/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layout */ \"./src/layout/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var store_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/confirmation */ \"./src/store/confirmation/index.ts\");\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme */ \"./src/theme/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable react-hooks/rules-of-hooks */ \n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar index = function() {\n    var ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), verify = ref1[0], setverify = ref1[1];\n    var ref2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.confirmation;\n    }), success = ref2.success, error = ref2.error, message = ref2.message;\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    console.log(\"index\", verify);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var ref;\n        if ((ref = router.query) === null || ref === void 0 ? void 0 : ref.id) // @ts-ignore\n        dispatch((0,store_confirmation__WEBPACK_IMPORTED_MODULE_6__.Confirmation)(verify));\n    }, [\n        dispatch,\n        (ref3 = router.query) === null || ref3 === void 0 ? void 0 : ref3.id,\n        verify\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layout__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {\n            sm: {\n                offset: 1,\n                span: 10\n            },\n            md: {\n                offset: 3,\n                span: 5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(layout__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                shadow: true,\n                className: \"text-center py-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Activate Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this),\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"text-success\",\n                        children: [\n                            message,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/signin\",\n                                children: \"Go To Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"text-danger\",\n                        children: error.error\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            onClick: function() {\n                                return setverify({\n                                    // @ts-ignore\n                                    id: router.query.id,\n                                    // @ts-ignore\n                                    confirm: router.query.confirm\n                                });\n                            },\n                            style: {\n                                backgroundColor: theme__WEBPACK_IMPORTED_MODULE_7__.color.blue\n                            },\n                            className: \"mx-2\",\n                            children: \"Click To Activate Yout Account\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/ton project/client/src/pages/confirmation/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this));\n};\n_s(index, \"mvyJkyUtY7bf72AnzE6KMoL1KoE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S25CLEtBQUs7O1FBQ01WLGtEQUFTO1FBR1lPLG9EQUFXO1FBSTlCRCxvREFBVzs7O0FBMEM5QiwrREFBZUksS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb25maXJtYXRpb24vaW5kZXgudHN4P2E2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbmltcG9ydCB7IENhcmQsIENvbnRhaW5lciB9IGZyb20gXCJsYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwic3RvcmVcIjtcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gXCJzdG9yZS9jb25maXJtYXRpb25cIjtcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgeyBJVmVyaWZ5IH0gZnJvbSBcInR5cGVzXCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3ZlcmlmeSwgc2V0dmVyaWZ5XSA9IHVzZVN0YXRlPElWZXJpZnk+KCk7XG5cbiAgY29uc3QgeyBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBJU3RhdGUpID0+IHN0YXRlLmNvbmZpcm1hdGlvblxuICApO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc29sZS5sb2coXCJpbmRleFwiLCB2ZXJpZnkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5xdWVyeT8uaWQpXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkaXNwYXRjaChDb25maXJtYXRpb24odmVyaWZ5KSk7XG4gIH0sIFtkaXNwYXRjaCwgcm91dGVyLnF1ZXJ5Py5pZCwgdmVyaWZ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENvbCBzbT17eyBvZmZzZXQ6IDEsIHNwYW46IDEwIH19IG1kPXt7IG9mZnNldDogMywgc3BhbjogNSB9fT5cbiAgICAgICAgPENhcmQgc2hhZG93IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTVcIj5cbiAgICAgICAgICA8aDU+QWN0aXZhdGUgQWNjb3VudDwvaDU+XG4gICAgICAgICAge3N1Y2Nlc3MgJiYgKFxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICB7bWVzc2FnZX0gPExpbmsgaHJlZj17XCIvc2lnbmluXCJ9PkdvIFRvIFNpZ24gSW48L0xpbms+XG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Vycm9yICYmIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvci5lcnJvcn08L2g2Pn1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHNldHZlcmlmeSh7XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICBpZDogcm91dGVyLnF1ZXJ5LmlkLFxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgY29uZmlybTogcm91dGVyLnF1ZXJ5LmNvbmZpcm0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmJsdWUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsaWNrIFRvIEFjdGl2YXRlIFlvdXQgQWNjb3VudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29sPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiQ2FyZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29sIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNvbmZpcm1hdGlvbiIsImNvbG9yIiwiaW5kZXgiLCJyb3V0ZXIiLCJ2ZXJpZnkiLCJzZXR2ZXJpZnkiLCJzdGF0ZSIsImNvbmZpcm1hdGlvbiIsInN1Y2Nlc3MiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImlkIiwic20iLCJvZmZzZXQiLCJzcGFuIiwibWQiLCJzaGFkb3ciLCJjbGFzc05hbWUiLCJoNSIsImg2IiwiaHJlZiIsImRpdiIsIm9uQ2xpY2siLCJjb25maXJtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/confirmation/index.tsx\n");

/***/ })

});