/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/components/EditForm.js":
/*!***************************************!*\
  !*** ./app/js/components/EditForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditForm: () => (/* binding */ EditForm)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Settings.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Input.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Select.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Message.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/CollapsableCategory.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Block.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/toolbar/Toolbar.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/common/NekoBusyOverlay.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/tabs/Tabs.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_contexts_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/contexts/core */ "./app/js/contexts/core.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./app/js/hooks/index.js");
/* harmony import */ var _ui_CodeEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/CodeEditor */ "./app/js/components/ui/CodeEditor.js");
/* harmony import */ var _ui_ReadCommentsButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ReadCommentsButton */ "./app/js/components/ui/ReadCommentsButton.js");
/* harmony import */ var _ui_QueryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/QueryButton */ "./app/js/components/ui/QueryButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_light.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;












var pngWand = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_3__.pluginUrl, "/images/wand.png");
var StyledSyntaxHighlighter = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0px;\n  border: 1px solid #e0e0e0;\n  max-height: 140px;\n  margin-top: 5px;\n\n  code, pre {\n    font-size: 13px;\n    font-weight: 500;\n    background: none;\n    padding: 0px !important;\n    overflow-x: hidden !important;\n  }\n"])));
var EditForm = function EditForm(_ref) {
  var _ref2, _editSnippet$function, _editSnippet$function2, _editSnippet$function3, _editSnippet$function14, _editSnippet$function15;
  var _ref$isInline = _ref.isInline,
    isInline = _ref$isInline === void 0 ? false : _ref$isInline,
    onClose = _ref.onClose,
    busy = _ref.busy,
    isSavable = _ref.isSavable,
    onSave = _ref.onSave,
    editSnippet = _ref.editSnippet,
    setEditSnippet = _ref.setEditSnippet;
  var _useSnippets = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_4__.useSnippets)({
      onRanSnippet: function onRanSnippet(result) {
        return console.log((0,_neko_ui__WEBPACK_IMPORTED_MODULE_10__.embedVars)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SUCCESSFULLY_RAN, result));
      },
      onTestedSnippet: function onTestedSnippet(result) {
        return onResultRunTest(result);
      },
      onError: setFunctionMessage
    }),
    onRunTestOnFunctionSnippet = _useSnippets.onRunTestOnFunctionSnippet,
    isProcessing = _useSnippets.isProcessing;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    functionMessage = _useState2[0],
    setFunctionMessage = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    functionLogs = _useState4[0],
    setFunctionLogs = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    functionCurrentTestArg = _useState6[0],
    setFunctionCurrentTestArg = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    displayQuery = _useState8[0],
    setDisplayQuery = _useState8[1];
  var isFunction = (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.scope) === 'function';
  var isPhpFunction = isFunction && (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) === 'php';
  var isJsFunction = isFunction && (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) === 'js';
  var isInterval = (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.scope) === 'scheduled';
  var hasArguments = (_ref2 = (editSnippet === null || editSnippet === void 0 || (_editSnippet$function = editSnippet.functionArgs) === null || _editSnippet$function === void 0 ? void 0 : _editSnippet$function.length) > 0 && !((editSnippet === null || editSnippet === void 0 || (_editSnippet$function2 = editSnippet.functionArgs) === null || _editSnippet$function2 === void 0 ? void 0 : _editSnippet$function2.length) === 1 && (editSnippet === null || editSnippet === void 0 || (_editSnippet$function3 = editSnippet.functionArgs) === null || _editSnippet$function3 === void 0 ? void 0 : _editSnippet$function3[0]) === "")) !== null && _ref2 !== void 0 ? _ref2 : false;
  var onClickRunTest = function onClickRunTest() {
    var time = new Date().toLocaleTimeString();
    setFunctionLogs([{
      message: '[' + time + '] Running test...',
      color: 'white'
    }]);
    if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) === 'js') {
      try {
        var _editSnippet$function4;
        // Remove <script> tags if present
        var code = editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code.replace(/<script>|<\/script>/g, '').trim();

        // Create a new function from the code
        var func = new Function("\n          ".concat(code, "\n          return ").concat(editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionName, ";\n        "))();

        // Prepare arguments
        var args = (editSnippet === null || editSnippet === void 0 || (_editSnippet$function4 = editSnippet.functionArgs) === null || _editSnippet$function4 === void 0 ? void 0 : _editSnippet$function4.map(function (arg) {
          var _editSnippet$function5, _editSnippet$function6;
          return (editSnippet === null || editSnippet === void 0 || (_editSnippet$function5 = editSnippet.functionArgsDict) === null || _editSnippet$function5 === void 0 || (_editSnippet$function5 = _editSnippet$function5[arg]) === null || _editSnippet$function5 === void 0 ? void 0 : _editSnippet$function5.input) || (editSnippet === null || editSnippet === void 0 || (_editSnippet$function6 = editSnippet.functionArgsDict) === null || _editSnippet$function6 === void 0 || (_editSnippet$function6 = _editSnippet$function6[arg]) === null || _editSnippet$function6 === void 0 ? void 0 : _editSnippet$function6["default"]) || null;
        })) || [];

        // Execute the function and capture console.log
        var logs = [];
        var originalLog = console.log;
        console.log = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          logs.push(args.join(' '));
          originalLog.apply(console, args);
        };
        var result = func.apply(void 0, _toConsumableArray(args));

        // Restore original console.log
        console.log = originalLog;

        // Combine function logs and result
        var combinedResult = [].concat(logs, [JSON.stringify(result)]);
        onResultRunTest({
          "return": combinedResult
        });
      } catch (error) {
        onResultRunTest({
          error: error.toString()
        });
      }
    } else {
      // PHP
      onRunTestOnFunctionSnippet({
        code: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code,
        name: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionName,
        args: (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionArgs) || [],
        values: (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionArgsDict) || {}
      });
    }
  };
  var onResultRunTest = function onResultRunTest(result) {
    var time = new Date().toLocaleTimeString();
    if (result !== null && result !== void 0 && result.error) {
      setFunctionLogs([].concat(_toConsumableArray(functionLogs), [{
        message: '[' + time + '] ' + result.error,
        color: '#ffce44'
      }]));
      return;
    }
    var logs = result["return"].map(function (v) {
      return {
        message: '[' + time + '] ' + v,
        color: '#00ff51'
      };
    });
    setFunctionLogs([].concat(_toConsumableArray(functionLogs), _toConsumableArray(logs)));
  };
  var _useCoreContext = (0,_app_contexts_core__WEBPACK_IMPORTED_MODULE_1__.useCoreContext)(),
    actions = _useCoreContext.actions;
  var getOption = actions.getOption;
  var modalOnSave = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(snippet) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return onSave(snippet);
          case 2:
            onClose();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function modalOnSave(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (isFunction && editSnippet !== null && editSnippet !== void 0 && editSnippet.code) {
      if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) === 'js') {
        return;
      } else if (!(editSnippet !== null && editSnippet !== void 0 && editSnippet.functionTarget)) {
        setEditSnippet(function (prevSnippet) {
          return _objectSpread(_objectSpread({}, prevSnippet), {}, {
            functionTarget: 'php'
          });
        });
      }
      var code = editSnippet.code;
      code = code.replace(/^<\?php\s/, '');
      code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
      code = code.trim().replace(/\n/g, '');
      var func = code.match(/^function\s+(\w+)\s*\((.*?)\)\s*{([\s\S]*)}\s*$/);
      if (func) {
        var _func = _slicedToArray(func, 4),
          _2 = _func[0],
          name = _func[1],
          args = _func[2],
          body = _func[3];
        setEditSnippet(function (prevSnippet) {
          return _objectSpread(_objectSpread({}, prevSnippet), {}, {
            functionName: name,
            functionNotValid: false,
            functionArgs: args.split(',').map(function (v) {
              return v.trim();
            }),
            name: (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.name) || name
          });
        });
        setFunctionMessage(false);
      } else {
        setFunctionMessage('Invalid PHP Function.');
        setEditSnippet(function (prevSnippet) {
          return _objectSpread(_objectSpread({}, prevSnippet), {}, {
            functionNotValid: true,
            functionArgs: [],
            name: ''
          });
        });
      }
    }
  }, [editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code, isFunction, editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget]);
  useEffect(function () {
    if (isFunction && editSnippet !== null && editSnippet !== void 0 && editSnippet.code) {
      if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) === 'php') {
        return;
      }
      var code = editSnippet.code;
      code = code.replace(/^<script>\s*/, '').replace(/\s*<\/script>$/, '');
      code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
      code = code.trim();

      // Match both function declarations and arrow functions, ensuring they span the entire code
      var func = code.match(/^(function\s+(\w+)\s*\((.*?)\)\s*{([\s\S]*)})\s*$|^(const|let|var)?\s*(\w+)\s*=\s*(\((.*?)\)|(\w+))\s*=>\s*({([\s\S]*)}|\S.*)\s*$/);
      if (func && func[0] === code) {
        var name, args, body;
        if (func[1]) {
          // Regular function
          var _func2 = _slicedToArray(func, 5);
          _ = _func2[0];
          _ = _func2[1];
          name = _func2[2];
          args = _func2[3];
          body = _func2[4];
        } else {
          // Arrow function
          var _func3 = _slicedToArray(func, 10);
          _ = _func3[0];
          _ = _func3[1];
          _ = _func3[2];
          _ = _func3[3];
          _ = _func3[4];
          _ = _func3[5];
          name = _func3[6];
          _ = _func3[7];
          var _func3$ = _func3[8];
          args = _func3$ === void 0 ? func[9] : _func3$;
          var _func3$2 = _func3[9];
          body = _func3$2 === void 0 ? func[10] || func[11] : _func3$2;
        }
        setEditSnippet(function (prevSnippet) {
          return _objectSpread(_objectSpread({}, prevSnippet), {}, {
            functionName: name,
            functionNotValid: false,
            functionArgs: args ? args.split(',').map(function (v) {
              return v.trim();
            }) : [],
            name: (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.name) || name
          });
        });
        setFunctionMessage(false);
      } else {
        setFunctionMessage('Invalid JavaScript Function. Ensure the function is the only code present.');
        setEditSnippet(function (prevSnippet) {
          return _objectSpread(_objectSpread({}, prevSnippet), {}, {
            functionNotValid: true,
            functionArgs: [],
            name: ''
          });
        });
      }
    }
  }, [editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code, isFunction, editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget]);
  useEffect(function () {
    if (isFunction) {
      setEditSnippet(function (prevSnippet) {
        return _objectSpread(_objectSpread({}, prevSnippet), {}, {
          name: (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.name) || (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionName)
        });
      });
    }
  }, [editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.name, editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionName, isFunction]);

  //ensure the time is > 0 if type interval
  useEffect(function () {
    if (isInterval && (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.intervalTime) <= 0) {
      setEditSnippet(function (prevSnippet) {
        return _objectSpread(_objectSpread({}, prevSnippet), {}, {
          intervalTime: 1
        });
      });
    }
  }, [editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.intervalTime, isInterval]);
  var renderSettings = function renderSettings(title, children) {
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoSettings, {
      title: title,
      style: _objectSpread({
        flexDirection: 'column'
      }, style)
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, {
      tiny: true
    }), children);
  };
  var renderSnippetParams = function renderSnippetParams() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.NAME, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "name",
      disabled: busy,
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.name,
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          name: value
        }));
      }
    })), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.DESCRIPTION, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "description",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.description,
      disabled: busy,
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          description: value
        }));
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: 10
      }
    }, renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TYPE, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
      fullWidth: true,
      name: "scope",
      scrolldown: true,
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.scope,
      disabled: busy,
      onChange: function onChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          scope: value
        }));
      }
    }, _app_consts__WEBPACK_IMPORTED_MODULE_2__.editorScopes.map(function (v) {
      return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
        key: v.value,
        id: v.value,
        value: v.value,
        label: v.label
      });
    })), {
      marginTop: 0,
      flex: '1 1 135px',
      minWidth: 0
    }), isFunction && renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TARGET, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
      fullWidth: true,
      name: "target",
      scrolldown: true,
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget,
      onChange: function onChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionTarget: value
        }));
      }
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "php",
      value: "php",
      label: "PHP (backend)"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "js",
      value: "js",
      label: "JS (frontend)"
    })), {
      marginTop: 0,
      flex: '1 1 135px',
      minWidth: 0
    }), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.PRIORITY, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "priority",
      type: "number",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.priority,
      disabled: busy,
      onBlur: function onBlur(value) {
        setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          priority: value
        }));
      }
    }), {
      marginTop: 0,
      flex: '1 1 135px',
      minWidth: 0
    })), isInterval && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        marginBottom: 10
      }
    }, renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TARGET_TIME, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "interval_hours",
      type: "number",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.intervalHours,
      disabled: busy,
      max: 23,
      min: 0,
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          intervalHours: value
        }));
      },
      description: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.HOURS
    }), {
      marginTop: 0,
      flex: 1
    }), renderSettings('‎ ', /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "interval_minutes",
      type: "number",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.intervalMinutes,
      disabled: busy,
      max: 59,
      min: 0,
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          intervalMinutes: value
        }));
      },
      description: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.MINUTES
    }), {
      marginTop: 0,
      flex: 1
    })), /*#__PURE__*/React.createElement("small", null, "The action will trigger when someone visits your WordPress site if the scheduled time has passed."), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, {
      tiny: true
    })), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TAGS, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      isCommaSeparatedArray: true,
      name: "tags",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.tags,
      disabled: busy,
      onFinalChange: function onFinalChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          tags: value
        }));
      },
      description: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TAGS_DESCRIPTION
    })), isInline && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoButton, {
      className: "primary",
      disabled: busy || !isSavable,
      style: {
        marginTop: '10px'
      },
      onClick: function onClick() {
        return modalOnSave(editSnippet);
      }
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.SAVE));
  };
  var renderSnippetPublicApi = function renderSnippetPublicApi() {
    // Helper function to generate default value based on type
    var getDefaultValue = function getDefaultValue(type, defaultValue) {
      switch (type) {
        case 'boolean':
          return defaultValue === 'true';
        case 'number':
          return Number(defaultValue) || 0;
        case 'array':
          try {
            return JSON.parse(defaultValue) || [];
          } catch (_unused) {
            return [];
          }
        case 'object':
          try {
            return JSON.parse(defaultValue) || {};
          } catch (_unused2) {
            return {};
          }
        default:
          return defaultValue || '';
      }
    };

    // Generate the arguments object
    var generateArgs = function generateArgs() {
      var args = {};
      if (editSnippet !== null && editSnippet !== void 0 && editSnippet.functionArgsDict) {
        Object.entries(editSnippet.functionArgsDict).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];
          args[key.replace('$', '')] = getDefaultValue(value.type, value["default"]);
        });
      }
      return args;
    };
    var argsObject = generateArgs();
    var argsString = JSON.stringify(argsObject, null, 2);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoMessage, {
      variant: "warning"
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.PUBLIC_API_DESCRIPTION), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.ENDPOINT, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      name: "endpoint",
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.endpoint,
      onChange: function onChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          endpoint: value
        }));
      }
    })), /*#__PURE__*/React.createElement("div", null, !!(editSnippet !== null && editSnippet !== void 0 && editSnippet.endpoint) && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_17__.NekoTypo, {
      p: true
    }, (0,_neko_ui__WEBPACK_IMPORTED_MODULE_10__.toHTML)((0,_neko_ui__WEBPACK_IMPORTED_MODULE_10__.embedVars)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.ENDPOINT_URL, "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_3__.apiUrl, "/snippets-endpoint/").concat(editSnippet.endpoint))))), (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.endpoint) && (editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.endpoint.length) > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.METHOD, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
      fullWidth: true,
      name: "method",
      scrolldown: true,
      value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.method,
      onChange: function onChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          method: value
        }));
      }
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "GET",
      value: "GET",
      label: "GET"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "POST",
      value: "POST",
      label: "POST"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "PUT",
      value: "PUT",
      label: "PUT"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "DELETE",
      value: "DELETE",
      label: "DELETE"
    }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_18__.NekoCollapsableCategories, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_18__.NekoCollapsableCategory, {
      title: "Example (JS Fetch)"
    }, /*#__PURE__*/React.createElement(StyledSyntaxHighlighter, {
      language: "javascript",
      style: react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_19__["default"]
    }, "fetch(\"".concat(_app_settings__WEBPACK_IMPORTED_MODULE_3__.apiUrl, "/snippets-endpoint/").concat(editSnippet.endpoint, "\", {\n    method: \"").concat(editSnippet.method, "\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": \"Bearer YOUR_API_TOKEN\"\n    },\n    body: JSON.stringify(").concat(argsString, ")\n  })\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));"))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_18__.NekoCollapsableCategory, {
      title: "Example (CURL)"
    }, /*#__PURE__*/React.createElement(StyledSyntaxHighlighter, {
      language: "bash",
      style: react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_19__["default"]
    }, "curl -X ".concat(editSnippet.method, " \"").concat(_app_settings__WEBPACK_IMPORTED_MODULE_3__.apiUrl, "/snippets-endpoint/").concat(editSnippet.endpoint, "\" \\\n    -H \"Content-Type: application/json\" \\\n    -H \"Authorization: Bearer YOUR_API_TOKEN\" \\\n    -d '").concat(JSON.stringify(argsObject), "'"))))));
  };
  var checkValue = function checkValue(value) {
    if (!value) return;
    if (!isNaN(value)) {
      return false;
    } else if (!/^["'].*["']$/.test(value)) {
      return true;
    } else {
      return false;
    }
  };
  var jsxCheckValue = function jsxCheckValue(_ref6) {
    var arg = _ref6.arg,
      key = _ref6.key;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoMessage, {
      variant: "warning"
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.STRING_VALUE_WARNING), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 'max-content',
        left: '200px',
        bottom: '23px',
        border: '3px solid white',
        borderRadius: '5px'
      }
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoButton, {
      icon: "pencil",
      onClick: function onClick() {
        var _editSnippet$function7;
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionArgsDict: _objectSpread(_objectSpread({}, editSnippet.functionArgsDict), {}, _defineProperty({}, arg, _objectSpread(_objectSpread({}, editSnippet.functionArgsDict[arg]), {}, _defineProperty({}, key, "\"".concat((_editSnippet$function7 = editSnippet.functionArgsDict[arg]) === null || _editSnippet$function7 === void 0 ? void 0 : _editSnippet$function7[key], "\"")))))
        }));
      }
    }, " ", _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.ADD_QOUTES, " ")));
  };
  var getCurrentTestArgValue = function getCurrentTestArgValue() {
    var _editSnippet$function8, _editSnippet$function9;
    return (editSnippet === null || editSnippet === void 0 || (_editSnippet$function8 = editSnippet.functionArgsDict) === null || _editSnippet$function8 === void 0 || (_editSnippet$function8 = _editSnippet$function8[functionCurrentTestArg]) === null || _editSnippet$function8 === void 0 ? void 0 : _editSnippet$function8.input) || (editSnippet === null || editSnippet === void 0 || (_editSnippet$function9 = editSnippet.functionArgsDict) === null || _editSnippet$function9 === void 0 || (_editSnippet$function9 = _editSnippet$function9[functionCurrentTestArg]) === null || _editSnippet$function9 === void 0 ? void 0 : _editSnippet$function9["default"]) || '';
  };
  var renderFunctionArgParams = function renderFunctionArgParams(currentArg) {
    var _editSnippet$function10, _editSnippet$function11, _editSnippet$function12, _editSnippet$function13;
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.NAME, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      disabled: true,
      name: "name",
      value: currentArg
    })), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TYPE, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
      fullWidth: true,
      name: "type",
      scrolldown: true,
      value: editSnippet === null || editSnippet === void 0 || (_editSnippet$function10 = editSnippet.functionArgsDict) === null || _editSnippet$function10 === void 0 || (_editSnippet$function10 = _editSnippet$function10[currentArg]) === null || _editSnippet$function10 === void 0 ? void 0 : _editSnippet$function10.type,
      onChange: function onChange(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionArgsDict: _objectSpread(_objectSpread({}, editSnippet.functionArgsDict), {}, _defineProperty({}, currentArg, _objectSpread(_objectSpread({}, editSnippet.functionArgsDict[currentArg]), {}, {
            type: value
          })))
        }));
      }
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "string",
      value: "string",
      label: "String"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "number",
      value: "number",
      label: "Number"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "boolean",
      value: "boolean",
      label: "Boolean"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "array",
      value: "array",
      label: "Array"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "object",
      value: "object",
      label: "Object"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      id: "mixed",
      value: "mixed",
      label: "Mixed"
    }))), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.DESCRIPTION, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      disabled: busy,
      name: "desc",
      value: editSnippet === null || editSnippet === void 0 || (_editSnippet$function11 = editSnippet.functionArgsDict) === null || _editSnippet$function11 === void 0 || (_editSnippet$function11 = _editSnippet$function11[currentArg]) === null || _editSnippet$function11 === void 0 ? void 0 : _editSnippet$function11.desc,
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionArgsDict: _objectSpread(_objectSpread({}, editSnippet.functionArgsDict), {}, _defineProperty({}, currentArg, _objectSpread(_objectSpread({}, editSnippet.functionArgsDict[currentArg]), {}, {
            desc: value
          })))
        }));
      }
    })), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.DEFAULT_VALUE, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
      disabled: busy,
      name: "default",
      value: editSnippet === null || editSnippet === void 0 || (_editSnippet$function12 = editSnippet.functionArgsDict) === null || _editSnippet$function12 === void 0 || (_editSnippet$function12 = _editSnippet$function12[currentArg]) === null || _editSnippet$function12 === void 0 ? void 0 : _editSnippet$function12["default"],
      onBlur: function onBlur(value) {
        return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionArgsDict: _objectSpread(_objectSpread({}, editSnippet.functionArgsDict), {}, _defineProperty({}, currentArg, _objectSpread(_objectSpread({}, editSnippet.functionArgsDict[currentArg]), {}, {
            "default": value
          })))
        }));
      }
    })), !getOption('sanitize_arguments', true) && checkValue(editSnippet === null || editSnippet === void 0 || (_editSnippet$function13 = editSnippet.functionArgsDict) === null || _editSnippet$function13 === void 0 || (_editSnippet$function13 = _editSnippet$function13[currentArg]) === null || _editSnippet$function13 === void 0 ? void 0 : _editSnippet$function13["default"]) && jsxCheckValue({
      arg: currentArg,
      key: 'default'
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isInline ? 'column' : 'row',
      gap: '15px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '2',
      minWidth: '300px',
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '71vh',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_20__.NekoBlock, {
    busy: busy,
    style: {
      maxHeight: '100%',
      overflow: 'auto',
      flex: 'auto',
      marginBottom: 0
    }
  }, isFunction && functionMessage && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoMessage, {
    variant: "danger"
  }, "\u26A0\uFE0F ", functionMessage), /*#__PURE__*/React.createElement(_ui_CodeEditor__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
    isModal: !isInline,
    code: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code,
    snippet: editSnippet,
    setCode: function setCode(value) {
      return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        code: value
      }));
    },
    setFunctionError: function setFunctionError(value) {
      if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionError) !== value) {
        setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
          functionError: value
        }));
      }
    }
  })), getOption('ai_suggestions', false) && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, displayQuery && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_20__.NekoBlock, {
    style: {
      marginTop: 15
    }
  }, /*#__PURE__*/React.createElement(_ui_QueryButton__WEBPACK_IMPORTED_MODULE_7__.QueryButton, {
    snippet: editSnippet,
    close: function close() {
      return setDisplayQuery(false);
    },
    setCode: function setCode(value) {
      setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        externalCode: value
      }));
    }
  })), !displayQuery && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_21__.NekoToolbar, {
    style: {
      display: 'flex',
      marginTop: 15
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoButton, {
    className: "primary",
    disabled: busy,
    onClick: function onClick() {
      return setDisplayQuery(!displayQuery);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: pngWand,
    alt: "Wand",
    style: {
      width: '20px',
      height: '20px',
      marginRight: '5px'
    }
  }), "Query AI"), /*#__PURE__*/React.createElement(_ui_ReadCommentsButton__WEBPACK_IMPORTED_MODULE_6__.ReadCommentsButton, {
    code: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.code,
    setCode: function setCode(value) {
      return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        externalCode: value
      }));
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_22__["default"], {
    style: {
      flex: '1',
      minWidth: '300px',
      maxWidth: '100%',
      maxHeight: '800px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_23__.NekoTabs, {
    inversed: true,
    keepTabOnReload: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_23__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.LABEL,
    key: "snippet"
  }, renderSnippetParams()), isFunction && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_23__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.FUNCTION,
    key: "function"
  }, renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.NAME, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
    name: "name",
    disabled: true,
    value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionName,
    onChange: function onChange(value) {
      return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        functionName: value
      }));
    }
  })), renderSettings(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.BEHAVIOR, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
    fullWidth: true,
    name: "behavior",
    scrolldown: true,
    value: editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionBehavior,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET[editSnippet !== null && editSnippet !== void 0 && editSnippet.functionBehavior ? "BEHAVIOR_".concat(editSnippet.functionBehavior.toUpperCase()) : 'BEHAVIOR_DYNAMIC'],
    onChange: function onChange(value) {
      return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        functionBehavior: value
      }));
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
    id: "dynamic",
    value: "dynamic",
    label: "Dynamic"
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
    id: "static",
    value: "static",
    label: "Static"
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_18__.NekoCollapsableCategories, null, editSnippet === null || editSnippet === void 0 || (_editSnippet$function14 = editSnippet.functionArgs) === null || _editSnippet$function14 === void 0 ? void 0 : _editSnippet$function14.map(function (arg) {
    if (arg === '') {
      return null;
    } else if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.functionTarget) !== 'js' && arg[0] !== '$') {
      return null;
    }
    return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_18__.NekoCollapsableCategory, {
      key: arg,
      title: arg
    }, renderFunctionArgParams(arg));
  })), !hasArguments && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoMessage, {
    variant: "info"
  }, "No parameters in the function")), isFunction && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_23__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TEST,
    key: "test"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoButton, {
    className: "primary",
    disabled: busy || isProcessing,
    style: {
      width: '100%'
    },
    onClick: onClickRunTest
  }, "Run Test"), /*#__PURE__*/React.createElement("div", {
    style: _app_consts__WEBPACK_IMPORTED_MODULE_2__.LogsStyles
  }, functionLogs.map(function (log, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        color: log === null || log === void 0 ? void 0 : log.color
      }
    }, log === null || log === void 0 ? void 0 : log.message);
  })), hasArguments && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSelect, {
    fullWidth: true,
    name: "function_test_args",
    scrolldown: true,
    value: functionCurrentTestArg,
    onChange: function onChange(value) {
      return setFunctionCurrentTestArg(value);
    }
  }, editSnippet === null || editSnippet === void 0 || (_editSnippet$function15 = editSnippet.functionArgs) === null || _editSnippet$function15 === void 0 ? void 0 : _editSnippet$function15.map(function (v) {
    return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoOption, {
      key: v,
      id: v,
      value: v,
      label: v
    });
  })), functionCurrentTestArg && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, {
    tiny: true
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoInput, {
    name: "test_arg_value",
    value: getCurrentTestArgValue(),
    onChange: function onChange(value) {
      return setEditSnippet(_objectSpread(_objectSpread({}, editSnippet), {}, {
        functionArgsDict: _objectSpread(_objectSpread({}, editSnippet.functionArgsDict), {}, _defineProperty({}, functionCurrentTestArg, _objectSpread(_objectSpread({}, editSnippet.functionArgsDict[functionCurrentTestArg]), {}, {
          input: value
        })))
      }));
    }
  }), !getOption('sanitize_arguments', true) && checkValue(getCurrentTestArgValue()) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), jsxCheckValue({
    arg: functionCurrentTestArg,
    key: 'input'
  })))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoMessage, {
    variant: "info"
  }, (0,_neko_ui__WEBPACK_IMPORTED_MODULE_10__.toHTML)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TEST_PARAMETERS_DESCRIPTION_LOG), hasArguments && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), (0,_neko_ui__WEBPACK_IMPORTED_MODULE_10__.toHTML)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TEST_PARAMETERS_DESCRIPTION_ARG))))), getOption('api_endpoint', false) && isFunction && !isJsFunction && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_23__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.PUBLIC_API,
    key: "public_api"
  }, renderSnippetPublicApi())))));
};

