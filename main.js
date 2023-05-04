/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popupS.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popupS.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popupS-layer{\n\t-webkit-box-shadow: 0 0 20px rgba(0,0,0,.25);\n\t-moz-box-shadow: 0 0 20px rgba(0,0,0,.25);\nbox-shadow: 0 0 20px rgba(0,0,0,.25);\nposition: relative;\nborder-radius:6px;\nbackground-color: #FFF;\nmargin:20px;\nz-index:1000;\n\n}\n.popupS-resetFocus {\nborder: 0;\nclip: rect(0 0 0 0);\nheight: 1px;\nmargin: -1px;\noverflow: hidden;\npadding: 0;\nposition: absolute;\nwidth: 1px;\n}\n.popupS-close{\nposition: absolute;\ntop: 0;\nright: 0;\nline-height: 40px;\nfont-size: 32px;\ntext-align: center;\nfont-weight: 700;\nwidth: 32px;\nheight: 40px;\ncursor: pointer;\nz-index:1020;\n}\n.popupS-title{\n\tposition: absolute;\nwidth: 100%;\nline-height: 40px;\ntext-align: center;\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\nmargin: 0 auto;\nz-index:1001;\n}\n.popupS-title + .popupS-content{\npadding-bottom:20px;\n}\n.popupS-content{\nmax-width:700px;\npadding:40px;\nborder-radius:6px;\n}\n.popupS-content img{\nmax-width:100%;\nheight:auto;\n}\n.popupS-layer .btn{\nfloat:right;\n}\n\n/*\n* Default Animation\n* very Important\n*/\n\n.popupS-layer{\n-webkit-transition: opacity .3s;\n-o-transition: opacity .3s;\ntransition: opacity .3s;\nopacity: 0;\n}\n.popupS-overlay{\n-webkit-transition: opacity .3s ease;\n-o-transition: opacity .3s ease;\ntransition: opacity .3s ease;\nbackground:rgb(0,0,0);\nopacity: 0;\n}\n.popupS-layer.popupS-open{\nopacity: 1;\n}\n.popupS-open>.popupS-overlay{\nopacity:.6;\n}\n\n/* Loader */\n\n@-moz-keyframes spinner {\nto {-moz-transform: rotate(360deg);\n\ttransform: rotate(360deg);}\n}\n@-o-keyframes spinner {\nto {-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);}\n}\n@-webkit-keyframes spinner {\nto {-webkit-transform: rotate(360deg);}\n}\n@keyframes spinner {\n\tto {transform: rotate(360deg);}\n}\n@-moz-keyframes pulsate {\n0% {\n\t-moz-transform:scale(.1);\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\t-moz-transform:scale(1.2);\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@-o-keyframes pulsate {\n0% {\n\t-o-transform:scale(.1);\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\t-o-transform:scale(1.2);\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@-webkit-keyframes pulsate {\n0% {\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@keyframes pulsate {\n0% {\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n.popupS-loading{\nwidth: 30px;\nheight: 30px;\nposition: absolute;\ntop: 50%;\nleft: 50%;\nmargin-top: -15px;\nmargin-left: -15px;\nborder-radius: 30px;\n}\n.popupS-loading.pulser{\nborder: 3px solid #1caff6;\nopacity: 0;\n\t-moz-animation: pulsate 1s ease-out infinite;\n\t-o-animation: pulsate 1s ease-out infinite;\n\t-webkit-animation: pulsate 1s ease-out infinite;\nanimation: pulsate 1s ease-out infinite;\n}\n.popupS-loading.spinner{\nborder-top: 3px solid #1caff6;\nborder-right: 3px solid transparent;\n\t-moz-animation: spinner .6s linear infinite;\n\t-o-animation: spinner .6s linear infinite;\n\t-webkit-animation: spinner .6s linear infinite;\nanimation: spinner .6s linear infinite;\n}", "",{"version":3,"sources":["webpack://./src/popupS.css"],"names":[],"mappings":"AAAA;CACC,4CAA4C;CAC5C,yCAAyC;AAC1C,oCAAoC;AACpC,kBAAkB;AAClB,iBAAiB;AACjB,sBAAsB;AACtB,WAAW;AACX,YAAY;;AAEZ;AACA;AACA,SAAS;AACT,mBAAmB;AACnB,WAAW;AACX,YAAY;AACZ,gBAAgB;AAChB,UAAU;AACV,kBAAkB;AAClB,UAAU;AACV;AACA;AACA,kBAAkB;AAClB,MAAM;AACN,QAAQ;AACR,iBAAiB;AACjB,eAAe;AACf,kBAAkB;AAClB,gBAAgB;AAChB,WAAW;AACX,YAAY;AACZ,eAAe;AACf,YAAY;AACZ;AACA;CACC,kBAAkB;AACnB,WAAW;AACX,iBAAiB;AACjB,kBAAkB;AAClB,mBAAmB;AACnB,gBAAgB;AAChB,uBAAuB;AACvB,cAAc;AACd,YAAY;AACZ;AACA;AACA,mBAAmB;AACnB;AACA;AACA,eAAe;AACf,YAAY;AACZ,iBAAiB;AACjB;AACA;AACA,cAAc;AACd,WAAW;AACX;AACA;AACA,WAAW;AACX;;AAEA;;;CAGC;;AAED;AACA,+BAA+B;AAC/B,0BAA0B;AAC1B,uBAAuB;AACvB,UAAU;AACV;AACA;AACA,oCAAoC;AACpC,+BAA+B;AAC/B,4BAA4B;AAC5B,qBAAqB;AACrB,UAAU;AACV;AACA;AACA,UAAU;AACV;AACA;AACA,UAAU;AACV;;AAEA,WAAW;;AAEX;AACA,IAAI,8BAA8B;CACjC,yBAAyB,CAAC;AAC3B;AACA;AACA,IAAI,4BAA4B;CAC/B,yBAAyB,CAAC;AAC3B;AACA;AACA,IAAI,iCAAiC,CAAC;AACtC;AACA;CACC,IAAI,yBAAyB,CAAC;AAC/B;AACA;AACA;CACC,wBAAwB;CACxB,mBAAmB;CACnB,YAAY;AACb;AACA;CACC,SAAS;AACV;AACA;CACC,yBAAyB;CACzB,oBAAoB;CACpB,SAAS;AACV;AACA;AACA;AACA;CACC,sBAAsB;CACtB,mBAAmB;CACnB,YAAY;AACb;AACA;CACC,SAAS;AACV;AACA;CACC,uBAAuB;CACvB,oBAAoB;CACpB,SAAS;AACV;AACA;AACA;AACA;CACC,mBAAmB;CACnB,YAAY;AACb;AACA;CACC,SAAS;AACV;AACA;CACC,oBAAoB;CACpB,SAAS;AACV;AACA;AACA;AACA;CACC,mBAAmB;CACnB,YAAY;AACb;AACA;CACC,SAAS;AACV;AACA;CACC,oBAAoB;CACpB,SAAS;AACV;AACA;AACA;AACA,WAAW;AACX,YAAY;AACZ,kBAAkB;AAClB,QAAQ;AACR,SAAS;AACT,iBAAiB;AACjB,kBAAkB;AAClB,mBAAmB;AACnB;AACA;AACA,yBAAyB;AACzB,UAAU;CACT,4CAA4C;CAC5C,0CAA0C;CAC1C,+CAA+C;AAChD,uCAAuC;AACvC;AACA;AACA,6BAA6B;AAC7B,mCAAmC;CAClC,2CAA2C;CAC3C,yCAAyC;CACzC,8CAA8C;AAC/C,sCAAsC;AACtC","sourcesContent":[".popupS-layer{\n\t-webkit-box-shadow: 0 0 20px rgba(0,0,0,.25);\n\t-moz-box-shadow: 0 0 20px rgba(0,0,0,.25);\nbox-shadow: 0 0 20px rgba(0,0,0,.25);\nposition: relative;\nborder-radius:6px;\nbackground-color: #FFF;\nmargin:20px;\nz-index:1000;\n\n}\n.popupS-resetFocus {\nborder: 0;\nclip: rect(0 0 0 0);\nheight: 1px;\nmargin: -1px;\noverflow: hidden;\npadding: 0;\nposition: absolute;\nwidth: 1px;\n}\n.popupS-close{\nposition: absolute;\ntop: 0;\nright: 0;\nline-height: 40px;\nfont-size: 32px;\ntext-align: center;\nfont-weight: 700;\nwidth: 32px;\nheight: 40px;\ncursor: pointer;\nz-index:1020;\n}\n.popupS-title{\n\tposition: absolute;\nwidth: 100%;\nline-height: 40px;\ntext-align: center;\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\nmargin: 0 auto;\nz-index:1001;\n}\n.popupS-title + .popupS-content{\npadding-bottom:20px;\n}\n.popupS-content{\nmax-width:700px;\npadding:40px;\nborder-radius:6px;\n}\n.popupS-content img{\nmax-width:100%;\nheight:auto;\n}\n.popupS-layer .btn{\nfloat:right;\n}\n\n/*\n* Default Animation\n* very Important\n*/\n\n.popupS-layer{\n-webkit-transition: opacity .3s;\n-o-transition: opacity .3s;\ntransition: opacity .3s;\nopacity: 0;\n}\n.popupS-overlay{\n-webkit-transition: opacity .3s ease;\n-o-transition: opacity .3s ease;\ntransition: opacity .3s ease;\nbackground:rgb(0,0,0);\nopacity: 0;\n}\n.popupS-layer.popupS-open{\nopacity: 1;\n}\n.popupS-open>.popupS-overlay{\nopacity:.6;\n}\n\n/* Loader */\n\n@-moz-keyframes spinner {\nto {-moz-transform: rotate(360deg);\n\ttransform: rotate(360deg);}\n}\n@-o-keyframes spinner {\nto {-o-transform: rotate(360deg);\n\ttransform: rotate(360deg);}\n}\n@-webkit-keyframes spinner {\nto {-webkit-transform: rotate(360deg);}\n}\n@keyframes spinner {\n\tto {transform: rotate(360deg);}\n}\n@-moz-keyframes pulsate {\n0% {\n\t-moz-transform:scale(.1);\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\t-moz-transform:scale(1.2);\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@-o-keyframes pulsate {\n0% {\n\t-o-transform:scale(.1);\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\t-o-transform:scale(1.2);\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@-webkit-keyframes pulsate {\n0% {\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n@keyframes pulsate {\n0% {\n\ttransform:scale(.1);\n\topacity: 0.0;\n}\n50% {\n\topacity:1;\n}\n100% {\n\ttransform:scale(1.2);\n\topacity:0;\n}\n}\n.popupS-loading{\nwidth: 30px;\nheight: 30px;\nposition: absolute;\ntop: 50%;\nleft: 50%;\nmargin-top: -15px;\nmargin-left: -15px;\nborder-radius: 30px;\n}\n.popupS-loading.pulser{\nborder: 3px solid #1caff6;\nopacity: 0;\n\t-moz-animation: pulsate 1s ease-out infinite;\n\t-o-animation: pulsate 1s ease-out infinite;\n\t-webkit-animation: pulsate 1s ease-out infinite;\nanimation: pulsate 1s ease-out infinite;\n}\n.popupS-loading.spinner{\nborder-top: 3px solid #1caff6;\nborder-right: 3px solid transparent;\n\t-moz-animation: spinner .6s linear infinite;\n\t-o-animation: spinner .6s linear infinite;\n\t-webkit-animation: spinner .6s linear infinite;\nanimation: spinner .6s linear infinite;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pretty-checkbox.min.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pretty-checkbox.min.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * pretty-checkbox.css\n *\n * A pure CSS library to beautify checkbox and radio buttons\n *\n * Source: https://github.com/lokesh-coder/pretty-checkbox\n * Demo: https://lokesh-coder.github.io/pretty-checkbox\n *\n * Copyright (c) 2017 Lokesh rajendran\n */\n\n.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:initial;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:'';width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc((0% - (100% - 1em)) - 8%);background-color:transparent}.pretty .state label:before{border-color:#d5d3c2}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}100%{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}100%{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.pretty.p-default .state label:after{-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#d5d3c2!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:calc(1em / 7)}.pretty.p-default.p-thick .state label:after{-webkit-transform:scale(.4)!important;-ms-transform:scale(.4)!important;transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc((0% - (100% - 1em)) - 8%);left:0;z-index:0;text-align:center;line-height:normal;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:'';border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc((0% - (100% - 1em)) - 16%);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover{display:block}.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img,.pretty.p-toggle .state.p-off{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain input:checked~.state label:before,.pretty.p-plain.p-toggle .state label:before{content:none}.pretty.p-plain.p-plain .icon{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-default input:checked+.state label:after{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:'';-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty input:checked~.state.p-primary label:after,.pretty.p-toggle .state.p-primary label:after{background-color:#428bca!important}.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg,.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-primary-o label:before,.pretty.p-toggle .state.p-primary-o label:before{border-color:#428bca}.pretty input:checked~.state.p-primary-o label:after,.pretty.p-toggle .state.p-primary-o label:after{background-color:transparent}.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg,.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty input:checked~.state.p-info label:after,.pretty.p-toggle .state.p-info label:after{background-color:#5bc0de!important}.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg,.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-info-o label:before,.pretty.p-toggle .state.p-info-o label:before{border-color:#5bc0de}.pretty input:checked~.state.p-info-o label:after,.pretty.p-toggle .state.p-info-o label:after{background-color:transparent}.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg,.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty input:checked~.state.p-success label:after,.pretty.p-toggle .state.p-success label:after{background-color:#5cb85c!important}.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg,.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-success-o label:before,.pretty.p-toggle .state.p-success-o label:before{border-color:#5cb85c}.pretty input:checked~.state.p-success-o label:after,.pretty.p-toggle .state.p-success-o label:after{background-color:transparent}.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg,.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty input:checked~.state.p-warning label:after,.pretty.p-toggle .state.p-warning label:after{background-color:#f0ad4e!important}.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg,.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-warning-o label:before,.pretty.p-toggle .state.p-warning-o label:before{border-color:#f0ad4e}.pretty input:checked~.state.p-warning-o label:after,.pretty.p-toggle .state.p-warning-o label:after{background-color:transparent}.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg,.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty input:checked~.state.p-danger label:after,.pretty.p-toggle .state.p-danger label:after{background-color:#d9534f!important}.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg,.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-danger-o label:before,.pretty.p-toggle .state.p-danger-o label:before{border-color:#d9534f}.pretty input:checked~.state.p-danger-o label:after,.pretty.p-toggle .state.p-danger-o label:after{background-color:transparent}.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg,.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc((0% - (100% - 1em)) - 35%)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state label:after,.pretty .state label:before,.pretty .state:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}\n", "",{"version":3,"sources":["webpack://./src/pretty-checkbox.min.css"],"names":[],"mappings":"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","sourcesContent":["/**\n * pretty-checkbox.css\n *\n * A pure CSS library to beautify checkbox and radio buttons\n *\n * Source: https://github.com/lokesh-coder/pretty-checkbox\n * Demo: https://lokesh-coder.github.io/pretty-checkbox\n *\n * Copyright (c) 2017 Lokesh rajendran\n */\n\n.pretty *{box-sizing:border-box}.pretty input:not([type=checkbox]):not([type=radio]){display:none}.pretty{position:relative;display:inline-block;margin-right:1em;white-space:nowrap;line-height:1}.pretty input{position:absolute;left:0;top:0;min-width:1em;width:100%;height:100%;z-index:2;opacity:0;margin:0;padding:0;cursor:pointer}.pretty .state label{position:initial;display:inline-block;font-weight:400;margin:0;text-indent:1.5em;min-width:calc(1em + 2px)}.pretty .state label:after,.pretty .state label:before{content:'';width:calc(1em + 2px);height:calc(1em + 2px);display:block;box-sizing:border-box;border-radius:0;border:1px solid transparent;z-index:0;position:absolute;left:0;top:calc((0% - (100% - 1em)) - 8%);background-color:transparent}.pretty .state label:before{border-color:#d5d3c2}.pretty .state.p-is-hover,.pretty .state.p-is-indeterminate{display:none}@-webkit-keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes zoom{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@keyframes tada{0%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;-webkit-transform:scale(7);transform:scale(7)}38%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1;-webkit-transform:scale(1);transform:scale(1)}55%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.5);transform:scale(1.5)}72%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}81%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.24);transform:scale(1.24)}89%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}95%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-transform:scale(1.04);transform:scale(1.04)}100%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes jelly{0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}40%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}50%{-webkit-transform:scale3d(.85,1.15,1);transform:scale3d(.85,1.15,1)}65%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}75%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@-webkit-keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@keyframes rotate{0%{opacity:0;-webkit-transform:translateZ(-200px) rotate(-45deg);transform:translateZ(-200px) rotate(-45deg)}100%{opacity:1;-webkit-transform:translateZ(0) rotate(0);transform:translateZ(0) rotate(0)}}@-webkit-keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}100%{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}@keyframes pulse{0%{box-shadow:0 0 0 0 #bdc3c7}100%{box-shadow:0 0 0 1.5em rgba(189,195,199,0)}}.pretty.p-default.p-fill .state label:after{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.pretty.p-default .state label:after{-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6)}.pretty.p-default input:checked~.state label:after{background-color:#d5d3c2!important}.pretty.p-default.p-thick .state label:after,.pretty.p-default.p-thick .state label:before{border-width:calc(1em / 7)}.pretty.p-default.p-thick .state label:after{-webkit-transform:scale(.4)!important;-ms-transform:scale(.4)!important;transform:scale(.4)!important}.pretty.p-icon .state .icon{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-icon .state .icon:before{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-icon input:checked~.state .icon{opacity:1}.pretty.p-icon input:checked~.state label:before{border-color:#5a656b}.pretty.p-svg .state .svg{position:absolute;font-size:1em;width:calc(1em + 2px);height:calc(1em + 2px);left:0;z-index:1;text-align:center;line-height:normal;top:calc((0% - (100% - 1em)) - 8%);border:1px solid transparent;opacity:0}.pretty.p-svg .state svg{margin:0;width:100%;height:100%;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1}.pretty.p-svg input:checked~.state .svg{opacity:1}.pretty.p-image .state img{opacity:0;position:absolute;width:calc(1em + 2px);height:calc(1em + 2px);top:0;top:calc((0% - (100% - 1em)) - 8%);left:0;z-index:0;text-align:center;line-height:normal;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-image input:checked~.state img{opacity:1}.pretty.p-switch input{min-width:2em}.pretty.p-switch .state{position:relative}.pretty.p-switch .state:before{content:'';border:1px solid #bdc3c7;border-radius:60px;width:2em;box-sizing:unset;height:calc(1em + 2px);position:absolute;top:0;top:calc((0% - (100% - 1em)) - 16%);z-index:0;transition:all .5s ease}.pretty.p-switch .state label{text-indent:2.5em}.pretty.p-switch .state label:after,.pretty.p-switch .state label:before{transition:all .5s ease;border-radius:100%;left:0;border-color:transparent;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-switch .state label:after{background-color:#bdc3c7!important}.pretty.p-switch input:checked~.state:before{border-color:#5a656b}.pretty.p-switch input:checked~.state label:before{opacity:0}.pretty.p-switch input:checked~.state label:after{background-color:#5a656b!important;left:1em}.pretty.p-switch.p-fill input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-switch.p-fill input:checked~.state label:before{opacity:0}.pretty.p-switch.p-fill input:checked~.state label:after{background-color:#fff!important;left:1em}.pretty.p-switch.p-slim .state:before{height:.1em;background:#bdc3c7!important;top:calc(50% - .1em)}.pretty.p-switch.p-slim input:checked~.state:before{border-color:#5a656b;background-color:#5a656b!important}.pretty.p-has-hover input:hover~.state:not(.p-is-hover){display:none}.pretty.p-has-hover input:hover~.state.p-is-hover{display:block}.pretty.p-has-hover input:hover~.state.p-is-hover .icon{display:block}.pretty.p-has-focus input:focus~.state label:before{box-shadow:0 0 3px 0 #bdc3c7}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state:not(.p-is-indeterminate){display:none}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate{display:block}.pretty.p-has-indeterminate input[type=checkbox]:indeterminate~.state.p-is-indeterminate .icon{display:block;opacity:1}.pretty.p-toggle .state.p-on{opacity:0;display:none}.pretty.p-toggle .state .icon,.pretty.p-toggle .state .svg,.pretty.p-toggle .state img,.pretty.p-toggle .state.p-off{opacity:1;display:inherit}.pretty.p-toggle .state.p-off .icon{color:#bdc3c7}.pretty.p-toggle input:checked~.state.p-on{opacity:1;display:inherit}.pretty.p-toggle input:checked~.state.p-off{opacity:0;display:none}.pretty.p-plain input:checked~.state label:before,.pretty.p-plain.p-toggle .state label:before{content:none}.pretty.p-plain.p-plain .icon{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.pretty.p-round .state label:after,.pretty.p-round .state label:before{border-radius:100%}.pretty.p-round.p-icon .state .icon{border-radius:100%;overflow:hidden}.pretty.p-round.p-icon .state .icon:before{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.pretty.p-curve .state label:after,.pretty.p-curve .state label:before{border-radius:20%}.pretty.p-smooth .icon,.pretty.p-smooth .svg,.pretty.p-smooth label:after,.pretty.p-smooth label:before{transition:all .5s ease}.pretty.p-smooth input:checked+.state label:after{transition:all .3s ease}.pretty.p-smooth input:checked+.state .icon,.pretty.p-smooth input:checked+.state .svg,.pretty.p-smooth input:checked+.state img{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-default input:checked+.state label:after{-webkit-animation:zoom .2s ease;animation:zoom .2s ease}.pretty.p-smooth.p-plain input:checked+.state label:before{content:'';-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);transition:all .5s ease}.pretty.p-tada:not(.p-default) input:checked+.state .icon,.pretty.p-tada:not(.p-default) input:checked+.state .svg,.pretty.p-tada:not(.p-default) input:checked+.state img,.pretty.p-tada:not(.p-default) input:checked+.state label:after,.pretty.p-tada:not(.p-default) input:checked+.state label:before{-webkit-animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;animation:tada .7s cubic-bezier(.25,.46,.45,.94) 1 alternate;opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state .icon,.pretty.p-jelly:not(.p-default) input:checked+.state .svg,.pretty.p-jelly:not(.p-default) input:checked+.state img,.pretty.p-jelly:not(.p-default) input:checked+.state label:after,.pretty.p-jelly:not(.p-default) input:checked+.state label:before{-webkit-animation:jelly .7s cubic-bezier(.25,.46,.45,.94);animation:jelly .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-jelly:not(.p-default) input:checked+.state label:before{border-color:transparent}.pretty.p-rotate:not(.p-default) input:checked~.state .icon,.pretty.p-rotate:not(.p-default) input:checked~.state .svg,.pretty.p-rotate:not(.p-default) input:checked~.state img,.pretty.p-rotate:not(.p-default) input:checked~.state label:after,.pretty.p-rotate:not(.p-default) input:checked~.state label:before{-webkit-animation:rotate .7s cubic-bezier(.25,.46,.45,.94);animation:rotate .7s cubic-bezier(.25,.46,.45,.94);opacity:1}.pretty.p-rotate:not(.p-default) input:checked~.state label:before{border-color:transparent}.pretty.p-pulse:not(.p-switch) input:checked~.state label:before{-webkit-animation:pulse 1s;animation:pulse 1s}.pretty input[disabled]{cursor:not-allowed;display:none}.pretty input[disabled]~*{opacity:.5}.pretty.p-locked input{display:none;cursor:not-allowed}.pretty input:checked~.state.p-primary label:after,.pretty.p-toggle .state.p-primary label:after{background-color:#428bca!important}.pretty input:checked~.state.p-primary .icon,.pretty input:checked~.state.p-primary .svg,.pretty.p-toggle .state.p-primary .icon,.pretty.p-toggle .state.p-primary .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-primary-o label:before,.pretty.p-toggle .state.p-primary-o label:before{border-color:#428bca}.pretty input:checked~.state.p-primary-o label:after,.pretty.p-toggle .state.p-primary-o label:after{background-color:transparent}.pretty input:checked~.state.p-primary-o .icon,.pretty input:checked~.state.p-primary-o .svg,.pretty input:checked~.state.p-primary-o svg,.pretty.p-toggle .state.p-primary-o .icon,.pretty.p-toggle .state.p-primary-o .svg,.pretty.p-toggle .state.p-primary-o svg{color:#428bca;stroke:#428bca}.pretty.p-default:not(.p-fill) input:checked~.state.p-primary-o label:after{background-color:#428bca!important}.pretty.p-switch input:checked~.state.p-primary:before{border-color:#428bca}.pretty.p-switch.p-fill input:checked~.state.p-primary:before{background-color:#428bca!important}.pretty.p-switch.p-slim input:checked~.state.p-primary:before{border-color:#245682;background-color:#245682!important}.pretty input:checked~.state.p-info label:after,.pretty.p-toggle .state.p-info label:after{background-color:#5bc0de!important}.pretty input:checked~.state.p-info .icon,.pretty input:checked~.state.p-info .svg,.pretty.p-toggle .state.p-info .icon,.pretty.p-toggle .state.p-info .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-info-o label:before,.pretty.p-toggle .state.p-info-o label:before{border-color:#5bc0de}.pretty input:checked~.state.p-info-o label:after,.pretty.p-toggle .state.p-info-o label:after{background-color:transparent}.pretty input:checked~.state.p-info-o .icon,.pretty input:checked~.state.p-info-o .svg,.pretty input:checked~.state.p-info-o svg,.pretty.p-toggle .state.p-info-o .icon,.pretty.p-toggle .state.p-info-o .svg,.pretty.p-toggle .state.p-info-o svg{color:#5bc0de;stroke:#5bc0de}.pretty.p-default:not(.p-fill) input:checked~.state.p-info-o label:after{background-color:#5bc0de!important}.pretty.p-switch input:checked~.state.p-info:before{border-color:#5bc0de}.pretty.p-switch.p-fill input:checked~.state.p-info:before{background-color:#5bc0de!important}.pretty.p-switch.p-slim input:checked~.state.p-info:before{border-color:#2390b0;background-color:#2390b0!important}.pretty input:checked~.state.p-success label:after,.pretty.p-toggle .state.p-success label:after{background-color:#5cb85c!important}.pretty input:checked~.state.p-success .icon,.pretty input:checked~.state.p-success .svg,.pretty.p-toggle .state.p-success .icon,.pretty.p-toggle .state.p-success .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-success-o label:before,.pretty.p-toggle .state.p-success-o label:before{border-color:#5cb85c}.pretty input:checked~.state.p-success-o label:after,.pretty.p-toggle .state.p-success-o label:after{background-color:transparent}.pretty input:checked~.state.p-success-o .icon,.pretty input:checked~.state.p-success-o .svg,.pretty input:checked~.state.p-success-o svg,.pretty.p-toggle .state.p-success-o .icon,.pretty.p-toggle .state.p-success-o .svg,.pretty.p-toggle .state.p-success-o svg{color:#5cb85c;stroke:#5cb85c}.pretty.p-default:not(.p-fill) input:checked~.state.p-success-o label:after{background-color:#5cb85c!important}.pretty.p-switch input:checked~.state.p-success:before{border-color:#5cb85c}.pretty.p-switch.p-fill input:checked~.state.p-success:before{background-color:#5cb85c!important}.pretty.p-switch.p-slim input:checked~.state.p-success:before{border-color:#357935;background-color:#357935!important}.pretty input:checked~.state.p-warning label:after,.pretty.p-toggle .state.p-warning label:after{background-color:#f0ad4e!important}.pretty input:checked~.state.p-warning .icon,.pretty input:checked~.state.p-warning .svg,.pretty.p-toggle .state.p-warning .icon,.pretty.p-toggle .state.p-warning .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-warning-o label:before,.pretty.p-toggle .state.p-warning-o label:before{border-color:#f0ad4e}.pretty input:checked~.state.p-warning-o label:after,.pretty.p-toggle .state.p-warning-o label:after{background-color:transparent}.pretty input:checked~.state.p-warning-o .icon,.pretty input:checked~.state.p-warning-o .svg,.pretty input:checked~.state.p-warning-o svg,.pretty.p-toggle .state.p-warning-o .icon,.pretty.p-toggle .state.p-warning-o .svg,.pretty.p-toggle .state.p-warning-o svg{color:#f0ad4e;stroke:#f0ad4e}.pretty.p-default:not(.p-fill) input:checked~.state.p-warning-o label:after{background-color:#f0ad4e!important}.pretty.p-switch input:checked~.state.p-warning:before{border-color:#f0ad4e}.pretty.p-switch.p-fill input:checked~.state.p-warning:before{background-color:#f0ad4e!important}.pretty.p-switch.p-slim input:checked~.state.p-warning:before{border-color:#c77c11;background-color:#c77c11!important}.pretty input:checked~.state.p-danger label:after,.pretty.p-toggle .state.p-danger label:after{background-color:#d9534f!important}.pretty input:checked~.state.p-danger .icon,.pretty input:checked~.state.p-danger .svg,.pretty.p-toggle .state.p-danger .icon,.pretty.p-toggle .state.p-danger .svg{color:#fff;stroke:#fff}.pretty input:checked~.state.p-danger-o label:before,.pretty.p-toggle .state.p-danger-o label:before{border-color:#d9534f}.pretty input:checked~.state.p-danger-o label:after,.pretty.p-toggle .state.p-danger-o label:after{background-color:transparent}.pretty input:checked~.state.p-danger-o .icon,.pretty input:checked~.state.p-danger-o .svg,.pretty input:checked~.state.p-danger-o svg,.pretty.p-toggle .state.p-danger-o .icon,.pretty.p-toggle .state.p-danger-o .svg,.pretty.p-toggle .state.p-danger-o svg{color:#d9534f;stroke:#d9534f}.pretty.p-default:not(.p-fill) input:checked~.state.p-danger-o label:after{background-color:#d9534f!important}.pretty.p-switch input:checked~.state.p-danger:before{border-color:#d9534f}.pretty.p-switch.p-fill input:checked~.state.p-danger:before{background-color:#d9534f!important}.pretty.p-switch.p-slim input:checked~.state.p-danger:before{border-color:#a02622;background-color:#a02622!important}.pretty.p-bigger .icon,.pretty.p-bigger .img,.pretty.p-bigger .svg,.pretty.p-bigger label:after,.pretty.p-bigger label:before{font-size:1.2em!important;top:calc((0% - (100% - 1em)) - 35%)!important}.pretty.p-bigger label{text-indent:1.7em}@media print{.pretty .state .icon,.pretty .state label:after,.pretty .state label:before,.pretty .state:before{color-adjust:exact;-webkit-print-color-adjust:exact;print-color-adjust:exact}}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-VariableFont_wght.ttf */ "./src/fonts/Oswald-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'oswald';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Oswald';\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #fefdf9;\n}\n\n.sig {\n    font-family: monospace;\n    margin-top: 5px;\n    font-style: italic;\n    font-size: 12px;\n}\n\n/* Universal Styles */\n\n.preventSelect {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.whiteFont {\n    color: #e6e0d5;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #bcb6ab;\n}\n\n.mainContainer {\n    display: flex;\n    width: 1100px;\n    height: 650px;\n    border-radius: 15px;\n    box-shadow: 0 0 15px rgba(111, 107, 101, 0.3);\n    overflow: hidden;\n}\n\n/* vvv Sidebar CSS Styles vvv */\n\n.containerLeft { \n    display: flex;\n    flex-direction: column;\n    flex: 1 1 25%;\n    background-color: #403D39;\n}\n\n.logoImg {\n    align-self: center;\n    width: 80%;\n    padding-top: 20px;\n    padding-bottom: 25px;\n}\n\n.categoryTitle {\n    display: flex;\n    padding-left: 75px;\n    font-size: 30px;\n    background-color: #4e4a44;\n    width: 100%;\n}\n\n.categoryList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    align-self: flex-end;\n    width: max-content;\n    margin-right: 50px;\n    margin-bottom: 30px;\n    margin-top: 5px;\n    list-style-type: none;\n    font-size: 20px;\n}\n\n.selected {\n    color: orange;\n}\n\n/* ^^^ Sidebar CSS Styles ^^^ */\n\n/* vvv Content Container CSS Styles vvv */\n\n.containerRight {\n    display: flex;\n    justify-content: center;\n    flex: 1 1 80%;\n    background-color: rgb(204, 197, 185);\n}\n\n.contentContainerRight {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: max-content;\n}\n\n.contentTitle {\n    color: #53504a;\n    margin-top: 30px;\n    align-self: flex-start;\n    width: 100%;\n    border-bottom: 1px solid rgb(0, 0, 0, 0.3);\n}\n\n.taskContainer {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    width: 500px;\n    gap: 5px;\n    overflow-y: scroll;\n    padding-bottom: 15px;\n    padding-right: 10px;\n    margin-top: 10px;\n}\n\n.taskContainerTitle {\n    color: #53504a;\n    margin-top: 30px;\n}\n\n.taskContainerSubTitle {\n    color: #69655d;\n    margin-top: 15px;\n\n}\n\n.completeHeader {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.completeTaskContainerTitle {\n    color: #53504a;\n}\n\n.completeShowBtn {\n    border: 1px solid rgb(0, 0, 0, 0.4);\n    color: rgb(0, 0, 0, 0.7);\n    border-radius: 3px;\n    background-color: transparent;\n    padding: 1px 5px;\n    cursor: pointer;\n    margin-top: 2p;\n}\n\n.itemContainer {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    border-radius: 5px;\n    background-color: #938e84;\n}\n\n.checkboxContainer {\n    margin-left: 15px;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.lowerContent {\n    display: flex;\n    font-size: 12px;\n    font-style: italic;\n}\n\n.priorityContainer {\n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n}\n\n.star {\n    width: 24px;\n    cursor: pointer;\n}\n\n.cancelContainer {\n    display: flex;\n    font-size: 10px;\n    color: white;\n    align-self: flex-start;\n    margin-right: 5px;\n    margin-top: 1px;\n\n}\n\n.inputContainer {\n    display: flex;\n    align-items: center;\n    background-color: #928c83;\n    width: 500px;\n    height: 50px;\n    border-radius: 10px;\n    gap: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    margin-right: 15px;\n}\n\n.addButton {\n    margin-left: 15px;\n    margin-top: 2px;\n    font-size: 42px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #e6e0d5;\n}\n\n.inputText {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    font-size: 16px;\n    width: 100%;\n    color: #e6e0d5;\n}\n\n.inputText::placeholder {\n    color: #e6e0d5;\n}\n\n.inputText:focus {\n    outline: none;\n}\n\n.inputIcons {\n    display: flex;\n    margin-left: auto;\n    margin-right: 15px;\n    gap: 10px;\n}\n\n.typeIcon, .dateIcon, .timeIcon {   \n    width: 24px;\n}\n\n/* vv Popup Styles vv */\n\n.mainPopupContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.popupInputfield {\n    display: flex;\n    gap: 10px;\n}\n\n.popupLabel {\n    width: 40px;\n}\n\n.popupName {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    outline: none;\n    padding: 2px 10px;\n}\n\n.popupTextArea {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    outline: none;\n    min-height: 50px;\n    max-height: 200px;\n    width: 175px;\n    resize: vertical;\n    padding: 2px 10px;\n}\n\n.popupContainer {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.popupDate {\n    appearance: none;\n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n}\n\n.popupSelect { \n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n    outline: none;\n}\n\n.popupTime {\n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n    outline: none;\n}\n\n.popupDate:focus {\n    outline: none;\n}\n\n.clearBtn {\n    appearance: none;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    padding: 2px 5px;\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n}\n\n.clearBtn:active, .cancelBtn:active, .confirmBtn:active {\n    box-shadow: none;\n}\n\n.clearBtn:hover {\n    background-color: #e8e6e6;\n}\n\n.popupButtons {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 15px;\n}\n\n.cancelBtn, .confirmBtn {\n    appearance: none;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 5px;\n    color: white;\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    outline: none;\n}\n\n.cancelBtn {\n    background-color: rgb(148, 147, 147);\n}\n\n.cancelBtn:hover {\n    background-color: rgb(137, 136, 136);\n}\n\n.confirmBtn {\n    background-color: rgb(255, 157, 0);\n}\n\n.confirmBtn:hover {\n    background-color: rgb(233, 144, 0);\n}\n\n/* ^^ Popup Stlyes ^^ */\n\n/* ^^^ Content Container CSS Styles VVV */\n\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: auto;\n    scrollbar-color: #b2aa9f #ccc5b9;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 3px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #ccc5b9;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #b2aa9f;\n    border-radius: 10px;\n    border: 3px solid #979187;\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'oswald';\n    src: url(./fonts/Oswald-VariableFont_wght.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Oswald';\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #fefdf9;\n}\n\n.sig {\n    font-family: monospace;\n    margin-top: 5px;\n    font-style: italic;\n    font-size: 12px;\n}\n\n/* Universal Styles */\n\n.preventSelect {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none; /* Standard syntax */\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.whiteFont {\n    color: #e6e0d5;\n}\n\n.completed {\n    text-decoration: line-through;\n    color: #bcb6ab;\n}\n\n.mainContainer {\n    display: flex;\n    width: 1100px;\n    height: 650px;\n    border-radius: 15px;\n    box-shadow: 0 0 15px rgba(111, 107, 101, 0.3);\n    overflow: hidden;\n}\n\n/* vvv Sidebar CSS Styles vvv */\n\n.containerLeft { \n    display: flex;\n    flex-direction: column;\n    flex: 1 1 25%;\n    background-color: #403D39;\n}\n\n.logoImg {\n    align-self: center;\n    width: 80%;\n    padding-top: 20px;\n    padding-bottom: 25px;\n}\n\n.categoryTitle {\n    display: flex;\n    padding-left: 75px;\n    font-size: 30px;\n    background-color: #4e4a44;\n    width: 100%;\n}\n\n.categoryList {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    align-self: flex-end;\n    width: max-content;\n    margin-right: 50px;\n    margin-bottom: 30px;\n    margin-top: 5px;\n    list-style-type: none;\n    font-size: 20px;\n}\n\n.selected {\n    color: orange;\n}\n\n/* ^^^ Sidebar CSS Styles ^^^ */\n\n/* vvv Content Container CSS Styles vvv */\n\n.containerRight {\n    display: flex;\n    justify-content: center;\n    flex: 1 1 80%;\n    background-color: rgb(204, 197, 185);\n}\n\n.contentContainerRight {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: max-content;\n}\n\n.contentTitle {\n    color: #53504a;\n    margin-top: 30px;\n    align-self: flex-start;\n    width: 100%;\n    border-bottom: 1px solid rgb(0, 0, 0, 0.3);\n}\n\n.taskContainer {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    width: 500px;\n    gap: 5px;\n    overflow-y: scroll;\n    padding-bottom: 15px;\n    padding-right: 10px;\n    margin-top: 10px;\n}\n\n.taskContainerTitle {\n    color: #53504a;\n    margin-top: 30px;\n}\n\n.taskContainerSubTitle {\n    color: #69655d;\n    margin-top: 15px;\n\n}\n\n.completeHeader {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.completeTaskContainerTitle {\n    color: #53504a;\n}\n\n.completeShowBtn {\n    border: 1px solid rgb(0, 0, 0, 0.4);\n    color: rgb(0, 0, 0, 0.7);\n    border-radius: 3px;\n    background-color: transparent;\n    padding: 1px 5px;\n    cursor: pointer;\n    margin-top: 2p;\n}\n\n.itemContainer {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 45px;\n    border-radius: 5px;\n    background-color: #938e84;\n}\n\n.checkboxContainer {\n    margin-left: 15px;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.lowerContent {\n    display: flex;\n    font-size: 12px;\n    font-style: italic;\n}\n\n.priorityContainer {\n    display: flex;\n    justify-content: center;\n    margin-left: auto;\n}\n\n.star {\n    width: 24px;\n    cursor: pointer;\n}\n\n.cancelContainer {\n    display: flex;\n    font-size: 10px;\n    color: white;\n    align-self: flex-start;\n    margin-right: 5px;\n    margin-top: 1px;\n\n}\n\n.inputContainer {\n    display: flex;\n    align-items: center;\n    background-color: #928c83;\n    width: 500px;\n    height: 50px;\n    border-radius: 10px;\n    gap: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    margin-right: 15px;\n}\n\n.addButton {\n    margin-left: 15px;\n    margin-top: 2px;\n    font-size: 42px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #e6e0d5;\n}\n\n.inputText {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    font-size: 16px;\n    width: 100%;\n    color: #e6e0d5;\n}\n\n.inputText::placeholder {\n    color: #e6e0d5;\n}\n\n.inputText:focus {\n    outline: none;\n}\n\n.inputIcons {\n    display: flex;\n    margin-left: auto;\n    margin-right: 15px;\n    gap: 10px;\n}\n\n.typeIcon, .dateIcon, .timeIcon {   \n    width: 24px;\n}\n\n/* vv Popup Styles vv */\n\n.mainPopupContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.popupInputfield {\n    display: flex;\n    gap: 10px;\n}\n\n.popupLabel {\n    width: 40px;\n}\n\n.popupName {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    outline: none;\n    padding: 2px 10px;\n}\n\n.popupTextArea {\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    outline: none;\n    min-height: 50px;\n    max-height: 200px;\n    width: 175px;\n    resize: vertical;\n    padding: 2px 10px;\n}\n\n.popupContainer {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.popupDate {\n    appearance: none;\n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n}\n\n.popupSelect { \n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n    outline: none;\n}\n\n.popupTime {\n    border: 1px solid rgb(0, 0, 0, 0.2);\n    border-radius: 3px;\n    padding: 2px 10px;\n    outline: none;\n}\n\n.popupDate:focus {\n    outline: none;\n}\n\n.clearBtn {\n    appearance: none;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    padding: 2px 5px;\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n}\n\n.clearBtn:active, .cancelBtn:active, .confirmBtn:active {\n    box-shadow: none;\n}\n\n.clearBtn:hover {\n    background-color: #e8e6e6;\n}\n\n.popupButtons {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    margin-top: 15px;\n}\n\n.cancelBtn, .confirmBtn {\n    appearance: none;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 5px;\n    color: white;\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    outline: none;\n}\n\n.cancelBtn {\n    background-color: rgb(148, 147, 147);\n}\n\n.cancelBtn:hover {\n    background-color: rgb(137, 136, 136);\n}\n\n.confirmBtn {\n    background-color: rgb(255, 157, 0);\n}\n\n.confirmBtn:hover {\n    background-color: rgb(233, 144, 0);\n}\n\n/* ^^ Popup Stlyes ^^ */\n\n/* ^^^ Content Container CSS Styles VVV */\n\n\n/* ===== Scrollbar CSS ===== */\n  /* Firefox */\n  * {\n    scrollbar-width: auto;\n    scrollbar-color: #b2aa9f #ccc5b9;\n  }\n\n  /* Chrome, Edge, and Safari */\n  *::-webkit-scrollbar {\n    width: 3px;\n  }\n\n  *::-webkit-scrollbar-track {\n    background: #ccc5b9;\n  }\n\n  *::-webkit-scrollbar-thumb {\n    background-color: #b2aa9f;\n    border-radius: 10px;\n    border: 3px solid #979187;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/popups/dist/popupS.js":
/*!********************************************!*\
  !*** ./node_modules/popups/dist/popupS.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function (root, factory) {

    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this, function () {
    'use strict';

    var isOpen = false,
        queue  = [];

    // Match image file
    var R_IMG = new RegExp( /([^\/\\]+)\.(jpg|jpeg|png|gif)$/i );

    var _defaults = {
        additionalBaseClass: '',
        additionalButtonHolderClass: '',
        additionalButtonOkClass: '',
        additionalButtonCancelClass: '',
        additionalCloseBtnClass: '',
        additionalFormClass: '',
        additionalOverlayClass: '',
        additionalPopupClass: '',
        appendLocation: (document.body || document.documentElement),
        baseClassName: 'popupS',
        closeBtn: '&times;',
        flagBodyScroll: false,
        flagButtonReverse: false,
        flagCloseByEsc: true,
        flagCloseByOverlay: true,
        flagShowCloseBtn: true,
        labelOk: 'OK',
        labelCancel: 'Cancel',
        loader: 'spinner',
        zIndex: 10000
    }

    var transition = (function() {
        var t, type;
        var supported = false;
        var el = document.createElement("fakeelement");
        var transitions = {
            "WebkitTransition": "webkitTransitionEnd",
            "MozTransition": "transitionend",
            "OTransition": "otransitionend",
            "transition": "transitionend"
        };

        for(t in transitions) {
            if (transitions.hasOwnProperty(t) && el.style[t] !== undefined) {
                type = transitions[t];
                supported = true;
                break;
            }
        }

        return {
            type: type,
            supported: supported
        };
    })()

    /**
     * @class   PopupS
     */
    function PopupS() {}

    PopupS.prototype = {
        constructor: PopupS,

        _open: function(options) {
            //error catching
            if (typeof options.mode !== "string") throw new Error("mode must be a string");
            if (typeof options.title !== "undefined" && typeof options.title !== "string") throw new Error("title must be a string");
            if (typeof options.placeholder !== "undefined" && typeof options.placeholder !== "string") throw new Error("placeholder must be a string");

            this.options = options = _extend({}, options);

            // Set default options
            for (var name in _defaults) {
                !(name in options) && (options[name] = _defaults[name]);
            }

            // trail all classes divided by periods
            _each(['additionalBaseClass', 'additionalButtonHolderClass', 'additionalButtonOkClass', 'additionalButtonCancelClass', 'additionalCloseBtnClass', 'additionalFormClass', 'additionalOverlayClass', 'additionalPopupClass'], function(option) {
                var string = options[option].split(' ').join('.');
                options[option] = '.' + string;
            });

            // Bind all private methods
            for (var fn in this) {
                if (fn.charAt(0) === '_') {
                    this[fn] = _bind(this, this[fn]);
                }
            }

            //initialize if it hasn't already been done
            this._init();

            // if it is forced, close all others
            if(options.force === true) {
                while (queue.length > 0) queue.pop();
            }
            queue.push(options);

            if(!isOpen || options.force === true) this._create();
        },
        _init: function() {
            // if i passed a opacity attribute to the layer onClose, remove it on initialization
            if(this.$layerEl && this.$layerEl.style.opacity) this.$layerEl.style.opacity = "";
            if(!this.$wrapEl){
                this.$wrapEl = _buildDOM({
                    tag: 'div.' + this.options.baseClassName + '-base' + (this.options.additionalBaseClass ? this.options.additionalBaseClass : ''),
                    css: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        position: 'fixed',
                        textAlign: 'center',
                        overflowX: 'auto',
                        overflowY: 'auto',
                        outline: 0,
                        whiteSpace: 'nowrap',
                        zIndex: this.options.zIndex
                    },
                    children: {
                        css: {
                            height: '100%',
                            display: 'inline-block',
                            verticalAlign: 'middle'
                        }
                    }
                });
                _appendChild(this.$wrapEl, this._getOverlay());
                _appendChild(this.$wrapEl, this._getLayer());
            }
        },
        _getOverlay: function () {
            if (!this.$overlayEl) {
                this.$overlayEl = _buildDOM({
                    tag: '#popupS-overlay.' + this.options.baseClassName + '-overlay' + (this.options.additionalOverlayClass ? this.options.additionalOverlayClass : ''),
                    css: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        position: 'fixed',
                        overflowX: 'hidden',
                        userSelect: 'none',
                        webkitUserSelect: 'none',
                        MozUserSelect: 'none'
                    }
                });
            }
            this.$overlayEl.setAttribute("unselectable", "on");
            return this.$overlayEl;
        },
        _getLayer: function () {
            if(!this.$layerEl){
                this.$layerEl = _buildDOM({
                    css: {
                        display: 'inline-block',
                        position: 'relative',
                        textAlign: 'left',
                        whiteSpace: 'normal',
                        verticalAlign: 'middle',
                        maxWidth: '100%',
                        overflowX: 'hidden',
                        transform: 'translate3d(0,0,0)'
                    },
                    children: {
                        tag: '.' + this.options.baseClassName + '-layer' + (this.options.additionalPopupClass ? this.options.additionalPopupClass : '')
                    }
                });
            }
            return this.$layerEl;
        },
        _resetLayer: function(){
            this.$layerEl.childNodes[0].innerHTML = '';
        },
        /**
         * Takes the first item from the queue
         * creates or overwrites the Overlay and adds Events.
         */
        _create: function () {
            var self = this;
            var item = queue[0];
            var mode = item.mode;
            isOpen = true;
            // Creates the Popup. Overwrites the old one if one exists.
            if (mode != 'modal-ajax') {
                this._createPopup(item);
            } else {
                this._loadContents(item);
            }
            // this is very important for the callback function.
            // these lines make sure callbacks on the same function object will be displayed.
            var transitionDone = function(event) {
                event.stopPropagation();
                _unbind(self.$layerEl, transition.type, transitionDone);
            };
            if(transition.supported){
                _bind(self.$layerEl, transition.type, transitionDone);
            }
        },
        _createPopup: function(item) {
            var btnOk, btnCancel, htmlObj;
            var mode        = item.mode;
            var title       = item.title;
            var content     = item.content;
            var className   = (item.className ? '.' + item.className : '');
            var contentObj  = ((content instanceof Object) ? true : false);

            this.callbacks = {
                onOpen: item.onOpen,
                onSubmit: item.onSubmit,
                onClose: item.onClose
            };

            btnOk = {
                tag:  'button#popupS-button-ok.' + this.options.baseClassName + '-button-ok' + (this.options.additionalButtonOkClass ? this.options.additionalButtonOkClass : ''),
                text: this.options.labelOk };
            btnCancel = {
                tag:  'button#popupS-button-cancel.' + this.options.baseClassName + '-button-ok' + (this.options.additionalButtonCancelClass ? this.options.additionalButtonCancelClass : ''),
                text: this.options.labelCancel };

            htmlObj = [
                { html: content },
                mode != 'modal' && mode != 'modal-ajax' && mode == 'prompt' && {
                    tag: 'form.' + this.options.baseClassName + '-form' + (this.options.additionalFormClass ? this.options.additionalFormClass : ''),
                    children: [
                        item.placeholder && { tag:     'label',
                          htmlFor: 'popupS-input',
                          text:    item.placeholder },
                        { tag:  'input#popupS-input',
                          type: 'text' }
                    ]
                },
                mode != 'modal' && mode != 'modal-ajax' && { tag: 'nav.' + this.options.baseClassName + '-buttons' + (this.options.additionalButtonHolderClass ? this.options.additionalButtonHolderClass : ''),
                  children:
                    (
                        (mode == 'prompt' || mode == 'confirm')
                            ? (!this.options.flagButtonReverse ? [btnCancel, btnOk] : [btnOk, btnCancel] )
                            : [btnOk]
                    )
                }
            ];

            content = _buildDOM({
                children:[
                    { tag: 'a#popupS-resetFocusBack.' + this.options.baseClassName + '-resetFocus',
                      href:'#',
                      text:'Reset Focus' },
                    (this.options.flagShowCloseBtn && {
                        tag: 'span#popupS-close.' + this.options.baseClassName + '-close' + (this.options.additionalCloseBtnClass ? this.options.additionalCloseBtnClass : ''),
                        html: this.options.closeBtn
                    }),
                    (title && {
                        tag:  'h5.' + this.options.baseClassName + '-title' + className,
                        text: title }),
                    { tag:      '.' + this.options.baseClassName + '-content' + className,
                      children: (contentObj && content || htmlObj) },
                    { tag:'a#popupS-resetFocus.' + this.options.baseClassName + '-resetFocus',
                      href:'#',
                      text:'Reset Focus'}
                ]
            });

            this._resetLayer();
            _appendChild(this.$layerEl.childNodes[0], content);
            this._appendPopup();
            this.$contentEl = this.$layerEl.getElementsByClassName(this.options.baseClassName + '-content')[0];

            this.$btnReset     = document.getElementById('popupS-resetFocus');
            this.$btnResetBack = document.getElementById('popupS-resetFocusBack');

            // handle reset focus link
            // this ensures that the keyboard focus does not
            // ever leave the dialog box until an action has
            // been taken
            _on(this.$btnReset, 'focus', this._resetEvent);
            _on(this.$btnResetBack, 'focus', this._resetEvent);

            // focus the first input in the layer Element
            _autoFocus(this.$layerEl);

            // make sure which buttons or input fields are defined for the EventListeners
            this.$btnOK = document.getElementById('popupS-button-ok') || undefined;
            this.$btnCancel = document.getElementById('popupS-button-cancel') || undefined;
            this.$input = document.getElementById('popupS-input') || undefined;
            if(typeof this.$btnOK !== "undefined")     _on(this.$btnOK, "click", this._okEvent);
            if(typeof this.$btnCancel !== "undefined") _on(this.$btnCancel, "click", this._cancelEvent);


            // eventlisteners for overlay and x
            if (this.options.flagShowCloseBtn)   _on(document.getElementById('popupS-close'), "click", this._cancelEvent);
            if (this.options.flagCloseByOverlay) _on(this.$overlayEl, "click", this._cancelEvent);

            // listen for keys
            if (this.options.flagCloseByEsc) _on(document.body, "keyup", this._keyEvent);

            // callback onOpen
            if(typeof this.callbacks.onOpen === "function") this.callbacks.onOpen.call(this);

        },
        _appendPopup : function(){
            // Determine the target Element and add the Element to the DOM
            this.$targetEl = this.options.appendLocation;
            _appendChild(this.$targetEl, this.$wrapEl);
            // append the element level style for overflow if the option was set.
            if ((this.$targetEl === (document.body || document.documentElement)) && this.options.flagBodyScroll === false) {
                _css(this.$targetEl, {
                    overflow: 'hidden'
                });
            }
            // after adding elements to the DOM, use computedStyle
            // to force the browser to recalc and recognize the elements
            // that we just added. This is so that our CSS Animation has a start point.
            if(window.getComputedStyle) window.getComputedStyle(this.$wrapEl, null).height;
            var classReg = function (className) {
                return new RegExp("(|\\s+)" + className + "(\\s+|$)");
            };
            // if the class *-open doesn't exists in the wrap Element append it.
            if (!(classReg(' ' + this.options.baseClassName + '-open').test(this.$wrapEl.className))) {
                this.$wrapEl.className += ' ' + this.options.baseClassName + '-open';
            }
            if (!(classReg(' ' + this.options.baseClassName + '-open').test(this.$layerEl.childNodes[0].className))) {
                this.$layerEl.childNodes[0].className += ' ' + this.options.baseClassName + '-open';
            }
        },
        _hide: function () {
            var self = this;
            // remove item from queue
            queue.splice(0,1);
            // check if last item in queue
            if (queue.length > 0) this._create();
            else{
                isOpen = false;

                var removeWrap = function() {
                    // remove the wrap element from the DOM
                    _removeElement(self.$wrapEl);
                    // remove the element level style for overflow if the option was set.
                    if ((self.$targetEl === (document.body || document.documentElement)) && self.options.flagBodyScroll === false) {
                        if (self.$targetEl.style.removeProperty) {
                            self.$targetEl.style.removeProperty('overflow');
                        } else {
                            self.$targetEl.style.removeAttribute('overflow');
                        }
                    }
                };

                var transitionDone = function(event) {
                    event.stopPropagation();
                    // unbind event so function only gets called once
                    _off(self.$wrapEl, transition.type, transitionDone);
                    // remove the Element from the DOM after Transition is Done
                    removeWrap();
                };

                var transitionDoneLayer = function(event) {
                    event.stopPropagation();
                    // unbind event so function only gets called once
                    _off(self.$layerEl, transition.type, transitionDone);
                };

                // removes the open class from the wrap & layer Element
                // and adds an EventListener to this Element
                // which removes it from the DOM after the Transition is done.

                this.$wrapEl.className = this.$wrapEl.className.replace(' ' + this.options.baseClassName + '-open', '');
                if (transition.supported){
                    _on(self.$wrapEl, transition.type, transitionDone);
                } else {
                    removeWrap();
                }
                this.$layerEl.childNodes[0].className = this.$layerEl.childNodes[0].className.replace(' ' + this.options.baseClassName + '-open', '');
                if (transition.supported) _on(self.$layerEl, transition.type, transitionDoneLayer);

            }
        },



        ///////////////
        //// Async ////
        ///////////////


        /**
         * sets the state of the loading Layer
         * and appends it to the Dom
         *
         * @param   {Bool}  state
         */
        _loading: function(state) {
            this.$loadingEl = _buildDOM({
                tag: 'div.' + this.options.baseClassName + '-loading.' + this.options.loader
            });
            if (state){
                this._resetLayer();
                _css(this.$layerEl.childNodes[0],{
                    height: '60px',
                    width: '60px',
                    borderRadius: '30px'
                });
                _appendChild(this.$layerEl.childNodes[0], this.$loadingEl);
                this._appendPopup();
            } else {
                _css(this.$layerEl.childNodes[0],{
                    height: null,
                    width: null,
                    borderRadius: null
                });
            }
        },
        /**
         * load Asynchronous Files
         * can be Images or Files via Ajax
         *
         * @param   {Object}    item
         */
        _loadContents: function(item) {
            var url = item.ajax.url,
                str = (typeof item.ajax.str != "undefined")? item.ajax.str : '',
                post = (typeof item.ajax.post != "undefined")? item.ajax.post : true,
                self = this;

            // Match image file
            if (url.match(R_IMG)) {//.exec(url) !== null
                // Create the image Element, not visible
                var imgElement = _buildDOM({
                    children: {
                        tag :   'img',
                        src :   url
                    }
                });
                this._loading(true);
                this._preLoadImage(imgElement, function(){
                    self._loading(false);
                    item.content = imgElement;
                    self._createPopup(item);
                });
            } else {
                // get url via ajax
                this._ajax(url, str, post, function(e){
                    // turn the result in a HTMLElement
                    var ajaxElement = _buildDOM({
                        html: this
                    });
                    // check if the newly created HTMLElement got any Images within it.
                    self._preLoadImage(ajaxElement, function(){
                        self._loading(false);
                        item.content = ajaxElement;
                        self._createPopup(item);
                    });
                }, function(){
                    //before Sending
                    self._loading(true);
                });
            }
        },
        _preLoadImage : function(parentNode, callback) {
            var items = _getElementsByTagName(parentNode, 'img');
            var i = items.length;
            var queue = i;
            var img;
            var self = this;

            while (i--){
                img = items[i];
                //in case the're already cached by the browser decrement queue
                if(img.complete) {
                    queue--;
                } else {
                    _on(img, 'load', complete);
                    _on(img, 'error', complete);
                }
            }
            //in case the're already cached by the browser
            !queue && complete();

            var complete = function(){
                if(--queue <= 0){
                    i = items.length;
                    while(i--){
                        img = items[i];
                        _off(img, 'load', complete);
                        _off(img, 'error', complete);
                    }
                    callback();
                }
            };
        },
        /**
         * ajax request
         * with callback and beforeSend
         *
         * @param   {String}    filename
         * @param   {String}    str
         * @param   {Bool}      post
         * @param   {Function}  callback
         * @param   {Function}  beforeSend
         */
        _ajax: function(filename, str, post, callback, beforeSend) {
            var ajax;
            if (window.XMLHttpRequest){
                ajax = new XMLHttpRequest();//IE7+, Firefox, Chrome, Opera, Safari
            } else if (ActiveXObject("Microsoft.XMLHTTP")){
                ajax = new ActiveXObject("Microsoft.XMLHTTP");//IE6/5
            }else if (ActiveXObject("Msxml2.XMLHTTP")){
                ajax = new ActiveXObject("Msxml2.XMLHTTP");//other
            }else{
                alert("Error: Your browser does not support AJAX.");
                return false;
            }
            ajax.onreadystatechange=function(){
                if (ajax.readyState == 4 && ajax.status == 200){
                    if (callback) callback.call(ajax.responseText);
                }
            };
            if(post === false) {
                ajax.open("GET", filename + str, true);
                ajax.send(null);
            } else {
                ajax.open("POST", filename, true);
                ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                ajax.send(str);
            }
            if(beforeSend) beforeSend.call();
            return ajax;
        },



        ////////////////
        //// Events ////
        ////////////////



        //ok event handler
        _okEvent: function(event) {
            // preventDefault
            if (typeof event.preventDefault !== "undefined") event.preventDefault();
            // call the callback onSubmit if one is defined. this references to _popupS
            if(typeof this.callbacks.onSubmit === "function") {
                if(typeof this.$input !== "undefined") {
                    this.callbacks.onSubmit.call(this, this.$input.value);
                } else {
                    this.callbacks.onSubmit.call(this);
                }
            }
            // hide popup and detach event handlers
            this._commonEvent();
        },
        // cancel event handler
        _cancelEvent: function(event) {
            if (typeof event.preventDefault !== "undefined") event.preventDefault();
            // call the callback onClose if one is defined. this references to _popupS
            if(typeof this.callbacks.onClose === "function") {
                this.callbacks.onClose.call(this);
            }
            this._commonEvent();
        },
        // common event handler (keyup, ok and cancel)
        _commonEvent: function() {
            // remove event handlers
            if(typeof this.$btnOK !== "undefined")     _off(this.$btnOK, "click", this._okEvent);
            if(typeof this.$btnCancel !== "undefined") _off(this.$btnCancel, "click", this._cancelEvent);
            if (this.options.flagShowCloseBtn)   _off(document.getElementById('popupS-close'), "click", this._cancelEvent);
            if (this.options.flagCloseByOverlay) _off(this.$overlayEl, "click", this._cancelEvent);
            if (this.options.flagCloseByEsc)     _off(document.body, "keyup", this._keyEvent);

            this._hide();
        },
        // reset focus to first item in the popup
        _resetEvent: function(event) {
            _autoFocus(this.$layerEl);
        },
        // keyEvent Listener for Enter and Escape
        _keyEvent: function(event) {
            var keyCode = event.keyCode;
            if(typeof this.$input !== "undefined" && keyCode === 13) this._okEvent(event);
            if(keyCode === 27) this._cancelEvent(event);
        },

    }

    /**
     * context binding
     * @param   {Function}  ctx     context
     * @param   {Function}  fn      function
     */
    function _bind(ctx, fn) {
        var args = [].slice.call(arguments, 2);
        return  fn.bind ? fn.bind.apply(fn, [ctx].concat(args)) : function () {
            return fn.apply(ctx, args.concat([].slice.call(arguments)));
        };
    }
    /**
     * Object iterator
     *
     * @param  {Object|Array}  obj
     * @param  {Function}      iterator
     */
    function _each(obj, iterator) {
        if (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    iterator(obj[key], key, obj);
                }
            }
        }
    }
    /**
     * Copy all of the properties in the source objects over to the destination object
     *
     * @param   {...Object}     out
     *
     * @return  {Object}
     */
    function _extend(out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }

        return out;
    }
    /**
     * Bind events to elements
     *
     * @param  {HTMLElement}    el
     * @param  {Event}          event
     * @param  {Function}       fn
     */
    function _on(el, event, fn) {
        if (typeof el.addEventListener === "function") {
            el.addEventListener(event, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent("on" + event, fn);
        }
    }
    /**
     * Unbind events from element
     *
     * @param  {HTMLElement}    el
     * @param  {Event}          event
     * @param  {Function}       fn
     */
    function _off(el, event, fn) {
        if (typeof el.removeEventListener === "function") {
            el.removeEventListener(event, fn, false);
        } else if (el.detachEvent) {
            el.detachEvent("on" + event, fn);
        }
    }
    /**
     * css recursion
     *
     * @param   {HTMLElement}   el
     * @param   {Object|String} prop
     * @param   {String}        [val]
     */
    function _css(el, prop, val) {
        if (el && el.style && prop) {
            if (prop instanceof Object) {
                for (var name in prop) {
                    _css(el, name, prop[name]);
                }
            } else {
                el.style[prop] = val;
            }
        }
    }
    /**
     * Selector RegExp
     *
     * @const   {RegExp}
     */
    // orig: /^(\w+)?(#\w+)?((?:\.[\w_-]+)*)/i;
    var R_SELECTOR = /^(\w+)?(#[\w_-]+)?((?:\.[\w_-]+)*)/i;

    /**
     * build DOM Nodes
     *
     * @example
     *  _buildDOM({
     *      tag:'div#id.class.class2',
     *      css:{
     *          opacity:'1',
     *          width:'100px'
     *      },
     *      text:'test',
     *      html:'<p>Hello</p>',
     *      children:[{
     *          tag:'div#id_child.class.class2',
     *          css:{opacity:'1', height:'200px'},
     *          text:'test',
     *          html:'<p>World</p>'
     *      }]
     *  });
     *
     * @param   {String|Object} spec
     *
     * @return  {HTMLElement}
     */
    function _buildDOM(spec) {
        // Spec Defaults
        if (spec === null) {
            spec = 'div';
        }
        if (typeof spec === 'string') {
            spec = {
                tag: spec
            };
        }
        var el, classSelector;
        var fragment = document.createDocumentFragment();
        var children = spec.children;
        var selector = R_SELECTOR.exec(spec.tag || '');

        delete spec.children;

        spec.tag = selector[1] || 'div';
        spec.id = spec.id || (selector[2] || '').substr(1);
        // split ClassNames
        classSelector = (selector[3] || '').split('.');
        classSelector[0] = (spec.className || '');
        spec.className = classSelector.join(' ');


        el = document.createElement(spec.tag);
        _appendChild(fragment, el);
        delete spec.tag;

        // For every
        // key => spec[key];
        _each(spec, function(value, key) {
            if (key === 'css') {
                _css(el, spec.css);
            } else if (key === 'text') {
                (value !== null) && _appendChild(el, document.createTextNode(value));
            } else if (key === 'html') {
                (value !== null) && (el.innerHTML = value);
            } else if (key in el) {
                try {
                    el[key] = value;
                } catch (e) {
                    el.setAttribute(key, value);
                }
            } else if (/^data-/.test(key)) {
                el.setAttribute(key, value);
            }
        });
        // if the children is already an HTML Element, append it to el
        if (children && children.appendChild) {
            _appendChild(el, children);
        } else if (children) {
            if (children instanceof Array) {
                _each(children, function(value, key) {
                    if(value instanceof Object) {
                        _appendChild(el, _buildDOM(value));
                    }
                });
            } else if (children instanceof Object) {
                _appendChild(el, _buildDOM(children));
            }
        }
        return el;
    }
    /**
     * appendChild
     *
     * @param   {HTMLElement}   parent
     * @param   {HTMLElement}   el
     */
    function _appendChild(parent, el) {
        try {
            parent && el && parent.appendChild(el);
        } catch (e) {}
    }
    /**
     * Focus First Item in Parent Node
     * submit > text,password > button
     *
     * @param  {HTMLElement}    parentNode
     */
    function _autoFocus(parentNode) {
        var items = _getElementsByTagName(parentNode, 'input');
        var i = 0;
        var n = items.length;
        var el, element;

        for (; i < n; i++) {
            el = items[i];

            if (el.type === 'submit') {
                !element && (element = el);
            } else if (!/hidden|check|radio/.test(el.type) && el.value === '') {
                element = el;
                break;
            }
        }

        if (!element) {
            element = _getElementsByTagName(parentNode, 'button')[0];
        }

        try {
            element.focus();
        } catch (err) {}
    }
    /**
     * get Elements with Tag () from Parent
     *
     * @param   {HTMLElement}  el
     * @param   {String}       name
     *
     * @return  {NodeList}
     */
    function _getElementsByTagName(el, name) {
        return el.getElementsByTagName(name);
    }
    /**
     * remove Element from Parent
     *
     * @param   {HTMLElement}   el
     */
    function _removeElement(el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }

    // Instantiate a PopupS Object
    var popupS = new PopupS();

    // Public methods
    popupS.window = function(params) {
        this._open(params);
    };
    popupS.alert = function(params) {
        params = _extend(params, {mode: 'alert'});
        this._open(params);
    };
    popupS.confirm = function(params) {
        params = _extend(params, {mode: 'confirm'});
        this._open(params);
    };
    popupS.prompt = function(params) {
        params = _extend(params, {mode: 'prompt'});
        this._open(params);
    };
    popupS.modal = function(params) {
        params = _extend(params, {mode: 'modal'});
        this._open(params);
    };
    popupS.ajax = function(params) {
        params = _extend(params, {mode: 'modal-ajax'});
        this._open(params);
    };

    // Export
    return popupS;
}));

