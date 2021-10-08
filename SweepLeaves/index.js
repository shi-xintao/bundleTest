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
  Constant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68584KdAfJBM4cE9OW5WEos", "Constant");
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
  SweepLeaves: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8005fWVQilLKL/LoQOQIMUc", "SweepLeaves");
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
    var Constant_1 = require("./Constant");
    var TimerSystem_1 = require("../../../kit/system/timer/TimerSystem");
    var ccclass = cc._decorator.ccclass;
    var DOG_SK;
    (function(DOG_SK) {
      DOG_SK["DOUBT"] = "doubt";
      DOG_SK["EXCITED"] = "excited";
      DOG_SK["HAPPY"] = "happy";
      DOG_SK["RUN"] = "run";
      DOG_SK["SAD"] = "sad";
      DOG_SK["STAY"] = "stay";
      DOG_SK["STAY_YAO_QIU"] = "stay-yaoqiu";
      DOG_SK["YAO_QIU"] = "yaoqiu";
      DOG_SK["STAY_YAO_RUN"] = "yaoqiu-run";
      DOG_SK["STAY_FANG_QIU"] = "stay-fangqiu";
    })(DOG_SK || (DOG_SK = {}));
    var BROOM_SK;
    (function(BROOM_SK) {
      BROOM_SK["IDLE"] = "saoba-stay";
      BROOM_SK["RUN"] = "saoba";
    })(BROOM_SK || (BROOM_SK = {}));
    var BUBBLE_SK;
    (function(BUBBLE_SK) {
      BUBBLE_SK["IDLE"] = "naopao-2";
      BUBBLE_SK["SHOW"] = "naopao-1";
      BUBBLE_SK["HIDE"] = "naopao-3";
    })(BUBBLE_SK || (BUBBLE_SK = {}));
    var MUSIC_TYPE;
    (function(MUSIC_TYPE) {
      MUSIC_TYPE["YELLOW"] = "yellow";
      MUSIC_TYPE["RED"] = "red";
      MUSIC_TYPE["BG_MUSIC"] = "bg";
      MUSIC_TYPE["SEAL"] = "SE_luoyefense_03";
      MUSIC_TYPE["LEAF_SAO"] = "SE_luoyefense_04";
      MUSIC_TYPE["DOG_SAD"] = "SE_luoyefense_01";
      MUSIC_TYPE["THROW_BALL"] = "SE_luoyefense_06";
      MUSIC_TYPE["START"] = "1_womenkaishiba";
      MUSIC_TYPE["SO_GOOD"] = "2_youaresogood";
      MUSIC_TYPE["kEEP_TRYING"] = "3_keeptrying";
      MUSIC_TYPE["COOL"] = "4_cool";
      MUSIC_TYPE["PREFECT"] = "5_perfect";
      MUSIC_TYPE["GONG_XI"] = "6_congratulations";
    })(MUSIC_TYPE || (MUSIC_TYPE = {}));
    var SweepLeaves = function(_super) {
      __extends(SweepLeaves, _super);
      function SweepLeaves() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dogSk = null;
        _this.bubbleSk = null;
        _this.broomSk = null;
        _this.starSk = null;
        _this.leafContent = null;
        _this.ballContent = null;
        _this.guideNode = null;
        _this.tigoHead = null;
        _this.blockInputNode = null;
        _this.taskNode = null;
        _this.hideTaskBtn = null;
        _this.gameAudioIndex = 0;
        _this.gameIndex = 0;
        _this.gameTaskIndex = 0;
        _this.isTaskShow = false;
        _this.moveLen = 400;
        _this.taskHideTime = 4;
        _this.moveTime = .5;
        _this.bubble_skin = [ "yezi", "huangqiu", "hongqiu", "huangqiu" ];
        _this.leafIndex = [];
        _this.taskCallback = function() {};
        _this.gameTotal = 4;
        _this.isClicking = false;
        _this.gameWordData = [ "", "\u9ec4\u8272", "\u7ea2\u8272", "\u9ec4\u8272" ];
        _this.gameWordAudio = [ "", "yellow", "red", "yellow" ];
        _this.MUSIC_PATH = "audio/";
        _this.BUNDLE_NAME = "SweepLeaves";
        _this.startRecordFunc = null;
        return _this;
      }
      SweepLeaves.prototype.onLoad = function() {
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      SweepLeaves.prototype.start = function() {
        this.initAllNode();
        this.initOnClickLeafNode();
        this.initOtherNodeMes();
        this.initTaskNodeMes();
        this.startRunGame();
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.block, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.onBlock, this);
        this.palyBGM();
        this.showBlockNode();
      };
      SweepLeaves.prototype.block = function() {};
      SweepLeaves.prototype.onBlock = function() {};
      SweepLeaves.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_BLOCK, this.block, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_UNBLOCK, this.onBlock, this);
        cc.isValid(this.node) && this.node.destroy();
      };
      SweepLeaves.prototype.initAllNode = function() {
        this.dogSk = this.getSpineByNode("dogNode");
        this.starSk = this.getSpineByNode("starNode");
        this.broomSk = this.getSpineByNode("broomNode");
        this.bubbleSk = this.getSpineByNode("bubbleNode");
        this.leafContent = this.node.getChildByName("leafContent");
        this.ballContent = this.node.getChildByName("ballContent");
        this.blockInputNode = this.node.getChildByName("blockInputNode");
        this.taskNode = this.node.getChildByName("TaskList");
        this.hideTaskBtn = this.node.getChildByName("hideTaskBtn");
        this.tigoHead = this.node.getChildByName("tigoHead");
        this.guideNode = this.node.getChildByName("guideNode");
      };
      SweepLeaves.prototype.initOtherNodeMes = function() {
        this.hideTaskBtn.active = false;
        this.hideTigoHeadAnimation();
      };
      SweepLeaves.prototype.showGuideNode = function() {
        this.guideNode.active = true;
      };
      SweepLeaves.prototype.hideGuideNode = function() {
        this.guideNode.active = false;
      };
      SweepLeaves.prototype.showBlockNode = function() {
        this.blockInputNode.active = true;
      };
      SweepLeaves.prototype.hideBlockNode = function() {
        this.blockInputNode.active = false;
      };
      SweepLeaves.prototype.initOnClickLeafNode = function() {
        var _this = this;
        this.leafContent.children.forEach(function(item) {
          item.on(cc.Node.EventType.TOUCH_END, function(e) {
            _this.onClickLeaf(e);
          }, _this);
        });
      };
      SweepLeaves.prototype.onClickLeaf = function(e) {
        if (this.isClicking) return;
        this.hideGuideNode();
        this.isClicking = true;
        this.leafIndex.push(e.target.name);
        this.gameAudioIndex++;
        var targetItem = e.target;
        var leafNode = targetItem.children[0];
        if (leafNode) {
          leafNode.active = true;
          leafNode.getComponent(sp.Skeleton);
        }
        this.playBroomAnimation(e.target);
        this.palyAudioByIdx(e.target.name);
      };
      SweepLeaves.prototype.playBroomAnimation = function(targetNode) {
        var _this = this;
        this.broomSk.node.active = true;
        var tarPos = targetNode.getPosition();
        this.broomSk.node.setPosition(tarPos.x, tarPos.y - 130);
        AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.LEAF_SAO);
        this.scheduleOnce(function() {
          _this.playBroomEndAnimation(targetNode);
        }, 2.5);
      };
      SweepLeaves.prototype.playBroomEndAnimation = function(targetNode) {
        var _this = this;
        cc.tween(targetNode).to(.5, {
          opacity: 0
        }).call(function() {
          _this.playAudioByName();
          targetNode.active = false;
          _this.broomSk.node.active = false;
          _this.nextGameLevel();
        }).start();
      };
      SweepLeaves.prototype.nextGameLevel = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.isClicking = false;
              if (this.leafIndex.length < 4) {
                this.palyDogHappyAnimation();
                return [ 2 ];
              }
              this.gameAudioIndex++;
              this.gameIndex++;
              if (!(1 === this.gameIndex || this.gameIndex === this.gameTotal)) return [ 3, 1 ];
              if (1 === this.gameIndex) {
                this.showStarAnimation();
                this.palyDogExcitedAnimation();
              }
              TimerSystem_1.default.instance.doFrameOnce(1, function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var _this = this;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      return [ 4, this.showTaskList(false) ];

                     case 1:
                      _a.sent();
                      return [ 4, this.showSealSpine() ];

                     case 2:
                      _a.sent();
                      return [ 4, this.hideTaskList() ];

                     case 3:
                      _a.sent();
                      this.hideSealSpine();
                      this.hideStarAnimation();
                      if (!(this.gameIndex >= this.gameTotal)) return [ 3, 4 ];
                      AudioManager_1.default.stopMusic();
                      EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
                      this.palyDogHappyAnimation(true);
                      cc.log("\u6e38\u620f\u7ed3\u675f~~");
                      return [ 2 ];

                     case 4:
                      cc.log("\u6e38\u620f\u7ee7\u7eed~~");
                      this.palyDogIdleAnimation();
                      this.gameTaskIndex++;
                      return [ 4, this.showTaskList() ];

                     case 5:
                      _a.sent();
                      this.startRecordFunc = function() {
                        return __awaiter(_this, void 0, void 0, function() {
                          return __generator(this, function(_a) {
                            switch (_a.label) {
                             case 0:
                              return [ 4, this.initBubbleMes() ];

                             case 1:
                              _a.sent();
                              return [ 4, this.showTigoHeadAnimation() ];

                             case 2:
                              _a.sent();
                              this.gameRunRecord();
                              return [ 2 ];
                            }
                          });
                        });
                      };
                      _a.label = 6;

                     case 6:
                      return [ 2 ];
                    }
                  });
                });
              });
              return [ 3, 4 ];

             case 1:
              cc.log("\u6e38\u620f\u7ee7\u7eed~~ing");
              return [ 4, this.initBubbleMes() ];

             case 2:
              _a.sent();
              return [ 4, this.showTigoHeadAnimation() ];

             case 3:
              _a.sent();
              this.gameRunRecord();
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      SweepLeaves.prototype.showTigoHeadAnimation = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var bubbleName = _this.bubble_skin[_this.gameIndex];
          var tarBall = _this.ballContent.getChildByName(bubbleName);
          if (tarBall && bubbleName) {
            tarBall.active = true;
            AudioManager_1.default.playEffect(_this.BUNDLE_NAME, "" + _this.MUSIC_PATH + MUSIC_TYPE.THROW_BALL);
            cc.tween(tarBall).to(.6, {
              x: 0,
              y: 0,
              scaleX: -.5,
              scaleY: .5
            }).delay(1).call(function() {
              resolve();
            }).start();
          }
        });
      };
      SweepLeaves.prototype.hideTigoHeadAnimation = function() {
        var _this = this;
        this.ballContent.children.forEach(function(item) {
          item.active = false;
          item.setPosition(_this.tigoHead.getPosition());
        });
      };
      SweepLeaves.prototype.showStarAnimation = function() {
        this.starSk.node.active = true;
      };
      SweepLeaves.prototype.hideStarAnimation = function() {
        this.starSk.node.active = false;
      };
      SweepLeaves.prototype.palyDogHappyAnimation = function(isLoop) {
        var _this = this;
        void 0 === isLoop && (isLoop = false);
        if (isLoop) {
          Constant_1.playSpineAnimation(this.dogSk, DOG_SK.HAPPY, true);
          return;
        }
        Constant_1.playSpineAnimation(this.dogSk, DOG_SK.HAPPY).then(function() {
          Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY, true);
        });
      };
      SweepLeaves.prototype.palyDogExcitedAnimation = function() {
        var _this = this;
        Constant_1.playSpineAnimation(this.dogSk, DOG_SK.EXCITED).then(function() {
          Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY, true);
        });
      };
      SweepLeaves.prototype.palyDogIdleAnimation = function() {
        Constant_1.playSpineAnimation(this.dogSk, DOG_SK.STAY, true);
      };
      SweepLeaves.prototype.setDogBallAnimation = function() {
        this.dogSk.setSkin("default");
        var bubbleName = this.bubble_skin[this.gameIndex];
        cc.log("\u72d7\u72d7\u76ae\u80a4\u540d\u5b57   " + bubbleName);
        this.dogSk.clearTracks();
        this.dogSk.setToSetupPose();
        this.dogSk.setSkin(bubbleName);
      };
      SweepLeaves.prototype.palyDogBallRightAnimation = function() {
        var _this = this;
        cc.log("\u8ddf\u8bfb\u6b63\u786e~~");
        this.setDogBallAnimation();
        var originPos = this.dogSk.node.position;
        var bubbleName = this.bubble_skin[this.gameIndex];
        var tarBall = this.ballContent.getChildByName(bubbleName);
        var time = 2;
        var action1 = cc.tween(this.dogSk.node).call(function() {
          Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.RUN, true);
        }).to(time, {
          x: -183,
          y: -94,
          scale: .8
        }).call(function() {
          _this.hideTigoHeadAnimation();
          Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.YAO_QIU).then(function() {
            _this.dogSk.node.scaleX = -_this.dogSk.node.scaleX;
            Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY_YAO_RUN, true);
            cc.tween(_this.dogSk.node).to(time, {
              position: originPos,
              scaleX: -1,
              scaleY: 1
            }).call(function() {
              _this.dogSk.node.scaleX = 1;
              Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY_YAO_QIU).then(function() {
                Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY_FANG_QIU).then(function() {
                  Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY, true);
                  _this.nextGameLevel();
                });
              });
            }).start();
          });
        }).start();
      };
      SweepLeaves.prototype.palyDogBallWrongAnimation = function() {
        var _this = this;
        cc.log("\u8ddf\u8bfb\u9519\u8bef~~");
        AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.DOG_SAD);
        Constant_1.playSpineAnimation(this.dogSk, DOG_SK.DOUBT).then(function() {
          Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY, true);
          _this.hideTigoHeadAnimation();
          _this.nextGameLevel();
        });
      };
      SweepLeaves.prototype.palyBGM = function() {
        AudioManager_1.default.playMusic(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.BG_MUSIC);
      };
      SweepLeaves.prototype.palyAudioByIdx = function(colorNum) {
        if (Number(colorNum) <= 2) {
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.YELLOW);
          return;
        }
        AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.RED);
      };
      SweepLeaves.prototype.initTaskNodeMes = function() {
        var _this = this;
        if (!this.taskNode) return;
        var di = this.taskNode.getChildByName("di");
        var posX = cc.view.getFrameSize().width / 2 + di.width / 2;
        this.moveLen = di.width;
        var content = this.taskNode.getChildByName("content");
        content.children.forEach(function(item, id) {
          item.active = id === _this.gameTaskIndex;
        });
      };
      SweepLeaves.prototype.showTaskList = function(bool) {
        var _this = this;
        void 0 === bool && (bool = true);
        return new Promise(function(resolve) {
          _this.initTaskNodeMes();
          _this.setTaskCallBack();
          if (_this.isTaskShow) return;
          _this.isTaskShow = !_this.isTaskShow;
          cc.tween(_this.taskNode).by(_this.moveTime, {
            x: -_this.moveLen
          }).delay(.5).call(function() {
            _this.hideTaskBtn.active = bool;
            _this.hideBlockNode();
            resolve();
          }).start();
        });
      };
      SweepLeaves.prototype.hideTaskList = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.cancelTaskCallBack();
          if (!_this.isTaskShow) return;
          _this.isTaskShow = !_this.isTaskShow;
          _this.hideTaskBtn.active = false;
          cc.tween(_this.taskNode).by(_this.moveTime, {
            x: _this.moveLen
          }).call(function() {
            resolve();
            if (0 === _this.gameAudioIndex) {
              _this.playAudioByName();
              _this.showGuideNode();
            }
            if (_this.startRecordFunc) {
              _this.startRecordFunc();
              _this.startRecordFunc = null;
            }
          }).start();
        });
      };
      SweepLeaves.prototype.setTaskCallBack = function() {
        var _this = this;
        this.scheduleOnce(this.taskCallback = function() {
          _this.hideTaskList();
        }, this.taskHideTime);
      };
      SweepLeaves.prototype.cancelTaskCallBack = function() {
        this.taskCallback && this.unschedule(this.taskCallback);
      };
      SweepLeaves.prototype.getSpineByNode = function(nodeName) {
        var item = this.node.getChildByName(nodeName);
        if (!item) {
          cc.warn(nodeName + "  \u6b64\u8282\u70b9\u4e0d\u5b58\u5728");
          return null;
        }
        var targetSk = item.getComponent(sp.Skeleton);
        if (!targetSk) {
          cc.warn(item.name + "  \u6b64\u8282\u70b9\u4e0d\u5b58\u5728\u9aa8\u9abc\u7ec4\u4ef6");
          return null;
        }
        return targetSk;
      };
      SweepLeaves.prototype.startRunGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.DOG_SAD);
              Constant_1.playSpineAnimation(this.dogSk, DOG_SK.SAD).then(function() {
                Constant_1.playSpineAnimation(_this.dogSk, DOG_SK.STAY, true);
              });
              return [ 4, this.initBubbleMes() ];

             case 1:
              _a.sent();
              TimerSystem_1.default.instance.doFrameOnce(1, function() {
                _this.showTaskList();
              });
              return [ 2 ];
            }
          });
        });
      };
      SweepLeaves.prototype.initBubbleMes = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var bubbleName = _this.bubble_skin[_this.gameIndex];
          cc.log("bubbleName===", bubbleName);
          _this.bubbleSk.setSkin(bubbleName);
          _this.bubbleSk.clearTracks();
          _this.bubbleSk.setToSetupPose();
          Constant_1.playSpineAnimation(_this.bubbleSk, BUBBLE_SK.SHOW).then(function() {
            Constant_1.playSpineAnimation(_this.bubbleSk, BUBBLE_SK.IDLE, true);
            cc.tween(_this.bubbleSk.node).delay(2).call(function() {
              Constant_1.playSpineAnimation(_this.bubbleSk, BUBBLE_SK.HIDE).then(function() {
                resolve();
              });
            }).start();
          });
        });
      };
      SweepLeaves.prototype.showBubbleSpine = function(bubbleName) {
        var _this = this;
        this.bubbleSk.setSkin(bubbleName);
        this.bubbleSk.clearTracks();
        this.bubbleSk.setToSetupPose();
        Constant_1.playSpineAnimation(this.bubbleSk, BUBBLE_SK.SHOW).then(function() {
          Constant_1.playSpineAnimation(_this.bubbleSk, BUBBLE_SK.IDLE, true);
          _this.scheduleOnce(function() {
            Constant_1.playSpineAnimation(_this.bubbleSk, BUBBLE_SK.HIDE);
          }, 2.5);
        });
      };
      SweepLeaves.prototype.showSealSpine = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var sealNode = _this.taskNode.getChildByName("sealNode");
          sealNode.active = true;
          var sk = sealNode.getComponent(sp.Skeleton);
          _this.playAudioByName();
          sk.setToSetupPose();
          cc.tween(sealNode).delay(2).call(function() {
            resolve();
          }).start();
          AudioManager_1.default.playEffect(_this.BUNDLE_NAME, "" + _this.MUSIC_PATH + MUSIC_TYPE.SEAL);
        });
      };
      SweepLeaves.prototype.hideSealSpine = function() {
        var sealNode = this.taskNode.getChildByName("sealNode");
        if (!sealNode) return;
        var sk = sealNode.getComponent(sp.Skeleton);
        sk.setToSetupPose();
        sealNode.active = false;
      };
      SweepLeaves.prototype.onClickTaskBtn = function() {
        this.hideTaskList();
      };
      SweepLeaves.prototype.gameRunRecord = function() {
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
        AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + this.gameWordAudio[this.gameIndex]);
      };
      SweepLeaves.prototype.recordResult = function(result) {
        console.log("recordResult", result.data);
        "ResultCb" == result.data.eventName && (result.data.success ? this.palyDogBallRightAnimation() : this.palyDogBallWrongAnimation());
      };
      SweepLeaves.prototype.playAudioByName = function() {
        switch (this.gameAudioIndex) {
         case 0:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.START);
          break;

         case 1:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.SO_GOOD);
          break;

         case 2:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.kEEP_TRYING);
          break;

         case 3:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.COOL);
          break;

         case 4:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.PREFECT);
          break;

         default:
          AudioManager_1.default.playEffect(this.BUNDLE_NAME, "" + this.MUSIC_PATH + MUSIC_TYPE.GONG_XI);
        }
      };
      SweepLeaves.prototype.playSpineByName = function(targetSk, startSp, endSp) {
        targetSk.setAnimation(0, startSp, false);
        targetSk.setEndListener(function() {
          cc.log("setEndListener");
          targetSk.addAnimation(0, endSp, true);
        });
      };
      SweepLeaves = __decorate([ ccclass ], SweepLeaves);
      return SweepLeaves;
    }(cc.Component);
    exports.default = SweepLeaves;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../../../kit/system/timer/TimerSystem": void 0,
    "./Constant": "Constant"
  } ]
}, {}, [ "Constant", "SweepLeaves" ]);