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
  REMOTE_HOST: 'http://node.zhukoff.by',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RCxDQUFDLE9BQU8seU9BQXlPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sV0FBVyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxhQUFhLGFBQWEsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLGFBQWEsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxX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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvbW9kYWwtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvcGhvbmUtbWFzay5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL2FwcC9tb2RlbC9zZW5kLWZvcm0uanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvbW9kZWwvdmFsaWRhdGUtZm9ybS5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL3NoYXJlZC9saWIvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL3NoYXJlZC9saWIvY29uc3RhbnRzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vc3JjL2FwcC9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svZGlzdC9pbnB1dG1hc2suanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL3NyYy9hcHAvc3R5bGVzL3N0eWxlLnNhc3M/YmZjNSIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2l0cHJvZml0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2l0cHJvZml0LXRlc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pdHByb2ZpdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaXRwcm9maXQtdGVzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5pbXBvcnQgeyBtb2RhbEV2ZW50cywgcGhvbmVNYXNrLCBzZW5kRm9ybSwgdmFsaWRhdGVGb3JtIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICh2YWxpZGF0ZUZvcm0oZm9ybSkpIHtcbiAgICBzZW5kRm9ybShmb3JtKTtcbiAgfVxufSk7XG5cbnBob25lTWFzaygpO1xuXG5tb2RhbEV2ZW50cygpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9waG9uZS1tYXNrJztcbmV4cG9ydCAqIGZyb20gJy4vc2VuZC1mb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGUtZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsLWV2ZW50JztcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1vZGFsRXZlbnRzKCkge1xuICBjb25zdCBtb2RhbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1idXR0b24nKTtcbiAgY29uc3QgbW9kYWxCdXR0b25DbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG5cbiAgLyogbW9kYWwgb3BlbiAqL1xuICBtb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtb3V0LWJsdXJyZWQtdG9wJyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2xpZGUtaW4tYmx1cnJlZC10b3AnKTtcbiAgfSk7XG5cbiAgLyogbW9kYWwgY2xvc2UgKi9cbiAgbW9kYWxCdXR0b25DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtaW4tYmx1cnJlZC10b3AnKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzbGlkZS1vdXQtYmx1cnJlZC10b3AnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1vdXQtYmx1cnJlZC10b3AnKTtcbiAgICB9LCA0NTApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IFBIT05FX01BU0sgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IElucHV0bWFzayBmcm9tICdpbnB1dG1hc2snO1xuXG5leHBvcnQgZnVuY3Rpb24gcGhvbmVNYXNrKCkge1xuICBjb25zdCBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpO1xuICBjb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soUEhPTkVfTUFTSyk7XG4gIGltLm1hc2socGhvbmVJbnB1dHMpO1xufVxuIiwiaW1wb3J0IHsgU0VSVkVSX05PVF9GT1VORCB9IGZyb20gJy4uLy4uL3NoYXJlZC9saWIvY29uc3RhbnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbGliL2NvbnN0YW50cy9yb3V0ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VuZEZvcm0oZm9ybSkge1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS12ZXJ0LWNlbnRlcicpO1xuICBjb25zdCBidXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQtYnV0dG9uJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gIGNvbnN0IHN0YXR1cyA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX3N0YXR1cycpO1xuICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX2VycicpO1xuICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX3N1Y2Nlc3MnKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX2Vycm9yJyk7XG5cbiAgZmV0Y2goUk9VVEVTLlJFTU9URV9IT1NUICsgUk9VVEVTLlJFR0lTVFJBVElPTiwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9zdWNjZXNzJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybV9lcnJvcicpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX3N0YXR1c19lcnInKTtcbiAgICAgICAgc3RhdHVzLmlubmVyVGV4dCA9IGRhdGE/LmZpZWxkcz8uaW5wdXROYW1lO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX2Vycm9yJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybV9zdWNjZXNzJyk7XG4gICAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19zdGF0dXNfc3VjY2VzcycpO1xuICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX2VycicpO1xuICAgICAgICBzdGF0dXMuaW5uZXJUZXh0ID0gZGF0YT8ubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAnLCBlcnJvcik7XG4gICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm1fc3VjY2VzcycpO1xuICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtX2Vycm9yJyk7XG4gICAgICBzdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fc3RhdHVzX3N1Y2Nlc3MnKTtcbiAgICAgIHN0YXR1cy5jbGFzc0xpc3QuYWRkKCdmb3JtX19zdGF0dXNfZXJyJyk7XG4gICAgICBzdGF0dXMuaW5uZXJUZXh0ID0gU0VSVkVSX05PVF9GT1VORDtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZS12ZXJ0LWNlbnRlcicpO1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIEVNQUlMX1JFRyxcbiAgVkFMSURBVEVfTUVTU0FHRSxcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL2xpYi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmb3JtKSB7XG4gIGxldCBmb3JtRmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9fZmllbGQnKTtcbiAgbGV0IHZhbGlkYXRlID0gdHJ1ZTtcbiAgZm9yIChsZXQgZm9ybUZpZWxkIG9mIGZvcm1GaWVsZHMpIHtcbiAgICBsZXQgZmllbGQgPSBmb3JtRmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgZmllbGQgPSBmb3JtRmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgfVxuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtX19maWVsZF9lcnJvcicpO1xuXG4gICAgc3dpdGNoIChmaWVsZC5uYW1lKSB7XG4gICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICB2YWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIHNldEVycm9yTWVzc2FnZShWQUxJREFURV9NRVNTQUdFLk5BTUUsIGZvcm1GaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIGxldCByZWdleCA9IEVNQUlMX1JFRztcbiAgICAgICAgaWYgKCFyZWdleC50ZXN0KGZpZWxkLnZhbHVlKSkge1xuICAgICAgICAgIHZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFZBTElEQVRFX01FU1NBR0UuRU1BSUwsIGZvcm1GaWVsZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwaG9uZSc6XG4gICAgICAgIGlmIChmaWVsZC52YWx1ZS5pbmNsdWRlcygnXycpIHx8IGZpZWxkLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgdmFsaWRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoVkFMSURBVEVfTUVTU0FHRS5QSE9ORSwgZm9ybUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICBpZiAoZmllbGQudmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHZhbGlkYXRlID0gZmFsc2U7XG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFZBTElEQVRFX01FU1NBR0UuTUVTU0FHRSwgZm9ybUZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0RXJyb3JNZXNzYWdlKG1lc3NhZ2UsIGZvcm1GaWVsZCkge1xuICBmb3JtRmllbGQuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZmllbGRfZXJyb3InKTtcbiAgY29uc3QgZXJyTWVzc2FnZSA9IGZvcm1GaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKVswXTtcbiAgZXJyTWVzc2FnZS5pbm5lclRleHQgPSBtZXNzYWdlO1xufVxuIiwiZXhwb3J0IGNvbnN0IFBIT05FX01BU0sgPSAnKzM3NS0oOTkpLTk5OS05OS05OSdcblxuZXhwb3J0IGNvbnN0IEVNQUlMX1JFRyA9IC9eW1xcdy1dKyhcXC5bXFx3LV0rKSpAKFtcXHctXStcXC4pK1thLXpBLVpdezIsN30kL1xuXG5leHBvcnQgY29uc3QgVkFMSURBVEVfTUVTU0FHRSA9IHtcbiAgTkFNRTon0JLQstC10LTQuNGC0LUg0LjQvNGPJyxcbiAgRU1BSUw6J9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IGVtYWlsJyxcbiAgUEhPTkU6J9CS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXG4gIE1FU1NBR0U6J9CS0LLQtdC00LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtScsXG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfTk9UX0ZPVU5EPSfQodC10YDQstC10YAg0L3QtSDQtNC+0YHRgtGD0L/QtdC9JyIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XG4gIEhPU1Q6ICdodHRwOi8vbG9jYWxob3N0OjkwOTAnLFxuICBSRU1PVEVfSE9TVDogJ2h0dHA6Ly9ub2RlLnpodWtvZmYuYnknLFxuICBSRUdJU1RSQVRJT046ICcvYXBpL3JlZ2lzdHJhdGlvbicsXG4gIFBJTkc6ICcvYXBpL3BpbmcnLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmcud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyrQntCx0L3Rg9C70LXQvdC40LUgKi9cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOmJlZm9yZSwgKjphZnRlciB7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46Zm9jdXMsIDphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5hOmZvY3VzLCBhOmFjdGl2ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm5hdiwgZm9vdGVyLCBoZWFkZXIsIGFzaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuaW5wdXQ6Oi1tcy1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6dmlzaXRlZCwgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG59XG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5yb3RhdGUtdmVydC1jZW50ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLXZlcnQtY2VudGVyIDAuNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGJvdGg7XG4gIGFuaW1hdGlvbjogcm90YXRlLXZlcnQtY2VudGVyIDAuNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtdmVydC1jZW50ZXIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlLXZlcnQtY2VudGVyIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG4uc2xpZGUtaW4tYmx1cnJlZC10b3Age1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tYmx1cnJlZC10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi1ibHVycmVkLXRvcCAwLjZzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1pbi1ibHVycmVkLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMi41KSBzY2FsZVgoMC4yKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uc2xpZGUtb3V0LWJsdXJyZWQtdG9wIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dC1ibHVycmVkLXRvcCAwLjQ1cyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLW91dC1ibHVycmVkLXRvcCAwLjQ1cyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0LWJsdXJyZWQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMikgc2NhbGVYKDAuMik7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpO1xuICAgIGZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC1ibHVycmVkLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgZmlsdGVyOiBibHVyKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMikgc2NhbGVYKDAuMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIpIHNjYWxlWCgwLjIpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwO1xuICB3aWR0aDogMzEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIsIDIwLCAwLjU0KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAxNXB4IDMwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xufVxuLmZvcm1fX3RpdGxlIHtcbiAgY29sb3I6ICM4Q0JERTY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmZvcm1fX2ZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5mb3JtX19maWVsZCBpbnB1dCwgLmZvcm1fX2ZpZWxkIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMUI1MjgwO1xuICBjb2xvcjogI0NGRTlGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG4uZm9ybV9fZmllbGQgaW5wdXQ6aG92ZXIsIC5mb3JtX19maWVsZCB0ZXh0YXJlYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0ZFOUZGO1xufVxuLmZvcm1fX2ZpZWxkIGlucHV0OmZvY3VzLCAuZm9ybV9fZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NGRTlGRjtcbn1cbi5mb3JtX19maWVsZF9lcnJvciBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTY4RjhDO1xufVxuLmZvcm1fX2ZpZWxkX2Vycm9yIGxhYmVsIHtcbiAgY29sb3I6ICNFNjhGOEM7XG59XG4uZm9ybV9fZmllbGRfZXJyb3IgLmVycm9yIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mb3JtX19sYWJlbCB7XG4gIGNvbG9yOiAjOENCREU2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybV9faW5wdXQsIC5mb3JtX190ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5mb3JtX19lcnJvciB7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG4uZm9ybV9fc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5mb3JtX19zdGF0dXNfZXJyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29sb3I6ICNFNjhGOEM7XG59XG4uZm9ybV9fc3RhdHVzX3N1Y2Nlc3Mge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb2xvcjogIzhDRTZBQjtcbn1cbi5mb3JtX3N1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOENFNkFCO1xufVxuLmZvcm1fZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTY4RjhDO1xufVxuXG4uZm9ybV9fZmllbGQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLCA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5lcnJvciB7XG4gIGhlaWdodDogMTRweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjRTY4RjhDO1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIsIDIwLCAwLjU0KTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cbi5tb2RhbF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjOENCREU2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG5kaWFsb2dbb3Blbl06OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjUyODA7XG4gIGNvbG9yOiAjOENCREU2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwIDEycHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk4M0IzO1xuICBjb2xvcjogI0NGRTlGRjtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2MTczO1xufVxuLmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzYxNzM7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICNDRkU5RkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL3N0eWxlLnNhc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL3N0eWxlLXJlc2V0LnNhc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3R5bGVzL2FuaW1hdGlvbi5zYXNzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3N0eWxlcy9jb25zdGFudHMuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEIsYUFBQTtBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FEQ0Y7QUNDRTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBRENKOztBQ0NDO0VBQ0MsYUFBQTtBREVGOztBQ0NFO0VBQ0UsYUFBQTtBREVKOztBQ0FBO0VBQ0UsY0FBQTtBREdGOztBQ0RBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QURJRjs7QUNGQTtFQUNFLG9CQUFBO0FES0Y7O0FDSEE7RUFDRSxhQUFBO0FETUY7O0FD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Q0EsMEJBQUE7RUFDQSwyQ0FBQTtBQStORjtBQTlORTtFQUNFLHlCQUFBO0VBQ0EsY0duSmM7QUhtWGxCO0FBL05FO0VBQ0UseUJBQUE7QUFpT0o7QUFoT0k7RUFDRSx5QkFBQTtBQWtPTjs7QUFoT0E7RUFDRSxhQUFBO0VBQ0EsY0czSmdCO0VINEpoQix5REFBQTtBQW1PRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdzdHlsZS1yZXNldCdcXG5AaW1wb3J0ICdjb25zdGFudHMnXFxuQGltcG9ydCAnYW5pbWF0aW9uJ1xcblxcbmJvZHkgXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9iZy53ZWJwJylcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b21cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9cXG4gXFxuLndyYXBwZXJcXG4gIGhlaWdodDogMTAwdmhcXG4gIHdpZHRoOiAxMDB2d1xcbiAgZGlzcGxheTogZmxleFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gIG92ZXJmbG93OiBzY3JvbGxcXG5cXG4uZm9ybVxcbiAgZGlzcGxheTogZmxleFxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICMwMDAwMDBcXG4gIHdpZHRoOiAzMTBweFxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRyYW5zcGFyZW50XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMjUpKVxcbiAgcGFkZGluZzogMzBweCAzMHB4IDE1cHggMzBweFxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZylcXG4gICZfX3RpdGxlXFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeVxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90b1xcbiAgICBmb250LXNpemU6IDI0cHhcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHhcXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweFxcbiAgJl9fZmllbGRzXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBnYXA6IDI1cHhcXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweFxcbiAgJl9fZmllbGQgaW5wdXQsICZfX2ZpZWxkIHRleHRhcmVhXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItdGVydGlhcnlcXG4gICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnlcXG4gICAgZm9udC1zaXplOiAxOHB4XFxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbFxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtc1xcbiAgICAmOmhvdmVyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1zZWNvbmRhcnlcXG4gICAgJjpmb2N1c1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5XFxuICAmX19maWVsZF9lcnJvciBpbnB1dFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWVycm9yXFxuICAmX19maWVsZF9lcnJvciBsYWJlbFxcbiAgICBjb2xvcjogJGNvbG9yLWVycm9yXFxuICAmX19maWVsZF9lcnJvciAuZXJyb3IgXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGVcXG4gICZfX2xhYmVsXFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeVxcbiAgICBmb250LXNpemU6IDE2cHhcXG4gICZfX2lucHV0LCAmX190ZXh0YXJlYVxcbiAgICB3aWR0aDogMTAwJVxcbiAgICBwYWRkaW5nOiA1cHhcXG4gICAgbWFyZ2luLXRvcDogNXB4XFxuICAmX19lcnJvclxcbiAgICBwYWRkaW5nLXRvcDogMXB4XFxuICAmX19zdGF0dXNcXG4gICAgbWFyZ2luLXRvcDogN3B4XFxuICAgIGhlaWdodDogMTRweFxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW5cXG4gICZfX3N0YXR1c19lcnJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZVxcbiAgICBjb2xvcjogJGNvbG9yLWVycm9yXFxuICAmX19zdGF0dXNfc3VjY2Vzc1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlXFxuICAgIGNvbG9yOiAkY29sb3Itc3VjY2Vzc1xcbiAgJl9zdWNjZXNzXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1zdWNjZXNzXFxuICAmX2Vycm9yXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1lcnJvclxcblxcbi5mb3JtX19maWVsZCB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIsIDo6LXdlYmtpdC1zY3JvbGxiYXJcXG4gIHdpZHRoOiAwXFxuXFxuLmVycm9yXFxuICBoZWlnaHQ6IDE0cHhcXG4gIHZpc2liaWxpdHk6IGhpZGRlblxcbiAgZm9udC1zaXplOiAxNHB4XFxuICBjb2xvcjogJGNvbG9yLWVycm9yXFxuXFxuLm1vZGFsXFxuICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gIGxlZnQ6IDUwJVxcbiAgdG9wOiA1MCVcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXFxuICB3aWR0aDogMzEwcHhcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10cmFuc3BhcmVudFxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDEzcHggcmdiYSgwLCAwLCAwLCAwLjI1KSlcXG4gIHBhZGRpbmc6IDMwcHhcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGxcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtc1xcbiAgJl9fY29udGVudFxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiA0NXB4XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeVxcbiAgICBmb250LXNpemU6IDI0cHhcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxuXFxuLm1vZGFsLWJ1dHRvblxcbiAgcG9zaXRpb246IGFic29sdXRlXFxuICBsZWZ0OiAwXFxuICB0b3A6IDBcXG5cXG5kaWFsb2dbb3Blbl06OmJhY2tkcm9wXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA1JSlcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpXFxuXFxuLm5vLXNjcm9sbFxcbiAgb3ZlcmZsb3c6IGhpZGRlblxcblxcbi5idXR0b25cXG4gIHdpZHRoOiAxMDAlXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVydGlhcnlcXG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeVxcbiAgZm9udC1zaXplOiAxNnB4XFxuICBmb250LXdlaWdodDogNjAwXFxuICBsZXR0ZXItc3BhY2luZzogLjVweFxcbiAgZGlzcGxheTogZmxleFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlclxcbiAgcGFkZGluZzogMTBweCAwIDEycHggMFxcbiAgY3Vyc29yOiBwb2ludGVyXFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGxcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtc1xcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSlcXG4gICY6aG92ZXJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5ODNCM1xcbiAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeVxcbiAgJjpkaXNhYmxlZFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2MTczXFxuICAgICY6aG92ZXJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM2MTczXFxuXFxuLmNvbnRlbnRcXG4gIHBhZGRpbmc6IDIwcHhcXG4gIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9iZy53ZWJwJylcIixcIi8q0J7QsdC90YPQu9C10L3QuNC1XFxuXFxuKlxcbiAgcGFkZGluZzogMFxcbiAgbWFyZ2luOiAwXFxuICBib3JkZXI6IDBcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveFxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuICAmOmJlZm9yZSwgJjphZnRlclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3hcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG5cXFxcOmZvY3VzLCA6YWN0aXZlXFxuICBvdXRsaW5lOiBub25lXFxuXFxuYVxcbiAgJjpmb2N1cywgJjphY3RpdmVcXG4gICAgb3V0bGluZTogbm9uZVxcblxcbm5hdiwgZm9vdGVyLCBoZWFkZXIsIGFzaWRlXFxuICBkaXNwbGF5OiBibG9ja1xcblxcbmh0bWwsIGJvZHlcXG4gIGhlaWdodDogMTAwJVxcbiAgd2lkdGg6IDEwMCVcXG4gIGZvbnQtc2l6ZTogMTAwJVxcbiAgbGluZS1oZWlnaHQ6IDFcXG4gIGZvbnQtc2l6ZTogMTRweFxcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCVcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJVxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlXFxuXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWFcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0XFxuXFxuaW5wdXQ6Oi1tcy1jbGVhclxcbiAgZGlzcGxheTogbm9uZVxcblxcbmJ1dHRvblxcbiAgY3Vyc29yOiBwb2ludGVyXFxuXFxuICAmOjotbW96LWZvY3VzLWlubmVyXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgYm9yZGVyOiAwXFxuXFxuYVxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuXFxuICAmOnZpc2l0ZWQsICY6aG92ZXJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuXFxudWxcXG4gIG1hcmdpbjogMFxcblxcbiAgbGlcXG4gICAgbGlzdC1zdHlsZTogbm9uZVxcbiAgICBtYXJnaW46IDBcXG5cXG5pbWdcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3BcXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2XFxuICBmb250LXNpemU6IGluaGVyaXRcXG4gIGZvbnQtd2VpZ2h0OiA0MDBcXG4gIG1hcmdpbjogMFxcblxcbnBcXG4gIG1hcmdpbjogMFxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLFwiXFxuICBcXG4ucm90YXRlLXZlcnQtY2VudGVyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlLXZlcnQtY2VudGVyIDAuNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGJvdGhcXG4gIGFuaW1hdGlvbjogcm90YXRlLXZlcnQtY2VudGVyIDAuNXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIGJvdGhcXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLXZlcnQtY2VudGVyXFxuICAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKVxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMClcXG5cXG4gIDEwMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxcblxcbkBrZXlmcmFtZXMgcm90YXRlLXZlcnQtY2VudGVyXFxuICAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKVxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMClcXG5cXG4gIDEwMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKVxcblxcbi5zbGlkZS1pbi1ibHVycmVkLXRvcFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWJsdXJyZWQtdG9wIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGJvdGhcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tYmx1cnJlZC10b3AgMC42cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgYm90aFxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1ibHVycmVkLXRvcFxcbiAgMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMilcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIuNSkgc2NhbGVYKDAuMilcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIGZpbHRlcjogYmx1cig0MHB4KVxcbiAgICBvcGFjaXR5OiAwXFxuXFxuICAxMDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlWSgxKSBzY2FsZVgoMSlcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDEpIHNjYWxlWCgxKVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKVxcbiAgICBmaWx0ZXI6IGJsdXIoMClcXG4gICAgb3BhY2l0eTogMVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4tYmx1cnJlZC10b3BcXG4gIDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyLjUpIHNjYWxlWCgwLjIpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig0MHB4KVxcbiAgICBmaWx0ZXI6IGJsdXIoNDBweClcXG4gICAgb3BhY2l0eTogMFxcblxcbiAgMTAwJVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpICBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJVxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApXFxuICAgIGZpbHRlcjogYmx1cigwKVxcbiAgICBvcGFjaXR5OiAxXFxuXFxuLnNsaWRlLW91dC1ibHVycmVkLXRvcFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dC1ibHVycmVkLXRvcCAwLjQ1cyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSBib3RoXFxuICBhbmltYXRpb246IHNsaWRlLW91dC1ibHVycmVkLXRvcCAwLjQ1cyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KSBib3RoXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dC1ibHVycmVkLXRvcFxcbiAgMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSlcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApXFxuICAgIGZpbHRlcjogYmx1cigwKVxcbiAgICBvcGFjaXR5OiAxXFxuXFxuICAxMDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIpIHNjYWxlWCgwLjIpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNDBweClcXG4gICAgZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIG9wYWNpdHk6IDBcXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC1ibHVycmVkLXRvcFxcbiAgMCVcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKSBzY2FsZVkoMSkgc2NhbGVYKDEpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgxKSBzY2FsZVgoMSlcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlXFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApXFxuICAgIGZpbHRlcjogYmx1cigwKVxcbiAgICBvcGFjaXR5OiAxXFxuXFxuICAxMDAlXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwcHgpIHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGVZKDIpIHNjYWxlWCgwLjIpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSB0cmFuc2xhdGVYKC01MCUpIHNjYWxlWSgyKSBzY2FsZVgoMC4yKVxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJVxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCVcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNDBweClcXG4gICAgZmlsdGVyOiBibHVyKDQwcHgpXFxuICAgIG9wYWNpdHk6IDBcIixcIiRjb2xvci1wcmltYXJ5OiAjOENCREU2XFxuJGNvbG9yLXNlY29uZGFyeTogI0NGRTlGRlxcbiRjb2xvci10ZXJ0aWFyeTogIzFCNTI4MFxcbiRjb2xvci1lcnJvcjogI0U2OEY4Q1xcbiRjb2xvci1zdWNjZXNzOiAjOENFNkFCXFxuJGNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDEyLCAyMCwgMC41NClcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiFcbiAqIGRpc3QvaW5wdXRtYXNrXG4gKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuICogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAyMyBSb2JpbiBIZXJib3RzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIFZlcnNpb246IDUuMC44XG4gKi9cbiFmdW5jdGlvbihlLCB0KSB7XG4gICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IHQoKTsgZWxzZSBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKFtdLCB0KTsgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdCgpO1xuICAgICAgICBmb3IgKHZhciBuIGluIGkpIChcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0cyA6IGUpW25dID0gaVtuXTtcbiAgICB9XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBlID0ge1xuICAgICAgICAgICAgODc0MTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBpID0gIShcInVuZGVmaW5lZFwiID09IHR5cGVvZiB3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCAhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IGk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzk3NjogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSgyODM5KSwgYSA9IHtcbiAgICAgICAgICAgICAgICAgICAgX21heFRlc3RQb3M6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbG1hcmtlcjogWyBcIltcIiwgXCJdXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpZmllcm1hcmtlcjogWyBcIntcIiwgXCJ9XCIgXSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBtYXJrZXI6IFsgXCIoXCIsIFwiKVwiIF0sXG4gICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3JtYXJrZXI6IFwifFwiLFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVDaGFyOiBcIlxcXFxcIixcbiAgICAgICAgICAgICAgICAgICAgbWFzazogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uY29tcGxldGU6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgICAgIG9uaW5jb21wbGV0ZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25jbGVhcmVkOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVNYXNrT25TdWJtaXQ6ICExLFxuICAgICAgICAgICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITAsXG4gICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlVmlzdWFsOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0Lm9uQmVmb3JlTWFzayA/IHQub25CZWZvcmVNYXNrLmNhbGwodGhpcywgZSwgdCkgOiBlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkJlZm9yZVdyaXRlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBvblVuTWFzazogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd01hc2tPbkZvY3VzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgc2hvd01hc2tPbkhvdmVyOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgb25LZXlWYWxpZGF0aW9uOiBmdW5jdGlvbigpIHt9LFxuICAgICAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIiBcIixcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRBbGlnbjogITEsXG4gICAgICAgICAgICAgICAgICAgIHVuZG9PbkVzY2FwZTogITAsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIF9yYWRpeERhbmNlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXG4gICAgICAgICAgICAgICAgICAgIHRhYlRocm91Z2g6ICExLFxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c0lucHV0VHlwZTogWyBcInRleHRcIiwgXCJ0ZWxcIiwgXCJ1cmxcIiwgXCJwYXNzd29yZFwiLCBcInNlYXJjaFwiIF0sXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgbi5rZXlzLkJhY2tzcGFjZSwgbi5rZXlzLlRhYiwgbi5rZXlzLlBhdXNlLCBuLmtleXMuRXNjYXBlLCBuLmtleXMuUGFnZVVwLCBuLmtleXMuUGFnZURvd24sIG4ua2V5cy5FbmQsIG4ua2V5cy5Ib21lLCBuLmtleXMuQXJyb3dMZWZ0LCBuLmtleXMuQXJyb3dVcCwgbi5rZXlzLkFycm93UmlnaHQsIG4ua2V5cy5BcnJvd0Rvd24sIG4ua2V5cy5JbnNlcnQsIG4ua2V5cy5EZWxldGUsIG4ua2V5cy5Db250ZXh0TWVudSwgbi5rZXlzLkYxLCBuLmtleXMuRjIsIG4ua2V5cy5GMywgbi5rZXlzLkY0LCBuLmtleXMuRjUsIG4ua2V5cy5GNiwgbi5rZXlzLkY3LCBuLmtleXMuRjgsIG4ua2V5cy5GOSwgbi5rZXlzLkYxMCwgbi5rZXlzLkYxMSwgbi5rZXlzLkYxMiwgbi5rZXlzLlByb2Nlc3MsIG4ua2V5cy5VbmlkZW50aWZpZWQsIG4ua2V5cy5TaGlmdCwgbi5rZXlzLkNvbnRyb2wsIG4ua2V5cy5BbHQsIG4ua2V5cy5UYWIsIG4ua2V5cy5BbHRHcmFwaCwgbi5rZXlzLkNhcHNMb2NrIF0sXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNEZWZpbml0aW9uU3ltYm9sOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgIGppdE1hc2tpbmc6ICExLFxuICAgICAgICAgICAgICAgICAgICBudWxsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0RXZlbnRPbmx5OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgbm9WYWx1ZVBhdGNoaW5nOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uQ2xpY2s6IFwibHZwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0RGF0YUF0dHJpYnV0ZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICBzaGlmdFBvc2l0aW9uczogITAsXG4gICAgICAgICAgICAgICAgICAgIHVzZVByb3RvdHlwZURlZmluaXRpb25zOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50VGltZU91dDogM2UzLFxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRlczoge31cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IGE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzM5MjogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5kZWZhdWx0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgOToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjEwLVxcdWZmMTldXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTAtXFx1ZmYxOUEtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyNTM6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkgcmV0dXJuIGUuX19kYXRhID8gZS5fX2RhdGFbdF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBlLl9fZGF0YSA9IGUuX19kYXRhIHx8IHt9LCBlLl9fZGF0YVt0XSA9IGk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzNzc2OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LkV2ZW50ID0gdm9pZCAwLCB0Lm9mZiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIG47XG4gICAgICAgICAgICAgICAgICAgIGYodGhpc1swXSkgJiYgZSAmJiAoaSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgbiA9IHRoaXNbMF0sIGUuc3BsaXQoXCIgXCIpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gbChlLnNwbGl0KFwiLlwiKSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhLCByLCBvID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubGVuZ3RoID4gMCkgaWYgKHZvaWQgMCA9PT0gdCkgZm9yIChhID0gMCwgciA9IGlbZV1bbl0ubGVuZ3RoOyBhIDwgcjsgYSsrKSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBuICYmIG4ubGVuZ3RoID4gMCA/IG4gOiBcImdsb2JhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBpW2VdW25dW2FdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IGVsc2Ugby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbiAmJiBuLmxlbmd0aCA+IDAgPyBuIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmIChuLmxlbmd0aCA+IDApIGZvciAodmFyIHMgaW4gaSkgZm9yICh2YXIgbCBpbiBpW3NdKSBpZiAobCA9PT0gbikgaWYgKHZvaWQgMCA9PT0gdCkgZm9yIChhID0gMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IGlbc11bbF0ubGVuZ3RoOyBhIDwgcjsgYSsrKSBvLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldjogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBpW3NdW2xdW2FdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IGVsc2Ugby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXY6IHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoYVswXSwgYVsxXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZS5ldiwgYSA9IGUuaGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZSwgdCwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbiBpID09IDEpIGlmIChuLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBuLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgYSwgITEpIDogbi5kZXRhY2hFdmVudCAmJiBuLmRldGFjaEV2ZW50KFwib25cIi5jb25jYXQoZSksIGEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnbG9iYWxcIiA9PT0gdCkgZm9yICh2YXIgciBpbiBpW2VdKSBpW2VdW3JdLnNwbGljZShpW2VdW3JdLmluZGV4T2YoYSksIDEpOyBlbHNlIGlbZV1bdF0uc3BsaWNlKGlbZV1bdF0uaW5kZXhPZihhKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSh0LCBlLm5hbWVzcGFjZSwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sIHQub24gPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmKHRoaXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgbiA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsKGUuc3BsaXQoXCIuXCIpLCAyKSwgciA9IGFbMF0sIG8gPSBhWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uYWRkRXZlbnRMaXN0ZW5lciA/IG4uYWRkRXZlbnRMaXN0ZW5lcihlLCB0LCAhMSkgOiBuLmF0dGFjaEV2ZW50ICYmIG4uYXR0YWNoRXZlbnQoXCJvblwiLmNvbmNhdChlKSwgdCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpW2VdID0gaVtlXSB8fCB7fSwgaVtlXVthXSA9IGlbZV1bYV0gfHwgW10sIGlbZV1bYV0ucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHIsIHZvaWQgMCA9PT0gbyA/IFwiZ2xvYmFsXCIgOiBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LCB0LnRyaWdnZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZih0aGlzWzBdKSkgZm9yICh2YXIgaSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgbiA9IHRoaXNbMF0sIHIgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gZS5zcGxpdChcIiBcIikgOiBbIGUudHlwZSBdLCBzID0gMDsgcyA8IHIubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gcltzXS5zcGxpdChcIi5cIiksIGMgPSBsWzBdLCB1ID0gbFsxXSB8fCBcImdsb2JhbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZG9jdW1lbnQgJiYgXCJnbG9iYWxcIiA9PT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkLCBwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiaW5wdXRcIiA9PT0gYykgcC5pbnB1dFR5cGUgPSBcImluc2VydFRleHRcIiwgZCA9IG5ldyBJbnB1dEV2ZW50KGMsIHApOyBlbHNlIGQgPSBuZXcgQ3VzdG9tRXZlbnQoYywgcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KGMsIHAuYnViYmxlcywgcC5jYW5jZWxhYmxlLCBwLmRldGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50eXBlICYmICgwLCBhLmRlZmF1bHQpKGQsIGUpLCBuLmRpc3BhdGNoRXZlbnQoZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIChkID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKSkuZXZlbnRUeXBlID0gYywgZC5kZXRhaWwgPSBhcmd1bWVudHNbMV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudHlwZSAmJiAoMCwgYS5kZWZhdWx0KShkLCBlKSwgbi5maXJlRXZlbnQoXCJvblwiICsgZC5ldmVudFR5cGUsIGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IGlbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBhcmd1bWVudHNbMF0udHlwZSA/IGFyZ3VtZW50c1swXSA6IG8uZGVmYXVsdC5FdmVudChhcmd1bWVudHNbMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF0uZGV0YWlsID0gYXJndW1lbnRzLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gaVtjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJnbG9iYWxcIiA9PT0gdSA/IE9iamVjdC52YWx1ZXMoaCkuZmxhdCgpIDogaFt1XSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5hcHBseShuLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgbiwgYSA9IHUoaSg2MDApKSwgciA9IHUoaSg5MzgwKSksIG8gPSB1KGkoNDk2MykpLCBzID0gdShpKDg3NDEpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCByLCBvLCBzID0gW10sIGwgPSAhMCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gKGkgPSBpLmNhbGwoZSkpLm5leHQsIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoaSkgIT09IGkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEobCA9IChuID0gci5jYWxsKGkpKS5kb25lKSAmJiAocy5wdXNoKG4udmFsdWUpLCBzLmxlbmd0aCAhPT0gdCk7IGwgPSAhMCkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsICYmIG51bGwgIT0gaS5yZXR1cm4gJiYgKG8gPSBpLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IGkgJiYgZS5jb25zdHJ1Y3RvciAmJiAoaSA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gaSB8fCBcIlNldFwiID09PSBpKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBpIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBuZXcgQXJyYXkodCk7IGkgPCB0OyBpKyspIG5baV0gPSBlW2ldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHQuRXZlbnQgPSBuLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHIuZGVmYXVsdC5DdXN0b21FdmVudCA/IHQuRXZlbnQgPSBuID0gci5kZWZhdWx0LkN1c3RvbUV2ZW50IDogcy5kZWZhdWx0ICYmICh0LkV2ZW50ID0gbiA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHQgfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KGUsIHQuYnViYmxlcywgdC5jYW5jZWxhYmxlLCB0LmRldGFpbCksIGk7XG4gICAgICAgICAgICAgICAgfSwgbi5wcm90b3R5cGUgPSByLmRlZmF1bHQuRXZlbnQucHJvdG90eXBlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSBmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCwgbiwgYSwgciwgbywgcywgbCA9IGFyZ3VtZW50c1swXSB8fCB7fSwgYyA9IDEsIHUgPSBhcmd1bWVudHMubGVuZ3RoLCBmID0gITE7XG4gICAgICAgICAgICAgICAgICAgIFwiYm9vbGVhblwiID09IHR5cGVvZiBsICYmIChmID0gbCwgbCA9IGFyZ3VtZW50c1tjXSB8fCB7fSwgYysrKTtcbiAgICAgICAgICAgICAgICAgICAgXCJvYmplY3RcIiAhPT0gaShsKSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGwgJiYgKGwgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO2MgPCB1OyBjKyspIGlmIChudWxsICE9ICh0ID0gYXJndW1lbnRzW2NdKSkgZm9yIChuIGluIHQpIGEgPSBsW25dLCBsICE9PSAociA9IHRbbl0pICYmIChmICYmIHIgJiYgKFwiW29iamVjdCBPYmplY3RdXCIgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChyKSB8fCAobyA9IEFycmF5LmlzQXJyYXkocikpKSA/IChvID8gKG8gPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHMgPSBhICYmIEFycmF5LmlzQXJyYXkoYSkgPyBhIDogW10pIDogcyA9IGEgJiYgXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID8gYSA6IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgbFtuXSA9IGUoZiwgcywgcikpIDogdm9pZCAwICE9PSByICYmIChsW25dID0gcikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ5NjM6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHMoaSg2MDApKSwgYSA9IHMoaSg5MzgwKSksIHIgPSBzKGkoMjUzKSksIG8gPSBpKDM3NzYpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbCA9IGEuZGVmYXVsdC5kb2N1bWVudDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBjID8gZSA6IHRoaXMgaW5zdGFuY2VvZiBjID8gdm9pZCAobnVsbCAhPSBlICYmIGUgIT09IGEuZGVmYXVsdCAmJiAodGhpc1swXSA9IGUubm9kZU5hbWUgPyBlIDogdm9pZCAwICE9PSBlWzBdICYmIGVbMF0ubm9kZU5hbWUgPyBlWzBdIDogbC5xdWVyeVNlbGVjdG9yKGUpLCBcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0aGlzWzBdICYmIG51bGwgIT09IHRoaXNbMF0gJiYgKHRoaXNbMF0uZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSB8fCB7fSkpKSA6IG5ldyBjKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjLnByb3RvdHlwZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb246IG8ub24sXG4gICAgICAgICAgICAgICAgICAgIG9mZjogby5vZmYsXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG8udHJpZ2dlclxuICAgICAgICAgICAgICAgIH0sIGMuZXh0ZW5kID0gbi5kZWZhdWx0LCBjLmRhdGEgPSByLmRlZmF1bHQsIGMuRXZlbnQgPSBvLkV2ZW50O1xuICAgICAgICAgICAgICAgIHZhciB1ID0gYztcbiAgICAgICAgICAgICAgICB0LmRlZmF1bHQgPSB1O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDk4NDU6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQubW9iaWxlID0gdC5pcGhvbmUgPSB0LmllID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuLCBhID0gKG4gPSBpKDkzODApKSAmJiBuLl9fZXNNb2R1bGUgPyBuIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgciA9IGEuZGVmYXVsdC5uYXZpZ2F0b3IgJiYgYS5kZWZhdWx0Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgXCJcIiwgbyA9IHIuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCByLmluZGV4T2YoXCJUcmlkZW50L1wiKSA+IDAsIHMgPSBuYXZpZ2F0b3IudXNlckFnZW50RGF0YSAmJiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5tb2JpbGUgfHwgYS5kZWZhdWx0Lm5hdmlnYXRvciAmJiBhLmRlZmF1bHQubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzIHx8IFwib250b3VjaHN0YXJ0XCIgaW4gYS5kZWZhdWx0LCBsID0gL2lwaG9uZS9pLnRlc3Qocik7XG4gICAgICAgICAgICAgICAgdC5pcGhvbmUgPSBsLCB0Lm1vYmlsZSA9IHMsIHQuaWUgPSBvO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDcxODQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUucmVwbGFjZShpLCBcIlxcXFwkMVwiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBpID0gbmV3IFJlZ0V4cChcIihcXFxcXCIgKyBbIFwiL1wiLCBcIi5cIiwgXCIqXCIsIFwiK1wiLCBcIj9cIiwgXCJ8XCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCIsIFwiXFxcXFwiLCBcIiRcIiwgXCJeXCIgXS5qb2luKFwifFxcXFxcIikgKyBcIilcIiwgXCJnaW1cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAzMDogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5FdmVudEhhbmRsZXJzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSg4NzExKSwgYSA9IGkoMjgzOSksIHIgPSBpKDk4NDUpLCBvID0gaSg3MjE1KSwgcyA9IGkoNzc2MCksIGwgPSBpKDQ3MTMpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBlW1N5bWJvbC5pdGVyYXRvcl0gfHwgZVtcIkBAaXRlcmF0b3JcIl07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZSkgfHwgKGkgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUpIHJldHVybiB1KGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBpICYmIGUuY29uc3RydWN0b3IgJiYgKGkgPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIk1hcFwiID09PSBpIHx8IFwiU2V0XCIgPT09IGkpIHJldHVybiBBcnJheS5mcm9tKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBpIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpKSByZXR1cm4gdShlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oZSkpIHx8IHQgJiYgZSAmJiBcIm51bWJlclwiID09IHR5cGVvZiBlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgJiYgKGUgPSBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IDAsIGEgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHM6IGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPj0gZS5sZW5ndGggPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVbbisrXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZjogYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHIsIG8gPSAhMCwgcyA9ICExO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGkuY2FsbChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvID0gZS5kb25lLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gITAsIHIgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gfHwgbnVsbCA9PSBpLnJldHVybiB8fCBpLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSB0aHJvdyByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBuZXcgQXJyYXkodCk7IGkgPCB0OyBpKyspIG5baV0gPSBlW2ldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGYgPSB7XG4gICAgICAgICAgICAgICAgICAgIGtleUV2ZW50OiBmdW5jdGlvbihlLCB0LCBpLCBjLCB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuaW5wdXRtYXNrLCBwID0gZC5vcHRzLCBoID0gZC5kZXBlbmRlbmN5TGliLCB2ID0gZC5tYXNrc2V0LCBtID0gdGhpcywgZyA9IGgobSksIHkgPSBlLmtleSwgayA9IG4uY2FyZXQuY2FsbChkLCBtKSwgYiA9IHAub25LZXlEb3duLmNhbGwodGhpcywgZSwgbi5nZXRCdWZmZXIuY2FsbChkKSwgaywgcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBiKSByZXR1cm4gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID09PSBhLmtleXMuQmFja3NwYWNlIHx8IHkgPT09IGEua2V5cy5EZWxldGUgfHwgci5pcGhvbmUgJiYgeSA9PT0gYS5rZXlzLkJBQ0tTUEFDRV9TQUZBUkkgfHwgZS5jdHJsS2V5ICYmIHkgPT09IGEua2V5cy54ICYmICEoXCJvbmN1dFwiIGluIG0pKSBlLnByZXZlbnREZWZhdWx0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5oYW5kbGVSZW1vdmUuY2FsbChkLCBtLCB5LCBrKSwgKDAsIHMud3JpdGVCdWZmZXIpKG0sIG4uZ2V0QnVmZmVyLmNhbGwoZCwgITApLCB2LnAsIGUsIG0uaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBuLmdldEJ1ZmZlci5jYWxsKGQpLmpvaW4oXCJcIikpOyBlbHNlIGlmICh5ID09PSBhLmtleXMuRW5kIHx8IHkgPT09IGEua2V5cy5QYWdlRG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IG4uc2Vla05leHQuY2FsbChkLCBuLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uY2FyZXQuY2FsbChkLCBtLCBlLnNoaWZ0S2V5ID8gay5iZWdpbiA6IHgsIHgsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB5ID09PSBhLmtleXMuSG9tZSAmJiAhZS5zaGlmdEtleSB8fCB5ID09PSBhLmtleXMuUGFnZVVwID8gKGUucHJldmVudERlZmF1bHQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmNhcmV0LmNhbGwoZCwgbSwgMCwgZS5zaGlmdEtleSA/IGsuYmVnaW4gOiAwLCAhMCkpIDogcC51bmRvT25Fc2NhcGUgJiYgeSA9PT0gYS5rZXlzLkVzY2FwZSAmJiAhMCAhPT0gZS5hbHRLZXkgPyAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5jaGVja1ZhbCkobSwgITAsICExLCBkLnVuZG9WYWx1ZS5zcGxpdChcIlwiKSksIGcudHJpZ2dlcihcImNsaWNrXCIpKSA6IHkgIT09IGEua2V5cy5JbnNlcnQgfHwgZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgfHwgdm9pZCAwICE9PSBkLnVzZXJPcHRpb25zLmluc2VydE1vZGUgPyAhMCA9PT0gcC50YWJUaHJvdWdoICYmIHkgPT09IGEua2V5cy5UYWIgPyAhMCA9PT0gZS5zaGlmdEtleSA/IChrLmVuZCA9IG4uc2Vla1ByZXZpb3VzLmNhbGwoZCwgay5lbmQsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gbC5nZXRUZXN0LmNhbGwoZCwgay5lbmQgLSAxKS5tYXRjaC5zdGF0aWMgJiYgay5lbmQtLSwgay5iZWdpbiA9IG4uc2Vla1ByZXZpb3VzLmNhbGwoZCwgay5lbmQsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBrLmJlZ2luID49IDAgJiYgay5lbmQgPiAwICYmIChlLnByZXZlbnREZWZhdWx0KCksIG4uY2FyZXQuY2FsbChkLCBtLCBrLmJlZ2luLCBrLmVuZCkpKSA6IChrLmJlZ2luID0gbi5zZWVrTmV4dC5jYWxsKGQsIGsuYmVnaW4sICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBrLmVuZCA9IG4uc2Vla05leHQuY2FsbChkLCBrLmJlZ2luLCAhMCksIGsuZW5kIDwgdi5tYXNrTGVuZ3RoICYmIGsuZW5kLS0sIGsuYmVnaW4gPD0gdi5tYXNrTGVuZ3RoICYmIChlLnByZXZlbnREZWZhdWx0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbi5jYXJldC5jYWxsKGQsIG0sIGsuYmVnaW4sIGsuZW5kKSkpIDogZS5zaGlmdEtleSB8fCBwLmluc2VydE1vZGVWaXN1YWwgJiYgITEgPT09IHAuaW5zZXJ0TW9kZSAmJiAoeSA9PT0gYS5rZXlzLkFycm93UmlnaHQgPyBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG4uY2FyZXQuY2FsbChkLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmNhcmV0LmNhbGwoZCwgbSwgZS5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkgOiB5ID09PSBhLmtleXMuQXJyb3dMZWZ0ICYmIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gbi50cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGQsIG0uaW5wdXRtYXNrLmNhcmV0UG9zLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoZCwgbS5pbnB1dG1hc2suY2FyZXRQb3MuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmlzUlRMID8gbi5jYXJldC5jYWxsKGQsIG0sIGUgKyAoZSA9PT0gdi5tYXNrTGVuZ3RoID8gMCA6IDEpKSA6IG4uY2FyZXQuY2FsbChkLCBtLCBlIC0gKDAgPT09IGUgPyAwIDogMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApKSA6IG8uaXNTZWxlY3Rpb24uY2FsbChkLCBrKSA/IHAuaW5zZXJ0TW9kZSA9ICFwLmluc2VydE1vZGUgOiAocC5pbnNlcnRNb2RlID0gIXAuaW5zZXJ0TW9kZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmNhcmV0LmNhbGwoZCwgbSwgay5iZWdpbiwgay5iZWdpbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuaXNDb21wb3NpbmcgPSB5ID09IGEua2V5cy5Qcm9jZXNzIHx8IHkgPT0gYS5rZXlzLlVuaWRlbnRpZmllZCwgZC5pZ25vcmFibGUgPSBwLmlnbm9yYWJsZXMuaW5jbHVkZXMoeSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZi5rZXlwcmVzc0V2ZW50LmNhbGwodGhpcywgZSwgdCwgaSwgYywgdSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGtleXByZXNzRXZlbnQ6IGZ1bmN0aW9uKGUsIHQsIGksIHIsIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5pbnB1dG1hc2sgfHwgdGhpcywgdSA9IGMub3B0cywgZiA9IGMuZGVwZW5kZW5jeUxpYiwgZCA9IGMubWFza3NldCwgcCA9IGMuZWwsIGggPSBmKHApLCB2ID0gZS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHQgfHwgZS5jdHJsS2V5ICYmIGUuYWx0S2V5IHx8ICEoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBjLmlnbm9yYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSwgZyA9IHQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbi5jYXJldC5jYWxsKGMsIHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gdS5zdWJzdGl0dXRlc1t2XSB8fCB2LCBkLndyaXRlT3V0QnVmZmVyID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gby5pc1ZhbGlkLmNhbGwoYywgZywgdiwgciwgdm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0geSAmJiAobi5yZXNldE1hc2tTZXQuY2FsbChjLCAhMCksIG0gPSB2b2lkIDAgIT09IHkuY2FyZXQgPyB5LmNhcmV0IDogbi5zZWVrTmV4dC5jYWxsKGMsIHkucG9zLmJlZ2luID8geS5wb3MuYmVnaW4gOiB5LnBvcyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLnAgPSBtKSwgbSA9IHUubnVtZXJpY0lucHV0ICYmIHZvaWQgMCA9PT0geS5jYXJldCA/IG4uc2Vla1ByZXZpb3VzLmNhbGwoYywgbSkgOiBtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITEgIT09IGkgJiYgKHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5vbktleVZhbGlkYXRpb24uY2FsbChwLCB2LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApLCBkLndyaXRlT3V0QnVmZmVyICYmICExICE9PSB5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBuLmdldEJ1ZmZlci5jYWxsKGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMud3JpdGVCdWZmZXIpKHAsIGssIG0sIGUsICEwICE9PSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCgpLCB0KSByZXR1cm4gITEgIT09IHkgJiYgKHkuZm9yd2FyZFBvc2l0aW9uID0gbSksIHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHYgPT09IGEua2V5cy5FbnRlciAmJiBjLnVuZG9WYWx1ZSAhPT0gYy5fdmFsdWVHZXQoITApICYmIChjLnVuZG9WYWx1ZSA9IGMuX3ZhbHVlR2V0KCEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYXN0ZUV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCwgaSA9IHRoaXMuaW5wdXRtYXNrLCBhID0gaS5vcHRzLCByID0gaS5fdmFsdWVHZXQoITApLCBvID0gbi5jYXJldC5jYWxsKGksIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5pc1JUTCAmJiAodCA9IG8uZW5kLCBvLmVuZCA9IG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbChpLCBvLmJlZ2luKSwgby5iZWdpbiA9IG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbChpLCB0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IHIuc3Vic3RyKDAsIG8uYmVnaW4pLCB1ID0gci5zdWJzdHIoby5lbmQsIHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsID09IChpLmlzUlRMID8gbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpLnNsaWNlKCkucmV2ZXJzZSgpIDogbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpKS5zbGljZSgwLCBvLmJlZ2luKS5qb2luKFwiXCIpICYmIChsID0gXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdSA9PSAoaS5pc1JUTCA/IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKS5zbGljZSgpLnJldmVyc2UoKSA6IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpKSkuc2xpY2Uoby5lbmQpLmpvaW4oXCJcIikgJiYgKHUgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YSAmJiB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKSByID0gbCArIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpICsgdTsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmNsaXBib2FyZERhdGEgfHwgIWUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IGwgKyBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIikgKyB1O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSByO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gZi5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCwgcCA9IGMobi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHAucygpOyAhKGQgPSBwLm4oKSkuZG9uZTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmWzBdID09PSBoICYmIGYuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC5lKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuZigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmID0gZi5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYS5vbkJlZm9yZVBhc3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSAoZiA9IGEub25CZWZvcmVQYXN0ZS5jYWxsKGksIGYsIGEpKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYgfHwgKGYgPSByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLmNoZWNrVmFsKSh0aGlzLCAhMCwgITEsIGYudG9TdHJpbmcoKS5zcGxpdChcIlwiKSwgZSksIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRGYWxsQmFja0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBpID0gdC5vcHRzLCBvID0gdC5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMsIHUgPSB0aGlzLCBkID0gdS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSwgcCA9ICh0LmlzUlRMID8gbi5nZXRCdWZmZXIuY2FsbCh0KS5zbGljZSgpLnJldmVyc2UoKSA6IG4uZ2V0QnVmZmVyLmNhbGwodCkpLmpvaW4oXCJcIiksIGggPSBuLmNhcmV0LmNhbGwodCwgdSwgdm9pZCAwLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwICE9PSBkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPSBmdW5jdGlvbihlLCBhLCByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8sIHMsIGMsIHUgPSBlLnN1YnN0cigwLCByLmJlZ2luKS5zcGxpdChcIlwiKSwgZiA9IGUuc3Vic3RyKHIuYmVnaW4pLnNwbGl0KFwiXCIpLCBkID0gYS5zdWJzdHIoMCwgci5iZWdpbikuc3BsaXQoXCJcIiksIHAgPSBhLnN1YnN0cihyLmJlZ2luKS5zcGxpdChcIlwiKSwgaCA9IHUubGVuZ3RoID49IGQubGVuZ3RoID8gdS5sZW5ndGggOiBkLmxlbmd0aCwgdiA9IGYubGVuZ3RoID49IHAubGVuZ3RoID8gZi5sZW5ndGggOiBwLmxlbmd0aCwgbSA9IFwiXCIsIGcgPSBbXSwgeSA9IFwiflwiOyB1Lmxlbmd0aCA8IGg7ICkgdS5wdXNoKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtkLmxlbmd0aCA8IGg7ICkgZC5wdXNoKHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtmLmxlbmd0aCA8IHY7ICkgZi51bnNoaWZ0KHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtwLmxlbmd0aCA8IHY7ICkgcC51bnNoaWZ0KHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IHUuY29uY2F0KGYpLCBiID0gZC5jb25jYXQocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocyA9IDAsIG8gPSBrLmxlbmd0aDsgcyA8IG87IHMrKykgc3dpdGNoIChjID0gbC5nZXRQbGFjZWhvbGRlci5jYWxsKHQsIG4udHJhbnNsYXRlUG9zaXRpb24uY2FsbCh0LCBzKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcyAtIDFdID09PSBrW3NdICYmIHIuYmVnaW4gPT0gay5sZW5ndGggLSAxICYmIGcucHVzaChrW3NdKSwgcyA9IG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGVsZXRlQ29udGVudEJhY2t3YXJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrW3NdID09PSB5ID8gci5lbmQrKyA6IHMgPSBvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga1tzXSAhPT0gYltzXSAmJiAoa1tzICsgMV0gIT09IHkgJiYga1tzICsgMV0gIT09IGMgJiYgdm9pZCAwICE9PSBrW3MgKyAxXSB8fCAoYltzXSAhPT0gYyB8fCBiW3MgKyAxXSAhPT0geSkgJiYgYltzXSAhPT0geSA/IGJbcyArIDFdID09PSB5ICYmIGJbc10gPT09IGtbcyArIDFdID8gKG0gPSBcImluc2VydFRleHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goa1tzXSksIHIuYmVnaW4tLSwgci5lbmQtLSkgOiBrW3NdICE9PSBjICYmIGtbc10gIT09IHkgJiYgKGtbcyArIDFdID09PSB5IHx8IGJbc10gIT09IGtbc10gJiYgYltzICsgMV0gPT09IGtbcyArIDFdKSA/IChtID0gXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLnB1c2goa1tzXSksIHIuYmVnaW4tLSkgOiBrW3NdID09PSB5ID8gKG0gPSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiLCAobi5pc01hc2suY2FsbCh0LCBuLnRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwodCwgcyksICEwKSB8fCBiW3NdID09PSBpLnJhZGl4UG9pbnQpICYmIHIuZW5kKyspIDogcyA9IG8gOiAobSA9IFwiaW5zZXJ0VGV4dFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcucHVzaChrW3NdKSwgci5iZWdpbi0tLCByLmVuZC0tKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZCwgcCwgaCksICh1LmlucHV0bWFzay5zaGFkb3dSb290IHx8IHUub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCAhPT0gdSAmJiB1LmZvY3VzKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLndyaXRlQnVmZmVyKSh1LCBuLmdldEJ1ZmZlci5jYWxsKHQpKSwgbi5jYXJldC5jYWxsKHQsIHUsIGguYmVnaW4sIGguZW5kLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyLm1vYmlsZSAmJiB0LnNraXBOZXh0SW5zZXJ0ICYmIFwiaW5zZXJ0VGV4dFwiID09PSBlLmlucHV0VHlwZSAmJiBcImluc2VydFRleHRcIiA9PT0gYy5hY3Rpb24gJiYgdC5pc0NvbXBvc2luZykgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXCJpbnNlcnRDb21wb3NpdGlvblRleHRcIiA9PT0gZS5pbnB1dFR5cGUgJiYgXCJpbnNlcnRUZXh0XCIgPT09IGMuYWN0aW9uICYmIHQuaXNDb21wb3NpbmcgPyB0LnNraXBOZXh0SW5zZXJ0ID0gITAgOiB0LnNraXBOZXh0SW5zZXJ0ID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0VGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImluc2VydFJlcGxhY2VtZW50VGV4dFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmRhdGEuZm9yRWFjaCgoZnVuY3Rpb24oZSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgby5FdmVudChcImtleXByZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5rZXkgPSBlLCB0Lmlnbm9yYWJsZSA9ICExLCBmLmtleXByZXNzRXZlbnQuY2FsbCh1LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuJGVsLnRyaWdnZXIoXCJrZXl1cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IG5ldyBvLkV2ZW50KFwia2V5ZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi5rZXkgPSBhLmtleXMuQmFja3NwYWNlLCBmLmtleUV2ZW50LmNhbGwodSwgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgcy5hcHBseUlucHV0VmFsdWUpKHUsIGQpLCBuLmNhcmV0LmNhbGwodCwgdSwgaC5iZWdpbiwgaC5lbmQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZUV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBpID0gdGhpcywgYSA9IGUgJiYgZS5kZXRhaWwgPyBlLmRldGFpbFswXSA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gYSAmJiAoYSA9IGkuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkpLCAoMCwgcy5hcHBseUlucHV0VmFsdWUpKGksIGEpLCAoZS5kZXRhaWwgJiYgdm9pZCAwICE9PSBlLmRldGFpbFsxXSB8fCB2b2lkIDAgIT09IGFyZ3VtZW50c1syXSkgJiYgbi5jYXJldC5jYWxsKHQsIGksIGUuZGV0YWlsID8gZS5kZXRhaWxbMV0gOiBhcmd1bWVudHNbMl0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBpID0gdC5vcHRzLCBhID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5fdmFsdWVHZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuc2hvd01hc2tPbkZvY3VzICYmIGEgIT09IG4uZ2V0QnVmZmVyLmNhbGwodCkuam9pbihcIlwiKSAmJiAoMCwgcy53cml0ZUJ1ZmZlcikodGhpcywgbi5nZXRCdWZmZXIuY2FsbCh0KSwgbi5zZWVrTmV4dC5jYWxsKHQsIG4uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbCh0KSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSBpLnBvc2l0aW9uQ2FyZXRPblRhYiB8fCAhMSAhPT0gdC5tb3VzZUVudGVyIHx8IG8uaXNDb21wbGV0ZS5jYWxsKHQsIG4uZ2V0QnVmZmVyLmNhbGwodCkpICYmIC0xICE9PSBuLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwodCkgfHwgZi5jbGlja0V2ZW50LmFwcGx5KHRoaXMsIFsgZSwgITAgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC51bmRvVmFsdWUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0Ll92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dG1hc2sudmFsaWRhdGlvbkV2ZW50ID0gITA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmVFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuaW5wdXRtYXNrLCB0ID0gZS5vcHRzLCBpID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUubW91c2VFbnRlciA9ICExLCB0LmNsZWFyTWFza09uTG9zdEZvY3VzICYmIChpLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGkub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCAhPT0gaSAmJiAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShpLCBlLm9yaWdpbmFsUGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMuaW5wdXRtYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5jbGlja2VkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGEuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgYS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ID09PSBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBuLmRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChpLCBuLmNhcmV0LmNhbGwoaSwgYSksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gciAmJiBuLmNhcmV0LmNhbGwoaSwgYSwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1dEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMuaW5wdXRtYXNrLCBpID0gdC5tYXNrc2V0LCByID0gdGhpcywgbCA9IG4uY2FyZXQuY2FsbCh0LCByKSwgYyA9IHQuaXNSVEwgPyBuLmdldEJ1ZmZlci5jYWxsKHQpLnNsaWNlKGwuZW5kLCBsLmJlZ2luKSA6IG4uZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UobC5iZWdpbiwgbC5lbmQpLCB1ID0gdC5pc1JUTCA/IGMucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBjLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZCA/IHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1KSA6IHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShcIlRleHRcIiwgdSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5oYW5kbGVSZW1vdmUuY2FsbCh0LCByLCBhLmtleXMuRGVsZXRlLCBsKSwgKDAsIHMud3JpdGVCdWZmZXIpKHIsIG4uZ2V0QnVmZmVyLmNhbGwodCksIGkucCwgZSwgdC51bmRvVmFsdWUgIT09IHQuX3ZhbHVlR2V0KCEwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJsdXJFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlucHV0bWFzaywgaSA9IHQub3B0cywgYSA9IHQuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuY2xpY2tlZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGEodGhpcyksIGwgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIpKGwsIHQub3JpZ2luYWxQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBsLmlucHV0bWFzay5fdmFsdWVHZXQoKSwgdSA9IG4uZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBjICYmIChpLmNsZWFyTWFza09uTG9zdEZvY3VzICYmICgtMSA9PT0gbi5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHQpICYmIGMgPT09IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0KS5qb2luKFwiXCIpID8gdSA9IFtdIDogcy5jbGVhck9wdGlvbmFsVGFpbC5jYWxsKHQsIHUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IG8uaXNDb21wbGV0ZS5jYWxsKHQsIHUpICYmIChzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgMCksIGkuY2xlYXJJbmNvbXBsZXRlICYmIChuLnJlc2V0TWFza1NldC5jYWxsKHQpLCB1ID0gaS5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IFtdIDogbi5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHQpLnNsaWNlKCkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDAsIHMud3JpdGVCdWZmZXIpKGwsIHUsIHZvaWQgMCwgZSkpLCB0LnVuZG9WYWx1ZSAhPT0gdC5fdmFsdWVHZXQoITApICYmICh0LnVuZG9WYWx1ZSA9IHQuX3ZhbHVlR2V0KCEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5pbnB1dG1hc2ssIHQgPSBlLm9wdHMuc2hvd01hc2tPbkhvdmVyLCBpID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1vdXNlRW50ZXIgPSAhMCwgKGkuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgaS5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSAoZS5pc1JUTCA/IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKS5zbGljZSgpLnJldmVyc2UoKSA6IG4uZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChlKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICYmICgwLCBzLkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKShpLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaywgdCA9IGUub3B0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudW5kb1ZhbHVlICE9PSBlLl92YWx1ZUdldCghMCkgJiYgZS4kZWwudHJpZ2dlcihcImNoYW5nZVwiKSwgLTEgPT09IG4uZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlKSAmJiBlLl92YWx1ZUdldCAmJiBlLl92YWx1ZUdldCgpID09PSBuLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoZSkuam9pbihcIlwiKSAmJiBlLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0LmNsZWFySW5jb21wbGV0ZSAmJiAhMSA9PT0gby5pc0NvbXBsZXRlLmNhbGwoZSwgbi5nZXRCdWZmZXIuY2FsbChlKSkgJiYgZS5fdmFsdWVTZXQoXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGUuX3ZhbHVlU2V0KGUudW5tYXNrZWR2YWx1ZSgpLCAhMCksIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLndyaXRlQnVmZmVyKShlLmVsLCBuLmdldEJ1ZmZlci5jYWxsKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmlucHV0bWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucmVmcmVzaFZhbHVlID0gITAsIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgwLCBzLmFwcGx5SW5wdXRWYWx1ZSkoZS5lbCwgZS5fdmFsdWVHZXQoITApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdC5FdmVudEhhbmRsZXJzID0gZjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5NzE2OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LkV2ZW50UnVsZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGEgPSAobiA9IGkoMjM5NCkpICYmIG4uX19lc01vZHVsZSA/IG4gOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG5cbiAgICAgICAgICAgICAgICB9LCByID0gaSgyODM5KSwgbyA9IGkoODcxMSksIHMgPSBpKDc3NjApO1xuICAgICAgICAgICAgICAgIHZhciBsID0ge1xuICAgICAgICAgICAgICAgICAgICBvbjogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLmlucHV0bWFzay5kZXBlbmRlbmN5TGliLCBsID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQub3JpZ2luYWxFdmVudCAmJiAodCA9IHQub3JpZ2luYWxFdmVudCB8fCB0LCBhcmd1bWVudHNbMF0gPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCwgYyA9IHRoaXMsIHUgPSBjLmlucHV0bWFzaywgZiA9IHUgPyB1Lm9wdHMgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdSAmJiBcIkZPUk1cIiAhPT0gdGhpcy5ub2RlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG4uZGF0YShjLCBcIl9pbnB1dG1hc2tfb3B0c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbihjKS5vZmYoKSwgZCAmJiBuZXcgYS5kZWZhdWx0KGQpLm1hc2soYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiLCBcInNldHZhbHVlXCIgXS5pbmNsdWRlcyh0LnR5cGUpIHx8IFwiRk9STVwiID09PSB0aGlzLm5vZGVOYW1lIHx8ICEoYy5kaXNhYmxlZCB8fCBjLnJlYWRPbmx5ICYmICEoXCJrZXlkb3duXCIgPT09IHQudHlwZSAmJiB0LmN0cmxLZXkgJiYgdC5rZXkgPT09IHIua2V5cy5jIHx8ICExID09PSBmLnRhYlRocm91Z2ggJiYgdC5rZXkgPT09IHIua2V5cy5UYWIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSB1LnNraXBJbnB1dEV2ZW50KSByZXR1cm4gdS5za2lwSW5wdXRFdmVudCA9ICExLCB0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb2N1c1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1LnZhbGlkYXRpb25FdmVudCA/ICh1LnZhbGlkYXRpb25FdmVudCA9ICExLCBlLmJsdXIoKSwgKDAsIHMuSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIpKGUsICh1LmlzUlRMID8gby5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHUpLnNsaWNlKCkucmV2ZXJzZSgpIDogby5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKHUpKS5qb2luKFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZi52YWxpZGF0aW9uRXZlbnRUaW1lT3V0KSwgITEpIDogKGwgPSBhcmd1bWVudHMsIHZvaWQgc2V0VGltZW91dCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrICYmIGkuYXBwbHkoYywgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gaS5hcHBseShjLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExID09PSBwICYmICh0LnByZXZlbnREZWZhdWx0KCksIHQuc3RvcFByb3BhZ2F0aW9uKCkpLCBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIgXS5pbmNsdWRlcyh0KSA/IChsID0gbC5iaW5kKGUpLCBudWxsICE9PSBlLmZvcm0gJiYgbihlLmZvcm0pLm9uKHQsIGwpKSA6IG4oZSkub24odCwgbCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2suZXZlbnRzW3RdID0gZS5pbnB1dG1hc2suZXZlbnRzW3RdIHx8IFtdLCBlLmlucHV0bWFzay5ldmVudHNbdF0ucHVzaChsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5pbnB1dG1hc2sgJiYgZS5pbnB1dG1hc2suZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlLmlucHV0bWFzay5kZXBlbmRlbmN5TGliLCBuID0gZS5pbnB1dG1hc2suZXZlbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgaW4gdCAmJiAoKG4gPSBbXSlbdF0gPSBlLmlucHV0bWFzay5ldmVudHNbdF0pLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSBuW2FdOyByLmxlbmd0aCA+IDA7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIgXS5pbmNsdWRlcyhhKSA/IG51bGwgIT09IGUuZm9ybSAmJiBpKGUuZm9ybSkub2ZmKGEsIG8pIDogaShlKS5vZmYoYSwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGUuaW5wdXRtYXNrLmV2ZW50c1thXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHQuRXZlbnRSdWxlciA9IGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMjE5OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBkKGkoMjM5NCkpLCBhID0gaSgyODM5KSwgciA9IGQoaSg3MTg0KSksIG8gPSBpKDg3MTEpLCBzID0gaSg0NzEzKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfShlKSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCByLCBvLCBzID0gW10sIGwgPSAhMCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gKGkgPSBpLmNhbGwoZSkpLm5leHQsIDAgPT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoaSkgIT09IGkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEobCA9IChuID0gci5jYWxsKGkpKS5kb25lKSAmJiAocy5wdXNoKG4udmFsdWUpLCBzLmxlbmd0aCAhPT0gdCk7IGwgPSAhMCkgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsICYmIG51bGwgIT0gaS5yZXR1cm4gJiYgKG8gPSBpLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykgdGhyb3cgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JqZWN0XCIgPT09IGkgJiYgZS5jb25zdHJ1Y3RvciAmJiAoaSA9IGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gaSB8fCBcIlNldFwiID09PSBpKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkFyZ3VtZW50c1wiID09PSBpIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KGkpKSByZXR1cm4gYyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfShlLCB0KSB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChudWxsID09IHQgfHwgdCA+IGUubGVuZ3RoKSAmJiAodCA9IGUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG4gPSBuZXcgQXJyYXkodCk7IGkgPCB0OyBpKyspIG5baV0gPSBlW2ldO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIGUgIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIHUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZW51bWVyYWJsZSA9IG4uZW51bWVyYWJsZSB8fCAhMSwgbi5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG4gJiYgKG4ud3JpdGFibGUgPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIChhID0gbi5rZXksIHIgPSB2b2lkIDAsIHIgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHUoZSkgfHwgbnVsbCA9PT0gZSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlW1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGkuY2FsbChlLCB0IHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHUobikpIHJldHVybiBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gdCA/IFN0cmluZyA6IE51bWJlcikoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KGEsIFwic3RyaW5nXCIpLCBcInN5bWJvbFwiID09PSB1KHIpID8gciA6IFN0cmluZyhyKSksIG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBhLCByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBuLmRlZmF1bHQuZGVwZW5kZW5jeUxpYiwgaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBlKHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSh0aGlzLCBlKSwgdGhpcy5tYXNrID0gdCwgdGhpcy5mb3JtYXQgPSBpLCB0aGlzLm9wdHMgPSBuLCB0aGlzLl9kYXRlID0gbmV3IERhdGUoMSwgMCwgMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0RGF0ZU9iamVjdCh0LCB0aGlzLm9wdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0LCBpLCBuO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA9IGUsIChpID0gWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB0aGlzLl9kYXRlICYmICh0aGlzLl9kYXRlID0gbmV3IERhdGUoMSwgMCwgMSksIHRoaXMuaW5pdERhdGVPYmplY3Qodm9pZCAwLCB0aGlzLm9wdHMpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImluaXREYXRlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoUCh0KS5sYXN0SW5kZXggPSAwOyBpID0gUCh0KS5leGVjKHRoaXMuZm9ybWF0KTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IFJlZ0V4cChcIlxcXFxkKyRcIikuZXhlYyhpWzBdKSwgYSA9IG4gPyBpWzBdWzBdICsgXCJ4XCIgOiBpWzBdLCByID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gUCh0KS5sYXN0SW5kZXgsIHMgPSBFKGkuaW5kZXgsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAodCkubGFzdEluZGV4ID0gbywgciA9IGUuc2xpY2UoMCwgZS5pbmRleE9mKHMubmV4dE1hdGNoWzBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgciA9IGUuc2xpY2UoMCwgZ1thXSAmJiBnW2FdWzRdIHx8IGEubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnNsaWNlKHIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZywgYSkgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLCByLCBhLCBnW2FdWzJdLCBnW2FdWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzZXRWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0ICYmIChlW25dID0gXCJhbXBtXCIgPT09IG4gPyB0IDogdC5yZXBsYWNlKC9bXjAtOV0vZywgXCIwXCIpLCBlW1wicmF3XCIgKyBuXSA9IHQucmVwbGFjZSgvXFxzL2csIFwiX1wiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGVbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcImRheVwiID09PSBuICYmIDI5ID09PSBwYXJzZUludChyKSB8fCBcIm1vbnRoXCIgPT09IG4gJiYgMiA9PT0gcGFyc2VJbnQocikpICYmICgyOSAhPT0gcGFyc2VJbnQoZS5kYXkpIHx8IDIgIT09IHBhcnNlSW50KGUubW9udGgpIHx8IFwiXCIgIT09IGUueWVhciAmJiB2b2lkIDAgIT09IGUueWVhciB8fCBlLl9kYXRlLnNldEZ1bGxZZWFyKDIwMTIsIDEsIDI5KSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRheVwiID09PSBuICYmIChtID0gITAsIDAgPT09IHBhcnNlSW50KHIpICYmIChyID0gMSkpLCBcIm1vbnRoXCIgPT09IG4gJiYgKG0gPSAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInllYXJcIiA9PT0gbiAmJiAobSA9ICEwLCByLmxlbmd0aCA8IDQgJiYgKHIgPSBNKHIsIDQsICEwKSkpLCBcIlwiID09PSByIHx8IGlzTmFOKHIpIHx8IGEuY2FsbChlLl9kYXRlLCByKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1wbVwiID09PSBuICYmIGEuY2FsbChlLl9kYXRlLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgxLCAwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInJlSW5pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGUgPSB2b2lkIDAsIHRoaXMuZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBdKSAmJiBmKHQucHJvdG90eXBlLCBpKSwgbiAmJiBmKHQsIG4pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICExXG4gICAgICAgICAgICAgICAgICAgIH0pLCBlO1xuICAgICAgICAgICAgICAgIH0oKSwgdiA9IChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSwgbSA9ICExLCBnID0ge1xuICAgICAgICAgICAgICAgICAgICBkOiBbIFwiWzEtOV18WzEyXVswLTldfDNbMDFdXCIsIERhdGUucHJvdG90eXBlLnNldERhdGUsIFwiZGF5XCIsIERhdGUucHJvdG90eXBlLmdldERhdGUgXSxcbiAgICAgICAgICAgICAgICAgICAgZGQ6IFsgXCIwWzEtOV18WzEyXVswLTldfDNbMDFdXCIsIERhdGUucHJvdG90eXBlLnNldERhdGUsIFwiZGF5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0RGF0ZS5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBkZGQ6IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICBkZGRkOiBbIFwiXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgbTogWyBcIlsxLTldfDFbMDEyXVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUgPyBwYXJzZUludChlKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgJiYgdC0tLCBEYXRlLnByb3RvdHlwZS5zZXRNb250aC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcIm1vbnRoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucHJvdG90eXBlLmdldE1vbnRoLmNhbGwodGhpcykgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG1tOiBbIFwiMFsxLTldfDFbMDEyXVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUgPyBwYXJzZUludChlKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA+IDAgJiYgdC0tLCBEYXRlLnByb3RvdHlwZS5zZXRNb250aC5jYWxsKHRoaXMsIHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBcIm1vbnRoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0TW9udGguY2FsbCh0aGlzKSArIDEsIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIG1tbTogWyBcIlwiIF0sXG4gICAgICAgICAgICAgICAgICAgIG1tbW06IFsgXCJcIiBdLFxuICAgICAgICAgICAgICAgICAgICB5eTogWyBcIlswLTldezJ9XCIsIERhdGUucHJvdG90eXBlLnNldEZ1bGxZZWFyLCBcInllYXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRGdWxsWWVhci5jYWxsKHRoaXMpLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICB5eXl5OiBbIFwiWzAtOV17NH1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0RnVsbFllYXIsIFwieWVhclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldEZ1bGxZZWFyLmNhbGwodGhpcyksIDQpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIGg6IFsgXCJbMS05XXwxWzAtMl1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMgXSxcbiAgICAgICAgICAgICAgICAgICAgaGg6IFsgXCIwWzEtOV18MVswLTJdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgaHg6IFsgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWzAtOV17XCIuY29uY2F0KGUsIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERhdGUucHJvdG90eXBlLmdldEhvdXJzO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIEg6IFsgXCIxP1swLTldfDJbMC0zXVwiLCBEYXRlLnByb3RvdHlwZS5zZXRIb3VycywgXCJob3Vyc1wiLCBEYXRlLnByb3RvdHlwZS5nZXRIb3VycyBdLFxuICAgICAgICAgICAgICAgICAgICBISDogWyBcIjBbMC05XXwxWzAtOV18MlswLTNdXCIsIERhdGUucHJvdG90eXBlLnNldEhvdXJzLCBcImhvdXJzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oRGF0ZS5wcm90b3R5cGUuZ2V0SG91cnMuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgSHg6IFsgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWzAtOV17XCIuY29uY2F0KGUsIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgRGF0ZS5wcm90b3R5cGUuc2V0SG91cnMsIFwiaG91cnNcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldEhvdXJzLmNhbGwodGhpcyksIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICBNOiBbIFwiWzEtNV0/WzAtOV1cIiwgRGF0ZS5wcm90b3R5cGUuc2V0TWludXRlcywgXCJtaW51dGVzXCIsIERhdGUucHJvdG90eXBlLmdldE1pbnV0ZXMgXSxcbiAgICAgICAgICAgICAgICAgICAgTU06IFsgXCIwWzAtOV18MVswLTldfDJbMC05XXwzWzAtOV18NFswLTldfDVbMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRNaW51dGVzLCBcIm1pbnV0ZXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRNaW51dGVzLmNhbGwodGhpcyksIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgICAgIHM6IFsgXCJbMS01XT9bMC05XVwiLCBEYXRlLnByb3RvdHlwZS5zZXRTZWNvbmRzLCBcInNlY29uZHNcIiwgRGF0ZS5wcm90b3R5cGUuZ2V0U2Vjb25kcyBdLFxuICAgICAgICAgICAgICAgICAgICBzczogWyBcIjBbMC05XXwxWzAtOV18MlswLTldfDNbMC05XXw0WzAtOV18NVswLTldXCIsIERhdGUucHJvdG90eXBlLnNldFNlY29uZHMsIFwic2Vjb25kc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNKERhdGUucHJvdG90eXBlLmdldFNlY29uZHMuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbDogWyBcIlswLTldezN9XCIsIERhdGUucHJvdG90eXBlLnNldE1pbGxpc2Vjb25kcywgXCJtaWxsaXNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRNaWxsaXNlY29uZHMuY2FsbCh0aGlzKSwgMyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMgXSxcbiAgICAgICAgICAgICAgICAgICAgTDogWyBcIlswLTldezJ9XCIsIERhdGUucHJvdG90eXBlLnNldE1pbGxpc2Vjb25kcywgXCJtaWxsaXNlY29uZHNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTShEYXRlLnByb3RvdHlwZS5nZXRNaWxsaXNlY29uZHMuY2FsbCh0aGlzKSwgMik7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgdDogWyBcIlthcF1cIiwgaywgXCJhbXBtXCIsIGIsIDEgXSxcbiAgICAgICAgICAgICAgICAgICAgdHQ6IFsgXCJbYXBdbVwiLCBrLCBcImFtcG1cIiwgYiwgMiBdLFxuICAgICAgICAgICAgICAgICAgICBUOiBbIFwiW0FQXVwiLCBrLCBcImFtcG1cIiwgYiwgMSBdLFxuICAgICAgICAgICAgICAgICAgICBUVDogWyBcIltBUF1NXCIsIGssIFwiYW1wbVwiLCBiLCAyIF0sXG4gICAgICAgICAgICAgICAgICAgIFo6IFsgXCIuKlwiLCB2b2lkIDAsIFwiWlwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy50b1N0cmluZygpLm1hdGNoKC9cXCgoLispXFwpLylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmluY2x1ZGVzKFwiIFwiKSAmJiAoZSA9IChlID0gZS5yZXBsYWNlKFwiLVwiLCBcIiBcIikudG9VcHBlckNhc2UoKSkuc3BsaXQoXCIgXCIpLm1hcCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsKGUsIDEpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICAgICAgbzogWyBcIlwiIF0sXG4gICAgICAgICAgICAgICAgICAgIFM6IFsgXCJcIiBdXG4gICAgICAgICAgICAgICAgfSwgeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXNvRGF0ZTogXCJ5eXl5LW1tLWRkXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzb1RpbWU6IFwiSEg6TU06c3NcIixcbiAgICAgICAgICAgICAgICAgICAgaXNvRGF0ZVRpbWU6IFwieXl5eS1tbS1kZCdUJ0hIOk1NOnNzXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzb1V0Y0RhdGVUaW1lOiBcIlVUQzp5eXl5LW1tLWRkJ1QnSEg6TU06c3MnWidcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gayhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5nZXRIb3VycygpO1xuICAgICAgICAgICAgICAgICAgICBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJwXCIpID8gdGhpcy5zZXRIb3Vycyh0ICsgMTIpIDogZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwiYVwiKSAmJiB0ID49IDEyICYmIHRoaXMuc2V0SG91cnModCAtIDEyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmdldEhvdXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZSA9IGUgfHwgMTIpID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB4KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBuZXcgUmVnRXhwKFwiXFxcXGQrJFwiKS5leGVjKGVbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiB2b2lkIDAgIT09IHRbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZ1tlWzBdWzBdICsgXCJ4XCJdLnNsaWNlKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlbMF0gPSBpWzBdKHRbMF0pLCBpWzNdID0gaVszXSh0WzBdKSwgaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ1tlWzBdXSkgcmV0dXJuIGdbZVswXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWUudG9rZW5pemVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IFtdLCBpID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIGcpIGlmICgvXFwuKngkLy50ZXN0KG4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBuWzBdICsgXCJcXFxcZCtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gaS5pbmRleE9mKGEpICYmIGkucHVzaChhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAtMSA9PT0gdC5pbmRleE9mKG5bMF0pICYmIHQucHVzaChuWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9rZW5pemVyID0gXCIoXCIgKyAoaS5sZW5ndGggPiAwID8gaS5qb2luKFwifFwiKSArIFwifFwiIDogXCJcIikgKyB0LmpvaW4oXCIrfFwiKSArIFwiKSs/fC5cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRva2VuaXplciA9IG5ldyBSZWdFeHAoZS50b2tlbml6ZXIsIFwiZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS50b2tlbml6ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHcoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW0pIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZS5yYXdkYXkgfHwgIWlzRmluaXRlKGUucmF3ZGF5KSAmJiBuZXcgRGF0ZShlLmRhdGUuZ2V0RnVsbFllYXIoKSwgaXNGaW5pdGUoZS5yYXdtb250aCkgPyBlLm1vbnRoIDogZS5kYXRlLmdldE1vbnRoKCkgKyAxLCAwKS5nZXREYXRlKCkgPj0gZS5kYXkgfHwgXCIyOVwiID09IGUuZGF5ICYmICghaXNGaW5pdGUoZS5yYXd5ZWFyKSB8fCB2b2lkIDAgPT09IGUucmF3eWVhciB8fCBcIlwiID09PSBlLnJhd3llYXIpIHx8IG5ldyBEYXRlKGUuZGF0ZS5nZXRGdWxsWWVhcigpLCBpc0Zpbml0ZShlLnJhd21vbnRoKSA/IGUubW9udGggOiBlLmRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSA+PSBlLmRheSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIjI5XCIgPT0gZS5kYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gRSh0LnBvcywgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ5eXl5XCIgPT09IG4udGFyZ2V0TWF0Y2hbMF0gJiYgdC5wb3MgLSBuLnRhcmdldE1hdGNoSW5kZXggPT0gMikgcmV0dXJuIHQucmVtb3ZlID0gdC5wb3MgKyAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCIwMlwiID09IGUubW9udGggJiYgXCIzMFwiID09IGUuZGF5ICYmIHZvaWQgMCAhPT0gdC5jKSByZXR1cm4gZS5kYXkgPSBcIjAzXCIsIFxuICAgICAgICAgICAgICAgICAgICBlLmRhdGUuc2V0RGF0ZSgzKSwgZS5kYXRlLnNldE1vbnRoKDEpLCB0Lmluc2VydCA9IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdC5wb3MgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgYzogdC5jXG4gICAgICAgICAgICAgICAgICAgIH0gXSwgdC5jYXJldCA9IG8uc2Vla05leHQuY2FsbCh0aGlzLCB0LnBvcyArIDEpLCB0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFMoZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSwgbywgcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoUChpKS5sYXN0SW5kZXggPSAwOyBhID0gUChpKS5leGVjKGUpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpIGlmIChvID0geChhKSkgcyArPSBcIihcIiArIG9bMF0gKyBcIilcIjsgZWxzZSBzd2l0Y2ggKGFbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIltcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICs9IFwiKFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJdXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBcIik/XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzICs9ICgwLCByLmRlZmF1bHQpKGFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvID0geChhKSkgaWYgKCEwICE9PSBuICYmIG9bM10pIHMgKz0gb1szXS5jYWxsKHQuZGF0ZSk7IGVsc2Ugb1syXSA/IHMgKz0gdFtcInJhd1wiICsgb1syXV0gOiBzICs9IGFbMF07IGVsc2UgcyArPSBhWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChlID0gU3RyaW5nKGUpLCB0ID0gdCB8fCAyOyBlLmxlbmd0aCA8IHQ7ICkgZSA9IGkgPyBlICsgXCIwXCIgOiBcIjBcIiArIGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBuZXcgaChlLCB0LCBpKSA6IGUgJiYgXCJvYmplY3RcIiA9PT0gdShlKSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgXCJkYXRlXCIpID8gZSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTKHQuaW5wdXRGb3JtYXQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGVcbiAgICAgICAgICAgICAgICAgICAgfSwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIEUoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSwgbiwgYSA9IDAsIHIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKFAodCkubGFzdEluZGV4ID0gMDsgbiA9IFAodCkuZXhlYyh0LmlucHV0Rm9ybWF0KTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyBSZWdFeHAoXCJcXFxcZCskXCIpLmV4ZWMoblswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGEgKz0gciA9IG8gPyBwYXJzZUludChvWzBdKSA6IG5bMF0ubGVuZ3RoKSA+PSBlICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBuLCBuID0gUCh0KS5leGVjKHQuaW5wdXRGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRNYXRjaEluZGV4OiBhIC0gcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRNYXRjaDogbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE1hdGNoOiBpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG4uZGVmYXVsdC5leHRlbmRBbGlhc2VzKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5udW1lcmljSW5wdXQgPSAhMSwgZy5TID0gZS5pMThuLm9yZGluYWxTdWZmaXguam9pbihcInxcIiksIGUuaW5wdXRGb3JtYXQgPSB5W2UuaW5wdXRGb3JtYXRdIHx8IGUuaW5wdXRGb3JtYXQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGlzcGxheUZvcm1hdCA9IHlbZS5kaXNwbGF5Rm9ybWF0XSB8fCBlLmRpc3BsYXlGb3JtYXQgfHwgZS5pbnB1dEZvcm1hdCwgZS5vdXRwdXRGb3JtYXQgPSB5W2Uub3V0cHV0Rm9ybWF0XSB8fCBlLm91dHB1dEZvcm1hdCB8fCBlLmlucHV0Rm9ybWF0LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnBsYWNlaG9sZGVyID0gXCJcIiAhPT0gZS5wbGFjZWhvbGRlciA/IGUucGxhY2Vob2xkZXIgOiBlLmlucHV0Rm9ybWF0LnJlcGxhY2UoL1tbXFxdXS8sIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlZ2V4ID0gUyhlLmlucHV0Rm9ybWF0LCB2b2lkIDAsIGUpLCBlLm1pbiA9IF8oZS5taW4sIGUuaW5wdXRGb3JtYXQsIGUpLCBlLm1heCA9IF8oZS5tYXgsIGUuaW5wdXRGb3JtYXQsIGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRGb3JtYXQ6IFwiaXNvRGF0ZVRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRGb3JtYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheU5hbWVzOiBbIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiwgXCJTdW5kYXlcIiBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IFsgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIiwgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hbFN1ZmZpeDogWyBcInN0XCIsIFwibmRcIiwgXCJyZFwiLCBcInRoXCIgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEsIHIsIG8sIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocykgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihpKSAmJiBlW3RdICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gRSh0LCBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwubmV4dE1hdGNoICYmIGwubmV4dE1hdGNoWzBdID09PSBpICYmIGwudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBnW2wudGFyZ2V0TWF0Y2hbMF1dWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoYykudGVzdChcIjBcIiArIGVbdCAtIDFdKSkgcmV0dXJuIGVbdF0gPSBlW3QgLSAxXSwgZVt0IC0gMV0gPSBcIjBcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnV6enk6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihlLCB0LCBpLCBuLCBhLCByLCBvLCBsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMsIHU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IG4gJiYgKCgoYyA9IEUodCArIDEsIGEpKS50YXJnZXRNYXRjaCAmJiBjLnRhcmdldE1hdGNoSW5kZXggPT09IHQgJiYgYy50YXJnZXRNYXRjaFswXS5sZW5ndGggPiAxICYmIHZvaWQgMCAhPT0gZ1tjLnRhcmdldE1hdGNoWzBdXSB8fCAoYyA9IEUodCArIDIsIGEpKS50YXJnZXRNYXRjaCAmJiBjLnRhcmdldE1hdGNoSW5kZXggPT09IHQgKyAxICYmIGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IGdbYy50YXJnZXRNYXRjaFswXV0pICYmICh1ID0gZ1tjLnRhcmdldE1hdGNoWzBdXVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdSAmJiAodm9pZCAwICE9PSByLnZhbGlkUG9zaXRpb25zW3QgKyAxXSAmJiBuZXcgUmVnRXhwKHUpLnRlc3QoaSArIFwiMFwiKSA/IChlW3RdID0gaSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZVt0ICsgMV0gPSBcIjBcIiwgbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0ICsgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IG5ldyBSZWdFeHAodSkudGVzdChcIjBcIiArIGkpICYmIChlW3RdID0gXCIwXCIsIGVbdCArIDFdID0gaSwgbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0ICsgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgITEgPT09IG4pKSByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobi5mdXp6eSAmJiAoZSA9IG4uYnVmZmVyLCB0ID0gbi5wb3MpLCAoYyA9IEUodCwgYSkpLnRhcmdldE1hdGNoICYmIGMudGFyZ2V0TWF0Y2hbMF0gJiYgdm9pZCAwICE9PSBnW2MudGFyZ2V0TWF0Y2hbMF1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gZ1tjLnRhcmdldE1hdGNoWzBdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGZbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gZS5zbGljZShjLnRhcmdldE1hdGNoSW5kZXgsIGMudGFyZ2V0TWF0Y2hJbmRleCArIGMudGFyZ2V0TWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBuZXcgUmVnRXhwKHUpLnRlc3QoZC5qb2luKFwiXCIpKSAmJiAyID09PSBjLnRhcmdldE1hdGNoWzBdLmxlbmd0aCAmJiByLnZhbGlkUG9zaXRpb25zW2MudGFyZ2V0TWF0Y2hJbmRleF0gJiYgci52YWxpZFBvc2l0aW9uc1tjLnRhcmdldE1hdGNoSW5kZXggKyAxXSAmJiAoci52YWxpZFBvc2l0aW9uc1tjLnRhcmdldE1hdGNoSW5kZXggKyAxXS5pbnB1dCA9IFwiMFwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwieWVhclwiID09IGZbMl0pIGZvciAodmFyIHAgPSBzLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICExLCAxLCB2b2lkIDAsICEwKSwgaCA9IHQgKyAxOyBoIDwgZS5sZW5ndGg7IGgrKykgZVtoXSA9IHBbaF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgci52YWxpZFBvc2l0aW9uc1toXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBuLCB5ID0gXyhlLmpvaW4oXCJcIiksIGEuaW5wdXRGb3JtYXQsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtICYmICFpc05hTih5LmRhdGUuZ2V0VGltZSgpKSAmJiAoYS5wcmVmaWxsWWVhciAmJiAobSA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUueWVhciAhPT0gZS5yYXd5ZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHYudG9TdHJpbmcoKSwgYSA9IGUucmF3eWVhci5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIiksIHIgPSBuLnNsaWNlKDAsIGEubGVuZ3RoKSwgbyA9IG4uc2xpY2UoYS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIgPT09IGEubGVuZ3RoICYmIGEgPT09IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG5ldyBEYXRlKHYsIGUubW9udGggLSAxLCBlLmRheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kYXkgPT0gcy5nZXREYXRlKCkgJiYgKCFpLm1heCB8fCBpLm1heC5kYXRlLmdldFRpbWUoKSA+PSBzLmdldFRpbWUoKSkgJiYgKGUuZGF0ZS5zZXRGdWxsWWVhcih2KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS55ZWFyID0gbiwgdC5pbnNlcnQgPSBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0LnBvcyArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG9bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogdC5wb3MgKyAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBvWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHksIG0sIGEpKSwgbSA9IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0KSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgaS5taW4gJiYgIWlzTmFOKGkubWluLmRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGUucmVzZXQoKSwgUChpKS5sYXN0SW5kZXggPSAwOyByID0gUChpKS5leGVjKGkuaW5wdXRGb3JtYXQpOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG8gPSB4KHIpKSAmJiBvWzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSBvWzFdLCBsID0gZVtvWzJdXSwgYyA9IGkubWluW29bMl1dLCB1ID0gaS5tYXggPyBpLm1heFtvWzJdXSA6IGMsIGYgPSBbXSwgZCA9ICExLCBwID0gMDsgcCA8IGMubGVuZ3RoOyBwKyspIHZvaWQgMCAhPT0gbi52YWxpZFBvc2l0aW9uc1twICsgci5pbmRleF0gfHwgZCA/IChmW3BdID0gbFtwXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBkIHx8IGxbcF0gPiBjW3BdKSA6IChmW3BdID0gY1twXSwgXCJ5ZWFyXCIgPT09IG9bMl0gJiYgbC5sZW5ndGggLSAxID09IHAgJiYgYyAhPSB1ICYmIChmID0gKHBhcnNlSW50KGYuam9pbihcIlwiKSkgKyAxKS50b1N0cmluZygpLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1wbVwiID09PSBvWzJdICYmIGMgIT0gdSAmJiBpLm1pbi5kYXRlLmdldFRpbWUoKSA+IGUuZGF0ZS5nZXRUaW1lKCkgJiYgKGZbcF0gPSB1W3BdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FsbChlLl9kYXRlLCBmLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBpLm1pbi5kYXRlLmdldFRpbWUoKSA8PSBlLmRhdGUuZ2V0VGltZSgpLCBlLnJlSW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ICYmIGkubWF4ICYmIChpc05hTihpLm1heC5kYXRlLmdldFRpbWUoKSkgfHwgKHQgPSBpLm1heC5kYXRlLmdldFRpbWUoKSA+PSBlLmRhdGUuZ2V0VGltZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oeSwgbSA9IHcuY2FsbCh0aGlzLCB5LCBtLCBhKSwgYSwgcikpLCB2b2lkIDAgIT09IHQgJiYgbSAmJiBuLnBvcyAhPT0gdCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBTKGEuaW5wdXRGb3JtYXQsIHksIGEpLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG4ucG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbi5jYXJldCB8fCBuLnBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3RybEtleSAmJiBlLmtleSA9PT0gYS5rZXlzLkFycm93UmlnaHQgJiYgKHRoaXMuaW5wdXRtYXNrLl92YWx1ZVNldChPKG5ldyBEYXRlLCBuKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAodGhpcykudHJpZ2dlcihcInNldHZhbHVlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID8gUyhpLm91dHB1dEZvcm1hdCwgXyhlLCBpLmlucHV0Rm9ybWF0LCBpKSwgaSwgITApIDogdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCA9PSB0Lm5hdGl2ZURlZi5pbmRleE9mKFwiW2FwXVwiKSA/IGUudG9Mb3dlckNhc2UoKSA6IDAgPT0gdC5uYXRpdmVEZWYuaW5kZXhPZihcIltBUF1cIikgPyBlLnRvVXBwZXJDYXNlKCkgOiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIltvYmplY3QgRGF0ZV1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpICYmIChlID0gTyhlLCB0KSksIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNb2RlVmlzdWFsOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0UG9zaXRpb25zOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBTdGF0aWM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpbGxZZWFyOiAhMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzg1MTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBuLCBhID0gKG4gPSBpKDIzOTQpKSAmJiBuLl9fZXNNb2R1bGUgPyBuIDoge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBuXG4gICAgICAgICAgICAgICAgfSwgciA9IGkoODcxMSksIG8gPSBpKDQ3MTMpO1xuICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmREZWZpbml0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIEE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCImXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1GYS1mXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBzID0gbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIik7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpIC0gMSA+IC0xICYmIFwiLlwiICE9PSB0LmJ1ZmZlcltpIC0gMV0gPyAoZSA9IHQuYnVmZmVyW2kgLSAxXSArIGUsIGUgPSBpIC0gMiA+IC0xICYmIFwiLlwiICE9PSB0LmJ1ZmZlcltpIC0gMl0gPyB0LmJ1ZmZlcltpIC0gMl0gKyBlIDogXCIwXCIgKyBlKSA6IGUgPSBcIjAwXCIgKyBlLCBcbiAgICAgICAgICAgICAgICAgICAgcy50ZXN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhLmRlZmF1bHQuZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgICAgICAgICAgICAgIGNzc3VuaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiBcIlsrLV0/WzAtOV0rXFxcXC4/KFswLTldKyk/KHB4fGVtfHJlbXxleHwlfGlufGNtfG1tfHB0fHBjKVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVybDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IFwiKGh0dHBzP3xmdHApOi8vLipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcFN0YXRpYzogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJUaHJvdWdoOiAhMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogXCJpezEsM30uansxLDN9Lmt7MSwzfS5sezEsM31cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGo6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZGVjaW1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIjogXCIuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUuc2VwYXJhdG9yLCBpID0gZS5xdWFudGlmaWVyLCBuID0gXCIqezEsNjR9Wy4qezEsNjR9XVsuKnsxLDY0fV1bLip7MSw2M31dQC17MSw2M30uLXsxLDYzfVsuLXsxLDYzfV1bLi17MSw2M31dXCIsIGEgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSBmb3IgKHZhciByID0gMDsgciA8IGk7IHIrKykgYSArPSBcIltcIi5jb25jYXQodCkuY29uY2F0KG4sIFwiXVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBncmVlZHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGlmaWVyOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGUgPSBlLnRvTG93ZXJDYXNlKCkpLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjExLVxcdWZmMTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjUhIyQlJicqKy89P15fYHt8fX4tXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEtei1dXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtYWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IFwiIyM6IyM6IyM6IyM6IyM6IyNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB2aW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IFwiVnsxM305ezR9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLUhKLU5QUi1aYS1oai1ucHItelxcXFxkXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1VubWFzazogITBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3NuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBcIjk5OS05OS05OTk5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSwgcywgbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gby5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0aGlzLCAhMCwgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHRoaXMpLCAhMCwgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAvXig/ITIxOS0wOS05OTk5fDA3OC0wNS0xMTIwKSg/ITY2NnwwMDB8OS57Mn0pLnszfS0oPyEwMCkuezJ9LSg/ITB7NH0pLns0fSQvLnRlc3QoYy5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDIwNzogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gcyhpKDIzOTQpKSwgYSA9IHMoaSg3MTg0KSksIHIgPSBpKDg3MTEpLCBvID0gaSgyODM5KTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBuLmRlZmF1bHQuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IFwiXCIsIGEgPSAwOyBhIDwgZS5sZW5ndGg7IGErKykgbi5kZWZhdWx0LnByb3RvdHlwZS5kZWZpbml0aW9uc1tlLmNoYXJBdChhKV0gfHwgdC5kZWZpbml0aW9uc1tlLmNoYXJBdChhKV0gfHwgdC5vcHRpb25hbG1hcmtlclswXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5vcHRpb25hbG1hcmtlclsxXSA9PT0gZS5jaGFyQXQoYSkgfHwgdC5xdWFudGlmaWVybWFya2VyWzBdID09PSBlLmNoYXJBdChhKSB8fCB0LnF1YW50aWZpZXJtYXJrZXJbMV0gPT09IGUuY2hhckF0KGEpIHx8IHQuZ3JvdXBtYXJrZXJbMF0gPT09IGUuY2hhckF0KGEpIHx8IHQuZ3JvdXBtYXJrZXJbMV0gPT09IGUuY2hhckF0KGEpIHx8IHQuYWx0ZXJuYXRvcm1hcmtlciA9PT0gZS5jaGFyQXQoYSkgPyBpICs9IFwiXFxcXFwiICsgZS5jaGFyQXQoYSkgOiBpICs9IGUuY2hhckF0KGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aCA+IDAgJiYgdCA+IDAgJiYgKCFpLmRpZ2l0c09wdGlvbmFsIHx8IG4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGUuaW5kZXhPZihpLnJhZGl4UG9pbnQpLCByID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLm5lZ2F0aW9uU3ltYm9sLmJhY2sgPT09IGVbZS5sZW5ndGggLSAxXSAmJiAociA9ICEwLCBlLmxlbmd0aC0tKSwgLTEgPT09IGEgJiYgKGUucHVzaChpLnJhZGl4UG9pbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyA9IDE7IG8gPD0gdDsgbysrKSBpc0Zpbml0ZShlW2EgKyBvXSkgfHwgKGVbYSArIG9dID0gXCIwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByICYmIGUucHVzaChpLm5lZ2F0aW9uU3ltYm9sLmJhY2spLCBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIFwiK1wiID09PSBlICYmIChpID0gci5zZWVrTmV4dC5jYWxsKHRoaXMsIHQudmFsaWRQb3NpdGlvbnMubGVuZ3RoIC0gMSkpLCBcbiAgICAgICAgICAgICAgICAgICAgdC50ZXN0cykgaWYgKChuID0gcGFyc2VJbnQobikpID49IGkpIGZvciAodmFyIGEgPSAwLCBvID0gdC50ZXN0c1tuXS5sZW5ndGg7IGEgPCBvOyBhKyspIGlmICgodm9pZCAwID09PSB0LnZhbGlkUG9zaXRpb25zW25dIHx8IFwiLVwiID09PSBlKSAmJiB0LnRlc3RzW25dW2FdLm1hdGNoLmRlZiA9PT0gZSkgcmV0dXJuIG4gKyAodm9pZCAwICE9PSB0LnZhbGlkUG9zaXRpb25zW25dICYmIFwiLVwiICE9PSBlID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAtMSwgbiA9IDAsIGEgPSB0LnZhbGlkUG9zaXRpb25zLmxlbmd0aDsgbiA8IGE7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSB0LnZhbGlkUG9zaXRpb25zW25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIgJiYgci5tYXRjaC5kZWYgPT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcChlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdC5idWZmZXIgPyB0LmJ1ZmZlci5pbmRleE9mKGEucmFkaXhQb2ludCkgOiAtMSwgbyA9ICgtMSAhPT0gciB8fCBuICYmIGEuaml0TWFza2luZykgJiYgbmV3IFJlZ0V4cChhLmRlZmluaXRpb25zWzldLnZhbGlkYXRvcikudGVzdChlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuX3JhZGl4RGFuY2UgJiYgLTEgIT09IHIgJiYgbyAmJiBudWxsID09IHQudmFsaWRQb3NpdGlvbnNbcl0gPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHIgPT09IGkgPyByICsgMSA6IHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogYS5yYWRpeFBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBpXG4gICAgICAgICAgICAgICAgICAgIH0gOiBvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuLmRlZmF1bHQuZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgICAgICAgICAgICAgIG51bWVyaWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlcGVhdCA9IDAsIGUuZ3JvdXBTZXBhcmF0b3IgPT09IGUucmFkaXhQb2ludCAmJiBlLmRpZ2l0cyAmJiBcIjBcIiAhPT0gZS5kaWdpdHMgJiYgKFwiLlwiID09PSBlLnJhZGl4UG9pbnQgPyBlLmdyb3VwU2VwYXJhdG9yID0gXCIsXCIgOiBcIixcIiA9PT0gZS5yYWRpeFBvaW50ID8gZS5ncm91cFNlcGFyYXRvciA9IFwiLlwiIDogZS5ncm91cFNlcGFyYXRvciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiA9PT0gZS5ncm91cFNlcGFyYXRvciAmJiAoZS5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gdm9pZCAwKSwgZS5wbGFjZWhvbGRlci5sZW5ndGggPiAxICYmIChlLnBsYWNlaG9sZGVyID0gZS5wbGFjZWhvbGRlci5jaGFyQXQoMCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJhZGl4Rm9jdXNcIiA9PT0gZS5wb3NpdGlvbkNhcmV0T25DbGljayAmJiBcIlwiID09PSBlLnBsYWNlaG9sZGVyICYmIChlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJsdnBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBcIjBcIiwgaSA9IGUucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gZS5udW1lcmljSW5wdXQgJiYgdm9pZCAwID09PSBlLl9fZmluYW5jZUlucHV0ID8gKHQgPSBcIjFcIiwgZS5wb3NpdGlvbkNhcmV0T25DbGljayA9IFwicmFkaXhGb2N1c1wiID09PSBlLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID8gXCJsdnBcIiA6IGUucG9zaXRpb25DYXJldE9uQ2xpY2ssIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGlnaXRzT3B0aW9uYWwgPSAhMSwgaXNOYU4oZS5kaWdpdHMpICYmIChlLmRpZ2l0cyA9IDIpLCBlLl9yYWRpeERhbmNlID0gITEsIGkgPSBcIixcIiA9PT0gZS5yYWRpeFBvaW50ID8gXCI/XCIgOiBcIiFcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gZS5yYWRpeFBvaW50ICYmIHZvaWQgMCA9PT0gZS5kZWZpbml0aW9uc1tpXSAmJiAoZS5kZWZpbml0aW9uc1tpXSA9IHt9LCBlLmRlZmluaXRpb25zW2ldLnZhbGlkYXRvciA9IFwiW1wiICsgZS5yYWRpeFBvaW50ICsgXCJdXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVmaW5pdGlvbnNbaV0ucGxhY2Vob2xkZXIgPSBlLnJhZGl4UG9pbnQsIGUuZGVmaW5pdGlvbnNbaV0uc3RhdGljID0gITAsIGUuZGVmaW5pdGlvbnNbaV0uZ2VuZXJhdGVkID0gITApKSA6IChlLl9fZmluYW5jZUlucHV0ID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubnVtZXJpY0lucHV0ID0gITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCByID0gXCJbK11cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociArPSBjKGUucHJlZml4LCBlKSwgXCJcIiAhPT0gZS5ncm91cFNlcGFyYXRvciA/ICh2b2lkIDAgPT09IGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0gJiYgKGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0gPSB7fSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXS52YWxpZGF0b3IgPSBcIltcIiArIGUuZ3JvdXBTZXBhcmF0b3IgKyBcIl1cIiwgZS5kZWZpbml0aW9uc1tlLmdyb3VwU2VwYXJhdG9yXS5wbGFjZWhvbGRlciA9IGUuZ3JvdXBTZXBhcmF0b3IsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0uc3RhdGljID0gITAsIGUuZGVmaW5pdGlvbnNbZS5ncm91cFNlcGFyYXRvcl0uZ2VuZXJhdGVkID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByICs9IGUuX21hc2soZSkpIDogciArPSBcIjl7K31cIiwgdm9pZCAwICE9PSBlLmRpZ2l0cyAmJiAwICE9PSBlLmRpZ2l0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGUuZGlnaXRzLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShvWzBdKSAmJiBvWzFdICYmIGlzRmluaXRlKG9bMV0pID8gciArPSBpICsgdCArIFwie1wiICsgZS5kaWdpdHMgKyBcIn1cIiA6IChpc05hTihlLmRpZ2l0cykgfHwgcGFyc2VJbnQoZS5kaWdpdHMpID4gMCkgJiYgKGUuZGlnaXRzT3B0aW9uYWwgfHwgZS5qaXRNYXNraW5nID8gKG4gPSByICsgaSArIHQgKyBcInswLFwiICsgZS5kaWdpdHMgKyBcIn1cIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUua2VlcFN0YXRpYyA9ICEwKSA6IHIgKz0gaSArIHQgKyBcIntcIiArIGUuZGlnaXRzICsgXCJ9XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBlLmlucHV0bW9kZSA9IFwibnVtZXJpY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByICs9IGMoZS5zdWZmaXgsIGUpLCByICs9IFwiWy1dXCIsIG4gJiYgKHIgPSBbIG4gKyBjKGUuc3VmZml4LCBlKSArIFwiWy1dXCIsIHIgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZ3JlZWR5ID0gITEsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlLnBhcnNlTWluTWF4T3B0aW9ucyAmJiAobnVsbCAhPT0gZS5taW4gJiYgKGUubWluID0gZS5taW4udG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKGUuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcIixcIiA9PT0gZS5yYWRpeFBvaW50ICYmIChlLm1pbiA9IGUubWluLnJlcGxhY2UoZS5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5taW4gPSBpc0Zpbml0ZShlLm1pbikgPyBwYXJzZUZsb2F0KGUubWluKSA6IE5hTiwgaXNOYU4oZS5taW4pICYmIChlLm1pbiA9IE51bWJlci5NSU5fVkFMVUUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IGUubWF4ICYmIChlLm1heCA9IGUubWF4LnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBhLmRlZmF1bHQpKGUuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXCIgPT09IGUucmFkaXhQb2ludCAmJiAoZS5tYXggPSBlLm1heC5yZXBsYWNlKGUucmFkaXhQb2ludCwgXCIuXCIpKSwgZS5tYXggPSBpc0Zpbml0ZShlLm1heCkgPyBwYXJzZUZsb2F0KGUubWF4KSA6IE5hTiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKGUubWF4KSAmJiAoZS5tYXggPSBOdW1iZXIuTUFYX1ZBTFVFKSksIGUucGFyc2VNaW5NYXhPcHRpb25zID0gXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSksIFwiXCIgIT09IGUucmFkaXhQb2ludCAmJiBlLnN1YnN0aXR1dGVSYWRpeFBvaW50ICYmIChlLnN1YnN0aXR1dGVzW1wiLlwiID09IGUucmFkaXhQb2ludCA/IFwiLFwiIDogXCIuXCJdID0gZS5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIGUuZ3JvdXBTZXBhcmF0b3IgKyBcIjk5OSl7K3wxfVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogXCIqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmZvcmNlRGlnaXRzT25CbHVyOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uQ2xpY2s6IFwicmFkaXhGb2N1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JhZGl4RGFuY2U6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd01pbnVzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZ2F0aW9uU3ltYm9sOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnQ6IFwiLVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2s6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBTZXRNYXhPbk92ZXJmbG93OiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRpbmdGTjogTWF0aC5yb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGN1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrOiBcIjEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtOiBcIjEwMDAwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodEFsaWduOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlUHJvdG90eXBlRGVmaW5pdGlvbnM6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXBMZWFkaW5nWmVyb2VzOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGVSYWRpeFBvaW50OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIjlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTAtXFx1ZmYxOVxcdTA2NjAtXFx1MDY2OVxcdTA2ZjAtXFx1MDZmOV1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCIqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWxsb3dNaW51cyAmJiAoXCItXCIgPT09IGUgfHwgZSA9PT0gYS5uZWdhdGlvblN5bWJvbC5mcm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWxsb3dNaW51cyAmJiBlID09PSBhLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSwgciwgbywgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gYS5fX2ZpbmFuY2VJbnB1dCAmJiBpID09PSBhLnJhZGl4UG9pbnQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGUuaW5kZXhPZihhLnJhZGl4UG9pbnQpLCBjID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9IGZ1bmN0aW9uKGUsIHQsIGksIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuX3JhZGl4RGFuY2UgJiYgYS5udW1lcmljSW5wdXQgJiYgdCAhPT0gYS5uZWdhdGlvblN5bWJvbC5iYWNrICYmIGUgPD0gaSAmJiAoaSA+IDAgfHwgdCA9PSBhLnJhZGl4UG9pbnQpICYmICh2b2lkIDAgPT09IG4udmFsaWRQb3NpdGlvbnNbZSAtIDFdIHx8IG4udmFsaWRQb3NpdGlvbnNbZSAtIDFdLmlucHV0ICE9PSBhLm5lZ2F0aW9uU3ltYm9sLmJhY2spICYmIChlIC09IDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQsIGksIGwsIHIsIGEpLCBcIi1cIiA9PT0gaSB8fCBpID09PSBhLm5lZ2F0aW9uU3ltYm9sLmZyb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gYS5hbGxvd01pbnVzKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gITEsIHAgPSBkKFwiK1wiLCByKSwgaCA9IGQoXCItXCIsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IHAgJiYgKHUgPSBbIHAsIGggXSksICExICE9PSB1ID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiB1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGMgLSBhLm5lZ2F0aW9uU3ltYm9sLmJhY2subGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogZi5jYWxsKHRoaXMsIFwiK1wiLCByKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBhLm5lZ2F0aW9uU3ltYm9sLmZyb250LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Jc1ZhbGlkOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogZi5jYWxsKHRoaXMsIFwiLVwiLCByKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBhLm5lZ2F0aW9uU3ltYm9sLmJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUlzVmFsaWQ6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGMgKyBhLm5lZ2F0aW9uU3ltYm9sLmJhY2subGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBhLmdyb3VwU2VwYXJhdG9yKSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGwgJiYgITAgPT09IGEuX3JhZGl4RGFuY2UgJiYgITEgPT09IG4gJiYgaSA9PT0gYS5yYWRpeFBvaW50ICYmIHZvaWQgMCAhPT0gYS5kaWdpdHMgJiYgKGlzTmFOKGEuZGlnaXRzKSB8fCBwYXJzZUludChhLmRpZ2l0cykgPiAwKSAmJiBsICE9PSB0KSByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogYS5fcmFkaXhEYW5jZSAmJiB0ID09PSBsIC0gMSA/IGwgKyAxIDogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBhLl9fZmluYW5jZUlucHV0KSBpZiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYS5kaWdpdHNPcHRpb25hbCkgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogby5lbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhLmRpZ2l0c09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5iZWdpbiA+IGwgJiYgby5lbmQgPD0gbCkgcmV0dXJuIGkgPT09IGEucmFkaXhQb2ludCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBsICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Jc1ZhbGlkOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogbCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5iZWdpbiA8IGwpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiBvLmJlZ2luIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWEuc2hvd01hc2tPbkhvdmVyICYmICFhLnNob3dNYXNrT25Gb2N1cyAmJiAhYS5kaWdpdHNPcHRpb25hbCAmJiBhLmRpZ2l0cyA+IDAgJiYgXCJcIiA9PT0gdGhpcy5fX3ZhbHVlR2V0LmNhbGwodGhpcy5lbCkpIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld3JpdGVQb3NpdGlvbjogbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3cml0ZVBvc2l0aW9uOiB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24oZSwgdCwgaSwgbiwgYSwgciwgbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSA9PT0gbikgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gYS5taW4gfHwgbnVsbCAhPT0gYS5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLm9uVW5NYXNrKGUuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSwgdm9pZCAwLCBsLmV4dGVuZCh7fSwgYSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXNrQXNOdW1iZXI6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IGEubWluICYmIHMgPCBhLm1pbiAmJiAocy50b1N0cmluZygpLmxlbmd0aCA+IGEubWluLnRvU3RyaW5nKCkubGVuZ3RoIHx8IHMgPCAwKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gYS5tYXggJiYgcyA+IGEubWF4KSByZXR1cm4gISFhLlNldE1heE9uT3ZlcmZsb3cgJiYge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiB1KGEubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgYS5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwgYS5kaWdpdHMsIGEpLnJldmVyc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSB0ICYmICEwID09PSBpLm51bGxhYmxlKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGUucmVwbGFjZShpLnByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPSAobiA9IG4ucmVwbGFjZShpLnN1ZmZpeCwgXCJcIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgYS5kZWZhdWx0KShpLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gaS5wbGFjZWhvbGRlci5jaGFyQXQoMCkgJiYgKG4gPSBuLnJlcGxhY2UobmV3IFJlZ0V4cChpLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpLnVubWFza0FzTnVtYmVyID8gKFwiXCIgIT09IGkucmFkaXhQb2ludCAmJiAtMSAhPT0gbi5pbmRleE9mKGkucmFkaXhQb2ludCkgJiYgKG4gPSBuLnJlcGxhY2UoYS5kZWZhdWx0LmNhbGwodGhpcywgaS5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbiA9IChuID0gbi5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyAoMCwgYS5kZWZhdWx0KShpLm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKGkubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIiRcIiksIFwiXCIpLCBOdW1iZXIobikpIDogbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAodC5udW1lcmljSW5wdXQgPyBlLnNsaWNlKCkucmV2ZXJzZSgpIDogZSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA9IChpID0gKGkgPSAoaSA9IChpID0gaS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyAoMCwgYS5kZWZhdWx0KSh0Lm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSkucmVwbGFjZShuZXcgUmVnRXhwKCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKHQubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIiRcIiksIFwiXCIpKS5yZXBsYWNlKHQucHJlZml4LCBcIlwiKSkucmVwbGFjZSh0LnN1ZmZpeCwgXCJcIikpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0KSh0Lmdyb3VwU2VwYXJhdG9yKSArIFwiKFswLTldezN9KVwiLCBcImdcIiksIFwiJDFcIiksIFwiLFwiID09PSB0LnJhZGl4UG9pbnQgJiYgKGkgPSBpLnJlcGxhY2UoKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkodC5yYWRpeFBvaW50KSwgXCIuXCIpKSwgaXNGaW5pdGUoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0LnJhZGl4UG9pbnQgfHwgXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGaW5pdGUodC5kaWdpdHMpICYmICh0LmRpZ2l0cyA9IHBhcnNlSW50KHQuZGlnaXRzKSksIFwibnVtYmVyXCIgIT0gdHlwZW9mIGUgJiYgXCJudW1iZXJcIiAhPT0gdC5pbnB1dFR5cGUgfHwgXCJcIiA9PT0gaSB8fCAoZSA9IGUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBcIi1cIiA9PT0gZS5jaGFyQXQoMCkgfHwgZS5jaGFyQXQoMCkgPT09IHQubmVnYXRpb25TeW1ib2wuZnJvbnQsIHIgPSBlLnNwbGl0KGkpLCBvID0gclswXS5yZXBsYWNlKC9bXlxcLTAtOV0vZywgXCJcIiksIHMgPSByLmxlbmd0aCA+IDEgPyByWzFdLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKSA6IFwiXCIsIGwgPSByLmxlbmd0aCA+IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IG8gKyAoXCJcIiAhPT0gcyA/IGkgKyBzIDogcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBpICYmIChjID0gdC5kaWdpdHNPcHRpb25hbCA/IHQuZGlnaXRzIDwgcy5sZW5ndGggPyB0LmRpZ2l0cyA6IHMubGVuZ3RoIDogdC5kaWdpdHMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IHMgfHwgIXQuZGlnaXRzT3B0aW9uYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gTWF0aC5wb3coMTAsIGMgfHwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBlLnJlcGxhY2UoKDAsIGEuZGVmYXVsdCkoaSksIFwiLlwiKSwgaXNOYU4ocGFyc2VGbG9hdChlKSkgfHwgKGUgPSAodC5yb3VuZGluZ0ZOKHBhcnNlRmxvYXQoZSkgKiBmKSAvIGYpLnRvRml4ZWQoYykpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IHQuZGlnaXRzICYmIC0xICE9PSBlLmluZGV4T2YoaSkgJiYgKGUgPSBlLnN1YnN0cmluZygwLCBlLmluZGV4T2YoaSkpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gdC5taW4gfHwgbnVsbCAhPT0gdC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBlLnRvU3RyaW5nKCkucmVwbGFjZShpLCBcIi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIT09IHQubWluICYmIGQgPCB0Lm1pbiA/IGUgPSB0Lm1pbi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIGkpIDogbnVsbCAhPT0gdC5tYXggJiYgZCA+IHQubWF4ICYmIChlID0gdC5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuICYmIFwiLVwiICE9PSBlLmNoYXJBdCgwKSAmJiAoZSA9IFwiLVwiICsgZSksIHUoZS50b1N0cmluZygpLnNwbGl0KFwiXCIpLCBjLCB0LCBsKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSBuLl9fZmluYW5jZUlucHV0IHx8IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZS5pbmRleE9mKG4ucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSAhPT0gaSAmJiBlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gbi5ncm91cFNlcGFyYXRvcikgZm9yICg7LTEgIT09IChpID0gZS5pbmRleE9mKG4uZ3JvdXBTZXBhcmF0b3IpKTsgKSBlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvLCBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLnN0cmlwTGVhZGluZ1plcm9lcyAmJiAocyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBuZXcgUmVnRXhwKFwiKF5cIiArIChcIlwiICE9PSB0Lm5lZ2F0aW9uU3ltYm9sLmZyb250ID8gKDAsIGEuZGVmYXVsdCkodC5uZWdhdGlvblN5bWJvbC5mcm9udCkgKyBcIj9cIiA6IFwiXCIpICsgKDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKHQucHJlZml4KSArIFwiKSguKikoXCIgKyAoMCwgYS5kZWZhdWx0KSh0LnN1ZmZpeCkgKyAoXCJcIiAhPSB0Lm5lZ2F0aW9uU3ltYm9sLmJhY2sgPyAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdCkodC5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiP1wiIDogXCJcIikgKyBcIiQpXCIpLmV4ZWMoZS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpKSwgbiA9IGkgPyBpWzJdIDogXCJcIiwgciA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiAmJiAobiA9IG4uc3BsaXQodC5yYWRpeFBvaW50LmNoYXJBdCgwKSlbMF0sIHIgPSBuZXcgUmVnRXhwKFwiXlswXCIgKyB0Lmdyb3VwU2VwYXJhdG9yICsgXCJdKlwiKS5leGVjKG4pKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoIXIgfHwgIShyWzBdLmxlbmd0aCA+IDEgfHwgclswXS5sZW5ndGggPiAwICYmIHJbMF0ubGVuZ3RoIDwgbi5sZW5ndGgpKSAmJiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odCwgbikpKSBmb3IgKHZhciBjID0gdC5qb2luKFwiXCIpLmxhc3RJbmRleE9mKHNbMF0uc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpIC0gKHNbMF0gPT0gcy5pbnB1dCA/IDAgOiAxKSwgZiA9IHNbMF0gPT0gcy5pbnB1dCA/IDEgOiAwLCBkID0gc1swXS5sZW5ndGggLSBmOyBkID4gMDsgZC0tKSBkZWxldGUgdGhpcy5tYXNrc2V0LnZhbGlkUG9zaXRpb25zW2MgKyBkXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRbYyArIGRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJsdXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja3ZhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gbi5taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gbi5vblVuTWFzayh0LnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIiksIHZvaWQgMCwgbC5leHRlbmQoe30sIG4sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBuLm1pbiAmJiBwIDwgbi5taW4pIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogdShuLm1pbi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIG4ucmFkaXhQb2ludCkuc3BsaXQoXCJcIiksIG4uZGlnaXRzLCBuKS5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbdC5sZW5ndGggLSAxXSA9PT0gbi5uZWdhdGlvblN5bWJvbC5mcm9udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBuZXcgUmVnRXhwKFwiKF5cIiArIChcIlwiICE9IG4ubmVnYXRpb25TeW1ib2wuZnJvbnQgPyAoMCwgYS5kZWZhdWx0KShuLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiP1wiIDogXCJcIikgKyAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKG4ucHJlZml4KSArIFwiKSguKikoXCIgKyAoMCwgYS5kZWZhdWx0KShuLnN1ZmZpeCkgKyAoXCJcIiAhPSBuLm5lZ2F0aW9uU3ltYm9sLmJhY2sgPyAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRlZmF1bHQpKG4ubmVnYXRpb25TeW1ib2wuYmFjaykgKyBcIj9cIiA6IFwiXCIpICsgXCIkKVwiKS5leGVjKHIodC5zbGljZSgpLCAhMCkucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCA9PSAoaCA/IGhbMl0gOiBcIlwiKSAmJiAobyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBbIDAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJcIiAhPT0gbi5yYWRpeFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0LmluZGV4T2Yobi5yYWRpeFBvaW50KSA9PT0gbi5zdWZmaXgubGVuZ3RoICYmIChvICYmIG8uYnVmZmVyID8gby5idWZmZXIuc3BsaWNlKDAsIDEgKyBuLnN1ZmZpeC5sZW5ndGgpIDogKHQuc3BsaWNlKDAsIDEgKyBuLnN1ZmZpeC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogcih0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmVuZm9yY2VEaWdpdHNPbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gKG8gPSBvIHx8IHt9KSAmJiBvLmJ1ZmZlciB8fCB0LnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5yZWZyZXNoRnJvbUJ1ZmZlciA9ICEwLCBvLmJ1ZmZlciA9IHUodiwgbi5kaWdpdHMsIG4sICEwKS5yZXZlcnNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCB0LCBpLCBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEsIHIgPSBsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgzICE9IGUubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMsIGMgPSBlLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzID0gbi5zaG9ydGN1dHMgJiYgbi5zaG9ydGN1dHNbY10pICYmIHMubGVuZ3RoID4gMSkgcmV0dXJuIHRoaXMuaW5wdXRtYXNrLl9fdmFsdWVTZXQuY2FsbCh0aGlzLCBwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgKiBwYXJzZUludChzKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugby5rZXlzLkFycm93VXA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5fX3ZhbHVlU2V0LmNhbGwodGhpcywgcGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpICsgcGFyc2VJbnQobi5zdGVwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnRyaWdnZXIoXCJzZXR2YWx1ZVwiKSwgITE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugby5rZXlzLkFycm93RG93bjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRtYXNrLl9fdmFsdWVTZXQuY2FsbCh0aGlzLCBwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChuLnN0ZXApKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcInNldHZhbHVlXCIpLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnNoaWZ0S2V5ICYmIChlLmtleSA9PT0gby5rZXlzLkRlbGV0ZSB8fCBlLmtleSA9PT0gby5rZXlzLkJhY2tzcGFjZSB8fCBlLmtleSA9PT0gby5rZXlzLkJBQ0tTUEFDRV9TQUZBUkkpICYmIGkuYmVnaW4gIT09IHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0W2Uua2V5ID09PSBvLmtleXMuRGVsZXRlID8gaS5iZWdpbiAtIDEgOiBpLmVuZF0gPT09IG4ubmVnYXRpb25TeW1ib2wuZnJvbnQpIHJldHVybiBhID0gdC5zbGljZSgpLnJldmVyc2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG4ubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgYS5zaGlmdCgpLCBcIlwiICE9PSBuLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgYS5wb3AoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIudHJpZ2dlcihcInNldHZhbHVlXCIsIFsgYS5qb2luKFwiXCIpLCBpLmJlZ2luIF0pLCAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBuLl9yYWRpeERhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHQuaW5kZXhPZihuLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4uZGlnaXRzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gZikgcmV0dXJuIChhID0gdC5zbGljZSgpLnJldmVyc2UoKSkucG9wKCksIHIudHJpZ2dlcihcInNldHZhbHVlXCIsIFsgYS5qb2luKFwiXCIpLCBpLmJlZ2luID49IGEubGVuZ3RoID8gYS5sZW5ndGggOiBpLmJlZ2luIF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoLTEgIT09IGYgJiYgKGkuYmVnaW4gPCBmIHx8IGkuZW5kIDwgZiB8fCBlLmtleSA9PT0gby5rZXlzLkRlbGV0ZSAmJiAoaS5iZWdpbiA9PT0gZiB8fCBpLmJlZ2luIC0gMSA9PT0gZikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkuYmVnaW4gPT09IGkuZW5kICYmIChlLmtleSA9PT0gby5rZXlzLkJhY2tzcGFjZSB8fCBlLmtleSA9PT0gby5rZXlzLkJBQ0tTUEFDRV9TQUZBUkkgPyBpLmJlZ2luKysgOiBlLmtleSA9PT0gby5rZXlzLkRlbGV0ZSAmJiBpLmJlZ2luIC0gMSA9PT0gZiAmJiAoZCA9IGwuZXh0ZW5kKHt9LCBpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5iZWdpbi0tLCBpLmVuZC0tKSksIChhID0gdC5zbGljZSgpLnJldmVyc2UoKSkuc3BsaWNlKGEubGVuZ3RoIC0gaS5iZWdpbiwgaS5iZWdpbiAtIGkuZW5kICsgMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB1KGEsIG4uZGlnaXRzLCBuKS5qb2luKFwiXCIpLCBkICYmIChpID0gZCksIHIudHJpZ2dlcihcInNldHZhbHVlXCIsIFsgYSwgaS5iZWdpbiA+PSBhLmxlbmd0aCA/IGYgKyAxIDogaS5iZWdpbiBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFNlcGFyYXRvcjogXCIsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGludGVnZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICExXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluZGlhbm5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlhczogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfbWFzazogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIGUuZ3JvdXBTZXBhcmF0b3IgKyBcIjk5KXsqfDF9KFwiICsgZS5ncm91cFNlcGFyYXRvciArIFwiOTk5KXsxfDF9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiLFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDkzODA6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbjtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICgobiA9IGkoODc0MSkpICYmIG4uX19lc01vZHVsZSA/IG4gOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG5cbiAgICAgICAgICAgICAgICB9KS5kZWZhdWx0ID8gd2luZG93IDoge307XG4gICAgICAgICAgICAgICAgdC5kZWZhdWx0ID0gYTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3NzYwOiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LkhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmllKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IHQgJiYgKGUucGxhY2Vob2xkZXIgIT09IHQgfHwgXCJcIiA9PT0gZS5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHIuZ2V0QnVmZmVyLmNhbGwoaSkuc2xpY2UoKSwgYSA9IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSA9PT0gbyAmJiBhID09PSByLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaSkuam9pbihcIlwiKSA/IG4gPSBbXSA6IC0xICE9PSBvICYmIHUuY2FsbChpLCBuKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQoZSwgbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZS5wbGFjZWhvbGRlciAhPT0gdCAmJiAoZS5wbGFjZWhvbGRlciA9IHQsIFwiXCIgPT09IGUucGxhY2Vob2xkZXIgJiYgZS5yZW1vdmVBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSk7XG4gICAgICAgICAgICAgICAgfSwgdC5hcHBseUlucHV0VmFsdWUgPSBjLCB0LmNoZWNrVmFsID0gZiwgdC5jbGVhck9wdGlvbmFsVGFpbCA9IHUsIHQudW5tYXNrZWR2YWx1ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzLCBpID0gdC5vcHRzLCBuID0gdC5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZS5pbnB1dG1hc2spIHJldHVybiBlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2sgJiYgZS5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIGMoZSwgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBvID0gbi52YWxpZFBvc2l0aW9ucywgcyA9IDAsIGwgPSBvLmxlbmd0aDsgcyA8IGw7IHMrKykgb1tzXSAmJiBvW3NdLm1hdGNoICYmICgxICE9IG9bc10ubWF0Y2guc3RhdGljIHx8IEFycmF5LmlzQXJyYXkobi5tZXRhZGF0YSkgJiYgITAgIT09IG9bc10uZ2VuZXJhdGVkSW5wdXQpICYmIGEucHVzaChvW3NdLmlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHUgPSAwID09PSBhLmxlbmd0aCA/IFwiXCIgOiAodC5pc1JUTCA/IGEucmV2ZXJzZSgpIDogYSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaS5vblVuTWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAodC5pc1JUTCA/IHIuZ2V0QnVmZmVyLmNhbGwodCkuc2xpY2UoKS5yZXZlcnNlKCkgOiByLmdldEJ1ZmZlci5jYWxsKHQpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGkub25Vbk1hc2suY2FsbCh0LCBmLCB1LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICAgICAgICB9LCB0LndyaXRlQnVmZmVyID0gZDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGkoMjgzOSksIGEgPSBpKDQ3MTMpLCByID0gaSg4NzExKSwgbyA9IGkoNzIxNSksIHMgPSBpKDk4NDUpLCBsID0gaSg2MDMwKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzLCBuID0gaS5vcHRzO1xuICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBuLm9uQmVmb3JlTWFzayAmJiAodCA9IG4ub25CZWZvcmVNYXNrLmNhbGwoaSwgdCwgbikgfHwgdCksIFxuICAgICAgICAgICAgICAgICAgICBmKGUsICEwLCAhMSwgdCA9ICh0IHx8IFwiXCIpLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikpLCBpLnVuZG9WYWx1ZSA9IGkuX3ZhbHVlR2V0KCEwKSwgXG4gICAgICAgICAgICAgICAgICAgIChuLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IG4uY2xlYXJJbmNvbXBsZXRlKSAmJiBlLmlucHV0bWFzay5fdmFsdWVHZXQoKSA9PT0gci5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGkpLmpvaW4oXCJcIikgJiYgLTEgPT09IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpKSAmJiBlLmlucHV0bWFzay5fdmFsdWVTZXQoXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQsIGkgPSBhLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICEwLCAwLCAhMCwgdm9pZCAwLCAhMCk7IHZvaWQgMCAhPT0gKHQgPSBpLnNoaWZ0KCkpOyApIGUucHVzaCh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCwgaSwgbiwgcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGUgPyBlLmlucHV0bWFzayA6IHRoaXMsIHUgPSBjLm1hc2tzZXQsIGYgPSBjLm9wdHMsIHAgPSBjLmRlcGVuZGVuY3lMaWIsIGggPSBuLnNsaWNlKCksIHYgPSBcIlwiLCBtID0gLTEsIGcgPSB2b2lkIDAsIHkgPSBmLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIGYuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IFwiXCIsIHIucmVzZXRNYXNrU2V0LmNhbGwoYyksIHUudGVzdHMgPSB7fSwgbSA9IGYucmFkaXhQb2ludCA/IHIuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKGMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sICExLCAhMSA9PT0gZi5fX2ZpbmFuY2VJbnB1dCA/IFwicmFkaXhGb2N1c1wiIDogdm9pZCAwKS5iZWdpbiA6IDAsIHUucCA9IG0sIGMuY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgayA9IFtdLCBiID0gYy5jYXJldFBvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGguZm9yRWFjaCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IHAuRXZlbnQoXCJfY2hlY2t2YWxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5rZXkgPSBlLCB2ICs9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoYywgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGEuZ2V0TWFza1RlbXBsYXRlLmNhbGwoYywgITAsIDApLnNsaWNlKGUsIHIuc2Vla05leHQuY2FsbChjLCBlLCAhMSwgITEpKS5qb2luKFwiXCIpLnJlcGxhY2UoLycvZywgXCJcIiksIG4gPSBpLmluZGV4T2YodCk7IG4gPiAwICYmIFwiIFwiID09PSBpW24gLSAxXTsgKSBuLS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gMCA9PT0gbiAmJiAhci5pc01hc2suY2FsbChjLCBlKSAmJiAoYS5nZXRUZXN0LmNhbGwoYywgZSkubWF0Y2gubmF0aXZlRGVmID09PSB0LmNoYXJBdCgwKSB8fCAhMCA9PT0gYS5nZXRUZXN0LmNhbGwoYywgZSkubWF0Y2guc3RhdGljICYmIGEuZ2V0VGVzdC5jYWxsKGMsIGUpLm1hdGNoLm5hdGl2ZURlZiA9PT0gXCInXCIgKyB0LmNoYXJBdCgwKSB8fCBcIiBcIiA9PT0gYS5nZXRUZXN0LmNhbGwoYywgZSkubWF0Y2gubmF0aXZlRGVmICYmIChhLmdldFRlc3QuY2FsbChjLCBlICsgMSkubWF0Y2gubmF0aXZlRGVmID09PSB0LmNoYXJBdCgwKSB8fCAhMCA9PT0gYS5nZXRUZXN0LmNhbGwoYywgZSArIDEpLm1hdGNoLnN0YXRpYyAmJiBhLmdldFRlc3QuY2FsbChjLCBlICsgMSkubWF0Y2gubmF0aXZlRGVmID09PSBcIidcIiArIHQuY2hhckF0KDApKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbyAmJiBuID4gMCAmJiAhci5pc01hc2suY2FsbChjLCBlLCAhMSwgITApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHIuc2Vla05leHQuY2FsbChjLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuY2FyZXRQb3MuYmVnaW4gPCBzICYmIChjLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG0sIHYpID8gKGcgPSBsLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGMsIG4sICEwLCAhMSwgaSwgYy5jYXJldFBvcy5iZWdpbikpICYmIChtID0gYy5jYXJldFBvcy5iZWdpbiArIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBcIlwiKSA6IGcgPSBsLkV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGMsIG4sICEwLCAhMSwgaSwgbyArIDEpLCBnID8gKHZvaWQgMCAhPT0gZy5wb3MgJiYgdS52YWxpZFBvc2l0aW9uc1tnLnBvc10gJiYgITAgPT09IHUudmFsaWRQb3NpdGlvbnNbZy5wb3NdLm1hdGNoLnN0YXRpYyAmJiB2b2lkIDAgPT09IHUudmFsaWRQb3NpdGlvbnNbZy5wb3NdLmFsdGVybmF0aW9uICYmIChrLnB1c2goZy5wb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmlzUlRMIHx8IChnLmZvcndhcmRQb3NpdGlvbiA9IGcucG9zICsgMSkpLCBkLmNhbGwoYywgdm9pZCAwLCByLmdldEJ1ZmZlci5jYWxsKGMpLCBnLmZvcndhcmRQb3NpdGlvbiwgbiwgITEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogZy5mb3J3YXJkUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZy5mb3J3YXJkUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBiID0gYy5jYXJldFBvcykgOiB2b2lkIDAgPT09IHUudmFsaWRQb3NpdGlvbnNbdF0gJiYgaFt0XSA9PT0gYS5nZXRQbGFjZWhvbGRlci5jYWxsKGMsIHQpICYmIHIuaXNNYXNrLmNhbGwoYywgdCwgITApID8gYy5jYXJldFBvcy5iZWdpbisrIDogYy5jYXJldFBvcyA9IGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCwgUCwgdyA9IHIuc2Vla05leHQuY2FsbChjLCAtMSwgdm9pZCAwLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW8uaXNDb21wbGV0ZS5jYWxsKGMsIHIuZ2V0QnVmZmVyLmNhbGwoYykpICYmIGsubGVuZ3RoIDw9IHcgfHwgby5pc0NvbXBsZXRlLmNhbGwoYywgci5nZXRCdWZmZXIuY2FsbChjKSkgJiYgay5sZW5ndGggPiAwICYmIGsubGVuZ3RoICE9PSB3ICYmIDAgPT09IGtbMF0pIGZvciAodmFyIFMgPSB3OyB2b2lkIDAgIT09ICh4ID0gay5zaGlmdCgpKTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIE0gPSBuZXcgcC5FdmVudChcIl9jaGVja3ZhbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKFAgPSB1LnZhbGlkUG9zaXRpb25zW3hdKS5nZW5lcmF0ZWRJbnB1dCA9ICEwLCBNLmtleSA9IFAuaW5wdXQsIChnID0gbC5FdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChjLCBNLCAhMCwgITEsIGksIFMpKSAmJiB2b2lkIDAgIT09IGcucG9zICYmIGcucG9zICE9PSB4ICYmIHUudmFsaWRQb3NpdGlvbnNbZy5wb3NdICYmICEwID09PSB1LnZhbGlkUG9zaXRpb25zW2cucG9zXS5tYXRjaC5zdGF0aWMpIGsucHVzaChnLnBvcyk7IGVsc2UgaWYgKCFnKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdCAmJiBkLmNhbGwoYywgZSwgci5nZXRCdWZmZXIuY2FsbChjKSwgZyA/IGcuZm9yd2FyZFBvc2l0aW9uIDogYy5jYXJldFBvcy5iZWdpbiwgcyB8fCBuZXcgcC5FdmVudChcImNoZWNrdmFsXCIpLCBzICYmIChcImlucHV0XCIgPT09IHMudHlwZSAmJiBjLnVuZG9WYWx1ZSAhPT0gci5nZXRCdWZmZXIuY2FsbChjKS5qb2luKFwiXCIpIHx8IFwicGFzdGVcIiA9PT0gcy50eXBlKSksIFxuICAgICAgICAgICAgICAgICAgICBmLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIGksIGEsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBlID8gZS5pbnB1dG1hc2sgOiB0aGlzLCBjID0gbC5vcHRzLCB1ID0gbC5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGMub25CZWZvcmVXcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBjLm9uQmVmb3JlV3JpdGUuY2FsbChsLCBhLCB0LCBpLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGYucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBmLnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnJlZnJlc2hGcm9tQnVmZmVyLmNhbGwobCwgITAgPT09IGQgPyBkIDogZC5zdGFydCwgZC5lbmQsIGYuYnVmZmVyIHx8IHQpLCB0ID0gci5nZXRCdWZmZXIuY2FsbChsLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gaSAmJiAoaSA9IHZvaWQgMCAhPT0gZi5jYXJldCA/IGYuY2FyZXQgOiBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlICYmIChlLmlucHV0bWFzay5fdmFsdWVTZXQodC5qb2luKFwiXCIpKSwgdm9pZCAwID09PSBpIHx8IHZvaWQgMCAhPT0gYSAmJiBcImJsdXJcIiA9PT0gYS50eXBlIHx8IHIuY2FyZXQuY2FsbChsLCBlLCBpLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwICE9PSBhICYmIFwia2V5ZG93blwiID09PSBhLnR5cGUgJiYgKGEua2V5ID09PSBuLmtleXMuRGVsZXRlIHx8IGEua2V5ID09PSBuLmtleXMuQmFja3NwYWNlKSksIFxuICAgICAgICAgICAgICAgICAgICAhMCA9PT0gcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdShlKSwgaCA9IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbnB1dG1hc2suc2tpcElucHV0RXZlbnQgPSAhMCwgcC50cmlnZ2VyKFwiaW5wdXRcIiksIHNldFRpbWVvdXQoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPT09IHIuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChsKS5qb2luKFwiXCIpID8gcC50cmlnZ2VyKFwiY2xlYXJlZFwiKSA6ICEwID09PSBvLmlzQ29tcGxldGUuY2FsbChsLCB0KSAmJiBwLnRyaWdnZXIoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyMzk0OiBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDE1NyksIGEgPSBtKGkoNDk2MykpLCByID0gbShpKDkzODApKSwgbyA9IGkoMjM5MSksIHMgPSBpKDQ3MTMpLCBsID0gaSg4NzExKSwgYyA9IGkoNzIxNSksIHUgPSBpKDc3NjApLCBmID0gaSg5NzE2KSwgZCA9IG0oaSg3MzkyKSksIHAgPSBtKGkoMzk3NikpLCBoID0gbShpKDg3NDEpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbShlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBnID0gci5kZWZhdWx0LmRvY3VtZW50LCB5ID0gXCJfaW5wdXRtYXNrX29wdHNcIjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGguZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGspKSByZXR1cm4gbmV3IGsoZSwgdCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcGVuZGVuY3lMaWIgPSBhLmRlZmF1bHQsIHRoaXMuZWwgPSB2b2lkIDAsIHRoaXMuZXZlbnRzID0ge30sIHRoaXMubWFza3NldCA9IHZvaWQgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gaSAmJiAoXCJbb2JqZWN0IE9iamVjdF1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpID8gdCA9IGUgOiAodCA9IHQgfHwge30sIFxuICAgICAgICAgICAgICAgICAgICAgICAgZSAmJiAodC5hbGlhcyA9IGUpKSwgdGhpcy5vcHRzID0gYS5kZWZhdWx0LmV4dGVuZCghMCwge30sIHRoaXMuZGVmYXVsdHMsIHQpLCB0aGlzLm5vTWFza3NDYWNoZSA9IHQgJiYgdm9pZCAwICE9PSB0LmRlZmluaXRpb25zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlck9wdGlvbnMgPSB0IHx8IHt9LCBiKHRoaXMub3B0cy5hbGlhcywgdCwgdGhpcy5vcHRzKSksIHRoaXMucmVmcmVzaFZhbHVlID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRvVmFsdWUgPSB2b2lkIDAsIHRoaXMuJGVsID0gdm9pZCAwLCB0aGlzLnNraXBJbnB1dEV2ZW50ID0gITEsIHRoaXMudmFsaWRhdGlvbkV2ZW50ID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pZ25vcmFibGUgPSAhMSwgdGhpcy5tYXhMZW5ndGgsIHRoaXMubW91c2VFbnRlciA9ICExLCB0aGlzLmNsaWNrZWQgPSAwLCB0aGlzLm9yaWdpbmFsUGxhY2Vob2xkZXIgPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvbXBvc2luZyA9ICExLCB0aGlzLmhhc0FsdGVybmF0b3IgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBiKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBrLnByb3RvdHlwZS5hbGlhc2VzW2VdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA/IChuLmFsaWFzICYmIGIobi5hbGlhcywgdm9pZCAwLCBpKSwgYS5kZWZhdWx0LmV4dGVuZCghMCwgaSwgbiksIGEuZGVmYXVsdC5leHRlbmQoITAsIGksIHQpLCBcbiAgICAgICAgICAgICAgICAgICAgITApIDogKG51bGwgPT09IGkubWFzayAmJiAoaS5tYXNrID0gZSksICExKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgay5wcm90b3R5cGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHM6IHAuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IGQuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgICAgICAgICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICBnZXQgaXNSVEwoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRzLmlzUlRMIHx8IHRoaXMub3B0cy5udW1lcmljSW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChlID0gZy5nZXRFbGVtZW50QnlJZChlKSB8fCBnLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChlID0gZS5ub2RlTmFtZSA/IFsgZSBdIDogQXJyYXkuaXNBcnJheShlKSA/IGUgOiBbXS5zbGljZS5jYWxsKGUpKS5mb3JFYWNoKChmdW5jdGlvbihlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBhLmRlZmF1bHQuZXh0ZW5kKCEwLCB7fSwgdC5vcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVuY3Rpb24oZSwgdCwgaSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvKHQsIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gXCJcIiA9PT0gbiA/IHQgOiBuICsgXCItXCIgKyB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gKGEgPSB2b2lkIDAgIT09IGEgPyBhIDogZS5nZXRBdHRyaWJ1dGUobykpICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBhICYmICgwID09PSB0LmluZGV4T2YoXCJvblwiKSA/IGEgPSByLmRlZmF1bHRbYV0gOiBcImZhbHNlXCIgPT09IGEgPyBhID0gITEgOiBcInRydWVcIiA9PT0gYSAmJiAoYSA9ICEwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVt0XSA9IGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdC5pbXBvcnREYXRhQXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMsIGwsIGMsIHUsIGYgPSBlLmdldEF0dHJpYnV0ZShuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmICYmIFwiXCIgIT09IGYgJiYgKGYgPSBmLnJlcGxhY2UoLycvZywgJ1wiJyksIGwgPSBKU09OLnBhcnNlKFwie1wiICsgZiArIFwifVwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCkgZm9yICh1IGluIGMgPSB2b2lkIDAsIGwpIGlmIChcImFsaWFzXCIgPT09IHUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBsW3VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzIGluIG8oXCJhbGlhc1wiLCBjKSwgaS5hbGlhcyAmJiBiKGkuYWxpYXMsIGksIHQpLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwpIGZvciAodSBpbiBjID0gdm9pZCAwLCBsKSBpZiAodS50b0xvd2VyQ2FzZSgpID09PSBzLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGxbdV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvKHMsIGMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmQoITAsIHQsIGkpLCAoXCJydGxcIiA9PT0gZS5kaXIgfHwgdC5yaWdodEFsaWduKSAmJiAoZS5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJydGxcIiA9PT0gZS5kaXIgfHwgdC5udW1lcmljSW5wdXQpICYmIChlLmRpciA9IFwibHRyXCIsIGUucmVtb3ZlQXR0cmlidXRlKFwiZGlyXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pc1JUTCA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGkpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUsIHMsIGEuZGVmYXVsdC5leHRlbmQoITAsIHt9LCB0LnVzZXJPcHRpb25zKSwgdC5kYXRhQXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9ICgwLCBvLmdlbmVyYXRlTWFza1NldCkocywgdC5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGwgJiYgKHZvaWQgMCAhPT0gZS5pbnB1dG1hc2sgJiYgKGUuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzayA9ICEwLCBlLmlucHV0bWFzay5yZW1vdmUoKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayA9IG5ldyBrKHZvaWQgMCwgdm9pZCAwLCAhMCksIGUuaW5wdXRtYXNrLm9wdHMgPSBzLCBlLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0Lm5vTWFza3NDYWNoZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gYS5kZWZhdWx0LmV4dGVuZCghMCwge30sIHQudXNlck9wdGlvbnMpLCBlLmlucHV0bWFzay5lbCA9IGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzay4kZWwgPSAoMCwgYS5kZWZhdWx0KShlKSwgZS5pbnB1dG1hc2subWFza3NldCA9IGwsIGEuZGVmYXVsdC5kYXRhKGUsIHksIHQudXNlck9wdGlvbnMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5tYXNrLmNhbGwoZS5pbnB1dG1hc2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksIGUgJiYgZVswXSAmJiBlWzBdLmlucHV0bWFzayB8fCB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gdGhpcy5vcHRzW2VdIDogXCJvYmplY3RcIiA9PT0gdihlKSA/IChhLmRlZmF1bHQuZXh0ZW5kKHRoaXMudXNlck9wdGlvbnMsIGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWwgJiYgITAgIT09IHQgJiYgdGhpcy5tYXNrKHRoaXMuZWwpLCB0aGlzKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdW5tYXNrZWR2YWx1ZTogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gdGhpcy5lbCB8fCB2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgJiYgdGhpcy5vcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIGUsIHRoaXMub3B0cykgfHwgZSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdS5jaGVja1ZhbC5jYWxsKHRoaXMsIHZvaWQgMCwgITEsICExLCB0KSwgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVXcml0ZSAmJiB0aGlzLm9wdHMub25CZWZvcmVXcml0ZS5jYWxsKHRoaXMsIHZvaWQgMCwgbC5nZXRCdWZmZXIuY2FsbCh0aGlzKSwgMCwgdGhpcy5vcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1LnVubWFza2VkdmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmRhdGEodGhpcy5lbCwgeSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm9wdHMuYXV0b1VubWFzayA/ICgwLCB1LnVubWFza2VkdmFsdWUpKHRoaXMuZWwpIDogdGhpcy5fdmFsdWVHZXQodGhpcy5vcHRzLmF1dG9Vbm1hc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgIT09IGwuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKS5qb2luKFwiXCIpID8gdGhpcy5fdmFsdWVTZXQoZSwgdGhpcy5vcHRzLmF1dG9Vbm1hc2spIDogdGhpcy5fdmFsdWVTZXQoXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYuRXZlbnRSdWxlci5vZmYodGhpcy5lbCksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcy5lbCksIFwidmFsdWVcIikgJiYgdGhpcy5fX3ZhbHVlR2V0ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmVsLCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiB0aGlzLl9fdmFsdWVHZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogdGhpcy5fX3ZhbHVlU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiBnLl9fbG9va3VwR2V0dGVyX18gJiYgdGhpcy5lbC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgdGhpcy5fX3ZhbHVlR2V0ICYmICh0aGlzLmVsLl9fZGVmaW5lR2V0dGVyX18oXCJ2YWx1ZVwiLCB0aGlzLl9fdmFsdWVHZXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLl9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCB0aGlzLl9fdmFsdWVTZXQpKSwgdGhpcy5lbC5pbnB1dG1hc2sgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgKDAsIG8uZ2VuZXJhdGVNYXNrU2V0KSh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pc1JUTCA/IGwuZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKS5yZXZlcnNlKCkgOiBsLmdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcykpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGhhc01hc2tlZFZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5vcHRzLmF1dG9Vbm1hc2s7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCAoMCwgby5nZW5lcmF0ZU1hc2tTZXQpKHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuaXNDb21wbGV0ZS5jYWxsKHRoaXMsIGwuZ2V0QnVmZmVyLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZXRtZXRhZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1hc2tzZXQubWV0YWRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBzLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICEwLCAwLCAhMSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0Lm1ldGFkYXRhLmZvckVhY2goKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQubWFzayAhPT0gZSB8fCAoZSA9IHQsICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0Lm1ldGFkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdGhpcy5vcHRzLm9uQmVmb3JlTWFzayAmJiB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgZSwgdGhpcy5vcHRzKSB8fCBlKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LmNoZWNrVmFsLmNhbGwodGhpcywgdm9pZCAwLCAhMCwgITEsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUgPSB0aGlzLmlzUlRMID8gbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGwuZ2V0QnVmZmVyLmNhbGwodGhpcyksIG4gPSBsLmRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uLmNhbGwodGhpcyksIGEgPSBpLmxlbmd0aCAtIDE7IGEgPiBuICYmICFsLmlzTWFzay5jYWxsKHRoaXMsIGEpOyBhLS0pIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpLnNwbGljZShuLCBhICsgMSAtIG4pLCBjLmlzQ29tcGxldGUuY2FsbCh0aGlzLCBpKSAmJiBlID09PSAodGhpcy5pc1JUTCA/IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuc2xpY2UoKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGwuZ2V0QnVmZmVyLmNhbGwodGhpcykuam9pbihcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8ICgwLCBvLmdlbmVyYXRlTWFza1NldCkodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgJiYgdGhpcy5vcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIGUsIHRoaXMub3B0cykgfHwgZSkuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1LmNoZWNrVmFsLmNhbGwodGhpcywgdm9pZCAwLCAhMCwgITEsIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmlzUlRMID8gbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbC5nZXRCdWZmZXIuY2FsbCh0aGlzKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuZ2V0bWV0YWRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG47XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsICYmICgwLCBhLmRlZmF1bHQpKHRoaXMuZWwpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbIGUgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFuYWx5c2VNYXNrOiBvLmFuYWx5c2VNYXNrXG4gICAgICAgICAgICAgICAgfSwgay5leHRlbmREZWZhdWx0cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5kZWZhdWx0LmV4dGVuZCghMCwgay5wcm90b3R5cGUuZGVmYXVsdHMsIGUpO1xuICAgICAgICAgICAgICAgIH0sIGsuZXh0ZW5kRGVmaW5pdGlvbnMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmQoITAsIGsucHJvdG90eXBlLmRlZmluaXRpb25zLCBlKTtcbiAgICAgICAgICAgICAgICB9LCBrLmV4dGVuZEFsaWFzZXMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5leHRlbmQoITAsIGsucHJvdG90eXBlLmFsaWFzZXMsIGUpO1xuICAgICAgICAgICAgICAgIH0sIGsuZm9ybWF0ID0gZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gayh0KS5mb3JtYXQoZSwgaSk7XG4gICAgICAgICAgICAgICAgfSwgay51bm1hc2sgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrKHQpLnVubWFza2VkdmFsdWUoZSk7XG4gICAgICAgICAgICAgICAgfSwgay5pc1ZhbGlkID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gayh0KS5pc1ZhbGlkKGUpO1xuICAgICAgICAgICAgICAgIH0sIGsucmVtb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIChlID0gZy5nZXRFbGVtZW50QnlJZChlKSB8fCBnLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpLCAoZSA9IGUubm9kZU5hbWUgPyBbIGUgXSA6IGUpLmZvckVhY2goKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5wdXRtYXNrICYmIGUuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSwgay5zZXRWYWx1ZSA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IGcuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgZy5xdWVyeVNlbGVjdG9yQWxsKGUpKSwgKGUgPSBlLm5vZGVOYW1lID8gWyBlIF0gOiBlKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmlucHV0bWFzayA/IGUuaW5wdXRtYXNrLnNldFZhbHVlKHQpIDogKDAsIGEuZGVmYXVsdCkoZSkudHJpZ2dlcihcInNldHZhbHVlXCIsIFsgdCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sIGsuZGVwZW5kZW5jeUxpYiA9IGEuZGVmYXVsdCwgci5kZWZhdWx0LklucHV0bWFzayA9IGs7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBrO1xuICAgICAgICAgICAgICAgIHQuZGVmYXVsdCA9IHg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNTI5NjogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIGUuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBlICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBlO1xuICAgICAgICAgICAgICAgICAgICB9LCBuKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYSA9IGgoaSg5MzgwKSksIHIgPSBoKGkoMjM5NCkpLCBvID0gaChpKDg3NDEpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmVudW1lcmFibGUgPSBhLmVudW1lcmFibGUgfHwgITEsIGEuY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBhICYmIChhLndyaXRhYmxlID0gITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAociA9IGEua2V5LCBvID0gdm9pZCAwLCBvID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBuKGUpIHx8IG51bGwgPT09IGUpIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZVtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpLmNhbGwoZSwgdCB8fCBcImRlZmF1bHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBuKGEpKSByZXR1cm4gYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHQgPyBTdHJpbmcgOiBOdW1iZXIpKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShyLCBcInN0cmluZ1wiKSwgXCJzeW1ib2xcIiA9PT0gbihvKSA/IG8gOiBTdHJpbmcobykpLCBhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgciwgbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSwgYSA9IHAoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gcCh0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gUmVmbGVjdC5jb25zdHJ1Y3QoYSwgYXJndW1lbnRzLCByKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpID0gYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiAoXCJvYmplY3RcIiA9PT0gbih0KSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQpKSByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0KSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSh0aGlzLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBNYXAgPyBuZXcgTWFwIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBlIHx8IChpID0gZSwgLTEgPT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoaSkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpKSByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmhhcyhlKSkgcmV0dXJuIHQuZ2V0KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc2V0KGUsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdShlLCBhcmd1bWVudHMsIHAodGhpcykuY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGQobiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGMoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdSA9IGYoKSA/IFJlZmxlY3QuY29uc3RydWN0LmJpbmQoKSA6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gWyBudWxsIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBuLnB1c2guYXBwbHkobiwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyAoRnVuY3Rpb24uYmluZC5hcHBseShlLCBuKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSAmJiBkKGEsIGkucHJvdG90eXBlKSwgYTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIChmdW5jdGlvbigpIHt9KSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICEwO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLl9fcHJvdG9fXyA9IHQsIGU7XG4gICAgICAgICAgICAgICAgICAgIH0sIGQoZSwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCBwKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBhLmRlZmF1bHQuZG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG8uZGVmYXVsdCAmJiB2ICYmIHYuaGVhZCAmJiB2LmhlYWQuYXR0YWNoU2hhZG93ICYmIGEuZGVmYXVsdC5jdXN0b21FbGVtZW50cyAmJiB2b2lkIDAgPT09IGEuZGVmYXVsdC5jdXN0b21FbGVtZW50cy5nZXQoXCJpbnB1dC1tYXNrXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0ICYmIG51bGwgIT09IHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodCAmJiB0LnByb3RvdHlwZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIHQgJiYgZChlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0obywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCwgaSwgbiwgYSA9IGwobyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHRoaXMsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gKGUgPSBhLmNhbGwodGhpcykpLmdldEF0dHJpYnV0ZU5hbWVzKCksIGkgPSBlLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgbiA9IHYuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgaW4gbi50eXBlID0gXCJ0ZXh0XCIsIGkuYXBwZW5kQ2hpbGQobiksIHQpIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBzKSAmJiBuLnNldEF0dHJpYnV0ZSh0W3NdLCBlLmdldEF0dHJpYnV0ZSh0W3NdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBuZXcgci5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmRhdGFBdHRyaWJ1dGUgPSBcIlwiLCBsLm1hc2sobiksIG4uaW5wdXRtYXNrLnNoYWRvd1Jvb3QgPSBpLCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPSBvLCBpICYmIHModC5wcm90b3R5cGUsIGkpLCBuICYmIHModCwgbiksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6ICExXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgdDtcbiAgICAgICAgICAgICAgICAgICAgfShjKEhUTUxFbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgIGEuZGVmYXVsdC5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJpbnB1dC1tYXNrXCIsIG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAyODM5OiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH0oZSkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBudWxsID09IGUgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIGVbU3ltYm9sLml0ZXJhdG9yXSB8fCBlW1wiQEBpdGVyYXRvclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgciwgbywgcyA9IFtdLCBsID0gITAsIGMgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChpID0gaS5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGkpICE9PSBpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKGwgPSAobiA9IHIuY2FsbChpKSkuZG9uZSkgJiYgKHMucHVzaChuLnZhbHVlKSwgcy5sZW5ndGggIT09IHQpOyBsID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAhMCwgYSA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbCAmJiBudWxsICE9IGkucmV0dXJuICYmIChvID0gaS5yZXR1cm4oKSwgT2JqZWN0KG8pICE9PSBvKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkgcmV0dXJuIG4oZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk9iamVjdFwiID09PSBpICYmIGUuY29uc3RydWN0b3IgJiYgKGkgPSBlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiTWFwXCIgPT09IGkgfHwgXCJTZXRcIiA9PT0gaSkgcmV0dXJuIEFycmF5LmZyb20oZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gaSB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSkgcmV0dXJuIG4oZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG4oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gbmV3IEFycmF5KHQpOyBpIDwgdDsgaSsrKSBuW2ldID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5rZXlzID0gdC5rZXlDb2RlID0gdm9pZCAwLCB0LnRvS2V5ID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcltlXSB8fCAodCA/IFN0cmluZy5mcm9tQ2hhckNvZGUoZSkgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGUpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH0sIHQudG9LZXlDb2RlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYVtlXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBhID0ge1xuICAgICAgICAgICAgICAgICAgICBBbHRHcmFwaDogMTgsXG4gICAgICAgICAgICAgICAgICAgIEFycm93RG93bjogNDAsXG4gICAgICAgICAgICAgICAgICAgIEFycm93TGVmdDogMzcsXG4gICAgICAgICAgICAgICAgICAgIEFycm93UmlnaHQ6IDM5LFxuICAgICAgICAgICAgICAgICAgICBBcnJvd1VwOiAzOCxcbiAgICAgICAgICAgICAgICAgICAgQmFja3NwYWNlOiA4LFxuICAgICAgICAgICAgICAgICAgICBCQUNLU1BBQ0VfU0FGQVJJOiAxMjcsXG4gICAgICAgICAgICAgICAgICAgIENhcHNMb2NrOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlOiA0NixcbiAgICAgICAgICAgICAgICAgICAgRW5kOiAzNSxcbiAgICAgICAgICAgICAgICAgICAgRW50ZXI6IDEzLFxuICAgICAgICAgICAgICAgICAgICBFc2NhcGU6IDI3LFxuICAgICAgICAgICAgICAgICAgICBIb21lOiAzNixcbiAgICAgICAgICAgICAgICAgICAgSW5zZXJ0OiA0NSxcbiAgICAgICAgICAgICAgICAgICAgUGFnZURvd246IDM0LFxuICAgICAgICAgICAgICAgICAgICBQYWdlVXA6IDMzLFxuICAgICAgICAgICAgICAgICAgICBTcGFjZTogMzIsXG4gICAgICAgICAgICAgICAgICAgIFRhYjogOSxcbiAgICAgICAgICAgICAgICAgICAgYzogNjcsXG4gICAgICAgICAgICAgICAgICAgIHg6IDg4LFxuICAgICAgICAgICAgICAgICAgICB6OiA5MCxcbiAgICAgICAgICAgICAgICAgICAgU2hpZnQ6IDE2LFxuICAgICAgICAgICAgICAgICAgICBDb250cm9sOiAxNyxcbiAgICAgICAgICAgICAgICAgICAgQWx0OiAxOCxcbiAgICAgICAgICAgICAgICAgICAgUGF1c2U6IDE5LFxuICAgICAgICAgICAgICAgICAgICBNZXRhX0xFRlQ6IDkxLFxuICAgICAgICAgICAgICAgICAgICBNZXRhX1JJR0hUOiA5MixcbiAgICAgICAgICAgICAgICAgICAgQ29udGV4dE1lbnU6IDkzLFxuICAgICAgICAgICAgICAgICAgICBQcm9jZXNzOiAyMjksXG4gICAgICAgICAgICAgICAgICAgIFVuaWRlbnRpZmllZDogMjI5LFxuICAgICAgICAgICAgICAgICAgICBGMTogMTEyLFxuICAgICAgICAgICAgICAgICAgICBGMjogMTEzLFxuICAgICAgICAgICAgICAgICAgICBGMzogMTE0LFxuICAgICAgICAgICAgICAgICAgICBGNDogMTE1LFxuICAgICAgICAgICAgICAgICAgICBGNTogMTE2LFxuICAgICAgICAgICAgICAgICAgICBGNjogMTE3LFxuICAgICAgICAgICAgICAgICAgICBGNzogMTE4LFxuICAgICAgICAgICAgICAgICAgICBGODogMTE5LFxuICAgICAgICAgICAgICAgICAgICBGOTogMTIwLFxuICAgICAgICAgICAgICAgICAgICBGMTA6IDEyMSxcbiAgICAgICAgICAgICAgICAgICAgRjExOiAxMjIsXG4gICAgICAgICAgICAgICAgICAgIEYxMjogMTIzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0LmtleUNvZGUgPSBhO1xuICAgICAgICAgICAgICAgIHZhciByID0gT2JqZWN0LmVudHJpZXMoYSkucmVkdWNlKChmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gaSh0LCAyKSwgYSA9IG5bMF0sIHIgPSBuWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZVtyXSA9IHZvaWQgMCA9PT0gZVtyXSA/IGEgOiBlW3JdLCBlO1xuICAgICAgICAgICAgICAgIH0pLCB7fSksIG8gPSBPYmplY3QuZW50cmllcyhhKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBpKHQsIDIpLCBhID0gblswXTtcbiAgICAgICAgICAgICAgICAgICAgblsxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbYV0gPSBcIlNwYWNlXCIgPT09IGEgPyBcIiBcIiA6IGEsIGU7XG4gICAgICAgICAgICAgICAgfSksIHt9KTtcbiAgICAgICAgICAgICAgICB0LmtleXMgPSBvO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDIzOTE6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuYW5hbHlzZU1hc2sgPSBmdW5jdGlvbihlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuLCBvLCBzLCBsLCBjLCB1LCBmID0gLyg/Ols/KitdfFxce1swLTkrKl0rKD86LFswLTkrKl0qKT8oPzpcXHxbMC05KypdKik/XFx9KXxbXi4/KiteJHtbXSgpfFxcXFxdK3wuL2csIGQgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBwID0gITEsIGggPSBuZXcgYS5kZWZhdWx0LCB2ID0gW10sIG0gPSBbXSwgZyA9ICExO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB5KGUsIG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB2b2lkIDAgIT09IGEgPyBhIDogZS5tYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZS5tYXRjaGVzW2EgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IG4uaW5kZXhPZihcIltcIikgfHwgcCAmJiAvXFxcXGR8XFxcXHN8XFxcXHd8XFxcXHAvaS50ZXN0KG4pIHx8IFwiLlwiID09PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gaS5jYXNpbmcgPyBcImlcIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9eXFxcXHBcXHsuKn0kL2kudGVzdChuKSAmJiAocyArPSBcInVcIiksIGUubWF0Y2hlcy5zcGxpY2UoYSsrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogbmV3IFJlZ0V4cChuLCBzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYzogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogdm9pZCAwID09PSBvID8gXCJtYXN0ZXJcIiA6IG8uZGVmICE9PSBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcCAmJiAobiA9IG5bbi5sZW5ndGggLSAxXSksIG4uc3BsaXQoXCJcIikuZm9yRWFjaCgoZnVuY3Rpb24odCwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gZS5tYXRjaGVzW2EgLSAxXSwgZS5tYXRjaGVzLnNwbGljZShhKyssIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCB0KSA/IG5ldyBSZWdFeHAoXCJbXCIgKyAoaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IHQpICsgXCJdXCIsIGkuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHZvaWQgMCA9PT0gbyA/IFwibWFzdGVyXCIgOiBvLmRlZiAhPT0gdCAmJiAhMCAhPT0gby5zdGF0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHZvaWQgMCAhPT0gaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sID8gdCA6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogKHAgPyBcIidcIiA6IFwiXCIpICsgdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGkuZGVmaW5pdGlvbnMgJiYgaS5kZWZpbml0aW9uc1tuXSB8fCBpLnVzZVByb3RvdHlwZURlZmluaXRpb25zICYmIHIuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCAmJiAhcCA/IGUubWF0Y2hlcy5zcGxpY2UoYSsrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBsLnZhbGlkYXRvciA/IFwic3RyaW5nXCIgPT0gdHlwZW9mIGwudmFsaWRhdG9yID8gbmV3IFJlZ0V4cChsLnZhbGlkYXRvciwgaS5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gbC52YWxpZGF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBuZXcgUmVnRXhwKFwiLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljOiBsLnN0YXRpYyB8fCAhMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IGwub3B0aW9uYWwgfHwgITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZk9wdGlvbmFsaXR5OiBsLm9wdGlvbmFsIHx8ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogdm9pZCAwID09PSBvIHx8IGwub3B0aW9uYWwgPyBcIm1hc3RlclwiIDogby5kZWYgIT09IChsLmRlZmluaXRpb25TeW1ib2wgfHwgbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbC5jYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbC5kZWZpbml0aW9uU3ltYm9sIHx8IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBsLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlZDogbC5nZW5lcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6IChlLm1hdGNoZXMuc3BsaWNlKGErKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogL1thLXpdL2kudGVzdChpLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgbikgPyBuZXcgUmVnRXhwKFwiW1wiICsgKGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBuKSArIFwiXVwiLCBpLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25hbGl0eTogITEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiB2b2lkIDAgPT09IG8gPyBcIm1hc3RlclwiIDogby5kZWYgIT09IG4gJiYgITAgIT09IG8uc3RhdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogaS5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB2b2lkIDAgIT09IGkuc3RhdGljRGVmaW5pdGlvblN5bWJvbCA/IG4gOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlZjogKHAgPyBcIidcIiA6IFwiXCIpICsgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBwID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGsoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkobCA9IHZbdi5sZW5ndGggLSAxXSwgbyksIGwuaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB2LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGMubWF0Y2hlcy5sZW5ndGg7IGUrKykgYy5tYXRjaGVzW2VdLmlzR3JvdXAgJiYgKGMubWF0Y2hlc1tlXS5pc0dyb3VwID0gITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Lmxlbmd0aCA+IDAgPyAobCA9IHZbdi5sZW5ndGggLSAxXSkubWF0Y2hlcy5wdXNoKGMpIDogaC5tYXRjaGVzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHkoaCwgbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBhLmRlZmF1bHQoITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQub3Blbkdyb3VwID0gITEsIHQubWF0Y2hlcyA9IGUsIHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24geCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocyA9IHYucG9wKCkpLm9wZW5Hcm91cCA9ICExLCB2b2lkIDAgIT09IHMpIGlmICh2Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGwgPSB2W3YubGVuZ3RoIC0gMV0pLm1hdGNoZXMucHVzaChzKSwgbC5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IChjID0gdi5wb3AoKSkubWF0Y2hlc1swXS5tYXRjaGVzID8gYy5tYXRjaGVzWzBdLm1hdGNoZXMubGVuZ3RoIDogMSwgdCA9IDA7IHQgPCBjLm1hdGNoZXMubGVuZ3RoOyB0KyspIGMubWF0Y2hlc1t0XS5pc0dyb3VwID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLm1hdGNoZXNbdF0uYWx0ZXJuYXRvckdyb3VwID0gITEsIG51bGwgPT09IGkua2VlcFN0YXRpYyAmJiBlIDwgKGMubWF0Y2hlc1t0XS5tYXRjaGVzID8gYy5tYXRjaGVzW3RdLm1hdGNoZXMubGVuZ3RoIDogMSkgJiYgKGkua2VlcFN0YXRpYyA9ICEwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBjLm1hdGNoZXNbdF0ubWF0Y2hlcyA/IGMubWF0Y2hlc1t0XS5tYXRjaGVzLmxlbmd0aCA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYubGVuZ3RoID4gMCA/IChsID0gdlt2Lmxlbmd0aCAtIDFdKS5tYXRjaGVzLnB1c2goYykgOiBoLm1hdGNoZXMucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaC5tYXRjaGVzLnB1c2gocyk7IGVsc2UgaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuaXNRdWFudGlmaWVyICYmICh0ID0gYihbIGUucG9wKCksIHQgXSkpLCB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHQgJiYgKGkub3B0aW9uYWxtYXJrZXJbMF0gPSB2b2lkIDAsIGkub3B0aW9uYWxtYXJrZXJbMV0gPSB2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtuID0gdCA/IGQuZXhlYyhlKSA6IGYuZXhlYyhlKTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobyA9IG5bMF0sIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG8uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gXCJ7MCwxfVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBcIntcIiArIG8gKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ8XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09PSB2Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBiKGgubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3Lm9wZW5Hcm91cCA9ICEwLCB2LnB1c2godyksIGgubWF0Y2hlcyA9IFtdLCBnID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcXGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9IFwiWzAtOV1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJcXFxccFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvICs9IGQuZXhlYyhlKVswXSwgbyArPSBkLmV4ZWMoZSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHApIGsoKTsgZWxzZSBzd2l0Y2ggKG8uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJeXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCB8fCBrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLmVzY2FwZUNoYXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9ICEwLCB0ICYmIGsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGkub3B0aW9uYWxtYXJrZXJbMV06XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5ncm91cG1hcmtlclsxXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLm9wdGlvbmFsbWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYucHVzaChuZXcgYS5kZWZhdWx0KCExLCAhMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5ncm91cG1hcmtlclswXTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnB1c2gobmV3IGEuZGVmYXVsdCghMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgaS5xdWFudGlmaWVybWFya2VyWzBdOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBTID0gbmV3IGEuZGVmYXVsdCghMSwgITEsICEwKSwgTSA9IChvID0gby5yZXBsYWNlKC9be30/XS9nLCBcIlwiKSkuc3BsaXQoXCJ8XCIpLCBfID0gTVswXS5zcGxpdChcIixcIiksIE8gPSBpc05hTihfWzBdKSA/IF9bMF0gOiBwYXJzZUludChfWzBdKSwgRSA9IDEgPT09IF8ubGVuZ3RoID8gTyA6IGlzTmFOKF9bMV0pID8gX1sxXSA6IHBhcnNlSW50KF9bMV0pLCBUID0gaXNOYU4oTVsxXSkgPyBNWzFdIDogcGFyc2VJbnQoTVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqXCIgIT09IE8gJiYgXCIrXCIgIT09IE8gfHwgKE8gPSBcIipcIiA9PT0gRSA/IDAgOiAxKSwgUy5xdWFudGlmaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaml0OiBUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IHYubGVuZ3RoID4gMCA/IHZbdi5sZW5ndGggLSAxXS5tYXRjaGVzIDogaC5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gai5wb3AoKSkuaXNHcm91cCB8fCAobiA9IGIoWyBuIF0pKSwgai5wdXNoKG4pLCBqLnB1c2goUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBpLmFsdGVybmF0b3JtYXJrZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IChsID0gdlt2Lmxlbmd0aCAtIDFdKS5tYXRjaGVzW2wubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGwub3Blbkdyb3VwICYmICh2b2lkIDAgPT09IEEubWF0Y2hlcyB8fCAhMSA9PT0gQS5pc0dyb3VwICYmICExID09PSBBLmlzQWx0ZXJuYXRvcikgPyB2LnBvcCgpIDogUChsLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB1ID0gUChoLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1LmlzQWx0ZXJuYXRvcikgdi5wdXNoKHUpOyBlbHNlIGlmICh1LmFsdGVybmF0b3JHcm91cCA/IChjID0gdi5wb3AoKSwgdS5hbHRlcm5hdG9yR3JvdXAgPSAhMSkgOiBjID0gbmV3IGEuZGVmYXVsdCghMSwgITEsICExLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubWF0Y2hlcy5wdXNoKHUpLCB2LnB1c2goYyksIHUub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHUub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBEID0gbmV3IGEuZGVmYXVsdCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEQuYWx0ZXJuYXRvckdyb3VwID0gITAsIHYucHVzaChEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZyAmJiB4KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO3YubGVuZ3RoID4gMDsgKSBzID0gdi5wb3AoKSwgaC5tYXRjaGVzLnB1c2gocyk7XG4gICAgICAgICAgICAgICAgICAgIGgubWF0Y2hlcy5sZW5ndGggPiAwICYmICghZnVuY3Rpb24gZShuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuICYmIG4ubWF0Y2hlcyAmJiBuLm1hdGNoZXMuZm9yRWFjaCgoZnVuY3Rpb24oYSwgcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gbi5tYXRjaGVzW3IgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodm9pZCAwID09PSBvIHx8IHZvaWQgMCA9PT0gby5tYXRjaGVzIHx8ICExID09PSBvLmlzUXVhbnRpZmllcikgJiYgYSAmJiBhLmlzR3JvdXAgJiYgKGEuaXNHcm91cCA9ICExLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IHx8ICh5KGEsIGkuZ3JvdXBtYXJrZXJbMF0sIDApLCAhMCAhPT0gYS5vcGVuR3JvdXAgJiYgeShhLCBpLmdyb3VwbWFya2VyWzFdKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KGgpLCBtLnB1c2goaCkpO1xuICAgICAgICAgICAgICAgICAgICAoaS5udW1lcmljSW5wdXQgfHwgaS5pc1JUTCkgJiYgZnVuY3Rpb24gZSh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHQubWF0Y2hlcyA9IHQubWF0Y2hlcy5yZXZlcnNlKCksIHQubWF0Y2hlcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0Lm1hdGNoZXMsIG4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUludChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5tYXRjaGVzW25dLmlzUXVhbnRpZmllciAmJiB0Lm1hdGNoZXNbYSArIDFdICYmIHQubWF0Y2hlc1thICsgMV0uaXNHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IHQubWF0Y2hlc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5tYXRjaGVzLnNwbGljZShuLCAxKSwgdC5tYXRjaGVzLnNwbGljZShhICsgMSwgMCwgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gdC5tYXRjaGVzW25dLm1hdGNoZXMgPyB0Lm1hdGNoZXNbbl0gPSBlKHQubWF0Y2hlc1tuXSkgOiB0Lm1hdGNoZXNbbl0gPSAoKG8gPSB0Lm1hdGNoZXNbbl0pID09PSBpLm9wdGlvbmFsbWFya2VyWzBdID8gbyA9IGkub3B0aW9uYWxtYXJrZXJbMV0gOiBvID09PSBpLm9wdGlvbmFsbWFya2VyWzFdID8gbyA9IGkub3B0aW9uYWxtYXJrZXJbMF0gOiBvID09PSBpLmdyb3VwbWFya2VyWzBdID8gbyA9IGkuZ3JvdXBtYXJrZXJbMV0gOiBvID09PSBpLmdyb3VwbWFya2VyWzFdICYmIChvID0gaS5ncm91cG1hcmtlclswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICAgICAgfShtWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSwgdC5nZW5lcmF0ZU1hc2tTZXQgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gdC5yZXBlYXQsIG4gPSB0Lmdyb3VwbWFya2VyLCBhID0gdC5xdWFudGlmaWVybWFya2VyLCByID0gdC5rZWVwU3RhdGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwIHx8IFwiKlwiID09PSBpIHx8IFwiK1wiID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBcIipcIiA9PT0gaSA/IDAgOiBcIitcIiA9PT0gaSA/IDEgOiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBuWzBdICsgZSArIG5bMV0gKyBhWzBdICsgbCArIFwiLFwiICsgaSArIGFbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGUubWF0Y2gobmV3IFJlZ0V4cChcIiguKVxcXFxbKFteXFxcXF1dKilcXFxcXVwiLCBcImdcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgJiYgYy5mb3JFYWNoKChmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUpIHx8IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IG51bGwgPT0gZSA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgZVtTeW1ib2wuaXRlcmF0b3JdIHx8IGVbXCJAQGl0ZXJhdG9yXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsICE9IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGEsIHIsIG8sIHMgPSBbXSwgbCA9ICEwLCBjID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IChpID0gaS5jYWxsKGUpKS5uZXh0LCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChpKSAhPT0gaSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKGwgPSAobiA9IHIuY2FsbChpKSkuZG9uZSkgJiYgKHMucHVzaChuLnZhbHVlKSwgcy5sZW5ndGggIT09IHQpOyBsID0gITApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9ICEwLCBhID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsICYmIG51bGwgIT0gaS5yZXR1cm4gJiYgKG8gPSBpLnJldHVybigpLCBPYmplY3QobykgIT09IG8pKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSB0aHJvdyBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oZSwgdCkgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlKSByZXR1cm4gcyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPYmplY3RcIiA9PT0gaSAmJiBlLmNvbnN0cnVjdG9yICYmIChpID0gZS5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJNYXBcIiA9PT0gaSB8fCBcIlNldFwiID09PSBpKSByZXR1cm4gQXJyYXkuZnJvbShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBcmd1bWVudHNcIiA9PT0gaSB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChpKSkgcmV0dXJuIHMoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUsIHQpIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odC5zcGxpdChcIltcIiksIDIpLCBhID0gblswXSwgciA9IG5bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSByLnJlcGxhY2UoXCJdXCIsIFwiXCIpLCBlID0gZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoKDAsIG8uZGVmYXVsdCkoYSksIFwiXFxcXFtcIikuY29uY2F0KCgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgby5kZWZhdWx0KShyKSwgXCJcXFxcXVwiKSksIGEuY2hhckF0KDApID09PSByLmNoYXJBdCgwKSA/IFwiKFwiLmNvbmNhdChhLCBcInxcIikuY29uY2F0KGEpLmNvbmNhdChyLCBcIilcIikgOiBcIlwiLmNvbmNhdChhLCBcIltcIikuY29uY2F0KHIsIFwiXVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbChlLCBpLCBvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcywgbCwgYyA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIT09IGUgJiYgXCJcIiAhPT0gZSB8fCAoKGMgPSBudWxsICE9PSBvLnJlZ2V4KSA/IGUgPSAoZSA9IG8ucmVnZXgpLnJlcGxhY2UoL14oXFxeKSguKikoXFwkKSQvLCBcIiQyXCIpIDogKGMgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gXCIuKlwiKSksIDEgPT09IGUubGVuZ3RoICYmICExID09PSBvLmdyZWVkeSAmJiAwICE9PSBvLnJlcGVhdCAmJiAoby5wbGFjZWhvbGRlciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBhKGUsIG8pLCBsID0gYyA/IFwicmVnZXhfXCIgKyBvLnJlZ2V4IDogby5udW1lcmljSW5wdXQgPyBlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsICE9PSBvLmtlZXBTdGF0aWMgJiYgKGwgPSBcImtzX1wiICsgby5rZWVwU3RhdGljICsgbCksIHZvaWQgMCA9PT0gci5kZWZhdWx0LnByb3RvdHlwZS5tYXNrc0NhY2hlW2xdIHx8ICEwID09PSB0ID8gKHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW46IHIuZGVmYXVsdC5wcm90b3R5cGUuYW5hbHlzZU1hc2soZSwgYywgbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9idWZmZXI6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0czoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tMZW5ndGg6IHZvaWQgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXRPZmZzZXQ6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAhMCAhPT0gdCAmJiAoci5kZWZhdWx0LnByb3RvdHlwZS5tYXNrc0NhY2hlW2xdID0gcywgcyA9IG4uZGVmYXVsdC5leHRlbmQoITAsIHt9LCByLmRlZmF1bHQucHJvdG90eXBlLm1hc2tzQ2FjaGVbbF0pKSkgOiBzID0gbi5kZWZhdWx0LmV4dGVuZCghMCwge30sIHIuZGVmYXVsdC5wcm90b3R5cGUubWFza3NDYWNoZVtsXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubWFzayAmJiAoZS5tYXNrID0gZS5tYXNrKGUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZS5tYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubWFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gZS5rZWVwU3RhdGljICYmIChlLmtlZXBTdGF0aWMgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBlLmdyb3VwbWFya2VyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5pc1JUTCA/IGUubWFzay5yZXZlcnNlKCkgOiBlLm1hc2spLmZvckVhY2goKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5sZW5ndGggPiAxICYmIChjICs9IGUuYWx0ZXJuYXRvcm1hcmtlciksIHZvaWQgMCAhPT0gdC5tYXNrICYmIFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdC5tYXNrID8gYyArPSB0Lm1hc2sgOiBjICs9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBsKGMgKz0gZS5ncm91cG1hcmtlclsxXSwgZS5tYXNrLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGUubWFzayA9IGUubWFzay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpID0gZS5tYXNrICYmIHZvaWQgMCAhPT0gZS5tYXNrLm1hc2sgJiYgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlLm1hc2subWFzayA/IGwoZS5tYXNrLm1hc2ssIGUubWFzaywgZSkgOiBsKGUubWFzaywgZS5tYXNrLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gZS5rZWVwU3RhdGljICYmIChlLmtlZXBTdGF0aWMgPSAhMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBsKGkoNDk2MykpLCBhID0gbChpKDk2OTUpKSwgciA9IGwoaSgyMzk0KSksIG8gPSBsKGkoNzE4NCkpO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAobnVsbCA9PSB0IHx8IHQgPiBlLmxlbmd0aCkgJiYgKHQgPSBlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gbmV3IEFycmF5KHQpOyBpIDwgdDsgaSsrKSBuW2ldID0gZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxNTc6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQubWFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMsIHQgPSB0aGlzLm9wdHMsIGkgPSB0aGlzLmVsLCB1ID0gdGhpcy5kZXBlbmRlbmN5TGliO1xuICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub2ZmKGkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dGFyZWFcIiAhPT0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgJiYgaS5pZ25vcmFibGVzLnB1c2gobi5rZXlzLkVudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLCBsID0gXCJpbnB1dFwiID09PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiBpLnN1cHBvcnRzSW5wdXRUeXBlLmluY2x1ZGVzKHMpIHx8IHQuaXNDb250ZW50RWRpdGFibGUgfHwgXCJ0ZXh0YXJlYVwiID09PSB0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbCkgaWYgKFwiaW5wdXRcIiA9PT0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgcyksIGwgPSBcInRleHRcIiA9PT0gYy50eXBlLCBjID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBsID0gXCJwYXJ0aWFsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgIT09IGwgPyBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRtYXNrID8gdGhpcy5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrID8gdGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpIDogLTEgIT09IGEuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlKSB8fCAhMCAhPT0gaS5udWxsYWJsZSA/ICh0aGlzLmlucHV0bWFzay5zaGFkb3dSb290IHx8IHRoaXMub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyAmJiBpLmNsZWFyTWFza09uTG9zdEZvY3VzID8gKGUuaXNSVEwgPyByLmNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoZSwgYS5nZXRCdWZmZXIuY2FsbChlKS5zbGljZSgpKS5yZXZlcnNlKCkgOiByLmNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoZSwgYS5nZXRCdWZmZXIuY2FsbChlKS5zbGljZSgpKSkuam9pbihcIlwiKSA6IG4uY2FsbCh0aGlzKSA6IFwiXCIgOiBuLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbGwodGhpcywgZSksIHRoaXMuaW5wdXRtYXNrICYmICgwLCByLmFwcGx5SW5wdXRWYWx1ZSkodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdC5pbnB1dG1hc2suX192YWx1ZUdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IGkubm9WYWx1ZVBhdGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YodCksIFwidmFsdWVcIikgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZiAmJiBmLmdldCAmJiBmLnNldCA/IChuID0gZi5nZXQsIHMgPSBmLnNldCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSA6IFwiaW5wdXRcIiAhPT0gdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpICYmIChuID0gdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHQuX19sb29rdXBTZXR0ZXJfXyhcInZhbHVlXCIpLCB0Ll9fZGVmaW5lR2V0dGVyX18oXCJ2YWx1ZVwiLCBsKSwgdC5fX2RlZmluZVNldHRlcl9fKFwidmFsdWVcIiwgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5pbnB1dG1hc2suX192YWx1ZUdldCA9IG4sIHQuaW5wdXRtYXNrLl9fdmFsdWVTZXQgPSBzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuaW5wdXRtYXNrLl92YWx1ZUdldCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmlzUlRMICYmICEwICE9PSB0ID8gbi5jYWxsKHRoaXMuZWwpLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbi5jYWxsKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0LmlucHV0bWFzay5fdmFsdWVTZXQgPSBmdW5jdGlvbih0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbGwodGhpcy5lbCwgbnVsbCA9PSB0ID8gXCJcIiA6ICEwICE9PSBpICYmIGUuaXNSVEwgPyB0LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZvaWQgMCA9PT0gbiAmJiAobiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHMgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHUudmFsSG9va3MgJiYgKHZvaWQgMCA9PT0gdS52YWxIb29rc1t0XSB8fCAhMCAhPT0gdS52YWxIb29rc1t0XS5pbnB1dG1hc2twYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHUudmFsSG9va3NbdF0gJiYgdS52YWxIb29rc1t0XS5nZXQgPyB1LnZhbEhvb2tzW3RdLmdldCA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbyA9IHUudmFsSG9va3NbdF0gJiYgdS52YWxIb29rc1t0XS5zZXQgPyB1LnZhbEhvb2tzW3RdLnNldCA6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudmFsdWUgPSB0LCBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdS52YWxIb29rc1t0XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5pbnB1dG1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodC5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrKSByZXR1cm4gdC5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gbih0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGEuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChlLCB2b2lkIDAsIHZvaWQgMCwgdC5pbnB1dG1hc2subWFza3NldC52YWxpZFBvc2l0aW9ucykgfHwgITAgIT09IGkubnVsbGFibGUgPyByIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuKHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbyhlLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmlucHV0bWFzayAmJiAoMCwgci5hcHBseUlucHV0VmFsdWUpKGUsIHQpLCBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2twYXRjaDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KHQudHlwZSksIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihlLCBcIm1vdXNlZW50ZXJcIiwgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywgdCA9IGUuaW5wdXRtYXNrLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCAhPSAoZS5pbnB1dG1hc2suaXNSVEwgPyBhLmdldEJ1ZmZlci5jYWxsKGUuaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKSA6IGEuZ2V0QnVmZmVyLmNhbGwoZS5pbnB1dG1hc2spKS5qb2luKFwiXCIpICYmICgwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmFwcGx5SW5wdXRWYWx1ZSkoZSwgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0odCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0odCkgOiB0LmlucHV0bWFzayA9IHZvaWQgMCwgbDtcbiAgICAgICAgICAgICAgICAgICAgfShpLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSBmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsUGxhY2Vob2xkZXIgPSBpLnBsYWNlaG9sZGVyLCBlLm1heExlbmd0aCA9IHZvaWQgMCAhPT0gaSA/IGkubWF4TGVuZ3RoIDogdm9pZCAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBlLm1heExlbmd0aCAmJiAoZS5tYXhMZW5ndGggPSB2b2lkIDApLCBcImlucHV0TW9kZVwiIGluIGkgJiYgbnVsbCA9PT0gaS5nZXRBdHRyaWJ1dGUoXCJpbnB1dG1vZGVcIikgJiYgKGkuaW5wdXRNb2RlID0gdC5pbnB1dG1vZGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgaS5zZXRBdHRyaWJ1dGUoXCJpbnB1dG1vZGVcIiwgdC5pbnB1dG1vZGUpKSwgITAgPT09IGYgJiYgKHQuc2hvd01hc2tPbkZvY3VzID0gdC5zaG93TWFza09uRm9jdXMgJiYgLTEgPT09IFsgXCJjYy1udW1iZXJcIiwgXCJjYy1leHBcIiBdLmluZGV4T2YoaS5hdXRvY29tcGxldGUpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuaXBob25lICYmICh0Lmluc2VydE1vZGVWaXN1YWwgPSAhMSwgaS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCBcIm9mZlwiKSksIG8uRXZlbnRSdWxlci5vbihpLCBcInN1Ym1pdFwiLCBjLkV2ZW50SGFuZGxlcnMuc3VibWl0RXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcInJlc2V0XCIsIGMuRXZlbnRIYW5kbGVycy5yZXNldEV2ZW50KSwgby5FdmVudFJ1bGVyLm9uKGksIFwiYmx1clwiLCBjLkV2ZW50SGFuZGxlcnMuYmx1ckV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJmb2N1c1wiLCBjLkV2ZW50SGFuZGxlcnMuZm9jdXNFdmVudCksIG8uRXZlbnRSdWxlci5vbihpLCBcImludmFsaWRcIiwgYy5FdmVudEhhbmRsZXJzLmludmFsaWRFdmVudCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgby5FdmVudFJ1bGVyLm9uKGksIFwiY2xpY2tcIiwgYy5FdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQpLCBvLkV2ZW50UnVsZXIub24oaSwgXCJtb3VzZWxlYXZlXCIsIGMuRXZlbnRIYW5kbGVycy5tb3VzZWxlYXZlRXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcIm1vdXNlZW50ZXJcIiwgYy5FdmVudEhhbmRsZXJzLm1vdXNlZW50ZXJFdmVudCksIG8uRXZlbnRSdWxlci5vbihpLCBcInBhc3RlXCIsIGMuRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJjdXRcIiwgYy5FdmVudEhhbmRsZXJzLmN1dEV2ZW50KSwgby5FdmVudFJ1bGVyLm9uKGksIFwiY29tcGxldGVcIiwgdC5vbmNvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvLkV2ZW50UnVsZXIub24oaSwgXCJpbmNvbXBsZXRlXCIsIHQub25pbmNvbXBsZXRlKSwgby5FdmVudFJ1bGVyLm9uKGksIFwiY2xlYXJlZFwiLCB0Lm9uY2xlYXJlZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IHQuaW5wdXRFdmVudE9ubHkgJiYgby5FdmVudFJ1bGVyLm9uKGksIFwia2V5ZG93blwiLCBjLkV2ZW50SGFuZGxlcnMua2V5RXZlbnQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChzLm1vYmlsZSB8fCB0LmlucHV0RXZlbnRPbmx5KSAmJiBpLnJlbW92ZUF0dHJpYnV0ZShcIm1heExlbmd0aFwiKSwgby5FdmVudFJ1bGVyLm9uKGksIFwiaW5wdXRcIiwgYy5FdmVudEhhbmRsZXJzLmlucHV0RmFsbEJhY2tFdmVudCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uRXZlbnRSdWxlci5vbihpLCBcInNldHZhbHVlXCIsIGMuRXZlbnRIYW5kbGVycy5zZXRWYWx1ZUV2ZW50KSwgYS5nZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGUpLmpvaW4oXCJcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgZS51bmRvVmFsdWUgPSBlLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IChpLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGkub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBpLmlucHV0bWFzay5fdmFsdWVHZXQoITApIHx8ICExID09PSB0LmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IGQgPT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgci5hcHBseUlucHV0VmFsdWUpKGksIGkuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gYS5nZXRCdWZmZXIuY2FsbChlKS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICExID09PSBsLmlzQ29tcGxldGUuY2FsbChlLCBwKSAmJiB0LmNsZWFySW5jb21wbGV0ZSAmJiBhLnJlc2V0TWFza1NldC5jYWxsKGUpLCB0LmNsZWFyTWFza09uTG9zdEZvY3VzICYmIGQgIT09IGkgJiYgKC0xID09PSBhLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZSkgPyBwID0gW10gOiByLmNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoZSwgcCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoITEgPT09IHQuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgfHwgdC5zaG93TWFza09uRm9jdXMgJiYgZCA9PT0gaSB8fCBcIlwiICE9PSBpLmlucHV0bWFzay5fdmFsdWVHZXQoITApKSAmJiAoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci53cml0ZUJ1ZmZlcikoaSwgcCksIGQgPT09IGkgJiYgYS5jYXJldC5jYWxsKGUsIGksIGEuc2Vla05leHQuY2FsbChlLCBhLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDI4MzkpLCBhID0gaSg4NzExKSwgciA9IGkoNzc2MCksIG8gPSBpKDk3MTYpLCBzID0gaSg5ODQ1KSwgbCA9IGkoNzIxNSksIGMgPSBpKDYwMzApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDk2OTU6IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGVmYXVsdCA9IGZ1bmN0aW9uKGUsIHQsIGksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gW10sIHRoaXMub3Blbkdyb3VwID0gZSB8fCAhMSwgdGhpcy5hbHRlcm5hdG9yR3JvdXAgPSAhMSwgdGhpcy5pc0dyb3VwID0gZSB8fCAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcHRpb25hbCA9IHQgfHwgITEsIHRoaXMuaXNRdWFudGlmaWVyID0gaSB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBuIHx8ICExLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWFudGlmaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMTk0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXMgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJpbmNsdWRlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSB0aGlzKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInRoaXNcIiBpcyBudWxsIG9yIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IE9iamVjdCh0aGlzKSwgbiA9IGkubGVuZ3RoID4+PiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT09IG4pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSAwIHwgdCwgciA9IE1hdGgubWF4KGEgPj0gMCA/IGEgOiBuIC0gTWF0aC5hYnMoYSksIDApOyByIDwgbjsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlbcl0gPT09IGUpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MzAyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUucmVkdWNlKSwgdCA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlKSwgaSA9IEZ1bmN0aW9uLmJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUuY29uY2F0KSwgbiA9IE9iamVjdC5rZXlzO1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzIHx8IChPYmplY3QuZW50cmllcyA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUobihhKSwgKGZ1bmN0aW9uKGUsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpKGUsIFwic3RyaW5nXCIgPT0gdHlwZW9mIG4gJiYgdChhLCBuKSA/IFsgWyBuLCBhW25dIF0gXSA6IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfSksIFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3MTQ5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBlLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgZSAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZSh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgKE9iamVjdC5nZXRQcm90b3R5cGVPZiA9IFwib2JqZWN0XCIgPT09IGUoXCJ0ZXN0XCIuX19wcm90b19fKSA/IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuX19wcm90b19fO1xuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA0MDEzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzIHx8IChTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiAhPSB0eXBlb2YgdCAmJiAodCA9IDApLCAhKHQgKyBlLmxlbmd0aCA+IHRoaXMubGVuZ3RoKSAmJiAtMSAhPT0gdGhpcy5pbmRleE9mKGUsIHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDg3MTE6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuY2FyZXQgPSBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByLCBvID0gdGhpcywgcyA9IHRoaXMub3B0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkgcmV0dXJuIFwic2VsZWN0aW9uU3RhcnRcIiBpbiBlICYmIFwic2VsZWN0aW9uRW5kXCIgaW4gZSA/ICh0ID0gZS5zZWxlY3Rpb25TdGFydCwgXG4gICAgICAgICAgICAgICAgICAgIGkgPSBlLnNlbGVjdGlvbkVuZCkgOiB3aW5kb3cuZ2V0U2VsZWN0aW9uID8gKHIgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSkuY29tbW9uQW5jZXN0b3JDb250YWluZXIucGFyZW50Tm9kZSAhPT0gZSAmJiByLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICE9PSBlIHx8ICh0ID0gci5zdGFydE9mZnNldCwgXG4gICAgICAgICAgICAgICAgICAgIGkgPSByLmVuZE9mZnNldCkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChpID0gKHQgPSAwIC0gKHIgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKSkuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC1lLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpKSArIHIudGV4dC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG4gPyB0IDogYy5jYWxsKG8sIHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuID8gaSA6IGMuY2FsbChvLCBpKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSAmJiAoaSA9IG8uaXNSVEwgPyB0WzBdIDogdFsxXSwgdCA9IG8uaXNSVEwgPyB0WzFdIDogdFswXSksIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHQuYmVnaW4gJiYgKGkgPSBvLmlzUlRMID8gdC5iZWdpbiA6IHQuZW5kLCB0ID0gby5pc1JUTCA/IHQuZW5kIDogdC5iZWdpbiksIFxuICAgICAgICAgICAgICAgICAgICBcIm51bWJlclwiID09IHR5cGVvZiB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gbiA/IHQgOiBjLmNhbGwobywgdCksIGkgPSBcIm51bWJlclwiID09IHR5cGVvZiAoaSA9IG4gPyBpIDogYy5jYWxsKG8sIGkpKSA/IGkgOiB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBwYXJzZUludCgoKGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUgPyAoZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSA6IGUuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2Nyb2xsTGVmdCA9IGwgPiBlLnNjcm9sbFdpZHRoID8gbCA6IDAsIGUuaW5wdXRtYXNrLmNhcmV0UG9zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogaVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcy5pbnNlcnRNb2RlVmlzdWFsICYmICExID09PSBzLmluc2VydE1vZGUgJiYgdCA9PT0gaSAmJiAoYSB8fCBpKyspLCBlID09PSAoZS5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBlLm93bmVyRG9jdW1lbnQpLmFjdGl2ZUVsZW1lbnQpIGlmIChcInNldFNlbGVjdGlvblJhbmdlXCIgaW4gZSkgZS5zZXRTZWxlY3Rpb25SYW5nZSh0LCBpKTsgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSwgdm9pZCAwID09PSBlLmZpcnN0Q2hpbGQgfHwgbnVsbCA9PT0gZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuYXBwZW5kQ2hpbGQodSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0U3RhcnQoZS5maXJzdENoaWxkLCB0IDwgZS5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gdCA6IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0RW5kKGUuZmlyc3RDaGlsZCwgaSA8IGUuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCA/IGkgOiBlLmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNvbGxhcHNlKCEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLnJlbW92ZUFsbFJhbmdlcygpLCBmLmFkZFJhbmdlKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGUuY3JlYXRlVGV4dFJhbmdlICYmICgociA9IGUuY3JlYXRlVGV4dFJhbmdlKCkpLmNvbGxhcHNlKCEwKSwgci5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsIGkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHIubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIHQpLCByLnNlbGVjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHQuZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0LCBpLCByID0gdGhpcywgcyA9IHIubWFza3NldCwgbCA9IHIuZGVwZW5kZW5jeUxpYiwgYyA9IG4uZ2V0TWFza1RlbXBsYXRlLmNhbGwociwgITAsIG8uY2FsbChyKSwgITAsICEwKSwgdSA9IGMubGVuZ3RoLCBmID0gby5jYWxsKHIpLCBkID0ge30sIHAgPSBzLnZhbGlkUG9zaXRpb25zW2ZdLCBoID0gdm9pZCAwICE9PSBwID8gcC5sb2NhdG9yLnNsaWNlKCkgOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodCA9IGYgKyAxOyB0IDwgYy5sZW5ndGg7IHQrKykgaCA9IChpID0gbi5nZXRUZXN0VGVtcGxhdGUuY2FsbChyLCB0LCBoLCB0IC0gMSkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgIGRbdF0gPSBsLmV4dGVuZCghMCwge30sIGkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IHAgJiYgdm9pZCAwICE9PSBwLmFsdGVybmF0aW9uID8gcC5sb2NhdG9yW3AuYWx0ZXJuYXRpb25dIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHQgPSB1IC0gMTsgdCA+IGYgJiYgKCgoaSA9IGRbdF0pLm1hdGNoLm9wdGlvbmFsaXR5IHx8IGkubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIGkubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgdiAmJiAodiAhPT0gZFt0XS5sb2NhdG9yW3AuYWx0ZXJuYXRpb25dICYmIDEgIT0gaS5tYXRjaC5zdGF0aWMgfHwgITAgPT09IGkubWF0Y2guc3RhdGljICYmIGkubG9jYXRvcltwLmFsdGVybmF0aW9uXSAmJiBhLmNoZWNrQWx0ZXJuYXRpb25NYXRjaC5jYWxsKHIsIGkubG9jYXRvcltwLmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgdi50b1N0cmluZygpLnNwbGl0KFwiLFwiKSkgJiYgXCJcIiAhPT0gbi5nZXRUZXN0cy5jYWxsKHIsIHQpWzBdLmRlZikpICYmIGNbdF0gPT09IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChyLCB0LCBpLm1hdGNoKSk7IHQtLSkgdS0tO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGw6IHUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWY6IGRbdV0gPyBkW3VdLm1hdGNoIDogdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgIH0gOiB1O1xuICAgICAgICAgICAgICAgIH0sIHQuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLCBjID0gYS5tYXNrc2V0LCB1ID0gYS5vcHRzO1xuICAgICAgICAgICAgICAgICAgICB0ICYmIChhLmlzUlRMID8gZS5lbmQgPSBlLmJlZ2luIDogZS5iZWdpbiA9IGUuZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuYmVnaW4gPT09IGUuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGkgPSBpIHx8IHUucG9zaXRpb25DYXJldE9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2VsZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogci5jYWxsKGEpLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlnbm9yZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZW5kID0gZS5iZWdpbiA9IGwuY2FsbChhLCBvLmNhbGwoYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyYWRpeEZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEuY2xpY2tlZCA+IDEgJiYgMCA9PSBjLnZhbGlkUG9zaXRpb25zLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IHUucmFkaXhQb2ludCAmJiAwICE9PSB1LmRpZ2l0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdFtlXSB8fCB0W2VdLmlucHV0ID09PSBuLmdldFBsYWNlaG9sZGVyLmNhbGwoYSwgZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA8IGwuY2FsbChhLCAtMSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHIuY2FsbChhKS5pbmRleE9mKHUucmFkaXhQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwLCBzID0gdC5sZW5ndGg7IG8gPCBzOyBvKyspIGlmICh0W29dICYmIGkgPCBvICYmIHRbb10uaW5wdXQgIT09IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChhLCBvKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KGUuYmVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gci5jYWxsKGEpLmpvaW4oXCJcIikuaW5kZXhPZih1LnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVuZCA9IGUuYmVnaW4gPSB1Lm51bWVyaWNJbnB1dCA/IGwuY2FsbChhLCBmKSA6IGY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkID0gZS5iZWdpbiwgcCA9IG8uY2FsbChhLCBkLCAhMCksIGggPSBsLmNhbGwoYSwgLTEgIT09IHAgfHwgcy5jYWxsKGEsIDApID8gcCA6IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCA8PSBoKSBlLmVuZCA9IGUuYmVnaW4gPSBzLmNhbGwoYSwgZCwgITEsICEwKSA/IGQgOiBsLmNhbGwoYSwgZCk7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IGMudmFsaWRQb3NpdGlvbnNbcF0sIG0gPSBuLmdldFRlc3RUZW1wbGF0ZS5jYWxsKGEsIGgsIHYgPyB2Lm1hdGNoLmxvY2F0b3IgOiB2b2lkIDAsIHYpLCBnID0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKGEsIGgsIG0ubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gZyAmJiByLmNhbGwoYSlbaF0gIT09IGcgJiYgITAgIT09IG0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmICEwICE9PSBtLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFzLmNhbGwoYSwgaCwgdS5rZWVwU3RhdGljLCAhMCkgJiYgbS5tYXRjaC5kZWYgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gbC5jYWxsKGEsIGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQgPj0geSB8fCBkID09PSBoKSAmJiAoaCA9IHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuZW5kID0gZS5iZWdpbiA9IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB0LmdldEJ1ZmZlciA9IHIsIHQuZ2V0QnVmZmVyVGVtcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZS5fYnVmZmVyICYmIChlLl9idWZmZXIgPSBuLmdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsICExLCAxKSwgdm9pZCAwID09PSBlLmJ1ZmZlciAmJiAoZS5idWZmZXIgPSBlLl9idWZmZXIuc2xpY2UoKSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5fYnVmZmVyO1xuICAgICAgICAgICAgICAgIH0sIHQuZ2V0TGFzdFZhbGlkUG9zaXRpb24gPSBvLCB0LmlzTWFzayA9IHMsIHQucmVzZXRNYXNrU2V0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgdC5idWZmZXIgPSB2b2lkIDAsICEwICE9PSBlICYmICh0LnZhbGlkUG9zaXRpb25zID0gW10sIHQucCA9IDApO1xuICAgICAgICAgICAgICAgIH0sIHQuc2Vla05leHQgPSBsLCB0LnNlZWtQcmV2aW91cyA9IGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSB0aGlzLCBhID0gZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlIDw9IDApIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDthID4gMCAmJiAoITAgPT09IHQgJiYgKCEwICE9PSBuLmdldFRlc3QuY2FsbChpLCBhKS5tYXRjaC5uZXdCbG9ja01hcmtlciB8fCAhcy5jYWxsKGksIGEsIHZvaWQgMCwgITApKSB8fCAhMCAhPT0gdCAmJiAhcy5jYWxsKGksIGEsIHZvaWQgMCwgITApKTsgKSBhLS07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgICAgIH0sIHQudHJhbnNsYXRlUG9zaXRpb24gPSBjO1xuICAgICAgICAgICAgICAgIHZhciBuID0gaSg0NzEzKSwgYSA9IGkoNzIxNSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywgaSA9IHQubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gaS5idWZmZXIgJiYgITAgIT09IGUgfHwgKGkuYnVmZmVyID0gbi5nZXRNYXNrVGVtcGxhdGUuY2FsbCh0LCAhMCwgby5jYWxsKHQpLCAhMCksIFxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGkuX2J1ZmZlciAmJiAoaS5fYnVmZmVyID0gaS5idWZmZXIuc2xpY2UoKSkpLCBpLmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbyhlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5tYXNrc2V0LCBhID0gLTEsIHIgPSAtMSwgbyA9IGkgfHwgbi52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlICYmIChlID0gLTEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMCwgbCA9IG8ubGVuZ3RoOyBzIDwgbDsgcysrKSBvW3NdICYmICh0IHx8ICEwICE9PSBvW3NdLmdlbmVyYXRlZElucHV0KSAmJiAocyA8PSBlICYmIChhID0gcyksIFxuICAgICAgICAgICAgICAgICAgICBzID49IGUgJiYgKHIgPSBzKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSA9PT0gYSB8fCBhID09IGUgPyByIDogLTEgPT0gciB8fCBlIC0gYSA8IHIgLSBlID8gYSA6IHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMsIHIgPSB0aGlzLm1hc2tzZXQsIG8gPSBuLmdldFRlc3RUZW1wbGF0ZS5jYWxsKGEsIGUpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gby5kZWYgJiYgKG8gPSBuLmdldFRlc3QuY2FsbChhLCBlKS5tYXRjaCksICEwICE9PSBvLnN0YXRpYykgcmV0dXJuIG8uZm47XG4gICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaSAmJiB2b2lkIDAgIT09IHIudmFsaWRQb3NpdGlvbnNbZV0gJiYgITAgIT09IHIudmFsaWRQb3NpdGlvbnNbZV0uZ2VuZXJhdGVkSW5wdXQpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSB0ICYmIGUgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG4uZ2V0VGVzdHMuY2FsbChhLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPiAxICsgKFwiXCIgPT09IHNbcy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IG4uZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwoYSwgZSwgbi5nZXRUZXN0cy5jYWxsKGEsIGUpKSwgYyA9IG4uZ2V0UGxhY2Vob2xkZXIuY2FsbChhLCBlLCBsLm1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsLm1hdGNoLmRlZiAhPT0gYztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9ICEwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IGUgKyAxOyBcIlwiICE9PSBuLmdldFRlc3QuY2FsbChhLCByKS5tYXRjaC5kZWYgJiYgKCEwID09PSB0ICYmICghMCAhPT0gbi5nZXRUZXN0LmNhbGwoYSwgcikubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIXMuY2FsbChhLCByLCB2b2lkIDAsICEwKSkgfHwgITAgIT09IHQgJiYgIXMuY2FsbChhLCByLCB2b2lkIDAsIGkpKTsgKSByKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLm9wdHMsIGkgPSB0aGlzLmVsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNSVEwgfHwgXCJudW1iZXJcIiAhPSB0eXBlb2YgZSB8fCB0LmdyZWVkeSAmJiBcIlwiID09PSB0LnBsYWNlaG9sZGVyIHx8ICFpIHx8IChlID0gdGhpcy5fdmFsdWVHZXQoKS5sZW5ndGggLSBlKSA8IDAgJiYgKGUgPSAwKSwgXG4gICAgICAgICAgICAgICAgICAgIGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDQ3MTM6IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgICAgICAgICAgfSksIHQuZGV0ZXJtaW5lVGVzdFRlbXBsYXRlID0gYywgdC5nZXREZWNpc2lvblRha2VyID0gbywgdC5nZXRNYXNrVGVtcGxhdGUgPSBmdW5jdGlvbihlLCB0LCBpLCBuLCBhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcywgbyA9IHRoaXMub3B0cywgdSA9IHRoaXMubWFza3NldCwgZiA9IG8uZ3JlZWR5O1xuICAgICAgICAgICAgICAgICAgICBhICYmIG8uZ3JlZWR5ICYmIChvLmdyZWVkeSA9ICExLCByLm1hc2tzZXQudGVzdHMgPSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0IHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwLCBoLCB2LCBtLCBnID0gW10sIHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IGUgJiYgdS52YWxpZFBvc2l0aW9uc1t5XSkgaCA9ICh2ID0gYSAmJiB1LnZhbGlkUG9zaXRpb25zW3ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZvaWQgMCA9PT0gdS52YWxpZFBvc2l0aW9uc1t5ICsgMV0gJiYgKCEwID09PSB1LnZhbGlkUG9zaXRpb25zW3ldLmdlbmVyYXRlZElucHV0IHx8IHUudmFsaWRQb3NpdGlvbnNbeV0uaW5wdXQgPT0gby5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIHkgPiAwKSA/IGMuY2FsbChyLCB5LCBkLmNhbGwociwgeSwgcCwgeSAtIDEpKSA6IHUudmFsaWRQb3NpdGlvbnNbeV0pLm1hdGNoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSB2LmxvY2F0b3Iuc2xpY2UoKSwgZy5wdXNoKCEwID09PSBpID8gdi5pbnB1dCA6ICExID09PSBpID8gaC5uYXRpdmVEZWYgOiBzLmNhbGwociwgeSwgaCkpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKHYgPSBsLmNhbGwociwgeSwgcCwgeSAtIDEpKS5tYXRjaCwgcCA9IHYubG9jYXRvci5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrID0gITAgIT09IG4gJiYgKCExICE9PSBvLmppdE1hc2tpbmcgPyBvLmppdE1hc2tpbmcgOiBoLmppdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPSAobSAmJiBoLnN0YXRpYyAmJiBoLmRlZiAhPT0gby5ncm91cFNlcGFyYXRvciAmJiBudWxsID09PSBoLmZuIHx8IHUudmFsaWRQb3NpdGlvbnNbeSAtIDFdICYmIGguc3RhdGljICYmIGguZGVmICE9PSBvLmdyb3VwU2VwYXJhdG9yICYmIG51bGwgPT09IGguZm4pICYmIHUudGVzdHNbeV0pIHx8ICExID09PSBrIHx8IHZvaWQgMCA9PT0gayB8fCBcIm51bWJlclwiID09IHR5cGVvZiBrICYmIGlzRmluaXRlKGspICYmIGsgPiB5ID8gZy5wdXNoKCExID09PSBpID8gaC5uYXRpdmVEZWYgOiBzLmNhbGwociwgZy5sZW5ndGgsIGgpKSA6IG0gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHkrKztcbiAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoITAgIT09IGguc3RhdGljIHx8IFwiXCIgIT09IGguZGVmIHx8IHQgPiB5KTtcbiAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gZ1tnLmxlbmd0aCAtIDFdICYmIGcucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICExID09PSBpICYmIHZvaWQgMCAhPT0gdS5tYXNrTGVuZ3RoIHx8ICh1Lm1hc2tMZW5ndGggPSB5IC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvLmdyZWVkeSA9IGYsIGc7XG4gICAgICAgICAgICAgICAgfSwgdC5nZXRQbGFjZWhvbGRlciA9IHMsIHQuZ2V0VGVzdCA9IHUsIHQuZ2V0VGVzdFRlbXBsYXRlID0gbCwgdC5nZXRUZXN0cyA9IGQsIHQuaXNTdWJzZXRPZiA9IGY7XG4gICAgICAgICAgICAgICAgdmFyIG4sIGEgPSAobiA9IGkoMjM5NCkpICYmIG4uX19lc01vZHVsZSA/IG4gOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IChudWxsICE9IGUuYWx0ZXJuYXRpb24gPyBlLm1sb2NbbyhlKV0gOiBlLmxvY2F0b3IpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBpKSBmb3IgKDtpLmxlbmd0aCA8IHQ7ICkgaSArPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG8oZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUubG9jYXRvcltlLmFsdGVybmF0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgdC5sZW5ndGggPiAwICYmICh0ID0gdC5zcGxpdChcIixcIilbMF0pLCB2b2lkIDAgIT09IHQgPyB0LnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm9wdHMsIGEgPSB0aGlzLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09ICh0ID0gdCB8fCB1LmNhbGwodGhpcywgZSkubWF0Y2gpLnBsYWNlaG9sZGVyIHx8ICEwID09PSBpKSByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0LnBsYWNlaG9sZGVyID8gdC5wbGFjZWhvbGRlcihuKSA6IHQucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gdC5zdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlID4gLTEgJiYgdm9pZCAwID09PSBhLnZhbGlkUG9zaXRpb25zW2VdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIsIG8gPSBkLmNhbGwodGhpcywgZSksIHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoby5sZW5ndGggPiAxICsgKFwiXCIgPT09IG9bby5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCkpIGZvciAodmFyIGwgPSAwOyBsIDwgby5sZW5ndGg7IGwrKykgaWYgKFwiXCIgIT09IG9bbF0ubWF0Y2guZGVmICYmICEwICE9PSBvW2xdLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSBvW2xdLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAoITAgPT09IG9bbF0ubWF0Y2guc3RhdGljIHx8IHZvaWQgMCA9PT0gciB8fCAhMSAhPT0gb1tsXS5tYXRjaC5mbi50ZXN0KHIubWF0Y2guZGVmLCBhLCBlLCAhMCwgbikpICYmIChzLnB1c2gob1tsXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBvW2xdLm1hdGNoLnN0YXRpYyAmJiAociA9IG9bbF0pLCBzLmxlbmd0aCA+IDEgJiYgL1swLTlhLWJBLVpdLy50ZXN0KHNbMF0ubWF0Y2guZGVmKSkpIHJldHVybiBuLnBsYWNlaG9sZGVyLmNoYXJBdChlICUgbi5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQuZGVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuLnBsYWNlaG9sZGVyLmNoYXJBdChlICUgbi5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldC52YWxpZFBvc2l0aW9uc1tlXSB8fCBjLmNhbGwodGhpcywgZSwgZC5jYWxsKHRoaXMsIGUsIHQgPyB0LnNsaWNlKCkgOiB0LCBpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHRoaXMub3B0cywgbiA9IDAsIGEgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIG4gPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWF0Y2gub3B0aW9uYWxpdHkgJiYgKDAgIT09IGkgJiYgaSAhPT0gZS5tYXRjaC5vcHRpb25hbGl0eSAmJiAobiA9ICEwKSwgKDAgPT09IGkgfHwgaSA+IGUubWF0Y2gub3B0aW9uYWxpdHkpICYmIChpID0gZS5tYXRjaC5vcHRpb25hbGl0eSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBpICYmICgwID09IGUgfHwgMSA9PSB0Lmxlbmd0aCA/IGkgPSAwIDogbiB8fCAoaSA9IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9KGUsIHQpO1xuICAgICAgICAgICAgICAgICAgICBlID0gZSA+IDAgPyBlIC0gMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvLCBzLCBsLCBjID0gcih1LmNhbGwodGhpcywgZSkpO1xuICAgICAgICAgICAgICAgICAgICBpLmdyZWVkeSAmJiB0Lmxlbmd0aCA+IDEgJiYgXCJcIiA9PT0gdFt0Lmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiAobiA9IDEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMDsgZiA8IHQubGVuZ3RoIC0gbjsgZisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRbZl07XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gcihkLCBjLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IE1hdGguYWJzKG8gLSBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICh2b2lkIDAgPT09IHMgfHwgXCJcIiAhPT0gbyAmJiBwIDwgcyB8fCBsICYmICFpLmdyZWVkeSAmJiBsLm1hdGNoLm9wdGlvbmFsaXR5ICYmIGwubWF0Y2gub3B0aW9uYWxpdHkgLSBhID4gMCAmJiBcIm1hc3RlclwiID09PSBsLm1hdGNoLm5ld0Jsb2NrTWFya2VyICYmICghZC5tYXRjaC5vcHRpb25hbGl0eSB8fCBkLm1hdGNoLm9wdGlvbmFsaXR5IC0gYSA8IDEgfHwgIWQubWF0Y2gubmV3QmxvY2tNYXJrZXIpIHx8IGwgJiYgIWkuZ3JlZWR5ICYmIGwubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmICFkLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKHMgPSBwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdShlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS52YWxpZFBvc2l0aW9uc1tlXSA/IGkudmFsaWRQb3NpdGlvbnNbZV0gOiAodCB8fCBkLmNhbGwodGhpcywgZSkpWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBpID0gW10sIG4gPSAtMSwgYSA9IDAsIHIgPSBlLmxlbmd0aDsgYSA8IHI7IGErKykgaWYgKFwiLVwiID09PSBlLmNoYXJBdChhKSkgZm9yICh0ID0gZS5jaGFyQ29kZUF0KGEgKyAxKTsgKytuIDwgdDsgKSBpLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShuKSk7IGVsc2UgbiA9IGUuY2hhckNvZGVBdChhKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpLnB1c2goZS5jaGFyQXQoYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5tYXRjaC5kZWYgPT09IHQubWF0Y2gubmF0aXZlRGVmIHx8ICEoIShpLnJlZ2V4IHx8IGUubWF0Y2guZm4gaW5zdGFuY2VvZiBSZWdFeHAgJiYgdC5tYXRjaC5mbiBpbnN0YW5jZW9mIFJlZ0V4cCkgfHwgITAgPT09IGUubWF0Y2guc3RhdGljIHx8ICEwID09PSB0Lm1hdGNoLnN0YXRpYykgJiYgLTEgIT09IG4odC5tYXRjaC5mbi50b1N0cmluZygpLnJlcGxhY2UoL1tbXFxdL10vZywgXCJcIikpLmluZGV4T2YobihlLm1hdGNoLmZuLnRvU3RyaW5nKCkucmVwbGFjZSgvW1tcXF0vXS9nLCBcIlwiKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4sIHIsIG8gPSB0aGlzLCBzID0gdGhpcy5kZXBlbmRlbmN5TGliLCBsID0gdGhpcy5tYXNrc2V0LCB1ID0gdGhpcy5vcHRzLCBkID0gdGhpcy5lbCwgcCA9IGwubWFza1Rva2VuLCBoID0gdCA/IGkgOiAwLCB2ID0gdCA/IHQuc2xpY2UoKSA6IFsgMCBdLCBtID0gW10sIGcgPSAhMSwgeSA9IHQgPyB0LmpvaW4oXCJcIikgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBrKHQsIGksIHIsIHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGMociwgcywgcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDAgPT09IHQubWF0Y2hlcy5pbmRleE9mKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSB8fCB0Lm1hdGNoZXMuZXZlcnkoKGZ1bmN0aW9uKG4sIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMCA9PT0gbi5pc1F1YW50aWZpZXIgPyBpID0gdihlLCB0Lm1hdGNoZXNbYSAtIDFdKSA6IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLCBcIm1hdGNoZXNcIikgJiYgKGkgPSB2KGUsIG4pKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB4KGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4sIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobC50ZXN0c1tlXSB8fCBsLnZhbGlkUG9zaXRpb25zW2VdKSAmJiAobC50ZXN0c1tlXSB8fCBbIGwudmFsaWRQb3NpdGlvbnNbZV0gXSkuZXZlcnkoKGZ1bmN0aW9uKGUsIHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1sb2NbdF0pIHJldHVybiBuID0gZSwgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHZvaWQgMCAhPT0gaSA/IGkgOiBlLmFsdGVybmF0aW9uLCBzID0gdm9pZCAwICE9PSBlLmxvY2F0b3Jbb10gPyBlLmxvY2F0b3Jbb10udG9TdHJpbmcoKS5pbmRleE9mKHQpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZvaWQgMCA9PT0gYSB8fCBzIDwgYSkgJiYgLTEgIT09IHMgJiYgKG4gPSBlLCBhID0gcyksICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gbi5sb2NhdG9yW24uYWx0ZXJuYXRpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuLm1sb2NbdF0gfHwgbi5tbG9jW3JdIHx8IG4ubG9jYXRvcikuc2xpY2UoKHZvaWQgMCAhPT0gaSA/IGkgOiBuLmFsdGVybmF0aW9uKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IGkgPyB4KGUsIHQpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBQKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBlLmFsdGVybmF0aW9uLCBuID0gdm9pZCAwID09PSB0IHx8IGkgPT09IHQuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGUubG9jYXRvcltpXS50b1N0cmluZygpLmluZGV4T2YodC5sb2NhdG9yW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuICYmIGkgPiB0LmFsdGVybmF0aW9uKSBmb3IgKHZhciBhID0gdC5hbHRlcm5hdGlvbjsgYSA8IGk7IGErKykgaWYgKGUubG9jYXRvclthXSAhPT0gdC5sb2NhdG9yW2FdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gYSwgbiA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubWxvYyA9IGUubWxvYyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZS5sb2NhdG9yW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByICYmIChyID0gci5zcGxpdChcIixcIilbMF0pLCB2b2lkIDAgPT09IGUubWxvY1tyXSAmJiAoZS5tbG9jW3JdID0gZS5sb2NhdG9yLnNsaWNlKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbyBpbiB0Lm1sb2MpIFwic3RyaW5nXCIgPT0gdHlwZW9mIG8gJiYgKG8gPSBvLnNwbGl0KFwiLFwiKVswXSksIHZvaWQgMCA9PT0gZS5tbG9jW29dICYmIChlLm1sb2Nbb10gPSB0Lm1sb2Nbb10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxvY2F0b3JbaV0gPSBPYmplY3Qua2V5cyhlLm1sb2MpLmpvaW4oXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmFsdGVybmF0aW9uID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdyhlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmxvY2F0b3IubGVuZ3RoICE9PSB0LmxvY2F0b3IubGVuZ3RoKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBlLmFsdGVybmF0aW9uICsgMTsgaSA8IGUubG9jYXRvci5sZW5ndGg7IGkrKykgaWYgKGUubG9jYXRvcltpXSAhPT0gdC5sb2NhdG9yW2ldKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggPiBlICsgdS5fbWF4VGVzdFBvcykgdGhyb3cgXCJJbnB1dG1hc2s6IFRoZXJlIGlzIHByb2JhYmx5IGFuIGVycm9yIGluIHlvdXIgbWFzayBkZWZpbml0aW9uIG9yIGluIHRoZSBjb2RlLiBDcmVhdGUgYW4gaXNzdWUgb24gZ2l0aHViIHdpdGggYW4gZXhhbXBsZSBvZiB0aGUgbWFzayB5b3UgYXJlIHVzaW5nLiBcIiArIGwubWFzaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaCA9PT0gZSAmJiB2b2lkIDAgPT09IHIubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRvcjogcy5yZXZlcnNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZDogeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sb2M6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAhci5vcHRpb25hbGl0eSB8fCB2b2lkIDAgIT09IHAgfHwgISh1LmRlZmluaXRpb25zICYmIHUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdICYmIHUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdLm9wdGlvbmFsIHx8IGEuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdICYmIGEuZGVmYXVsdC5wcm90b3R5cGUuZGVmaW5pdGlvbnNbci5uYXRpdmVEZWZdLm9wdGlvbmFsKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnID0gITAsIGggPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSByLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNHcm91cCAmJiBwICE9PSByKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGModC5tYXRjaGVzW3QubWF0Y2hlcy5pbmRleE9mKHIpICsgMV0sIHMsIHApKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNPcHRpb25hbCkgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByLCBhID0gbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGsociwgaSwgcywgcCksIG0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmZvckVhY2goKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA+PSBhICYmIChlLm1hdGNoLm9wdGlvbmFsaXR5ID0gZS5tYXRjaC5vcHRpb25hbGl0eSA/IGUubWF0Y2gub3B0aW9uYWxpdHkgKyAxIDogMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBuID0gbVttLmxlbmd0aCAtIDFdLm1hdGNoLCB2b2lkIDAgIT09IHAgfHwgIXYobiwgdCkpIHJldHVybiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcgPSAhMCwgaCA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNBbHRlcm5hdG9yKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLmhhc0FsdGVybmF0b3IgPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuLCBhLCB2LCB5ID0gciwgayA9IFtdLCBiID0gbS5zbGljZSgpLCBTID0gcy5sZW5ndGgsIE0gPSAhMSwgXyA9IGkubGVuZ3RoID4gMCA/IGkuc2hpZnQoKSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBfIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTywgRSA9IGgsIFQgPSBpLnNsaWNlKCksIGogPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgXykgaiA9IF8uc3BsaXQoXCIsXCIpOyBlbHNlIGZvciAoTyA9IDA7IE8gPCB5Lm1hdGNoZXMubGVuZ3RoOyBPKyspIGoucHVzaChPLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGwuZXhjbHVkZXNbZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgQSA9IGouc2xpY2UoKSwgRCA9IDAsIEIgPSBsLmV4Y2x1ZGVzW2VdLmxlbmd0aDsgRCA8IEI7IEQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEMgPSBsLmV4Y2x1ZGVzW2VdW0RdLnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5sZW5ndGggPT0gQ1sxXSAmJiBqLnNwbGljZShqLmluZGV4T2YoQ1swXSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgPT09IGoubGVuZ3RoICYmIChkZWxldGUgbC5leGNsdWRlc1tlXSwgaiA9IEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoITAgPT09IHUua2VlcFN0YXRpYyB8fCBpc0Zpbml0ZShwYXJzZUludCh1LmtlZXBTdGF0aWMpKSAmJiBFID49IHUua2VlcFN0YXRpYykgJiYgKGogPSBqLnNsaWNlKDAsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBSID0gMDsgUiA8IGoubGVuZ3RoOyBSKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTyA9IHBhcnNlSW50KGpbUl0pLCBtID0gW10sIGkgPSBcInN0cmluZ1wiID09IHR5cGVvZiBfICYmIHgoaCwgTywgUykgfHwgVC5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgTCA9IHkubWF0Y2hlc1tPXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEwgJiYgYyhMLCBbIE8gXS5jb25jYXQocyksIHApKSByID0gITA7IGVsc2UgaWYgKDAgPT09IFIgJiYgKE0gPSAhMCksIEwgJiYgTC5tYXRjaGVzICYmIEwubWF0Y2hlcy5sZW5ndGggPiB5Lm1hdGNoZXNbMF0ubWF0Y2hlcy5sZW5ndGgpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuID0gbS5zbGljZSgpLCBoID0gRSwgbSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBGID0gMDsgRiA8IG4ubGVuZ3RoOyBGKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBJID0gbltGXSwgTiA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSS5tYXRjaC5qaXQgPSBJLm1hdGNoLmppdCB8fCBNLCBJLmFsdGVybmF0aW9uID0gSS5hbHRlcm5hdGlvbiB8fCBTLCBQKEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgViA9IDA7IFYgPCBrLmxlbmd0aDsgVisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEcgPSBrW1ZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBfIHx8IHZvaWQgMCAhPT0gSS5hbHRlcm5hdGlvbiAmJiBqLmluY2x1ZGVzKEkubG9jYXRvcltJLmFsdGVybmF0aW9uXS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSS5tYXRjaC5uYXRpdmVEZWYgPT09IEcubWF0Y2gubmF0aXZlRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOID0gITAsIFAoRywgSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZihJLCBHLCB1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUChJLCBHKSAmJiAoTiA9ICEwLCBrLnNwbGljZShrLmluZGV4T2YoRyksIDAsIEkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmKEcsIEksIHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQKEcsIEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPSBHLCAhMCA9PT0gKGEgPSBJKS5tYXRjaC5zdGF0aWMgJiYgITAgIT09IHYubWF0Y2guc3RhdGljICYmIHYubWF0Y2guZm4udGVzdChhLm1hdGNoLmRlZiwgbCwgZSwgITEsIHUsICExKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyhJLCBHKSB8fCB2b2lkIDAgIT09IGQuaW5wdXRtYXNrLnVzZXJPcHRpb25zLmtlZXBTdGF0aWMgPyBQKEksIEcpICYmIChOID0gITAsIGsuc3BsaWNlKGsuaW5kZXhPZihHKSwgMCwgSSkpIDogdS5rZWVwU3RhdGljID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE4gfHwgay5wdXNoKEkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBiLmNvbmNhdChrKSwgaCA9IGUsIGcgPSBtLmxlbmd0aCA+IDAsIHIgPSBrLmxlbmd0aCA+IDAsIGkgPSBULnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgciA9IGMoeS5tYXRjaGVzW19dIHx8IHQubWF0Y2hlc1tfXSwgWyBfIF0uY29uY2F0KHMpLCBwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIuaXNRdWFudGlmaWVyICYmIHAgIT09IHQubWF0Y2hlc1t0Lm1hdGNoZXMuaW5kZXhPZihyKSAtIDFdKSByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gciwgbyA9ICExLCBmID0gaS5sZW5ndGggPiAwID8gaS5zaGlmdCgpIDogMDsgZiA8IChpc05hTihhLnF1YW50aWZpZXIubWF4KSA/IGYgKyAxIDogYS5xdWFudGlmaWVyLm1heCkgJiYgaCA8PSBlOyBmKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHQubWF0Y2hlc1t0Lm1hdGNoZXMuaW5kZXhPZihhKSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyID0gYyhkLCBbIGYgXS5jb25jYXQocyksIGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtLmZvckVhY2goKGZ1bmN0aW9uKHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuID0gYihkLCB0Lm1hdGNoKSA/IHQubWF0Y2ggOiBtW20ubGVuZ3RoIC0gMV0ubWF0Y2gpLm9wdGlvbmFsUXVhbnRpZmllciA9IGYgPj0gYS5xdWFudGlmaWVyLm1pbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmppdCA9IChmICsgMSkgKiAoZC5tYXRjaGVzLmluZGV4T2YobikgKyAxKSA+IGEucXVhbnRpZmllci5qaXQsIG4ub3B0aW9uYWxRdWFudGlmaWVyICYmIHYobiwgZCkgJiYgKGcgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gZSwgdS5ncmVlZHkgJiYgbnVsbCA9PSBsLnZhbGlkUG9zaXRpb25zW2UgLSAxXSAmJiBmID4gYS5xdWFudGlmaWVyLm1pbiAmJiAtMSAhPSBbIFwiKlwiLCBcIitcIiBdLmluZGV4T2YoYS5xdWFudGlmaWVyLm1heCkgJiYgKG0ucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHZvaWQgMCksIG8gPSAhMCwgciA9ICExKSwgIW8gJiYgbi5qaXQgJiYgKGwuaml0T2Zmc2V0W2VdID0gZC5tYXRjaGVzLmxlbmd0aCAtIGQubWF0Y2hlcy5pbmRleE9mKG4pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBvKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociA9IGsociwgaSwgcywgcCkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCA9IGkubGVuZ3RoID4gMCA/IGkuc2hpZnQoKSA6IDA7IHAgPCB0Lm1hdGNoZXMubGVuZ3RoOyBwKyspIGlmICghMCAhPT0gdC5tYXRjaGVzW3BdLmlzUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ID0gYyh0Lm1hdGNoZXNbcF0sIFsgcCBdLmNvbmNhdChyKSwgcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgJiYgaCA9PT0gZSkgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggPiBlKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBiKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gLTEgIT0gZS5tYXRjaGVzLmluZGV4T2YodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSB8fCBlLm1hdGNoZXMuZm9yRWFjaCgoZnVuY3Rpb24oZSwgbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZS5tYXRjaGVzIHx8IGkgfHwgKGkgPSBiKGUsIHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCwgUCA9IGUgLSAxOyB2b2lkIDAgPT09ICh4ID0gbC52YWxpZFBvc2l0aW9uc1tQXSB8fCBsLnRlc3RzW1BdKSAmJiBQID4gLTE7ICkgUC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0geCAmJiBQID4gLTEgJiYgKHYgPSBmdW5jdGlvbihlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpLCBuID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHQpIHx8ICh0ID0gWyB0IF0pLCB0Lmxlbmd0aCA+IDAgJiYgKHZvaWQgMCA9PT0gdFswXS5hbHRlcm5hdGlvbiB8fCAhMCA9PT0gdS5rZWVwU3RhdGljID8gMCA9PT0gKG4gPSBjLmNhbGwobywgZSwgdC5zbGljZSgpKS5sb2NhdG9yLnNsaWNlKCkpLmxlbmd0aCAmJiAobiA9IHRbMF0ubG9jYXRvci5zbGljZSgpKSA6IHQuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gZS5kZWYgJiYgKDAgPT09IG4ubGVuZ3RoID8gKGkgPSBlLmFsdGVybmF0aW9uLCBuID0gZS5sb2NhdG9yLnNsaWNlKCkpIDogZS5sb2NhdG9yW2ldICYmIC0xID09PSBuW2ldLnRvU3RyaW5nKCkuaW5kZXhPZihlLmxvY2F0b3JbaV0pICYmIChuW2ldICs9IFwiLFwiICsgZS5sb2NhdG9yW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSksIG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShQLCB4KSwgeSA9IHYuam9pbihcIlwiKSwgaCA9IFApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwudGVzdHNbZV0gJiYgbC50ZXN0c1tlXVswXS5jZCA9PT0geSkgcmV0dXJuIGwudGVzdHNbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gdi5zaGlmdCgpOyB3IDwgcC5sZW5ndGg7IHcrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrKHBbd10sIHYsIFsgdyBdKSAmJiBoID09PSBlIHx8IGggPiBlKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAgPT09IG0ubGVuZ3RoIHx8IGcpICYmIG0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpYzogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6ICExLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdG9yOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1sb2M6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IHlcbiAgICAgICAgICAgICAgICAgICAgfSksIHZvaWQgMCAhPT0gdCAmJiBsLnRlc3RzW2VdID8gciA9IHMuZXh0ZW5kKCEwLCBbXSwgbSkgOiAobC50ZXN0c1tlXSA9IHMuZXh0ZW5kKCEwLCBbXSwgbSksIFxuICAgICAgICAgICAgICAgICAgICByID0gbC50ZXN0c1tlXSksIG0uZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5tYXRjaC5vcHRpb25hbGl0eSA9IGUubWF0Y2guZGVmT3B0aW9uYWxpdHkgfHwgITE7XG4gICAgICAgICAgICAgICAgICAgIH0pKSwgcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzIxNTogZnVuY3Rpb24oZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgICAgICB9KSwgdC5hbHRlcm5hdGUgPSBzLCB0LmNoZWNrQWx0ZXJuYXRpb25NYXRjaCA9IGZ1bmN0aW9uKGUsIHQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiwgYSA9IHRoaXMub3B0cy5ncmVlZHkgPyB0IDogdC5zbGljZSgwLCAxKSwgciA9ICExLCBvID0gdm9pZCAwICE9PSBpID8gaS5zcGxpdChcIixcIikgOiBbXSwgcyA9IDA7IHMgPCBvLmxlbmd0aDsgcysrKSAtMSAhPT0gKG4gPSBlLmluZGV4T2Yob1tzXSkpICYmIGUuc3BsaWNlKG4sIDEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IGUubGVuZ3RoOyBsKyspIGlmIChhLmluY2x1ZGVzKGVbbF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgICAgICB9LCB0LmhhbmRsZVJlbW92ZSA9IGZ1bmN0aW9uKGUsIHQsIGksIG8sIGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLCB1ID0gdGhpcy5tYXNrc2V0LCBmID0gdGhpcy5vcHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGYubnVtZXJpY0lucHV0IHx8IGMuaXNSVEwpICYmICh0ID09PSBhLmtleXMuQmFja3NwYWNlID8gdCA9IGEua2V5cy5EZWxldGUgOiB0ID09PSBhLmtleXMuRGVsZXRlICYmICh0ID0gYS5rZXlzLkJhY2tzcGFjZSksIFxuICAgICAgICAgICAgICAgICAgICBjLmlzUlRMKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBpLmVuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuZW5kID0gaS5iZWdpbiwgaS5iZWdpbiA9IGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHAsIGggPSByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoYywgdm9pZCAwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIGkuZW5kID49IHIuZ2V0QnVmZmVyLmNhbGwoYykubGVuZ3RoICYmIGggPj0gaS5lbmQgJiYgKGkuZW5kID0gaCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0ID09PSBhLmtleXMuQmFja3NwYWNlID8gaS5lbmQgLSBpLmJlZ2luIDwgMSAmJiAoaS5iZWdpbiA9IHIuc2Vla1ByZXZpb3VzLmNhbGwoYywgaS5iZWdpbikpIDogdCA9PT0gYS5rZXlzLkRlbGV0ZSAmJiBpLmJlZ2luID09PSBpLmVuZCAmJiAoaS5lbmQgPSByLmlzTWFzay5jYWxsKGMsIGkuZW5kLCAhMCwgITApID8gaS5lbmQgKyAxIDogci5zZWVrTmV4dC5jYWxsKGMsIGkuZW5kKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoITEgIT09IChwID0gdi5jYWxsKGMsIGkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBvICYmICExICE9PSBmLmtlZXBTdGF0aWMgfHwgbnVsbCAhPT0gZi5yZWdleCAmJiAtMSAhPT0gbi5nZXRUZXN0LmNhbGwoYywgaS5iZWdpbikubWF0Y2guZGVmLmluZGV4T2YoXCJ8XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBzLmNhbGwoYywgITApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnID0gdm9pZCAwICE9PSBtLmNhcmV0ID8gbS5jYXJldCA6IG0ucG9zID8gci5zZWVrTmV4dC5jYWxsKGMsIG0ucG9zLmJlZ2luID8gbS5wb3MuYmVnaW4gOiBtLnBvcykgOiByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoYywgLTEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHQgIT09IGEua2V5cy5EZWxldGUgfHwgaS5iZWdpbiA+IGcpICYmIGkuYmVnaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IG8gJiYgKHUucCA9IHQgPT09IGEua2V5cy5EZWxldGUgPyBpLmJlZ2luICsgcCA6IGkuYmVnaW4sIHUucCA9IHIuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKGMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogdS5wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdS5wXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAhMSwgITEgPT09IGYuaW5zZXJ0TW9kZSAmJiB0ID09PSBhLmtleXMuQmFja3NwYWNlID8gXCJub25lXCIgOiB2b2lkIDApLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHQuaXNDb21wbGV0ZSA9IGMsIHQuaXNTZWxlY3Rpb24gPSB1LCB0LmlzVmFsaWQgPSBmLCB0LnJlZnJlc2hGcm9tQnVmZmVyID0gcCwgXG4gICAgICAgICAgICAgICAgdC5yZXZhbGlkYXRlTWFzayA9IHY7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBpKDQ3MTMpLCBhID0gaSgyODM5KSwgciA9IGkoODcxMSksIG8gPSBpKDYwMzApO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHMoZSwgdCwgaSwgYSwgbywgbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYywgdSwgZCwgcCwgaCwgdiwgbSwgZywgeSwgaywgYiwgeCA9IHRoaXMsIFAgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIHcgPSB0aGlzLm9wdHMsIFMgPSB4Lm1hc2tzZXQsIE0gPSBQLmV4dGVuZCghMCwgW10sIFMudmFsaWRQb3NpdGlvbnMpLCBfID0gUC5leHRlbmQoITAsIHt9LCBTLnRlc3RzKSwgTyA9ICExLCBFID0gITEsIFQgPSB2b2lkIDAgIT09IG8gPyBvIDogci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobCAmJiAoayA9IGwuYmVnaW4sIGIgPSBsLmVuZCwgbC5iZWdpbiA+IGwuZW5kICYmIChrID0gbC5lbmQsIGIgPSBsLmJlZ2luKSksIFxuICAgICAgICAgICAgICAgICAgICAtMSA9PT0gVCAmJiB2b2lkIDAgPT09IG8pIGMgPSAwLCB1ID0gKHAgPSBuLmdldFRlc3QuY2FsbCh4LCBjKSkuYWx0ZXJuYXRpb247IGVsc2UgZm9yICg7VCA+PSAwOyBULS0pIGlmICgoZCA9IFMudmFsaWRQb3NpdGlvbnNbVF0pICYmIHZvaWQgMCAhPT0gZC5hbHRlcm5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFQgPD0gKGUgfHwgMCkgJiYgcCAmJiBwLmxvY2F0b3JbZC5hbHRlcm5hdGlvbl0gIT09IGQubG9jYXRvcltkLmFsdGVybmF0aW9uXSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gVCwgdSA9IFMudmFsaWRQb3NpdGlvbnNbY10uYWx0ZXJuYXRpb24sIHAgPSBkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBwYXJzZUludChjKSwgUy5leGNsdWRlc1ttXSA9IFMuZXhjbHVkZXNbbV0gfHwgW10sICEwICE9PSBlICYmIFMuZXhjbHVkZXNbbV0ucHVzaCgoMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmdldERlY2lzaW9uVGFrZXIpKHApICsgXCI6XCIgKyBwLmFsdGVybmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gW10sIEEgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaCA9IG07IGggPCByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoeCwgdm9pZCAwLCAhMCkgKyAxOyBoKyspIC0xID09PSBBICYmIGUgPD0gaCAmJiB2b2lkIDAgIT09IHQgJiYgKGoucHVzaCh0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBBID0gai5sZW5ndGggLSAxKSwgKHYgPSBTLnZhbGlkUG9zaXRpb25zW2hdKSAmJiAhMCAhPT0gdi5nZW5lcmF0ZWRJbnB1dCAmJiAodm9pZCAwID09PSBsIHx8IGggPCBrIHx8IGggPj0gYikgJiYgai5wdXNoKHYuaW5wdXQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBTLnZhbGlkUG9zaXRpb25zW2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICgtMSA9PT0gQSAmJiB2b2lkIDAgIT09IHQgJiYgKGoucHVzaCh0KSwgQSA9IGoubGVuZ3RoIC0gMSk7IHZvaWQgMCAhPT0gUy5leGNsdWRlc1ttXSAmJiBTLmV4Y2x1ZGVzW21dLmxlbmd0aCA8IDEwOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFMudGVzdHMgPSB7fSwgci5yZXNldE1hc2tTZXQuY2FsbCh4LCAhMCksIE8gPSAhMCwgaCA9IDA7IGggPCBqLmxlbmd0aCAmJiAoZyA9IE8uY2FyZXQgfHwgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKHgsIHZvaWQgMCwgITApICsgMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IGpbaF0sIE8gPSBmLmNhbGwoeCwgZywgeSwgITEsIGEsICEwKSk7IGgrKykgaCA9PT0gQSAmJiAoRSA9IE8pLCAxID09IGUgJiYgTyAmJiAoRSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXRQb3M6IGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzZXRNYXNrU2V0LmNhbGwoeCksIHAgPSBuLmdldFRlc3QuY2FsbCh4LCBtKSwgUy52YWxpZFBvc2l0aW9ucyA9IFAuZXh0ZW5kKCEwLCBbXSwgTSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFMudGVzdHMgPSBQLmV4dGVuZCghMCwge30sIF8pLCAhUy5leGNsdWRlc1ttXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFID0gcy5jYWxsKHgsIGUsIHQsIGksIGEsIG0gLSAxLCBsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBEID0gKDAsIG4uZ2V0RGVjaXNpb25UYWtlcikocCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSBTLmV4Y2x1ZGVzW21dLmluZGV4T2YoRCArIFwiOlwiICsgcC5hbHRlcm5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRSA9IHMuY2FsbCh4LCBlLCB0LCBpLCBhLCBtIC0gMSwgbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKFMuZXhjbHVkZXNbbV0ucHVzaChEICsgXCI6XCIgKyBwLmFsdGVybmF0aW9uKSwgaCA9IG07IGggPCByLmdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoeCwgdm9pZCAwLCAhMCkgKyAxOyBoKyspIGRlbGV0ZSBTLnZhbGlkUG9zaXRpb25zW2hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBFICYmICExID09PSB3LmtlZXBTdGF0aWMgfHwgZGVsZXRlIFMuZXhjbHVkZXNbbV0sIEU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGwoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMub3B0cywgciA9IHRoaXMubWFza3NldDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChuLmNhc2luZyB8fCB0LmNhc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZSA9IGUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gci52YWxpZFBvc2l0aW9uc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gMCA9PT0gaSB8fCBvICYmIG8uaW5wdXQgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoYS5rZXlDb2RlLlNwYWNlKSA/IGUudG9VcHBlckNhc2UoKSA6IGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIG4uY2FzaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChyLnZhbGlkUG9zaXRpb25zKSwgZSA9IG4uY2FzaW5nLmFwcGx5KHRoaXMsIHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLCBpID0gdGhpcy5vcHRzLCBhID0gdGhpcy5tYXNrc2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpLmlzQ29tcGxldGUpIHJldHVybiBpLmlzQ29tcGxldGUoZSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIipcIiAhPT0gaS5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gITEsIHMgPSByLmRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uLmNhbGwodCwgITApLCBsID0gci5zZWVrUHJldmlvdXMuY2FsbCh0LCBzLmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gcy5kZWYgfHwgcy5kZWYubmV3QmxvY2tNYXJrZXIgfHwgcy5kZWYub3B0aW9uYWxpdHkgfHwgcy5kZWYub3B0aW9uYWxRdWFudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbyA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDw9IGw7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IG4uZ2V0VGVzdFRlbXBsYXRlLmNhbGwodCwgYykubWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gdS5zdGF0aWMgJiYgdm9pZCAwID09PSBhLnZhbGlkUG9zaXRpb25zW2NdICYmICEwICE9PSB1Lm9wdGlvbmFsaXR5ICYmICEwICE9PSB1Lm9wdGlvbmFsUXVhbnRpZmllciB8fCAhMCA9PT0gdS5zdGF0aWMgJiYgZVtjXSAhPT0gbi5nZXRQbGFjZWhvbGRlci5jYWxsKHQsIGMsIHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMub3B0cy5pbnNlcnRNb2RlID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUlRMID8gZS5iZWdpbiAtIGUuZW5kID4gdCA6IGUuZW5kIC0gZS5iZWdpbiA+IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYoZSwgdCwgaSwgYSwgbywgZCwgbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IHRoaXMsIHkgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIGsgPSB0aGlzLm9wdHMsIGIgPSBnLm1hc2tzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAhMCA9PT0gaTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBlO1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBQKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBlLnJlbW92ZSAmJiAoQXJyYXkuaXNBcnJheShlLnJlbW92ZSkgfHwgKGUucmVtb3ZlID0gWyBlLnJlbW92ZSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmUuc29ydCgoZnVuY3Rpb24oZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZy5pc1JUTCA/IGUucG9zIC0gdC5wb3MgOiB0LnBvcyAtIGUucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5mb3JFYWNoKChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYuY2FsbChnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBlLnJlbW92ZSA9IHZvaWQgMCksIHZvaWQgMCAhPT0gZS5pbnNlcnQgJiYgKEFycmF5LmlzQXJyYXkoZS5pbnNlcnQpIHx8IChlLmluc2VydCA9IFsgZS5pbnNlcnQgXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5zZXJ0LnNvcnQoKGZ1bmN0aW9uKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGcuaXNSVEwgPyB0LnBvcyAtIGUucG9zIDogZS5wb3MgLSB0LnBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuZm9yRWFjaCgoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBlLmMgJiYgZi5jYWxsKGcsIGUucG9zLCBlLmMsIHZvaWQgMCA9PT0gZS5zdHJpY3QgfHwgZS5zdHJpY3QsIHZvaWQgMCAhPT0gZS5mcm9tSXNWYWxpZCA/IGUuZnJvbUlzVmFsaWQgOiBhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGUuaW5zZXJ0ID0gdm9pZCAwKSwgZS5yZWZyZXNoRnJvbUJ1ZmZlciAmJiBlLmJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUucmVmcmVzaEZyb21CdWZmZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAuY2FsbChnLCAhMCA9PT0gdCA/IHQgOiB0LnN0YXJ0LCB0LmVuZCwgZS5idWZmZXIpLCBlLnJlZnJlc2hGcm9tQnVmZmVyID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUucmV3cml0ZVBvc2l0aW9uICYmICh4ID0gZS5yZXdyaXRlUG9zaXRpb24sIGUgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB3KHQsIGksIG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbi5nZXRUZXN0cy5jYWxsKGcsIHQpLmV2ZXJ5KChmdW5jdGlvbihjLCBmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBjLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmdldEJ1ZmZlci5jYWxsKGcsICEwKSwgITEgIT09IChzID0gKCFkLmppdCB8fCB2b2lkIDAgIT09IGIudmFsaWRQb3NpdGlvbnNbci5zZWVrUHJldmlvdXMuY2FsbChnLCB0KV0pICYmIChudWxsICE9IGQuZm4gPyBkLmZuLnRlc3QoaSwgYiwgdCwgbywgaywgdS5jYWxsKGcsIGUpKSA6IChpID09PSBkLmRlZiB8fCBpID09PSBrLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpICYmIFwiXCIgIT09IGQuZGVmICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogbi5nZXRQbGFjZWhvbGRlci5jYWxsKGcsIHQsIGQsICEwKSB8fCBkLmRlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gdm9pZCAwICE9PSBzLmMgPyBzLmMgOiBpLCBoID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAgPSBwID09PSBrLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgJiYgITAgPT09IGQuc3RhdGljID8gbi5nZXRQbGFjZWhvbGRlci5jYWxsKGcsIHQsIGQsICEwKSB8fCBkLmRlZiA6IHAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gKHMgPSBQKHMpKSAmJiB2b2lkIDAgIT09IHMucG9zICYmIHMucG9zICE9PSB0ICYmIChoID0gcy5wb3MpLCAhMCAhPT0gcyAmJiB2b2lkIDAgPT09IHMucG9zICYmIHZvaWQgMCA9PT0gcy5jID8gITEgOiAoITEgPT09IHYuY2FsbChnLCBlLCB5LmV4dGVuZCh7fSwgYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGwuY2FsbChnLCBwLCBkLCBoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYSwgaCkgJiYgKHMgPSAhMSksICExKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpLCBzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZvaWQgMCAhPT0gZS5iZWdpbiAmJiAoeCA9IGcuaXNSVEwgPyBlLmVuZCA6IGUuYmVnaW4pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgUyA9ICEwLCBNID0geS5leHRlbmQoITAsIHt9LCBiLnZhbGlkUG9zaXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBrLmtlZXBTdGF0aWMgJiYgdm9pZCAwICE9PSBiLmV4Y2x1ZGVzW3hdICYmICEwICE9PSBvICYmICEwICE9PSBhKSBmb3IgKHZhciBfID0geDsgXyA8IChnLmlzUlRMID8gZS5iZWdpbiA6IGUuZW5kKTsgXysrKSB2b2lkIDAgIT09IGIuZXhjbHVkZXNbX10gJiYgKGIuZXhjbHVkZXNbX10gPSB2b2lkIDAsIFxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYi50ZXN0c1tfXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGsucHJlVmFsaWRhdGlvbiAmJiAhMCAhPT0gYSAmJiAhMCAhPT0gZCAmJiAoUyA9IFAoUyA9IGsucHJlVmFsaWRhdGlvbi5jYWxsKGcsIHIuZ2V0QnVmZmVyLmNhbGwoZyksIHgsIHQsIHUuY2FsbChnLCBlKSwgaywgYiwgZSwgaSB8fCBvKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgITAgPT09IFMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTID0gdyh4LCB0LCBpKSwgKCFpIHx8ICEwID09PSBhKSAmJiAhMSA9PT0gUyAmJiAhMCAhPT0gZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBPID0gYi52YWxpZFBvc2l0aW9uc1t4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU8gfHwgITAgIT09IE8ubWF0Y2guc3RhdGljIHx8IE8ubWF0Y2guZGVmICE9PSB0ICYmIHQgIT09IGsuc2tpcE9wdGlvbmFsUGFydENoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoay5pbnNlcnRNb2RlIHx8IHZvaWQgMCA9PT0gYi52YWxpZFBvc2l0aW9uc1tyLnNlZWtOZXh0LmNhbGwoZywgeCldIHx8IGUuZW5kID4geCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiLmppdE9mZnNldFt4XSAmJiB2b2lkIDAgPT09IGIudmFsaWRQb3NpdGlvbnNbci5zZWVrTmV4dC5jYWxsKGcsIHgpXSAmJiAhMSAhPT0gKFMgPSBmLmNhbGwoZywgeCArIGIuaml0T2Zmc2V0W3hdLCB0LCAhMCwgITApKSAmJiAoITAgIT09IG8gJiYgKFMuY2FyZXQgPSB4KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFID0gITApLCBlLmVuZCA+IHggJiYgKGIudmFsaWRQb3NpdGlvbnNbeF0gPSB2b2lkIDApLCAhRSAmJiAhci5pc01hc2suY2FsbChnLCB4LCBrLmtlZXBTdGF0aWMgJiYgMCA9PT0geCkpIGZvciAodmFyIFQgPSB4ICsgMSwgaiA9IHIuc2Vla05leHQuY2FsbChnLCB4LCAhMSwgMCAhPT0geCk7IFQgPD0gajsgVCsrKSBpZiAoITEgIT09IChTID0gdyhULCB0LCBpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTID0gaC5jYWxsKGcsIHgsIHZvaWQgMCAhPT0gUy5wb3MgPyBTLnBvcyA6IFQpIHx8IFMsIHggPSBUO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIFMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByLnNlZWtOZXh0LmNhbGwoZywgeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZy5oYXNBbHRlcm5hdG9yICYmICEwICE9PSBvICYmICFpICYmICghMSA9PT0gUyAmJiBrLmtlZXBTdGF0aWMgJiYgKGMuY2FsbChnLCByLmdldEJ1ZmZlci5jYWxsKGcpKSB8fCAwID09PSB4KSA/IFMgPSBzLmNhbGwoZywgeCwgdCwgaSwgYSwgdm9pZCAwLCBlKSA6ICh1LmNhbGwoZywgZSkgJiYgYi50ZXN0c1t4XSAmJiBiLnRlc3RzW3hdLmxlbmd0aCA+IDEgJiYgay5rZWVwU3RhdGljIHx8IDEgPT0gUyAmJiAhMCAhPT0gay5udW1lcmljSW5wdXQgJiYgYi50ZXN0c1t4XSAmJiBiLnRlc3RzW3hdLmxlbmd0aCA+IDEgJiYgci5nZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGcsIHZvaWQgMCwgITApID4geCkgJiYgKFMgPSBzLmNhbGwoZywgITApKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IFMgJiYgKFMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiB4XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBrLnBvc3RWYWxpZGF0aW9uICYmICEwICE9PSBhICYmICEwICE9PSBkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgQSA9IGsucG9zdFZhbGlkYXRpb24uY2FsbChnLCByLmdldEJ1ZmZlci5jYWxsKGcsICEwKSwgdm9pZCAwICE9PSBlLmJlZ2luID8gZy5pc1JUTCA/IGUuZW5kIDogZS5iZWdpbiA6IGUsIHQsIFMsIGssIGIsIGksIG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSBBICYmIChTID0gITAgPT09IEEgPyBTIDogQSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgUyAmJiB2b2lkIDAgPT09IFMucG9zICYmIChTLnBvcyA9IHgpLCAhMSA9PT0gUyB8fCAhMCA9PT0gZCA/IChyLnJlc2V0TWFza1NldC5jYWxsKGcsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIGIudmFsaWRQb3NpdGlvbnMgPSB5LmV4dGVuZCghMCwgW10sIE0pKSA6IGguY2FsbChnLCB2b2lkIDAsIHgsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEQgPSBQKFMpO1xuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGcubWF4TGVuZ3RoICYmIChyLmdldEJ1ZmZlci5jYWxsKGcpLmxlbmd0aCA+IGcubWF4TGVuZ3RoICYmICFhICYmIChyLnJlc2V0TWFza1NldC5jYWxsKGcsICEwKSwgXG4gICAgICAgICAgICAgICAgICAgIGIudmFsaWRQb3NpdGlvbnMgPSB5LmV4dGVuZCghMCwgW10sIE0pLCBEID0gITEpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGQoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gdGhpcy5tYXNrc2V0LCByID0gITEsIG8gPSBuLmdldFRlc3RzLmNhbGwodGhpcywgZSksIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9bc10ubWF0Y2ggJiYgKG9bc10ubWF0Y2gubmF0aXZlRGVmID09PSB0Lm1hdGNoW2kuc2hpZnRQb3NpdGlvbnMgPyBcImRlZlwiIDogXCJuYXRpdmVEZWZcIl0gJiYgKCFpLnNoaWZ0UG9zaXRpb25zIHx8ICF0Lm1hdGNoLnN0YXRpYykgfHwgb1tzXS5tYXRjaC5uYXRpdmVEZWYgPT09IHQubWF0Y2gubmF0aXZlRGVmIHx8IGkucmVnZXggJiYgIW9bc10ubWF0Y2guc3RhdGljICYmIG9bc10ubWF0Y2guZm4udGVzdCh0LmlucHV0LCBhLCBlLCAhMSwgaSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9bc10ubWF0Y2ggJiYgb1tzXS5tYXRjaC5kZWYgPT09IHQubWF0Y2gubmF0aXZlRGVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IHIgJiYgdm9pZCAwICE9PSBhLmppdE9mZnNldFtlXSAmJiAociA9IGQuY2FsbCh0aGlzLCBlICsgYS5qaXRPZmZzZXRbZV0sIHQsIGkpKSwgXG4gICAgICAgICAgICAgICAgICAgIHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbiwgYSwgcyA9IHRoaXMsIGwgPSB0aGlzLm1hc2tzZXQsIGMgPSB0aGlzLm9wdHMsIHUgPSB0aGlzLmRlcGVuZGVuY3lMaWIsIGYgPSBjLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIsIGQgPSBzLmlzUlRMID8gaS5zbGljZSgpLnJldmVyc2UoKSA6IGk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBcIlwiLCAhMCA9PT0gZSkgci5yZXNldE1hc2tTZXQuY2FsbChzKSwgbC50ZXN0cyA9IHt9LCBcbiAgICAgICAgICAgICAgICAgICAgZSA9IDAsIHQgPSBpLmxlbmd0aCwgYSA9IHIuZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAwXG4gICAgICAgICAgICAgICAgICAgIH0sICExKS5iZWdpbjsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG4gPSBlOyBuIDwgdDsgbisrKSBkZWxldGUgbC52YWxpZFBvc2l0aW9uc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbmV3IHUuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gZTsgbiA8IHQ7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5rZXkgPSBkW25dLnRvU3RyaW5nKCksIHMuaWdub3JhYmxlID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG8uRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwocywgcCwgITAsICExLCAhMSwgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAhMSAhPT0gaCAmJiB2b2lkIDAgIT09IGggJiYgKGEgPSBoLmZvcndhcmRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaChlLCB0LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcywgbyA9IHRoaXMubWFza3NldCwgcyA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gZSkgZm9yIChlID0gdCAtIDE7IGUgPiAwICYmICFvLnZhbGlkUG9zaXRpb25zW2VdOyBlLS0pIDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbCA9IGU7IGwgPCB0OyBsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG8udmFsaWRQb3NpdGlvbnNbbF0gJiYgIXIuaXNNYXNrLmNhbGwoYSwgbCwgITEpKSBpZiAoMCA9PSBsID8gbi5nZXRUZXN0LmNhbGwoYSwgbCkgOiBvLnZhbGlkUG9zaXRpb25zW2wgLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gbi5nZXRUZXN0cy5jYWxsKGEsIGwpLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gY1tjLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiBjLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1LCBkID0gbi5kZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbChhLCBsLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCAmJiAoITAgIT09IGQubWF0Y2guaml0IHx8IFwibWFzdGVyXCIgPT09IGQubWF0Y2gubmV3QmxvY2tNYXJrZXIgJiYgKHUgPSBvLnZhbGlkUG9zaXRpb25zW2wgKyAxXSkgJiYgITAgPT09IHUubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyKSAmJiAoKGQgPSBzLmV4dGVuZCh7fSwgZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogbi5nZXRQbGFjZWhvbGRlci5jYWxsKGEsIGwsIGQubWF0Y2gsICEwKSB8fCBkLm1hdGNoLmRlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5nZW5lcmF0ZWRJbnB1dCA9ICEwLCB2LmNhbGwoYSwgbCwgZCwgITApLCAhMCAhPT0gaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBvLnZhbGlkUG9zaXRpb25zW3RdLmlucHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby52YWxpZFBvc2l0aW9uc1t0XSA9IHZvaWQgMCwgZi5jYWxsKGEsIHQsIHAsICEwLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHYoZSwgdCwgaSwgYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHRoaXMsIHMgPSB0aGlzLm1hc2tzZXQsIGwgPSB0aGlzLm9wdHMsIGMgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHUoZSwgdCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0W2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gbiAmJiAhMCA9PT0gbi5tYXRjaC5zdGF0aWMgJiYgITAgIT09IG4ubWF0Y2gub3B0aW9uYWxpdHkgJiYgKHZvaWQgMCA9PT0gdFswXSB8fCB2b2lkIDAgPT09IHRbMF0uYWx0ZXJuYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBpLmJlZ2luIDw9IGUgLSAxID8gdFtlIC0gMV0gJiYgITAgPT09IHRbZSAtIDFdLm1hdGNoLnN0YXRpYyAmJiB0W2UgLSAxXSA6IHRbZSAtIDFdLCByID0gaS5lbmQgPiBlICsgMSA/IHRbZSArIDFdICYmICEwID09PSB0W2UgKyAxXS5tYXRjaC5zdGF0aWMgJiYgdFtlICsgMV0gOiB0W2UgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiByO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gMCwgaCA9IHZvaWQgMCAhPT0gZS5iZWdpbiA/IGUuYmVnaW4gOiBlLCB2ID0gdm9pZCAwICE9PSBlLmVuZCA/IGUuZW5kIDogZSwgbSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5iZWdpbiA+IGUuZW5kICYmIChoID0gZS5lbmQsIHYgPSBlLmJlZ2luKSwgYSA9IHZvaWQgMCAhPT0gYSA/IGEgOiBoLCB2b2lkIDAgPT09IGkgJiYgKGggIT09IHYgfHwgbC5pbnNlcnRNb2RlICYmIHZvaWQgMCAhPT0gcy52YWxpZFBvc2l0aW9uc1thXSB8fCB2b2lkIDAgPT09IHQgfHwgdC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgfHwgdC5tYXRjaC5vcHRpb25hbGl0eSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnLCB5ID0gYy5leHRlbmQoITAsIHt9LCBzLnZhbGlkUG9zaXRpb25zKSwgayA9IHIuZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChvLCB2b2lkIDAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocy5wID0gaCwgZyA9IGs7IGcgPj0gaDsgZy0tKSBkZWxldGUgcy52YWxpZFBvc2l0aW9uc1tnXSwgdm9pZCAwID09PSB0ICYmIGRlbGV0ZSBzLnRlc3RzW2cgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiLCB4LCBQID0gYSwgdyA9IFA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHQgJiYgKHMudmFsaWRQb3NpdGlvbnNbYV0gPSBjLmV4dGVuZCghMCwge30sIHQpLCB3KyssIFArKyksIGcgPSB0ID8gdiA6IHYgLSAxOyBnIDw9IGs7IGcrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IChiID0geVtnXSkgJiYgITAgIT09IGIuZ2VuZXJhdGVkSW5wdXQgJiYgKGcgPj0gdiB8fCBnID49IGggJiYgdShnLCB5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7XCJcIiAhPT0gbi5nZXRUZXN0LmNhbGwobywgdykubWF0Y2guZGVmOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gKHggPSBkLmNhbGwobywgdywgYiwgbCkpIHx8IFwiK1wiID09PSBiLm1hdGNoLmRlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiID09PSBiLm1hdGNoLmRlZiAmJiByLmdldEJ1ZmZlci5jYWxsKG8sICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgUyA9IGYuY2FsbChvLCB3LCBiLmlucHV0LCBcIitcIiAhPT0gYi5tYXRjaC5kZWYsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobSA9ICExICE9PSBTLCBQID0gKFMucG9zIHx8IHcpICsgMSwgIW0gJiYgeCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IHQgJiYgYi5tYXRjaC5zdGF0aWMgJiYgZyA9PT0gZS5iZWdpbiAmJiBwKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW0gJiYgci5nZXRCdWZmZXIuY2FsbChvKSwgdyA+IHMubWFza0xlbmd0aCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PSBuLmdldFRlc3QuY2FsbChvLCB3KS5tYXRjaC5kZWYgJiYgKG0gPSAhMSksIHcgPSBQO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW0pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSByZXR1cm4gcy52YWxpZFBvc2l0aW9ucyA9IGMuZXh0ZW5kKCEwLCBbXSwgeSksIHIucmVzZXRNYXNrU2V0LmNhbGwobywgITApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICExO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdCAmJiBuLmdldFRlc3QuY2FsbChvLCBhKS5tYXRjaC5jZCA9PT0gdC5tYXRjaC5jZCAmJiAocy52YWxpZFBvc2l0aW9uc1thXSA9IGMuZXh0ZW5kKCEwLCB7fSwgdCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gci5yZXNldE1hc2tTZXQuY2FsbChvLCAhMCksIHA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0ID0ge307XG4gICAgICAgIGZ1bmN0aW9uIGkobikge1xuICAgICAgICAgICAgdmFyIGEgPSB0W25dO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gYSkgcmV0dXJuIGEuZXhwb3J0cztcbiAgICAgICAgICAgIHZhciByID0gdFtuXSA9IHtcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBlW25dKHIsIHIuZXhwb3J0cywgaSksIHIuZXhwb3J0cztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IHt9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZSwgdCA9IG47XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgICAgIH0pLCB0LmRlZmF1bHQgPSB2b2lkIDAsIGkoNzE0OSksIGkoMzE5NCksIGkoOTMwMiksIGkoNDAxMyksIGkoMzg1MSksIGkoMjE5KSwgaSgyMDcpLCBcbiAgICAgICAgICAgIGkoNTI5Nik7XG4gICAgICAgICAgICB2YXIgYSA9ICgoZSA9IGkoMjM5NCkpICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZVxuICAgICAgICAgICAgfSkuZGVmYXVsdDtcbiAgICAgICAgICAgIHQuZGVmYXVsdCA9IGE7XG4gICAgICAgIH0oKSwgbjtcbiAgICB9KCk7XG59KSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIm1vZGFsRXZlbnRzIiwicGhvbmVNYXNrIiwic2VuZEZvcm0iLCJ2YWxpZGF0ZUZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJmb3JtcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwibW9kYWxCdXR0b25DbG9zZSIsIm1vZGFsIiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNob3dNb2RhbCIsInJlbW92ZSIsImFkZCIsInNldFRpbWVvdXQiLCJjbG9zZSIsIlBIT05FX01BU0siLCJJbnB1dG1hc2siLCJwaG9uZUlucHV0cyIsImltIiwibWFzayIsIlNFUlZFUl9OT1RfRk9VTkQiLCJST1VURVMiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic3RhdHVzIiwiZmV0Y2giLCJSRU1PVEVfSE9TVCIsIlJFR0lTVFJBVElPTiIsIm1ldGhvZCIsIkZvcm1EYXRhIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJfZGF0YSRmaWVsZHMiLCJpbm5lclRleHQiLCJmaWVsZHMiLCJpbnB1dE5hbWUiLCJyZXNldCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJFTUFJTF9SRUciLCJWQUxJREFURV9NRVNTQUdFIiwiZm9ybUZpZWxkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ2YWxpZGF0ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJmb3JtRmllbGQiLCJ2YWx1ZSIsImZpZWxkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJuYW1lIiwibGVuZ3RoIiwic2V0RXJyb3JNZXNzYWdlIiwiTkFNRSIsInJlZ2V4IiwidGVzdCIsIkVNQUlMIiwiaW5jbHVkZXMiLCJQSE9ORSIsIk1FU1NBR0UiLCJlcnIiLCJmIiwiZXJyTWVzc2FnZSIsIkhPU1QiLCJQSU5HIl0sInNvdXJjZVJvb3QiOiIifQ==