/***/ }),

/***/ "./app/js/components/MainScreen.js":
/*!*****************************************!*\
  !*** ./app/js/components/MainScreen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/NekoUI.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Page.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Header.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Wrapper.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_components_SnippetsScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/SnippetsScreen */ "./app/js/components/SnippetsScreen.js");
/* harmony import */ var _app_components_SettingsScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/SettingsScreen */ "./app/js/components/SettingsScreen.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useState = wp.element.useState;




var MainScreen = function MainScreen() {
  var _useState = useState('snippets'),
    _useState2 = _slicedToArray(_useState, 2),
    screen = _useState2[0],
    setScreen = _useState2[1];
  return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoPage, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoHeader, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.HEADER_TITLE
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    className: "header",
    icon: "dashboard",
    onClick: function onClick() {
      return setScreen('snippets');
    }
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    className: "header",
    icon: "tools",
    onClick: function onClick() {
      return setScreen('settings');
    }
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoColumn, null, screen === 'snippets' && /*#__PURE__*/React.createElement(_app_components_SnippetsScreen__WEBPACK_IMPORTED_MODULE_1__["default"], null), screen === 'settings' && /*#__PURE__*/React.createElement(_app_components_SettingsScreen__WEBPACK_IMPORTED_MODULE_2__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainScreen);

/***/ }),

/***/ "./app/js/components/OptionsInspector.js":
/*!***********************************************!*\
  !*** ./app/js/components/OptionsInspector.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsInspector: () => (/* binding */ OptionsInspector)
/* harmony export */ });
/* harmony import */ var _textea_json_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @textea/json-viewer */ "./node_modules/@textea/json-viewer/dist/index.mjs");
/* harmony import */ var _app_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/requests */ "./app/js/requests.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/TextArea.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect,
  useCallback = _wp$element.useCallback;




var OptionsInspector = function OptionsInspector(_ref) {
  _objectDestructuringEmpty(_ref);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    functions = _useState2[0],
    setFunctions = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isFetching = _useState4[0],
    setIsFetching = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isRawEdit = _useState6[0],
    setIsRawEdit = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    newTextAreaValue = _useState8[0],
    setNewTextAreaValue = _useState8[1];
  var refreshFunctions = useCallback(function () {
    (0,_app_requests__WEBPACK_IMPORTED_MODULE_1__.fetchRawFunctions)().then(function (data) {
      setFunctions(data);
      setNewTextAreaValue(JSON.stringify(data, null, 2));
      console.log(data);
    })["catch"](function (err) {
      console.error(err);
    })["finally"](function () {
      setIsFetching(false);
    });
  }, []);
  useEffect(function () {
    refreshFunctions();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isRawEdit && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTextArea, {
    textAreaStyle: {
      height: 380
    },
    value: newTextAreaValue,
    onChange: function onChange(e) {
      setNewTextAreaValue(e);
    },
    style: {
      height: '100%',
      width: '100%',
      minHeight: 380
    }
  }), !isRawEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      overflow: 'auto',
      maxHeight: 380
    }
  }, isFetching && /*#__PURE__*/React.createElement("i", {
    style: {
      color: 'gray'
    }
  }, "Loading..."), !isFetching && !functions && /*#__PURE__*/React.createElement("i", {
    style: {
      color: 'gray'
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].COMMON.DATA_NOT_AVAILABLE), !isFetching && functions && /*#__PURE__*/React.createElement(_textea_json_viewer__WEBPACK_IMPORTED_MODULE_0__.JsonViewer, {
    value: functions,
    rootName: "functions",
    indentWidth: 2,
    displayDataTypes: false,
    displayObjectSize: false,
    displayArrayKey: false,
    enableClipboard: false,
    style: {
      fontSize: 12
    }
  })), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoButton, {
    className: "secondary",
    onClick: function onClick() {
      return setIsRawEdit(!isRawEdit);
    }
  }, isRawEdit ? _app_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].COMMON.CANCEL : _app_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].SETTINGS.DEVELOPERS.RAW_EDIT), isRawEdit && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoButton, {
    onClick: function onClick() {
      (0,_app_requests__WEBPACK_IMPORTED_MODULE_1__.updateRawFunctions)(newTextAreaValue).then(function () {
        alert("Functions updated.");
        refreshFunctions();
        setIsRawEdit(false);
      })["catch"](function (err) {
        alert("Error while updating functions. Please check your console.");
        console.error(err);
      });
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_2__["default"].COMMON.UPDATE));
};


/***/ }),

/***/ "./app/js/components/SettingsScreen.js":
/*!*********************************************!*\
  !*** ./app/js/components/SettingsScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_contexts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/contexts/core */ "./app/js/contexts/core.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/tabs/Tabs.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Wrapper.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Block.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Settings.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/CheckboxGroup.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Checkbox.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Pill.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Input.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Log.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks */ "./app/js/hooks/index.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _app_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/requests */ "./app/js/requests.js");
/* harmony import */ var _OptionsInspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OptionsInspector */ "./app/js/components/OptionsInspector.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useState = wp.element.useState;








var SettingsTab = function SettingsTab() {
  var _useCoreContext = (0,_app_contexts_core__WEBPACK_IMPORTED_MODULE_0__.useCoreContext)(),
    actions = _useCoreContext.actions,
    state = _useCoreContext.state;
  var getOption = actions.getOption,
    updateOption = actions.updateOption,
    resetOptions = actions.resetOptions,
    refreshOptions = actions.refreshOptions;
  var isLoading = state.isLoading;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    busyMaintenance = _useState2[0],
    setBusyMaintenance = _useState2[1];
  var _useSnippets = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useSnippets)({
      onError: function onError(err) {
        return alert("⚠️ " + err);
      }
    }),
    onImportCodeSnippets = _useSnippets.onImportCodeSnippets,
    isProcessing = _useSnippets.isProcessing;
  var hasAI = getOption('ai_engine_status', false);
  var database_inspection = getOption('database_inspection', false);
  var busy = isLoading || busyMaintenance || isProcessing;
  return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoTabs, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.TITLE
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoColumn, {
    minimal: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoBlock, {
    busy: busy,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.PREFERENCES.TITLE,
    className: "primary"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.PREFERENCES.CODE_PREVIEW
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "ui_show_preview",
    disabled: busy,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.PREFERENCES.CODE_PREVIEW_DESCRIPTION,
    value: "1",
    checked: getOption('ui_show_preview', false),
    onChange: updateOption
  })))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoBlock, {
    busy: busy,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.MAINTENANCE,
    className: "primary"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoTypo, {
    h4: true
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "danger",
    onClick: resetOptions
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.RESET_SETTINGS), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "primary",
    onClick: refreshOptions
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.REFRESH_SETTINGS)), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSpacer, null), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoTypo, {
    h4: true
  }, "Snippets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0px'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "danger",
    onClick: function onClick() {
      return (0,_app_requests__WEBPACK_IMPORTED_MODULE_4__.importOptionsAndSnippets)(setBusyMaintenance);
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.IMPORT_SETTINGS), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "primary",
    onClick: function onClick() {
      return (0,_app_requests__WEBPACK_IMPORTED_MODULE_4__.exportOptionsAndSnippets)(setBusyMaintenance);
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.EXPORT_SETTINGS)), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoSpacer, {
    tiny: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0px'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "secondary",
    onClick: onImportCodeSnippets,
    busy: busy
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SNIPPET.IMPORT_CODE_SNIPPETS)))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoColumn, {
    minimal: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoBlock, {
    busy: busy,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.AI_PARAMETERS.TITLE,
    className: "primary",
    action: /*#__PURE__*/React.createElement(React.Fragment, null, hasAI && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoPill, {
      className: "success",
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.AI_PARAMETERS.AI_ENGINE_INSTALLED
    }), !hasAI && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoPill, {
      className: "warning",
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.AI_PARAMETERS.DOWNLOAD_AI_ENGINE,
      link: "https://meowapps.com/ai-engine/"
    }))
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.AI_PARAMETERS.AI_SUGGESTIONS
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "ai_suggestions",
    disabled: busy || !hasAI,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.AI_PARAMETERS.AI_SUGGESTIONS_DESCRIPTION,
    value: "1",
    checked: getOption('ai_suggestions', false),
    onChange: updateOption
  })))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoBlock, {
    busy: busy,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.TITLE,
    className: "primary"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.SANITIZE_ARGS
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "sanitize_arguments",
    disabled: busy,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE_RECOMMENDED,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.SANITIZE_ARGS_DESCRIPTION,
    value: "1",
    checked: getOption('sanitize_arguments', true),
    onChange: updateOption
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.DATABASE_INSPECTION
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "database_inspection",
    disabled: busy,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.DATABASE_INSPECTION_DESCRIPTION,
    value: "1",
    checked: getOption('database_inspection', false),
    onChange: updateOption
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.LOGS
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "server_debug_mode",
    disabled: busy,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.LOGS_DESCRIPTION,
    value: "1",
    checked: getOption('server_debug_mode', false),
    onChange: updateOption
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.PREFERENCES.PUBLIC_API
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoCheckbox, {
    name: "api_endpoint",
    disabled: busy,
    label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ENABLE,
    description: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.PREFERENCES.SNIPPET_ENDPOINT_DESCRIPTION,
    value: "1",
    checked: getOption('api_endpoint', false),
    onChange: updateOption
  }))), getOption('api_endpoint', false) && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSettings, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SNIPPET.TOKEN
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoInput, {
    style: {
      flex: 1
    },
    name: "api_token",
    value: getOption('api_token', ''),
    onBlur: updateOption
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    rounded: true,
    icon: "replay",
    onClick: function onClick() {
      return updateOption((0,_app_helpers__WEBPACK_IMPORTED_MODULE_3__.generate_random_token)(), 'api_token');
    }
  })))), getOption('server_debug_mode', false) && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_17__.NekoLog, {
    refreshQuery: _app_requests__WEBPACK_IMPORTED_MODULE_4__.refreshLogs,
    clearQuery: _app_requests__WEBPACK_IMPORTED_MODULE_4__.clearLogs,
    i18n: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]
  })))), database_inspection && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoTab, {
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.DEVELOPERS.DATABASE_INSPECTION
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoColumn, {
    minimal: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoBlock, {
    busy: busy,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SNIPPET.SCOPES.FUNCTION,
    className: "primary"
  }, /*#__PURE__*/React.createElement(_OptionsInspector__WEBPACK_IMPORTED_MODULE_5__.OptionsInspector, null))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoColumn, {
    minimal: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsTab);

/***/ }),

