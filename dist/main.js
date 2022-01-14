/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon-error.svg */ "./src/img/icon-error.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icon-valid.svg */ "./src/img/icon-valid.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg-intro-desktop.png */ "./src/img/bg-intro-desktop.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.form-container {\n  max-width: 40rem;\n  background-color: #fff;\n  padding: 2rem 1.5rem;\n  border-radius: 1.5rem;\n}\n\n.form__input {\n  -webkit-appearance: none;\n  height: 3.5rem;\n  border-radius: 1rem;\n  border: 2px solid #DEDEDE;\n  padding: 0 1rem;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1rem;\n}\n.form__input::placeholder {\n  color: #6B6B6D;\n  opacity: 1;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 600;\n}\n.form__input--invalid {\n  border: 2px solid #FF7A7A;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 95% 50%;\n}\n.form__input--invalid::placeholder {\n  color: #FF7A7A;\n  opacity: 1;\n  font-weight: 600;\n}\n.form__input--valid {\n  border: 2px solid #38CC8C;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat 95% 50%;\n}\n.form__input--message {\n  display: block;\n  font-style: italic;\n  font-size: 0.8rem;\n  color: #FF7A7A;\n  text-align: right;\n}\n.form__password--indications > * {\n  color: #B9B6D3;\n  display: block;\n  font-size: 0.7rem;\n  line-height: 1.5;\n}\n.form__password--indications-success {\n  color: #38CC8C;\n}\n.form__password--indications-invalid {\n  color: #FF7A7A;\n  text-align: right;\n}\n.form__submit {\n  -webkit-appearance: none;\n  padding: 1rem;\n  margin-top: 1rem;\n  background-color: #38CC8C;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1rem;\n  border: none;\n  box-shadow: 0 8px 0 #2AA26E;\n  cursor: pointer;\n}\n.form__submit:focus {\n  transform: translateY(8px);\n  box-shadow: none;\n}\n.form__terms {\n  text-align: center;\n}\n.form__terms > span {\n  cursor: pointer;\n  color: #FF7A7A;\n}\n\n@media screen and (min-width: 1000px) {\n  .main {\n    display: flex;\n    gap: 10%;\n  }\n\n  .information {\n    width: 45%;\n    align-self: center;\n  }\n  .information > * {\n    text-align: left;\n  }\n  .information__title {\n    font-size: 3rem;\n  }\n  .information__text {\n    width: 90%;\n  }\n\n  .content {\n    width: 45%;\n  }\n}\nbody {\n  font-family: \"Poppins\", sans-serif;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") #FF7A7A repeat-y;\n}\n\n.main {\n  margin: 0 auto;\n  padding: 3rem 0 1rem 0;\n  width: 80%;\n}\n\n.white-text {\n  color: #fff;\n}\n\n.font-600 {\n  font-weight: 600;\n}\n\n.radius-12 {\n  border-radius: 0.5rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.label-text {\n  color: #B9B6D3;\n  display: block;\n  font-size: 0.7rem;\n  line-height: 1.5;\n  margin-top: 1rem;\n}\n\n.information {\n  margin-bottom: 3rem;\n}\n.information__title {\n  margin-bottom: 1rem;\n}\n.information__text {\n  font-weight: 500;\n}\n\n.promotion-container {\n  max-width: 40rem;\n  background-color: #5D54A3;\n  padding: 1rem;\n  box-shadow: 0 8px 0 rgba(0, 0, 0, 0.15);\n  margin-bottom: 2rem;\n}\n\n.footer {\n  color: #fff;\n}\n.footer__text {\n  font-size: 1rem;\n}\n.footer__link {\n  color: inherit;\n}\n.footer__link:hover {\n  text-decoration: none;\n  color: #5D54A3;\n}", "",{"version":3,"sources":["webpack://./src/scss/_config.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_form.scss","webpack://./src/scss/_media.scss"],"names":[],"mappings":"AASA;;;EAGI,sBAAA;EACA,SAAA;EACA,UAAA;ACRJ;;ACNA;EACI,gBAAA;EACA,sBFKS;EEJT,oBAAA;EACA,qBAAA;ADSJ;;ACLI;EACI,wBAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,kCAAA;EACA,eAAA;ADQR;ACNQ;EACI,cFbO;EEcP,UAAA;EACA,kCAAA;EACA,gBAAA;ADQZ;ACLQ;EACI,yBAAA;EACA,qEAAA;ADOZ;ACLY;EACI,cF5BD;EE6BC,UAAA;EACA,gBAAA;ADOhB;ACHQ;EACI,yBAAA;EACA,qEAAA;ADKZ;ACFQ;EACI,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,cF3CG;EE4CH,iBAAA;ADIZ;ACCI;EF1BA,cApBS;EAqBT,cAAA;EACA,iBAAA;EACA,gBAAA;AC4BJ;ACDI;EACI,cFpDO;ACuDf;ACAI;EACI,cF1DO;EE2DP,iBAAA;ADER;ACCI;EACI,wBAAA;EACA,aAAA;EACA,gBAAA;EACA,yBFhEO;EEiEP,kCAAA;EACA,eAAA;EACA,YAAA;EACA,2BAAA;EACA,eAAA;ADCR;ACCQ;EACI,0BAAA;EACA,gBAAA;ADCZ;ACGI;EACI,kBAAA;ADDR;ACGQ;EACI,eAAA;EACA,cFpFG;ACmFf;;ADlEI;EGjBA;IACI,aAAA;IACA,QAAA;EFuFN;;EEpFE;IACI,UAAA;IACA,kBAAA;EFuFN;EErFO;IACG,gBAAA;EFuFV;EEpFO;IACI,eAAA;EFsFX;EEnFO;IACI,UAAA;EFqFX;;EEjFE;IACI,UAAA;EFoFN;AACF;AAzGA;EACI,kCAAA;EACA,oEAAA;AA2GJ;;AAxGA;EACI,cAAA;EACA,sBAAA;EACA,UAAA;AA2GJ;;AApGA;EACI,WDbS;ACoHb;;AApGA;EACI,gBAAA;AAuGJ;;AApGA;EACI,qBAAA;AAuGJ;;AApGA;EACI,kBAAA;AAuGJ;;AApGA;EACI,WAAA;AAuGJ;;AApGA;EDfI,cApBS;EAqBT,cAAA;EACA,iBAAA;EACA,gBAAA;ECcA,gBAAA;AA0GJ;;AAvGA;EACI,mBAAA;AA0GJ;AAxGI;EACI,mBAAA;AA0GR;AAvGI;EACI,gBAAA;AAyGR;;AAnGA;EACI,gBAAA;EACA,yBD1DU;EC2DV,aAAA;EACA,uCAAA;EACA,mBAAA;AAsGJ;;AAnGA;EACI,WD5DS;ACkKb;AArGI;EACI,eAAA;AAuGR;AApGI;EACI,cAAA;AAsGR;AAnGI;EACI,qBAAA;EACA,cD5EM;ACiLd","sourcesContent":["//Colors\r\n$primary-color:#FF7A7A;\r\n$accent-color:#5D54A3;\r\n$success-color:#38CC8C; \r\n$label-color:#B9B6D3;\r\n$placeholder-color:#6B6B6D;\r\n$text-color:#3E3C49;\r\n$white-color:#fff;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n@mixin for-laptop-up {\r\n    @media screen and (min-width:1000px) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin label-text {\r\n    color: $label-color;\r\n    display: block;\r\n    font-size: .7rem;\r\n    line-height: 1.5;\r\n}\r\n","@import './config';\r\n@import './form';\r\n@import './media';\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: url(../img/bg-intro-desktop.png) $primary-color repeat-y;\r\n}\r\n\r\n.main {\r\n    margin: 0 auto;\r\n    padding: 3rem 0 1rem 0;\r\n    width: 80%;\r\n    // position: absolute;\r\n    // top: 50%;\r\n    // left: 50%;\r\n    // transform: translate(-50%, -50%);\r\n}\r\n\r\n.white-text {\r\n    color: $white-color;\r\n}\r\n\r\n.font-600 {\r\n    font-weight: 600;\r\n}\r\n\r\n.radius-12 {\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.text-center {\r\n    text-align: center\r\n}\r\n\r\n.width-100 {\r\n    width: 100%;\r\n}\r\n\r\n.label-text {\r\n    @include label-text;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.information {\r\n    margin-bottom: 3rem;\r\n\r\n    &__title {\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    &__text {\r\n        font-weight: 500;\r\n    }\r\n\r\n\r\n}\r\n\r\n.promotion-container {\r\n    max-width: 40rem;\r\n    background-color: $accent-color;\r\n    padding: 1rem;\r\n    box-shadow: 0 8px 0 rgba(#000000, 0.15);\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.footer {\r\n    color: $white-color;\r\n    &__text {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    &__link {\r\n        color: inherit;\r\n    }\r\n\r\n    &__link:hover {\r\n        text-decoration: none;\r\n        color: $accent-color;\r\n    }\r\n}\r\n",".form-container {\r\n    max-width: 40rem;\r\n    background-color: $white-color;\r\n    padding: 2rem 1.5rem;\r\n    border-radius: 1.5rem;\r\n}\r\n\r\n.form {\r\n    &__input {\r\n        -webkit-appearance: none;\r\n        height: 3.5rem;\r\n        border-radius: 1rem;\r\n        border: 2px solid #DEDEDE;\r\n        padding: 0 1rem;\r\n        font-family: 'Poppins', sans-serif;\r\n        font-size: 1rem;\r\n\r\n        &::placeholder {\r\n            color: $placeholder-color;\r\n            opacity: 1;\r\n            font-family: 'Poppins', sans-serif;\r\n            font-weight: 600;\r\n        }\r\n\r\n        &--invalid {\r\n            border: 2px solid $primary-color;\r\n            background: url(../img/icon-error.svg) no-repeat 95% 50%;\r\n\r\n            &::placeholder {\r\n                color: $primary-color;\r\n                opacity: 1;\r\n                font-weight: 600;\r\n            }\r\n        }\r\n\r\n        &--valid {\r\n            border: 2px solid $success-color;\r\n            background: url(../img/icon-valid.svg) no-repeat 95% 50%;\r\n        }\r\n\r\n        &--message {\r\n            display: block;\r\n            font-style: italic;\r\n            font-size: 0.8rem;\r\n            color: $primary-color;\r\n            text-align: right;\r\n        }\r\n\r\n    }\r\n\r\n    &__password--indications > * {\r\n        @include label-text;\r\n    }\r\n\r\n    &__password--indications-success {\r\n        color: $success-color;\r\n    }\r\n\r\n    &__password--indications-invalid {\r\n        color: $primary-color;\r\n        text-align: right;\r\n    }\r\n\r\n    &__submit {\r\n        -webkit-appearance: none;\r\n        padding: 1rem;\r\n        margin-top: 1rem;\r\n        background-color: $success-color;\r\n        font-family: 'Poppins', sans-serif;\r\n        font-size: 1rem;\r\n        border: none;\r\n        box-shadow: 0 8px 0 #2AA26E;\r\n        cursor: pointer;\r\n\r\n        &:focus {\r\n            transform: translateY(8px);\r\n            box-shadow: none;\r\n        }\r\n    }\r\n\r\n    &__terms {\r\n        text-align: center;\r\n\r\n        & > span {\r\n            cursor: pointer;\r\n            color: $primary-color;\r\n        }\r\n    }\r\n}","@include for-laptop-up {\r\n    .main {\r\n        display: flex;\r\n        gap: 10%;\r\n    }\r\n\r\n    .information {\r\n        width: 45%;\r\n        align-self: center;\r\n\r\n         & > * {\r\n            text-align: left;\r\n         }\r\n\r\n         &__title {\r\n             font-size: 3rem;\r\n         }\r\n\r\n         &__text {\r\n             width: 90%;\r\n         }\r\n    }\r\n\r\n    .content {\r\n        width: 45%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/formFeedback.js":
/*!********************************!*\
  !*** ./src/js/formFeedback.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "successForm": () => (/* binding */ successForm),
