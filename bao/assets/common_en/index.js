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
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ac8cPDPYlJ/JwQzbg9KBxI", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameData = function() {
      function GameData() {
        this.node_path = [ {
          nodePath: "game_one",
          questionNumber: 4
        } ];
        this.record_num = "";
        this.totalStar_num = 0;
        this.isFrist = true;
      }
      Object.defineProperty(GameData, "getInstance", {
        get: function() {
          this._Instance || (this._Instance = new GameData());
          return this._Instance;
        },
        enumerable: false,
        configurable: true
      });
      GameData.prototype.getStarNum = function() {
        return this.totalStar_num;
      };
      GameData.prototype.setStarNum = function(num) {
        this.totalStar_num = Number(num);
      };
      GameData.prototype.addStarNum = function(num) {
        this.totalStar_num += num;
      };
      GameData.prototype.setIsFirst = function(able) {
        console.log("setIsFirst ================" + able);
        this.isFrist = able;
      };
      GameData.prototype.getIsFirst = function() {
        console.log("getIsFirst ================" + this.isFrist);
        return this.isFrist;
      };
      GameData.prototype.getNodePath = function(page) {
        return this.node_path[page].nodePath ? this.node_path[page].nodePath : this.node_path[0].nodePath;
      };
      GameData.prototype.getQuizNumber = function() {
        return this.node_path.length;
      };
      GameData.prototype.getQuestionNumber = function(page) {
        if (this.node_path[page].questionNumber) return this.node_path[page].questionNumber;
        return 0;
      };
      GameData.prototype.getTotalQuestionNumber = function() {
        var num = this.node_path.reduce(function(pre, cur) {
          return pre + cur.questionNumber;
        }, 0);
        return num;
      };
      return GameData;
    }();
    exports.default = GameData.getInstance;
    cc._RF.pop();
  }, {} ],
  HandEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b7dfwDLtxECbL5slm/ZYIX", "HandEn");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandEn = function(_super) {
      __extends(HandEn, _super);
      function HandEn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sp = null;
        _this.cursor = null;
        _this.mask = null;
        _this.bg = null;
        _this.tweens = [];
        _this.currResolve = null;
        _this.isLoop = false;
        _this.times = 1;
        _this.from = null;
        _this.to = null;
        _this.needPlayDrag = false;
        _this.needHide = false;
        _this.guiding = false;
        _this.move_duration = .4;
        return _this;
      }
      HandEn.prototype.onLoad = function() {
        var _this = this;
        this.sp.setCompleteListener(function() {
          if (_this.currResolve) {
            var cb = _this.currResolve;
            cb();
          }
        });
      };
      HandEn.prototype.play = function(name, loop) {
        void 0 === loop && (loop = false);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.sp.setAnimation(0, name, loop);
              _this.currResolve = resolve;
            }) ];
          });
        });
      };
      HandEn.prototype.sleep = function(seconds) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.scheduleOnce(function() {
                resolve();
              }, seconds);
            }) ];
          });
        });
      };
      HandEn.prototype.playClick = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.fadeIn();
              this.node.active = true;
              this.cursor.rotation = 0;
              return [ 4, this.play("anxia") ];

             case 1:
              _a.sent();
              return [ 4, this.sleep(.1) ];

             case 2:
              _a.sent();
              return [ 4, this.play("taiqi") ];

             case 3:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      HandEn.prototype.fadeIn = function() {
        cc.tween(this.bg).to(this.move_duration, {
          opacity: 255
        }, {
          easing: "sineOut"
        }).start();
      };
      HandEn.prototype.move = function(from, to, duration) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.cursor.x = from.x;
            this.cursor.y = from.y;
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var tw;
                var _this = this;
                return __generator(this, function(_a) {
                  tw = cc.tween(this.cursor).to(duration, {
                    x: to.x,
                    y: to.y
                  }, {
                    easing: "sineInOut"
                  }).call(function() {
                    _this.tweens.forEach(function(value, i) {
                      if (value == tw) {
                        _this.tweens.slice(i);
                        return;
                      }
                    });
                    resolve();
                  }).start();
                  this.tweens.push(tw);
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      HandEn.prototype.playDragTo = function(from, to, loop, times) {
        void 0 === loop && (loop = false);
        void 0 === times && (times = 1);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.fadeIn();
            this.node.active = true;
            this.isLoop = loop;
            this.times = times;
            this.times < 0 && (this.times = 1);
            this.cursor.x = from.x;
            this.cursor.y = from.y;
            this.from = from;
            this.to = to;
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  this.needPlayDrag = true;
                  this.guiding = true;
                  this.needHide = false;
                  resolve();
                  return [ 2 ];
                });
              });
            }) ];
          });
        });
      };
      HandEn.prototype.update = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(this.needPlayDrag && this.guiding && !this.needHide)) return [ 3, 7 ];
              this.needPlayDrag = false;
              console.log("play dragging ......>>>");
              return [ 4, this.move(this.cursor, this.from, .5) ];

             case 1:
              _a.sent();
              return [ 4, this.play("anxia") ];

             case 2:
              _a.sent();
              return [ 4, this.sleep(.2) ];

             case 3:
              _a.sent();
              return [ 4, this.move(this.from, this.to, 1) ];

             case 4:
              _a.sent();
              return [ 4, this.play("taiqi") ];

             case 5:
              _a.sent();
              return [ 4, this.sleep(.5) ];

             case 6:
              _a.sent();
              this.guiding ? this.needPlayDrag = true : this.hide();
              _a.label = 7;

             case 7:
              if (this.needHide) {
                this.needHide = false;
                this.isLoop = false;
                this.tweens.forEach(function(value, i) {
                  value.stop();
                });
                this.tweens = [];
                this.node.active = false;
              }
              return [ 2 ];
            }
          });
        });
      };
      HandEn.prototype.hide = function() {
        this.guiding = false;
        this.needHide = true;
      };
      Object.defineProperty(HandEn.prototype, "isShowing", {
        get: function() {
          return this.node.active;
        },
        enumerable: false,
        configurable: true
      });
      HandEn.prototype.stop = function() {};
      HandEn.prototype.setTargetBound = function(x, y, w, h) {
        this.mask.width = w;
        this.mask.height = h;
        this.mask.x = x;
        this.mask.y = y;
        var screenSize = cc.Canvas.instance.designResolution;
        this.bg.width = screenSize.width;
        this.bg.height = screenSize.height;
        this.bg.x = -this.mask.x;
        this.bg.y = -this.mask.y;
        this.cursor.x = this.mask.x;
        this.cursor.y = this.mask.y;
      };
      HandEn.prototype.setTargetNode = function(target, parent) {
        if (null == target) return;
        var worldPos = target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.mask.width = target.width;
        this.mask.height = target.height;
        var localPos = parent.convertToNodeSpaceAR(worldPos);
        this.setTargetBound(localPos.x, localPos.y, target.width, target.height);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u624b\u52a8\u753b"
      }) ], HandEn.prototype, "sp", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u624b"
      }) ], HandEn.prototype, "cursor", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "Mask"
      }) ], HandEn.prototype, "mask", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "Bg"
      }) ], HandEn.prototype, "bg", void 0);
      HandEn = __decorate([ ccclass ], HandEn);
      return HandEn;
    }(cc.Component);
    exports.default = HandEn;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e85fX/yqJMgoHFcHEmkkfH", "Main");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameData_1 = require("./GameData");
    var Util_1 = require("./Util");
    var Tigo_1 = require("./Tigo");
    var constant_1 = require("./constant");
    cc.game.on(cc.game.EVENT_GAME_INITED, function() {
      cc.macro.ENABLE_MULTI_TOUCH = false;
      console.log("\u5173\u95ed\u4e86\u591a\u70b9\u89e6\u6478~", cc.macro.ENABLE_MULTI_TOUCH);
    });
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.menuPre = null;
        _this.menuItem = null;
        _this.node_nowShow = null;
        _this.page_num = 0;
        _this.Lesson_Sign = "TCL5";
        _this.page = "page";
        _this.star = "star";
        _this.record_num = "record_num";
        _this.isSecgame = 0;
        _this.secKey = "seckey";
        _this.isTest = false;
        return _this;
      }
      Main.prototype.onLoad = function() {
        this.Lesson_Sign = constant_1.gameState.Lesson_Sign;
        var page = this.Lesson_Sign + this.page;
        var star = this.Lesson_Sign + this.star;
        var record_num = this.Lesson_Sign + this.record_num;
        GameData_1.default.record_num = Tigo_1.default.callAppToStorage("GET", record_num) || 0;
        var num = Tigo_1.default.callAppToStorage("GET", star) || 0;
        GameData_1.default.setStarNum(num);
        console.log("\u5f53\u524d\u6e38\u620f\u5f00\u53e3\u6570===========\u300b" + GameData_1.default.record_num);
        this.page_num = Tigo_1.default.callAppToStorage("GET", page) || this.page_num;
        console.log("\u5f53\u524d\u6e38\u620f\u9875\u6570============\u300b" + this.page_num);
        var sgk = this.Lesson_Sign + this.secKey;
        this.isSecgame = Tigo_1.default.callAppToStorage("GET", sgk) || 0;
        console.log("\u6e38\u620f isSec ===" + this.isSecgame);
        this.openGame(0);
        this.registerListener();
        Tigo_1.default.callAppToLoaded();
      };
      Main.prototype.start = function() {
        var userData = Tigo_1.default.getBaseInfo();
        if (userData) {
          var ud = JSON.parse(userData);
          Tigo_1.default.setClassId(ud.lessonId);
          Tigo_1.default.setUserId(ud.userId);
          Tigo_1.default.setModuleId(ud.moduleId);
          Tigo_1.default.setLessonModelId(ud.lessonModuleId);
          console.log("lessonId == " + Tigo_1.default.classId + "  userId == " + Tigo_1.default.userId + "moduleId ==" + Tigo_1.default.moduleId + "lessonModuleId ==" + Tigo_1.default.lessonModuleId);
        }
        Tigo_1.default.startGameCallApp();
      };
      Main.prototype.registerListener = function() {};
      Main.prototype.entryMenu = function(endtag) {
        this.page_num++;
        this.page_num >= GameData_1.default.node_path.length - 1 && Tigo_1.default.callAppToSpeed();
        console.log("this.page_num ===" + this.page_num);
        console.log("GameData.node_path.length ===" + GameData_1.default.node_path.length);
        if (this.page_num >= GameData_1.default.node_path.length) {
          var sgk = this.Lesson_Sign + this.secKey;
          Tigo_1.default.callAppToStorage("PUT", sgk, 1);
          this.isSecgame = 1;
          if (endtag) {
            console.log("into all game end ani");
            this.gameAllend();
            return;
          }
          this.page_num = GameData_1.default.node_path.length - 1;
        }
        var page = this.Lesson_Sign + this.page;
        var star = this.Lesson_Sign + this.star;
        var record_num = this.Lesson_Sign + this.record_num;
        Tigo_1.default.callAppToStorage("PUT", page, this.page_num);
        Tigo_1.default.callAppToAnalyse("end", false);
        Tigo_1.default.callAppToStorage("PUT", star, GameData_1.default.totalStar_num);
        Tigo_1.default.callAppToStorage("PUT", record_num, Number(GameData_1.default.record_num));
        if (this.node_nowShow) {
          Util_1.default.voiceNode = null;
          this.node_nowShow.destroy();
        }
        this.openMenu(true);
      };
      Main.prototype.openMenu = function(isGoon) {
        void 0 === isGoon && (isGoon = false);
        this.menuItem = cc.instantiate(this.menuPre);
        this.node.addChild(this.menuItem);
        this.menuItem.getComponent("gameMenu").initMenu(this.page_num, this.isSecgame, isGoon, this);
      };
      Main.prototype.openGame = function(gid) {
        this.menuItem && this.menuItem.destroy();
      };
      Main.prototype.gameAllend = function() {
        var star = this.Lesson_Sign + this.star;
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u83b7\u5f97\u91d1\u5e01 === " + GameData_1.default.totalStar_num);
        console.log("\u672c\u90e8\u5206\u4e00\u5171\u5f00\u53e3 === " + GameData_1.default.record_num + "\u6b21");
        var h = {
          userId: Tigo_1.default.userId,
          lessonId: Tigo_1.default.classId,
          redVal: GameData_1.default.totalStar_num,
          openVal: GameData_1.default.record_num,
          lessonModelId: Tigo_1.default.lessonModuleId
        };
        Tigo_1.default.callAppToHttp("api/reward/info", "POST", h);
        Tigo_1.default.callAppToStorage("remove", star, 0);
        Tigo_1.default.callAppToAnalyse("end");
        Tigo_1.default.callAppToClose("replayOrNext", true);
        Tigo_1.default.exitGameCallApp();
      };
      Main.prototype.loadPage = function(page_num) {
        var _this = this;
        console.log("\u5f53\u524d\u52a0\u8f7d\u7684\u6e38\u620f\u9875\u6570---------------\x3e" + page_num);
        var nameProfab_str = "prefabs/" + GameData_1.default.getNodePath(page_num);
        cc.loader.loadRes(nameProfab_str, function(err, prefab) {
          err ? console.log(err, "err \u9884\u5236\u4f53\u52a0\u8f7d\u5931\u8d25==========>") : _this.addPrefab(prefab);
        });
      };
      Main.prototype.addPrefab = function(prefab) {
        if (this.node_nowShow) {
          Util_1.default.voiceNode = null;
          this.node_nowShow.destroy();
        }
        cc.audioEngine.stopAllEffects();
        this.node_nowShow = cc.instantiate(prefab);
        this.node.addChild(this.node_nowShow);
        this.node.getChildByName("coin") && this.node.getChildByName("coin").destroy();
      };
      Main.prototype.onDestroy = function() {
        console.log("\u5f53\u524d\u811a\u672c----onDestroy");
        this.unRegisterListener();
        Tigo_1.default.exitGameCallApp();
      };
      Main.prototype.unRegisterListener = function() {};
      Main.prototype.testChangePage = function(event, choose) {
        var maxPage = GameData_1.default.node_path.length - 1;
        if (choose < 0 && 0 == this.page_num) {
          console.log("\u6700\u5c0f\u9875\u4e86\uff5e\uff5e");
          return;
        }
        if (choose > 0 && this.page_num == maxPage) {
          console.log("\u6700\u5927\u9875\u4e86\uff5e\uff5e");
          return;
        }
        this.page_num = this.page_num + Number(choose);
        this.page_num = Math.max(this.page_num, 0);
        this.page_num = Math.min(this.page_num, maxPage);
        console.log("\u66f4\u6539\u540e\u7684\u9875\u6570============\u300b\u300b\u300b" + this.page_num);
        this.loadPage(this.page_num);
      };
      Main.prototype.testQuickBtn = function() {
        if (this.isTest) {
          this.node.getChildByName("left").zIndex = 999;
          this.node.getChildByName("right").zIndex = 999;
        }
        this.node.getChildByName("left").active = this.isTest;
        this.node.getChildByName("right").active = this.isTest;
      };
      __decorate([ property(cc.Prefab) ], Main.prototype, "menuPre", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    console.log("addEventListener==========");
    window.addEventListener("message", function(e) {
      console.log("get app data === ", e.data);
      e.data.action && window["callCocos"](e.data);
    }, false);
    console.log("addEventListener-----------");
    cc._RF.pop();
  }, {
    "./GameData": "GameData",
    "./Tigo": "Tigo",
    "./Util": "Util",
    "./constant": "constant"
  } ],
  Tigo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "595afJg4OFOfo+eyLz0cTJv", "Tigo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constant_1 = require("./constant");
    var TigoManager = function() {
      function TigoManager() {
        this.classId = "";
        this.gameId = "";
        this.userId = "";
        this.moduleId = "";
        this.lessonModuleId = "";
        this.TotalGameNum = 8;
        this.TotalGameErrorNum = 0;
        this.TotalGameRightOnce = 0;
        this.TotalGameRightTwice = 0;
        this.SingleGameErrorNum = 0;
        this.SingleGameRightOnce = 0;
        this.SingleGameRightTwice = 0;
        this.appData = null;
        this.TiGoTotalData = {
          quizTotalNum: 2,
          gameNum: 0,
          questionTotlaNum: 8,
          startGameTime: 0,
          totalGameTime: 0,
          errorNum: 0,
          accuracy: {
            once: "0%",
            twice: "0%"
          }
        };
        this.TigoSingleData = {
          MaxIndex: 0,
          errorNum: 0,
          answerData: {},
          accuracy: {
            once: "0%",
            twice: "0%"
          }
        };
      }
      TigoManager.getInstance = function() {
        this._instance || (this._instance = new TigoManager());
        console.log("TigoManager _instance is success");
        return this._instance;
      };
      TigoManager.prototype.addGameError = function() {
        this.SingleGameErrorNum++;
        this.TotalGameErrorNum++;
        this.TigoSingleData.errorNum += 1;
        this.TiGoTotalData.errorNum += 1;
      };
      TigoManager.prototype.addGameRightOnce = function() {
        this.SingleGameRightOnce += 1;
        this.TotalGameRightOnce += 1;
        this.TigoSingleData.accuracy.once = this.SingleGameRightOnce / this.TigoSingleData.MaxIndex * 100 + "%";
        this.TiGoTotalData.accuracy.once = this.TotalGameRightOnce / this.TiGoTotalData.gameNum * 100 + "%";
      };
      TigoManager.prototype.addGameRightTwice = function() {
        this.SingleGameRightTwice += 1;
        this.TotalGameRightTwice += 1;
        this.TigoSingleData.accuracy.twice = this.SingleGameRightTwice / this.TigoSingleData.MaxIndex * 100 + "%";
        this.TiGoTotalData.accuracy.twice = this.TotalGameRightTwice / this.TiGoTotalData.gameNum * 100 + "%";
      };
      TigoManager.prototype.refreshSingleData = function() {
        this.SingleGameRightOnce = 0;
        this.SingleGameRightTwice = 0;
        this.SingleGameErrorNum = 0;
        this.TigoSingleData.errorNum = 0;
        this.TigoSingleData.answerData = {};
        this.TigoSingleData.accuracy.once = "0%";
        this.TigoSingleData.accuracy.twice = "0%";
      };
      TigoManager.prototype.setSingleAnswerData = function(index, num) {
        var q = "Q" + index + " wrong";
        this.TigoSingleData.answerData[q] = num;
      };
      TigoManager.prototype.clearAllTigoData = function() {
        this.refreshSingleData();
        this.TotalGameNum = 0;
        this.TotalGameRightOnce = 0;
        this.TotalGameRightTwice = 0;
        this.TiGoTotalData.errorNum = 0;
        this.TiGoTotalData.accuracy.once = "0%";
        this.TiGoTotalData.accuracy.twice = "0%";
      };
      TigoManager.prototype.setGameId = function(id) {
        this.gameId = constant_1.gameState.gameName + id;
      };
      TigoManager.prototype.setSingleMax = function(num) {
        this.TigoSingleData.MaxIndex = num;
      };
      TigoManager.prototype.setClassId = function(id) {
        this.classId = id;
      };
      TigoManager.prototype.setUserId = function(id) {
        this.userId = id;
      };
      TigoManager.prototype.setModuleId = function(id) {
        this.moduleId = id;
      };
      TigoManager.prototype.setLessonModelId = function(id) {
        this.lessonModuleId = id;
      };
      TigoManager.prototype.callAppToSpeed = function(num) {
        void 0 === num && (num = 2);
        var url = "api/course/speed";
        var params = {
          userId: this.userId,
          type: this.moduleId,
          speedVal: num,
          lessonModelId: this.lessonModuleId
        };
        this.callAppToHttp(url, "POST", params);
      };
      TigoManager.prototype.exitGameCallApp = function() {
        return;
      };
      TigoManager.prototype.startGameCallApp = function() {
        return;
      };
      TigoManager.prototype.callAppToCollect = function(gameIndex, type, result) {
        var h = {
          userId: this.userId,
          lessonId: this.classId,
          lessonModelId: this.lessonModuleId,
          gameIndex: gameIndex,
          type: type,
          result: Number(result),
          timestamp: this.getTime()
        };
        var handleData = {
          action: "TiGoHttp",
          param: {
            url: "api/operate/infoV2",
            method: "POST",
            params: h
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.getTime = function() {
        var time = Date.now().toString();
        time = time.substr(0, 10);
        return time;
      };
      TigoManager.prototype.callAppToAnalyse = function(action, total, param) {
        void 0 === total && (total = true);
        void 0 === param && (param = {});
        var handleData = {
          action: "TiGoAnalyse",
          param: {
            analyseAction: action,
            analyseParam: {
              analyseId: total ? this.classId : this.gameId,
              analyseData: param
            }
          }
        };
        console.log("callAppToAnalyse ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToClose = function(data, next) {
        void 0 === next && (next = false);
        var handleData = next ? {
          action: "TiGoClose",
          param: {
            closeNext: data
          }
        } : {
          action: "TiGoClose",
          param: {}
        };
        console.log("callAppToClose ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToSaveData = function(total) {
        void 0 === total && (total = false);
        var handleData = {
          action: "TigoGameData",
          param: total ? this.TiGoTotalData : this.TigoSingleData
        };
        console.log("callAppToSaveData ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToRecord = function(sec, word) {
        var handleData = {
          action: "TiGoStartRecord",
          param: {
            name: "game1",
            time: sec.toString(),
            standardText: word
          }
        };
        console.log("callAppToRecord ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToStopRecord = function() {
        var handleData = {
          action: "TiGoStopRecord"
        };
        console.log("callAppToStopRecord ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToResult = function(word, path) {
        var handleData = {
          action: "TiGoVoiceEvaluation",
          param: {
            standardText: word,
            path: path
          }
        };
        console.log("callAppToResult ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.getAppData = function() {
        cc.log("getAppData");
        return this.appData;
      };
      TigoManager.prototype.callAppToStorage = function(method, key, val) {
        void 0 === val && (val = 0);
        var value = "0";
        switch (method) {
         case "PUT":
          value = String(val);
        }
        var handleData = {
          action: "TiGoStorage",
          param: {
            method: method,
            key: key,
            value: value.toString()
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var page_num = window.tiGo.callApp(JSON.stringify(handleData));
          return page_num;
        }
        if (window.webkit) {
          var page_num_1 = window.prompt("callApp", JSON.stringify(handleData));
          console.log(page_num_1);
          return page_num_1;
        }
      };
      TigoManager.prototype.callAppToHttp = function(api, method, params) {
        var handleData = {
          action: "TiGoHttp",
          param: {
            url: api,
            method: method,
            params: params,
            unique: this.classId
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToLoaded = function() {
        var handleData = {
          action: "TiGoLifecycle",
          param: {
            name: "loaded",
            param: ""
          }
        };
        console.log("callAppToLoaded ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.getBaseInfo = function() {
        var handleData = {
          action: "TiGoBaseInfo"
        };
        console.log("getBaseInfo ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var BaseInfo = window.tiGo.callApp(JSON.stringify(handleData));
          console.log(BaseInfo);
          return BaseInfo;
        }
        if (window.webkit) {
          var BaseInfo_1 = window.prompt("callApp", JSON.stringify(handleData));
          console.log("webkit BaseInfo ==== " + BaseInfo_1);
          return BaseInfo_1;
        }
      };
      TigoManager._instance = null;
      return TigoManager;
    }();
    window.callCocos = function(msg1) {
      "TiGoLifecycle" == msg1.action ? window.webframe.Notify.trigger("callCocos_loaded") : window.webframe.Notify.trigger("callCocos_data", msg1);
      return "callByAndroidParam ok!";
    };
    exports.default = TigoManager.getInstance();
    cc._RF.pop();
  }, {
    "./constant": "constant"
  } ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c8b9DRDi1I57SIVZ8ELjKO", "Util");
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
    var Tigo_1 = require("./Tigo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Util = function(_super) {
      __extends(Util, _super);
      function Util() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin_small = null;
        _this.coin_mid = null;
        _this.coin_large = null;
        _this.PrefabNode = null;
        _this.voiceNode = null;
        _this.voice_name = "prefab_common/voice";
        _this.node_name = "prefab_common/startLayer";
        _this.coin_name_1 = "prefab_common/coin_small";
        _this.coin_name_2 = "prefab_common/coin_mid";
        _this.coin_name_3 = "prefab_common/coin_large";
        _this.exitbutton = "prefab_common/exitbutton";
        _this.coin_new_name = "prefab_common/coinNode";
        return _this;
      }
      Util_1 = Util;
      Util.getInstance = function() {
        null == this.instance && (this.instance = new Util_1());
        return this.instance;
      };
      Util.prototype.onLoad = function() {
        cc.log(this.coin_small);
      };
      Util.prototype.addVoice = function(node, callBack, that) {
        var _this = this;
        cc.loader.loadRes(this.voice_name, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "Voice \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var voice = cc.instantiate(Prefab);
            var clickBack = function() {
              callBack && callBack.bind(that)();
            };
            voice.on("click", clickBack, that);
            node.addChild(voice, 996);
            voice.name = "voices";
            _this.voiceNode = voice;
          }
        });
      };
      Util.prototype.addExitButton = function(node, callBack, that) {
        return;
      };
      Util.prototype.stopVoiceAni = function() {
        this.voiceNode && this.voiceNode.getComponent(cc.Animation).play("voice_end");
      };
      Util.prototype.playVoiceAni = function() {
        this.voiceNode && this.voiceNode.getComponent(cc.Animation).play("voice");
      };
      Util.prototype.addStartLayer = function(node, callBack, that) {
        var _this = this;
        cc.loader.loadRes(this.node_name, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "startNode \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            _this.PrefabNode = cc.instantiate(Prefab);
            _this.setStartBtnBack(callBack, that);
            node.addChild(_this.PrefabNode, 999);
          }
        });
      };
      Util.prototype.setStartBtnBack = function(callBck, that) {
        var _this = this;
        var btn = this.PrefabNode.getChildByName("start");
        var clickBack = function() {
          _this.PrefabNode.active = false;
          callBck && callBck.bind(that)();
        };
        btn.on("click", clickBack, that);
      };
      Util.prototype.addCoin_new = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.loader.loadRes(_this.coin_new_name, cc.Prefab, function(err, Prefab) {
            if (err) {
              reject(err);
              console.log(err, "coinNodePrefab \u52a0\u8f7d\u5931\u8d25===============>>");
            } else resolve(Prefab);
          });
        });
      };
      Util.prototype.addCoin_midAndMenu = function(node, et) {
        void 0 === et && (et = false);
        cc.loader.loadRes(this.coin_name_2, cc.Prefab, function(err, Prefab) {
          if (err) console.log(err, "prefab \u52a0\u8f7d\u5931\u8d25===============>>"); else {
            var coin = cc.instantiate(Prefab);
            node.parent.addChild(coin, 999);
            coin.name = "coin";
            var spine = coin.getChildByName("spineNode").getComponent(sp.Skeleton);
            spine.clearTracks();
            spine.setAnimation(0, "Animation", true);
          }
        });
      };
      var Util_1;
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_small", void 0);
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_mid", void 0);
      __decorate([ property(cc.Prefab) ], Util.prototype, "coin_large", void 0);
      Util = Util_1 = __decorate([ ccclass ], Util);
      return Util;
    }(cc.Component);
    exports.default = Util.getInstance();
    cc._RF.pop();
  }, {
    "./Tigo": "Tigo"
  } ],
  coinBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8cadSO2A5Dd6xldD0oQ1vE", "coinBoard");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CoinBoard = function(_super) {
      __extends(CoinBoard, _super);
      function CoinBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coin = [];
        return _this;
      }
      CoinBoard.prototype.start = function() {};
      CoinBoard.prototype.setCoinAni = function(num) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              for (var i = 0; i < _this.coin.length; i++) _this.coin[i].active = i < num;
              _this.node.getComponent(cc.Animation).play();
              _this.playCoinEffect(num);
              _this.scheduleOnce(function() {
                resolve();
              }, 2);
            }) ];
          });
        });
      };
      CoinBoard.prototype.reset = function() {
        for (var i = 0; i < this.coin.length; i++) this.coin[i].active = false;
      };
      CoinBoard.prototype.playCoinEffect = function(num) {
        AudioManager_1.default.playEffect("common_en", "coin_fly/jinbi" + num);
      };
      __decorate([ property(cc.Node) ], CoinBoard.prototype, "coin", void 0);
      CoinBoard = __decorate([ ccclass ], CoinBoard);
      return CoinBoard;
    }(cc.Component);
    exports.default = CoinBoard;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  constant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5735cdbNOpI+IoO8FGd7iBe", "constant");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadCocosResAsset = exports.loadCocosPrefab = exports.loadCocosResSkeletonData = exports.loadCocosSpriteFrame = exports.loadSpriteFrame = exports.gameState = exports.playSpineAnimation = void 0;
    function playSpineAnimation(spine, animation, loop, trackIndex) {
      void 0 === loop && (loop = false);
      void 0 === trackIndex && (trackIndex = 0);
      return new Promise(function(resolve) {
        loop || spine.setCompleteListener(resolve);
        spine.setAnimation(trackIndex, animation, loop);
      });
    }
    exports.playSpineAnimation = playSpineAnimation;
    exports.gameState = {
      isRecordState: false,
      gameName: "cc_LV1_game",
      Lesson_Sign: "LV1"
    };
    function loadSpriteFrame(url) {
      return new Promise(function(resolve) {
        cc.loader.loadRes(url, cc.SpriteFrame, function(err, sprite) {
          err ? console.log(err, "SpriteFrame \u52a0\u8f7d\u5931\u8d25===============>>") : resolve(sprite);
        });
      });
    }
    exports.loadSpriteFrame = loadSpriteFrame;
    function loadCocosSpriteFrame(file, sprite, callback) {
      cc.loader.loadRes(file, cc.SpriteFrame, function(error, sp) {
        if (error) {
          cc.error(error);
          callback && callback(null);
          return;
        }
        sprite.spriteFrame = sp;
        callback && callback(sp);
      });
    }
    exports.loadCocosSpriteFrame = loadCocosSpriteFrame;
    function loadCocosResSkeletonData(skeletonPath) {
      return loadCocosResAsset(skeletonPath, sp.SkeletonData);
    }
    exports.loadCocosResSkeletonData = loadCocosResSkeletonData;
    function loadCocosPrefab(assetPath) {
      return loadCocosResAsset(assetPath, cc.Prefab);
    }
    exports.loadCocosPrefab = loadCocosPrefab;
    function loadCocosResAsset(assetPath, assetType) {
      void 0 === assetType && (assetType = cc.Asset);
      return new Promise(function(resolve, reject) {
        cc.loader.loadRes(assetPath, assetType, function(error, asset) {
          error ? reject(error) : resolve(asset);
        });
      }).then(function(asset) {
        return asset;
      }, function(err) {
        return Promise.reject(err.message);
      });
    }
    exports.loadCocosResAsset = loadCocosResAsset;
    cc._RF.pop();
  }, {} ],
  notifierCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b614I6CixNvK3bpLcRvpnD", "notifierCenter");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NotifierCenter = function() {
      function NotifierCenter() {
        var key = arguments[0];
        this._TAG = "[" + key + "/NotifierCenter]";
        this.events = {};
        this.launch();
      }
      NotifierCenter.prototype.getScopeName = function(scope) {
        try {
          return scope ? (scope._TAG ? scope._TAG : scope.name ? scope.name : "unknow").toString() : "unknow";
        } catch (e) {
          return "unknow";
        }
      };
      NotifierCenter.prototype.listen = function(eventName, handler, scope, isOnce) {
        if ("string" != typeof eventName || "function" !== typeof handler) {
          cc.log(this._TAG, " listen err: eName :" + eventName + "handler:" + handler);
          return;
        }
        var observer = {
          handler: handler,
          scope: scope,
          isOnce: isOnce
        };
        var observers = this.events[eventName] || [];
        for (var i = 0; i < observers.length; i++) {
          var obs = observers[i];
          if (obs.scope == scope && (obs.handler == handler || obs.handler.toString() == handler.toString())) {
            cc.log(this._TAG, "\u6d88\u606f\u91cd\u590d\u6ce8\u518c:" + eventName + " function:" + handler.name);
            return;
          }
        }
        observers.push(observer);
        this.events[eventName] = observers;
      };
      NotifierCenter.prototype.ignore = function(eventName, handler, scope) {
        if ("string" != typeof eventName) {
          cc.log("-----eventName----" + eventName);
          this.ignoreScope(arguments[0]);
          return;
        }
        if ("string" != typeof eventName || "function" != typeof handler) {
          cc.log(this._TAG, "NotifierCenter remove err: eName :" + eventName + "scope:" + scope._TAG);
          return;
        }
        var observers = this.events[eventName];
        if (!observers || 0 === observers.length) return;
        scope = scope || this;
        var idx = -1;
        for (var i = 0; i < observers.length; ++i) {
          var observer = observers[i];
          observer.scope != scope || observer.handler != handler && observer.handler.toString() != handler.toString() || (idx = i);
        }
        idx > -1 && this.events[eventName].splice(idx, 1);
      };
      NotifierCenter.prototype.trigger = function(eventName, params) {
        if (!this.isRunning) return;
        if ("string" != typeof eventName) {
          cc.log(this._TAG, " trigger err: eventName :" + eventName);
          return;
        }
        var keys = Object.keys(this.events);
        var obs = this.events[eventName];
        if (!obs) return;
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;
        for (var i = 0; i < obs.length; i++) {
          var ob = obs[i];
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) continue;
          ob.handler.apply(ob.scope, args);
          ob.isOnce && cc.log(self._TAG, "trigger and remove once listener", eventName);
        }
        obs = this.events[eventName];
        if (!obs) return;
        this.events[eventName] = obs.filter(function(ob) {
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) return false;
          return !ob.isOnce;
        });
      };
      NotifierCenter.prototype.ignoreScope = function(scope) {
        var ignoreMsgs = ":";
        for (var msg in this.events) {
          var obs = this.events[msg];
          obs && (this.events[msg] = obs.filter(function(ob) {
            if (ob.scope != scope) return true;
            ignoreMsgs = ignoreMsgs + msg + ",";
            return false;
          }));
        }
      };
      NotifierCenter.prototype.destroy = function() {
        cc.log(this._TAG, "destroy");
        this.events = {};
      };
      NotifierCenter.prototype.shut = function() {
        cc.log(this._TAG, "--------shut");
        this.isRunning = false;
      };
      NotifierCenter.prototype.launch = function() {
        cc.log(this._TAG, "--------launch");
        this.isRunning = true;
      };
      NotifierCenter = __decorate([ ccclass ], NotifierCenter);
      return NotifierCenter;
    }();
    exports.default = NotifierCenter;
    cc._RF.pop();
  }, {} ],
  recordAin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b12107oQEZI6LV9TdZg7cEl", "recordAin");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.centerNode = null;
        _this.rightNode = [];
        _this.leftNode = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.initeAniFun = function(sec) {
        var _this = this;
        cc.log("\u5f55\u97f3 sec == " + sec);
        var anim = this.centerNode.getComponent(cc.Animation);
        var clip = anim.currentClip || anim.defaultClip;
        if (clip) {
          clip.speed = .1 * sec;
          anim.play();
        }
        var n = 0;
        this.schedule(function() {
          _this.rightNode[n].getComponent(cc.Animation).play();
          _this.leftNode[n].getComponent(cc.Animation).play();
          n += 1;
        }, .2, 4, .2);
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "centerNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], NewClass.prototype, "rightNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], NewClass.prototype, "leftNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameData", "Main", "Tigo", "Util", "coinBoard", "constant", "HandEn", "recordAin", "notifierCenter" ]);
//# sourceMappingURL=index.js.map
