"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ButtonPrimary)
/* harmony export */ });
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2958);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_0__]);
_stitches_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ButtonPrimary = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_0__/* .styled */ .zo)("div", {
    appearance: "none",
    background: "transparent",
    border: 0,
    borderRadius: "$borderRadius",
    color: "$primary",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    margin: "0 0 0 -10px",
    outline: "0",
    padding: "8px 10px 8px",
    textDecoration: "none",
    transition: [
        "background $duration ease-in-out",
        "color $duration ease-in-out", 
    ],
    "&:hover": {
        background: "$hover",
        color: "$primary",
        opacity: 1
    },
    "&:hover kbd": {
        background: "$primary"
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ShortcutHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3437);
/* harmony import */ var kbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__]);
_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ShortcutHome() {
    const { query  } = (0,kbar__WEBPACK_IMPORTED_MODULE_2__.useKBar)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (mounted) {
        const isMac = /(Mac)/i.test(navigator.userAgent);
        const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
        if (isMobile) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: "Tap to start →"
            });
        } else if (isMac) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: [
                    "Press ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "⌘"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "K"
                    }),
                    " to start →"
                ]
            });
        } else {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ButtonPrimary__WEBPACK_IMPORTED_MODULE_3__/* .ButtonPrimary */ .D, {
                as: "button",
                onClick: query.toggle,
                children: [
                    "Press ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "ctrl"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                        children: "K"
                    }),
                    " to start →"
                ]
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2958);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8010);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3193);
/* harmony import */ var _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6122);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4438);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Footer__WEBPACK_IMPORTED_MODULE_4__, _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__, _components_Post__WEBPACK_IMPORTED_MODULE_6__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__]);
([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _components_Navbar__WEBPACK_IMPORTED_MODULE_3__, _components_Footer__WEBPACK_IMPORTED_MODULE_4__, _components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__, _components_Post__WEBPACK_IMPORTED_MODULE_6__, _components_Wrapper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getStaticProps() {
    return {
        props: {
            title: "Samuel Ironkwe",
            description: "Obsessed with solving real problems and building awesome things",
            image: "/static/images/samuel.jpg"
        }
    };
}
function Index(props) {
    const { title , description , image  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .i, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: title,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: description,
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: description,
                        property: "og:description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "https://ironkwe.site",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: `https://ironkwe.site/${image}`,
                        property: "og:image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-B26F3B1N2E"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B26F3B1N2E');
              `
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Home, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_6__/* .PostContent */ .C2, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_6__/* .PostContainer */ .b6, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Software Engineer"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "Currently building",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://remeal.xyz",
                                            target: "blank",
                                            children: "Remeal"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShortcutHome__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
const Home = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)(_components_Post__WEBPACK_IMPORTED_MODULE_6__/* .PostMain */ .dn, {
    alignItems: "center",
    display: "flex",
    margin: "0 auto",
    "@bp2": {
        width: 800
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3437:
/***/ ((module) => {

module.exports = require("kbar");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,958,232], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();