/***/ }),

/***/ "./src/popupS.css":
/*!************************!*\
  !*** ./src/popupS.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popupS_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popupS.css */ "./node_modules/css-loader/dist/cjs.js!./src/popupS.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popupS_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popupS_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popupS_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popupS_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pretty-checkbox.min.css":
/*!*************************************!*\
  !*** ./src/pretty-checkbox.min.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./pretty-checkbox.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/pretty-checkbox.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/inputFieldMethods.js":
/*!******************************************!*\
  !*** ./src/modules/inputFieldMethods.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertNewTask": () => (/* binding */ insertNewTask),
/* harmony export */   "popupHolder": () => (/* binding */ popupHolder),
/* harmony export */   "resetInputs": () => (/* binding */ resetInputs)
/* harmony export */ });
/* harmony import */ var popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popups */ "./node_modules/popups/dist/popupS.js");
/* harmony import */ var popups__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(popups__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _taskMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMethods */ "./src/modules/taskMethods.js");
/* harmony import */ var _sidebarMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebarMethods */ "./src/modules/sidebarMethods.js");
/* harmony import */ var _renderMethods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderMethods */ "./src/modules/renderMethods.js");
/* harmony import */ var _sound_scribble_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sound/scribble.mp3 */ "./src/sound/scribble.mp3");
/* eslint-disable import/no-extraneous-dependencies */