/***/ "./app/js/components/SnippetTable.js":
/*!*******************************************!*\
  !*** ./app/js/components/SnippetTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnippetTable: () => (/* binding */ SnippetTable)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Tooltip.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Switch.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/common/NekoBusyOverlay.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/table/Table.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");
/* harmony import */ var _ui_Snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/Snippet */ "./app/js/components/ui/Snippet.js");
/* harmony import */ var _ui_Scopes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/Scopes */ "./app/js/components/ui/Scopes.js");
/* harmony import */ var _ui_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Tags */ "./app/js/components/ui/Tags.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useMemo = _wp$element.useMemo;








var svgCallable = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_5__.pluginUrl, "/images/callable.svg");
var svgGlobalBack = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_5__.pluginUrl, "/images/global-back.svg");
var svgGlobalFront = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_5__.pluginUrl, "/images/global-front.svg");
var svgGlobalFrontBack = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_5__.pluginUrl, "/images/global-front-back.svg");
var svgScheduled = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_5__.pluginUrl, "/images/scheduled.svg");
var EndpointIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 10px;\n  padding: 2px 5px;\n  border-radius: 3px;\n  border: 1px solid black;\n  color: black;\n"])));
var SnippetIcon = function SnippetIcon(_ref) {
  var snippet = _ref.snippet,
    onClick = _ref.onClick;
  var active = snippet.active === '1';
  var scope = snippet.scope;
  var icon = svgGlobalFrontBack;
  var style = {
    width: 36,
    height: 36,
    cursor: 'pointer'
  };
  if (scope === 'persistent') {
    icon = svgGlobalFrontBack;
  } else if (scope === 'frontend') {
    icon = svgGlobalFront;
  } else if (scope === 'backend') {
    icon = svgGlobalBack;
  } else if (scope === 'function') {
    icon = svgCallable;
  } else if (scope === 'scheduled') {
    icon = svgScheduled;
  } else {
    console.warn("Snippet Vault: The scope \"".concat(scope, "\" is not supported."));
  }
  if (!active) {
    style = _objectSpread(_objectSpread({}, style), {}, {
      filter: 'grayscale(100%)',
      opacity: 0.5
    });
  }
  return /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: scope,
    style: style,
    onClick: onClick
  });
};
var SnippetTable = function SnippetTable(props) {
  var busy = props.busy,
    snippets = props.snippets,
    tags = props.tags,
    _props$toHide = props.toHide,
    toHide = _props$toHide === void 0 ? [] : _props$toHide,
    tableFilters = props.tableFilters,
    useInlineEditor = props.useInlineEditor;
  var onEditSnippet = props.onEditSnippet,
    onImportCodeSnippets = props.onImportCodeSnippets,
    onSave = props.onSave,
    onDelete = props.onDelete,
    onDuplicate = props.onDuplicate;
  var setTableFilters = props.setTableFilters,
    currentScope = props.currentScope;
  var sort = tableFilters.sort;
  var _useState = useState([{
      accessor: 'snippet',
      value: []
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFilters = _useState2[0],
    setSelectedFilters = _useState2[1];
  var handleSortChange = function handleSortChange(accessor, by) {
    setTableFilters(_objectSpread(_objectSpread({}, tableFilters), {}, {
      sort: {
        accessor: accessor,
        by: by
      }
    }));
  };
  var handleFilterChange = function handleFilterChange(accessor, value) {
    setSelectedFilters([].concat(_toConsumableArray(selectedFilters.filter(function (v) {
      return v.accessor !== accessor;
    })), [{
      accessor: accessor,
      value: value
    }]));
    setTableFilters(_objectSpread(_objectSpread({}, tableFilters), {}, {
      page: 1,
      filters: [].concat(_toConsumableArray(tableFilters.filters.filter(function (v) {
        return v.accessor !== accessor;
      })), [{
        accessor: accessor,
        value: value
      }])
    }));
  };
  var data = useMemo(function () {
    if (!snippets) return [];
    return snippets.map(function (snippet) {
      var hasEndpoint = snippet.endpoint && snippet.method;
      var endpoint = hasEndpoint ? /*#__PURE__*/React.createElement(React.Fragment, null, _app_settings__WEBPACK_IMPORTED_MODULE_5__.apiUrl, "/snippets-endpoint/", /*#__PURE__*/React.createElement("strong", null, snippet.endpoint)) : '';
      return {
        id: snippet.id,
        status: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(SnippetIcon, {
          snippet: snippet,
          onClick: function onClick() {
            return onEditSnippet(snippet);
          }
        })),
        attributes: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(_ui_Scopes__WEBPACK_IMPORTED_MODULE_2__.ScopeLabel, {
          scope: snippet.scope
        }), hasEndpoint && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoTooltip, {
          position: "top",
          text: snippet.method + ' /' + snippet.endpoint
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 3,
            cursor: 'pointer'
          }
        }, /*#__PURE__*/React.createElement(EndpointIcon, null, "API")))),
        snippet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_ui_Snippet__WEBPACK_IMPORTED_MODULE_1__.Snippet, {
          snippet: snippet,
          onEditClick: function onEditClick() {
            return onEditSnippet(snippet);
          }
        }), /*#__PURE__*/React.createElement(_ui_Tags__WEBPACK_IMPORTED_MODULE_3__.Tags, {
          tags: snippet.tags
        })),
        functionName: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            marginTop: 0
          }
        }, snippet.functionName)),
        endpoint: /*#__PURE__*/React.createElement("div", null, endpoint && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EndpointIcon, null, snippet.method), " ", /*#__PURE__*/React.createElement("small", null, endpoint))),
        enabled: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoSwitch, {
          small: true,
          onLabel: '',
          offLabel: '',
          onValue: "1",
          offValue: "0",
          width: "34px",
          style: {
            marginRight: 2
          },
          checked: snippet.active === '1',
          onChange: function onChange(value) {
            return onSave(_objectSpread(_objectSpread({}, snippet), {}, {
              active: value
            }));
          }
        }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
          rounded: true,
          icon: "trash",
          title: _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.DELETE,
          className: "danger",
          style: {
            margin: 2
          },
          onClick: function onClick() {
            return onDelete(snippet);
          }
        })),
        actions: /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }
        }, useInlineEditor && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
          rounded: true,
          title: _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.EDIT,
          icon: "pencil",
          className: "primary",
          style: {
            margin: 2
          },
          onClick: function onClick() {
            return onEditSnippet(snippet);
          }
        }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
          rounded: true,
          icon: "duplicate",
          title: _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.CLONE,
          className: "primary",
          style: {
            margin: 2
          },
          onClick: function onClick() {
            return onDuplicate(snippet);
          }
        })), !useInlineEditor && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
          title: _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.EDIT,
          className: "primary",
          style: {
            margin: 2
          },
          onClick: function onClick() {
            return onEditSnippet(snippet);
          }
        }, _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.EDIT), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
          title: _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.CLONE,
          className: "primary",
          style: {
            margin: 2
          },
          onClick: function onClick() {
            return onDuplicate(snippet);
          }
        }, _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.CLONE)))
      };
    });
  }, [snippets, onEditSnippet, onSave, onDuplicate, onDelete]);
  var columns = useMemo(function () {
    var hiddenColumns = [].concat(_toConsumableArray(toHide), [currentScope !== 'all' && currentScope !== 'disabled' ? 'scope' : '']).filter(Boolean);
    var freshColumns = _app_consts__WEBPACK_IMPORTED_MODULE_0__.columns.map(function (column) {
      if (column.accessor === 'snippet') {
        var tagOptions = tags.filter(Boolean).map(function (tag) {
          return {
            value: tag,
            label: tag
          };
        });
        return _objectSpread(_objectSpread({}, column), {}, {
          filters: _objectSpread(_objectSpread({}, column.filters), {}, {
            options: tagOptions
          })
        });
      }
      return column;
    });
    var visibleColumns = freshColumns.filter(function (column) {
      return !hiddenColumns.includes(column.accessor);
    });
    return visibleColumns;
  }, [tags, toHide, currentScope]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__["default"], {
    busy: busy
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoTable, {
    data: data,
    columns: columns,
    selectedItems: [],
    sort: sort,
    emptyMessage: !busy ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.NO_RESULTS, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null), currentScope === 'all' && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoButton, {
      className: "secondary",
      onClick: onImportCodeSnippets
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].SETTINGS.SNIPPET.IMPORT_CODE_SNIPPETS), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoSpacer, null)) : _app_i18n__WEBPACK_IMPORTED_MODULE_4__["default"].COMMON.LOADING,
    filters: selectedFilters,
    onSortChange: handleSortChange,
    onFilterChange: handleFilterChange
  })));
};


/***/ }),

/***/ "./app/js/components/SnippetsScreen.js":
/*!*********************************************!*\
  !*** ./app/js/components/SnippetsScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_contexts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/contexts/core */ "./app/js/contexts/core.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/NekoUI.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Message.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Select.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Switch.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Paging.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/toolbar/Toolbar.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Links.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Wrapper.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/modal/Modal.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks */ "./app/js/hooks/index.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");
/* harmony import */ var _app_components_EditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/EditForm */ "./app/js/components/EditForm.js");
/* harmony import */ var _app_components_SnippetTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/SnippetTable */ "./app/js/components/SnippetTable.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect,
  useMemo = _wp$element.useMemo;







var SnippetsTab = function SnippetsTab() {
  var _tableFilters$filters;
  var _useCoreContext = (0,_app_contexts_core__WEBPACK_IMPORTED_MODULE_0__.useCoreContext)(),
    actions = _useCoreContext.actions,
    state = _useCoreContext.state;
  var _useNekoColors = (0,_neko_ui__WEBPACK_IMPORTED_MODULE_6__.useNekoColors)(),
    colors = _useNekoColors.colors;
  var getOption = actions.getOption,
    setError = actions.setError;
  var isLoading = state.isLoading;
  var _useSnippets = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_2__.useSnippets)({
      onRanSnippet: function onRanSnippet(result) {
        return setMessage((0,_neko_ui__WEBPACK_IMPORTED_MODULE_7__.embedVars)(_app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SUCCESSFULLY_RAN, result));
      },
      onError: function onError(error) {
        return setError(error);
      }
    }),
    isProcessing = _useSnippets.isProcessing,
    snippets = _useSnippets.snippets,
    total = _useSnippets.total,
    tags = _useSnippets.tags,
    stats = _useSnippets.stats,
    tableFilters = _useSnippets.tableFilters,
    setTableFilters = _useSnippets.setTableFilters,
    editSnippet = _useSnippets.editSnippet,
    setEditSnippet = _useSnippets.setEditSnippet,
    isSavable = _useSnippets.isSavable,
    onDelete = _useSnippets.onDelete,
    onSave = _useSnippets.onSave,
    onImportCodeSnippets = _useSnippets.onImportCodeSnippets,
    onDuplicate = _useSnippets.onDuplicate,
    onRefresh = _useSnippets.onRefresh;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    useInlineEditor = _useState4[0],
    setUseInlineEditor = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isEditorOpen = _useState6[0],
    setIsEditorOpen = _useState6[1];
  var _useState7 = useState(['functionName']),
    _useState8 = _slicedToArray(_useState7, 2),
    toHide = _useState8[0],
    setToHide = _useState8[1];
  var currentScope = ((_tableFilters$filters = tableFilters.filters.find(function (v) {
    return v.accessor === 'scope';
  })) === null || _tableFilters$filters === void 0 ? void 0 : _tableFilters$filters.value) || 'all';
  useEffect(function () {
    var toHide = [];
    if (currentScope !== 'function') {
      toHide = ['functionName', 'endpoint'];
    }
    if (currentScope === 'function') {
      toHide = ['attributes'];
    }
    if (useInlineEditor) {
      toHide = ['attributes', 'enabled', 'functionName', 'endpoint'];
    }
    setToHide(toHide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useInlineEditor, currentScope]);
  var onDeleteSubmit = function onDeleteSubmit(snippet) {
    if (confirm(_app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].ALERTS.ARE_YOU_SURE)) {
      onDelete(snippet);
    }
  };
  var toggleEditor = function toggleEditor(state) {
    var snippet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _app_consts__WEBPACK_IMPORTED_MODULE_3__.initSnippet;
    setIsEditorOpen(!useInlineEditor);
    setEditSnippet(state ? snippet : null);
    if (!state) {
      setIsEditorOpen(false);
      setEditSnippet(null);
    }
  };
  var onEditSnippet = function onEditSnippet(snippet) {
    setMessage(null);
    toggleEditor(true, snippet);
  };
  var limit = tableFilters.limit,
    page = tableFilters.page;
  var busy = isLoading || isProcessing;
  var inlineEditor = /*#__PURE__*/React.createElement(React.Fragment, null, message && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoMessage, {
    variant: "success",
    style: {
      marginBottom: '16px'
    }
  }, message), /*#__PURE__*/React.createElement(_app_components_EditForm__WEBPACK_IMPORTED_MODULE_4__.EditForm, {
    busy: busy,
    isInline: true,
    editSnippet: editSnippet,
    setEditSnippet: setEditSnippet,
    isSavable: isSavable,
    onSave: onSave
  }));
  var lastFatalErrorMessage = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoMessage, {
    variant: "danger",
    style: {
      marginBottom: '16px'
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR.SNIPPET_FATAL, getOption('fatal_error', ''), ". ", _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].ERROR.SNIPPET_DISABLED);
  var handleScopeChange = function handleScopeChange(value) {
    if (_app_consts__WEBPACK_IMPORTED_MODULE_3__.scopes.some(function (scope) {
      return scope.value === value;
    })) {
      setTableFilters(_objectSpread(_objectSpread({}, tableFilters), {}, {
        page: 1,
        filters: [].concat(_toConsumableArray(tableFilters.filters.filter(function (v) {
          return v.accessor !== 'scope';
        })), [{
          accessor: 'scope',
          value: value
        }])
      }));
    }
  };
  var jsxSnippetTable = useMemo(function () {
    return /*#__PURE__*/React.createElement(_app_components_SnippetTable__WEBPACK_IMPORTED_MODULE_5__.SnippetTable, {
      busy: busy,
      snippets: snippets,
      onEditSnippet: onEditSnippet,
      tableFilters: tableFilters,
      setTableFilters: setTableFilters,
      onImportCodeSnippets: onImportCodeSnippets,
      currentScope: currentScope,
      useInlineEditor: useInlineEditor,
      tags: tags,
      stats: stats,
      toHide: toHide,
      onSave: onSave,
      onDelete: onDeleteSubmit,
      onDuplicate: onDuplicate
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [snippets, busy, tableFilters, currentScope, tags, stats, useInlineEditor, toHide]);
  var jsxSnippetTableFooter = useMemo(function () {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center'
      }
    }, !useInlineEditor && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoSelect, {
      style: {
        marginRight: '10px'
      },
      scrolldown: true,
      value: limit,
      onChange: function onChange(value) {
        return setTableFilters(_objectSpread(_objectSpread({}, tableFilters), {}, {
          limit: value,
          offset: 0
        }));
      }
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoOption, {
      value: 5,
      label: "5 items / page"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoOption, {
      value: 10,
      label: "10 items / page"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoOption, {
      value: 25,
      label: "25 items / page"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoOption, {
      value: 50,
      label: "50 items / page"
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoOption, {
      value: 100,
      label: "100 items / page"
    })), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoSwitch, {
      onLabel: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SIDEBAR_EDITOR,
      offLabel: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SIDEBAR_EDITOR,
      width: 130,
      onChange: setUseInlineEditor,
      checked: useInlineEditor,
      onBackgroundColor: colors.green
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'auto'
      }
    }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoPaging, {
      currentPage: page,
      limit: limit,
      total: total,
      onClick: function onClick(page) {
        return setTableFilters(_objectSpread(_objectSpread({}, tableFilters), {}, {
          page: page
        }));
      }
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [limit, page, total, useInlineEditor]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, getOption('fatal_error', null) && lastFatalErrorMessage, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoToolbar, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    className: "primary",
    icon: "plus",
    onClick: function onClick() {
      return toggleEditor(true);
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.ADD), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
    isBusy: busy,
    className: "secondary",
    onClick: onRefresh
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.REFRESH), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'auto'
    }
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoQuickLinks, {
    name: "mwcode_scope_filter",
    value: currentScope,
    onChange: handleScopeChange
  }, _app_consts__WEBPACK_IMPORTED_MODULE_3__.scopes.map(function (scope) {
    return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoLink, {
      key: scope.value,
      value: scope.value,
      title: scope.label,
      count: stats === null || stats === void 0 ? void 0 : stats[scope.value]
    });
  }))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoSpacer, null), !useInlineEditor && /*#__PURE__*/React.createElement(React.Fragment, null, jsxSnippetTable, jsxSnippetTableFooter), useInlineEditor && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoColumn, {
    minimal: true
  }, jsxSnippetTable, jsxSnippetTableFooter), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoColumn, {
    minimal: true,
    style: {
      padding: '0 0 0 15px'
    }
  }, useInlineEditor && inlineEditor))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_17__.NekoModal, {
    isOpen: isEditorOpen,
    fullSize: true,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.EDITOR,
    style: {
      minWidth: '600px',
      maxWidth: '90%'
    },
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--neko-main-color)',
        margin: '0px -15px',
        padding: '15px',
        height: '100%'
      }
    }, message && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoMessage, {
      variant: "success",
      style: {
        marginBottom: '16px'
      }
    }, message), /*#__PURE__*/React.createElement(_app_components_EditForm__WEBPACK_IMPORTED_MODULE_4__.EditForm, {
      busy: busy,
      onClose: function onClose() {
        return toggleEditor(false);
      },
      editSnippet: editSnippet,
      setEditSnippet: setEditSnippet,
      isSavable: isSavable,
      onSave: onSave
    })),
    onRequestClose: function onRequestClose() {
      return toggleEditor(false);
    },
    customButtons: /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoButton, {
      onClick: function onClick() {
        onSave(editSnippet);
        toggleEditor(false);
      },
      disabled: !isSavable
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.SAVE_AND_CLOSE),
    okButton: {
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.SAVE,
      onClick: function onClick() {
        onSave(editSnippet);
      },
      disabled: !isSavable
    },
    cancelButton: {
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].COMMON.CANCEL,
      onClick: function onClick() {
        return toggleEditor(false);
      }
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SnippetsTab);

