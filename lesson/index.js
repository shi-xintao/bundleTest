window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  initLessonState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9716ggLvdKsKmgqsDFKwDa", "initLessonState");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
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
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
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
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require("../../../../Script/config/config");
    var InitLessonState = function() {
      function InitLessonState() {}
      InitLessonState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      InitLessonState.prototype.enter = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(res, rej) {
              var result = config_1.LESSON_LIST_CONFIG;
              res();
            }) ];
          });
        });
      };
      InitLessonState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      InitLessonState.prototype.exit = function(data) {
        throw new Error("Method not implemented.");
      };
      return InitLessonState;
    }();
    exports.default = InitLessonState;
    cc._RF.pop();
  }, {
    "../../../../Script/config/config": void 0
  } ],
  lesson: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29579ZBXMZAepHOEqofzUr6", "lesson");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../kit/kit");
    var initLessonState_1 = require("./state/initLessonState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lesson = function(_super) {
      __extends(Lesson, _super);
      function Lesson() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sid = "Hall";
        _this.lessonItem = null;
        _this.list = null;
        return _this;
      }
      Lesson.prototype.onLoad = function() {
        this.stateMachine = new kit_1.kit.fsm.StateManager(this);
        this.stateMachine.ChangeState(initLessonState_1.default, this);
      };
      Lesson.prototype.onSchoolClick = function(event) {};
      Lesson.prototype.onHouseClick = function(event) {};
      Lesson.prototype.onZooClick = function(event) {};
      Lesson.prototype.onDestroy = function() {};
      __decorate([ property(cc.Prefab) ], Lesson.prototype, "lessonItem", void 0);
      __decorate([ property(cc.Node) ], Lesson.prototype, "list", void 0);
      Lesson = __decorate([ ccclass ], Lesson);
      return Lesson;
    }(cc.Component);
    exports.default = Lesson;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0,
    "./state/initLessonState": "initLessonState"
  } ]
}, {}, [ "lesson", "initLessonState" ]);