/* harmony export */   "invalidForm": () => (/* binding */ invalidForm)
/* harmony export */ });
const successForm = () => {
    console.log('YAY');
}

const invalidForm = () => {
    console.log('NON');
}



/***/ }),

/***/ "./src/js/inlineFeedback.js":
/*!**********************************!*\
  !*** ./src/js/inlineFeedback.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "fullfitInput": () => (/* binding */ fullfitInput),
/* harmony export */   "successPassCondition": () => (/* binding */ successPassCondition),
/* harmony export */   "invalidPassCondition": () => (/* binding */ invalidPassCondition)
/* harmony export */ });
//Inline Feedback
const errorMessage = (target, message = "This field cannot be empty") => {
    if(target.nextElementSibling.dataset.error) {
        target.nextElementSibling.innerText = message;
        return;
    }

    let errorMessage = document.createElement('span');
    errorMessage.innerText = message;
    errorMessage.classList.add('form__input--message');
    errorMessage.dataset.error = 'invalidInput';
    target.parentNode.insertBefore(errorMessage, target.nextSibling);

    target.classList.remove('form__input--valid');
    target.classList.add('form__input--invalid');
}

const fullfitInput = (nextElem, target) => {
    if(nextElem.dataset.error) {
        nextElem.remove();
    }

    target.classList.remove('form__input--invalid');
    target.classList.add('form__input--valid');
}