/***/ }),

/***/ "./app/js/components/ui/CodeEditor.js":
/*!********************************************!*\
  !*** ./app/js/components/ui/CodeEditor.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeEditor: () => (/* binding */ CodeEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-codemirror */ "./node_modules/@uiw/react-codemirror/esm/index.js");
/* harmony import */ var _uiw_codemirror_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/codemirror-themes */ "./node_modules/@uiw/codemirror-themes/esm/index.js");
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lezer/highlight */ "./node_modules/@lezer/highlight/dist/index.js");
/* harmony import */ var _codemirror_lang_php__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @codemirror/lang-php */ "./node_modules/@codemirror/lang-php/dist/index.js");
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _app_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/requests */ "./app/js/requests.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _codemirror_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/view */ "./node_modules/@codemirror/view/dist/index.js");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @codemirror/state */ "./node_modules/@codemirror/state/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var SnippetVaultLight = (0,_uiw_codemirror_themes__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
  theme: 'light',
  settings: {
    background: '#ffffff',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#fff',
    gutterForeground: '#8a919966'
  },
  styles: [{
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.comment,
    color: '#787b8099'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName,
    color: '#0080ff'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags["function"](_lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.variableName),
    color: '#daa520'
  }, {
    tag: [_lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.string, _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.special(_lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.brace)],
    color: '#ff4500'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.number,
    color: '#2e8b57'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.bool,
    color: '#8b0000'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags["null"],
    color: '#8b008b'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.keyword,
    color: '#00008b'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.operator,
    color: '#daa520'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.className,
    color: '#8a2be2'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(_lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.typeName),
    color: '#5f9ea0'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.typeName,
    color: '#b22222'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.angleBracket,
    color: '#556b2f'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.tagName,
    color: '#ff8c00'
  }, {
    tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.attributeName,
    color: '#6b8e23'
  }]
});
var StyledCodeEditorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 13px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n\n  .cm-readonly-prefix {\n    background-color: #efefef;\n    color: #818181 !important;\n    user-select: none;\n  }\n\n  .cm-gutter-lint {\n    min-width: 20px;\n  }\n\n  .cm-lintRange-error {\n    background-color: #fdd !important;\n  }\n\n  .cm-lintRange::before {\n    content: '\u2716';\n    color: #f00;\n    font-size: 1.2em;\n    position: absolute;\n    margin-left: -20px;\n    z-index: 999;\n  }\n\n  .cm-diagnosticText {\n    color: #f00;\n    font-size: 1.1em;\n  }\n\n  .cm-tooltip {\n    border-radius: 3px;\n    border: none;\n    background-color: #fbfbfb;\n    color: #f00;\n    padding: 5px;\n  }\n\n  .cm-tooltip-below {\n    box-shadow: 0px 8px 7px 0px rgba(0, 0, 0, 0.15);\n  }\n\n  .cm-diagnosticAction {\n    background-color: var(--neko-blue);\n    color: #fff;\n    padding: 5px 8px;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n"])));
var CodeEditor = function CodeEditor(_ref) {
  var code = _ref.code,
    snippet = _ref.snippet,
    setCode = _ref.setCode,
    _ref$setFunctionError = _ref.setFunctionError,
    setFunctionError = _ref$setFunctionError === void 0 ? null : _ref$setFunctionError,
    _ref$isModal = _ref.isModal,
    isModal = _ref$isModal === void 0 ? true : _ref$isModal;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    codeMirrorCode = _useState2[0],
    setCodeMirrorCode = _useState2[1];
  var isInternalChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var prefix = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) === 'js' && (snippet === null || snippet === void 0 ? void 0 : snippet.scope) === 'function' ? '<script>\n\n' : '<?php\n\n';
  }, [snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget, snippet === null || snippet === void 0 ? void 0 : snippet.scope]);
  var prefixLength = prefix.length;
  var debouncedLintSnippet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(codeContent, snippetData, callback) {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_app_requests__WEBPACK_IMPORTED_MODULE_4__.lintSnippet)({
              code: codeContent,
              snippet: snippetData
            });
          case 2:
            res = _context.sent;
            callback(res.result);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(), 500), [snippet]);
  var lintingExtension = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_7__.linter)(function (view) {
      if ((snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) === 'js' && (snippet === null || snippet === void 0 ? void 0 : snippet.scope) === 'function') {
        setFunctionError === null || setFunctionError === void 0 || setFunctionError(false);
        return [];
      } else {
        return new Promise(function (resolve) {
          debouncedLintSnippet(view.state.doc.toString(), snippet, function (error) {
            if (error) {
              var diagnostics = [{
                from: view.state.doc.line(error.attributes.startLine).from,
                to: view.state.doc.line(error.attributes.endLine).to,
                severity: 'error',
                message: error.message,
                actions: [{
                  name: 'AI Correction',
                  apply: function apply() {
                    /* Do nothing */
                  }
                }]
              }];
              setFunctionError === null || setFunctionError === void 0 || setFunctionError(true);
              resolve(diagnostics);
            } else {
              setFunctionError === null || setFunctionError === void 0 || setFunctionError(false);
              resolve([]);
            }
          });
        });
      }
    });
  }, [debouncedLintSnippet, snippet, setFunctionError]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setCodeMirrorCode("".concat(prefix).concat(code || ''));
  }, [prefix, code]);
  var handleCodeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    setCodeMirrorCode(value);
    isInternalChange.current = true;
    var updatedCode = value.split('\n').slice(2).join('\n').trim();
    setCode(updatedCode);
    isInternalChange.current = false;
  }, [setCode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(snippet !== null && snippet !== void 0 && snippet.externalCode)) return;
    var newCode = "".concat(prefix).concat(snippet.externalCode);
    if (!isInternalChange.current && codeMirrorCode !== newCode) {
      setCodeMirrorCode(newCode);
    }
  }, [snippet === null || snippet === void 0 ? void 0 : snippet.externalCode, codeMirrorCode, prefix]);
  var prefixDecoration = _codemirror_view__WEBPACK_IMPORTED_MODULE_8__.Decoration.mark({
    attributes: {
      "class": 'cm-readonly-prefix'
    }
  });
  var prefixDecorations = _codemirror_view__WEBPACK_IMPORTED_MODULE_8__.EditorView.decorations.of(_codemirror_view__WEBPACK_IMPORTED_MODULE_8__.Decoration.set([prefixDecoration.range(0, prefixLength)]));
  var preventEditingPrefix = _codemirror_state__WEBPACK_IMPORTED_MODULE_9__.EditorState.transactionFilter.of(function (tr) {
    if (!tr.docChanged) return tr;
    var changesInPrefix = tr.changes.iterChanges(function (fromA) {
      return fromA < prefixLength;
    });
    if (changesInPrefix) {
      return [];
    }
    return tr;
  });
  var cursorGuard = _codemirror_view__WEBPACK_IMPORTED_MODULE_8__.EditorView.updateListener.of(function (update) {
    if (update.selectionSet) {
      var selection = update.state.selection.main;
      if (selection.from < prefixLength) {
        update.view.dispatch({
          selection: {
            anchor: prefixLength
          },
          scrollIntoView: true
        });
      }
    }
  });
  var extensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [(snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) === 'js' ? (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_10__.javascript)() : (0,_codemirror_lang_php__WEBPACK_IMPORTED_MODULE_11__.php)(), lintingExtension, preventEditingPrefix, cursorGuard, prefixDecorations];
  }, [snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget, lintingExtension, preventEditingPrefix, cursorGuard, prefixDecorations]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledCodeEditorWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: codeMirrorCode,
    lineWrapping: true,
    onChange: handleCodeChange,
    theme: SnippetVaultLight,
    extensions: extensions,
    maxHeight: "100%",
    minHeight: "300px",
    overflow: "auto"
  }));
};

/***/ }),

/***/ "./app/js/components/ui/QueryButton.js":
/*!*********************************************!*\
  !*** ./app/js/components/ui/QueryButton.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryButton: () => (/* binding */ QueryButton)
/* harmony export */ });
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/TextArea.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Spacer.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/modal/Modal.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Message.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _CodeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeEditor */ "./app/js/components/ui/CodeEditor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;



var pngWand = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_1__.pluginUrl, "/images/wand.png");
var QueryButton = function QueryButton(_ref) {
  var setCode = _ref.setCode,
    close = _ref.close,
    snippet = _ref.snippet;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    busy = _useState2[0],
    setBusy = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    query = _useState4[0],
    setQuery = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    newCode = _useState6[0],
    setNewCode = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    displayModal = _useState8[0],
    setDisplayModal = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasError = _useState10[0],
    setHasError = _useState10[1];
  var onRun = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(code) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setBusy(true);
            _context.next = 3;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_3__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_1__.apiUrl, "/ai_query"), {
              method: 'POST',
              json: {
                code: code,
                query: query
              },
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_1__.restNonce
            });
          case 3:
            response = _context.sent;
            if (response.success) {
              console.log('AI Suggestions', response.code);
              setNewCode(response.code);
              setDisplayModal(true);
            } else {
              console.error('AI Suggestions', response.message);
            }
            setBusy(false);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onRun(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoTextArea, {
    value: query,
    onChange: function onChange(value) {
      return setQuery(value);
    },
    disabled: busy,
    rows: 2
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoSpacer, {
    tiny: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    style: {
      flex: 1
    },
    className: "secondary",
    onClick: close
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.CANCEL), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    style: {
      flex: 4
    },
    className: "primary",
    isBusy: busy,
    onClick: function onClick() {
      return onRun(snippet.code);
    }
  }, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.RUN)), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoModal, {
    isOpen: displayModal,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.MODIFY_BEFORE_USE,
    contentWidth: "800px",
    style: {
      minWidth: '800px',
      maxWidth: '800px'
    },
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'calc(100vh - 200px)',
        overflow: 'auto'
      }
    }, hasError && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoMessage, {
      variant: "danger"
    }, "\u26A0\uFE0F It looks like there is an error in your code."), /*#__PURE__*/React.createElement(_CodeEditor__WEBPACK_IMPORTED_MODULE_2__.CodeEditor, {
      snippet: snippet,
      code: newCode,
      setFunctionError: function setFunctionError(value) {
        setHasError(value);
      },
      setCode: function setCode(value) {
        return setNewCode(value);
      }
    })),
    onRequestClose: function onRequestClose() {
      return setDisplayModal(false);
    },
    okButton: {
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.SAVE,
      disabled: hasError,
      onClick: function onClick() {
        setCode(newCode);
        setDisplayModal(false);
        close();
      }
    },
    cancelButton: {
      label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.CANCEL,
      onClick: function onClick() {
        return setDisplayModal(false);
      }
    }
  }));
};


/***/ }),

/***/ "./app/js/components/ui/ReadCommentsButton.js":
/*!****************************************************!*\
  !*** ./app/js/components/ui/ReadCommentsButton.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadCommentsButton: () => (/* binding */ ReadCommentsButton)
/* harmony export */ });
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = wp.element.useState;


var pngWand = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_1__.pluginUrl, "/images/wand.png");
var ReadCommentsButton = function ReadCommentsButton(_ref) {
  var code = _ref.code,
    setCode = _ref.setCode;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    busy = _useState2[0],
    setBusy = _useState2[1];
  var onAiSuggestions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(code) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setBusy(true);
            _context.next = 3;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_2__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_1__.apiUrl, "/ai_read_comments"), {
              method: 'POST',
              json: {
                code: code
              },
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_1__.restNonce
            });
          case 3:
            response = _context.sent;
            if (response.success) {
              console.log('AI Suggestions', response.code);
              setCode(response.code);
            } else {
              console.error('AI Suggestions', response.message);
            }
            setBusy(false);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onAiSuggestions(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoButton, {
    disabled: !code || !code.includes('//'),
    isBusy: busy,
    onClick: function onClick() {
      return onAiSuggestions(code);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: pngWand,
    style: {
      width: '20px',
      height: '20px',
      marginRight: '5px'
    }
  }), _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.READ_COMMENTS);
};


/***/ }),

/***/ "./app/js/components/ui/Scopes.js":
/*!****************************************!*\
  !*** ./app/js/components/ui/Scopes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScopeLabel: () => (/* binding */ ScopeLabel)
/* harmony export */ });
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");

var ScopeLabel = function ScopeLabel(_ref) {
  var scope = _ref.scope;
  var actualScope = _app_consts__WEBPACK_IMPORTED_MODULE_0__.scopes.find(function (v) {
    var _v$childScopes;
    return v.value === scope || ((_v$childScopes = v.childScopes) === null || _v$childScopes === void 0 ? void 0 : _v$childScopes.includes(scope));
  });
  if (!actualScope) {
    console.warn("Snippet Vault: The scope \"".concat(scope, "\" is not supported."));
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0px 5px",
      borderRadius: "3px",
      background: actualScope.color,
      fontSize: "10px",
      textTransform: "uppercase",
      color: "white",
      textAlign: "center"
    }
  }, actualScope.label);
};

/***/ }),

/***/ "./app/js/components/ui/Snippet.js":
/*!*****************************************!*\
  !*** ./app/js/components/ui/Snippet.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Snippet: () => (/* binding */ Snippet)
/* harmony export */ });
/* harmony import */ var _app_contexts_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/contexts/core */ "./app/js/contexts/core.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Tooltip.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Message.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js");
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/esm/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/esm/styles/hljs/qtcreator_light.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var StyledSnippet = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n  opacity: ", ";\n  filter: ", ";\n  pointer-events: ", ";\n  \n  .snippet-header {\n    display: flex;\n    flex-direction: column;\n  }\n  .snippet-title,\n  .snippet-description,\n  .snippet-endpoint {\n    margin: 2px 0;\n    padding: 0;\n  }\n  .snippet-title {\n    font-size: 14px;\n    cursor: ", ";\n    font-weight: 600;\n    color: ", ";\n  }\n  .snippet-description {\n    color: ", ";\n    font-size: var(--neko-small-font-size);\n  }\n  .snippet-endpoint {\n    color: ", ";\n  }\n  .code-container {\n    border-radius: 5px;\n    overflow: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n  }\n  .snippet-footer {\n    background: ", ";\n  }\n"])), function (props) {
  return props.active ? 1 : 0.5;
}, function (props) {
  return props.active ? 'none' : 'grayscale(100%)';
}, function (props) {
  return props.active ? 'auto' : 'none';
}, function (props) {
  return props.active ? 'pointer' : 'default';
}, function (props) {
  return props.active ? 'inherit' : 'var(--neko-gray-60)';
}, function (props) {
  return props.active ? 'var(--neko-gray-60)' : 'var(--neko-gray-40)';
}, function (props) {
  return props.active ? '#a8a8a8' : '#c8c8c8';
}, function (props) {
  return props.active ? '#f9f9f9' : '#f0f0f0';
});
var StyledSyntaxHighlighter = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  border: 1px solid #e0e0e0;\n  max-height: 140px;\n  margin-top: 5px;\n  opacity: ", ";\n  filter: ", ";\n  code, pre {\n    font-size: 13px;\n    font-weight: 500;\n    background: none;\n    padding: 0px !important;\n    overflow-x: hidden !important;\n  }\n"])), function (props) {
  return props.active ? 1 : 0.7;
}, function (props) {
  return props.active ? 'none' : 'grayscale(100%)';
});
var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-right: 3px;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  opacity: ", ";\n  filter: ", ";\n \n  svg {\n    border-radius: 3px;\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  return props.active ? 1 : 0.5;
}, function (props) {
  return props.active ? 'none' : 'grayscale(100%)';
});
var Snippet = function Snippet(_ref) {
  var snippet = _ref.snippet,
    onEditClick = _ref.onEditClick;
  var _useCoreContext = (0,_app_contexts_core__WEBPACK_IMPORTED_MODULE_0__.useCoreContext)(),
    actions = _useCoreContext.actions;
  var getOption = actions.getOption;
  var functionArgsArray = snippet !== null && snippet !== void 0 && snippet.functionArgsDict ? Object.values(snippet === null || snippet === void 0 ? void 0 : snippet.functionArgsDict) : [];
  var missingType = functionArgsArray.some(function (param) {
    return (param === null || param === void 0 ? void 0 : param.type) === null || (param === null || param === void 0 ? void 0 : param.type) === undefined;
  });
  var hasEndpoint = snippet.endpoint && snippet.method;
  var showPreview = getOption("ui_show_preview", false) && snippet.code;
  var isCallable = (snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) && (snippet === null || snippet === void 0 ? void 0 : snippet.functionName);
  var functionTarget = (snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) === 'js' ? _app_consts__WEBPACK_IMPORTED_MODULE_2__.js_svg : _app_consts__WEBPACK_IMPORTED_MODULE_2__.php_svg;
  var active = snippet.active === '1';
  return /*#__PURE__*/React.createElement(StyledSnippet, {
    active: active
  }, /*#__PURE__*/React.createElement("div", {
    className: "snippet-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "snippet-info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoTooltip, {
    position: "top",
    text: snippet === null || snippet === void 0 ? void 0 : snippet.functionName
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    active: active
  }, functionTarget)), /*#__PURE__*/React.createElement("a", {
    onClick: active ? onEditClick : undefined,
    className: "snippet-title"
  }, snippet.name)), /*#__PURE__*/React.createElement("p", {
    className: "snippet-description"
  }, snippet.description))), showPreview && /*#__PURE__*/React.createElement("div", {
    className: "code-container"
  }, /*#__PURE__*/React.createElement(StyledSyntaxHighlighter, {
    language: (snippet === null || snippet === void 0 ? void 0 : snippet.functionTarget) === 'js' ? 'javascript' : 'php',
    style: react_syntax_highlighter_dist_esm_styles_hljs__WEBPACK_IMPORTED_MODULE_6__["default"],
    wrapLines: true,
    wrapLongLines: true,
    active: active
  }, snippet.code)), (missingType || isCallable || hasEndpoint) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "snippet-footer"
  }, missingType && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoMessage, {
    variant: "warning",
    style: {
      marginTop: 5,
      padding: '8px 15px',
      opacity: active ? 1 : 0.7
    }
  }, "\u26A0\uFE0F ", _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SETTINGS.SNIPPET.MISSING_TYPE_WARNING))));
};

