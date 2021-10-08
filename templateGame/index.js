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
  ComponentBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3b93VNoztAmr1fnmc0vz9F", "ComponentBase");
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
    var ComponentBase = function(_super) {
      __extends(ComponentBase, _super);
      function ComponentBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameBase = null;
        return _this;
      }
      ComponentBase.prototype.start = function() {};
      ComponentBase.prototype.initData = function(data) {
        this.gameBase = data;
      };
      ComponentBase = __decorate([ ccclass ], ComponentBase);
      return ComponentBase;
    }(cc.Component);
    exports.default = ComponentBase;
    cc._RF.pop();
  }, {} ],
  LevelIndicator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "273f6UiSY5DDYBciC3zYB/D", "LevelIndicator");
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
    var LevelIndicator = function(_super) {
      __extends(LevelIndicator, _super);
      function LevelIndicator() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.indicatorImgs = [];
        _this.lineImgs = [];
        _this.itemNode = null;
        _this.lineNode = null;
        _this.content = null;
        _this.indicatorNodes = [];
        _this.lineNodes = [];
        _this.maxRound = -1;
        return _this;
      }
      LevelIndicator.prototype.initData = function(maxRound) {
        this.maxRound = maxRound;
        this.initIndicator();
      };
      LevelIndicator.prototype.initIndicator = function() {
        var _this = this;
        for (var index = 0; index < this.maxRound; index++) {
          var node = cc.instantiate(this.itemNode);
          node.active = true;
          node.parent = this.content;
          this.indicatorNodes.push(node);
        }
        this.indicatorNodes.reverse();
        this.scheduleOnce(function() {
          _this.content.getComponent(cc.Layout).enabled = false;
          _this.initLine();
        });
      };
      LevelIndicator.prototype.initLine = function() {
        for (var index = 1; index < this.maxRound; index++) {
          var node = cc.instantiate(this.lineNode);
          node.active = true;
          node.parent = this.content;
          this.lineNodes.push(node);
          node.zIndex = cc.macro.MIN_ZINDEX;
          node.x = this.indicatorNodes[index].x - this.indicatorNodes[index].width / 2 - 9;
          node.getComponent(cc.Sprite).spriteFrame = this.lineImgs[1];
        }
      };
      LevelIndicator.prototype.updateCurIndicator = function(index, comp) {
        var spIndex = comp ? 1 : 2;
        this.indicatorNodes[index].getComponent(cc.Sprite).spriteFrame = this.indicatorImgs[spIndex];
        index > 0 && (this.lineNodes[index - 1].getComponent(cc.Sprite).spriteFrame = this.lineImgs[0]);
      };
      __decorate([ property([ cc.SpriteFrame ]) ], LevelIndicator.prototype, "indicatorImgs", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], LevelIndicator.prototype, "lineImgs", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "itemNode", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "lineNode", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "content", void 0);
      LevelIndicator = __decorate([ ccclass ], LevelIndicator);
      return LevelIndicator;
    }(cc.Component);
    exports.default = LevelIndicator;
    cc._RF.pop();
  }, {} ],
  PuzzleComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca155Vp2ylPFLuPKtX7T6GP", "PuzzleComponent");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DRAG_CORRECT_DISTANCE = 50;
    var PuzzleComponent = function(_super) {
      __extends(PuzzleComponent, _super);
      function PuzzleComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.puzzleCount = -1;
        _this.bloodCount = 3;
        _this.puzzleItemNodes = [];
        _this.puzzleDesNodes = [];
        _this.bloodNodes = [];
        return _this;
      }
      PuzzleComponent.prototype.onLoad = function() {
        this.initPuzzleDesNodes();
        this.initPuzzleItem();
        this.initDragEvent();
        this.initBloodNode();
      };
      PuzzleComponent.prototype.initPuzzleDesNodes = function() {
        var length = this.puzzleCount;
        for (var index = 1; index <= length; index++) {
          var node = this.node.getChildByName("ptbg" + index);
          this.puzzleDesNodes.push(node);
        }
      };
      PuzzleComponent.prototype.initPuzzleItem = function() {
        for (var index = 1; index <= this.puzzleCount; index++) {
          var node = this.node.getChildByName("dragItem" + index);
          this.puzzleItemNodes.push(node);
          node["originpos"] = node.position;
        }
      };
      PuzzleComponent.prototype.initBloodNode = function() {
        for (var index = 1; index <= this.bloodCount; index++) {
          var node = cc.find("heartContr/heartsp" + index, this.node);
          this.bloodNodes.push(node);
        }
        this.node.getChildByName("heartContr").getComponent(cc.Layout).enabled = false;
      };
      PuzzleComponent.prototype.initDragEvent = function() {
        for (var index = 0; index < this.puzzleItemNodes.length; index++) {
          var node = this.puzzleItemNodes[index];
          node.on(cc.Node.EventType.TOUCH_START, this.onBegin, this);
          node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
          node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
          node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancel, this);
        }
      };
      PuzzleComponent.prototype.gameOver = function(succ) {
        cc.log(" game over succ: " + succ);
        this.offAllDragEvent();
        this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: succ ? 1 : 0
        });
      };
      PuzzleComponent.prototype.onBegin = function(e) {
        var touchNode = e.target;
        var local = e.getLocation();
        local = touchNode.parent.convertToNodeSpaceAR(local);
        this._offsetPos = cc.v2(touchNode.position.sub(cc.v3(local)));
        touchNode.zIndex = cc.macro.MAX_ZINDEX;
      };
      PuzzleComponent.prototype.onMove = function(e) {
        var touchNode = e.target;
        var local = e.getLocation();
        local = touchNode.parent.convertToNodeSpaceAR(local);
        touchNode.position = cc.v3(local.add(this._offsetPos));
        this.checkDragRight(touchNode);
      };
      PuzzleComponent.prototype.checkDragRight = function(node, dragEnd) {
        void 0 === dragEnd && (dragEnd = false);
        var index = +node.name[node.name.length - 1] - 1;
        if (index >= 0 && index < this.puzzleCount) {
          var dragPos = node.position;
          var targetPos = this.puzzleDesNodes[index].position;
          var len = dragPos.sub(targetPos).len();
          len <= DRAG_CORRECT_DISTANCE ? dragEnd && this.dragCorrect(node, targetPos) : dragEnd && this.dragWrong(node);
        } else cc.error("drag error! name: " + node.name);
      };
      PuzzleComponent.prototype.dragCorrect = function(node, targetPos) {
        node.position = targetPos;
        node.scale = 1.8;
        this.offTouchEvent(node);
        var index = this.puzzleItemNodes.indexOf(node);
        this.puzzleItemNodes.splice(index, 1);
        this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundProceeding);
        this.puzzleItemNodes.length <= 0 && this.gameOver(true);
      };
      PuzzleComponent.prototype.dragWrong = function(node) {
        node.position = node["originpos"];
        var bloodNode = this.bloodNodes.pop();
        bloodNode.destroy();
        this.bloodNodes.length <= 0 && this.gameOver(false);
      };
      PuzzleComponent.prototype.onEnd = function(e) {
        var touchNode = e.target;
        this.checkDragRight(touchNode, true);
        touchNode.zIndex = 1;
      };
      PuzzleComponent.prototype.onCancel = function(e) {
        var touchNode = e.target;
        touchNode.zIndex = 1;
      };
      PuzzleComponent.prototype.offAllDragEvent = function() {
        for (var index = 0; index < this.puzzleItemNodes.length; index++) {
          var node = this.puzzleItemNodes[index];
          this.offTouchEvent(node);
        }
      };
      PuzzleComponent.prototype.offTouchEvent = function(node) {
        node.off(cc.Node.EventType.TOUCH_START);
        node.off(cc.Node.EventType.TOUCH_MOVE);
        node.off(cc.Node.EventType.TOUCH_END);
        node.off(cc.Node.EventType.TOUCH_CANCEL);
      };
      __decorate([ property({
        displayName: "\u62d6\u62fd\u5143\u7d20\u6570\u91cf"
      }) ], PuzzleComponent.prototype, "puzzleCount", void 0);
      __decorate([ property({
        displayName: "\u5fc3\u7684\u6570\u91cf"
      }) ], PuzzleComponent.prototype, "bloodCount", void 0);
      PuzzleComponent = __decorate([ ccclass ], PuzzleComponent);
      return PuzzleComponent;
    }(ComponentBase_1.default);
    exports.default = PuzzleComponent;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ],
  TemplateGameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d51deoEEOBKebgD6ev3k+1A", "TemplateGameBase");
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
    var ChapterGameComponent_1 = require("../../../common/scripts/ChapterGameComponent");
    var CompEnum_1 = require("../../../common/structure/CompEnum");
    var events_1 = require("../../../kit/events/events");
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var LevelIndicator_1 = require("../levelIndicator/scripts/LevelIndicator");
    var ComponentBase_1 = require("./ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TemplateGameBase = function(_super) {
      __extends(TemplateGameBase, _super);
      function TemplateGameBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roundNodeArr = [];
        _this.curRoundIndex = 0;
        _this.MaxRoundIndex = 4;
        _this.curRoundResult = null;
        _this.levelIndicator = null;
        _this.curRoundStateType = CompEnum_1.RoundStateType.None;
        return _this;
      }
      TemplateGameBase.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.initLevelIndicator();
        this.change2NextRound();
      };
      TemplateGameBase.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
      };
      TemplateGameBase.prototype.initLevelIndicator = function() {
        var _this = this;
        ResourcesManager_1.default.instance.loadRes("templateGame", "levelIndicator/prefab/levelIndicator", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(err, asset) {
          var node = cc.instantiate(asset);
          var size = cc.winSize;
          _this.levelIndicator = node.getComponent(LevelIndicator_1.default);
          _this.levelIndicator.initData(_this.MaxRoundIndex);
          _this.node.addChild(node);
          node.x = size.width / 2 - 30;
          node.y = size.height / 2 - 70;
        });
      };
      TemplateGameBase.prototype.roundStateTypeChanged = function(stateType, params) {
        this.curRoundStateType = stateType;
        cc.log("===>stateType: ", stateType);
        switch (stateType) {
         case CompEnum_1.RoundStateType.RoundOpenAniStart:
          this.openAniStart();
          break;

         case CompEnum_1.RoundStateType.RoundOpenAniComplete:
          this.openAniComplete();
          break;

         case CompEnum_1.RoundStateType.RoundStart:
          this.roundStart();
          break;

         case CompEnum_1.RoundStateType.RoundProceeding:
          this.roundProceeding(params);
          break;

         case CompEnum_1.RoundStateType.RoundComplete:
          this.roundComplete(params);
          break;

         case CompEnum_1.RoundStateType.RoundEndAniStart:
          this.endAniStart();
          break;

         case CompEnum_1.RoundStateType.RoundEndAniComplete:
          this.endAniComplete();
        }
      };
      TemplateGameBase.prototype.openAniStart = function() {};
      TemplateGameBase.prototype.openAniComplete = function() {
        this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundStart);
      };
      TemplateGameBase.prototype.roundStart = function() {
        if (this.curRoundIndex == this.MaxRoundIndex - 1) this.startAudioCallFunc(); else for (var index = 0; index < this.roundNodeArr.length; index++) {
          var node = this.roundNodeArr[index];
          node.active = this.curRoundIndex === index;
        }
      };
      TemplateGameBase.prototype.roundProceeding = function(params) {};
      TemplateGameBase.prototype.roundComplete = function(params) {
        this.curRoundResult = params;
        this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundEndAniStart, params);
      };
      TemplateGameBase.prototype.endAniStart = function() {};
      TemplateGameBase.prototype.endAniComplete = function() {
        this.updateRoundStateDisplay();
        cc.log("===>>> curRoundIndex: " + this.curRoundIndex + "    MaxRoundIndex:" + this.MaxRoundIndex);
        this.curRoundIndex++;
        this.curRoundIndex >= this.MaxRoundIndex ? this.gameEnd() : this.change2NextRound();
      };
      TemplateGameBase.prototype.startAudioCallFunc = function() {
        cc.warn(" \u5f00\u59cb\u8bed\u97f3\u6d4b\u8bc4\uff0c\u91cd\u5199startAudioCallFunc");
      };
      TemplateGameBase.prototype.gameEnd = function() {
        cc.log("game end!");
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
      };
      TemplateGameBase.prototype.change2NextRound = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.gameRoundInit() ];

             case 1:
              _a.sent();
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundOpenAniStart);
              return [ 2 ];
            }
          });
        });
      };
      TemplateGameBase.prototype.gameRoundInit = function() {
        for (var index = 0; index < this.roundNodeArr.length; index++) {
          var node = this.roundNodeArr[index];
          node.active = false;
        }
        this.roundNodeArr[this.curRoundIndex] ? this.roundNodeArr[this.curRoundIndex].getComponent(ComponentBase_1.default).initData(this) : cc.log("this.roundNodeArr[this.curRoundIndex] nil!  curRoundIndex: " + this.curRoundIndex + " ");
      };
      TemplateGameBase.prototype.updateRoundStateDisplay = function() {
        this.levelIndicator.updateCurIndicator(this.curRoundIndex, !!this.curRoundResult.win);
      };
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u73af\u8282\u4e92\u52a8\u7ec4\u4ef6"
      }) ], TemplateGameBase.prototype, "roundNodeArr", void 0);
      TemplateGameBase = __decorate([ ccclass ], TemplateGameBase);
      return TemplateGameBase;
    }(ChapterGameComponent_1.default);
    exports.default = TemplateGameBase;
    cc._RF.pop();
  }, {
    "../../../common/scripts/ChapterGameComponent": void 0,
    "../../../common/structure/CompEnum": void 0,
    "../../../kit/events/events": void 0,
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../levelIndicator/scripts/LevelIndicator": "LevelIndicator",
    "./ComponentBase": "ComponentBase"
  } ],
  chooseGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d796703O6ZCFaI4lWLDqiLC", "chooseGame");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var chooseGame = function(_super) {
      __extends(chooseGame, _super);
      function chooseGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.answerNumber = 0;
        _this.touchItems = [];
        return _this;
      }
      chooseGame.prototype.start = function() {
        this.schedule(this.showTips, 5);
        this.showTips();
      };
      chooseGame.prototype.showTips = function() {
        this.touchItems.forEach(function(node) {
          cc.tween(node).by(.2, {
            scale: .1
          }).by(.2, {
            scale: -.1
          }).union().repeat(2).start();
        });
      };
      chooseGame.prototype.itemTouchCall = function(event, data) {
        var _this = this;
        var n = Number(data);
        this.answerNumber == n ? AudioManager_1.default.playEffect("quziGamePanda", "res/audios/game_right") : AudioManager_1.default.playEffect("quziGamePanda", "res/audios/game_error");
        cc.tween(this.node).to(.5, {
          opacity: 0
        }).call(function() {
          _this.answerNumber == n ? _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 1
          }) : _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 0
          });
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      __decorate([ property({
        type: cc.Integer,
        displayName: "\u6b63\u786e\u9009\u9879"
      }) ], chooseGame.prototype, "answerNumber", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u9009\u9879Node"
      }) ], chooseGame.prototype, "touchItems", void 0);
      chooseGame = __decorate([ ccclass ], chooseGame);
      return chooseGame;
    }(ComponentBase_1.default);
    exports.default = chooseGame;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ],
  selectGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00adcik625DXbmQzXeC5qW1", "selectGame");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SelectGame = function(_super) {
      __extends(SelectGame, _super);
      function SelectGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.heartsArr = [];
        _this.answerItemsArr = [];
        _this.rightTimes = 0;
        _this.wrongTiems = 0;
        _this.touchItems = [];
        return _this;
      }
      SelectGame.prototype.start = function() {
        var _this = this;
        cc.tween(this.node).to(1, {
          y: 0
        }).call(function() {
          _this.schedule(_this.showTips, 5);
          _this.showTips();
        }).start();
      };
      SelectGame.prototype.showTips = function() {
        this.touchItems.forEach(function(node) {
          cc.tween(node).by(.2, {
            scale: .1
          }).by(.2, {
            scale: -.1
          }).union().repeat(2).start();
        });
      };
      SelectGame.prototype.itemTouchCall = function(event, data) {
        var n = Number(data);
        var node = event.target;
        node.active = false;
        if (0 == n) {
          this.answerItemsArr[this.rightTimes].active = true;
          AudioManager_1.default.playEffect("templateGame", "selectGame/audios/game_right");
          if (this.rightTimes >= 1) {
            this.gameEnd(1);
            return;
          }
          this.rightTimes += 1;
        } else {
          AudioManager_1.default.playEffect("templateGame", "selectGame/audios/game_error");
          this.heartsArr[this.wrongTiems].active = false;
          this.wrongTiems += 1;
          (2 == this.wrongTiems && 0 == this.rightTimes || 3 == this.wrongTiems) && this.gameEnd(0);
        }
      };
      SelectGame.prototype.gameEnd = function(w) {
        var _this = this;
        cc.tween(this.node).to(2, {
          y: 900
        }).call(function() {
          _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: w
          });
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      SelectGame.prototype.onEnable = function() {
        cc.tween(this.node).to(1, {
          y: 0
        });
      };
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6b65\u6570\u6307\u793a\u5668"
      }) ], SelectGame.prototype, "heartsArr", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u4efb\u52a1\u6307\u793a\u5668"
      }) ], SelectGame.prototype, "answerItemsArr", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u9009\u9879Node"
      }) ], SelectGame.prototype, "touchItems", void 0);
      SelectGame = __decorate([ ccclass ], SelectGame);
      return SelectGame;
    }(ComponentBase_1.default);
    exports.default = SelectGame;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ]
}, {}, [ "chooseGame", "LevelIndicator", "PuzzleComponent", "ComponentBase", "TemplateGameBase", "selectGame" ]);