const successPassCondition = (target) => {
    target.classList.remove('form__password--indications-invalid');
    target.classList.add('form__password--indications-success');
    return;
} 
const invalidPassCondition = (target) => {
    target.classList.remove('form__password--indications-success');
    target.classList.add('form__password--indications-invalid');
    return;
} 



/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nameValidation": () => (/* binding */ nameValidation),
/* harmony export */   "emailValidation": () => (/* binding */ emailValidation),
/* harmony export */   "passwordValidation": () => (/* binding */ passwordValidation),
/* harmony export */   "passwordKeyValidation": () => (/* binding */ passwordKeyValidation),
/* harmony export */   "confirmationValidation": () => (/* binding */ confirmationValidation),
/* harmony export */   "formValidate": () => (/* binding */ formValidate)
/* harmony export */ });
/* harmony import */ var _inlineFeedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inlineFeedback */ "./src/js/inlineFeedback.js");
/* harmony import */ var _formFeedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formFeedback */ "./src/js/formFeedback.js");
//Validation




const nameValidation = () => {
    let nameInput = document.querySelector('.form__name');
    let nextElement = nameInput.nextElementSibling;
    let name = false;

    if(nameInput.checkValidity()) {
        name = true;
        (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.fullfitInput)(nextElement, nameInput)
    } else {
        name = false;
        (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(nameInput);  
    }

    return name;
} 

const emailValidation = () => {
    let emailInput = document.querySelector('.form__email');
    let nextElement = emailInput.nextElementSibling;
    let email = false;
    if(!emailInput.validity.valueMissing) {
        if(!emailInput.validity.patternMismatch) {
            email = true;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.fullfitInput)(nextElement, emailInput);
        } else {
            email = false;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(emailInput, 'The email is incorrect e.g example@email.com');
        }
    } else {
        email = false;
        (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(emailInput);
    }

    return email;
}

const passwordValidation = (ev) => {
    let passwordInput = document.querySelector('.form__password');
    let nextElement = passwordInput.nextElementSibling;
    let password = false;

    if(!passwordInput.validity.valueMissing) {
        if(!passwordInput.validity.patternMismatch) {
            password = true;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.fullfitInput)(nextElement, passwordInput);
        } else {
            password = false;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(passwordInput, '');
        }
    } else {
        password = false;
        (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(passwordInput);
    }

    return password;
}

const passwordKeyValidation = (ev) => {
    let passwordInput = ev.target;
    let uppercase = document.querySelector('.form__password--indications-uppercase');
    let lowercase = document.querySelector('.form__password--indications-lowercase');
    let number = document.querySelector('.form__password--indications-number');
    let special = document.querySelector('.form__password--indications-special');
    let characters = document.querySelector('.form__password--indications-characters');


    passwordInput.value.match(/[A-Z]/) ? (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.successPassCondition)(uppercase) : (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.invalidPassCondition)(uppercase);
    passwordInput.value.match(/[a-z]/) ? (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.successPassCondition)(lowercase) : (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.invalidPassCondition)(lowercase);
    passwordInput.value.match(/[0-9]/) ? (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.successPassCondition)(number) : (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.invalidPassCondition)(number);
    passwordInput.value.match(/[@$!%*#?&\.]/) ? (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.successPassCondition)(special) : (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.invalidPassCondition)(special);
    passwordInput.value.length > 9 ? (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.successPassCondition)(characters) : (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.invalidPassCondition)(characters);
}

const confirmationValidation = () => {
    let passwordInput = document.querySelector('.form__password');
    let confirmationInput = document.querySelector('.form__confirmation');
    let nextElement = confirmationInput.nextElementSibling;

    let samePass = false;

    if(!confirmationInput.validity.valueMissing) {
        if(confirmationInput.value === passwordInput.value) {
            samePass = true;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.fullfitInput)(nextElement, confirmationInput);
        } else {
            samePass = false;
            (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(confirmationInput, 'The password must be the same');
        }
    } else {
        (0,_inlineFeedback__WEBPACK_IMPORTED_MODULE_0__.errorMessage)(confirmationInput);
    }

    return samePass;
}

const formValidate = (ev) => {
    ev.preventDefault();
    let inputsValidation = [nameValidation(), emailValidation(), passwordValidation(), confirmationValidation()];
    
    let inputError = inputsValidation.some(item => !item);

    inputError ? (0,_formFeedback__WEBPACK_IMPORTED_MODULE_1__.invalidForm)() : (0,_formFeedback__WEBPACK_IMPORTED_MODULE_1__.successForm)();
}





/***/ }),

/***/ "./src/img/bg-intro-desktop.png":
/*!**************************************!*\
  !*** ./src/img/bg-intro-desktop.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "059183eea52640c5068d.png";

/***/ }),