/***/ }),

/***/ "./app/js/components/ui/Tags.js":
/*!**************************************!*\
  !*** ./app/js/components/ui/Tags.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tags: () => (/* binding */ Tags)
/* harmony export */ });
var Tags = function Tags(_ref) {
  var _tags;
  var tags = _ref.tags;
  if (typeof tags === "string") {
    tags = tags.split(",");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "3px"
    }
  }, (_tags = tags) === null || _tags === void 0 ? void 0 : _tags.map(function (tag, index) {
    if (tag) {
      return /*#__PURE__*/React.createElement(NekoScope, {
        key: index,
        label: tag
      });
    }
  }));
};
var NekoScope = function NekoScope(_ref2) {
  var label = _ref2.label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "1px 5px",
      borderRadius: "5px",
      border: "1px solid rgb(142 156 164)",
      fontSize: "12px",
      color: "rgb(142 156 164)"
    }
  }, label);
};

/***/ }),

/***/ "./app/js/consts.js":
/*!**************************!*\
  !*** ./app/js/consts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsStyles: () => (/* binding */ LogsStyles),
/* harmony export */   columns: () => (/* binding */ columns),
/* harmony export */   editorScopes: () => (/* binding */ editorScopes),
/* harmony export */   initSnippet: () => (/* binding */ initSnippet),
/* harmony export */   js_svg: () => (/* binding */ js_svg),
/* harmony export */   php_svg: () => (/* binding */ php_svg),
/* harmony export */   scopes: () => (/* binding */ scopes)
/* harmony export */ });
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");

var scopes = [{
  value: "all",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.ALL,
  color: "var(--neko-grey)",
  select_hidden: true
}, {
  value: "global",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.PERSISTENT,
  color: "var(--neko-purple)",
  childScopes: ['frontend', 'backend', 'persistent']
},
// { value: "frontend", label: i18n.SETTINGS.SNIPPET.SCOPES.FRONTEND, color: "var(--neko-yellow)" },
// { value: "backend", label: i18n.SETTINGS.SNIPPET.SCOPES.BACKEND, color: "var(--neko-green)" },
{
  value: "function",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.FUNCTION,
  color: "var(--neko-green)"
}, {
  value: "scheduled",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.SCHEDULED,
  color: "var(--neko-orange)"
}, {
  value: "disabled",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.TURN_OFF,
  select_hidden: true
}];
var editorScopes = [{
  value: "persistent",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.GLOBAL_FRONTEND_BACKEND
}, {
  value: "frontend",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.GLOBAL_FRONTEND
}, {
  value: "backend",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.GLOBAL_BACKEND
}, {
  value: "function",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.FUNCTION
}, {
  value: "scheduled",
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPET.SCOPES.SCHEDULED
}];
var LogsStyles = {
  marginTop: 10,
  background: 'rgb(0, 72, 88)',
  padding: 10,
  color: 'rgb(58, 212, 58)',
  maxHeight: 220,
  minHeight: 200,
  display: 'block',
  fontFamily: 'monospace',
  fontSize: 12,
  overflowX: 'auto',
  borderRadius: 10,
  overflowWrap: 'break-word'
};
var initSnippet = {
  id: null,
  name: "",
  description: "",
  code: "",
  tags: "",
  priority: 10,
  scope: "persistent",
  active: 1,
  endpoint: "",
  // in case of a functions
  functionName: "",
  functionArgs: [],
  functionArgsDict: {},
  functionBehavior: "dynamic",
  functionTarget: "php",
  //php, js

  intervalHours: new Date().getHours(),
  intervalMinutes: new Date().getMinutes()
};
var columns = [{
  accessor: "status",
  width: '40px'
}, {
  accessor: "snippet",
  title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPETS_TABLE_COLUMNS.SNIPPET,
  sortable: false,
  filters: {
    type: 'checkbox'
  }
}, {
  accessor: "functionName",
  title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPETS_TABLE_COLUMNS.FUNCTION,
  sortable: true,
  width: '15%'
}, {
  accessor: "endpoint",
  title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPETS_TABLE_COLUMNS.ENDPOINT,
  sortable: false,
  width: '15%'
}, {
  accessor: "attributes",
  title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPETS_TABLE_COLUMNS.TYPE,
  sortable: false,
  width: '94px'
}, {
  accessor: "actions",
  title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].SETTINGS.SNIPPETS_TABLE_COLUMNS.ACTIONS,
  sortable: false,
  width: '10%'
}, {
  accessor: "enabled",
  width: '40px'
}];
var php_svg = /*#__PURE__*/React.createElement("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  "clip-path": "url(#clip0_323_423)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0H64V64H0V0Z",
  fill: "#8F9ED1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.7412 32.0461L22.0318 30.8851L21.7412 32.0461ZM21.7412 32.0461C21.0578 34.7763 18.616 36.6829 15.803 36.6829M21.7412 32.0461L15.803 36.6829M15.803 36.6829H10.9194M15.803 36.6829H10.9194M10.9194 36.6829L13.361 26.9164H18.9313C19.9227 26.9164 20.8396 27.3638 21.45 28.1449C22.0588 28.9261 22.2706 29.9252 22.0318 30.885L10.9194 36.6829ZM24.1207 26.0585L24.1206 26.0584C22.8634 24.4501 20.9733 23.5276 18.9313 23.5276H10.7526H10.7136L10.7041 23.5655L4.95149 46.5872L4.93597 46.6493H5H8.38837H8.42741L8.43688 46.6114L10.0722 40.0717H15.803C20.1731 40.0717 23.9668 37.1093 25.0274 32.87L24.9789 32.8579L25.0274 32.87L25.3181 31.7074C25.8132 29.7269 25.3763 27.6684 24.1207 26.0585Z",
  fill: "white",
  stroke: "white",
  "stroke-width": "0.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M56.2737 32.0461L56.5643 30.8851L56.2737 32.0461ZM56.2737 32.0461C55.5903 34.7763 53.1485 36.6829 50.3355 36.6829M56.2737 32.0461L50.3355 36.6829M50.3355 36.6829H45.4519M50.3355 36.6829H45.4519M45.4519 36.6829L47.8935 26.9164H53.4637C54.4552 26.9164 55.372 27.3638 55.9824 28.1449C56.5912 28.9261 56.8031 29.9252 56.5643 30.885L45.4519 36.6829ZM58.6532 26.0585L58.6531 26.0584C57.3959 24.4501 55.5057 23.5276 53.4637 23.5276H45.2851H45.246L45.2366 23.5655L39.484 46.5872L39.4684 46.6493H39.5325H42.9208H42.9599L42.9693 46.6114L44.6047 40.0717H50.3355C54.7055 40.0717 58.4993 37.1093 59.5599 32.87L59.5114 32.8579L59.5599 32.87L59.8506 31.7074C60.3457 29.7269 59.9088 27.6684 58.6532 26.0585Z",
  fill: "white",
  stroke: "white",
  "stroke-width": "0.1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40.9479 25.5534L40.9478 25.5534C39.8994 24.2667 38.3467 23.5276 36.6857 23.5276H31.5329L32.7178 17.0089L32.7285 16.95H32.6686H29.3276H29.2859L29.2784 16.9911L25.0933 40.0127L25.0826 40.0716H25.1425H28.4835H28.5252L28.5327 40.0306L30.9168 26.9164H36.6857C37.3226 26.9164 37.917 27.1987 38.3186 27.6929C38.7205 28.1874 38.8767 28.827 38.7631 29.3829L36.092 40.0094L36.0763 40.0716H36.1405H39.5314H39.5704L39.5799 40.0338L42.0656 30.1417L42.0657 30.1417L42.0661 30.1397C42.4032 28.5143 41.9947 26.8417 40.9479 25.5534Z",
  fill: "white",
  stroke: "white",
  "stroke-width": "0.1"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_323_423"
}, /*#__PURE__*/React.createElement("rect", {
  width: "64",
  height: "64",
  fill: "white"
}))));
var js_svg = /*#__PURE__*/React.createElement("svg", {
  width: "64",
  height: "64",
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  "clip-path": "url(#clip0_323_419)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0H64V64H0V0Z",
  fill: "#FFDF00"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36.3116 37.1954C37.4119 39.0229 38.8435 40.3661 41.3753 40.3661C43.5022 40.3661 44.8609 39.2847 44.8609 37.7907C44.8609 36.0002 43.465 35.3661 41.1239 34.3245L39.8406 33.7644C36.1364 32.1592 33.6757 30.1482 33.6757 25.8971C33.6757 21.9811 36.609 19 41.1932 19C44.4569 19 46.8032 20.1554 48.494 23.1806L44.4968 25.7913C43.6167 24.1861 42.6673 23.5537 41.1932 23.5537C39.6897 23.5537 38.7368 24.5239 38.7368 25.7913C38.7368 27.3577 39.6906 27.9918 41.8929 28.9621L43.1762 29.5212C47.5376 31.4236 50 33.3631 50 37.7236C50 42.4246 46.3695 45 41.494 45C36.7268 45 33.647 42.6892 32.14 39.6605L36.3116 37.1954ZM18.1784 37.6479C18.9848 39.1032 19.7184 40.3335 21.482 40.3335C23.1685 40.3335 24.2324 39.6623 24.2324 37.0526V19.2982H29.3655V37.123C29.3655 42.5295 26.2493 44.9903 21.7005 44.9903C17.5906 44.9903 15.2105 42.8268 14 40.221L18.1784 37.6479Z",
  fill: "black"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_323_419"
}, /*#__PURE__*/React.createElement("rect", {
  width: "64",
  height: "64",
  fill: "white"
}))));

/***/ }),

/***/ "./app/js/contexts/core.js":
/*!*********************************!*\
  !*** ./app/js/contexts/core.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreContextProvider: () => (/* binding */ CoreContextProvider),
/* harmony export */   useCoreContext: () => (/* binding */ useCoreContext)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/modal/Modal.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _app_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/requests */ "./app/js/requests.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// React & Vendor Libs
var _wp$element = wp.element,
  useContext = _wp$element.useContext,
  createContext = _wp$element.createContext,
  useState = _wp$element.useState;

// NekoUI




var CoreContext = createContext();
var CoreContextProvider = function CoreContextProvider(_ref) {
  var children = _ref.children;
  var _useState = useState(_app_settings__WEBPACK_IMPORTED_MODULE_1__.options),
    _useState2 = _slicedToArray(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    modals = _useState4[0],
    setModals = _useState4[1]; // [modalName, isOpen]
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoading = _useState8[0],
    setIsLoading = _useState8[1];
  var optionsErrorHandler = function optionsErrorHandler(err) {
    console.error(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.GETTING_OPTIONS, err !== null && err !== void 0 && err.message ? {
      message: err.message
    } : {
      err: err
    });
    if (err.message) {
      setError( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.GETTING_OPTIONS), /*#__PURE__*/React.createElement("small", null, (0,_neko_ui__WEBPACK_IMPORTED_MODULE_3__.toHTML)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.CHECK_YOUR_CONSOLE))));
    }
  };
  var refreshOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _options;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0,_app_requests__WEBPACK_IMPORTED_MODULE_2__.refreshSettings)();
          case 4:
            _options = _context.sent;
            setOptions(_options);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            optionsErrorHandler(_context.t0);
          case 11:
            _context.prev = 11;
            setIsLoading(false);
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));
    return function refreshOptions() {
      return _ref2.apply(this, arguments);
    };
  }();
  var updateOption = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value, name) {
      var newOptions, _options2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            newOptions = _objectSpread(_objectSpread({}, options), {}, _defineProperty({}, name, value));
            if (!(JSON.stringify(newOptions) === JSON.stringify(options))) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            setIsLoading(true);
            _context2.prev = 4;
            _context2.next = 7;
            return (0,_app_requests__WEBPACK_IMPORTED_MODULE_2__.updateSettings)({
              options: newOptions
            });
          case 7:
            _options2 = _context2.sent;
            setOptions(_options2);
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            optionsErrorHandler(_context2.t0);
          case 14:
            _context2.prev = 14;
            setIsLoading(false);
            return _context2.finish(14);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 11, 14, 17]]);
    }));
    return function updateOption(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var getOption = function getOption(name) {
    var _options$name;
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (_options$name = options[name]) !== null && _options$name !== void 0 ? _options$name : defaultValue;
  };
  var resetOptions = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _options3;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (window.confirm(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ALERTS.ARE_YOU_SURE)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            setIsLoading(true);
            _context3.prev = 3;
            _context3.next = 6;
            return (0,_app_requests__WEBPACK_IMPORTED_MODULE_2__.resetSettings)();
          case 6:
            _options3 = _context3.sent;
            setOptions(_options3);
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            console.error(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.UPDATING_OPTIONS, _context3.t0 !== null && _context3.t0 !== void 0 && _context3.t0.message ? {
              message: _context3.t0.message
            } : {
              err: _context3.t0
            });
            if (_context3.t0.message) {
              setError( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.UPDATING_OPTIONS), /*#__PURE__*/React.createElement("small", null, (0,_neko_ui__WEBPACK_IMPORTED_MODULE_3__.toHTML)(_app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].ERROR.CHECK_YOUR_CONSOLE))));
            }
          case 14:
            _context3.prev = 14;
            setIsLoading(false);
            return _context3.finish(14);
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 10, 14, 17]]);
    }));
    return function resetOptions() {
      return _ref4.apply(this, arguments);
    };
  }();
  var actions = {
    /* Options */updateOption: updateOption,
    getOption: getOption,
    resetOptions: resetOptions,
    refreshOptions: refreshOptions,
    setError: setError,
    setIsLoading: setIsLoading,
    /* Modals */setModals: setModals
  };
  var state = {
    /* Options */options: options,
    error: error,
    isLoading: isLoading,
    /* Modals */modals: modals
  };
  return /*#__PURE__*/React.createElement(CoreContext.Provider, {
    value: {
      state: state,
      actions: actions
    }
  }, children, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoModal, {
    isOpen: error,
    title: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.ERROR,
    content: error,
    ok: _app_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].COMMON.CLOSE,
    onRequestClose: function onRequestClose() {
      return setError(false);
    },
    onOkClick: function onOkClick() {
      return setError(false);
    }
  }));
};
var useCoreContext = function useCoreContext() {
  var context = useContext(CoreContext);
  if (!context) {
    throw new Error('useCoreContext must be used within a CoreContextProvider');
  }
  return context;
};

/***/ }),

/***/ "./app/js/helpers.js":
/*!***************************!*\
  !*** ./app/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generate_random_token: () => (/* binding */ generate_random_token),
/* harmony export */   isChanged: () => (/* binding */ isChanged)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Checks if two objects are different by comparing their properties.
 *
 * @param {Object} obj1 - The first object to compare.
 * @param {Object} obj2 - The second object to compare.
 * @returns {boolean} - Returns true if the objects are different (including either is null), false otherwise.
 * @throws {Error} - Throws an error if either obj1 or obj2 is not an object.
 */
var isChanged = function isChanged(obj1, obj2) {
  // Make a copy of both and remove the functionError property if it exists
  var objOne = _objectSpread({}, obj1);
  var objTwo = _objectSpread({}, obj2);
  delete objOne.functionError;
  delete objTwo.functionError;
  Object.keys(objOne).sort();
  Object.keys(objTwo).sort();

  // Use JSON stringify to compare the two objects
  var isChanged = JSON.stringify(objOne) !== JSON.stringify(objTwo);
  //console.log({ objOne, objTwo, isChanged });
  return isChanged;
};
var generate_random_token = function generate_random_token() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/***/ }),

/***/ "./app/js/hooks/index.js":
/*!*******************************!*\
  !*** ./app/js/hooks/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSnippets: () => (/* reexport safe */ _useSnippets__WEBPACK_IMPORTED_MODULE_0__.useSnippets)
/* harmony export */ });
/* harmony import */ var _useSnippets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSnippets */ "./app/js/hooks/useSnippets.js");


/***/ }),

/***/ "./app/js/hooks/useSnippets.js":
/*!*************************************!*\
  !*** ./app/js/hooks/useSnippets.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSnippets: () => (/* binding */ useSnippets)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useQueries.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useMutation.js");
/* harmony import */ var _app_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/requests */ "./app/js/requests.js");
/* harmony import */ var _app_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/helpers */ "./app/js/helpers.js");
/* harmony import */ var _app_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/consts */ "./app/js/consts.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useMemo = _wp$element.useMemo;