const inputTextField = document.querySelector('.inputText');
const allBtn = document.querySelector('#allLi');

let type;
let date;
let time;

// Reset inputField inputs
function resetInputs() {
  inputTextField.value = '';
  type = undefined;
  date = undefined;
  time = undefined;
}

function checkInvalidInput(string) {
  const trimmedString = string.trim();
  const check = /^[a-zA-Z0-9 ."'!#$%&]*$/.test(string);

  if (!trimmedString || !check) {
    return false;
  }
  return true;
}

// Task Creating Dom Update Function
function insertNewTask() {
  const inputName = String(inputTextField.value);
  const check = checkInvalidInput(inputName);

  if (!check) {
    alert('Check if there are non letters/numbers, or if the textfield is empty');
    return;
  }

  const scribble = new Audio(_sound_scribble_mp3__WEBPACK_IMPORTED_MODULE_4__);
  scribble.play();

  (0,_taskMethods__WEBPACK_IMPORTED_MODULE_1__.createTask)(inputName, type, date, time);
  resetInputs();
  (0,_sidebarMethods__WEBPACK_IMPORTED_MODULE_2__["default"])();
  allBtn.classList.add('selected');
  (0,_renderMethods__WEBPACK_IMPORTED_MODULE_3__.setMode)('all');
  (0,_renderMethods__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

// Object Container for Popup Modules
const popupHolder = {
  type: () => {
    popups__WEBPACK_IMPORTED_MODULE_0___default().window({
      mode: 'confirm',
      content: `
    <div class="popupContainer">
      <label>Type</label>
      <select class="popupSelect">
        <option value='general'>General</option>
        <option value='personal'>Personal</option>
        <option value='work'>Work</option>
        <option value='social'>Social</option>
      </select>
    </div>
    `,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupSelect');
        if (type) { input.value = type; }
      },
      onSubmit: () => {
        const input = document.querySelector('.popupSelect');
        type = input.value;
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
  date: () => {
    popups__WEBPACK_IMPORTED_MODULE_0___default().window({
      mode: 'confirm',
      content: `
      <div class="popupContainer">
        <label>Date</label>
        <input type="date" class="popupDate">
        <button class="clearBtn">Clear</button>
      </div>
    `,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupDate');
        const clearBtn = document.querySelector('.clearBtn');
        if (date) { input.value = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_5__["default"])(date, 'yyyy-MM-dd'); } // Formats date to be compatible as date input Value
        clearBtn.addEventListener('click', () => { input.value = ''; });
      },
      onSubmit: () => {
        const input = document.querySelector('.popupDate');
        if (input.value) { date = new Date(input.value); }
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
  time: () => {
    popups__WEBPACK_IMPORTED_MODULE_0___default().window({
      mode: 'confirm',
      content: `
      <div class="popupContainer">
        <label>Time</label>
        <input type="time" class="popupTime">
        <button class="clearBtn">Clear</button>
      </div>
      `,
      labelOk: 'Confirm',
      onOpen: () => {
        const input = document.querySelector('.popupTime');
        input.value = time;
      },
      onSubmit: () => {
        const input = document.querySelector('.popupTime');
        time = input.value;
      },
      additionalButtonHolderClass: 'popupButtons',
      additionalButtonCancelClass: 'cancelBtn',
      additionalButtonOkClass: 'confirmBtn',
    });
  },
};


/***/ }),

/***/ "./src/modules/renderMethods.js":
/*!**************************************!*\
  !*** ./src/modules/renderMethods.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render),
/* harmony export */   "getMode": () => (/* binding */ getMode),
/* harmony export */   "setMode": () => (/* binding */ setMode)
/* harmony export */ });
/* harmony import */ var popups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popups */ "./node_modules/popups/dist/popupS.js");
/* harmony import */ var popups__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(popups__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _sound_bell_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sound/bell.mp3 */ "./src/sound/bell.mp3");
/* harmony import */ var _sound_scribble_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sound/scribble.mp3 */ "./src/sound/scribble.mp3");
/* harmony import */ var _images_starFill_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/starFill.png */ "./src/images/starFill.png");
/* harmony import */ var _images_starNoFill_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/starNoFill.png */ "./src/images/starNoFill.png");
/* harmony import */ var _taskMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskMethods */ "./src/modules/taskMethods.js");
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */








// mode & array lists
let mode = 'all';
const taskArray = (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__["default"])();
const completeTaskArray = (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.getCompleteTasks)();
const overdueArray = (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.getOverdueArray)();

// mode getter & setter
function getMode() { return mode; }
function setMode(string) { mode = string; }

// main container that houses tasks
const taskContainer = document.querySelector('.taskContainer');
const title = document.querySelector('.contentTitle');

const addTaskCheckbox = (array, i) => { // Checkbox render
  // DOM Elements
  const mainDiv = document.createElement('div');
  const input = document.createElement('input');
  const subDiv = document.createElement('div');
  const label = document.createElement('label');
  mainDiv.className = 'pretty p-default p-curve p-bigger';
  input.type = 'checkbox';
  subDiv.classList.add('state');
  mainDiv.append(input, subDiv);
  subDiv.append(label);

  // EventListenerSetup
  const bell = new Audio(_sound_bell_mp3__WEBPACK_IMPORTED_MODULE_1__);
  const scribble = new Audio(_sound_scribble_mp3__WEBPACK_IMPORTED_MODULE_2__);
  if (array === taskArray || array === completeTaskArray) { // Event Listener All & Completed
    if (array === completeTaskArray) { input.checked = true; }
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        bell.play();
        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.taskComplete)(array, i);
        setTimeout(() => {
          render();
        }, 150);
      } else if (!e.target.checked) {
        scribble.play();
        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.taskUncomplete)(i);
        setTimeout(() => {
          render();
        }, 150);
      }
    });
  } else if (array === overdueArray) { // Event Listener Overdue
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        scribble.play();
        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.remakeOverdueTask)(array[i]);
        array.splice(i, 1);
        setTimeout(() => {
          render();
        }, 150);
      }
    });
  } else {
    input.addEventListener('change', (e) => { // Event Listener Time & Type Filters
      if (e.target.checked) {
        bell.play();
        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.taskComplete)(array, i);
        setTimeout(() => {
          render();
        }, 150);
      }
    });
  }

  // Stop checkbox opening property edit popup
  mainDiv.addEventListener('click', (e) => { e.stopPropagation(); });
  return mainDiv;
};

const addTaskContent = (array, i) => { // Task Information Render
  // DOM Elements
  const upperContent = document.createElement('div');
  const lowerContent = document.createElement('div');
  upperContent.classList.add('upperContent', 'whiteFont');
  lowerContent.classList.add('lowerContent', 'whiteFont');

  // Insert Content
  upperContent.innerHTML = `${array[i].name}`;
  lowerContent.innerHTML = `${array[i].getType()} - ${array[i].getFormattedDate()} - ${array[i].getFormattedTime()}`;
  if (array[i].notes) { lowerContent.innerHTML += ' - Note'; }

  // If task is completed, add completed styling
  if (array === completeTaskArray) {
    upperContent.classList.add('completed');
    lowerContent.classList.add('completed');
  }

  return upperContent.outerHTML + lowerContent.outerHTML;
};

const addTaskPriorityStar = (array, i) => { // Priority Star Render
  // DOM Elements
  const image = new Image();
  image.src = array[i].priority ? _images_starFill_png__WEBPACK_IMPORTED_MODULE_3__ : _images_starNoFill_png__WEBPACK_IMPORTED_MODULE_4__;
  image.classList.add('star');

  if (array !== overdueArray && array !== completeTaskArray) {
    image.addEventListener('click', (e) => {
      e.stopPropagation();
      array[i].setProperty('priority');
      e.target.src = (array[i].priority) ? _images_starFill_png__WEBPACK_IMPORTED_MODULE_3__ : _images_starNoFill_png__WEBPACK_IMPORTED_MODULE_4__;
    });
  }

  return image;
};

const renderTask = (array, i) => { // Task Item Render
  // DOM Elements
  const mainContainer = document.createElement('div');
  const checkboxContainer = document.createElement('div');
  const contentContainer = document.createElement('div');
  const priorityContainer = document.createElement('div');
  const cancelContainer = document.createElement('div');
  mainContainer.classList.add('itemContainer');
  checkboxContainer.classList.add('checkboxContainer');
  contentContainer.classList.add('contentContainer');
  priorityContainer.classList.add('priorityContainer', 'preventSelect');
  cancelContainer.classList.add('cancelContainer', 'preventSelect');
  mainContainer.append(checkboxContainer, contentContainer, priorityContainer, cancelContainer);

  // Add content to DOM elements
  checkboxContainer.appendChild(addTaskCheckbox(array, i));
  contentContainer.innerHTML = addTaskContent(array, i);
  priorityContainer.appendChild(addTaskPriorityStar(array, i));
  cancelContainer.innerHTML = '&#10005;';

  // Task Properties Popup
  if (array !== overdueArray && array !== completeTaskArray) {
    mainContainer.addEventListener('click', () => {
      popups__WEBPACK_IMPORTED_MODULE_0___default().window({
        mode: 'confirm',
        content: `
          <div class="mainPopupContainer">
            <div class="popupInputfield">
              <label class="popupLabel">Name</label>
              <input type="text" class="popupName" autocomplete="__away">
            </div>
            <div class="popupInputfield">
              <label class="popupLabel">Type</label>
              <select class="popupSelect">
                <option value='general'>General</option>
                <option value='personal'>Personal</option>
                <option value='work'>Work</option>
                <option value='social'>Social</option>
              </select>
            </div>
            <div class="popupInputfield">
              <label class="popupLabel">Date</label>
              <input type="date" class="popupDate">
            </div>
            <div class="popupInputfield">
              <label class="popupLabel">Time</label>
              <input type="time" class="popupTime">
            </div>
            <div class="popupInputfield">
              <label class="popupLabel">Notes</label>
              <textarea class="popupTextArea"></textarea>
            </div>
          </div>
          `,
        labelOk: 'Confirm',
        additionalButtonCancelClass: 'cancelBtn',
        additionalButtonOkClass: 'confirmBtn',
        additionalButtonHolderClass: 'popupButtons',
        onOpen: () => {
          const name = document.querySelector('.popupName');
          const type = document.querySelector('.popupSelect');
          const date = document.querySelector('.popupDate');
          const time = document.querySelector('.popupTime');
          const notes = document.querySelector('.popupTextArea');

          name.value = array[i].name;
          type.value = array[i].type;
          date.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(array[i].getDateTime(), 'yyyy-MM-dd'); // Set Compatible Date Value
          time.value = array[i].time;
          notes.value = array[i].notes;
        },
        onSubmit: () => {
          const name = document.querySelector('.popupName');
          const type = document.querySelector('.popupSelect');
          const date = document.querySelector('.popupDate');
          const time = document.querySelector('.popupTime');
          const notes = document.querySelector('.popupTextArea');

          array[i].setProperty('name', name.value);
          array[i].setProperty('type', type.value);
          array[i].setProperty('date', new Date(date.value));
          array[i].setProperty('time', time.value);
          array[i].setProperty('notes', notes.value);
          render();
        },
      });
    });
  }

  // Remove Task Button
  cancelContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    if (array === taskArray || array === completeTaskArray || array === overdueArray) {
      array.splice(i, 1);
    } else {
      taskArray.splice(array[i].getIndex(), 1);
    }
    render();
  });

  return mainContainer;
};

let completeShow = false;

const renderArray = (string) => { // Render Array Type
  let array;
  let textContent;

  // Get Array Based on Input String
  if (string === 'all') {
    array = taskArray;
  } else if (string === 'completed') {
    array = completeTaskArray;
  } else if (string === 'overdue') {
    array = overdueArray;
  } else {
    array = (0,_taskMethods__WEBPACK_IMPORTED_MODULE_5__.getTypeTasks)(string);
  }

  function capitalizeFirstLetter(inputString) {
    const firstLetterUpperCase = inputString[0].toUpperCase();
    const restOfWord = inputString.substr(1);
    const result = firstLetterUpperCase + restOfWord;
    return result;
  }

  // Set Text Content based on Input String Type
  switch (string) {
    case 'completed':
      textContent = 'Tasks Completed';
      break;
    case 'overdue':
      textContent = 'Tasks Overdue';
      break;
    default:
      textContent = `Tasks Due - ${capitalizeFirstLetter(string)}`;
      break;
  }

  // Add Task Container Contents
  if (array.length) {
    title.textContent = textContent;
    for (let i = 0; i < array.length; i += 1) {
      taskContainer.append(renderTask(array, i));
    }
  } else {
    const subTitle = document.createElement('h2');
    title.textContent = textContent;
    subTitle.classList.add('taskContainerSubTitle');
    subTitle.textContent = 'None';
    taskContainer.append(subTitle);
  }

  // If All Filter Render Completed Task Array Underneath
  if (string === 'all') {
    if (completeTaskArray.length) {
      const headerDiv = document.createElement('div');
      const completeTitle = document.createElement('h2');
      const showButton = document.createElement('button');
      headerDiv.classList.add('completeHeader');
      completeTitle.classList.add('completeTaskContainerTitle');
      showButton.classList.add('completeShowBtn', 'show');
      completeTitle.textContent = 'Completed Tasks';
      showButton.textContent = 'Show';
      headerDiv.append(completeTitle, showButton);
      taskContainer.append(headerDiv);

      // If completeShow is true during render, show complete items;
      if (completeShow) {
        showButton.textContent = 'Hide';
        for (let i = 0; i < completeTaskArray.length; i += 1) {
          taskContainer.append(renderTask(completeTaskArray, i));
        }
      }

      // Show / Hide Completed Items click event
      showButton.addEventListener('click', () => {
        if (showButton.textContent === 'Show') {
          completeShow = !completeShow;
          showButton.textContent = 'Hide';
          for (let i = 0; i < completeTaskArray.length; i += 1) {
            taskContainer.append(renderTask(completeTaskArray, i));
          }
        } else {
          completeShow = !completeShow;
          showButton.textContent = 'Show';
          for (let i = 0; i < completeTaskArray.length; i += 1) {
            const { length } = taskContainer.children;
            taskContainer.children[length - 1].remove();
          }
        }
      });
    }
  }
};

function render() { // Render Call Function
  taskContainer.innerHTML = '';
  renderArray(mode);
}

const updateItems = () => { // Overdue Checker
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
      render();
    }
  }
};

setInterval(() => { // Overdue Interval Checker
  updateItems();
}, 1);


/***/ }),

/***/ "./src/modules/sidebarMethods.js":
/*!***************************************!*\
  !*** ./src/modules/sidebarMethods.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSelectedClass),
/* harmony export */   "selectFilter": () => (/* binding */ selectFilter)
/* harmony export */ });
/* harmony import */ var _sound_click_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound/click.mp3 */ "./src/sound/click.mp3");
/* harmony import */ var _renderMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMethods */ "./src/modules/renderMethods.js");



function removeSelectedClass() {
  const categoryLists = document.querySelectorAll('.categoryList');
  const combinedCategoryList = [...categoryLists[0].children]
    .concat([...categoryLists[1].children]);
  combinedCategoryList.forEach((item) => { item.classList.remove('selected'); });
}

function selectFilter(e, string) {
  const audio = new Audio(_sound_click_mp3__WEBPACK_IMPORTED_MODULE_0__);
  audio.play();
  removeSelectedClass();
  e.target.classList.add('selected');
  (0,_renderMethods__WEBPACK_IMPORTED_MODULE_1__.setMode)(string);
  (0,_renderMethods__WEBPACK_IMPORTED_MODULE_1__["default"])();
}


/***/ }),

/***/ "./src/modules/taskMethods.js":
/*!************************************!*\
  !*** ./src/modules/taskMethods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ getTaskArray),
/* harmony export */   "getCompleteTasks": () => (/* binding */ getCompleteTasks),
/* harmony export */   "getLaterTasks": () => (/* binding */ getLaterTasks),
/* harmony export */   "getOverdueArray": () => (/* binding */ getOverdueArray),
/* harmony export */   "getTodayTasks": () => (/* binding */ getTodayTasks),
/* harmony export */   "getTomorrowTasks": () => (/* binding */ getTomorrowTasks),
/* harmony export */   "getTypeTasks": () => (/* binding */ getTypeTasks),
/* harmony export */   "remakeOverdueTask": () => (/* binding */ remakeOverdueTask),
/* harmony export */   "taskComplete": () => (/* binding */ taskComplete),
/* harmony export */   "taskUncomplete": () => (/* binding */ taskUncomplete)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* eslint-disable no-unused-vars */

// eslint-disable-next-line import/no-extraneous-dependencies


/* eslint-disable func-names */
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

const taskArray = [];
const completeTaskArray = [];
const overdueArray = [];
const proto = {
  setProperty(property, input) {
    switch (property) {
      case 'name':
        this.name = input;
        break;
      case 'priority':
        this.priority = !this.priority;
        break;
      case 'type':
        if (input === 'personal' || input === 'work' || input === 'social' || input === 'general') { this.type = input; }
        break;
      case 'date':
        this.date = input;
        break;
      case 'time':
        this.time = input;
        break;
      case 'notes':
        this.notes = input;
        break;
      case 'status':
        this.status = input;
        break;
      default:
        break;
    }
  },

  getHourMinute() {
    const [hourString, minuteString] = this.time.split(':');
    return { hourString, minuteString };
  },

  getDateTime() {
    const { hourString } = this.getHourMinute(this.time);
    const { minuteString } = this.getHourMinute(this.time);
    const dateTimeCombined = new Date(this.date);
    dateTimeCombined.setHours(hourString, minuteString, 0, 0);
    return dateTimeCombined;
  },

  getFormattedDate() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getDateTime(), 'P');
  },

  getFormattedTime() {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getDateTime(), 'p');
  },

  getType() {
    let result;
    switch (this.type) {
      case 'social':
        result = 'Social';
        break;
      case 'work':
        result = 'Work';
        break;
      case 'personal':
        result = 'Personal';
        break;
      default:
        result = 'General';
        break;
    }
    return result;
  },

  getIndex() {
    return taskArray.indexOf(this);
  },
};

window.onbeforeunload = function () {
  localStorage.setObj('taskArray', taskArray);
  localStorage.setObj('completeTaskArray', completeTaskArray);
  localStorage.setObj('overdueArray', overdueArray);
};

const updateItems = () => {
  for (let i = 0; i < taskArray.length; i += 1) {
    if (taskArray[i].getDateTime() <= new Date()) {
      overdueArray.push(taskArray[i]);
      taskArray.splice(i, 1);
    }
  }
};

const clearArray = (array) => {
  while (array.length > 0) {
    array.pop();
  }
};

const loadTaskArrays = (() => {
  let StorageTaskArray = localStorage.getObj('taskArray');
  let StorageCompleteTaskArray = localStorage.getObj('completeTaskArray');
  let StorageOverdueTaskArray = localStorage.getObj('overdueArray');

  if (!StorageTaskArray) {
    StorageTaskArray = [];
  }

  if (!StorageCompleteTaskArray) {
    StorageCompleteTaskArray = [];
  }

  if (!StorageOverdueTaskArray) {
    StorageOverdueTaskArray = [];
  }

  if (StorageTaskArray.length > 0) {
    clearArray(taskArray);
    for (let i = 0; i < StorageTaskArray.length; i += 1) {
      const date = new Date(StorageTaskArray[i].date);
      StorageTaskArray[i].date = date;
      Object.setPrototypeOf(StorageTaskArray[i], proto);
      taskArray[i] = StorageTaskArray[i];
    }
  }

  if (StorageCompleteTaskArray.length > 0) {
    clearArray(completeTaskArray);
    for (let i = 0; i < StorageCompleteTaskArray.length; i += 1) {
      const date = new Date(StorageCompleteTaskArray[i].date);
      StorageCompleteTaskArray[i].date = date;
      Object.setPrototypeOf(StorageCompleteTaskArray[i], proto);
      completeTaskArray[i] = StorageCompleteTaskArray[i];
    }
  }

  if (StorageOverdueTaskArray.length > 0) {
    clearArray(overdueArray);
    for (let i = 0; i < StorageOverdueTaskArray.length; i += 1) {
      const date = new Date(StorageOverdueTaskArray[i].date);
      StorageOverdueTaskArray[i].date = date;
      Object.setPrototypeOf(StorageOverdueTaskArray[i], proto);
      overdueArray[i] = StorageOverdueTaskArray[i];
    }
  }
  updateItems();
})();

const Task = (name, type, date, time, notes, status) => ({
  name, priority: false, type, date, time, notes, status,
});

function createTask(inputName, inputType, inputDate, inputTime, inputNotes) {
  const name = inputName;
  const type = inputType || 'general';
  const notes = (inputNotes === undefined) ? '' : inputNotes;

  let date;
  let time;
  if (!inputDate && !inputTime) {
    date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), 1);
  } else if (!inputDate && inputTime) {
    date = new Date();
  } else {
    date = inputDate;
  }

  if (inputTime) {
    time = inputTime;
  } else if (!inputTime && !inputDate) {
    time = '00:00';
  } else if (!inputTime && inputDate) {
    time = '12:00';
  }

  const task = Task(name, type, date, time, notes);
  Object.setPrototypeOf(task, proto);
  task.date.setHours(0, 0, 0);
  taskArray.push(task);
}

function remakeOverdueTask(task) {
  const { name } = task;
  const { type } = task;
  const { priority } = task;
  const { notes } = task;

  console.log(name, type, priority, notes);

  const newTask = createTask(name, type, undefined, undefined, notes);
  if (priority) { task.setProperty('priority'); }
}

const compareDate = (a, b) => {
  if (a.getDateTime() > b.getDateTime()) {
    return 1;
  } if (a.getDateTime() < b.getDateTime()) {
    return -1;
  }
  return 0;
};

function taskComplete(array, index) {
  const arrayItem = array[index];
  array[index].setProperty('status', true);
  taskArray.splice(arrayItem.getIndex(), 1);
  completeTaskArray.push(arrayItem);
}

function taskUncomplete(index) {
  const arrayItem = completeTaskArray[index];
  completeTaskArray[index].setProperty('status', false);
  completeTaskArray.splice(index, 1);
  taskArray.push(arrayItem);
}

function getCompleteTasks() { return completeTaskArray.sort(compareDate); }

function getTodayTasks() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const todayTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime >= today && taskDateTime < tomorrow) {
      return true;
    }
    return false;
  });

  return todayTasks.sort(compareDate);
}

function getTaskArray() { return taskArray; }

function getOverdueArray() { return overdueArray; }

function getTomorrowTasks() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowTasks = taskArray.filter((task) => {
    const taskDateTime = task.getDateTime();
    if (taskDateTime.getFullYear() === tomorrow.getFullYear()
      && taskDateTime.getMonth() === tomorrow.getMonth()
      && taskDateTime.getDate() === tomorrow.getDate()) {
      return true;
    }
    return false;
  });

  return tomorrowTasks.sort(compareDate);
}

function getLaterTasks() {
  const today = new Date();
  const tomorrowDate = new Date(today);
  tomorrowDate.setDate(tomorrowDate.getDate() + 2);
  tomorrowDate.setHours(0, 0, 0);

  const laterTasks = taskArray.filter((task) => task.getDateTime() > tomorrowDate);

  return laterTasks.sort(compareDate);
}

function getTypeTasks(string) {
  let result;
  switch (string) {
    case 'personal':
      result = taskArray.filter((task) => task.type === 'personal');
      break;
    case 'work':
      result = taskArray.filter((task) => task.type === 'work');
      break;
    case 'social':
      result = taskArray.filter((task) => task.type === 'social');
      break;
    case 'today':
      result = getTodayTasks();
      break;
    case 'tomorrow':
      result = getTomorrowTasks();
      break;
    case 'later':
      result = getLaterTasks();
      break;
    default:
      result = taskArray;
      break;
  }
  return result.sort(compareDate);
}


/***/ }),

/***/ "./src/fonts/Oswald-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Oswald-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "46d7853f0185f6bf0c93.ttf";

/***/ }),

/***/ "./src/images/date.png":
/*!*****************************!*\
  !*** ./src/images/date.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cafac57b486b1ef4d6ab.png";

/***/ }),

/***/ "./src/images/edit.png":
/*!*****************************!*\
  !*** ./src/images/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f525eb121c8f649d416a.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "645185f93127163bf33e.png";

/***/ }),

/***/ "./src/images/starFill.png":
/*!*********************************!*\
  !*** ./src/images/starFill.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "78446fc9d731d292dbae.png";

/***/ }),

/***/ "./src/images/starNoFill.png":
/*!***********************************!*\
  !*** ./src/images/starNoFill.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8d4edc15419da8f9ffb.png";

/***/ }),

/***/ "./src/images/time.png":
/*!*****************************!*\
  !*** ./src/images/time.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a63ec5ca44a2b76c14c1.png";

/***/ }),

/***/ "./src/sound/bell.mp3":
/*!****************************!*\
  !*** ./src/sound/bell.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fd72a8ccaab6cb336088.mp3";

/***/ }),

/***/ "./src/sound/click.mp3":
/*!*****************************!*\
  !*** ./src/sound/click.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f139b396a1194e8727a.mp3";

/***/ }),

/***/ "./src/sound/scribble.mp3":
/*!********************************!*\
  !*** ./src/sound/scribble.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "657c0bc6d1a7849d7263.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _popupS_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popupS.css */ "./src/popupS.css");
/* harmony import */ var _pretty_checkbox_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pretty-checkbox.min.css */ "./src/pretty-checkbox.min.css");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.png */ "./src/images/edit.png");
/* harmony import */ var _images_date_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/date.png */ "./src/images/date.png");
/* harmony import */ var _images_time_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/time.png */ "./src/images/time.png");
/* harmony import */ var _modules_renderMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/renderMethods */ "./src/modules/renderMethods.js");
/* harmony import */ var _modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/inputFieldMethods */ "./src/modules/inputFieldMethods.js");
/* harmony import */ var _modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sidebarMethods */ "./src/modules/sidebarMethods.js");












const logoImg = document.querySelector('.logoImg');
const typeIcon = document.querySelector('.typeIcon');
const dateIcon = document.querySelector('.dateIcon');
const timeIcon = document.querySelector('.timeIcon');
logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_3__;
typeIcon.src = _images_edit_png__WEBPACK_IMPORTED_MODULE_4__;
dateIcon.src = _images_date_png__WEBPACK_IMPORTED_MODULE_5__;
timeIcon.src = _images_time_png__WEBPACK_IMPORTED_MODULE_6__;

window.onload = (0,_modules_renderMethods__WEBPACK_IMPORTED_MODULE_7__["default"])();

// --------------------- Sidebar Script -------------------------

const allBtn = document.querySelector('#allLi');
const personalBtn = document.querySelector('#personalLi');
const workBtn = document.querySelector('#workLi');
const socialBtn = document.querySelector('#socialLi');
const todayBtn = document.querySelector('#todayLi');
const tomorrowBtn = document.querySelector('#tomorrowLi');
const laterBtn = document.querySelector('#laterLi');
const completedBtn = document.querySelector('#completedLi');
const overdueBtn = document.querySelector('#overdueLi');

// Add event listeners that filter tasks
allBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'all'); });
personalBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'personal'); });
workBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'work'); });
socialBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'social'); });
todayBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'today'); });
tomorrowBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'tomorrow'); });
laterBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'later'); });
completedBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'completed'); });
overdueBtn.addEventListener('click', (e) => { (0,_modules_sidebarMethods__WEBPACK_IMPORTED_MODULE_9__.selectFilter)(e, 'overdue'); });

// ------------------ InputContainer Script ------------------

// Add inputField task creating event listeners
const addButton = document.querySelector('.addButton');
const inputTextField = document.querySelector('.inputText');
addButton.addEventListener('click', () => { if (inputTextField.value.length > 0) { (0,_modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__.insertNewTask)(); } });
inputTextField.addEventListener('keypress', (e) => { if (e.key === 'Enter' && inputTextField.value.length > 0) { (0,_modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__.insertNewTask)(); } });

// Add inputField text placeholder event listeners that change text
inputTextField.addEventListener('focus', () => { inputTextField.placeholder = 'Try adding a task'; });
inputTextField.addEventListener('focusout', () => { inputTextField.placeholder = 'Add a task'; });

