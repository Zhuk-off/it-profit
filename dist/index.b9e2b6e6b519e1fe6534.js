(self["webpackChunkitprofit_test"] = self["webpackChunkitprofit_test"] || []).push([["index"],{

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/app/styles/style.sass");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/model/index.js");


var form = document.forms.form;
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.validateForm)(form)) {
    (0,_model__WEBPACK_IMPORTED_MODULE_1__.sendForm)(form);
  }
});
(0,_model__WEBPACK_IMPORTED_MODULE_1__.phoneMask)();
(0,_model__WEBPACK_IMPORTED_MODULE_1__.modalEvents)();

/***/ }),

/***/ "./src/app/model/index.js":
/*!********************************!*\
  !*** ./src/app/model/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalEvents: () => (/* reexport safe */ _modal_event__WEBPACK_IMPORTED_MODULE_3__.modalEvents),
/* harmony export */   phoneMask: () => (/* reexport safe */ _phone_mask__WEBPACK_IMPORTED_MODULE_0__.phoneMask),
/* harmony export */   sendForm: () => (/* reexport safe */ _send_form__WEBPACK_IMPORTED_MODULE_1__.sendForm),
/* harmony export */   validateForm: () => (/* reexport safe */ _validate_form__WEBPACK_IMPORTED_MODULE_2__.validateForm)
/* harmony export */ });
/* harmony import */ var _phone_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-mask */ "./src/app/model/phone-mask.js");
/* harmony import */ var _send_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-form */ "./src/app/model/send-form.js");
/* harmony import */ var _validate_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate-form */ "./src/app/model/validate-form.js");
/* harmony import */ var _modal_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-event */ "./src/app/model/modal-event.js");





/***/ }),

/***/ "./src/app/model/modal-event.js":
/*!**************************************!*\
  !*** ./src/app/model/modal-event.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalEvents: () => (/* binding */ modalEvents)
/* harmony export */ });
function modalEvents() {
  var modalButton = document.getElementById('modal-button');
  var modalButtonClose = document.getElementById('closeModal');

  /* modal open */
  modalButton.addEventListener('click', function () {
    var modal = document.getElementById('modal');
    document.body.classList.toggle('no-scroll');
    modal.showModal();
    modal.classList.remove('slide-out-blurred-top');
    modal.classList.add('slide-in-blurred-top');
  });

  /* modal close */
  modalButtonClose.addEventListener('click', function () {
    var modal = document.getElementById('modal');
    document.body.classList.toggle('no-scroll');
    modal.classList.remove('slide-in-blurred-top');
    modal.classList.add('slide-out-blurred-top');
    setTimeout(function () {
      modal.close();
      modal.classList.remove('slide-out-blurred-top');
    }, 450);
  });
}

/***/ }),

/***/ "./src/app/model/phone-mask.js":
/*!*************************************!*\
  !*** ./src/app/model/phone-mask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   phoneMask: () => (/* binding */ phoneMask)
/* harmony export */ });
/* harmony import */ var _shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/lib/constants/constants */ "./src/shared/lib/constants/constants.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_1__);


function phoneMask() {
  var phoneInputs = document.getElementById('phone');
  var im = new (inputmask__WEBPACK_IMPORTED_MODULE_1___default())(_shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.PHONE_MASK);
  im.mask(phoneInputs);
}

/***/ }),

/***/ "./src/app/model/send-form.js":
/*!************************************!*\
  !*** ./src/app/model/send-form.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/lib/constants/constants */ "./src/shared/lib/constants/constants.js");
/* harmony import */ var _shared_lib_constants_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/lib/constants/routes */ "./src/shared/lib/constants/routes.js");


function sendForm(form) {
  form.classList.add('rotate-vert-center');
  var button = form.querySelector('.form__submit-button');
  button.setAttribute('disabled', 'disabled');
  var status = form.querySelector('.form__status');
  status.classList.remove('form__status_err');
  status.classList.remove('form__status_success');
  form.classList.remove('form_success');
  form.classList.remove('form_error');
  fetch(_shared_lib_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.REMOTE_HOST + _shared_lib_constants_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.REGISTRATION, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.status === 'error') {
      var _data$fields;
      form.classList.remove('form_success');
      form.classList.add('form_error');
      status.classList.remove('form__status_success');
      status.classList.add('form__status_err');
      status.innerText = data === null || data === void 0 || (_data$fields = data.fields) === null || _data$fields === void 0 ? void 0 : _data$fields.inputName;
    } else if (data.status === 'success') {
      form.reset();
      form.classList.remove('form_error');
      form.classList.add('form_success');
      status.classList.add('form__status_success');
      status.classList.remove('form__status_err');
      status.innerText = data === null || data === void 0 ? void 0 : data.message;
    }
  })["catch"](function (error) {
    console.error('Произошла ошибка', error);
    form.classList.remove('form_success');
    form.classList.add('form_error');
    status.classList.remove('form__status_success');
    status.classList.add('form__status_err');
    status.innerText = _shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.SERVER_NOT_FOUND;
  })["finally"](function () {
    setTimeout(function () {
      form.classList.remove('rotate-vert-center');
      button.removeAttribute('disabled');
    }, 500);
  });
}

/***/ }),

/***/ "./src/app/model/validate-form.js":
/*!****************************************!*\
  !*** ./src/app/model/validate-form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/lib/constants/constants */ "./src/shared/lib/constants/constants.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function validateForm(form) {
  var formFields = form.querySelectorAll('.form__field');
  var validate = true;
  var _iterator = _createForOfIteratorHelper(formFields),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var formField = _step.value;
      var field = formField.getElementsByTagName('input')[0];
      if (!field) {
        field = formField.getElementsByTagName('textarea')[0];
      }
      formField.classList.remove('form__field_error');
      switch (field.name) {
        case 'name':
          if (field.value.length < 2) {
            validate = false;
            setErrorMessage(_shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_MESSAGE.NAME, formField);
          }
          break;
        case 'email':
          var regex = _shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.EMAIL_REG;
          if (!regex.test(field.value)) {
            validate = false;
            setErrorMessage(_shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_MESSAGE.EMAIL, formField);
          }
          break;
        case 'phone':
          if (field.value.includes('_') || field.value == '') {
            validate = false;
            setErrorMessage(_shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_MESSAGE.PHONE, formField);
          }
          break;
        case 'message':
          if (field.value.length < 2) {
            validate = false;
            setErrorMessage(_shared_lib_constants_constants__WEBPACK_IMPORTED_MODULE_0__.VALIDATE_MESSAGE.MESSAGE, formField);
          }
          break;
        default:
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return validate;
}
function setErrorMessage(message, formField) {
  formField.classList.add('form__field_error');
  var errMessage = formField.querySelectorAll('.error')[0];
  errMessage.innerText = message;
}

/***/ }),

/***/ "./src/shared/lib/constants/constants.js":
/*!***********************************************!*\
  !*** ./src/shared/lib/constants/constants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMAIL_REG: () => (/* binding */ EMAIL_REG),
/* harmony export */   PHONE_MASK: () => (/* binding */ PHONE_MASK),
/* harmony export */   SERVER_NOT_FOUND: () => (/* binding */ SERVER_NOT_FOUND),
/* harmony export */   VALIDATE_MESSAGE: () => (/* binding */ VALIDATE_MESSAGE)
/* harmony export */ });
var PHONE_MASK = '+375-(99)-999-99-99';
var EMAIL_REG = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
var VALIDATE_MESSAGE = {
  NAME: 'Введите имя',
  EMAIL: 'Введите корректный email',
  PHONE: 'Введите номер телефона',
  MESSAGE: 'Введите сообщение'
};
var SERVER_NOT_FOUND = 'Сервер не доступен';

/***/ }),

/***/ "./src/shared/lib/constants/routes.js":
/*!********************************************!*\
  !*** ./src/shared/lib/constants/routes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
var ROUTES = {
  HOST: 'http://localhost:9090',
  REMOTE_HOST: 'https://node.zhukoff.by',
  REGISTRATION: '/api/registration',
  PING: '/api/ping'
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.sass":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.sass ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg.webp */ "./src/app/img/bg.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Обнуление */
* {
  padding: 0;
  margin: 0;
  border: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  text-decoration: none;
}
a:visited, a:hover {
  text-decoration: none;
}

ul {
  margin: 0;
}
ul li {
  list-style: none;
  margin: 0;
}

img {
  vertical-align: top;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: 400;
  margin: 0;
}

p {
  margin: 0;
}

/* ------------------------ */
.rotate-vert-center {
  -webkit-animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@-webkit-keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
.slide-in-blurred-top {
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) translateX(-50%) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform: translateY(-1000px) translateX(-50%) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
.slide-out-blurred-top {
  -webkit-animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
}

@-webkit-keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2);
    transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
@keyframes slide-out-blurred-top {
  0% {
    -webkit-transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2);
    transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
}
body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Roboto;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}

.form {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 13px -7px #000000;
  width: 310px;
  background-color: rgba(0, 12, 20, 0.54);
  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.25));
  padding: 30px 30px 15px 30px;
  -webkit-transform: rotateY(360deg);
  transform: rotateY(360deg);
}
.form__title {
  color: #8CBDE6;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 45px;
}
.form__fields {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 45px;
}
.form__field input, .form__field textarea {
  background-color: transparent;
  border-bottom: 1px solid #1B5280;
  color: #CFE9FF;
  font-size: 18px;
  line-height: 20px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.form__field input:hover, .form__field textarea:hover {
  border-bottom: 1px solid #CFE9FF;
}
.form__field input:focus, .form__field textarea:focus {
  border-bottom: 1px solid #CFE9FF;
}
.form__field_error input {
  border-bottom: 1px solid #E68F8C;
}
.form__field_error label {
  color: #E68F8C;
}
.form__field_error .error {
  visibility: visible;
}
.form__label {
  color: #8CBDE6;
  font-size: 16px;
}
.form__input, .form__textarea {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}
.form__error {
  padding-top: 1px;
}
.form__status {
  margin-top: 7px;
  height: 14px;
  visibility: hidden;
}
.form__status_err {
  visibility: visible;
  color: #E68F8C;
}
.form__status_success {
  visibility: visible;
  color: #8CE6AB;
}
.form_success {
  border: 1px solid #8CE6AB;
}
.form_error {
  border: 1px solid #E68F8C;
}

.form__field textarea::-webkit-scrollbar, ::-webkit-scrollbar {
  width: 0;
}

.error {
  height: 14px;
  visibility: hidden;
  font-size: 14px;
  color: #E68F8C;
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 310px;
  background-color: rgba(0, 12, 20, 0.54);
  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.25));
  padding: 30px;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.modal__content {
  display: flex;
  flex-direction: column;
  gap: 45px;
  background-color: transparent;
  color: #8CBDE6;
  font-size: 24px;
  text-align: center;
}

.modal-button {
  position: absolute;
  left: 0;
  top: 0;
}

dialog[open]::backdrop {
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
}

.no-scroll {
  overflow: hidden;
}

.button {
  width: 100%;
  background-color: #1B5280;
  color: #8CBDE6;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px 0 12px 0;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.button:hover {
  background-color: #4983B3;
  color: #CFE9FF;
}
.button:disabled {
  background-color: #4C6173;
}
.button:disabled:hover {
  background-color: #4C6173;
}

.content {
  padding: 20px;
  color: #CFE9FF;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}`, "",{"version":3,"sources":["webpack://./src/app/styles/style.sass","webpack://./src/app/styles/style-reset.sass","webpack://./src/app/styles/animation.sass","webpack://./src/app/styles/constants.sass"],"names":[],"mappings":"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","sourcesContent":["@import 'style-reset'\n@import 'constants'\n@import 'animation'\n\nbody \n  background-image: url('../img/bg.webp')\n  background-position: center bottom\n  background-size: cover\n  background-repeat: no-repeat\n  font-family: Roboto\n \n.wrapper\n  height: 100vh\n  width: 100vw\n  display: flex\n  justify-content: center\n  align-items: center\n  overflow: scroll\n\n.form\n  display: flex\n  flex-direction: column\n  box-shadow: 0px 10px 13px -7px #000000\n  width: 310px\n  background-color: $color-transparent\n  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.25))\n  padding: 30px 30px 15px 30px\n  -webkit-transform: rotateY(360deg)\n  transform: rotateY(360deg)\n  &__title\n    color: $color-primary\n    text-align: center\n    font-family: Roboto\n    font-size: 24px\n    font-style: normal\n    font-weight: 400\n    line-height: 20px\n    margin-bottom: 45px\n  &__fields\n    display: flex\n    flex-direction: column\n    gap: 25px\n    margin-bottom: 45px\n  &__field input, &__field textarea\n    background-color: transparent\n    border-bottom: 1px solid $color-tertiary\n    color: $color-secondary\n    font-size: 18px\n    line-height: 20px\n    transition-property: all\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n    transition-duration: 150ms\n    &:hover\n      border-bottom: 1px solid $color-secondary\n    &:focus\n      border-bottom: 1px solid $color-secondary\n  &__field_error input\n    border-bottom: 1px solid $color-error\n  &__field_error label\n    color: $color-error\n  &__field_error .error \n    visibility: visible\n  &__label\n    color: $color-primary\n    font-size: 16px\n  &__input, &__textarea\n    width: 100%\n    padding: 5px\n    margin-top: 5px\n  &__error\n    padding-top: 1px\n  &__status\n    margin-top: 7px\n    height: 14px\n    visibility: hidden\n  &__status_err\n    visibility: visible\n    color: $color-error\n  &__status_success\n    visibility: visible\n    color: $color-success\n  &_success\n    border: 1px solid $color-success\n  &_error\n    border: 1px solid $color-error\n\n.form__field textarea::-webkit-scrollbar, ::-webkit-scrollbar\n  width: 0\n\n.error\n  height: 14px\n  visibility: hidden\n  font-size: 14px\n  color: $color-error\n\n.modal\n  position: absolute\n  left: 50%\n  top: 50%\n  transform: translate(-50%, -50%)\n  width: 310px\n  background-color: $color-transparent\n  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.25))\n  padding: 30px\n  align-items: center\n  justify-content: center\n  transition-property: all\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n  transition-duration: 150ms\n  &__content\n    display: flex\n    flex-direction: column\n    gap: 45px\n    background-color: transparent\n    color: $color-primary\n    font-size: 24px\n    text-align: center\n\n.modal-button\n  position: absolute\n  left: 0\n  top: 0\n\ndialog[open]::backdrop\n  background-color: rgb(255 255 255 / 5%)\n  backdrop-filter: blur(5px)\n\n.no-scroll\n  overflow: hidden\n\n.button\n  width: 100%\n  background-color: $color-tertiary\n  color: $color-primary\n  font-size: 16px\n  font-weight: 600\n  letter-spacing: .5px\n  display: flex\n  justify-content: center\n  align-content: center\n  padding: 10px 0 12px 0\n  cursor: pointer\n  transition-property: all\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n  transition-duration: 150ms\n  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)\n  &:hover\n    background-color: #4983B3\n    color: $color-secondary\n  &:disabled\n    background-color: #4C6173\n    &:hover\n      background-color: #4C6173\n\n.content\n  padding: 20px\n  color: $color-secondary\n  background-image: url('../img/bg.webp')","/*Обнуление\n\n*\n  padding: 0\n  margin: 0\n  border: 0\n  -moz-box-sizing: border-box\n  -webkit-box-sizing: border-box\n  box-sizing: border-box\n\n  &:before, &:after\n    -moz-box-sizing: border-box\n    -webkit-box-sizing: border-box\n    box-sizing: border-box\n\n\\:focus, :active\n  outline: none\n\na\n  &:focus, &:active\n    outline: none\n\nnav, footer, header, aside\n  display: block\n\nhtml, body\n  height: 100%\n  width: 100%\n  font-size: 100%\n  line-height: 1\n  font-size: 14px\n  -ms-text-size-adjust: 100%\n  -moz-text-size-adjust: 100%\n  -webkit-text-size-adjust: 100%\n\ninput, button, textarea\n  font-family: inherit\n\ninput::-ms-clear\n  display: none\n\nbutton\n  cursor: pointer\n\n  &::-moz-focus-inner\n    padding: 0\n    border: 0\n\na\n  text-decoration: none\n\n  &:visited, &:hover\n    text-decoration: none\n\nul\n  margin: 0\n\n  li\n    list-style: none\n    margin: 0\n\nimg\n  vertical-align: top\n\nh1, h2, h3, h4, h5, h6\n  font-size: inherit\n  font-weight: 400\n  margin: 0\n\np\n  margin: 0\n\n/* ------------------------","\n  \n.rotate-vert-center\n  -webkit-animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both\n  animation: rotate-vert-center 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both\n\n@-webkit-keyframes rotate-vert-center\n  0%\n    -webkit-transform: rotateY(0)\n    transform: rotateY(0)\n\n  100%\n    -webkit-transform: rotateY(360deg)\n    transform: rotateY(360deg)\n\n@keyframes rotate-vert-center\n  0%\n    -webkit-transform: rotateY(0)\n    transform: rotateY(0)\n\n  100%\n    -webkit-transform: rotateY(360deg)\n    transform: rotateY(360deg)\n\n.slide-in-blurred-top\n  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both\n  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both\n\n@-webkit-keyframes slide-in-blurred-top\n  0%\n    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2)\n    transform: translateY(-1000px) translateX(-50%) scaleY(2.5) scaleX(0.2)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(40px)\n    filter: blur(40px)\n    opacity: 0\n\n  100%\n    -webkit-transform: translateY(0) scaleY(1) scaleX(1)\n    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1)\n    -webkit-transform-origin: 50% 50%\n    transform-origin: 50% 50%\n    -webkit-filter: blur(0)\n    filter: blur(0)\n    opacity: 1\n\n@keyframes slide-in-blurred-top\n  0%\n    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2)\n    transform: translateY(-1000px) translateX(-50%) scaleY(2.5) scaleX(0.2)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(40px)\n    filter: blur(40px)\n    opacity: 0\n\n  100%\n    -webkit-transform: translateY(0) scaleY(1) scaleX(1)\n    transform: translateY(-50%) translateX(-50%)  scaleY(1) scaleX(1)\n    -webkit-transform-origin: 50% 50%\n    transform-origin: 50% 50%\n    -webkit-filter: blur(0)\n    filter: blur(0)\n    opacity: 1\n\n.slide-out-blurred-top\n  -webkit-animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both\n  animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06) both\n\n@-webkit-keyframes slide-out-blurred-top\n  0%\n    -webkit-transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1)\n    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(0)\n    filter: blur(0)\n    opacity: 1\n\n  100%\n    -webkit-transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2)\n    transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(40px)\n    filter: blur(40px)\n    opacity: 0\n\n@keyframes slide-out-blurred-top\n  0%\n    -webkit-transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1)\n    transform: translateY(-50%) translateX(-50%) scaleY(1) scaleX(1)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(0)\n    filter: blur(0)\n    opacity: 1\n\n  100%\n    -webkit-transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2)\n    transform: translateY(-1000px) translateX(-50%) scaleY(2) scaleX(0.2)\n    -webkit-transform-origin: 50% 0%\n    transform-origin: 50% 0%\n    -webkit-filter: blur(40px)\n    filter: blur(40px)\n    opacity: 0","$color-primary: #8CBDE6\n$color-secondary: #CFE9FF\n$color-tertiary: #1B5280\n$color-error: #E68F8C\n$color-success: #8CE6AB\n$color-transparent: rgba(0, 12, 20, 0.54)"],"sourceRoot":""}]);
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

/***/ "./node_modules/inputmask/dist/inputmask.js":
/*!**************************************************!*\
  !*** ./node_modules/inputmask/dist/inputmask.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */
!function(e, t) {
    if (true) module.exports = t(); else { var n, i; }
}("undefined" != typeof self ? self : this, (function() {
    return function() {
        "use strict";
        var e = {
            8741: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                t.default = i;
            },
            3976: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(2839), a = {
                    _maxTestPos: 500,
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: function() {},
                    onincomplete: function() {},
                    oncleared: function() {},
                    repeat: 0,
                    greedy: !1,
                    autoUnmask: !1,
                    removeMaskOnSubmit: !1,
                    clearMaskOnLostFocus: !0,
                    insertMode: !0,
                    insertModeVisual: !0,
                    clearIncomplete: !1,
                    alias: null,
                    onKeyDown: function() {},
                    onBeforeMask: null,
                    onBeforePaste: function(e, t) {
                        return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: !0,
                    showMaskOnHover: !0,
                    onKeyValidation: function() {},
                    skipOptionalPartCharacter: " ",
                    numericInput: !1,
                    rightAlign: !1,
                    undoOnEscape: !0,
                    radixPoint: "",
                    _radixDance: !1,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: !0,
                    tabThrough: !1,
                    supportsInputType: [ "text", "tel", "url", "password", "search" ],
                    ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: void 0,
                    jitMasking: !1,
                    nullable: !0,
                    inputEventOnly: !1,
                    noValuePatching: !1,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "text",
                    importDataAttributes: !0,
                    shiftPositions: !0,
                    usePrototypeDefinitions: !0,
                    validationEventTimeOut: 3e3,
                    substitutes: {}
                };
                t.default = a;
            },
            7392: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                t.default = {
                    9: {
                        validator: "[0-9\uff10-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                };
            },
            253: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i) {
                    if (void 0 === i) return e.__data ? e.__data[t] : null;
                    e.__data = e.__data || {}, e.__data[t] = i;
                };
            },
            3776: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Event = void 0, t.off = function(e, t) {
                    var i, n;
                    f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                        var a = l(e.split("."), 2);
                        (function(e, n) {
                            var a, r, o = [];
                            if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: i[e][n][a]
                            }); else o.push({
                                ev: e,
                                namespace: n && n.length > 0 ? n : "global",
                                handler: t
                            }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                            r = i[s][l].length; a < r; a++) o.push({
                                ev: s,
                                namespace: l,
                                handler: i[s][l][a]
                            }); else o.push({
                                ev: s,
                                namespace: l,
                                handler: t
                            });
                            return o;
                        })(a[0], a[1]).forEach((function(e) {
                            var t = e.ev, a = e.handler;
                            !function(e, t, a) {
                                if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                                "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                            }(t, e.namespace, a);
                        }));
                    })));
                    return this;
                }, t.on = function(e, t) {
                    if (f(this[0])) {
                        var i = this[0].eventRegistry, n = this[0];
                        e.split(" ").forEach((function(e) {
                            var a = l(e.split("."), 2), r = a[0], o = a[1];
                            !function(e, a) {
                                n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                                i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                            }(r, void 0 === o ? "global" : o);
                        }));
                    }
                    return this;
                }, t.trigger = function(e) {
                    var t = arguments;
                    if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                        var l = r[s].split("."), c = l[0], u = l[1] || "global";
                        if (void 0 !== document && "global" === u) {
                            var d, p = {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: arguments[1]
                            };
                            if (document.createEvent) {
                                try {
                                    if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                                } catch (e) {
                                    (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                }
                                e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                            } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                            e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                        } else if (void 0 !== i[c]) {
                            arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                            arguments[0].detail = arguments.slice(1);
                            var h = i[c];
                            ("global" === u ? Object.values(h).flat() : h[u]).forEach((function(e) {
                                return e.apply(n, t);
                            }));
                        }
                    }
                    return this;
                };
                var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                function f(e) {
                    return e instanceof Element;
                }
                t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !0,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                }, n.prototype = r.default.Event.prototype);
            },
            600: function(e, t) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, i(e);
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function e() {
                    var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                    "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                    "object" !== i(l) && "function" != typeof l && (l = {});
                    for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                    s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                    l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                    return l;
                };
            },
            4963: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = a.default.document;
                function c(e) {
                    return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                    void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                }
                c.prototype = {
                    on: o.on,
                    off: o.off,
                    trigger: o.trigger
                }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                var u = c;
                t.default = u;
            },
            9845: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mobile = t.iphone = t.ie = void 0;
                var n, a = (n = i(9380)) && n.__esModule ? n : {
                    default: n
                };
                var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                t.iphone = l, t.mobile = s, t.ie = o;
            },
            7184: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    return e.replace(i, "\\$1");
                };
                var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
            },
            6030: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventHandlers = void 0;
                var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                function c(e, t) {
                    var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!i) {
                        if (Array.isArray(e) || (i = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === i && e.constructor && (i = e.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(e);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                        }(e)) || t && e && "number" == typeof e.length) {
                            i && (e = i);
                            var n = 0, a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    };
                                },
                                e: function(e) {
                                    throw e;
                                },
                                f: a
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r, o = !0, s = !1;
                    return {
                        s: function() {
                            i = i.call(e);
                        },
                        n: function() {
                            var e = i.next();
                            return o = e.done, e;
                        },
                        e: function(e) {
                            s = !0, r = e;
                        },
                        f: function() {
                            try {
                                o || null == i.return || i.return();
                            } finally {
                                if (s) throw r;
                            }
                        }
                    };
                }
                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                var f = {
                    keyEvent: function(e, t, i, c, u) {
                        var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                        if (void 0 !== b) return b;
                        if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                        o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                            e.preventDefault();
                            var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                            n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                        } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                        n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                        s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                        !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                        k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                        k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                        n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                            var e = n.caret.call(d, m);
                            n.caret.call(d, m, e.begin);
                        }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                            var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                            n.translatePosition.call(d, m.inputmask.caretPos.end);
                            d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                        }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                        n.caret.call(d, m, k.begin, k.begin));
                        return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                        f.keypressEvent.call(this, e, t, i, c, u);
                    },
                    keypressEvent: function(e, t, i, r, l) {
                        var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                        if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                            if (v) {
                                var m, g = t ? {
                                    begin: l,
                                    end: l
                                } : n.caret.call(c, p);
                                v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                                d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                                !1 !== i && (setTimeout((function() {
                                    u.onKeyValidation.call(p, v, y);
                                }), 0), d.writeOutBuffer && !1 !== y)) {
                                    var k = n.getBuffer.call(c);
                                    (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                }
                                if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                            }
                        } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                        setTimeout((function() {
                            h.trigger("change");
                        }), 0));
                    },
                    pasteEvent: function(e) {
                        var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                        i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                        var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                        if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                        u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                        window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                            if (!e.clipboardData || !e.clipboardData.getData) return !0;
                            r = l + e.clipboardData.getData("text/plain") + u;
                        }
                        var f = r;
                        if (i.isRTL) {
                            f = f.split("");
                            var d, p = c(n.getBufferTemplate.call(i));
                            try {
                                for (p.s(); !(d = p.n()).done; ) {
                                    var h = d.value;
                                    f[0] === h && f.shift();
                                }
                            } catch (e) {
                                p.e(e);
                            } finally {
                                p.f();
                            }
                            f = f.join("");
                        }
                        if ("function" == typeof a.onBeforePaste) {
                            if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                            f || (f = r);
                        }
                        (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                    },
                    inputFallBackEvent: function(e) {
                        var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                        var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                        if (p !== d) {
                            if (c = function(e, a, r) {
                                for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                                for (;d.length < h; ) d.push(y);
                                for (;f.length < v; ) f.unshift(y);
                                for (;p.length < v; ) p.unshift(y);
                                var k = u.concat(f), b = d.concat(p);
                                for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                m) {
                                  case "insertText":
                                    b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                    break;

                                  case "insertReplacementText":
                                  case "deleteContentBackward":
                                    k[s] === y ? r.end++ : s = o;
                                    break;

                                  default:
                                    k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                    g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                    g.push(k[s]), r.begin--, r.end--));
                                }
                                return {
                                    action: m,
                                    data: g,
                                    caret: r
                                };
                            }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                            (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                            !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                            switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                            c.action) {
                              case "insertText":
                              case "insertReplacementText":
                                c.data.forEach((function(e, i) {
                                    var n = new o.Event("keypress");
                                    n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                })), setTimeout((function() {
                                    t.$el.trigger("keyup");
                                }), 0);
                                break;

                              case "deleteContentBackward":
                                var v = new o.Event("keydown");
                                v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                break;

                              default:
                                (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                            }
                            e.preventDefault();
                        }
                    },
                    setValueEvent: function(e) {
                        var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                        void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                    },
                    focusEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                        i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                        !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [ e, !0 ]), 
                        t.undoValue = null == t ? void 0 : t._valueGet(!0);
                    },
                    invalidEvent: function(e) {
                        this.inputmask.validationEvent = !0;
                    },
                    mouseleaveEvent: function() {
                        var e = this.inputmask, t = e.opts, i = this;
                        e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                        s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                    },
                    clickEvent: function(e, t) {
                        var i = this.inputmask;
                        i.clicked++;
                        var a = this;
                        if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                            var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                            void 0 !== r && n.caret.call(i, a, r);
                        }
                    },
                    cutEvent: function(e) {
                        var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                        window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                        o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                    },
                    blurEvent: function(e) {
                        var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                        t.clicked = 0;
                        var r = a(this), l = this;
                        if (l.inputmask) {
                            (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                            var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                            "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                            !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                                r.trigger("incomplete");
                            }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                            (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                            r.trigger("change"));
                        }
                    },
                    mouseenterEvent: function() {
                        var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                        if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                            var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                            t && (0, s.HandleNativePlaceholder)(i, a);
                        }
                    },
                    submitEvent: function() {
                        var e = this.inputmask, t = e.opts;
                        e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                        t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                        t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                            (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                        }), 0));
                    },
                    resetEvent: function() {
                        var e = this.inputmask;
                        e.refreshValue = !0, setTimeout((function() {
                            (0, s.applyInputValue)(e.el, e._valueGet(!0));
                        }), 0);
                    }
                };
                t.EventHandlers = f;
            },
            9716: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.EventRuler = void 0;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(2839), o = i(8711), s = i(7760);
                var l = {
                    on: function(e, t, i) {
                        var n = e.inputmask.dependencyLib, l = function(t) {
                            t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                            var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                            if (void 0 === u && "FORM" !== this.nodeName) {
                                var d = n.data(c, "_inputmask_opts");
                                n(c).off(), d && new a.default(d).mask(c);
                            } else {
                                if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                    switch (t.type) {
                                      case "input":
                                        if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                        break;

                                      case "click":
                                      case "focus":
                                        return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                        setTimeout((function() {
                                            e.focus();
                                        }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                            e.inputmask && i.apply(c, l);
                                        }), 0));
                                    }
                                    var p = i.apply(c, arguments);
                                    return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                }
                                t.preventDefault();
                            }
                        };
                        [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                        e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                    },
                    off: function(e, t) {
                        if (e.inputmask && e.inputmask.events) {
                            var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                            for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                                for (var r = n[a]; r.length > 0; ) {
                                    var o = r.pop();
                                    [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                }
                                delete e.inputmask.events[a];
                            }
                        }
                    }
                };
                t.EventRuler = l;
            },
            219: function(e, t, i) {
                var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                function l(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return c(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, u(e);
                }
                function f(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                        Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                            if ("object" !== u(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var n = i.call(e, t || "default");
                                if ("object" !== u(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                    }
                    var a, r;
                }
                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var p = n.default.dependencyLib, h = function() {
                    function e(t, i, n) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                        this.initDateObject(t, this.opts);
                    }
                    var t, i, n;
                    return t = e, (i = [ {
                        key: "date",
                        get: function() {
                            return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                            this._date;
                        }
                    }, {
                        key: "initDateObject",
                        value: function(e, t) {
                            var i;
                            for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                if (void 0 !== e) {
                                    if (n) {
                                        var o = P(t).lastIndex, s = E(i.index, t);
                                        P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                    } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                    e = e.slice(r.length);
                                }
                                Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                            }
                        }
                    }, {
                        key: "setValue",
                        value: function(e, t, i, n, a) {
                            if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                            void 0 !== a) {
                                var r = e[n];
                                ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                                "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                                "ampm" === n && a.call(e._date, r);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this._date = new Date(1, 0, 1);
                        }
                    }, {
                        key: "reInit",
                        value: function() {
                            this._date = void 0, this.date;
                        }
                    } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }(), v = (new Date).getFullYear(), m = !1, g = {
                    d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                    dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                        return M(Date.prototype.getDate.call(this), 2);
                    } ],
                    ddd: [ "" ],
                    dddd: [ "" ],
                    m: [ "[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return Date.prototype.getMonth.call(this) + 1;
                    } ],
                    mm: [ "0[1-9]|1[012]", function(e) {
                        var t = e ? parseInt(e) : 0;
                        return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                    }, "month", function() {
                        return M(Date.prototype.getMonth.call(this) + 1, 2);
                    } ],
                    mmm: [ "" ],
                    mmmm: [ "" ],
                    yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 2);
                    } ],
                    yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                        return M(Date.prototype.getFullYear.call(this), 4);
                    } ],
                    h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return Date.prototype.getHours;
                    } ],
                    H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                    HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                        return M(Date.prototype.getHours.call(this), 2);
                    } ],
                    Hx: [ function(e) {
                        return "[0-9]{".concat(e, "}");
                    }, Date.prototype.setHours, "hours", function(e) {
                        return function() {
                            return M(Date.prototype.getHours.call(this), e);
                        };
                    } ],
                    M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                    MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                        return M(Date.prototype.getMinutes.call(this), 2);
                    } ],
                    s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                    ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                        return M(Date.prototype.getSeconds.call(this), 2);
                    } ],
                    l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 3);
                    }, 3 ],
                    L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                        return M(Date.prototype.getMilliseconds.call(this), 2);
                    }, 2 ],
                    t: [ "[ap]", k, "ampm", b, 1 ],
                    tt: [ "[ap]m", k, "ampm", b, 2 ],
                    T: [ "[AP]", k, "ampm", b, 1 ],
                    TT: [ "[AP]M", k, "ampm", b, 2 ],
                    Z: [ ".*", void 0, "Z", function() {
                        var e = this.toString().match(/\((.+)\)/)[1];
                        e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                            return l(e, 1)[0];
                        })).join(""));
                        return e;
                    } ],
                    o: [ "" ],
                    S: [ "" ]
                }, y = {
                    isoDate: "yyyy-mm-dd",
                    isoTime: "HH:MM:ss",
                    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                };
                function k(e) {
                    var t = this.getHours();
                    e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                }
                function b() {
                    var e = this.getHours();
                    return (e = e || 12) >= 12 ? "PM" : "AM";
                }
                function x(e) {
                    var t = new RegExp("\\d+$").exec(e[0]);
                    if (t && void 0 !== t[0]) {
                        var i = g[e[0][0] + "x"].slice("");
                        return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                    }
                    if (g[e[0]]) return g[e[0]];
                }
                function P(e) {
                    if (!e.tokenizer) {
                        var t = [], i = [];
                        for (var n in g) if (/\.*x$/.test(n)) {
                            var a = n[0] + "\\d+";
                            -1 === i.indexOf(a) && i.push(a);
                        } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                        e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                        e.tokenizer = new RegExp(e.tokenizer, "g");
                    }
                    return e.tokenizer;
                }
                function w(e, t, i) {
                    if (!m) return !0;
                    if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                    if ("29" == e.day) {
                        var n = E(t.pos, i);
                        if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                        t;
                    } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                    e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                        pos: t.pos,
                        c: "0"
                    }, {
                        pos: t.pos + 1,
                        c: t.c
                    } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                    return !1;
                }
                function S(e, t, i, n) {
                    var a, o, s = "";
                    for (P(i).lastIndex = 0; a = P(i).exec(e); ) {
                        if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                          case "[":
                            s += "(";
                            break;

                          case "]":
                            s += ")?";
                            break;

                          default:
                            s += (0, r.default)(a[0]);
                        } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                    }
                    return s;
                }
                function M(e, t, i) {
                    for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                    return e;
                }
                function _(e, t, i) {
                    return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                }
                function O(e, t) {
                    return S(t.inputFormat, {
                        date: e
                    }, t);
                }
                function E(e, t) {
                    var i, n, a = 0, r = 0;
                    for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                        var o = new RegExp("\\d+$").exec(n[0]);
                        if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                            i = n, n = P(t).exec(t.inputFormat);
                            break;
                        }
                    }
                    return {
                        targetMatchIndex: a - r,
                        nextMatch: n,
                        targetMatch: i
                    };
                }
                n.default.extendAliases({
                    datetime: {
                        mask: function(e) {
                            return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                            e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                            e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                            e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                            null;
                        },
                        placeholder: "",
                        inputFormat: "isoDateTime",
                        displayFormat: null,
                        outputFormat: null,
                        min: null,
                        max: null,
                        skipOptionalPartCharacter: "",
                        i18n: {
                            dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                            monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                            ordinalSuffix: [ "st", "nd", "rd", "th" ]
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (s) return !0;
                            if (isNaN(i) && e[t] !== i) {
                                var l = E(t, a);
                                if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                    var c = g[l.targetMatch[0]][0];
                                    if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                    {
                                        fuzzy: !0,
                                        buffer: e,
                                        refreshFromBuffer: {
                                            start: t - 1,
                                            end: t + 1
                                        },
                                        pos: t + 1
                                    };
                                }
                            }
                            return !0;
                        },
                        postValidation: function(e, t, i, n, a, r, o, l) {
                            var c, u;
                            if (o) return !0;
                            if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                            void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                            e[t + 1] = "0", n = {
                                pos: t + 2,
                                caret: t
                            }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                pos: t + 2
                            })), !1 === n)) return n;
                            if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                var f = g[c.targetMatch[0]];
                                u = f[0];
                                var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                delete r.validPositions[h];
                            }
                            var m = n, y = _(e.join(""), a.inputFormat, a);
                            return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                if (e.year !== e.rawyear) {
                                    var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                    if (2 === a.length && a === r) {
                                        var s = new Date(v, e.month - 1, e.day);
                                        e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                        e.year = n, t.insert = [ {
                                            pos: t.pos + 1,
                                            c: o[0]
                                        }, {
                                            pos: t.pos + 2,
                                            c: o[1]
                                        } ]);
                                    }
                                }
                                return t;
                            }(y, m, a)), m = function(e, t, i, n, a) {
                                if (!t) return t;
                                if (t && i.min && !isNaN(i.min.date.getTime())) {
                                    var r;
                                    for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                        var o;
                                        if ((o = x(r)) && o[3]) {
                                            for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                            d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                            "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                            s.call(e._date, f.join(""));
                                        }
                                    }
                                    t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                }
                                return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                t;
                            }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                buffer: S(a.inputFormat, y, a).split(""),
                                refreshFromBuffer: {
                                    start: t,
                                    end: n.pos
                                },
                                pos: n.caret || n.pos
                            } : m;
                        },
                        onKeyDown: function(e, t, i, n) {
                            e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                            p(this).trigger("setvalue"));
                        },
                        onUnMask: function(e, t, i) {
                            return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                        },
                        casing: function(e, t, i, n) {
                            return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                        },
                        onBeforeMask: function(e, t) {
                            return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                        },
                        insertMode: !1,
                        insertModeVisual: !1,
                        shiftPositions: !1,
                        keepStatic: !1,
                        inputmode: "numeric",
                        prefillYear: !0
                    }
                });
            },
            3851: function(e, t, i) {
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                }, r = i(8711), o = i(4713);
                a.default.extendDefinitions({
                    A: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "&": {
                        validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        casing: "upper"
                    },
                    "#": {
                        validator: "[0-9A-Fa-f]",
                        casing: "upper"
                    }
                });
                var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                function l(e, t, i, n, a) {
                    return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                    s.test(e);
                }
                a.default.extendAliases({
                    cssunit: {
                        regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                    },
                    url: {
                        regex: "(https?|ftp)://.*",
                        autoUnmask: !1,
                        keepStatic: !1,
                        tabThrough: !0
                    },
                    ip: {
                        mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                        definitions: {
                            i: {
                                validator: l
                            },
                            j: {
                                validator: l
                            },
                            k: {
                                validator: l
                            },
                            l: {
                                validator: l
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "decimal",
                        substitutes: {
                            ",": "."
                        }
                    },
                    email: {
                        mask: function(e) {
                            var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                            if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                            return a;
                        },
                        greedy: !1,
                        casing: "lower",
                        separator: null,
                        quantifier: 5,
                        skipOptionalPartCharacter: "",
                        onBeforePaste: function(e, t) {
                            return (e = e.toLowerCase()).replace("mailto:", "");
                        },
                        definitions: {
                            "*": {
                                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                            },
                            "-": {
                                validator: "[0-9A-Za-z-]"
                            }
                        },
                        onUnMask: function(e, t, i) {
                            return e;
                        },
                        inputmode: "email"
                    },
                    mac: {
                        mask: "##:##:##:##:##:##"
                    },
                    vin: {
                        mask: "V{13}9{4}",
                        definitions: {
                            V: {
                                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                casing: "upper"
                            }
                        },
                        clearIncomplete: !0,
                        autoUnmask: !0
                    },
                    ssn: {
                        mask: "999-99-9999",
                        postValidation: function(e, t, i, n, a, s, l) {
                            var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                            return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                        }
                    }
                });
            },
            207: function(e, t, i) {
                var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var l = n.default.dependencyLib;
                function c(e, t) {
                    for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                    return i;
                }
                function u(e, t, i, n) {
                    if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                        var a = e.indexOf(i.radixPoint), r = !1;
                        i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                        a = e.length - 1);
                        for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                    }
                    return r && e.push(i.negationSymbol.back), e;
                }
                function f(e, t) {
                    var i = 0;
                    for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                    t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                    return i;
                }
                function d(e, t) {
                    for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                        var r = t.validPositions[n];
                        if (r && r.match.def === e) {
                            i = n;
                            break;
                        }
                    }
                    return i;
                }
                function p(e, t, i, n, a) {
                    var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                    return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                        insert: {
                            pos: r === i ? r + 1 : r,
                            c: a.radixPoint
                        },
                        pos: i
                    } : o;
                }
                n.default.extendAliases({
                    numeric: {
                        mask: function(e) {
                            e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                            " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                            "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                            var t = "0", i = e.radixPoint;
                            !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                            e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                            "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                            e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                            e.numericInput = !0);
                            var n, r = "[+]";
                            if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                            e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                            e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                            r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                var o = e.digits.toString().split(",");
                                isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                                e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                            } else e.inputmode = "numeric";
                            return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                            e.greedy = !1, function(e) {
                                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                                "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                            }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                            r;
                        },
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "999){+|1}";
                        },
                        digits: "*",
                        digitsOptional: !0,
                        enforceDigitsOnBlur: !1,
                        radixPoint: ".",
                        positionCaretOnClick: "radixFocus",
                        _radixDance: !0,
                        groupSeparator: "",
                        allowMinus: !0,
                        negationSymbol: {
                            front: "-",
                            back: ""
                        },
                        prefix: "",
                        suffix: "",
                        min: null,
                        max: null,
                        SetMaxOnOverflow: !1,
                        step: 1,
                        inputType: "text",
                        unmaskAsNumber: !1,
                        roundingFN: Math.round,
                        inputmode: "decimal",
                        shortcuts: {
                            k: "1000",
                            m: "1000000"
                        },
                        placeholder: "0",
                        greedy: !1,
                        rightAlign: !0,
                        insertMode: !0,
                        autoUnmask: !1,
                        skipOptionalPartCharacter: "",
                        usePrototypeDefinitions: !1,
                        stripLeadingZeroes: !0,
                        substituteRadixPoint: !0,
                        definitions: {
                            0: {
                                validator: p
                            },
                            1: {
                                validator: p,
                                definitionSymbol: "9"
                            },
                            9: {
                                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                                definitionSymbol: "*"
                            },
                            "+": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                }
                            },
                            "-": {
                                validator: function(e, t, i, n, a) {
                                    return a.allowMinus && e === a.negationSymbol.back;
                                }
                            }
                        },
                        preValidation: function(e, t, i, n, a, r, o, s) {
                            if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                            var l = e.indexOf(a.radixPoint), c = t;
                            if (t = function(e, t, i, n, a) {
                                return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                e;
                            }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                if (!0 !== a.allowMinus) return !1;
                                var u = !1, p = d("+", r), h = d("-", r);
                                return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                    remove: u,
                                    caret: c - a.negationSymbol.back.length
                                } : {
                                    insert: [ {
                                        pos: f.call(this, "+", r),
                                        c: a.negationSymbol.front,
                                        fromIsValid: !0
                                    }, {
                                        pos: f.call(this, "-", r),
                                        c: a.negationSymbol.back,
                                        fromIsValid: void 0
                                    } ],
                                    caret: c + a.negationSymbol.back.length
                                };
                            }
                            if (i === a.groupSeparator) return {
                                caret: c
                            };
                            if (s) return !0;
                            if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                caret: a._radixDance && t === l - 1 ? l + 1 : l
                            };
                            if (!1 === a.__financeInput) if (n) {
                                if (a.digitsOptional) return {
                                    rewritePosition: o.end
                                };
                                if (!a.digitsOptional) {
                                    if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                        insert: {
                                            pos: l + 1,
                                            c: "0",
                                            fromIsValid: !0
                                        },
                                        rewritePosition: l
                                    } : {
                                        rewritePosition: l + 1
                                    };
                                    if (o.begin < l) return {
                                        rewritePosition: o.begin - 1
                                    };
                                }
                            } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                rewritePosition: l
                            };
                            return {
                                rewritePosition: t
                            };
                        },
                        postValidation: function(e, t, i, n, a, r, o) {
                            if (!1 === n) return n;
                            if (o) return !0;
                            if (null !== a.min || null !== a.max) {
                                var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                    unmaskAsNumber: !0
                                }));
                                if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                    refreshFromBuffer: !0,
                                    buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                };
                            }
                            return n;
                        },
                        onUnMask: function(e, t, i) {
                            if ("" === t && !0 === i.nullable) return t;
                            var n = e.replace(i.prefix, "");
                            return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                            "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                            i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                            n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                        },
                        isComplete: function(e, t) {
                            var i = (t.numericInput ? e.slice().reverse() : e).join("");
                            return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                            a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                            a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                            a.default)(t.radixPoint), ".")), isFinite(i);
                        },
                        onBeforeMask: function(e, t) {
                            var i = t.radixPoint || ",";
                            isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                            var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                            e = o + ("" !== s ? i + s : s);
                            var c = 0;
                            if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                            "" !== s || !t.digitsOptional)) {
                                var f = Math.pow(10, c || 1);
                                e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                e = e.toString().replace(".", i);
                            }
                            if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                            null !== t.min || null !== t.max) {
                                var d = e.toString().replace(i, ".");
                                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                            }
                            return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                        },
                        onBeforeWrite: function(e, t, i, n) {
                            function r(e, t) {
                                if (!1 !== n.__financeInput || t) {
                                    var i = e.indexOf(n.radixPoint);
                                    -1 !== i && e.splice(i, 1);
                                }
                                if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                                return e;
                            }
                            var o, s;
                            if (n.stripLeadingZeroes && (s = function(e, t) {
                                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                                !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                            }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                            delete t[c + d];
                            if (e) switch (e.type) {
                              case "blur":
                              case "checkval":
                                if (null !== n.min) {
                                    var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                        unmaskAsNumber: !0
                                    }));
                                    if (null !== n.min && p < n.min) return {
                                        refreshFromBuffer: !0,
                                        buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                    };
                                }
                                if (t[t.length - 1] === n.negationSymbol.front) {
                                    var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                    a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                    a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                    0 == (h ? h[2] : "") && (o = {
                                        refreshFromBuffer: !0,
                                        buffer: [ 0 ]
                                    });
                                } else if ("" !== n.radixPoint) {
                                    t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                    o = {
                                        refreshFromBuffer: !0,
                                        buffer: r(t)
                                    }));
                                }
                                if (n.enforceDigitsOnBlur) {
                                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                    o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                }
                            }
                            return o;
                        },
                        onKeyDown: function(e, t, i, n) {
                            var a, r = l(this);
                            if (3 != e.location) {
                                var s, c = e.key;
                                if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (e.ctrlKey) switch (e.key) {
                              case o.keys.ArrowUp:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                                r.trigger("setvalue"), !1;

                              case o.keys.ArrowDown:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                                r.trigger("setvalue"), !1;
                            }
                            if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                                "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                                r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                                if (!0 === n._radixDance) {
                                    var f = t.indexOf(n.radixPoint);
                                    if (n.digitsOptional) {
                                        if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                        !1;
                                    } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                        var d = void 0;
                                        return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                        i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                        a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                        !1;
                                    }
                                }
                            }
                        }
                    },
                    currency: {
                        prefix: "",
                        groupSeparator: ",",
                        alias: "numeric",
                        digits: 2,
                        digitsOptional: !1
                    },
                    decimal: {
                        alias: "numeric"
                    },
                    integer: {
                        alias: "numeric",
                        inputmode: "numeric",
                        digits: 0
                    },
                    percentage: {
                        alias: "numeric",
                        min: 0,
                        max: 100,
                        suffix: " %",
                        digits: 0,
                        allowMinus: !1
                    },
                    indianns: {
                        alias: "numeric",
                        _mask: function(e) {
                            return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                        },
                        groupSeparator: ",",
                        radixPoint: ".",
                        placeholder: "0",
                        digits: 2,
                        digitsOptional: !1
                    }
                });
            },
            9380: function(e, t, i) {
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = ((n = i(8741)) && n.__esModule ? n : {
                    default: n
                }).default ? window : {};
                t.default = a;
            },
            7760: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.HandleNativePlaceholder = function(e, t) {
                    var i = e ? e.inputmask : this;
                    if (s.ie) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                            if (a !== t) {
                                var o = r.getLastValidPosition.call(i);
                                -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                                d(e, n);
                            }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                    var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                    }
                    for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                    var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                    if ("function" == typeof i.onUnMask) {
                        var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                        u = i.onUnMask.call(t, f, u, i);
                    }
                    return u;
                }, t.writeBuffer = d;
                var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                function c(e, t) {
                    var i = e ? e.inputmask : this, n = i.opts;
                    e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                    f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), 
                    (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                }
                function u(e) {
                    e.length = 0;
                    for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                    return e;
                }
                function f(e, t, i, n, s) {
                    var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                    f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                        begin: 0,
                        end: 0
                    }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                        begin: m
                    };
                    var k = [], b = c.caretPos;
                    if (h.forEach((function(e, t) {
                        if (void 0 !== e) {
                            var n = new p.Event("_checkval");
                            n.key = e, v += e;
                            var o = r.getLastValidPosition.call(c, void 0, !0);
                            !function(e, t) {
                                for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                                var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                    var s = r.seekNext.call(c, e);
                                    c.caretPos.begin < s && (c.caretPos = {
                                        begin: s
                                    });
                                }
                                return o;
                            }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                            v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                            c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                            c.caretPos = {
                                begin: g.forwardPosition,
                                end: g.forwardPosition
                            }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                        }
                    })), k.length > 0) {
                        var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                        if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                            var M = new p.Event("_checkval");
                            if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                            S++;
                        }
                    }
                    t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                    f.skipOptionalPartCharacter = y;
                }
                function d(e, t, i, a, s) {
                    var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                    if (a && "function" == typeof c.onBeforeWrite) {
                        var f = c.onBeforeWrite.call(l, a, t, i, c);
                        if (f) {
                            if (f.refreshFromBuffer) {
                                var d = f.refreshFromBuffer;
                                o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                            }
                            void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                    !0 === s)) {
                        var p = u(e), h = e.inputmask._valueGet();
                        e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                            h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                        }), 0);
                    }
                }
            },
            2394: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, v(e);
                }
                function m(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var g = r.default.document, y = "_inputmask_opts";
                function k(e, t, i) {
                    if (h.default) {
                        if (!(this instanceof k)) return new k(e, t, i);
                        this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                        !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                        e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                        this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                        this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                        this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                        this.isComposing = !1, this.hasAlternator = !1;
                    }
                }
                function b(e, t, i) {
                    var n = k.prototype.aliases[e];
                    return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                    !0) : (null === i.mask && (i.mask = e), !1);
                }
                k.prototype = {
                    dataAttribute: "data-inputmask",
                    defaults: p.default,
                    definitions: d.default,
                    aliases: {},
                    masksCache: {},
                    get isRTL() {
                        return this.opts.isRTL || this.opts.numericInput;
                    },
                    mask: function(e) {
                        var t = this;
                        return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                        (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                            var s = a.default.extend(!0, {}, t.opts);
                            if (function(e, t, i, n) {
                                function o(t, a) {
                                    var o = "" === n ? t : n + "-" + t;
                                    null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                    i[t] = a);
                                }
                                if (!0 === t.importDataAttributes) {
                                    var s, l, c, u, f = e.getAttribute(n);
                                    if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                    l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                        c = l[u];
                                        break;
                                    }
                                    for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                        if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                            c = l[u];
                                            break;
                                        }
                                        o(s, c);
                                    }
                                }
                                a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                t.isRTL = !0);
                                return Object.keys(i).length;
                            }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                                n.mask.call(e.inputmask));
                            }
                        })), e && e[0] && e[0].inputmask || this;
                    },
                    option: function(e, t) {
                        return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                        this.el && !0 !== t && this.mask(this.el), this) : void 0;
                    },
                    unmaskedvalue: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        void 0 === this.el || void 0 !== e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                        }
                        return u.unmaskedvalue.call(this, this.el);
                    },
                    remove: function() {
                        if (this.el) {
                            a.default.data(this.el, y, null);
                            var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                            e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                            f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                get: this.__valueGet,
                                set: this.__valueSet,
                                configurable: !0
                            }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                            this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                        }
                        return this.el;
                    },
                    getemptymask: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                    },
                    hasMaskedValue: function() {
                        return !this.opts.autoUnmask;
                    },
                    isComplete: function() {
                        return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        c.isComplete.call(this, l.getBuffer.call(this));
                    },
                    getmetadata: function() {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        Array.isArray(this.maskset.metadata)) {
                            var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                            return this.maskset.metadata.forEach((function(t) {
                                return t.mask !== e || (e = t, !1);
                            })), e;
                        }
                        return this.maskset.metadata;
                    },
                    isValid: function(e) {
                        if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                        e) {
                            var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                            u.checkVal.call(this, void 0, !0, !1, t);
                        } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                        return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                    },
                    format: function(e, t) {
                        this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                        var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                        u.checkVal.call(this, void 0, !0, !1, i);
                        var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                        return t ? {
                            value: n,
                            metadata: this.getmetadata()
                        } : n;
                    },
                    setValue: function(e) {
                        this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                    },
                    analyseMask: o.analyseMask
                }, k.extendDefaults = function(e) {
                    a.default.extend(!0, k.prototype.defaults, e);
                }, k.extendDefinitions = function(e) {
                    a.default.extend(!0, k.prototype.definitions, e);
                }, k.extendAliases = function(e) {
                    a.default.extend(!0, k.prototype.aliases, e);
                }, k.format = function(e, t, i) {
                    return k(t).format(e, i);
                }, k.unmask = function(e, t) {
                    return k(t).unmaskedvalue(e);
                }, k.isValid = function(e, t) {
                    return k(t).isValid(e);
                }, k.remove = function(e) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask && e.inputmask.remove();
                    }));
                }, k.setValue = function(e, t) {
                    "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                        e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                    }));
                }, k.dependencyLib = a.default, r.default.Inputmask = k;
                var x = k;
                t.default = x;
            },
            5296: function(e, t, i) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, n(e);
                }
                var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                function s(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                        Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                            if ("object" !== n(e) || null === e) return e;
                            var i = e[Symbol.toPrimitive];
                            if (void 0 !== i) {
                                var a = i.call(e, t || "default");
                                if ("object" !== n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                    }
                    var r, o;
                }
                function l(e) {
                    var t = f();
                    return function() {
                        var i, a = p(e);
                        if (t) {
                            var r = p(this).constructor;
                            i = Reflect.construct(a, arguments, r);
                        } else i = a.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === n(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e;
                            }(e);
                        }(this, i);
                    };
                }
                function c(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return c = function(e) {
                        if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                        var i;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return u(e, arguments, p(this).constructor);
                        }
                        return n.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: n,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), d(n, e);
                    }, c(e);
                }
                function u(e, t, i) {
                    return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                        var n = [ null ];
                        n.push.apply(n, t);
                        var a = new (Function.bind.apply(e, n));
                        return i && d(a, i.prototype), a;
                    }, u.apply(null, arguments);
                }
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                        !0;
                    } catch (e) {
                        return !1;
                    }
                }
                function d(e, t) {
                    return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e;
                    }, d(e, t);
                }
                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    }, p(e);
                }
                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
                var v = a.default.document;
                if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                    var m = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && d(e, t);
                        }(o, e);
                        var t, i, n, a = l(o);
                        function o() {
                            var e;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, o);
                            var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                mode: "closed"
                            }), n = v.createElement("input");
                            for (var s in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                            var l = new r.default;
                            return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                        }
                        return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), t;
                    }(c(HTMLElement));
                    a.default.customElements.define("input-mask", m);
                }
            },
            2839: function(e, t) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e;
                    }(e) || function(e, t) {
                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != i) {
                            var n, a, r, o, s = [], l = !0, c = !1;
                            try {
                                if (r = (i = i.call(e)).next, 0 === t) {
                                    if (Object(i) !== i) return;
                                    l = !1;
                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                            } catch (e) {
                                c = !0, a = e;
                            } finally {
                                try {
                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    }(e, t) || function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return n(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === i && e.constructor && (i = e.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function n(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                    return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                }, t.toKeyCode = function(e) {
                    return a[e];
                };
                var a = {
                    AltGraph: 18,
                    ArrowDown: 40,
                    ArrowLeft: 37,
                    ArrowRight: 39,
                    ArrowUp: 38,
                    Backspace: 8,
                    BACKSPACE_SAFARI: 127,
                    CapsLock: 20,
                    Delete: 46,
                    End: 35,
                    Enter: 13,
                    Escape: 27,
                    Home: 36,
                    Insert: 45,
                    PageDown: 34,
                    PageUp: 33,
                    Space: 32,
                    Tab: 9,
                    c: 67,
                    x: 88,
                    z: 90,
                    Shift: 16,
                    Control: 17,
                    Alt: 18,
                    Pause: 19,
                    Meta_LEFT: 91,
                    Meta_RIGHT: 92,
                    ContextMenu: 93,
                    Process: 229,
                    Unidentified: 229,
                    F1: 112,
                    F2: 113,
                    F3: 114,
                    F4: 115,
                    F5: 116,
                    F6: 117,
                    F7: 118,
                    F8: 119,
                    F9: 120,
                    F10: 121,
                    F11: 122,
                    F12: 123
                };
                t.keyCode = a;
                var r = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0], r = n[1];
                    return e[r] = void 0 === e[r] ? a : e[r], e;
                }), {}), o = Object.entries(a).reduce((function(e, t) {
                    var n = i(t, 2), a = n[0];
                    n[1];
                    return e[a] = "Space" === a ? " " : a, e;
                }), {});
                t.keys = o;
            },
            2391: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.analyseMask = function(e, t, i) {
                    var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                    function y(e, n, a) {
                        a = void 0 !== a ? a : e.matches.length;
                        var o = e.matches[a - 1];
                        if (t) {
                            if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                var s = i.casing ? "i" : "";
                                /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                    fn: new RegExp(n, s),
                                    static: !1,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                    casing: null,
                                    def: n,
                                    placeholder: void 0,
                                    nativeDef: n
                                });
                            } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                                o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                    fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                    static: !0,
                                    optionality: !1,
                                    newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                    casing: null,
                                    def: i.staticDefinitionSymbol || t,
                                    placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                    nativeDef: (p ? "'" : "") + t
                                });
                            }));
                            p = !1;
                        } else {
                            var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                            l && !p ? e.matches.splice(a++, 0, {
                                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                    this.test = l.validator;
                                } : new RegExp("."),
                                static: l.static || !1,
                                optionality: l.optional || !1,
                                defOptionality: l.optional || !1,
                                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                casing: l.casing,
                                def: l.definitionSymbol || n,
                                placeholder: l.placeholder,
                                nativeDef: n,
                                generated: l.generated
                            }) : (e.matches.splice(a++, 0, {
                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                static: !0,
                                optionality: !1,
                                newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                casing: null,
                                def: i.staticDefinitionSymbol || n,
                                placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                nativeDef: (p ? "'" : "") + n
                            }), p = !1);
                        }
                    }
                    function k() {
                        if (v.length > 0) {
                            if (y(l = v[v.length - 1], o), l.isAlternator) {
                                c = v.pop();
                                for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else y(h, o);
                    }
                    function b(e) {
                        var t = new a.default(!0);
                        return t.openGroup = !1, t.matches = e, t;
                    }
                    function x() {
                        if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                            if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                            }
                        } else h.matches.push(s); else k();
                    }
                    function P(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                    }
                    t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                    for (;n = t ? d.exec(e) : f.exec(e); ) {
                        if (o = n[0], t) {
                            switch (o.charAt(0)) {
                              case "?":
                                o = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                o = "{" + o + "}";
                                break;

                              case "|":
                                if (0 === v.length) {
                                    var w = b(h.matches);
                                    w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                }
                            }
                            switch (o) {
                              case "\\d":
                                o = "[0-9]";
                                break;

                              case "\\p":
                                o += d.exec(e)[0], o += d.exec(e)[0];
                            }
                        }
                        if (p) k(); else switch (o.charAt(0)) {
                          case "$":
                          case "^":
                            t || k();
                            break;

                          case i.escapeChar:
                            p = !0, t && k();
                            break;

                          case i.optionalmarker[1]:
                          case i.groupmarker[1]:
                            x();
                            break;

                          case i.optionalmarker[0]:
                            v.push(new a.default(!1, !0));
                            break;

                          case i.groupmarker[0]:
                            v.push(new a.default(!0));
                            break;

                          case i.quantifiermarker[0]:
                            var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                            "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                min: O,
                                max: E,
                                jit: T
                            };
                            var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                            (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                            break;

                          case i.alternatormarker:
                            if (v.length > 0) {
                                var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                            } else u = P(h.matches);
                            if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                            c.matches.push(u), v.push(c), u.openGroup) {
                                u.openGroup = !1;
                                var D = new a.default(!0);
                                D.alternatorGroup = !0, v.push(D);
                            }
                            break;

                          default:
                            k();
                        }
                    }
                    g && x();
                    for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                    h.matches.length > 0 && (!function e(n) {
                        n && n.matches && n.matches.forEach((function(a, r) {
                            var o = n.matches[r + 1];
                            (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                            t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                            e(a);
                        }));
                    }(h), m.push(h));
                    (i.numericInput || i.isRTL) && function e(t) {
                        for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                            var a = parseInt(n);
                            if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                var r = t.matches[n];
                                t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                            }
                            void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                            o);
                        }
                        var o;
                        return t;
                    }(m[0]);
                    return m;
                }, t.generateMaskSet = function(e, t) {
                    var i;
                    function a(e, t) {
                        var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                        if (i > 0 || "*" === i || "+" === i) {
                            var l = "*" === i ? 0 : "+" === i ? 1 : i;
                            e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                        }
                        if (!0 === r) {
                            var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                            c && c.forEach((function(t, i) {
                                var n = function(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || function(e, t) {
                                        var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != i) {
                                            var n, a, r, o, s = [], l = !0, c = !1;
                                            try {
                                                if (r = (i = i.call(e)).next, 0 === t) {
                                                    if (Object(i) !== i) return;
                                                    l = !1;
                                                } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                            } catch (e) {
                                                c = !0, a = e;
                                            } finally {
                                                try {
                                                    if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                } finally {
                                                    if (c) throw a;
                                                }
                                            }
                                            return s;
                                        }
                                    }(e, t) || function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return s(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t.split("["), 2), a = n[0], r = n[1];
                                r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                                o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                            }));
                        }
                        return e;
                    }
                    function l(e, i, o) {
                        var s, l, c = !1;
                        return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                        e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                        e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                        null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                            mask: e,
                            maskToken: r.default.prototype.analyseMask(e, c, o),
                            validPositions: [],
                            _buffer: void 0,
                            buffer: void 0,
                            tests: {},
                            excludes: {},
                            metadata: i,
                            maskLength: void 0,
                            jitOffset: {}
                        }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                        s;
                    }
                    "function" == typeof e.mask && (e.mask = e.mask(e));
                    if (Array.isArray(e.mask)) {
                        if (e.mask.length > 1) {
                            null === e.keepStatic && (e.keepStatic = !0);
                            var c = e.groupmarker[0];
                            return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                            })), l(c += e.groupmarker[1], e.mask, e);
                        }
                        e.mask = e.mask.pop();
                    }
                    i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                    null === e.keepStatic && (e.keepStatic = !1);
                    return i;
                };
                var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                    return n;
                }
                function l(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                }
            },
            157: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.mask = function() {
                    var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                    o.EventRuler.off(i);
                    var f = function(t, i) {
                        "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                        var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                        if (!l) if ("input" === t.tagName.toLowerCase()) {
                            var c = document.createElement("input");
                            c.setAttribute("type", s), l = "text" === c.type, c = null;
                        } else l = "partial";
                        return !1 !== l ? function(t) {
                            var n, s;
                            function l() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                            }
                            function c(e) {
                                s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                            }
                            if (!t.inputmask.__valueGet) {
                                if (!0 !== i.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                        f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                            return this.textContent;
                                        }, s = function(e) {
                                            this.textContent = e;
                                        }, Object.defineProperty(t, "value", {
                                            get: l,
                                            set: c,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                    s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                    t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                }
                                t.inputmask._valueGet = function(t) {
                                    return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                }, t.inputmask._valueSet = function(t, i) {
                                    s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                }, void 0 === n && (n = function() {
                                    return this.value;
                                }, s = function(e) {
                                    this.value = e;
                                }, function(t) {
                                    if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                        var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                            return e.value;
                                        }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                            return e.value = t, e;
                                        };
                                        u.valHooks[t] = {
                                            get: function(t) {
                                                if (t.inputmask) {
                                                    if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                    var r = n(t);
                                                    return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                }
                                                return n(t);
                                            },
                                            set: function(e, t) {
                                                var i = o(e, t);
                                                return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(t.type), function(e) {
                                    o.EventRuler.on(e, "mouseenter", (function() {
                                        var e = this, t = e.inputmask._valueGet(!0);
                                        t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                        r.applyInputValue)(e, t);
                                    }));
                                }(t));
                            }
                        }(t) : t.inputmask = void 0, l;
                    }(i, t);
                    if (!1 !== f) {
                        e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                        -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                        i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                        s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                        o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                        o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                        o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                        o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                        o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                        o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                        !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                        (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                        o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                        e.undoValue = e._valueGet(!0);
                        var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                        if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                            (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                            var p = a.getBuffer.call(e).slice();
                            !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                            (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                            r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                        }
                    }
                };
                var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
            },
            9695: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e, t, i, n) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                    this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                };
            },
            3194: function() {
                Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                    value: function(e, t) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var i = Object(this), n = i.length >>> 0;
                        if (0 === n) return !1;
                        for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                            if (i[r] === e) return !0;
                            r++;
                        }
                        return !1;
                    }
                });
            },
            9302: function() {
                var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                Object.entries || (Object.entries = function(a) {
                    return e(n(a), (function(e, n) {
                        return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                    }), []);
                });
            },
            7149: function() {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, e(t);
                }
                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                    return e.__proto__;
                } : function(e) {
                    return e.constructor.prototype;
                });
            },
            4013: function() {
                String.prototype.includes || (String.prototype.includes = function(e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                });
            },
            8711: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.caret = function(e, t, i, n, a) {
                    var r, o = this, s = this.opts;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                    i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                    i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                    {
                        begin: n ? t : c.call(o, t),
                        end: n ? i : c.call(o, i)
                    };
                    if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                    void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                    "number" == typeof t) {
                        t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                        var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                            begin: t,
                            end: i
                        }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                            if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var u = document.createTextNode("");
                                e.appendChild(u);
                            }
                            r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                            r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                            r.collapse(!0);
                            var f = window.getSelection();
                            f.removeAllRanges(), f.addRange(r);
                        } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                        r.moveStart("character", t), r.select());
                    }
                }, t.determineLastRequiredPosition = function(e) {
                    var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                    for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                    d[t] = l.extend(!0, {}, i);
                    var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                    for (t = u - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match)); t--) u--;
                    return e ? {
                        l: u,
                        def: d[u] ? d[u].match : void 0
                    } : u;
                }, t.determineNewCaretPosition = function(e, t, i) {
                    var a = this, c = a.maskset, u = a.opts;
                    t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                    if (e.begin === e.end) {
                        switch (i = i || u.positionCaretOnClick) {
                          case "none":
                            break;

                          case "select":
                            e = {
                                begin: 0,
                                end: r.call(a).length
                            };
                            break;

                          case "ignore":
                            e.end = e.begin = l.call(a, o.call(a));
                            break;

                          case "radixFocus":
                            if (a.clicked > 1 && 0 == c.validPositions.length) break;
                            if (function(e) {
                                if ("" !== u.radixPoint && 0 !== u.digits) {
                                    var t = c.validPositions;
                                    if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                        if (e < l.call(a, -1)) return !0;
                                        var i = r.call(a).indexOf(u.radixPoint);
                                        if (-1 !== i) {
                                            for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                            return !0;
                                        }
                                    }
                                }
                                return !1;
                            }(e.begin)) {
                                var f = r.call(a).join("").indexOf(u.radixPoint);
                                e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                break;
                            }

                          default:
                            var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                            if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                                var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                    var y = l.call(a, h);
                                    (d >= y || d === h) && (h = y);
                                }
                                e.end = e.begin = h;
                            }
                        }
                        return e;
                    }
                }, t.getBuffer = r, t.getBufferTemplate = function() {
                    var e = this.maskset;
                    void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                    return e._buffer;
                }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                    var t = this.maskset;
                    t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                }, t.seekNext = l, t.seekPrevious = function(e, t) {
                    var i = this, a = e - 1;
                    if (e <= 0) return 0;
                    for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                    return a;
                }, t.translatePosition = c;
                var n = i(4713), a = i(7215);
                function r(e) {
                    var t = this, i = t.maskset;
                    return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                    void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                }
                function o(e, t, i) {
                    var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                    void 0 === e && (e = -1);
                    for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                    s >= e && (r = s));
                    return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                }
                function s(e, t, i) {
                    var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                    if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                    if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                    if (!0 !== t && e > -1) {
                        if (i) {
                            var s = n.getTests.call(a, e);
                            return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                        }
                        var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                        return l.match.def !== c;
                    }
                    return !1;
                }
                function l(e, t, i) {
                    var a = this;
                    void 0 === i && (i = !0);
                    for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                    return r;
                }
                function c(e) {
                    var t = this.opts, i = this.el;
                    return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                    e;
                }
            },
            4713: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                    var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                    a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                    t = t || 0;
                    var p, h, v, m, g = [], y = 0;
                    do {
                        if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                        p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                            h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                            var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                            (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                        }
                        y++;
                    } while (!0 !== h.static || "" !== h.def || t > y);
                    "" === g[g.length - 1] && g.pop();
                    !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                    return o.greedy = f, g;
                }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                var n, a = (n = i(2394)) && n.__esModule ? n : {
                    default: n
                };
                function r(e, t) {
                    var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                    if ("" !== i) for (;i.length < t; ) i += "0";
                    return i;
                }
                function o(e) {
                    var t = e.locator[e.alternation];
                    return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                }
                function s(e, t, i) {
                    var n = this.opts, a = this.maskset;
                    if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                    if (!0 === t.static) {
                        if (e > -1 && void 0 === a.validPositions[e]) {
                            var r, o = d.call(this, e), s = [];
                            if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                            !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                        }
                        return t.def;
                    }
                    return n.placeholder.charAt(e % n.placeholder.length);
                }
                function l(e, t, i) {
                    return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                }
                function c(e, t) {
                    var i = this.opts, n = 0, a = function(e, t) {
                        var i = 0, n = !1;
                        t.forEach((function(e) {
                            e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                        })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                        return i;
                    }(e, t);
                    e = e > 0 ? e - 1 : 0;
                    var o, s, l, c = r(u.call(this, e));
                    i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                    for (var f = 0; f < t.length - n; f++) {
                        var d = t[f];
                        o = r(d, c.length);
                        var p = Math.abs(o - c);
                        (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                        l = d);
                    }
                    return l;
                }
                function u(e, t) {
                    var i = this.maskset;
                    return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                }
                function f(e, t, i) {
                    function n(e) {
                        for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                        i.push(e.charAt(a));
                        return i.join("");
                    }
                    return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                }
                function d(e, t, i) {
                    var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                    function k(t, i, r, s) {
                        function c(r, s, p) {
                            function v(e, t) {
                                var i = 0 === t.matches.indexOf(e);
                                return i || t.matches.every((function(n, a) {
                                    return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                    !i;
                                })), i;
                            }
                            function x(e, t, i) {
                                var n, a;
                                if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                    if (e.mloc[t]) return n = e, !1;
                                    var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                    return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                })), n) {
                                    var r = n.locator[n.alternation];
                                    return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                }
                                return void 0 !== i ? x(e, t) : void 0;
                            }
                            function P(e, t) {
                                var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                    i = a, n = !0;
                                    break;
                                }
                                if (n) {
                                    e.mloc = e.mloc || {};
                                    var r = e.locator[i];
                                    if (void 0 !== r) {
                                        if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                        void 0 !== t) {
                                            for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                            e.locator[i] = Object.keys(e.mloc).join(",");
                                        }
                                        return !0;
                                    }
                                    e.alternation = void 0;
                                }
                                return !1;
                            }
                            function w(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                return !0;
                            }
                            if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                            if (h === e && void 0 === r.matches) {
                                if (m.push({
                                    match: r,
                                    locator: s.reverse(),
                                    cd: y,
                                    mloc: {}
                                }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                g = !0, h = e;
                            } else if (void 0 !== r.matches) {
                                if (r.isGroup && p !== r) return function() {
                                    if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                }();
                                if (r.isOptional) return function() {
                                    var t = r, a = m.length;
                                    if (r = k(r, i, s, p), m.length > 0) {
                                        if (m.forEach((function(e, t) {
                                            t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                        })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                        g = !0, h = e;
                                    }
                                }();
                                if (r.isAlternator) return function() {
                                    o.hasAlternator = !0;
                                    var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                    if (-1 === _ || "string" == typeof _) {
                                        var O, E = h, T = i.slice(), j = [];
                                        if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                        if (void 0 !== l.excludes[e]) {
                                            for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                                var C = l.excludes[e][D].toString().split(":");
                                                s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                            }
                                            0 === j.length && (delete l.excludes[e], j = A);
                                        }
                                        (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                        for (var R = 0; R < j.length; R++) {
                                            O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                            var L = y.matches[O];
                                            if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                            n = m.slice(), h = E, m = [];
                                            for (var F = 0; F < n.length; F++) {
                                                var I = n[F], N = !1;
                                                I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                for (var V = 0; V < k.length; V++) {
                                                    var G = k[V];
                                                    if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                        if (I.match.nativeDef === G.match.nativeDef) {
                                                            N = !0, P(G, I);
                                                            break;
                                                        }
                                                        if (f(I, G, u)) {
                                                            P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                            break;
                                                        }
                                                        if (f(G, I, u)) {
                                                            P(G, I);
                                                            break;
                                                        }
                                                        if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                            w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                            break;
                                                        }
                                                    }
                                                }
                                                N || k.push(I);
                                            }
                                        }
                                        m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                    } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                    if (r) return !0;
                                }();
                                if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                    for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                        var d = t.matches[t.matches.indexOf(a) - 1];
                                        if (r = c(d, [ f ].concat(s), d)) {
                                            if (m.forEach((function(t, i) {
                                                (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                                n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                                h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                            })), o) break;
                                            return !0;
                                        }
                                    }
                                }();
                                if (r = k(r, i, s, p)) return !0;
                            } else h++;
                        }
                        for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                            var v = c(t.matches[p], [ p ].concat(r), s);
                            if (v && h === e) return v;
                            if (h > e) break;
                        }
                    }
                    function b(e, t) {
                        var i = -1 != e.matches.indexOf(t);
                        return i || e.matches.forEach((function(e, n) {
                            void 0 === e.matches || i || (i = b(e, t));
                        })), i;
                    }
                    if (e > -1) {
                        if (void 0 === t) {
                            for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                            void 0 !== x && P > -1 && (v = function(e, t) {
                                var i, n = [];
                                return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                    "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                }))), n;
                            }(P, x), y = v.join(""), h = P);
                        }
                        if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                        for (var w = v.shift(); w < p.length; w++) {
                            if (k(p[w], v, [ w ]) && h === e || h > e) break;
                        }
                    }
                    return (0 === m.length || g) && m.push({
                        match: {
                            fn: null,
                            static: !0,
                            optionality: !1,
                            casing: null,
                            def: "",
                            placeholder: ""
                        },
                        locator: [],
                        mloc: {},
                        cd: y
                    }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                    r = l.tests[e]), m.forEach((function(e) {
                        e.match.optionality = e.match.defOptionality || !1;
                    })), r;
                }
            },
            7215: function(e, t, i) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                    for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                    for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                        r = !0;
                        break;
                    }
                    return r;
                }, t.handleRemove = function(e, t, i, o, l) {
                    var c = this, u = this.maskset, f = this.opts;
                    if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                    c.isRTL)) {
                        var d = i.end;
                        i.end = i.begin, i.begin = d;
                    }
                    var p, h = r.getLastValidPosition.call(c, void 0, !0);
                    i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                    t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                    if (!1 !== (p = v.call(c, i))) {
                        if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                            var m = s.call(c, !0);
                            if (m) {
                                var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                (t !== a.keys.Delete || i.begin > g) && i.begin;
                            }
                        }
                        !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                            begin: u.p,
                            end: u.p
                        }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                    }
                }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
                t.revalidateMask = v;
                var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                function s(e, t, i, a, o, l) {
                    var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                    if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                    -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                        if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                        c = T, u = S.validPositions[c].alternation, p = d;
                    }
                    if (void 0 !== u) {
                        m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                        n.getDecisionTaker)(p) + ":" + p.alternation);
                        var j = [], A = -1;
                        for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                        A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                        delete S.validPositions[h];
                        for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                            for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                            y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                                caretPos: h
                            });
                            if (O) break;
                            if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                            S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            var D = (0, n.getDecisionTaker)(p);
                            if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                E = s.call(x, e, t, i, a, m - 1, l);
                                break;
                            }
                            for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                        }
                    }
                    return E && !1 === w.keepStatic || delete S.excludes[m], E;
                }
                function l(e, t, i) {
                    var n = this.opts, r = this.maskset;
                    switch (n.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var o = r.validPositions[i - 1];
                        e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                        break;

                      default:
                        if ("function" == typeof n.casing) {
                            var s = Array.prototype.slice.call(arguments);
                            s.push(r.validPositions), e = n.casing.apply(this, s);
                        }
                    }
                    return e;
                }
                function c(e) {
                    var t = this, i = this.opts, a = this.maskset;
                    if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                    if ("*" !== i.repeat) {
                        var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                        if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                            o = !0;
                            for (var c = 0; c <= l; c++) {
                                var u = n.getTestTemplate.call(t, c).match;
                                if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                    o = !1;
                                    break;
                                }
                            }
                        }
                        return o;
                    }
                }
                function u(e) {
                    var t = this.opts.insertMode ? 0 : 1;
                    return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                }
                function f(e, t, i, a, o, d, m) {
                    var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                    i = !0 === i;
                    var x = e;
                    function P(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                            e.remove.sort((function(e, t) {
                                return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                            })).forEach((function(e) {
                                v.call(g, {
                                    begin: e,
                                    end: e + 1
                                });
                            })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                            e.insert.sort((function(e, t) {
                                return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                            })).forEach((function(e) {
                                "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                            })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                            }
                            void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                        }
                        return e;
                    }
                    function w(t, i, o) {
                        var s = !1;
                        return n.getTests.call(g, t).every((function(c, f) {
                            var d = c.match;
                            if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                pos: t
                            }))) {
                                var p = void 0 !== s.c ? s.c : i, h = t;
                                return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                    input: l.call(g, p, d, h)
                                }), a, h) && (s = !1), !1);
                            }
                            return !0;
                        })), s;
                    }
                    void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                    var S = !0, M = y.extend(!0, {}, b.validPositions);
                    if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                    delete b.tests[_]);
                    if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                    !0 === S) {
                        if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                            var O = b.validPositions[x];
                            if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                    var E = !1;
                                    if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                    E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                        S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                        break;
                                    }
                                }
                            } else S = {
                                caret: r.seekNext.call(g, x)
                            };
                        }
                        g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                        !0 === S && (S = {
                            pos: x
                        });
                    }
                    if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                        var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                        void 0 !== A && (S = !0 === A ? S : A);
                    }
                    S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                    var D = P(S);
                    void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                    b.validPositions = y.extend(!0, [], M), D = !1));
                    return D;
                }
                function d(e, t, i) {
                    for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                        if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                            r = !0;
                            break;
                        }
                        if (o[s].match && o[s].match.def === t.match.nativeDef) {
                            r = void 0;
                            break;
                        }
                    }
                    return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                    r;
                }
                function p(e, t, i) {
                    var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                    if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                    e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                        begin: 0,
                        end: 0
                    }, !1).begin; else {
                        for (n = e; n < t; n++) delete l.validPositions[n];
                        a = e;
                    }
                    var p = new u.Event("keypress");
                    for (n = e; n < t; n++) {
                        p.key = d[n].toString(), s.ignorable = !1;
                        var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                        !1 !== h && void 0 !== h && (a = h.forwardPosition);
                    }
                    c.skipOptionalPartCharacter = f;
                }
                function h(e, t, i) {
                    var a = this, o = this.maskset, s = this.dependencyLib;
                    if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                    for (var l = e; l < t; l++) {
                        if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                            var c = n.getTests.call(a, l).slice();
                            "" === c[c.length - 1].match.def && c.pop();
                            var u, d = n.determineTestTemplate.call(a, l, c);
                            if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                            })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                var p = o.validPositions[t].input;
                                return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                            }
                        }
                    }
                }
                function v(e, t, i, a) {
                    var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                    function u(e, t, i) {
                        var n = t[e];
                        if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                            var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                            return a && r;
                        }
                        return !1;
                    }
                    var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                    if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                        var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                        for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                        var b, x, P = a, w = P;
                        for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                            if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                begin: h,
                                end: v
                            }))) {
                                for (;"" !== n.getTest.call(o, w).match.def; ) {
                                    if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                        "+" === b.match.def && r.getBuffer.call(o, !0);
                                        var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                        if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                    } else m = !1;
                                    if (m) {
                                        void 0 === t && b.match.static && g === e.begin && p++;
                                        break;
                                    }
                                    if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                    w++;
                                }
                                "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                            }
                            if (!m) break;
                        }
                        if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                        !1;
                    } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                    return r.resetMaskSet.call(o, !0), p;
                }
            }
        }, t = {};
        function i(n) {
            var a = t[n];
            if (void 0 !== a) return a.exports;
            var r = t[n] = {
                exports: {}
            };
            return e[n](r, r.exports, i), r.exports;
        }
        var n = {};
        return function() {
            var e, t = n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
            i(5296);
            var a = ((e = i(2394)) && e.__esModule ? e : {
                default: e
            }).default;
            t.default = a;
        }(), n;
    }();
}));

/***/ }),

/***/ "./src/app/styles/style.sass":
/*!***********************************!*\
  !*** ./src/app/styles/style.sass ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app/img/bg.webp":
/*!*****************************!*\
  !*** ./src/app/img/bg.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ad94387bc6056d6a49d.webp";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RCxDQUFDLE9BQU8seU9BQXlPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxX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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvbW9kYWwtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvcGhvbmUtbWFzay5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL2FwcC9tb2RlbC9zZW5kLWZvcm0uanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvdmFsaWRhdGUtZm9ybS5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL3NoYXJlZC9saWIvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL3NoYXJlZC9saWIvY29uc3RhbnRzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL2FwcC9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svZGlzdC9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvc3R5bGVzL3N0eWxlLnNhc3M/YmZjNSIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2l0cHJvZml0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2l0cHJvZml0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5pbXBvcnQgeyBtb2RhbEV2ZW50cywgcGhvbmVNYXNrLCBzZW5kRm9ybSwgdmFsaWRhdGVGb3JtIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh2YWxpZGF0ZUZvcm0oZm9ybSkpIHtcbiAgICBzZW5kRm9ybShmb3JtKTtcbiAgfVxufSk7XG5cbnBob25lTWFzaygpO1xuXG5tb2RhbEV2ZW50cygpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9waG9uZS1tYXNrJztcbmV4cG9ydCAqIGZyb20gJy4vc2VuZC1mb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGUtZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWV2ZW50JztcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1vZGFsRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1idXR0b24nKTtcbiAgY29uc3QgbW9kYWxCdXR0b25DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG5cbiAgLyogbW9kYWwgb3BlbiAqL1xuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtb3V0LWJsdXJyZWQtdG9wJyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4tYmx1cnJlZC10b3AnKTtcbiAgfSk7XG5cbiAgLyogbW9kYWwgY2xvc2UgKi9cbiAgbW9kYWxCdXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtaW4tYmx1cnJlZC10b3AnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1vdXQtYmx1cnJlZC10b3AnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1vdXQtYmx1cnJlZC10b3AnKTtcbiAgICB9LCA0NTApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IFBIT05FX01BU0sgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IElucHV0bWFzayBmcm9tICdpbnB1dG1hc2snO1xuXG5leHBvcnQgZnVuY3Rpb24gcGhvbmVNYXNrKCkge1xuICBjb25zdCBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICBjb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soUEhPTkVfTUFTSyk7XG4gIGltLm1hc2socGhvbmVJbnB1dHMpO1xufVxuIiwiaW1wb3J0IHsgU0VSVkVSX05PVF9GT1VORCB9IGZyb20gJy4uLy4uL3NoYXJlZC9saWIvY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2NvbnN0YW50cy9yb3V0ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VuZEZvcm0oZm9ybSkge1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS12ZXJ0LWNlbnRlcicpO1xuICBjb25zdCBidXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQtYnV0dG9uJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gIGNvbnN0IHN0YXR1cyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N0YXR1cycpO1xuICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX2VycicpO1xuICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX3N1Y2Nlc3MnKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX2Vycm9yJyk7XG5cbiAgZmV0Y2goUk9VVEVTLlJFTU9URV9IT1NUICsgUk9VVEVTLlJFR0lTVFJBVElPTiwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9zdWNjZXNzJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybV9lcnJvcicpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX3N0YXR1c19lcnInKTtcbiAgICAgICAgc3RhdHVzLmlubmVyVGV4dCA9IGRhdGE/LmZpZWxkcz8uaW5wdXROYW1lO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX2Vycm9yJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybV9zdWNjZXNzJyk7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19zdGF0dXNfc3VjY2VzcycpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX2VycicpO1xuICAgICAgICBzdGF0dXMuaW5uZXJUZXh0ID0gZGF0YT8ubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnLCBlcnJvcik7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fc3VjY2VzcycpO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtX2Vycm9yJyk7XG4gICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19zdGF0dXNfZXJyJyk7XG4gICAgICBzdGF0dXMuaW5uZXJUZXh0ID0gU0VSVkVSX05PVF9GT1VORDtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZS12ZXJ0LWNlbnRlcicpO1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIEVNQUlMX1JFRyxcbiAgVkFMSURBVEVfTUVTU0FHRSxcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2xpYi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmb3JtKSB7XG4gIGxldCBmb3JtRmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9fZmllbGQnKTtcbiAgbGV0IHZhbGlkYXRlID0gdHJ1ZTtcbiAgZm9yIChsZXQgZm9ybUZpZWxkIG9mIGZvcm1GaWVsZHMpIHtcbiAgICBsZXQgZmllbGQgPSBmb3JtRmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgZmllbGQgPSBmb3JtRmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgfVxuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19maWVsZF9lcnJvcicpO1xuXG4gICAgc3dpdGNoIChmaWVsZC5uYW1lKSB7XG4gICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICB2YWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShWQUxJREFURV9NRVNTQUdFLk5BTUUsIGZvcm1GaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIGxldCByZWdleCA9IEVNQUlMX1JFRztcbiAgICAgICAgaWYgKCFyZWdleC50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgIHZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFZBTElEQVRFX01FU1NBR0UuRU1BSUwsIGZvcm1GaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgIGlmIChmaWVsZC52YWx1ZS5pbmNsdWRlcygnXycpIHx8IGZpZWxkLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgdmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoVkFMSURBVEVfTUVTU0FHRS5QSE9ORSwgZm9ybUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICBpZiAoZmllbGQudmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFZBTElEQVRFX01FU1NBR0UuTUVTU0FHRSwgZm9ybUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0RXJyb3JNZXNzYWdlKG1lc3NhZ2UsIGZvcm1GaWVsZCkge1xuICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZmllbGRfZXJyb3InKTtcbiAgY29uc3QgZXJyTWVzc2FnZSA9IGZvcm1GaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKVswXTtcbiAgZXJyTWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlO1xufVxuIiwiZXhwb3J0IGNvbnN0IFBIT05FX01BU0sgPSAnKzM3NS0oOTkpLTk5OS05OS05OSdcblxuZXhwb3J0IGNvbnN0IEVNQUlMX1JFRyA9IC9eW1xcdy1dKyhcXC5bXFx3LV0rKSpAKFtcXHctXStcXC4pK1thLXpBLVpdezIsN30kL1xuXG5leHBvcnQgY29uc3QgVkFMSURBVEVfTUVTU0FHRSA9IHtcbiAgTkFNRTon0JLQstC10LTQuNGC0LUg0LjQvNGPJyxcbiAgRU1BSUw6J9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IGVtYWlsJyxcbiAgUEhPTkU6J9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXG4gIE1FU1NBR0U6J9CS0LLQtdC00LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtScsXG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfTk9UX0ZPVU5EPSfQodC10YDQstC10YAg0L3QtSDQtNC+0YHRgtGD0L/QtdC9JyIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XG4gIEhPU1Q6ICdodHRwOi8vbG9jYWxob3N0OjkwOTAnLFxuICBSRU1PVEVfSE9TVDogJ2h0dHBzOi8vbm9kZS56aHVrb2ZmLmJ5JyxcbiAgUkVHSVNUUkFUSU9OOiAnL2FwaS9yZWdpc3RyYXRpb24nLFxuICBQSU5HOiAnL2FwaS9waW5nJyxcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JnLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbi8q0J7QsdC90YPQu9C10L3QuNC1ICovXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOmZvY3VzLCA6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYTpmb2N1cywgYTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5uYXYsIGZvb3RlciwgaGVhZGVyLCBhc2lkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmlucHV0LCBidXR0b24sIHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOnZpc2l0ZWQsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xufVxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4ucm90YXRlLXZlcnQtY2VudGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS12ZXJ0LWNlbnRlciAwLjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBib3RoO1xuICBhbmltYXRpb246IHJvdGF0ZS12ZXJ0LWNlbnRlciAwLjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLXZlcnQtY2VudGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZS12ZXJ0LWNlbnRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbiAgfVxufVxuLnNsaWRlLWluLWJsdXJyZWQtdG9wIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWJsdXJyZWQtdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tYmx1cnJlZC10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLWJsdXJyZWQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLnNsaWRlLW91dC1ibHVycmVkLXRvcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtYmx1cnJlZC10b3AgMC40NXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNikgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQtYmx1cnJlZC10b3AgMC40NXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNikgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dC1ibHVycmVkLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMikgc2NhbGVYKDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIpIHNjYWxlWCgwLjIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1vdXQtYmx1cnJlZC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIpIHNjYWxlWCgwLjIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMDtcbiAgd2lkdGg6IDMxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyLCAyMCwgMC41NCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggMTVweCAzMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcbn1cbi5mb3JtX190aXRsZSB7XG4gIGNvbG9yOiAjOENCREU2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5mb3JtX19maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uZm9ybV9fZmllbGQgaW5wdXQsIC5mb3JtX19maWVsZCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFCNTI4MDtcbiAgY29sb3I6ICNDRkU5RkY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xufVxuLmZvcm1fX2ZpZWxkIGlucHV0OmhvdmVyLCAuZm9ybV9fZmllbGQgdGV4dGFyZWE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NGRTlGRjtcbn1cbi5mb3JtX19maWVsZCBpbnB1dDpmb2N1cywgLmZvcm1fX2ZpZWxkIHRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDRkU5RkY7XG59XG4uZm9ybV9fZmllbGRfZXJyb3IgaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2OEY4Qztcbn1cbi5mb3JtX19maWVsZF9lcnJvciBsYWJlbCB7XG4gIGNvbG9yOiAjRTY4RjhDO1xufVxuLmZvcm1fX2ZpZWxkX2Vycm9yIC5lcnJvciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZm9ybV9fbGFiZWwge1xuICBjb2xvcjogIzhDQkRFNjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvcm1fX2lucHV0LCAuZm9ybV9fdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uZm9ybV9fZXJyb3Ige1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuLmZvcm1fX3N0YXR1cyB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZm9ybV9fc3RhdHVzX2VyciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGNvbG9yOiAjRTY4RjhDO1xufVxuLmZvcm1fX3N0YXR1c19zdWNjZXNzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29sb3I6ICM4Q0U2QUI7XG59XG4uZm9ybV9zdWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhDRTZBQjtcbn1cbi5mb3JtX2Vycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2OEY4Qztcbn1cblxuLmZvcm1fX2ZpZWxkIHRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhciwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuXG4uZXJyb3Ige1xuICBoZWlnaHQ6IDE0cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0U2OEY4Qztcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDMxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyLCAyMCwgMC41NCk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG4ubW9kYWxfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDQ1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzhDQkRFNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb2RhbC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG4ubm8tc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI1MjgwO1xuICBjb2xvcjogIzhDQkRFNjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODNCMztcbiAgY29sb3I6ICNDRkU5RkY7XG59XG4uYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjE3Mztcbn1cbi5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2MTczO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjQ0ZFOUZGO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9zdHlsZS5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9zdHlsZS1yZXNldC5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9hbmltYXRpb24uc2Fzc1wiLFwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvY29uc3RhbnRzLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCLGFBQUE7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0U7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QURDSjs7QUNDQztFQUNDLGFBQUE7QURFRjs7QUNDRTtFQUNFLGFBQUE7QURFSjs7QUNBQTtFQUNFLGNBQUE7QURHRjs7QUNEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FESUY7O0FDRkE7RUFDRSxvQkFBQTtBREtGOztBQ0hBO0VBQ0UsYUFBQTtBRE1GOztB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QUNBLDBCQUFBO0VBQ0EsMkNBQUE7QUErTkY7QUE5TkU7RUFDRSx5QkFBQTtFQUNBLGNHbkpjO0FIbVhsQjtBQS9ORTtFQUNFLHlCQUFBO0FBaU9KO0FBaE9JO0VBQ0UseUJBQUE7QUFrT047O0FBaE9BO0VBQ0UsYUFBQTtFQUNBLGNHM0pnQjtFSDRKaEIseURBQUE7QUFtT0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnc3R5bGUtcmVzZXQnXFxuQGltcG9ydCAnY29uc3RhbnRzJ1xcbkBpbXBvcnQgJ2FuaW1hdGlvbidcXG5cXG5ib2R5IFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWcvYmcud2VicCcpXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XFxuICBmb250LWZhbWlseTogUm9ib3RvXFxuIFxcbi53cmFwcGVyXFxuICBoZWlnaHQ6IDEwMHZoXFxuICB3aWR0aDogMTAwdndcXG4gIGRpc3BsYXk6IGZsZXhcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICBhbGlnbi1pdGVtczogY2VudGVyXFxuICBvdmVyZmxvdzogc2Nyb2xsXFxuXFxuLmZvcm1cXG4gIGRpc3BsYXk6IGZsZXhcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwXFxuICB3aWR0aDogMzEwcHhcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10cmFuc3BhcmVudFxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAxNXB4IDMwcHhcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpXFxuICAmX190aXRsZVxcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnlcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG9cXG4gICAgZm9udC1zaXplOiAyNHB4XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbFxcbiAgICBmb250LXdlaWdodDogNDAwXFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHhcXG4gICZfX2ZpZWxkc1xcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiAyNXB4XFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHhcXG4gICZfX2ZpZWxkIGlucHV0LCAmX19maWVsZCB0ZXh0YXJlYVxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXRlcnRpYXJ5XFxuICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XFxuICAgIGZvbnQtc2l6ZTogMThweFxcbiAgICBsaW5lLWhlaWdodDogMjBweFxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGxcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXNcXG4gICAgJjpob3ZlclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5XFxuICAgICY6Zm9jdXNcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXNlY29uZGFyeVxcbiAgJl9fZmllbGRfZXJyb3IgaW5wdXRcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1lcnJvclxcbiAgJl9fZmllbGRfZXJyb3IgbGFiZWxcXG4gICAgY29sb3I6ICRjb2xvci1lcnJvclxcbiAgJl9fZmllbGRfZXJyb3IgLmVycm9yIFxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXFxuICAmX19sYWJlbFxcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnlcXG4gICAgZm9udC1zaXplOiAxNnB4XFxuICAmX19pbnB1dCwgJl9fdGV4dGFyZWFcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgcGFkZGluZzogNXB4XFxuICAgIG1hcmdpbi10b3A6IDVweFxcbiAgJl9fZXJyb3JcXG4gICAgcGFkZGluZy10b3A6IDFweFxcbiAgJl9fc3RhdHVzXFxuICAgIG1hcmdpbi10b3A6IDdweFxcbiAgICBoZWlnaHQ6IDE0cHhcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuXFxuICAmX19zdGF0dXNfZXJyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGVcXG4gICAgY29sb3I6ICRjb2xvci1lcnJvclxcbiAgJl9fc3RhdHVzX3N1Y2Nlc3NcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZVxcbiAgICBjb2xvcjogJGNvbG9yLXN1Y2Nlc3NcXG4gICZfc3VjY2Vzc1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itc3VjY2Vzc1xcbiAgJl9lcnJvclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItZXJyb3JcXG5cXG4uZm9ybV9fZmllbGQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLCA6Oi13ZWJraXQtc2Nyb2xsYmFyXFxuICB3aWR0aDogMFxcblxcbi5lcnJvclxcbiAgaGVpZ2h0OiAxNHB4XFxuICB2aXNpYmlsaXR5OiBoaWRkZW5cXG4gIGZvbnQtc2l6ZTogMTRweFxcbiAgY29sb3I6ICRjb2xvci1lcnJvclxcblxcbi5tb2RhbFxcbiAgcG9zaXRpb246IGFic29sdXRlXFxuICBsZWZ0OiA1MCVcXG4gIHRvcDogNTAlXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxcbiAgd2lkdGg6IDMxMHB4XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdHJhbnNwYXJlbnRcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSkpXFxuICBwYWRkaW5nOiAzMHB4XFxuICBhbGlnbi1pdGVtczogY2VudGVyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXNcXG4gICZfX2NvbnRlbnRcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogNDVweFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnlcXG4gICAgZm9udC1zaXplOiAyNHB4XFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcblxcbi5tb2RhbC1idXR0b25cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgbGVmdDogMFxcbiAgdG9wOiAwXFxuXFxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNSUpXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KVxcblxcbi5uby1zY3JvbGxcXG4gIG92ZXJmbG93OiBoaWRkZW5cXG5cXG4uYnV0dG9uXFxuICB3aWR0aDogMTAwJVxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcnRpYXJ5XFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnlcXG4gIGZvbnQtc2l6ZTogMTZweFxcbiAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHhcXG4gIGRpc3BsYXk6IGZsZXhcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4IDBcXG4gIGN1cnNvcjogcG9pbnRlclxcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXNcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpXFxuICAmOmhvdmVyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTgzQjNcXG4gICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnlcXG4gICY6ZGlzYWJsZWRcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjE3M1xcbiAgICAmOmhvdmVyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjE3M1xcblxcbi5jb250ZW50XFxuICBwYWRkaW5nOiAyMHB4XFxuICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeVxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWcvYmcud2VicCcpXCIsXCIvKtCe0LHQvdGD0LvQtdC90LjQtVxcblxcbipcXG4gIHBhZGRpbmc6IDBcXG4gIG1hcmdpbjogMFxcbiAgYm9yZGVyOiAwXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3hcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveFxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbiAgJjpiZWZvcmUsICY6YWZ0ZXJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveFxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuXFxcXDpmb2N1cywgOmFjdGl2ZVxcbiAgb3V0bGluZTogbm9uZVxcblxcbmFcXG4gICY6Zm9jdXMsICY6YWN0aXZlXFxuICAgIG91dGxpbmU6IG5vbmVcXG5cXG5uYXYsIGZvb3RlciwgaGVhZGVyLCBhc2lkZVxcbiAgZGlzcGxheTogYmxvY2tcXG5cXG5odG1sLCBib2R5XFxuICBoZWlnaHQ6IDEwMCVcXG4gIHdpZHRoOiAxMDAlXFxuICBmb250LXNpemU6IDEwMCVcXG4gIGxpbmUtaGVpZ2h0OiAxXFxuICBmb250LXNpemU6IDE0cHhcXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlXFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCVcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJVxcblxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhXFxuICBmb250LWZhbWlseTogaW5oZXJpdFxcblxcbmlucHV0OjotbXMtY2xlYXJcXG4gIGRpc3BsYXk6IG5vbmVcXG5cXG5idXR0b25cXG4gIGN1cnNvcjogcG9pbnRlclxcblxcbiAgJjo6LW1vei1mb2N1cy1pbm5lclxcbiAgICBwYWRkaW5nOiAwXFxuICAgIGJvcmRlcjogMFxcblxcbmFcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcblxcbiAgJjp2aXNpdGVkLCAmOmhvdmVyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcblxcbnVsXFxuICBtYXJnaW46IDBcXG5cXG4gIGxpXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmVcXG4gICAgbWFyZ2luOiAwXFxuXFxuaW1nXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wXFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNlxcbiAgZm9udC1zaXplOiBpbmhlcml0XFxuICBmb250LXdlaWdodDogNDAwXFxuICBtYXJnaW46IDBcXG5cXG5wXFxuICBtYXJnaW46IDBcXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIixcIlxcbiAgXFxuLnJvdGF0ZS12ZXJ0LWNlbnRlclxcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZS12ZXJ0LWNlbnRlciAwLjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBib3RoXFxuICBhbmltYXRpb246IHJvdGF0ZS12ZXJ0LWNlbnRlciAwLjVzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KSBib3RoXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZS12ZXJ0LWNlbnRlclxcbiAgMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMClcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApXFxuXFxuICAxMDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZS12ZXJ0LWNlbnRlclxcbiAgMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMClcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApXFxuXFxuICAxMDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG5cXG4uc2xpZGUtaW4tYmx1cnJlZC10b3BcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBib3RoXFxuICBhbmltYXRpb246IHNsaWRlLWluLWJsdXJyZWQtdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGhcXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3BcXG4gIDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KVxcbiAgICBmaWx0ZXI6IGJsdXIoNDBweClcXG4gICAgb3BhY2l0eTogMFxcblxcbiAgMTAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSlcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCVcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMClcXG4gICAgZmlsdGVyOiBibHVyKDApXFxuICAgIG9wYWNpdHk6IDFcXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluLWJsdXJyZWQtdG9wXFxuICAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNDBweClcXG4gICAgZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIG9wYWNpdHk6IDBcXG5cXG4gIDEwMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGVZKDEpIHNjYWxlWCgxKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSAgc2NhbGVZKDEpIHNjYWxlWCgxKVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKVxcbiAgICBmaWx0ZXI6IGJsdXIoMClcXG4gICAgb3BhY2l0eTogMVxcblxcbi5zbGlkZS1vdXQtYmx1cnJlZC10b3BcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtYmx1cnJlZC10b3AgMC40NXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNikgYm90aFxcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQtYmx1cnJlZC10b3AgMC40NXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNikgYm90aFxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQtYmx1cnJlZC10b3BcXG4gIDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKVxcbiAgICBmaWx0ZXI6IGJsdXIoMClcXG4gICAgb3BhY2l0eTogMVxcblxcbiAgMTAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMikgc2NhbGVYKDAuMilcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIGZpbHRlcjogYmx1cig0MHB4KVxcbiAgICBvcGFjaXR5OiAwXFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQtYmx1cnJlZC10b3BcXG4gIDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKVxcbiAgICBmaWx0ZXI6IGJsdXIoMClcXG4gICAgb3BhY2l0eTogMVxcblxcbiAgMTAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMikgc2NhbGVYKDAuMilcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIGZpbHRlcjogYmx1cig0MHB4KVxcbiAgICBvcGFjaXR5OiAwXCIsXCIkY29sb3ItcHJpbWFyeTogIzhDQkRFNlxcbiRjb2xvci1zZWNvbmRhcnk6ICNDRkU5RkZcXG4kY29sb3ItdGVydGlhcnk6ICMxQjUyODBcXG4kY29sb3ItZXJyb3I6ICNFNjhGOENcXG4kY29sb3Itc3VjY2VzczogIzhDRTZBQlxcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgwLCAxMiwgMjAsIDAuNTQpXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohXG4gKiBkaXN0L2lucHV0bWFza1xuICogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiAqIENvcHlyaWdodCAoYykgMjAxMCAtIDIwMjMgUm9iaW4gSGVyYm90c1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBWZXJzaW9uOiA1LjAuOFxuICovXG4hZnVuY3Rpb24oZSwgdCkge1xuICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSB0KCk7IGVsc2UgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQpIGRlZmluZShbXSwgdCk7IGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHQoKTtcbiAgICAgICAgZm9yICh2YXIgbiBpbiBpKSAoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBlKVtuXSA9IGlbbl07XG4gICAgfVxufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgZSA9IHtcbiAgICAgICAgICAgIDg3NDE6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgaSA9ICEoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2Ygd2luZG93IHx8ICF3aW5kb3cuZG9jdW1lbnQgfHwgIXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSBpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5NzY6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoMjgzOSksIGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIF9tYXhUZXN0UG9zOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxtYXJrZXI6IFsgXCJbXCIsIFwiXVwiIF0sXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aWZpZXJtYXJrZXI6IFsgXCJ7XCIsIFwifVwiIF0sXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwbWFya2VyOiBbIFwiKFwiLCBcIilcIiBdLFxuICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9ybWFya2VyOiBcInxcIixcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlQ2hhcjogXCJcXFxcXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbmNvbXBsZXRlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBvbmluY29tcGxldGU6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIG9uY2xlYXJlZDogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiAwLFxuICAgICAgICAgICAgICAgICAgICBncmVlZHk6ICExLFxuICAgICAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTWFza09uU3VibWl0OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZVZpc3VhbDogITAsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITEsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVQYXN0ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5vbkJlZm9yZU1hc2sgPyB0Lm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIGUsIHQpIDogZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNob3dNYXNrT25Gb2N1czogITAsXG4gICAgICAgICAgICAgICAgICAgIHNob3dNYXNrT25Ib3ZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VmFsaWRhdGlvbjogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCIgXCIsXG4gICAgICAgICAgICAgICAgICAgIG51bWVyaWNJbnB1dDogITEsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QWxpZ246ICExLFxuICAgICAgICAgICAgICAgICAgICB1bmRvT25Fc2NhcGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBfcmFkaXhEYW5jZTogITEsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBrZWVwU3RhdGljOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25UYWI6ICEwLFxuICAgICAgICAgICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNJbnB1dFR5cGU6IFsgXCJ0ZXh0XCIsIFwidGVsXCIsIFwidXJsXCIsIFwicGFzc3dvcmRcIiwgXCJzZWFyY2hcIiBdLFxuICAgICAgICAgICAgICAgICAgICBpZ25vcmFibGVzOiBbIG4ua2V5cy5CYWNrc3BhY2UsIG4ua2V5cy5UYWIsIG4ua2V5cy5QYXVzZSwgbi5rZXlzLkVzY2FwZSwgbi5rZXlzLlBhZ2VVcCwgbi5rZXlzLlBhZ2VEb3duLCBuLmtleXMuRW5kLCBuLmtleXMuSG9tZSwgbi5rZXlzLkFycm93TGVmdCwgbi5rZXlzLkFycm93VXAsIG4ua2V5cy5BcnJvd1JpZ2h0LCBuLmtleXMuQXJyb3dEb3duLCBuLmtleXMuSW5zZXJ0LCBuLmtleXMuRGVsZXRlLCBuLmtleXMuQ29udGV4dE1lbnUsIG4ua2V5cy5GMSwgbi5rZXlzLkYyLCBuLmtleXMuRjMsIG4ua2V5cy5GNCwgbi5rZXlzLkY1LCBuLmtleXMuRjYsIG4ua2V5cy5GNywgbi5rZXlzLkY4LCBuLmtleXMuRjksIG4ua2V5cy5GMTAsIG4ua2V5cy5GMTEsIG4ua2V5cy5GMTIsIG4ua2V5cy5Qcm9jZXNzLCBuLmtleXMuVW5pZGVudGlmaWVkLCBuLmtleXMuU2hpZnQsIG4ua2V5cy5Db250cm9sLCBuLmtleXMuQWx0LCBuLmtleXMuVGFiLCBuLmtleXMuQWx0R3JhcGgsIG4ua2V5cy5DYXBzTG9jayBdLFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljRGVmaW5pdGlvblN5bWJvbDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgbnVsbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dEV2ZW50T25seTogITEsXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsdWVQYXRjaGluZzogITEsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcImx2cFwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2hpZnRQb3NpdGlvbnM6ICEwLFxuICAgICAgICAgICAgICAgICAgICB1c2VQcm90b3R5cGVEZWZpbml0aW9uczogITAsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FdmVudFRpbWVPdXQ6IDNlMyxcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0ZXM6IHt9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSBhO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDczOTI6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIDk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMC1cXHVmZjE5XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCIqXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjEwLVxcdWZmMTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjUzOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGkpIHJldHVybiBlLl9fZGF0YSA/IGUuX19kYXRhW3RdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZS5fX2RhdGEgPSBlLl9fZGF0YSB8fCB7fSwgZS5fX2RhdGFbdF0gPSBpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc3NjogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5FdmVudCA9IHZvaWQgMCwgdC5vZmYgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBuO1xuICAgICAgICAgICAgICAgICAgICBmKHRoaXNbMF0pICYmIGUgJiYgKGkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIG4gPSB0aGlzWzBdLCBlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGwoZS5zcGxpdChcIi5cIiksIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSwgciwgbyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aCA+IDApIGlmICh2b2lkIDAgPT09IHQpIGZvciAoYSA9IDAsIHIgPSBpW2VdW25dLmxlbmd0aDsgYSA8IHI7IGErKykgby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbiAmJiBuLmxlbmd0aCA+IDAgPyBuIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaVtlXVtuXVthXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBlbHNlIG8ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2OiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG4gJiYgbi5sZW5ndGggPiAwID8gbiA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgZWxzZSBpZiAobi5sZW5ndGggPiAwKSBmb3IgKHZhciBzIGluIGkpIGZvciAodmFyIGwgaW4gaVtzXSkgaWYgKGwgPT09IG4pIGlmICh2b2lkIDAgPT09IHQpIGZvciAoYSA9IDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBpW3NdW2xdLmxlbmd0aDsgYSA8IHI7IGErKykgby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaVtzXVtsXVthXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBlbHNlIG8ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2OiBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKGFbMF0sIGFbMV0pLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUuZXYsIGEgPSBlLmhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQsIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW4gaSA9PSAxKSBpZiAobi5yZW1vdmVFdmVudExpc3RlbmVyID8gbi5yZW1vdmVFdmVudExpc3RlbmVyKGUsIGEsICExKSA6IG4uZGV0YWNoRXZlbnQgJiYgbi5kZXRhY2hFdmVudChcIm9uXCIuY29uY2F0KGUpLCBhKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2xvYmFsXCIgPT09IHQpIGZvciAodmFyIHIgaW4gaVtlXSkgaVtlXVtyXS5zcGxpY2UoaVtlXVtyXS5pbmRleE9mKGEpLCAxKTsgZWxzZSBpW2VdW3RdLnNwbGljZShpW2VdW3RdLmluZGV4T2YoYSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odCwgZS5uYW1lc3BhY2UsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LCB0Lm9uID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZih0aGlzWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIG4gPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zcGxpdChcIiBcIikuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbChlLnNwbGl0KFwiLlwiKSwgMiksIHIgPSBhWzBdLCBvID0gYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmFkZEV2ZW50TGlzdGVuZXIgPyBuLmFkZEV2ZW50TGlzdGVuZXIoZSwgdCwgITEpIDogbi5hdHRhY2hFdmVudCAmJiBuLmF0dGFjaEV2ZW50KFwib25cIi5jb25jYXQoZSksIHQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVtlXSA9IGlbZV0gfHwge30sIGlbZV1bYV0gPSBpW2VdW2FdIHx8IFtdLCBpW2VdW2FdLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShyLCB2b2lkIDAgPT09IG8gPyBcImdsb2JhbFwiIDogbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSwgdC50cmlnZ2VyID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGYodGhpc1swXSkpIGZvciAodmFyIGkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksIG4gPSB0aGlzWzBdLCByID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IGUuc3BsaXQoXCIgXCIpIDogWyBlLnR5cGUgXSwgcyA9IDA7IHMgPCByLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHJbc10uc3BsaXQoXCIuXCIpLCBjID0gbFswXSwgdSA9IGxbMV0gfHwgXCJnbG9iYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGRvY3VtZW50ICYmIFwiZ2xvYmFsXCIgPT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCwgcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImlucHV0XCIgPT09IGMpIHAuaW5wdXRUeXBlID0gXCJpbnNlcnRUZXh0XCIsIGQgPSBuZXcgSW5wdXRFdmVudChjLCBwKTsgZWxzZSBkID0gbmV3IEN1c3RvbUV2ZW50KGMsIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudChjLCBwLmJ1YmJsZXMsIHAuY2FuY2VsYWJsZSwgcC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudHlwZSAmJiAoMCwgYS5kZWZhdWx0KShkLCBlKSwgbi5kaXNwYXRjaEV2ZW50KGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAoZCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCkpLmV2ZW50VHlwZSA9IGMsIGQuZGV0YWlsID0gYXJndW1lbnRzWzFdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnR5cGUgJiYgKDAsIGEuZGVmYXVsdCkoZCwgZSksIG4uZmlyZUV2ZW50KFwib25cIiArIGQuZXZlbnRUeXBlLCBkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSBpW2NdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdLnR5cGUgPyBhcmd1bWVudHNbMF0gOiBvLmRlZmF1bHQuRXZlbnQoYXJndW1lbnRzWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdLmRldGFpbCA9IGFyZ3VtZW50cy5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGlbY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiZ2xvYmFsXCIgPT09IHUgPyBPYmplY3QudmFsdWVzKGgpLmZsYXQoKSA6IGhbdV0pLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuYXBwbHkobiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG4sIGEgPSB1KGkoNjAwKSksIHIgPSB1KGkoOTM4MCkpLCBvID0gdShpKDQ5NjMpKSwgcyA9IHUoaSg4NzQxKSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH0oZSkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBudWxsID09IGUgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgciwgbywgcyA9IFtdLCBsID0gITAsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChpID0gaS5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGkpICE9PSBpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKGwgPSAobiA9IHIuY2FsbChpKSkuZG9uZSkgJiYgKHMucHVzaChuLnZhbHVlKSwgcy5sZW5ndGggIT09IHQpOyBsID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMCwgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbCAmJiBudWxsICE9IGkucmV0dXJuICYmIChvID0gaS5yZXR1cm4oKSwgT2JqZWN0KG8pICE9PSBvKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIGMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBpICYmIGUuY29uc3RydWN0b3IgJiYgKGkgPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IGkgfHwgXCJTZXRcIiA9PT0gaSkgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gaSB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSkgcmV0dXJuIGMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gbmV3IEFycmF5KHQpOyBpIDwgdDsgaSsrKSBuW2ldID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0LkV2ZW50ID0gbiwgXCJmdW5jdGlvblwiID09IHR5cGVvZiByLmRlZmF1bHQuQ3VzdG9tRXZlbnQgPyB0LkV2ZW50ID0gbiA9IHIuZGVmYXVsdC5DdXN0b21FdmVudCA6IHMuZGVmYXVsdCAmJiAodC5FdmVudCA9IG4gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0IHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmluaXRDdXN0b21FdmVudChlLCB0LmJ1YmJsZXMsIHQuY2FuY2VsYWJsZSwgdC5kZXRhaWwpLCBpO1xuICAgICAgICAgICAgICAgIH0sIG4ucHJvdG90eXBlID0gci5kZWZhdWx0LkV2ZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIGkoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4sIGEsIHIsIG8sIHMsIGwgPSBhcmd1bWVudHNbMF0gfHwge30sIGMgPSAxLCB1ID0gYXJndW1lbnRzLmxlbmd0aCwgZiA9ICExO1xuICAgICAgICAgICAgICAgICAgICBcImJvb2xlYW5cIiA9PSB0eXBlb2YgbCAmJiAoZiA9IGwsIGwgPSBhcmd1bWVudHNbY10gfHwge30sIGMrKyk7XG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgIT09IGkobCkgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBsICYmIChsID0ge30pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtjIDwgdTsgYysrKSBpZiAobnVsbCAhPSAodCA9IGFyZ3VtZW50c1tjXSkpIGZvciAobiBpbiB0KSBhID0gbFtuXSwgbCAhPT0gKHIgPSB0W25dKSAmJiAoZiAmJiByICYmIChcIltvYmplY3QgT2JqZWN0XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikgfHwgKG8gPSBBcnJheS5pc0FycmF5KHIpKSkgPyAobyA/IChvID0gITEsIFxuICAgICAgICAgICAgICAgICAgICBzID0gYSAmJiBBcnJheS5pc0FycmF5KGEpID8gYSA6IFtdKSA6IHMgPSBhICYmIFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA/IGEgOiB7fSwgXG4gICAgICAgICAgICAgICAgICAgIGxbbl0gPSBlKGYsIHMsIHIpKSA6IHZvaWQgMCAhPT0gciAmJiAobFtuXSA9IHIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0OTYzOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBzKGkoNjAwKSksIGEgPSBzKGkoOTM4MCkpLCByID0gcyhpKDI1MykpLCBvID0gaSgzNzc2KTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBhLmRlZmF1bHQuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgYyA/IGUgOiB0aGlzIGluc3RhbmNlb2YgYyA/IHZvaWQgKG51bGwgIT0gZSAmJiBlICE9PSBhLmRlZmF1bHQgJiYgKHRoaXNbMF0gPSBlLm5vZGVOYW1lID8gZSA6IHZvaWQgMCAhPT0gZVswXSAmJiBlWzBdLm5vZGVOYW1lID8gZVswXSA6IGwucXVlcnlTZWxlY3RvcihlKSwgXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdGhpc1swXSAmJiBudWxsICE9PSB0aGlzWzBdICYmICh0aGlzWzBdLmV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnkgfHwge30pKSkgOiBuZXcgYyhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYy5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiBvLm9uLFxuICAgICAgICAgICAgICAgICAgICBvZmY6IG8ub2ZmLFxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBvLnRyaWdnZXJcbiAgICAgICAgICAgICAgICB9LCBjLmV4dGVuZCA9IG4uZGVmYXVsdCwgYy5kYXRhID0gci5kZWZhdWx0LCBjLkV2ZW50ID0gby5FdmVudDtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IGM7XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0gdTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5ODQ1OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0Lm1vYmlsZSA9IHQuaXBob25lID0gdC5pZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiwgYSA9IChuID0gaSg5MzgwKSkgJiYgbi5fX2VzTW9kdWxlID8gbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBhLmRlZmF1bHQubmF2aWdhdG9yICYmIGEuZGVmYXVsdC5uYXZpZ2F0b3IudXNlckFnZW50IHx8IFwiXCIsIG8gPSByLmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgci5pbmRleE9mKFwiVHJpZGVudC9cIikgPiAwLCBzID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlIHx8IGEuZGVmYXVsdC5uYXZpZ2F0b3IgJiYgYS5kZWZhdWx0Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCBcIm9udG91Y2hzdGFydFwiIGluIGEuZGVmYXVsdCwgbCA9IC9pcGhvbmUvaS50ZXN0KHIpO1xuICAgICAgICAgICAgICAgIHQuaXBob25lID0gbCwgdC5tb2JpbGUgPSBzLCB0LmllID0gbztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3MTg0OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnJlcGxhY2UoaSwgXCJcXFxcJDFcIik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IG5ldyBSZWdFeHAoXCIoXFxcXFwiICsgWyBcIi9cIiwgXCIuXCIsIFwiKlwiLCBcIitcIiwgXCI/XCIsIFwifFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIlxcXFxcIiwgXCIkXCIsIFwiXlwiIF0uam9pbihcInxcXFxcXCIpICsgXCIpXCIsIFwiZ2ltXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMzA6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuRXZlbnRIYW5kbGVycyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoODcxMSksIGEgPSBpKDI4MzkpLCByID0gaSg5ODQ1KSwgbyA9IGkoNzIxNSksIHMgPSBpKDc3NjApLCBsID0gaSg0NzEzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpIHx8IChpID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gdShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gaSAmJiBlLmNvbnN0cnVjdG9yICYmIChpID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gaSB8fCBcIlNldFwiID09PSBpKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gaSB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSkgcmV0dXJuIHUoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGUpKSB8fCB0ICYmIGUgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICYmIChlID0gaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSAwLCBhID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuID49IGUubGVuZ3RoID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlW24rK11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGY6IGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvID0gITAsIHMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpLmNhbGwoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBpLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyA9IGUuZG9uZSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9ICEwLCByID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvIHx8IG51bGwgPT0gaS5yZXR1cm4gfHwgaS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykgdGhyb3cgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gbmV3IEFycmF5KHQpOyBpIDwgdDsgaSsrKSBuW2ldID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXlFdmVudDogZnVuY3Rpb24oZSwgdCwgaSwgYywgdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmlucHV0bWFzaywgcCA9IGQub3B0cywgaCA9IGQuZGVwZW5kZW5jeUxpYiwgdiA9IGQubWFza3NldCwgbSA9IHRoaXMsIGcgPSBoKG0pLCB5ID0gZS5rZXksIGsgPSBuLmNhcmV0LmNhbGwoZCwgbSksIGIgPSBwLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUsIG4uZ2V0QnVmZmVyLmNhbGwoZCksIGssIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYikgcmV0dXJuIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeSA9PT0gYS5rZXlzLkJhY2tzcGFjZSB8fCB5ID09PSBhLmtleXMuRGVsZXRlIHx8IHIuaXBob25lICYmIHkgPT09IGEua2V5cy5CQUNLU1BBQ0VfU0FGQVJJIHx8IGUuY3RybEtleSAmJiB5ID09PSBhLmtleXMueCAmJiAhKFwib25jdXRcIiBpbiBtKSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uaGFuZGxlUmVtb3ZlLmNhbGwoZCwgbSwgeSwgayksICgwLCBzLndyaXRlQnVmZmVyKShtLCBuLmdldEJ1ZmZlci5jYWxsKGQsICEwKSwgdi5wLCBlLCBtLmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gbi5nZXRCdWZmZXIuY2FsbChkKS5qb2luKFwiXCIpKTsgZWxzZSBpZiAoeSA9PT0gYS5rZXlzLkVuZCB8fCB5ID09PSBhLmtleXMuUGFnZURvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBuLnNlZWtOZXh0LmNhbGwoZCwgbi5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNhcmV0LmNhbGwoZCwgbSwgZS5zaGlmdEtleSA/IGsuYmVnaW4gOiB4LCB4LCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeSA9PT0gYS5rZXlzLkhvbWUgJiYgIWUuc2hpZnRLZXkgfHwgeSA9PT0gYS5rZXlzLlBhZ2VVcCA/IChlLnByZXZlbnREZWZhdWx0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5jYXJldC5jYWxsKGQsIG0sIDAsIGUuc2hpZnRLZXkgPyBrLmJlZ2luIDogMCwgITApKSA6IHAudW5kb09uRXNjYXBlICYmIHkgPT09IGEua2V5cy5Fc2NhcGUgJiYgITAgIT09IGUuYWx0S2V5ID8gKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hlY2tWYWwpKG0sICEwLCAhMSwgZC51bmRvVmFsdWUuc3BsaXQoXCJcIikpLCBnLnRyaWdnZXIoXCJjbGlja1wiKSkgOiB5ICE9PSBhLmtleXMuSW5zZXJ0IHx8IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5IHx8IHZvaWQgMCAhPT0gZC51c2VyT3B0aW9ucy5pbnNlcnRNb2RlID8gITAgPT09IHAudGFiVGhyb3VnaCAmJiB5ID09PSBhLmtleXMuVGFiID8gITAgPT09IGUuc2hpZnRLZXkgPyAoay5lbmQgPSBuLnNlZWtQcmV2aW91cy5jYWxsKGQsIGsuZW5kLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGwuZ2V0VGVzdC5jYWxsKGQsIGsuZW5kIC0gMSkubWF0Y2guc3RhdGljICYmIGsuZW5kLS0sIGsuYmVnaW4gPSBuLnNlZWtQcmV2aW91cy5jYWxsKGQsIGsuZW5kLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgay5iZWdpbiA+PSAwICYmIGsuZW5kID4gMCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBuLmNhcmV0LmNhbGwoZCwgbSwgay5iZWdpbiwgay5lbmQpKSkgOiAoay5iZWdpbiA9IG4uc2Vla05leHQuY2FsbChkLCBrLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgay5lbmQgPSBuLnNlZWtOZXh0LmNhbGwoZCwgay5iZWdpbiwgITApLCBrLmVuZCA8IHYubWFza0xlbmd0aCAmJiBrLmVuZC0tLCBrLmJlZ2luIDw9IHYubWFza0xlbmd0aCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FyZXQuY2FsbChkLCBtLCBrLmJlZ2luLCBrLmVuZCkpKSA6IGUuc2hpZnRLZXkgfHwgcC5pbnNlcnRNb2RlVmlzdWFsICYmICExID09PSBwLmluc2VydE1vZGUgJiYgKHkgPT09IGEua2V5cy5BcnJvd1JpZ2h0ID8gc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBuLmNhcmV0LmNhbGwoZCwgbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jYXJldC5jYWxsKGQsIG0sIGUuYmVnaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApIDogeSA9PT0gYS5rZXlzLkFycm93TGVmdCAmJiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbChkLCBtLmlucHV0bWFzay5jYXJldFBvcy5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGQsIG0uaW5wdXRtYXNrLmNhcmV0UG9zLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5pc1JUTCA/IG4uY2FyZXQuY2FsbChkLCBtLCBlICsgKGUgPT09IHYubWFza0xlbmd0aCA/IDAgOiAxKSkgOiBuLmNhcmV0LmNhbGwoZCwgbSwgZSAtICgwID09PSBlID8gMCA6IDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSkgOiBvLmlzU2VsZWN0aW9uLmNhbGwoZCwgaykgPyBwLmluc2VydE1vZGUgPSAhcC5pbnNlcnRNb2RlIDogKHAuaW5zZXJ0TW9kZSA9ICFwLmluc2VydE1vZGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5jYXJldC5jYWxsKGQsIG0sIGsuYmVnaW4sIGsuYmVnaW4pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLmlzQ29tcG9zaW5nID0geSA9PSBhLmtleXMuUHJvY2VzcyB8fCB5ID09IGEua2V5cy5VbmlkZW50aWZpZWQsIGQuaWdub3JhYmxlID0gcC5pZ25vcmFibGVzLmluY2x1ZGVzKHkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGYua2V5cHJlc3NFdmVudC5jYWxsKHRoaXMsIGUsIHQsIGksIGMsIHUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlwcmVzc0V2ZW50OiBmdW5jdGlvbihlLCB0LCBpLCByLCBsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuaW5wdXRtYXNrIHx8IHRoaXMsIHUgPSBjLm9wdHMsIGYgPSBjLmRlcGVuZGVuY3lMaWIsIGQgPSBjLm1hc2tzZXQsIHAgPSBjLmVsLCBoID0gZihwKSwgdiA9IGUua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSB0IHx8IGUuY3RybEtleSAmJiBlLmFsdEtleSB8fCAhKGUuY3RybEtleSB8fCBlLm1ldGFLZXkgfHwgYy5pZ25vcmFibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0sIGcgPSB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG4uY2FyZXQuY2FsbChjLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHUuc3Vic3RpdHV0ZXNbdl0gfHwgdiwgZC53cml0ZU91dEJ1ZmZlciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IG8uaXNWYWxpZC5jYWxsKGMsIGcsIHYsIHIsIHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IHkgJiYgKG4ucmVzZXRNYXNrU2V0LmNhbGwoYywgITApLCBtID0gdm9pZCAwICE9PSB5LmNhcmV0ID8geS5jYXJldCA6IG4uc2Vla05leHQuY2FsbChjLCB5LnBvcy5iZWdpbiA/IHkucG9zLmJlZ2luIDogeS5wb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5wID0gbSksIG0gPSB1Lm51bWVyaWNJbnB1dCAmJiB2b2lkIDAgPT09IHkuY2FyZXQgPyBuLnNlZWtQcmV2aW91cy5jYWxsKGMsIG0pIDogbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExICE9PSBpICYmIChzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUub25LZXlWYWxpZGF0aW9uLmNhbGwocCwgdiwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSwgZC53cml0ZU91dEJ1ZmZlciAmJiAhMSAhPT0geSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gbi5nZXRCdWZmZXIuY2FsbChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLndyaXRlQnVmZmVyKShwLCBrLCBtLCBlLCAhMCAhPT0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQoKSwgdCkgcmV0dXJuICExICE9PSB5ICYmICh5LmZvcndhcmRQb3NpdGlvbiA9IG0pLCB5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB2ID09PSBhLmtleXMuRW50ZXIgJiYgYy51bmRvVmFsdWUgIT09IGMuX3ZhbHVlR2V0KCEwKSAmJiAoYy51bmRvVmFsdWUgPSBjLl92YWx1ZUdldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFzdGVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQsIGkgPSB0aGlzLmlucHV0bWFzaywgYSA9IGkub3B0cywgciA9IGkuX3ZhbHVlR2V0KCEwKSwgbyA9IG4uY2FyZXQuY2FsbChpLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuaXNSVEwgJiYgKHQgPSBvLmVuZCwgby5lbmQgPSBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoaSwgby5iZWdpbiksIG8uYmVnaW4gPSBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoaSwgdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSByLnN1YnN0cigwLCBvLmJlZ2luKSwgdSA9IHIuc3Vic3RyKG8uZW5kLCByLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA9PSAoaS5pc1JUTCA/IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKS5zbGljZSgpLnJldmVyc2UoKSA6IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKSkuc2xpY2UoMCwgby5iZWdpbikuam9pbihcIlwiKSAmJiAobCA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPT0gKGkuaXNSVEwgPyBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkuc2xpY2UoKS5yZXZlcnNlKCkgOiBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkpLnNsaWNlKG8uZW5kKS5qb2luKFwiXCIpICYmICh1ID0gXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgciA9IGwgKyB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSArIHU7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5jbGlwYm9hcmREYXRhIHx8ICFlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBsICsgZS5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpICsgdTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpLmlzUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGYuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQsIHAgPSBjKG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwLnMoKTsgIShkID0gcC5uKCkpLmRvbmU7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZlswXSA9PT0gaCAmJiBmLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmYoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGYuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGEub25CZWZvcmVQYXN0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gKGYgPSBhLm9uQmVmb3JlUGFzdGUuY2FsbChpLCBmLCBhKSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmIHx8IChmID0gcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy5jaGVja1ZhbCkodGhpcywgITAsICExLCBmLnRvU3RyaW5nKCkuc3BsaXQoXCJcIiksIGUpLCBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RmFsbEJhY2tFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgaSA9IHQub3B0cywgbyA9IHQuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjLCB1ID0gdGhpcywgZCA9IHUuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIHAgPSAodC5pc1JUTCA/IG4uZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UoKS5yZXZlcnNlKCkgOiBuLmdldEJ1ZmZlci5jYWxsKHQpKS5qb2luKFwiXCIpLCBoID0gbi5jYXJldC5jYWxsKHQsIHUsIHZvaWQgMCwgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocCAhPT0gZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID0gZnVuY3Rpb24oZSwgYSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvLCBzLCBjLCB1ID0gZS5zdWJzdHIoMCwgci5iZWdpbikuc3BsaXQoXCJcIiksIGYgPSBlLnN1YnN0cihyLmJlZ2luKS5zcGxpdChcIlwiKSwgZCA9IGEuc3Vic3RyKDAsIHIuYmVnaW4pLnNwbGl0KFwiXCIpLCBwID0gYS5zdWJzdHIoci5iZWdpbikuc3BsaXQoXCJcIiksIGggPSB1Lmxlbmd0aCA+PSBkLmxlbmd0aCA/IHUubGVuZ3RoIDogZC5sZW5ndGgsIHYgPSBmLmxlbmd0aCA+PSBwLmxlbmd0aCA/IGYubGVuZ3RoIDogcC5sZW5ndGgsIG0gPSBcIlwiLCBnID0gW10sIHkgPSBcIn5cIjsgdS5sZW5ndGggPCBoOyApIHUucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZC5sZW5ndGggPCBoOyApIGQucHVzaCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7Zi5sZW5ndGggPCB2OyApIGYudW5zaGlmdCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7cC5sZW5ndGggPCB2OyApIHAudW5zaGlmdCh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSB1LmNvbmNhdChmKSwgYiA9IGQuY29uY2F0KHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHMgPSAwLCBvID0gay5sZW5ndGg7IHMgPCBvOyBzKyspIHN3aXRjaCAoYyA9IGwuZ2V0UGxhY2Vob2xkZXIuY2FsbCh0LCBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwodCwgcykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3MgLSAxXSA9PT0ga1tzXSAmJiByLmJlZ2luID09IGsubGVuZ3RoIC0gMSAmJiBnLnB1c2goa1tzXSksIHMgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga1tzXSA9PT0geSA/IHIuZW5kKysgOiBzID0gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtbc10gIT09IGJbc10gJiYgKGtbcyArIDFdICE9PSB5ICYmIGtbcyArIDFdICE9PSBjICYmIHZvaWQgMCAhPT0ga1tzICsgMV0gfHwgKGJbc10gIT09IGMgfHwgYltzICsgMV0gIT09IHkpICYmIGJbc10gIT09IHkgPyBiW3MgKyAxXSA9PT0geSAmJiBiW3NdID09PSBrW3MgKyAxXSA/IChtID0gXCJpbnNlcnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKGtbc10pLCByLmJlZ2luLS0sIHIuZW5kLS0pIDoga1tzXSAhPT0gYyAmJiBrW3NdICE9PSB5ICYmIChrW3MgKyAxXSA9PT0geSB8fCBiW3NdICE9PSBrW3NdICYmIGJbcyArIDFdID09PSBrW3MgKyAxXSkgPyAobSA9IFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5wdXNoKGtbc10pLCByLmJlZ2luLS0pIDoga1tzXSA9PT0geSA/IChtID0gXCJkZWxldGVDb250ZW50QmFja3dhcmRcIiwgKG4uaXNNYXNrLmNhbGwodCwgbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKHQsIHMpLCAhMCkgfHwgYltzXSA9PT0gaS5yYWRpeFBvaW50KSAmJiByLmVuZCsrKSA6IHMgPSBvIDogKG0gPSBcImluc2VydFRleHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goa1tzXSksIHIuYmVnaW4tLSwgci5lbmQtLSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IG0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGQsIHAsIGgpLCAodS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCB1Lm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IHUgJiYgdS5mb2N1cygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy53cml0ZUJ1ZmZlcikodSwgbi5nZXRCdWZmZXIuY2FsbCh0KSksIG4uY2FyZXQuY2FsbCh0LCB1LCBoLmJlZ2luLCBoLmVuZCwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhci5tb2JpbGUgJiYgdC5za2lwTmV4dEluc2VydCAmJiBcImluc2VydFRleHRcIiA9PT0gZS5pbnB1dFR5cGUgJiYgXCJpbnNlcnRUZXh0XCIgPT09IGMuYWN0aW9uICYmIHQuaXNDb21wb3NpbmcpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKFwiaW5zZXJ0Q29tcG9zaXRpb25UZXh0XCIgPT09IGUuaW5wdXRUeXBlICYmIFwiaW5zZXJ0VGV4dFwiID09PSBjLmFjdGlvbiAmJiB0LmlzQ29tcG9zaW5nID8gdC5za2lwTmV4dEluc2VydCA9ICEwIDogdC5za2lwTmV4dEluc2VydCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5kYXRhLmZvckVhY2goKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IG8uRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ua2V5ID0gZSwgdC5pZ25vcmFibGUgPSAhMSwgZi5rZXlwcmVzc0V2ZW50LmNhbGwodSwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LiRlbC50cmlnZ2VyKFwia2V5dXBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVDb250ZW50QmFja3dhcmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBuZXcgby5FdmVudChcImtleWRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYua2V5ID0gYS5rZXlzLkJhY2tzcGFjZSwgZi5rZXlFdmVudC5jYWxsKHUsIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMuYXBwbHlJbnB1dFZhbHVlKSh1LCBkKSwgbi5jYXJldC5jYWxsKHQsIHUsIGguYmVnaW4sIGguZW5kLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgaSA9IHRoaXMsIGEgPSBlICYmIGUuZGV0YWlsID8gZS5kZXRhaWxbMF0gOiBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGEgJiYgKGEgPSBpLmlucHV0bWFzay5fdmFsdWVHZXQoITApKSwgKDAsIHMuYXBwbHlJbnB1dFZhbHVlKShpLCBhKSwgKGUuZGV0YWlsICYmIHZvaWQgMCAhPT0gZS5kZXRhaWxbMV0gfHwgdm9pZCAwICE9PSBhcmd1bWVudHNbMl0pICYmIG4uY2FyZXQuY2FsbCh0LCBpLCBlLmRldGFpbCA/IGUuZGV0YWlsWzFdIDogYXJndW1lbnRzWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgaSA9IHQub3B0cywgYSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnNob3dNYXNrT25Gb2N1cyAmJiBhICE9PSBuLmdldEJ1ZmZlci5jYWxsKHQpLmpvaW4oXCJcIikgJiYgKDAsIHMud3JpdGVCdWZmZXIpKHRoaXMsIG4uZ2V0QnVmZmVyLmNhbGwodCksIG4uc2Vla05leHQuY2FsbCh0LCBuLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodCkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gaS5wb3NpdGlvbkNhcmV0T25UYWIgfHwgITEgIT09IHQubW91c2VFbnRlciB8fCBvLmlzQ29tcGxldGUuY2FsbCh0LCBuLmdldEJ1ZmZlci5jYWxsKHQpKSAmJiAtMSAhPT0gbi5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHQpIHx8IGYuY2xpY2tFdmVudC5hcHBseSh0aGlzLCBbIGUsICEwIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQudW5kb1ZhbHVlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRtYXNrLnZhbGlkYXRpb25FdmVudCA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaywgdCA9IGUub3B0cywgaSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1vdXNlRW50ZXIgPSAhMSwgdC5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiAoaS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgIT09IGkgJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikoaSwgZS5vcmlnaW5hbFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLmlucHV0bWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuY2xpY2tlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChhLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGEub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gbi5kZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwoaSwgbi5jYXJldC5jYWxsKGksIGEpLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHIgJiYgbi5jYXJldC5jYWxsKGksIGEsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXRFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgaSA9IHQubWFza3NldCwgciA9IHRoaXMsIGwgPSBuLmNhcmV0LmNhbGwodCwgciksIGMgPSB0LmlzUlRMID8gbi5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZShsLmVuZCwgbC5iZWdpbikgOiBuLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKGwuYmVnaW4sIGwuZW5kKSwgdSA9IHQuaXNSVEwgPyBjLnJldmVyc2UoKS5qb2luKFwiXCIpIDogYy5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQgPyB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodSkgOiB3aW5kb3cuY2xpcGJvYXJkRGF0YSAmJiB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEoXCJUZXh0XCIsIHUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uaGFuZGxlUmVtb3ZlLmNhbGwodCwgciwgYS5rZXlzLkRlbGV0ZSwgbCksICgwLCBzLndyaXRlQnVmZmVyKShyLCBuLmdldEJ1ZmZlci5jYWxsKHQpLCBpLnAsIGUsIHQudW5kb1ZhbHVlICE9PSB0Ll92YWx1ZUdldCghMCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBibHVyRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5pbnB1dG1hc2ssIGkgPSB0Lm9wdHMsIGEgPSB0LmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNsaWNrZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBhKHRoaXMpLCBsID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLmlucHV0bWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShsLCB0Lm9yaWdpbmFsUGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksIHUgPSBuLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gYyAmJiAoaS5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiAoLTEgPT09IG4uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0KSAmJiBjID09PSBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodCkuam9pbihcIlwiKSA/IHUgPSBbXSA6IHMuY2xlYXJPcHRpb25hbFRhaWwuY2FsbCh0LCB1KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICExID09PSBvLmlzQ29tcGxldGUuY2FsbCh0LCB1KSAmJiAoc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcImluY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApLCBpLmNsZWFySW5jb21wbGV0ZSAmJiAobi5yZXNldE1hc2tTZXQuY2FsbCh0KSwgdSA9IGkuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPyBbXSA6IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0KS5zbGljZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLndyaXRlQnVmZmVyKShsLCB1LCB2b2lkIDAsIGUpKSwgdC51bmRvVmFsdWUgIT09IHQuX3ZhbHVlR2V0KCEwKSAmJiAodC51bmRvVmFsdWUgPSB0Ll92YWx1ZUdldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXJFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuaW5wdXRtYXNrLCB0ID0gZS5vcHRzLnNob3dNYXNrT25Ib3ZlciwgaSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5tb3VzZUVudGVyID0gITAsIChpLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGkub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gKGUuaXNSVEwgPyBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkuc2xpY2UoKS5yZXZlcnNlKCkgOiBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCAmJiAoMCwgcy5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlcikoaSwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5pbnB1dG1hc2ssIHQgPSBlLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnVuZG9WYWx1ZSAhPT0gZS5fdmFsdWVHZXQoITApICYmIGUuJGVsLnRyaWdnZXIoXCJjaGFuZ2VcIiksIC0xID09PSBuLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZSkgJiYgZS5fdmFsdWVHZXQgJiYgZS5fdmFsdWVHZXQoKSA9PT0gbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpLmpvaW4oXCJcIikgJiYgZS5fdmFsdWVTZXQoXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5jbGVhckluY29tcGxldGUgJiYgITEgPT09IG8uaXNDb21wbGV0ZS5jYWxsKGUsIG4uZ2V0QnVmZmVyLmNhbGwoZSkpICYmIGUuX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlTWFza09uU3VibWl0ICYmIChlLl92YWx1ZVNldChlLnVubWFza2VkdmFsdWUoKSwgITApLCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy53cml0ZUJ1ZmZlcikoZS5lbCwgbi5nZXRCdWZmZXIuY2FsbChlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNldEV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5pbnB1dG1hc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy5hcHBseUlucHV0VmFsdWUpKGUuZWwsIGUuX3ZhbHVlR2V0KCEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHQuRXZlbnRIYW5kbGVycyA9IGY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTcxNjogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5FdmVudFJ1bGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuLCBhID0gKG4gPSBpKDIzOTQpKSAmJiBuLl9fZXNNb2R1bGUgPyBuIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBuXG4gICAgICAgICAgICAgICAgfSwgciA9IGkoMjgzOSksIG8gPSBpKDg3MTEpLCBzID0gaSg3NzYwKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgb246IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5pbnB1dG1hc2suZGVwZW5kZW5jeUxpYiwgbCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm9yaWdpbmFsRXZlbnQgJiYgKHQgPSB0Lm9yaWdpbmFsRXZlbnQgfHwgdCwgYXJndW1lbnRzWzBdID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwsIGMgPSB0aGlzLCB1ID0gYy5pbnB1dG1hc2ssIGYgPSB1ID8gdS5vcHRzIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHUgJiYgXCJGT1JNXCIgIT09IHRoaXMubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuLmRhdGEoYywgXCJfaW5wdXRtYXNrX29wdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4oYykub2ZmKCksIGQgJiYgbmV3IGEuZGVmYXVsdChkKS5tYXNrKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChbIFwic3VibWl0XCIsIFwicmVzZXRcIiwgXCJzZXR2YWx1ZVwiIF0uaW5jbHVkZXModC50eXBlKSB8fCBcIkZPUk1cIiA9PT0gdGhpcy5ub2RlTmFtZSB8fCAhKGMuZGlzYWJsZWQgfHwgYy5yZWFkT25seSAmJiAhKFwia2V5ZG93blwiID09PSB0LnR5cGUgJiYgdC5jdHJsS2V5ICYmIHQua2V5ID09PSByLmtleXMuYyB8fCAhMSA9PT0gZi50YWJUaHJvdWdoICYmIHQua2V5ID09PSByLmtleXMuVGFiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdS5za2lwSW5wdXRFdmVudCkgcmV0dXJuIHUuc2tpcElucHV0RXZlbnQgPSAhMSwgdC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9jdXNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdS52YWxpZGF0aW9uRXZlbnQgPyAodS52YWxpZGF0aW9uRXZlbnQgPSAhMSwgZS5ibHVyKCksICgwLCBzLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShlLCAodS5pc1JUTCA/IG8uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh1KS5zbGljZSgpLnJldmVyc2UoKSA6IG8uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh1KSkuam9pbihcIlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGYudmFsaWRhdGlvbkV2ZW50VGltZU91dCksICExKSA6IChsID0gYXJndW1lbnRzLCB2b2lkIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayAmJiBpLmFwcGx5KGMsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGkuYXBwbHkoYywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSA9PT0gcCAmJiAodC5wcmV2ZW50RGVmYXVsdCgpLCB0LnN0b3BQcm9wYWdhdGlvbigpKSwgcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0uaW5jbHVkZXModCkgPyAobCA9IGwuYmluZChlKSwgbnVsbCAhPT0gZS5mb3JtICYmIG4oZS5mb3JtKS5vbih0LCBsKSkgOiBuKGUpLm9uKHQsIGwpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLmV2ZW50c1t0XSA9IGUuaW5wdXRtYXNrLmV2ZW50c1t0XSB8fCBbXSwgZS5pbnB1dG1hc2suZXZlbnRzW3RdLnB1c2gobCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9mZjogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaW5wdXRtYXNrICYmIGUuaW5wdXRtYXNrLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5pbnB1dG1hc2suZGVwZW5kZW5jeUxpYiwgbiA9IGUuaW5wdXRtYXNrLmV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIHQgJiYgKChuID0gW10pW3RdID0gZS5pbnB1dG1hc2suZXZlbnRzW3RdKSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciByID0gblthXTsgci5sZW5ndGggPiAwOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0uaW5jbHVkZXMoYSkgPyBudWxsICE9PSBlLmZvcm0gJiYgaShlLmZvcm0pLm9mZihhLCBvKSA6IGkoZSkub2ZmKGEsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlLmlucHV0bWFzay5ldmVudHNbYV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0LkV2ZW50UnVsZXIgPSBsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDIxOTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gZChpKDIzOTQpKSwgYSA9IGkoMjgzOSksIHIgPSBkKGkoNzE4NCkpLCBvID0gaSg4NzExKSwgcyA9IGkoNDcxMyk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH0oZSkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBudWxsID09IGUgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgciwgbywgcyA9IFtdLCBsID0gITAsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChpID0gaS5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGkpICE9PSBpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKGwgPSAobiA9IHIuY2FsbChpKSkuZG9uZSkgJiYgKHMucHVzaChuLnZhbHVlKSwgcy5sZW5ndGggIT09IHQpOyBsID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMCwgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbCAmJiBudWxsICE9IGkucmV0dXJuICYmIChvID0gaS5yZXR1cm4oKSwgT2JqZWN0KG8pICE9PSBvKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIGMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBpICYmIGUuY29uc3RydWN0b3IgJiYgKGkgPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IGkgfHwgXCJTZXRcIiA9PT0gaSkgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gaSB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSkgcmV0dXJuIGMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gbmV3IEFycmF5KHQpOyBpIDwgdDsgaSsrKSBuW2ldID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCB1KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBuLmVudW1lcmFibGUgPSBuLmVudW1lcmFibGUgfHwgITEsIG4uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBuICYmIChuLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAoYSA9IG4ua2V5LCByID0gdm9pZCAwLCByID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSB1KGUpIHx8IG51bGwgPT09IGUpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZVtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBpLmNhbGwoZSwgdCB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSB1KG4pKSByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHQgPyBTdHJpbmcgOiBOdW1iZXIpKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShhLCBcInN0cmluZ1wiKSwgXCJzeW1ib2xcIiA9PT0gdShyKSA/IHIgOiBTdHJpbmcocikpLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgYSwgcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwID0gbi5kZWZhdWx0LmRlcGVuZGVuY3lMaWIsIGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZSh0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGhpcywgZSksIHRoaXMubWFzayA9IHQsIHRoaXMuZm9ybWF0ID0gaSwgdGhpcy5vcHRzID0gbiwgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKDEsIDAsIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdERhdGVPYmplY3QodCwgdGhpcy5vcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdCwgaSwgbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPSBlLCAoaSA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gdGhpcy5fZGF0ZSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKDEsIDAsIDEpLCB0aGlzLmluaXREYXRlT2JqZWN0KHZvaWQgMCwgdGhpcy5vcHRzKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpbml0RGF0ZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFAodCkubGFzdEluZGV4ID0gMDsgaSA9IFAodCkuZXhlYyh0aGlzLmZvcm1hdCk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBSZWdFeHAoXCJcXFxcZCskXCIpLmV4ZWMoaVswXSksIGEgPSBuID8gaVswXVswXSArIFwieFwiIDogaVswXSwgciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFAodCkubGFzdEluZGV4LCBzID0gRShpLmluZGV4LCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQKHQpLmxhc3RJbmRleCA9IG8sIHIgPSBlLnNsaWNlKDAsIGUuaW5kZXhPZihzLm5leHRNYXRjaFswXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHIgPSBlLnNsaWNlKDAsIGdbYV0gJiYgZ1thXVs0XSB8fCBhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gZS5zbGljZShyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGcsIGEpICYmIHRoaXMuc2V0VmFsdWUodGhpcywgciwgYSwgZ1thXVsyXSwgZ1thXVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2V0VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCAmJiAoZVtuXSA9IFwiYW1wbVwiID09PSBuID8gdCA6IHQucmVwbGFjZSgvW14wLTldL2csIFwiMFwiKSwgZVtcInJhd1wiICsgbl0gPSB0LnJlcGxhY2UoL1xccy9nLCBcIl9cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBlW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJkYXlcIiA9PT0gbiAmJiAyOSA9PT0gcGFyc2VJbnQocikgfHwgXCJtb250aFwiID09PSBuICYmIDIgPT09IHBhcnNlSW50KHIpKSAmJiAoMjkgIT09IHBhcnNlSW50KGUuZGF5KSB8fCAyICE9PSBwYXJzZUludChlLm1vbnRoKSB8fCBcIlwiICE9PSBlLnllYXIgJiYgdm9pZCAwICE9PSBlLnllYXIgfHwgZS5fZGF0ZS5zZXRGdWxsWWVhcigyMDEyLCAxLCAyOSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXlcIiA9PT0gbiAmJiAobSA9ICEwLCAwID09PSBwYXJzZUludChyKSAmJiAociA9IDEpKSwgXCJtb250aFwiID09PSBuICYmIChtID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ5ZWFyXCIgPT09IG4gJiYgKG0gPSAhMCwgci5sZW5ndGggPCA0ICYmIChyID0gTShyLCA0LCAhMCkpKSwgXCJcIiA9PT0gciB8fCBpc05hTihyKSB8fCBhLmNhbGwoZS5fZGF0ZSwgciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFtcG1cIiA9PT0gbiAmJiBhLmNhbGwoZS5fZGF0ZSwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmVzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoMSwgMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyZUluaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRlID0gdm9pZCAwLCB0aGlzLmRhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXSkgJiYgZih0LnByb3RvdHlwZSwgaSksIG4gJiYgZih0LCBuKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMVxuICAgICAgICAgICAgICAgICAgICB9KSwgZTtcbiAgICAgICAgICAgICAgICB9KCksIHYgPSAobmV3IERhdGUpLmdldEZ1bGxZZWFyKCksIG0gPSAhMSwgZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZDogWyBcIlsxLTldfFsxMl1bMC05XXwzWzAxXVwiLCBEYXRlLnByb3RvdHlwZS5zZXREYXRlLCBcImRheVwiLCBEYXRlLnByb3RvdHlwZS5nZXREYXRlIF0sXG4gICAgICAgICAgICAgICAgICAgIGRkOiBbIFwiMFsxLTldfFsxMl1bMC05XXwzWzAxXVwiLCBEYXRlLnByb3RvdHlwZS5zZXREYXRlLCBcImRheVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldERhdGUuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgZGRkOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgZGRkZDogWyBcIlwiIF0sXG4gICAgICAgICAgICAgICAgICAgIG06IFsgXCJbMS05XXwxWzAxMl1cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlID8gcGFyc2VJbnQoZSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPiAwICYmIHQtLSwgRGF0ZS5wcm90b3R5cGUuc2V0TW9udGguY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJtb250aFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRNb250aC5jYWxsKHRoaXMpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBtbTogWyBcIjBbMS05XXwxWzAxMl1cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlID8gcGFyc2VJbnQoZSkgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPiAwICYmIHQtLSwgRGF0ZS5wcm90b3R5cGUuc2V0TW9udGguY2FsbCh0aGlzLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXCJtb250aFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldE1vbnRoLmNhbGwodGhpcykgKyAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBtbW06IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBtbW1tOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgeXk6IFsgXCJbMC05XXsyfVwiLCBEYXRlLnByb3RvdHlwZS5zZXRGdWxsWWVhciwgXCJ5ZWFyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgeXl5eTogWyBcIlswLTldezR9XCIsIERhdGUucHJvdG90eXBlLnNldEZ1bGxZZWFyLCBcInllYXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRGdWxsWWVhci5jYWxsKHRoaXMpLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBoOiBbIFwiWzEtOV18MVswLTJdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIERhdGUucHJvdG90eXBlLmdldEhvdXJzIF0sXG4gICAgICAgICAgICAgICAgICAgIGhoOiBbIFwiMFsxLTldfDFbMC0yXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGh4OiBbIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTlde1wiLmNvbmNhdChlLCBcIn1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLnByb3RvdHlwZS5nZXRIb3VycztcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBIOiBbIFwiMT9bMC05XXwyWzAtM11cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMgXSxcbiAgICAgICAgICAgICAgICAgICAgSEg6IFsgXCIwWzAtOV18MVswLTldfDJbMC0zXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIEh4OiBbIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlswLTlde1wiLmNvbmNhdChlLCBcIn1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRIb3Vycy5jYWxsKHRoaXMpLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgTTogWyBcIlsxLTVdP1swLTldXCIsIERhdGUucHJvdG90eXBlLnNldE1pbnV0ZXMsIFwibWludXRlc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRNaW51dGVzIF0sXG4gICAgICAgICAgICAgICAgICAgIE1NOiBbIFwiMFswLTldfDFbMC05XXwyWzAtOV18M1swLTldfDRbMC05XXw1WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcywgXCJtaW51dGVzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0TWludXRlcy5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBzOiBbIFwiWzEtNV0/WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0U2Vjb25kcywgXCJzZWNvbmRzXCIsIERhdGUucHJvdG90eXBlLmdldFNlY29uZHMgXSxcbiAgICAgICAgICAgICAgICAgICAgc3M6IFsgXCIwWzAtOV18MVswLTldfDJbMC05XXwzWzAtOV18NFswLTldfDVbMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLCBcInNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRTZWNvbmRzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGw6IFsgXCJbMC05XXszfVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaWxsaXNlY29uZHMsIFwibWlsbGlzZWNvbmRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0TWlsbGlzZWNvbmRzLmNhbGwodGhpcyksIDMpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzIF0sXG4gICAgICAgICAgICAgICAgICAgIEw6IFsgXCJbMC05XXsyfVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaWxsaXNlY29uZHMsIFwibWlsbGlzZWNvbmRzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0TWlsbGlzZWNvbmRzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIHQ6IFsgXCJbYXBdXCIsIGssIFwiYW1wbVwiLCBiLCAxIF0sXG4gICAgICAgICAgICAgICAgICAgIHR0OiBbIFwiW2FwXW1cIiwgaywgXCJhbXBtXCIsIGIsIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgVDogWyBcIltBUF1cIiwgaywgXCJhbXBtXCIsIGIsIDEgXSxcbiAgICAgICAgICAgICAgICAgICAgVFQ6IFsgXCJbQVBdTVwiLCBrLCBcImFtcG1cIiwgYiwgMiBdLFxuICAgICAgICAgICAgICAgICAgICBaOiBbIFwiLipcIiwgdm9pZCAwLCBcIlpcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMudG9TdHJpbmcoKS5tYXRjaCgvXFwoKC4rKVxcKS8pWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbmNsdWRlcyhcIiBcIikgJiYgKGUgPSAoZSA9IGUucmVwbGFjZShcIi1cIiwgXCIgXCIpLnRvVXBwZXJDYXNlKCkpLnNwbGl0KFwiIFwiKS5tYXAoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbChlLCAxKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG86IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBTOiBbIFwiXCIgXVxuICAgICAgICAgICAgICAgIH0sIHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzb0RhdGU6IFwieXl5eS1tbS1kZFwiLFxuICAgICAgICAgICAgICAgICAgICBpc29UaW1lOiBcIkhIOk1NOnNzXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzb0RhdGVUaW1lOiBcInl5eXktbW0tZGQnVCdISDpNTTpzc1wiLFxuICAgICAgICAgICAgICAgICAgICBpc29VdGNEYXRlVGltZTogXCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGsoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwicFwiKSA/IHRoaXMuc2V0SG91cnModCArIDEyKSA6IGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFcIikgJiYgdCA+PSAxMiAmJiB0aGlzLnNldEhvdXJzKHQgLSAxMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUgPSBlIHx8IDEyKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24geChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IFJlZ0V4cChcIlxcXFxkKyRcIikuZXhlYyhlWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgdm9pZCAwICE9PSB0WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGdbZVswXVswXSArIFwieFwiXS5zbGljZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpWzBdID0gaVswXSh0WzBdKSwgaVszXSA9IGlbM10odFswXSksIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGdbZVswXV0pIHJldHVybiBnW2VbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBQKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnRva2VuaXplcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBbXSwgaSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBnKSBpZiAoL1xcLip4JC8udGVzdChuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gblswXSArIFwiXFxcXGQrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IGkuaW5kZXhPZihhKSAmJiBpLnB1c2goYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLTEgPT09IHQuaW5kZXhPZihuWzBdKSAmJiB0LnB1c2goblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRva2VuaXplciA9IFwiKFwiICsgKGkubGVuZ3RoID4gMCA/IGkuam9pbihcInxcIikgKyBcInxcIiA6IFwiXCIpICsgdC5qb2luKFwiK3xcIikgKyBcIikrP3wuXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS50b2tlbml6ZXIgPSBuZXcgUmVnRXhwKGUudG9rZW5pemVyLCBcImdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudG9rZW5pemVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3KGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGUucmF3ZGF5IHx8ICFpc0Zpbml0ZShlLnJhd2RheSkgJiYgbmV3IERhdGUoZS5kYXRlLmdldEZ1bGxZZWFyKCksIGlzRmluaXRlKGUucmF3bW9udGgpID8gZS5tb250aCA6IGUuZGF0ZS5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpID49IGUuZGF5IHx8IFwiMjlcIiA9PSBlLmRheSAmJiAoIWlzRmluaXRlKGUucmF3eWVhcikgfHwgdm9pZCAwID09PSBlLnJhd3llYXIgfHwgXCJcIiA9PT0gZS5yYXd5ZWFyKSB8fCBuZXcgRGF0ZShlLmRhdGUuZ2V0RnVsbFllYXIoKSwgaXNGaW5pdGUoZS5yYXdtb250aCkgPyBlLm1vbnRoIDogZS5kYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCkgPj0gZS5kYXkpIHJldHVybiB0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCIyOVwiID09IGUuZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IEUodC5wb3MsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwieXl5eVwiID09PSBuLnRhcmdldE1hdGNoWzBdICYmIHQucG9zIC0gbi50YXJnZXRNYXRjaEluZGV4ID09IDIpIHJldHVybiB0LnJlbW92ZSA9IHQucG9zICsgMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiMDJcIiA9PSBlLm1vbnRoICYmIFwiMzBcIiA9PSBlLmRheSAmJiB2b2lkIDAgIT09IHQuYykgcmV0dXJuIGUuZGF5ID0gXCIwM1wiLCBcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRlLnNldERhdGUoMyksIGUuZGF0ZS5zZXRNb250aCgxKSwgdC5pbnNlcnQgPSBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdC5wb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBjOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGM6IHQuY1xuICAgICAgICAgICAgICAgICAgICB9IF0sIHQuY2FyZXQgPSBvLnNlZWtOZXh0LmNhbGwodGhpcywgdC5wb3MgKyAxKSwgdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBTKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEsIG8sIHMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFAoaSkubGFzdEluZGV4ID0gMDsgYSA9IFAoaSkuZXhlYyhlKTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSBpZiAobyA9IHgoYSkpIHMgKz0gXCIoXCIgKyBvWzBdICsgXCIpXCI7IGVsc2Ugc3dpdGNoIChhWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBcIihcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gXCIpP1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyArPSAoMCwgci5kZWZhdWx0KShhWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobyA9IHgoYSkpIGlmICghMCAhPT0gbiAmJiBvWzNdKSBzICs9IG9bM10uY2FsbCh0LmRhdGUpOyBlbHNlIG9bMl0gPyBzICs9IHRbXCJyYXdcIiArIG9bMl1dIDogcyArPSBhWzBdOyBlbHNlIHMgKz0gYVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTShlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoZSA9IFN0cmluZyhlKSwgdCA9IHQgfHwgMjsgZS5sZW5ndGggPCB0OyApIGUgPSBpID8gZSArIFwiMFwiIDogXCIwXCIgKyBlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gXyhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gbmV3IGgoZSwgdCwgaSkgOiBlICYmIFwib2JqZWN0XCIgPT09IHUoZSkgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIFwiZGF0ZVwiKSA/IGUgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIE8oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUyh0LmlucHV0Rm9ybWF0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBlXG4gICAgICAgICAgICAgICAgICAgIH0sIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBFKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIG4sIGEgPSAwLCByID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChQKHQpLmxhc3RJbmRleCA9IDA7IG4gPSBQKHQpLmV4ZWModC5pbnB1dEZvcm1hdCk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBuZXcgUmVnRXhwKFwiXFxcXGQrJFwiKS5leGVjKG5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChhICs9IHIgPSBvID8gcGFyc2VJbnQob1swXSkgOiBuWzBdLmxlbmd0aCkgPj0gZSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbiwgbiA9IFAodCkuZXhlYyh0LmlucHV0Rm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2hJbmRleDogYSAtIHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0TWF0Y2g6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNYXRjaDogaVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuLmRlZmF1bHQuZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubnVtZXJpY0lucHV0ID0gITEsIGcuUyA9IGUuaTE4bi5vcmRpbmFsU3VmZml4LmpvaW4oXCJ8XCIpLCBlLmlucHV0Rm9ybWF0ID0geVtlLmlucHV0Rm9ybWF0XSB8fCBlLmlucHV0Rm9ybWF0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRpc3BsYXlGb3JtYXQgPSB5W2UuZGlzcGxheUZvcm1hdF0gfHwgZS5kaXNwbGF5Rm9ybWF0IHx8IGUuaW5wdXRGb3JtYXQsIGUub3V0cHV0Rm9ybWF0ID0geVtlLm91dHB1dEZvcm1hdF0gfHwgZS5vdXRwdXRGb3JtYXQgfHwgZS5pbnB1dEZvcm1hdCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wbGFjZWhvbGRlciA9IFwiXCIgIT09IGUucGxhY2Vob2xkZXIgPyBlLnBsYWNlaG9sZGVyIDogZS5pbnB1dEZvcm1hdC5yZXBsYWNlKC9bW1xcXV0vLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZWdleCA9IFMoZS5pbnB1dEZvcm1hdCwgdm9pZCAwLCBlKSwgZS5taW4gPSBfKGUubWluLCBlLmlucHV0Rm9ybWF0LCBlKSwgZS5tYXggPSBfKGUubWF4LCBlLmlucHV0Rm9ybWF0LCBlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Rm9ybWF0OiBcImlzb0RhdGVUaW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Rm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlOYW1lczogWyBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCIgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aE5hbWVzOiBbIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCIsIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIiBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYWxTdWZmaXg6IFsgXCJzdFwiLCBcIm5kXCIsIFwicmRcIiwgXCJ0aFwiIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhLCByLCBvLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oaSkgJiYgZVt0XSAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IEUodCwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLm5leHRNYXRjaCAmJiBsLm5leHRNYXRjaFswXSA9PT0gaSAmJiBsLnRhcmdldE1hdGNoWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZ1tsLnRhcmdldE1hdGNoWzBdXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKGMpLnRlc3QoXCIwXCIgKyBlW3QgLSAxXSkpIHJldHVybiBlW3RdID0gZVt0IC0gMV0sIGVbdCAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1enp5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHQgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSwgciwgbywgbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjLCB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBuICYmICgoKGMgPSBFKHQgKyAxLCBhKSkudGFyZ2V0TWF0Y2ggJiYgYy50YXJnZXRNYXRjaEluZGV4ID09PSB0ICYmIGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IGdbYy50YXJnZXRNYXRjaFswXV0gfHwgKGMgPSBFKHQgKyAyLCBhKSkudGFyZ2V0TWF0Y2ggJiYgYy50YXJnZXRNYXRjaEluZGV4ID09PSB0ICsgMSAmJiBjLnRhcmdldE1hdGNoWzBdLmxlbmd0aCA+IDEgJiYgdm9pZCAwICE9PSBnW2MudGFyZ2V0TWF0Y2hbMF1dKSAmJiAodSA9IGdbYy50YXJnZXRNYXRjaFswXV1bMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHUgJiYgKHZvaWQgMCAhPT0gci52YWxpZFBvc2l0aW9uc1t0ICsgMV0gJiYgbmV3IFJlZ0V4cCh1KS50ZXN0KGkgKyBcIjBcIikgPyAoZVt0XSA9IGksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVbdCArIDFdID0gXCIwXCIsIG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdCArIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBuZXcgUmVnRXhwKHUpLnRlc3QoXCIwXCIgKyBpKSAmJiAoZVt0XSA9IFwiMFwiLCBlW3QgKyAxXSA9IGksIG4gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdCArIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksICExID09PSBuKSkgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZnV6enkgJiYgKGUgPSBuLmJ1ZmZlciwgdCA9IG4ucG9zKSwgKGMgPSBFKHQsIGEpKS50YXJnZXRNYXRjaCAmJiBjLnRhcmdldE1hdGNoWzBdICYmIHZvaWQgMCAhPT0gZ1tjLnRhcmdldE1hdGNoWzBdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGdbYy50YXJnZXRNYXRjaFswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBmWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGUuc2xpY2UoYy50YXJnZXRNYXRjaEluZGV4LCBjLnRhcmdldE1hdGNoSW5kZXggKyBjLnRhcmdldE1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gbmV3IFJlZ0V4cCh1KS50ZXN0KGQuam9pbihcIlwiKSkgJiYgMiA9PT0gYy50YXJnZXRNYXRjaFswXS5sZW5ndGggJiYgci52YWxpZFBvc2l0aW9uc1tjLnRhcmdldE1hdGNoSW5kZXhdICYmIHIudmFsaWRQb3NpdGlvbnNbYy50YXJnZXRNYXRjaEluZGV4ICsgMV0gJiYgKHIudmFsaWRQb3NpdGlvbnNbYy50YXJnZXRNYXRjaEluZGV4ICsgMV0uaW5wdXQgPSBcIjBcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIiA9PSBmWzJdKSBmb3IgKHZhciBwID0gcy5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMSwgMSwgdm9pZCAwLCAhMCksIGggPSB0ICsgMTsgaCA8IGUubGVuZ3RoOyBoKyspIGVbaF0gPSBwW2hdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHIudmFsaWRQb3NpdGlvbnNbaF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gbiwgeSA9IF8oZS5qb2luKFwiXCIpLCBhLmlucHV0Rm9ybWF0LCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbSAmJiAhaXNOYU4oeS5kYXRlLmdldFRpbWUoKSkgJiYgKGEucHJlZmlsbFllYXIgJiYgKG0gPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnllYXIgIT09IGUucmF3eWVhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB2LnRvU3RyaW5nKCksIGEgPSBlLnJhd3llYXIucmVwbGFjZSgvW14wLTldL2csIFwiXCIpLCByID0gbi5zbGljZSgwLCBhLmxlbmd0aCksIG8gPSBuLnNsaWNlKGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgyID09PSBhLmxlbmd0aCAmJiBhID09PSByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZSh2LCBlLm1vbnRoIC0gMSwgZS5kYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGF5ID09IHMuZ2V0RGF0ZSgpICYmICghaS5tYXggfHwgaS5tYXguZGF0ZS5nZXRUaW1lKCkgPj0gcy5nZXRUaW1lKCkpICYmIChlLmRhdGUuc2V0RnVsbFllYXIodiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUueWVhciA9IG4sIHQuaW5zZXJ0ID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdC5wb3MgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHQucG9zICsgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh5LCBtLCBhKSksIG0gPSBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdCkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIGkubWluICYmICFpc05hTihpLm1pbi5kYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChlLnJlc2V0KCksIFAoaSkubGFzdEluZGV4ID0gMDsgciA9IFAoaSkuZXhlYyhpLmlucHV0Rm9ybWF0KTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvID0geChyKSkgJiYgb1szXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gb1sxXSwgbCA9IGVbb1syXV0sIGMgPSBpLm1pbltvWzJdXSwgdSA9IGkubWF4ID8gaS5tYXhbb1syXV0gOiBjLCBmID0gW10sIGQgPSAhMSwgcCA9IDA7IHAgPCBjLmxlbmd0aDsgcCsrKSB2b2lkIDAgIT09IG4udmFsaWRQb3NpdGlvbnNbcCArIHIuaW5kZXhdIHx8IGQgPyAoZltwXSA9IGxbcF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkID0gZCB8fCBsW3BdID4gY1twXSkgOiAoZltwXSA9IGNbcF0sIFwieWVhclwiID09PSBvWzJdICYmIGwubGVuZ3RoIC0gMSA9PSBwICYmIGMgIT0gdSAmJiAoZiA9IChwYXJzZUludChmLmpvaW4oXCJcIikpICsgMSkudG9TdHJpbmcoKS5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFtcG1cIiA9PT0gb1syXSAmJiBjICE9IHUgJiYgaS5taW4uZGF0ZS5nZXRUaW1lKCkgPiBlLmRhdGUuZ2V0VGltZSgpICYmIChmW3BdID0gdVtwXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbGwoZS5fZGF0ZSwgZi5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gaS5taW4uZGF0ZS5nZXRUaW1lKCkgPD0gZS5kYXRlLmdldFRpbWUoKSwgZS5yZUluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCAmJiBpLm1heCAmJiAoaXNOYU4oaS5tYXguZGF0ZS5nZXRUaW1lKCkpIHx8ICh0ID0gaS5tYXguZGF0ZS5nZXRUaW1lKCkgPj0gZS5kYXRlLmdldFRpbWUoKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHksIG0gPSB3LmNhbGwodGhpcywgeSwgbSwgYSksIGEsIHIpKSwgdm9pZCAwICE9PSB0ICYmIG0gJiYgbi5wb3MgIT09IHQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogUyhhLmlucHV0Rm9ybWF0LCB5LCBhKS5zcGxpdChcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuLnBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IG4uY2FyZXQgfHwgbi5wb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN0cmxLZXkgJiYgZS5rZXkgPT09IGEua2V5cy5BcnJvd1JpZ2h0ICYmICh0aGlzLmlucHV0bWFzay5fdmFsdWVTZXQoTyhuZXcgRGF0ZSwgbikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwKHRoaXMpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA/IFMoaS5vdXRwdXRGb3JtYXQsIF8oZSwgaS5pbnB1dEZvcm1hdCwgaSksIGksICEwKSA6IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAgPT0gdC5uYXRpdmVEZWYuaW5kZXhPZihcIlthcF1cIikgPyBlLnRvTG93ZXJDYXNlKCkgOiAwID09IHQubmF0aXZlRGVmLmluZGV4T2YoXCJbQVBdXCIpID8gZS50b1VwcGVyQ2FzZSgpIDogZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJbb2JqZWN0IERhdGVdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSAmJiAoZSA9IE8oZSwgdCkpLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZVZpc3VhbDogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdFBvc2l0aW9uczogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZWVwU3RhdGljOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaWxsWWVhcjogITBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM4NTE6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiwgYSA9IChuID0gaSgyMzk0KSkgJiYgbi5fX2VzTW9kdWxlID8gbiA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogblxuICAgICAgICAgICAgICAgIH0sIHIgPSBpKDg3MTEpLCBvID0gaSg0NzEzKTtcbiAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kRGVmaW5pdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICBBOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiJlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtRmEtZl1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBSZWdFeHAoXCIyNVswLTVdfDJbMC00XVswLTldfFswMV1bMC05XVswLTldXCIpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAtIDEgPiAtMSAmJiBcIi5cIiAhPT0gdC5idWZmZXJbaSAtIDFdID8gKGUgPSB0LmJ1ZmZlcltpIC0gMV0gKyBlLCBlID0gaSAtIDIgPiAtMSAmJiBcIi5cIiAhPT0gdC5idWZmZXJbaSAtIDJdID8gdC5idWZmZXJbaSAtIDJdICsgZSA6IFwiMFwiICsgZSkgOiBlID0gXCIwMFwiICsgZSwgXG4gICAgICAgICAgICAgICAgICAgIHMudGVzdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBjc3N1bml0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleDogXCJbKy1dP1swLTldK1xcXFwuPyhbMC05XSspPyhweHxlbXxyZW18ZXh8JXxpbnxjbXxtbXxwdHxwYylcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBcIihodHRwcz98ZnRwKTovLy4qXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiVGhyb3VnaDogITBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IFwiaXsxLDN9Lmp7MSwzfS5rezEsM30ubHsxLDN9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCI6IFwiLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnNlcGFyYXRvciwgaSA9IGUucXVhbnRpZmllciwgbiA9IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLCBhID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkgZm9yICh2YXIgciA9IDA7IHIgPCBpOyByKyspIGEgKz0gXCJbXCIuY29uY2F0KHQpLmNvbmNhdChuLCBcIl1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpZmllcjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlID0gZS50b0xvd2VyQ2FzZSgpKS5yZXBsYWNlKFwibWFpbHRvOlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XFx1ZmYxMS1cXHVmZjE5QS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1ISMkJSYnKisvPT9eX2B7fH1+LV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXotXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWFjOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIiMjOiMjOiMjOiMjOiMjOiMjXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIlZ7MTN9OXs0fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1ISi1OUFItWmEtaGotbnByLXpcXFxcZF1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNzbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogXCI5OTktOTktOTk5OVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEsIHMsIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG8uZ2V0TWFza1RlbXBsYXRlLmNhbGwodGhpcywgITAsIHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0aGlzKSwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gL14oPyEyMTktMDktOTk5OXwwNzgtMDUtMTEyMCkoPyE2NjZ8MDAwfDkuezJ9KS57M30tKD8hMDApLnsyfS0oPyEwezR9KS57NH0kLy50ZXN0KGMuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyMDc6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHMoaSgyMzk0KSksIGEgPSBzKGkoNzE4NCkpLCByID0gaSg4NzExKSwgbyA9IGkoMjgzOSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBsID0gbi5kZWZhdWx0LmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBcIlwiLCBhID0gMDsgYSA8IGUubGVuZ3RoOyBhKyspIG4uZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZS5jaGFyQXQoYSldIHx8IHQuZGVmaW5pdGlvbnNbZS5jaGFyQXQoYSldIHx8IHQub3B0aW9uYWxtYXJrZXJbMF0gPT09IGUuY2hhckF0KGEpIHx8IHQub3B0aW9uYWxtYXJrZXJbMV0gPT09IGUuY2hhckF0KGEpIHx8IHQucXVhbnRpZmllcm1hcmtlclswXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5xdWFudGlmaWVybWFya2VyWzFdID09PSBlLmNoYXJBdChhKSB8fCB0Lmdyb3VwbWFya2VyWzBdID09PSBlLmNoYXJBdChhKSB8fCB0Lmdyb3VwbWFya2VyWzFdID09PSBlLmNoYXJBdChhKSB8fCB0LmFsdGVybmF0b3JtYXJrZXIgPT09IGUuY2hhckF0KGEpID8gaSArPSBcIlxcXFxcIiArIGUuY2hhckF0KGEpIDogaSArPSBlLmNoYXJBdChhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5sZW5ndGggPiAwICYmIHQgPiAwICYmICghaS5kaWdpdHNPcHRpb25hbCB8fCBuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBlLmluZGV4T2YoaS5yYWRpeFBvaW50KSwgciA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5uZWdhdGlvblN5bWJvbC5iYWNrID09PSBlW2UubGVuZ3RoIC0gMV0gJiYgKHIgPSAhMCwgZS5sZW5ndGgtLSksIC0xID09PSBhICYmIChlLnB1c2goaS5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAxOyBvIDw9IHQ7IG8rKykgaXNGaW5pdGUoZVthICsgb10pIHx8IChlW2EgKyBvXSA9IFwiMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gciAmJiBlLnB1c2goaS5uZWdhdGlvblN5bWJvbC5iYWNrKSwgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBcIitcIiA9PT0gZSAmJiAoaSA9IHIuc2Vla05leHQuY2FsbCh0aGlzLCB0LnZhbGlkUG9zaXRpb25zLmxlbmd0aCAtIDEpKSwgXG4gICAgICAgICAgICAgICAgICAgIHQudGVzdHMpIGlmICgobiA9IHBhcnNlSW50KG4pKSA+PSBpKSBmb3IgKHZhciBhID0gMCwgbyA9IHQudGVzdHNbbl0ubGVuZ3RoOyBhIDwgbzsgYSsrKSBpZiAoKHZvaWQgMCA9PT0gdC52YWxpZFBvc2l0aW9uc1tuXSB8fCBcIi1cIiA9PT0gZSkgJiYgdC50ZXN0c1tuXVthXS5tYXRjaC5kZWYgPT09IGUpIHJldHVybiBuICsgKHZvaWQgMCAhPT0gdC52YWxpZFBvc2l0aW9uc1tuXSAmJiBcIi1cIiAhPT0gZSA/IDEgOiAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gLTEsIG4gPSAwLCBhID0gdC52YWxpZFBvc2l0aW9ucy5sZW5ndGg7IG4gPCBhOyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdC52YWxpZFBvc2l0aW9uc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyICYmIHIubWF0Y2guZGVmID09PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQuYnVmZmVyID8gdC5idWZmZXIuaW5kZXhPZihhLnJhZGl4UG9pbnQpIDogLTEsIG8gPSAoLTEgIT09IHIgfHwgbiAmJiBhLmppdE1hc2tpbmcpICYmIG5ldyBSZWdFeHAoYS5kZWZpbml0aW9uc1s5XS52YWxpZGF0b3IpLnRlc3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLl9yYWRpeERhbmNlICYmIC0xICE9PSByICYmIG8gJiYgbnVsbCA9PSB0LnZhbGlkUG9zaXRpb25zW3JdID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiByID09PSBpID8gciArIDEgOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IGEucmFkaXhQb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogaVxuICAgICAgICAgICAgICAgICAgICB9IDogbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbi5kZWZhdWx0LmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICAgICAgICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZXBlYXQgPSAwLCBlLmdyb3VwU2VwYXJhdG9yID09PSBlLnJhZGl4UG9pbnQgJiYgZS5kaWdpdHMgJiYgXCIwXCIgIT09IGUuZGlnaXRzICYmIChcIi5cIiA9PT0gZS5yYWRpeFBvaW50ID8gZS5ncm91cFNlcGFyYXRvciA9IFwiLFwiIDogXCIsXCIgPT09IGUucmFkaXhQb2ludCA/IGUuZ3JvdXBTZXBhcmF0b3IgPSBcIi5cIiA6IGUuZ3JvdXBTZXBhcmF0b3IgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgPT09IGUuZ3JvdXBTZXBhcmF0b3IgJiYgKGUuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHZvaWQgMCksIGUucGxhY2Vob2xkZXIubGVuZ3RoID4gMSAmJiAoZS5wbGFjZWhvbGRlciA9IGUucGxhY2Vob2xkZXIuY2hhckF0KDApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IGUucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gZS5wbGFjZWhvbGRlciAmJiAoZS5wb3NpdGlvbkNhcmV0T25DbGljayA9IFwibHZwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gXCIwXCIsIGkgPSBlLnJhZGl4UG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGUubnVtZXJpY0lucHV0ICYmIHZvaWQgMCA9PT0gZS5fX2ZpbmFuY2VJbnB1dCA/ICh0ID0gXCIxXCIsIGUucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gZS5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRpZ2l0c09wdGlvbmFsID0gITEsIGlzTmFOKGUuZGlnaXRzKSAmJiAoZS5kaWdpdHMgPSAyKSwgZS5fcmFkaXhEYW5jZSA9ICExLCBpID0gXCIsXCIgPT09IGUucmFkaXhQb2ludCA/IFwiP1wiIDogXCIhXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGUucmFkaXhQb2ludCAmJiB2b2lkIDAgPT09IGUuZGVmaW5pdGlvbnNbaV0gJiYgKGUuZGVmaW5pdGlvbnNbaV0gPSB7fSwgZS5kZWZpbml0aW9uc1tpXS52YWxpZGF0b3IgPSBcIltcIiArIGUucmFkaXhQb2ludCArIFwiXVwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRlZmluaXRpb25zW2ldLnBsYWNlaG9sZGVyID0gZS5yYWRpeFBvaW50LCBlLmRlZmluaXRpb25zW2ldLnN0YXRpYyA9ICEwLCBlLmRlZmluaXRpb25zW2ldLmdlbmVyYXRlZCA9ICEwKSkgOiAoZS5fX2ZpbmFuY2VJbnB1dCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm51bWVyaWNJbnB1dCA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgciA9IFwiWytdXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgKz0gYyhlLnByZWZpeCwgZSksIFwiXCIgIT09IGUuZ3JvdXBTZXBhcmF0b3IgPyAodm9pZCAwID09PSBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdICYmIChlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdID0ge30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0udmFsaWRhdG9yID0gXCJbXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCJdXCIsIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0ucGxhY2Vob2xkZXIgPSBlLmdyb3VwU2VwYXJhdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLnN0YXRpYyA9ICEwLCBlLmRlZmluaXRpb25zW2UuZ3JvdXBTZXBhcmF0b3JdLmdlbmVyYXRlZCA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciArPSBlLl9tYXNrKGUpKSA6IHIgKz0gXCI5eyt9XCIsIHZvaWQgMCAhPT0gZS5kaWdpdHMgJiYgMCAhPT0gZS5kaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBlLmRpZ2l0cy50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5pdGUob1swXSkgJiYgb1sxXSAmJiBpc0Zpbml0ZShvWzFdKSA/IHIgKz0gaSArIHQgKyBcIntcIiArIGUuZGlnaXRzICsgXCJ9XCIgOiAoaXNOYU4oZS5kaWdpdHMpIHx8IHBhcnNlSW50KGUuZGlnaXRzKSA+IDApICYmIChlLmRpZ2l0c09wdGlvbmFsIHx8IGUuaml0TWFza2luZyA/IChuID0gciArIGkgKyB0ICsgXCJ7MCxcIiArIGUuZGlnaXRzICsgXCJ9XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmtlZXBTdGF0aWMgPSAhMCkgOiByICs9IGkgKyB0ICsgXCJ7XCIgKyBlLmRpZ2l0cyArIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZS5pbnB1dG1vZGUgPSBcIm51bWVyaWNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gciArPSBjKGUuc3VmZml4LCBlKSwgciArPSBcIlstXVwiLCBuICYmIChyID0gWyBuICsgYyhlLnN1ZmZpeCwgZSkgKyBcIlstXVwiLCByIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmdyZWVkeSA9ICExLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZS5wYXJzZU1pbk1heE9wdGlvbnMgJiYgKG51bGwgIT09IGUubWluICYmIChlLm1pbiA9IGUubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KShlLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXCIsXCIgPT09IGUucmFkaXhQb2ludCAmJiAoZS5taW4gPSBlLm1pbi5yZXBsYWNlKGUucmFkaXhQb2ludCwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWluID0gaXNGaW5pdGUoZS5taW4pID8gcGFyc2VGbG9hdChlLm1pbikgOiBOYU4sIGlzTmFOKGUubWluKSAmJiAoZS5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBlLm1heCAmJiAoZS5tYXggPSBlLm1heC50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgYS5kZWZhdWx0KShlLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBlLnJhZGl4UG9pbnQgJiYgKGUubWF4ID0gZS5tYXgucmVwbGFjZShlLnJhZGl4UG9pbnQsIFwiLlwiKSksIGUubWF4ID0gaXNGaW5pdGUoZS5tYXgpID8gcGFyc2VGbG9hdChlLm1heCkgOiBOYU4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihlLm1heCkgJiYgKGUubWF4ID0gTnVtYmVyLk1BWF9WQUxVRSkpLCBlLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUpLCBcIlwiICE9PSBlLnJhZGl4UG9pbnQgJiYgZS5zdWJzdGl0dXRlUmFkaXhQb2ludCAmJiAoZS5zdWJzdGl0dXRlc1tcIi5cIiA9PSBlLnJhZGl4UG9pbnQgPyBcIixcIiA6IFwiLlwiXSA9IGUucmFkaXhQb2ludCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCI5OTkpeyt8MX1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5mb3JjZURpZ2l0c09uQmx1cjogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcInJhZGl4Rm9jdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yYWRpeERhbmNlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNaW51czogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWdhdGlvblN5bWJvbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgU2V0TWF4T25PdmVyZmxvdzogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kaW5nRk46IE1hdGgucm91bmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZGVjaW1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnRjdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgazogXCIxMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbTogXCIxMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVlZHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRBbGlnbjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZVByb3RvdHlwZURlZmluaXRpb25zOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwTGVhZGluZ1plcm9lczogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRlUmFkaXhQb2ludDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCI5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjEwLVxcdWZmMTlcXHUwNjYwLVxcdTA2NjlcXHUwNmYwLVxcdTA2ZjldXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFsbG93TWludXMgJiYgKFwiLVwiID09PSBlIHx8IGUgPT09IGEubmVnYXRpb25TeW1ib2wuZnJvbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFsbG93TWludXMgJiYgZSA9PT0gYS5uZWdhdGlvblN5bWJvbC5iYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEsIHIsIG8sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IGEuX19maW5hbmNlSW5wdXQgJiYgaSA9PT0gYS5yYWRpeFBvaW50KSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlLmluZGV4T2YoYS5yYWRpeFBvaW50KSwgYyA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPSBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLl9yYWRpeERhbmNlICYmIGEubnVtZXJpY0lucHV0ICYmIHQgIT09IGEubmVnYXRpb25TeW1ib2wuYmFjayAmJiBlIDw9IGkgJiYgKGkgPiAwIHx8IHQgPT0gYS5yYWRpeFBvaW50KSAmJiAodm9pZCAwID09PSBuLnZhbGlkUG9zaXRpb25zW2UgLSAxXSB8fCBuLnZhbGlkUG9zaXRpb25zW2UgLSAxXS5pbnB1dCAhPT0gYS5uZWdhdGlvblN5bWJvbC5iYWNrKSAmJiAoZSAtPSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LCBpLCBsLCByLCBhKSwgXCItXCIgPT09IGkgfHwgaSA9PT0gYS5uZWdhdGlvblN5bWJvbC5mcm9udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IGEuYWxsb3dNaW51cykgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9ICExLCBwID0gZChcIitcIiwgciksIGggPSBkKFwiLVwiLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBwICYmICh1ID0gWyBwLCBoIF0pLCAhMSAhPT0gdSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogdSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjIC0gYS5uZWdhdGlvblN5bWJvbC5iYWNrLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGYuY2FsbCh0aGlzLCBcIitcIiwgciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogYS5uZWdhdGlvblN5bWJvbC5mcm9udCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IGYuY2FsbCh0aGlzLCBcIi1cIiwgciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogYS5uZWdhdGlvblN5bWJvbC5iYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Jc1ZhbGlkOiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjICsgYS5uZWdhdGlvblN5bWJvbC5iYWNrLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gYS5ncm91cFNlcGFyYXRvcikgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBsICYmICEwID09PSBhLl9yYWRpeERhbmNlICYmICExID09PSBuICYmIGkgPT09IGEucmFkaXhQb2ludCAmJiB2b2lkIDAgIT09IGEuZGlnaXRzICYmIChpc05hTihhLmRpZ2l0cykgfHwgcGFyc2VJbnQoYS5kaWdpdHMpID4gMCkgJiYgbCAhPT0gdCkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGEuX3JhZGl4RGFuY2UgJiYgdCA9PT0gbCAtIDEgPyBsICsgMSA6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gYS5fX2ZpbmFuY2VJbnB1dCkgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuZGlnaXRzT3B0aW9uYWwpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IG8uZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYS5kaWdpdHNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uYmVnaW4gPiBsICYmIG8uZW5kIDw9IGwpIHJldHVybiBpID09PSBhLnJhZGl4UG9pbnQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tSXNWYWxpZDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IGwgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8uYmVnaW4gPCBsKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogby5iZWdpbiAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFhLnNob3dNYXNrT25Ib3ZlciAmJiAhYS5zaG93TWFza09uRm9jdXMgJiYgIWEuZGlnaXRzT3B0aW9uYWwgJiYgYS5kaWdpdHMgPiAwICYmIFwiXCIgPT09IHRoaXMuX192YWx1ZUdldC5jYWxsKHRoaXMuZWwpKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdyaXRlUG9zaXRpb246IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEsIHIsIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IG4pIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWluIHx8IG51bGwgIT09IGEubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYS5vblVuTWFzayhlLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIiksIHZvaWQgMCwgbC5leHRlbmQoe30sIGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBhLm1pbiAmJiBzIDwgYS5taW4gJiYgKHMudG9TdHJpbmcoKS5sZW5ndGggPiBhLm1pbi50b1N0cmluZygpLmxlbmd0aCB8fCBzIDwgMCkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWF4ICYmIHMgPiBhLm1heCkgcmV0dXJuICEhYS5TZXRNYXhPbk92ZXJmbG93ICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdShhLm1heC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGEucmFkaXhQb2ludCkuc3BsaXQoXCJcIiksIGEuZGlnaXRzLCBhKS5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdCAmJiAhMCA9PT0gaS5udWxsYWJsZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLnJlcGxhY2UoaS5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuID0gKG4gPSBuLnJlcGxhY2UoaS5zdWZmaXgsIFwiXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIGEuZGVmYXVsdCkoaS5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGkucGxhY2Vob2xkZXIuY2hhckF0KDApICYmIChuID0gbi5yZXBsYWNlKG5ldyBSZWdFeHAoaS5wbGFjZWhvbGRlci5jaGFyQXQoMCksIFwiZ1wiKSwgXCIwXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaS51bm1hc2tBc051bWJlciA/IChcIlwiICE9PSBpLnJhZGl4UG9pbnQgJiYgLTEgIT09IG4uaW5kZXhPZihpLnJhZGl4UG9pbnQpICYmIChuID0gbi5yZXBsYWNlKGEuZGVmYXVsdC5jYWxsKHRoaXMsIGkucmFkaXhQb2ludCksIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4gPSAobiA9IG4ucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgKDAsIGEuZGVmYXVsdCkoaS5uZWdhdGlvblN5bWJvbC5mcm9udCkpLCBcIi1cIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KShpLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgTnVtYmVyKG4pKSA6IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gKHQubnVtZXJpY0lucHV0ID8gZS5zbGljZSgpLnJldmVyc2UoKSA6IGUpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSAoaSA9IChpID0gKGkgPSAoaSA9IGkucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgKDAsIGEuZGVmYXVsdCkodC5uZWdhdGlvblN5bWJvbC5mcm9udCkpLCBcIi1cIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KSh0Lm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSkucmVwbGFjZSh0LnByZWZpeCwgXCJcIikpLnJlcGxhY2UodC5zdWZmaXgsIFwiXCIpKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkodC5ncm91cFNlcGFyYXRvcikgKyBcIihbMC05XXszfSlcIiwgXCJnXCIpLCBcIiQxXCIpLCBcIixcIiA9PT0gdC5yYWRpeFBvaW50ICYmIChpID0gaS5yZXBsYWNlKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKHQucmFkaXhQb2ludCksIFwiLlwiKSksIGlzRmluaXRlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdC5yYWRpeFBvaW50IHx8IFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKHQuZGlnaXRzKSAmJiAodC5kaWdpdHMgPSBwYXJzZUludCh0LmRpZ2l0cykpLCBcIm51bWJlclwiICE9IHR5cGVvZiBlICYmIFwibnVtYmVyXCIgIT09IHQuaW5wdXRUeXBlIHx8IFwiXCIgPT09IGkgfHwgKGUgPSBlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gXCItXCIgPT09IGUuY2hhckF0KDApIHx8IGUuY2hhckF0KDApID09PSB0Lm5lZ2F0aW9uU3ltYm9sLmZyb250LCByID0gZS5zcGxpdChpKSwgbyA9IHJbMF0ucmVwbGFjZSgvW15cXC0wLTldL2csIFwiXCIpLCBzID0gci5sZW5ndGggPiAxID8gclsxXS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikgOiBcIlwiLCBsID0gci5sZW5ndGggPiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBvICsgKFwiXCIgIT09IHMgPyBpICsgcyA6IHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gaSAmJiAoYyA9IHQuZGlnaXRzT3B0aW9uYWwgPyB0LmRpZ2l0cyA8IHMubGVuZ3RoID8gdC5kaWdpdHMgOiBzLmxlbmd0aCA6IHQuZGlnaXRzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBzIHx8ICF0LmRpZ2l0c09wdGlvbmFsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE1hdGgucG93KDEwLCBjIHx8IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gZS5yZXBsYWNlKCgwLCBhLmRlZmF1bHQpKGkpLCBcIi5cIiksIGlzTmFOKHBhcnNlRmxvYXQoZSkpIHx8IChlID0gKHQucm91bmRpbmdGTihwYXJzZUZsb2F0KGUpICogZikgLyBmKS50b0ZpeGVkKGMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSB0LmRpZ2l0cyAmJiAtMSAhPT0gZS5pbmRleE9mKGkpICYmIChlID0gZS5zdWJzdHJpbmcoMCwgZS5pbmRleE9mKGkpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IHQubWluIHx8IG51bGwgIT09IHQubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gZS50b1N0cmluZygpLnJlcGxhY2UoaSwgXCIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSB0Lm1pbiAmJiBkIDwgdC5taW4gPyBlID0gdC5taW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBpKSA6IG51bGwgIT09IHQubWF4ICYmIGQgPiB0Lm1heCAmJiAoZSA9IHQubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgaSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiAmJiBcIi1cIiAhPT0gZS5jaGFyQXQoMCkgJiYgKGUgPSBcIi1cIiArIGUpLCB1KGUudG9TdHJpbmcoKS5zcGxpdChcIlwiKSwgYywgdCwgbCkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVdyaXRlOiBmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gbi5fX2ZpbmFuY2VJbnB1dCB8fCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUuaW5kZXhPZihuLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09IGkgJiYgZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IG4uZ3JvdXBTZXBhcmF0b3IpIGZvciAoOy0xICE9PSAoaSA9IGUuaW5kZXhPZihuLmdyb3VwU2VwYXJhdG9yKSk7ICkgZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbywgcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5zdHJpcExlYWRpbmdaZXJvZXMgJiYgKHMgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbmV3IFJlZ0V4cChcIiheXCIgKyAoXCJcIiAhPT0gdC5uZWdhdGlvblN5bWJvbC5mcm9udCA/ICgwLCBhLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuZnJvbnQpICsgXCI/XCIgOiBcIlwiKSArICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KSh0LnByZWZpeCkgKyBcIikoLiopKFwiICsgKDAsIGEuZGVmYXVsdCkodC5zdWZmaXgpICsgKFwiXCIgIT0gdC5uZWdhdGlvblN5bWJvbC5iYWNrID8gKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIj9cIiA6IFwiXCIpICsgXCIkKVwiKS5leGVjKGUuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSksIG4gPSBpID8gaVsyXSA6IFwiXCIsIHIgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gJiYgKG4gPSBuLnNwbGl0KHQucmFkaXhQb2ludC5jaGFyQXQoMCkpWzBdLCByID0gbmV3IFJlZ0V4cChcIl5bMFwiICsgdC5ncm91cFNlcGFyYXRvciArIFwiXSpcIikuZXhlYyhuKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKCFyIHx8ICEoclswXS5sZW5ndGggPiAxIHx8IHJbMF0ubGVuZ3RoID4gMCAmJiByWzBdLmxlbmd0aCA8IG4ubGVuZ3RoKSkgJiYgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQsIG4pKSkgZm9yICh2YXIgYyA9IHQuam9pbihcIlwiKS5sYXN0SW5kZXhPZihzWzBdLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKSAtIChzWzBdID09IHMuaW5wdXQgPyAwIDogMSksIGYgPSBzWzBdID09IHMuaW5wdXQgPyAxIDogMCwgZCA9IHNbMF0ubGVuZ3RoIC0gZjsgZCA+IDA7IGQtLSkgZGVsZXRlIHRoaXMubWFza3NldC52YWxpZFBvc2l0aW9uc1tjICsgZF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0W2MgKyBkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJibHVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG4ubWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG4ub25Vbk1hc2sodC5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpLCB2b2lkIDAsIGwuZXh0ZW5kKHt9LCBuLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gbi5taW4gJiYgcCA8IG4ubWluKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHUobi5taW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBuLnJhZGl4UG9pbnQpLnNwbGl0KFwiXCIpLCBuLmRpZ2l0cywgbikucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0W3QubGVuZ3RoIC0gMV0gPT09IG4ubmVnYXRpb25TeW1ib2wuZnJvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gbmV3IFJlZ0V4cChcIiheXCIgKyAoXCJcIiAhPSBuLm5lZ2F0aW9uU3ltYm9sLmZyb250ID8gKDAsIGEuZGVmYXVsdCkobi5uZWdhdGlvblN5bWJvbC5mcm9udCkgKyBcIj9cIiA6IFwiXCIpICsgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KShuLnByZWZpeCkgKyBcIikoLiopKFwiICsgKDAsIGEuZGVmYXVsdCkobi5zdWZmaXgpICsgKFwiXCIgIT0gbi5uZWdhdGlvblN5bWJvbC5iYWNrID8gKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KShuLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCI/XCIgOiBcIlwiKSArIFwiJClcIikuZXhlYyhyKHQuc2xpY2UoKSwgITApLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT0gKGggPyBoWzJdIDogXCJcIikgJiYgKG8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogWyAwIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFwiXCIgIT09IG4ucmFkaXhQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pbmRleE9mKG4ucmFkaXhQb2ludCkgPT09IG4uc3VmZml4Lmxlbmd0aCAmJiAobyAmJiBvLmJ1ZmZlciA/IG8uYnVmZmVyLnNwbGljZSgwLCAxICsgbi5zdWZmaXgubGVuZ3RoKSA6ICh0LnNwbGljZSgwLCAxICsgbi5zdWZmaXgubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHIodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5lbmZvcmNlRGlnaXRzT25CbHVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IChvID0gbyB8fCB7fSkgJiYgby5idWZmZXIgfHwgdC5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucmVmcmVzaEZyb21CdWZmZXIgPSAhMCwgby5idWZmZXIgPSB1KHYsIG4uZGlnaXRzLCBuLCAhMCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhLCByID0gbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMyAhPSBlLmxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzLCBjID0gZS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocyA9IG4uc2hvcnRjdXRzICYmIG4uc2hvcnRjdXRzW2NdKSAmJiBzLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlucHV0bWFzay5fX3ZhbHVlU2V0LmNhbGwodGhpcywgcGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpICogcGFyc2VJbnQocykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIG8ua2V5cy5BcnJvd1VwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2suX192YWx1ZVNldC5jYWxsKHRoaXMsIHBhcnNlRmxvYXQodGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpKSArIHBhcnNlSW50KG4uc3RlcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwic2V0dmFsdWVcIiksICExO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIG8ua2V5cy5BcnJvd0Rvd246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5fX3ZhbHVlU2V0LmNhbGwodGhpcywgcGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpIC0gcGFyc2VJbnQobi5zdGVwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5zaGlmdEtleSAmJiAoZS5rZXkgPT09IG8ua2V5cy5EZWxldGUgfHwgZS5rZXkgPT09IG8ua2V5cy5CYWNrc3BhY2UgfHwgZS5rZXkgPT09IG8ua2V5cy5CQUNLU1BBQ0VfU0FGQVJJKSAmJiBpLmJlZ2luICE9PSB0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFtlLmtleSA9PT0gby5rZXlzLkRlbGV0ZSA/IGkuYmVnaW4gLSAxIDogaS5lbmRdID09PSBuLm5lZ2F0aW9uU3ltYm9sLmZyb250KSByZXR1cm4gYSA9IHQuc2xpY2UoKS5yZXZlcnNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBuLm5lZ2F0aW9uU3ltYm9sLmZyb250ICYmIGEuc2hpZnQoKSwgXCJcIiAhPT0gbi5uZWdhdGlvblN5bWJvbC5iYWNrICYmIGEucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEuam9pbihcIlwiKSwgaS5iZWdpbiBdKSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbi5fcmFkaXhEYW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSB0LmluZGV4T2Yobi5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmRpZ2l0c09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IGYpIHJldHVybiAoYSA9IHQuc2xpY2UoKS5yZXZlcnNlKCkpLnBvcCgpLCByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEuam9pbihcIlwiKSwgaS5iZWdpbiA+PSBhLmxlbmd0aCA/IGEubGVuZ3RoIDogaS5iZWdpbiBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC0xICE9PSBmICYmIChpLmJlZ2luIDwgZiB8fCBpLmVuZCA8IGYgfHwgZS5rZXkgPT09IG8ua2V5cy5EZWxldGUgJiYgKGkuYmVnaW4gPT09IGYgfHwgaS5iZWdpbiAtIDEgPT09IGYpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmJlZ2luID09PSBpLmVuZCAmJiAoZS5rZXkgPT09IG8ua2V5cy5CYWNrc3BhY2UgfHwgZS5rZXkgPT09IG8ua2V5cy5CQUNLU1BBQ0VfU0FGQVJJID8gaS5iZWdpbisrIDogZS5rZXkgPT09IG8ua2V5cy5EZWxldGUgJiYgaS5iZWdpbiAtIDEgPT09IGYgJiYgKGQgPSBsLmV4dGVuZCh7fSwgaSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkuYmVnaW4tLSwgaS5lbmQtLSkpLCAoYSA9IHQuc2xpY2UoKS5yZXZlcnNlKCkpLnNwbGljZShhLmxlbmd0aCAtIGkuYmVnaW4sIGkuYmVnaW4gLSBpLmVuZCArIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhID0gdShhLCBuLmRpZ2l0cywgbikuam9pbihcIlwiKSwgZCAmJiAoaSA9IGQpLCByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGEsIGkuYmVnaW4gPj0gYS5sZW5ndGggPyBmICsgMSA6IGkuYmVnaW4gXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiLFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICExXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnRlZ2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VmZml4OiBcIiAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01pbnVzOiAhMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbmRpYW5uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX21hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoXCIgKyBlLmdyb3VwU2VwYXJhdG9yICsgXCI5OSl7KnwxfShcIiArIGUuZ3JvdXBTZXBhcmF0b3IgKyBcIjk5OSl7MXwxfVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICExXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MzgwOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG47XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAoKG4gPSBpKDg3NDEpKSAmJiBuLl9fZXNNb2R1bGUgPyBuIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBuXG4gICAgICAgICAgICAgICAgfSkuZGVmYXVsdCA/IHdpbmRvdyA6IHt9O1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzc2MDogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5IYW5kbGVOYXRpdmVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocy5pZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSB0ICYmIChlLnBsYWNlaG9sZGVyICE9PSB0IHx8IFwiXCIgPT09IGUucGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSByLmdldEJ1ZmZlci5jYWxsKGkpLnNsaWNlKCksIGEgPSBlLmlucHV0bWFzay5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgPT09IG8gJiYgYSA9PT0gci5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpLmpvaW4oXCJcIikgPyBuID0gW10gOiAtMSAhPT0gbyAmJiB1LmNhbGwoaSwgbiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkKGUsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUucGxhY2Vob2xkZXIgIT09IHQgJiYgKGUucGxhY2Vob2xkZXIgPSB0LCBcIlwiID09PSBlLnBsYWNlaG9sZGVyICYmIGUucmVtb3ZlQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikpO1xuICAgICAgICAgICAgICAgIH0sIHQuYXBwbHlJbnB1dFZhbHVlID0gYywgdC5jaGVja1ZhbCA9IGYsIHQuY2xlYXJPcHRpb25hbFRhaWwgPSB1LCB0LnVubWFza2VkdmFsdWUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgaSA9IHQub3B0cywgbiA9IHQubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGUuaW5wdXRtYXNrKSByZXR1cm4gZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrICYmIGUuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSAmJiBjKGUsIGUuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgbyA9IG4udmFsaWRQb3NpdGlvbnMsIHMgPSAwLCBsID0gby5sZW5ndGg7IHMgPCBsOyBzKyspIG9bc10gJiYgb1tzXS5tYXRjaCAmJiAoMSAhPSBvW3NdLm1hdGNoLnN0YXRpYyB8fCBBcnJheS5pc0FycmF5KG4ubWV0YWRhdGEpICYmICEwICE9PSBvW3NdLmdlbmVyYXRlZElucHV0KSAmJiBhLnB1c2gob1tzXS5pbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1ID0gMCA9PT0gYS5sZW5ndGggPyBcIlwiIDogKHQuaXNSVEwgPyBhLnJldmVyc2UoKSA6IGEpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGkub25Vbk1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gKHQuaXNSVEwgPyByLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKCkucmV2ZXJzZSgpIDogci5nZXRCdWZmZXIuY2FsbCh0KSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBpLm9uVW5NYXNrLmNhbGwodCwgZiwgdSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgICAgICAgfSwgdC53cml0ZUJ1ZmZlciA9IGQ7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDI4MzkpLCBhID0gaSg0NzEzKSwgciA9IGkoODcxMSksIG8gPSBpKDcyMTUpLCBzID0gaSg5ODQ1KSwgbCA9IGkoNjAzMCk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgbiA9IGkub3B0cztcbiAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sucmVmcmVzaFZhbHVlID0gITEsIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygbi5vbkJlZm9yZU1hc2sgJiYgKHQgPSBuLm9uQmVmb3JlTWFzay5jYWxsKGksIHQsIG4pIHx8IHQpLCBcbiAgICAgICAgICAgICAgICAgICAgZihlLCAhMCwgITEsIHQgPSAodCB8fCBcIlwiKS50b1N0cmluZygpLnNwbGl0KFwiXCIpKSwgaS51bmRvVmFsdWUgPSBpLl92YWx1ZUdldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAobi5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBuLmNsZWFySW5jb21wbGV0ZSkgJiYgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IHIuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKS5qb2luKFwiXCIpICYmIC0xID09PSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaSkgJiYgZS5pbnB1dG1hc2suX3ZhbHVlU2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBpID0gYS5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgMCwgITAsIHZvaWQgMCwgITApOyB2b2lkIDAgIT09ICh0ID0gaS5zaGlmdCgpKTsgKSBlLnB1c2godCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQsIGksIG4sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzLCB1ID0gYy5tYXNrc2V0LCBmID0gYy5vcHRzLCBwID0gYy5kZXBlbmRlbmN5TGliLCBoID0gbi5zbGljZSgpLCB2ID0gXCJcIiwgbSA9IC0xLCBnID0gdm9pZCAwLCB5ID0gZi5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyO1xuICAgICAgICAgICAgICAgICAgICBmLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBcIlwiLCByLnJlc2V0TWFza1NldC5jYWxsKGMpLCB1LnRlc3RzID0ge30sIG0gPSBmLnJhZGl4UG9pbnQgPyByLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChjLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMFxuICAgICAgICAgICAgICAgICAgICB9LCAhMSwgITEgPT09IGYuX19maW5hbmNlSW5wdXQgPyBcInJhZGl4Rm9jdXNcIiA6IHZvaWQgMCkuYmVnaW4gOiAwLCB1LnAgPSBtLCBjLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBbXSwgYiA9IGMuY2FyZXRQb3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmZvckVhY2goKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IG5ldyBwLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ua2V5ID0gZSwgdiArPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIHZvaWQgMCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhLmdldE1hc2tUZW1wbGF0ZS5jYWxsKGMsICEwLCAwKS5zbGljZShlLCByLnNlZWtOZXh0LmNhbGwoYywgZSwgITEsICExKSkuam9pbihcIlwiKS5yZXBsYWNlKC8nL2csIFwiXCIpLCBuID0gaS5pbmRleE9mKHQpOyBuID4gMCAmJiBcIiBcIiA9PT0gaVtuIC0gMV07ICkgbi0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IDAgPT09IG4gJiYgIXIuaXNNYXNrLmNhbGwoYywgZSkgJiYgKGEuZ2V0VGVzdC5jYWxsKGMsIGUpLm1hdGNoLm5hdGl2ZURlZiA9PT0gdC5jaGFyQXQoMCkgfHwgITAgPT09IGEuZ2V0VGVzdC5jYWxsKGMsIGUpLm1hdGNoLnN0YXRpYyAmJiBhLmdldFRlc3QuY2FsbChjLCBlKS5tYXRjaC5uYXRpdmVEZWYgPT09IFwiJ1wiICsgdC5jaGFyQXQoMCkgfHwgXCIgXCIgPT09IGEuZ2V0VGVzdC5jYWxsKGMsIGUpLm1hdGNoLm5hdGl2ZURlZiAmJiAoYS5nZXRUZXN0LmNhbGwoYywgZSArIDEpLm1hdGNoLm5hdGl2ZURlZiA9PT0gdC5jaGFyQXQoMCkgfHwgITAgPT09IGEuZ2V0VGVzdC5jYWxsKGMsIGUgKyAxKS5tYXRjaC5zdGF0aWMgJiYgYS5nZXRUZXN0LmNhbGwoYywgZSArIDEpLm1hdGNoLm5hdGl2ZURlZiA9PT0gXCInXCIgKyB0LmNoYXJBdCgwKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW8gJiYgbiA+IDAgJiYgIXIuaXNNYXNrLmNhbGwoYywgZSwgITEsICEwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSByLnNlZWtOZXh0LmNhbGwoYywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmNhcmV0UG9zLmJlZ2luIDwgcyAmJiAoYy5jYXJldFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShtLCB2KSA/IChnID0gbC5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChjLCBuLCAhMCwgITEsIGksIGMuY2FyZXRQb3MuYmVnaW4pKSAmJiAobSA9IGMuY2FyZXRQb3MuYmVnaW4gKyAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gXCJcIikgOiBnID0gbC5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChjLCBuLCAhMCwgITEsIGksIG8gKyAxKSwgZyA/ICh2b2lkIDAgIT09IGcucG9zICYmIHUudmFsaWRQb3NpdGlvbnNbZy5wb3NdICYmICEwID09PSB1LnZhbGlkUG9zaXRpb25zW2cucG9zXS5tYXRjaC5zdGF0aWMgJiYgdm9pZCAwID09PSB1LnZhbGlkUG9zaXRpb25zW2cucG9zXS5hbHRlcm5hdGlvbiAmJiAoay5wdXNoKGcucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pc1JUTCB8fCAoZy5mb3J3YXJkUG9zaXRpb24gPSBnLnBvcyArIDEpKSwgZC5jYWxsKGMsIHZvaWQgMCwgci5nZXRCdWZmZXIuY2FsbChjKSwgZy5mb3J3YXJkUG9zaXRpb24sIG4sICExKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5jYXJldFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGcuZm9yd2FyZFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGcuZm9yd2FyZFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgYiA9IGMuY2FyZXRQb3MpIDogdm9pZCAwID09PSB1LnZhbGlkUG9zaXRpb25zW3RdICYmIGhbdF0gPT09IGEuZ2V0UGxhY2Vob2xkZXIuY2FsbChjLCB0KSAmJiByLmlzTWFzay5jYWxsKGMsIHQsICEwKSA/IGMuY2FyZXRQb3MuYmVnaW4rKyA6IGMuY2FyZXRQb3MgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSksIGsubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHgsIFAsIHcgPSByLnNlZWtOZXh0LmNhbGwoYywgLTEsIHZvaWQgMCwgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvLmlzQ29tcGxldGUuY2FsbChjLCByLmdldEJ1ZmZlci5jYWxsKGMpKSAmJiBrLmxlbmd0aCA8PSB3IHx8IG8uaXNDb21wbGV0ZS5jYWxsKGMsIHIuZ2V0QnVmZmVyLmNhbGwoYykpICYmIGsubGVuZ3RoID4gMCAmJiBrLmxlbmd0aCAhPT0gdyAmJiAwID09PSBrWzBdKSBmb3IgKHZhciBTID0gdzsgdm9pZCAwICE9PSAoeCA9IGsuc2hpZnQoKSk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBNID0gbmV3IHAuRXZlbnQoXCJfY2hlY2t2YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChQID0gdS52YWxpZFBvc2l0aW9uc1t4XSkuZ2VuZXJhdGVkSW5wdXQgPSAhMCwgTS5rZXkgPSBQLmlucHV0LCAoZyA9IGwuRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoYywgTSwgITAsICExLCBpLCBTKSkgJiYgdm9pZCAwICE9PSBnLnBvcyAmJiBnLnBvcyAhPT0geCAmJiB1LnZhbGlkUG9zaXRpb25zW2cucG9zXSAmJiAhMCA9PT0gdS52YWxpZFBvc2l0aW9uc1tnLnBvc10ubWF0Y2guc3RhdGljKSBrLnB1c2goZy5wb3MpOyBlbHNlIGlmICghZykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgZC5jYWxsKGMsIGUsIHIuZ2V0QnVmZmVyLmNhbGwoYyksIGcgPyBnLmZvcndhcmRQb3NpdGlvbiA6IGMuY2FyZXRQb3MuYmVnaW4sIHMgfHwgbmV3IHAuRXZlbnQoXCJjaGVja3ZhbFwiKSwgcyAmJiAoXCJpbnB1dFwiID09PSBzLnR5cGUgJiYgYy51bmRvVmFsdWUgIT09IHIuZ2V0QnVmZmVyLmNhbGwoYykuam9pbihcIlwiKSB8fCBcInBhc3RlXCIgPT09IHMudHlwZSkpLCBcbiAgICAgICAgICAgICAgICAgICAgZi5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlLCB0LCBpLCBhLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gZSA/IGUuaW5wdXRtYXNrIDogdGhpcywgYyA9IGwub3B0cywgdSA9IGwuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBjLm9uQmVmb3JlV3JpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gYy5vbkJlZm9yZVdyaXRlLmNhbGwobCwgYSwgdCwgaSwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmLnJlZnJlc2hGcm9tQnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gZi5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5yZWZyZXNoRnJvbUJ1ZmZlci5jYWxsKGwsICEwID09PSBkID8gZCA6IGQuc3RhcnQsIGQuZW5kLCBmLmJ1ZmZlciB8fCB0KSwgdCA9IHIuZ2V0QnVmZmVyLmNhbGwobCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGkgJiYgKGkgPSB2b2lkIDAgIT09IGYuY2FyZXQgPyBmLmNhcmV0IDogaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSAmJiAoZS5pbnB1dG1hc2suX3ZhbHVlU2V0KHQuam9pbihcIlwiKSksIHZvaWQgMCA9PT0gaSB8fCB2b2lkIDAgIT09IGEgJiYgXCJibHVyXCIgPT09IGEudHlwZSB8fCByLmNhcmV0LmNhbGwobCwgZSwgaSwgdm9pZCAwLCB2b2lkIDAsIHZvaWQgMCAhPT0gYSAmJiBcImtleWRvd25cIiA9PT0gYS50eXBlICYmIChhLmtleSA9PT0gbi5rZXlzLkRlbGV0ZSB8fCBhLmtleSA9PT0gbi5rZXlzLkJhY2tzcGFjZSkpLCBcbiAgICAgICAgICAgICAgICAgICAgITAgPT09IHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHUoZSksIGggPSBlLmlucHV0bWFzay5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLnNraXBJbnB1dEV2ZW50ID0gITAsIHAudHJpZ2dlcihcImlucHV0XCIpLCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID09PSByLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwobCkuam9pbihcIlwiKSA/IHAudHJpZ2dlcihcImNsZWFyZWRcIikgOiAhMCA9PT0gby5pc0NvbXBsZXRlLmNhbGwobCwgdCkgJiYgcC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjM5NDogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSgxNTcpLCBhID0gbShpKDQ5NjMpKSwgciA9IG0oaSg5MzgwKSksIG8gPSBpKDIzOTEpLCBzID0gaSg0NzEzKSwgbCA9IGkoODcxMSksIGMgPSBpKDcyMTUpLCB1ID0gaSg3NzYwKSwgZiA9IGkoOTcxNiksIGQgPSBtKGkoNzM5MikpLCBwID0gbShpKDM5NzYpKSwgaCA9IG0oaSg4NzQxKSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIHYoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG0oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZyA9IHIuZGVmYXVsdC5kb2N1bWVudCwgeSA9IFwiX2lucHV0bWFza19vcHRzXCI7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gayhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBrKSkgcmV0dXJuIG5ldyBrKGUsIHQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBlbmRlbmN5TGliID0gYS5kZWZhdWx0LCB0aGlzLmVsID0gdm9pZCAwLCB0aGlzLmV2ZW50cyA9IHt9LCB0aGlzLm1hc2tzZXQgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IGkgJiYgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSA/IHQgPSBlIDogKHQgPSB0IHx8IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgJiYgKHQuYWxpYXMgPSBlKSksIHRoaXMub3B0cyA9IGEuZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0aGlzLmRlZmF1bHRzLCB0KSwgdGhpcy5ub01hc2tzQ2FjaGUgPSB0ICYmIHZvaWQgMCAhPT0gdC5kZWZpbml0aW9ucywgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJPcHRpb25zID0gdCB8fCB7fSwgYih0aGlzLm9wdHMuYWxpYXMsIHQsIHRoaXMub3B0cykpLCB0aGlzLnJlZnJlc2hWYWx1ZSA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb1ZhbHVlID0gdm9pZCAwLCB0aGlzLiRlbCA9IHZvaWQgMCwgdGhpcy5za2lwSW5wdXRFdmVudCA9ICExLCB0aGlzLnZhbGlkYXRpb25FdmVudCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWdub3JhYmxlID0gITEsIHRoaXMubWF4TGVuZ3RoLCB0aGlzLm1vdXNlRW50ZXIgPSAhMSwgdGhpcy5jbGlja2VkID0gMCwgdGhpcy5vcmlnaW5hbFBsYWNlaG9sZGVyID0gdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDb21wb3NpbmcgPSAhMSwgdGhpcy5oYXNBbHRlcm5hdG9yID0gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gay5wcm90b3R5cGUuYWxpYXNlc1tlXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPyAobi5hbGlhcyAmJiBiKG4uYWxpYXMsIHZvaWQgMCwgaSksIGEuZGVmYXVsdC5leHRlbmQoITAsIGksIG4pLCBhLmRlZmF1bHQuZXh0ZW5kKCEwLCBpLCB0KSwgXG4gICAgICAgICAgICAgICAgICAgICEwKSA6IChudWxsID09PSBpLm1hc2sgJiYgKGkubWFzayA9IGUpLCAhMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhQXR0cmlidXRlOiBcImRhdGEtaW5wdXRtYXNrXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRzOiBwLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiBkLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIGFsaWFzZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBtYXNrc0NhY2hlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0IGlzUlRMKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5pc1JUTCB8fCB0aGlzLm9wdHMubnVtZXJpY0lucHV0O1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IGcuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgZy5xdWVyeVNlbGVjdG9yQWxsKGUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAoZSA9IGUubm9kZU5hbWUgPyBbIGUgXSA6IEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW10uc2xpY2UuY2FsbChlKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gYS5kZWZhdWx0LmV4dGVuZCghMCwge30sIHQub3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbyh0LCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFwiXCIgPT09IG4gPyB0IDogbiArIFwiLVwiICsgdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IChhID0gdm9pZCAwICE9PSBhID8gYSA6IGUuZ2V0QXR0cmlidXRlKG8pKSAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgYSAmJiAoMCA9PT0gdC5pbmRleE9mKFwib25cIikgPyBhID0gci5kZWZhdWx0W2FdIDogXCJmYWxzZVwiID09PSBhID8gYSA9ICExIDogXCJ0cnVlXCIgPT09IGEgJiYgKGEgPSAhMCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlbdF0gPSBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHQuaW1wb3J0RGF0YUF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzLCBsLCBjLCB1LCBmID0gZS5nZXRBdHRyaWJ1dGUobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZiAmJiBcIlwiICE9PSBmICYmIChmID0gZi5yZXBsYWNlKC8nL2csICdcIicpLCBsID0gSlNPTi5wYXJzZShcIntcIiArIGYgKyBcIn1cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwpIGZvciAodSBpbiBjID0gdm9pZCAwLCBsKSBpZiAoXCJhbGlhc1wiID09PSB1LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gbFt1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocyBpbiBvKFwiYWxpYXNcIiwgYyksIGkuYWxpYXMgJiYgYihpLmFsaWFzLCBpLCB0KSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsKSBmb3IgKHUgaW4gYyA9IHZvaWQgMCwgbCkgaWYgKHUudG9Mb3dlckNhc2UoKSA9PT0gcy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsW3VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyhzLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kKCEwLCB0LCBpKSwgKFwicnRsXCIgPT09IGUuZGlyIHx8IHQucmlnaHRBbGlnbikgJiYgKGUuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwicnRsXCIgPT09IGUuZGlyIHx8IHQubnVtZXJpY0lucHV0KSAmJiAoZS5kaXIgPSBcImx0clwiLCBlLnJlbW92ZUF0dHJpYnV0ZShcImRpclwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaXNSVEwgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhpKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlLCBzLCBhLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdC51c2VyT3B0aW9ucyksIHQuZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHMsIHQubm9NYXNrc0NhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBsICYmICh2b2lkIDAgIT09IGUuaW5wdXRtYXNrICYmIChlLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgZS5pbnB1dG1hc2sucmVtb3ZlKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgPSBuZXcgayh2b2lkIDAsIHZvaWQgMCwgITApLCBlLmlucHV0bWFzay5vcHRzID0gcywgZS5pbnB1dG1hc2subm9NYXNrc0NhY2hlID0gdC5ub01hc2tzQ2FjaGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay51c2VyT3B0aW9ucyA9IGEuZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0LnVzZXJPcHRpb25zKSwgZS5pbnB1dG1hc2suZWwgPSBlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2suJGVsID0gKDAsIGEuZGVmYXVsdCkoZSksIGUuaW5wdXRtYXNrLm1hc2tzZXQgPSBsLCBhLmRlZmF1bHQuZGF0YShlLCB5LCB0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4ubWFzay5jYWxsKGUuaW5wdXRtYXNrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlICYmIGVbMF0gJiYgZVswXS5pbnB1dG1hc2sgfHwgdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IHRoaXMub3B0c1tlXSA6IFwib2JqZWN0XCIgPT09IHYoZSkgPyAoYS5kZWZhdWx0LmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSB0ICYmIHRoaXMubWFzayh0aGlzLmVsKSwgdGhpcykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVubWFza2VkdmFsdWU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuZWwgfHwgdm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrICYmIHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0aGlzLm9wdHMpIHx8IGUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUuY2hlY2tWYWwuY2FsbCh0aGlzLCB2b2lkIDAsICExLCAhMSwgdCksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUgJiYgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUuY2FsbCh0aGlzLCB2b2lkIDAsIGwuZ2V0QnVmZmVyLmNhbGwodGhpcyksIDAsIHRoaXMub3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdS51bm1hc2tlZHZhbHVlLmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5kYXRhKHRoaXMuZWwsIHksIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcHRzLmF1dG9Vbm1hc2sgPyAoMCwgdS51bm1hc2tlZHZhbHVlKSh0aGlzLmVsKSA6IHRoaXMuX3ZhbHVlR2V0KHRoaXMub3B0cy5hdXRvVW5tYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlICE9PSBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcykuam9pbihcIlwiKSA/IHRoaXMuX3ZhbHVlU2V0KGUsIHRoaXMub3B0cy5hdXRvVW5tYXNrKSA6IHRoaXMuX3ZhbHVlU2V0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLkV2ZW50UnVsZXIub2ZmKHRoaXMuZWwpLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuZWwpLCBcInZhbHVlXCIpICYmIHRoaXMuX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbCwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogdGhpcy5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHRoaXMuX192YWx1ZVNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogZy5fX2xvb2t1cEdldHRlcl9fICYmIHRoaXMuZWwuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpICYmIHRoaXMuX192YWx1ZUdldCAmJiAodGhpcy5lbC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlR2V0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlU2V0KSksIHRoaXMuZWwuaW5wdXRtYXNrID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldGVtcHR5bWFzazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuaXNSVEwgPyBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcykucmV2ZXJzZSgpIDogbC5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHRoaXMpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmlzQ29tcGxldGUuY2FsbCh0aGlzLCBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5tYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gcy5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgMCwgITEpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldC5tZXRhZGF0YS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lm1hc2sgIT09IGUgfHwgKGUgPSB0LCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldC5tZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgJiYgdGhpcy5vcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIGUsIHRoaXMub3B0cykgfHwgZSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlID0gdGhpcy5pc1JUTCA/IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLCBuID0gbC5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKHRoaXMpLCBhID0gaS5sZW5ndGggLSAxOyBhID4gbiAmJiAhbC5pc01hc2suY2FsbCh0aGlzLCBhKTsgYS0tKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5zcGxpY2UobiwgYSArIDEgLSBuKSwgYy5pc0NvbXBsZXRlLmNhbGwodGhpcywgaSkgJiYgZSA9PT0gKHRoaXMuaXNSVEwgPyBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBsLmdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAoXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrICYmIHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCBlLCB0aGlzLm9wdHMpIHx8IGUpLnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdS5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITAsICExLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5pc1JUTCA/IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLmdldG1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBuO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbCAmJiAoMCwgYS5kZWZhdWx0KSh0aGlzLmVsKS50cmlnZ2VyKFwic2V0dmFsdWVcIiwgWyBlIF0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbmFseXNlTWFzazogby5hbmFseXNlTWFza1xuICAgICAgICAgICAgICAgIH0sIGsuZXh0ZW5kRGVmYXVsdHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmQoITAsIGsucHJvdG90eXBlLmRlZmF1bHRzLCBlKTtcbiAgICAgICAgICAgICAgICB9LCBrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kKCEwLCBrLnByb3RvdHlwZS5kZWZpbml0aW9ucywgZSk7XG4gICAgICAgICAgICAgICAgfSwgay5leHRlbmRBbGlhc2VzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kKCEwLCBrLnByb3RvdHlwZS5hbGlhc2VzLCBlKTtcbiAgICAgICAgICAgICAgICB9LCBrLmZvcm1hdCA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGsodCkuZm9ybWF0KGUsIGkpO1xuICAgICAgICAgICAgICAgIH0sIGsudW5tYXNrID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gayh0KS51bm1hc2tlZHZhbHVlKGUpO1xuICAgICAgICAgICAgICAgIH0sIGsuaXNWYWxpZCA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGsodCkuaXNWYWxpZChlKTtcbiAgICAgICAgICAgICAgICB9LCBrLnJlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IGcuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgZy5xdWVyeVNlbGVjdG9yQWxsKGUpKSwgKGUgPSBlLm5vZGVOYW1lID8gWyBlIF0gOiBlKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayAmJiBlLmlucHV0bWFzay5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sIGsuc2V0VmFsdWUgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgJiYgKGUgPSBnLmdldEVsZW1lbnRCeUlkKGUpIHx8IGcucXVlcnlTZWxlY3RvckFsbChlKSksIChlID0gZS5ub2RlTmFtZSA/IFsgZSBdIDogZSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgPyBlLmlucHV0bWFzay5zZXRWYWx1ZSh0KSA6ICgwLCBhLmRlZmF1bHQpKGUpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIHQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LCBrLmRlcGVuZGVuY3lMaWIgPSBhLmRlZmF1bHQsIHIuZGVmYXVsdC5JbnB1dG1hc2sgPSBrO1xuICAgICAgICAgICAgICAgIHZhciB4ID0gaztcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSB4O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDUyOTY6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgbihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBoKGkoOTM4MCkpLCByID0gaChpKDIzOTQpKSwgbyA9IGgoaSg4NzQxKSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYS5lbnVtZXJhYmxlID0gYS5lbnVtZXJhYmxlIHx8ICExLCBhLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gYSAmJiAoYS53cml0YWJsZSA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgKHIgPSBhLmtleSwgbyA9IHZvaWQgMCwgbyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gbihlKSB8fCBudWxsID09PSBlKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGVbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5jYWxsKGUsIHQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gbihhKSkgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcInN0cmluZ1wiID09PSB0ID8gU3RyaW5nIDogTnVtYmVyKShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0ociwgXCJzdHJpbmdcIiksIFwic3ltYm9sXCIgPT09IG4obykgPyBvIDogU3RyaW5nKG8pKSwgYSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHIsIG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGYoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIGEgPSBwKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHAodGhpcykuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFJlZmxlY3QuY29uc3RydWN0KGEsIGFyZ3VtZW50cywgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaSA9IGEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgKFwib2JqZWN0XCIgPT09IG4odCkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGUpIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGhpcywgaSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgTWFwID8gbmV3IE1hcCA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gZSB8fCAoaSA9IGUsIC0xID09PSBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGkpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5oYXMoZSkpIHJldHVybiB0LmdldChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LnNldChlLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUoZSwgYXJndW1lbnRzLCBwKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBkKG4sIGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBjKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHUgPSBmKCkgPyBSZWZsZWN0LmNvbnN0cnVjdC5iaW5kKCkgOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFsgbnVsbCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5wdXNoLmFwcGx5KG4sIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBuZXcgKEZ1bmN0aW9uLmJpbmQuYXBwbHkoZSwgbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgJiYgZChhLCBpLnByb3RvdHlwZSksIGE7XG4gICAgICAgICAgICAgICAgICAgIH0sIHUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCAoZnVuY3Rpb24oKSB7fSkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZCA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5fX3Byb3RvX18gPSB0LCBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBkKGUsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgcChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2ID0gYS5kZWZhdWx0LmRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGlmIChvLmRlZmF1bHQgJiYgdiAmJiB2LmhlYWQgJiYgdi5oZWFkLmF0dGFjaFNoYWRvdyAmJiBhLmRlZmF1bHQuY3VzdG9tRWxlbWVudHMgJiYgdm9pZCAwID09PSBhLmRlZmF1bHQuY3VzdG9tRWxlbWVudHMuZ2V0KFwiaW5wdXQtbWFza1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCAmJiBudWxsICE9PSB0KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQgJiYgdC5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCB0ICYmIGQoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KG8sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQsIGksIG4sIGEgPSBsKG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0aGlzLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IChlID0gYS5jYWxsKHRoaXMpKS5nZXRBdHRyaWJ1dGVOYW1lcygpLCBpID0gZS5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcImNsb3NlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG4gPSB2LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzIGluIG4udHlwZSA9IFwidGV4dFwiLCBpLmFwcGVuZENoaWxkKG4pLCB0KSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCwgcykgJiYgbi5zZXRBdHRyaWJ1dGUodFtzXSwgZS5nZXRBdHRyaWJ1dGUodFtzXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gbmV3IHIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5kYXRhQXR0cmlidXRlID0gXCJcIiwgbC5tYXNrKG4pLCBuLmlucHV0bWFzay5zaGFkb3dSb290ID0gaSwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gbywgaSAmJiBzKHQucHJvdG90eXBlLCBpKSwgbiAmJiBzKHQsIG4pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0oYyhIVE1MRWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaW5wdXQtbWFza1wiLCBtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjgzOTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbnVsbCA9PSBlID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHIsIG8sIHMgPSBbXSwgbCA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSAoaSA9IGkuY2FsbChlKSkubmV4dCwgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChpKSAhPT0gaSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShsID0gKG4gPSByLmNhbGwoaSkpLmRvbmUpICYmIChzLnB1c2gobi52YWx1ZSksIHMubGVuZ3RoICE9PSB0KTsgbCA9ICEwKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gITAsIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwgJiYgbnVsbCAhPSBpLnJldHVybiAmJiAobyA9IGkucmV0dXJuKCksIE9iamVjdChvKSAhPT0gbykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiBuKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gaSAmJiBlLmNvbnN0cnVjdG9yICYmIChpID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBpIHx8IFwiU2V0XCIgPT09IGkpIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IGkgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSkpIHJldHVybiBuKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBuKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5ldyBBcnJheSh0KTsgaSA8IHQ7IGkrKykgbltpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQua2V5cyA9IHQua2V5Q29kZSA9IHZvaWQgMCwgdC50b0tleSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJbZV0gfHwgKHQgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpIDogU3RyaW5nLmZyb21DaGFyQ29kZShlKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICB9LCB0LnRvS2V5Q29kZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbZV07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICAgICAgICAgICAgQWx0R3JhcGg6IDE4LFxuICAgICAgICAgICAgICAgICAgICBBcnJvd0Rvd246IDQwLFxuICAgICAgICAgICAgICAgICAgICBBcnJvd0xlZnQ6IDM3LFxuICAgICAgICAgICAgICAgICAgICBBcnJvd1JpZ2h0OiAzOSxcbiAgICAgICAgICAgICAgICAgICAgQXJyb3dVcDogMzgsXG4gICAgICAgICAgICAgICAgICAgIEJhY2tzcGFjZTogOCxcbiAgICAgICAgICAgICAgICAgICAgQkFDS1NQQUNFX1NBRkFSSTogMTI3LFxuICAgICAgICAgICAgICAgICAgICBDYXBzTG9jazogMjAsXG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZTogNDYsXG4gICAgICAgICAgICAgICAgICAgIEVuZDogMzUsXG4gICAgICAgICAgICAgICAgICAgIEVudGVyOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgRXNjYXBlOiAyNyxcbiAgICAgICAgICAgICAgICAgICAgSG9tZTogMzYsXG4gICAgICAgICAgICAgICAgICAgIEluc2VydDogNDUsXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VEb3duOiAzNCxcbiAgICAgICAgICAgICAgICAgICAgUGFnZVVwOiAzMyxcbiAgICAgICAgICAgICAgICAgICAgU3BhY2U6IDMyLFxuICAgICAgICAgICAgICAgICAgICBUYWI6IDksXG4gICAgICAgICAgICAgICAgICAgIGM6IDY3LFxuICAgICAgICAgICAgICAgICAgICB4OiA4OCxcbiAgICAgICAgICAgICAgICAgICAgejogOTAsXG4gICAgICAgICAgICAgICAgICAgIFNoaWZ0OiAxNixcbiAgICAgICAgICAgICAgICAgICAgQ29udHJvbDogMTcsXG4gICAgICAgICAgICAgICAgICAgIEFsdDogMTgsXG4gICAgICAgICAgICAgICAgICAgIFBhdXNlOiAxOSxcbiAgICAgICAgICAgICAgICAgICAgTWV0YV9MRUZUOiA5MSxcbiAgICAgICAgICAgICAgICAgICAgTWV0YV9SSUdIVDogOTIsXG4gICAgICAgICAgICAgICAgICAgIENvbnRleHRNZW51OiA5MyxcbiAgICAgICAgICAgICAgICAgICAgUHJvY2VzczogMjI5LFxuICAgICAgICAgICAgICAgICAgICBVbmlkZW50aWZpZWQ6IDIyOSxcbiAgICAgICAgICAgICAgICAgICAgRjE6IDExMixcbiAgICAgICAgICAgICAgICAgICAgRjI6IDExMyxcbiAgICAgICAgICAgICAgICAgICAgRjM6IDExNCxcbiAgICAgICAgICAgICAgICAgICAgRjQ6IDExNSxcbiAgICAgICAgICAgICAgICAgICAgRjU6IDExNixcbiAgICAgICAgICAgICAgICAgICAgRjY6IDExNyxcbiAgICAgICAgICAgICAgICAgICAgRjc6IDExOCxcbiAgICAgICAgICAgICAgICAgICAgRjg6IDExOSxcbiAgICAgICAgICAgICAgICAgICAgRjk6IDEyMCxcbiAgICAgICAgICAgICAgICAgICAgRjEwOiAxMjEsXG4gICAgICAgICAgICAgICAgICAgIEYxMTogMTIyLFxuICAgICAgICAgICAgICAgICAgICBGMTI6IDEyM1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdC5rZXlDb2RlID0gYTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IE9iamVjdC5lbnRyaWVzKGEpLnJlZHVjZSgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGkodCwgMiksIGEgPSBuWzBdLCByID0gblsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbcl0gPSB2b2lkIDAgPT09IGVbcl0gPyBhIDogZVtyXSwgZTtcbiAgICAgICAgICAgICAgICB9KSwge30pLCBvID0gT2JqZWN0LmVudHJpZXMoYSkucmVkdWNlKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gaSh0LCAyKSwgYSA9IG5bMF07XG4gICAgICAgICAgICAgICAgICAgIG5bMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlW2FdID0gXCJTcGFjZVwiID09PSBhID8gXCIgXCIgOiBhLCBlO1xuICAgICAgICAgICAgICAgIH0pLCB7fSk7XG4gICAgICAgICAgICAgICAgdC5rZXlzID0gbztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyMzkxOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmFuYWx5c2VNYXNrID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiwgbywgcywgbCwgYywgdSwgZiA9IC8oPzpbPyorXXxcXHtbMC05KypdKyg/OixbMC05KypdKik/KD86XFx8WzAtOSsqXSopP1xcfSl8W14uPyorXiR7W10oKXxcXFxcXSt8Li9nLCBkID0gL1xcW1xcXj9dPyg/OlteXFxcXFxcXV0rfFxcXFxbXFxTXFxzXT8pKl0/fFxcXFwoPzowKD86WzAtM11bMC03XXswLDJ9fFs0LTddWzAtN10/KT98WzEtOV1bMC05XSp8eFswLTlBLUZhLWZdezJ9fHVbMC05QS1GYS1mXXs0fXxjW0EtWmEtel18W1xcU1xcc10/KXxcXCgoPzpcXD9bOj0hXT8pP3woPzpbPyorXXxcXHtbMC05XSsoPzosWzAtOV0qKT9cXH0pXFw/P3xbXi4/KiteJHtbKCl8XFxcXF0rfC4vZywgcCA9ICExLCBoID0gbmV3IGEuZGVmYXVsdCwgdiA9IFtdLCBtID0gW10sIGcgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24geShlLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gdm9pZCAwICE9PSBhID8gYSA6IGUubWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUubWF0Y2hlc1thIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBuLmluZGV4T2YoXCJbXCIpIHx8IHAgJiYgL1xcXFxkfFxcXFxzfFxcXFx3fFxcXFxwL2kudGVzdChuKSB8fCBcIi5cIiA9PT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IGkuY2FzaW5nID8gXCJpXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXlxcXFxwXFx7Lip9JC9pLnRlc3QobikgJiYgKHMgKz0gXCJ1XCIpLCBlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG5ldyBSZWdFeHAobiwgcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHAgJiYgKG4gPSBuW24ubGVuZ3RoIC0gMV0pLCBuLnNwbGl0KFwiXCIpLmZvckVhY2goKGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IGUubWF0Y2hlc1thIC0gMV0sIGUubWF0Y2hlcy5zcGxpY2UoYSsrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogL1thLXpdL2kudGVzdChpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgdCkgPyBuZXcgUmVnRXhwKFwiW1wiICsgKGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCB0KSArIFwiXVwiLCBpLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IG8gPyBcIm1hc3RlclwiIDogby5kZWYgIT09IHQgJiYgITAgIT09IG8uc3RhdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB2b2lkIDAgIT09IGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCA/IHQgOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IChwID8gXCInXCIgOiBcIlwiKSArIHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBpLmRlZmluaXRpb25zICYmIGkuZGVmaW5pdGlvbnNbbl0gfHwgaS51c2VQcm90b3R5cGVEZWZpbml0aW9ucyAmJiByLmRlZmF1bHQucHJvdG90eXBlLmRlZmluaXRpb25zW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgJiYgIXAgPyBlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogbC52YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiBsLnZhbGlkYXRvciA/IG5ldyBSZWdFeHAobC52YWxpZGF0b3IsIGkuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG5ldyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IGwudmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbmV3IFJlZ0V4cChcIi5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYzogbC5zdGF0aWMgfHwgITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBsLm9wdGlvbmFsIHx8ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZPcHRpb25hbGl0eTogbC5vcHRpb25hbCB8fCAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyB8fCBsLm9wdGlvbmFsID8gXCJtYXN0ZXJcIiA6IG8uZGVmICE9PSAobC5kZWZpbml0aW9uU3ltYm9sIHx8IG4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IGwuY2FzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IGwuZGVmaW5pdGlvblN5bWJvbCB8fCBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbC5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWQ6IGwuZ2VuZXJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAoZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IC9bYS16XS9pLnRlc3QoaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IG4pID8gbmV3IFJlZ0V4cChcIltcIiArIChpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgbikgKyBcIl1cIiwgaS5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogdm9pZCAwID09PSBvID8gXCJtYXN0ZXJcIiA6IG8uZGVmICE9PSBuICYmICEwICE9PSBvLnN0YXRpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdm9pZCAwICE9PSBpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgPyBuIDogdm9pZCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IChwID8gXCInXCIgOiBcIlwiKSArIG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcCA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5KGwgPSB2W3YubGVuZ3RoIC0gMV0sIG8pLCBsLmlzQWx0ZXJuYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gdi5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBjLm1hdGNoZXMubGVuZ3RoOyBlKyspIGMubWF0Y2hlc1tlXS5pc0dyb3VwICYmIChjLm1hdGNoZXNbZV0uaXNHcm91cCA9ICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5sZW5ndGggPiAwID8gKGwgPSB2W3YubGVuZ3RoIC0gMV0pLm1hdGNoZXMucHVzaChjKSA6IGgubWF0Y2hlcy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB5KGgsIG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGIoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBuZXcgYS5kZWZhdWx0KCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lm9wZW5Hcm91cCA9ICExLCB0Lm1hdGNoZXMgPSBlLCB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHgoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHMgPSB2LnBvcCgpKS5vcGVuR3JvdXAgPSAhMSwgdm9pZCAwICE9PSBzKSBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsID0gdlt2Lmxlbmd0aCAtIDFdKS5tYXRjaGVzLnB1c2gocyksIGwuaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAoYyA9IHYucG9wKCkpLm1hdGNoZXNbMF0ubWF0Y2hlcyA/IGMubWF0Y2hlc1swXS5tYXRjaGVzLmxlbmd0aCA6IDEsIHQgPSAwOyB0IDwgYy5tYXRjaGVzLmxlbmd0aDsgdCsrKSBjLm1hdGNoZXNbdF0uaXNHcm91cCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tYXRjaGVzW3RdLmFsdGVybmF0b3JHcm91cCA9ICExLCBudWxsID09PSBpLmtlZXBTdGF0aWMgJiYgZSA8IChjLm1hdGNoZXNbdF0ubWF0Y2hlcyA/IGMubWF0Y2hlc1t0XS5tYXRjaGVzLmxlbmd0aCA6IDEpICYmIChpLmtlZXBTdGF0aWMgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gYy5tYXRjaGVzW3RdLm1hdGNoZXMgPyBjLm1hdGNoZXNbdF0ubWF0Y2hlcy5sZW5ndGggOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lmxlbmd0aCA+IDAgPyAobCA9IHZbdi5sZW5ndGggLSAxXSkubWF0Y2hlcy5wdXNoKGMpIDogaC5tYXRjaGVzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGgubWF0Y2hlcy5wdXNoKHMpOyBlbHNlIGsoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBQKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmlzUXVhbnRpZmllciAmJiAodCA9IGIoWyBlLnBvcCgpLCB0IF0pKSwgdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ICYmIChpLm9wdGlvbmFsbWFya2VyWzBdID0gdm9pZCAwLCBpLm9wdGlvbmFsbWFya2VyWzFdID0gdm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7biA9IHQgPyBkLmV4ZWMoZSkgOiBmLmV4ZWMoZSk7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gPSBuWzBdLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwiezAsMX1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gXCJ7XCIgKyBvICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwifFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gdi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gYihoLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy5vcGVuR3JvdXAgPSAhMCwgdi5wdXNoKHcpLCBoLm1hdGNoZXMgPSBbXSwgZyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlxcXFxkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcIlswLTldXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXHBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyArPSBkLmV4ZWMoZSlbMF0sIG8gKz0gZC5leGVjKGUpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwKSBrKCk7IGVsc2Ugc3dpdGNoIChvLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgfHwgaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5lc2NhcGVDaGFyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgPSAhMCwgdCAmJiBrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLm9wdGlvbmFsbWFya2VyWzFdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkuZ3JvdXBtYXJrZXJbMV06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5vcHRpb25hbG1hcmtlclswXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnB1c2gobmV3IGEuZGVmYXVsdCghMSwgITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkuZ3JvdXBtYXJrZXJbMF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5wdXNoKG5ldyBhLmRlZmF1bHQoITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkucXVhbnRpZmllcm1hcmtlclswXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUyA9IG5ldyBhLmRlZmF1bHQoITEsICExLCAhMCksIE0gPSAobyA9IG8ucmVwbGFjZSgvW3t9P10vZywgXCJcIikpLnNwbGl0KFwifFwiKSwgXyA9IE1bMF0uc3BsaXQoXCIsXCIpLCBPID0gaXNOYU4oX1swXSkgPyBfWzBdIDogcGFyc2VJbnQoX1swXSksIEUgPSAxID09PSBfLmxlbmd0aCA/IE8gOiBpc05hTihfWzFdKSA/IF9bMV0gOiBwYXJzZUludChfWzFdKSwgVCA9IGlzTmFOKE1bMV0pID8gTVsxXSA6IHBhcnNlSW50KE1bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKlwiICE9PSBPICYmIFwiK1wiICE9PSBPIHx8IChPID0gXCIqXCIgPT09IEUgPyAwIDogMSksIFMucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGppdDogVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSB2Lmxlbmd0aCA+IDAgPyB2W3YubGVuZ3RoIC0gMV0ubWF0Y2hlcyA6IGgubWF0Y2hlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IGoucG9wKCkpLmlzR3JvdXAgfHwgKG4gPSBiKFsgbiBdKSksIGoucHVzaChuKSwgai5wdXNoKFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5hbHRlcm5hdG9ybWFya2VyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSAobCA9IHZbdi5sZW5ndGggLSAxXSkubWF0Y2hlc1tsLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUgPSBsLm9wZW5Hcm91cCAmJiAodm9pZCAwID09PSBBLm1hdGNoZXMgfHwgITEgPT09IEEuaXNHcm91cCAmJiAhMSA9PT0gQS5pc0FsdGVybmF0b3IpID8gdi5wb3AoKSA6IFAobC5tYXRjaGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdSA9IFAoaC5tYXRjaGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodS5pc0FsdGVybmF0b3IpIHYucHVzaCh1KTsgZWxzZSBpZiAodS5hbHRlcm5hdG9yR3JvdXAgPyAoYyA9IHYucG9wKCksIHUuYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYyA9IG5ldyBhLmRlZmF1bHQoITEsICExLCAhMSwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1hdGNoZXMucHVzaCh1KSwgdi5wdXNoKGMpLCB1Lm9wZW5Hcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1Lm9wZW5Hcm91cCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRCA9IG5ldyBhLmRlZmF1bHQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBELmFsdGVybmF0b3JHcm91cCA9ICEwLCB2LnB1c2goRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGcgJiYgeCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDt2Lmxlbmd0aCA+IDA7ICkgcyA9IHYucG9wKCksIGgubWF0Y2hlcy5wdXNoKHMpO1xuICAgICAgICAgICAgICAgICAgICBoLm1hdGNoZXMubGVuZ3RoID4gMCAmJiAoIWZ1bmN0aW9uIGUobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbiAmJiBuLm1hdGNoZXMgJiYgbi5tYXRjaGVzLmZvckVhY2goKGZ1bmN0aW9uKGEsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IG4ubWF0Y2hlc1tyICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZvaWQgMCA9PT0gbyB8fCB2b2lkIDAgPT09IG8ubWF0Y2hlcyB8fCAhMSA9PT0gby5pc1F1YW50aWZpZXIpICYmIGEgJiYgYS5pc0dyb3VwICYmIChhLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCB8fCAoeShhLCBpLmdyb3VwbWFya2VyWzBdLCAwKSwgITAgIT09IGEub3Blbkdyb3VwICYmIHkoYSwgaS5ncm91cG1hcmtlclsxXSkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZShhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfShoKSwgbS5wdXNoKGgpKTtcbiAgICAgICAgICAgICAgICAgICAgKGkubnVtZXJpY0lucHV0IHx8IGkuaXNSVEwpICYmIGZ1bmN0aW9uIGUodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiB0Lm1hdGNoZXMgPSB0Lm1hdGNoZXMucmV2ZXJzZSgpLCB0Lm1hdGNoZXMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodC5tYXRjaGVzLCBuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gcGFyc2VJbnQobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQubWF0Y2hlc1tuXS5pc1F1YW50aWZpZXIgJiYgdC5tYXRjaGVzW2EgKyAxXSAmJiB0Lm1hdGNoZXNbYSArIDFdLmlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0Lm1hdGNoZXNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubWF0Y2hlcy5zcGxpY2UobiwgMSksIHQubWF0Y2hlcy5zcGxpY2UoYSArIDEsIDAsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHQubWF0Y2hlc1tuXS5tYXRjaGVzID8gdC5tYXRjaGVzW25dID0gZSh0Lm1hdGNoZXNbbl0pIDogdC5tYXRjaGVzW25dID0gKChvID0gdC5tYXRjaGVzW25dKSA9PT0gaS5vcHRpb25hbG1hcmtlclswXSA/IG8gPSBpLm9wdGlvbmFsbWFya2VyWzFdIDogbyA9PT0gaS5vcHRpb25hbG1hcmtlclsxXSA/IG8gPSBpLm9wdGlvbmFsbWFya2VyWzBdIDogbyA9PT0gaS5ncm91cG1hcmtlclswXSA/IG8gPSBpLmdyb3VwbWFya2VyWzFdIDogbyA9PT0gaS5ncm91cG1hcmtlclsxXSAmJiAobyA9IGkuZ3JvdXBtYXJrZXJbMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0obVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgICAgIH0sIHQuZ2VuZXJhdGVNYXNrU2V0ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYShlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHQucmVwZWF0LCBuID0gdC5ncm91cG1hcmtlciwgYSA9IHQucXVhbnRpZmllcm1hcmtlciwgciA9IHQua2VlcFN0YXRpYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCB8fCBcIipcIiA9PT0gaSB8fCBcIitcIiA9PT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gXCIqXCIgPT09IGkgPyAwIDogXCIrXCIgPT09IGkgPyAxIDogaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gblswXSArIGUgKyBuWzFdICsgYVswXSArIGwgKyBcIixcIiArIGkgKyBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlLm1hdGNoKG5ldyBSZWdFeHAoXCIoLilcXFxcWyhbXlxcXFxdXSopXFxcXF1cIiwgXCJnXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjICYmIGMuZm9yRWFjaCgoZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBudWxsID09IGUgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCByLCBvLCBzID0gW10sIGwgPSAhMCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSAoaSA9IGkuY2FsbChlKSkubmV4dCwgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoaSkgIT09IGkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShsID0gKG4gPSByLmNhbGwoaSkpLmRvbmUpICYmIChzLnB1c2gobi52YWx1ZSksIHMubGVuZ3RoICE9PSB0KTsgbCA9ICEwKSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMCwgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbCAmJiBudWxsICE9IGkucmV0dXJuICYmIChvID0gaS5yZXR1cm4oKSwgT2JqZWN0KG8pICE9PSBvKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIHMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IGkgJiYgZS5jb25zdHJ1Y3RvciAmJiAoaSA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IGkgfHwgXCJTZXRcIiA9PT0gaSkgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQXJndW1lbnRzXCIgPT09IGkgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QoaSkpIHJldHVybiBzKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQuc3BsaXQoXCJbXCIpLCAyKSwgYSA9IG5bMF0sIHIgPSBuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gci5yZXBsYWNlKFwiXVwiLCBcIlwiKSwgZSA9IGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXCIuY29uY2F0KCgwLCBvLmRlZmF1bHQpKGEpLCBcIlxcXFxbXCIpLmNvbmNhdCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uZGVmYXVsdCkociksIFwiXFxcXF1cIikpLCBhLmNoYXJBdCgwKSA9PT0gci5jaGFyQXQoMCkgPyBcIihcIi5jb25jYXQoYSwgXCJ8XCIpLmNvbmNhdChhKS5jb25jYXQociwgXCIpXCIpIDogXCJcIi5jb25jYXQoYSwgXCJbXCIpLmNvbmNhdChyLCBcIl1cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgaSwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMsIGwsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSBlICYmIFwiXCIgIT09IGUgfHwgKChjID0gbnVsbCAhPT0gby5yZWdleCkgPyBlID0gKGUgPSBvLnJlZ2V4KS5yZXBsYWNlKC9eKFxcXikoLiopKFxcJCkkLywgXCIkMlwiKSA6IChjID0gITAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiLipcIikpLCAxID09PSBlLmxlbmd0aCAmJiAhMSA9PT0gby5ncmVlZHkgJiYgMCAhPT0gby5yZXBlYXQgJiYgKG8ucGxhY2Vob2xkZXIgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gYShlLCBvKSwgbCA9IGMgPyBcInJlZ2V4X1wiICsgby5yZWdleCA6IG8ubnVtZXJpY0lucHV0ID8gZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gby5rZWVwU3RhdGljICYmIChsID0gXCJrc19cIiArIG8ua2VlcFN0YXRpYyArIGwpLCB2b2lkIDAgPT09IHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtsXSB8fCAhMCA9PT0gdCA/IChzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuOiByLmRlZmF1bHQucHJvdG90eXBlLmFuYWx5c2VNYXNrKGUsIGMsIG8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYnVmZmVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaml0T2Zmc2V0OiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgITAgIT09IHQgJiYgKHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtsXSA9IHMsIHMgPSBuLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgci5kZWZhdWx0LnByb3RvdHlwZS5tYXNrc0NhY2hlW2xdKSkpIDogcyA9IG4uZGVmYXVsdC5leHRlbmQoITAsIHt9LCByLmRlZmF1bHQucHJvdG90eXBlLm1hc2tzQ2FjaGVbbF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm1hc2sgJiYgKGUubWFzayA9IGUubWFzayhlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUubWFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1hc2subGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IGUua2VlcFN0YXRpYyAmJiAoZS5rZWVwU3RhdGljID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gZS5ncm91cG1hcmtlclswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUuaXNSVEwgPyBlLm1hc2sucmV2ZXJzZSgpIDogZS5tYXNrKS5mb3JFYWNoKChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubGVuZ3RoID4gMSAmJiAoYyArPSBlLmFsdGVybmF0b3JtYXJrZXIpLCB2b2lkIDAgIT09IHQubWFzayAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQubWFzayA/IGMgKz0gdC5tYXNrIDogYyArPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbChjICs9IGUuZ3JvdXBtYXJrZXJbMV0sIGUubWFzaywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm1hc2sgPSBlLm1hc2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSA9IGUubWFzayAmJiB2b2lkIDAgIT09IGUubWFzay5tYXNrICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZS5tYXNrLm1hc2sgPyBsKGUubWFzay5tYXNrLCBlLm1hc2ssIGUpIDogbChlLm1hc2ssIGUubWFzaywgZSk7XG4gICAgICAgICAgICAgICAgICAgIG51bGwgPT09IGUua2VlcFN0YXRpYyAmJiAoZS5rZWVwU3RhdGljID0gITEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBuID0gbChpKDQ5NjMpKSwgYSA9IGwoaSg5Njk1KSksIHIgPSBsKGkoMjM5NCkpLCBvID0gbChpKDcxODQpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgKG51bGwgPT0gdCB8fCB0ID4gZS5sZW5ndGgpICYmICh0ID0gZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IG5ldyBBcnJheSh0KTsgaSA8IHQ7IGkrKykgbltpXSA9IGVbaV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTU3OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0Lm1hc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLCB0ID0gdGhpcy5vcHRzLCBpID0gdGhpcy5lbCwgdSA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9mZihpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRhcmVhXCIgIT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICYmIGkuaWdub3JhYmxlcy5wdXNoKG4ua2V5cy5FbnRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSwgbCA9IFwiaW5wdXRcIiA9PT0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgJiYgaS5zdXBwb3J0c0lucHV0VHlwZS5pbmNsdWRlcyhzKSB8fCB0LmlzQ29udGVudEVkaXRhYmxlIHx8IFwidGV4dGFyZWFcIiA9PT0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwpIGlmIChcImlucHV0XCIgPT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHMpLCBsID0gXCJ0ZXh0XCIgPT09IGMudHlwZSwgYyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbCA9IFwicGFydGlhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExICE9PSBsID8gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzayA/IHRoaXMuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzayA/IHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSA6IC0xICE9PSBhLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZSkgfHwgITAgIT09IGkubnVsbGFibGUgPyAodGhpcy5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMgJiYgaS5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IChlLmlzUlRMID8gci5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKGUsIGEuZ2V0QnVmZmVyLmNhbGwoZSkuc2xpY2UoKSkucmV2ZXJzZSgpIDogci5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKGUsIGEuZ2V0QnVmZmVyLmNhbGwoZSkuc2xpY2UoKSkpLmpvaW4oXCJcIikgOiBuLmNhbGwodGhpcykgOiBcIlwiIDogbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYWxsKHRoaXMsIGUpLCB0aGlzLmlucHV0bWFzayAmJiAoMCwgci5hcHBseUlucHV0VmFsdWUpKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXQuaW5wdXRtYXNrLl9fdmFsdWVHZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBpLm5vVmFsdWVQYXRjaGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpLCBcInZhbHVlXCIpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgJiYgZi5nZXQgJiYgZi5zZXQgPyAobiA9IGYuZ2V0LCBzID0gZi5zZXQsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiBcImlucHV0XCIgIT09IHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICYmIChuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZG9jdW1lbnQuX19sb29rdXBHZXR0ZXJfXyAmJiB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiAobiA9IHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSB0Ll9fbG9va3VwU2V0dGVyX18oXCJ2YWx1ZVwiKSwgdC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgbCksIHQuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQgPSBuLCB0LmlucHV0bWFzay5fX3ZhbHVlU2V0ID0gcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmlucHV0bWFzay5fdmFsdWVHZXQgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5pc1JUTCAmJiAhMCAhPT0gdCA/IG4uY2FsbCh0aGlzLmVsKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IG4uY2FsbCh0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdC5pbnB1dG1hc2suX3ZhbHVlU2V0ID0gZnVuY3Rpb24odCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYWxsKHRoaXMuZWwsIG51bGwgPT0gdCA/IFwiXCIgOiAhMCAhPT0gaSAmJiBlLmlzUlRMID8gdC5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2b2lkIDAgPT09IG4gJiYgKG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1LnZhbEhvb2tzICYmICh2b2lkIDAgPT09IHUudmFsSG9va3NbdF0gfHwgITAgIT09IHUudmFsSG9va3NbdF0uaW5wdXRtYXNrcGF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB1LnZhbEhvb2tzW3RdICYmIHUudmFsSG9va3NbdF0uZ2V0ID8gdS52YWxIb29rc1t0XS5nZXQgOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG8gPSB1LnZhbEhvb2tzW3RdICYmIHUudmFsSG9va3NbdF0uc2V0ID8gdS52YWxIb29rc1t0XS5zZXQgOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLnZhbHVlID0gdCwgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUudmFsSG9va3NbdF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzaykgcmV0dXJuIHQuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4odCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBhLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZSwgdm9pZCAwLCB2b2lkIDAsIHQuaW5wdXRtYXNrLm1hc2tzZXQudmFsaWRQb3NpdGlvbnMpIHx8ICEwICE9PSBpLm51bGxhYmxlID8gciA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG8oZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5pbnB1dG1hc2sgJiYgKDAsIHIuYXBwbHlJbnB1dFZhbHVlKShlLCB0KSwgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtYXNrcGF0Y2g6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LnR5cGUpLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oZSwgXCJtb3VzZWVudGVyXCIsIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsIHQgPSBlLmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgIT0gKGUuaW5wdXRtYXNrLmlzUlRMID8gYS5nZXRCdWZmZXIuY2FsbChlLmlucHV0bWFzaykuc2xpY2UoKS5yZXZlcnNlKCkgOiBhLmdldEJ1ZmZlci5jYWxsKGUuaW5wdXRtYXNrKSkuam9pbihcIlwiKSAmJiAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5hcHBseUlucHV0VmFsdWUpKGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KHQpIDogdC5pbnB1dG1hc2sgPSB2b2lkIDAsIGw7XG4gICAgICAgICAgICAgICAgICAgIH0oaSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbFBsYWNlaG9sZGVyID0gaS5wbGFjZWhvbGRlciwgZS5tYXhMZW5ndGggPSB2b2lkIDAgIT09IGkgPyBpLm1heExlbmd0aCA6IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gZS5tYXhMZW5ndGggJiYgKGUubWF4TGVuZ3RoID0gdm9pZCAwKSwgXCJpbnB1dE1vZGVcIiBpbiBpICYmIG51bGwgPT09IGkuZ2V0QXR0cmlidXRlKFwiaW5wdXRtb2RlXCIpICYmIChpLmlucHV0TW9kZSA9IHQuaW5wdXRtb2RlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuc2V0QXR0cmlidXRlKFwiaW5wdXRtb2RlXCIsIHQuaW5wdXRtb2RlKSksICEwID09PSBmICYmICh0LnNob3dNYXNrT25Gb2N1cyA9IHQuc2hvd01hc2tPbkZvY3VzICYmIC0xID09PSBbIFwiY2MtbnVtYmVyXCIsIFwiY2MtZXhwXCIgXS5pbmRleE9mKGkuYXV0b2NvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzLmlwaG9uZSAmJiAodC5pbnNlcnRNb2RlVmlzdWFsID0gITEsIGkuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgXCJvZmZcIikpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJzdWJtaXRcIiwgYy5FdmVudEhhbmRsZXJzLnN1Ym1pdEV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJyZXNldFwiLCBjLkV2ZW50SGFuZGxlcnMucmVzZXRFdmVudCksIG8uRXZlbnRSdWxlci5vbihpLCBcImJsdXJcIiwgYy5FdmVudEhhbmRsZXJzLmJsdXJFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwiZm9jdXNcIiwgYy5FdmVudEhhbmRsZXJzLmZvY3VzRXZlbnQpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJpbnZhbGlkXCIsIGMuRXZlbnRIYW5kbGVycy5pbnZhbGlkRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcImNsaWNrXCIsIGMuRXZlbnRIYW5kbGVycy5jbGlja0V2ZW50KSwgby5FdmVudFJ1bGVyLm9uKGksIFwibW91c2VsZWF2ZVwiLCBjLkV2ZW50SGFuZGxlcnMubW91c2VsZWF2ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJtb3VzZWVudGVyXCIsIGMuRXZlbnRIYW5kbGVycy5tb3VzZWVudGVyRXZlbnQpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJwYXN0ZVwiLCBjLkV2ZW50SGFuZGxlcnMucGFzdGVFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwiY3V0XCIsIGMuRXZlbnRIYW5kbGVycy5jdXRFdmVudCksIG8uRXZlbnRSdWxlci5vbihpLCBcImNvbXBsZXRlXCIsIHQub25jb21wbGV0ZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwiaW5jb21wbGV0ZVwiLCB0Lm9uaW5jb21wbGV0ZSksIG8uRXZlbnRSdWxlci5vbihpLCBcImNsZWFyZWRcIiwgdC5vbmNsZWFyZWQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSB0LmlucHV0RXZlbnRPbmx5ICYmIG8uRXZlbnRSdWxlci5vbihpLCBcImtleWRvd25cIiwgYy5FdmVudEhhbmRsZXJzLmtleUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAocy5tb2JpbGUgfHwgdC5pbnB1dEV2ZW50T25seSkgJiYgaS5yZW1vdmVBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIiksIG8uRXZlbnRSdWxlci5vbihpLCBcImlucHV0XCIsIGMuRXZlbnRIYW5kbGVycy5pbnB1dEZhbGxCYWNrRXZlbnQpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJzZXR2YWx1ZVwiLCBjLkV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudCksIGEuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKS5qb2luKFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudW5kb1ZhbHVlID0gZS5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSAoaS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gaS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSB8fCAhMSA9PT0gdC5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBkID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHIuYXBwbHlJbnB1dFZhbHVlKShpLCBpLmlucHV0bWFzay5fdmFsdWVHZXQoITApLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IGEuZ2V0QnVmZmVyLmNhbGwoZSkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMSA9PT0gbC5pc0NvbXBsZXRlLmNhbGwoZSwgcCkgJiYgdC5jbGVhckluY29tcGxldGUgJiYgYS5yZXNldE1hc2tTZXQuY2FsbChlKSwgdC5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkICE9PSBpICYmICgtMSA9PT0gYS5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpID8gcCA9IFtdIDogci5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKGUsIHApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCExID09PSB0LmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IHQuc2hvd01hc2tPbkZvY3VzICYmIGQgPT09IGkgfHwgXCJcIiAhPT0gaS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSkgJiYgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIud3JpdGVCdWZmZXIpKGksIHApLCBkID09PSBpICYmIGEuY2FyZXQuY2FsbChlLCBpLCBhLnNlZWtOZXh0LmNhbGwoZSwgYS5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGUpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSgyODM5KSwgYSA9IGkoODcxMSksIHIgPSBpKDc3NjApLCBvID0gaSg5NzE2KSwgcyA9IGkoOTg0NSksIGwgPSBpKDcyMTUpLCBjID0gaSg2MDMwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5Njk1OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSBmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IFtdLCB0aGlzLm9wZW5Hcm91cCA9IGUgfHwgITEsIHRoaXMuYWx0ZXJuYXRvckdyb3VwID0gITEsIHRoaXMuaXNHcm91cCA9IGUgfHwgITEsIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSB0IHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGkgfHwgITEsIHRoaXMuaXNBbHRlcm5hdG9yID0gbiB8fCAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzE5NDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIFwiaW5jbHVkZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdGhpcykgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ0aGlzXCIgaXMgbnVsbCBvciBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBPYmplY3QodGhpcyksIG4gPSBpLmxlbmd0aCA+Pj4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSBuKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMCB8IHQsIHIgPSBNYXRoLm1heChhID49IDAgPyBhIDogbiAtIE1hdGguYWJzKGEpLCAwKTsgciA8IG47ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpW3JdID09PSBlKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTMwMjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBGdW5jdGlvbi5iaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgQXJyYXkucHJvdG90eXBlLnJlZHVjZSksIHQgPSBGdW5jdGlvbi5iaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZSksIGkgPSBGdW5jdGlvbi5iaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgQXJyYXkucHJvdG90eXBlLmNvbmNhdCksIG4gPSBPYmplY3Qua2V5cztcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyB8fCAoT2JqZWN0LmVudHJpZXMgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlKG4oYSksIChmdW5jdGlvbihlLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaShlLCBcInN0cmluZ1wiID09IHR5cGVvZiBuICYmIHQoYSwgbikgPyBbIFsgbiwgYVtuXSBdIF0gOiBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLCBbXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzE0OTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIGUodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YgPSBcIm9iamVjdFwiID09PSBlKFwidGVzdFwiLl9fcHJvdG9fXykgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9fcHJvdG9fXztcbiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDAxMzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyB8fCAoU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCIgIT0gdHlwZW9mIHQgJiYgKHQgPSAwKSwgISh0ICsgZS5sZW5ndGggPiB0aGlzLmxlbmd0aCkgJiYgLTEgIT09IHRoaXMuaW5kZXhPZihlLCB0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA4NzExOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmNhcmV0ID0gZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciwgbyA9IHRoaXMsIHMgPSB0aGlzLm9wdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpIHJldHVybiBcInNlbGVjdGlvblN0YXJ0XCIgaW4gZSAmJiBcInNlbGVjdGlvbkVuZFwiIGluIGUgPyAodCA9IGUuc2VsZWN0aW9uU3RhcnQsIFxuICAgICAgICAgICAgICAgICAgICBpID0gZS5zZWxlY3Rpb25FbmQpIDogd2luZG93LmdldFNlbGVjdGlvbiA/IChyID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCkpLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLnBhcmVudE5vZGUgIT09IGUgJiYgci5jb21tb25BbmNlc3RvckNvbnRhaW5lciAhPT0gZSB8fCAodCA9IHIuc3RhcnRPZmZzZXQsIFxuICAgICAgICAgICAgICAgICAgICBpID0gci5lbmRPZmZzZXQpIDogZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSAmJiAoaSA9ICh0ID0gMCAtIChyID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkpLmR1cGxpY2F0ZSgpLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSkgKyByLnRleHQubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBuID8gdCA6IGMuY2FsbChvLCB0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbiA/IGkgOiBjLmNhbGwobywgaSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodCkgJiYgKGkgPSBvLmlzUlRMID8gdFswXSA6IHRbMV0sIHQgPSBvLmlzUlRMID8gdFsxXSA6IHRbMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0LmJlZ2luICYmIChpID0gby5pc1JUTCA/IHQuYmVnaW4gOiB0LmVuZCwgdCA9IG8uaXNSVEwgPyB0LmVuZCA6IHQuYmVnaW4pLCBcbiAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG4gPyB0IDogYy5jYWxsKG8sIHQpLCBpID0gXCJudW1iZXJcIiA9PSB0eXBlb2YgKGkgPSBuID8gaSA6IGMuY2FsbChvLCBpKSkgPyBpIDogdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gcGFyc2VJbnQoKChlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlID8gKGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoZSwgbnVsbCkgOiBlLmN1cnJlbnRTdHlsZSkuZm9udFNpemUpICogaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnNjcm9sbExlZnQgPSBsID4gZS5zY3JvbGxXaWR0aCA/IGwgOiAwLCBlLmlucHV0bWFzay5jYXJldFBvcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHMuaW5zZXJ0TW9kZVZpc3VhbCAmJiAhMSA9PT0gcy5pbnNlcnRNb2RlICYmIHQgPT09IGkgJiYgKGEgfHwgaSsrKSwgZSA9PT0gKGUuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgZS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50KSBpZiAoXCJzZXRTZWxlY3Rpb25SYW5nZVwiIGluIGUpIGUuc2V0U2VsZWN0aW9uUmFuZ2UodCwgaSk7IGVsc2UgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksIHZvaWQgMCA9PT0gZS5maXJzdENoaWxkIHx8IG51bGwgPT09IGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmFwcGVuZENoaWxkKHUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNldFN0YXJ0KGUuZmlyc3RDaGlsZCwgdCA8IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCA/IHQgOiBlLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNldEVuZChlLmZpcnN0Q2hpbGQsIGkgPCBlLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGggPyBpIDogZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jb2xsYXBzZSghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5yZW1vdmVBbGxSYW5nZXMoKSwgZi5hZGRSYW5nZShyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlLmNyZWF0ZVRleHRSYW5nZSAmJiAoKHIgPSBlLmNyZWF0ZVRleHRSYW5nZSgpKS5jb2xsYXBzZSghMCksIHIubW92ZUVuZChcImNoYXJhY3RlclwiLCBpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICByLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCB0KSwgci5zZWxlY3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0LmRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCwgaSwgciA9IHRoaXMsIHMgPSByLm1hc2tzZXQsIGwgPSByLmRlcGVuZGVuY3lMaWIsIGMgPSBuLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHIsICEwLCBvLmNhbGwociksICEwLCAhMCksIHUgPSBjLmxlbmd0aCwgZiA9IG8uY2FsbChyKSwgZCA9IHt9LCBwID0gcy52YWxpZFBvc2l0aW9uc1tmXSwgaCA9IHZvaWQgMCAhPT0gcCA/IHAubG9jYXRvci5zbGljZSgpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHQgPSBmICsgMTsgdCA8IGMubGVuZ3RoOyB0KyspIGggPSAoaSA9IG4uZ2V0VGVzdFRlbXBsYXRlLmNhbGwociwgdCwgaCwgdCAtIDEpKS5sb2NhdG9yLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICBkW3RdID0gbC5leHRlbmQoITAsIHt9LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBwICYmIHZvaWQgMCAhPT0gcC5hbHRlcm5hdGlvbiA/IHAubG9jYXRvcltwLmFsdGVybmF0aW9uXSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh0ID0gdSAtIDE7IHQgPiBmICYmICgoKGkgPSBkW3RdKS5tYXRjaC5vcHRpb25hbGl0eSB8fCBpLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiBpLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8IHYgJiYgKHYgIT09IGRbdF0ubG9jYXRvcltwLmFsdGVybmF0aW9uXSAmJiAxICE9IGkubWF0Y2guc3RhdGljIHx8ICEwID09PSBpLm1hdGNoLnN0YXRpYyAmJiBpLmxvY2F0b3JbcC5hbHRlcm5hdGlvbl0gJiYgYS5jaGVja0FsdGVybmF0aW9uTWF0Y2guY2FsbChyLCBpLmxvY2F0b3JbcC5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIiksIHYudG9TdHJpbmcoKS5zcGxpdChcIixcIikpICYmIFwiXCIgIT09IG4uZ2V0VGVzdHMuY2FsbChyLCB0KVswXS5kZWYpKSAmJiBjW3RdID09PSBuLmdldFBsYWNlaG9sZGVyLmNhbGwociwgdCwgaS5tYXRjaCkpOyB0LS0pIHUtLTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsOiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBkW3VdID8gZFt1XS5tYXRjaCA6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICB9IDogdTtcbiAgICAgICAgICAgICAgICB9LCB0LmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24gPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcywgYyA9IGEubWFza3NldCwgdSA9IGEub3B0cztcbiAgICAgICAgICAgICAgICAgICAgdCAmJiAoYS5pc1JUTCA/IGUuZW5kID0gZS5iZWdpbiA6IGUuYmVnaW4gPSBlLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmJlZ2luID09PSBlLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpID0gaSB8fCB1LnBvc2l0aW9uQ2FyZXRPbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNlbGVjdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHIuY2FsbChhKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZ25vcmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVuZCA9IGUuYmVnaW4gPSBsLmNhbGwoYSwgby5jYWxsKGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFkaXhGb2N1c1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLmNsaWNrZWQgPiAxICYmIDAgPT0gYy52YWxpZFBvc2l0aW9ucy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSB1LnJhZGl4UG9pbnQgJiYgMCAhPT0gdS5kaWdpdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYy52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHRbZV0gfHwgdFtlXS5pbnB1dCA9PT0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKGEsIGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgPCBsLmNhbGwoYSwgLTEpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSByLmNhbGwoYSkuaW5kZXhPZih1LnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBvID0gMCwgcyA9IHQubGVuZ3RoOyBvIDwgczsgbysrKSBpZiAodFtvXSAmJiBpIDwgbyAmJiB0W29dLmlucHV0ICE9PSBuLmdldFBsYWNlaG9sZGVyLmNhbGwoYSwgbykpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShlLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHIuY2FsbChhKS5qb2luKFwiXCIpLmluZGV4T2YodS5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5lbmQgPSBlLmJlZ2luID0gdS5udW1lcmljSW5wdXQgPyBsLmNhbGwoYSwgZikgOiBmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGUuYmVnaW4sIHAgPSBvLmNhbGwoYSwgZCwgITApLCBoID0gbC5jYWxsKGEsIC0xICE9PSBwIHx8IHMuY2FsbChhLCAwKSA/IHAgOiAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQgPD0gaCkgZS5lbmQgPSBlLmJlZ2luID0gcy5jYWxsKGEsIGQsICExLCAhMCkgPyBkIDogbC5jYWxsKGEsIGQpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBjLnZhbGlkUG9zaXRpb25zW3BdLCBtID0gbi5nZXRUZXN0VGVtcGxhdGUuY2FsbChhLCBoLCB2ID8gdi5tYXRjaC5sb2NhdG9yIDogdm9pZCAwLCB2KSwgZyA9IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChhLCBoLCBtLm1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IGcgJiYgci5jYWxsKGEpW2hdICE9PSBnICYmICEwICE9PSBtLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gbS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhcy5jYWxsKGEsIGgsIHUua2VlcFN0YXRpYywgITApICYmIG0ubWF0Y2guZGVmID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGwuY2FsbChhLCBoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkID49IHkgfHwgZCA9PT0gaCkgJiYgKGggPSB5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVuZCA9IGUuYmVnaW4gPSBoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdC5nZXRCdWZmZXIgPSByLCB0LmdldEJ1ZmZlclRlbXBsYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUuX2J1ZmZlciAmJiAoZS5fYnVmZmVyID0gbi5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMSwgMSksIHZvaWQgMCA9PT0gZS5idWZmZXIgJiYgKGUuYnVmZmVyID0gZS5fYnVmZmVyLnNsaWNlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuX2J1ZmZlcjtcbiAgICAgICAgICAgICAgICB9LCB0LmdldExhc3RWYWxpZFBvc2l0aW9uID0gbywgdC5pc01hc2sgPSBzLCB0LnJlc2V0TWFza1NldCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHQuYnVmZmVyID0gdm9pZCAwLCAhMCAhPT0gZSAmJiAodC52YWxpZFBvc2l0aW9ucyA9IFtdLCB0LnAgPSAwKTtcbiAgICAgICAgICAgICAgICB9LCB0LnNlZWtOZXh0ID0gbCwgdC5zZWVrUHJldmlvdXMgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcywgYSA9IGUgLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSA8PSAwKSByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7YSA+IDAgJiYgKCEwID09PSB0ICYmICghMCAhPT0gbi5nZXRUZXN0LmNhbGwoaSwgYSkubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIXMuY2FsbChpLCBhLCB2b2lkIDAsICEwKSkgfHwgITAgIT09IHQgJiYgIXMuY2FsbChpLCBhLCB2b2lkIDAsICEwKSk7ICkgYS0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgICAgICB9LCB0LnRyYW5zbGF0ZVBvc2l0aW9uID0gYztcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoNDcxMyksIGEgPSBpKDcyMTUpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsIGkgPSB0Lm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IGkuYnVmZmVyICYmICEwICE9PSBlIHx8IChpLmJ1ZmZlciA9IG4uZ2V0TWFza1RlbXBsYXRlLmNhbGwodCwgITAsIG8uY2FsbCh0KSwgITApLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBpLl9idWZmZXIgJiYgKGkuX2J1ZmZlciA9IGkuYnVmZmVyLnNsaWNlKCkpKSwgaS5idWZmZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMubWFza3NldCwgYSA9IC0xLCByID0gLTEsIG8gPSBpIHx8IG4udmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZSAmJiAoZSA9IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDAsIGwgPSBvLmxlbmd0aDsgcyA8IGw7IHMrKykgb1tzXSAmJiAodCB8fCAhMCAhPT0gb1tzXS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHMgPD0gZSAmJiAoYSA9IHMpLCBcbiAgICAgICAgICAgICAgICAgICAgcyA+PSBlICYmIChyID0gcykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgPT09IGEgfHwgYSA9PSBlID8gciA6IC0xID09IHIgfHwgZSAtIGEgPCByIC0gZSA/IGEgOiByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLCByID0gdGhpcy5tYXNrc2V0LCBvID0gbi5nZXRUZXN0VGVtcGxhdGUuY2FsbChhLCBlKS5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IG8uZGVmICYmIChvID0gbi5nZXRUZXN0LmNhbGwoYSwgZSkubWF0Y2gpLCAhMCAhPT0gby5zdGF0aWMpIHJldHVybiBvLmZuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IGkgJiYgdm9pZCAwICE9PSByLnZhbGlkUG9zaXRpb25zW2VdICYmICEwICE9PSByLnZhbGlkUG9zaXRpb25zW2VdLmdlbmVyYXRlZElucHV0KSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gdCAmJiBlID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBuLmdldFRlc3RzLmNhbGwoYSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHMubGVuZ3RoID4gMSArIChcIlwiID09PSBzW3MubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBuLmRldGVybWluZVRlc3RUZW1wbGF0ZS5jYWxsKGEsIGUsIG4uZ2V0VGVzdHMuY2FsbChhLCBlKSksIGMgPSBuLmdldFBsYWNlaG9sZGVyLmNhbGwoYSwgZSwgbC5tYXRjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5tYXRjaC5kZWYgIT09IGM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSBlICsgMTsgXCJcIiAhPT0gbi5nZXRUZXN0LmNhbGwoYSwgcikubWF0Y2guZGVmICYmICghMCA9PT0gdCAmJiAoITAgIT09IG4uZ2V0VGVzdC5jYWxsKGEsIHIpLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFzLmNhbGwoYSwgciwgdm9pZCAwLCAhMCkpIHx8ICEwICE9PSB0ICYmICFzLmNhbGwoYSwgciwgdm9pZCAwLCBpKSk7ICkgcisrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5vcHRzLCBpID0gdGhpcy5lbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzUlRMIHx8IFwibnVtYmVyXCIgIT0gdHlwZW9mIGUgfHwgdC5ncmVlZHkgJiYgXCJcIiA9PT0gdC5wbGFjZWhvbGRlciB8fCAhaSB8fCAoZSA9IHRoaXMuX3ZhbHVlR2V0KCkubGVuZ3RoIC0gZSkgPCAwICYmIChlID0gMCksIFxuICAgICAgICAgICAgICAgICAgICBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0NzEzOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRldGVybWluZVRlc3RUZW1wbGF0ZSA9IGMsIHQuZ2V0RGVjaXNpb25UYWtlciA9IG8sIHQuZ2V0TWFza1RlbXBsYXRlID0gZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMsIG8gPSB0aGlzLm9wdHMsIHUgPSB0aGlzLm1hc2tzZXQsIGYgPSBvLmdyZWVkeTtcbiAgICAgICAgICAgICAgICAgICAgYSAmJiBvLmdyZWVkeSAmJiAoby5ncmVlZHkgPSAhMSwgci5tYXNrc2V0LnRlc3RzID0ge30pO1xuICAgICAgICAgICAgICAgICAgICB0ID0gdCB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCwgaCwgdiwgbSwgZyA9IFtdLCB5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBlICYmIHUudmFsaWRQb3NpdGlvbnNbeV0pIGggPSAodiA9IGEgJiYgdS52YWxpZFBvc2l0aW9uc1t5XS5tYXRjaC5vcHRpb25hbGl0eSAmJiB2b2lkIDAgPT09IHUudmFsaWRQb3NpdGlvbnNbeSArIDFdICYmICghMCA9PT0gdS52YWxpZFBvc2l0aW9uc1t5XS5nZW5lcmF0ZWRJbnB1dCB8fCB1LnZhbGlkUG9zaXRpb25zW3ldLmlucHV0ID09IG8uc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiB5ID4gMCkgPyBjLmNhbGwociwgeSwgZC5jYWxsKHIsIHksIHAsIHkgLSAxKSkgOiB1LnZhbGlkUG9zaXRpb25zW3ldKS5tYXRjaCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gdi5sb2NhdG9yLnNsaWNlKCksIGcucHVzaCghMCA9PT0gaSA/IHYuaW5wdXQgOiAhMSA9PT0gaSA/IGgubmF0aXZlRGVmIDogcy5jYWxsKHIsIHksIGgpKTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9ICh2ID0gbC5jYWxsKHIsIHksIHAsIHkgLSAxKSkubWF0Y2gsIHAgPSB2LmxvY2F0b3Iuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9ICEwICE9PSBuICYmICghMSAhPT0gby5qaXRNYXNraW5nID8gby5qaXRNYXNraW5nIDogaC5qaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtID0gKG0gJiYgaC5zdGF0aWMgJiYgaC5kZWYgIT09IG8uZ3JvdXBTZXBhcmF0b3IgJiYgbnVsbCA9PT0gaC5mbiB8fCB1LnZhbGlkUG9zaXRpb25zW3kgLSAxXSAmJiBoLnN0YXRpYyAmJiBoLmRlZiAhPT0gby5ncm91cFNlcGFyYXRvciAmJiBudWxsID09PSBoLmZuKSAmJiB1LnRlc3RzW3ldKSB8fCAhMSA9PT0gayB8fCB2b2lkIDAgPT09IGsgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgayAmJiBpc0Zpbml0ZShrKSAmJiBrID4geSA/IGcucHVzaCghMSA9PT0gaSA/IGgubmF0aXZlRGVmIDogcy5jYWxsKHIsIGcubGVuZ3RoLCBoKSkgOiBtID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKCEwICE9PSBoLnN0YXRpYyB8fCBcIlwiICE9PSBoLmRlZiB8fCB0ID4geSk7XG4gICAgICAgICAgICAgICAgICAgIFwiXCIgPT09IGdbZy5sZW5ndGggLSAxXSAmJiBnLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAhMSA9PT0gaSAmJiB2b2lkIDAgIT09IHUubWFza0xlbmd0aCB8fCAodS5tYXNrTGVuZ3RoID0geSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5ncmVlZHkgPSBmLCBnO1xuICAgICAgICAgICAgICAgIH0sIHQuZ2V0UGxhY2Vob2xkZXIgPSBzLCB0LmdldFRlc3QgPSB1LCB0LmdldFRlc3RUZW1wbGF0ZSA9IGwsIHQuZ2V0VGVzdHMgPSBkLCB0LmlzU3Vic2V0T2YgPSBmO1xuICAgICAgICAgICAgICAgIHZhciBuLCBhID0gKG4gPSBpKDIzOTQpKSAmJiBuLl9fZXNNb2R1bGUgPyBuIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAobnVsbCAhPSBlLmFsdGVybmF0aW9uID8gZS5tbG9jW28oZSldIDogZS5sb2NhdG9yKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gaSkgZm9yICg7aS5sZW5ndGggPCB0OyApIGkgKz0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLmxvY2F0b3JbZS5hbHRlcm5hdGlvbl07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0ICYmIHQubGVuZ3RoID4gMCAmJiAodCA9IHQuc3BsaXQoXCIsXCIpWzBdKSwgdm9pZCAwICE9PSB0ID8gdC50b1N0cmluZygpIDogXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcyhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5vcHRzLCBhID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSAodCA9IHQgfHwgdS5jYWxsKHRoaXMsIGUpLm1hdGNoKS5wbGFjZWhvbGRlciB8fCAhMCA9PT0gaSkgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdC5wbGFjZWhvbGRlciA/IHQucGxhY2Vob2xkZXIobikgOiB0LnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHQuc3RhdGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA+IC0xICYmIHZvaWQgMCA9PT0gYS52YWxpZFBvc2l0aW9uc1tlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByLCBvID0gZC5jYWxsKHRoaXMsIGUpLCBzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8ubGVuZ3RoID4gMSArIChcIlwiID09PSBvW28ubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApKSBmb3IgKHZhciBsID0gMDsgbCA8IG8ubGVuZ3RoOyBsKyspIGlmIChcIlwiICE9PSBvW2xdLm1hdGNoLmRlZiAmJiAhMCAhPT0gb1tsXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gb1tsXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKCEwID09PSBvW2xdLm1hdGNoLnN0YXRpYyB8fCB2b2lkIDAgPT09IHIgfHwgITEgIT09IG9bbF0ubWF0Y2guZm4udGVzdChyLm1hdGNoLmRlZiwgYSwgZSwgITAsIG4pKSAmJiAocy5wdXNoKG9bbF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gb1tsXS5tYXRjaC5zdGF0aWMgJiYgKHIgPSBvW2xdKSwgcy5sZW5ndGggPiAxICYmIC9bMC05YS1iQS1aXS8udGVzdChzWzBdLm1hdGNoLmRlZikpKSByZXR1cm4gbi5wbGFjZWhvbGRlci5jaGFyQXQoZSAlIG4ucGxhY2Vob2xkZXIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmRlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5wbGFjZWhvbGRlci5jaGFyQXQoZSAlIG4ucGxhY2Vob2xkZXIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQudmFsaWRQb3NpdGlvbnNbZV0gfHwgYy5jYWxsKHRoaXMsIGUsIGQuY2FsbCh0aGlzLCBlLCB0ID8gdC5zbGljZSgpIDogdCwgaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLm9wdHMsIG4gPSAwLCBhID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBuID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm1hdGNoLm9wdGlvbmFsaXR5ICYmICgwICE9PSBpICYmIGkgIT09IGUubWF0Y2gub3B0aW9uYWxpdHkgJiYgKG4gPSAhMCksICgwID09PSBpIHx8IGkgPiBlLm1hdGNoLm9wdGlvbmFsaXR5KSAmJiAoaSA9IGUubWF0Y2gub3B0aW9uYWxpdHkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgaSAmJiAoMCA9PSBlIHx8IDEgPT0gdC5sZW5ndGggPyBpID0gMCA6IG4gfHwgKGkgPSAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGUgPiAwID8gZSAtIDEgOiAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbywgcywgbCwgYyA9IHIodS5jYWxsKHRoaXMsIGUpKTtcbiAgICAgICAgICAgICAgICAgICAgaS5ncmVlZHkgJiYgdC5sZW5ndGggPiAxICYmIFwiXCIgPT09IHRbdC5sZW5ndGggLSAxXS5tYXRjaC5kZWYgJiYgKG4gPSAxKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCB0Lmxlbmd0aCAtIG47IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0W2ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHIoZCwgYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBNYXRoLmFicyhvIC0gYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAodm9pZCAwID09PSBzIHx8IFwiXCIgIT09IG8gJiYgcCA8IHMgfHwgbCAmJiAhaS5ncmVlZHkgJiYgbC5tYXRjaC5vcHRpb25hbGl0eSAmJiBsLm1hdGNoLm9wdGlvbmFsaXR5IC0gYSA+IDAgJiYgXCJtYXN0ZXJcIiA9PT0gbC5tYXRjaC5uZXdCbG9ja01hcmtlciAmJiAoIWQubWF0Y2gub3B0aW9uYWxpdHkgfHwgZC5tYXRjaC5vcHRpb25hbGl0eSAtIGEgPCAxIHx8ICFkLm1hdGNoLm5ld0Jsb2NrTWFya2VyKSB8fCBsICYmICFpLmdyZWVkeSAmJiBsLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhZC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIpICYmIChzID0gcCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkudmFsaWRQb3NpdGlvbnNbZV0gPyBpLnZhbGlkUG9zaXRpb25zW2VdIDogKHQgfHwgZC5jYWxsKHRoaXMsIGUpKVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCwgaSA9IFtdLCBuID0gLTEsIGEgPSAwLCByID0gZS5sZW5ndGg7IGEgPCByOyBhKyspIGlmIChcIi1cIiA9PT0gZS5jaGFyQXQoYSkpIGZvciAodCA9IGUuY2hhckNvZGVBdChhICsgMSk7ICsrbiA8IHQ7ICkgaS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUobikpOyBlbHNlIG4gPSBlLmNoYXJDb2RlQXQoYSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgaS5wdXNoKGUuY2hhckF0KGEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubWF0Y2guZGVmID09PSB0Lm1hdGNoLm5hdGl2ZURlZiB8fCAhKCEoaS5yZWdleCB8fCBlLm1hdGNoLmZuIGluc3RhbmNlb2YgUmVnRXhwICYmIHQubWF0Y2guZm4gaW5zdGFuY2VvZiBSZWdFeHApIHx8ICEwID09PSBlLm1hdGNoLnN0YXRpYyB8fCAhMCA9PT0gdC5tYXRjaC5zdGF0aWMpICYmIC0xICE9PSBuKHQubWF0Y2guZm4udG9TdHJpbmcoKS5yZXBsYWNlKC9bW1xcXS9dL2csIFwiXCIpKS5pbmRleE9mKG4oZS5tYXRjaC5mbi50b1N0cmluZygpLnJlcGxhY2UoL1tbXFxdL10vZywgXCJcIikpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuLCByLCBvID0gdGhpcywgcyA9IHRoaXMuZGVwZW5kZW5jeUxpYiwgbCA9IHRoaXMubWFza3NldCwgdSA9IHRoaXMub3B0cywgZCA9IHRoaXMuZWwsIHAgPSBsLm1hc2tUb2tlbiwgaCA9IHQgPyBpIDogMCwgdiA9IHQgPyB0LnNsaWNlKCkgOiBbIDAgXSwgbSA9IFtdLCBnID0gITEsIHkgPSB0ID8gdC5qb2luKFwiXCIpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gayh0LCBpLCByLCBzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKHIsIHMsIHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2KGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwID09PSB0Lm1hdGNoZXMuaW5kZXhPZihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgfHwgdC5tYXRjaGVzLmV2ZXJ5KChmdW5jdGlvbihuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITAgPT09IG4uaXNRdWFudGlmaWVyID8gaSA9IHYoZSwgdC5tYXRjaGVzW2EgLSAxXSkgOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobiwgXCJtYXRjaGVzXCIpICYmIChpID0gdihlLCBuKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24geChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGwudGVzdHNbZV0gfHwgbC52YWxpZFBvc2l0aW9uc1tlXSkgJiYgKGwudGVzdHNbZV0gfHwgWyBsLnZhbGlkUG9zaXRpb25zW2VdIF0pLmV2ZXJ5KChmdW5jdGlvbihlLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5tbG9jW3RdKSByZXR1cm4gbiA9IGUsICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB2b2lkIDAgIT09IGkgPyBpIDogZS5hbHRlcm5hdGlvbiwgcyA9IHZvaWQgMCAhPT0gZS5sb2NhdG9yW29dID8gZS5sb2NhdG9yW29dLnRvU3RyaW5nKCkuaW5kZXhPZih0KSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2b2lkIDAgPT09IGEgfHwgcyA8IGEpICYmIC0xICE9PSBzICYmIChuID0gZSwgYSA9IHMpLCAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IG4ubG9jYXRvcltuLmFsdGVybmF0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobi5tbG9jW3RdIHx8IG4ubWxvY1tyXSB8fCBuLmxvY2F0b3IpLnNsaWNlKCh2b2lkIDAgIT09IGkgPyBpIDogbi5hbHRlcm5hdGlvbikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwICE9PSBpID8geChlLCB0KSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gUChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5hbHRlcm5hdGlvbiwgbiA9IHZvaWQgMCA9PT0gdCB8fCBpID09PSB0LmFsdGVybmF0aW9uICYmIC0xID09PSBlLmxvY2F0b3JbaV0udG9TdHJpbmcoKS5pbmRleE9mKHQubG9jYXRvcltpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbiAmJiBpID4gdC5hbHRlcm5hdGlvbikgZm9yICh2YXIgYSA9IHQuYWx0ZXJuYXRpb247IGEgPCBpOyBhKyspIGlmIChlLmxvY2F0b3JbYV0gIT09IHQubG9jYXRvclthXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGEsIG4gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm1sb2MgPSBlLm1sb2MgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGUubG9jYXRvcltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgciAmJiAociA9IHIuc3BsaXQoXCIsXCIpWzBdKSwgdm9pZCAwID09PSBlLm1sb2Nbcl0gJiYgKGUubWxvY1tyXSA9IGUubG9jYXRvci5zbGljZSgpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gdC5tbG9jKSBcInN0cmluZ1wiID09IHR5cGVvZiBvICYmIChvID0gby5zcGxpdChcIixcIilbMF0pLCB2b2lkIDAgPT09IGUubWxvY1tvXSAmJiAoZS5tbG9jW29dID0gdC5tbG9jW29dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2NhdG9yW2ldID0gT2JqZWN0LmtleXMoZS5tbG9jKS5qb2luKFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5hbHRlcm5hdGlvbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHcoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5sb2NhdG9yLmxlbmd0aCAhPT0gdC5sb2NhdG9yLmxlbmd0aCkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gZS5hbHRlcm5hdGlvbiArIDE7IGkgPCBlLmxvY2F0b3IubGVuZ3RoOyBpKyspIGlmIChlLmxvY2F0b3JbaV0gIT09IHQubG9jYXRvcltpXSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID4gZSArIHUuX21heFRlc3RQb3MpIHRocm93IFwiSW5wdXRtYXNrOiBUaGVyZSBpcyBwcm9iYWJseSBhbiBlcnJvciBpbiB5b3VyIG1hc2sgZGVmaW5pdGlvbiBvciBpbiB0aGUgY29kZS4gQ3JlYXRlIGFuIGlzc3VlIG9uIGdpdGh1YiB3aXRoIGFuIGV4YW1wbGUgb2YgdGhlIG1hc2sgeW91IGFyZSB1c2luZy4gXCIgKyBsLm1hc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggPT09IGUgJiYgdm9pZCAwID09PSByLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaDogcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IHMucmV2ZXJzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbG9jOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgIXIub3B0aW9uYWxpdHkgfHwgdm9pZCAwICE9PSBwIHx8ICEodS5kZWZpbml0aW9ucyAmJiB1LmRlZmluaXRpb25zW3IubmF0aXZlRGVmXSAmJiB1LmRlZmluaXRpb25zW3IubmF0aXZlRGVmXS5vcHRpb25hbCB8fCBhLmRlZmF1bHQucHJvdG90eXBlLmRlZmluaXRpb25zW3IubmF0aXZlRGVmXSAmJiBhLmRlZmF1bHQucHJvdG90eXBlLmRlZmluaXRpb25zW3IubmF0aXZlRGVmXS5vcHRpb25hbCkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZyA9ICEwLCBoID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZvaWQgMCAhPT0gci5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzR3JvdXAgJiYgcCAhPT0gcikgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBjKHQubWF0Y2hlc1t0Lm1hdGNoZXMuaW5kZXhPZihyKSArIDFdLCBzLCBwKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzT3B0aW9uYWwpIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gciwgYSA9IG0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBrKHIsIGksIHMsIHApLCBtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5mb3JFYWNoKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPj0gYSAmJiAoZS5tYXRjaC5vcHRpb25hbGl0eSA9IGUubWF0Y2gub3B0aW9uYWxpdHkgPyBlLm1hdGNoLm9wdGlvbmFsaXR5ICsgMSA6IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbiA9IG1bbS5sZW5ndGggLSAxXS5tYXRjaCwgdm9pZCAwICE9PSBwIHx8ICF2KG4sIHQpKSByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gITAsIGggPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzQWx0ZXJuYXRvcikgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5oYXNBbHRlcm5hdG9yID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgdiwgeSA9IHIsIGsgPSBbXSwgYiA9IG0uc2xpY2UoKSwgUyA9IHMubGVuZ3RoLCBNID0gITEsIF8gPSBpLmxlbmd0aCA+IDAgPyBpLnNoaWZ0KCkgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PT0gXyB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIE8sIEUgPSBoLCBUID0gaS5zbGljZSgpLCBqID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIF8pIGogPSBfLnNwbGl0KFwiLFwiKTsgZWxzZSBmb3IgKE8gPSAwOyBPIDwgeS5tYXRjaGVzLmxlbmd0aDsgTysrKSBqLnB1c2goTy50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBsLmV4Y2x1ZGVzW2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIEEgPSBqLnNsaWNlKCksIEQgPSAwLCBCID0gbC5leGNsdWRlc1tlXS5sZW5ndGg7IEQgPCBCOyBEKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDID0gbC5leGNsdWRlc1tlXVtEXS50b1N0cmluZygpLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubGVuZ3RoID09IENbMV0gJiYgai5zcGxpY2Uoai5pbmRleE9mKENbMF0pLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwID09PSBqLmxlbmd0aCAmJiAoZGVsZXRlIGwuZXhjbHVkZXNbZV0sIGogPSBBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCEwID09PSB1LmtlZXBTdGF0aWMgfHwgaXNGaW5pdGUocGFyc2VJbnQodS5rZWVwU3RhdGljKSkgJiYgRSA+PSB1LmtlZXBTdGF0aWMpICYmIChqID0gai5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgUiA9IDA7IFIgPCBqLmxlbmd0aDsgUisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE8gPSBwYXJzZUludChqW1JdKSwgbSA9IFtdLCBpID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgXyAmJiB4KGgsIE8sIFMpIHx8IFQuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEwgPSB5Lm1hdGNoZXNbT107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMICYmIGMoTCwgWyBPIF0uY29uY2F0KHMpLCBwKSkgciA9ICEwOyBlbHNlIGlmICgwID09PSBSICYmIChNID0gITApLCBMICYmIEwubWF0Y2hlcyAmJiBMLm1hdGNoZXMubGVuZ3RoID4geS5tYXRjaGVzWzBdLm1hdGNoZXMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IG0uc2xpY2UoKSwgaCA9IEUsIG0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgRiA9IDA7IEYgPCBuLmxlbmd0aDsgRisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgSSA9IG5bRl0sIE4gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkubWF0Y2guaml0ID0gSS5tYXRjaC5qaXQgfHwgTSwgSS5hbHRlcm5hdGlvbiA9IEkuYWx0ZXJuYXRpb24gfHwgUywgUChJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIFYgPSAwOyBWIDwgay5sZW5ndGg7IFYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBHID0ga1tWXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgXyB8fCB2b2lkIDAgIT09IEkuYWx0ZXJuYXRpb24gJiYgai5pbmNsdWRlcyhJLmxvY2F0b3JbSS5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEkubWF0Y2gubmF0aXZlRGVmID09PSBHLm1hdGNoLm5hdGl2ZURlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTiA9ICEwLCBQKEcsIEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYoSSwgRywgdSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAoSSwgRykgJiYgKE4gPSAhMCwgay5zcGxpY2Uoay5pbmRleE9mKEcpLCAwLCBJKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZihHLCBJLCB1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUChHLCBJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID0gRywgITAgPT09IChhID0gSSkubWF0Y2guc3RhdGljICYmICEwICE9PSB2Lm1hdGNoLnN0YXRpYyAmJiB2Lm1hdGNoLmZuLnRlc3QoYS5tYXRjaC5kZWYsIGwsIGUsICExLCB1LCAhMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcoSSwgRykgfHwgdm9pZCAwICE9PSBkLmlucHV0bWFzay51c2VyT3B0aW9ucy5rZWVwU3RhdGljID8gUChJLCBHKSAmJiAoTiA9ICEwLCBrLnNwbGljZShrLmluZGV4T2YoRyksIDAsIEkpKSA6IHUua2VlcFN0YXRpYyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOIHx8IGsucHVzaChJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gYi5jb25jYXQoayksIGggPSBlLCBnID0gbS5sZW5ndGggPiAwLCByID0gay5sZW5ndGggPiAwLCBpID0gVC5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHIgPSBjKHkubWF0Y2hlc1tfXSB8fCB0Lm1hdGNoZXNbX10sIFsgXyBdLmNvbmNhdChzKSwgcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocikgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzUXVhbnRpZmllciAmJiBwICE9PSB0Lm1hdGNoZXNbdC5tYXRjaGVzLmluZGV4T2YocikgLSAxXSkgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IHIsIG8gPSAhMSwgZiA9IGkubGVuZ3RoID4gMCA/IGkuc2hpZnQoKSA6IDA7IGYgPCAoaXNOYU4oYS5xdWFudGlmaWVyLm1heCkgPyBmICsgMSA6IGEucXVhbnRpZmllci5tYXgpICYmIGggPD0gZTsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0Lm1hdGNoZXNbdC5tYXRjaGVzLmluZGV4T2YoYSkgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGMoZCwgWyBmIF0uY29uY2F0KHMpLCBkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5mb3JFYWNoKChmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobiA9IGIoZCwgdC5tYXRjaCkgPyB0Lm1hdGNoIDogbVttLmxlbmd0aCAtIDFdLm1hdGNoKS5vcHRpb25hbFF1YW50aWZpZXIgPSBmID49IGEucXVhbnRpZmllci5taW4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5qaXQgPSAoZiArIDEpICogKGQubWF0Y2hlcy5pbmRleE9mKG4pICsgMSkgPiBhLnF1YW50aWZpZXIuaml0LCBuLm9wdGlvbmFsUXVhbnRpZmllciAmJiB2KG4sIGQpICYmIChnID0gITAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IGUsIHUuZ3JlZWR5ICYmIG51bGwgPT0gbC52YWxpZFBvc2l0aW9uc1tlIC0gMV0gJiYgZiA+IGEucXVhbnRpZmllci5taW4gJiYgLTEgIT0gWyBcIipcIiwgXCIrXCIgXS5pbmRleE9mKGEucXVhbnRpZmllci5tYXgpICYmIChtLnBvcCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB2b2lkIDApLCBvID0gITAsIHIgPSAhMSksICFvICYmIG4uaml0ICYmIChsLmppdE9mZnNldFtlXSA9IGQubWF0Y2hlcy5sZW5ndGggLSBkLm1hdGNoZXMuaW5kZXhPZihuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgPSBrKHIsIGksIHMsIHApKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgPSBpLmxlbmd0aCA+IDAgPyBpLnNoaWZ0KCkgOiAwOyBwIDwgdC5tYXRjaGVzLmxlbmd0aDsgcCsrKSBpZiAoITAgIT09IHQubWF0Y2hlc1twXS5pc1F1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGModC5tYXRjaGVzW3BdLCBbIHAgXS5jb25jYXQociksIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICYmIGggPT09IGUpIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoID4gZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IC0xICE9IGUubWF0Y2hlcy5pbmRleE9mKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgfHwgZS5tYXRjaGVzLmZvckVhY2goKGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUubWF0Y2hlcyB8fCBpIHx8IChpID0gYihlLCB0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHgsIFAgPSBlIC0gMTsgdm9pZCAwID09PSAoeCA9IGwudmFsaWRQb3NpdGlvbnNbUF0gfHwgbC50ZXN0c1tQXSkgJiYgUCA+IC0xOyApIFAtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHggJiYgUCA+IC0xICYmICh2ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSwgbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0KSB8fCAodCA9IFsgdCBdKSwgdC5sZW5ndGggPiAwICYmICh2b2lkIDAgPT09IHRbMF0uYWx0ZXJuYXRpb24gfHwgITAgPT09IHUua2VlcFN0YXRpYyA/IDAgPT09IChuID0gYy5jYWxsKG8sIGUsIHQuc2xpY2UoKSkubG9jYXRvci5zbGljZSgpKS5sZW5ndGggJiYgKG4gPSB0WzBdLmxvY2F0b3Iuc2xpY2UoKSkgOiB0LmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGUuZGVmICYmICgwID09PSBuLmxlbmd0aCA/IChpID0gZS5hbHRlcm5hdGlvbiwgbiA9IGUubG9jYXRvci5zbGljZSgpKSA6IGUubG9jYXRvcltpXSAmJiAtMSA9PT0gbltpXS50b1N0cmluZygpLmluZGV4T2YoZS5sb2NhdG9yW2ldKSAmJiAobltpXSArPSBcIixcIiArIGUubG9jYXRvcltpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpLCBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oUCwgeCksIHkgPSB2LmpvaW4oXCJcIiksIGggPSBQKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLnRlc3RzW2VdICYmIGwudGVzdHNbZV1bMF0uY2QgPT09IHkpIHJldHVybiBsLnRlc3RzW2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdyA9IHYuc2hpZnQoKTsgdyA8IHAubGVuZ3RoOyB3KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoayhwW3ddLCB2LCBbIHcgXSkgJiYgaCA9PT0gZSB8fCBoID4gZSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwID09PSBtLmxlbmd0aCB8fCBnKSAmJiBtLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRvcjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBtbG9jOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNkOiB5XG4gICAgICAgICAgICAgICAgICAgIH0pLCB2b2lkIDAgIT09IHQgJiYgbC50ZXN0c1tlXSA/IHIgPSBzLmV4dGVuZCghMCwgW10sIG0pIDogKGwudGVzdHNbZV0gPSBzLmV4dGVuZCghMCwgW10sIG0pLCBcbiAgICAgICAgICAgICAgICAgICAgciA9IGwudGVzdHNbZV0pLCBtLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWF0Y2gub3B0aW9uYWxpdHkgPSBlLm1hdGNoLmRlZk9wdGlvbmFsaXR5IHx8ICExO1xuICAgICAgICAgICAgICAgICAgICB9KSksIHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDcyMTU6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuYWx0ZXJuYXRlID0gcywgdC5jaGVja0FsdGVybmF0aW9uTWF0Y2ggPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4sIGEgPSB0aGlzLm9wdHMuZ3JlZWR5ID8gdCA6IHQuc2xpY2UoMCwgMSksIHIgPSAhMSwgbyA9IHZvaWQgMCAhPT0gaSA/IGkuc3BsaXQoXCIsXCIpIDogW10sIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykgLTEgIT09IChuID0gZS5pbmRleE9mKG9bc10pKSAmJiBlLnNwbGljZShuLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBlLmxlbmd0aDsgbCsrKSBpZiAoYS5pbmNsdWRlcyhlW2xdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICAgICAgfSwgdC5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbihlLCB0LCBpLCBvLCBsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcywgdSA9IHRoaXMubWFza3NldCwgZiA9IHRoaXMub3B0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmLm51bWVyaWNJbnB1dCB8fCBjLmlzUlRMKSAmJiAodCA9PT0gYS5rZXlzLkJhY2tzcGFjZSA/IHQgPSBhLmtleXMuRGVsZXRlIDogdCA9PT0gYS5rZXlzLkRlbGV0ZSAmJiAodCA9IGEua2V5cy5CYWNrc3BhY2UpLCBcbiAgICAgICAgICAgICAgICAgICAgYy5pc1JUTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gaS5lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmVuZCA9IGkuYmVnaW4sIGkuYmVnaW4gPSBkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwLCBoID0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIHZvaWQgMCwgITApO1xuICAgICAgICAgICAgICAgICAgICBpLmVuZCA+PSByLmdldEJ1ZmZlci5jYWxsKGMpLmxlbmd0aCAmJiBoID49IGkuZW5kICYmIChpLmVuZCA9IGggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgdCA9PT0gYS5rZXlzLkJhY2tzcGFjZSA/IGkuZW5kIC0gaS5iZWdpbiA8IDEgJiYgKGkuYmVnaW4gPSByLnNlZWtQcmV2aW91cy5jYWxsKGMsIGkuYmVnaW4pKSA6IHQgPT09IGEua2V5cy5EZWxldGUgJiYgaS5iZWdpbiA9PT0gaS5lbmQgJiYgKGkuZW5kID0gci5pc01hc2suY2FsbChjLCBpLmVuZCwgITAsICEwKSA/IGkuZW5kICsgMSA6IHIuc2Vla05leHQuY2FsbChjLCBpLmVuZCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSAocCA9IHYuY2FsbChjLCBpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbyAmJiAhMSAhPT0gZi5rZWVwU3RhdGljIHx8IG51bGwgIT09IGYucmVnZXggJiYgLTEgIT09IG4uZ2V0VGVzdC5jYWxsKGMsIGkuYmVnaW4pLm1hdGNoLmRlZi5pbmRleE9mKFwifFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gcy5jYWxsKGMsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IHZvaWQgMCAhPT0gbS5jYXJldCA/IG0uY2FyZXQgOiBtLnBvcyA/IHIuc2Vla05leHQuY2FsbChjLCBtLnBvcy5iZWdpbiA/IG0ucG9zLmJlZ2luIDogbS5wb3MpIDogci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGMsIC0xLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ICE9PSBhLmtleXMuRGVsZXRlIHx8IGkuYmVnaW4gPiBnKSAmJiBpLmJlZ2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSBvICYmICh1LnAgPSB0ID09PSBhLmtleXMuRGVsZXRlID8gaS5iZWdpbiArIHAgOiBpLmJlZ2luLCB1LnAgPSByLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChjLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IHUucCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHUucFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgITEsICExID09PSBmLmluc2VydE1vZGUgJiYgdCA9PT0gYS5rZXlzLkJhY2tzcGFjZSA/IFwibm9uZVwiIDogdm9pZCAwKS5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0LmlzQ29tcGxldGUgPSBjLCB0LmlzU2VsZWN0aW9uID0gdSwgdC5pc1ZhbGlkID0gZiwgdC5yZWZyZXNoRnJvbUJ1ZmZlciA9IHAsIFxuICAgICAgICAgICAgICAgIHQucmV2YWxpZGF0ZU1hc2sgPSB2O1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSg0NzEzKSwgYSA9IGkoMjgzOSksIHIgPSBpKDg3MTEpLCBvID0gaSg2MDMwKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQsIGksIGEsIG8sIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMsIHUsIGQsIHAsIGgsIHYsIG0sIGcsIHksIGssIGIsIHggPSB0aGlzLCBQID0gdGhpcy5kZXBlbmRlbmN5TGliLCB3ID0gdGhpcy5vcHRzLCBTID0geC5tYXNrc2V0LCBNID0gUC5leHRlbmQoITAsIFtdLCBTLnZhbGlkUG9zaXRpb25zKSwgXyA9IFAuZXh0ZW5kKCEwLCB7fSwgUy50ZXN0cyksIE8gPSAhMSwgRSA9ICExLCBUID0gdm9pZCAwICE9PSBvID8gbyA6IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh4KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgJiYgKGsgPSBsLmJlZ2luLCBiID0gbC5lbmQsIGwuYmVnaW4gPiBsLmVuZCAmJiAoayA9IGwuZW5kLCBiID0gbC5iZWdpbikpLCBcbiAgICAgICAgICAgICAgICAgICAgLTEgPT09IFQgJiYgdm9pZCAwID09PSBvKSBjID0gMCwgdSA9IChwID0gbi5nZXRUZXN0LmNhbGwoeCwgYykpLmFsdGVybmF0aW9uOyBlbHNlIGZvciAoO1QgPj0gMDsgVC0tKSBpZiAoKGQgPSBTLnZhbGlkUG9zaXRpb25zW1RdKSAmJiB2b2lkIDAgIT09IGQuYWx0ZXJuYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUIDw9IChlIHx8IDApICYmIHAgJiYgcC5sb2NhdG9yW2QuYWx0ZXJuYXRpb25dICE9PSBkLmxvY2F0b3JbZC5hbHRlcm5hdGlvbl0pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IFQsIHUgPSBTLnZhbGlkUG9zaXRpb25zW2NdLmFsdGVybmF0aW9uLCBwID0gZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtID0gcGFyc2VJbnQoYyksIFMuZXhjbHVkZXNbbV0gPSBTLmV4Y2x1ZGVzW21dIHx8IFtdLCAhMCAhPT0gZSAmJiBTLmV4Y2x1ZGVzW21dLnB1c2goKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5nZXREZWNpc2lvblRha2VyKShwKSArIFwiOlwiICsgcC5hbHRlcm5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IFtdLCBBID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGggPSBtOyBoIDwgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHgsIHZvaWQgMCwgITApICsgMTsgaCsrKSAtMSA9PT0gQSAmJiBlIDw9IGggJiYgdm9pZCAwICE9PSB0ICYmIChqLnB1c2godCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgQSA9IGoubGVuZ3RoIC0gMSksICh2ID0gUy52YWxpZFBvc2l0aW9uc1toXSkgJiYgITAgIT09IHYuZ2VuZXJhdGVkSW5wdXQgJiYgKHZvaWQgMCA9PT0gbCB8fCBoIDwgayB8fCBoID49IGIpICYmIGoucHVzaCh2LmlucHV0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgUy52YWxpZFBvc2l0aW9uc1toXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoLTEgPT09IEEgJiYgdm9pZCAwICE9PSB0ICYmIChqLnB1c2godCksIEEgPSBqLmxlbmd0aCAtIDEpOyB2b2lkIDAgIT09IFMuZXhjbHVkZXNbbV0gJiYgUy5leGNsdWRlc1ttXS5sZW5ndGggPCAxMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChTLnRlc3RzID0ge30sIHIucmVzZXRNYXNrU2V0LmNhbGwoeCwgITApLCBPID0gITAsIGggPSAwOyBoIDwgai5sZW5ndGggJiYgKGcgPSBPLmNhcmV0IHx8IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh4LCB2b2lkIDAsICEwKSArIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBqW2hdLCBPID0gZi5jYWxsKHgsIGcsIHksICExLCBhLCAhMCkpOyBoKyspIGggPT09IEEgJiYgKEUgPSBPKSwgMSA9PSBlICYmIE8gJiYgKEUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zOiBoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE8pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc2V0TWFza1NldC5jYWxsKHgpLCBwID0gbi5nZXRUZXN0LmNhbGwoeCwgbSksIFMudmFsaWRQb3NpdGlvbnMgPSBQLmV4dGVuZCghMCwgW10sIE0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLnRlc3RzID0gUC5leHRlbmQoITAsIHt9LCBfKSwgIVMuZXhjbHVkZXNbbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRSA9IHMuY2FsbCh4LCBlLCB0LCBpLCBhLCBtIC0gMSwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgRCA9ICgwLCBuLmdldERlY2lzaW9uVGFrZXIpKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gUy5leGNsdWRlc1ttXS5pbmRleE9mKEQgKyBcIjpcIiArIHAuYWx0ZXJuYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEUgPSBzLmNhbGwoeCwgZSwgdCwgaSwgYSwgbSAtIDEsIGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChTLmV4Y2x1ZGVzW21dLnB1c2goRCArIFwiOlwiICsgcC5hbHRlcm5hdGlvbiksIGggPSBtOyBoIDwgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHgsIHZvaWQgMCwgITApICsgMTsgaCsrKSBkZWxldGUgUy52YWxpZFBvc2l0aW9uc1toXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRSAmJiAhMSA9PT0gdy5rZWVwU3RhdGljIHx8IGRlbGV0ZSBTLmV4Y2x1ZGVzW21dLCBFO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm9wdHMsIHIgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobi5jYXNpbmcgfHwgdC5jYXNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidXBwZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRpdGxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHIudmFsaWRQb3NpdGlvbnNbaSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IDAgPT09IGkgfHwgbyAmJiBvLmlucHV0ID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKGEua2V5Q29kZS5TcGFjZSkgPyBlLnRvVXBwZXJDYXNlKCkgOiBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLmNhc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnB1c2goci52YWxpZFBvc2l0aW9ucyksIGUgPSBuLmNhc2luZy5hcHBseSh0aGlzLCBzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywgaSA9IHRoaXMub3B0cywgYSA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5pc0NvbXBsZXRlKSByZXR1cm4gaS5pc0NvbXBsZXRlKGUsIGkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCIqXCIgIT09IGkucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9ICExLCBzID0gci5kZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKHQsICEwKSwgbCA9IHIuc2Vla1ByZXZpb3VzLmNhbGwodCwgcy5sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHMuZGVmIHx8IHMuZGVmLm5ld0Jsb2NrTWFya2VyIHx8IHMuZGVmLm9wdGlvbmFsaXR5IHx8IHMuZGVmLm9wdGlvbmFsUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8PSBsOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSBuLmdldFRlc3RUZW1wbGF0ZS5jYWxsKHQsIGMpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IHUuc3RhdGljICYmIHZvaWQgMCA9PT0gYS52YWxpZFBvc2l0aW9uc1tjXSAmJiAhMCAhPT0gdS5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdS5vcHRpb25hbFF1YW50aWZpZXIgfHwgITAgPT09IHUuc3RhdGljICYmIGVbY10gIT09IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbCh0LCBjLCB1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm9wdHMuaW5zZXJ0TW9kZSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1JUTCA/IGUuYmVnaW4gLSBlLmVuZCA+IHQgOiBlLmVuZCAtIGUuYmVnaW4gPiB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQsIGksIGEsIG8sIGQsIG0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSB0aGlzLCB5ID0gdGhpcy5kZXBlbmRlbmN5TGliLCBrID0gdGhpcy5vcHRzLCBiID0gZy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBpID0gITAgPT09IGk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gUChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZS5yZW1vdmUgJiYgKEFycmF5LmlzQXJyYXkoZS5yZW1vdmUpIHx8IChlLnJlbW92ZSA9IFsgZS5yZW1vdmUgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlLnNvcnQoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcuaXNSVEwgPyBlLnBvcyAtIHQucG9zIDogdC5wb3MgLSBlLnBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LmNhbGwoZywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGUgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgZS5yZW1vdmUgPSB2b2lkIDApLCB2b2lkIDAgIT09IGUuaW5zZXJ0ICYmIChBcnJheS5pc0FycmF5KGUuaW5zZXJ0KSB8fCAoZS5pbnNlcnQgPSBbIGUuaW5zZXJ0IF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmluc2VydC5zb3J0KChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnLmlzUlRMID8gdC5wb3MgLSBlLnBvcyA6IGUucG9zIC0gdC5wb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gZS5jICYmIGYuY2FsbChnLCBlLnBvcywgZS5jLCB2b2lkIDAgPT09IGUuc3RyaWN0IHx8IGUuc3RyaWN0LCB2b2lkIDAgIT09IGUuZnJvbUlzVmFsaWQgPyBlLmZyb21Jc1ZhbGlkIDogYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlLmluc2VydCA9IHZvaWQgMCksIGUucmVmcmVzaEZyb21CdWZmZXIgJiYgZS5idWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLmNhbGwoZywgITAgPT09IHQgPyB0IDogdC5zdGFydCwgdC5lbmQsIGUuYnVmZmVyKSwgZS5yZWZyZXNoRnJvbUJ1ZmZlciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBlLnJld3JpdGVQb3NpdGlvbiAmJiAoeCA9IGUucmV3cml0ZVBvc2l0aW9uLCBlID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdyh0LCBpLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4uZ2V0VGVzdHMuY2FsbChnLCB0KS5ldmVyeSgoZnVuY3Rpb24oYywgZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gYy5tYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5nZXRCdWZmZXIuY2FsbChnLCAhMCksICExICE9PSAocyA9ICghZC5qaXQgfHwgdm9pZCAwICE9PSBiLnZhbGlkUG9zaXRpb25zW3Iuc2Vla1ByZXZpb3VzLmNhbGwoZywgdCldKSAmJiAobnVsbCAhPSBkLmZuID8gZC5mbi50ZXN0KGksIGIsIHQsIG8sIGssIHUuY2FsbChnLCBlKSkgOiAoaSA9PT0gZC5kZWYgfHwgaSA9PT0gay5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSAmJiBcIlwiICE9PSBkLmRlZiAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChnLCB0LCBkLCAhMCkgfHwgZC5kZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHZvaWQgMCAhPT0gcy5jID8gcy5jIDogaSwgaCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwID0gcCA9PT0gay5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmICEwID09PSBkLnN0YXRpYyA/IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChnLCB0LCBkLCAhMCkgfHwgZC5kZWYgOiBwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IChzID0gUChzKSkgJiYgdm9pZCAwICE9PSBzLnBvcyAmJiBzLnBvcyAhPT0gdCAmJiAoaCA9IHMucG9zKSwgITAgIT09IHMgJiYgdm9pZCAwID09PSBzLnBvcyAmJiB2b2lkIDAgPT09IHMuYyA/ICExIDogKCExID09PSB2LmNhbGwoZywgZSwgeS5leHRlbmQoe30sIGMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBsLmNhbGwoZywgcCwgZCwgaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGEsIGgpICYmIChzID0gITEpLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUuYmVnaW4gJiYgKHggPSBnLmlzUlRMID8gZS5lbmQgOiBlLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSAhMCwgTSA9IHkuZXh0ZW5kKCEwLCB7fSwgYi52YWxpZFBvc2l0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gay5rZWVwU3RhdGljICYmIHZvaWQgMCAhPT0gYi5leGNsdWRlc1t4XSAmJiAhMCAhPT0gbyAmJiAhMCAhPT0gYSkgZm9yICh2YXIgXyA9IHg7IF8gPCAoZy5pc1JUTCA/IGUuYmVnaW4gOiBlLmVuZCk7IF8rKykgdm9pZCAwICE9PSBiLmV4Y2x1ZGVzW19dICYmIChiLmV4Y2x1ZGVzW19dID0gdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGIudGVzdHNbX10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBrLnByZVZhbGlkYXRpb24gJiYgITAgIT09IGEgJiYgITAgIT09IGQgJiYgKFMgPSBQKFMgPSBrLnByZVZhbGlkYXRpb24uY2FsbChnLCByLmdldEJ1ZmZlci5jYWxsKGcpLCB4LCB0LCB1LmNhbGwoZywgZSksIGssIGIsIGUsIGkgfHwgbykpKSwgXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUyA9IHcoeCwgdCwgaSksICghaSB8fCAhMCA9PT0gYSkgJiYgITEgPT09IFMgJiYgITAgIT09IGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTyA9IGIudmFsaWRQb3NpdGlvbnNbeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFPIHx8ICEwICE9PSBPLm1hdGNoLnN0YXRpYyB8fCBPLm1hdGNoLmRlZiAhPT0gdCAmJiB0ICE9PSBrLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsuaW5zZXJ0TW9kZSB8fCB2b2lkIDAgPT09IGIudmFsaWRQb3NpdGlvbnNbci5zZWVrTmV4dC5jYWxsKGcsIHgpXSB8fCBlLmVuZCA+IHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBFID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi5qaXRPZmZzZXRbeF0gJiYgdm9pZCAwID09PSBiLnZhbGlkUG9zaXRpb25zW3Iuc2Vla05leHQuY2FsbChnLCB4KV0gJiYgITEgIT09IChTID0gZi5jYWxsKGcsIHggKyBiLmppdE9mZnNldFt4XSwgdCwgITAsICEwKSkgJiYgKCEwICE9PSBvICYmIChTLmNhcmV0ID0geCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRSA9ICEwKSwgZS5lbmQgPiB4ICYmIChiLnZhbGlkUG9zaXRpb25zW3hdID0gdm9pZCAwKSwgIUUgJiYgIXIuaXNNYXNrLmNhbGwoZywgeCwgay5rZWVwU3RhdGljICYmIDAgPT09IHgpKSBmb3IgKHZhciBUID0geCArIDEsIGogPSByLnNlZWtOZXh0LmNhbGwoZywgeCwgITEsIDAgIT09IHgpOyBUIDw9IGo7IFQrKykgaWYgKCExICE9PSAoUyA9IHcoVCwgdCwgaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA9IGguY2FsbChnLCB4LCB2b2lkIDAgIT09IFMucG9zID8gUy5wb3MgOiBUKSB8fCBTLCB4ID0gVDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBTID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogci5zZWVrTmV4dC5jYWxsKGcsIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGcuaGFzQWx0ZXJuYXRvciAmJiAhMCAhPT0gbyAmJiAhaSAmJiAoITEgPT09IFMgJiYgay5rZWVwU3RhdGljICYmIChjLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnKSkgfHwgMCA9PT0geCkgPyBTID0gcy5jYWxsKGcsIHgsIHQsIGksIGEsIHZvaWQgMCwgZSkgOiAodS5jYWxsKGcsIGUpICYmIGIudGVzdHNbeF0gJiYgYi50ZXN0c1t4XS5sZW5ndGggPiAxICYmIGsua2VlcFN0YXRpYyB8fCAxID09IFMgJiYgITAgIT09IGsubnVtZXJpY0lucHV0ICYmIGIudGVzdHNbeF0gJiYgYi50ZXN0c1t4XS5sZW5ndGggPiAxICYmIHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChnLCB2b2lkIDAsICEwKSA+IHgpICYmIChTID0gcy5jYWxsKGcsICEwKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBTICYmIChTID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogeFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygay5wb3N0VmFsaWRhdGlvbiAmJiAhMCAhPT0gYSAmJiAhMCAhPT0gZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSBrLnBvc3RWYWxpZGF0aW9uLmNhbGwoZywgci5nZXRCdWZmZXIuY2FsbChnLCAhMCksIHZvaWQgMCAhPT0gZS5iZWdpbiA/IGcuaXNSVEwgPyBlLmVuZCA6IGUuYmVnaW4gOiBlLCB0LCBTLCBrLCBiLCBpLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gQSAmJiAoUyA9ICEwID09PSBBID8gUyA6IEEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFMgJiYgdm9pZCAwID09PSBTLnBvcyAmJiAoUy5wb3MgPSB4KSwgITEgPT09IFMgfHwgITAgPT09IGQgPyAoci5yZXNldE1hc2tTZXQuY2FsbChnLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICBiLnZhbGlkUG9zaXRpb25zID0geS5leHRlbmQoITAsIFtdLCBNKSkgOiBoLmNhbGwoZywgdm9pZCAwLCB4LCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBEID0gUChTKTtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBnLm1heExlbmd0aCAmJiAoci5nZXRCdWZmZXIuY2FsbChnKS5sZW5ndGggPiBnLm1heExlbmd0aCAmJiAhYSAmJiAoci5yZXNldE1hc2tTZXQuY2FsbChnLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICBiLnZhbGlkUG9zaXRpb25zID0geS5leHRlbmQoITAsIFtdLCBNKSwgRCA9ICExKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IHRoaXMubWFza3NldCwgciA9ICExLCBvID0gbi5nZXRUZXN0cy5jYWxsKHRoaXMsIGUpLCBzID0gMDsgcyA8IG8ubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvW3NdLm1hdGNoICYmIChvW3NdLm1hdGNoLm5hdGl2ZURlZiA9PT0gdC5tYXRjaFtpLnNoaWZ0UG9zaXRpb25zID8gXCJkZWZcIiA6IFwibmF0aXZlRGVmXCJdICYmICghaS5zaGlmdFBvc2l0aW9ucyB8fCAhdC5tYXRjaC5zdGF0aWMpIHx8IG9bc10ubWF0Y2gubmF0aXZlRGVmID09PSB0Lm1hdGNoLm5hdGl2ZURlZiB8fCBpLnJlZ2V4ICYmICFvW3NdLm1hdGNoLnN0YXRpYyAmJiBvW3NdLm1hdGNoLmZuLnRlc3QodC5pbnB1dCwgYSwgZSwgITEsIGkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvW3NdLm1hdGNoICYmIG9bc10ubWF0Y2guZGVmID09PSB0Lm1hdGNoLm5hdGl2ZURlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExID09PSByICYmIHZvaWQgMCAhPT0gYS5qaXRPZmZzZXRbZV0gJiYgKHIgPSBkLmNhbGwodGhpcywgZSArIGEuaml0T2Zmc2V0W2VdLCB0LCBpKSksIFxuICAgICAgICAgICAgICAgICAgICByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBwKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHMgPSB0aGlzLCBsID0gdGhpcy5tYXNrc2V0LCBjID0gdGhpcy5vcHRzLCB1ID0gdGhpcy5kZXBlbmRlbmN5TGliLCBmID0gYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyLCBkID0gcy5pc1JUTCA/IGkuc2xpY2UoKS5yZXZlcnNlKCkgOiBpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIiwgITAgPT09IGUpIHIucmVzZXRNYXNrU2V0LmNhbGwocyksIGwudGVzdHMgPSB7fSwgXG4gICAgICAgICAgICAgICAgICAgIGUgPSAwLCB0ID0gaS5sZW5ndGgsIGEgPSByLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogMFxuICAgICAgICAgICAgICAgICAgICB9LCAhMSkuYmVnaW47IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gZTsgbiA8IHQ7IG4rKykgZGVsZXRlIGwudmFsaWRQb3NpdGlvbnNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG5ldyB1LkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobiA9IGU7IG4gPCB0OyBuKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAua2V5ID0gZFtuXS50b1N0cmluZygpLCBzLmlnbm9yYWJsZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBvLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKHMsIHAsICEwLCAhMSwgITEsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgITEgIT09IGggJiYgdm9pZCAwICE9PSBoICYmIChhID0gaC5mb3J3YXJkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IGY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGgoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMsIG8gPSB0aGlzLm1hc2tzZXQsIHMgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGUpIGZvciAoZSA9IHQgLSAxOyBlID4gMCAmJiAhby52YWxpZFBvc2l0aW9uc1tlXTsgZS0tKSA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGwgPSBlOyBsIDwgdDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBvLnZhbGlkUG9zaXRpb25zW2xdICYmICFyLmlzTWFzay5jYWxsKGEsIGwsICExKSkgaWYgKDAgPT0gbCA/IG4uZ2V0VGVzdC5jYWxsKGEsIGwpIDogby52YWxpZFBvc2l0aW9uc1tsIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IG4uZ2V0VGVzdHMuY2FsbChhLCBsKS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgPT09IGNbYy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgJiYgYy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSwgZCA9IG4uZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwoYSwgbCwgYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgKCEwICE9PSBkLm1hdGNoLmppdCB8fCBcIm1hc3RlclwiID09PSBkLm1hdGNoLm5ld0Jsb2NrTWFya2VyICYmICh1ID0gby52YWxpZFBvc2l0aW9uc1tsICsgMV0pICYmICEwID09PSB1Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKChkID0gcy5leHRlbmQoe30sIGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChhLCBsLCBkLm1hdGNoLCAhMCkgfHwgZC5tYXRjaC5kZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuZ2VuZXJhdGVkSW5wdXQgPSAhMCwgdi5jYWxsKGEsIGwsIGQsICEwKSwgITAgIT09IGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gby52YWxpZFBvc2l0aW9uc1t0XS5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8udmFsaWRQb3NpdGlvbnNbdF0gPSB2b2lkIDAsIGYuY2FsbChhLCB0LCBwLCAhMCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2KGUsIHQsIGksIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0aGlzLCBzID0gdGhpcy5tYXNrc2V0LCBsID0gdGhpcy5vcHRzLCBjID0gdGhpcy5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdFtlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IG4gJiYgITAgPT09IG4ubWF0Y2guc3RhdGljICYmICEwICE9PSBuLm1hdGNoLm9wdGlvbmFsaXR5ICYmICh2b2lkIDAgPT09IHRbMF0gfHwgdm9pZCAwID09PSB0WzBdLmFsdGVybmF0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaS5iZWdpbiA8PSBlIC0gMSA/IHRbZSAtIDFdICYmICEwID09PSB0W2UgLSAxXS5tYXRjaC5zdGF0aWMgJiYgdFtlIC0gMV0gOiB0W2UgLSAxXSwgciA9IGkuZW5kID4gZSArIDEgPyB0W2UgKyAxXSAmJiAhMCA9PT0gdFtlICsgMV0ubWF0Y2guc3RhdGljICYmIHRbZSArIDFdIDogdFtlICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgJiYgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IDAsIGggPSB2b2lkIDAgIT09IGUuYmVnaW4gPyBlLmJlZ2luIDogZSwgdiA9IHZvaWQgMCAhPT0gZS5lbmQgPyBlLmVuZCA6IGUsIG0gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuYmVnaW4gPiBlLmVuZCAmJiAoaCA9IGUuZW5kLCB2ID0gZS5iZWdpbiksIGEgPSB2b2lkIDAgIT09IGEgPyBhIDogaCwgdm9pZCAwID09PSBpICYmIChoICE9PSB2IHx8IGwuaW5zZXJ0TW9kZSAmJiB2b2lkIDAgIT09IHMudmFsaWRQb3NpdGlvbnNbYV0gfHwgdm9pZCAwID09PSB0IHx8IHQubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8IHQubWF0Y2gub3B0aW9uYWxpdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZywgeSA9IGMuZXh0ZW5kKCEwLCB7fSwgcy52YWxpZFBvc2l0aW9ucyksIGsgPSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwobywgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHMucCA9IGgsIGcgPSBrOyBnID49IGg7IGctLSkgZGVsZXRlIHMudmFsaWRQb3NpdGlvbnNbZ10sIHZvaWQgMCA9PT0gdCAmJiBkZWxldGUgcy50ZXN0c1tnICsgMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiwgeCwgUCA9IGEsIHcgPSBQO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh0ICYmIChzLnZhbGlkUG9zaXRpb25zW2FdID0gYy5leHRlbmQoITAsIHt9LCB0KSwgdysrLCBQKyspLCBnID0gdCA/IHYgOiB2IC0gMTsgZyA8PSBrOyBnKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSAoYiA9IHlbZ10pICYmICEwICE9PSBiLmdlbmVyYXRlZElucHV0ICYmIChnID49IHYgfHwgZyA+PSBoICYmIHUoZywgeSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiB2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoO1wiXCIgIT09IG4uZ2V0VGVzdC5jYWxsKG8sIHcpLm1hdGNoLmRlZjsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09ICh4ID0gZC5jYWxsKG8sIHcsIGIsIGwpKSB8fCBcIitcIiA9PT0gYi5tYXRjaC5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIitcIiA9PT0gYi5tYXRjaC5kZWYgJiYgci5nZXRCdWZmZXIuY2FsbChvLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFMgPSBmLmNhbGwobywgdywgYi5pbnB1dCwgXCIrXCIgIT09IGIubWF0Y2guZGVmLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0gPSAhMSAhPT0gUywgUCA9IChTLnBvcyB8fCB3KSArIDEsICFtICYmIHgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSB0ICYmIGIubWF0Y2guc3RhdGljICYmIGcgPT09IGUuYmVnaW4gJiYgcCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtICYmIHIuZ2V0QnVmZmVyLmNhbGwobyksIHcgPiBzLm1hc2tMZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgPT0gbi5nZXRUZXN0LmNhbGwobywgdykubWF0Y2guZGVmICYmIChtID0gITEpLCB3ID0gUDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbSkgcmV0dXJuIHMudmFsaWRQb3NpdGlvbnMgPSBjLmV4dGVuZCghMCwgW10sIHkpLCByLnJlc2V0TWFza1NldC5jYWxsKG8sICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHQgJiYgbi5nZXRUZXN0LmNhbGwobywgYSkubWF0Y2guY2QgPT09IHQubWF0Y2guY2QgJiYgKHMudmFsaWRQb3NpdGlvbnNbYV0gPSBjLmV4dGVuZCghMCwge30sIHQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIucmVzZXRNYXNrU2V0LmNhbGwobywgITApLCBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdCA9IHt9O1xuICAgICAgICBmdW5jdGlvbiBpKG4pIHtcbiAgICAgICAgICAgIHZhciBhID0gdFtuXTtcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGEpIHJldHVybiBhLmV4cG9ydHM7XG4gICAgICAgICAgICB2YXIgciA9IHRbbl0gPSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZVtuXShyLCByLmV4cG9ydHMsIGkpLCByLmV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB7fTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGUsIHQgPSBuO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwLCBpKDcxNDkpLCBpKDMxOTQpLCBpKDkzMDIpLCBpKDQwMTMpLCBpKDM4NTEpLCBpKDIxOSksIGkoMjA3KSwgXG4gICAgICAgICAgICBpKDUyOTYpO1xuICAgICAgICAgICAgdmFyIGEgPSAoKGUgPSBpKDIzOTQpKSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgIH0pLmRlZmF1bHQ7XG4gICAgICAgICAgICB0LmRlZmF1bHQgPSBhO1xuICAgICAgICB9KCksIG47XG4gICAgfSgpO1xufSkpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtb2RhbEV2ZW50cyIsInBob25lTWFzayIsInNlbmRGb3JtIiwidmFsaWRhdGVGb3JtIiwiZm9ybSIsImRvY3VtZW50IiwiZm9ybXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW9kYWxCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsQnV0dG9uQ2xvc2UiLCJtb2RhbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzaG93TW9kYWwiLCJyZW1vdmUiLCJhZGQiLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJQSE9ORV9NQVNLIiwiSW5wdXRtYXNrIiwicGhvbmVJbnB1dHMiLCJpbSIsIm1hc2siLCJTRVJWRVJfTk9UX0ZPVU5EIiwiUk9VVEVTIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInN0YXR1cyIsImZldGNoIiwiUkVNT1RFX0hPU1QiLCJSRUdJU1RSQVRJT04iLCJtZXRob2QiLCJGb3JtRGF0YSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiX2RhdGEkZmllbGRzIiwiaW5uZXJUZXh0IiwiZmllbGRzIiwiaW5wdXROYW1lIiwicmVzZXQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwicmVtb3ZlQXR0cmlidXRlIiwiRU1BSUxfUkVHIiwiVkFMSURBVEVfTUVTU0FHRSIsImZvcm1GaWVsZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidmFsaWRhdGUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZm9ybUZpZWxkIiwidmFsdWUiLCJmaWVsZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibmFtZSIsImxlbmd0aCIsInNldEVycm9yTWVzc2FnZSIsIk5BTUUiLCJyZWdleCIsInRlc3QiLCJFTUFJTCIsImluY2x1ZGVzIiwiUEhPTkUiLCJNRVNTQUdFIiwiZXJyIiwiZiIsImVyck1lc3NhZ2UiLCJIT1NUIiwiUElORyJdLCJzb3VyY2VSb290IjoiIn0=