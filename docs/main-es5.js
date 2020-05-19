function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"container\">\r\n\r\n  <div class=\"menu\">\r\n\r\n    <header fxLayout=\"row\" fxLayout.lt-sm=\"column\">\r\n\r\n      <h1 class=\"title\">Time Tracker</h1>\r\n\r\n      <div fxLayout=\"row\">\r\n\r\n        <button class=\"btn btn-primary\" (click)=\"openCreateDialog()\"><i class=\"fa fa-plus\"></i></button>\r\n        <input (input)=\"search()\" [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"Search\" class=\"form-control search\">\r\n      </div>\r\n      \r\n    </header>\r\n\r\n    <nav>\r\n\r\n      <a routerLinkActive=\"is-active\" routerLink=\"current\" (click)=\"searchTerm = ''\">Current</a>\r\n\r\n      <a routerLinkActive=\"is-active\" routerLink=\"archive\" (click)=\"searchTerm = ''\">Archive</a>\r\n\r\n    </nav>\r\n    \r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/archive-list/archive-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/archive-list/archive-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArchiveListArchiveListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-archive-task *ngFor=\"let task of tasks; let i = index\" [index]=\"i\" [task]=\"task\" (movedToCurrent)=\"moveTaskToCurrent($event)\" (deleted)=\"deleteTask($event)\"></app-archive-task>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/archive-task/archive-task.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/archive-task/archive-task.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArchiveTaskArchiveTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"task\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"start end\"\r\n  [ngClass]=\"{'is-not-top': index != 0}\">\r\n\r\n  <div fxFlex class=\"full-width\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n    <div class=\"left-side\">\r\n\r\n      <div class=\"description\">\r\n\r\n        <p class=\"task-name\">{{task.name}}</p>\r\n\r\n        <p>{{task.project}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxFlex></div>\r\n\r\n    <div class=\"time\">\r\n      {{prettyTime}}\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n    <button class=\"btn btn-primary\" (click)=\"moveToCurrent()\"><i class=\"fa fa-reply\"></i></button>\r\n\r\n    <button class=\"btn btn-danger\" (click)=\"delete()\"><i class=\"fa fa-trash\"></i></button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-task/create-task.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-task/create-task.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateTaskCreateTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createForm\" (ngSubmit)=\"save(createForm)\">\r\n\r\n  <input formControlName=\"taskName\" placeholder=\"Task name\" class=\"form-control\">\r\n\r\n  <input formControlName=\"projectName\" placeholder=\"Project name\" class=\"form-control\">\r\n  \r\n  <button [disabled]=\"createForm.get('taskName').hasError('required') || createForm.get('projectName').hasError('required')\" type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-save\"></i> Save</button>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskListTaskListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-task *ngFor=\"let task of tasks; let i = index\" [task]=\"task\" [index]=\"i\" (deleted)=\"deleteTask($event)\" (stopped)=\"stopTask($event)\"></app-task>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTaskTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"task\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-sm=\"start end\"\r\n  [ngClass]=\"{'is-not-top': index != 0}\">\r\n\r\n  <div class=\"full-width\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\r\n\r\n    <div class=\"description\">\r\n\r\n      <p class=\"task-name\">{{task.name}}</p>\r\n\r\n      <p>{{task.project}}</p>\r\n    </div>\r\n\r\n    <div fxFlex></div>\r\n\r\n    <div class=\"time\">\r\n      {{prettyTime}}\r\n    </div>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n    <div class=\"btn-group functions\">\r\n\r\n      <button class=\"btn btn-primary\" (click)=\"startTimer()\" [disabled]=\"isActive\"><i class=\"fa fa-play\"></i></button>\r\n\r\n      <button class=\"btn btn-primary\" (click)=\"pauseTimer()\" [disabled]=\"!isActive\"><i class=\"fa fa-pause\"></i></button>\r\n\r\n      <button class=\"btn btn-primary\" (click)=\"stopTimer()\" [disabled]=\"!canBeStopped\"><i\r\n          class=\"fa fa-stop\"></i></button>\r\n\r\n      <button class=\"btn btn-primary\" (click)=\"resetTimer()\" [disabled]=\"!canBeStopped\"><i\r\n          class=\"fa fa-refresh\"></i></button>\r\n\r\n    </div>\r\n\r\n    <button class=\"btn btn-danger\" (click)=\"delete()\"><i class=\"fa fa-trash\"></i></button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-list/task-list.component */
    "./src/app/task-list/task-list.component.ts");
    /* harmony import */


    var _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./archive-list/archive-list.component */
    "./src/app/archive-list/archive-list.component.ts");

    var routes = [{
      path: 'current',
      component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"]
    }, {
      path: 'archive',
      component: _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_4__["ArchiveListComponent"]
    }, {
      path: '',
      redirectTo: 'current',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\r\n  border: 1px solid #dfdfdf;\r\n  margin-top: 10px;\r\n  box-shadow: 1px 1px 5px #dfdfdf;\r\n  background-color: #fff;\r\n  padding: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.title {\r\n  margin-right: auto;\r\n}\r\n\r\n.search {\r\n  width: 300px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.btn {\r\n  height: calc(1.5em + .75rem + 2px);\r\n}\r\n\r\n.is-active {\r\n  color: #000;\r\n  border-bottom: 5px solid #007bff;\r\n}\r\n\r\nnav {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-bottom: 1px solid #efefef;\r\n}\r\n\r\na {\r\n  font-weight: bold;\r\n  margin-right: 10px;\r\n  color: #bfbfbf;\r\n}\r\n\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggI2RmZGZkZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4uaXMtYWN0aXZlIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAwN2JmZjtcclxufVxyXG5cclxubmF2IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjb2xvcjogI2JmYmZiZjtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-task/create-task.component */
    "./src/app/create-task/create-task.component.ts");
    /* harmony import */


    var _services_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/notify.service */
    "./src/app/services/notify.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dialog, notifyService) {
        _classCallCheck(this, AppComponent);

        this.dialog = dialog;
        this.notifyService = notifyService;
      }
      /**
       * Opens a dialog to create a new task.
       */


      _createClass(AppComponent, [{
        key: "openCreateDialog",
        value: function openCreateDialog() {
          this.notifyService.announceTaskStarted(-1);
          this.dialog.open(_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"], {
            width: '400px'
          });
          this.searchTerm = '';
          this.search();
        }
        /**
         * Notifies subscribed components that a search has occured.
         */

      }, {
        key: "search",
        value: function search() {
          this.notifyService.announceSearch(this.searchTerm);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _services_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task-list/task-list.component */
    "./src/app/task-list/task-list.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./create-task/create-task.component */
    "./src/app/create-task/create-task.component.ts");
    /* harmony import */


    var _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./archive-list/archive-list.component */
    "./src/app/archive-list/archive-list.component.ts");
    /* harmony import */


    var _archive_task_archive_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./archive-task/archive-task.component */
    "./src/app/archive-task/archive-task.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__["TaskListComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"], _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_11__["CreateTaskComponent"], _archive_list_archive_list_component__WEBPACK_IMPORTED_MODULE_12__["ArchiveListComponent"], _archive_task_archive_task_component__WEBPACK_IMPORTED_MODULE_13__["ArchiveTaskComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]],
      entryComponents: [_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_11__["CreateTaskComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/archive-list/archive-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/archive-list/archive-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ArchiveListComponent */

  /***/
  function srcAppArchiveListArchiveListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchiveListComponent", function () {
      return ArchiveListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notify.service */
    "./src/app/services/notify.service.ts");

    var ArchiveListComponent = /*#__PURE__*/function () {
      function ArchiveListComponent(taskService, notifyService) {
        var _this = this;

        _classCallCheck(this, ArchiveListComponent);

        this.taskService = taskService;
        this.notifyService = notifyService; // Filter tasks when search has occured.

        notifyService.search.subscribe(function (searchTerm) {
          _this.pauseAllTasks();

          _this.tasks = _this.unfilteredTasks.filter(function (task) {
            return task.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 || task.project.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
          });
        }); // Returns all tasks flagged as archived from storage.

        this.taskService.getArchivedTasks().subscribe(function (archivedTasks) {
          _this.tasks = _this.unfilteredTasks = archivedTasks;
        });
      }
      /**
       * Pauses all tasks;
       */


      _createClass(ArchiveListComponent, [{
        key: "pauseAllTasks",
        value: function pauseAllTasks() {
          this.notifyService.announceTaskStarted(-1);
        }
        /**
         * Deletes a task from storage and removes it from the view.
         * @param id The id of the task to be deleted.
         */

      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          this.taskService["delete"](id);
          this.removeTask(id);
        }
        /**
         * Removes a task from the view.
         * @param id The id of the task to be removed.
         */

      }, {
        key: "removeTask",
        value: function removeTask(id) {
          this.unfilteredTasks = this.unfilteredTasks.filter(function (val) {
            return val.id !== id;
          });
          this.tasks = this.tasks.filter(function (val) {
            return val.id !== id;
          });
        }
        /**
         * Moves an archived task to the current list.
         * @param id The task to be moved.
         */

      }, {
        key: "moveTaskToCurrent",
        value: function moveTaskToCurrent(id) {
          var _this2 = this;

          this.tasks.forEach(function (task) {
            if (task.id === id) {
              _this2.taskService.saveTask(task);

              return;
            }
          });
          this.removeTask(id);
        }
      }]);

      return ArchiveListComponent;
    }();

    ArchiveListComponent.ctorParameters = function () {
      return [{
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]
      }];
    };

    ArchiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-archive-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./archive-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/archive-list/archive-list.component.html"))["default"]
    })], ArchiveListComponent);
    /***/
  },

  /***/
  "./src/app/archive-task/archive-task.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/archive-task/archive-task.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArchiveTaskArchiveTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".task-name {\r\n  font-weight: 500;\r\n  font-size: 1.3em;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.task {\r\n  padding: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.time {\r\n  margin-right: 20px;\r\n}\r\n\r\n.is-not-top {\r\n  border-top: 1px solid #efefef;\r\n}\r\n\r\n.btn-danger {\r\n  margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl2ZS10YXNrL2FyY2hpdmUtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcmNoaXZlLXRhc2svYXJjaGl2ZS10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1uYW1lIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaXMtbm90LXRvcCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/archive-task/archive-task.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/archive-task/archive-task.component.ts ***!
    \********************************************************/

  /*! exports provided: ArchiveTaskComponent */

  /***/
  function srcAppArchiveTaskArchiveTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArchiveTaskComponent", function () {
      return ArchiveTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArchiveTaskComponent = /*#__PURE__*/function () {
      function ArchiveTaskComponent() {
        _classCallCheck(this, ArchiveTaskComponent);

        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movedToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ArchiveTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setPrettyTime();
        }
        /**
         * Sets the formatted time to be displayed.
         */

      }, {
        key: "setPrettyTime",
        value: function setPrettyTime() {
          this.prettyTime = this.determinePrettyTime();
        }
        /**
         * Sets the format of the displayed time.
         */

      }, {
        key: "determinePrettyTime",
        value: function determinePrettyTime() {
          return "".concat(this.padTime(this.task.time.hours), ":").concat(this.padTime(this.task.time.minutes), ":").concat(this.padTime(this.task.time.seconds));
        }
        /**
         * Pads an integer time value with a leading 0 if it is smaller than 10.
         * @param time The integer time value.
         */

      }, {
        key: "padTime",
        value: function padTime(time) {
          if (time < 10) {
            return "0".concat(time);
          }

          return "".concat(time);
        }
        /**
         * Deletes an archived task.
         */

      }, {
        key: "delete",
        value: function _delete() {
          this.deleted.emit(this.task.id);
        }
        /**
         * Moves an archived task back to the current list.
         */

      }, {
        key: "moveToCurrent",
        value: function moveToCurrent() {
          this.task.isCurrent = true;
          this.movedToCurrent.emit(this.task.id);
        }
      }]);

      return ArchiveTaskComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArchiveTaskComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ArchiveTaskComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ArchiveTaskComponent.prototype, "deleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ArchiveTaskComponent.prototype, "movedToCurrent", void 0);
    ArchiveTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-archive-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./archive-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/archive-task/archive-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./archive-task.component.css */
      "./src/app/archive-task/archive-task.component.css"))["default"]]
    })], ArchiveTaskComponent);
    /***/
  },

  /***/
  "./src/app/create-task/create-task.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/create-task/create-task.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateTaskCreateTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn {\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRhc2svY3JlYXRlLXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS10YXNrL2NyZWF0ZS10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/create-task/create-task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/create-task/create-task.component.ts ***!
    \******************************************************/

  /*! exports provided: CreateTaskComponent */

  /***/
  function srcAppCreateTaskCreateTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function () {
      return CreateTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _services_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/notify.service */
    "./src/app/services/notify.service.ts");

    var CreateTaskComponent = /*#__PURE__*/function () {
      function CreateTaskComponent(dialogRef, taskService, notifyService, fb) {
        _classCallCheck(this, CreateTaskComponent);

        this.dialogRef = dialogRef;
        this.taskService = taskService;
        this.notifyService = notifyService;
        this.fb = fb;
      }

      _createClass(CreateTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm = this.fb.group({
            taskName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            projectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
        /**
         * Saves the new task.
         * @param form The component's form group.
         */

      }, {
        key: "save",
        value: function save(form) {
          var _this3 = this;

          this.taskService.getHighestId().subscribe(function (highestId) {
            var task = {
              id: highestId + 1,
              name: form.value.taskName,
              project: form.value.projectName,
              isCurrent: true,
              time: {
                hours: 0,
                minutes: 0,
                seconds: 0
              }
            };

            _this3.taskService.saveTask(task);

            _this3.notifyService.announceTaskAdded(task);

            _this3.dialogRef.close();
          });
        }
      }]);

      return CreateTaskComponent;
    }();

    CreateTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
      }, {
        type: _services_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-task/create-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-task.component.css */
      "./src/app/create-task/create-task.component.css"))["default"]]
    })], CreateTaskComponent);
    /***/
  },

  /***/
  "./src/app/services/notify.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/notify.service.ts ***!
    \********************************************/

  /*! exports provided: NotifyService */

  /***/
  function srcAppServicesNotifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyService", function () {
      return NotifyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NotifyService = /*#__PURE__*/function () {
      function NotifyService() {
        _classCallCheck(this, NotifyService);

        this.searchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.taskAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.taskStartedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.search = this.searchSource.asObservable();
        this.taskAdded = this.taskAddedSource.asObservable();
        this.taskStarted = this.taskStartedSource.asObservable();
      }
      /**
       * Notifies subscribers that a search has occured.
       * @param searchTerm The searched value.
       */


      _createClass(NotifyService, [{
        key: "announceSearch",
        value: function announceSearch(searchTerm) {
          this.searchSource.next(searchTerm);
        }
        /**
         * Notifies subsribers that a task has been started.
         * @param id The id of the task that has been started.
         */

      }, {
        key: "announceTaskStarted",
        value: function announceTaskStarted(id) {
          this.taskStartedSource.next(id);
        }
        /**
         * Notifies subsribers that a new task has been created.
         * @param task The task that has been created.
         */

      }, {
        key: "announceTaskAdded",
        value: function announceTaskAdded(task) {
          this.taskAddedSource.next(task);
        }
      }]);

      return NotifyService;
    }();

    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotifyService);
    /***/
  },

  /***/
  "./src/app/services/task.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/task.service.ts ***!
    \******************************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppServicesTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TaskService = /*#__PURE__*/function () {
      function TaskService() {
        _classCallCheck(this, TaskService);
      }

      _createClass(TaskService, [{
        key: "saveTask",

        /**
         * Saves a task to storage.
         * @param task The task to be saved.
         */
        value: function saveTask(task) {
          localStorage.setItem("time-tracker-".concat(task.id), JSON.stringify(task));
        }
        /**
         * Returns a task from storage.
         * @param id The task's id.
         */

      }, {
        key: "getTask",
        value: function getTask(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(localStorage.getItem("time-tracker-".concat(id))));
        }
        /**
         * Returns all tasks flagged as current.
         */

      }, {
        key: "getCurrentTasks",
        value: function getCurrentTasks() {
          var tasks = [];
          var highestId = this.getHighestIdSync();

          for (var i = 1; i <= highestId; i++) {
            this.getTask(i).subscribe(function (task) {
              if (task !== null && task.isCurrent) {
                tasks.push(task);
              }
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(tasks);
        }
        /**
         * Returns all tasks flagged as archived.
         */

      }, {
        key: "getArchivedTasks",
        value: function getArchivedTasks() {
          var tasks = [];
          var highestId = this.getHighestIdSync();

          for (var i = 1; i <= highestId; i++) {
            this.getTask(i).subscribe(function (task) {
              if (task !== null && !task.isCurrent) {
                tasks.push(task);
              }
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(tasks);
        }
        /**
         * Deletes a task from storage.
         * @param id The task's id.
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          localStorage.removeItem("time-tracker-".concat(id));
        }
        /**
         * Returns the highest id of a task in storage.
         */

      }, {
        key: "getHighestId",
        value: function getHighestId() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.getHighestIdSync());
        }
        /**
         * Returns the highest id of a task in storage synchronously.
         */

      }, {
        key: "getHighestIdSync",
        value: function getHighestIdSync() {
          var allEntries = Object.entries(localStorage);
          var highestId = 0;

          for (var _i = 0, _allEntries = allEntries; _i < _allEntries.length; _i++) {
            var entry = _allEntries[_i];

            if (entry[0].toString().indexOf('time-tracker') !== 1) {
              var task = JSON.parse(entry[1]);

              if (task.id > highestId) {
                highestId = task.id;
              }
            }
          }

          return highestId;
        }
      }]);

      return TaskService;
    }();

    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TaskService);
    /***/
  },

  /***/
  "./src/app/task-list/task-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/task-list/task-list.component.ts ***!
    \**************************************************/

  /*! exports provided: TaskListComponent */

  /***/
  function srcAppTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
      return TaskListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notify.service */
    "./src/app/services/notify.service.ts");

    var TaskListComponent = /*#__PURE__*/function () {
      function TaskListComponent(taskService, notifyService) {
        var _this4 = this;

        _classCallCheck(this, TaskListComponent);

        this.taskService = taskService;
        this.notifyService = notifyService; // Add a task when a new task has been created.

        notifyService.taskAdded.subscribe(function (task) {
          _this4.unfilteredTasks.push(task);

          _this4.tasks = _this4.unfilteredTasks;
        }); // Filter tasks when search has occured.

        notifyService.search.subscribe(function (searchTerm) {
          _this4.pauseAllTasks();

          _this4.tasks = _this4.unfilteredTasks.filter(function (task) {
            return task.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1 || task.project.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
          });
        }); // Returns all tasks flagged as current from storage.

        taskService.getCurrentTasks().subscribe(function (currentTasks) {
          _this4.tasks = _this4.unfilteredTasks = currentTasks;
        });
      }
      /**
       * Pauses and save the tasks when Angular destroys the component.
       */


      _createClass(TaskListComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.pauseAllTasks();
          this.saveTasks();
        }
        /**
         * Pauses all tasks;
         */

      }, {
        key: "pauseAllTasks",
        value: function pauseAllTasks() {
          this.notifyService.announceTaskStarted(-1);
        }
        /**
         * Set up a save action when the page is closed/refreshed.
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          window.onbeforeunload = function () {
            _this5.saveTasks();
          };
        }
        /**
         * Deletes a task from storage and removes it from the view.
         * @param id The id of the task to be deleted.
         */

      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          this.taskService["delete"](id);
          this.removeTask(id);
        }
        /**
         * Removes a task from the view.
         * @param id The id of the task to be removed.
         */

      }, {
        key: "removeTask",
        value: function removeTask(id) {
          this.unfilteredTasks = this.unfilteredTasks.filter(function (val) {
            return val.id !== id;
          });
          this.tasks = this.tasks.filter(function (val) {
            return val.id !== id;
          });
        }
        /**
         * Saves the status of all tasks and removes a task from the current view.
         * @param id The id of the task to be stopped.
         */

      }, {
        key: "stopTask",
        value: function stopTask(id) {
          this.saveTasks();
          this.removeTask(id);
        }
        /**
         * Saves all tasks to storage.
         */

      }, {
        key: "saveTasks",
        value: function saveTasks() {
          var _this6 = this;

          this.tasks.forEach(function (task) {
            _this6.taskService.saveTask(task);
          });
        }
      }]);

      return TaskListComponent;
    }();

    TaskListComponent.ctorParameters = function () {
      return [{
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
      }, {
        type: _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]
      }];
    };

    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task-list/task-list.component.html"))["default"]
    })], TaskListComponent);
    /***/
  },

  /***/
  "./src/app/task/task.component.css":
  /*!*****************************************!*\
    !*** ./src/app/task/task.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTaskTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".task-name {\r\n  font-weight: 500;\r\n  font-size: 1.3em;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.task {\r\n  padding: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.time {\r\n  margin-right: 20px;\r\n}\r\n\r\n.is-not-top {\r\n  border-top: 1px solid #efefef;\r\n}\r\n\r\n.btn:disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.btn-danger {\r\n  margin-left: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLnRhc2sge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmlzLW5vdC10b3Age1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/task/task.component.ts":
  /*!****************************************!*\
    !*** ./src/app/task/task.component.ts ***!
    \****************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/notify.service */
    "./src/app/services/notify.service.ts");

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent(notifyService) {
        var _this7 = this;

        _classCallCheck(this, TaskComponent);

        this.notifyService = notifyService;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Pause all other tasks when a new task is started.

        notifyService.taskStarted.subscribe(function (id) {
          if (id !== _this7.task.id) {
            _this7.pauseTimer();
          }
        });
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setPrettyTime();
          this.isActive = false;
          this.canBeStopped = !(this.task.time.hours === 0 && this.task.time.minutes === 0 && this.task.time.seconds === 0);
        }
        /**
         * Sets the formatted time to be displayed.
         */

      }, {
        key: "setPrettyTime",
        value: function setPrettyTime() {
          this.prettyTime = this.determinePrettyTime();
        }
        /**
         * Sets the format of the displayed time.
         */

      }, {
        key: "determinePrettyTime",
        value: function determinePrettyTime() {
          return "".concat(this.padTime(this.task.time.hours), ":").concat(this.padTime(this.task.time.minutes), ":").concat(this.padTime(this.task.time.seconds));
        }
        /**
         * Pads an integer time value with a leading 0 if it is smaller than 10.
         * @param time The integer time value.
         */

      }, {
        key: "padTime",
        value: function padTime(time) {
          if (time < 10) {
            return "0".concat(time);
          }

          return "".concat(time);
        }
        /**
         * Resets the time.
         */

      }, {
        key: "resetTimer",
        value: function resetTimer() {
          this.pauseTimer();
          this.isActive = false;
          this.task.time.hours = this.task.time.minutes = this.task.time.seconds = 0;
          this.setPrettyTime();
          this.canBeStopped = false;
        }
        /**
         * Starts the timer on a task.
         */

      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this8 = this;

          if (!this.isActive) {
            if (!this.task.dateStarted) {
              this.task.dateStarted = new Date();
            }

            this.isActive = true;
            var dateStarted = new Date();
            var timeAlreadyElapsed = this.task.time.seconds + this.task.time.minutes * 60 + this.task.time.hours * 3600;
            this.timer = window.setInterval(function () {
              return _this8.increaseTime(dateStarted, timeAlreadyElapsed);
            }, 1000);
            this.notifyService.announceTaskStarted(this.task.id);
            this.canBeStopped = true;
          }
        }
        /**
         * Pauses the timer.
         */

      }, {
        key: "pauseTimer",
        value: function pauseTimer() {
          if (this.isActive) {
            this.isActive = false;
            window.clearInterval(this.timer);
          }
        }
        /**
         * Stops the timer and moves a task to the archived list.
         */

      }, {
        key: "stopTimer",
        value: function stopTimer() {
          this.pauseTimer();
          this.task.dateEnded = new Date();
          this.task.isCurrent = false;
          this.stopped.emit(this.task.id);
        }
        /**
         * Deletes a task.
         */

      }, {
        key: "delete",
        value: function _delete() {
          this.deleted.emit(this.task.id);
        }
        /**
         * Determines the difference in seconds between two dates.
         * @param dateStarted The initial date.
         * @param currentDate The end date.
         */

      }, {
        key: "determineDifferenceInTime",
        value: function determineDifferenceInTime(dateStarted, currentDate) {
          return Math.floor(Math.abs(dateStarted - currentDate) / 1000);
        }
        /**
         * Increases the time.
         * @param dateStarted The date the timer was started.
         * @param timeAlreadyElapsed Any time already elapsed on the task.
         */

      }, {
        key: "increaseTime",
        value: function increaseTime(dateStarted, timeAlreadyElapsed) {
          var secondsElapsed = this.determineDifferenceInTime(dateStarted, new Date()) + timeAlreadyElapsed;
          this.task.time.hours = Math.floor(secondsElapsed / 3600);
          secondsElapsed %= 3600;
          this.task.time.minutes = Math.floor(secondsElapsed / 60);
          this.task.time.seconds = secondsElapsed % 60;
          this.setPrettyTime();
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ctorParameters = function () {
      return [{
        type: _services_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskComponent.prototype, "task", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TaskComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskComponent.prototype, "deleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TaskComponent.prototype, "stopped", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task.component.css */
      "./src/app/task/task.component.css"))["default"]]
    })], TaskComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Quartus Kok\Documents\Workspace\Personal\time-tracker\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map