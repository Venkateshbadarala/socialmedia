"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/@Request/page",{

/***/ "(app-pages-browser)/./components/dashboardcomponents/Request/Request.tsx":
/*!************************************************************!*\
  !*** ./components/dashboardcomponents/Request/Request.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserList */ \"(app-pages-browser)/./components/dashboardcomponents/Request/UserList.tsx\");\n/* harmony import */ var _FriendRequestList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FriendRequestList */ \"(app-pages-browser)/./components/dashboardcomponents/Request/FriendRequestList.tsx\");\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Message */ \"(app-pages-browser)/./components/dashboardcomponents/Request/Message.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RequestPage = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loadingUsers, setLoadingUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [errorUsers, setErrorUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [friendRequests, setFriendRequests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsers = async ()=>{\n            var _session_user;\n            if (!(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id)) return;\n            try {\n                setLoadingUsers(true);\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/posts/friendRequest\", {\n                    params: {\n                        userId: session.user.id\n                    }\n                });\n                setUsers(response.data); // assuming response.data is an array of users\n                setErrorUsers(null);\n            } catch (error) {\n                console.error(\"Error fetching users:\", error);\n                setErrorUsers(\"Error fetching users\");\n            } finally{\n                setLoadingUsers(false);\n            }\n        };\n        fetchUsers();\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFriendRequests = async ()=>{\n            var _session_user;\n            if (!(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id)) return;\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/api/posts/friendRequest\", {\n                    params: {\n                        userId: session.user.id\n                    }\n                });\n                setFriendRequests(response.data);\n                console.log(user);\n            } catch (error) {\n                console.error(\"Error fetching friend requests:\", error);\n            }\n        };\n        fetchFriendRequests();\n    }, [\n        session\n    ]);\n    const sendFriendRequest = async (receiverId)=>{\n        try {\n            var _session_user;\n            const senderId = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;\n            if (!senderId) {\n                throw new Error(\"User ID not found in session\");\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/api/posts/friendRequest\", {\n                senderId,\n                receiverId\n            });\n            setMessage(response.data.message);\n        } catch (error) {\n            console.error(\"Error sending friend request:\", error);\n            setMessage(\"Error sending friend request\");\n        }\n    };\n    const handleFriendRequest = async (senderId, action)=>{\n        try {\n            var _session_user;\n            const userId = session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;\n            if (!userId) {\n                throw new Error(\"User ID not found in session\");\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"/api/posts/friendRequest\", {\n                userId,\n                senderId,\n                action\n            });\n            setMessage(response.data.message);\n            if (action === \"accept\" || action === \"cancel\") {\n                setFriendRequests((prevRequests)=>prevRequests.filter((request)=>request.senderId !== senderId));\n            }\n        } catch (error) {\n            console.error(\"Error \".concat(action === \"accept\" ? \"accepting\" : \"canceling\", \" friend request:\"), error);\n            setMessage(\"Error \".concat(action === \"accept\" ? \"accepting\" : \"canceling\", \" friend request\"));\n        }\n    };\n    if (loadingUsers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading users...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n            lineNumber: 102,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (errorUsers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: errorUsers\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n            lineNumber: 106,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Request\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                message: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                users: users,\n                sendFriendRequest: sendFriendRequest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            friendRequests.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FriendRequestList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                friendRequests: friendRequests,\n                handleFriendRequest: handleFriendRequest\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\venka\\\\OneDrive\\\\Desktop\\\\Next.js\\\\socailmedia\\\\components\\\\dashboardcomponents\\\\Request\\\\Request.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RequestPage, \"kimg7yp05RJhoMTZ0QrK7CCdaXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = RequestPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestPage);\nvar _c;\n$RefreshReg$(_c, \"RequestPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkY29tcG9uZW50cy9SZXF1ZXN0L1JlcXVlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUN6QjtBQUNtQjtBQUNYO0FBQ2tCO0FBQ3BCO0FBY2hDLE1BQU1RLGNBQXdCOztJQUM1QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcEMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUM1RCxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2lCLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUV4RUQsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsYUFBYTtnQkFDWlg7WUFBTCxJQUFJLEVBQUNBLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNZLElBQUksY0FBYlosb0NBQUFBLGNBQWVhLEVBQUUsR0FBRTtZQUV4QixJQUFJO2dCQUNGVCxnQkFBZ0I7Z0JBQ2hCLE1BQU1VLFdBQVcsTUFBTXJCLDZDQUFLQSxDQUFDc0IsR0FBRyxDQUFDLDRCQUE0QjtvQkFDM0RDLFFBQVE7d0JBQUVDLFFBQVFqQixRQUFRWSxJQUFJLENBQUNDLEVBQUU7b0JBQUM7Z0JBQ3BDO2dCQUNBWCxTQUFTWSxTQUFTZixJQUFJLEdBQUcsOENBQThDO2dCQUN2RU8sY0FBYztZQUNoQixFQUFFLE9BQU9ZLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO2dCQUN2Q1osY0FBYztZQUNoQixTQUFVO2dCQUNSRixnQkFBZ0I7WUFDbEI7UUFDRjtRQUVBTztJQUNGLEdBQUc7UUFBQ1g7S0FBUTtJQUVaVCxnREFBU0EsQ0FBQztRQUNSLE1BQU02QixzQkFBc0I7Z0JBQ3JCcEI7WUFBTCxJQUFJLEVBQUNBLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNZLElBQUksY0FBYlosb0NBQUFBLGNBQWVhLEVBQUUsR0FBRTtZQUV4QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTXJCLDZDQUFLQSxDQUFDc0IsR0FBRyxDQUFDLDRCQUE0QjtvQkFDM0RDLFFBQVE7d0JBQUVDLFFBQVFqQixRQUFRWSxJQUFJLENBQUNDLEVBQUU7b0JBQUM7Z0JBQ3BDO2dCQUNBSCxrQkFBa0JJLFNBQVNmLElBQUk7Z0JBQy9Cb0IsUUFBUUUsR0FBRyxDQUFDVDtZQUNkLEVBQUUsT0FBT00sT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDbkQ7UUFDRjtRQUVBRTtJQUNGLEdBQUc7UUFBQ3BCO0tBQVE7SUFFWixNQUFNc0Isb0JBQW9CLE9BQU9DO1FBQy9CLElBQUk7Z0JBQ2V2QjtZQUFqQixNQUFNd0IsV0FBV3hCLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNZLElBQUksY0FBYlosb0NBQUFBLGNBQWVhLEVBQUU7WUFDbEMsSUFBSSxDQUFDVyxVQUFVO2dCQUNiLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1YLFdBQVcsTUFBTXJCLDZDQUFLQSxDQUFDaUMsSUFBSSxDQUFDLDRCQUE0QjtnQkFBRUY7Z0JBQVVEO1lBQVc7WUFDckZmLFdBQVdNLFNBQVNmLElBQUksQ0FBQ1EsT0FBTztRQUNsQyxFQUFFLE9BQU9XLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0NWLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTW1CLHNCQUFzQixPQUFPSCxVQUFrQkk7UUFDbkQsSUFBSTtnQkFDYTVCO1lBQWYsTUFBTWlCLFNBQVNqQixvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTWSxJQUFJLGNBQWJaLG9DQUFBQSxjQUFlYSxFQUFFO1lBQ2hDLElBQUksQ0FBQ0ksUUFBUTtnQkFDWCxNQUFNLElBQUlRLE1BQU07WUFDbEI7WUFDQSxNQUFNWCxXQUFXLE1BQU1yQiw2Q0FBS0EsQ0FBQ29DLEdBQUcsQ0FBQyw0QkFBNEI7Z0JBQUVaO2dCQUFRTztnQkFBVUk7WUFBTztZQUN4RnBCLFdBQVdNLFNBQVNmLElBQUksQ0FBQ1EsT0FBTztZQUVoQyxJQUFJcUIsV0FBVyxZQUFZQSxXQUFXLFVBQVU7Z0JBQzlDbEIsa0JBQWtCb0IsQ0FBQUEsZUFBZ0JBLGFBQWFDLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUVIsUUFBUSxLQUFLQTtZQUN4RjtRQUNGLEVBQUUsT0FBT04sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsU0FBeUQsT0FBaERVLFdBQVcsV0FBVyxjQUFjLGFBQVkscUJBQW1CVjtZQUMxRlYsV0FBVyxTQUF5RCxPQUFoRG9CLFdBQVcsV0FBVyxjQUFjLGFBQVk7UUFDdEU7SUFDRjtJQUVBLElBQUl6QixjQUFjO1FBQ2hCLHFCQUFPLDhEQUFDOEI7c0JBQUk7Ozs7OztJQUNkO0lBRUEsSUFBSTVCLFlBQVk7UUFDZCxxQkFBTyw4REFBQzRCO3NCQUFLNUI7Ozs7OztJQUNmO0lBRUEscUJBQ0UsOERBQUM0Qjs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNyQyxnREFBT0E7Z0JBQUNVLFNBQVNBOzs7Ozs7MEJBQ2xCLDhEQUFDWixpREFBUUE7Z0JBQUNNLE9BQU9BO2dCQUFPcUIsbUJBQW1CQTs7Ozs7O1lBQzFDYixlQUFlMEIsTUFBTSxHQUFHLG1CQUN2Qiw4REFBQ3ZDLDBEQUFpQkE7Z0JBQUNhLGdCQUFnQkE7Z0JBQWdCa0IscUJBQXFCQTs7Ozs7Ozs7Ozs7O0FBSWhGO0dBbEdNN0I7O1FBQ3NCSix1REFBVUE7OztLQURoQ0k7QUFvR04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmRjb21wb25lbnRzL1JlcXVlc3QvUmVxdWVzdC50c3g/ZjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuL1VzZXJMaXN0JztcclxuaW1wb3J0IEZyaWVuZFJlcXVlc3RMaXN0IGZyb20gJy4vRnJpZW5kUmVxdWVzdExpc3QnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRnJpZW5kUmVxdWVzdCB7XHJcbiAgc2VuZGVySWQ6IHN0cmluZztcclxuICBzZW5kZXJOYW1lOiBzdHJpbmc7XHJcbiAgc2VuZGVySW1hZ2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFJlcXVlc3RQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPFVzZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nVXNlcnMsIHNldExvYWRpbmdVc2Vyc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3JVc2Vycywgc2V0RXJyb3JVc2Vyc10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZyaWVuZFJlcXVlc3RzLCBzZXRGcmllbmRSZXF1ZXN0c10gPSB1c2VTdGF0ZTxGcmllbmRSZXF1ZXN0W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZ1VzZXJzKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzL2ZyaWVuZFJlcXVlc3QnLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEpOyAvLyBhc3N1bWluZyByZXNwb25zZS5kYXRhIGlzIGFuIGFycmF5IG9mIHVzZXJzXHJcbiAgICAgICAgc2V0RXJyb3JVc2VycyhudWxsKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyczonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3JVc2VycygnRXJyb3IgZmV0Y2hpbmcgdXNlcnMnKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nVXNlcnMoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVXNlcnMoKTtcclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGcmllbmRSZXF1ZXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wb3N0cy9mcmllbmRSZXF1ZXN0Jywge1xyXG4gICAgICAgICAgcGFyYW1zOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRGcmllbmRSZXF1ZXN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZyaWVuZCByZXF1ZXN0czonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hGcmllbmRSZXF1ZXN0cygpO1xyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIGNvbnN0IHNlbmRGcmllbmRSZXF1ZXN0ID0gYXN5bmMgKHJlY2VpdmVySWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VuZGVySWQgPSBzZXNzaW9uPy51c2VyPy5pZDtcclxuICAgICAgaWYgKCFzZW5kZXJJZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBJRCBub3QgZm91bmQgaW4gc2Vzc2lvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wb3N0cy9mcmllbmRSZXF1ZXN0JywgeyBzZW5kZXJJZCwgcmVjZWl2ZXJJZCB9KTtcclxuICAgICAgc2V0TWVzc2FnZShyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBmcmllbmQgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ0Vycm9yIHNlbmRpbmcgZnJpZW5kIHJlcXVlc3QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGcmllbmRSZXF1ZXN0ID0gYXN5bmMgKHNlbmRlcklkOiBzdHJpbmcsIGFjdGlvbjogJ2FjY2VwdCcgfCAnY2FuY2VsJykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlcklkID0gc2Vzc2lvbj8udXNlcj8uaWQ7XHJcbiAgICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIElEIG5vdCBmb3VuZCBpbiBzZXNzaW9uJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoJy9hcGkvcG9zdHMvZnJpZW5kUmVxdWVzdCcsIHsgdXNlcklkLCBzZW5kZXJJZCwgYWN0aW9uIH0pO1xyXG4gICAgICBzZXRNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uID09PSAnYWNjZXB0JyB8fCBhY3Rpb24gPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgc2V0RnJpZW5kUmVxdWVzdHMocHJldlJlcXVlc3RzID0+IHByZXZSZXF1ZXN0cy5maWx0ZXIocmVxdWVzdCA9PiByZXF1ZXN0LnNlbmRlcklkICE9PSBzZW5kZXJJZCkpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciAke2FjdGlvbiA9PT0gJ2FjY2VwdCcgPyAnYWNjZXB0aW5nJyA6ICdjYW5jZWxpbmcnfSBmcmllbmQgcmVxdWVzdDpgLCBlcnJvcik7XHJcbiAgICAgIHNldE1lc3NhZ2UoYEVycm9yICR7YWN0aW9uID09PSAnYWNjZXB0JyA/ICdhY2NlcHRpbmcnIDogJ2NhbmNlbGluZyd9IGZyaWVuZCByZXF1ZXN0YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmdVc2Vycykge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyB1c2Vycy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvclVzZXJzKSB7XHJcbiAgICByZXR1cm4gPGRpdj57ZXJyb3JVc2Vyc308L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlJlcXVlc3Q8L2gxPlxyXG4gICAgICA8TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlfSAvPlxyXG4gICAgICA8VXNlckxpc3QgdXNlcnM9e3VzZXJzfSBzZW5kRnJpZW5kUmVxdWVzdD17c2VuZEZyaWVuZFJlcXVlc3R9IC8+XHJcbiAgICAgIHtmcmllbmRSZXF1ZXN0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8RnJpZW5kUmVxdWVzdExpc3QgZnJpZW5kUmVxdWVzdHM9e2ZyaWVuZFJlcXVlc3RzfSBoYW5kbGVGcmllbmRSZXF1ZXN0PXtoYW5kbGVGcmllbmRSZXF1ZXN0fSAvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlU2Vzc2lvbiIsIlVzZXJMaXN0IiwiRnJpZW5kUmVxdWVzdExpc3QiLCJNZXNzYWdlIiwiUmVxdWVzdFBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXJzIiwic2V0VXNlcnMiLCJsb2FkaW5nVXNlcnMiLCJzZXRMb2FkaW5nVXNlcnMiLCJlcnJvclVzZXJzIiwic2V0RXJyb3JVc2VycyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZnJpZW5kUmVxdWVzdHMiLCJzZXRGcmllbmRSZXF1ZXN0cyIsImZldGNoVXNlcnMiLCJ1c2VyIiwiaWQiLCJyZXNwb25zZSIsImdldCIsInBhcmFtcyIsInVzZXJJZCIsImVycm9yIiwiY29uc29sZSIsImZldGNoRnJpZW5kUmVxdWVzdHMiLCJsb2ciLCJzZW5kRnJpZW5kUmVxdWVzdCIsInJlY2VpdmVySWQiLCJzZW5kZXJJZCIsIkVycm9yIiwicG9zdCIsImhhbmRsZUZyaWVuZFJlcXVlc3QiLCJhY3Rpb24iLCJwdXQiLCJwcmV2UmVxdWVzdHMiLCJmaWx0ZXIiLCJyZXF1ZXN0IiwiZGl2IiwiaDEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboardcomponents/Request/Request.tsx\n"));

/***/ })

});