var useSnippets = function useSnippets(_ref) {
  var onCreated = _ref.onCreated,
    onUpdated = _ref.onUpdated,
    onDeleted = _ref.onDeleted,
    onTestedSnippet = _ref.onTestedSnippet,
    onRanSnippet = _ref.onRanSnippet,
    _onError = _ref.onError;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    editSnippet = _useState2[0],
    setEditSnippet = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isRefreshing = _useState4[0],
    setIsRefreshing = _useState4[1];
  var _useState5 = useState({
      page: 1,
      limit: 10,
      filters: [{
        accessor: "scope",
        value: "all"
      }],
      sort: {
        accessor: "id",
        by: "asc"
      }
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    tableFilters = _useState6[0],
    setTableFilters = _useState6[1];
  var queryKeySnippets = ["snippets", tableFilters];
  var queryKeyTags = ["tags"];
  var queryKeyStats = ["stats"];
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  var userQueries = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueries)({
    queries: [{
      queryKey: queryKeyTags,
      queryFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.retrieveTags
    }, {
      queryKey: queryKeySnippets,
      queryFn: function queryFn() {
        return (0,_app_requests__WEBPACK_IMPORTED_MODULE_0__.retrieveSnippets)(tableFilters);
      }
    }, {
      queryKey: queryKeyStats,
      queryFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.fetchStatsSnippets
    }]
  });
  var _ref2 = userQueries[0].data || {},
    _ref2$tags = _ref2.tags,
    tags = _ref2$tags === void 0 ? [] : _ref2$tags;
  var _ref3 = userQueries[1].data || {},
    _ref3$snippets = _ref3.snippets,
    snippets = _ref3$snippets === void 0 ? [] : _ref3$snippets,
    _ref3$total = _ref3.total,
    total = _ref3$total === void 0 ? 0 : _ref3$total;
  var _ref4 = userQueries[2].data || {},
    _ref4$stats = _ref4.stats,
    stats = _ref4$stats === void 0 ? {} : _ref4$stats;
  var invalidateQueries = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsRefreshing(true);
            _context.next = 3;
            return queryClient.invalidateQueries({
              queryKey: queryKeySnippets
            });
          case 3:
            queryClient.invalidateQueries({
              queryKey: queryKeyTags
            });
            queryClient.invalidateQueries({
              queryKey: queryKeyStats
            });
            setIsRefreshing(false);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function invalidateQueries() {
      return _ref5.apply(this, arguments);
    };
  }();
  var createMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.addSnippet,
    onSuccess: function onSuccess(resp) {
      invalidateQueries();
      setEditSnippet(resp.snippet);
      onCreated === null || onCreated === void 0 || onCreated();
    },
    onError: function onError(error) {
      return _onError(error.message);
    }
  });
  var updateMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.updateSnippet,
    onSuccess: function onSuccess() {
      invalidateQueries();
      //setEditSnippet(null);
      onUpdated === null || onUpdated === void 0 || onUpdated();
    },
    onError: function onError(error) {
      return _onError(error.message);
    }
  });
  var deleteMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.deleteSnippet,
    onSuccess: function onSuccess() {
      invalidateQueries();
      setEditSnippet(null);
      onDeleted === null || onDeleted === void 0 || onDeleted();
    }
  });
  var runTestOnFunctionSnippetMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.runTestOnFunctionSnippet,
    onSuccess: function onSuccess(_ref6) {
      var result = _ref6.result;
      return onTestedSnippet(result);
    },
    onError: function onError(error) {
      return _onError(error.message);
    }
  });
  var importCodeSnippetsMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)({
    mutationFn: _app_requests__WEBPACK_IMPORTED_MODULE_0__.importCodeSnippets,
    onSuccess: function onSuccess() {
      invalidateQueries();
      onCreated === null || onCreated === void 0 || onCreated();
    },
    onError: function onError(error) {
      return _onError(error.message);
    }
  });
  var onSave = function onSave(snippet) {
    return snippet.id === null ? createMutation.mutate(snippet) : updateMutation.mutate(snippet);
  };
  var onCancel = function onCancel(snippet) {
    var _snippets$find;
    return setEditSnippet((_snippets$find = snippets.find(function (v) {
      return v.id === snippet.id;
    })) !== null && _snippets$find !== void 0 ? _snippets$find : _app_consts__WEBPACK_IMPORTED_MODULE_2__.initSnippet);
  };
  var onDuplicate = function onDuplicate(snippet) {
    return createMutation.mutate(_objectSpread(_objectSpread({}, snippet), {}, {
      id: null,
      endpoint: ""
    }));
  };
  var isProcessing = createMutation.isLoading || updateMutation.isLoading || deleteMutation.isLoading || importCodeSnippetsMutation.isLoading || runTestOnFunctionSnippetMutation.isLoading || isRefreshing || _app_requests__WEBPACK_IMPORTED_MODULE_0__.isFetchingSnippets;
  var isSavable = useMemo(function () {
    if (!editSnippet) return false;
    if (editSnippet !== null && editSnippet !== void 0 && editSnippet.functionNotValid) return false;
    if (editSnippet !== null && editSnippet !== void 0 && editSnippet.functionError) return false;
    if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.id) === null) return editSnippet.name && editSnippet.code;
    var snippet = snippets.find(function (snippet) {
      return snippet.id === editSnippet.id;
    });
    return (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.isChanged)(snippet, editSnippet);
  }, [snippets, editSnippet]);
  var isResetable = useMemo(function () {
    if (!editSnippet) return false;
    if ((editSnippet === null || editSnippet === void 0 ? void 0 : editSnippet.id) === null) return (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.isChanged)(_app_consts__WEBPACK_IMPORTED_MODULE_2__.initSnippet, editSnippet);
    var snippet = snippets.find(function (snippet) {
      return snippet.id === editSnippet.id;
    });
    return (0,_app_helpers__WEBPACK_IMPORTED_MODULE_1__.isChanged)(snippet, editSnippet);
  }, [snippets, editSnippet]);
  return {
    isProcessing: isProcessing,
    snippets: snippets,
    total: total,
    tags: tags,
    stats: stats,
    onImportCodeSnippets: importCodeSnippetsMutation.mutate,
    onCreate: createMutation.mutate,
    onUpdate: updateMutation.mutate,
    onDelete: deleteMutation.mutate,
    onSave: onSave,
    onCancel: onCancel,
    onDuplicate: onDuplicate,
    onRunTestOnFunctionSnippet: runTestOnFunctionSnippetMutation.mutate,
    onRefresh: function onRefresh() {
      return invalidateQueries();
    },
    tableFilters: tableFilters,
    setTableFilters: setTableFilters,
    editSnippet: editSnippet,
    setEditSnippet: setEditSnippet,
    isSavable: isSavable,
    isResetable: isResetable
  };
};

/***/ }),

/***/ "./app/js/i18n.js":
/*!************************!*\
  !*** ./app/js/i18n.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __ = wp.i18n.__;
var i18n = {};
var pluginName = 'snippet-vault';
i18n.PENDING = __('Pending', pluginName);
i18n.RENAME = __('Rename', pluginName);
i18n.TITLE = __('Title', pluginName);
i18n.ERROR = {
  SNIPPET_FATAL: __('⚠️ A fatal error occured while running the snippet ', pluginName),
  SNIPPET_DISABLED: __('This snippet has been disabled. This message will disappear automatically when you refresh the page.', pluginName),
  UPDATING_OPTIONS: __('An error occured while updating the options.', pluginName),
  GETTING_OPTIONS: __('An error occured while getting the options.', pluginName),
  CHECK_YOUR_CONSOLE: __('For more information, check <a target="_blank" href="https://meowapps.com/tutorial-network-activity-dev-tools/">your console</a>. You might also want to check your <a target="_blank" href="https://meowapps.com/tutorial-php-error-logs/">PHP Error Logs</a>.', pluginName)
};
i18n.ALERTS = {
  ARE_YOU_SURE: __('Are you sure?', pluginName)
};
i18n.COMMON = {
  YES: __('Yes', pluginName),
  NO: __('No', pluginName),
  OK: __('OK', pluginName),
  CANCEL: __('Cancel', pluginName),
  CLEAR: __('Clear', pluginName),
  CLOSE: __('Close', pluginName),
  SAVE: __('Save', pluginName),
  SAVE_AND_CLOSE: __('Save & Close', pluginName),
  UPDATE: __('Update', pluginName),
  RESET: __('Reset', pluginName),
  REFRESH: __('Refresh', pluginName),
  LOADING: __('Loading...', pluginName),
  RESET_SETTINGS: __('Reset Settings', pluginName),
  REFRESH_SETTINGS: __('Refresh Settings', pluginName),
  DELETE: __('Delete', pluginName),
  CLONE: __('Clone', pluginName),
  NO_RESULTS: __('There aren\'t any snippets yet.', pluginName),
  ADD: __('Add', pluginName),
  UPLOAD: __('Upload', pluginName),
  UPLOADING: __('Uploading...', pluginName),
  EDIT: __('Edit', pluginName),
  RENAME: __('Rename', pluginName),
  MAINTENANCE: __('Maintenance', pluginName),
  SEARCH: __('Search', pluginName),
  SELECT: __('Select', pluginName),
  SELECT_ALL: __('Select All', pluginName),
  UNSELECT_ALL: __('Unselect All', pluginName),
  ENABLE: __('Enable', pluginName),
  ENABLE_RECOMMENDED: __('Enable (Recommended)', pluginName),
  DISABLE: __('Disable', pluginName),
  DASHBOARD: __('Dashboard', pluginName),
  SETTINGS: __('Settings', pluginName),
  REFRESH_LOGS: __('Refresh Logs', pluginName),
  CLEAR_LOGS: __('Clear Logs', pluginName),
  LOGS: __('Logs', pluginName),
  DATA_NOT_AVAILABLE: __('Data not available', pluginName)
};
i18n.SETTINGS = {
  TITLE: __('Settings', pluginName),
  HEADER_TITLE: __('Snippet Vault | Settings', pluginName),
  IMPORT_SETTINGS: __('Import Settings & Snippets', pluginName),
  EXPORT_SETTINGS: __('Export Settings & Snippets', pluginName),
  AI_PARAMETERS: {
    TITLE: __('AI Parameters', pluginName),
    AI_ENGINE_INSTALLED: __('AI Engine', pluginName),
    AI_ENGINE_REQUIRED: __('AI Engine', pluginName),
    DOWNLOAD_AI_ENGINE: __('Download AI Engine', pluginName),
    AI_SUGGESTIONS: __('AI Suggestions', pluginName),
    AI_SUGGESTIONS_DESCRIPTION: __(' Will add a panel of AI features above the code editor.', pluginName)
  },
  DEVELOPERS: {
    TITLE: __('For Developers', pluginName),
    SANITIZE_ARGS: __('Sanitize Arguments', pluginName),
    SANITIZE_ARGS_DESCRIPTION: __('Sanitize the arguments before running the snippet: Make sure the non numeric values are in quotes, and ensure the API arguments\' names are using the PHP \'$\' prefix.', pluginName),
    LOGS: __('Logs', pluginName),
    LOGS_DESCRIPTION: __('Enable the server logs for debugging purposes.', pluginName),
    DATABASE_INSPECTION: __('Database Inspection', pluginName),
    DATABASE_INSPECTION_DESCRIPTION: __('This will add a new tab in the settings to inspect the plugin\'s options directly from the databse.', pluginName),
    RAW_EDIT: __('Raw Edit', pluginName)
  },
  PREFERENCES: {
    TITLE: __('Preferences', pluginName),
    PUBLIC_API: __('Public API', pluginName),
    SNIPPET_ENDPOINT: __('Snippet Endpoint', pluginName),
    SNIPPET_ENDPOINT_DESCRIPTION: __('This will let you choose for each snippet an endpoint to call it from the outside.', pluginName),
    CODE_PREVIEW: __('Code Preview', pluginName),
    CODE_PREVIEW_DESCRIPTION: __('Display code preview inside the snippets table.', pluginName)
  },
  SNIPPETS: __('Snippets', pluginName),
  SNIPPETS_TABLE_COLUMNS: {
    SNIPPET: __('Snippet', pluginName),
    ATTRIBUTES: __('Attributes', pluginName),
    TYPE: __('Type', pluginName),
    ACTIVE: __('Active', pluginName),
    ACTIONS: __('Actions', pluginName),
    FUNCTION: __('Function', pluginName)
  },
  SNIPPET: {
    PUBLIC_API: __('Public API', pluginName),
    TOKEN: __('Bearer Token', pluginName),
    METHOD: __('Method', pluginName),
    LABEL: __('Snippet', pluginName),
    TURN_ON: __('On', pluginName),
    TURN_OFF: __('Off', pluginName),
    RUN: __('Run', pluginName),
    CODE: __('Code', pluginName),
    NAME: __('Name', pluginName),
    TEST: __('Test', pluginName),
    BEHAVIOR: __('Behavior', pluginName),
    TARGET: __('Target', pluginName),
    BEHAVIOR_DYNAMIC: __('Allows functions to feedback into the AI for ongoing interactions.', pluginName),
    BEHAVIOR_STATIC: __('Executes tasks independently, suitable for single, definitive actions.', pluginName),
    DESCRIPTION: __('Description', pluginName),
    MISSING_TYPE_WARNING: __('Types are missing for the arguments. Add a type to each one to avoid errors.', pluginName),
    DEFAULT_VALUE: __('Default Value', pluginName),
    TAGS: __('Tags', pluginName),
    TAGS_DESCRIPTION: __('Tags separated by commas.', pluginName),
    HOURS: __('Hours', pluginName),
    MINUTES: __('Minutes', pluginName),
    PRIORITY: __('Priority', pluginName),
    TIMEFRAME: __('Timeframe', pluginName),
    TARGET_TIME: __('Target Time', pluginName),
    TYPE: __('Type', pluginName),
    READ_COMMENTS: __('Query AI (Via Comments)', pluginName),
    MODIFY_BEFORE_USE: __('Modify before use', pluginName),
    ENDPOINT: __('Endpoint Slug', pluginName),
    ENDPOINT_URL: __('The endpoint will be <strong>{0}</strong>', pluginName),
    PUBLIC_API_DESCRIPTION: __('This feature is in beta. It allows calling this function via the REST API', pluginName),
    SCOPES: {
      ALL: __('All', pluginName),
      GLOBAL_FRONTEND_BACKEND: __('Global (All)', pluginName),
      GLOBAL_FRONTEND: __('Global (Front)', pluginName),
      GLOBAL_BACKEND: __('Global (Back)', pluginName),
      FRONTEND: __('Front', pluginName),
      BACKEND: __('Back', pluginName),
      PERSISTENT: __('Global', pluginName),
      FUNCTION: __('Callable (Function Calling)', pluginName),
      SCHEDULED: __('Scheduled', pluginName)
    },
    SELECT_SNIPPET: __('Select a snippet on the left, or click the + button if you want new one.', pluginName),
    SELECT_ALL_TAGS: __('Select all tags', pluginName),
    IMPORT_CODE_SNIPPETS: __('Import All Snippets from Code Snippets', pluginName),
    TEST_PARAMETERS_DESCRIPTION_LOG: __('• Use the <strong>echo (PHP)</strong> or <strong>console.log() (JS)</strong> functions to print anything in the console above.', pluginName),
    TEST_PARAMETERS_DESCRIPTION_ARG: __('• You can change the default value of the function paramaters in the <strong>Function</strong> tab.', pluginName)
  },
  STRING_VALUE_WARNING: __('This value appears to be a string. Ensure to have quotes around it.', pluginName),
  ADD_QOUTES: __('Add Quotes', pluginName),
  EDITOR: __('Editor', pluginName),
  SIDEBAR_EDITOR: __('Sidebar Editor', pluginName),
  SUCCESSFULLY_RAN: __('Snippet successfully ran: {0}', pluginName)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18n);

/***/ }),

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/modern/queryClient.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/NekoUI.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common */ "./common/js/index.js");
/* harmony import */ var _app_components_MainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/MainScreen */ "./app/js/components/MainScreen.js");
/* harmony import */ var _app_contexts_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/contexts/core */ "./app/js/contexts/core.js");
var render = wp.element.render;

var queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
      placeholderData: function placeholderData(prev) {
        return prev;
      }
    }
  }
});

// Neko UI



// Components


document.addEventListener('DOMContentLoaded', function () {
  // Settings
  var settings = document.getElementById('mwcode-admin-settings');
  if (settings) {
    render( /*#__PURE__*/React.createElement(_app_contexts_core__WEBPACK_IMPORTED_MODULE_3__.CoreContextProvider, null, /*#__PURE__*/React.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: queryClient
    }, /*#__PURE__*/React.createElement(_app_components_MainScreen__WEBPACK_IMPORTED_MODULE_2__["default"], null))), settings);
  }

  // Common
  var meowDashboard = document.getElementById('meow-common-dashboard');
  if (meowDashboard) {
    render( /*#__PURE__*/React.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
      client: queryClient
    }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/React.createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Dashboard, null))), meowDashboard);
  }
});

/***/ }),

/***/ "./app/js/requests.js":
/*!****************************!*\
  !*** ./app/js/requests.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSnippet: () => (/* binding */ addSnippet),
/* harmony export */   clearLogs: () => (/* binding */ clearLogs),
/* harmony export */   deleteSnippet: () => (/* binding */ deleteSnippet),
/* harmony export */   exportOptionsAndSnippets: () => (/* binding */ exportOptionsAndSnippets),
/* harmony export */   fetchRawFunctions: () => (/* binding */ fetchRawFunctions),
/* harmony export */   fetchStatsSnippets: () => (/* binding */ fetchStatsSnippets),
/* harmony export */   importCodeSnippets: () => (/* binding */ importCodeSnippets),
/* harmony export */   importOptionsAndSnippets: () => (/* binding */ importOptionsAndSnippets),
/* harmony export */   isFetchingSnippets: () => (/* binding */ isFetchingSnippets),
/* harmony export */   lintSnippet: () => (/* binding */ lintSnippet),
/* harmony export */   refreshLogs: () => (/* binding */ refreshLogs),
/* harmony export */   refreshSettings: () => (/* binding */ refreshSettings),
/* harmony export */   resetSettings: () => (/* binding */ resetSettings),
/* harmony export */   retrieveSnippets: () => (/* binding */ retrieveSnippets),
/* harmony export */   retrieveTags: () => (/* binding */ retrieveTags),
/* harmony export */   runTestOnFunctionSnippet: () => (/* binding */ runTestOnFunctionSnippet),
/* harmony export */   updateRawFunctions: () => (/* binding */ updateRawFunctions),
/* harmony export */   updateSettings: () => (/* binding */ updateSettings),
/* harmony export */   updateSnippet: () => (/* binding */ updateSnippet)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



// #region Logs

var refreshLogs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/get_logs"), {
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            method: 'GET'
          });
        case 3:
          res = _context.sent;
          return _context.abrupt("return", res.data);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error(_context.t0.message);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function refreshLogs() {
    return _ref.apply(this, arguments);
  };
}();
var clearLogs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/clear_logs"), {
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 3:
          _context2.next = 8;
          break;
        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0.message);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function clearLogs() {
    return _ref2.apply(this, arguments);
  };
}();

// #endregion

