"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const Box = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommandBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2958);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8504);
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1012);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3437);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6164);
/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_static_icons_email_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7969);
/* harmony import */ var _public_static_icons_source_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2490);
/* harmony import */ var _public_static_icons_about_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(889);
/* harmony import */ var _public_static_icons_home_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5304);
/* harmony import */ var _public_static_icons_projects_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3306);
/* harmony import */ var _public_static_icons_books_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6064);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__, _Toast__WEBPACK_IMPORTED_MODULE_3__]);
([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _Box__WEBPACK_IMPORTED_MODULE_2__, _Toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function CommandBar(props) {
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const sourceRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const homeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const projectsRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const reminderRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const iconSize = {
        width: 24,
        height: 24
    };
    const actions = [
        {
            id: "email",
            name: "Send Email",
            shortcut: [
                "e"
            ],
            keywords: "send-email",
            section: "General",
            perform: ()=>router.push("/contact"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: emailRef,
                style: iconSize,
                animationData: _public_static_icons_email_json__WEBPACK_IMPORTED_MODULE_8__,
                loop: false,
                autoplay: false
            })
        },
        {
            id: "source",
            name: "View Source",
            shortcut: [
                "s"
            ],
            keywords: "view-source",
            section: "General",
            perform: ()=>window.open("https://github.com/SamIron0/mywebsite", "_blank"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: sourceRef,
                style: iconSize,
                animationData: _public_static_icons_source_json__WEBPACK_IMPORTED_MODULE_9__,
                loop: false,
                autoplay: false
            })
        },
        {
            id: "home",
            name: "Home",
            shortcut: [
                "g",
                "h"
            ],
            keywords: "go-home",
            section: "Go To",
            perform: ()=>router.push("/"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: homeRef,
                style: iconSize,
                animationData: _public_static_icons_home_json__WEBPACK_IMPORTED_MODULE_11__,
                loop: false,
                autoplay: false
            })
        },
        {
            id: "about",
            name: "About",
            shortcut: [
                "g",
                "a"
            ],
            keywords: "go-about",
            section: "Go To",
            perform: ()=>router.push("/about"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: aboutRef,
                style: iconSize,
                animationData: _public_static_icons_about_json__WEBPACK_IMPORTED_MODULE_10__,
                loop: false,
                autoplay: false
            })
        },
        {
            id: "projects",
            name: "Projects",
            shortcut: [
                "g",
                "p"
            ],
            keywords: "go-projects",
            section: "Go To",
            perform: ()=>router.push("/projects"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: projectsRef,
                style: iconSize,
                animationData: _public_static_icons_projects_json__WEBPACK_IMPORTED_MODULE_12__,
                loop: false,
                autoplay: false
            })
        },
        {
            id: "books",
            name: "Books",
            shortcut: [
                "g",
                "b"
            ],
            keywords: "go-reminder",
            section: "Go To",
            perform: ()=>router.push("/books"),
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((lottie_react__WEBPACK_IMPORTED_MODULE_7___default()), {
                lottieRef: reminderRef,
                style: iconSize,
                animationData: _public_static_icons_books_json__WEBPACK_IMPORTED_MODULE_13__,
                loop: false,
                autoplay: false
            })
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarProvider, {
            actions: actions,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarPortal, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Positioner, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Animator, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {
                                    placeholder: "Type a command or search…"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderResults, {})
                            ]
                        })
                    })
                }),
                props.children
            ]
        })
    });
};
function RenderResults() {
    const { results  } = (0,kbar__WEBPACK_IMPORTED_MODULE_6__.useDeepMatches)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarResults, {
        items: results,
        onRender: ({ item , active  })=>typeof item === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GroupName, {
                children: item
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultItem, {
                action: item,
                active: active
            })
    });
}
const ResultItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ action , active  }, ref)=>{
    if (active) {
        action.icon.props.lottieRef.current?.play();
    } else {
        action.icon.props.lottieRef.current?.stop();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
        ref: ref,
        css: getResultStyle(active),
        onMouseEnter: ()=>action.icon.props.lottieRef.current?.play(),
        onMouseLeave: ()=>action.icon.props.lottieRef.current?.stop(),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Action, {
                children: [
                    action.icon && action.icon,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActionRow, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: action.name
                        })
                    })
                ]
            }),
            action.shortcut?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shortcut, {
                "aria-hidden": true,
                children: action.shortcut.map((shortcut)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Kbd, {
                        children: shortcut
                    }, shortcut))
            }) : null
        ]
    });
});
ResultItem.displayName = "ResultItem";
const Positioner = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarPositioner, {
    position: "fixed",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    inset: "0px",
    padding: "14vh 16px 16px",
    background: "rgba(0, 0, 0, .8)",
    boxSizing: "border-box"
});
const Search = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarSearch, {
    padding: "12px 16px",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    margin: 0,
    background: "$command",
    color: "$primary"
});
const GroupName = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    padding: "8px 16px",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    background: "$command"
});
const Kbd = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("kbd", {
    background: "rgba(255, 255, 255, .1)",
    color: "$secondary",
    padding: "4px 8px",
    textTransform: "uppercase"
});
const Shortcut = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    display: "grid",
    gridAutoFlow: "column",
    gap: "4px"
});
const Action = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    display: "flex",
    gap: "8px",
    alignItems: "center"
});
const ActionRow = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    display: "flex",
    flexDirection: "column"
});
const Animator = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(kbar__WEBPACK_IMPORTED_MODULE_6__.KBarAnimator, {
    backgroundColor: "#1a1c1e",
    maxWidth: "600px",
    width: "100%",
    color: "$primary",
    borderRadius: "8px",
    overflow: "hidden",
    "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
        backgroundColor: "$command",
        WebkitBackdropFilter: "saturate(300%) blur(25px)",
        backdropFilter: "saturate(300%) blur(25px)"
    },
    /* Hide scrollbar for Chrome, Safari and Opera */ "& > div > div::-webkit-scrollbar": {
        display: "none"
    },
    /* Hide scrollbar for IE, Edge and Firefox */ "& > div > div": {
        "-ms-overflow-style": "none",
        "scrollbar-width": "none"
    }
});
const getResultStyle = (active)=>{
    return {
        padding: "12px 16px",
        background: active ? "rgba(255, 255, 255, 0.1)" : "$command",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0,
        cursor: "pointer",
        color: active ? "$primary" : "$secondary"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CommandBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CommandBar__WEBPACK_IMPORTED_MODULE_1__]);
_components_CommandBar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Noop = ({ children  })=>children;
function MyApp({ Component , pageProps  }) {
    const Layout = Component.Layout || Noop;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CommandBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("@radix-ui/react-toast");

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("kbar");

/***/ }),

/***/ 6164:
/***/ ((module) => {

module.exports = require("lottie-react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958,12,146], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();