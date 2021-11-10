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
  GuaMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38f9bmRtFVNsJ2QMl+UVwOQ", "GuaMain");
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
    var Hand_1 = require("../../../common/hand/Hand");
    var ChapterGameComponent_1 = require("../../../common/scripts/ChapterGameComponent");
    var Guagua_1 = require("./Guagua");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuaMain = function(_super) {
      __extends(GuaMain, _super);
      function GuaMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.prefab = null;
        _this.bgColor = cc.color(254, 226, 216);
        _this.bgFrame = null;
        _this.cardFrames = [];
        _this.texts = [];
        _this.voices = [];
        _this.bg = null;
        _this.slot = null;
        _this.list = [];
        _this.offsetX = 20;
        _this.offsetY = 20;
        _this.currIndex = 0;
        _this.handPrefab = null;
        _this.hand = null;
        _this.poses = [];
        _this.ready = false;
        _this.moveDuration = .7;
        _this.span = .2;
        _this.timerTween = null;
        _this.idleSecs = 6;
        return _this;
      }
      GuaMain_1 = GuaMain;
      GuaMain.prototype.getPos = function(index) {
        if (this.cardFrames.length % 2 == 1) {
          var mid = Math.floor(this.cardFrames.length / 2);
          var pos = cc.v2(0, 0);
          var offx = this.offsetX * (index - mid);
          var offy = this.offsetY * (index - mid);
          pos.x += offx;
          pos.y += offy;
          return pos;
        }
        var mid = Math.floor(this.cardFrames.length / 2);
        var pos = cc.v2(this.offsetX / 2, this.offsetY / 2);
        var offx = this.offsetX * (index - mid);
        var offy = this.offsetY * (index - mid);
        pos.x += offx;
        pos.y += offy;
        return pos;
      };
      GuaMain.prototype.onLoad = function() {
        var _this = this;
        GuaMain_1.instance = this;
        this.bg = cc.find("bg", this.node);
        this.slot = cc.find("slot", this.node);
        this.bg.color = this.bgColor;
        var _loop_1 = function(i) {
          var ticket = cc.instantiate(this_1.prefab);
          var qua = ticket.getComponent(Guagua_1.default);
          qua.index = i;
          this_1.node.addChild(qua.node);
          qua.setBgFrame(this_1.bgFrame);
          qua.setCardFrame(this_1.cardFrames[i]);
          qua.setCardText(this_1.texts[i]);
          qua.onCompleted = this_1.onCompleted.bind(this_1);
          qua.node.zIndex = 100 - i;
          var pos = this_1.getPos(i);
          qua.node.x = this_1.node.width + 450;
          qua.node.y = pos.y;
          qua["main"] = this_1;
          this_1.poses.push(pos);
          this_1.list.push(qua);
          this_1.scheduleOnce(function() {
            _this.launchTicket(i, qua.node);
          }, this_1.span * (this_1.cardFrames.length - i - 1));
        };
        var this_1 = this;
        for (var i = 0; i < this.cardFrames.length; i++) _loop_1(i);
        var handNode = cc.instantiate(this.handPrefab);
        handNode.active = false;
        this.node.addChild(handNode);
        this.hand = handNode.getComponent(Hand_1.default);
        this.hand.node.zIndex = 300;
        this.hand.onCompleted = this.onHandCompleted.bind(this);
      };
      GuaMain.prototype.launchTicket = function(index, node) {
        var _this = this;
        cc.tween(node).to(this.moveDuration, {
          x: this.poses[index].x
        }, {
          easing: "sineOut"
        }).delay(.5).call(function() {
          if (index == _this.poses.length - 1) {
            _this.ready = true;
            _this.onReady();
          }
        }).start();
      };
      GuaMain.prototype.onReady = function() {
        var _this = this;
        this.playMonster(function() {
          if (_this.currGua.isDragging) return;
          _this.startGuide();
        });
      };
      Object.defineProperty(GuaMain.prototype, "currGua", {
        get: function() {
          var gua = this.list[this.currIndex];
          return gua;
        },
        enumerable: false,
        configurable: true
      });
      GuaMain.prototype.start = function() {};
      GuaMain.prototype.onHandCompleted = function() {
        this.startGuideTimer();
      };
      GuaMain.prototype.startGuideTimer = function() {
        var _this = this;
        if (null != this.timerTween) {
          this.timerTween.stop();
          this.timerTween = null;
        }
        this.timerTween = cc.tween(this.node).delay(this.idleSecs).call(function() {
          _this.startGuide();
        }).start();
      };
      GuaMain.prototype.startGuide = function() {
        var _this = this;
        var gua = this.list[this.currIndex];
        this.hand.setTargetNode(gua.mask_img, this.node, 50);
        var animIndex = 1;
        var count = 0;
        this.hand.onCompleted = function() {
          if (0 == animIndex) {
            animIndex = 1;
            _this.hand.playSwipeByAngle(0, "zuo-you", false);
          } else if (1 == animIndex) if (0 == count) {
            count++;
            _this.hand.playSwipeByAngle(0, "zuo-you", false);
          } else {
            _this.hand.hide();
            _this.onHandCompleted();
          }
        };
        this.hand.playSwipeByAngle(0, "zuo-you", false);
      };
      GuaMain.prototype.stopGuideTimer = function() {
        if (null != this.timerTween) {
          this.timerTween.stop();
          this.timerTween = null;
        }
        this.hand.hide();
      };
      GuaMain.prototype.onCompleted = function(index) {
        var _this = this;
        console.log("guagua index:" + index + " onCompleted");
        var gua = this.list[index];
        this.reportRoundCompleted(index, true);
        cc.tween(gua.node).by(.5, {
          x: -this.node.width
        }, {
          easing: "sineOut"
        }).call(function() {
          _this.currIndex++;
          _this.playMonster(function() {});
        }).start();
      };
      GuaMain.prototype.playMonster = function(func) {
        var qua = this.list[this.currIndex];
        qua.playMonster("yihuo", false).then(function() {
          qua.playMonster("idle", true);
          func();
        });
      };
      var GuaMain_1;
      GuaMain.instance = null;
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u5956\u5238\u6a21\u677f"
      }) ], GuaMain.prototype, "prefab", void 0);
      __decorate([ property({
        displayName: "\u80cc\u666f\u989c\u8272"
      }) ], GuaMain.prototype, "bgColor", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "\u5956\u5238\u5e95\u677f"
      }) ], GuaMain.prototype, "bgFrame", void 0);
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        displayName: "\u5355\u8bcd\u5361"
      }) ], GuaMain.prototype, "cardFrames", void 0);
      __decorate([ property({
        type: [ cc.String ],
        displayName: "\u5355\u8bcd\u6587\u672c"
      }) ], GuaMain.prototype, "texts", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ],
        displayName: "\u5355\u8bcd\u8bed\u97f3"
      }) ], GuaMain.prototype, "voices", void 0);
      __decorate([ property({
        displayName: "hand",
        type: cc.Prefab
      }) ], GuaMain.prototype, "handPrefab", void 0);
      GuaMain = GuaMain_1 = __decorate([ ccclass ], GuaMain);
      return GuaMain;
    }(ChapterGameComponent_1.default);
    exports.default = GuaMain;
    cc._RF.pop();
  }, {
    "../../../common/hand/Hand": void 0,
    "../../../common/scripts/ChapterGameComponent": void 0,
    "./Guagua": "Guagua"
  } ],
  Guagua: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8f5884uapHwKzZZLn+29LJ", "Guagua");
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
    var GuaMain_1 = require("./GuaMain");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Guagua = function(_super) {
      __extends(Guagua, _super);
      function Guagua() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.mask = null;
        _this.graphics = null;
        _this.question = null;
        _this.monster = null;
        _this.percent = {
          f: 0,
          i: 0
        };
        _this.graphics2 = null;
        _this.mask_img = null;
        _this.percentProgress = null;
        _this.isDebug = false;
        _this.card = null;
        _this.sound = null;
        _this.index = 0;
        _this.onCompleted = null;
        _this.mask_light = null;
        _this.currResolve = null;
        _this.isDragging = false;
        _this.grid = [];
        _this.rectWidth = 50;
        _this.lines = [];
        _this.currPos = cc.Vec2.ZERO;
        _this.lastPos = cc.Vec2.ZERO;
        _this.lineWidth = 60;
        _this.completed = false;
        _this.text = "";
        return _this;
      }
      Guagua_1 = Guagua;
      Guagua.prototype.onLoad = function() {
        var _this = this;
        this.bg = cc.find("bg", this.node);
        this.question = cc.find("question", this.bg);
        this.mask = cc.find("mask", this.bg);
        this.mask_light = cc.find("mask_light", this.bg);
        this.mask_img = cc.find("mask_board", this.mask);
        this.graphics = this.mask.getComponent(cc.Mask)["_graphics"];
        this.graphics.lineWidth = this.lineWidth;
        this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics2 = cc.find("g", this.bg).getComponent(cc.Graphics);
        this.monster = cc.find("monster", this.bg).getComponent(sp.Skeleton);
        this.percentProgress = cc.find("progress", this.node).getComponent(cc.ProgressBar);
        this.card = cc.find("card", this.question).getComponent(cc.Sprite);
        this.bg.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.bg.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bg.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bg.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.genGrids();
        this.monster.setCompleteListener(function() {
          if (_this.currResolve) {
            var cb = _this.currResolve;
            _this.currResolve = null;
            cb();
          }
        });
      };
      Guagua.prototype.start = function() {};
      Guagua.prototype.genGrids = function() {
        var col = Math.ceil(this.card.node.width / this.rectWidth);
        var row = Math.ceil(this.card.node.height / this.rectWidth);
        var offsetX = -this.card.node.width / 2;
        var offsetY = -this.card.node.height / 2;
        for (var i = 0; i < row; i++) for (var j = 0; j < col; j++) {
          var rx = offsetX + j * this.rectWidth - this.rectWidth / 4;
          var ry = offsetY + i * this.rectWidth - this.rectWidth / 4;
          var rect = cc.rect(rx, ry, this.rectWidth, this.rectWidth);
          this.grid.push({
            rect: rect,
            hit: false
          });
        }
      };
      Guagua.isRectCrossLine = function(rect, line) {
        var linePointX1 = line.start.x;
        var linePointY1 = line.start.y;
        var linePointX2 = line.end.x;
        var linePointY2 = line.end.y;
        var rectangleLeftTopX = rect.x;
        var rectangleLeftTopY = rect.y + rect.height;
        var rectangleRightBottomX = rect.x + rect.width;
        var rectangleRightBottomY = rect.y;
        var lineHeight = linePointY1 - linePointY2;
        var lineWidth = linePointX2 - linePointX1;
        var c = linePointX1 * linePointY2 - linePointX2 * linePointY1;
        if (lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c <= 0 || lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c >= 0 || lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c <= 0 || lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c >= 0) {
          if (rectangleLeftTopX > rectangleRightBottomX) {
            var temp = rectangleLeftTopX;
            rectangleLeftTopX = rectangleRightBottomX;
            rectangleRightBottomX = temp;
          }
          if (rectangleLeftTopY < rectangleRightBottomY) {
            var temp1 = rectangleLeftTopY;
            rectangleLeftTopY = rectangleRightBottomY;
            rectangleRightBottomY = temp1;
          }
          return !(linePointX1 < rectangleLeftTopX && linePointX2 < rectangleLeftTopX || linePointX1 > rectangleRightBottomX && linePointX2 > rectangleRightBottomX || linePointY1 > rectangleLeftTopY && linePointY2 > rectangleLeftTopY || linePointY1 < rectangleRightBottomY && linePointY2 < rectangleRightBottomY);
        }
        return false;
      };
      Guagua.prototype.hitRect = function(line) {
        for (var i = 0; i < this.grid.length; i++) {
          var grid = this.grid[i];
          if (Guagua_1.isRectCrossLine(grid.rect, line)) {
            grid.hit = true;
            this.isDebug && this.drawCircle(cc.v2(grid.rect.x + grid.rect.width / 2, grid.rect.y + grid.rect.width / 2));
          }
        }
      };
      Guagua.prototype.onClicked = function() {
        console.log("onclicked");
      };
      Guagua.prototype.onTouchBegan = function(event) {
        if (this.isDragging) return;
        if (!GuaMain_1.default.instance.ready) return;
        if (this.completed) return;
        this.isDragging = true;
        GuaMain_1.default.instance.stopGuideTimer();
        var currX = event.getLocationX();
        var currY = event.getLocationY();
        var pos = this.mask.convertToNodeSpaceAR(cc.v2(currX, currY));
        this.currPos.x = pos.x;
        this.currPos.y = pos.y;
        this.lastPos.x = pos.x;
        this.lastPos.y = pos.y;
        this.graphics.lineWidth = this.lineWidth;
        this.graphics.moveTo(pos.x, pos.y);
      };
      Guagua.prototype.getPercent = function() {
        var ret = 0;
        for (var i_1 = 0; i_1 < this.grid.length; i_1++) {
          var grid = this.grid[i_1];
          grid.hit && ret++;
        }
        var f = ret / this.grid.length;
        var i = Math.ceil(100 * f);
        if (i >= 90) {
          f = 1;
          i = 100;
        }
        return {
          f: f,
          i: i
        };
      };
      Guagua.prototype.drawCircle = function(pos) {
        console.log("drawCircle");
        this.graphics2.ellipse(pos.x, pos.y, this.lineWidth / 4, this.lineWidth / 4);
        this.graphics2.fillColor = cc.color(0, 0, 0, 255);
        this.graphics2.fill();
      };
      Guagua.prototype.drawLine = function(pos) {
        this.graphics.lineTo(pos.x, pos.y);
        this.graphics.stroke();
        this.graphics.moveTo(pos.x, pos.y);
        var line = {
          start: cc.v2(this.lastPos.x, this.lastPos.y),
          end: cc.v2(pos.x, pos.y)
        };
        this.lines.push(line);
        this.lastPos.x = pos.x;
        this.lastPos.y = pos.y;
        this.hitRect(line);
        this.percent = this.getPercent();
        this.percentProgress.progress = this.percent.f;
        if (this.percent.i >= 90 && false == this.completed) {
          this.completed = true;
          this.onCompletedGua();
        }
      };
      Guagua.prototype.onCompletedGua = function() {
        var _this = this;
        this.mask_light.active = true;
        GuaMain_1.default.instance.stopGuideTimer();
        this.playMonster("huangrandawu", false).then(function() {
          _this.playMonster("idle", true);
        });
        cc.tween(this.mask_img).to(.5, {
          opacity: 0
        }, {
          easing: "sineOut"
        }).delay(Guagua_1.complete_delay).call(function() {
          if (_this.onCompleted) {
            var cb = _this.onCompleted;
            cb(_this.index);
          }
        }).start();
      };
      Guagua.prototype.onTouchMove = function(event) {
        if (!GuaMain_1.default.instance.ready) return;
        if (this.completed) return;
        var deltaX = event.getDeltaX();
        var deltaY = event.getDeltaY();
        this.currPos.x += deltaX;
        this.currPos.y += deltaY;
        this.drawLine(this.currPos);
      };
      Guagua.prototype.onTouchEnd = function(event) {
        this.isDragging = false;
        if (this.completed) return;
        GuaMain_1.default.instance.startGuideTimer();
      };
      Guagua.prototype.setBgFrame = function(frame) {
        frame && (this.bg.getComponent(cc.Sprite).spriteFrame = frame);
      };
      Guagua.prototype.setCardFrame = function(frame) {
        frame && (this.card.spriteFrame = frame);
      };
      Guagua.prototype.setCardText = function(txt) {
        this.text = txt;
      };
      Guagua.prototype.setAudioClip = function(sound) {
        this.sound = sound;
      };
      Guagua.prototype.playMonster = function(name, loop) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.currResolve = resolve;
              _this.monster.setAnimation(0, name, loop);
            }) ];
          });
        });
      };
      var Guagua_1;
      Guagua.complete_delay = 6;
      Guagua = Guagua_1 = __decorate([ ccclass ], Guagua);
      return Guagua;
    }(cc.Component);
    exports.default = Guagua;
    cc._RF.pop();
  }, {
    "./GuaMain": "GuaMain"
  } ]
}, {}, [ "GuaMain", "Guagua" ]);
//# sourceMappingURL=index.js.map