// #region Settings
var refreshSettings = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var res;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/list"), {
            method: 'GET',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context3.sent;
          if (res.success) {
            _context3.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context3.abrupt("return", res.options);
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function refreshSettings() {
    return _ref3.apply(this, arguments);
  };
}();
var updateSettings = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(newOptions) {
    var res;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/update"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: newOptions
          });
        case 2:
          res = _context4.sent;
          if (res.success) {
            _context4.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context4.abrupt("return", res.options);
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateSettings(_x) {
    return _ref4.apply(this, arguments);
  };
}();
var resetSettings = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/reset"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context5.sent;
          if (res.success) {
            _context5.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context5.abrupt("return", res.options);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function resetSettings() {
    return _ref5.apply(this, arguments);
  };
}();
var exportOptionsAndSnippets = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(setBusyMaintenance) {
    var today, options, snippets, functions, data, filename, blob, url, link;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          setBusyMaintenance(true);
          today = new Date();
          _context6.next = 5;
          return refreshSettings();
        case 5:
          options = _context6.sent;
          _context6.next = 8;
          return retrieveSnippets({});
        case 8:
          snippets = _context6.sent.snippets;
          _context6.next = 11;
          return retrieveFunctions();
        case 11:
          functions = _context6.sent;
          data = {
            options: options,
            snippets: snippets,
            functions: functions
          };
          filename = "snippet-vault-".concat(today.getFullYear(), "-").concat(today.getMonth() + 1, "-").concat(today.getDate(), ".json");
          blob = new Blob([JSON.stringify(data)], {
            type: 'application/json'
          });
          url = URL.createObjectURL(blob);
          link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename);
          link.click();
          _context6.next = 26;
          break;
        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](0);
          alert("Error while exporting settings. Please check your console.");
          console.log(_context6.t0);
        case 26:
          _context6.prev = 26;
          setBusyMaintenance(false);
          return _context6.finish(26);
        case 29:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 22, 26, 29]]);
  }));
  return function exportOptionsAndSnippets(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
var importOptionsAndSnippets = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(setBusyMaintenance) {
    var fileInput;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          try {
            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'application/json';
            fileInput.onchange = /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
                var file, reader;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      file = e.target.files[0];
                      if (file) {
                        _context8.next = 3;
                        break;
                      }
                      return _context8.abrupt("return");
                    case 3:
                      reader = new FileReader();
                      setBusyMaintenance(true);
                      reader.onload = /*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
                          var data, options, snippets, functions;
                          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                            while (1) switch (_context7.prev = _context7.next) {
                              case 0:
                                data = JSON.parse(e.target.result);
                                options = data.options, snippets = data.snippets, functions = data.functions;
                                console.log('Updating settings...', options);
                                _context7.next = 5;
                                return updateSettings({
                                  options: options
                                });
                              case 5:
                                console.log('Settings updated.');
                                console.log('Updating snippets...', snippets);
                                _context7.next = 9;
                                return replaceSnippets(snippets);
                              case 9:
                                console.log('Snippets updated.');
                                console.log('Updating functions...', functions);
                                _context7.next = 13;
                                return replaceFunctions(functions);
                              case 13:
                                console.log('Functions updated.');
                                alert("Settings imported. The page will now reload to reflect the changes.");
                                window.location.reload();
                              case 16:
                              case "end":
                                return _context7.stop();
                            }
                          }, _callee7);
                        }));
                        return function (_x5) {
                          return _ref9.apply(this, arguments);
                        };
                      }();
                      reader.readAsText(file);
                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function (_x4) {
                return _ref8.apply(this, arguments);
              };
            }();
            fileInput.click();
          } catch (err) {
            alert("Error while importing settings. Please check your console.");
            console.log(err);
          } finally {
            setBusyMaintenance(false);
          }
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function importOptionsAndSnippets(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var fetchRawFunctions = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var res;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/functions/raw"), {
            method: 'GET',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context10.sent;
          if (res.success) {
            _context10.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context10.abrupt("return", res.functions);
        case 6:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function fetchRawFunctions() {
    return _ref10.apply(this, arguments);
  };
}();
var updateRawFunctions = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(functions) {
    var res;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/functions/raw"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: {
              functions: functions
            }
          });
        case 2:
          res = _context11.sent;
          if (res.success) {
            _context11.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context11.abrupt("return", res.functions);
        case 6:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function updateRawFunctions(_x6) {
    return _ref11.apply(this, arguments);
  };
}();

// #endregion

// #region Snippets
var isFetchingSnippets = true;
var retrieveSnippets = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(queryParams) {
    var res;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          isFetchingSnippets = true;
          _context12.next = 3;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/list"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: queryParams
          });
        case 3:
          res = _context12.sent;
          isFetchingSnippets = false;
          if (res.success) {
            _context12.next = 7;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 7:
          return _context12.abrupt("return", {
            snippets: res.data,
            total: res.total
          });
        case 8:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function retrieveSnippets(_x7) {
    return _ref12.apply(this, arguments);
  };
}();

// Should only be called for the export settings feature
var retrieveFunctions = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var res;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/functions"), {
            method: "GET",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context13.sent;
          if (res.success) {
            _context13.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context13.abrupt("return", res.functions);
        case 6:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function retrieveFunctions() {
    return _ref13.apply(this, arguments);
  };
}();
var replaceFunctions = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(functions) {
    var res;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/settings/functions/replace"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: {
              functions: functions
            }
          });
        case 2:
          res = _context14.sent;
          if (res.success) {
            _context14.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context14.abrupt("return", {
            functions: res.data
          });
        case 6:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function replaceFunctions(_x8) {
    return _ref14.apply(this, arguments);
  };
}();
var retrieveTags = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var res;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/tags"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context15.sent;
          if (res.success) {
            _context15.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context15.abrupt("return", {
            tags: res.data
          });
        case 6:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function retrieveTags() {
    return _ref15.apply(this, arguments);
  };
}();
var replaceSnippets = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(snippets) {
    var res;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/replace"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: {
              snippets: snippets
            }
          });
        case 2:
          res = _context16.sent;
          if (res.success) {
            _context16.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context16.abrupt("return", {
            snippets: res.data
          });
        case 6:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function replaceSnippets(_x9) {
    return _ref16.apply(this, arguments);
  };
}();
var importCodeSnippets = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
    var res;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/import"), {
            method: "GET",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context17.sent;
          if (res.success) {
            _context17.next = 6;
            break;
          }
          alert("⚠️ " + (res === null || res === void 0 ? void 0 : res.message));
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 6:
          alert(res.total + " snippets imported.");
          return _context17.abrupt("return", {
            total: res.total
          });
        case 8:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function importCodeSnippets() {
    return _ref17.apply(this, arguments);
  };
}();
var fetchStatsSnippets = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    var res;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/stats"), {
            method: "GET",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          res = _context18.sent;
          if (res.success) {
            _context18.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context18.abrupt("return", {
            stats: res.data
          });
        case 6:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function fetchStatsSnippets() {
    return _ref18.apply(this, arguments);
  };
}();
var addSnippet = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(newSnippet) {
    var res;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/add"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: newSnippet
          });
        case 2:
          res = _context19.sent;
          if (res.success) {
            _context19.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context19.abrupt("return", {
            snippet: res.snippet,
            snippets: res.data,
            total: res.total
          });
        case 6:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function addSnippet(_x10) {
    return _ref19.apply(this, arguments);
  };
}();
var updateSnippet = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(snippet) {
    var res;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/update"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: snippet
          });
        case 2:
          res = _context20.sent;
          if (res.success) {
            _context20.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context20.abrupt("return", {
            snippets: res.data,
            total: res.total
          });
        case 6:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function updateSnippet(_x11) {
    return _ref20.apply(this, arguments);
  };
}();
var deleteSnippet = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(snippet) {
    var res;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/snippets/delete"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: snippet
          });
        case 2:
          res = _context21.sent;
          if (res.success) {
            _context21.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context21.abrupt("return", {
            snippets: res.data,
            total: res.total
          });
        case 6:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function deleteSnippet(_x12) {
    return _ref21.apply(this, arguments);
  };
}();
var runTestOnFunctionSnippet = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(json) {
    var res;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/run/test"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: _objectSpread(_objectSpread({}, json), {}, {
              test: true
            })
          });
        case 2:
          res = _context22.sent;
          if (res.success) {
            _context22.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context22.abrupt("return", {
            result: {
              "return": res["return"],
              error: res.error
            }
          });
        case 6:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function runTestOnFunctionSnippet(_x13) {
    return _ref22.apply(this, arguments);
  };
}();
var lintSnippet = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(json) {
    var res;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl, "/run/lint"), {
            method: "POST",
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: json
          });
        case 2:
          res = _context23.sent;
          if (res.success) {
            _context23.next = 5;
            break;
          }
          throw new Error(res === null || res === void 0 ? void 0 : res.message);
        case 5:
          return _context23.abrupt("return", {
            result: res.lint
          });
        case 6:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function lintSnippet(_x14) {
    return _ref23.apply(this, arguments);
  };
}();

// #endregion

/***/ }),

/***/ "./app/js/settings.js":
/*!****************************!*\
  !*** ./app/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiUrl: () => (/* binding */ apiUrl),
/* harmony export */   domain: () => (/* binding */ domain),
/* harmony export */   isPro: () => (/* binding */ isPro),
/* harmony export */   isRegistered: () => (/* binding */ isRegistered),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   pluginUrl: () => (/* binding */ pluginUrl),
/* harmony export */   prefix: () => (/* binding */ prefix),
/* harmony export */   restNonce: () => (/* binding */ restNonce),
/* harmony export */   restUrl: () => (/* binding */ restUrl)
/* harmony export */ });
var prefix = window.mwcode_snippet_vault.prefix;
var domain = window.mwcode_snippet_vault.domain;
var restUrl = window.mwcode_snippet_vault.rest_url.replace(/\/+$/, "");
var apiUrl = window.mwcode_snippet_vault.api_url.replace(/\/+$/, "");
var pluginUrl = window.mwcode_snippet_vault.plugin_url.replace(/\/+$/, "");
var isPro = window.mwcode_snippet_vault.is_pro === '1';
var isRegistered = isPro && window.mwcode_snippet_vault.is_registered === '1';
var restNonce = window.mwcode_snippet_vault.rest_nonce;
var options = window.mwcode_snippet_vault.options;


/***/ }),

/***/ "./common/js/components/LicenseBlock.js":
/*!**********************************************!*\
  !*** ./common/js/components/LicenseBlock.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LicenseBlock: () => (/* binding */ LicenseBlock)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Block.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Input.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Message.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/modal/Modal.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable no-undef */
// React & Vendor Libs
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;

// NekoUI



// From Main Plugin

var CommonApiUrl = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.restUrl, "/meow-licenser/").concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.prefix, "/v1");
var LicenseBlock = function LicenseBlock() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    busy = _useState2[0],
    setBusy = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    meowMode = _useState4[0],
    setMeowMode = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    currentModal = _useState6[0],
    setCurrentModal = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    license = _useState8[0],
    setLicense = _useState8[1];
  var _useState9 = useState(''),
    _useState10 = _slicedToArray(_useState9, 2),
    serialKey = _useState10[0],
    setSerialKey = _useState10[1];
  var isOverridenLicense = _app_settings__WEBPACK_IMPORTED_MODULE_0__.isRegistered && (!license || license.license !== 'valid');
  var checkLicense = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (_app_settings__WEBPACK_IMPORTED_MODULE_0__.isPro) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setBusy(true);
            _context.prev = 3;
            _context.next = 6;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(CommonApiUrl, "/get_license"), {
              method: 'POST',
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
            });
          case 6:
            res = _context.sent;
            setLicense(res.data);
            if (res.data.key) {
              setSerialKey(res.data.key);
            }
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            alert('Error while checking the license. Check your console for more information.');
            console.error(_context.t0);
          case 15:
            setBusy(false);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11]]);
    }));
    return function checkLicense() {
      return _ref.apply(this, arguments);
    };
  }();
  var removeLicense = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setBusy(true);
            _context2.prev = 1;
            _context2.next = 4;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(CommonApiUrl, "/set_license"), {
              method: 'POST',
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
              json: {
                serialKey: null
              }
            });
          case 4:
            res = _context2.sent;
            if (res.success) {
              setSerialKey('');
              setLicense(null);
              setCurrentModal('licenseRemoved');
            }
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            alert('Error while removing the license. Check your console for more information.');
            console.error(_context2.t0);
          case 12:
            setBusy(false);
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return function removeLicense() {
      return _ref2.apply(this, arguments);
    };
  }();
  var forceLicense = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setBusy(true);
            _context3.prev = 1;
            _context3.next = 4;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(CommonApiUrl, "/set_license"), {
              method: 'POST',
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
              json: {
                serialKey: serialKey,
                override: true
              }
            });
          case 4:
            res = _context3.sent;
            if (res.success) {
              setLicense(res.data);
              if (res.data && !res.data.issue) {
                setCurrentModal('licenseAdded');
              }
            }
            _context3.next = 12;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            alert('Error while forcing the license. Check your console for more information.');
            console.error(_context3.t0);
          case 12:
            setBusy(false);
          case 13:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 8]]);
    }));
    return function forceLicense() {
      return _ref3.apply(this, arguments);
    };
  }();
  var validateLicense = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(serialKey === 'MEOW_OVERRIDE')) {
              _context4.next = 5;
              break;
            }
            setMeowMode(true);
            setLicense(null);
            setSerialKey("");
            return _context4.abrupt("return");
          case 5:
            setBusy(true);
            _context4.prev = 6;
            _context4.next = 9;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_1__.nekoFetch)("".concat(CommonApiUrl, "/set_license"), {
              method: 'POST',
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
              json: {
                serialKey: serialKey
              }
            });
          case 9:
            res = _context4.sent;
            if (res.success) {
              setLicense(res.data);
              if (res.data && !res.data.issue) {
                setCurrentModal('licenseAdded');
              }
            }
            _context4.next = 17;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](6);
            alert('Error while validating the license. Check your console for more information.');
            console.error(_context4.t0);
          case 17:
            setBusy(false);
          case 18:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[6, 13]]);
    }));
    return function validateLicense() {
      return _ref4.apply(this, arguments);
    };
  }();
  useEffect(function () {
    checkLicense();
  }, []);
  var licenseTextStatus = isOverridenLicense ? 'Forced License' : _app_settings__WEBPACK_IMPORTED_MODULE_0__.isRegistered ? 'Enabled' : 'Disabled';
  var success = isOverridenLicense || license && license.license === 'valid';
  var message = 'Your license is active. Thanks a lot for your support :)';
  if (isOverridenLicense) {
    message = 'This license has been force-enabled for you.';
    if (license && license.check_url) {
      message = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, message), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", null, "To check your license status, please click ", /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        href: license.check_url + '&cache=' + Math.random() * 642000,
        rel: "noreferrer"
      }, "here"), "."));
    }
  }
  if (!success) {
    if (!license) {
      message = 'Unknown error :(';
    } else if (license.issue === 'no_activations_left') {
      message = /*#__PURE__*/React.createElement("span", null, "There are no activations left for this license. You can visit your account at ", /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://meowapps.com"
      }, "Meow Apps"), ", unregister a site, and click on ", /*#__PURE__*/React.createElement("i", null, "Retry to validate"), ".");
    } else if (license.issue === 'expired') {
      message = /*#__PURE__*/React.createElement("span", null, "Your license has expired. You can get another license or renew the current one by visiting your account at ", /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://meowapps.com"
      }, "Meow Apps"), ".");
    } else if (license.issue === 'missing') {
      message = 'This license does not exist.';
    } else if (license.issue === 'disabled') {
      message = 'This license has been disabled.';
    } else if (license.issue === 'item_name_mismatch') {
      message = 'This license seems to be for a different plugin... isn\'t it? :)';
    } else if (license.issue === 'forced') {
      message = 'ABC';
    } else {
      message = /*#__PURE__*/React.createElement("span", null, "There is an unknown error related to the system or this serial key. Really sorry about this! Make sure your security plugins and systems are off temporarily. If you are still experiencing an issue, please ", /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://meowapps.com/contact/"
      }, "contact us"), ".");
      console.error({
        license: license
      });
    }
  }
  var jsxNonPro = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_2__.NekoBlock, {
    title: "Pro Version (Not Installed)",
    className: "primary"
  }, "You will find more information about the Pro Version ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://meowapps.com"
  }, "here"), ". If you actually bought the Pro Version already, please remove the current plugin and download the Pro Version from your account at ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://meowapps.com/"
  }, "Meow Apps"), ".");
  var jsxProVersion = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_2__.NekoBlock, {
    title: "Pro Version (".concat(licenseTextStatus, ")"),
    busy: busy,
    className: "primary"
  }, !isOverridenLicense && !(license && license.key === serialKey) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, "License Key:"), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoInput, {
    id: "mfrh_pro_serial",
    name: "mfrh_pro_serial",
    disabled: busy,
    value: serialKey,
    onChange: function onChange(txt) {
      return setSerialKey(txt);
    },
    placeholder: "Type your license key..."
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoTypo, {
    p: true
  }, "Insert your serial key above. If you don't have one yet, you can get one ", /*#__PURE__*/React.createElement("a", {
    href: "https://meowapps.com"
  }, "here"), ". If there was an error during the validation, try the ", /*#__PURE__*/React.createElement("i", null, "Retry"), " to ", /*#__PURE__*/React.createElement("i", null, "validate"), " button.")), license && !success && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoMessage, {
    variant: "danger"
  }, message), (isOverridenLicense || license) && success && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoMessage, {
    variant: "success"
  }, message), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 15,
      display: 'flex',
      justifyContent: 'end'
    }
  }, license && !success && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    className: "secondary",
    disabled: busy || !serialKey,
    onClick: validateLicense
  }, "Retry to validate"), license && license.key === serialKey && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    className: "secondary",
    disabled: busy || !serialKey,
    onClick: removeLicense
  }, "Remove License"), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    disabled: busy || !serialKey || license && license.key === serialKey,
    onClick: validateLicense
  }, "Validate License"), meowMode && !success && /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_6__.NekoButton, {
    disabled: busy || !serialKey || license && license.key === serialKey,
    onClick: forceLicense,
    className: "danger"
  }, "Force License")), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoModal, {
    isOpen: currentModal === 'licenseAdded',
    title: "Thank you :)",
    content: "The Pro features have been enabled. This page should be now reloaded.",
    okButton: {
      label: "Reload",
      onClick: function onClick() {
        return location.reload();
      }
    }
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_7__.NekoModal, {
    isOpen: currentModal === 'licenseRemoved',
    title: "Goodbye :(",
    content: "The Pro features have been disabled. This page should be now reloaded.",
    okButton: {
      label: "Reload",
      onClick: function onClick() {
        return location.reload();
      }
    }
  }));
  return _app_settings__WEBPACK_IMPORTED_MODULE_0__.isPro ? jsxProVersion : jsxNonPro;
};


/***/ }),

/***/ "./common/js/dashboard/Dashboard.js":
/*!******************************************!*\
  !*** ./common/js/dashboard/Dashboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useQuery.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useMutation.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Settings.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/CheckboxGroup.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/form/Checkbox.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Page.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Header.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Wrapper.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/tabs/Tabs.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Block.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _SpeedTester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeedTester */ "./common/js/dashboard/SpeedTester.js");
/* harmony import */ var _Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.styled */ "./common/js/dashboard/Dashboard.styled.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// React & Vendor Libs
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;


// NekoUI