/***/ "./src/img/icon-error.svg":
/*!********************************!*\
  !*** ./src/img/icon-error.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b72f792e9c900128f5c8.svg";

/***/ }),

/***/ "./src/img/icon-valid.svg":
/*!********************************!*\
  !*** ./src/img/icon-valid.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed685d5ba5864376f648.svg";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"main": 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./src/js/validation.js");



const appInit = () => {
    const inputs = document.getElementsByTagName('input');

    Array.from(inputs).forEach(input => input.value = '');

    const form = document.querySelector('.form');
    const name = document.querySelector('.form__name');
    const email = document.querySelector('.form__email');
    const password = document.querySelector('.form__password');
    const passwordConfirmation = document.querySelector('.form__confirmation');

   //Events

   name.addEventListener('blur', _validation__WEBPACK_IMPORTED_MODULE_1__.nameValidation);
   email.addEventListener('blur', _validation__WEBPACK_IMPORTED_MODULE_1__.emailValidation);

   password.addEventListener('keyup', _validation__WEBPACK_IMPORTED_MODULE_1__.passwordKeyValidation);
   password.addEventListener('blur', _validation__WEBPACK_IMPORTED_MODULE_1__.passwordValidation);

   passwordConfirmation.addEventListener('blur', _validation__WEBPACK_IMPORTED_MODULE_1__.confirmationValidation);

   form.addEventListener('submit', _validation__WEBPACK_IMPORTED_MODULE_1__.formValidate)
}

document.addEventListener('DOMContentLoaded', appInit);


// Validar el formulario entero al enviarlo. (Refactorizar si es necesario). 
// Feedback del formulario con SVG.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7O0FDckIyQjtBQUNvSDtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFjO0FBQy9DLGtDQUFrQyx3REFBZTtBQUNqRDtBQUNBLHNDQUFzQyw4REFBcUI7QUFDM0QscUNBQXFDLDJEQUFrQjtBQUN2RDtBQUNBLGlEQUFpRCwrREFBc0I7QUFDdkU7QUFDQSxtQ0FBbUMscURBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL3NyYy9zY3NzL21haW4uc2Nzcz82ZDI1Iiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9zcmMvanMvZm9ybUZlZWRiYWNrLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vc3JjL2pzL2lubGluZUZlZWRiYWNrLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vc3JjL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaWNvbi1lcnJvci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaWNvbi12YWxpZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmctaW50cm8tZGVza3RvcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG59XFxuXFxuLmZvcm1fX2lucHV0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNERURFREU7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNkI2QjZEO1xcbiAgb3BhY2l0eTogMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9ybV9faW5wdXQtLWludmFsaWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGN0E3QTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IDk1JSA1MCU7XFxufVxcbi5mb3JtX19pbnB1dC0taW52YWxpZDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNGRjdBN0E7XFxuICBvcGFjaXR5OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZvcm1fX2lucHV0LS12YWxpZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzhDQzhDO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgOTUlIDUwJTtcXG59XFxuLmZvcm1fX2lucHV0LS1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI0ZGN0E3QTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uZm9ybV9fcGFzc3dvcmQtLWluZGljYXRpb25zID4gKiB7XFxuICBjb2xvcjogI0I5QjZEMztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uZm9ybV9fcGFzc3dvcmQtLWluZGljYXRpb25zLXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMzOENDOEM7XFxufVxcbi5mb3JtX19wYXNzd29yZC0taW5kaWNhdGlvbnMtaW52YWxpZCB7XFxuICBjb2xvcjogI0ZGN0E3QTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uZm9ybV9fc3VibWl0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4Q0M4QztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiAwIDhweCAwICMyQUEyNkU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mb3JtX19zdWJtaXQ6Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uZm9ybV9fdGVybXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9ybV9fdGVybXMgPiBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjRkY3QTdBO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMCU7XFxuICB9XFxuXFxuICAuaW5mb3JtYXRpb24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuICAuaW5mb3JtYXRpb24gPiAqIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG4gIC5pbmZvcm1hdGlvbl9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICAuaW5mb3JtYXRpb25fX3RleHQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpICNGRjdBN0EgcmVwZWF0LXk7XFxufVxcblxcbi5tYWluIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogM3JlbSAwIDFyZW0gMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi53aGl0ZS10ZXh0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9udC02MDAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnJhZGl1cy0xMiB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aWR0aC0xMDAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sYWJlbC10ZXh0IHtcXG4gIGNvbG9yOiAjQjlCNkQzO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuLmluZm9ybWF0aW9uX190aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uaW5mb3JtYXRpb25fX3RleHQge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnByb21vdGlvbi1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1RDU0QTM7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZvb3Rlcl9fdGV4dCB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5mb290ZXJfX2xpbmsge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5mb290ZXJfX2xpbms6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICM1RDU0QTM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTs7O0VBR0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1JKOztBQ05BO0VBQ0ksZ0JBQUE7RUFDQSxzQkZLUztFRUpULG9CQUFBO0VBQ0EscUJBQUE7QURTSjs7QUNMSTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FEUVI7QUNOUTtFQUNJLGNGYk87RUVjUCxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBRFFaO0FDTFE7RUFDSSx5QkFBQTtFQUNBLHFFQUFBO0FET1o7QUNMWTtFQUNJLGNGNUJEO0VFNkJDLFVBQUE7RUFDQSxnQkFBQTtBRE9oQjtBQ0hRO0VBQ0kseUJBQUE7RUFDQSxxRUFBQTtBREtaO0FDRlE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNGM0NHO0VFNENILGlCQUFBO0FESVo7QUNDSTtFRjFCQSxjQXBCUztFQXFCVCxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzRCSjtBQ0RJO0VBQ0ksY0ZwRE87QUN1RGY7QUNBSTtFQUNJLGNGMURPO0VFMkRQLGlCQUFBO0FERVI7QUNDSTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJGaEVPO0VFaUVQLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QURDUjtBQ0NRO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBRENaO0FDR0k7RUFDSSxrQkFBQTtBRERSO0FDR1E7RUFDSSxlQUFBO0VBQ0EsY0ZwRkc7QUNtRmY7O0FEbEVJO0VHakJBO0lBQ0ksYUFBQTtJQUNBLFFBQUE7RUZ1Rk47O0VFcEZFO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0VGdUZOO0VFckZPO0lBQ0csZ0JBQUE7RUZ1RlY7RUVwRk87SUFDSSxlQUFBO0VGc0ZYO0VFbkZPO0lBQ0ksVUFBQTtFRnFGWDs7RUVqRkU7SUFDSSxVQUFBO0VGb0ZOO0FBQ0Y7QUF6R0E7RUFDSSxrQ0FBQTtFQUNBLG9FQUFBO0FBMkdKOztBQXhHQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUEyR0o7O0FBcEdBO0VBQ0ksV0RiUztBQ29IYjs7QUFwR0E7RUFDSSxnQkFBQTtBQXVHSjs7QUFwR0E7RUFDSSxxQkFBQTtBQXVHSjs7QUFwR0E7RUFDSSxrQkFBQTtBQXVHSjs7QUFwR0E7RUFDSSxXQUFBO0FBdUdKOztBQXBHQTtFRGZJLGNBcEJTO0VBcUJULGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VDY0EsZ0JBQUE7QUEwR0o7O0FBdkdBO0VBQ0ksbUJBQUE7QUEwR0o7QUF4R0k7RUFDSSxtQkFBQTtBQTBHUjtBQXZHSTtFQUNJLGdCQUFBO0FBeUdSOztBQW5HQTtFQUNJLGdCQUFBO0VBQ0EseUJEMURVO0VDMkRWLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBc0dKOztBQW5HQTtFQUNJLFdENURTO0FDa0tiO0FBckdJO0VBQ0ksZUFBQTtBQXVHUjtBQXBHSTtFQUNJLGNBQUE7QUFzR1I7QUFuR0k7RUFDSSxxQkFBQTtFQUNBLGNENUVNO0FDaUxkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vQ29sb3JzXFxyXFxuJHByaW1hcnktY29sb3I6I0ZGN0E3QTtcXHJcXG4kYWNjZW50LWNvbG9yOiM1RDU0QTM7XFxyXFxuJHN1Y2Nlc3MtY29sb3I6IzM4Q0M4QzsgXFxyXFxuJGxhYmVsLWNvbG9yOiNCOUI2RDM7XFxyXFxuJHBsYWNlaG9sZGVyLWNvbG9yOiM2QjZCNkQ7XFxyXFxuJHRleHQtY29sb3I6IzNFM0M0OTtcXHJcXG4kd2hpdGUtY29sb3I6I2ZmZjtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZvci1sYXB0b3AtdXAge1xcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMDBweCkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGxhYmVsLXRleHQge1xcclxcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0ICcuL2NvbmZpZyc7XFxyXFxuQGltcG9ydCAnLi9mb3JtJztcXHJcXG5AaW1wb3J0ICcuL21lZGlhJztcXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9iZy1pbnRyby1kZXNrdG9wLnBuZykgJHByaW1hcnktY29sb3IgcmVwZWF0LXk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMCAxcmVtIDA7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgLy8gdG9wOiA1MCU7XFxyXFxuICAgIC8vIGxlZnQ6IDUwJTtcXHJcXG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS10ZXh0IHtcXHJcXG4gICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtNjAwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGl1cy0xMiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY2VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxyXFxufVxcclxcblxcclxcbi53aWR0aC0xMDAge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLXRleHQge1xcclxcbiAgICBAaW5jbHVkZSBsYWJlbC10ZXh0O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb3JtYXRpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvbW90aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogNDByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDAgcmdiYSgjMDAwMDAwLCAwLjE1KTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGNvbG9yOiAkd2hpdGUtY29sb3I7XFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluazpob3ZlciB7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIixcIi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogNDByZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjREVERURFO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi0taW52YWxpZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uL2ltZy9pY29uLWVycm9yLnN2Zykgbm8tcmVwZWF0IDk1JSA1MCU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi0tdmFsaWQge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzdWNjZXNzLWNvbG9yO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWcvaWNvbi12YWxpZC5zdmcpIG5vLXJlcGVhdCA5NSUgNTAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi0tbWVzc2FnZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19wYXNzd29yZC0taW5kaWNhdGlvbnMgPiAqIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGxhYmVsLXRleHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fcGFzc3dvcmQtLWluZGljYXRpb25zLXN1Y2Nlc3Mge1xcclxcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3Bhc3N3b3JkLS1pbmRpY2F0aW9ucy1pbnZhbGlkIHtcXHJcXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3N1Ym1pdCB7XFxyXFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDAgIzJBQTI2RTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGVybXMge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgJiA+IHNwYW4ge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAaW5jbHVkZSBmb3ItbGFwdG9wLXVwIHtcXHJcXG4gICAgLm1haW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogMTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmZvcm1hdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogNDUlO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICYgPiAqIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiA0NSU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc3VjY2Vzc0Zvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnWUFZJyk7XHJcbn1cclxuXHJcbmNvbnN0IGludmFsaWRGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ05PTicpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgc3VjY2Vzc0Zvcm0sXHJcbiAgICBpbnZhbGlkRm9ybSxcclxufSIsIi8vSW5saW5lIEZlZWRiYWNrXHJcbmNvbnN0IGVycm9yTWVzc2FnZSA9ICh0YXJnZXQsIG1lc3NhZ2UgPSBcIlRoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5XCIpID0+IHtcclxuICAgIGlmKHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZGF0YXNldC5lcnJvcikge1xyXG4gICAgICAgIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgZXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2lucHV0LS1tZXNzYWdlJyk7XHJcbiAgICBlcnJvck1lc3NhZ2UuZGF0YXNldC5lcnJvciA9ICdpbnZhbGlkSW5wdXQnO1xyXG4gICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVycm9yTWVzc2FnZSwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcclxuXHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9faW5wdXQtLXZhbGlkJyk7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZm9ybV9faW5wdXQtLWludmFsaWQnKTtcclxufVxyXG5cclxuY29uc3QgZnVsbGZpdElucHV0ID0gKG5leHRFbGVtLCB0YXJnZXQpID0+IHtcclxuICAgIGlmKG5leHRFbGVtLmRhdGFzZXQuZXJyb3IpIHtcclxuICAgICAgICBuZXh0RWxlbS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9faW5wdXQtLWludmFsaWQnKTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdmb3JtX19pbnB1dC0tdmFsaWQnKTtcclxufVxyXG5cclxuY29uc3Qgc3VjY2Vzc1Bhc3NDb25kaXRpb24gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fcGFzc3dvcmQtLWluZGljYXRpb25zLWludmFsaWQnKTtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdmb3JtX19wYXNzd29yZC0taW5kaWNhdGlvbnMtc3VjY2VzcycpO1xyXG4gICAgcmV0dXJuO1xyXG59IFxyXG5jb25zdCBpbnZhbGlkUGFzc0NvbmRpdGlvbiA9ICh0YXJnZXQpID0+IHtcclxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19wYXNzd29yZC0taW5kaWNhdGlvbnMtc3VjY2VzcycpO1xyXG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX3Bhc3N3b3JkLS1pbmRpY2F0aW9ucy1pbnZhbGlkJyk7XHJcbiAgICByZXR1cm47XHJcbn0gXHJcblxyXG5leHBvcnQge1xyXG4gICAgZXJyb3JNZXNzYWdlLFxyXG4gICAgZnVsbGZpdElucHV0LFxyXG4gICAgc3VjY2Vzc1Bhc3NDb25kaXRpb24sXHJcbiAgICBpbnZhbGlkUGFzc0NvbmRpdGlvbixcclxufSIsIi8vVmFsaWRhdGlvblxyXG5pbXBvcnQgeyAgZXJyb3JNZXNzYWdlLCBmdWxsZml0SW5wdXQsIHN1Y2Nlc3NQYXNzQ29uZGl0aW9uLCBpbnZhbGlkUGFzc0NvbmRpdGlvbiAgfSBmcm9tIFwiLi9pbmxpbmVGZWVkYmFja1wiO1xyXG5pbXBvcnQgeyBzdWNjZXNzRm9ybSwgaW52YWxpZEZvcm0gfSBmcm9tIFwiLi9mb3JtRmVlZGJhY2tcIjtcclxuXHJcblxyXG5jb25zdCBuYW1lVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fbmFtZScpO1xyXG4gICAgbGV0IG5leHRFbGVtZW50ID0gbmFtZUlucHV0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGxldCBuYW1lID0gZmFsc2U7XHJcblxyXG4gICAgaWYobmFtZUlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIG5hbWUgPSB0cnVlO1xyXG4gICAgICAgIGZ1bGxmaXRJbnB1dChuZXh0RWxlbWVudCwgbmFtZUlucHV0KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuYW1lID0gZmFsc2U7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlKG5hbWVJbnB1dCk7ICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmFtZTtcclxufSBcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIGxldCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2VtYWlsJyk7XHJcbiAgICBsZXQgbmV4dEVsZW1lbnQgPSBlbWFpbElucHV0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGxldCBlbWFpbCA9IGZhbHNlO1xyXG4gICAgaWYoIWVtYWlsSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgaWYoIWVtYWlsSW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIGVtYWlsID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnVsbGZpdElucHV0KG5leHRFbGVtZW50LCBlbWFpbElucHV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbWFpbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UoZW1haWxJbnB1dCwgJ1RoZSBlbWFpbCBpcyBpbmNvcnJlY3QgZS5nIGV4YW1wbGVAZW1haWwuY29tJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbWFpbCA9IGZhbHNlO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZShlbWFpbElucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZW1haWw7XHJcbn1cclxuXHJcbmNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbiA9IChldikgPT4ge1xyXG4gICAgbGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fcGFzc3dvcmQnKTtcclxuICAgIGxldCBuZXh0RWxlbWVudCA9IHBhc3N3b3JkSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gZmFsc2U7XHJcblxyXG4gICAgaWYoIXBhc3N3b3JkSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgaWYoIXBhc3N3b3JkSW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnVsbGZpdElucHV0KG5leHRFbGVtZW50LCBwYXNzd29yZElucHV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXNzd29yZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UocGFzc3dvcmRJbnB1dCwgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFzc3dvcmQgPSBmYWxzZTtcclxuICAgICAgICBlcnJvck1lc3NhZ2UocGFzc3dvcmRJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xyXG59XHJcblxyXG5jb25zdCBwYXNzd29yZEtleVZhbGlkYXRpb24gPSAoZXYpID0+IHtcclxuICAgIGxldCBwYXNzd29yZElucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgbGV0IHVwcGVyY2FzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19wYXNzd29yZC0taW5kaWNhdGlvbnMtdXBwZXJjYXNlJyk7XHJcbiAgICBsZXQgbG93ZXJjYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3Bhc3N3b3JkLS1pbmRpY2F0aW9ucy1sb3dlcmNhc2UnKTtcclxuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fcGFzc3dvcmQtLWluZGljYXRpb25zLW51bWJlcicpO1xyXG4gICAgbGV0IHNwZWNpYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fcGFzc3dvcmQtLWluZGljYXRpb25zLXNwZWNpYWwnKTtcclxuICAgIGxldCBjaGFyYWN0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX3Bhc3N3b3JkLS1pbmRpY2F0aW9ucy1jaGFyYWN0ZXJzJyk7XHJcblxyXG5cclxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUubWF0Y2goL1tBLVpdLykgPyBzdWNjZXNzUGFzc0NvbmRpdGlvbih1cHBlcmNhc2UpIDogaW52YWxpZFBhc3NDb25kaXRpb24odXBwZXJjYXNlKTtcclxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUubWF0Y2goL1thLXpdLykgPyBzdWNjZXNzUGFzc0NvbmRpdGlvbihsb3dlcmNhc2UpIDogaW52YWxpZFBhc3NDb25kaXRpb24obG93ZXJjYXNlKTtcclxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUubWF0Y2goL1swLTldLykgPyBzdWNjZXNzUGFzc0NvbmRpdGlvbihudW1iZXIpIDogaW52YWxpZFBhc3NDb25kaXRpb24obnVtYmVyKTtcclxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUubWF0Y2goL1tAJCElKiM/JlxcLl0vKSA/IHN1Y2Nlc3NQYXNzQ29uZGl0aW9uKHNwZWNpYWwpIDogaW52YWxpZFBhc3NDb25kaXRpb24oc3BlY2lhbCk7XHJcbiAgICBwYXNzd29yZElucHV0LnZhbHVlLmxlbmd0aCA+IDkgPyBzdWNjZXNzUGFzc0NvbmRpdGlvbihjaGFyYWN0ZXJzKSA6IGludmFsaWRQYXNzQ29uZGl0aW9uKGNoYXJhY3RlcnMpO1xyXG59XHJcblxyXG5jb25zdCBjb25maXJtYXRpb25WYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fcGFzc3dvcmQnKTtcclxuICAgIGxldCBjb25maXJtYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19jb25maXJtYXRpb24nKTtcclxuICAgIGxldCBuZXh0RWxlbWVudCA9IGNvbmZpcm1hdGlvbklucHV0Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICBsZXQgc2FtZVBhc3MgPSBmYWxzZTtcclxuXHJcbiAgICBpZighY29uZmlybWF0aW9uSW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgaWYoY29uZmlybWF0aW9uSW5wdXQudmFsdWUgPT09IHBhc3N3b3JkSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgc2FtZVBhc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBmdWxsZml0SW5wdXQobmV4dEVsZW1lbnQsIGNvbmZpcm1hdGlvbklucHV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzYW1lUGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UoY29uZmlybWF0aW9uSW5wdXQsICdUaGUgcGFzc3dvcmQgbXVzdCBiZSB0aGUgc2FtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlKGNvbmZpcm1hdGlvbklucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtZVBhc3M7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0ZSA9IChldikgPT4ge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpbnB1dHNWYWxpZGF0aW9uID0gW25hbWVWYWxpZGF0aW9uKCksIGVtYWlsVmFsaWRhdGlvbigpLCBwYXNzd29yZFZhbGlkYXRpb24oKSwgY29uZmlybWF0aW9uVmFsaWRhdGlvbigpXTtcclxuICAgIFxyXG4gICAgbGV0IGlucHV0RXJyb3IgPSBpbnB1dHNWYWxpZGF0aW9uLnNvbWUoaXRlbSA9PiAhaXRlbSk7XHJcblxyXG4gICAgaW5wdXRFcnJvciA/IGludmFsaWRGb3JtKCkgOiBzdWNjZXNzRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgbmFtZVZhbGlkYXRpb24sXHJcbiAgICBlbWFpbFZhbGlkYXRpb24sXHJcbiAgICBwYXNzd29yZFZhbGlkYXRpb24sXHJcbiAgICBwYXNzd29yZEtleVZhbGlkYXRpb24sXHJcbiAgICBjb25maXJtYXRpb25WYWxpZGF0aW9uLFxyXG4gICAgZm9ybVZhbGlkYXRlXHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IG5hbWVWYWxpZGF0aW9uLCBlbWFpbFZhbGlkYXRpb24sIGZvcm1WYWxpZGF0ZSxwYXNzd29yZFZhbGlkYXRpb24sIHBhc3N3b3JkS2V5VmFsaWRhdGlvbiwgY29uZmlybWF0aW9uVmFsaWRhdGlvbiB9IGZyb20gJy4vdmFsaWRhdGlvbic7XHJcblxyXG5jb25zdCBhcHBJbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcblxyXG4gICAgQXJyYXkuZnJvbShpbnB1dHMpLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSAnJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX25hbWUnKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2VtYWlsJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19wYXNzd29yZCcpO1xyXG4gICAgY29uc3QgcGFzc3dvcmRDb25maXJtYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fY29uZmlybWF0aW9uJyk7XHJcblxyXG4gICAvL0V2ZW50c1xyXG5cclxuICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgbmFtZVZhbGlkYXRpb24pO1xyXG4gICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZW1haWxWYWxpZGF0aW9uKTtcclxuXHJcbiAgIHBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcGFzc3dvcmRLZXlWYWxpZGF0aW9uKTtcclxuICAgcGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHBhc3N3b3JkVmFsaWRhdGlvbik7XHJcblxyXG4gICBwYXNzd29yZENvbmZpcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY29uZmlybWF0aW9uVmFsaWRhdGlvbik7XHJcblxyXG4gICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZvcm1WYWxpZGF0ZSlcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcEluaXQpO1xyXG5cclxuXHJcbi8vIFZhbGlkYXIgZWwgZm9ybXVsYXJpbyBlbnRlcm8gYWwgZW52aWFybG8uIChSZWZhY3Rvcml6YXIgc2kgZXMgbmVjZXNhcmlvKS4gXHJcbi8vIEZlZWRiYWNrIGRlbCBmb3JtdWxhcmlvIGNvbiBTVkcuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=