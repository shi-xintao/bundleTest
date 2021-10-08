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
  ActionHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c68df4LW0BD1YbL4wyGrpog", "ActionHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ActionHelper = function() {
      function ActionHelper() {}
      ActionHelper.moveTo = function(target, pos, duration, callback) {
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        ActionHelper.moveToXY(target, pos.x, pos.y, duration, callback);
      };
      ActionHelper.moveToV2 = function(target, pos, duration, callback) {
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        ActionHelper.moveToXY(target, pos.x, pos.y, duration, callback);
      };
      ActionHelper.moveToXY = function(target, x, y, duration, callback) {
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        var mov = cc.moveTo(duration, x, y).easing(cc.easeSineOut());
        var seq = cc.sequence(mov, cc.callFunc(function() {
          callback();
        }));
        target.runAction(seq);
      };
      ActionHelper.fadeOut = function(target, duration, callback) {
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        var fade = cc.fadeOut(duration).easing(cc.easeSineOut());
        var seq = cc.sequence(fade, cc.callFunc(function() {
          callback();
        }));
        target.runAction(seq);
      };
      ActionHelper.fadeIn = function(target, duration, callback) {
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        var fade = cc.fadeIn(duration).easing(cc.easeSineOut());
        var seq = cc.sequence(fade, cc.callFunc(function() {
          callback();
        }));
        target.runAction(seq);
      };
      return ActionHelper;
    }();
    exports.default = ActionHelper;
    cc._RF.pop();
  }, {} ],
  Balloon2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d0a678hpdBjbz0s4nx6G/k", "Balloon2");
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
    var ActionHelper_1 = require("./ActionHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Balloon2 = function(_super) {
      __extends(Balloon2, _super);
      function Balloon2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shape = null;
        _this.origin = null;
        return _this;
      }
      Balloon2.prototype.start = function() {};
      Balloon2.prototype.showShape = function() {
        this.shape.active = true;
        this.origin.active = true;
        this.shape.opacity = 0;
        this.origin.opacity = 255;
        ActionHelper_1.default.fadeIn(this.shape, .5);
        ActionHelper_1.default.fadeOut(this.origin, .5);
      };
      Balloon2.prototype.showOrigin = function() {
        this.shape.active = true;
        this.origin.active = true;
        this.shape.opacity = 255;
        this.origin.opacity = 0;
        ActionHelper_1.default.fadeOut(this.shape, .5);
        ActionHelper_1.default.fadeIn(this.origin, .5);
      };
      __decorate([ property(cc.Node) ], Balloon2.prototype, "shape", void 0);
      __decorate([ property(cc.Node) ], Balloon2.prototype, "origin", void 0);
      Balloon2 = __decorate([ ccclass ], Balloon2);
      return Balloon2;
    }(cc.Component);
    exports.default = Balloon2;
    cc._RF.pop();
  }, {
    "./ActionHelper": "ActionHelper"
  } ],
  Balloon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7a7aXG0XdJzam7sOSOwZvu", "Balloon");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var Bubble_1 = require("./Bubble");
    var TheThreeState_1 = require("./states/TheThreeState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Balloon = function(_super) {
      __extends(Balloon, _super);
      function Balloon() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.blink = null;
        _this.empty = null;
        _this.index = 0;
        _this.touchEndFunc = null;
        _this.touchBeganFunc = null;
        _this.hotArea = null;
        _this.hotBg = null;
        _this.state = Balloon_1.STATE_EMPTY;
        _this.context = null;
        _this.flag_block = false;
        _this.full_btn = null;
        _this.initPos = cc.Vec2.ZERO;
        _this.currPos = cc.Vec2.ZERO;
        _this.guiding = false;
        _this.flagChangeAnim = false;
        return _this;
      }
      Balloon_1 = Balloon;
      Balloon.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.hotArea = cc.find("pump_mouse", this.node.parent);
        this.hotBg = cc.find("bg", this.hotArea);
        this.context = this.node.parent.parent.parent.getComponent(Bubble_1.default);
        this.full_btn = cc.find("full_btn", this.node);
      };
      Balloon.prototype.onFullClicked = function() {
        var _this = this;
        if (this.state != Balloon_1.STATE_TO_CLICK) return;
        this.context.hand.hide();
        this.context.unScheduleGuideFinish();
        this.context.playVoice();
        this.state = Balloon_1.STATE_FLY_FRAME;
        AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan02");
        this.moveTo(this.context.step1.poses_fly[this.index], 1, function() {
          AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan03");
          _this.state = Balloon_1.STATE_FINISH;
          Bubble_1.default.instance.currBalloonId = -1;
          _this.playNormal();
          if (_this.context.isAllFinished()) _this.context.taskBoard.show(0, function(isShowing) {
            _this.context.taskBoard.playFinished();
            _this.context.scheduleOnce(function() {
              _this.context.taskBoard.hide();
              var state = new TheThreeState_1.default(_this.context);
              _this.context.setState(state);
            }, 3);
          }); else {
            var state = _this.context.getCurrState();
            if ("BoardState" == state.id) {
              var bstate = state;
              bstate.onGuideFinish();
            }
          }
        });
      };
      Balloon.prototype.onTouchBegan = function(event) {
        if (this.state == Balloon_1.STATE_FINISH) return;
        if (this.flag_block) return;
        if (Bubble_1.default.instance.currBalloonId != this.index && -1 != Bubble_1.default.instance.currBalloonId) return;
        Bubble_1.default.instance.currBalloonId = this.index;
        this.context.hand.hide();
        this.context.unScheduleGuideFinish();
        this.context.playVoice();
        this.currPos.x = this.node.x;
        this.currPos.y = this.node.y;
        this.initPos.x = this.node.x;
        this.initPos.y = this.node.y;
      };
      Balloon.prototype.onTouchMove = function(event) {
        if (this.state == Balloon_1.STATE_FINISH) return;
        if (this.flag_block) return;
        if (Bubble_1.default.instance.currBalloonId != this.index) return;
        var deltaX = event.getDeltaX();
        var deltaY = event.getDeltaY();
        this.currPos.x += deltaX;
        this.currPos.y += deltaY;
        this.node.x = this.currPos.x;
        this.node.y = this.currPos.y;
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.hotArea.getBoundingBoxToWorld().contains(cc.v2(worldPos.x, worldPos.y)) ? this.hotBg.active = true : this.hotBg.active = false;
      };
      Balloon.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (this.state == Balloon_1.STATE_FINISH) return;
        if (this.flag_block) return;
        if (Bubble_1.default.instance.currBalloonId != this.index) return;
        var currX = event.getLocationX();
        var currY = event.getLocationY();
        var dis = Math.sqrt((currX - this.initPos.x) * (currX - this.initPos.x) + (currY - this.initPos.y) * (currY - this.initPos.y));
        if (dis > 20) {
          var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
          this.hotArea.getBoundingBoxToWorld().contains(cc.v2(worldPos.x, worldPos.y)) ? this.hotBg.active = true : this.hotBg.active = false;
          if (this.hotBg.active) {
            if (this.state == Balloon_1.STATE_EMPTY) {
              this.state = Balloon_1.STATE_PUMP;
              this.hotBg.active = false;
              this.context.playVoice();
              this.moveTo(this.context.step1.mouth, .5, function() {
                _this.state = Balloon_1.STATE_PUMP;
                _this.playPump(function() {
                  _this.state = Balloon_1.STATE_FLY_CENTER;
                  AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan02");
                  _this.moveTo(_this.context.step1.center, 1, function() {
                    AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan03");
                    _this.state = Balloon_1.STATE_TO_CLICK;
                    _this.flag_block = true;
                    _this.playBlink();
                    _this.onGuideFinish();
                  });
                });
              });
            }
          } else this.moveTo(this.context.step1.poses_init[this.index], .2, function() {
            Bubble_1.default.instance.currBalloonId = -1;
          });
        }
      };
      Balloon.prototype.guideClickBallon = function() {
        var _this = this;
        if (this.guiding) return;
        var currIndex = 0;
        var count = 0;
        this.context.hand.onCompleted = function() {
          if (0 == count) {
            count++;
            _this.context.hand.playClick();
          } else {
            _this.guiding = false;
            _this.context.hand.hide();
            _this.onGuideFinish();
          }
        };
        this.guiding = true;
        this.context.hand.setTargetNode(this.full_btn, this.context.node);
        this.context.hand.playClick();
      };
      Balloon.prototype.onGuideFinish = function() {
        var _this = this;
        this.context.clickGuideTimer.start(5, function() {
          _this.guideClickBallon();
        });
      };
      Balloon.prototype.start = function() {};
      Balloon.prototype.playPump = function(callback) {
        var _this = this;
        AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan01");
        this.empty.setAnimation(0, "normal", false);
        this.context.step1.smoke.node.active = true;
        this.context.step1.smoke.front.setAnimation(0, "animation", true);
        this.empty.setCompleteListener(function() {
          console.log("completed >>>>>");
          _this.blink.node.active = true;
          _this.context.step1.smoke.node.active = false;
          _this.playNormal();
          _this.empty.node.active = false;
          callback && callback();
        });
        this.empty.setEndListener(function() {});
      };
      Balloon.prototype.playNormal = function() {
        this.blink.setAnimation(0, "normal", true);
      };
      Balloon.prototype.playBlink = function() {
        this.blink.setAnimation(0, "blink", true);
      };
      Balloon.prototype.moveTo = function(pos, duration, callback) {
        var _this = this;
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        this.flag_block = true;
        var mov = cc.moveTo(duration, pos.x, pos.y);
        var seq = cc.sequence(mov, cc.callFunc(function() {
          _this.flag_block = false;
          callback();
        }));
        this.node.runAction(seq);
      };
      var Balloon_1;
      Balloon.STATE_EMPTY = 0;
      Balloon.STATE_PUMP = 1;
      Balloon.STATE_FLY_CENTER = 2;
      Balloon.STATE_TO_CLICK = 3;
      Balloon.STATE_FLY_FRAME = 4;
      Balloon.STATE_FINISH = 5;
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u9971\u6c14\u7403\u52a8\u753b"
      }) ], Balloon.prototype, "blink", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u7a7a\u6c14\u7403\u52a8\u753b"
      }) ], Balloon.prototype, "empty", void 0);
      __decorate([ property({
        type: cc.Integer,
        displayName: "\u5e8f\u53f7"
      }) ], Balloon.prototype, "index", void 0);
      Balloon = Balloon_1 = __decorate([ ccclass ], Balloon);
      return Balloon;
    }(cc.Component);
    exports.default = Balloon;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./Bubble": "Bubble",
    "./states/TheThreeState": "TheThreeState"
  } ],
  BoardState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df723AXbuNJ2aRPJMB3OH8w", "BoardState");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Balloon_1 = require("../Balloon");
    var GState_1 = require("../GState");
    var BoardState = function(_super) {
      __extends(BoardState, _super);
      function BoardState(context) {
        var _this = _super.call(this, context) || this;
        _this.id = "BoardState";
        _this.taskBoard = null;
        _this.hand = null;
        return _this;
      }
      BoardState.prototype.init = function() {
        this.taskBoard = this.context.taskBoard;
        this.hand = this.context.hand;
      };
      BoardState.prototype.exec = function() {
        var _this = this;
        this.taskBoard.show(0, function(isShowing) {
          isShowing || _this.guidePumpBallon();
        });
        this.context.pumpGuideTimer.start(BoardState.SHOW_TASK_TIME, function() {
          _this.taskBoard.isShowing && _this.taskBoard.hide();
          _this.guidePumpBallon();
        });
      };
      BoardState.prototype.guidePumpBallon = function() {
        var _this = this;
        if (this.context.hand.isShowing) return;
        if (this.context.isAllFinished()) return;
        var index = this.context.getCurrGuideIndex();
        if (-1 == index) return;
        var angle = 45;
        1 == index ? angle = 30 : 2 == index && (angle = 15);
        var balloon = this.context.step1.balloons[index];
        if (balloon.state == Balloon_1.default.STATE_EMPTY) {
          var balloon_area = this.context.emptyFrames[index];
          this.hand.setTargetNode(balloon_area, this.context.node);
          var animIndex_1 = 1;
          var count_1 = 0;
          this.context.hand.onCompleted = function() {
            if (0 == animIndex_1) {
              animIndex_1 = 1;
              _this.context.hand.playSwipeByAngle(angle, "you-zuo", false);
            } else if (1 == animIndex_1) if (0 == count_1) {
              count_1++;
              _this.context.hand.playSwipeByAngle(angle, "you-zuo", false);
            } else {
              _this.context.hand.hide();
              _this.onGuideFinish();
            }
          };
          this.context.hand.playSwipeByAngle(angle, "you-zuo", false);
        } else balloon.guideClickBallon();
      };
      BoardState.prototype.onGuideFinish = function() {
        var _this = this;
        this.context.pumpGuideTimer.start(5, function() {
          _this.guidePumpBallon();
        });
      };
      BoardState.prototype.onFinished = function() {};
      BoardState.SHOW_TASK_TIME = 4;
      return BoardState;
    }(GState_1.default);
    exports.default = BoardState;
    cc._RF.pop();
  }, {
    "../Balloon": "Balloon",
    "../GState": "GState"
  } ],
  BubbleStep1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "386ddIDuNpAmbDyGZy4fEmg", "BubbleStep1");
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
    var Balloon_1 = require("./Balloon");
    var Role_1 = require("./Role");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleStep1 = function(_super) {
      __extends(BubbleStep1, _super);
      function BubbleStep1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shapes = [];
        _this.balloons = [];
        _this.poses_fly = [];
        _this.poses_init = [];
        _this.pump = null;
        _this.pump_mouse = null;
        _this.board = null;
        _this.center = null;
        _this.mouth = null;
        _this.smoke = null;
        return _this;
      }
      BubbleStep1.prototype.start = function() {};
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6c14\u7403\u6846"
      }) ], BubbleStep1.prototype, "shapes", void 0);
      __decorate([ property({
        type: [ Balloon_1.default ],
        displayName: "\u6c14\u7403"
      }) ], BubbleStep1.prototype, "balloons", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6c14\u7403\u653e\u98de\u4f4d\u7f6e"
      }) ], BubbleStep1.prototype, "poses_fly", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6c14\u7403\u521d\u59cb\u4f4d\u7f6e"
      }) ], BubbleStep1.prototype, "poses_init", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6c14\u7b52"
      }) ], BubbleStep1.prototype, "pump", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6c14\u7b52\u5634"
      }) ], BubbleStep1.prototype, "pump_mouse", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9898\u677f"
      }) ], BubbleStep1.prototype, "board", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u4e2d\u5fc3"
      }) ], BubbleStep1.prototype, "center", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6c14\u5634"
      }) ], BubbleStep1.prototype, "mouth", void 0);
      __decorate([ property({
        type: Role_1.default,
        displayName: "\u70df\u6c14"
      }) ], BubbleStep1.prototype, "smoke", void 0);
      BubbleStep1 = __decorate([ ccclass ], BubbleStep1);
      return BubbleStep1;
    }(cc.Component);
    exports.default = BubbleStep1;
    cc._RF.pop();
  }, {
    "./Balloon": "Balloon",
    "./Role": "Role"
  } ],
  BubbleStep2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1af603M821Af7bkKA7fozUH", "BubbleStep2");
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
    var Balloon2_1 = require("./Balloon2");
    var Role_1 = require("./Role");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BubbleStep2 = function(_super) {
      __extends(BubbleStep2, _super);
      function BubbleStep2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.poses_final = [];
        _this.pos_init = null;
        _this.roles = [];
        _this.smoke = null;
        _this.balls = [];
        _this._currIndex = 0;
        return _this;
      }
      Object.defineProperty(BubbleStep2.prototype, "roleList", {
        get: function() {
          return this.roles;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BubbleStep2.prototype, "currRole", {
        get: function() {
          return this.roles[this._currIndex];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BubbleStep2.prototype, "currBall", {
        get: function() {
          return this.balls[this._currIndex];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BubbleStep2.prototype, "currPos", {
        get: function() {
          return this.poses_final[this._currIndex];
        },
        enumerable: false,
        configurable: true
      });
      BubbleStep2.prototype.next = function() {
        this._currIndex++;
      };
      Object.defineProperty(BubbleStep2.prototype, "currIndex", {
        get: function() {
          return this._currIndex;
        },
        enumerable: false,
        configurable: true
      });
      BubbleStep2.prototype.start = function() {};
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6700\u7ec8\u4f4d\u7f6e"
      }) ], BubbleStep2.prototype, "poses_final", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u8d77\u59cb\u4f4d\u7f6e"
      }) ], BubbleStep2.prototype, "pos_init", void 0);
      __decorate([ property({
        type: [ Role_1.default ],
        displayName: "\u89d2\u8272"
      }) ], BubbleStep2.prototype, "roles", void 0);
      __decorate([ property({
        type: Role_1.default,
        displayName: "\u70df\u96fe"
      }) ], BubbleStep2.prototype, "smoke", void 0);
      __decorate([ property({
        type: [ Balloon2_1.default ],
        displayName: "\u4e09\u8272\u957f\u7403"
      }) ], BubbleStep2.prototype, "balls", void 0);
      BubbleStep2 = __decorate([ ccclass ], BubbleStep2);
      return BubbleStep2;
    }(cc.Component);
    exports.default = BubbleStep2;
    cc._RF.pop();
  }, {
    "./Balloon2": "Balloon2",
    "./Role": "Role"
  } ],
  Bubble: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d35f4yGoNlIVJTViMeUfCQ/", "Bubble");
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
    var __assign = this && this.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TaskBoard_1 = require("../../../common/gameTask/scripts/TaskBoard");
    var Hand_1 = require("../../../common/hand/Hand");
    var ChapterGameComponent_1 = require("../../../common/scripts/ChapterGameComponent");
    var events_1 = require("../../../kit/events/events");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var Balloon_1 = require("./Balloon");
    var BubbleStep1_1 = require("./BubbleStep1");
    var BubbleStep2_1 = require("./BubbleStep2");
    var ZoomState_1 = require("./states/ZoomState");
    var Timer_1 = require("./Timer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bubble = function(_super) {
      __extends(Bubble, _super);
      function Bubble() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shopSize = cc.Size.ZERO;
        _this.shopPos = cc.Vec2.ZERO;
        _this.bg = null;
        _this.handPrefab = null;
        _this.hand = null;
        _this.step1 = null;
        _this.step2 = null;
        _this.taskNodes = [];
        _this.taskBoard = null;
        _this.taskBoardPrefab = null;
        _this.tip = null;
        _this.currBalloonId = -1;
        _this.emptyFrames = [];
        _this.MUSIC_PATH = "audio/";
        _this.BUNDLE_NAME = "Bubble";
        _this.VOICE_TEXT_BALLOON = "\u6c14\u7403";
        _this.currState = null;
        _this.pumpGuideTimer = null;
        _this.clickGuideTimer = null;
        _this.recording = false;
        _this.currBgSize = cc.Size.ZERO;
        _this.guideCallback = null;
        _this.guideCallback2 = null;
        return _this;
      }
      Bubble_1 = Bubble;
      Bubble.prototype.getCurrState = function() {
        return this.currState;
      };
      Bubble.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.fixBg();
        Bubble_1.instance = this;
        var taskNode = cc.instantiate(this.taskBoardPrefab);
        this.node.addChild(taskNode);
        this.taskBoard = taskNode.getComponent(TaskBoard_1.default);
        for (var i = 0; i < this.taskNodes.length; i++) {
          var element = this.taskNodes[i];
          element.active = false;
        }
        this.taskBoard.setNodes(this.taskNodes);
        this.taskBoard.node.active = false;
        this.step1.node.active = true;
        this.step2.node.active = false;
        var handNode = cc.instantiate(this.handPrefab);
        handNode.active = false;
        this.node.addChild(handNode);
        this.hand = handNode.getComponent(Hand_1.default);
        this.hand.onCompleted = this.onHandCompleted.bind(this);
        this.pumpGuideTimer = new Timer_1.default();
        this.pumpGuideTimer.name = "pumpGuideTimer";
        this.clickGuideTimer = new Timer_1.default();
        this.clickGuideTimer.name = "clickGuideTimer";
        var ydis = -281.688 * this.bg.height / 750;
        for (var i = 0; i < this.step2.poses_final.length; i++) {
          var element = this.step2.poses_final[i];
          element.y = ydis;
        }
        this.step2.pos_init.y = ydis;
        for (var i = 0; i < this.step2.roleList.length; i++) {
          var element = this.step2.roleList[i];
          element.node.x = this.step2.pos_init.x;
          element.node.y = this.step2.pos_init.y;
          element.playSide();
        }
        this.playVoice("\u80cc\u666f\u97f3");
      };
      Bubble.prototype.onRecordResult = function(result) {
        this.recording = false;
        _super.prototype.onRecordResult.call(this, result);
        var state = this.currState;
        state.onRecordResult(result);
      };
      Bubble.prototype.evaluate = function() {
        if (this.recording) return;
        this.recording = true;
        this.startRecordAudio(this.VOICE_TEXT_BALLOON);
      };
      Bubble.prototype.initData = function() {
        _super.prototype.initData.call(this);
        this.taskData = {
          bundleName: "Bubble",
          imgList: []
        };
      };
      Bubble.prototype.start = function() {
        var zoomState = new ZoomState_1.default(this);
        this.setState(zoomState);
      };
      Bubble.prototype.setState = function(state) {
        if (this.currState && this.currState.id == state.id) return;
        this.currState = state;
        state.init();
        state.exec();
      };
      Bubble.prototype.fixBg = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.bg.width / this.bg.height;
        if (ratio > frameAspectRatio) {
          var width = this.bg.width * screenSize.height / this.bg.height;
          this.bg.width = width;
          this.bg.height = screenSize.height;
        } else {
          var height = this.bg.height * screenSize.width / this.bg.width;
          this.bg.width = screenSize.width;
          this.bg.height = height;
        }
        this.bg.x = 0;
        this.bg.y = 0;
        this.currBgSize.width = this.bg.width;
        this.currBgSize.height = this.bg.height;
      };
      Bubble.prototype.onClick = function() {};
      Bubble.prototype.getCurrGuideIndex = function() {
        var index = -1;
        for (var i = 0; i < this.step1.balloons.length; i++) {
          var element = this.step1.balloons[i];
          if (element.state != Balloon_1.default.STATE_FINISH) {
            index = i;
            break;
          }
        }
        return index;
      };
      Bubble.prototype.isAllFinished = function() {
        var ret = true;
        for (var i = 0; i < this.step1.balloons.length; i++) {
          var element = this.step1.balloons[i];
          if (element.state != Balloon_1.default.STATE_FINISH) {
            ret = false;
            break;
          }
        }
        return ret;
      };
      Bubble.prototype.unScheduleGuideFinish = function() {
        this.pumpGuideTimer.stop();
        this.clickGuideTimer.stop();
      };
      Bubble.prototype.playVoice = function(name) {
        void 0 === name && (name = "\u6c14\u7403");
        name;
      };
      Bubble.prototype.playStars = function() {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
      };
      Bubble.prototype.showTip = function(msg) {
        this.tip.string = msg;
        var fade = cc.fadeIn(.5).easing(cc.easeSineOut());
        var fade2 = cc.fadeOut(.3).easing(cc.easeSineOut());
        var seq = cc.sequence(fade, cc.delayTime(2), fade2);
        this.tip.node.runAction(seq);
      };
      Bubble.prototype.onHandCompleted = function() {};
      Bubble.prototype.showHand = function(target) {
        this.hand.setTargetNode(target, this.node);
        this.hand.node.active = true;
      };
      Bubble.prototype.update = function(dt) {
        this.pumpGuideTimer.update(dt);
        this.clickGuideTimer.update(dt);
      };
      var Bubble_1;
      Bubble.RABBIT_INDEX = 2;
      Bubble.instance = null;
      __decorate([ property({
        displayName: "\u5546\u5e97\u56fe\u7247\u5bbd\u9ad8"
      }) ], Bubble.prototype, "shopSize", void 0);
      __decorate([ property({
        displayName: "\u5546\u5e97(left|bottom)"
      }) ], Bubble.prototype, "shopPos", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u80cc\u666f\u56fe"
      }) ], Bubble.prototype, "bg", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u5f15\u5bfc\u624b"
      }) ], Bubble.prototype, "handPrefab", void 0);
      __decorate([ property({
        type: BubbleStep1_1.default,
        displayName: "step1"
      }) ], Bubble.prototype, "step1", void 0);
      __decorate([ property({
        type: BubbleStep2_1.default,
        displayName: "step2"
      }) ], Bubble.prototype, "step2", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u4efb\u52a1\u6846\u5185\u5bb9"
      }) ], Bubble.prototype, "taskNodes", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u4efb\u52a1\u6846prefab"
      }) ], Bubble.prototype, "taskBoardPrefab", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "tip"
      }) ], Bubble.prototype, "tip", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u762a\u6c14\u7403\u6846"
      }) ], Bubble.prototype, "emptyFrames", void 0);
      Bubble = Bubble_1 = __decorate([ ccclass ], Bubble);
      return Bubble;
    }(ChapterGameComponent_1.default);
    exports.default = Bubble;
    cc._RF.pop();
  }, {
    "../../../common/gameTask/scripts/TaskBoard": void 0,
    "../../../common/hand/Hand": void 0,
    "../../../common/scripts/ChapterGameComponent": void 0,
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./Balloon": "Balloon",
    "./BubbleStep1": "BubbleStep1",
    "./BubbleStep2": "BubbleStep2",
    "./Timer": "Timer",
    "./states/ZoomState": "ZoomState"
  } ],
  GState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c309O18SlMuYcnNypc3Qf+", "GState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GState = function() {
      function GState(context) {
        this.context = null;
        this.id = "";
        this.context = context;
      }
      GState.prototype.init = function() {};
      GState.prototype.exec = function() {};
      GState.prototype.onFinished = function() {};
      return GState;
    }();
    exports.default = GState;
    cc._RF.pop();
  }, {} ],
  Role: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61906DV8+dEopD1eEyyZPMe", "Role");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var ActionHelper_1 = require("./ActionHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Role = function(_super) {
      __extends(Role, _super);
      function Role() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.side = null;
        _this.front = null;
        _this.bg = null;
        _this.balloon = null;
        _this.balloon2 = null;
        return _this;
      }
      Role.prototype.start = function() {};
      Role.prototype.playSide = function() {
        this.side.node.active = true;
        this.front.node.active = false;
        this.side.setAnimation(0, "walk", true);
      };
      Role.prototype.playStandby = function() {
        this.side.node.active = false;
        this.front.node.active = true;
        this.front.setAnimation(0, "standby", true);
      };
      Role.prototype.playHope = function() {
        AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan05");
        this.side.node.active = false;
        this.front.node.active = true;
        this.front.setAnimation(0, "hope", true);
      };
      Role.prototype.playCry = function() {
        this.side.node.active = false;
        this.front.node.active = true;
        this.front.setAnimation(0, "cry", true);
      };
      Role.prototype.playHappy = function() {
        this.side.node.active = false;
        this.front.node.active = true;
        this.front.setAnimation(0, "happy", true);
      };
      Role.prototype.showBalloon = function() {
        this.balloon.active = true;
        ActionHelper_1.default.fadeIn(this.balloon, .2);
      };
      Role.prototype.showBalloon2 = function() {
        this.balloon2.active = true;
      };
      Role.prototype.walkTo = function(node, callback) {
        var _this = this;
        AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan04");
        if (Math.abs(node.x - this.node.x) > 5) {
          node.x > this.node.x && (this.node.scaleX = -1);
          this.playSide();
        }
        ActionHelper_1.default.moveTo(this.node, node, 3, function() {
          _this.node.scaleX = 1;
          _this.playStandby();
          callback();
        });
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u4fa7\u9762\u52a8\u753b"
      }) ], Role.prototype, "side", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u6b63\u9762\u52a8\u753b"
      }) ], Role.prototype, "front", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u53c2\u8003\u70b9"
      }) ], Role.prototype, "bg", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u624b\u6301\u6c14\u7403"
      }) ], Role.prototype, "balloon", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u624b\u6301\u6c14\u7403\u4fa7\u9762"
      }) ], Role.prototype, "balloon2", void 0);
      Role = __decorate([ ccclass ], Role);
      return Role;
    }(cc.Component);
    exports.default = Role;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./ActionHelper": "ActionHelper"
  } ],
  SpineList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e72008ZK+FOSLh4R7x73a+c", "SpineList");
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
    var SpineList = function(_super) {
      __extends(SpineList, _super);
      function SpineList() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SpineList.prototype.start = function() {};
      SpineList = __decorate([ ccclass ], SpineList);
      return SpineList;
    }(cc.Component);
    exports.default = SpineList;
    cc._RF.pop();
  }, {} ],
  TheThreeState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "82791ILv3xLOrMqzWFErVJo", "TheThreeState");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ActionHelper_1 = require("../ActionHelper");
    var Bubble_1 = require("../Bubble");
    var GState_1 = require("../GState");
    var ToFloatEx_1 = require("../ToFloatEx");
    var TheThreeState = function(_super) {
      __extends(TheThreeState, _super);
      function TheThreeState(context) {
        var _this = _super.call(this, context) || this;
        _this.id = "ZoomState";
        _this.tofloat = null;
        _this.shopSize = cc.Size.ZERO;
        _this.shopPos = cc.Vec2.ZERO;
        _this.currBgSize = cc.Size.ZERO;
        _this.destBgSize = cc.Size.ZERO;
        _this.currBgPos = cc.Vec2.ZERO;
        _this.destBgPos = cc.Vec2.ZERO;
        _this.bg = null;
        _this.gameWordData = [ "\u6c14\u7403" ];
        _this.gameWordAudio = [ "balloon" ];
        return _this;
      }
      TheThreeState.prototype.init = function() {
        this.context.step1.node.active = false;
        this.context.step2.node.active = true;
        this.shopPos = this.context.shopPos;
        this.shopSize = this.context.shopSize;
        this.bg = this.context.bg;
        var tofloat = this.bg.getComponent(ToFloatEx_1.default);
        tofloat || (tofloat = this.bg.addComponent(ToFloatEx_1.default));
        this.tofloat = tofloat;
        this.tofloat.onFinished = this.onZoomFinished.bind(this);
        this.destBgSize = cc.size(this.context.currBgSize.width, this.context.currBgSize.height);
        this.currBgSize = cc.size(this.bg.width, this.bg.height);
        this.currBgPos = cc.v2(this.bg.x, this.bg.y);
        this.destBgPos = cc.Vec2.ZERO;
      };
      TheThreeState.prototype.onZoomFinished = function() {
        var _this = this;
        this.context.taskBoard.onClosed = function() {
          _this.onGameBegan();
          _this.context.taskBoard.onClosed = null;
        };
        this.context.taskBoard.show(1, function(isShowing) {
          isShowing && _this.context.scheduleOnce(function() {
            _this.context.taskBoard.hide();
          }, 6);
        });
      };
      TheThreeState.prototype.zoomFromShop = function() {
        var _this = this;
        var PI_2 = Math.PI / 2;
        this.tofloat.setData(1, 0, 1, function(progress) {
          var x = progress * PI_2;
          var ratio = Math.sin(x);
          _this.updateZoom(ratio);
        });
        this.tofloat.run();
      };
      TheThreeState.prototype.updateZoom = function(ratio) {
        this.bg.width = (this.destBgSize.width - this.currBgSize.width) * ratio + this.currBgSize.width;
        this.bg.height = (this.destBgSize.height - this.currBgSize.height) * ratio + this.currBgSize.height;
        this.bg.x = (this.destBgPos.x - this.currBgPos.x) * ratio + this.currBgPos.x;
        this.bg.y = (this.destBgPos.y - this.currBgPos.y) * ratio + this.currBgPos.y;
      };
      TheThreeState.prototype.exec = function() {
        this.zoomFromShop();
      };
      TheThreeState.prototype.onFinished = function() {
        var _this = this;
        this.context.taskBoard.show(1, function() {
          _this.context.taskBoard.playFinished();
          _this.context.scheduleOnce(function() {
            _this.context.taskBoard.hide();
            _this.context.playVoice("\u6b22\u547c");
            _this.context.playStars();
          }, 2);
        });
      };
      TheThreeState.prototype.onRecordResult = function(result) {
        var _this = this;
        result = result.data;
        console.log("onRecordResult >>>>>>>>>>>>> " + JSON.stringify(result));
        if (result.eventName && "ResultCb" == result.eventName) {
          var role_1 = this.context.step2.currRole;
          if (result.success) {
            console.log("onRecordResult >>>>>>>>");
            this.context.playVoice("\u592a\u68d2\u4e86");
            role_1.playHappy();
            this.context.step2.smoke.front.setCompleteListener(function() {
              role_1.playStandby();
              balloon_1.node.active = true;
              ActionHelper_1.default.fadeOut(balloon_1.node, .2);
              role_1.showBalloon();
              _this.context.scheduleOnce(function() {
                _this.context.step2.currIndex != Bubble_1.default.RABBIT_INDEX && role_1.showBalloon2();
                role_1.walkTo(_this.context.step2.currPos, function() {
                  _this.context.step2.next();
                  _this.context.step2.currIndex <= 2 ? _this.context.scheduleOnce(function() {
                    _this.onGameBegan();
                  }, 1) : _this.onFinished();
                });
              }, 2);
            });
            AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan06");
            this.context.step2.smoke.front.setAnimation(0, "bomb", false);
            var balloon_1 = this.context.step2.currBall;
            balloon_1.showShape();
          } else {
            role_1.playCry();
            this.context.scheduleOnce(function() {
              role_1.playHope();
              _this.context.scheduleOnce(function() {
                _this.context.evaluate();
              }, 2);
            }, 3);
          }
        }
      };
      TheThreeState.prototype.onGameBegan = function() {
        var _this = this;
        console.log("start game>>>>>>>>>");
        var role = this.context.step2.currRole;
        role.node.active = true;
        role.playSide();
        var balloon = this.context.step2.currBall;
        var pos = this.context.step2.poses_final[Bubble_1.default.RABBIT_INDEX];
        AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan04");
        ActionHelper_1.default.moveToXY(role.node, pos.position.x, role.node.y, 3, function() {
          role.playHope();
          AudioManager_1.default.playEffect("Bubble", "sound/SE_QQyouleyuan07");
          ActionHelper_1.default.moveTo(balloon.node, _this.context.step2.smoke.node, .5, function() {
            _this.context.evaluate();
          });
        });
      };
      return TheThreeState;
    }(GState_1.default);
    exports.default = TheThreeState;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../ActionHelper": "ActionHelper",
    "../Bubble": "Bubble",
    "../GState": "GState",
    "../ToFloatEx": "ToFloatEx"
  } ],
  Timer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "584e1fJ7HdB24eJLPq7PQPW", "Timer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Timer = function() {
      function Timer() {
        this.callback = null;
        this.currTime = 0;
        this.totalTime = 0;
        this.running = false;
        this.name = "";
      }
      Timer.prototype.update = function(dt) {
        if (this.running) {
          this.currTime += dt;
          if (this.currTime >= this.totalTime) {
            this.running = false;
            console.log("timer: " + this.name + " finished>>>>>");
            if (this.callback) {
              var cb = this.callback;
              cb();
            } else console.log(this.name + ":callback is null");
          }
        }
      };
      Timer.prototype.stop = function() {
        console.log("timer: " + this.name + " stopped>>>>>");
        this.running = false;
        this.totalTime = 0;
        this.currTime = 0;
      };
      Timer.prototype.pause = function() {
        this.running = false;
      };
      Timer.prototype.resume = function() {
        this.running = true;
      };
      Timer.prototype.start = function(duration, callback) {
        console.log("timer: " + this.name + " started");
        this.totalTime = duration;
        this.currTime = 0;
        this.running = true;
        this.callback = callback;
      };
      return Timer;
    }();
    exports.default = Timer;
    cc._RF.pop();
  }, {} ],
  ToFloatEx: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b86dL5rABM+pOfmSteerJa", "ToFloatEx");
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
    var ToFloatEx = function(_super) {
      __extends(ToFloatEx, _super);
      function ToFloatEx() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.toFloatFrom = 0;
        _this.toFloatTo = 0;
        _this.toFloatDuration = 0;
        _this.toFloatFlag = false;
        _this.toFloatCallback = null;
        _this.toFloatCurrTime = 0;
        _this.onFinished = null;
        return _this;
      }
      ToFloatEx.prototype.setData = function(duration, from, to, callback) {
        this.toFloatFlag && (this.toFloatFlag = false);
        this.toFloatFrom = from;
        this.toFloatTo = to;
        this.toFloatDuration = duration;
        this.toFloatCallback = callback;
      };
      ToFloatEx.prototype.run = function() {
        this.toFloatCurrTime = 0;
        this.toFloatFlag = true;
      };
      ToFloatEx.prototype.start = function() {};
      ToFloatEx.prototype.stop = function() {
        this.toFloatFlag = false;
      };
      ToFloatEx.prototype.onDestroy = function() {};
      ToFloatEx.prototype.update = function(dt) {
        if (this.toFloatFlag) {
          this.toFloatCurrTime += dt;
          var ratio = this.toFloatCurrTime / this.toFloatDuration;
          ratio > 1 && (ratio = 1);
          if (this.toFloatCallback) {
            var cb = this.toFloatCallback;
            cb(this.toFloatFrom + (this.toFloatTo - this.toFloatFrom) * ratio);
          }
          if (ratio >= 1) {
            this.toFloatFlag = false;
            if (this.onFinished) {
              var cb = this.onFinished;
              cb();
            }
          }
        }
      };
      ToFloatEx = __decorate([ ccclass ], ToFloatEx);
      return ToFloatEx;
    }(cc.Component);
    exports.default = ToFloatEx;
    cc._RF.pop();
  }, {} ],
  ZoomState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5d4erv3jZO5pkG5c9ihYyX", "ZoomState");
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GState_1 = require("../GState");
    var ToFloatEx_1 = require("../ToFloatEx");
    var BoardState_1 = require("./BoardState");
    var ZoomState = function(_super) {
      __extends(ZoomState, _super);
      function ZoomState(context) {
        var _this = _super.call(this, context) || this;
        _this.id = "ZoomState";
        _this.tofloat = null;
        _this.shopSize = cc.Size.ZERO;
        _this.shopPos = cc.Vec2.ZERO;
        _this.currBgSize = cc.Size.ZERO;
        _this.destBgSize = cc.Size.ZERO;
        _this.currBgPos = cc.Vec2.ZERO;
        _this.destBgPos = cc.Vec2.ZERO;
        _this.bg = null;
        return _this;
      }
      ZoomState.prototype.init = function() {
        var board = this.context.step1.board;
        this.context.step1.node.active = false;
        var wdt = board.getComponent(cc.Widget);
        wdt.top = -board.height;
        this.shopPos = this.context.shopPos;
        this.shopSize = this.context.shopSize;
        this.bg = this.context.bg;
        var tofloat = this.bg.addComponent(ToFloatEx_1.default);
        this.tofloat = tofloat;
        this.tofloat.onFinished = this.onZoomFinished.bind(this);
      };
      ZoomState.prototype.zoomToShop = function() {
        var _this = this;
        var currScreenSize = cc.Canvas.instance.designResolution;
        var sw = currScreenSize.width;
        var sh = currScreenSize.height;
        var bgw = this.bg.width;
        var bgh = this.bg.height;
        var rawShopWidth = this.shopSize.width;
        var rawShopHeight = this.shopSize.height;
        var rawBgWidth = 1334;
        var rawBgHeight = 750;
        var zoomShopW = 1;
        var zoomShopH = 1;
        var zoomBgW = 1;
        var zoomBgH = 1;
        if (rawShopWidth / rawShopHeight > currScreenSize.width / currScreenSize.height) {
          zoomShopW = sw;
          zoomShopH = zoomShopW * rawShopHeight / rawShopWidth;
        } else {
          zoomShopH = sh;
          zoomShopW = zoomShopH * rawShopWidth / rawShopHeight;
        }
        zoomBgW = rawBgWidth * zoomShopW / rawShopWidth;
        zoomBgH = rawBgHeight * zoomShopH / rawShopHeight;
        var rawLeft = this.shopPos.x;
        var rawBottom = this.shopPos.y;
        var shopLeft = rawLeft * zoomShopW / rawShopWidth;
        var shopBottom = rawBottom * zoomShopH / rawShopHeight;
        var dx = zoomBgW / 2 - (shopLeft + zoomShopW / 2);
        var dy = zoomBgH / 2 - (shopBottom + zoomShopH / 2);
        console.log("dx:" + dx + " dy:" + dy);
        console.log("bgw:" + zoomBgW + " bgh:" + zoomBgH);
        console.log("raw left:" + rawLeft + " bottom:" + rawBottom);
        this.currBgSize = cc.size(this.bg.width, this.bg.height);
        this.destBgPos = cc.v2(dx, dy);
        this.destBgSize = cc.size(zoomBgW, zoomBgH);
        var PI_2 = Math.PI / 2;
        this.tofloat.setData(1, 0, 1, function(progress) {
          var x = progress * PI_2;
          var ratio = Math.sin(x);
          _this.updateZoom(ratio);
        });
        this.tofloat.run();
      };
      ZoomState.prototype.updateZoom = function(ratio) {
        this.bg.width = (this.destBgSize.width - this.currBgSize.width) * ratio + this.currBgSize.width;
        this.bg.height = (this.destBgSize.height - this.currBgSize.height) * ratio + this.currBgSize.height;
        this.bg.x = (this.destBgPos.x - this.currBgPos.x) * ratio + this.currBgPos.x;
        this.bg.y = (this.destBgPos.y - this.currBgPos.y) * ratio + this.currBgPos.y;
      };
      ZoomState.prototype.onZoomFinished = function() {
        var _this = this;
        this.context.scheduleOnce(function() {
          var board = _this.context.step1.board;
          _this.context.step1.node.active = true;
          var dis = board.height;
          var mov = cc.moveBy(.4, 0, -dis).easing(cc.easeSineOut());
          var seq = cc.sequence(mov, cc.callFunc(function() {
            _this.onFinished();
          }));
          _this.context.step1.board.runAction(seq);
        }, 1);
      };
      ZoomState.prototype.exec = function() {
        var _this = this;
        this.context.scheduleOnce(function() {
          _this.zoomToShop();
        }, 1);
      };
      ZoomState.prototype.onFinished = function() {
        var state = new BoardState_1.default(this.context);
        this.context.setState(state);
      };
      return ZoomState;
    }(GState_1.default);
    exports.default = ZoomState;
    cc._RF.pop();
  }, {
    "../GState": "GState",
    "../ToFloatEx": "ToFloatEx",
    "./BoardState": "BoardState"
  } ]
}, {}, [ "ActionHelper", "Balloon", "Balloon2", "Bubble", "BubbleStep1", "BubbleStep2", "GState", "Role", "SpineList", "Timer", "ToFloatEx", "BoardState", "TheThreeState", "ZoomState" ]);