if (!_app_settings__WEBPACK_IMPORTED_MODULE_0__.apiUrl || !_app_settings__WEBPACK_IMPORTED_MODULE_0__.restUrl || !_app_settings__WEBPACK_IMPORTED_MODULE_0__.pluginUrl) {
  console.error("[@common/dashboard] apiUrl, restUrl and pluginUrl are mandatory.");
}
var CommonApiUrl = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.restUrl, "/meow-common/v1");
var jsxTextStory = /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.TabText, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
  p: true,
  style: {
    lineHeight: '1.5',
    margin: '0 0 15px 0'
  }
}, "Hi! \u2600\uFE0F Meow Apps isn't your typical plugin suite\u2014it's a passion project led by me, ", /*#__PURE__*/React.createElement("a", {
  target: "_blank",
  href: "https://jordymeow.com"
}, "Jordy Meow"), ", and a stellar team! \uD83D\uDC95 Based in ", /*#__PURE__*/React.createElement("a", {
  target: "_blank",
  href: "https://offbeatjapan.org"
}, "Japan"), ", we're all about making your WordPress experience smoother and speedier. Our plugins are all about boosting your site's performance and user-friendliness. Ready to level up your WordPress game? Check out ", /*#__PURE__*/React.createElement("a", {
  href: "http://meowapps.com",
  target: "_blank"
}, "Meow Apps"), " and let's make magic happen! \uD83C\uDF34\uD83D\uDE40"));
var jsxTextPerformance = /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.TabText, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
  p: true
}, "The ", /*#__PURE__*/React.createElement("b", null, "Empty Request Time"), " measures your installation's basic performance by showing the average time needed to process an empty request on your server. To see how disabling plugins affects the results, turn some off and run the test again. Aim for a time under 2,000 ms, but ideally, keep it below 500 ms. The ", /*#__PURE__*/React.createElement("b", null, "File Operation Time"), " creates a temporary 10MB file each time it runs. ", /*#__PURE__*/React.createElement("b", null, "The SQL Request Time"), " calculates the total number of posts. This process should be quick and have a similar duration to the Empty Request Time."));
var jsxTextRecommendations = /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.TabText, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
  p: true
}, "Maintain a streamlined WordPress setup by using essential plugins and a dependable hosting provider. Refrain from self-hosting unless you're an expert. Go further by reading our tutorials:", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\u2B50\uFE0F ", /*#__PURE__*/React.createElement("a", {
  href: "https://meowapps.com/tutorial-improve-seo-wordpress/",
  target: "_blank"
}, "SEO Checklist & Optimization")), /*#__PURE__*/React.createElement("li", null, "\u2B50\uFE0F ", /*#__PURE__*/React.createElement("a", {
  href: "https://meowapps.com/tutorial-faster-wordpress-optimize/",
  target: "_blank"
}, "Optimize your WordPress Speed")), /*#__PURE__*/React.createElement("li", null, "\u2B50\uFE0F ", /*#__PURE__*/React.createElement("a", {
  href: "https://meowapps.com/tutorial-optimize-images-wordpress/",
  target: "_blank"
}, "Optimize Images (CDN, and so on)")), /*#__PURE__*/React.createElement("li", null, "\u2B50\uFE0F ", /*#__PURE__*/React.createElement("a", {
  href: "https://meowapps.com/tutorial-hosting-service-wordpress/",
  target: "_blank"
}, "The Best Hosting Services for WordPress")))));
var fetchSettings = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_4__.nekoFetch)("".concat(CommonApiUrl, "/all_settings/"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchSettings() {
    return _ref.apply(this, arguments);
  };
}();
var updateOption = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
    var value, id, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          value = _ref2.value, id = _ref2.id;
          _context2.next = 3;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_4__.nekoFetch)("".concat(CommonApiUrl, "/update_option"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce,
            json: {
              name: id,
              value: value
            }
          });
        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function updateOption(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var fetchErrorLogs = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_4__.nekoFetch)("".concat(CommonApiUrl, "/error_logs"), {
            method: 'POST',
            nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
          });
        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.data.reverse());
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function fetchErrorLogs() {
    return _ref4.apply(this, arguments);
  };
}();
var Dashboard = function Dashboard() {
  var queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQueryClient)();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    fatalError = _useState2[0],
    setFatalError = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    busy = _useState4[0],
    setBusy = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    phpInfo = _useState6[0],
    setPhpInfo = _useState6[1];
  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQuery)({
      queryKey: ['all_settings'],
      queryFn: fetchSettings
    }),
    settings = _useQuery.data,
    swrError = _useQuery.error,
    isLoading = _useQuery.isLoading;
  var _useMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({
      mutationFn: updateOption,
      onSuccess: function onSuccess() {
        queryClient.invalidateQueries(['all_settings']);
      }
    }),
    mutateUpdateOption = _useMutation.mutate;
  var _useMutation2 = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.useMutation)({
      mutationFn: fetchErrorLogs
      // onSuccess: () => setBusy(false),
      // onError: () => setBusy(false),
    }),
    loadErrorLogs = _useMutation2.mutate,
    _useMutation2$data = _useMutation2.data,
    phpErrorLogs = _useMutation2$data === void 0 ? [] : _useMutation2$data;
  var hide_meowapps = settings === null || settings === void 0 ? void 0 : settings.meowapps_hide_meowapps;
  var force_sslverify = settings === null || settings === void 0 ? void 0 : settings.force_sslverify;
  useEffect(function () {
    if (swrError && !fatalError) {
      setFatalError(true);
      console.error('Error from useQuery', swrError.message);
    }
  }, [swrError]);
  useEffect(function () {
    var info = document.getElementById('meow-common-phpinfo');
    setPhpInfo(info.innerHTML);
  }, []);
  var handleUpdateOption = function handleUpdateOption(value, id) {
    //setBusy(true);
    mutateUpdateOption({
      value: value,
      id: id
    });
  };
  var handleLoadErrorLogs = function handleLoadErrorLogs() {
    //setBusy('isLoadingErrorLogs');
    loadErrorLogs();
  };
  var jsxHideMeowApps = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoSettings, {
    title: "Main Menu"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckbox, {
    name: "meowapps_hide_meowapps",
    label: "Hide (Not Recommended)",
    description: /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
      p: true
    }, "This will hide the Meow Apps Menu (on the left side) and everything it contains. You can re-enable it through though an option that will be added in Settings \u2192 General."),
    value: "1",
    disabled: busy,
    checked: hide_meowapps,
    onChange: handleUpdateOption
  })));
  var jsxForceSSLVerify = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_8__.NekoSettings, {
    title: "SSL Verify"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_9__.NekoCheckboxGroup, {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_10__.NekoCheckbox, {
    name: "force_sslverify",
    label: "Force (Not Recommended)",
    description: /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
      p: true
    }, "This will enforce the usage of SSL when checking the license or updating the plugin."),
    value: "1",
    disabled: busy,
    checked: force_sslverify,
    onChange: handleUpdateOption
  })));
  return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_11__.NekoPage, {
    showRestError: fatalError
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_12__.NekoHeader, {
    title: "The Dashboard"
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoColumn, {
    full: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTabs, {
    keepTabOnReload: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTab, {
    title: "Meow Apps"
  }, jsxTextStory, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoWrapper, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoColumn, {
    minimal: true
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "AI Engine",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/ai-engine/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/ai-engine/"
  }, "AI Engine")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "This is the ultimate AI plugin for WordPress. From a chatbot adapted to your needs to an AI that can write your content for you, API, REST, and more."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/ai-engine/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/ai-engine/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Media Cleaner",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/media-cleaner/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/media-cleaner/"
  }, "Media Cleaner")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Is your Media Library bloated, your database heavy, and your website running slow? Media Cleaner will clean your Media Library from the media entries (and files) which aren't used in your website, as well as broken entries."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/media-cleaner/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/media-cleaner/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Database Cleaner",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/database-cleaner/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/database-cleaner/"
  }, "Database Cleaner")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Not only does Database Cleaner have a user-friendly UI, but it's also equipped to handle large DBs, giving it an edge over other plugins. It's a must-have for any WordPress site."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/database-cleaner/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/database-cleaner/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Media File Renamer",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/media-file-renamer/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/media-file-renamer/"
  }, "Media File Renamer")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Rename and move files directly from the dashboard, manually, automatically or via AI, either individually or in bulk. It's the best way to rename your files."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/media-file-renamer/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/media-file-renamer/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Social Engine",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/social-engine/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/social-engine/"
  }, "Social Engine")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Effortlessly schedule and automate the perfect posts for all your networks. Unlimited capabilities and infinite className=\"plugin-actual-desc\" extensibility, for free!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/social-engine/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/social-engine/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Meow Analytics",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/meow-analytics/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-analytics/"
  }, "Meow Analytics")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Google Analytics for your website. Simple and fast."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-analytics/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/meow-analytics/"
  }, "Meow Apps")))))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_13__.NekoColumn, {
    minimal: true
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Contact Form Block",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/seo-engine/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/seo-engine/"
  }, "SEO Engine")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Optimize your content for SEO and for the AI world, with AI assistants... while keeping everything simple and fast, as it should be! \u270C\uFE0F"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/seo-engine/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/seo-engine/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Meow Gallery",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/meow-gallery/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-gallery/"
  }, "Meow Gallery")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Fast and beautiful galleries with many layouts. Forget the heavy and slow plugins, use the Meow Gallery for a better experience! \uD83D\uDC95"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-gallery/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/meow-gallery/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Meow Lightbox",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/meow-lightbox/assets/icon-256x256.gif"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-lightbox/"
  }, "Meow Lightbox")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Sleek and performant lightbox with EXIF support."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/meow-lightbox/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/meow-lightbox/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Perfect Images (Retina)",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/wp-retina-2x/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/wp-retina-2x/"
  }, "Perfect Images")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Manage, Optimize, Replace your images with Perfect Images."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/wp-retina-2x/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/wp-retina-2x/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Photo Engine",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/wplr-sync/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/wplr-sync/"
  }, "Photo Engine")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Organize your photos in folders and collections. Synchronize with Lightroom. Simplify and speed up your workflow."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/wplr-sync/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/wplr-sync/"
  }, "Meow Apps"))))), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginBlock, {
    title: "Contact Form Block",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPluginImage, {
    src: "https://ps.w.org/contact-form-block/assets/icon-256x256.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "plugin-desc"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/contact-form-block/"
  }, "Contact Form Block")), /*#__PURE__*/React.createElement("p", {
    className: "plugin-actual-desc"
  }, "Need a very simple but straightforward contact form? This is the one you need. It's fast, simple, and efficient."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Free Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://wordpress.org/plugins/contact-form-block/"
  }, "WordPress.org")), /*#__PURE__*/React.createElement("div", null, "Pro Version: ", /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com/contact-form-block/"
  }, "Meow Apps")))))))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTab, {
    title: "Performance"
  }, jsxTextPerformance, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: 25
    }
  }, /*#__PURE__*/React.createElement(_SpeedTester__WEBPACK_IMPORTED_MODULE_1__.SpeedTester, {
    title: "Empty Request Time",
    request: "empty_request",
    max: 2500
  }), /*#__PURE__*/React.createElement(_SpeedTester__WEBPACK_IMPORTED_MODULE_1__.SpeedTester, {
    title: "File Operation Time",
    request: "file_operation",
    max: 2600
  }), /*#__PURE__*/React.createElement(_SpeedTester__WEBPACK_IMPORTED_MODULE_1__.SpeedTester, {
    title: "SQL Request Time",
    request: "sql_request",
    max: 2800
  })), jsxTextRecommendations), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTab, {
    title: "PHP Info"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPhpInfo, {
    dangerouslySetInnerHTML: {
      __html: phpInfo
    }
  })), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTab, {
    title: "PHP Error Logs"
  }, /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.TabText, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_15__.NekoButton, {
    style: {
      marginBottom: 10
    },
    color: '#ccb027',
    onClick: handleLoadErrorLogs,
    disabled: busy,
    isBusy: busy === 'isLoadingErrorLogs'
  }, "Load PHP Error Logs"), /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_2__.StyledPhpErrorLogs, null, phpErrorLogs.map(function (x) {
    return /*#__PURE__*/React.createElement("li", {
      "class": "log-".concat(x.type)
    }, /*#__PURE__*/React.createElement("span", {
      "class": "log-type"
    }, x.type), /*#__PURE__*/React.createElement("span", {
      "class": "log-date"
    }, x.date), /*#__PURE__*/React.createElement("span", {
      "class": "log-content"
    }, x.content));
  })), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
    p: true
  }, "If you don't see any errors, your host might not allow remote access to PHP error logs. Contact them for assistance, or look in your hosting control panel."))), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_14__.NekoTab, {
    title: "Settings"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_16__.NekoBlock, {
    title: "Settings",
    className: "primary"
  }, jsxHideMeowApps, jsxForceSSLVerify))))));
};


/***/ }),

/***/ "./common/js/dashboard/Dashboard.styled.js":
/*!*************************************************!*\
  !*** ./common/js/dashboard/Dashboard.styled.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledPhpErrorLogs: () => (/* binding */ StyledPhpErrorLogs),
/* harmony export */   StyledPhpInfo: () => (/* binding */ StyledPhpInfo),
/* harmony export */   StyledPluginBlock: () => (/* binding */ StyledPluginBlock),
/* harmony export */   StyledPluginImage: () => (/* binding */ StyledPluginImage),
/* harmony export */   TabText: () => (/* binding */ TabText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/layout/Block.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// React & Vendor Libs


// NekoUI

var TabText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: white;\n  padding: 15px;\n  margin-bottom: -15px;\n\n  a {\n    color: #7dedff;\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 15px;\n  }\n"])));
var StyledPluginBlock = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_neko_ui__WEBPACK_IMPORTED_MODULE_1__.NekoBlock)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n  .neko-block-title {\n    display: none;\n  }\n\n  .plugin-desc {\n    display: flex;\n    flex-direction: column;\n    margin-left: 15px;\n  }\n\n  .neko-block-content {\n    display: flex;\n    padding: 15px;\n\n    h2 {\n      font-size: 18px;\n      margin: 0;\n\n      a {\n        text-decoration: none;\n      }\n    }\n\n    p {\n      margin: 0px;\n      margin-top: 10px;\n      font-size: 13px;\n      line-height: 1.5;\n    }\n\n    .plugin-actual-desc {\n      font-size: 13px;\n      font-weight: 500;\n    }\n  }\n"])));
var StyledPluginImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 125px;\n  width: auto;\n  border-radius: 10px;\n  background: lightgray;\n"])));
var StyledPhpInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\n  margin: 15px;\n\n  .center {\n    background: white;\n    color: black;\n    border-radius: 10px;\n    padding: 10px;\n    max-width: 100%\n    overflow: none;\n\n    h2 {\n      font-size: 26px;\n    }\n\n    table {\n      width: 100%;\n\n      tr td:first-child {\n        width: 220px;\n        font-weight: bold;\n        color: #1e7cba;\n      }\n\n      * {\n        overflow-wrap: anywhere;\n      }\n    }\n  }\n\n  hr {\n    border-color: #1e7cba;\n  }\n"])));
var StyledPhpErrorLogs = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  background: rgb(0, 72, 88);\n  padding: 10px;\n  color: rgb(58, 212, 58);\n  max-height: 600px;\n  min-height: 200px;\n  display: block;\n  font-family: monospace;\n  font-size: 12px;\n  white-space: pre;\n  overflow-x: auto;\n  width: calc(100vw - 276px);\n  color: white;\n\n  .log-date {\n    color: var(--neko-yellow);\n    margin-left: 8px;\n  }\n\n  .log-type {\n    background: #0000004d;\n    padding: 2px 5px;\n    border-radius: 8px;\n    text-transform: uppercase;\n  }\n\n  .log-content {\n    display: block;\n  }\n\n  .log-warning .log-type {\n    background: var(--neko-yellow);\n    color: white;\n  }\n\n  .log-fatal .log-type {\n    background: var(--neko-red);\n    color: white;\n  }\n"])));


/***/ }),

/***/ "./common/js/dashboard/SpeedTester.js":
/*!********************************************!*\
  !*** ./common/js/dashboard/SpeedTester.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedTester: () => (/* binding */ SpeedTester)
/* harmony export */ });
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/misc/Gauge.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/src/helpers.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _Dashboard_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.styled */ "./common/js/dashboard/Dashboard.styled.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// React & Vendor Libs
var _wp$element = wp.element,
  useState = _wp$element.useState,
  useEffect = _wp$element.useEffect;

// NekoUI



// From Main Plugin


// Common

var CommonApiUrl = "".concat(_app_settings__WEBPACK_IMPORTED_MODULE_0__.restUrl, "/meow-common/v1");
var SpeedTester = function SpeedTester(_ref) {
  var request = _ref.request,
    title = _ref.title,
    max = _ref.max;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    runRequests = _useState2[0],
    setRunRequests = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    results = _useState4[0],
    setResults = _useState4[1];
  var resultsTotal = results.length > 0 ? results.reduce(function (a, b) {
    return a + b;
  }) : 0;
  var resultsAverage = results.length > 0 ? Math.ceil(resultsTotal / results.length) : 0;
  var isInitializing = !results.length && runRequests;
  useEffect(function () {
    if (!runRequests) {
      return;
    }
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var start, end, time;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            start = new Date().getTime();
            _context.next = 3;
            return (0,_neko_ui__WEBPACK_IMPORTED_MODULE_2__.nekoFetch)("".concat(CommonApiUrl, "/").concat(request), {
              method: 'POST',
              nonce: _app_settings__WEBPACK_IMPORTED_MODULE_0__.restNonce
            });
          case 3:
            end = new Date().getTime();
            time = end - start;
            setResults(function (x) {
              return [].concat(_toConsumableArray(x), [time]);
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), 1000);
  }, [results]);
  var toggleRequestsProcess = function toggleRequestsProcess() {
    if (!runRequests) {
      setResults([]);
    }
    setRunRequests(!runRequests);
  };
  return /*#__PURE__*/React.createElement(_Dashboard_styled__WEBPACK_IMPORTED_MODULE_1__.TabText, {
    style: {
      width: 200,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__.NekoTypo, {
    h2: true,
    style: {
      color: 'white'
    }
  }, title), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_4__.NekoGauge, {
    size: 200,
    value: isInitializing ? max : resultsAverage,
    max: max
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, isInitializing ? 'START' : resultsAverage + ' ms'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12
    }
  }, isInitializing ? 'YOUR ENGINE' : results.length + ' requests')), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_5__.NekoButton, {
    style: {
      width: '100%',
      marginTop: 10
    },
    color: runRequests ? '#cc3627' : '#ccb027',
    onClick: toggleRequestsProcess
  }, runRequests ? 'Stop' : 'Start'));
};


/***/ }),

/***/ "./common/js/index.js":
/*!****************************!*\
  !*** ./common/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dashboard: () => (/* reexport safe */ _dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard),
/* harmony export */   LicenseBlock: () => (/* reexport safe */ _components_LicenseBlock__WEBPACK_IMPORTED_MODULE_1__.LicenseBlock)
/* harmony export */ });
/* harmony import */ var _dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/Dashboard */ "./common/js/dashboard/Dashboard.js");
/* harmony import */ var _components_LicenseBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LicenseBlock */ "./common/js/components/LicenseBlock.js");



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksnippet_vault"] = self["webpackChunksnippet_vault"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map