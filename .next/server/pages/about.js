"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 8890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const items = [
    {
        jobTitle: "Software Developer Intern",
        company: "Prodigy Education",
        companyUrl: "https://www.prodigygame.com/main-en/",
        startDate: "2023-05-01",
        endDate: "2023-08-31",
        location: "Remote"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);


/***/ }),

/***/ 414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stitches_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2958);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4686);
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1012);
/* harmony import */ var _lib_strip_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7095);
/* harmony import */ var _data_about__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _layouts_Base__WEBPACK_IMPORTED_MODULE_6__, _components_Toast__WEBPACK_IMPORTED_MODULE_7__]);
([_stitches_config__WEBPACK_IMPORTED_MODULE_1__, _layouts_Base__WEBPACK_IMPORTED_MODULE_6__, _components_Toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










async function getStaticProps() {
    const meta = {
        title: "About // Samuel Ironkwe",
        description: "All about me",
        tagline: "Create. Share. Repeat.",
        image: "/static/images/samuel.jpg",
        primaryColor: "pink",
        secondaryColor: "purple"
    };
    return {
        props: meta
    };
}
function About(props) {
    const { title , description , image  } = props;
    const [toastTitle, setToastTitle] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const [toastDescription, setToastDescription] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const [showToast, setShowToast] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const renderIntro = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "Samuel",
                        src: "/static/images/samuel.jpg",
                        width: "336",
                        height: "336",
                        placeholder: "blur",
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC",
                        priority: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Section, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            css: {
                                marginTop: "16px",
                                "@bp2": {
                                    marginTop: "-6px"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "Hello, I'm Samuel Ironkwe "
                                }),
                                "I am a",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "software engineer."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            children: [
                                "I have previously worked as a developer intern for Prodigy Education where I got to build out various tools and features across the website while studying for my science degree at the University of Manitoba. I am currently seeking a new role where i get to improve my skills and build amazing products.",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " Dive"
                                }),
                                " into my codebase over at",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/github.com/SamIron0",
                                    target: "_blank",
                                    children: "github.com/SamIron0"
                                }),
                                " ",
                                "\uD83D\uDCBB✨"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Paragraph, {
                            children: [
                                "When I'm not working, I like weightlifting, watching movies, and",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "cooking"
                                }),
                                "."
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const renderAll = ()=>{
        return _data_about__WEBPACK_IMPORTED_MODULE_8__/* ["default"].map */ .Z.map((item, index)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: item.jobTitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.companyUrl,
                                target: "_blank",
                                children: item.company
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " • ",
                                    item.location
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        style: {
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(item.startDate), "LLL yyyy")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " – "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item.endDate ? (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.parseISO)(item.endDate), "LLL yyyy") : "Present"
                            })
                        ]
                    })
                ]
            }, index);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: title,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(description),
                        name: "description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: (0,_lib_strip_html__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(description),
                        property: "og:description"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: "https://samuel.pro/about",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        content: `https://samuel.pro${image}`,
                        property: "og:image"
                    })
                ]
            }),
            renderIntro(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Career"
            }),
            renderAll(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Toast__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: toastTitle,
                description: toastDescription,
                isSuccess: true,
                showToast: showToast,
                setShowToast: setShowToast
            })
        ]
    });
}
const Container = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@bp2": {
        flexDirection: "row"
    }
});
const Paragraph = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("p", {
    "@bp2": {
        margin: "15px 0"
    }
});
const Section = (0,_stitches_config__WEBPACK_IMPORTED_MODULE_1__/* .styled */ .zo)("div", {
    marginTop: "0px",
    width: "auto",
    "@bp2": {
        width: "48%"
    }
});
About.Layout = _layouts_Base__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("@radix-ui/react-toast");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,958,232,750,12], () => (__webpack_exec__(414)));
module.exports = __webpack_exports__;

})();