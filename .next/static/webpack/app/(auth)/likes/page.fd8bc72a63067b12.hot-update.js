"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/likes/page",{

/***/ "(app-pages-browser)/./components/dashboardcomponents/Request/UserList.tsx":
/*!*************************************************************!*\
  !*** ./components/dashboardcomponents/Request/UserList.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UserList = (param)=>{\n    let { sendFriendRequest } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loadingUsers, setLoadingUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [errorUsers, setErrorUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsers = async ()=>{\n            var _session_user;\n            if (!(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id)) return;\n            try {\n                setLoadingUsers(true);\n                const url = \"/api/requests/getRequest\";\n                const response = await fetch(url);\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch users\");\n                }\n                const data = await response.json();\n                setUsers(data.users);\n                setErrorUsers(null);\n            } catch (error) {\n                console.error(\"Error fetching users:\", error);\n                setErrorUsers(\"Error fetching users\");\n            } finally{\n                setLoadingUsers(false);\n            }\n        };\n        fetchUsers();\n    }, [\n        session\n    ]);\n    if (loadingUsers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading users...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n            lineNumber: 49,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (errorUsers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: errorUsers\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            users.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No users found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\",\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg\",\n                        children: [\n                            user.name,\n                            user.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.image,\n                                alt: user.name,\n                                width: 50,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 30\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>sendFriendRequest(user.id),\n                                children: \"Send Friend Request\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\UserList.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserList, \"RwXcjrqaFvW6korcTQOI7zgm3bU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = UserList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserList);\nvar _c;\n$RefreshReg$(_c, \"UserList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkY29tcG9uZW50cy9SZXF1ZXN0L1VzZXJMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNOO0FBWTdDLE1BQU1JLFdBQW9DO1FBQUMsRUFBRUMsaUJBQWlCLEVBQUU7O0lBQzlELE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdKLDJEQUFVQTtJQUNwQyxNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQWdCO0lBRTVERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGFBQWE7Z0JBQ1pQO1lBQUwsSUFBSSxFQUFDQSxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTUSxJQUFJLGNBQWJSLG9DQUFBQSxjQUFlUyxFQUFFLEdBQUU7WUFFeEIsSUFBSTtnQkFDRkwsZ0JBQWdCO2dCQUNoQixNQUFNTSxNQUFPO2dCQUNiLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUY7Z0JBRTdCLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1mLE9BQU8sTUFBTVksU0FBU0ksSUFBSTtnQkFDaENiLFNBQVNILEtBQUtFLEtBQUs7Z0JBQ25CSyxjQUFjO1lBQ2hCLEVBQUUsT0FBT1UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7Z0JBQ3ZDVixjQUFjO1lBQ2hCLFNBQVU7Z0JBQ1JGLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUFHO0lBQ0YsR0FBRztRQUFDUDtLQUFRO0lBRVosSUFBSUcsY0FBYztRQUNoQixxQkFBTyw4REFBQ2U7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSWIsWUFBWTtRQUNkLHFCQUFPLDhEQUFDYTtzQkFBS2I7Ozs7OztJQUNmO0lBRUEscUJBQ0UsOERBQUNhOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIbEIsTUFBTW1CLE1BQU0sS0FBSyxrQkFDaEIsOERBQUNDOzBCQUFFOzs7OzswQ0FFSCw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQ1h0QixNQUFNdUIsR0FBRyxDQUFDLENBQUNoQixxQkFDViw4REFBQ2lCO3dCQUFpQkYsV0FBVTs7NEJBQ3pCZixLQUFLa0IsSUFBSTs0QkFDVGxCLEtBQUttQixLQUFLLGtCQUFJLDhEQUFDQztnQ0FBSUMsS0FBS3JCLEtBQUttQixLQUFLO2dDQUFFRyxLQUFLdEIsS0FBS2tCLElBQUk7Z0NBQUVLLE9BQU87Z0NBQUlDLFFBQVE7Ozs7OzswQ0FDeEUsOERBQUNDO2dDQUFPQyxTQUFTLElBQU1wQyxrQkFBa0JVLEtBQUtDLEVBQUU7MENBQUc7Ozs7Ozs7dUJBSDVDRCxLQUFLQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVTVCO0dBM0RNWjs7UUFDc0JELHVEQUFVQTs7O0tBRGhDQztBQTZETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2hib2FyZGNvbXBvbmVudHMvUmVxdWVzdC9Vc2VyTGlzdC50c3g/YjM1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVXNlciB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VyTGlzdFByb3BzIHtcclxuICBzZW5kRnJpZW5kUmVxdWVzdDogKHJlY2VpdmVySWQ6IHN0cmluZykgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgVXNlckxpc3Q6IFJlYWN0LkZDPFVzZXJMaXN0UHJvcHM+ID0gKHsgc2VuZEZyaWVuZFJlcXVlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdVc2Vycywgc2V0TG9hZGluZ1VzZXJzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvclVzZXJzLCBzZXRFcnJvclVzZXJzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VycyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzZXRMb2FkaW5nVXNlcnModHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvcmVxdWVzdHMvZ2V0UmVxdWVzdGA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VycycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRVc2VycyhkYXRhLnVzZXJzKTtcclxuICAgICAgICBzZXRFcnJvclVzZXJzKG51bGwpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHVzZXJzOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvclVzZXJzKCdFcnJvciBmZXRjaGluZyB1c2VycycpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmdVc2VycyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VycygpO1xyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIGlmIChsb2FkaW5nVXNlcnMpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgdXNlcnMuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3JVc2Vycykge1xyXG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yVXNlcnN9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Vc2VyczwvaDI+XHJcbiAgICAgIHt1c2Vycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHA+Tm8gdXNlcnMgZm91bmQ8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0gY2xhc3NOYW1lPSdiZyc+XHJcbiAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICB7dXNlci5pbWFnZSAmJiA8aW1nIHNyYz17dXNlci5pbWFnZX0gYWx0PXt1c2VyLm5hbWV9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gLz59XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kRnJpZW5kUmVxdWVzdCh1c2VyLmlkKX0+U2VuZCBGcmllbmQgUmVxdWVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwiVXNlckxpc3QiLCJzZW5kRnJpZW5kUmVxdWVzdCIsImRhdGEiLCJzZXNzaW9uIiwidXNlcnMiLCJzZXRVc2VycyIsImxvYWRpbmdVc2VycyIsInNldExvYWRpbmdVc2VycyIsImVycm9yVXNlcnMiLCJzZXRFcnJvclVzZXJzIiwiZmV0Y2hVc2VycyIsInVzZXIiLCJpZCIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgyIiwibGVuZ3RoIiwicCIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwibGkiLCJuYW1lIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboardcomponents/Request/UserList.tsx\n"));

/***/ })

});