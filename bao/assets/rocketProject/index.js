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
  battery: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f291eSftkxBNYFCz1hEO/jn", "battery");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.showSp = null;
        _this.showSpArr = [];
        _this.lgNode = null;
        _this.mainCom = null;
        _this.posiArr = [ -250, 0, 250 ];
        _this.timeArr = [ 3, 2, 1 ];
        _this.mid = 0;
        _this.mtag = false;
        return _this;
      }
      NewClass.prototype.initBattery = function(id, tag, mc) {
        void 0 === tag && (tag = false);
        this.mid = id;
        this.mtag = tag;
        this.mainCom = mc;
      };
      NewClass.prototype.start = function() {
        this.showSp.spriteFrame = this.showSpArr[this.mid];
        this.node.x = 500;
        this.node.y += 2;
        this.moveBattery(this.timeArr[this.mid], this.posiArr[this.mid]);
      };
      NewClass.prototype.moveBattery = function(mtime, posi) {
        var _this = this;
        cc.tween(this.node).to(mtime, {
          x: posi
        }).call(function() {
          _this.showSp.node.active = true;
        }).start();
      };
      NewClass.prototype.setLg = function(tag) {
        void 0 === tag && (tag = false);
        cc.tween(this.node).by(.2, {
          scale: .1
        }).by(.2, {
          scale: -.1
        }).union().repeat(2).start();
      };
      NewClass.prototype.onbutClicked = function() {
        cc.log("battery clicked =====", this.mtag);
        AudioManager_1.default.playEffect("rocketProject", "audio/batteryClick");
        this.flyBatteryToRocket();
        this.mainCom.onItemClicked(this.mid, this.mtag);
      };
      NewClass.prototype.flyBatteryToRocket = function() {
        var _this = this;
        AudioManager_1.default.playEffect("rocketProject", "audio/batteryfly");
        cc.tween(this.node).parallel(cc.tween().to(.7, {
          position: cc.v3(-40, 300, 0)
        }), cc.tween().to(1, {
          scale: 0
        })).call(function() {
          _this.mtag ? AudioManager_1.default.playEffect("rocketProject", "audio/game_right") : AudioManager_1.default.playEffect("rocketProject", "audio/game_error");
          _this.scheduleOnce(function() {
            return _this.mainCom.batteryMoveAniBack(_this.mid, _this.mtag);
          }, 1);
        }).start();
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "showSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "showSpArr", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "lgNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  btnItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d26fd7Ly5VOya19SCHPO2b5", "btnItem");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnAni = null;
        _this.mbtn = null;
        _this.lgNode = null;
        _this.skinArr = [ "lanse", "huangse", "hongse" ];
        _this.posiArr = [ -500, 0, 500 ];
        _this.mainCom = null;
        _this.mid = 0;
        _this.mtag = false;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.btnAni.setCompleteListener(this.btnAniback.bind(this));
      };
      NewClass.prototype.initItem = function(id, tag, mc) {
        this.mid = id;
        this.mtag = tag;
        this.mainCom = mc;
      };
      NewClass.prototype.start = function() {
        this.btnAni.setSkin(this.skinArr[this.mid]);
        this.node.x = this.posiArr[this.mid];
        this.node.y += 50;
      };
      NewClass.prototype.setLg = function(tag) {
        void 0 === tag && (tag = false);
        cc.tween(this.node).by(.2, {
          scale: .1
        }).by(.2, {
          scale: -.1
        }).union().repeat(2).start();
      };
      NewClass.prototype.onbtnBack = function() {
        cc.log("contrbtn clicked =====", this.mtag);
        AudioManager_1.default.playEffect("rocketProject", "audio/batteryClick");
        this.playSpine(this.btnAni, "anniu", false);
        this.mainCom.onContrBtnBack(this.mid, this.mtag);
      };
      NewClass.prototype.btnAniback = function() {
        this.mtag ? AudioManager_1.default.playEffect("rocketProject", "audio/game_right") : AudioManager_1.default.playEffect("rocketProject", "audio/game_error");
        this.mainCom.btnAniBack(this.mid, this.mtag);
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "btnAni", void 0);
      __decorate([ property(cc.Button) ], NewClass.prototype, "mbtn", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "lgNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  dragItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c64cccaT1NOgJ5Zhrc+qrmm", "dragItem");
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
        _this.cardSpArr = [];
        _this.cardSp = null;
        _this.checkBox = [];
        _this.mainCom = null;
        _this.isCanMove = true;
        _this.mid = -1;
        _this.mround = 0;
        _this.checkId = -1;
        _this.xoffset = -350;
        _this.PosiArr = [ cc.v3(_this.xoffset, 226, 0), cc.v3(_this.xoffset, 91, 0), cc.v3(_this.xoffset, -40, 0), cc.v3(_this.xoffset, -174, 0) ];
        _this.ckidArr = [ [ 0, 1, 2, 3 ], [ 1, 0, 2, 3 ], [ 1, 2, 3, 0 ], [ 0, 3, 1, 2 ] ];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
      };
      NewClass.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
      };
      NewClass.prototype.initItem = function(id, cb, mc) {
        this.mid = id;
        this.checkBox = cb;
        this.mainCom = mc;
      };
      NewClass.prototype.backPosiAni = function() {
        cc.tween(this.node).to(.2, {
          position: this.PosiArr[this.mid]
        }).start();
      };
      NewClass.prototype.reSetCheckId = function(round) {
        this.mround = round;
        this.checkId = this.ckidArr[this.mround][this.mid];
      };
      NewClass.prototype.start = function() {
        this.cardSp.spriteFrame = this.cardSpArr[this.mid];
        this.node.position = this.PosiArr[this.mid];
        this.checkId = this.ckidArr[this.mround][this.mid];
      };
      NewClass.prototype.touchStart = function() {
        if (!this.isCanMove) return;
        this.node.zIndex = 9;
        this.node.scale = 1.4;
      };
      NewClass.prototype.touchEnd = function() {
        var _this = this;
        if (!this.isCanMove) return;
        this.setCanTouch(false);
        this.node.zIndex = 0;
        var myv2 = cc.v2(this.node.position.x, this.node.position.y);
        var checkRect = this.checkBox[this.checkId].getBoundingBox();
        if (checkRect.contains(myv2)) {
          this.node.position = this.checkBox[this.checkId].position;
          this.checkBox[this.checkId].color = cc.color(255, 255, 255);
          this.node.scale = 1.8;
          this.mainCom.whenDragRight(this.mid);
        } else {
          this.node.scale = 1;
          for (var i = 0; i < this.checkBox.length; i++) if (i != this.checkId) {
            var checkRect_1 = this.checkBox[i].getBoundingBox();
            checkRect_1.contains(myv2) && this.mainCom.whenDragWrong();
          }
          cc.tween(this.node).to(.2, {
            position: this.PosiArr[this.mid]
          }).start();
          this.scheduleOnce(function() {
            _this.setCanTouch(true);
          }, .5);
        }
      };
      NewClass.prototype.onTouchMove = function(touchEvent) {
        if (!this.isCanMove) return;
        var location = touchEvent.getLocation();
        var bendiLoc = this.node.parent.convertToNodeSpaceAR(location);
        bendiLoc.x > -400 && bendiLoc.x < 400 && (this.node.x = bendiLoc.x);
        bendiLoc.y > -300 && bendiLoc.y < 300 && (this.node.y = bendiLoc.y);
        var myv2 = cc.v2(this.node.position.x, this.node.position.y);
        var checkRect = this.checkBox[this.checkId].getBoundingBox();
        if (checkRect.contains(myv2)) {
          cc.log("into board===");
          this.checkBox[this.checkId].color = cc.color(80, 80, 80);
        } else this.checkBox[this.checkId].color = cc.color(255, 255, 255);
      };
      NewClass.prototype.setCanTouch = function(tag) {
        this.isCanMove = tag;
      };
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "cardSpArr", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "cardSp", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  gameOne: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7fd0erk31AopJSh3xK9Obu", "gameOne");
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
    var rocketProject_1 = require("../script/rocketProject");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rocketAni = null;
        _this.conveyorAni = null;
        _this.batteryItem = null;
        _this.boardNode = null;
        _this.btnItem = null;
        _this.controlNode = null;
        _this.blockNode = null;
        _this.rocketProject = null;
        _this.naopao = null;
        _this.answer_arr = [ 0, 1 ];
        _this.sounds_arr = [ "duck", "cow", "goat", "It_is_a_cow", "It_is_a_goat", "It_is_a_duck" ];
        _this.cur_index = 0;
        _this.sayhandle = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          AudioManager_1.default.playEffect("rocketProject", "audio/conveyor");
          _this.playSpine(_this.conveyorAni, "1", true);
        }, 2);
        this.scheduleOnce(function() {
          return _this.cueBatteryFun();
        }, 1);
      };
      NewClass.prototype.cueBatteryFun = function() {
        var _this = this;
        var itemId = 0;
        this.schedule(function() {
          if (itemId < 3) {
            _this.addBatteryToBoard(itemId);
            itemId++;
          } else {
            _this.conveyorAni.paused = true;
            AudioManager_1.default.playEffect("rocketProject", "audio/yel", function() {
              _this.setBatterLg();
              _this.naopao.getComponent("naopaoAni").showNaopao(0);
            });
            _this.schedule(_this.sayhandle = function() {
              AudioManager_1.default.playEffect("rocketProject", "audio/yel");
              _this.setBatterLg();
            }, 5);
            _this.scheduleOnce(function() {
              return _this.setBlockLay(false);
            }, 1);
          }
        }, 1, 3);
      };
      NewClass.prototype.addBatteryToBoard = function(itemId) {
        var antag = itemId == this.answer_arr[this.cur_index];
        var item = this.getOneBatteryItem(itemId, antag);
        item.opacity = 0;
        this.boardNode.addChild(item);
        cc.tween(item).to(.5, {
          opacity: 255
        }).start();
      };
      NewClass.prototype.setBatterLg = function(tag, id) {
        void 0 === tag && (tag = false);
        void 0 === id && (id = -1);
        var count = this.boardNode.childrenCount;
        for (var i = 0; i < count; i++) if (i != id) {
          var itemcom = this.boardNode.children[i].getComponent("battery");
          itemcom.setLg(tag);
        }
      };
      NewClass.prototype.getOneBatteryItem = function(i, tag) {
        void 0 === tag && (tag = false);
        var item = cc.instantiate(this.batteryItem);
        var itemCom = item.getComponent("battery");
        itemCom.initBattery(i, tag, this);
        return item;
      };
      NewClass.prototype.onItemClicked = function(mid, mtag) {
        this.setBlockLay(true);
        this.unschedule(this.sayhandle);
      };
      NewClass.prototype.setRocketState = function() {
        this.rocketProject.rocketState++;
        var skinName = "buding-3";
        switch (this.rocketProject.rocketState) {
         case 0:
          skinName = "buding-0";
          break;

         case 1:
          skinName = "buding-1";
          break;

         case 2:
          skinName = "buding-2";
          break;

         case 3:
          skinName = "buding-3";
        }
        this.rocketAni.setSkin(skinName);
      };
      NewClass.prototype.batteryMoveAniBack = function(mid, mtag) {
        var _this = this;
        if (mtag) {
          AudioManager_1.default.playEffect("rocketProject", "audio/rocketRight");
          this.playSpine(this.rocketAni, "xuli", true);
          this.scheduleOnce(function() {
            return _this.nextStep();
          }, 2);
        } else {
          this.setRocketState();
          AudioManager_1.default.playEffect("rocketProject", "audio/rocketWrong");
          this.failedEff();
          this.scheduleOnce(function() {
            return _this.nextStep();
          }, 4);
        }
        var ccout = this.boardNode.childrenCount;
        for (var i = 0; i < ccout; i++) this.boardNode.children[i].destroy();
        this.rocketProject.setIndicator(this.cur_index, mtag);
      };
      NewClass.prototype.failedEff = function() {
        var _this = this;
        var dian = this.rocketAni.node.getChildByName("dian");
        var yan = this.rocketAni.node.getChildByName("yan");
        dian.active = true;
        this.scheduleOnce(function() {
          dian.active = false;
          yan.active = true;
          _this.scheduleOnce(function() {
            yan.active = false;
            _this.playSpine(_this.rocketAni, "xuli", true);
          }, .7);
        }, 2);
      };
      NewClass.prototype.nextStep = function() {
        this.cur_index++;
        this.showControlBoardAni();
      };
      NewClass.prototype.showControlBoardAni = function() {
        var _this = this;
        this.controlNode.active = true;
        this.assembleBtnBoard(3);
        AudioManager_1.default.playEffect("rocketProject", "audio/contrboard");
        cc.tween(this.controlNode).by(1, {
          y: 260
        }).call(function() {
          AudioManager_1.default.playEffect("rocketProject", "audio/yel", function() {
            _this.naopao.getComponent("naopaoAni").showNaopao(1);
            _this.setBtnLg();
          });
          _this.schedule(_this.sayhandle = function() {
            AudioManager_1.default.playEffect("rocketProject", "audio/yel");
            _this.setBtnLg();
          }, 5);
          _this.scheduleOnce(function() {
            return _this.setBlockLay(false);
          }, 1);
        }).start();
      };
      NewClass.prototype.assembleBtnBoard = function(ctag) {
        this.controlNode.destroyAllChildren();
        for (var i = 0; i < ctag; i++) {
          var item = cc.instantiate(this.btnItem);
          var itemCom = item.getComponent("btnItem");
          var antag = i == this.answer_arr[this.cur_index];
          itemCom.initItem(i, antag, this);
          this.controlNode.addChild(item);
        }
      };
      NewClass.prototype.setBtnLg = function(tag, id) {
        void 0 === tag && (tag = false);
        void 0 === id && (id = -1);
        var count = this.controlNode.childrenCount;
        for (var i = 0; i < count; i++) if (i != id) {
          var itemcom = this.controlNode.children[i].getComponent("btnItem");
          itemcom.setLg(tag);
        }
      };
      NewClass.prototype.onContrBtnBack = function(mid, mtag) {
        this.setBlockLay(true);
        this.unschedule(this.sayhandle);
      };
      NewClass.prototype.btnAniBack = function(mid, mtag) {
        var _this = this;
        this.rocketProject.setIndicator(this.cur_index, mtag);
        AudioManager_1.default.playEffect("rocketProject", "audio/contrboard");
        cc.tween(this.controlNode).by(1, {
          y: -260
        }).call(function() {
          _this.controlNode.active = false;
          if (mtag) _this.flyTheRocket(); else {
            _this.setRocketState();
            _this.rocketShakeFun();
          }
        }).start();
      };
      NewClass.prototype.rocketShakeFun = function() {
        var _this = this;
        var dian = this.rocketAni.node.getChildByName("dian");
        dian.active = true;
        cc.tween(this.rocketAni.node).by(.1, {
          x: 25
        }, {
          easing: "quartIn"
        }).by(.1, {
          x: -25
        }, {
          easing: "quartOut"
        }).by(.1, {
          x: -25
        }, {
          easing: "quartIn"
        }).by(.1, {
          x: 25
        }, {
          easing: "quartOut"
        }).union().repeat(4).call(function() {
          dian.active = false;
          _this.flyTheRocket();
        }).start();
      };
      NewClass.prototype.flyTheRocket = function() {
        var _this = this;
        this.rocketAni.node.getChildByName("fire").active = true;
        this.playSpine(this.rocketAni, "fei", true);
        AudioManager_1.default.playEffect("rocketProject", "audio/rocketfly");
        cc.tween(this.rocketAni.node).to(4, {
          y: 650
        }, {
          easing: "quartIn"
        }).call(function() {
          _this.rocketProject.gameOneOver();
        }).start();
      };
      NewClass.prototype.setBlockLay = function(tag) {
        this.blockNode.active = tag;
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "rocketAni", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "conveyorAni", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "batteryItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "boardNode", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "btnItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "controlNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "blockNode", void 0);
      __decorate([ property(rocketProject_1.default) ], NewClass.prototype, "rocketProject", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "naopao", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "../script/rocketProject": "rocketProject"
  } ],
  gameTwo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74d46JWYh1PaYc/hIZs5XFz", "gameTwo");
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
    var events_1 = require("../../../kit/events/events");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var rocketProject_1 = require("../script/rocketProject");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lubg1 = null;
        _this.lubg2 = null;
        _this.fallstone = null;
        _this.rocketAni = null;
        _this.fireAni = null;
        _this.checkBox = [];
        _this.boardNode = null;
        _this.dragItem = null;
        _this.heartContrl = null;
        _this.missileNode = null;
        _this.blockNode = null;
        _this.rocketProject = null;
        _this.line2 = null;
        _this.line3 = null;
        _this.line4 = null;
        _this.naopao = null;
        _this.isRunmap = false;
        _this.cur_lubg = null;
        _this.speed = 200;
        _this.innerId = 0;
        _this.gameWordData = [ "\u9ec4\u8272" ];
        _this.wrongNum = 0;
        _this.luheight = 750;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.cur_lubg = this.lubg1;
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      NewClass.prototype.start = function() {
        var skinName = "";
        switch (this.rocketProject.rocketState) {
         case 0:
          skinName = "buding-0";
          break;

         case 1:
          skinName = "buding-1";
          break;

         case 2:
          skinName = "buding-2";
          break;

         case 3:
          skinName = "buding-3";
        }
        this.rocketAni.setSkin(skinName);
        this.isRunmap = true;
        this.startAni();
        this.setbgfix();
      };
      NewClass.prototype.setRocketState = function() {
        this.rocketProject.rocketState++;
        var skinName = "buding-3";
        switch (this.rocketProject.rocketState) {
         case 1:
          skinName = "buding-1";
          break;

         case 2:
          skinName = "buding-2";
          break;

         case 3:
          skinName = "buding-3";
        }
        this.rocketAni.setSkin(skinName);
      };
      NewClass.prototype.setbgfix = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.lubg1.width = width;
          this.lubg1.height = screenSize.height;
          this.lubg2.width = width;
          this.lubg2.height = screenSize.height;
          this.lubg2.y = screenSize.height;
          this.luheight = screenSize.height;
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.lubg1.width = screenSize.width;
          this.lubg1.height = height;
          this.lubg2.width = screenSize.width;
          this.lubg2.height = height;
          this.lubg2.y = height;
          this.luheight = height;
        }
      };
      NewClass.prototype.startAni = function() {
        var _this = this;
        AudioManager_1.default.playEffect("rocketProject", "audio/rocketfly");
        cc.tween(this.rocketAni.node).to(3, {
          y: 50
        }).delay(2).parallel(cc.tween().to(1, {
          position: cc.v3(300, -200, 0)
        }), cc.tween().to(1, {
          scale: .4
        })).call(function() {
          _this.playSpine(_this.fireAni, "hongse", true);
          _this.cueFallStone();
          _this.assembleItem();
        }).start();
      };
      NewClass.prototype.cueFallStone = function() {
        cc.tween(this.fallstone).to(.5, {
          y: 280
        }).start();
      };
      NewClass.prototype.assembleItem = function() {
        var _this = this;
        this.boardNode.active = true;
        this.boardNode.opacity = 0;
        for (var i = 0; i < 4; i++) {
          var item = cc.instantiate(this.dragItem);
          var itemCom = item.getComponent("dragItem");
          itemCom.initItem(i, this.checkBox, this);
          this.boardNode.addChild(item);
        }
        cc.tween(this.boardNode).to(.5, {
          opacity: 255
        }).call(function() {
          _this.naopao.getComponent("naopaoAni").showNaopao(2);
        }).start();
      };
      NewClass.prototype.whenDragRight = function(mid) {
        cc.log("drag right==");
        AudioManager_1.default.playEffect("rocketProject", "audio/game_right");
        this.innerId++;
        if (this.innerId >= 4) {
          cc.log("game 3 winning");
          this.missileAni();
          this.rocketProject.setIndicator(2, true);
          return;
        }
      };
      NewClass.prototype.missileAni = function() {
        var _this = this;
        cc.tween(this.fallstone).to(.5, {
          x: 0
        }).start();
        this.boardNode.active = false;
        this.missileNode.active = true;
        cc.tween(this.missileNode).to(.5, {
          x: 0
        }).to(.5, {
          y: 220
        }).call(function() {
          AudioManager_1.default.playEffect("rocketProject", "audio/blast");
          _this.missileNode.getChildByName("daodan").active = false;
          _this.missileNode.getChildByName("blastAni").active = true;
          _this.scheduleOnce(function() {
            _this.missileNode.getChildByName("blastAni").active = false;
            cc.tween(_this.fallstone).to(.5, {
              y: 600
            }).call(function() {
              _this.gamefour();
            }).start();
          }, 1);
        }).start();
      };
      NewClass.prototype.missileAniWrong = function() {
        var _this = this;
        cc.tween(this.fallstone).to(.5, {
          x: 0
        }).start();
        this.boardNode.active = false;
        this.missileNode.active = true;
        cc.tween(this.missileNode).to(.5, {
          x: 0
        }).to(.5, {
          y: 220
        }).call(function() {
          cc.tween(_this.fallstone).to(.8, {
            position: cc.v3(400, 600, 0)
          }).call(function() {
            _this.gamefour();
            _this.setRocketState();
          }).start();
          _this.missileNode.angle = 45;
          cc.tween(_this.missileNode).to(.8, {
            position: cc.v3(-400, 600, 0)
          }).start();
        }).start();
      };
      NewClass.prototype.whenDragWrong = function() {
        cc.log("drag wrong==");
        AudioManager_1.default.playEffect("rocketProject", "audio/game_error");
        var hc = this.heartContrl.childrenCount;
        if (hc > 0) for (var i = 0; i < hc; i++) if (i == hc - 1) {
          this.heartContrl.children[i].destroy();
          if (1 == hc) {
            cc.log("game 3 failled");
            this.setBlockLay(true);
            this.rocketProject.setIndicator(2, false);
            this.missileAniWrong();
          }
        }
      };
      NewClass.prototype.drawLine = function(tag) {
        switch (tag) {
         case 0:
          break;

         case 1:
          this.line2.moveTo(292, 90);
          this.line2.lineTo(148, 90);
          this.line2.lineTo(148, -24);
          this.line2.stroke();
          break;

         case 2:
          this.line3.moveTo(292, 90);
          this.line3.lineTo(144, 90);
          this.line3.lineTo(144, 0);
          this.line3.stroke();
          break;

         case 3:
          this.line4.moveTo(148, -24);
          this.line4.lineTo(148, -103);
          this.line4.lineTo(-26, -103);
          this.line4.stroke();
        }
      };
      NewClass.prototype.gamefour = function() {
        var _this = this;
        cc.tween(this.rocketAni.node).parallel(cc.tween().to(1, {
          position: cc.v3(0, 50, 0)
        }), cc.tween().to(1, {
          scale: .9
        })).call(function() {
          _this.playSpine(_this.rocketAni, "daiji", true);
          AudioManager_1.default.playEffect("rocketProject", "audio/xuli", function() {
            _this.gameRunRecord();
          });
          _this.rocketAni.node.getChildByName("huiju").active = true;
        }).start();
      };
      NewClass.prototype.gameRunRecord = function() {
        cc.log("gameRunRecord~~~");
        var recordData = {
          evaluatingType: 1,
          evaluatingText: this.gameWordData[0],
          tryTimes: 2,
          evaluationScore: 30,
          recordTime: 3
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "initComponent",
          extra: recordData
        });
        var startRecordData = {
          evaluatingText: this.gameWordData[0],
          bundleName: "rocketProject",
          audioUrl: "audio/yel",
          iconPath: "res/yellow"
        };
        cc.log("gameTwp:", startRecordData);
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "startRecord",
          extra: startRecordData
        });
      };
      NewClass.prototype.recordResult = function(result) {
        console.log("recordResult" + result.data);
        if ("ResultCb" == result.data.eventName) {
          var score = result.data.extra.score;
          result.data.success ? this.sayRight() : this.sayWrong();
        }
      };
      NewClass.prototype.sayRight = function() {
        this.playSpine(this.fireAni, "lanse", true);
        this.rocketAni.node.getChildByName("huiju").active = false;
        this.gameEnd(true);
      };
      NewClass.prototype.sayWrong = function() {
        var _this = this;
        this.setRocketState();
        this.rocketAni.node.getChildByName("huiju").active = false;
        this.rocketAni.node.getChildByName("penyan").active = true;
        cc.tween(this.rocketAni.node).by(.1, {
          x: 25
        }, {
          easing: "quartIn"
        }).by(.1, {
          x: -25
        }, {
          easing: "quartOut"
        }).by(.1, {
          x: -25
        }, {
          easing: "quartIn"
        }).by(.1, {
          x: 25
        }, {
          easing: "quartOut"
        }).union().repeat(4).call(function() {
          _this.rocketAni.node.getChildByName("penyan").active = false;
          _this.gameEnd(false);
        }).start();
      };
      NewClass.prototype.gameEnd = function(tag) {
        var _this = this;
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
        this.rocketProject.setIndicator(3, tag);
        this.playSpine(this.rocketAni, "fei", true);
        AudioManager_1.default.playEffect("rocketProject", "audio/rocketfly");
        cc.tween(this.rocketAni.node).by(4, {
          y: 900
        }).call(function() {
          _this.rocketProject.gameTowOver();
        }).start();
      };
      NewClass.prototype.runlubg = function(dt) {
        var s = dt * this.speed;
        this.lubg1.y -= s;
        this.lubg2.y -= s;
        if (this.cur_lubg.y <= -this.luheight) if (this.cur_lubg == this.lubg2) {
          this.lubg2.y = this.lubg1.y + this.luheight;
          this.cur_lubg = this.lubg1;
        } else {
          this.lubg1.y = this.lubg2.y + this.luheight;
          this.cur_lubg = this.lubg2;
        }
      };
      NewClass.prototype.update = function(dt) {
        this.isRunmap && this.runlubg(dt);
      };
      NewClass.prototype.setBlockLay = function(tag) {
        this.blockNode.active = tag;
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "lubg1", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "lubg2", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "fallstone", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "rocketAni", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "fireAni", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "checkBox", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "boardNode", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "dragItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "heartContrl", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "missileNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "blockNode", void 0);
      __decorate([ property(rocketProject_1.default) ], NewClass.prototype, "rocketProject", void 0);
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "line2", void 0);
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "line3", void 0);
      __decorate([ property(cc.Graphics) ], NewClass.prototype, "line4", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "naopao", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../script/rocketProject": "rocketProject"
  } ],
  naopaoAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bffe4oE1u1KYb09Yaqw8tEb", "naopaoAni");
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
        _this.naopao = null;
        _this.hand = null;
        _this.content = null;
        _this.itemSp = null;
        _this.itemSpArr = [];
        return _this;
      }
      NewClass.prototype.start = function() {
        this.naopao.setCompleteListener(this.naopaoAniback.bind(this));
      };
      NewClass.prototype.showNaopao = function(tid) {
        var _this = this;
        this.node.active = true;
        this.itemSp.spriteFrame = this.itemSpArr[tid];
        this.playSpine(this.naopao, "naopao-1", false);
        this.playSpine(this.hand, "dianji", false);
        if (2 == tid) {
          this.hand.node.x -= 80;
          this.itemSp.node.x -= 80;
          this.node.getChildByName("content").getChildByName("board").active = true;
          cc.tween(this.hand.node).delay(.8).by(.5, {
            x: 163
          }).start();
          cc.tween(this.itemSp.node).delay(.8).by(.5, {
            x: 163
          }).start();
        }
        this.scheduleOnce(function() {
          _this.content.active = false;
          _this.node.active = false;
        }, 2);
      };
      NewClass.prototype.naopaoAniback = function(date) {
        var aniDate = date;
        "naopao-1" === aniDate.animation.name && (this.content.active = true);
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "naopao", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "hand", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "itemSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "itemSpArr", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  rocketProject: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5664dpHEz1AUbczZBpdgYz9", "rocketProject");
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
    var events_1 = require("../../../kit/events/events");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameOne = null;
        _this.gameTwo = null;
        _this.indicatorArr = [];
        _this.indicatorNode = null;
        _this.informOneTag = true;
        _this.rocketState = 0;
        return _this;
      }
      NewClass.prototype.start = function() {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_CREATED);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.onBlock, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.unBlock, this);
        AudioManager_1.default.playMusic("rocketProject", "audio/BGM_QUIZ01HuoJian1");
      };
      NewClass.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.LIFE_CYCLE_BLOCK, this.onBlock, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_UNBLOCK, this.unBlock, this);
      };
      NewClass.prototype.gameOneOver = function() {
        this.gameOne.active = false;
        this.gameTwo.active = true;
      };
      NewClass.prototype.gameTowOver = function() {
        cc.log("\u901a\u77e5\u5bb9\u5668 \u6e38\u620f\u7ed3\u675f");
        if (this.informOneTag) {
          this.informOneTag = false;
          EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
        }
      };
      NewClass.prototype.onBlock = function() {
        console.log("game blocked");
        cc.audioEngine.pauseMusic();
        cc.audioEngine.pauseAllEffects();
      };
      NewClass.prototype.unBlock = function() {
        console.log("game unblocked");
        cc.audioEngine.resumeMusic();
        cc.audioEngine.resumeAllEffects();
      };
      NewClass.prototype.setIndicator = function(mid, tag) {
        if (this.indicatorArr) {
          cc.log("this.indicatorArr ===", this.indicatorArr.length);
          var intor = this.indicatorArr[mid];
          tag ? intor.getChildByName("green").active = true : intor.getChildByName("red").active = true;
          switch (mid) {
           case 0:
            this.indicatorNode.getChildByName("line1").active = true;
            break;

           case 1:
            this.indicatorNode.getChildByName("line2").active = true;
            break;

           case 2:
            this.indicatorNode.getChildByName("line3").active = true;
          }
        }
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "gameOne", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "gameTwo", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "indicatorArr", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "indicatorNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0
  } ]
}, {}, [ "battery", "btnItem", "dragItem", "gameOne", "gameTwo", "naopaoAni", "rocketProject" ]);
//# sourceMappingURL=index.js.map
