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
  ILessonListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b13dYPkbRCR6LORQqcUlnn", "ILessonListItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  guidepostItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e92f6JMVEZBuZPf7HFmPIbj", "guidepostItem");
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
    var Guidepost = function(_super) {
      __extends(Guidepost, _super);
      function Guidepost() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblLessonId = null;
        _this.lessonData = null;
        return _this;
      }
      Guidepost.prototype.init = function(data) {
        this.lessonData = data;
      };
      Guidepost.prototype.onLoad = function() {
        this.updateLessonId();
      };
      Guidepost.prototype.updateLessonId = function() {
        this.lblLessonId.string = "" + this.lessonData.lessonId;
      };
      Guidepost.prototype.open = function() {};
      Guidepost.prototype.close = function() {};
      __decorate([ property(cc.Label) ], Guidepost.prototype, "lblLessonId", void 0);
      Guidepost = __decorate([ ccclass ], Guidepost);
      return Guidepost;
    }(cc.Component);
    exports.default = Guidepost;
    cc._RF.pop();
  }, {} ],
  hall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ad0e1GmTFEOZcBnmcVIFnV", "hall");
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
    var event_1 = require("./../../../Script/config/event");
    var event_2 = require("../../../Script/config/event");
    var initHallState_1 = require("./state/initHallState");
    var lessonItem_1 = require("./lessonList/lessonItem");
    var enum_1 = require("../../../Script/config/enum");
    var lessonManager_1 = require("../../../Script/manager/lessonManager");
    var config_1 = require("../../../Script/config/config");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Hall = function(_super) {
      __extends(Hall, _super);
      function Hall() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sid = "Hall";
        _this.lessonItemPrefab = null;
        _this.guidepostPrefab = null;
        _this.reportPrefab = null;
        _this.lessonCell = null;
        _this.list = null;
        _this.contentSV = null;
        _this.tigoSpine = null;
        _this.guidHandNode = null;
        _this.firstGuidHandNode = null;
        _this.topBtn = null;
        _this.picBookNode = null;
        return _this;
      }
      Hall.prototype.onLoad = function() {
        this.initUI();
        this.stateMachine = new kit_1.kit.fsm.StateManager(this);
        this.stateMachine.ChangeState(initHallState_1.default, this);
        kit_1.kit.manager.Event.on(event_1.SCROLL_LESSON_2_LEARN, this.scrollLesson2Learn, this);
        kit_1.kit.manager.Event.on(event_1.SHOW_TIGO_GREET, this.showTigoGreet, this);
        kit_1.kit.manager.Event.on(event_1.ADD_GUILD_HAND_TIMER, this.addGuidHandTimer, this);
        this.initTigoSpine();
        this.initTopBtn();
        this.addCommonGuildHand();
      };
      Hall.prototype.initUI = function() {
        this.list = cc.find("scrollview/view/content", this.node);
        this.contentSV = cc.find("scrollview", this.node).getComponent(cc.ScrollView);
        this.tigoSpine = cc.find("leftBottom/Tigo-biaoqing", this.node).getComponent(sp.Skeleton);
        this.guidHandNode = cc.find("shou", this.node);
        this.topBtn = cc.find("topBtn", this.node);
        this.picBookNode = cc.find("rightBottom/sprite", this.node);
        this.contentSV.node.on("scrolling", function(event, data) {});
      };
      Hall.prototype.onPictureBookClick = function(event) {
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, config_1.COMMON_CLICK_SOUND);
        kit_1.kit.manager.Event.emit(event_2.STATE_TO_BOOK_LIST);
      };
      Hall.prototype.onHouseClick = function(event) {
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, config_1.COMMON_CLICK_SOUND);
      };
      Hall.prototype.onGameClick = function(event) {
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, config_1.COMMON_CLICK_SOUND);
        kit_1.kit.manager.Event.emit(event_2.STATE_TO_GAME_LIST);
      };
      Hall.prototype.onEncourageClick = function(event) {
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, config_1.COMMON_CLICK_SOUND);
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_ENCOURAGE_LIST);
      };
      Hall.prototype.onDestroy = function() {
        this.stateMachine.exitCurrentState();
        cc.log("hall destroy");
        kit_1.kit.manager.Event.off(event_1.SCROLL_LESSON_2_LEARN, this.scrollLesson2Learn, this);
        kit_1.kit.manager.Event.off(event_1.SHOW_TIGO_GREET, this.showTigoGreet, this);
        kit_1.kit.manager.Event.off(event_1.ADD_GUILD_HAND_TIMER, this.addGuidHandTimer, this);
        kit_1.kit.system.timer.clearTimer(this.firstGuidTimeh);
        this.firstGuidTimeh = null;
      };
      Hall.prototype.scrollLesson2Learn = function(eventData) {
        this.contentSV.stopAutoScroll();
        var itemPos = eventData.data;
        itemPos = this.getNext2LearnItemPos();
        var x = itemPos.x - cc.winSize.width / 2;
        var pos = cc.v2(x, 0);
        this.contentSV.scrollToOffset(pos, .1);
      };
      Hall.prototype.getNext2LearnItemPos = function() {
        this.contentSV.stopAutoScroll();
        var itemPos;
        this.lessonList.find(function(ele) {
          ele instanceof lessonItem_1.default && ele.lessonInfo.chapterState == enum_1.CHAPTER_STATE.next2view && (itemPos = ele.getItemPosXToScroll());
        });
        itemPos || (itemPos = cc.v3(this.list.width, 0, 0));
        return itemPos;
      };
      Hall.prototype.initTigoSpine = function() {
        var _this = this;
        this.tigoSpine.node.opacity = 0;
        this.tigoSpine.setCompleteListener(function() {
          cc.tween(_this.tigoSpine.node).to(.1, {
            opacity: 0
          }).start();
        });
      };
      Hall.prototype.showTigoGreet = function() {
        cc.tween(this.tigoSpine.node).to(.1, {
          opacity: 255
        }).start();
        this.tigoSpine.setAnimation(0, "zhaoshou", false);
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_HALL, "sound/welcomeback");
      };
      Hall.prototype.initTopBtn = function() {
        this.topBtn.on(cc.Node.EventType.TOUCH_START, this.onTopBtnClicked, this);
        this.topBtn["_touchListener"].setSwallowTouches(false);
      };
      Hall.prototype.onTopBtnClicked = function(event) {
        var clickLessonItem = kit_1.kit.util.LocalStorage.getBool(config_1.HAS_CLICK_LESSON_ITEM) || false;
        if (clickLessonItem) {
          this.guidHandNode.active = false;
          this.addGuidHandTimer();
        }
      };
      Hall.prototype.addGuidHandTimer = function() {
        var _this = this;
        var clickLessonItem = kit_1.kit.util.LocalStorage.getBool(config_1.HAS_CLICK_LESSON_ITEM) || false;
        if (clickLessonItem) {
          this.guildHandTimer && this.clearGuidHand();
          var t = 6;
          this.guildHandTimer = kit_1.kit.system.timer.doOnce(1e3 * t, function() {
            if (!cc.isValid(_this.node)) return;
            _this.showGuidHand();
          }, this);
        } else this.fistGuidHand();
      };
      Hall.prototype.fistGuidHand = function() {
        var _this = this;
        kit_1.kit.system.timer.doOnce(200, function() {
          if (!cc.isValid(_this.node)) return;
          var itemPos;
          var node;
          _this.lessonList.find(function(ele) {
            ele instanceof lessonItem_1.default && ele.lessonInfo.chapterState == enum_1.CHAPTER_STATE.next2view && (node = ele.node);
          });
          if (!node) {
            kit_1.kit.util.LocalStorage.setBool(config_1.HAS_CLICK_LESSON_ITEM, true);
            cc.log("\u5df2\u7ecf\u5b66\u5b8c\u8bfe\u7a0b");
            return;
          }
          _this.firstGuidHandNode = cc.instantiate(_this.guidHandNode);
          _this.firstGuidHandNode.active = true;
          _this.firstGuidHandNode.x = 30;
          _this.firstGuidHandNode.y = -217;
          node.addChild(_this.firstGuidHandNode);
          kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_HALL, "sound/dianyidian");
          _this.firstGuidTimeh = kit_1.kit.system.timer.doLoop(4e3, function() {
            if (!cc.isValid(_this.node)) return;
            kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_HALL, "sound/dianyidian");
          }, _this);
        });
      };
      Hall.prototype.clearGuidHand = function() {
        kit_1.kit.system.timer.clearTimer(this.guildHandTimer);
        this.guildHandTimer = null;
      };
      Hall.prototype.showGuidHand = function() {
        var _this = this;
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_HALL, "sound/dianyidian");
        if (!lessonManager_1.default.instance.allLessonViewed) {
          kit_1.kit.manager.Event.emit(event_1.SCROLL_LESSON_2_LEARN);
          kit_1.kit.system.timer.doOnce(200, function() {
            if (!cc.isValid(_this.node)) return;
            var itemPos;
            _this.lessonList.find(function(ele) {
              ele instanceof lessonItem_1.default && ele.lessonInfo.chapterState == enum_1.CHAPTER_STATE.next2view && (itemPos = ele.node.parent.convertToWorldSpaceAR(ele.node.getPosition()));
            });
            if (itemPos) {
              itemPos = _this.node.convertToNodeSpaceAR(itemPos);
              _this.guidHandNode.active = true;
              _this.guidHandNode.position = cc.v3(itemPos.x + 50, itemPos.y - 200);
              var clickLessonItem = kit_1.kit.util.LocalStorage.getBool(config_1.HAS_CLICK_LESSON_ITEM) || false;
              clickLessonItem ? kit_1.kit.system.timer.doOnce(4e3, function() {
                if (!cc.isValid(_this.node)) return;
                _this.guidHandNode.active = false;
                _this.addGuidHandTimer();
              }, _this) : kit_1.kit.system.timer.doLoop(4e3, function() {
                if (!cc.isValid(_this.node)) return;
                kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_HALL, "sound/dianyidian");
              }, _this);
            }
          });
        }
      };
      Hall.prototype.addCommonGuildHand = function() {
        var cv = cc.director.getScene().getChildByName("Canvas");
        var bundle = cc.assetManager.getBundle(config_1.BUNDLE_COMPONENTS);
        cv.getChildByName("guildHand") || kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_COMPONENTS, "guildHand/guildHand", kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(err, ass) {
          var node = cc.instantiate(ass);
          node.parent = cv;
          node.y = 1e4;
          node.name = "guildHand";
        });
      };
      __decorate([ property(cc.Prefab) ], Hall.prototype, "lessonItemPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Hall.prototype, "guidepostPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Hall.prototype, "reportPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Hall.prototype, "lessonCell", void 0);
      Hall = __decorate([ ccclass ], Hall);
      return Hall;
    }(cc.Component);
    exports.default = Hall;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/config/enum": void 0,
    "../../../Script/config/event": void 0,
    "../../../Script/manager/lessonManager": void 0,
    "../../../kit/kit": void 0,
    "./../../../Script/config/event": void 0,
    "./lessonList/lessonItem": "lessonItem",
    "./state/initHallState": "initHallState"
  } ],
  initHallState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6fe2YEeztKAa72aZSlY6St", "initHallState");
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
    var event_1 = require("./../../../../Script/config/event");
    var lessonManager_1 = require("../../../../Script/manager/lessonManager");
    var lessonCell_1 = require("../lessonList/lessonCell");
    var kit_1 = require("../../../../kit/kit");
    var InitHallState = function() {
      function InitHallState() {}
      InitHallState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      InitHallState.prototype.enter = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(res, rej) {
              var result = lessonManager_1.default.instance.totalLessonData;
              _this.entity.lessonList = [];
              result.forEach(function(element) {
                return __awaiter(_this, void 0, void 0, function() {
                  var cell;
                  return __generator(this, function(_a) {
                    cell = cc.instantiate(this.entity.lessonCell);
                    cell.getComponent(lessonCell_1.default).init(this.entity, element);
                    this.entity.list.addChild(cell);
                    return [ 2 ];
                  });
                });
              });
              res();
              kit_1.kit.system.timer.doFrameOnce(3, function() {
                kit_1.kit.manager.Event.emit(event_1.SCROLL_LESSON_2_LEARN);
              });
            }) ];
          });
        });
      };
      InitHallState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      InitHallState.prototype.exit = function(data) {};
      return InitHallState;
    }();
    exports.default = InitHallState;
    cc._RF.pop();
  }, {
    "../../../../Script/manager/lessonManager": void 0,
    "../../../../kit/kit": void 0,
    "../lessonList/lessonCell": "lessonCell",
    "./../../../../Script/config/event": void 0
  } ],
  lessonCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3986dNBF/JLT4G5tm5HbDMG", "lessonCell");
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
    var guidepostItem_1 = require("./guidepostItem");
    var lessonItem_1 = require("./lessonItem");
    var reportItem_1 = require("./reportItem");
    var enum_1 = require("../../../../Script/config/enum");
    var lessonManager_1 = require("../../../../Script/manager/lessonManager");
    var kit_1 = require("../../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var lessonCell = function(_super) {
      __extends(lessonCell, _super);
      function lessonCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.contentLayout = null;
        _this.nodeUnFold = null;
        _this.nodeFold = null;
        _this.chapterNodeList = [];
        _this.lessonData = null;
        return _this;
      }
      lessonCell.prototype.init = function(entity, lessonData) {
        this.lessonData = lessonData;
        this.entity = entity;
      };
      lessonCell.prototype.onLoad = function() {
        this.initChapterItem();
        this.initUnFoldBtn();
        this.initFoldBtn();
        this.updateLessonCellState();
      };
      lessonCell.prototype.initChapterItem = function() {
        var _this = this;
        var element = this.lessonData;
        var guidepostNode = cc.instantiate(this.entity.guidepostPrefab);
        guidepostNode.name = "guidepostNode";
        var guidepost = guidepostNode.getComponent(guidepostItem_1.default);
        guidepost.init(element);
        this.contentLayout.addChild(guidepostNode);
        this.entity.lessonList.push(guidepost);
        this.chapterNodeList.push(guidepostNode);
        try {
          element.chapters.forEach(function(lessonVo) {
            var itemNode = cc.instantiate(_this.entity.lessonItemPrefab);
            _this.contentLayout.addChild(itemNode);
            var item = itemNode.getComponent(lessonItem_1.default);
            item.init(lessonVo);
            _this.entity.lessonList.push(item);
            _this.chapterNodeList.push(itemNode);
          });
        } catch (e) {
          cc.error(e);
        }
        var reportNode = cc.instantiate(this.entity.reportPrefab);
        var report = reportNode.getComponent(reportItem_1.default);
        report.init(element);
        this.contentLayout.addChild(reportNode);
        this.entity.lessonList.push(report);
        this.chapterNodeList.push(reportNode);
      };
      lessonCell.prototype.initUnFoldBtn = function() {
        if (!this.lessonData.chapterAllViewed) return;
        var chapterData = this.lessonData.chapters.find(function(ele) {
          return ele.chapterState == enum_1.CHAPTER_STATE.viewed;
        });
        this.nodeUnFold.getChildByName("xing").active = !!chapterData;
        this.nodeUnFold.setSiblingIndex(100);
      };
      lessonCell.prototype.initFoldBtn = function() {
        if (!this.lessonData.chapterAllViewed) return;
        this.nodeFold.setSiblingIndex(101);
      };
      lessonCell.prototype.updateLessonCellState = function() {
        var allViewed = lessonManager_1.default.instance.allLessonViewed;
        if (allViewed) {
          var lastLessonData = lessonManager_1.default.instance.totalLessonData[lessonManager_1.default.instance.totalLessonData.length - 1];
          lastLessonData == this.lessonData ? this.lessonCellDisplay(false, true) : this.lessonCellDisplay(true);
        } else this.lessonData.chapterAllViewed ? this.lessonCellDisplay(true) : this.lessonCellDisplay(false);
      };
      lessonCell.prototype.lessonCellDisplay = function(fold, lastOne) {
        void 0 === lastOne && (lastOne = false);
        if (fold) {
          this.nodeUnFold.active = true;
          this.nodeFold.active = false;
          this.chapterNodeList.map(function(item) {
            "guidepostNode" != item.name && (item.active = false);
          });
        } else {
          this.nodeUnFold.active = false;
          this.nodeFold.active = this.lessonData.chapterAllViewed;
          this.chapterNodeList.map(function(item) {
            "guidepostNode" != item.name && (item.active = true);
          });
          if (lastOne) {
            this.nodeFold.width = 200;
            this.nodeFold.getChildByName("btn_fold").x = -30;
          } else {
            this.nodeFold.width = 100;
            this.nodeFold.getChildByName("btn_fold").x = 0;
          }
        }
      };
      lessonCell.prototype.onBtnUnfoldClicked = function() {
        this.lessonCellDisplay(false);
      };
      lessonCell.prototype.onBtnFoldClicked = function() {
        var _this = this;
        this.lessonCellDisplay(true);
        kit_1.kit.system.timer.doFrameOnce(2, function() {
          var pos = cc.v2(Math.abs(_this.node.parent.x), 0);
          cc.log(" ====111pos: ", pos.x);
          _this.node.parent.parent.parent.getComponent(cc.ScrollView).scrollToOffset(pos, .1);
        });
      };
      __decorate([ property(cc.Node) ], lessonCell.prototype, "contentLayout", void 0);
      __decorate([ property(cc.Node) ], lessonCell.prototype, "nodeUnFold", void 0);
      __decorate([ property(cc.Node) ], lessonCell.prototype, "nodeFold", void 0);
      lessonCell = __decorate([ ccclass ], lessonCell);
      return lessonCell;
    }(cc.Component);
    exports.default = lessonCell;
    cc._RF.pop();
  }, {
    "../../../../Script/config/enum": void 0,
    "../../../../Script/manager/lessonManager": void 0,
    "../../../../kit/kit": void 0,
    "./guidepostItem": "guidepostItem",
    "./lessonItem": "lessonItem",
    "./reportItem": "reportItem"
  } ],
  lessonItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7f1c/kMG5PqqFWoMnhntam", "lessonItem");
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
    var config_1 = require("./../../../../Script/config/config");
    var event_1 = require("./../../../../Script/config/event");
    var config_2 = require("../../../../Script/config/config");
    var event_2 = require("../../../../Script/config/event");
    var enum_1 = require("../../../../Script/config/enum");
    var kit_1 = require("../../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LessonItem = function(_super) {
      __extends(LessonItem, _super);
      function LessonItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.typeNode = null;
        _this.bgNode = null;
        _this.lockNode = null;
        _this.next2LearnNode = null;
        _this.starNode = null;
        _this.lessonIcon = null;
        _this.lessonIcons = [];
        _this.spineIcon = null;
        return _this;
      }
      LessonItem.prototype.onLoad = function() {};
      LessonItem.prototype.onClick = function() {
        cc.log(this.lessonInfo);
        switch (this.lessonInfo.chapterState) {
         case enum_1.CHAPTER_STATE.lock:
          kit_1.kit.manager.Audio.playEffect(config_2.BUNDLE_COMPONENTS, "commonRes/sound/wrong_effect");
          cc.log("TODO:\u672a\u89e3\u9501");
          kit_1.kit.manager.Event.emit(event_1.SCROLL_LESSON_2_LEARN);
          break;

         case enum_1.CHAPTER_STATE.next2view:
         case enum_1.CHAPTER_STATE.learned:
         case enum_1.CHAPTER_STATE.viewed:
          kit_1.kit.manager.Audio.playEffect(config_2.BUNDLE_COMPONENTS, config_2.COMMON_CLICK_SOUND);
          kit_1.kit.manager.Event.emit(event_2.STATE_TO_LESSON, this.lessonInfo);
        }
      };
      LessonItem.prototype.getItemPosXToScroll = function() {
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        var scrolPos = this.node.parent.parent.convertToNodeSpaceAR(worldPos);
        return scrolPos;
      };
      LessonItem.prototype.init = function(data) {
        var _this = this;
        this.lessonInfo = data;
        switch (data.type) {
         case config_2.LESSON_TYPE_VIDEO:
          this.typeNode.getChildByName("video").active = true;
          this.bgNode.getChildByName("video").active = true;
          this.spineIcon = this.typeNode.getChildByName("video").getComponent(sp.Skeleton);
          break;

         case config_2.LESSON_TYPE_GAME:
          this.typeNode.getChildByName("game").active = true;
          this.bgNode.getChildByName("game").active = true;
          this.spineIcon = this.typeNode.getChildByName("game").getComponent(sp.Skeleton);
          break;

         case config_2.LESSON_TYPE_PICTURE_BOOK:
          this.typeNode.getChildByName("book").active = true;
          this.bgNode.getChildByName("book").active = true;
          this.spineIcon = this.typeNode.getChildByName("book").getComponent(sp.Skeleton);
        }
        this.scheduleOnce(function() {
          var lessonIcon = _this.bgNode.getChildByName("lessonicon");
          lessonIcon.active = false;
          var bundle = cc.assetManager.getBundle(config_1.BUNDLE_HALL);
          bundle && bundle.load("texture/lessonIcon/lesson_icon_" + data.chapterId, cc.SpriteFrame, null, function(err, spriteFrame) {
            if (err) {
              cc.error("lesson icon error :" + err.message);
              return;
            }
            lessonIcon.active = true;
            lessonIcon.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          });
        });
        this.updateChapterItemState();
      };
      LessonItem.prototype.updateChapterItemState = function() {
        switch (this.lessonInfo.chapterState) {
         case enum_1.CHAPTER_STATE.lock:
          this.lockNode.active = true;
          this.spineIcon.setAnimation(0, "Stay", true);
          break;

         case enum_1.CHAPTER_STATE.next2view:
          this.next2LearnNode.active = true;
          this.spineIcon.setAnimation(0, "Jump", true);
          break;

         case enum_1.CHAPTER_STATE.learned:
          this.spineIcon.setAnimation(0, "Stay", true);
          break;

         case enum_1.CHAPTER_STATE.viewed:
          this.starNode.active = true;
          this.spineIcon.setAnimation(0, "Stay", true);
        }
      };
      LessonItem.prototype.lockAni = function() {};
      LessonItem.prototype.open = function() {
        throw new Error("Method not implemented.");
      };
      LessonItem.prototype.close = function() {
        throw new Error("Method not implemented.");
      };
      LessonItem.prototype.disableChildren = function() {
        this.bgNode.children.forEach(function(element) {
          "lessonicon" != element.name && (element.active = false);
        });
        this.typeNode.children.forEach(function(element) {
          element.active = false;
        });
      };
      __decorate([ property(cc.Node) ], LessonItem.prototype, "typeNode", void 0);
      __decorate([ property(cc.Node) ], LessonItem.prototype, "bgNode", void 0);
      __decorate([ property(cc.Node) ], LessonItem.prototype, "lockNode", void 0);
      __decorate([ property(cc.Node) ], LessonItem.prototype, "next2LearnNode", void 0);
      __decorate([ property(cc.Node) ], LessonItem.prototype, "starNode", void 0);
      __decorate([ property(cc.Sprite) ], LessonItem.prototype, "lessonIcon", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], LessonItem.prototype, "lessonIcons", void 0);
      LessonItem = __decorate([ ccclass ], LessonItem);
      return LessonItem;
    }(cc.Component);
    exports.default = LessonItem;
    cc._RF.pop();
  }, {
    "../../../../Script/config/config": void 0,
    "../../../../Script/config/enum": void 0,
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0,
    "./../../../../Script/config/config": void 0,
    "./../../../../Script/config/event": void 0
  } ],
  reportItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54f4bXP295Lj4Even2U4qIN", "reportItem");
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
    var event_1 = require("../../../../Script/config/event");
    var kit_1 = require("../../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReportItem = function(_super) {
      __extends(ReportItem, _super);
      function ReportItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.boxSpine = null;
        _this.lessonData = null;
        return _this;
      }
      ReportItem.prototype.init = function(data) {
        this.lessonData = data;
      };
      ReportItem.prototype.onLoad = function() {
        this.updateBoxDisplay();
      };
      ReportItem.prototype.updateBoxDisplay = function() {
        this.boxSpine.clearTracks();
        this.boxSpine.setToSetupPose();
        var aniName = this.lessonData.reportViewed || this.lessonData.complete ? "open" : "clos";
        this.boxSpine.setAnimation(0, aniName, true);
      };
      ReportItem.prototype.open = function() {
        throw new Error("Method not implemented.");
      };
      ReportItem.prototype.close = function() {
        throw new Error("Method not implemented.");
      };
      ReportItem.prototype.onClick = function() {
        if (!this.lessonData.chapterAllViewed) {
          cc.log("lesson not view\uff01");
          kit_1.kit.manager.Event.emit(event_1.SCROLL_LESSON_2_LEARN);
          return;
        }
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_REPORT, this.lessonData);
      };
      __decorate([ property(cc.Label) ], ReportItem.prototype, "label", void 0);
      __decorate([ property(sp.Skeleton) ], ReportItem.prototype, "boxSpine", void 0);
      ReportItem = __decorate([ ccclass ], ReportItem);
      return ReportItem;
    }(cc.Component);
    exports.default = ReportItem;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0
  } ]
}, {}, [ "hall", "ILessonListItem", "guidepostItem", "lessonCell", "lessonItem", "reportItem", "initHallState" ]);