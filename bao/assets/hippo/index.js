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
  Hippo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e6cfYhm3dLLYJAJ8bZd60H", "Hippo");
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
    var StateMachine_1 = require("../../../kit/system/fsm/StateMachine");
    var TimerSystem_1 = require("../../../kit/system/timer/TimerSystem");
    var notifierCenter_1 = require("../../common_en/notifierCenter");
    var guideManager_1 = require("./guideManager");
    var focusBoyState_1 = require("./state/focusBoyState");
    var state1_1 = require("./state/state1");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Hippo = function(_super) {
      __extends(Hippo, _super);
      function Hippo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mainCamera = null;
        _this.boy = null;
        _this.pop = null;
        _this.girl = null;
        _this.tap = null;
        _this.hippos = [];
        _this.monkeys = [];
        _this.zebras = [];
        _this.stages = [];
        _this.bgs = [];
        _this.points = [];
        _this.completeNode = null;
        _this.screenScale = 1;
        _this.isLock = false;
        return _this;
      }
      Hippo.prototype.onLoad = function() {
        var screenSize = cc.Canvas.instance.designResolution;
        this.node.scale = screenSize.height / this.node.height;
        this.screenScale = this.node.scale;
        this.completeNode.scale = this.node.height / screenSize.height;
        window.webframe = {};
        window.webframe.Notify = new notifierCenter_1.default();
        console.log("use web_config!!!!!");
        this.mainCamera = cc.Camera.main;
        1 === this.node.scale ? this.mainCamera.node.x = this.bgs[0].x + 334 : this.mainCamera.node.x = this.bgs[0].x * this.node.scale;
        TimerSystem_1.default.instance.init();
        this.completeNode.active = false;
        this.stages[0].active = false;
        this.stages[1].active = false;
        this.stages[2].active = false;
        this.stages[3].active = false;
        this.stages[4].active = false;
        this.girl.node.active = false;
        this.points.forEach(function(element) {
          element.opacity = 0;
        });
        guideManager_1.default.instance.init(this.tap.node);
      };
      Hippo.prototype.start = function() {
        this.stateMachine = new StateMachine_1.default(this);
        this.stateMachine.ChangeState(state1_1.default);
        this.stateMachine.AddGlobalState(focusBoyState_1.default);
      };
      Hippo.prototype.update = function(dt) {
        this.stateMachine && this.stateMachine.Update(dt);
      };
      __decorate([ property(cc.Camera) ], Hippo.prototype, "mainCamera", void 0);
      __decorate([ property(sp.Skeleton) ], Hippo.prototype, "boy", void 0);
      __decorate([ property(sp.Skeleton) ], Hippo.prototype, "pop", void 0);
      __decorate([ property(sp.Skeleton) ], Hippo.prototype, "girl", void 0);
      __decorate([ property(sp.Skeleton) ], Hippo.prototype, "tap", void 0);
      __decorate([ property([ sp.Skeleton ]) ], Hippo.prototype, "hippos", void 0);
      __decorate([ property([ sp.Skeleton ]) ], Hippo.prototype, "monkeys", void 0);
      __decorate([ property([ sp.Skeleton ]) ], Hippo.prototype, "zebras", void 0);
      __decorate([ property([ cc.Node ]) ], Hippo.prototype, "stages", void 0);
      __decorate([ property([ cc.Node ]) ], Hippo.prototype, "bgs", void 0);
      __decorate([ property([ cc.Node ]) ], Hippo.prototype, "points", void 0);
      __decorate([ property(cc.Node) ], Hippo.prototype, "completeNode", void 0);
      Hippo = __decorate([ ccclass ], Hippo);
      return Hippo;
    }(cc.Component);
    exports.default = Hippo;
    cc._RF.pop();
  }, {
    "../../../kit/system/fsm/StateMachine": void 0,
    "../../../kit/system/timer/TimerSystem": void 0,
    "../../common_en/notifierCenter": void 0,
    "./guideManager": "guideManager",
    "./state/focusBoyState": "focusBoyState",
    "./state/state1": "state1"
  } ],
  focusBoyState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17badzvS85PgZnTxgY/ICYA", "focusBoyState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FocusBoyState = function() {
      function FocusBoyState() {
        this.left = -2500;
      }
      FocusBoyState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      FocusBoyState.prototype.enter = function(data) {
        var screenSize = cc.Canvas.instance.designResolution;
        this.sc = screenSize.height / this.entity.node.height;
      };
      FocusBoyState.prototype.execute = function(data) {
        this.entity.mainCamera.node.x = this.entity.boy.node.x * this.sc;
        this.entity.mainCamera.node.x < this.left * this.sc && (this.entity.mainCamera.node.x = this.left * this.sc);
      };
      FocusBoyState.prototype.exit = function(data) {};
      return FocusBoyState;
    }();
    exports.default = FocusBoyState;
    cc._RF.pop();
  }, {} ],
  focusZebraState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7861JgvEdHAqFOaMl/SzKq", "focusZebraState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FocusZebraState = function() {
      function FocusZebraState() {
        this.left = -2500;
        this.offX = 300;
        this.moved = false;
      }
      FocusZebraState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      FocusZebraState.prototype.enter = function(data) {
        var _this = this;
        var screenSize = cc.Canvas.instance.designResolution;
        this.sc = screenSize.height / this.entity.node.height;
        cc.tween(this.entity.mainCamera.node).to(1, {
          x: this.entity.boy.node.x * this.sc + this.offX
        }).call(function() {
          _this.moved = true;
        }).start();
      };
      FocusZebraState.prototype.execute = function(data) {
        if (this.moved) {
          this.entity.mainCamera.node.x = this.entity.boy.node.x * this.sc + this.offX;
          this.entity.mainCamera.node.x < this.left * this.sc && (this.entity.mainCamera.node.x = this.left * this.sc);
        }
      };
      FocusZebraState.prototype.exit = function(data) {};
      return FocusZebraState;
    }();
    exports.default = FocusZebraState;
    cc._RF.pop();
  }, {} ],
  guideManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4935bmMRqBH4aigJeIuLxAx", "guideManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var GuideManager = function() {
      function GuideManager() {}
      Object.defineProperty(GuideManager, "instance", {
        get: function() {
          null == GuideManager._instance && (GuideManager._instance = new GuideManager());
          return GuideManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      GuideManager.prototype.init = function(tap) {
        this.tap = tap;
      };
      GuideManager.prototype.showGuide = function(x, y, delay) {
        var _this = this;
        void 0 === delay && (delay = 4e3);
        if (this.timerKey) {
          clearTimeout(this.timerKey);
          cc.warn("\u6709\u672a\u91ca\u653e\u7684\u8ba1\u65f6\u5668\uff0c\u8bf7\u8c03\u7528hideGuide");
        }
        this.timerKey = setTimeout(function() {
          AudioManager_1.default.playEffect("hippo", "sound/tishiyinxiao");
          _this.tap.active = true;
          _this.tap.x = x;
          _this.tap.y = y;
        }, delay);
      };
      GuideManager.prototype.hideGuide = function() {
        if (this.timerKey) {
          clearTimeout(this.timerKey);
          this.timerKey = null;
        }
        this.tap.active = false;
      };
      return GuideManager;
    }();
    exports.default = GuideManager;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  guideState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9dee2CRXoJBqIT97DOwDprS", "guideState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GuideState = function() {
      function GuideState() {}
      GuideState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      GuideState.prototype.enter = function(data) {};
      GuideState.prototype.execute = function(data) {};
      GuideState.prototype.exit = function(data) {
        clearInterval(this.timerKey);
      };
      return GuideState;
    }();
    exports.default = GuideState;
    cc._RF.pop();
  }, {} ],
  state1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6d7dM7MzFILY3hjtA5qjH5", "state1");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var TimerSystem_1 = require("../../../../kit/system/timer/TimerSystem");
    var state2_1 = require("./state2");
    var State1 = function() {
      function State1() {}
      State1.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      State1.prototype.enter = function(data) {
        var _this = this;
        this.entity.stages[0].active = true;
        this.entity.stages[1].active = true;
        this.entity.stages[2].active = true;
        this.entity.pop.node.active = false;
        this.entity.tap.node.active = false;
        TimerSystem_1.default.instance.doOnce(1e3, function() {
          _this.entity.boy.setAnimation(0, "naotou", false);
        });
        TimerSystem_1.default.instance.doOnce(2e3, function() {
          _this.entity.pop.node.active = true;
        });
        TimerSystem_1.default.instance.doOnce(2300, function() {
          AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_02");
        });
        TimerSystem_1.default.instance.doOnce(4e3, function() {
          _this.entity.tap.node.active = true;
          _this.entity.tap.node.setPosition(_this.entity.hippos[0].node.position);
          _this.entity.boy.setAnimation(0, "idle", false);
          AudioManager_1.default.playEffect("hippo", "sound/clickAndListen");
        });
        TimerSystem_1.default.instance.doOnce(5500, function() {
          _this.entity.pop.node.active = false;
          _this.entity.tap.node.active = false;
          _this.entity.stateMachine.ChangeState(state2_1.default);
        });
      };
      State1.prototype.execute = function(data) {};
      State1.prototype.exit = function(data) {};
      return State1;
    }();
    exports.default = State1;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../../../kit/system/timer/TimerSystem": void 0,
    "./state2": "state2"
  } ],
  state2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37f03FK0WNOB4ioQTpTJ6dG", "state2");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var guideManager_1 = require("../guideManager");
    var utils_1 = require("../utils");
    var focusBoyState_1 = require("./focusBoyState");
    var state3_1 = require("./state3");
    var State2 = function() {
      function State2() {
        this.targetY = -165;
      }
      State2.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      State2.prototype.enter = function(data) {
        var _this = this;
        this.entity.stages[0].active = true;
        this.entity.stages[1].active = true;
        this.entity.stages[2].active = true;
        this.tapIndex = 1;
        guideManager_1.default.instance.showGuide(this.entity.hippos[0].node.parent.position.x + 50, this.entity.hippos[0].node.parent.position.y - 70, 0);
        this.entity.stages[1].children.forEach(function(hippo) {
          hippo.on("click", _this.callback, _this);
        });
        this.entity.stateMachine.AddGlobalState(focusBoyState_1.default);
      };
      State2.prototype.execute = function(data) {};
      State2.prototype.exit = function(data) {
        this.entity.stages[0].active = false;
      };
      State2.prototype.callback = function(event) {
        var _this = this;
        AudioManager_1.default.stopEffect();
        AudioManager_1.default.playEffect("hippo", "sound/hippo");
        var target = event.target;
        var index = parseInt(target.name.substr(7));
        if (!this.entity.isLock) if (this.tapIndex === index) {
          this.entity.isLock = true;
          var targetHippos_1 = this.entity.hippos[this.tapIndex - 1];
          var nextHippos = this.entity.hippos[this.tapIndex];
          switch (index) {
           case 1:
            this.entity.tap.node.active = false;
            this.move2Middle(targetHippos_1, function() {
              targetHippos_1.setAnimation(0, "idle2", false);
              var p = target.position;
              p.y = target.position.y + 60;
              p.x = target.position.x + 30;
              utils_1.jump2Target(_this.entity.boy, p, function() {
                AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_01");
                _this.entity.isLock = false;
              });
            });
            guideManager_1.default.instance.showGuide(nextHippos.node.parent.x + 60, nextHippos.node.parent.y - 30);
            break;

           case 2:
           case 3:
            guideManager_1.default.instance.hideGuide();
            this.move2Middle(targetHippos_1, function() {
              targetHippos_1.setAnimation(0, "idle2", false);
              var p = target.position;
              p.y = target.position.y + 60;
              p.x = target.position.x + 30;
              utils_1.jump2Target(_this.entity.boy, p, function() {
                AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_01");
                _this.entity.isLock = false;
              });
            });
            guideManager_1.default.instance.showGuide(nextHippos.node.parent.x + 60, nextHippos.node.parent.y - 30);
            break;

           case 4:
            guideManager_1.default.instance.hideGuide();
            targetHippos_1.setAnimation(0, "idle2", false);
            var p = target.position;
            p.y = target.position.y + 60;
            p.x = target.position.x + 30;
            utils_1.jump2Target(this.entity.boy, p, function() {
              AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_01");
              guideManager_1.default.instance.hideGuide();
              _this.entity.isLock = false;
              guideManager_1.default.instance.showGuide(_this.entity.monkeys[0].node.parent.position.x + 50, _this.entity.monkeys[0].node.parent.position.y - 100, 0);
            });
            this.entity.stateMachine.ChangeState(state3_1.default);
          }
          this.tapIndex += 1;
        } else this.entity.hippos[index - 1].setAnimation(0, "houjiao", false);
      };
      State2.prototype.move2Middle = function(target, callback) {
        cc.tween(target.node.parent).to(1, {
          y: this.targetY
        }).call(function() {
          callback && callback();
        }).start();
      };
      return State2;
    }();
    exports.default = State2;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../guideManager": "guideManager",
    "../utils": "utils",
    "./focusBoyState": "focusBoyState",
    "./state3": "state3"
  } ],
  state3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b68euZJ0xI1oj2tjiiz0MH", "state3");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var guideManager_1 = require("../guideManager");
    var state4_1 = require("./state4");
    var State3 = function() {
      function State3() {}
      State3.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      State3.prototype.enter = function(data) {
        var _this = this;
        this.entity.stages[0].active = false;
        this.entity.stages[1].active = true;
        this.tapIndex = 1;
        this.entity.stages[2].children.forEach(function(monkey) {
          monkey.on("click", _this.callback, _this);
        });
      };
      State3.prototype.execute = function(data) {};
      State3.prototype.exit = function(data) {
        this.entity.stages[1].active = false;
      };
      State3.prototype.callback = function(event) {
        var _this = this;
        AudioManager_1.default.stopEffect();
        AudioManager_1.default.playEffect("hippo", "sound/monkey");
        var target = event.target;
        var index = parseInt(target.name.substr(7));
        cc.log("index" + index);
        if (index === this.tapIndex - 1) return;
        if (!this.entity.isLock) if (this.tapIndex === index) {
          this.entity.isLock = true;
          this.tapIndex += 1;
          switch (index) {
           case 1:
            setTimeout(function() {
              _this.entity.boy.node.opacity = 0;
            }, 900);
            this.entity.boy.node.opacity = 0;
            this.entity.monkeys[0].setAnimation(0, "shenshou", false);
            this.entity.monkeys[0].setCompleteListener(function() {
              _this.entity.isLock = false;
              _this.entity.monkeys[0].setCompleteListener(null);
              _this.entity.monkeys[0].setAnimation(0, "idle3", true);
              _this.toNextPosition(_this.entity.monkeys[0].node.parent.position);
            });
            this.entity.tap.node.active = false;
            guideManager_1.default.instance.showGuide(this.entity.monkeys[1].node.parent.x + 50, this.entity.monkeys[1].node.parent.y - 100);
            break;

           case 4:
            guideManager_1.default.instance.hideGuide();
            this.entity.stages[3].active = true;
            this.entity.monkeys[2].setAnimation(0, "dang2", false);
            this.toNextPosition(this.entity.monkeys[3].node.parent.position);
            this.entity.monkeys[2].setCompleteListener(function() {
              _this.entity.monkeys[2].setCompleteListener(null);
              _this.entity.monkeys[2].setCompleteListener(null);
              _this.entity.monkeys[2].setAnimation(0, "idle1", true);
              _this.entity.boy.node.opacity = 0;
              _this.entity.monkeys[3].setAnimation(0, "shenshou", false);
              _this.entity.monkeys[3].setCompleteListener(function() {
                _this.entity.monkeys[3].setCompleteListener(null);
                _this.entity.monkeys[3].setAnimation(0, "dang2", false);
                _this.toNextPosition(_this.entity.points[1].position, function() {
                  _this.onComplete();
                });
                _this.entity.monkeys[3].setCompleteListener(function() {
                  _this.entity.isLock = false;
                  _this.entity.boy.node.opacity = 255;
                  _this.entity.boy.setAnimation(0, "idle", true);
                  _this.entity.monkeys[3].setAnimation(0, "idle1", true);
                  _this.entity.monkeys[3].setCompleteListener(null);
                });
              });
            });
            break;

           default:
            AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_04");
            guideManager_1.default.instance.hideGuide();
            this.step(this.entity.monkeys[index - 2], this.entity.monkeys[index - 1], function() {
              _this.entity.isLock = false;
            });
            guideManager_1.default.instance.showGuide(this.entity.monkeys[index].node.parent.x + 50, this.entity.monkeys[index].node.parent.y - 100);
          }
        } else {
          this.entity.monkeys[index - 1].setAnimation(0, "naotou", false);
          this.entity.monkeys[index - 1].setCompleteListener(function() {
            _this.entity.monkeys[index - 1].setEndListener(null);
            _this.entity.monkeys[index - 1].setAnimation(0, "idle1", false);
          });
        }
      };
      State3.prototype.onComplete = function() {
        this.entity.stateMachine.ChangeState(state4_1.default);
      };
      State3.prototype.step = function(m1, m2, callback) {
        var _this = this;
        m1.setAnimation(0, "dang2", false);
        this.toNextPosition(m2.node.parent.position);
        m1.setCompleteListener(function() {
          m1.setCompleteListener(null);
          m1.setEndListener(null);
          m1.setAnimation(0, "idle1", true);
          _this.entity.boy.node.opacity = 0;
          m2.setAnimation(0, "shenshou", false);
          m2.setCompleteListener(function() {
            m2.setCompleteListener(null);
            m2.setAnimation(0, "idle3", true);
            callback && callback();
          });
        });
      };
      State3.prototype.toNextPosition = function(target, callback) {
        var _this = this;
        cc.tween(this.entity.boy.node).to(.5, {
          x: target.x + 50,
          y: target.y - 50
        }).call(function() {
          callback && callback.apply(_this);
        }).start();
      };
      return State3;
    }();
    exports.default = State3;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../guideManager": "guideManager",
    "./state4": "state4"
  } ],
  state4: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a537j/WOlOCr72zWm7bAaF", "state4");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var TimerSystem_1 = require("../../../../kit/system/timer/TimerSystem");
    var guideManager_1 = require("../guideManager");
    var utils_1 = require("../utils");
    var focusBoyState_1 = require("./focusBoyState");
    var focusZebraState_1 = require("./focusZebraState");
    var state5_1 = require("./state5");
    var State4 = function() {
      function State4() {
        this.p1 = 1700;
        this.p0 = 400;
        this.p2 = 2300;
        this.p3 = 2900;
        this.bgWidth = 1e3;
        this.speed1 = 1e3;
        this.speed0 = 600;
        this.sceneSpeed = this.speed0;
        this.startP = this.p1 - 300;
        this.outTime = 2.5;
      }
      State4.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      State4.prototype.enter = function(data) {
        var _this = this;
        this.entity.stages[1].active = false;
        this.entity.stages[3].active = true;
        this.tapIndex = 1;
        this.entity.stages[3].children.forEach(function(monkey) {
          monkey.on("click", _this.callback, _this);
        });
        this.bg1 = this.entity.bgs[4];
        this.bg2 = this.entity.bgs[5];
        this.bg3 = this.entity.bgs[6];
        this.bg4 = this.entity.bgs[7];
        this.showTap(this.entity.zebras[0].node.parent);
        this.entity.zebras[1].node.parent.x = this.p3;
        this.entity.stateMachine.RemoveGlobalState(focusBoyState_1.default);
        this.entity.stateMachine.AddGlobalState(focusZebraState_1.default);
      };
      State4.prototype.execute = function(dt) {
        if (this.isRun) {
          var dis = this.sceneSpeed * dt;
          this.bg1.x -= dis;
          this.bg2.x -= dis;
          this.bg3.x -= dis;
          this.bg4.x -= dis;
          if (this.bg1.x < -this.bgWidth + this.startP) {
            this.bg1.x += this.bgWidth;
            this.bg2.x += this.bgWidth;
            this.bg3.x += this.bgWidth;
            this.bg4.x += this.bgWidth;
          }
        }
      };
      State4.prototype.exit = function(data) {
        var _this = this;
        this.entity.stages[2].active = false;
        this.entity.stages[3].children.forEach(function(monkey) {
          monkey.off("click", _this.callback, _this);
        });
        if (this.bg1.x < 0) {
          this.bg1.x += this.bgWidth;
          this.bg2.x += this.bgWidth;
          this.bg3.x += this.bgWidth;
          this.bg4.x += this.bgWidth;
        }
        cc.log("this.bg1.x", this.bg1.x);
      };
      State4.prototype.callback = function(event) {
        var _this = this;
        AudioManager_1.default.stopEffect();
        var target = event.target;
        var index = parseInt(target.name.substr(7));
        cc.log("this.tapIndex:" + this.tapIndex);
        AudioManager_1.default.playEffect("hippo", "sound/zebra");
        if (!this.entity.isLock) {
          if (event.target.getChildByName("banma").getComponent("sp.Skeleton") == this.currentZebra) return;
          if (this.tapIndex <= 4) {
            this.entity.isLock = true;
            switch (this.tapIndex) {
             case 1:
              guideManager_1.default.instance.hideGuide();
              this.currentZebra = this.entity.zebras[0];
              this.nextZebra = this.entity.zebras[1];
              utils_1.jump2Target(this.entity.boy, this.currentZebra.node.parent.position, function() {
                AudioManager_1.default.playLoopEffect("hippo", "sound/SE_conglintanxian_05");
                _this.entity.boy.node.opacity = 0;
                cc.tween(_this.entity.boy.node).to(2.5, {
                  x: _this.p1
                }).start();
                _this.entity.zebras[0].setAnimation(0, "run1", true);
                cc.tween(_this.currentZebra.node.parent).to(_this.outTime, {
                  x: _this.p1
                }).call(function() {
                  _this.showNext(function() {
                    _this.showTap(_this.entity.zebras[1].node.parent);
                  });
                  _this.entity.stateMachine.RemoveGlobalState(focusZebraState_1.default);
                  _this.isRun = true;
                }).start();
              });
              break;

             case 2:
              this.entity.tap.node.active = false;
              this.entity.boy.node.opacity = 255;
              this.currentZebra.setAnimation(0, "run2", true);
              utils_1.jump2Target(this.entity.boy, this.nextZebra.node.parent.position, function() {
                _this.entity.boy.node.opacity = 0;
                _this.nextZebra.setAnimation(0, "run1", true);
                _this.nextZebra.setCompleteListener(function() {
                  _this.nextZebra.setCompleteListener(null);
                  cc.tween(_this).to(.3, {
                    sceneSpeed: _this.speed1
                  }).start();
                  _this.changeNext();
                  cc.tween(_this.currentZebra.node.parent).to(3, {
                    x: _this.p1
                  }).start();
                  cc.tween(_this.entity.boy.node).to(3, {
                    x: _this.p1
                  }).start();
                  _this.nextZebra.setAnimation(0, "run2", true);
                  cc.tween(_this.nextZebra.node.parent).to(_this.outTime, {
                    x: _this.p0
                  }).call(function() {
                    _this.showNext(function() {
                      guideManager_1.default.instance.showGuide(_this.nextZebra.node.parent.x + 50, _this.nextZebra.node.parent.y - 100);
                    });
                  }).start();
                });
              });
              break;

             case 3:
              guideManager_1.default.instance.hideGuide();
              this.entity.boy.node.opacity = 255;
              this.currentZebra.setAnimation(0, "run2", true);
              utils_1.jump2Target(this.entity.boy, this.nextZebra.node.parent.position, function() {
                _this.entity.boy.node.opacity = 0;
                _this.nextZebra.setAnimation(0, "run1", true);
                _this.nextZebra.setCompleteListener(function() {
                  _this.nextZebra.setCompleteListener(null);
                  cc.tween(_this).to(.3, {
                    sceneSpeed: _this.speed1
                  }).start();
                  _this.changeNext();
                  cc.tween(_this.currentZebra.node.parent).to(3, {
                    x: _this.p1
                  }).start();
                  cc.tween(_this.entity.boy.node).to(3, {
                    x: _this.p1
                  }).start();
                  _this.nextZebra.setAnimation(0, "run2", true);
                  cc.tween(_this.nextZebra.node.parent).to(_this.outTime, {
                    x: _this.p0
                  }).call(function() {
                    _this.showNext(function() {
                      guideManager_1.default.instance.showGuide(_this.nextZebra.node.parent.x + 50, _this.nextZebra.node.parent.y - 100);
                    });
                  }).start();
                });
              });
              break;

             case 4:
              guideManager_1.default.instance.hideGuide();
              this.entity.boy.node.opacity = 255;
              this.currentZebra.setAnimation(0, "run2", true);
              utils_1.jump2Target(this.entity.boy, this.nextZebra.node.parent.position, function() {
                _this.entity.boy.node.opacity = 0;
                _this.nextZebra.setAnimation(0, "run1", true);
                _this.nextZebra.setCompleteListener(function() {
                  _this.nextZebra.setCompleteListener(null);
                  cc.tween(_this).to(.3, {
                    sceneSpeed: _this.speed1
                  }).start();
                  _this.changeNext();
                  cc.tween(_this.currentZebra.node.parent).to(3, {
                    x: _this.p1
                  }).start();
                  _this.nextZebra.setAnimation(0, "run2", true);
                  cc.tween(_this.nextZebra.node.parent).to(_this.outTime, {
                    x: _this.p0
                  }).call(function() {
                    _this.goNextState();
                  }).start();
                });
              });
            }
          }
        }
      };
      State4.prototype.changeNext = function() {
        var temp = this.currentZebra;
        this.currentZebra = this.nextZebra;
        this.nextZebra = temp;
      };
      State4.prototype.showNext = function(callback) {
        var _this = this;
        cc.log("showNext");
        TimerSystem_1.default.instance.doOnce(50, function() {
          _this.nextZebra.node.parent.x = _this.p3;
          _this.nextZebra.setAnimation(0, "run2", true);
          cc.tween(_this.nextZebra.node.parent).to(2, {
            x: _this.p2
          }).call(function() {
            _this.entity.isLock = false;
            callback && callback.apply(_this);
          }).start();
        }, this);
        cc.tween(this).to(2, {
          sceneSpeed: this.speed0
        }).start();
        this.tapIndex += 1;
      };
      State4.prototype.goNextState = function() {
        this.isRun = false;
        this.entity.stateMachine.ChangeState(state5_1.default);
      };
      State4.prototype.showTap = function(targetNode) {
        guideManager_1.default.instance.showGuide(targetNode.position.x + 50, targetNode.position.y - 130, 0);
      };
      State4.prototype.zebraOut = function() {
        var _this = this;
        this.nextZebra.setAnimation(0, "run2", true);
        cc.tween(this.nextZebra.node.parent).to(2, {
          x: this.p0
        }).call(function() {
          _this.goNextState();
        }).start();
      };
      return State4;
    }();
    exports.default = State4;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../../../kit/system/timer/TimerSystem": void 0,
    "../guideManager": "guideManager",
    "../utils": "utils",
    "./focusBoyState": "focusBoyState",
    "./focusZebraState": "focusZebraState",
    "./state5": "state5"
  } ],
  state5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a63edKMAv1EoJpbTWiWrNZ7", "state5");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var TimerSystem_1 = require("../../../../kit/system/timer/TimerSystem");
    var State5 = function() {
      function State5() {
        this.isComplete = false;
        this.endPoint = 0;
      }
      State5.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      State5.prototype.enter = function(data) {
        this.entity.stages[4].active = true;
        this.entity.stages[2].active = false;
        this.entity.girl.node.active = true;
        this.entity.girl.setAnimation(0, "idle", true);
        this.endPoint = this.entity.points[2].x;
        cc.tween(this.entity.girl.node).to(1, {
          x: this.endPoint + 150
        }).start();
        cc.tween(this.entity.zebras[1].node.parent).to(2.5, {
          x: 4100
        }).start();
        cc.tween(this.entity.mainCamera.node).to(1.5, {
          x: this.endPoint
        }).start();
      };
      State5.prototype.execute = function(data) {
        var _this = this;
        if (!this.isComplete && this.entity.zebras[1].node.parent.x >= this.endPoint) {
          this.isComplete = true;
          this.entity.boy.node.opacity = 255;
          this.entity.boy.node.setPosition(this.entity.points[2].position);
          this.entity.zebras[1].setAnimation(0, "run2", true);
          this.entity.boy.setAnimation(0, "jump1", false);
          cc.tween(this.entity.boy.node).to(.1, {
            y: -90
          }).to(.2, {
            y: -250
          }).call(function() {
            _this.entity.boy.setAnimation(0, "happy", true);
            _this.entity.girl.setAnimation(0, "happy", true);
            TimerSystem_1.default.instance.doOnce(3e3, _this.onComplete, _this);
            TimerSystem_1.default.instance.doOnce(500, function() {
              AudioManager_1.default.playEffect("hippo", "sound/SE_conglintanxian_06");
            });
            TimerSystem_1.default.instance.doOnce(1e3, function() {
              AudioManager_1.default.stopLoopEffect("sound/SE_conglintanxian_05");
            });
          }).start();
        }
      };
      State5.prototype.exit = function(data) {};
      State5.prototype.onComplete = function() {
        this.entity.completeNode.x = this.entity.boy.node.x;
        this.entity.completeNode.active = true;
        AudioManager_1.default.playEffect("hippo", "sound/coin_large");
        TimerSystem_1.default.instance.doOnce(3500, function() {
          window.webframe.Notify.trigger("entryMenu", true);
        });
      };
      return State5;
    }();
    exports.default = State5;
    cc._RF.pop();
  }, {
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../../../kit/system/timer/TimerSystem": void 0
  } ],
  utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a47c1T+IAND+54MZVjcZvSU", "utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.jump2Target = void 0;
    function jump2Target(boy, position, callback) {
      boy.setAnimation(0, "jump1", false);
      var middleX = boy.node.x - (boy.node.x - position.x) / 2;
      var middleY = position.y > boy.node.y ? position.y + 40 : boy.node.y - 40;
      cc.tween(boy.node).delay(.5).to(.2, {
        y: middleY,
        x: middleX
      }).to(.2, {
        x: position.x,
        y: position.y
      }).call(callback).start();
    }
    exports.jump2Target = jump2Target;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Hippo", "guideManager", "focusBoyState", "focusZebraState", "guideState", "state1", "state2", "state3", "state4", "state5", "utils" ]);
//# sourceMappingURL=index.js.map
