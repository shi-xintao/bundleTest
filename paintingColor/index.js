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
  kongItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10391NK2q5PGJrYmT7ajfh5", "kongItem");
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
        _this.maskNode = null;
        _this.maskSpArr = [];
        _this.itemSp = null;
        _this.itemSpArr = [];
        _this.colorAniNode = null;
        _this.mainCom = null;
        _this.mid = 0;
        _this.mround = 0;
        _this.posiArr = [ cc.v3(-.88, 18.55, 0), cc.v3(.7, -12.3, 0), cc.v3(-16, -.8, 0), cc.v3(35.4, 16, 0) ];
        _this.posiMaskArr = [ cc.v3(2.2, -18.5, 0), cc.v3(.5, 12.5, 0), cc.v3(18, 1.2, 0), cc.v3(-35, -16, 0) ];
        _this.colorAniArr = [ cc.v3(-250, 15, 0), cc.v3(-262, 36.5, 0), cc.v3(-262, 80, 0), cc.v3(-230, 30, 0) ];
        return _this;
      }
      NewClass.prototype.start = function() {
        this.colorAniNode.setCompleteListener(this.colorAniNodeback.bind(this));
        this.node.position = this.posiArr[this.mround];
        this.itemSp.spriteFrame = this.itemSpArr[this.mround];
        this.maskNode.node.position = this.posiMaskArr[this.mround];
        this.colorAniNode.node.position = this.colorAniArr[this.mround];
        this.node.x = 800;
        this.startAni();
      };
      NewClass.prototype.initItem = function(id, round, mc) {
        this.mid = id;
        this.mround = round;
        this.mainCom = mc;
      };
      NewClass.prototype.startAni = function() {
        var _this = this;
        cc.tween(this.node).to(2, {
          position: this.posiArr[this.mround]
        }).call(function() {
          _this.mainCom.setBlock(false);
        }).start();
      };
      NewClass.prototype.splashColor = function() {
        this.colorAniNode.node.active = true;
        this.playAin(this.mround);
      };
      NewClass.prototype.playAin = function(mmid, loop) {
        void 0 === loop && (loop = false);
        var ainName = "";
        switch (mmid) {
         case 0:
          ainName = "lan";
          break;

         case 1:
          ainName = "hong";
          break;

         case 2:
          ainName = "huang";
          break;

         case 3:
          ainName = "lan1";
        }
        this.playSpine(this.colorAniNode, ainName, loop);
      };
      NewClass.prototype.colorAniNodeback = function(date) {
        this.mainCom.showPaintSp();
        this.turnOnMask();
      };
      NewClass.prototype.turnOnMask = function() {
        var _this = this;
        this.maskNode.enabled = true;
        this.maskNode.spriteFrame = this.maskSpArr[this.mround];
        this.maskNode.node.width = this.maskSpArr[this.mround].getRect().width;
        this.maskNode.node.height = this.maskSpArr[this.mround].getRect().height;
        this.scheduleOnce(function() {
          return _this.moveOut();
        }, 2);
      };
      NewClass.prototype.moveOut = function() {
        var _this = this;
        cc.tween(this.node).by(2, {
          x: 750
        }).call(function() {
          _this.mainCom.roundEnd();
          _this.node.destroy();
        }).start();
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      __decorate([ property(cc.Mask) ], NewClass.prototype, "maskNode", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "maskSpArr", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "itemSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "itemSpArr", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "colorAniNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  paintingColor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a827GZvNZMt59B3nIN0w2R", "paintingColor");
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
        _this.paintSp = null;
        _this.paintSpArr = [];
        _this.boardSp = null;
        _this.boardSpArr = [];
        _this.kongItem = null;
        _this.itemBoard = null;
        _this.lightNode = null;
        _this.boxNode = null;
        _this.showNode = null;
        _this.bgSp = null;
        _this.bgSpArr = [];
        _this.fachen = null;
        _this.dolphineAin = null;
        _this.heiyanAin = null;
        _this.blockNode = null;
        _this.overTag = true;
        _this.cur_index = 0;
        _this.sounds_arr = [ "blue", "red", "yel", "blue" ];
        _this.gameWordData = [ "\u84dd\u8272" ];
        _this.taskData = null;
        _this.gameTaskCom = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      NewClass.prototype.start = function() {
        var _this = this;
        this.dolphineAin.setCompleteListener(this.dolphineAinback.bind(this));
        this.fachen.setCompleteListener(this.fachenback.bind(this));
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_CREATED);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.onBlock, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.unBlock, this);
        this.taskData = {
          bundleName: "paintingColor",
          imgList: [ "res/task1", "res/task2" ]
        };
        this.initTaskComp();
        this.scheduleOnce(function() {
          _this.myShowTaskFun(0, false);
        }, 1);
      };
      NewClass.prototype.myShowTaskFun = function(mid, mtag) {
        var _this = this;
        var showParams = {
          taskIndex: mid,
          complete: mtag,
          callFunc3: function() {
            switch (mid) {
             case 0:
              if (mtag) _this.showGameTow(); else {
                _this.node.getChildByName("paintboard").active = true;
                _this.boxNode.active = true;
                _this.assembleItem();
              }
              break;

             case 1:
              mtag ? _this.gameOver() : _this.shakeItem();
            }
          }
        };
        this.gameTaskCom.showTaskList(showParams);
      };
      NewClass.prototype.initTaskComp = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (_this.taskData) {
            var bundle = cc.assetManager.getBundle("common");
            bundle ? bundle.load("gameTask/gameTask", cc.Prefab, function(error, assets) {
              var taskNode = cc.instantiate(assets);
              _this.gameTaskCom = taskNode.getComponent("gameTask");
              _this.gameTaskCom && _this.gameTaskCom.initData(_this.taskData);
              taskNode.parent = _this.node;
              resolve();
            }) : reject("common bundle nil!");
          } else reject("task data nil!");
        }).catch(function(error) {
          cc.error("initTaskComp error: " + error);
        });
      };
      NewClass.prototype.testgame2 = function() {
        this.cur_index = 4;
        this.boxNode.active = false;
        this.lightNode.active = false;
        this.itemBoard.active = false;
        this.showAllPainting();
      };
      NewClass.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.LIFE_CYCLE_BLOCK, this.onBlock, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_UNBLOCK, this.unBlock, this);
      };
      NewClass.prototype.dolphineAinback = function(date) {
        var _this = this;
        var aniDate = date;
        if ("tiaoyue" === aniDate.animation.name) this.playSpine(this.dolphineAin, "daiji", true); else if ("daiji" === aniDate.animation.name) {
          var mnode_1 = this.bgSp.node.getChildByName("haitunNode");
          cc.tween(mnode_1).to(2, {
            opacity: 0
          }).call(function() {
            mnode_1.destroy();
            _this.nextFollowStep();
          }).start();
        }
      };
      NewClass.prototype.fachenback = function(date) {
        var aniDate = date;
        "Lanse" === aniDate.animation.name && (this.fachen.node.active = false);
      };
      NewClass.prototype.assembleItem = function(ctag) {
        void 0 === ctag && (ctag = 1);
        this.boxNode.getComponent("pdragItem").initItem(this.cur_index);
        this.paintSp.node.active = false;
        this.boardSp.spriteFrame = this.boardSpArr[this.cur_index];
        for (var i = 0; i < ctag; i++) {
          var item = cc.instantiate(this.kongItem);
          var itemCom = item.getComponent("kongItem");
          itemCom.initItem(i, this.cur_index, this);
          this.itemBoard.addChild(item);
        }
      };
      NewClass.prototype.guideColorBox = function() {
        cc.tween(this.boxNode).by(.2, {
          scale: .1
        }).by(.2, {
          scale: -.1
        }).union().repeat(2).start();
      };
      NewClass.prototype.splashColorAni = function() {
        this.setBlock(true);
        var item = this.itemBoard.getChildByName("kongItem").getComponent("kongItem");
        item.splashColor();
      };
      NewClass.prototype.showPaintSp = function() {
        AudioManager_1.default.playEffect("paintingColor", "audio/" + this.sounds_arr[this.cur_index]);
        this.paintSp.node.active = true;
        this.paintSp.spriteFrame = this.paintSpArr[this.cur_index];
      };
      NewClass.prototype.roundEnd = function() {
        var _this = this;
        this.lightNode.active = true;
        AudioManager_1.default.playEffect("paintingColor", "audio/grate");
        this.scheduleOnce(function() {
          return _this.nextRound();
        }, 3);
      };
      NewClass.prototype.nextRound = function() {
        this.lightNode.active = false;
        this.cur_index++;
        if (this.cur_index >= 4) {
          cc.log("game one end");
          this.itemBoard.active = false;
          this.showAllPainting();
          return;
        }
        this.assembleItem(1);
      };
      NewClass.prototype.showAllPainting = function() {
        var _this = this;
        this.showNode.active = true;
        this.showNode.opacity = 0;
        cc.tween(this.showNode).to(.5, {
          opacity: 255
        }).start();
        this.scheduleOnce(function() {
          return _this.myShowTaskFun(0, true);
        }, 2);
      };
      NewClass.prototype.showGameTow = function() {
        var _this = this;
        this.showNode.getComponent(cc.Sprite).spriteFrame = null;
        this.bgSp.spriteFrame = this.bgSpArr[0];
        cc.tween(this.showNode).by(1, {
          y: -200
        }).call(function() {
          _this.bgSp.node.getChildByName("kuang").active = true;
          _this.myShowTaskFun(1, false);
        }).start();
      };
      NewClass.prototype.shakeItem = function() {
        var _this = this;
        for (var _i = 0, _a = this.showNode.children; _i < _a.length; _i++) {
          var iterator = _a[_i];
          cc.tween(iterator).by(.1, {
            angle: 10
          }).by(.1, {
            angle: -10
          }).by(.1, {
            angle: -10
          }).by(.1, {
            angle: 10
          }).union().repeat(2).call(function() {
            _this.playFollowEff();
          }).start();
        }
      };
      NewClass.prototype.playFollowEff = function() {
        var _this = this;
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "display"
        });
        AudioManager_1.default.playEffect("paintingColor", "audio/blue", function() {
          return _this.gameRunRecord();
        });
      };
      NewClass.prototype.nextFollowStep = function() {
        this.cur_index++;
        if (this.cur_index >= 6) {
          cc.log("game all end");
          this.myShowTaskFun(1, true);
          return;
        }
        this.shakeItem();
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
          bundleName: "paintingColor",
          audioUrl: "audio/blue"
        };
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
        this.moveToCenterAin(true);
      };
      NewClass.prototype.sayWrong = function() {
        this.moveToCenterAin(false);
      };
      NewClass.prototype.moveToCenterAin = function(saytag) {
        var _this = this;
        var pNode = null;
        4 == this.cur_index ? pNode = this.showNode.getChildByName("dolphine_show") : 5 == this.cur_index && (pNode = this.showNode.getChildByName("yingwu_show"));
        var kp = this.bgSp.node.getChildByName("kuang").position;
        var kwp = this.bgSp.node.convertToWorldSpaceAR(kp);
        var kcp = pNode.parent.convertToNodeSpaceAR(kwp);
        cc.tween(pNode).to(1, {
          position: kcp
        }).call(function() {
          _this.fachen.node.position = kcp;
          _this.fachen.node.y -= 300;
          _this.fachen.node.active = true;
          _this.playSpine(_this.fachen, "Lanse", false);
          saytag ? _this.disappearNode(pNode, true) : _this.scheduleOnce(function() {
            pNode.angle = -20;
            _this.heiyanAin.node.active = true;
            _this.playSpine(_this.heiyanAin, "animation", false);
            _this.disappearNode(pNode, false);
          }, 1);
        }).start();
      };
      NewClass.prototype.disappearNode = function(pNode, mtag) {
        var _this = this;
        cc.tween(pNode).to(1, {
          opacity: 0
        }).call(function() {
          pNode.destroy();
          if (mtag) {
            if (4 == _this.cur_index) _this.bgSp.node.getChildByName("haitunNode").active = true; else if (5 == _this.cur_index) {
              var yingwu_1 = _this.bgSp.node.getChildByName("yingwuNode");
              yingwu_1.active = true;
              var bird_1 = yingwu_1.getChildByName("niao-fei");
              cc.tween(bird_1).to(3, {
                position: cc.v3(136, -156, 0)
              }).call(function() {
                bird_1.destroy();
                yingwu_1.getChildByName("niao").active = true;
                cc.tween(yingwu_1).delay(2).to(2, {
                  opacity: 0
                }).call(function() {
                  yingwu_1.destroy();
                  _this.nextFollowStep();
                }).start();
              }).start();
            }
          } else _this.nextFollowStep();
        }).start();
      };
      NewClass.prototype.setBlock = function(tag) {
        this.blockNode.active = tag;
        tag || this.guideColorBox();
      };
      NewClass.prototype.playSpine = function(spNode, spName, tg) {
        spNode.clearTracks();
        spNode.setToSetupPose();
        spNode.setAnimation(0, spName, tg);
      };
      NewClass.prototype.gameOver = function() {
        cc.log("\u901a\u77e5\u5bb9\u5668 \u6e38\u620f\u7ed3\u675f");
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
        if (this.overTag) {
          this.overTag = false;
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
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "paintSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "paintSpArr", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "boardSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "boardSpArr", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "kongItem", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemBoard", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "lightNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "boxNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "showNode", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "bgSp", void 0);
      __decorate([ property(cc.SpriteFrame) ], NewClass.prototype, "bgSpArr", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "fachen", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "dolphineAin", void 0);
      __decorate([ property(sp.Skeleton) ], NewClass.prototype, "heiyanAin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "blockNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0
  } ],
  pdragItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b54eoOTZ1DfJLXPH0wdAmt", "pdragItem");
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
    var paintingColor_1 = require("../scr/paintingColor");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.checkBox = null;
        _this.colorBoxArr = [];
        _this.mainCom = null;
        _this.curNode = null;
        _this.isCanMove = true;
        _this.mround = 0;
        _this.PosiArr = [ cc.v3(-13, -140, 0), cc.v3(-167, -140, 0), cc.v3(13, -30, 0), cc.v3(-127, -30, 0) ];
        _this.sounds_arr = [ "blue", "red", "yel", "blue" ];
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
      NewClass.prototype.initItem = function(round) {
        this.mround = round;
        this.curNode = this.colorBoxArr[this.mround];
        this.setCanTouch(true);
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.touchStart = function() {
        if (!this.isCanMove) return;
        AudioManager_1.default.playEffect("paintingColor", "audio/" + this.sounds_arr[this.mround]);
      };
      NewClass.prototype.touchEnd = function() {
        var _this = this;
        if (!this.isCanMove) return;
        this.setCanTouch(false);
        var myv2 = cc.v2(this.curNode.position.x, this.curNode.position.y);
        var checkRect = this.checkBox.getBoundingBox();
        if (checkRect.contains(myv2)) {
          cc.log("into check box === ");
          this.curNode.active = false;
          this.mainCom.splashColorAni();
        } else {
          cc.tween(this.curNode).to(.2, {
            position: this.PosiArr[this.mround]
          }).start();
          this.scheduleOnce(function() {
            _this.setCanTouch(true);
          }, .5);
        }
      };
      NewClass.prototype.onTouchMove = function(touchEvent) {
        if (!this.isCanMove) return;
        var location = touchEvent.getLocation();
        var bendiLoc = this.node.convertToNodeSpaceAR(location);
        bendiLoc.x > -200 && bendiLoc.x < 200 && (this.curNode.x = bendiLoc.x);
        bendiLoc.y > -200 && bendiLoc.y < 200 && (this.curNode.y = bendiLoc.y);
      };
      NewClass.prototype.setCanTouch = function(tag) {
        this.isCanMove = tag;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "checkBox", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "colorBoxArr", void 0);
      __decorate([ property(paintingColor_1.default) ], NewClass.prototype, "mainCom", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "../scr/paintingColor": "paintingColor"
  } ]
}, {}, [ "kongItem", "paintingColor", "pdragItem" ]);