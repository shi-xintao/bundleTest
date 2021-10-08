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
  box: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5749LG4ZVEOby5uzLaGhvM", "box");
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
    var comp_1 = require("./comp");
    var redSantaClaus_1 = require("./redSantaClaus");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Box = function(_super) {
      __extends(Box, _super);
      function Box() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mainNode = null;
        _this.objNode = null;
        _this.endBoxNode = null;
        _this.yanSk = null;
        _this.objectIndex = 0;
        _this.objectTypeArr = [];
        _this.objPosition = [ cc.v2(-60, 0), cc.v2(40, 0) ];
        return _this;
      }
      Box.prototype.start = function() {};
      Box.prototype.checkBox = function(item) {
        return !!this.checkCollision(item) && this.checkPutIn(item);
      };
      Box.prototype.checkPutIn = function(item) {
        var objType = item.name.substring(0, item.name.length - 1);
        if (!this.objectTypeArr.includes(objType)) {
          this.objectTypeArr.push(objType);
          return true;
        }
        return false;
      };
      Box.prototype.checkCollision = function(item) {
        var rect1 = this.node.getBoundingBoxToWorld();
        var rect2 = item.getBoundingBoxToWorld();
        if (rect1.intersects(rect2)) return true;
        return false;
      };
      Box.prototype.putInBox = function(item) {
        item.parent = this.objNode;
        var objType = item.name.substring(0, item.name.length - 1);
        "apple" === objType ? item.setPosition(this.objPosition[0]) : item.setPosition(this.objPosition[1]);
        this.checkBoxEnd();
      };
      Box.prototype.checkBoxEnd = function() {
        var _this = this;
        if (this.objectTypeArr.length >= 2) {
          this.yanSk.node.active = true;
          this.yanSk.node.setPosition(this.node.getPosition());
          comp_1.playSpineAnimation(this.yanSk, "animation").then(function() {
            _this.yanSk.node.active = false;
          });
          this.endBoxNode.active = true;
          this.mainNode.getComponent(redSantaClaus_1.default).nextGameLevel();
        }
      };
      __decorate([ property(cc.Node) ], Box.prototype, "mainNode", void 0);
      __decorate([ property(cc.Node) ], Box.prototype, "objNode", void 0);
      __decorate([ property(cc.Node) ], Box.prototype, "endBoxNode", void 0);
      __decorate([ property(sp.Skeleton) ], Box.prototype, "yanSk", void 0);
      Box = __decorate([ ccclass ], Box);
      return Box;
    }(cc.Component);
    exports.default = Box;
    cc._RF.pop();
  }, {
    "./comp": "comp",
    "./redSantaClaus": "redSantaClaus"
  } ],
  comp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47921YtQoxP053zZ6yW36x/", "comp");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadSpriteFrame = exports.playSpineAnimation = void 0;
    function playSpineAnimation(spine, animation, loop, trackIndex) {
      void 0 === loop && (loop = false);
      void 0 === trackIndex && (trackIndex = 0);
      if (!loop) return new Promise(function(resolve) {
        var en = spine.setAnimation(trackIndex, animation, loop);
        spine.setTrackCompleteListener(en, function() {
          resolve(null);
        });
      });
      Promise.resolve().then(function() {
        spine.setAnimation(trackIndex, animation, loop);
      });
    }
    exports.playSpineAnimation = playSpineAnimation;
    function loadSpriteFrame(url) {
      return new Promise(function(resolve) {
        cc.resources.load(url, cc.SpriteFrame, function(err, sprite) {
          err ? console.log(err, "SpriteFrame \u52a0\u8f7d\u5931\u8d25===============>>") : resolve(sprite);
        });
      });
    }
    exports.loadSpriteFrame = loadSpriteFrame;
    cc._RF.pop();
  }, {} ],
  moveItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26be69cd0lDpqtNkrl1oIPn", "moveItem");
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
    var box_1 = require("./box");
    var role_1 = require("./role");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MoveItem = function(_super) {
      __extends(MoveItem, _super);
      function MoveItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boxNode = null;
        _this.roleNode = null;
        _this.mainNode = null;
        _this.MUSIC_PATH = "audio/";
        _this.BUNDLE_NAME = "redSantaClaus";
        _this.AUDIO_NAME = "red";
        _this.AUDIO_ERROR = "game_error";
        _this.originPos = null;
        _this.mainComp = null;
        return _this;
      }
      MoveItem.prototype.start = function() {
        this.onClick();
      };
      MoveItem.prototype.onClick = function() {
        var _a = cc.Node.EventType, TOUCH_START = _a.TOUCH_START, TOUCH_MOVE = _a.TOUCH_MOVE, TOUCH_END = _a.TOUCH_END, TOUCH_CANCEL = _a.TOUCH_CANCEL;
        this.node.on(TOUCH_START, this.touchStart, this);
        this.node.on(TOUCH_MOVE, this.touchMove, this);
        this.node.on(TOUCH_END, this.touchEnd, this);
        this.node.on(TOUCH_CANCEL, this.touchCancel, this);
      };
      MoveItem.prototype.touchStart = function() {
        this.originPos = this.node.getPosition();
      };
      MoveItem.prototype.touchMove = function(event) {
        this.node.x += event.getDelta().x;
        this.node.y += event.getDelta().y;
      };
      MoveItem.prototype.touchEnd = function() {
        if (this.checkMoveObj()) {
          this.cancel();
          this.playRight();
        } else {
          this.playWrong();
          this.node.setPosition(this.originPos);
        }
      };
      MoveItem.prototype.playWrong = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + this.AUDIO_ERROR);
              return [ 4, this.roleNode.getComponent(role_1.default).palyThinkAnimation() ];

             case 1:
              _a.sent();
              this.roleNode.getComponent(role_1.default).palyIdleAnimation();
              return [ 2 ];
            }
          });
        });
      };
      MoveItem.prototype.playRight = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + this.AUDIO_NAME);
              return [ 4, this.roleNode.getComponent(role_1.default).palyHappyAnimation() ];

             case 1:
              _a.sent();
              this.roleNode.getComponent(role_1.default).palyIdleAnimation();
              return [ 2 ];
            }
          });
        });
      };
      MoveItem.prototype.touchCancel = function() {
        this.node.setPosition(this.originPos);
      };
      MoveItem.prototype.checkMoveObj = function() {
        var _this = this;
        var bool = false;
        this.boxNode.children.forEach(function(item) {
          var isTrue = item.getComponent(box_1.default).checkBox(_this.node);
          if (isTrue && !bool) {
            bool = true;
            item.getComponent(box_1.default).putInBox(_this.node);
          }
        });
        return bool;
      };
      MoveItem.prototype.playWrongAni = function() {
        var _this = this;
        var ani = this.node.getComponent(cc.Animation);
        ani.play();
        ani.on("finished", function() {
          _this.node.setPosition(_this.originPos);
        }, this);
      };
      MoveItem.prototype.cancel = function() {
        var _a = cc.Node.EventType, TOUCH_START = _a.TOUCH_START, TOUCH_MOVE = _a.TOUCH_MOVE, TOUCH_END = _a.TOUCH_END, TOUCH_CANCEL = _a.TOUCH_CANCEL;
        this.node.off(TOUCH_START, this.touchStart, this);
        this.node.off(TOUCH_MOVE, this.touchMove, this);
        this.node.off(TOUCH_END, this.touchEnd, this);
        this.node.off(TOUCH_CANCEL, this.touchCancel, this);
      };
      __decorate([ property(cc.Node) ], MoveItem.prototype, "boxNode", void 0);
      __decorate([ property(cc.Node) ], MoveItem.prototype, "roleNode", void 0);
      __decorate([ property(cc.Node) ], MoveItem.prototype, "mainNode", void 0);
      MoveItem = __decorate([ ccclass ], MoveItem);
      return MoveItem;
    }(cc.Component);
    exports.default = MoveItem;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./box": "box",
    "./role": "role"
  } ],
  redSantaClaus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "882f6LDd2JEq6jSBSgU0i3h", "redSantaClaus");
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var events_1 = require("../../../kit/events/events");
    var TimerSystem_1 = require("../../../kit/system/timer/TimerSystem");
    var role_1 = require("./role");
    var Hand_1 = require("../../../common/hand/Hand");
    var ChapterGameComponent_1 = require("../../../common/scripts/ChapterGameComponent");
    var wardrobe_1 = require("./wardrobe");
    var MUSIC_TYPE;
    (function(MUSIC_TYPE) {
      MUSIC_TYPE["YELLOW"] = "luoshui";
    })(MUSIC_TYPE || (MUSIC_TYPE = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedSantaClaus = function(_super) {
      __extends(RedSantaClaus, _super);
      function RedSantaClaus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roleNode = null;
        _this.moveNode = null;
        _this.bgNode = null;
        _this.wardrobeNode = null;
        _this.blockInputNode = null;
        _this.handPrefab = null;
        _this.hand = null;
        _this.gameHandCount = 0;
        _this.gameHandFunc = null;
        _this.gameFirstCount = 0;
        _this.gameTotal = 5;
        _this.gameFirstTotal = 3;
        _this.gameIndex = 0;
        _this.gameWordData = [ "\u7ea2\u8272", "\u7ea2\u8272", "\u7ea2\u8272", "\u7ea2\u8272", "\u7ea2\u8272", "\u7ea2\u8272" ];
        _this.gameWordAudio = [ "red", "red", "red", "red", "red", "red" ];
        _this.startRecordFunc = null;
        _this.recordAudio = "red";
        _this.MUSIC_PATH = "audio/";
        _this.BUNDLE_NAME = "redSantaClaus";
        return _this;
      }
      RedSantaClaus.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      RedSantaClaus.prototype.start = function() {
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.block, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.onBlock, this);
        this.initAllNode();
        this.showBlockNode();
        this.startRunGame();
        this.setBg();
      };
      RedSantaClaus.prototype.initData = function() {
        this.recordData = {
          evaluatingType: 1,
          evaluatingText: "",
          tryTimes: 1,
          evaluationScore: 30,
          recordTime: 3
        };
        this.taskData = {
          bundleName: "redSantaClaus",
          imgList: [ "res/task1", "res/task2" ]
        };
      };
      RedSantaClaus.prototype.block = function() {};
      RedSantaClaus.prototype.onBlock = function() {};
      RedSantaClaus.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_BLOCK, this.block, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_UNBLOCK, this.onBlock, this);
        cc.isValid(this.node) && this.node.destroy();
      };
      RedSantaClaus.prototype.initAllNode = function() {
        this.blockInputNode = this.node.getChildByName("blockInputNode");
        var handNode = cc.instantiate(this.handPrefab);
        handNode.active = false;
        this.node.addChild(handNode);
        this.hand = handNode.getComponent(Hand_1.default);
        this.hand.onCompleted = this.onHandCompleted.bind(this);
      };
      RedSantaClaus.prototype.onHandCompleted = function() {
        cc.log("\u624b\u52a8\u753b\u56de\u8c03~~");
        this.gameHandCount += 1;
        if (this.gameHandCount >= 2) {
          this.gameHandCount = 0;
          this.hand.hide();
          this.gameHandFunc = null;
          cc.log("\u53d6\u6d88\u5f15\u5bfc~~");
          this.hideBlockNode();
          return;
        }
        this.gameHandFunc && this.gameHandFunc();
      };
      RedSantaClaus.prototype.onClickBtn = function() {};
      RedSantaClaus.prototype.showHand = function(target) {
        this.hand.setTargetNode(target, this.moveNode);
        this.hand.node.active = true;
      };
      RedSantaClaus.prototype.startRunGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.roleNode.getComponent(role_1.default).initRole();
              return [ 4, this.roleNode.getComponent(role_1.default).startWalkInScene() ];

             case 1:
              _a.sent();
              this.gameHandFunc = function() {
                _this.showHand(_this.moveNode.children[0]);
                _this.hand.playSwipeRight();
                cc.log("\u5f15\u5bfc~~");
              };
              TimerSystem_1.default.instance.doFrameOnce(1, function() {
                _this.showTask(0, false, function() {}, function() {}, function() {
                  _this.gameHandFunc();
                });
              });
              return [ 2 ];
            }
          });
        });
      };
      RedSantaClaus.prototype.showBlockNode = function() {
        this.blockInputNode.active = true;
      };
      RedSantaClaus.prototype.hideBlockNode = function() {
        this.blockInputNode.active = false;
      };
      RedSantaClaus.prototype.nextGameLevel = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.gameIndex++;
            this.gameFirstCount++;
            cc.log("this.gameIndex ===", this.gameIndex);
            if (this.gameIndex >= this.gameTotal) {
              cc.log("\u6e38\u620f\u7ed3\u675f~~");
              this.showTask(1, true, null, null, function() {
                _this.roleNode.getComponent(role_1.default).gameEnd();
                AudioManager_1.default.stopMusic();
                EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
              });
              return [ 2 ];
            }
            cc.log("\u6e38\u620f\u7ee7\u7eed~~");
            if (this.gameFirstCount < 3) return [ 2 ];
            if (this.gameFirstCount === this.gameFirstTotal) {
              cc.log("\u7b2c\u4e00\u90e8\u5206\u6e38\u620f\u7ed3\u675f~~");
              this.gameTaskCom.taskHideTime = 2;
              this.scheduleOnce(function() {
                _this.roleNode.getComponent(role_1.default).gameFirstEnd(function() {
                  _this.showTask(0, true, null, null, function() {
                    _this.gameFirstEndFunc();
                    _this.gameTaskCom.taskHideTime = 4;
                  });
                });
              }, 1);
            } else this.gameRunRecord();
            return [ 2 ];
          });
        });
      };
      RedSantaClaus.prototype.gameFirstEndFunc = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.roleNode.getChildByName("bag_on").active = false;
              this.roleNode.getChildByName("bag_off").active = false;
              this.roleNode.getComponent(role_1.default).palyWalkAnimation();
              this.palyWardrobeMove();
              return [ 4, this.palyBgMove() ];

             case 1:
              _a.sent();
              return [ 4, this.roleNode.getComponent(role_1.default).gameSecondStart() ];

             case 2:
              _a.sent();
              this.roleNode.getComponent(role_1.default).setBagPosition();
              this.roleNode.getComponent(role_1.default).palyIdleAnimation();
              this.showTask(1, false, null, null, function() {
                _this.gameRunRecord();
              });
              return [ 2 ];
            }
          });
        });
      };
      RedSantaClaus.prototype.setBg = function() {
        var bg = this.wardrobeNode.getChildByName("bg2");
        bg.width = this.bgNode.children[0].width;
        bg.height = this.bgNode.children[0].height;
        this.wardrobeNode.x = this.bgNode.children[0].width;
      };
      RedSantaClaus.prototype.palyWardrobeMove = function() {
        var _this = this;
        return new Promise(function(resolve) {
          cc.tween(_this.wardrobeNode).by(3, {
            x: -_this.bgNode.children[0].width
          }).call(function() {
            resolve();
          }).start();
        });
      };
      RedSantaClaus.prototype.palyBgMove = function() {
        var _this = this;
        return new Promise(function(resolve) {
          cc.tween(_this.bgNode).by(3, {
            x: -_this.bgNode.children[0].width
          }).call(function() {
            resolve();
          }).start();
        });
      };
      RedSantaClaus.prototype.showTask = function(num, isComplete, func1, func2, func3) {
        var showParams = {
          taskIndex: num,
          complete: isComplete,
          callFunc1: function() {
            func1 && func1();
          },
          callFunc2: function() {
            func2 && func2();
          },
          callFunc3: function() {
            func3 && func3();
          }
        };
        this.gameTaskCom.showTaskList(showParams);
      };
      RedSantaClaus.prototype.palyRightAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("\u8ddf\u8bfb\u6b63\u786e~~", this.gameIndex);
              return [ 4, this.roleNode.getComponent(role_1.default).recordRight(this.gameIndex - 3) ];

             case 1:
              _a.sent();
              if (!(3 === this.gameIndex)) return [ 3, 3 ];
              return [ 4, this.wardrobeNode.getComponent(wardrobe_1.default).playDoorAnimation() ];

             case 2:
              _a.sent();
              this.nextGameLevel();
              return [ 3, 4 ];

             case 3:
              this.nextGameLevel();
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      RedSantaClaus.prototype.palyWrongAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("\u8ddf\u8bfb\u9519\u8bef~~");
              return [ 4, this.roleNode.getComponent(role_1.default).recordWrong(this.gameIndex - 3) ];

             case 1:
              _a.sent();
              this.gameRunRecord();
              return [ 2 ];
            }
          });
        });
      };
      RedSantaClaus.prototype.palyBGM = function() {};
      RedSantaClaus.prototype.palyAudioByIdx = function(colorNum) {
        if (Number(colorNum) <= 2) {
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.YELLOW);
          return;
        }
      };
      RedSantaClaus.prototype.gameRunRecord = function() {
        var _this = this;
        cc.log("gameRunRecord~~~");
        this.scheduleOnce(function() {
          var recordData = {
            evaluatingType: 1,
            evaluatingText: _this.gameWordData[_this.gameIndex],
            tryTimes: 1,
            evaluationScore: 30,
            recordTime: 3
          };
          EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
            eventName: "initComponent",
            extra: recordData
          });
          EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
            eventName: "startRecord"
          });
        }, 2.5);
        AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + this.recordAudio);
      };
      RedSantaClaus.prototype.recordResult = function(result) {
        console.log("recordResult", result.data);
        "ResultCb" == result.data.eventName && (result.data.success ? this.palyRightAnimation() : this.palyWrongAnimation());
      };
      __decorate([ property(cc.Node) ], RedSantaClaus.prototype, "roleNode", void 0);
      __decorate([ property(cc.Node) ], RedSantaClaus.prototype, "moveNode", void 0);
      __decorate([ property(cc.Node) ], RedSantaClaus.prototype, "bgNode", void 0);
      __decorate([ property(cc.Node) ], RedSantaClaus.prototype, "wardrobeNode", void 0);
      __decorate([ property(cc.Node) ], RedSantaClaus.prototype, "blockInputNode", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u5f15\u5bfc\u624b"
      }) ], RedSantaClaus.prototype, "handPrefab", void 0);
      RedSantaClaus = __decorate([ ccclass ], RedSantaClaus);
      return RedSantaClaus;
    }(ChapterGameComponent_1.default);
    exports.default = RedSantaClaus;
    cc._RF.pop();
  }, {
    "../../../common/hand/Hand": void 0,
    "../../../common/scripts/ChapterGameComponent": void 0,
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../../../kit/system/timer/TimerSystem": void 0,
    "./role": "role",
    "./wardrobe": "wardrobe"
  } ],
  role: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42130GKOFlG4YSTSSuch/Kl", "role");
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
    var comp_1 = require("./comp");
    var wardrobe_1 = require("./wardrobe");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ROLE_ANI;
    (function(ROLE_ANI) {
      ROLE_ANI["SDZ_IDLE"] = "SDZ-daiji";
      ROLE_ANI["SDZ_DISLIKE"] = "SDZ-xiangqi2";
      ROLE_ANI["SDZ_WALK"] = "SDZ-zou";
      ROLE_ANI["XZ_THINK"] = "XZ-sikao";
      ROLE_ANI["IDLE"] = "daiji";
      ROLE_ANI["HAPPY"] = "kaixin";
      ROLE_ANI["THINK"] = "sikao";
      ROLE_ANI["DISLIKE"] = "xianqi";
      ROLE_ANI["WALK"] = "zoulu";
    })(ROLE_ANI || (ROLE_ANI = {}));
    var ROLE_SKIN;
    (function(ROLE_SKIN) {
      ROLE_SKIN["DEFAULT"] = "default";
      ROLE_SKIN["KC"] = "KC";
      ROLE_SKIN["QY_SY"] = "QY-SY";
      ROLE_SKIN["XZ_SY"] = "XZ-SY";
      ROLE_SKIN["SDZ_SY"] = "SDZ-SY";
      ROLE_SKIN["SDZ_SY_QK"] = "SDZ-SY-QK";
      ROLE_SKIN["SDZ_SY_XK"] = "SDZ-SY-XK";
      ROLE_SKIN["SDZ"] = "SDZ";
    })(ROLE_SKIN || (ROLE_SKIN = {}));
    var Role = function(_super) {
      __extends(Role, _super);
      function Role() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sk = null;
        _this.boxNode = null;
        _this.rolePos = null;
        _this.wardrobeNode = null;
        _this.yanSk = null;
        _this.moveLen = 450;
        _this.curTime = 3;
        return _this;
      }
      Role.prototype.start = function() {};
      Role.prototype.palyIdleAnimation = function() {
        comp_1.playSpineAnimation(this.sk, ROLE_ANI.IDLE, true);
      };
      Role.prototype.palyWalkAnimation = function() {
        comp_1.playSpineAnimation(this.sk, ROLE_ANI.WALK, true);
      };
      Role.prototype.palyHappyAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, comp_1.playSpineAnimation(this.sk, ROLE_ANI.HAPPY) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Role.prototype.palyDislikeAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, comp_1.playSpineAnimation(this.sk, ROLE_ANI.DISLIKE) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Role.prototype.palyThinkAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, comp_1.playSpineAnimation(this.sk, ROLE_ANI.THINK) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Role.prototype.palyEndAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.sk.node.scaleX = -1;
            this.node.getChildByName("bag_off").active = false;
            comp_1.playSpineAnimation(this.sk, ROLE_ANI.SDZ_WALK, true);
            return [ 2 ];
          });
        });
      };
      Role.prototype.initRole = function() {
        var frameSize = cc.view.getFrameSize();
        cc.log(frameSize);
        this.node.x = -frameSize.width - 260;
        this.node.y = this.rolePos.y;
        this.moveLen = 250 - frameSize.width;
        cc.log(this.node.x, this.node.y, this.moveLen);
      };
      Role.prototype.startWalkInScene = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.palyWalkAnimation();
          cc.tween(_this.node).to(2, {
            x: _this.rolePos.x
          }).call(function() {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  return [ 4, this.palyDislikeAnimation() ];

                 case 1:
                  _a.sent();
                  this.palyIdleAnimation();
                  resolve();
                  return [ 2 ];
                }
              });
            });
          }).start();
        });
      };
      Role.prototype.gameFirstEnd = function(func) {
        var _this = this;
        this.node.getChildByName("bag_on").active = true;
        var bagPos1 = this.node.getPosition();
        this.boxNode.children.forEach(function(item, id) {
          cc.tween(item).to(.6, {
            x: bagPos1.x + 185,
            y: bagPos1.y + 400,
            scale: .4
          }).to(.4, {
            x: bagPos1.x + 185,
            y: bagPos1.y + 210,
            scale: 0
          }).start();
        });
        this.scheduleOnce(function() {
          _this.yanSk.node.active = true;
          _this.yanSk.node.setPosition(_this.node.getPosition().x + 200, _this.node.getPosition().y + 200);
          comp_1.playSpineAnimation(_this.yanSk, "animation").then(function() {
            _this.yanSk.node.active = false;
            func && func();
          });
        }, 1.5);
        this.scheduleOnce(function() {
          _this.node.getChildByName("bag_on").active = false;
          _this.node.getChildByName("bag_off").active = true;
        }, 1.7);
      };
      Role.prototype.setBagPosition = function() {
        this.node.getChildByName("bag_on").active = false;
        this.node.getChildByName("bag_off").active = true;
        var pos = this.node.getChildByName("bag_off").getPosition();
        this.node.getChildByName("bag_off").setPosition(-pos.x - 10, pos.y - 30);
        this.node.getChildByName("bag_off").scale = .8;
      };
      Role.prototype.gameEnd = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.palyEndAnimation();
          var frameSize = cc.view.getFrameSize();
          cc.tween(_this.node).to(2, {
            x: -frameSize.width - 600
          }).call(function() {
            _this.palyIdleAnimation();
            resolve();
          }).start();
        });
      };
      Role.prototype.gameSecondStart = function() {
        var _this = this;
        return new Promise(function(resolve) {
          cc.tween(_this.node).by(.3, {
            x: 150
          }).call(function() {
            resolve();
          }).start();
        });
      };
      Role.prototype.recordRight = function(num) {
        var _this = this;
        void 0 === num && (num = 0);
        return new Promise(function(resolve) {
          var syName = null;
          if (0 === num) {
            syName = "sy1";
            _this.sk.setSkin(ROLE_SKIN.SDZ_SY);
          } else {
            syName = "kz1";
            _this.sk.setSkin(ROLE_SKIN.SDZ);
          }
          _this.wardrobeNode.getComponent(wardrobe_1.default).wardrobeWrong(num, syName, false);
          _this.palyHappyAnimation().then(function() {
            resolve();
            _this.palyIdleAnimation();
          });
        });
      };
      Role.prototype.recordWrong = function(num) {
        var _this = this;
        void 0 === num && (num = 0);
        return new Promise(function(resolve) {
          var syName = null;
          if (0 === num) {
            var ran = Math.random();
            if (ran > .5) {
              _this.sk.setSkin(ROLE_SKIN.QY_SY);
              syName = "sy3";
            } else {
              _this.sk.setSkin(ROLE_SKIN.XZ_SY);
              syName = "sy2";
            }
          } else {
            var ran = Math.random();
            if (ran > .5) {
              syName = "kz2";
              _this.sk.setSkin(ROLE_SKIN.SDZ_SY_XK);
            } else {
              syName = "kz3";
              _this.sk.setSkin(ROLE_SKIN.SDZ_SY_QK);
            }
          }
          _this.wardrobeNode.getComponent(wardrobe_1.default).wardrobeWrong(num, syName, false);
          _this.palyDislikeAnimation().then(function() {
            resolve();
            0 === num ? _this.sk.setSkin(ROLE_SKIN.KC) : _this.sk.setSkin(ROLE_SKIN.SDZ_SY);
            _this.palyIdleAnimation();
            _this.wardrobeNode.getComponent(wardrobe_1.default).wardrobeWrong(num, syName, true);
          });
        });
      };
      __decorate([ property(sp.Skeleton) ], Role.prototype, "sk", void 0);
      __decorate([ property(cc.Node) ], Role.prototype, "boxNode", void 0);
      __decorate([ property(cc.Node) ], Role.prototype, "rolePos", void 0);
      __decorate([ property(cc.Node) ], Role.prototype, "wardrobeNode", void 0);
      __decorate([ property(sp.Skeleton) ], Role.prototype, "yanSk", void 0);
      Role = __decorate([ ccclass ], Role);
      return Role;
    }(cc.Component);
    exports.default = Role;
    cc._RF.pop();
  }, {
    "./comp": "comp",
    "./wardrobe": "wardrobe"
  } ],
  wardrobe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "798e4JHYWlOm5IdjsSil2DH", "wardrobe");
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
    var Wardrobe = function(_super) {
      __extends(Wardrobe, _super);
      function Wardrobe() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.syNode = null;
        _this.kzNode = null;
        _this.doorNode = null;
        return _this;
      }
      Wardrobe.prototype.playDoorAnimation = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var originPos = _this.doorNode.getPosition();
          cc.tween(_this.doorNode).to(1, {
            x: -originPos.x
          }).call(function() {
            resolve();
            _this.syNode.active = false;
          }).start();
        });
      };
      Wardrobe.prototype.wardrobeRight = function(num) {
        void 0 === num && (num = 0);
        0 === num ? this.syNode.getChildByName("sy1").active = false : this.kzNode.getChildByName("kz1").active = false;
      };
      Wardrobe.prototype.wardrobeWrong = function(num, name, active) {
        0 === num ? this.syNode.getChildByName(name).active = active : this.kzNode.getChildByName(name).active = active;
      };
      Wardrobe.prototype.start = function() {};
      __decorate([ property(cc.Node) ], Wardrobe.prototype, "syNode", void 0);
      __decorate([ property(cc.Node) ], Wardrobe.prototype, "kzNode", void 0);
      __decorate([ property(cc.Node) ], Wardrobe.prototype, "doorNode", void 0);
      Wardrobe = __decorate([ ccclass ], Wardrobe);
      return Wardrobe;
    }(cc.Component);
    exports.default = Wardrobe;
    cc._RF.pop();
  }, {} ]
}, {}, [ "box", "comp", "moveItem", "redSantaClaus", "role", "wardrobe" ]);