// Add Popup Event Listeners
const typeInput = document.querySelector('.typeIcon');
const dateInput = document.querySelector('.dateIcon');
const timeInput = document.querySelector('.timeIcon');
typeInput.addEventListener('click', _modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__.popupHolder.type);
dateInput.addEventListener('click', _modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__.popupHolder.date);
timeInput.addEventListener('click', _modules_inputFieldMethods__WEBPACK_IMPORTED_MODULE_8__.popupHolder.time);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsZUFBZSxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsc0NBQXNDLDRCQUE0QixxREFBcUQsR0FBRyxPQUFPLGdCQUFnQixpQkFBaUIsNEJBQTRCLEdBQUcsVUFBVSxvQkFBb0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxHQUFHLFVBQVUsNkJBQTZCLHNCQUFzQix5QkFBeUIsc0JBQXNCLEdBQUcsOENBQThDLGlDQUFpQyx5Q0FBeUMsOENBQThDLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxnQkFBZ0Isb0NBQW9DLHFCQUFxQixHQUFHLG9CQUFvQixvQkFBb0Isb0JBQW9CLG9CQUFvQiwwQkFBMEIsb0RBQW9ELHVCQUF1QixHQUFHLHlEQUF5RCxvQkFBb0IsNkJBQTZCLG9CQUFvQixnQ0FBZ0MsR0FBRyxjQUFjLHlCQUF5QixpQkFBaUIsd0JBQXdCLDJCQUEyQixHQUFHLG9CQUFvQixvQkFBb0IseUJBQXlCLHNCQUFzQixnQ0FBZ0Msa0JBQWtCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDJCQUEyQix5QkFBeUIseUJBQXlCLDBCQUEwQixzQkFBc0IsNEJBQTRCLHNCQUFzQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsdUdBQXVHLG9CQUFvQiw4QkFBOEIsb0JBQW9CLDJDQUEyQyxHQUFHLDRCQUE0QixvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsR0FBRyxtQkFBbUIscUJBQXFCLHVCQUF1Qiw2QkFBNkIsa0JBQWtCLGlEQUFpRCxHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLGlCQUFpQixtQkFBbUIsZUFBZSx5QkFBeUIsMkJBQTJCLDBCQUEwQix1QkFBdUIsR0FBRyx5QkFBeUIscUJBQXFCLHVCQUF1QixHQUFHLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEdBQUcsaUNBQWlDLHFCQUFxQixHQUFHLHNCQUFzQiwwQ0FBMEMsK0JBQStCLHlCQUF5QixvQ0FBb0MsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRyxvQkFBb0Isb0JBQW9CLDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5QixnQ0FBZ0MsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsdUJBQXVCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0IseUJBQXlCLEdBQUcsd0JBQXdCLG9CQUFvQiw4QkFBOEIsd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0Isc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQixzQkFBc0IsbUJBQW1CLDZCQUE2Qix3QkFBd0Isc0JBQXNCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLG1CQUFtQixtQkFBbUIsMEJBQTBCLGdCQUFnQix1QkFBdUIsMEJBQTBCLHlCQUF5QixHQUFHLGdCQUFnQix3QkFBd0Isc0JBQXNCLHNCQUFzQixnREFBZ0QscUJBQXFCLEdBQUcsZ0JBQWdCLHVCQUF1QixvQ0FBb0MsbUJBQW1CLHNCQUFzQixrQkFBa0IscUJBQXFCLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsZ0JBQWdCLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHFEQUFxRCxvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxzQkFBc0Isb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsMkNBQTJDLHlCQUF5QixvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLDJDQUEyQyx5QkFBeUIsb0JBQW9CLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QixnQkFBZ0IsR0FBRyxnQkFBZ0IsdUJBQXVCLDBDQUEwQyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLDBDQUEwQyx5QkFBeUIsd0JBQXdCLG9CQUFvQixHQUFHLGdCQUFnQiwwQ0FBMEMseUJBQXlCLHdCQUF3QixvQkFBb0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsZUFBZSx1QkFBdUIsMkNBQTJDLHlCQUF5Qix1QkFBdUIsK0NBQStDLHNCQUFzQixHQUFHLDZEQUE2RCx1QkFBdUIsR0FBRyxxQkFBcUIsZ0NBQWdDLEdBQUcsbUJBQW1CLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLHVCQUF1QixHQUFHLDZCQUE2Qix1QkFBdUIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUJBQW1CLDhDQUE4QywrQ0FBK0Msc0JBQXNCLG9CQUFvQixHQUFHLGdCQUFnQiwyQ0FBMkMsR0FBRyxzQkFBc0IsMkNBQTJDLEdBQUcsaUJBQWlCLHlDQUF5QyxHQUFHLHVCQUF1Qix5Q0FBeUMsR0FBRyx1SUFBdUksNEJBQTRCLHVDQUF1QyxLQUFLLDhEQUE4RCxpQkFBaUIsS0FBSyxrQ0FBa0MsMEJBQTBCLEtBQUssa0NBQWtDLGdDQUFnQywwQkFBMEIsZ0NBQWdDLEtBQUssbUJBQW1CO0FBQzNzaUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUd0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCOztBQUV4RCw2RUFBNkU7O0FBRTdFO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTixXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFROztBQUUvQyxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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Ozs7Ozs7Ozs7OztBQzNCMEM7QUFDZ0I7QUFDbEI7QUFDb0I7QUFDUTtBQUMyQjtBQUM2QjtBQUN6RTtBQUNNO0FBQ1c7QUFDVCxDQUFDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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eEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCLGVBQWUsNkNBQU87QUFDdEIsZUFBZSw2Q0FBTztBQUN0QixlQUFlLDZDQUFPOztBQUV0QixnQkFBZ0Isa0VBQU07O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxxRUFBWSxhQUFhO0FBQ25FLCtDQUErQyxxRUFBWSxrQkFBa0I7QUFDN0UsMkNBQTJDLHFFQUFZLGNBQWM7QUFDckUsNkNBQTZDLHFFQUFZLGdCQUFnQjtBQUN6RSw0Q0FBNEMscUVBQVksZUFBZTtBQUN2RSwrQ0FBK0MscUVBQVksa0JBQWtCO0FBQzdFLDRDQUE0QyxxRUFBWSxlQUFlO0FBQ3ZFLGdEQUFnRCxxRUFBWSxtQkFBbUI7QUFDL0UsOENBQThDLHFFQUFZLGlCQUFpQjs7QUFFM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVDQUF1Qyx5RUFBYSxPQUFPO0FBQ3ZHLHFEQUFxRCw0REFBNEQseUVBQWEsT0FBTzs7QUFFckk7QUFDQSxpREFBaUQsbURBQW1EO0FBQ3BHLG9EQUFvRCw0Q0FBNEM7O0FBRWhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdFQUFnQjtBQUNwRCxvQ0FBb0Msd0VBQWdCO0FBQ3BELG9DQUFvQyx3RUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BvcHVwUy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcmV0dHktY2hlY2tib3gubWluLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9wb3B1cHMvZGlzdC9wb3B1cFMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wb3B1cFMuY3NzPzk0NTMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcmV0dHktY2hlY2tib3gubWluLmNzcz85ODc5Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvaW5wdXRGaWVsZE1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbmRlck1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NpZGViYXJNZXRob2RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXBTLWxheWVye1xcblxcdC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMjUpO1xcblxcdC1tb3otYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMjUpO1xcbmJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsLjI1KTtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuYm9yZGVyLXJhZGl1czo2cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG5tYXJnaW46MjBweDtcXG56LWluZGV4OjEwMDA7XFxuXFxufVxcbi5wb3B1cFMtcmVzZXRGb2N1cyB7XFxuYm9yZGVyOiAwO1xcbmNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuaGVpZ2h0OiAxcHg7XFxubWFyZ2luOiAtMXB4O1xcbm92ZXJmbG93OiBoaWRkZW47XFxucGFkZGluZzogMDtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxud2lkdGg6IDFweDtcXG59XFxuLnBvcHVwUy1jbG9zZXtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiAwO1xcbnJpZ2h0OiAwO1xcbmxpbmUtaGVpZ2h0OiA0MHB4O1xcbmZvbnQtc2l6ZTogMzJweDtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuZm9udC13ZWlnaHQ6IDcwMDtcXG53aWR0aDogMzJweDtcXG5oZWlnaHQ6IDQwcHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbnotaW5kZXg6MTAyMDtcXG59XFxuLnBvcHVwUy10aXRsZXtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxud2lkdGg6IDEwMCU7XFxubGluZS1oZWlnaHQ6IDQwcHg7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbndoaXRlLXNwYWNlOiBub3dyYXA7XFxub3ZlcmZsb3c6IGhpZGRlbjtcXG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5tYXJnaW46IDAgYXV0bztcXG56LWluZGV4OjEwMDE7XFxufVxcbi5wb3B1cFMtdGl0bGUgKyAucG9wdXBTLWNvbnRlbnR7XFxucGFkZGluZy1ib3R0b206MjBweDtcXG59XFxuLnBvcHVwUy1jb250ZW50e1xcbm1heC13aWR0aDo3MDBweDtcXG5wYWRkaW5nOjQwcHg7XFxuYm9yZGVyLXJhZGl1czo2cHg7XFxufVxcbi5wb3B1cFMtY29udGVudCBpbWd7XFxubWF4LXdpZHRoOjEwMCU7XFxuaGVpZ2h0OmF1dG87XFxufVxcbi5wb3B1cFMtbGF5ZXIgLmJ0bntcXG5mbG9hdDpyaWdodDtcXG59XFxuXFxuLypcXG4qIERlZmF1bHQgQW5pbWF0aW9uXFxuKiB2ZXJ5IEltcG9ydGFudFxcbiovXFxuXFxuLnBvcHVwUy1sYXllcntcXG4td2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbi1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbnRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xcbm9wYWNpdHk6IDA7XFxufVxcbi5wb3B1cFMtb3ZlcmxheXtcXG4td2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxuLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXG50cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcbmJhY2tncm91bmQ6cmdiKDAsMCwwKTtcXG5vcGFjaXR5OiAwO1xcbn1cXG4ucG9wdXBTLWxheWVyLnBvcHVwUy1vcGVue1xcbm9wYWNpdHk6IDE7XFxufVxcbi5wb3B1cFMtb3Blbj4ucG9wdXBTLW92ZXJsYXl7XFxub3BhY2l0eTouNjtcXG59XFxuXFxuLyogTG9hZGVyICovXFxuXFxuQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xcbnRvIHstbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XFxufVxcbkAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XFxudG8gey1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyIHtcXG50byB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuQGtleWZyYW1lcyBzcGlubmVyIHtcXG5cXHR0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XFxufVxcbkAtbW96LWtleWZyYW1lcyBwdWxzYXRlIHtcXG4wJSB7XFxuXFx0LW1vei10cmFuc2Zvcm06c2NhbGUoLjEpO1xcblxcdHRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0b3BhY2l0eTogMC4wO1xcbn1cXG41MCUge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuMTAwJSB7XFxuXFx0LW1vei10cmFuc2Zvcm06c2NhbGUoMS4yKTtcXG5cXHR0cmFuc2Zvcm06c2NhbGUoMS4yKTtcXG5cXHRvcGFjaXR5OjA7XFxufVxcbn1cXG5ALW8ta2V5ZnJhbWVzIHB1bHNhdGUge1xcbjAlIHtcXG5cXHQtby10cmFuc2Zvcm06c2NhbGUoLjEpO1xcblxcdHRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0b3BhY2l0eTogMC4wO1xcbn1cXG41MCUge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuMTAwJSB7XFxuXFx0LW8tdHJhbnNmb3JtOnNjYWxlKDEuMik7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKDEuMik7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUge1xcbjAlIHtcXG5cXHR0cmFuc2Zvcm06c2NhbGUoLjEpO1xcblxcdG9wYWNpdHk6IDAuMDtcXG59XFxuNTAlIHtcXG5cXHRvcGFjaXR5OjE7XFxufVxcbjEwMCUge1xcblxcdHRyYW5zZm9ybTpzY2FsZSgxLjIpO1xcblxcdG9wYWNpdHk6MDtcXG59XFxufVxcbkBrZXlmcmFtZXMgcHVsc2F0ZSB7XFxuMCUge1xcblxcdHRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0b3BhY2l0eTogMC4wO1xcbn1cXG41MCUge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuMTAwJSB7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKDEuMik7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG59XFxuLnBvcHVwUy1sb2FkaW5ne1xcbndpZHRoOiAzMHB4O1xcbmhlaWdodDogMzBweDtcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiA1MCU7XFxubGVmdDogNTAlO1xcbm1hcmdpbi10b3A6IC0xNXB4O1xcbm1hcmdpbi1sZWZ0OiAtMTVweDtcXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG4ucG9wdXBTLWxvYWRpbmcucHVsc2Vye1xcbmJvcmRlcjogM3B4IHNvbGlkICMxY2FmZjY7XFxub3BhY2l0eTogMDtcXG5cXHQtbW96LWFuaW1hdGlvbjogcHVsc2F0ZSAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXG5cXHQtby1hbmltYXRpb246IHB1bHNhdGUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XFxuYW5pbWF0aW9uOiBwdWxzYXRlIDFzIGVhc2Utb3V0IGluZmluaXRlO1xcbn1cXG4ucG9wdXBTLWxvYWRpbmcuc3Bpbm5lcntcXG5ib3JkZXItdG9wOiAzcHggc29saWQgIzFjYWZmNjtcXG5ib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHQtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAuNnMgbGluZWFyIGluZmluaXRlO1xcblxcdC1vLWFuaW1hdGlvbjogc3Bpbm5lciAuNnMgbGluZWFyIGluZmluaXRlO1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGlubmVyIC42cyBsaW5lYXIgaW5maW5pdGU7XFxuYW5pbWF0aW9uOiBzcGlubmVyIC42cyBsaW5lYXIgaW5maW5pdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3B1cFMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsNENBQTRDO0NBQzVDLHlDQUF5QztBQUMxQyxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsV0FBVztBQUNYLFlBQVk7O0FBRVo7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsV0FBVztBQUNYLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1Y7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN2QixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7OztDQUdDOztBQUVEO0FBQ0EsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDdkIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxXQUFXOztBQUVYO0FBQ0EsSUFBSSw4QkFBOEI7Q0FDakMseUJBQXlCLENBQUM7QUFDM0I7QUFDQTtBQUNBLElBQUksNEJBQTRCO0NBQy9CLHlCQUF5QixDQUFDO0FBQzNCO0FBQ0E7QUFDQSxJQUFJLGlDQUFpQyxDQUFDO0FBQ3RDO0FBQ0E7Q0FDQyxJQUFJLHlCQUF5QixDQUFDO0FBQy9CO0FBQ0E7QUFDQTtDQUNDLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxTQUFTO0FBQ1Y7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixvQkFBb0I7Q0FDcEIsU0FBUztBQUNWO0FBQ0E7QUFDQTtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7QUFDQTtDQUNDLFNBQVM7QUFDVjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLG9CQUFvQjtDQUNwQixTQUFTO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxTQUFTO0FBQ1Y7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQixTQUFTO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxTQUFTO0FBQ1Y7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQixTQUFTO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLFNBQVM7QUFDVCxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFVBQVU7Q0FDVCw0Q0FBNEM7Q0FDNUMsMENBQTBDO0NBQzFDLCtDQUErQztBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixtQ0FBbUM7Q0FDbEMsMkNBQTJDO0NBQzNDLHlDQUF5QztDQUN6Qyw4Q0FBOEM7QUFDL0Msc0NBQXNDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cFMtbGF5ZXJ7XFxuXFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLC4yNSk7XFxuXFx0LW1vei1ib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLC4yNSk7XFxuYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwuMjUpO1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG5ib3JkZXItcmFkaXVzOjZweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbm1hcmdpbjoyMHB4O1xcbnotaW5kZXg6MTAwMDtcXG5cXG59XFxuLnBvcHVwUy1yZXNldEZvY3VzIHtcXG5ib3JkZXI6IDA7XFxuY2xpcDogcmVjdCgwIDAgMCAwKTtcXG5oZWlnaHQ6IDFweDtcXG5tYXJnaW46IC0xcHg7XFxub3ZlcmZsb3c6IGhpZGRlbjtcXG5wYWRkaW5nOiAwO1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG53aWR0aDogMXB4O1xcbn1cXG4ucG9wdXBTLWNsb3Nle1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxucmlnaHQ6IDA7XFxubGluZS1oZWlnaHQ6IDQwcHg7XFxuZm9udC1zaXplOiAzMnB4O1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5mb250LXdlaWdodDogNzAwO1xcbndpZHRoOiAzMnB4O1xcbmhlaWdodDogNDBweDtcXG5jdXJzb3I6IHBvaW50ZXI7XFxuei1pbmRleDoxMDIwO1xcbn1cXG4ucG9wdXBTLXRpdGxle1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG53aWR0aDogMTAwJTtcXG5saW5lLWhlaWdodDogNDBweDtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxud2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5vdmVyZmxvdzogaGlkZGVuO1xcbnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbm1hcmdpbjogMCBhdXRvO1xcbnotaW5kZXg6MTAwMTtcXG59XFxuLnBvcHVwUy10aXRsZSArIC5wb3B1cFMtY29udGVudHtcXG5wYWRkaW5nLWJvdHRvbToyMHB4O1xcbn1cXG4ucG9wdXBTLWNvbnRlbnR7XFxubWF4LXdpZHRoOjcwMHB4O1xcbnBhZGRpbmc6NDBweDtcXG5ib3JkZXItcmFkaXVzOjZweDtcXG59XFxuLnBvcHVwUy1jb250ZW50IGltZ3tcXG5tYXgtd2lkdGg6MTAwJTtcXG5oZWlnaHQ6YXV0bztcXG59XFxuLnBvcHVwUy1sYXllciAuYnRue1xcbmZsb2F0OnJpZ2h0O1xcbn1cXG5cXG4vKlxcbiogRGVmYXVsdCBBbmltYXRpb25cXG4qIHZlcnkgSW1wb3J0YW50XFxuKi9cXG5cXG4ucG9wdXBTLWxheWVye1xcbi13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxudHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxub3BhY2l0eTogMDtcXG59XFxuLnBvcHVwUy1vdmVybGF5e1xcbi13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcXG4tby10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcbnRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XFxuYmFja2dyb3VuZDpyZ2IoMCwwLDApO1xcbm9wYWNpdHk6IDA7XFxufVxcbi5wb3B1cFMtbGF5ZXIucG9wdXBTLW9wZW57XFxub3BhY2l0eTogMTtcXG59XFxuLnBvcHVwUy1vcGVuPi5wb3B1cFMtb3ZlcmxheXtcXG5vcGFjaXR5Oi42O1xcbn1cXG5cXG4vKiBMb2FkZXIgKi9cXG5cXG5ALW1vei1rZXlmcmFtZXMgc3Bpbm5lciB7XFxudG8gey1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcXG50byB7LW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXIge1xcbnRvIHstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xcblxcdHRvIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cXG59XFxuQC1tb3ota2V5ZnJhbWVzIHB1bHNhdGUge1xcbjAlIHtcXG5cXHQtbW96LXRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKC4xKTtcXG5cXHRvcGFjaXR5OiAwLjA7XFxufVxcbjUwJSB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG4xMDAlIHtcXG5cXHQtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjIpO1xcblxcdHRyYW5zZm9ybTpzY2FsZSgxLjIpO1xcblxcdG9wYWNpdHk6MDtcXG59XFxufVxcbkAtby1rZXlmcmFtZXMgcHVsc2F0ZSB7XFxuMCUge1xcblxcdC1vLXRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKC4xKTtcXG5cXHRvcGFjaXR5OiAwLjA7XFxufVxcbjUwJSB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG4xMDAlIHtcXG5cXHQtby10cmFuc2Zvcm06c2NhbGUoMS4yKTtcXG5cXHR0cmFuc2Zvcm06c2NhbGUoMS4yKTtcXG5cXHRvcGFjaXR5OjA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XFxuMCUge1xcblxcdHRyYW5zZm9ybTpzY2FsZSguMSk7XFxuXFx0b3BhY2l0eTogMC4wO1xcbn1cXG41MCUge1xcblxcdG9wYWNpdHk6MTtcXG59XFxuMTAwJSB7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKDEuMik7XFxuXFx0b3BhY2l0eTowO1xcbn1cXG59XFxuQGtleWZyYW1lcyBwdWxzYXRlIHtcXG4wJSB7XFxuXFx0dHJhbnNmb3JtOnNjYWxlKC4xKTtcXG5cXHRvcGFjaXR5OiAwLjA7XFxufVxcbjUwJSB7XFxuXFx0b3BhY2l0eToxO1xcbn1cXG4xMDAlIHtcXG5cXHR0cmFuc2Zvcm06c2NhbGUoMS4yKTtcXG5cXHRvcGFjaXR5OjA7XFxufVxcbn1cXG4ucG9wdXBTLWxvYWRpbmd7XFxud2lkdGg6IDMwcHg7XFxuaGVpZ2h0OiAzMHB4O1xcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDUwJTtcXG5sZWZ0OiA1MCU7XFxubWFyZ2luLXRvcDogLTE1cHg7XFxubWFyZ2luLWxlZnQ6IC0xNXB4O1xcbmJvcmRlci1yYWRpdXM6IDMwcHg7XFxufVxcbi5wb3B1cFMtbG9hZGluZy5wdWxzZXJ7XFxuYm9yZGVyOiAzcHggc29saWQgIzFjYWZmNjtcXG5vcGFjaXR5OiAwO1xcblxcdC1tb3otYW5pbWF0aW9uOiBwdWxzYXRlIDFzIGVhc2Utb3V0IGluZmluaXRlO1xcblxcdC1vLWFuaW1hdGlvbjogcHVsc2F0ZSAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogcHVsc2F0ZSAxcyBlYXNlLW91dCBpbmZpbml0ZTtcXG5hbmltYXRpb246IHB1bHNhdGUgMXMgZWFzZS1vdXQgaW5maW5pdGU7XFxufVxcbi5wb3B1cFMtbG9hZGluZy5zcGlubmVye1xcbmJvcmRlci10b3A6IDNweCBzb2xpZCAjMWNhZmY2O1xcbmJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdC1tb3otYW5pbWF0aW9uOiBzcGlubmVyIC42cyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0LW8tYW5pbWF0aW9uOiBzcGlubmVyIC42cyBsaW5lYXIgaW5maW5pdGU7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgLjZzIGxpbmVhciBpbmZpbml0ZTtcXG5hbmltYXRpb246IHNwaW5uZXIgLjZzIGxpbmVhciBpbmZpbml0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogcHJldHR5LWNoZWNrYm94LmNzc1xcbiAqXFxuICogQSBwdXJlIENTUyBsaWJyYXJ5IHRvIGJlYXV0aWZ5IGNoZWNrYm94IGFuZCByYWRpbyBidXR0b25zXFxuICpcXG4gKiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2tlc2gtY29kZXIvcHJldHR5LWNoZWNrYm94XFxuICogRGVtbzogaHR0cHM6Ly9sb2tlc2gtY29kZXIuZ2l0aHViLmlvL3ByZXR0eS1jaGVja2JveFxcbiAqXFxuICogQ29weXJpZ2h0IChjKSAyMDE3IExva2VzaCByYWplbmRyYW5cXG4gKi9cXG5cXG4ucHJldHR5ICp7Ym94LXNpemluZzpib3JkZXItYm94fS5wcmV0dHkgaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSl7ZGlzcGxheTpub25lfS5wcmV0dHl7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjFlbTt3aGl0ZS1zcGFjZTpub3dyYXA7bGluZS1oZWlnaHQ6MX0ucHJldHR5IGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDttaW4td2lkdGg6MWVtO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoyO29wYWNpdHk6MDttYXJnaW46MDtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXJ9LnByZXR0eSAuc3RhdGUgbGFiZWx7cG9zaXRpb246aW5pdGlhbDtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo0MDA7bWFyZ2luOjA7dGV4dC1pbmRlbnQ6MS41ZW07bWluLXdpZHRoOmNhbGMoMWVtICsgMnB4KX0ucHJldHR5IC5zdGF0ZSBsYWJlbDphZnRlciwucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmV7Y29udGVudDonJzt3aWR0aDpjYWxjKDFlbSArIDJweCk7aGVpZ2h0OmNhbGMoMWVtICsgMnB4KTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjA7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDt6LWluZGV4OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDpjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNkNWQzYzJ9LnByZXR0eSAuc3RhdGUucC1pcy1ob3ZlciwucHJldHR5IC5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGV7ZGlzcGxheTpub25lfUAtd2Via2l0LWtleWZyYW1lcyB6b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fUBrZXlmcmFtZXMgem9vbXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDcpO3RyYW5zZm9ybTpzY2FsZSg3KX0zOCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01NSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSl9NzIley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX04MSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMjQpO3RyYW5zZm9ybTpzY2FsZSgxLjI0KX04OSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTk1JXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNCk7dHJhbnNmb3JtOnNjYWxlKDEuMDQpfTEwMCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSg3KTt0cmFuc2Zvcm06c2NhbGUoNyl9Mzgley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9NTUley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjUpO3RyYW5zZm9ybTpzY2FsZSgxLjUpfTcyJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9ODEley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjI0KTt0cmFuc2Zvcm06c2NhbGUoMS4yNCl9ODkley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX05NSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDQpO3RyYW5zZm9ybTpzY2FsZSgxLjA0KX0xMDAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIGplbGx5ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguODUsMS4xNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguODUsMS4xNSwxKX02NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX19QGtleWZyYW1lcyBqZWxseXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9MzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjg1LDEuMTUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjg1LDEuMTUsMSl9NjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9fUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGV7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooLTIwMHB4KSByb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHJvdGF0ZSgwKX19QGtleWZyYW1lcyByb3RhdGV7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooLTIwMHB4KSByb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpfTEwMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgcm90YXRlKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHJvdGF0ZSgwKX19QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlezAle2JveC1zaGFkb3c6MCAwIDAgMCAjYmRjM2M3fTEwMCV7Ym94LXNoYWRvdzowIDAgMCAxLjVlbSByZ2JhKDE4OSwxOTUsMTk5LDApfX1Aa2V5ZnJhbWVzIHB1bHNlezAle2JveC1zaGFkb3c6MCAwIDAgMCAjYmRjM2M3fTEwMCV7Ym94LXNoYWRvdzowIDAgMCAxLjVlbSByZ2JhKDE4OSwxOTUsMTk5LDApfX0ucHJldHR5LnAtZGVmYXVsdC5wLWZpbGwgLnN0YXRlIGxhYmVsOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfS5wcmV0dHkucC1kZWZhdWx0IC5zdGF0ZSBsYWJlbDphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNik7LW1zLXRyYW5zZm9ybTpzY2FsZSguNik7dHJhbnNmb3JtOnNjYWxlKC42KX0ucHJldHR5LnAtZGVmYXVsdCBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkNWQzYzIhaW1wb3J0YW50fS5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmJlZm9yZXtib3JkZXItd2lkdGg6Y2FsYygxZW0gLyA3KX0ucHJldHR5LnAtZGVmYXVsdC5wLXRoaWNrIC5zdGF0ZSBsYWJlbDphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCkhaW1wb3J0YW50Oy1tcy10cmFuc2Zvcm06c2NhbGUoLjQpIWltcG9ydGFudDt0cmFuc2Zvcm06c2NhbGUoLjQpIWltcG9ydGFudH0ucHJldHR5LnAtaWNvbiAuc3RhdGUgLmljb257cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt3aWR0aDpjYWxjKDFlbSArIDJweCk7aGVpZ2h0OmNhbGMoMWVtICsgMnB4KTtsZWZ0OjA7ei1pbmRleDoxO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0Om5vcm1hbDt0b3A6Y2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7b3BhY2l0eTowfS5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbjpiZWZvcmV7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2xpbmUtaGVpZ2h0OjF9LnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgLmljb257b3BhY2l0eToxfS5wcmV0dHkucC1pY29uIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6IzVhNjU2Yn0ucHJldHR5LnAtc3ZnIC5zdGF0ZSAuc3Zne3Bvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxZW07d2lkdGg6Y2FsYygxZW0gKyAycHgpO2hlaWdodDpjYWxjKDFlbSArIDJweCk7bGVmdDowO3otaW5kZXg6MTt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDpub3JtYWw7dG9wOmNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O29wYWNpdHk6MH0ucHJldHR5LnAtc3ZnIC5zdGF0ZSBzdmd7bWFyZ2luOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2xpbmUtaGVpZ2h0OjF9LnByZXR0eS5wLXN2ZyBpbnB1dDpjaGVja2Vkfi5zdGF0ZSAuc3Zne29wYWNpdHk6MX0ucHJldHR5LnAtaW1hZ2UgLnN0YXRlIGltZ3tvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6Y2FsYygxZW0gKyAycHgpO2hlaWdodDpjYWxjKDFlbSArIDJweCk7dG9wOjA7dG9wOmNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtsZWZ0OjA7ei1pbmRleDowO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0Om5vcm1hbDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtOnNjYWxlKC44KX0ucHJldHR5LnAtaW1hZ2UgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgaW1ne29wYWNpdHk6MX0ucHJldHR5LnAtc3dpdGNoIGlucHV0e21pbi13aWR0aDoyZW19LnByZXR0eS5wLXN3aXRjaCAuc3RhdGV7cG9zaXRpb246cmVsYXRpdmV9LnByZXR0eS5wLXN3aXRjaCAuc3RhdGU6YmVmb3Jle2NvbnRlbnQ6Jyc7Ym9yZGVyOjFweCBzb2xpZCAjYmRjM2M3O2JvcmRlci1yYWRpdXM6NjBweDt3aWR0aDoyZW07Ym94LXNpemluZzp1bnNldDtoZWlnaHQ6Y2FsYygxZW0gKyAycHgpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3RvcDpjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAxNiUpO3otaW5kZXg6MDt0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZX0ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbHt0ZXh0LWluZGVudDoyLjVlbX0ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlciwucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDpiZWZvcmV7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7Ym9yZGVyLXJhZGl1czoxMDAlO2xlZnQ6MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjgpOy1tcy10cmFuc2Zvcm06c2NhbGUoLjgpO3RyYW5zZm9ybTpzY2FsZSguOCl9LnByZXR0eS5wLXN3aXRjaCAuc3RhdGUgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojYmRjM2M3IWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlOmJlZm9yZXtib3JkZXItY29sb3I6IzVhNjU2Yn0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXtvcGFjaXR5OjB9LnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM1YTY1NmIhaW1wb3J0YW50O2xlZnQ6MWVtfS5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWR+LnN0YXRlOmJlZm9yZXtib3JkZXItY29sb3I6IzVhNjU2YjtiYWNrZ3JvdW5kLWNvbG9yOiM1YTY1NmIhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2gucC1maWxsIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXtvcGFjaXR5OjB9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudDtsZWZ0OjFlbX0ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSAuc3RhdGU6YmVmb3Jle2hlaWdodDouMWVtO2JhY2tncm91bmQ6I2JkYzNjNyFpbXBvcnRhbnQ7dG9wOmNhbGMoNTAlIC0gLjFlbSl9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGU6YmVmb3Jle2JvcmRlci1jb2xvcjojNWE2NTZiO2JhY2tncm91bmQtY29sb3I6IzVhNjU2YiFpbXBvcnRhbnR9LnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3Zlcn4uc3RhdGU6bm90KC5wLWlzLWhvdmVyKXtkaXNwbGF5Om5vbmV9LnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3Zlcn4uc3RhdGUucC1pcy1ob3ZlcntkaXNwbGF5OmJsb2NrfS5wcmV0dHkucC1oYXMtaG92ZXIgaW5wdXQ6aG92ZXJ+LnN0YXRlLnAtaXMtaG92ZXIgLmljb257ZGlzcGxheTpibG9ja30ucHJldHR5LnAtaGFzLWZvY3VzIGlucHV0OmZvY3Vzfi5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym94LXNoYWRvdzowIDAgM3B4IDAgI2JkYzNjN30ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZX4uc3RhdGU6bm90KC5wLWlzLWluZGV0ZXJtaW5hdGUpe2Rpc3BsYXk6bm9uZX0ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZX4uc3RhdGUucC1pcy1pbmRldGVybWluYXRle2Rpc3BsYXk6YmxvY2t9LnByZXR0eS5wLWhhcy1pbmRldGVybWluYXRlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGV+LnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZSAuaWNvbntkaXNwbGF5OmJsb2NrO29wYWNpdHk6MX0ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9ue29wYWNpdHk6MDtkaXNwbGF5Om5vbmV9LnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUgLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSBpbWcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1vZmZ7b3BhY2l0eToxO2Rpc3BsYXk6aW5oZXJpdH0ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9mZiAuaWNvbntjb2xvcjojYmRjM2M3fS5wcmV0dHkucC10b2dnbGUgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1vbntvcGFjaXR5OjE7ZGlzcGxheTppbmhlcml0fS5wcmV0dHkucC10b2dnbGUgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1vZmZ7b3BhY2l0eTowO2Rpc3BsYXk6bm9uZX0ucHJldHR5LnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YmVmb3JlLC5wcmV0dHkucC1wbGFpbi5wLXRvZ2dsZSAuc3RhdGUgbGFiZWw6YmVmb3Jle2NvbnRlbnQ6bm9uZX0ucHJldHR5LnAtcGxhaW4ucC1wbGFpbiAuaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpOy1tcy10cmFuc2Zvcm06c2NhbGUoMS4xKTt0cmFuc2Zvcm06c2NhbGUoMS4xKX0ucHJldHR5LnAtcm91bmQgLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YmVmb3Jle2JvcmRlci1yYWRpdXM6MTAwJX0ucHJldHR5LnAtcm91bmQucC1pY29uIC5zdGF0ZSAuaWNvbntib3JkZXItcmFkaXVzOjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtOnNjYWxlKC44KX0ucHJldHR5LnAtY3VydmUgLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YmVmb3Jle2JvcmRlci1yYWRpdXM6MjAlfS5wcmV0dHkucC1zbW9vdGggLmljb24sLnByZXR0eS5wLXNtb290aCAuc3ZnLC5wcmV0dHkucC1zbW9vdGggbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXNtb290aCBsYWJlbDpiZWZvcmV7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2V9LnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkKy5zdGF0ZSBsYWJlbDphZnRlcnt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX0ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQrLnN0YXRlIC5pY29uLC5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgLnN2ZywucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQrLnN0YXRlIGltZ3std2Via2l0LWFuaW1hdGlvbjp6b29tIC4ycyBlYXNlO2FuaW1hdGlvbjp6b29tIC4ycyBlYXNlfS5wcmV0dHkucC1zbW9vdGgucC1kZWZhdWx0IGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmFmdGVyey13ZWJraXQtYW5pbWF0aW9uOnpvb20gLjJzIGVhc2U7YW5pbWF0aW9uOnpvb20gLjJzIGVhc2V9LnByZXR0eS5wLXNtb290aC5wLXBsYWluIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmJlZm9yZXtjb250ZW50OicnOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApOy1tcy10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246YWxsIC41cyBlYXNlfS5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSAuaWNvbiwucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgLnN2ZywucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgaW1nLC5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBsYWJlbDphZnRlciwucHJldHR5LnAtdGFkYTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgbGFiZWw6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOnRhZGEgLjdzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIDEgYWx0ZXJuYXRlO2FuaW1hdGlvbjp0YWRhIC43cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSAxIGFsdGVybmF0ZTtvcGFjaXR5OjF9LnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSAuaWNvbiwucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIC5zdmcsLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBpbWcsLnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBsYWJlbDphZnRlciwucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjpqZWxseSAuN3MgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCk7YW5pbWF0aW9uOmplbGx5IC43cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KTtvcGFjaXR5OjF9LnByZXR0eS5wLWplbGx5Om5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWR+LnN0YXRlIC5pY29uLC5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWR+LnN0YXRlIC5zdmcsLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgaW1nLC5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGUgLjdzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpO2FuaW1hdGlvbjpyb3RhdGUgLjdzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpO29wYWNpdHk6MX0ucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5wcmV0dHkucC1wdWxzZTpub3QoLnAtc3dpdGNoKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246cHVsc2UgMXM7YW5pbWF0aW9uOnB1bHNlIDFzfS5wcmV0dHkgaW5wdXRbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZDtkaXNwbGF5Om5vbmV9LnByZXR0eSBpbnB1dFtkaXNhYmxlZF1+KntvcGFjaXR5Oi41fS5wcmV0dHkucC1sb2NrZWQgaW5wdXR7ZGlzcGxheTpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlciwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNDI4YmNhIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeSAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeSAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnkgLnN2Z3tjb2xvcjojZmZmO3N0cm9rZTojZmZmfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YmVmb3JlLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6IzQyOGJjYX0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeS1vIC5zdmcsLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXByaW1hcnktbyBzdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyBzdmd7Y29sb3I6IzQyOGJjYTtzdHJva2U6IzQyOGJjYX0ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNDI4YmNhIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeTpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM0MjhiY2F9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiM0MjhiY2EhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeTpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMyNDU2ODI7YmFja2dyb3VuZC1jb2xvcjojMjQ1NjgyIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlciwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8gLnN2Z3tjb2xvcjojZmZmO3N0cm9rZTojZmZmfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvLW8gbGFiZWw6YmVmb3JlLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6IzViYzBkZX0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWluZm8tbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mby1vIC5zdmcsLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWluZm8tbyBzdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyBzdmd7Y29sb3I6IzViYzBkZTtzdHJva2U6IzViYzBkZX0ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWJjMGRlIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mbzpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM1YmMwZGV9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGUhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mbzpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMyMzkwYjA7YmFja2dyb3VuZC1jb2xvcjojMjM5MGIwIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlciwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWNiODVjIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2VzcyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2VzcyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MgLnN2Z3tjb2xvcjojZmZmO3N0cm9rZTojZmZmfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YmVmb3JlLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6IzVjYjg1Y30ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2Vzcy1vIC5zdmcsLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXN1Y2Nlc3MtbyBzdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyBzdmd7Y29sb3I6IzVjYjg1YztzdHJva2U6IzVjYjg1Y30ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNWNiODVjIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2VzczpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM1Y2I4NWN9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiM1Y2I4NWMhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2VzczpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMzNTc5MzU7YmFja2dyb3VuZC1jb2xvcjojMzU3OTM1IWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlciwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBhZDRlIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmcgLnN2Z3tjb2xvcjojZmZmO3N0cm9rZTojZmZmfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YmVmb3JlLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6I2YwYWQ0ZX0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZy1vIC5zdmcsLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXdhcm5pbmctbyBzdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyBzdmd7Y29sb3I6I2YwYWQ0ZTtzdHJva2U6I2YwYWQ0ZX0ucHJldHR5LnAtZGVmYXVsdDpub3QoLnAtZmlsbCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjBhZDRlIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZzpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNmMGFkNGV9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGUhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2gucC1zbGltIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZzpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNjNzdjMTE7YmFja2dyb3VuZC1jb2xvcjojYzc3YzExIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Q5NTM0ZiFpbXBvcnRhbnR9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlciAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyIC5zdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgLnN2Z3tjb2xvcjojZmZmO3N0cm9rZTojZmZmfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNkOTUzNGZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlci1vIC5zdmcsLnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlci1vIHN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIC5pY29uLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIHN2Z3tjb2xvcjojZDk1MzRmO3N0cm9rZTojZDk1MzRmfS5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Q5NTM0ZiFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlcjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNkOTUzNGZ9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXI6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2Q5NTM0ZiFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXI6YmVmb3Jle2JvcmRlci1jb2xvcjojYTAyNjIyO2JhY2tncm91bmQtY29sb3I6I2EwMjYyMiFpbXBvcnRhbnR9LnByZXR0eS5wLWJpZ2dlciAuaWNvbiwucHJldHR5LnAtYmlnZ2VyIC5pbWcsLnByZXR0eS5wLWJpZ2dlciAuc3ZnLC5wcmV0dHkucC1iaWdnZXIgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLWJpZ2dlciBsYWJlbDpiZWZvcmV7Zm9udC1zaXplOjEuMmVtIWltcG9ydGFudDt0b3A6Y2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gMzUlKSFpbXBvcnRhbnR9LnByZXR0eS5wLWJpZ2dlciBsYWJlbHt0ZXh0LWluZGVudDoxLjdlbX1AbWVkaWEgcHJpbnR7LnByZXR0eSAuc3RhdGUgLmljb24sLnByZXR0eSAuc3RhdGUgbGFiZWw6YWZ0ZXIsLnByZXR0eSAuc3RhdGUgbGFiZWw6YmVmb3JlLC5wcmV0dHkgLnN0YXRlOmJlZm9yZXtjb2xvci1hZGp1c3Q6ZXhhY3Q7LXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6ZXhhY3Q7cHJpbnQtY29sb3ItYWRqdXN0OmV4YWN0fX1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9z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Q0FBQyx1REFBdUQsb0JBQW9CLENBQUMsOERBQThELGtDQUFrQyxDQUFDLDhEQUE4RCxvQkFBb0IsQ0FBQyxrQ0FBa0MsQ0FBQywrRkFBK0Ysa0NBQWtDLENBQUMsb0tBQW9LLFVBQVUsQ0FBQyxXQUFXLENBQUMscUdBQXFHLG9CQUFvQixDQUFDLG1HQUFtRyw0QkFBNEIsQ0FBQywrUEFBK1AsYUFBYSxDQUFDLGNBQWMsQ0FBQywyRUFBMkUsa0NBQWtDLENBQUMsc0RBQXNELG9CQUFvQixDQUFDLDZEQUE2RCxrQ0FBa0MsQ0FBQyw2REFBNkQsb0JBQW9CLENBQUMsa0NBQWtDLENBQUMsOEhBQThILHlCQUF5QixDQUFDLDZDQUE2QyxDQUFDLHVCQUF1QixpQkFBaUIsQ0FBQyxhQUFhLGtHQUFrRyxrQkFBa0IsQ0FBQyxnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBwcmV0dHktY2hlY2tib3guY3NzXFxuICpcXG4gKiBBIHB1cmUgQ1NTIGxpYnJhcnkgdG8gYmVhdXRpZnkgY2hlY2tib3ggYW5kIHJhZGlvIGJ1dHRvbnNcXG4gKlxcbiAqIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2xva2VzaC1jb2Rlci9wcmV0dHktY2hlY2tib3hcXG4gKiBEZW1vOiBodHRwczovL2xva2VzaC1jb2Rlci5naXRodWIuaW8vcHJldHR5LWNoZWNrYm94XFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgTG9rZXNoIHJhamVuZHJhblxcbiAqL1xcblxcbi5wcmV0dHkgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LnByZXR0eSBpbnB1dDpub3QoW3R5cGU9Y2hlY2tib3hdKTpub3QoW3R5cGU9cmFkaW9dKXtkaXNwbGF5Om5vbmV9LnByZXR0eXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6MWVtO3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDoxfS5wcmV0dHkgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO21pbi13aWR0aDoxZW07d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjI7b3BhY2l0eTowO21hcmdpbjowO3BhZGRpbmc6MDtjdXJzb3I6cG9pbnRlcn0ucHJldHR5IC5zdGF0ZSBsYWJlbHtwb3NpdGlvbjppbml0aWFsO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjQwMDttYXJnaW46MDt0ZXh0LWluZGVudDoxLjVlbTttaW4td2lkdGg6Y2FsYygxZW0gKyAycHgpfS5wcmV0dHkgLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZXtjb250ZW50OicnO3dpZHRoOmNhbGMoMWVtICsgMnB4KTtoZWlnaHQ6Y2FsYygxZW0gKyAycHgpO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlci1yYWRpdXM6MDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3otaW5kZXg6MDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOmNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDglKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wcmV0dHkgLnN0YXRlIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6I2Q1ZDNjMn0ucHJldHR5IC5zdGF0ZS5wLWlzLWhvdmVyLC5wcmV0dHkgLnN0YXRlLnAtaXMtaW5kZXRlcm1pbmF0ZXtkaXNwbGF5Om5vbmV9QC13ZWJraXQta2V5ZnJhbWVzIHpvb217MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX19QGtleWZyYW1lcyB6b29tezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9fUAtd2Via2l0LWtleWZyYW1lcyB0YWRhezAley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoNyk7dHJhbnNmb3JtOnNjYWxlKDcpfTM4JXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTU1JXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS41KTt0cmFuc2Zvcm06c2NhbGUoMS41KX03MiV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTgxJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNCk7dHJhbnNmb3JtOnNjYWxlKDEuMjQpfTg5JXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9OTUley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA0KTt0cmFuc2Zvcm06c2NhbGUoMS4wNCl9MTAwJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgdGFkYXswJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDcpO3RyYW5zZm9ybTpzY2FsZSg3KX0zOCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX01NSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuNSk7dHJhbnNmb3JtOnNjYWxlKDEuNSl9NzIley13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX04MSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMjQpO3RyYW5zZm9ybTpzY2FsZSgxLjI0KX04OSV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTk1JXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNCk7dHJhbnNmb3JtOnNjYWxlKDEuMDQpfTEwMCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1ALXdlYmtpdC1rZXlmcmFtZXMgamVsbHl7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC43NSwxLjI1LDEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMjUsLjc1LDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC44NSwxLjE1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC44NSwxLjE1LDEpfTY1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDUsLjk1LDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpO3RyYW5zZm9ybTpzY2FsZTNkKC45NSwxLjA1LDEpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpfX1Aa2V5ZnJhbWVzIGplbGx5ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguODUsMS4xNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguODUsMS4xNSwxKX02NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX19QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKC0yMDBweCkgcm90YXRlKC00NWRlZyl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSByb3RhdGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgcm90YXRlKDApfX1Aa2V5ZnJhbWVzIHJvdGF0ZXswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigtMjAwcHgpIHJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKC0yMDBweCkgcm90YXRlKC00NWRlZyl9MTAwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKSByb3RhdGUoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgcm90YXRlKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2V7MCV7Ym94LXNoYWRvdzowIDAgMCAwICNiZGMzYzd9MTAwJXtib3gtc2hhZG93OjAgMCAwIDEuNWVtIHJnYmEoMTg5LDE5NSwxOTksMCl9fUBrZXlmcmFtZXMgcHVsc2V7MCV7Ym94LXNoYWRvdzowIDAgMCAwICNiZGMzYzd9MTAwJXtib3gtc2hhZG93OjAgMCAwIDEuNWVtIHJnYmEoMTg5LDE5NSwxOTksMCl9fS5wcmV0dHkucC1kZWZhdWx0LnAtZmlsbCAuc3RhdGUgbGFiZWw6YWZ0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9LnByZXR0eS5wLWRlZmF1bHQgLnN0YXRlIGxhYmVsOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC42KTstbXMtdHJhbnNmb3JtOnNjYWxlKC42KTt0cmFuc2Zvcm06c2NhbGUoLjYpfS5wcmV0dHkucC1kZWZhdWx0IGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6I2Q1ZDNjMiFpbXBvcnRhbnR9LnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLWRlZmF1bHQucC10aGljayAuc3RhdGUgbGFiZWw6YmVmb3Jle2JvcmRlci13aWR0aDpjYWxjKDFlbSAvIDcpfS5wcmV0dHkucC1kZWZhdWx0LnAtdGhpY2sgLnN0YXRlIGxhYmVsOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KSFpbXBvcnRhbnQ7LW1zLXRyYW5zZm9ybTpzY2FsZSguNCkhaW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSguNCkhaW1wb3J0YW50fS5wcmV0dHkucC1pY29uIC5zdGF0ZSAuaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtmb250LXNpemU6MWVtO3dpZHRoOmNhbGMoMWVtICsgMnB4KTtoZWlnaHQ6Y2FsYygxZW0gKyAycHgpO2xlZnQ6MDt6LWluZGV4OjE7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6bm9ybWFsO3RvcDpjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSA4JSk7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtvcGFjaXR5OjB9LnByZXR0eS5wLWljb24gLnN0YXRlIC5pY29uOmJlZm9yZXttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bGluZS1oZWlnaHQ6MX0ucHJldHR5LnAtaWNvbiBpbnB1dDpjaGVja2Vkfi5zdGF0ZSAuaWNvbntvcGFjaXR5OjF9LnByZXR0eS5wLWljb24gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YmVmb3Jle2JvcmRlci1jb2xvcjojNWE2NTZifS5wcmV0dHkucC1zdmcgLnN0YXRlIC5zdmd7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjFlbTt3aWR0aDpjYWxjKDFlbSArIDJweCk7aGVpZ2h0OmNhbGMoMWVtICsgMnB4KTtsZWZ0OjA7ei1pbmRleDoxO3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0Om5vcm1hbDt0b3A6Y2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7b3BhY2l0eTowfS5wcmV0dHkucC1zdmcgLnN0YXRlIHN2Z3ttYXJnaW46MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bGluZS1oZWlnaHQ6MX0ucHJldHR5LnAtc3ZnIGlucHV0OmNoZWNrZWR+LnN0YXRlIC5zdmd7b3BhY2l0eToxfS5wcmV0dHkucC1pbWFnZSAuc3RhdGUgaW1ne29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDpjYWxjKDFlbSArIDJweCk7aGVpZ2h0OmNhbGMoMWVtICsgMnB4KTt0b3A6MDt0b3A6Y2FsYygoMCUgLSAoMTAwJSAtIDFlbSkpIC0gOCUpO2xlZnQ6MDt6LWluZGV4OjA7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6bm9ybWFsOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44KTstbXMtdHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm06c2NhbGUoLjgpfS5wcmV0dHkucC1pbWFnZSBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBpbWd7b3BhY2l0eToxfS5wcmV0dHkucC1zd2l0Y2ggaW5wdXR7bWluLXdpZHRoOjJlbX0ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZXtwb3NpdGlvbjpyZWxhdGl2ZX0ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZTpiZWZvcmV7Y29udGVudDonJztib3JkZXI6MXB4IHNvbGlkICNiZGMzYzc7Ym9yZGVyLXJhZGl1czo2MHB4O3dpZHRoOjJlbTtib3gtc2l6aW5nOnVuc2V0O2hlaWdodDpjYWxjKDFlbSArIDJweCk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7dG9wOmNhbGMoKDAlIC0gKDEwMCUgLSAxZW0pKSAtIDE2JSk7ei1pbmRleDowO3RyYW5zaXRpb246YWxsIC41cyBlYXNlfS5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVse3RleHQtaW5kZW50OjIuNWVtfS5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1zd2l0Y2ggLnN0YXRlIGxhYmVsOmJlZm9yZXt0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtib3JkZXItcmFkaXVzOjEwMCU7bGVmdDowO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOCk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOCk7dHJhbnNmb3JtOnNjYWxlKC44KX0ucHJldHR5LnAtc3dpdGNoIC5zdGF0ZSBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNiZGMzYzchaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGU6YmVmb3Jle2JvcmRlci1jb2xvcjojNWE2NTZifS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YmVmb3Jle29wYWNpdHk6MH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmFmdGVye2JhY2tncm91bmQtY29sb3I6IzVhNjU2YiFpbXBvcnRhbnQ7bGVmdDoxZW19LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGU6YmVmb3Jle2JvcmRlci1jb2xvcjojNWE2NTZiO2JhY2tncm91bmQtY29sb3I6IzVhNjU2YiFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLWZpbGwgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YmVmb3Jle29wYWNpdHk6MH0ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50O2xlZnQ6MWVtfS5wcmV0dHkucC1zd2l0Y2gucC1zbGltIC5zdGF0ZTpiZWZvcmV7aGVpZ2h0Oi4xZW07YmFja2dyb3VuZDojYmRjM2M3IWltcG9ydGFudDt0b3A6Y2FsYyg1MCUgLSAuMWVtKX0ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2Vkfi5zdGF0ZTpiZWZvcmV7Ym9yZGVyLWNvbG9yOiM1YTY1NmI7YmFja2dyb3VuZC1jb2xvcjojNWE2NTZiIWltcG9ydGFudH0ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyfi5zdGF0ZTpub3QoLnAtaXMtaG92ZXIpe2Rpc3BsYXk6bm9uZX0ucHJldHR5LnAtaGFzLWhvdmVyIGlucHV0OmhvdmVyfi5zdGF0ZS5wLWlzLWhvdmVye2Rpc3BsYXk6YmxvY2t9LnByZXR0eS5wLWhhcy1ob3ZlciBpbnB1dDpob3Zlcn4uc3RhdGUucC1pcy1ob3ZlciAuaWNvbntkaXNwbGF5OmJsb2NrfS5wcmV0dHkucC1oYXMtZm9jdXMgaW5wdXQ6Zm9jdXN+LnN0YXRlIGxhYmVsOmJlZm9yZXtib3gtc2hhZG93OjAgMCAzcHggMCAjYmRjM2M3fS5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlfi5zdGF0ZTpub3QoLnAtaXMtaW5kZXRlcm1pbmF0ZSl7ZGlzcGxheTpub25lfS5wcmV0dHkucC1oYXMtaW5kZXRlcm1pbmF0ZSBpbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlfi5zdGF0ZS5wLWlzLWluZGV0ZXJtaW5hdGV7ZGlzcGxheTpibG9ja30ucHJldHR5LnAtaGFzLWluZGV0ZXJtaW5hdGUgaW5wdXRbdHlwZT1jaGVja2JveF06aW5kZXRlcm1pbmF0ZX4uc3RhdGUucC1pcy1pbmRldGVybWluYXRlIC5pY29ue2Rpc3BsYXk6YmxvY2s7b3BhY2l0eToxfS5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb257b3BhY2l0eTowO2Rpc3BsYXk6bm9uZX0ucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZSAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlIGltZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLW9mZntvcGFjaXR5OjE7ZGlzcGxheTppbmhlcml0fS5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtb2ZmIC5pY29ue2NvbG9yOiNiZGMzYzd9LnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLW9ue29wYWNpdHk6MTtkaXNwbGF5OmluaGVyaXR9LnByZXR0eS5wLXRvZ2dsZSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLW9mZntvcGFjaXR5OjA7ZGlzcGxheTpub25lfS5wcmV0dHkucC1wbGFpbiBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXBsYWluLnAtdG9nZ2xlIC5zdGF0ZSBsYWJlbDpiZWZvcmV7Y29udGVudDpub25lfS5wcmV0dHkucC1wbGFpbi5wLXBsYWluIC5pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjEpfS5wcmV0dHkucC1yb3VuZCAuc3RhdGUgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXJvdW5kIC5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym9yZGVyLXJhZGl1czoxMDAlfS5wcmV0dHkucC1yb3VuZC5wLWljb24gLnN0YXRlIC5pY29ue2JvcmRlci1yYWRpdXM6MTAwJTtvdmVyZmxvdzpoaWRkZW59LnByZXR0eS5wLXJvdW5kLnAtaWNvbiAuc3RhdGUgLmljb246YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44KTstbXMtdHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm06c2NhbGUoLjgpfS5wcmV0dHkucC1jdXJ2ZSAuc3RhdGUgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLWN1cnZlIC5zdGF0ZSBsYWJlbDpiZWZvcmV7Ym9yZGVyLXJhZGl1czoyMCV9LnByZXR0eS5wLXNtb290aCAuaWNvbiwucHJldHR5LnAtc21vb3RoIC5zdmcsLnByZXR0eS5wLXNtb290aCBsYWJlbDphZnRlciwucHJldHR5LnAtc21vb3RoIGxhYmVsOmJlZm9yZXt0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZX0ucHJldHR5LnAtc21vb3RoIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmFmdGVye3RyYW5zaXRpb246YWxsIC4zcyBlYXNlfS5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgLmljb24sLnByZXR0eS5wLXNtb290aCBpbnB1dDpjaGVja2VkKy5zdGF0ZSAuc3ZnLC5wcmV0dHkucC1zbW9vdGggaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgaW1ney13ZWJraXQtYW5pbWF0aW9uOnpvb20gLjJzIGVhc2U7YW5pbWF0aW9uOnpvb20gLjJzIGVhc2V9LnByZXR0eS5wLXNtb290aC5wLWRlZmF1bHQgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgbGFiZWw6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246em9vbSAuMnMgZWFzZTthbmltYXRpb246em9vbSAuMnMgZWFzZX0ucHJldHR5LnAtc21vb3RoLnAtcGxhaW4gaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgbGFiZWw6YmVmb3Jle2NvbnRlbnQ6Jyc7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7LW1zLXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2V9LnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIC5pY29uLC5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSAuc3ZnLC5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBpbWcsLnByZXR0eS5wLXRhZGE6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10YWRhOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2VkKy5zdGF0ZSBsYWJlbDpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246dGFkYSAuN3MgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgMSBhbHRlcm5hdGU7YW5pbWF0aW9uOnRhZGEgLjdzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIDEgYWx0ZXJuYXRlO29wYWNpdHk6MX0ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIC5pY29uLC5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgLnN2ZywucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIGltZywucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmFmdGVyLC5wcmV0dHkucC1qZWxseTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZCsuc3RhdGUgbGFiZWw6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOmplbGx5IC43cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KTthbmltYXRpb246amVsbHkgLjdzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpO29wYWNpdHk6MX0ucHJldHR5LnAtamVsbHk6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWQrLnN0YXRlIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgLmljb24sLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgLnN2ZywucHJldHR5LnAtcm90YXRlOm5vdCgucC1kZWZhdWx0KSBpbnB1dDpjaGVja2Vkfi5zdGF0ZSBpbWcsLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXJvdGF0ZTpub3QoLnAtZGVmYXVsdCkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUgbGFiZWw6YmVmb3Jley13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZSAuN3MgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCk7YW5pbWF0aW9uOnJvdGF0ZSAuN3MgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCk7b3BhY2l0eToxfS5wcmV0dHkucC1yb3RhdGU6bm90KC5wLWRlZmF1bHQpIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LnByZXR0eS5wLXB1bHNlOm5vdCgucC1zd2l0Y2gpIGlucHV0OmNoZWNrZWR+LnN0YXRlIGxhYmVsOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjpwdWxzZSAxczthbmltYXRpb246cHVsc2UgMXN9LnByZXR0eSBpbnB1dFtkaXNhYmxlZF17Y3Vyc29yOm5vdC1hbGxvd2VkO2Rpc3BsYXk6bm9uZX0ucHJldHR5IGlucHV0W2Rpc2FibGVkXX4qe29wYWNpdHk6LjV9LnByZXR0eS5wLWxvY2tlZCBpbnB1dHtkaXNwbGF5Om5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5IGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM0MjhiY2EhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5IC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5IC5zdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5IC5pY29uLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeSAuc3Zne2NvbG9yOiNmZmY7c3Ryb2tlOiNmZmZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YmVmb3Jle2JvcmRlci1jb2xvcjojNDI4YmNhfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1wcmltYXJ5LW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeS1vIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5LW8gLnN2ZywucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtcHJpbWFyeS1vIHN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXByaW1hcnktbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtcHJpbWFyeS1vIHN2Z3tjb2xvcjojNDI4YmNhO3N0cm9rZTojNDI4YmNhfS5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXByaW1hcnktbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM0MjhiY2EhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5OmJlZm9yZXtib3JkZXItY29sb3I6IzQyOGJjYX0ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXByaW1hcnk6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzQyOGJjYSFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1wcmltYXJ5OmJlZm9yZXtib3JkZXItY29sb3I6IzI0NTY4MjtiYWNrZ3JvdW5kLWNvbG9yOiMyNDU2ODIhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGUhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvIC5zdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvIC5pY29uLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mbyAuc3Zne2NvbG9yOiNmZmY7c3Ryb2tlOiNmZmZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWluZm8tbyBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YmVmb3Jle2JvcmRlci1jb2xvcjojNWJjMGRlfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1pbmZvLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mby1vIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvLW8gLnN2ZywucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtaW5mby1vIHN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWluZm8tbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtaW5mby1vIHN2Z3tjb2xvcjojNWJjMGRlO3N0cm9rZTojNWJjMGRlfS5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWluZm8tbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM1YmMwZGUhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvOmJlZm9yZXtib3JkZXItY29sb3I6IzViYzBkZX0ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWluZm86YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzViYzBkZSFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1pbmZvOmJlZm9yZXtib3JkZXItY29sb3I6IzIzOTBiMDtiYWNrZ3JvdW5kLWNvbG9yOiMyMzkwYjAhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM1Y2I4NWMhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzIC5zdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzIC5pY29uLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2VzcyAuc3Zne2NvbG9yOiNmZmY7c3Ryb2tlOiNmZmZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YmVmb3Jle2JvcmRlci1jb2xvcjojNWNiODVjfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1zdWNjZXNzLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2Vzcy1vIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzLW8gLnN2ZywucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtc3VjY2Vzcy1vIHN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXN1Y2Nlc3MtbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtc3VjY2Vzcy1vIHN2Z3tjb2xvcjojNWNiODVjO3N0cm9rZTojNWNiODVjfS5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXN1Y2Nlc3MtbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM1Y2I4NWMhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzOmJlZm9yZXtib3JkZXItY29sb3I6IzVjYjg1Y30ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXN1Y2Nlc3M6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IzVjYjg1YyFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1zdWNjZXNzOmJlZm9yZXtib3JkZXItY29sb3I6IzM1NzkzNTtiYWNrZ3JvdW5kLWNvbG9yOiMzNTc5MzUhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nIGxhYmVsOmFmdGVyLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGUhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nIC5zdmcsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nIC5pY29uLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZyAuc3Zne2NvbG9yOiNmZmY7c3Ryb2tlOiNmZmZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDpiZWZvcmUsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YmVmb3Jle2JvcmRlci1jb2xvcjojZjBhZDRlfS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC13YXJuaW5nLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZy1vIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nLW8gLnN2ZywucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtd2FybmluZy1vIHN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLXdhcm5pbmctbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtd2FybmluZy1vIHN2Z3tjb2xvcjojZjBhZDRlO3N0cm9rZTojZjBhZDRlfS5wcmV0dHkucC1kZWZhdWx0Om5vdCgucC1maWxsKSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXdhcm5pbmctbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGFkNGUhaW1wb3J0YW50fS5wcmV0dHkucC1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nOmJlZm9yZXtib3JkZXItY29sb3I6I2YwYWQ0ZX0ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLXdhcm5pbmc6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2YwYWQ0ZSFpbXBvcnRhbnR9LnByZXR0eS5wLXN3aXRjaC5wLXNsaW0gaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC13YXJuaW5nOmJlZm9yZXtib3JkZXItY29sb3I6I2M3N2MxMTtiYWNrZ3JvdW5kLWNvbG9yOiNjNzdjMTEhaW1wb3J0YW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXIgbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmIWltcG9ydGFudH0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyIC5pY29uLC5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXIgLnN2ZywucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciAuaWNvbiwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlciAuc3Zne2NvbG9yOiNmZmY7c3Ryb2tlOiNmZmZ9LnByZXR0eSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZSwucHJldHR5LnAtdG9nZ2xlIC5zdGF0ZS5wLWRhbmdlci1vIGxhYmVsOmJlZm9yZXtib3JkZXItY29sb3I6I2Q5NTM0Zn0ucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXIsLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyBsYWJlbDphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wcmV0dHkgaW5wdXQ6Y2hlY2tlZH4uc3RhdGUucC1kYW5nZXItbyAuaWNvbiwucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyLW8gLnN2ZywucHJldHR5IGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyLW8gc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gLmljb24sLnByZXR0eS5wLXRvZ2dsZSAuc3RhdGUucC1kYW5nZXItbyAuc3ZnLC5wcmV0dHkucC10b2dnbGUgLnN0YXRlLnAtZGFuZ2VyLW8gc3Zne2NvbG9yOiNkOTUzNGY7c3Ryb2tlOiNkOTUzNGZ9LnByZXR0eS5wLWRlZmF1bHQ6bm90KC5wLWZpbGwpIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyLW8gbGFiZWw6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoIGlucHV0OmNoZWNrZWR+LnN0YXRlLnAtZGFuZ2VyOmJlZm9yZXtib3JkZXItY29sb3I6I2Q5NTM0Zn0ucHJldHR5LnAtc3dpdGNoLnAtZmlsbCBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlcjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojZDk1MzRmIWltcG9ydGFudH0ucHJldHR5LnAtc3dpdGNoLnAtc2xpbSBpbnB1dDpjaGVja2Vkfi5zdGF0ZS5wLWRhbmdlcjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiNhMDI2MjI7YmFja2dyb3VuZC1jb2xvcjojYTAyNjIyIWltcG9ydGFudH0ucHJldHR5LnAtYmlnZ2VyIC5pY29uLC5wcmV0dHkucC1iaWdnZXIgLmltZywucHJldHR5LnAtYmlnZ2VyIC5zdmcsLnByZXR0eS5wLWJpZ2dlciBsYWJlbDphZnRlciwucHJldHR5LnAtYmlnZ2VyIGxhYmVsOmJlZm9yZXtmb250LXNpemU6MS4yZW0haW1wb3J0YW50O3RvcDpjYWxjKCgwJSAtICgxMDAlIC0gMWVtKSkgLSAzNSUpIWltcG9ydGFudH0ucHJldHR5LnAtYmlnZ2VyIGxhYmVse3RleHQtaW5kZW50OjEuN2VtfUBtZWRpYSBwcmludHsucHJldHR5IC5zdGF0ZSAuaWNvbiwucHJldHR5IC5zdGF0ZSBsYWJlbDphZnRlciwucHJldHR5IC5zdGF0ZSBsYWJlbDpiZWZvcmUsLnByZXR0eSAuc3RhdGU6YmVmb3Jle2NvbG9yLWFkanVzdDpleGFjdDstd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDpleGFjdDtwcmludC1jb2xvci1hZGp1c3Q6ZXhhY3R9fVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnb3N3YWxkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRmOTtcXG59XFxuXFxuLnNpZyB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIFVuaXZlcnNhbCBTdHlsZXMgKi9cXG5cXG4ucHJldmVudFNlbGVjdCB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgc3ludGF4ICovXFxufVxcblxcbi5wb2ludGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud2hpdGVGb250IHtcXG4gICAgY29sb3I6ICNlNmUwZDU7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICNiY2I2YWI7XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDExMDBweDtcXG4gICAgaGVpZ2h0OiA2NTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxMTEsIDEwNywgMTAxLCAwLjMpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiB2dnYgU2lkZWJhciBDU1MgU3R5bGVzIHZ2diAqL1xcblxcbi5jb250YWluZXJMZWZ0IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDEgMSAyNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDNEMzk7XFxufVxcblxcbi5sb2dvSW1nIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxufVxcblxcbi5jYXRlZ29yeVRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRhNDQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2F0ZWdvcnlMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLyogXl5eIFNpZGViYXIgQ1NTIFN0eWxlcyBeXl4gKi9cXG5cXG4vKiB2dnYgQ29udGVudCBDb250YWluZXIgQ1NTIFN0eWxlcyB2dnYgKi9cXG5cXG4uY29udGFpbmVyUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMSAxIDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTk3LCAxODUpO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lclJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uY29udGVudFRpdGxlIHtcXG4gICAgY29sb3I6ICM1MzUwNGE7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogYXV0bztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnRhc2tDb250YWluZXJUaXRsZSB7XFxuICAgIGNvbG9yOiAjNTM1MDRhO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4udGFza0NvbnRhaW5lclN1YlRpdGxlIHtcXG4gICAgY29sb3I6ICM2OTY1NWQ7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuXFxufVxcblxcbi5jb21wbGV0ZUhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmNvbXBsZXRlVGFza0NvbnRhaW5lclRpdGxlIHtcXG4gICAgY29sb3I6ICM1MzUwNGE7XFxufVxcblxcbi5jb21wbGV0ZVNob3dCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC40KTtcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDJwO1xcbn1cXG5cXG4uaXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzOGU4NDtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG93ZXJDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5wcmlvcml0eUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnN0YXIge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FuY2VsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuXFxufVxcblxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjhjODM7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZTZlMGQ1O1xcbn1cXG5cXG4uaW5wdXRUZXh0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6ICNlNmUwZDU7XFxufVxcblxcbi5pbnB1dFRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNlNmUwZDU7XFxufVxcblxcbi5pbnB1dFRleHQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXRJY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnR5cGVJY29uLCAuZGF0ZUljb24sIC50aW1lSWNvbiB7ICAgXFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG4vKiB2diBQb3B1cCBTdHlsZXMgdnYgKi9cXG5cXG4ubWFpblBvcHVwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wb3B1cElucHV0ZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wb3B1cExhYmVsIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5wb3B1cE5hbWUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcblxcbi5wb3B1cFRleHRBcmVhIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTc1cHg7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbn1cXG5cXG4ucG9wdXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucG9wdXBEYXRlIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcblxcbi5wb3B1cFNlbGVjdCB7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnBvcHVwVGltZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXBEYXRlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNsZWFyQnRuIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyQnRuOmFjdGl2ZSwgLmNhbmNlbEJ0bjphY3RpdmUsIC5jb25maXJtQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5jbGVhckJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU2ZTY7XFxufVxcblxcbi5wb3B1cEJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4uY2FuY2VsQnRuLCAuY29uZmlybUJ0biB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNhbmNlbEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0NywgMTQ3KTtcXG59XFxuXFxuLmNhbmNlbEJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzcsIDEzNiwgMTM2KTtcXG59XFxuXFxuLmNvbmZpcm1CdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTcsIDApO1xcbn1cXG5cXG4uY29uZmlybUJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE0NCwgMCk7XFxufVxcblxcbi8qIF5eIFBvcHVwIFN0bHllcyBeXiAqL1xcblxcbi8qIF5eXiBDb250ZW50IENvbnRhaW5lciBDU1MgU3R5bGVzIFZWViAqL1xcblxcblxcbi8qID09PT09IFNjcm9sbGJhciBDU1MgPT09PT0gKi9cXG4gIC8qIEZpcmVmb3ggKi9cXG4gICoge1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XFxuICAgIHNjcm9sbGJhci1jb2xvcjogI2IyYWE5ZiAjY2NjNWI5O1xcbiAgfVxcblxcbiAgLyogQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXFxuICAqOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICB9XFxuXFxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M1Yjk7XFxuICB9XFxuXFxuICAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmFhOWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5NzkxODc7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0kseUJBQXlCLEVBQUUsV0FBVztJQUN0QyxxQkFBcUIsRUFBRSxvQkFBb0I7SUFDM0MsaUJBQWlCLEVBQUUsb0JBQW9CO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixr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QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSx1QkFBdUI7O0FBRXZCLHlDQUF5Qzs7O0FBR3pDLDhCQUE4QjtFQUM1QixZQUFZO0VBQ1o7SUFDRSxxQkFBcUI7SUFDckIsZ0NBQWdDO0VBQ2xDOztFQUVBLDZCQUE2QjtFQUM3QjtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ29zd2FsZCc7XFxuICAgIHNyYzogdXJsKC4vZm9udHMvT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGY5O1xcbn1cXG5cXG4uc2lnIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyogVW5pdmVyc2FsIFN0eWxlcyAqL1xcblxcbi5wcmV2ZW50U2VsZWN0IHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53aGl0ZUZvbnQge1xcbiAgICBjb2xvcjogI2U2ZTBkNTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogI2JjYjZhYjtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTEwMHB4O1xcbiAgICBoZWlnaHQ6IDY1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDExMSwgMTA3LCAxMDEsIDAuMyk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIHZ2diBTaWRlYmFyIENTUyBTdHlsZXMgdnZ2ICovXFxuXFxuLmNvbnRhaW5lckxlZnQgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDogMSAxIDI1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwM0QzOTtcXG59XFxuXFxuLmxvZ29JbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG59XFxuXFxuLmNhdGVnb3J5VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGE0NDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXRlZ29yeUxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4vKiBeXl4gU2lkZWJhciBDU1MgU3R5bGVzIF5eXiAqL1xcblxcbi8qIHZ2diBDb250ZW50IENvbnRhaW5lciBDU1MgU3R5bGVzIHZ2diAqL1xcblxcbi5jb250YWluZXJSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAxIDEgODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAxOTcsIDE4NSk7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyUmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5jb250ZW50VGl0bGUge1xcbiAgICBjb2xvcjogIzUzNTA0YTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiBhdXRvO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udGFza0NvbnRhaW5lclRpdGxlIHtcXG4gICAgY29sb3I6ICM1MzUwNGE7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcblxcbi50YXNrQ29udGFpbmVyU3ViVGl0bGUge1xcbiAgICBjb2xvcjogIzY5NjU1ZDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG5cXG59XFxuXFxuLmNvbXBsZXRlSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uY29tcGxldGVUYXNrQ29udGFpbmVyVGl0bGUge1xcbiAgICBjb2xvcjogIzUzNTA0YTtcXG59XFxuXFxuLmNvbXBsZXRlU2hvd0J0biB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMnA7XFxufVxcblxcbi5pdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTM4ZTg0O1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb3dlckNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnByaW9yaXR5Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uc3RhciB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYW5jZWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDFweDtcXG5cXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyOGM4MztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDJweDtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNlNmUwZDU7XFxufVxcblxcbi5pbnB1dFRleHQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2U2ZTBkNTtcXG59XFxuXFxuLmlucHV0VGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2U2ZTBkNTtcXG59XFxuXFxuLmlucHV0VGV4dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dEljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udHlwZUljb24sIC5kYXRlSWNvbiwgLnRpbWVJY29uIHsgICBcXG4gICAgd2lkdGg6IDI0cHg7XFxufVxcblxcbi8qIHZ2IFBvcHVwIFN0eWxlcyB2diAqL1xcblxcbi5tYWluUG9wdXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnBvcHVwSW5wdXRmaWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnBvcHVwTGFiZWwge1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnBvcHVwTmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLnBvcHVwVGV4dEFyZWEge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWluLWhlaWdodDogNTBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxNzVweDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcblxcbi5wb3B1cENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wb3B1cERhdGUge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLnBvcHVwU2VsZWN0IHsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucG9wdXBUaW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wb3B1cERhdGU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2xlYXJCdG4ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXJCdG46YWN0aXZlLCAuY2FuY2VsQnRuOmFjdGl2ZSwgLmNvbmZpcm1CdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmNsZWFyQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTZlNjtcXG59XFxuXFxuLnBvcHVwQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi5jYW5jZWxCdG4sIC5jb25maXJtQnRuIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTQ3LCAxNDcpO1xcbn1cXG5cXG4uY2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNywgMTM2LCAxMzYpO1xcbn1cXG5cXG4uY29uZmlybUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1NywgMCk7XFxufVxcblxcbi5jb25maXJtQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTQ0LCAwKTtcXG59XFxuXFxuLyogXl4gUG9wdXAgU3RseWVzIF5eICovXFxuXFxuLyogXl5eIENvbnRlbnQgQ29udGFpbmVyIENTUyBTdHlsZXMgVlZWICovXFxuXFxuXFxuLyogPT09PT0gU2Nyb2xsYmFyIENTUyA9PT09PSAqL1xcbiAgLyogRmlyZWZveCAqL1xcbiAgKiB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogYXV0bztcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjYjJhYTlmICNjY2M1Yjk7XFxuICB9XFxuXFxuICAvKiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgKi9cXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDNweDtcXG4gIH1cXG5cXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogI2NjYzViOTtcXG4gIH1cXG5cXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYWE5ZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk3OTE4NztcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcm9vdC5wb3B1cFMgPSBmYWN0b3J5KCk7XHJcbiAgICB9XHJcblxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgaXNPcGVuID0gZmFsc2UsXHJcbiAgICAgICAgcXVldWUgID0gW107XHJcblxyXG4gICAgLy8gTWF0Y2ggaW1hZ2UgZmlsZVxyXG4gICAgdmFyIFJfSU1HID0gbmV3IFJlZ0V4cCggLyhbXlxcL1xcXFxdKylcXC4oanBnfGpwZWd8cG5nfGdpZikkL2kgKTtcclxuXHJcbiAgICB2YXIgX2RlZmF1bHRzID0ge1xyXG4gICAgICAgIGFkZGl0aW9uYWxCYXNlQ2xhc3M6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxCdXR0b25Ib2xkZXJDbGFzczogJycsXHJcbiAgICAgICAgYWRkaXRpb25hbEJ1dHRvbk9rQ2xhc3M6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxCdXR0b25DYW5jZWxDbGFzczogJycsXHJcbiAgICAgICAgYWRkaXRpb25hbENsb3NlQnRuQ2xhc3M6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxGb3JtQ2xhc3M6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxPdmVybGF5Q2xhc3M6ICcnLFxyXG4gICAgICAgIGFkZGl0aW9uYWxQb3B1cENsYXNzOiAnJyxcclxuICAgICAgICBhcHBlbmRMb2NhdGlvbjogKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSxcclxuICAgICAgICBiYXNlQ2xhc3NOYW1lOiAncG9wdXBTJyxcclxuICAgICAgICBjbG9zZUJ0bjogJyZ0aW1lczsnLFxyXG4gICAgICAgIGZsYWdCb2R5U2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICBmbGFnQnV0dG9uUmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgZmxhZ0Nsb3NlQnlFc2M6IHRydWUsXHJcbiAgICAgICAgZmxhZ0Nsb3NlQnlPdmVybGF5OiB0cnVlLFxyXG4gICAgICAgIGZsYWdTaG93Q2xvc2VCdG46IHRydWUsXHJcbiAgICAgICAgbGFiZWxPazogJ09LJyxcclxuICAgICAgICBsYWJlbENhbmNlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgbG9hZGVyOiAnc3Bpbm5lcicsXHJcbiAgICAgICAgekluZGV4OiAxMDAwMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciB0cmFuc2l0aW9uID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0LCB0eXBlO1xyXG4gICAgICAgIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmFrZWVsZW1lbnRcIik7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25zID0ge1xyXG4gICAgICAgICAgICBcIldlYmtpdFRyYW5zaXRpb25cIjogXCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsXHJcbiAgICAgICAgICAgIFwiTW96VHJhbnNpdGlvblwiOiBcInRyYW5zaXRpb25lbmRcIixcclxuICAgICAgICAgICAgXCJPVHJhbnNpdGlvblwiOiBcIm90cmFuc2l0aW9uZW5kXCIsXHJcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zaXRpb25lbmRcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvcih0IGluIHRyYW5zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gdHJhbnNpdGlvbnNbdF07XHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHN1cHBvcnRlZDogc3VwcG9ydGVkXHJcbiAgICAgICAgfTtcclxuICAgIH0pKClcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjbGFzcyAgIFBvcHVwU1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBQb3B1cFMoKSB7fVxyXG5cclxuICAgIFBvcHVwUy5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgY29uc3RydWN0b3I6IFBvcHVwUyxcclxuXHJcbiAgICAgICAgX29wZW46IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgLy9lcnJvciBjYXRjaGluZ1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubW9kZSAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwibW9kZSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGl0bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIG9wdGlvbnMudGl0bGUgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcInRpdGxlIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygb3B0aW9ucy5wbGFjZWhvbGRlciAhPT0gXCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwicGxhY2Vob2xkZXIgbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgPSBfZXh0ZW5kKHt9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBfZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgICAgICEobmFtZSBpbiBvcHRpb25zKSAmJiAob3B0aW9uc1tuYW1lXSA9IF9kZWZhdWx0c1tuYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRyYWlsIGFsbCBjbGFzc2VzIGRpdmlkZWQgYnkgcGVyaW9kc1xyXG4gICAgICAgICAgICBfZWFjaChbJ2FkZGl0aW9uYWxCYXNlQ2xhc3MnLCAnYWRkaXRpb25hbEJ1dHRvbkhvbGRlckNsYXNzJywgJ2FkZGl0aW9uYWxCdXR0b25Pa0NsYXNzJywgJ2FkZGl0aW9uYWxCdXR0b25DYW5jZWxDbGFzcycsICdhZGRpdGlvbmFsQ2xvc2VCdG5DbGFzcycsICdhZGRpdGlvbmFsRm9ybUNsYXNzJywgJ2FkZGl0aW9uYWxPdmVybGF5Q2xhc3MnLCAnYWRkaXRpb25hbFBvcHVwQ2xhc3MnXSwgZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gb3B0aW9uc1tvcHRpb25dLnNwbGl0KCcgJykuam9pbignLicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1tvcHRpb25dID0gJy4nICsgc3RyaW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2ZuXSA9IF9iaW5kKHRoaXMsIHRoaXNbZm5dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pbml0aWFsaXplIGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gZG9uZVxyXG4gICAgICAgICAgICB0aGlzLl9pbml0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBmb3JjZWQsIGNsb3NlIGFsbCBvdGhlcnNcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5mb3JjZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHF1ZXVlLnB1c2gob3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBpZighaXNPcGVuIHx8IG9wdGlvbnMuZm9yY2UgPT09IHRydWUpIHRoaXMuX2NyZWF0ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2luaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBpZiBpIHBhc3NlZCBhIG9wYWNpdHkgYXR0cmlidXRlIHRvIHRoZSBsYXllciBvbkNsb3NlLCByZW1vdmUgaXQgb24gaW5pdGlhbGl6YXRpb25cclxuICAgICAgICAgICAgaWYodGhpcy4kbGF5ZXJFbCAmJiB0aGlzLiRsYXllckVsLnN0eWxlLm9wYWNpdHkpIHRoaXMuJGxheWVyRWwuc3R5bGUub3BhY2l0eSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLiR3cmFwRWwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kd3JhcEVsID0gX2J1aWxkRE9NKHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYuJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1iYXNlJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEJhc2VDbGFzcyA/IHRoaXMub3B0aW9ucy5hZGRpdGlvbmFsQmFzZUNsYXNzIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IHRoaXMub3B0aW9ucy56SW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF9hcHBlbmRDaGlsZCh0aGlzLiR3cmFwRWwsIHRoaXMuX2dldE92ZXJsYXkoKSk7XHJcbiAgICAgICAgICAgICAgICBfYXBwZW5kQ2hpbGQodGhpcy4kd3JhcEVsLCB0aGlzLl9nZXRMYXllcigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2dldE92ZXJsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRvdmVybGF5RWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXlFbCA9IF9idWlsZERPTSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnI3BvcHVwUy1vdmVybGF5LicgKyB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzTmFtZSArICctb3ZlcmxheScgKyAodGhpcy5vcHRpb25zLmFkZGl0aW9uYWxPdmVybGF5Q2xhc3MgPyB0aGlzLm9wdGlvbnMuYWRkaXRpb25hbE92ZXJsYXlDbGFzcyA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1velVzZXJTZWxlY3Q6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXlFbC5zZXRBdHRyaWJ1dGUoXCJ1bnNlbGVjdGFibGVcIiwgXCJvblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG92ZXJsYXlFbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9nZXRMYXllcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZighdGhpcy4kbGF5ZXJFbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsYXllckVsID0gX2J1aWxkRE9NKHtcclxuICAgICAgICAgICAgICAgICAgICBjc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICcuJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1sYXllcicgKyAodGhpcy5vcHRpb25zLmFkZGl0aW9uYWxQb3B1cENsYXNzID8gdGhpcy5vcHRpb25zLmFkZGl0aW9uYWxQb3B1cENsYXNzIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGxheWVyRWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfcmVzZXRMYXllcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy4kbGF5ZXJFbC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGFrZXMgdGhlIGZpcnN0IGl0ZW0gZnJvbSB0aGUgcXVldWVcclxuICAgICAgICAgKiBjcmVhdGVzIG9yIG92ZXJ3cml0ZXMgdGhlIE92ZXJsYXkgYW5kIGFkZHMgRXZlbnRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9jcmVhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHF1ZXVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbW9kZSA9IGl0ZW0ubW9kZTtcclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlcyB0aGUgUG9wdXAuIE92ZXJ3cml0ZXMgdGhlIG9sZCBvbmUgaWYgb25lIGV4aXN0cy5cclxuICAgICAgICAgICAgaWYgKG1vZGUgIT0gJ21vZGFsLWFqYXgnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVQb3B1cChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRDb250ZW50cyhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHZlcnkgaW1wb3J0YW50IGZvciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgICAgIC8vIHRoZXNlIGxpbmVzIG1ha2Ugc3VyZSBjYWxsYmFja3Mgb24gdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IHdpbGwgYmUgZGlzcGxheWVkLlxyXG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbkRvbmUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBfdW5iaW5kKHNlbGYuJGxheWVyRWwsIHRyYW5zaXRpb24udHlwZSwgdHJhbnNpdGlvbkRvbmUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZih0cmFuc2l0aW9uLnN1cHBvcnRlZCl7XHJcbiAgICAgICAgICAgICAgICBfYmluZChzZWxmLiRsYXllckVsLCB0cmFuc2l0aW9uLnR5cGUsIHRyYW5zaXRpb25Eb25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2NyZWF0ZVBvcHVwOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBidG5PaywgYnRuQ2FuY2VsLCBodG1sT2JqO1xyXG4gICAgICAgICAgICB2YXIgbW9kZSAgICAgICAgPSBpdGVtLm1vZGU7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZSAgICAgICA9IGl0ZW0udGl0bGU7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50ICAgICA9IGl0ZW0uY29udGVudDtcclxuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSAgID0gKGl0ZW0uY2xhc3NOYW1lID8gJy4nICsgaXRlbS5jbGFzc05hbWUgOiAnJyk7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50T2JqICA9ICgoY29udGVudCBpbnN0YW5jZW9mIE9iamVjdCkgPyB0cnVlIDogZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7XHJcbiAgICAgICAgICAgICAgICBvbk9wZW46IGl0ZW0ub25PcGVuLFxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ6IGl0ZW0ub25TdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBpdGVtLm9uQ2xvc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGJ0bk9rID0ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiAgJ2J1dHRvbiNwb3B1cFMtYnV0dG9uLW9rLicgKyB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzTmFtZSArICctYnV0dG9uLW9rJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEJ1dHRvbk9rQ2xhc3MgPyB0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEJ1dHRvbk9rQ2xhc3MgOiAnJyksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLm9wdGlvbnMubGFiZWxPayB9O1xyXG4gICAgICAgICAgICBidG5DYW5jZWwgPSB7XHJcbiAgICAgICAgICAgICAgICB0YWc6ICAnYnV0dG9uI3BvcHVwUy1idXR0b24tY2FuY2VsLicgKyB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzTmFtZSArICctYnV0dG9uLW9rJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEJ1dHRvbkNhbmNlbENsYXNzID8gdGhpcy5vcHRpb25zLmFkZGl0aW9uYWxCdXR0b25DYW5jZWxDbGFzcyA6ICcnKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMub3B0aW9ucy5sYWJlbENhbmNlbCB9O1xyXG5cclxuICAgICAgICAgICAgaHRtbE9iaiA9IFtcclxuICAgICAgICAgICAgICAgIHsgaHRtbDogY29udGVudCB9LFxyXG4gICAgICAgICAgICAgICAgbW9kZSAhPSAnbW9kYWwnICYmIG1vZGUgIT0gJ21vZGFsLWFqYXgnICYmIG1vZGUgPT0gJ3Byb21wdCcgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2Zvcm0uJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1mb3JtJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEZvcm1DbGFzcyA/IHRoaXMub3B0aW9ucy5hZGRpdGlvbmFsRm9ybUNsYXNzIDogJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGxhY2Vob2xkZXIgJiYgeyB0YWc6ICAgICAnbGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I6ICdwb3B1cFMtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICAgIGl0ZW0ucGxhY2Vob2xkZXIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0YWc6ICAnaW5wdXQjcG9wdXBTLWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtb2RlICE9ICdtb2RhbCcgJiYgbW9kZSAhPSAnbW9kYWwtYWpheCcgJiYgeyB0YWc6ICduYXYuJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1idXR0b25zJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbEJ1dHRvbkhvbGRlckNsYXNzID8gdGhpcy5vcHRpb25zLmFkZGl0aW9uYWxCdXR0b25Ib2xkZXJDbGFzcyA6ICcnKSxcclxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobW9kZSA9PSAncHJvbXB0JyB8fCBtb2RlID09ICdjb25maXJtJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKCF0aGlzLm9wdGlvbnMuZmxhZ0J1dHRvblJldmVyc2UgPyBbYnRuQ2FuY2VsLCBidG5Pa10gOiBbYnRuT2ssIGJ0bkNhbmNlbF0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbYnRuT2tdXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgY29udGVudCA9IF9idWlsZERPTSh7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YWc6ICdhI3BvcHVwUy1yZXNldEZvY3VzQmFjay4nICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLXJlc2V0Rm9jdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OidSZXNldCBGb2N1cycgfSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vcHRpb25zLmZsYWdTaG93Q2xvc2VCdG4gJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuI3BvcHVwUy1jbG9zZS4nICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLWNsb3NlJyArICh0aGlzLm9wdGlvbnMuYWRkaXRpb25hbENsb3NlQnRuQ2xhc3MgPyB0aGlzLm9wdGlvbnMuYWRkaXRpb25hbENsb3NlQnRuQ2xhc3MgOiAnJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHRoaXMub3B0aW9ucy5jbG9zZUJ0blxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aXRsZSAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogICdoNS4nICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLXRpdGxlJyArIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGl0bGUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0YWc6ICAgICAgJy4nICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLWNvbnRlbnQnICsgY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IChjb250ZW50T2JqICYmIGNvbnRlbnQgfHwgaHRtbE9iaikgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRhZzonYSNwb3B1cFMtcmVzZXRGb2N1cy4nICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLXJlc2V0Rm9jdXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjonIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OidSZXNldCBGb2N1cyd9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRMYXllcigpO1xyXG4gICAgICAgICAgICBfYXBwZW5kQ2hpbGQodGhpcy4kbGF5ZXJFbC5jaGlsZE5vZGVzWzBdLCBjb250ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fYXBwZW5kUG9wdXAoKTtcclxuICAgICAgICAgICAgdGhpcy4kY29udGVudEVsID0gdGhpcy4kbGF5ZXJFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1jb250ZW50JylbMF07XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRidG5SZXNldCAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBTLXJlc2V0Rm9jdXMnKTtcclxuICAgICAgICAgICAgdGhpcy4kYnRuUmVzZXRCYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwUy1yZXNldEZvY3VzQmFjaycpO1xyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIHJlc2V0IGZvY3VzIGxpbmtcclxuICAgICAgICAgICAgLy8gdGhpcyBlbnN1cmVzIHRoYXQgdGhlIGtleWJvYXJkIGZvY3VzIGRvZXMgbm90XHJcbiAgICAgICAgICAgIC8vIGV2ZXIgbGVhdmUgdGhlIGRpYWxvZyBib3ggdW50aWwgYW4gYWN0aW9uIGhhc1xyXG4gICAgICAgICAgICAvLyBiZWVuIHRha2VuXHJcbiAgICAgICAgICAgIF9vbih0aGlzLiRidG5SZXNldCwgJ2ZvY3VzJywgdGhpcy5fcmVzZXRFdmVudCk7XHJcbiAgICAgICAgICAgIF9vbih0aGlzLiRidG5SZXNldEJhY2ssICdmb2N1cycsIHRoaXMuX3Jlc2V0RXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9jdXMgdGhlIGZpcnN0IGlucHV0IGluIHRoZSBsYXllciBFbGVtZW50XHJcbiAgICAgICAgICAgIF9hdXRvRm9jdXModGhpcy4kbGF5ZXJFbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2hpY2ggYnV0dG9ucyBvciBpbnB1dCBmaWVsZHMgYXJlIGRlZmluZWQgZm9yIHRoZSBFdmVudExpc3RlbmVyc1xyXG4gICAgICAgICAgICB0aGlzLiRidG5PSyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFMtYnV0dG9uLW9rJykgfHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLiRidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBTLWJ1dHRvbi1jYW5jZWwnKSB8fCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwUy1pbnB1dCcpIHx8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuJGJ0bk9LICE9PSBcInVuZGVmaW5lZFwiKSAgICAgX29uKHRoaXMuJGJ0bk9LLCBcImNsaWNrXCIsIHRoaXMuX29rRXZlbnQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kYnRuQ2FuY2VsICE9PSBcInVuZGVmaW5lZFwiKSBfb24odGhpcy4kYnRuQ2FuY2VsLCBcImNsaWNrXCIsIHRoaXMuX2NhbmNlbEV2ZW50KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBldmVudGxpc3RlbmVycyBmb3Igb3ZlcmxheSBhbmQgeFxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZsYWdTaG93Q2xvc2VCdG4pICAgX29uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFMtY2xvc2UnKSwgXCJjbGlja1wiLCB0aGlzLl9jYW5jZWxFdmVudCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmxhZ0Nsb3NlQnlPdmVybGF5KSBfb24odGhpcy4kb3ZlcmxheUVsLCBcImNsaWNrXCIsIHRoaXMuX2NhbmNlbEV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxpc3RlbiBmb3Iga2V5c1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZsYWdDbG9zZUJ5RXNjKSBfb24oZG9jdW1lbnQuYm9keSwgXCJrZXl1cFwiLCB0aGlzLl9rZXlFdmVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjYWxsYmFjayBvbk9wZW5cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzLm9uT3BlbiA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLmNhbGxiYWNrcy5vbk9wZW4uY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfYXBwZW5kUG9wdXAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHRhcmdldCBFbGVtZW50IGFuZCBhZGQgdGhlIEVsZW1lbnQgdG8gdGhlIERPTVxyXG4gICAgICAgICAgICB0aGlzLiR0YXJnZXRFbCA9IHRoaXMub3B0aW9ucy5hcHBlbmRMb2NhdGlvbjtcclxuICAgICAgICAgICAgX2FwcGVuZENoaWxkKHRoaXMuJHRhcmdldEVsLCB0aGlzLiR3cmFwRWwpO1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGVsZW1lbnQgbGV2ZWwgc3R5bGUgZm9yIG92ZXJmbG93IGlmIHRoZSBvcHRpb24gd2FzIHNldC5cclxuICAgICAgICAgICAgaWYgKCh0aGlzLiR0YXJnZXRFbCA9PT0gKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSkgJiYgdGhpcy5vcHRpb25zLmZsYWdCb2R5U2Nyb2xsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgX2Nzcyh0aGlzLiR0YXJnZXRFbCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWRkaW5nIGVsZW1lbnRzIHRvIHRoZSBET00sIHVzZSBjb21wdXRlZFN0eWxlXHJcbiAgICAgICAgICAgIC8vIHRvIGZvcmNlIHRoZSBicm93c2VyIHRvIHJlY2FsYyBhbmQgcmVjb2duaXplIHRoZSBlbGVtZW50c1xyXG4gICAgICAgICAgICAvLyB0aGF0IHdlIGp1c3QgYWRkZWQuIFRoaXMgaXMgc28gdGhhdCBvdXIgQ1NTIEFuaW1hdGlvbiBoYXMgYSBzdGFydCBwb2ludC5cclxuICAgICAgICAgICAgaWYod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuJHdyYXBFbCwgbnVsbCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NSZWcgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIih8XFxcXHMrKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHMrfCQpXCIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgY2xhc3MgKi1vcGVuIGRvZXNuJ3QgZXhpc3RzIGluIHRoZSB3cmFwIEVsZW1lbnQgYXBwZW5kIGl0LlxyXG4gICAgICAgICAgICBpZiAoIShjbGFzc1JlZygnICcgKyB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzTmFtZSArICctb3BlbicpLnRlc3QodGhpcy4kd3JhcEVsLmNsYXNzTmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiR3cmFwRWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1vcGVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIShjbGFzc1JlZygnICcgKyB0aGlzLm9wdGlvbnMuYmFzZUNsYXNzTmFtZSArICctb3BlbicpLnRlc3QodGhpcy4kbGF5ZXJFbC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsYXllckVsLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lICs9ICcgJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1vcGVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2hpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIHF1ZXVlXHJcbiAgICAgICAgICAgIHF1ZXVlLnNwbGljZSgwLDEpO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBsYXN0IGl0ZW0gaW4gcXVldWVcclxuICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHRoaXMuX2NyZWF0ZSgpO1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZVdyYXAgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHdyYXAgZWxlbWVudCBmcm9tIHRoZSBET01cclxuICAgICAgICAgICAgICAgICAgICBfcmVtb3ZlRWxlbWVudChzZWxmLiR3cmFwRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZWxlbWVudCBsZXZlbCBzdHlsZSBmb3Igb3ZlcmZsb3cgaWYgdGhlIG9wdGlvbiB3YXMgc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoc2VsZi4kdGFyZ2V0RWwgPT09IChkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpICYmIHNlbGYub3B0aW9ucy5mbGFnQm9keVNjcm9sbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuJHRhcmdldEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiR0YXJnZXRFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHRhcmdldEVsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25Eb25lID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1bmJpbmQgZXZlbnQgc28gZnVuY3Rpb24gb25seSBnZXRzIGNhbGxlZCBvbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgX29mZihzZWxmLiR3cmFwRWwsIHRyYW5zaXRpb24udHlwZSwgdHJhbnNpdGlvbkRvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgRWxlbWVudCBmcm9tIHRoZSBET00gYWZ0ZXIgVHJhbnNpdGlvbiBpcyBEb25lXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlV3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNpdGlvbkRvbmVMYXllciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5iaW5kIGV2ZW50IHNvIGZ1bmN0aW9uIG9ubHkgZ2V0cyBjYWxsZWQgb25jZVxyXG4gICAgICAgICAgICAgICAgICAgIF9vZmYoc2VsZi4kbGF5ZXJFbCwgdHJhbnNpdGlvbi50eXBlLCB0cmFuc2l0aW9uRG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZXMgdGhlIG9wZW4gY2xhc3MgZnJvbSB0aGUgd3JhcCAmIGxheWVyIEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBhZGRzIGFuIEV2ZW50TGlzdGVuZXIgdG8gdGhpcyBFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCByZW1vdmVzIGl0IGZyb20gdGhlIERPTSBhZnRlciB0aGUgVHJhbnNpdGlvbiBpcyBkb25lLlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHdyYXBFbC5jbGFzc05hbWUgPSB0aGlzLiR3cmFwRWwuY2xhc3NOYW1lLnJlcGxhY2UoJyAnICsgdGhpcy5vcHRpb25zLmJhc2VDbGFzc05hbWUgKyAnLW9wZW4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbi5zdXBwb3J0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIF9vbihzZWxmLiR3cmFwRWwsIHRyYW5zaXRpb24udHlwZSwgdHJhbnNpdGlvbkRvbmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVXcmFwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRsYXllckVsLmNoaWxkTm9kZXNbMF0uY2xhc3NOYW1lID0gdGhpcy4kbGF5ZXJFbC5jaGlsZE5vZGVzWzBdLmNsYXNzTmFtZS5yZXBsYWNlKCcgJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1vcGVuJywgJycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24uc3VwcG9ydGVkKSBfb24oc2VsZi4kbGF5ZXJFbCwgdHJhbnNpdGlvbi50eXBlLCB0cmFuc2l0aW9uRG9uZUxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIC8vLy8gQXN5bmMgLy8vL1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogc2V0cyB0aGUgc3RhdGUgb2YgdGhlIGxvYWRpbmcgTGF5ZXJcclxuICAgICAgICAgKiBhbmQgYXBwZW5kcyBpdCB0byB0aGUgRG9tXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gICB7Qm9vbH0gIHN0YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2xvYWRpbmc6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGxvYWRpbmdFbCA9IF9idWlsZERPTSh7XHJcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYuJyArIHRoaXMub3B0aW9ucy5iYXNlQ2xhc3NOYW1lICsgJy1sb2FkaW5nLicgKyB0aGlzLm9wdGlvbnMubG9hZGVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzZXRMYXllcigpO1xyXG4gICAgICAgICAgICAgICAgX2Nzcyh0aGlzLiRsYXllckVsLmNoaWxkTm9kZXNbMF0se1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzYwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMzBweCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX2FwcGVuZENoaWxkKHRoaXMuJGxheWVyRWwuY2hpbGROb2Rlc1swXSwgdGhpcy4kbG9hZGluZ0VsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZFBvcHVwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfY3NzKHRoaXMuJGxheWVyRWwuY2hpbGROb2Rlc1swXSx7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGxvYWQgQXN5bmNocm9ub3VzIEZpbGVzXHJcbiAgICAgICAgICogY2FuIGJlIEltYWdlcyBvciBGaWxlcyB2aWEgQWpheFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHBhcmFtICAge09iamVjdH0gICAgaXRlbVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9sb2FkQ29udGVudHM6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IGl0ZW0uYWpheC51cmwsXHJcbiAgICAgICAgICAgICAgICBzdHIgPSAodHlwZW9mIGl0ZW0uYWpheC5zdHIgIT0gXCJ1bmRlZmluZWRcIik/IGl0ZW0uYWpheC5zdHIgOiAnJyxcclxuICAgICAgICAgICAgICAgIHBvc3QgPSAodHlwZW9mIGl0ZW0uYWpheC5wb3N0ICE9IFwidW5kZWZpbmVkXCIpPyBpdGVtLmFqYXgucG9zdCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vIE1hdGNoIGltYWdlIGZpbGVcclxuICAgICAgICAgICAgaWYgKHVybC5tYXRjaChSX0lNRykpIHsvLy5leGVjKHVybCkgIT09IG51bGxcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgaW1hZ2UgRWxlbWVudCwgbm90IHZpc2libGVcclxuICAgICAgICAgICAgICAgIHZhciBpbWdFbGVtZW50ID0gX2J1aWxkRE9NKHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAgICdpbWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmMgOiAgIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZUxvYWRJbWFnZShpbWdFbGVtZW50LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY29udGVudCA9IGltZ0VsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fY3JlYXRlUG9wdXAoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGdldCB1cmwgdmlhIGFqYXhcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FqYXgodXJsLCBzdHIsIHBvc3QsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHR1cm4gdGhlIHJlc3VsdCBpbiBhIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFqYXhFbGVtZW50ID0gX2J1aWxkRE9NKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuZXdseSBjcmVhdGVkIEhUTUxFbGVtZW50IGdvdCBhbnkgSW1hZ2VzIHdpdGhpbiBpdC5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9wcmVMb2FkSW1hZ2UoYWpheEVsZW1lbnQsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbnRlbnQgPSBhamF4RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY3JlYXRlUG9wdXAoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYmVmb3JlIFNlbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9sb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIF9wcmVMb2FkSW1hZ2UgOiBmdW5jdGlvbihwYXJlbnROb2RlLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBfZ2V0RWxlbWVudHNCeVRhZ05hbWUocGFyZW50Tm9kZSwgJ2ltZycpO1xyXG4gICAgICAgICAgICB2YXIgaSA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHF1ZXVlID0gaTtcclxuICAgICAgICAgICAgdmFyIGltZztcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGktLSl7XHJcbiAgICAgICAgICAgICAgICBpbWcgPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIC8vaW4gY2FzZSB0aGUncmUgYWxyZWFkeSBjYWNoZWQgYnkgdGhlIGJyb3dzZXIgZGVjcmVtZW50IHF1ZXVlXHJcbiAgICAgICAgICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfb24oaW1nLCAnbG9hZCcsIGNvbXBsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBfb24oaW1nLCAnZXJyb3InLCBjb21wbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pbiBjYXNlIHRoZSdyZSBhbHJlYWR5IGNhY2hlZCBieSB0aGUgYnJvd3NlclxyXG4gICAgICAgICAgICAhcXVldWUgJiYgY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZigtLXF1ZXVlIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoaS0tKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9vZmYoaW1nLCAnbG9hZCcsIGNvbXBsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX29mZihpbWcsICdlcnJvcicsIGNvbXBsZXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGFqYXggcmVxdWVzdFxyXG4gICAgICAgICAqIHdpdGggY2FsbGJhY2sgYW5kIGJlZm9yZVNlbmRcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgIGZpbGVuYW1lXHJcbiAgICAgICAgICogQHBhcmFtICAge1N0cmluZ30gICAgc3RyXHJcbiAgICAgICAgICogQHBhcmFtICAge0Jvb2x9ICAgICAgcG9zdFxyXG4gICAgICAgICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gIGNhbGxiYWNrXHJcbiAgICAgICAgICogQHBhcmFtICAge0Z1bmN0aW9ufSAgYmVmb3JlU2VuZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9hamF4OiBmdW5jdGlvbihmaWxlbmFtZSwgc3RyLCBwb3N0LCBjYWxsYmFjaywgYmVmb3JlU2VuZCkge1xyXG4gICAgICAgICAgICB2YXIgYWpheDtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCl7XHJcbiAgICAgICAgICAgICAgICBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7Ly9JRTcrLCBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpe1xyXG4gICAgICAgICAgICAgICAgYWpheCA9IG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7Ly9JRTYvNVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpKXtcclxuICAgICAgICAgICAgICAgIGFqYXggPSBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sMi5YTUxIVFRQXCIpOy8vb3RoZXJcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yOiBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBBSkFYLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhamF4Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGFqYXgucmVhZHlTdGF0ZSA9PSA0ICYmIGFqYXguc3RhdHVzID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjay5jYWxsKGFqYXgucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYocG9zdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGFqYXgub3BlbihcIkdFVFwiLCBmaWxlbmFtZSArIHN0ciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhamF4LnNlbmQobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhamF4Lm9wZW4oXCJQT1NUXCIsIGZpbGVuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFqYXguc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGFqYXguc2VuZChzdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJlZm9yZVNlbmQpIGJlZm9yZVNlbmQuY2FsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWpheDtcclxuICAgICAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAvLy8vIEV2ZW50cyAvLy8vXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vb2sgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgIF9va0V2ZW50OiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50LnByZXZlbnREZWZhdWx0ICE9PSBcInVuZGVmaW5lZFwiKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayBvblN1Ym1pdCBpZiBvbmUgaXMgZGVmaW5lZC4gdGhpcyByZWZlcmVuY2VzIHRvIF9wb3B1cFNcclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuY2FsbGJhY2tzLm9uU3VibWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLiRpbnB1dCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uU3VibWl0LmNhbGwodGhpcywgdGhpcy4kaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblN1Ym1pdC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhpZGUgcG9wdXAgYW5kIGRldGFjaCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICAgICB0aGlzLl9jb21tb25FdmVudCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gY2FuY2VsIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICBfY2FuY2VsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnQucHJldmVudERlZmF1bHQgIT09IFwidW5kZWZpbmVkXCIpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIG9uQ2xvc2UgaWYgb25lIGlzIGRlZmluZWQuIHRoaXMgcmVmZXJlbmNlcyB0byBfcG9wdXBTXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLmNhbGxiYWNrcy5vbkNsb3NlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uQ2xvc2UuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jb21tb25FdmVudCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gY29tbW9uIGV2ZW50IGhhbmRsZXIgKGtleXVwLCBvayBhbmQgY2FuY2VsKVxyXG4gICAgICAgIF9jb21tb25FdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kYnRuT0sgIT09IFwidW5kZWZpbmVkXCIpICAgICBfb2ZmKHRoaXMuJGJ0bk9LLCBcImNsaWNrXCIsIHRoaXMuX29rRXZlbnQpO1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kYnRuQ2FuY2VsICE9PSBcInVuZGVmaW5lZFwiKSBfb2ZmKHRoaXMuJGJ0bkNhbmNlbCwgXCJjbGlja1wiLCB0aGlzLl9jYW5jZWxFdmVudCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmxhZ1Nob3dDbG9zZUJ0bikgICBfb2ZmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cFMtY2xvc2UnKSwgXCJjbGlja1wiLCB0aGlzLl9jYW5jZWxFdmVudCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmxhZ0Nsb3NlQnlPdmVybGF5KSBfb2ZmKHRoaXMuJG92ZXJsYXlFbCwgXCJjbGlja1wiLCB0aGlzLl9jYW5jZWxFdmVudCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmxhZ0Nsb3NlQnlFc2MpICAgICBfb2ZmKGRvY3VtZW50LmJvZHksIFwia2V5dXBcIiwgdGhpcy5fa2V5RXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcmVzZXQgZm9jdXMgdG8gZmlyc3QgaXRlbSBpbiB0aGUgcG9wdXBcclxuICAgICAgICBfcmVzZXRFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgX2F1dG9Gb2N1cyh0aGlzLiRsYXllckVsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGtleUV2ZW50IExpc3RlbmVyIGZvciBFbnRlciBhbmQgRXNjYXBlXHJcbiAgICAgICAgX2tleUV2ZW50OiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLiRpbnB1dCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBrZXlDb2RlID09PSAxMykgdGhpcy5fb2tFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIGlmKGtleUNvZGUgPT09IDI3KSB0aGlzLl9jYW5jZWxFdmVudChldmVudCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb250ZXh0IGJpbmRpbmdcclxuICAgICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gIGN0eCAgICAgY29udGV4dFxyXG4gICAgICogQHBhcmFtICAge0Z1bmN0aW9ufSAgZm4gICAgICBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBfYmluZChjdHgsIGZuKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XHJcbiAgICAgICAgcmV0dXJuICBmbi5iaW5kID8gZm4uYmluZC5hcHBseShmbiwgW2N0eF0uY29uY2F0KGFyZ3MpKSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGN0eCwgYXJncy5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogT2JqZWN0IGl0ZXJhdG9yXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7T2JqZWN0fEFycmF5fSAgb2JqXHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICBpdGVyYXRvclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBfZWFjaChvYmosIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcihvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDb3B5IGFsbCBvZiB0aGUgcHJvcGVydGllcyBpbiB0aGUgc291cmNlIG9iamVjdHMgb3ZlciB0byB0aGUgZGVzdGluYXRpb24gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAgey4uLk9iamVjdH0gICAgIG91dFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4gIHtPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIF9leHRlbmQob3V0KSB7XHJcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50c1tpXSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEJpbmQgZXZlbnRzIHRvIGVsZW1lbnRzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICAgIGVsXHJcbiAgICAgKiBAcGFyYW0gIHtFdmVudH0gICAgICAgICAgZXZlbnRcclxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSAgICAgICBmblxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBfb24oZWwsIGV2ZW50LCBmbikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyBldmVudCwgZm4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5iaW5kIGV2ZW50cyBmcm9tIGVsZW1lbnRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gICAgZWxcclxuICAgICAqIEBwYXJhbSAge0V2ZW50fSAgICAgICAgICBldmVudFxyXG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259ICAgICAgIGZuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIF9vZmYoZWwsIGV2ZW50LCBmbikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xyXG4gICAgICAgICAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyBldmVudCwgZm4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY3NzIHJlY3Vyc2lvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbFxyXG4gICAgICogQHBhcmFtICAge09iamVjdHxTdHJpbmd9IHByb3BcclxuICAgICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgICBbdmFsXVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBfY3NzKGVsLCBwcm9wLCB2YWwpIHtcclxuICAgICAgICBpZiAoZWwgJiYgZWwuc3R5bGUgJiYgcHJvcCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2NzcyhlbCwgbmFtZSwgcHJvcFtuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zdHlsZVtwcm9wXSA9IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0b3IgUmVnRXhwXHJcbiAgICAgKlxyXG4gICAgICogQGNvbnN0ICAge1JlZ0V4cH1cclxuICAgICAqL1xyXG4gICAgLy8gb3JpZzogL14oXFx3Kyk/KCNcXHcrKT8oKD86XFwuW1xcd18tXSspKikvaTtcclxuICAgIHZhciBSX1NFTEVDVE9SID0gL14oXFx3Kyk/KCNbXFx3Xy1dKyk/KCg/OlxcLltcXHdfLV0rKSopL2k7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBidWlsZCBET00gTm9kZXNcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIF9idWlsZERPTSh7XHJcbiAgICAgKiAgICAgIHRhZzonZGl2I2lkLmNsYXNzLmNsYXNzMicsXHJcbiAgICAgKiAgICAgIGNzczp7XHJcbiAgICAgKiAgICAgICAgICBvcGFjaXR5OicxJyxcclxuICAgICAqICAgICAgICAgIHdpZHRoOicxMDBweCdcclxuICAgICAqICAgICAgfSxcclxuICAgICAqICAgICAgdGV4dDondGVzdCcsXHJcbiAgICAgKiAgICAgIGh0bWw6JzxwPkhlbGxvPC9wPicsXHJcbiAgICAgKiAgICAgIGNoaWxkcmVuOlt7XHJcbiAgICAgKiAgICAgICAgICB0YWc6J2RpdiNpZF9jaGlsZC5jbGFzcy5jbGFzczInLFxyXG4gICAgICogICAgICAgICAgY3NzOntvcGFjaXR5OicxJywgaGVpZ2h0OicyMDBweCd9LFxyXG4gICAgICogICAgICAgICAgdGV4dDondGVzdCcsXHJcbiAgICAgKiAgICAgICAgICBodG1sOic8cD5Xb3JsZDwvcD4nXHJcbiAgICAgKiAgICAgIH1dXHJcbiAgICAgKiAgfSk7XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAge1N0cmluZ3xPYmplY3R9IHNwZWNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuICB7SFRNTEVsZW1lbnR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIF9idWlsZERPTShzcGVjKSB7XHJcbiAgICAgICAgLy8gU3BlYyBEZWZhdWx0c1xyXG4gICAgICAgIGlmIChzcGVjID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNwZWMgPSAnZGl2JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzcGVjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBzcGVjID0ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiBzcGVjXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlbCwgY2xhc3NTZWxlY3RvcjtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gc3BlYy5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgc2VsZWN0b3IgPSBSX1NFTEVDVE9SLmV4ZWMoc3BlYy50YWcgfHwgJycpO1xyXG5cclxuICAgICAgICBkZWxldGUgc3BlYy5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgc3BlYy50YWcgPSBzZWxlY3RvclsxXSB8fCAnZGl2JztcclxuICAgICAgICBzcGVjLmlkID0gc3BlYy5pZCB8fCAoc2VsZWN0b3JbMl0gfHwgJycpLnN1YnN0cigxKTtcclxuICAgICAgICAvLyBzcGxpdCBDbGFzc05hbWVzXHJcbiAgICAgICAgY2xhc3NTZWxlY3RvciA9IChzZWxlY3RvclszXSB8fCAnJykuc3BsaXQoJy4nKTtcclxuICAgICAgICBjbGFzc1NlbGVjdG9yWzBdID0gKHNwZWMuY2xhc3NOYW1lIHx8ICcnKTtcclxuICAgICAgICBzcGVjLmNsYXNzTmFtZSA9IGNsYXNzU2VsZWN0b3Iuam9pbignICcpO1xyXG5cclxuXHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNwZWMudGFnKTtcclxuICAgICAgICBfYXBwZW5kQ2hpbGQoZnJhZ21lbnQsIGVsKTtcclxuICAgICAgICBkZWxldGUgc3BlYy50YWc7XHJcblxyXG4gICAgICAgIC8vIEZvciBldmVyeVxyXG4gICAgICAgIC8vIGtleSA9PiBzcGVjW2tleV07XHJcbiAgICAgICAgX2VhY2goc3BlYywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY3NzJykge1xyXG4gICAgICAgICAgICAgICAgX2NzcyhlbCwgc3BlYy5jc3MpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICAodmFsdWUgIT09IG51bGwpICYmIF9hcHBlbmRDaGlsZChlbCwgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdodG1sJykge1xyXG4gICAgICAgICAgICAgICAgKHZhbHVlICE9PSBudWxsKSAmJiAoZWwuaW5uZXJIVE1MID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSBpbiBlbCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBlbFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9eZGF0YS0vLnRlc3Qoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaWYgdGhlIGNoaWxkcmVuIGlzIGFscmVhZHkgYW4gSFRNTCBFbGVtZW50LCBhcHBlbmQgaXQgdG8gZWxcclxuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4uYXBwZW5kQ2hpbGQpIHtcclxuICAgICAgICAgICAgX2FwcGVuZENoaWxkKGVsLCBjaGlsZHJlbik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgX2VhY2goY2hpbGRyZW4sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYXBwZW5kQ2hpbGQoZWwsIF9idWlsZERPTSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfYXBwZW5kQ2hpbGQoZWwsIF9idWlsZERPTShjaGlsZHJlbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogYXBwZW5kQ2hpbGRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgcGFyZW50XHJcbiAgICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gX2FwcGVuZENoaWxkKHBhcmVudCwgZWwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYXJlbnQgJiYgZWwgJiYgcGFyZW50LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGb2N1cyBGaXJzdCBJdGVtIGluIFBhcmVudCBOb2RlXHJcbiAgICAgKiBzdWJtaXQgPiB0ZXh0LHBhc3N3b3JkID4gYnV0dG9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICAgIHBhcmVudE5vZGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gX2F1dG9Gb2N1cyhwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gX2dldEVsZW1lbnRzQnlUYWdOYW1lKHBhcmVudE5vZGUsICdpbnB1dCcpO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgbiA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICB2YXIgZWwsIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVsID0gaXRlbXNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcclxuICAgICAgICAgICAgICAgICFlbGVtZW50ICYmIChlbGVtZW50ID0gZWwpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEvaGlkZGVufGNoZWNrfHJhZGlvLy50ZXN0KGVsLnR5cGUpICYmIGVsLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gX2dldEVsZW1lbnRzQnlUYWdOYW1lKHBhcmVudE5vZGUsICdidXR0b24nKVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGdldCBFbGVtZW50cyB3aXRoIFRhZyAoKSBmcm9tIFBhcmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAgICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgICAgICBuYW1lXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiAge05vZGVMaXN0fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBfZ2V0RWxlbWVudHNCeVRhZ05hbWUoZWwsIG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUobmFtZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBFbGVtZW50IGZyb20gUGFyZW50XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIF9yZW1vdmVFbGVtZW50KGVsKSB7XHJcbiAgICAgICAgaWYgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluc3RhbnRpYXRlIGEgUG9wdXBTIE9iamVjdFxyXG4gICAgdmFyIHBvcHVwUyA9IG5ldyBQb3B1cFMoKTtcclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcG9wdXBTLndpbmRvdyA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuX29wZW4ocGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBwb3B1cFMuYWxlcnQgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBfZXh0ZW5kKHBhcmFtcywge21vZGU6ICdhbGVydCd9KTtcclxuICAgICAgICB0aGlzLl9vcGVuKHBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgcG9wdXBTLmNvbmZpcm0gPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBfZXh0ZW5kKHBhcmFtcywge21vZGU6ICdjb25maXJtJ30pO1xyXG4gICAgICAgIHRoaXMuX29wZW4ocGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBwb3B1cFMucHJvbXB0ID0gZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1zID0gX2V4dGVuZChwYXJhbXMsIHttb2RlOiAncHJvbXB0J30pO1xyXG4gICAgICAgIHRoaXMuX29wZW4ocGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBwb3B1cFMubW9kYWwgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBfZXh0ZW5kKHBhcmFtcywge21vZGU6ICdtb2RhbCd9KTtcclxuICAgICAgICB0aGlzLl9vcGVuKHBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgcG9wdXBTLmFqYXggPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBfZXh0ZW5kKHBhcmFtcywge21vZGU6ICdtb2RhbC1hamF4J30pO1xyXG4gICAgICAgIHRoaXMuX29wZW4ocGFyYW1zKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRXhwb3J0XHJcbiAgICByZXR1cm4gcG9wdXBTO1xyXG59KSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwUy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwUy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJldHR5LWNoZWNrYm94Lm1pbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXR0eS1jaGVja2JveC5taW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBwb3B1cFMgZnJvbSAncG9wdXBzJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuL3Rhc2tNZXRob2RzJztcbmltcG9ydCByZW1vdmVTZWxlY3RlZENsYXNzIGZyb20gJy4vc2lkZWJhck1ldGhvZHMnO1xuaW1wb3J0IHJlbmRlciwgeyBzZXRNb2RlIH0gZnJvbSAnLi9yZW5kZXJNZXRob2RzJztcbmltcG9ydCBzY3JpYmJsZUF1ZGlvIGZyb20gJy4uL3NvdW5kL3NjcmliYmxlLm1wMyc7XG5cbmNvbnN0IGlucHV0VGV4dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0VGV4dCcpO1xuY29uc3QgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbExpJyk7XG5cbmxldCB0eXBlO1xubGV0IGRhdGU7XG5sZXQgdGltZTtcblxuLy8gUmVzZXQgaW5wdXRGaWVsZCBpbnB1dHNcbmV4cG9ydCBmdW5jdGlvbiByZXNldElucHV0cygpIHtcbiAgaW5wdXRUZXh0RmllbGQudmFsdWUgPSAnJztcbiAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgZGF0ZSA9IHVuZGVmaW5lZDtcbiAgdGltZSA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnZhbGlkSW5wdXQoc3RyaW5nKSB7XG4gIGNvbnN0IHRyaW1tZWRTdHJpbmcgPSBzdHJpbmcudHJpbSgpO1xuICBjb25zdCBjaGVjayA9IC9eW2EtekEtWjAtOSAuXCInISMkJSZdKiQvLnRlc3Qoc3RyaW5nKTtcblxuICBpZiAoIXRyaW1tZWRTdHJpbmcgfHwgIWNoZWNrKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBUYXNrIENyZWF0aW5nIERvbSBVcGRhdGUgRnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnROZXdUYXNrKCkge1xuICBjb25zdCBpbnB1dE5hbWUgPSBTdHJpbmcoaW5wdXRUZXh0RmllbGQudmFsdWUpO1xuICBjb25zdCBjaGVjayA9IGNoZWNrSW52YWxpZElucHV0KGlucHV0TmFtZSk7XG5cbiAgaWYgKCFjaGVjaykge1xuICAgIGFsZXJ0KCdDaGVjayBpZiB0aGVyZSBhcmUgbm9uIGxldHRlcnMvbnVtYmVycywgb3IgaWYgdGhlIHRleHRmaWVsZCBpcyBlbXB0eScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNjcmliYmxlID0gbmV3IEF1ZGlvKHNjcmliYmxlQXVkaW8pO1xuICBzY3JpYmJsZS5wbGF5KCk7XG5cbiAgY3JlYXRlVGFzayhpbnB1dE5hbWUsIHR5cGUsIGRhdGUsIHRpbWUpO1xuICByZXNldElucHV0cygpO1xuICByZW1vdmVTZWxlY3RlZENsYXNzKCk7XG4gIGFsbEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICBzZXRNb2RlKCdhbGwnKTtcbiAgcmVuZGVyKCk7XG59XG5cbi8vIE9iamVjdCBDb250YWluZXIgZm9yIFBvcHVwIE1vZHVsZXNcbmV4cG9ydCBjb25zdCBwb3B1cEhvbGRlciA9IHtcbiAgdHlwZTogKCkgPT4ge1xuICAgIHBvcHVwUy53aW5kb3coe1xuICAgICAgbW9kZTogJ2NvbmZpcm0nLFxuICAgICAgY29udGVudDogYFxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cENvbnRhaW5lclwiPlxuICAgICAgPGxhYmVsPlR5cGU8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBjbGFzcz1cInBvcHVwU2VsZWN0XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9J2dlbmVyYWwnPkdlbmVyYWw8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0ncGVyc29uYWwnPlBlcnNvbmFsPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9J3dvcmsnPldvcms8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc29jaWFsJz5Tb2NpYWw8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIGAsXG4gICAgICBsYWJlbE9rOiAnQ29uZmlybScsXG4gICAgICBvbk9wZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBTZWxlY3QnKTtcbiAgICAgICAgaWYgKHR5cGUpIHsgaW5wdXQudmFsdWUgPSB0eXBlOyB9XG4gICAgICB9LFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBTZWxlY3QnKTtcbiAgICAgICAgdHlwZSA9IGlucHV0LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIGFkZGl0aW9uYWxCdXR0b25Ib2xkZXJDbGFzczogJ3BvcHVwQnV0dG9ucycsXG4gICAgICBhZGRpdGlvbmFsQnV0dG9uQ2FuY2VsQ2xhc3M6ICdjYW5jZWxCdG4nLFxuICAgICAgYWRkaXRpb25hbEJ1dHRvbk9rQ2xhc3M6ICdjb25maXJtQnRuJyxcbiAgICB9KTtcbiAgfSxcbiAgZGF0ZTogKCkgPT4ge1xuICAgIHBvcHVwUy53aW5kb3coe1xuICAgICAgbW9kZTogJ2NvbmZpcm0nLFxuICAgICAgY29udGVudDogYFxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbD5EYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJwb3B1cERhdGVcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyQnRuXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgICBsYWJlbE9rOiAnQ29uZmlybScsXG4gICAgICBvbk9wZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBEYXRlJyk7XG4gICAgICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyQnRuJyk7XG4gICAgICAgIGlmIChkYXRlKSB7IGlucHV0LnZhbHVlID0gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJyk7IH0gLy8gRm9ybWF0cyBkYXRlIHRvIGJlIGNvbXBhdGlibGUgYXMgZGF0ZSBpbnB1dCBWYWx1ZVxuICAgICAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaW5wdXQudmFsdWUgPSAnJzsgfSk7XG4gICAgICB9LFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBEYXRlJyk7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkgeyBkYXRlID0gbmV3IERhdGUoaW5wdXQudmFsdWUpOyB9XG4gICAgICB9LFxuICAgICAgYWRkaXRpb25hbEJ1dHRvbkhvbGRlckNsYXNzOiAncG9wdXBCdXR0b25zJyxcbiAgICAgIGFkZGl0aW9uYWxCdXR0b25DYW5jZWxDbGFzczogJ2NhbmNlbEJ0bicsXG4gICAgICBhZGRpdGlvbmFsQnV0dG9uT2tDbGFzczogJ2NvbmZpcm1CdG4nLFxuICAgIH0pO1xuICB9LFxuICB0aW1lOiAoKSA9PiB7XG4gICAgcG9wdXBTLndpbmRvdyh7XG4gICAgICBtb2RlOiAnY29uZmlybScsXG4gICAgICBjb250ZW50OiBgXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXBDb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsPlRpbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBjbGFzcz1cInBvcHVwVGltZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXJCdG5cIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgbGFiZWxPazogJ0NvbmZpcm0nLFxuICAgICAgb25PcGVuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGltZScpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHRpbWU7XG4gICAgICB9LFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBUaW1lJyk7XG4gICAgICAgIHRpbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhZGRpdGlvbmFsQnV0dG9uSG9sZGVyQ2xhc3M6ICdwb3B1cEJ1dHRvbnMnLFxuICAgICAgYWRkaXRpb25hbEJ1dHRvbkNhbmNlbENsYXNzOiAnY2FuY2VsQnRuJyxcbiAgICAgIGFkZGl0aW9uYWxCdXR0b25Pa0NsYXNzOiAnY29uZmlybUJ0bicsXG4gICAgfSk7XG4gIH0sXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHBvcHVwUyBmcm9tICdwb3B1cHMnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGJlbGxBdWRpbyBmcm9tICcuLi9zb3VuZC9iZWxsLm1wMyc7XG5pbXBvcnQgc2NyaWJibGVBdWRpbyBmcm9tICcuLi9zb3VuZC9zY3JpYmJsZS5tcDMnO1xuaW1wb3J0IHN0YXJGaWxsIGZyb20gJy4uL2ltYWdlcy9zdGFyRmlsbC5wbmcnO1xuaW1wb3J0IHN0YXJOb0ZpbGwgZnJvbSAnLi4vaW1hZ2VzL3N0YXJOb0ZpbGwucG5nJztcbmltcG9ydCBnZXRUYXNrQXJyYXksIHtcbiAgZ2V0Q29tcGxldGVUYXNrcywgZ2V0T3ZlcmR1ZUFycmF5LCBnZXRUeXBlVGFza3MsIHRhc2tDb21wbGV0ZSwgdGFza1VuY29tcGxldGUsIHJlbWFrZU92ZXJkdWVUYXNrLFxufSBmcm9tICcuL3Rhc2tNZXRob2RzJztcblxuLy8gbW9kZSAmIGFycmF5IGxpc3RzXG5sZXQgbW9kZSA9ICdhbGwnO1xuY29uc3QgdGFza0FycmF5ID0gZ2V0VGFza0FycmF5KCk7XG5jb25zdCBjb21wbGV0ZVRhc2tBcnJheSA9IGdldENvbXBsZXRlVGFza3MoKTtcbmNvbnN0IG92ZXJkdWVBcnJheSA9IGdldE92ZXJkdWVBcnJheSgpO1xuXG4vLyBtb2RlIGdldHRlciAmIHNldHRlclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGUoKSB7IHJldHVybiBtb2RlOyB9XG5leHBvcnQgZnVuY3Rpb24gc2V0TW9kZShzdHJpbmcpIHsgbW9kZSA9IHN0cmluZzsgfVxuXG4vLyBtYWluIGNvbnRhaW5lciB0aGF0IGhvdXNlcyB0YXNrc1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKTtcblxuY29uc3QgYWRkVGFza0NoZWNrYm94ID0gKGFycmF5LCBpKSA9PiB7IC8vIENoZWNrYm94IHJlbmRlclxuICAvLyBET00gRWxlbWVudHNcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIG1haW5EaXYuY2xhc3NOYW1lID0gJ3ByZXR0eSBwLWRlZmF1bHQgcC1jdXJ2ZSBwLWJpZ2dlcic7XG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICBzdWJEaXYuY2xhc3NMaXN0LmFkZCgnc3RhdGUnKTtcbiAgbWFpbkRpdi5hcHBlbmQoaW5wdXQsIHN1YkRpdik7XG4gIHN1YkRpdi5hcHBlbmQobGFiZWwpO1xuXG4gIC8vIEV2ZW50TGlzdGVuZXJTZXR1cFxuICBjb25zdCBiZWxsID0gbmV3IEF1ZGlvKGJlbGxBdWRpbyk7XG4gIGNvbnN0IHNjcmliYmxlID0gbmV3IEF1ZGlvKHNjcmliYmxlQXVkaW8pO1xuICBpZiAoYXJyYXkgPT09IHRhc2tBcnJheSB8fCBhcnJheSA9PT0gY29tcGxldGVUYXNrQXJyYXkpIHsgLy8gRXZlbnQgTGlzdGVuZXIgQWxsICYgQ29tcGxldGVkXG4gICAgaWYgKGFycmF5ID09PSBjb21wbGV0ZVRhc2tBcnJheSkgeyBpbnB1dC5jaGVja2VkID0gdHJ1ZTsgfVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBiZWxsLnBsYXkoKTtcbiAgICAgICAgdGFza0NvbXBsZXRlKGFycmF5LCBpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgICB9IGVsc2UgaWYgKCFlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHNjcmliYmxlLnBsYXkoKTtcbiAgICAgICAgdGFza1VuY29tcGxldGUoaSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LCAxNTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGFycmF5ID09PSBvdmVyZHVlQXJyYXkpIHsgLy8gRXZlbnQgTGlzdGVuZXIgT3ZlcmR1ZVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBzY3JpYmJsZS5wbGF5KCk7XG4gICAgICAgIHJlbWFrZU92ZXJkdWVUYXNrKGFycmF5W2ldKTtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfSwgMTUwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4geyAvLyBFdmVudCBMaXN0ZW5lciBUaW1lICYgVHlwZSBGaWx0ZXJzXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICBiZWxsLnBsYXkoKTtcbiAgICAgICAgdGFza0NvbXBsZXRlKGFycmF5LCBpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBTdG9wIGNoZWNrYm94IG9wZW5pbmcgcHJvcGVydHkgZWRpdCBwb3B1cFxuICBtYWluRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIHJldHVybiBtYWluRGl2O1xufTtcblxuY29uc3QgYWRkVGFza0NvbnRlbnQgPSAoYXJyYXksIGkpID0+IHsgLy8gVGFzayBJbmZvcm1hdGlvbiBSZW5kZXJcbiAgLy8gRE9NIEVsZW1lbnRzXG4gIGNvbnN0IHVwcGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb3dlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBwZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3VwcGVyQ29udGVudCcsICd3aGl0ZUZvbnQnKTtcbiAgbG93ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2xvd2VyQ29udGVudCcsICd3aGl0ZUZvbnQnKTtcblxuICAvLyBJbnNlcnQgQ29udGVudFxuICB1cHBlckNvbnRlbnQuaW5uZXJIVE1MID0gYCR7YXJyYXlbaV0ubmFtZX1gO1xuICBsb3dlckNvbnRlbnQuaW5uZXJIVE1MID0gYCR7YXJyYXlbaV0uZ2V0VHlwZSgpfSAtICR7YXJyYXlbaV0uZ2V0Rm9ybWF0dGVkRGF0ZSgpfSAtICR7YXJyYXlbaV0uZ2V0Rm9ybWF0dGVkVGltZSgpfWA7XG4gIGlmIChhcnJheVtpXS5ub3RlcykgeyBsb3dlckNvbnRlbnQuaW5uZXJIVE1MICs9ICcgLSBOb3RlJzsgfVxuXG4gIC8vIElmIHRhc2sgaXMgY29tcGxldGVkLCBhZGQgY29tcGxldGVkIHN0eWxpbmdcbiAgaWYgKGFycmF5ID09PSBjb21wbGV0ZVRhc2tBcnJheSkge1xuICAgIHVwcGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBsb3dlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gIH1cblxuICByZXR1cm4gdXBwZXJDb250ZW50Lm91dGVySFRNTCArIGxvd2VyQ29udGVudC5vdXRlckhUTUw7XG59O1xuXG5jb25zdCBhZGRUYXNrUHJpb3JpdHlTdGFyID0gKGFycmF5LCBpKSA9PiB7IC8vIFByaW9yaXR5IFN0YXIgUmVuZGVyXG4gIC8vIERPTSBFbGVtZW50c1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBhcnJheVtpXS5wcmlvcml0eSA/IHN0YXJGaWxsIDogc3Rhck5vRmlsbDtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuXG4gIGlmIChhcnJheSAhPT0gb3ZlcmR1ZUFycmF5ICYmIGFycmF5ICE9PSBjb21wbGV0ZVRhc2tBcnJheSkge1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBhcnJheVtpXS5zZXRQcm9wZXJ0eSgncHJpb3JpdHknKTtcbiAgICAgIGUudGFyZ2V0LnNyYyA9IChhcnJheVtpXS5wcmlvcml0eSkgPyBzdGFyRmlsbCA6IHN0YXJOb0ZpbGw7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaW1hZ2U7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrID0gKGFycmF5LCBpKSA9PiB7IC8vIFRhc2sgSXRlbSBSZW5kZXJcbiAgLy8gRE9NIEVsZW1lbnRzXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYW5jZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtQ29udGFpbmVyJyk7XG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Q29udGFpbmVyJyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xuICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eUNvbnRhaW5lcicsICdwcmV2ZW50U2VsZWN0Jyk7XG4gIGNhbmNlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYW5jZWxDb250YWluZXInLCAncHJldmVudFNlbGVjdCcpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZChjaGVja2JveENvbnRhaW5lciwgY29udGVudENvbnRhaW5lciwgcHJpb3JpdHlDb250YWluZXIsIGNhbmNlbENvbnRhaW5lcik7XG5cbiAgLy8gQWRkIGNvbnRlbnQgdG8gRE9NIGVsZW1lbnRzXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDaGVja2JveChhcnJheSwgaSkpO1xuICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGFkZFRhc2tDb250ZW50KGFycmF5LCBpKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5U3RhcihhcnJheSwgaSkpO1xuICBjYW5jZWxDb250YWluZXIuaW5uZXJIVE1MID0gJyYjMTAwMDU7JztcblxuICAvLyBUYXNrIFByb3BlcnRpZXMgUG9wdXBcbiAgaWYgKGFycmF5ICE9PSBvdmVyZHVlQXJyYXkgJiYgYXJyYXkgIT09IGNvbXBsZXRlVGFza0FycmF5KSB7XG4gICAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvcHVwUy53aW5kb3coe1xuICAgICAgICBtb2RlOiAnY29uZmlybScsXG4gICAgICAgIGNvbnRlbnQ6IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblBvcHVwQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBJbnB1dGZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcHVwTGFiZWxcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJwb3B1cE5hbWVcIiBhdXRvY29tcGxldGU9XCJfX2F3YXlcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwSW5wdXRmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3B1cExhYmVsXCI+VHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJwb3B1cFNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2dlbmVyYWwnPkdlbmVyYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdwZXJzb25hbCc+UGVyc29uYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSd3b3JrJz5Xb3JrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nc29jaWFsJz5Tb2NpYWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cElucHV0ZmllbGRcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wdXBMYWJlbFwiPkRhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cInBvcHVwRGF0ZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBJbnB1dGZpZWxkXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcHVwTGFiZWxcIj5UaW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJwb3B1cFRpbWVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwSW5wdXRmaWVsZFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3B1cExhYmVsXCI+Tm90ZXM8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJwb3B1cFRleHRBcmVhXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGAsXG4gICAgICAgIGxhYmVsT2s6ICdDb25maXJtJyxcbiAgICAgICAgYWRkaXRpb25hbEJ1dHRvbkNhbmNlbENsYXNzOiAnY2FuY2VsQnRuJyxcbiAgICAgICAgYWRkaXRpb25hbEJ1dHRvbk9rQ2xhc3M6ICdjb25maXJtQnRuJyxcbiAgICAgICAgYWRkaXRpb25hbEJ1dHRvbkhvbGRlckNsYXNzOiAncG9wdXBCdXR0b25zJyxcbiAgICAgICAgb25PcGVuOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cE5hbWUnKTtcbiAgICAgICAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwU2VsZWN0Jyk7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cERhdGUnKTtcbiAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGltZScpO1xuICAgICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGV4dEFyZWEnKTtcblxuICAgICAgICAgIG5hbWUudmFsdWUgPSBhcnJheVtpXS5uYW1lO1xuICAgICAgICAgIHR5cGUudmFsdWUgPSBhcnJheVtpXS50eXBlO1xuICAgICAgICAgIGRhdGUudmFsdWUgPSBmb3JtYXQoYXJyYXlbaV0uZ2V0RGF0ZVRpbWUoKSwgJ3l5eXktTU0tZGQnKTsgLy8gU2V0IENvbXBhdGlibGUgRGF0ZSBWYWx1ZVxuICAgICAgICAgIHRpbWUudmFsdWUgPSBhcnJheVtpXS50aW1lO1xuICAgICAgICAgIG5vdGVzLnZhbHVlID0gYXJyYXlbaV0ubm90ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cE5hbWUnKTtcbiAgICAgICAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwU2VsZWN0Jyk7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cERhdGUnKTtcbiAgICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGltZScpO1xuICAgICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwVGV4dEFyZWEnKTtcblxuICAgICAgICAgIGFycmF5W2ldLnNldFByb3BlcnR5KCduYW1lJywgbmFtZS52YWx1ZSk7XG4gICAgICAgICAgYXJyYXlbaV0uc2V0UHJvcGVydHkoJ3R5cGUnLCB0eXBlLnZhbHVlKTtcbiAgICAgICAgICBhcnJheVtpXS5zZXRQcm9wZXJ0eSgnZGF0ZScsIG5ldyBEYXRlKGRhdGUudmFsdWUpKTtcbiAgICAgICAgICBhcnJheVtpXS5zZXRQcm9wZXJ0eSgndGltZScsIHRpbWUudmFsdWUpO1xuICAgICAgICAgIGFycmF5W2ldLnNldFByb3BlcnR5KCdub3RlcycsIG5vdGVzLnZhbHVlKTtcbiAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIFRhc2sgQnV0dG9uXG4gIGNhbmNlbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoYXJyYXkgPT09IHRhc2tBcnJheSB8fCBhcnJheSA9PT0gY29tcGxldGVUYXNrQXJyYXkgfHwgYXJyYXkgPT09IG92ZXJkdWVBcnJheSkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKGFycmF5W2ldLmdldEluZGV4KCksIDEpO1xuICAgIH1cbiAgICByZW5kZXIoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1haW5Db250YWluZXI7XG59O1xuXG5sZXQgY29tcGxldGVTaG93ID0gZmFsc2U7XG5cbmNvbnN0IHJlbmRlckFycmF5ID0gKHN0cmluZykgPT4geyAvLyBSZW5kZXIgQXJyYXkgVHlwZVxuICBsZXQgYXJyYXk7XG4gIGxldCB0ZXh0Q29udGVudDtcblxuICAvLyBHZXQgQXJyYXkgQmFzZWQgb24gSW5wdXQgU3RyaW5nXG4gIGlmIChzdHJpbmcgPT09ICdhbGwnKSB7XG4gICAgYXJyYXkgPSB0YXNrQXJyYXk7XG4gIH0gZWxzZSBpZiAoc3RyaW5nID09PSAnY29tcGxldGVkJykge1xuICAgIGFycmF5ID0gY29tcGxldGVUYXNrQXJyYXk7XG4gIH0gZWxzZSBpZiAoc3RyaW5nID09PSAnb3ZlcmR1ZScpIHtcbiAgICBhcnJheSA9IG92ZXJkdWVBcnJheTtcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IGdldFR5cGVUYXNrcyhzdHJpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGlucHV0U3RyaW5nKSB7XG4gICAgY29uc3QgZmlyc3RMZXR0ZXJVcHBlckNhc2UgPSBpbnB1dFN0cmluZ1swXS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHJlc3RPZldvcmQgPSBpbnB1dFN0cmluZy5zdWJzdHIoMSk7XG4gICAgY29uc3QgcmVzdWx0ID0gZmlyc3RMZXR0ZXJVcHBlckNhc2UgKyByZXN0T2ZXb3JkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBTZXQgVGV4dCBDb250ZW50IGJhc2VkIG9uIElucHV0IFN0cmluZyBUeXBlXG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgIHRleHRDb250ZW50ID0gJ1Rhc2tzIENvbXBsZXRlZCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvdmVyZHVlJzpcbiAgICAgIHRleHRDb250ZW50ID0gJ1Rhc2tzIE92ZXJkdWUnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRleHRDb250ZW50ID0gYFRhc2tzIER1ZSAtICR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZyl9YDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gQWRkIFRhc2sgQ29udGFpbmVyIENvbnRlbnRzXG4gIGlmIChhcnJheS5sZW5ndGgpIHtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHJlbmRlclRhc2soYXJyYXksIGkpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgc3ViVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW5lclN1YlRpdGxlJyk7XG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnTm9uZSc7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQoc3ViVGl0bGUpO1xuICB9XG5cbiAgLy8gSWYgQWxsIEZpbHRlciBSZW5kZXIgQ29tcGxldGVkIFRhc2sgQXJyYXkgVW5kZXJuZWF0aFxuICBpZiAoc3RyaW5nID09PSAnYWxsJykge1xuICAgIGlmIChjb21wbGV0ZVRhc2tBcnJheS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY29tcGxldGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjb25zdCBzaG93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVIZWFkZXInKTtcbiAgICAgIGNvbXBsZXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVUYXNrQ29udGFpbmVyVGl0bGUnKTtcbiAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVTaG93QnRuJywgJ3Nob3cnKTtcbiAgICAgIGNvbXBsZXRlVGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkIFRhc2tzJztcbiAgICAgIHNob3dCdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyc7XG4gICAgICBoZWFkZXJEaXYuYXBwZW5kKGNvbXBsZXRlVGl0bGUsIHNob3dCdXR0b24pO1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoaGVhZGVyRGl2KTtcblxuICAgICAgLy8gSWYgY29tcGxldGVTaG93IGlzIHRydWUgZHVyaW5nIHJlbmRlciwgc2hvdyBjb21wbGV0ZSBpdGVtcztcbiAgICAgIGlmIChjb21wbGV0ZVNob3cpIHtcbiAgICAgICAgc2hvd0J1dHRvbi50ZXh0Q29udGVudCA9ICdIaWRlJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wbGV0ZVRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHJlbmRlclRhc2soY29tcGxldGVUYXNrQXJyYXksIGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTaG93IC8gSGlkZSBDb21wbGV0ZWQgSXRlbXMgY2xpY2sgZXZlbnRcbiAgICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaG93QnV0dG9uLnRleHRDb250ZW50ID09PSAnU2hvdycpIHtcbiAgICAgICAgICBjb21wbGV0ZVNob3cgPSAhY29tcGxldGVTaG93O1xuICAgICAgICAgIHNob3dCdXR0b24udGV4dENvbnRlbnQgPSAnSGlkZSc7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wbGV0ZVRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQocmVuZGVyVGFzayhjb21wbGV0ZVRhc2tBcnJheSwgaSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZVNob3cgPSAhY29tcGxldGVTaG93O1xuICAgICAgICAgIHNob3dCdXR0b24udGV4dENvbnRlbnQgPSAnU2hvdyc7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wbGV0ZVRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgeyBsZW5ndGggfSA9IHRhc2tDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLmNoaWxkcmVuW2xlbmd0aCAtIDFdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoKSB7IC8vIFJlbmRlciBDYWxsIEZ1bmN0aW9uXG4gIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHJlbmRlckFycmF5KG1vZGUpO1xufVxuXG5jb25zdCB1cGRhdGVJdGVtcyA9ICgpID0+IHsgLy8gT3ZlcmR1ZSBDaGVja2VyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRhc2tBcnJheVtpXS5nZXREYXRlVGltZSgpIDw9IG5ldyBEYXRlKCkpIHtcbiAgICAgIG92ZXJkdWVBcnJheS5wdXNoKHRhc2tBcnJheVtpXSk7XG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfVxuICB9XG59O1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7IC8vIE92ZXJkdWUgSW50ZXJ2YWwgQ2hlY2tlclxuICB1cGRhdGVJdGVtcygpO1xufSwgMSk7XG4iLCJpbXBvcnQgY2xpY2tBdWRpbyBmcm9tICcuLi9zb3VuZC9jbGljay5tcDMnO1xuaW1wb3J0IHJlbmRlciwgeyBzZXRNb2RlIH0gZnJvbSAnLi9yZW5kZXJNZXRob2RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlU2VsZWN0ZWRDbGFzcygpIHtcbiAgY29uc3QgY2F0ZWdvcnlMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeUxpc3QnKTtcbiAgY29uc3QgY29tYmluZWRDYXRlZ29yeUxpc3QgPSBbLi4uY2F0ZWdvcnlMaXN0c1swXS5jaGlsZHJlbl1cbiAgICAuY29uY2F0KFsuLi5jYXRlZ29yeUxpc3RzWzFdLmNoaWxkcmVuXSk7XG4gIGNvbWJpbmVkQ2F0ZWdvcnlMaXN0LmZvckVhY2goKGl0ZW0pID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZpbHRlcihlLCBzdHJpbmcpIHtcbiAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oY2xpY2tBdWRpbyk7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgcmVtb3ZlU2VsZWN0ZWRDbGFzcygpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICBzZXRNb2RlKHN0cmluZyk7XG4gIHJlbmRlcigpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgYWRkRGF5cywgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jLW5hbWVzICovXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbiAoa2V5LCBvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xufTtcblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpO1xufTtcblxuY29uc3QgdGFza0FycmF5ID0gW107XG5jb25zdCBjb21wbGV0ZVRhc2tBcnJheSA9IFtdO1xuY29uc3Qgb3ZlcmR1ZUFycmF5ID0gW107XG5jb25zdCBwcm90byA9IHtcbiAgc2V0UHJvcGVydHkocHJvcGVydHksIGlucHV0KSB7XG4gICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgIHRoaXMubmFtZSA9IGlucHV0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByaW9yaXR5JzpcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9ICF0aGlzLnByaW9yaXR5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3R5cGUnOlxuICAgICAgICBpZiAoaW5wdXQgPT09ICdwZXJzb25hbCcgfHwgaW5wdXQgPT09ICd3b3JrJyB8fCBpbnB1dCA9PT0gJ3NvY2lhbCcgfHwgaW5wdXQgPT09ICdnZW5lcmFsJykgeyB0aGlzLnR5cGUgPSBpbnB1dDsgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICB0aGlzLmRhdGUgPSBpbnB1dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgdGhpcy50aW1lID0gaW5wdXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbm90ZXMnOlxuICAgICAgICB0aGlzLm5vdGVzID0gaW5wdXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhdHVzJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBpbnB1dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgZ2V0SG91ck1pbnV0ZSgpIHtcbiAgICBjb25zdCBbaG91clN0cmluZywgbWludXRlU3RyaW5nXSA9IHRoaXMudGltZS5zcGxpdCgnOicpO1xuICAgIHJldHVybiB7IGhvdXJTdHJpbmcsIG1pbnV0ZVN0cmluZyB9O1xuICB9LFxuXG4gIGdldERhdGVUaW1lKCkge1xuICAgIGNvbnN0IHsgaG91clN0cmluZyB9ID0gdGhpcy5nZXRIb3VyTWludXRlKHRoaXMudGltZSk7XG4gICAgY29uc3QgeyBtaW51dGVTdHJpbmcgfSA9IHRoaXMuZ2V0SG91ck1pbnV0ZSh0aGlzLnRpbWUpO1xuICAgIGNvbnN0IGRhdGVUaW1lQ29tYmluZWQgPSBuZXcgRGF0ZSh0aGlzLmRhdGUpO1xuICAgIGRhdGVUaW1lQ29tYmluZWQuc2V0SG91cnMoaG91clN0cmluZywgbWludXRlU3RyaW5nLCAwLCAwKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21iaW5lZDtcbiAgfSxcblxuICBnZXRGb3JtYXR0ZWREYXRlKCkge1xuICAgIHJldHVybiBmb3JtYXQodGhpcy5nZXREYXRlVGltZSgpLCAnUCcpO1xuICB9LFxuXG4gIGdldEZvcm1hdHRlZFRpbWUoKSB7XG4gICAgcmV0dXJuIGZvcm1hdCh0aGlzLmdldERhdGVUaW1lKCksICdwJyk7XG4gIH0sXG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlICdzb2NpYWwnOlxuICAgICAgICByZXN1bHQgPSAnU29jaWFsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3b3JrJzpcbiAgICAgICAgcmVzdWx0ID0gJ1dvcmsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BlcnNvbmFsJzpcbiAgICAgICAgcmVzdWx0ID0gJ1BlcnNvbmFsJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXN1bHQgPSAnR2VuZXJhbCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0YXNrQXJyYXkuaW5kZXhPZih0aGlzKTtcbiAgfSxcbn07XG5cbndpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldE9iaigndGFza0FycmF5JywgdGFza0FycmF5KTtcbiAgbG9jYWxTdG9yYWdlLnNldE9iaignY29tcGxldGVUYXNrQXJyYXknLCBjb21wbGV0ZVRhc2tBcnJheSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRPYmooJ292ZXJkdWVBcnJheScsIG92ZXJkdWVBcnJheSk7XG59O1xuXG5jb25zdCB1cGRhdGVJdGVtcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGFza0FycmF5W2ldLmdldERhdGVUaW1lKCkgPD0gbmV3IERhdGUoKSkge1xuICAgICAgb3ZlcmR1ZUFycmF5LnB1c2godGFza0FycmF5W2ldKTtcbiAgICAgIHRhc2tBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjbGVhckFycmF5ID0gKGFycmF5KSA9PiB7XG4gIHdoaWxlIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgYXJyYXkucG9wKCk7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRUYXNrQXJyYXlzID0gKCgpID0+IHtcbiAgbGV0IFN0b3JhZ2VUYXNrQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCd0YXNrQXJyYXknKTtcbiAgbGV0IFN0b3JhZ2VDb21wbGV0ZVRhc2tBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ2NvbXBsZXRlVGFza0FycmF5Jyk7XG4gIGxldCBTdG9yYWdlT3ZlcmR1ZVRhc2tBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ292ZXJkdWVBcnJheScpO1xuXG4gIGlmICghU3RvcmFnZVRhc2tBcnJheSkge1xuICAgIFN0b3JhZ2VUYXNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGlmICghU3RvcmFnZUNvbXBsZXRlVGFza0FycmF5KSB7XG4gICAgU3RvcmFnZUNvbXBsZXRlVGFza0FycmF5ID0gW107XG4gIH1cblxuICBpZiAoIVN0b3JhZ2VPdmVyZHVlVGFza0FycmF5KSB7XG4gICAgU3RvcmFnZU92ZXJkdWVUYXNrQXJyYXkgPSBbXTtcbiAgfVxuXG4gIGlmIChTdG9yYWdlVGFza0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBjbGVhckFycmF5KHRhc2tBcnJheSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTdG9yYWdlVGFza0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoU3RvcmFnZVRhc2tBcnJheVtpXS5kYXRlKTtcbiAgICAgIFN0b3JhZ2VUYXNrQXJyYXlbaV0uZGF0ZSA9IGRhdGU7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoU3RvcmFnZVRhc2tBcnJheVtpXSwgcHJvdG8pO1xuICAgICAgdGFza0FycmF5W2ldID0gU3RvcmFnZVRhc2tBcnJheVtpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoU3RvcmFnZUNvbXBsZXRlVGFza0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBjbGVhckFycmF5KGNvbXBsZXRlVGFza0FycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN0b3JhZ2VDb21wbGV0ZVRhc2tBcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKFN0b3JhZ2VDb21wbGV0ZVRhc2tBcnJheVtpXS5kYXRlKTtcbiAgICAgIFN0b3JhZ2VDb21wbGV0ZVRhc2tBcnJheVtpXS5kYXRlID0gZGF0ZTtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihTdG9yYWdlQ29tcGxldGVUYXNrQXJyYXlbaV0sIHByb3RvKTtcbiAgICAgIGNvbXBsZXRlVGFza0FycmF5W2ldID0gU3RvcmFnZUNvbXBsZXRlVGFza0FycmF5W2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChTdG9yYWdlT3ZlcmR1ZVRhc2tBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgY2xlYXJBcnJheShvdmVyZHVlQXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3RvcmFnZU92ZXJkdWVUYXNrQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShTdG9yYWdlT3ZlcmR1ZVRhc2tBcnJheVtpXS5kYXRlKTtcbiAgICAgIFN0b3JhZ2VPdmVyZHVlVGFza0FycmF5W2ldLmRhdGUgPSBkYXRlO1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKFN0b3JhZ2VPdmVyZHVlVGFza0FycmF5W2ldLCBwcm90byk7XG4gICAgICBvdmVyZHVlQXJyYXlbaV0gPSBTdG9yYWdlT3ZlcmR1ZVRhc2tBcnJheVtpXTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlSXRlbXMoKTtcbn0pKCk7XG5cbmNvbnN0IFRhc2sgPSAobmFtZSwgdHlwZSwgZGF0ZSwgdGltZSwgbm90ZXMsIHN0YXR1cykgPT4gKHtcbiAgbmFtZSwgcHJpb3JpdHk6IGZhbHNlLCB0eXBlLCBkYXRlLCB0aW1lLCBub3Rlcywgc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGlucHV0TmFtZSwgaW5wdXRUeXBlLCBpbnB1dERhdGUsIGlucHV0VGltZSwgaW5wdXROb3Rlcykge1xuICBjb25zdCBuYW1lID0gaW5wdXROYW1lO1xuICBjb25zdCB0eXBlID0gaW5wdXRUeXBlIHx8ICdnZW5lcmFsJztcbiAgY29uc3Qgbm90ZXMgPSAoaW5wdXROb3RlcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogaW5wdXROb3RlcztcblxuICBsZXQgZGF0ZTtcbiAgbGV0IHRpbWU7XG4gIGlmICghaW5wdXREYXRlICYmICFpbnB1dFRpbWUpIHtcbiAgICBkYXRlID0gYWRkRGF5cyhuZXcgRGF0ZSgpLCAxKTtcbiAgfSBlbHNlIGlmICghaW5wdXREYXRlICYmIGlucHV0VGltZSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICB9IGVsc2Uge1xuICAgIGRhdGUgPSBpbnB1dERhdGU7XG4gIH1cblxuICBpZiAoaW5wdXRUaW1lKSB7XG4gICAgdGltZSA9IGlucHV0VGltZTtcbiAgfSBlbHNlIGlmICghaW5wdXRUaW1lICYmICFpbnB1dERhdGUpIHtcbiAgICB0aW1lID0gJzAwOjAwJztcbiAgfSBlbHNlIGlmICghaW5wdXRUaW1lICYmIGlucHV0RGF0ZSkge1xuICAgIHRpbWUgPSAnMTI6MDAnO1xuICB9XG5cbiAgY29uc3QgdGFzayA9IFRhc2sobmFtZSwgdHlwZSwgZGF0ZSwgdGltZSwgbm90ZXMpO1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgcHJvdG8pO1xuICB0YXNrLmRhdGUuc2V0SG91cnMoMCwgMCwgMCk7XG4gIHRhc2tBcnJheS5wdXNoKHRhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWtlT3ZlcmR1ZVRhc2sodGFzaykge1xuICBjb25zdCB7IG5hbWUgfSA9IHRhc2s7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGFzaztcbiAgY29uc3QgeyBwcmlvcml0eSB9ID0gdGFzaztcbiAgY29uc3QgeyBub3RlcyB9ID0gdGFzaztcblxuICBjb25zb2xlLmxvZyhuYW1lLCB0eXBlLCBwcmlvcml0eSwgbm90ZXMpO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5hbWUsIHR5cGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBub3Rlcyk7XG4gIGlmIChwcmlvcml0eSkgeyB0YXNrLnNldFByb3BlcnR5KCdwcmlvcml0eScpOyB9XG59XG5cbmNvbnN0IGNvbXBhcmVEYXRlID0gKGEsIGIpID0+IHtcbiAgaWYgKGEuZ2V0RGF0ZVRpbWUoKSA+IGIuZ2V0RGF0ZVRpbWUoKSkge1xuICAgIHJldHVybiAxO1xuICB9IGlmIChhLmdldERhdGVUaW1lKCkgPCBiLmdldERhdGVUaW1lKCkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NvbXBsZXRlKGFycmF5LCBpbmRleCkge1xuICBjb25zdCBhcnJheUl0ZW0gPSBhcnJheVtpbmRleF07XG4gIGFycmF5W2luZGV4XS5zZXRQcm9wZXJ0eSgnc3RhdHVzJywgdHJ1ZSk7XG4gIHRhc2tBcnJheS5zcGxpY2UoYXJyYXlJdGVtLmdldEluZGV4KCksIDEpO1xuICBjb21wbGV0ZVRhc2tBcnJheS5wdXNoKGFycmF5SXRlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrVW5jb21wbGV0ZShpbmRleCkge1xuICBjb25zdCBhcnJheUl0ZW0gPSBjb21wbGV0ZVRhc2tBcnJheVtpbmRleF07XG4gIGNvbXBsZXRlVGFza0FycmF5W2luZGV4XS5zZXRQcm9wZXJ0eSgnc3RhdHVzJywgZmFsc2UpO1xuICBjb21wbGV0ZVRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB0YXNrQXJyYXkucHVzaChhcnJheUl0ZW0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGxldGVUYXNrcygpIHsgcmV0dXJuIGNvbXBsZXRlVGFza0FycmF5LnNvcnQoY29tcGFyZURhdGUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheVRhc2tzKCkge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodG9kYXkpO1xuICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICB0b21vcnJvdy5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICBjb25zdCB0b2RheVRhc2tzID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEYXRlVGltZSA9IHRhc2suZ2V0RGF0ZVRpbWUoKTtcbiAgICBpZiAodGFza0RhdGVUaW1lID49IHRvZGF5ICYmIHRhc2tEYXRlVGltZSA8IHRvbW9ycm93KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICByZXR1cm4gdG9kYXlUYXNrcy5zb3J0KGNvbXBhcmVEYXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFza0FycmF5KCkgeyByZXR1cm4gdGFza0FycmF5OyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdmVyZHVlQXJyYXkoKSB7IHJldHVybiBvdmVyZHVlQXJyYXk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvbW9ycm93VGFza3MoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG4gIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgY29uc3QgdG9tb3Jyb3dUYXNrcyA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRGF0ZVRpbWUgPSB0YXNrLmdldERhdGVUaW1lKCk7XG4gICAgaWYgKHRhc2tEYXRlVGltZS5nZXRGdWxsWWVhcigpID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpXG4gICAgICAmJiB0YXNrRGF0ZVRpbWUuZ2V0TW9udGgoKSA9PT0gdG9tb3Jyb3cuZ2V0TW9udGgoKVxuICAgICAgJiYgdGFza0RhdGVUaW1lLmdldERhdGUoKSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcblxuICByZXR1cm4gdG9tb3Jyb3dUYXNrcy5zb3J0KGNvbXBhcmVEYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVyVGFza3MoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3dEYXRlID0gbmV3IERhdGUodG9kYXkpO1xuICB0b21vcnJvd0RhdGUuc2V0RGF0ZSh0b21vcnJvd0RhdGUuZ2V0RGF0ZSgpICsgMik7XG4gIHRvbW9ycm93RGF0ZS5zZXRIb3VycygwLCAwLCAwKTtcblxuICBjb25zdCBsYXRlclRhc2tzID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXREYXRlVGltZSgpID4gdG9tb3Jyb3dEYXRlKTtcblxuICByZXR1cm4gbGF0ZXJUYXNrcy5zb3J0KGNvbXBhcmVEYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVUYXNrcyhzdHJpbmcpIHtcbiAgbGV0IHJlc3VsdDtcbiAgc3dpdGNoIChzdHJpbmcpIHtcbiAgICBjYXNlICdwZXJzb25hbCc6XG4gICAgICByZXN1bHQgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnR5cGUgPT09ICdwZXJzb25hbCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd29yayc6XG4gICAgICByZXN1bHQgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnR5cGUgPT09ICd3b3JrJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzb2NpYWwnOlxuICAgICAgcmVzdWx0ID0gdGFza0FycmF5LmZpbHRlcigodGFzaykgPT4gdGFzay50eXBlID09PSAnc29jaWFsJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2RheSc6XG4gICAgICByZXN1bHQgPSBnZXRUb2RheVRhc2tzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b21vcnJvdyc6XG4gICAgICByZXN1bHQgPSBnZXRUb21vcnJvd1Rhc2tzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsYXRlcic6XG4gICAgICByZXN1bHQgPSBnZXRMYXRlclRhc2tzKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzdWx0ID0gdGFza0FycmF5O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5zb3J0KGNvbXBhcmVEYXRlKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3BvcHVwUy5jc3MnO1xuaW1wb3J0ICcuL3ByZXR0eS1jaGVja2JveC5taW4uY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCB0eXBlSW1nIGZyb20gJy4vaW1hZ2VzL2VkaXQucG5nJztcbmltcG9ydCBkYXRlSW1nIGZyb20gJy4vaW1hZ2VzL2RhdGUucG5nJztcbmltcG9ydCB0aW1lSW1nIGZyb20gJy4vaW1hZ2VzL3RpbWUucG5nJztcblxuaW1wb3J0IHJlbmRlciBmcm9tICcuL21vZHVsZXMvcmVuZGVyTWV0aG9kcyc7XG5pbXBvcnQgeyBpbnNlcnROZXdUYXNrLCBwb3B1cEhvbGRlciB9IGZyb20gJy4vbW9kdWxlcy9pbnB1dEZpZWxkTWV0aG9kcyc7XG5pbXBvcnQgeyBzZWxlY3RGaWx0ZXIgfSBmcm9tICcuL21vZHVsZXMvc2lkZWJhck1ldGhvZHMnO1xuXG5jb25zdCBsb2dvSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ29JbWcnKTtcbmNvbnN0IHR5cGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGVJY29uJyk7XG5jb25zdCBkYXRlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlSWNvbicpO1xuY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZUljb24nKTtcbmxvZ29JbWcuc3JjID0gbG9nbztcbnR5cGVJY29uLnNyYyA9IHR5cGVJbWc7XG5kYXRlSWNvbi5zcmMgPSBkYXRlSW1nO1xudGltZUljb24uc3JjID0gdGltZUltZztcblxud2luZG93Lm9ubG9hZCA9IHJlbmRlcigpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2lkZWJhciBTY3JpcHQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBhbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsTGknKTtcbmNvbnN0IHBlcnNvbmFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbmFsTGknKTtcbmNvbnN0IHdvcmtCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya0xpJyk7XG5jb25zdCBzb2NpYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29jaWFsTGknKTtcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5TGknKTtcbmNvbnN0IHRvbW9ycm93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvbW9ycm93TGknKTtcbmNvbnN0IGxhdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhdGVyTGknKTtcbmNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGV0ZWRMaScpO1xuY29uc3Qgb3ZlcmR1ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVyZHVlTGknKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0aGF0IGZpbHRlciB0YXNrc1xuYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgc2VsZWN0RmlsdGVyKGUsICdhbGwnKTsgfSk7XG5wZXJzb25hbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHNlbGVjdEZpbHRlcihlLCAncGVyc29uYWwnKTsgfSk7XG53b3JrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgc2VsZWN0RmlsdGVyKGUsICd3b3JrJyk7IH0pO1xuc29jaWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgc2VsZWN0RmlsdGVyKGUsICdzb2NpYWwnKTsgfSk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHNlbGVjdEZpbHRlcihlLCAndG9kYXknKTsgfSk7XG50b21vcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHNlbGVjdEZpbHRlcihlLCAndG9tb3Jyb3cnKTsgfSk7XG5sYXRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHNlbGVjdEZpbHRlcihlLCAnbGF0ZXInKTsgfSk7XG5jb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBzZWxlY3RGaWx0ZXIoZSwgJ2NvbXBsZXRlZCcpOyB9KTtcbm92ZXJkdWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBzZWxlY3RGaWx0ZXIoZSwgJ292ZXJkdWUnKTsgfSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLSBJbnB1dENvbnRhaW5lciBTY3JpcHQgLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEFkZCBpbnB1dEZpZWxkIHRhc2sgY3JlYXRpbmcgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJyk7XG5jb25zdCBpbnB1dFRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dFRleHQnKTtcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgaWYgKGlucHV0VGV4dEZpZWxkLnZhbHVlLmxlbmd0aCA+IDApIHsgaW5zZXJ0TmV3VGFzaygpOyB9IH0pO1xuaW5wdXRUZXh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaW5wdXRUZXh0RmllbGQudmFsdWUubGVuZ3RoID4gMCkgeyBpbnNlcnROZXdUYXNrKCk7IH0gfSk7XG5cbi8vIEFkZCBpbnB1dEZpZWxkIHRleHQgcGxhY2Vob2xkZXIgZXZlbnQgbGlzdGVuZXJzIHRoYXQgY2hhbmdlIHRleHRcbmlucHV0VGV4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4geyBpbnB1dFRleHRGaWVsZC5wbGFjZWhvbGRlciA9ICdUcnkgYWRkaW5nIGEgdGFzayc7IH0pO1xuaW5wdXRUZXh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB7IGlucHV0VGV4dEZpZWxkLnBsYWNlaG9sZGVyID0gJ0FkZCBhIHRhc2snOyB9KTtcblxuLy8gQWRkIFBvcHVwIEV2ZW50IExpc3RlbmVyc1xuY29uc3QgdHlwZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR5cGVJY29uJyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUljb24nKTtcbmNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lSWNvbicpO1xudHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9wdXBIb2xkZXIudHlwZSk7XG5kYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3B1cEhvbGRlci5kYXRlKTtcbnRpbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvcHVwSG9sZGVyLnRpbWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9