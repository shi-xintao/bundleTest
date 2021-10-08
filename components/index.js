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
  ChapterConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0322aleFrhBwZIZELerzR0G", "ChapterConfig");
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
    var WayPoint_1 = require("./WayPoint");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ChapterConfig = function(_super) {
      __extends(ChapterConfig, _super);
      function ChapterConfig() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.waypointList = [];
        return _this;
      }
      ChapterConfig.prototype.onLoad = function() {
        for (var i = 0; i < this.node.childrenCount; i++) {
          var ch = this.node.children[i];
          null != ch.getComponent(WayPoint_1.default) && this.waypointList.push(ch);
        }
      };
      ChapterConfig.prototype.start = function() {};
      ChapterConfig = __decorate([ ccclass ], ChapterConfig);
      return ChapterConfig;
    }(cc.Component);
    exports.default = ChapterConfig;
    cc._RF.pop();
  }, {
    "./WayPoint": "WayPoint"
  } ],
  FollowReadQuestion: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0590f94Rd9KlJ8StacxGOzx", "FollowReadQuestion");
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
    var kit_1 = require("../../../../kit/kit");
    var config_1 = require("../../../../Script/config/config");
    var event_1 = require("../../../../Script/config/event");
    var RecordComponent_1 = require("./core/RecordComponent");
    var RecordConfig_1 = require("./core/RecordConfig");
    var RecordManager_1 = require("./core/RecordManager");
    var RecordAin_1 = require("./RecordAin");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FollowReadQuestion = function(_super) {
      __extends(FollowReadQuestion, _super);
      function FollowReadQuestion() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bundleName = "components";
        _this.content = null;
        _this.curtryTime = 1;
        return _this;
      }
      Object.defineProperty(FollowReadQuestion.prototype, "startParm", {
        get: function() {
          var json = {
            evaluatingName: this.recordConfig.evaluatingName,
            hostUrl: this.recordConfig.hostUrl,
            apiKey: this.recordConfig.apiKey,
            apiSecret: this.recordConfig.apiSecret,
            appid: this.recordConfig.appid
          };
          return JSON.stringify(json);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FollowReadQuestion.prototype, "evaluationParm", {
        get: function() {
          var josn = {
            evaluatingType: this.recordConfig.evaluatingType,
            evaluatingText: this.recordConfig.evaluatingText,
            evaluatingName: this.recordConfig.evaluatingName
          };
          return JSON.stringify(josn);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FollowReadQuestion.prototype, "status", {
        get: function() {
          return this._status;
        },
        set: function(v) {
          this._status = v;
          this.historyStatus.push(v);
          cc.log("\u5386\u53f2\u72b6\u6001", this.historyStatus);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FollowReadQuestion.prototype, "historyStatus", {
        get: function() {
          return this._historyStatus;
        },
        enumerable: false,
        configurable: true
      });
      FollowReadQuestion.prototype.init = function(data) {
        this.content = this.node.getChildByName("content");
        this.curtryTime = 0;
        this.recordAni = this.getComponent(RecordAin_1.default);
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.FOLLOW_CLIENT_TO_MODULE, this.handleEvent, this);
        kit_1.kit.manager.Event.on(event_1.BACK, this.onBack, this);
        kit_1.kit.manager.Event.on(RecordManager_1.default.instance.PERMISSION_ALERT_CANCEL, this.permissionAlertCancel, this);
      };
      FollowReadQuestion.prototype.initComponent = function(data) {
        this.content.active = false;
        kit_1.kit.manager.Audio.passMusic();
        _super.prototype.initComponent.call(this, data);
      };
      FollowReadQuestion.prototype.handleEvent = function(data) {
        cc.log("FollowReadQuestion--", data.data);
        switch (data.data.eventName) {
         case "display":
          this.content.active = true;
          break;

         case "startRecord":
          if (this.isBreak) return;
          data.data.extra && data.data.extra.evaluatingText && (this.recordConfig.evaluatingText = data.data.extra.evaluatingText);
          this.recordConfig.extra || (this.recordConfig.extra = {});
          if (data.data.extra && data.data.extra.bundleName) {
            this.recordConfig.extra["bundleName"] = data.data.extra.bundleName;
            this.recordConfig.extra["audioUrl"] = data.data.extra.audioUrl;
          }
          this.readFollowAudio();
          this.content.active = true;
          break;

         case "initComponent":
          this.initComponent(data.data.extra);
          break;

         default:
          cc.log("FollowReadQuestion " + data.data.eventName + " not found");
        }
      };
      FollowReadQuestion.prototype.permissionAlertCancel = function() {
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.FOLLOW_MODULE_TO_CLIENT, {
          eventName: RecordConfig_1.RecordCallBack.ResultCb,
          success: false,
          extra: {
            code: 203,
            score: 0
          }
        });
        this.content.active = false;
      };
      FollowReadQuestion.prototype.readFollowAudio = function() {
        var _this = this;
        kit_1.kit.manager.Audio.playEffect(this.bundleName, "followRead/audio/follow", function() {
          _this.readyRecord();
        });
      };
      FollowReadQuestion.prototype.readyRecord = function() {
        var _this = this;
        this._historyStatus = [];
        var bundleName = this.recordConfig.extra["bundleName"];
        var audioUrl = this.recordConfig.extra["audioUrl"];
        cc.log(bundleName, audioUrl);
        if (audioUrl && bundleName) {
          kit_1.kit.manager.Audio.playEffect(bundleName, audioUrl, function() {
            _super.prototype.readyRecord.call(_this);
          });
          return;
        }
        _super.prototype.readyRecord.call(this);
      };
      FollowReadQuestion.prototype.startRecord = function(parm) {
        this._historyStatus = [];
        _super.prototype.startRecord.call(this, parm);
      };
      FollowReadQuestion.prototype.stopRecord = function() {
        _super.prototype.stopRecord.call(this);
        this.recordAni.loading(true);
      };
      FollowReadQuestion.prototype.readyRecordCb = function(parm) {
        var _this = this;
        cc.log("\u51c6\u5907\u5f55\u97f3\u56de\u8c03", parm);
        this.status = RecordConfig_1.RecordState.Readying;
        cc.log("\u5f00\u59cb\u5f55\u97f3\u53c2\u6570", this.startParm);
        if (false == parm.result) {
          var cmptBundle = cc.assetManager.getBundle(config_1.BUNDLE_COMPONENTS);
          cmptBundle.load("followRead/prefab/permissPrefab", cc.Prefab, function(e, asset) {
            e && cc.warn(e);
            var alertNode = cc.instantiate(asset);
            _this.node.addChild(alertNode);
          });
          return;
        }
        this.startRecord(this.startParm);
      };
      FollowReadQuestion.prototype.startRecordCb = function(parm) {
        cc.log("\u5f00\u59cb\u5f55\u97f3\u56de\u8c03");
        if (this.isBreak) return;
        this.status = RecordConfig_1.RecordState.Recording;
        kit_1.kit.manager.Audio.playEffect(this.bundleName, "followRead/audio/ding");
        _super.prototype.startRecordCb.call(this, parm);
        this.recordAni.initeAniFun(this.recordConfig.recordTime);
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.FOLLOW_MODULE_TO_CLIENT, {
          eventName: RecordConfig_1.RecordCallBack.StartRecordCb,
          extra: parm
        });
      };
      FollowReadQuestion.prototype.stopRecordCb = function(parm) {
        if (this.isBreak) return;
        this.status = RecordConfig_1.RecordState.Stoping;
        _super.prototype.stopRecordCb.call(this, parm);
        cc.log("\u8bc4\u6d4b\u53c2\u6570", this.evaluationParm);
        this.evaluatingRecord(this.evaluationParm);
        this.recordAni.stopAni();
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.FOLLOW_MODULE_TO_CLIENT, {
          eventName: RecordConfig_1.RecordCallBack.StopRecordCb,
          extra: parm
        });
      };
      FollowReadQuestion.prototype.resultCb = function(parm) {
        cc.log("\u6d4b\u8bc4\u7ed3\u679c", parm);
        if (this.isBreak) return;
        if (this.historyStatus.indexOf(RecordConfig_1.RecordState.Stop) > -1) return;
        this.status = RecordConfig_1.RecordState.Stop;
        _super.prototype.resultCb.call(this, parm);
        this.adapterResult(parm);
      };
      FollowReadQuestion.prototype.onDestroy = function() {
        kit_1.kit.manager.Event.off(event_1.BACK, this.onBack, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.FOLLOW_CLIENT_TO_MODULE, this.handleEvent, this);
      };
      FollowReadQuestion.prototype.adapterResult = function(parm) {
        this.recordAni.loading(false);
        cc.log("\u5206\u6570" + parm.score);
        cc.log("\u5206\u6570" + Number(parm.score), this.recordConfig.evaluationScore);
        cc.log("\u6b21\u6570" + this.recordConfig.tryTimes, this.curtryTime);
        if (parm.score && Number(parm.score) >= this.recordConfig.evaluationScore) {
          this.curtryTime = 0;
          kit_1.kit.manager.Audio.playEffect(this.bundleName, "followRead/audio/right");
          cc.log({
            eventName: RecordConfig_1.RecordCallBack.ResultCb,
            success: true,
            extra: parm
          });
          this.content.active = false;
          kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.FOLLOW_MODULE_TO_CLIENT, {
            eventName: RecordConfig_1.RecordCallBack.ResultCb,
            success: true,
            extra: parm
          });
          kit_1.kit.manager.Audio.resumeMusic();
          return;
        }
        if (this.curtryTime >= this.recordConfig.tryTimes) {
          this.curtryTime = 0;
          cc.log({
            eventName: RecordConfig_1.RecordCallBack.ResultCb,
            success: false,
            extra: parm
          });
          kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.FOLLOW_MODULE_TO_CLIENT, {
            eventName: RecordConfig_1.RecordCallBack.ResultCb,
            success: false,
            extra: parm
          });
          this.content.active = false;
          kit_1.kit.manager.Audio.resumeMusic();
          return;
        }
        this.tryAgain();
      };
      FollowReadQuestion.prototype.tryAgain = function() {
        var _this = this;
        if (this.isBreak) return;
        this.curtryTime++;
        cc.log("\u518d\u8bd5\u4e00\u6b21\u5427");
        this.scheduleOnce(function() {
          var bundleName = _this.recordConfig.extra["bundleName"];
          var audioUrl = _this.recordConfig.extra["audioUrl"];
          cc.log(bundleName, audioUrl);
          if (audioUrl && bundleName) {
            kit_1.kit.manager.Audio.playEffect(bundleName, audioUrl, function() {
              _this.startRecord(_this.startParm);
            });
            return;
          }
          _this.startRecord(_this.startParm);
        }, 2.3);
        kit_1.kit.manager.Audio.playEffect(this.bundleName, "followRead/audio/tryAgain");
      };
      FollowReadQuestion.prototype.onBack = function() {
        this.isBreak = true;
        this.content.active = false;
      };
      FollowReadQuestion = __decorate([ ccclass ], FollowReadQuestion);
      return FollowReadQuestion;
    }(RecordComponent_1.default);
    exports.default = FollowReadQuestion;
    cc._RF.pop();
  }, {
    "../../../../Script/config/config": void 0,
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0,
    "./RecordAin": "RecordAin",
    "./core/RecordComponent": "RecordComponent",
    "./core/RecordConfig": "RecordConfig",
    "./core/RecordManager": "RecordManager"
  } ],
  GuildHand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3101wM3INHJari5pB4al/4", "GuildHand");
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
    var kit_1 = require("../../../../kit/kit");
    var config_1 = require("../../../../Script/config/config");
    var event_1 = require("../../../../Script/config/event");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuildHand = function(_super) {
      __extends(GuildHand, _super);
      function GuildHand() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.handSpine = null;
        return _this;
      }
      GuildHand.prototype.onLoad = function() {
        kit_1.kit.manager.Event.on(event_1.SHOW_COMMON_HAND_GUILD, this.showHandSpine, this);
        kit_1.kit.manager.Event.on(event_1.HIDE_COMMON_HAND_GUILD, this.hideHandSpine, this);
      };
      GuildHand.prototype.onDestroy = function() {
        kit_1.kit.manager.Event.off(event_1.SHOW_COMMON_HAND_GUILD, this.showHandSpine, this);
        kit_1.kit.manager.Event.off(event_1.HIDE_COMMON_HAND_GUILD, this.hideHandSpine, this);
      };
      GuildHand.prototype.showHandSpine = function(params) {
        var localPos = this.node.parent.convertToNodeSpaceAR(params.data);
        this.node.position = cc.v3(localPos);
        this.restartHandSpine();
      };
      GuildHand.prototype.hideHandSpine = function() {
        this.node.active = false;
        this.clearGuidHand();
        kit_1.kit.manager.Audio.stopEffect();
      };
      GuildHand.prototype.restartHandSpine = function() {
        this.node.active = true;
        this.addGuildSoundTimer();
      };
      GuildHand.prototype.addGuildSoundTimer = function() {
        var _this = this;
        this.guildSoundTimer && this.clearGuidHand();
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, "guildHand/audio/dianyidian_1");
        var t = 4;
        this.guildSoundTimer = kit_1.kit.system.timer.doLoop(1e3 * t, function() {
          if (!cc.isValid(_this.node)) return;
          kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, "guildHand/audio/dianyidian_1");
        }, this);
      };
      GuildHand.prototype.clearGuidHand = function() {
        kit_1.kit.system.timer.clearTimer(this.guildSoundTimer);
        this.guildSoundTimer = null;
      };
      __decorate([ property(sp.Skeleton) ], GuildHand.prototype, "handSpine", void 0);
      GuildHand = __decorate([ ccclass ], GuildHand);
      return GuildHand;
    }(cc.Component);
    exports.default = GuildHand;
    cc._RF.pop();
  }, {
    "../../../../Script/config/config": void 0,
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0
  } ],
  IComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4ffeM82khCv5Nk9VbM3PKF", "IComponent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IGuideObserver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b6b4JdNF1J+oGFBoj5932r", "IGuideObserver");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  LoadingLesson: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57bb8XWUpdF2o1L/2smqkN5", "LoadingLesson");
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
    var kit_1 = require("../../../../kit/kit");
    var config_1 = require("../../../../Script/config/config");
    var enum_1 = require("../../../../Script/config/enum");
    var event_1 = require("../../../../Script/config/event");
    var lessonManager_1 = require("../../../../Script/manager/lessonManager");
    var ChapterConfig_1 = require("./ChapterConfig");
    var WayPoint_1 = require("./WayPoint");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingLesson = function(_super) {
      __extends(LoadingLesson, _super);
      function LoadingLesson() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.tigoHead = null;
        _this.treasureBox = null;
        _this.layouts = [];
        _this.currProgress = 0;
        _this.currPoint = 0;
        _this.destProgress = 0;
        _this.lessonLoadOk = false;
        _this.loadingActionEnded = false;
        _this.layoutIndex = 1;
        _this.currConfig = null;
        return _this;
      }
      LoadingLesson_1 = LoadingLesson;
      LoadingLesson.prototype.onLoad = function() {
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_READY, this.onLifeCycleReady, this);
      };
      LoadingLesson.prototype.onLifeCycleReady = function() {
        this.lessonLoadOk = true;
      };
      LoadingLesson.prototype.adjustOver = function() {
        this.lessonLoadOk && this.loadingActionEnded && kit_1.kit.manager.Event.emit(event_1.LOADING_LESSON_ENDED);
      };
      LoadingLesson.prototype.moveToProgress = function(index) {
        var progressPos = -1;
        for (var i = 0; i < this.currConfig.waypointList.length; i++) {
          var wp = this.currConfig.waypointList[i];
          var wpc = wp.getComponent(WayPoint_1.default);
          if (wpc.type == WayPoint_1.default.TYPE_PROGRESS) {
            progressPos++;
            if (index == progressPos) {
              this.tigoHead.x = wp.x;
              this.tigoHead.y = wp.y - LoadingLesson_1.YOffset;
              this.currPoint = i;
              break;
            }
          }
        }
      };
      LoadingLesson.prototype.onDestroy = function() {};
      LoadingLesson.prototype.jumpToProgress = function(index) {
        if (this.currProgress == index) return;
        this.destProgress = index;
        this.jumpToPoint(this.currPoint + 1);
      };
      LoadingLesson.prototype.onJumpEnded = function() {
        this.currProgress < this.destProgress ? this.jumpToPoint(this.currPoint + 1) : this.onJumpToProgressEnded();
      };
      LoadingLesson.prototype.onJumpToProgressEnded = function() {
        var _this = this;
        cc.log("onJumpToProgressEnded:" + this.currProgress);
        this.scheduleOnce(function() {
          _this.loadingActionEnded = true;
          kit_1.kit.manager.Event.emit(event_1.LOADING_LESSON_ENDED);
        }, LoadingLesson_1.after_delay);
      };
      LoadingLesson.prototype.jumpToPoint = function(index) {
        var _this = this;
        var match = false;
        var progressPos = -1;
        for (var i = 0; i < this.currConfig.waypointList.length; i++) {
          var wp = this.currConfig.waypointList[i];
          var wpc = wp.getComponent(WayPoint_1.default);
          wpc.type == WayPoint_1.default.TYPE_PROGRESS && progressPos++;
          if (index == i) {
            match = true;
            this.currPoint = i;
            this.currProgress = progressPos;
            var onEnd = function() {
              _this.onJumpEnded();
            };
            var seq = this.getJumpAction(wp.x, wp.y - LoadingLesson_1.YOffset, onEnd);
            this.tigoHead.runAction(seq);
          }
        }
      };
      LoadingLesson.prototype.getJumpAction = function(x, y, callback) {
        var squashAction = cc.scaleTo(.1, 1.1, .8).easing(cc.easeCubicActionOut());
        var stretchAction = cc.scaleTo(.3, .9, 1.2).easing(cc.easeCubicActionOut());
        var scaleBackAction = cc.scaleTo(.1, 1, 1).easing(cc.easeBackOut());
        var jumpTo = cc.jumpTo(.3, cc.v2(x, y), 100, 1);
        var act = cc.sequence(squashAction, cc.spawn(cc.sequence(stretchAction, scaleBackAction), cc.spawn(jumpTo, cc.sequence(cc.delayTime(.2), cc.callFunc(function() {
          kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_COMPONENTS, LoadingLesson_1.JUMP_SOUND);
        })))));
        var seq = cc.sequence(act, cc.callFunc(callback));
        return seq;
      };
      LoadingLesson.prototype.onLaunchJump = function() {
        this.jumpToProgress(3);
      };
      LoadingLesson.prototype.onReset = function() {
        this.currPoint = 0;
        this.currProgress = 0;
        this.moveToProgress(0);
      };
      LoadingLesson.prototype.start = function() {};
      LoadingLesson.prototype.onEnable = function() {
        var _this = this;
        this.loadingActionEnded = false;
        this.lessonLoadOk = false;
        var chapter = lessonManager_1.default.instance.currentChapterData;
        var unit = lessonManager_1.default.instance.getLessonDataById(chapter.lessonId);
        var nextChapter = lessonManager_1.default.instance.getNextChapterData();
        var chapterIndex = 0;
        for (var i = 0; i < unit.chapters.length; i++) {
          var element = unit.chapters[i];
          if (element.chapterId == chapter.chapterId) {
            chapterIndex = i;
            break;
          }
        }
        this.currProgress = chapterIndex;
        nextChapter && nextChapter.chapterType == enum_1.CHAPTER_TYPE.Report && (this.lessonLoadOk = true);
        this.layoutIndex = unit.chapters.length - 3;
        var currLayout = this.layouts[this.layoutIndex];
        this.currConfig = currLayout.getComponent(ChapterConfig_1.default);
        for (var i = 0; i < this.layouts.length; i++) {
          var element = this.layouts[i];
          element.active = false;
        }
        currLayout.active = true;
        this.moveToProgress(this.currProgress);
        cc.log("start loading lesson.......");
        this.scheduleOnce(function() {
          _this.jumpToProgress(_this.currProgress + 1);
        }, LoadingLesson_1.pre_delay);
      };
      var LoadingLesson_1;
      LoadingLesson.YOffset = 50;
      LoadingLesson.currEntity = null;
      LoadingLesson.pre_delay = .5;
      LoadingLesson.after_delay = .5;
      LoadingLesson.JUMP_SOUND = "loadingLesson/sound/jump";
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5185\u5bb9",
        tooltip: "\u5185\u5bb9\u533a\u57df"
      }) ], LoadingLesson.prototype, "content", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u6e38\u6807",
        tooltip: "\u864e\u5934\u6e38\u6807"
      }) ], LoadingLesson.prototype, "tigoHead", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5b9d\u7bb1",
        tooltip: "\u5b9d\u7bb1spine\u52a8\u753b"
      }) ], LoadingLesson.prototype, "treasureBox", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u5e03\u5c40",
        tooltip: "\u4e0d\u540c\u5e03\u5c40"
      }) ], LoadingLesson.prototype, "layouts", void 0);
      LoadingLesson = LoadingLesson_1 = __decorate([ ccclass ], LoadingLesson);
      return LoadingLesson;
    }(cc.Component);
    exports.default = LoadingLesson;
    cc._RF.pop();
  }, {
    "../../../../Script/config/config": void 0,
    "../../../../Script/config/enum": void 0,
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/lessonManager": void 0,
    "../../../../kit/kit": void 0,
    "./ChapterConfig": "ChapterConfig",
    "./WayPoint": "WayPoint"
  } ],
  PermissAlert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c1326ekq5L05ltMaP96/lN", "PermissAlert");
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
    var kit_1 = require("../../../../kit/kit");
    var event_1 = require("../../../../Script/config/event");
    var RecordManager_1 = require("./core/RecordManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PermissAlert = function(_super) {
      __extends(PermissAlert, _super);
      function PermissAlert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.confirm_node = null;
        _this.cancel_node = null;
        return _this;
      }
      PermissAlert.prototype.init = function(data) {};
      PermissAlert.prototype.onLoad = function() {
        this.confirm_node = cc.find("main/ok", this.node);
        this.cancel_node = cc.find("main/cancel", this.node);
        var clickCmpt = this.node.addComponent(kit_1.kit.component.Click);
        clickCmpt.onClick(this.confirm_node, this.onClickConfirm, this);
        clickCmpt.onClick(this.cancel_node, this.onClickCancel, this);
        kit_1.kit.manager.Event.on(event_1.ON_GAME_RESUME, this.onGameResume, this);
        kit_1.kit.manager.Event.on(event_1.BACK, this.onBack, this);
      };
      PermissAlert.prototype.onDestroy = function() {
        cc.log("\u5f39\u7a97\u9500\u6bc1");
        kit_1.kit.manager.Event.off(event_1.ON_GAME_RESUME, this.onGameResume, this);
        kit_1.kit.manager.Event.off(event_1.BACK, this.onBack, this);
      };
      PermissAlert.prototype.onClickConfirm = function() {
        RecordManager_1.default.instance.applyPermission();
      };
      PermissAlert.prototype.onClickCancel = function() {
        this.node.destroy();
        kit_1.kit.manager.Event.emit(RecordManager_1.default.instance.PERMISSION_ALERT_CANCEL);
      };
      PermissAlert.prototype.onGameResume = function() {
        this.node.destroy();
        RecordManager_1.default.instance.readyRecord();
      };
      PermissAlert.prototype.onBack = function() {
        this.node.destroy();
      };
      PermissAlert = __decorate([ ccclass ], PermissAlert);
      return PermissAlert;
    }(cc.Component);
    exports.default = PermissAlert;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0,
    "./core/RecordManager": "RecordManager"
  } ],
  RecordAin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b12107oQEZI6LV9TdZg7cEl", "RecordAin");
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
    var RecordAin = function(_super) {
      __extends(RecordAin, _super);
      function RecordAin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.centerNode = null;
        _this.rightNode = [];
        _this.leftNode = [];
        _this.loadingNode = null;
        return _this;
      }
      RecordAin.prototype.onLoad = function() {
        this.loadingNode = cc.find("content/loading", this.node);
      };
      RecordAin.prototype.initeAniFun = function(sec) {
        var _this = this;
        var comp = this.centerNode.getComponent(cc.Sprite);
        cc.tween(comp).set({
          fillRange: 0
        }).to(sec, {
          fillRange: -1
        }, {
          progress: function(start, end, current, time) {
            var c = time * (end - start);
            return c;
          }
        }).start();
        var n = 0;
        this.schedule(function() {
          _this.rightNode[n].getComponent(cc.Animation).play();
          _this.leftNode[n].getComponent(cc.Animation).play();
          n += 1;
        }, .2, 4, .2);
      };
      RecordAin.prototype.stopAni = function() {
        var _this = this;
        var n = 0;
        this.schedule(function() {
          _this.rightNode[n].getComponent(cc.Animation).stop();
          _this.leftNode[n].getComponent(cc.Animation).stop();
          n += 1;
        }, .2, 4, .2);
        var comp = this.centerNode.getComponent(cc.Sprite);
        comp.fillRange = 0;
      };
      RecordAin.prototype.loading = function(active) {
        this.loadingNode.active = active;
      };
      __decorate([ property(cc.Node) ], RecordAin.prototype, "centerNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], RecordAin.prototype, "rightNode", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u53f3\u8fb9\u52a8\u753b\u7ec4"
      }) ], RecordAin.prototype, "leftNode", void 0);
      RecordAin = __decorate([ ccclass ], RecordAin);
      return RecordAin;
    }(cc.Component);
    exports.default = RecordAin;
    cc._RF.pop();
  }, {} ],
  RecordComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba6dflGBqJLAaiupwp/94fQ", "RecordComponent");
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
    var kit_1 = require("../../../../../kit/kit");
    var baseComponent_1 = require("../../../baseComponent");
    var RecordConfig_1 = require("./RecordConfig");
    var RecordManager_1 = require("./RecordManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RecordComponent = function(_super) {
      __extends(RecordComponent, _super);
      function RecordComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isBreak = false;
        return _this;
      }
      RecordComponent.prototype.initComponent = function(data) {
        data || cc.error("\u8bed\u97f3\u7ec4\u5efa\u521d\u59cb\u5316\u53c2\u6570 error\uff1a", data);
        this.isBreak = false;
        RecordManager_1.default.instance.init();
        this.recordConfig = new RecordConfig_1.RecordConfig();
        this.recordConfig.evaluatingText = data.evaluatingText;
        this.recordConfig.evaluatingType = data.evaluatingType;
        this.recordConfig.evaluationScore = data.evaluationScore;
        this.recordConfig.extra = data.extra;
        this.recordConfig.tryTimes = data.tryTimes;
        this.recordConfig.recordTime = data.recordTime;
        this.addCallBackListener([ {
          key: RecordConfig_1.RecordCallBack.ReadyRecordCb,
          callBack: this.readyRecordCb.bind(this)
        }, {
          key: RecordConfig_1.RecordCallBack.StartRecordCb,
          callBack: this.startRecordCb.bind(this)
        }, {
          key: RecordConfig_1.RecordCallBack.StopRecordCb,
          callBack: this.stopRecordCb.bind(this)
        }, {
          key: RecordConfig_1.RecordCallBack.ResultCb,
          callBack: this.resultCb.bind(this)
        } ]);
      };
      RecordComponent.prototype.addCallBackListener = function(option) {
        RecordManager_1.default.instance.addCallBackListener(option);
      };
      RecordComponent.prototype.readyRecord = function() {
        if (this.isBreak) return;
        RecordManager_1.default.instance.readyRecord();
      };
      RecordComponent.prototype.startRecord = function(parm) {
        if (this.isBreak) return;
        cc.log("\u5f00\u59cb\u5f55\u97f3");
        RecordManager_1.default.instance.startRecord(parm);
      };
      RecordComponent.prototype.stopRecord = function() {
        var _this = this;
        if (this.isBreak) return;
        RecordManager_1.default.instance.stopRecord();
        this.scheduleOnce(function() {
          _this.stopRecordCb({
            audioUrl: ""
          });
        }, 3);
      };
      RecordComponent.prototype.evaluatingRecord = function(parm) {
        var _this = this;
        RecordManager_1.default.instance.evaluatingRecord(parm);
        this.scheduleOnce(function() {
          _this.resultCb({
            score: 0,
            code: 200
          });
        }, 8);
      };
      RecordComponent.prototype.readyRecordCb = function(parm) {
        if (this.isBreak) return;
      };
      RecordComponent.prototype.startRecordCb = function(parm) {
        var _this = this;
        if (this.isBreak) return;
        var time = 1e3 * this.recordConfig.recordTime + 500;
        kit_1.kit.system.timer.doOnce(time, function() {
          _this.stopRecord();
        }, this);
      };
      RecordComponent.prototype.stopRecordCb = function(parm) {
        this.unscheduleAllCallbacks();
      };
      RecordComponent.prototype.resultCb = function(parm) {
        this.unscheduleAllCallbacks();
      };
      RecordComponent = __decorate([ ccclass ], RecordComponent);
      return RecordComponent;
    }(baseComponent_1.default);
    exports.default = RecordComponent;
    cc._RF.pop();
  }, {
    "../../../../../kit/kit": void 0,
    "../../../baseComponent": "baseComponent",
    "./RecordConfig": "RecordConfig",
    "./RecordManager": "RecordManager"
  } ],
  RecordConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24dd2Me51dAbZFddxxUlfph", "RecordConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RecordState = exports.RecordNativeFunction = exports.RecordCallBack = exports.RecordConfig = void 0;
    var RecordConfig = function() {
      function RecordConfig() {
        this.evaluatingName = "ChineseAi.mp3";
        this.appid = "g98d5722";
        this.apiKey = "4d72e5f374599ab9330b1f02f3f7c16e";
        this.hostUrl = "http://ise-api-sg.xf-yun.com/v2/ise";
        this.apiSecret = "b69bd8f7c7c8b04122dde1352ac4fd3e";
      }
      return RecordConfig;
    }();
    exports.RecordConfig = RecordConfig;
    var RecordCallBack;
    (function(RecordCallBack) {
      RecordCallBack["ReadyRecordCb"] = "ReadyRecordCb";
      RecordCallBack["StartRecordCb"] = "StartRecordCb";
      RecordCallBack["StopRecordCb"] = "StopRecordCb";
      RecordCallBack["ResultCb"] = "ResultCb";
    })(RecordCallBack = exports.RecordCallBack || (exports.RecordCallBack = {}));
    var RecordNativeFunction;
    (function(RecordNativeFunction) {
      RecordNativeFunction["readyRecordAction"] = "readyRecordAction";
      RecordNativeFunction["startRecordAction"] = "startRecordAction";
      RecordNativeFunction["stopRecordAction"] = "stopRecordAction";
      RecordNativeFunction["uploadRecordAction"] = "uploadRecordAction";
      RecordNativeFunction["applyPermissionAction"] = "applyPermissionAction";
    })(RecordNativeFunction = exports.RecordNativeFunction || (exports.RecordNativeFunction = {}));
    var RecordState;
    (function(RecordState) {
      RecordState["Idle"] = "idle";
      RecordState["Readying"] = "readying";
      RecordState["Ready"] = "ready";
      RecordState["Recording"] = "recording";
      RecordState["Stoping"] = "stoping";
      RecordState["Stop"] = "stop";
    })(RecordState = exports.RecordState || (exports.RecordState = {}));
    cc._RF.pop();
  }, {} ],
  RecordCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b68ddQhHqdB25BouEzGkc0y", "RecordCore");
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
    exports.ErrorCode = exports.RecordReturnStatus = void 0;
    var RecordManager_1 = require("./RecordManager");
    var RecordReturnStatus;
    (function(RecordReturnStatus) {
      RecordReturnStatus["OnReadyRecordCb"] = "readyRecordCb";
      RecordReturnStatus["OnStartRecordCb"] = "startRecordCb";
      RecordReturnStatus["OnStopRecordCb"] = "stopRecordCb";
      RecordReturnStatus["OnResultCb"] = "evaluatingResultCb";
    })(RecordReturnStatus = exports.RecordReturnStatus || (exports.RecordReturnStatus = {}));
    var ErrorCode;
    (function(ErrorCode) {})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RecordCore = function(_super) {
      __extends(RecordCore, _super);
      function RecordCore() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RecordCore.recordListen = function(msg) {
        var param = msg.param;
        if (param && "" != param) {
          cc.log("recordListen \u63a5\u6536", param);
          param = JSON.parse(param);
        }
        switch (msg.mathName) {
         case RecordReturnStatus.OnReadyRecordCb:
          RecordManager_1.default.instance.readyRecordCb(param);
          break;

         case RecordReturnStatus.OnStartRecordCb:
          RecordManager_1.default.instance.startRecordCb(param);
          break;

         case RecordReturnStatus.OnStopRecordCb:
          RecordManager_1.default.instance.stopRecordCb(param);
          break;

         case RecordReturnStatus.OnResultCb:
          RecordManager_1.default.instance.resultCb(param);
        }
      };
      RecordCore = __decorate([ ccclass ], RecordCore);
      return RecordCore;
    }(cc.Component);
    exports.default = RecordCore;
    window.RecordProxyListen = RecordCore.recordListen;
    cc._RF.pop();
  }, {
    "./RecordManager": "RecordManager"
  } ],
  RecordEngine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "beb60FlTKhB8IKaGVaVFJDW", "RecordEngine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../../kit/kit");
    var RecordConfig_1 = require("./RecordConfig");
    var RecordManager_1 = require("./RecordManager");
    var RecordEngine = function() {
      function RecordEngine() {}
      RecordEngine.prototype.callFunction = function(funName) {
        cc.log(funName);
        switch (funName) {
         case RecordConfig_1.RecordNativeFunction.readyRecordAction:
          this.readyRecord();
          break;

         case RecordConfig_1.RecordNativeFunction.startRecordAction:
          this.startRecord();
          break;

         case RecordConfig_1.RecordNativeFunction.stopRecordAction:
          this.stopRecord();
          break;

         case RecordConfig_1.RecordNativeFunction.uploadRecordAction:
          this.envRecord();
          break;

         case RecordConfig_1.RecordNativeFunction.applyPermissionAction:
          this.applyPermissionAct();
        }
      };
      RecordEngine.prototype.readyRecord = function() {
        kit_1.kit.system.timer.doFrameOnce(2, function() {
          RecordManager_1.default.instance.readyRecordCb({
            code: 200,
            result: true
          });
        }, this);
      };
      RecordEngine.prototype.startRecord = function() {
        kit_1.kit.system.timer.doFrameOnce(2, function() {
          RecordManager_1.default.instance.startRecordCb({
            code: 200
          });
        }, this);
      };
      RecordEngine.prototype.stopRecord = function() {
        kit_1.kit.system.timer.doFrameOnce(2, function() {
          RecordManager_1.default.instance.stopRecordCb({
            code: 200,
            url: ""
          });
        }, this);
      };
      RecordEngine.prototype.envRecord = function() {
        kit_1.kit.system.timer.doOnce(2e3, function() {
          RecordManager_1.default.instance.resultCb({
            code: 200,
            score: 20
          });
        }, this);
      };
      RecordEngine.prototype.applyPermissionAct = function() {
        this.startRecord();
      };
      return RecordEngine;
    }();
    exports.default = RecordEngine;
    cc._RF.pop();
  }, {
    "../../../../../kit/kit": void 0,
    "./RecordConfig": "RecordConfig",
    "./RecordManager": "RecordManager"
  } ],
  RecordManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b23644UJkZKPp/QJr3ob6FO", "RecordManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../../kit/kit");
    var RecordConfig_1 = require("./RecordConfig");
    var RecordEngine_1 = require("./RecordEngine");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RecordManager = function() {
      function RecordManager() {
        this.PERMISSION_ALERT_CANCEL = "PermissionAlertCancel";
        this.moduleName = kit_1.kit.system.platform.isAndroid ? "cocosBrigeWrapper/RecordWrapper" : "RecordWrapper";
      }
      RecordManager_1 = RecordManager;
      Object.defineProperty(RecordManager, "instance", {
        get: function() {
          null == this._instance && (this._instance = new RecordManager_1());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      RecordManager.prototype.init = function() {
        this.listenerMap = new Map();
        kit_1.kit.system.platform.isDebug ? this.adapter = new RecordEngine_1.default() : this.adapter = kit_1.kit.system.platform.adapter;
      };
      RecordManager.prototype.readyRecord = function() {
        this.callNativeFunction(RecordConfig_1.RecordNativeFunction.readyRecordAction, "");
      };
      RecordManager.prototype.startRecord = function(parm) {
        this.callNativeFunction(RecordConfig_1.RecordNativeFunction.startRecordAction, parm);
      };
      RecordManager.prototype.stopRecord = function() {
        this.callNativeFunction(RecordConfig_1.RecordNativeFunction.stopRecordAction, "");
      };
      RecordManager.prototype.evaluatingRecord = function(parm) {
        this.callNativeFunction(RecordConfig_1.RecordNativeFunction.uploadRecordAction, parm);
      };
      RecordManager.prototype.readyRecordCb = function(parm) {
        this.sendCallBack(RecordConfig_1.RecordCallBack.ReadyRecordCb, parm);
      };
      RecordManager.prototype.startRecordCb = function(parm) {
        this.sendCallBack(RecordConfig_1.RecordCallBack.StartRecordCb, parm);
      };
      RecordManager.prototype.stopRecordCb = function(parm) {
        this.sendCallBack(RecordConfig_1.RecordCallBack.StopRecordCb, parm);
      };
      RecordManager.prototype.resultCb = function(parm) {
        this.sendCallBack(RecordConfig_1.RecordCallBack.ResultCb, parm);
      };
      RecordManager.prototype.addCallBackListener = function(option) {
        for (var _i = 0, option_1 = option; _i < option_1.length; _i++) {
          var temp = option_1[_i];
          this.listenerMap.set(temp.key, temp.callBack);
        }
      };
      RecordManager.prototype.sendCallBack = function(callBack, data) {
        var cb = this.listenerMap.get(callBack);
        cb && cb(data);
      };
      RecordManager.prototype.callNativeFunction = function(funcName, parm) {
        cc.log("\u8c03\u7528callNativeFunction " + funcName + "  " + this.moduleName);
        this.adapter.callFunction(funcName, parm, this.moduleName);
      };
      RecordManager.prototype.applyPermission = function() {
        this.callNativeFunction(RecordConfig_1.RecordNativeFunction.applyPermissionAction, "");
      };
      var RecordManager_1;
      RecordManager._instance = null;
      RecordManager = RecordManager_1 = __decorate([ ccclass ], RecordManager);
      return RecordManager;
    }();
    exports.default = RecordManager;
    cc._RF.pop();
  }, {
    "../../../../../kit/kit": void 0,
    "./RecordConfig": "RecordConfig",
    "./RecordEngine": "RecordEngine"
  } ],
  WayPoint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "585f0QeG8ZO/bOJpu5QMYUm", "WayPoint");
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
    var PointType;
    (function(PointType) {
      PointType[PointType["\u5360\u4f4d"] = 0] = "\u5360\u4f4d";
      PointType[PointType["\u8fdb\u5ea6"] = 1] = "\u8fdb\u5ea6";
    })(PointType || (PointType = {}));
    var WayPoint = function(_super) {
      __extends(WayPoint, _super);
      function WayPoint() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = 0;
        return _this;
      }
      WayPoint.prototype.start = function() {};
      WayPoint.TYPE_NODE = 0;
      WayPoint.TYPE_PROGRESS = 1;
      __decorate([ property({
        type: cc.Enum(PointType),
        displayName: "\u7c7b\u578b"
      }) ], WayPoint.prototype, "type", void 0);
      WayPoint = __decorate([ ccclass ], WayPoint);
      return WayPoint;
    }(cc.Component);
    exports.default = WayPoint;
    cc._RF.pop();
  }, {} ],
  baseComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3014aXa0o9B24bxfKVdtnJD", "baseComponent");
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
    var kit_1 = require("../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseComponent = function(_super) {
      __extends(BaseComponent, _super);
      function BaseComponent() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BaseComponent.prototype.onLoad = function() {
        this.ui = kit_1.kit.util.Ui.seekAllSubView(this.node);
        this.init();
      };
      BaseComponent.prototype.init = function(data) {};
      BaseComponent = __decorate([ ccclass ], BaseComponent);
      return BaseComponent;
    }(cc.Component);
    exports.default = BaseComponent;
    cc._RF.pop();
  }, {
    "../../kit/kit": void 0
  } ],
  chapterReward: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8b72UK7oxF6ZaUGnxdJv0Z", "chapterReward");
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
    var kit_1 = require("../../../../kit/kit");
    var lessonCompleteData_1 = require("./lessonCompleteData");
    var COMPLETE_MUSIC;
    (function(COMPLETE_MUSIC) {
      COMPLETE_MUSIC["JINGXI"] = "1jingxi";
      COMPLETE_MUSIC["OPEN_BOX"] = "2kaixiang";
      COMPLETE_MUSIC["HUANHU"] = "3huanhu";
      COMPLETE_MUSIC["CAIDAI"] = "4liuxing";
      COMPLETE_MUSIC["FUDAI"] = "5fudai";
    })(COMPLETE_MUSIC || (COMPLETE_MUSIC = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var chapterReward = function(_super) {
      __extends(chapterReward, _super);
      function chapterReward() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.boxNode = null;
        _this.icon = null;
        _this.starNode = null;
        _this.boxPre = null;
        _this.tigo = null;
        _this.bag = null;
        _this.light = null;
        _this.curChapterIndex = null;
        return _this;
      }
      chapterReward.prototype.onLoad = function() {
        var _this = this;
        this.init();
        this.scheduleOnce(function() {
          _this.startCurChapterSpine();
        }, 1);
      };
      chapterReward.prototype.init = function() {
        var _this = this;
        var boxData = lessonCompleteData_1.lessonCompleteData.instance.getAllBoxState();
        this.curChapterIndex = lessonCompleteData_1.lessonCompleteData.instance.getCurChapterIndex();
        var len = boxData.length;
        for (var i = 0; i < len; i++) {
          var node = cc.instantiate(this.boxPre);
          this.boxNode.addChild(node);
        }
        this.scheduleOnce(function() {
          _this.boxNode.getComponent(cc.Layout).enabled = false;
          _this.icon.active = false;
          var node = _this.boxNode.children[_this.curChapterIndex];
          if (node) {
            var pos = node.parent.convertToWorldSpaceAR(node.position);
            var pos1 = _this.node.convertToNodeSpaceAR(pos);
            _this.icon.x = pos1.x;
            _this.icon.y = pos1.y;
          }
        });
        this.setCurChapterIcon(this.icon);
        kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.JINGXI);
      };
      chapterReward.prototype.setCurChapterIcon = function(node) {
        var icon = lessonCompleteData_1.lessonCompleteData.instance.getCurChapterIcon();
        kit_1.kit.Loader.loadRes(icon, cc.SpriteFrame, function(err, res) {
          if (err) {
            cc.log("\u52a0\u8f7d\u5931\u8d25", err);
            return;
          }
          cc.log("\u66ff\u6362\u98de\u56fe\u6a21\u7248\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e");
          node.getComponent(cc.Sprite).spriteFrame = res;
        }, lessonCompleteData_1.BUNDLE_NAME);
      };
      chapterReward.prototype.startCurChapterSpine = function() {
        var _this = this;
        var spineNode = this.boxNode.children[this.curChapterIndex];
        kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.OPEN_BOX);
        var spine = spineNode.getChildByName("box").getComponent(sp.Skeleton);
        spine.setAnimation(0, "hezi-kai", false);
        spine.setCompleteListener(function() {
          _this.icon.active = true;
          _this.icon.scale = .4;
          _this.tigo.clearTracks();
          _this.tigo.setToSetupPose();
          _this.tigo.setAnimation(0, "daiji2", false);
          kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.HUANHU);
          cc.tween(_this.icon).parallel(cc.tween().to(1.5, {
            scale: 1
          }), cc.tween().to(1.5, {
            position: _this.light.node.position
          }), cc.tween().call(function() {
            return kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.CAIDAI);
          }), cc.tween().call(function() {
            cc.tween(_this.boxNode).to(1.5, {
              opacity: 0
            }).start();
          }).start()).call(function() {
            _this.icon.getChildByName("pairticle").active = false;
            _this.light.node.active = true;
            _this.bag.node.active = true;
            _this.bag.node.opacity = 0;
          }).delay(1.5).call(function() {
            cc.tween(_this.light.node).to(1, {
              scale: 0
            }).start();
            cc.tween(_this.bag.node).to(1, {
              opacity: 255
            }).start();
            cc.tween(_this.tigo.node).to(1, {
              opacity: 0
            }).start(), cc.tween(_this.icon).to(1, {
              scale: 0
            }).call(function() {
              var particle = _this.icon.getChildByName("pairticle");
              particle.active = true;
              particle.parent = _this.starNode;
              _this.starNode.active = true;
              kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.CAIDAI);
              cc.tween(_this.starNode).to(1.5, {
                x: _this.bag.node.x,
                y: _this.bag.node.y + 70,
                scale: 0
              }).start();
              cc.tween(_this.starNode).delay(1.3).call(function() {
                kit_1.kit.manager.Audio.playEffect(lessonCompleteData_1.BUNDLE_NAME, "" + lessonCompleteData_1.MUSIC_PATH + COMPLETE_MUSIC.FUDAI);
                particle.active = false;
                _this.bag.clearTracks();
                _this.bag.setToSetupPose();
                _this.bag.setAnimation(0, "fudai2", false);
                _this.bag.setCompleteListener(function() {
                  _this.bag.node.active = false;
                  _this.scheduleOnce(function() {
                    kit_1.kit.manager.Event.emit(lessonCompleteData_1.MESSAGE_COMPLETE);
                  }, .3);
                });
              }).start();
            }).start();
          }).start();
        });
      };
      chapterReward.prototype.start = function() {};
      __decorate([ property(cc.Node) ], chapterReward.prototype, "boxNode", void 0);
      __decorate([ property(cc.Node) ], chapterReward.prototype, "icon", void 0);
      __decorate([ property(cc.Node) ], chapterReward.prototype, "starNode", void 0);
      __decorate([ property(cc.Prefab) ], chapterReward.prototype, "boxPre", void 0);
      __decorate([ property(sp.Skeleton) ], chapterReward.prototype, "tigo", void 0);
      __decorate([ property(sp.Skeleton) ], chapterReward.prototype, "bag", void 0);
      __decorate([ property(sp.Skeleton) ], chapterReward.prototype, "light", void 0);
      chapterReward = __decorate([ ccclass ], chapterReward);
      return chapterReward;
    }(cc.Component);
    exports.default = chapterReward;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": void 0,
    "./lessonCompleteData": "lessonCompleteData"
  } ],
  commonComplete: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d89a07prNECYTwVUzXS4qv", "commonComplete");
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
    var kit_1 = require("../../../../kit/kit");
    var lessonCompleteData_1 = require("./lessonCompleteData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LessonComplete = function(_super) {
      __extends(LessonComplete, _super);
      function LessonComplete() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audio = [];
        _this.completeAnimation = null;
        _this.completeBack = null;
        _this.completeType = 1;
        _this.noCompleteType = 0;
        _this.completeAni = "Huanhu";
        _this.noCompleteAni = "Huanhu2";
        _this.rewardData = null;
        return _this;
      }
      LessonComplete.prototype.onLoad = function() {
        this.showSpine();
      };
      LessonComplete.prototype.init = function() {};
      LessonComplete.prototype.start = function() {
        this.completeAnimation.setCompleteListener(this.completeEndBack.bind(this));
      };
      LessonComplete.prototype.showSpine = function() {
        var type = lessonCompleteData_1.lessonCompleteData.instance.lessonType || 1;
        var ani_name = type == this.completeType ? this.completeAni : this.noCompleteAni;
        this.playSkeMation(ani_name);
        cc.audioEngine.play(this.audio[type], false, 1);
      };
      LessonComplete.prototype.playSkeMation = function(ani_name) {
        this.completeAnimation.clearTracks();
        this.completeAnimation.setToSetupPose();
        this.completeAnimation.setAnimation(0, ani_name, false);
      };
      LessonComplete.prototype.completeEndBack = function() {
        this.scheduleOnce(function() {
          kit_1.kit.manager.Event.emit(lessonCompleteData_1.MESSAGE_COMPLETE);
        }, .3);
      };
      LessonComplete.prototype.onEnable = function() {};
      LessonComplete.prototype.onDisable = function() {};
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], LessonComplete.prototype, "audio", void 0);
      __decorate([ property(sp.Skeleton) ], LessonComplete.prototype, "completeAnimation", void 0);
      LessonComplete = __decorate([ ccclass ], LessonComplete);
      return LessonComplete;
    }(cc.Component);
    exports.default = LessonComplete;
    cc._RF.pop();
  }, {
    "../../../../kit/kit": void 0,
    "./lessonCompleteData": "lessonCompleteData"
  } ],
  guideManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bccd9KbLfdDJJCoynpsSY0v", "guideManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../../kit/kit");
    var event_1 = require("../../../../Script/config/event");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideManager = function() {
      function GuideManager() {
        this.observer = null;
        this.guideNode = null;
        this.rootNode = null;
        this.maskNode = null;
        this.blockNode = null;
        this.btnNode = null;
      }
      GuideManager_1 = GuideManager;
      Object.defineProperty(GuideManager, "instance", {
        get: function() {
          null == this._instance && (this._instance = new GuideManager_1());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      GuideManager.prototype.init = function(guideNode, guideConfig, observer, step, isNext) {
        cc.log("\u65b0\u624b\u5f15\u5bfc\u521d\u59cb\u5316", guideConfig, step);
        this.guideNode = guideNode;
        this.rootNode = this.guideNode.getChildByName("guide_root");
        this.rootNode.active = false;
        this.maskNode = this.rootNode.getChildByName("guide_mask_root");
        this.blockNode = this.guideNode.getChildByName("block_input_node");
        this.btnNode = this.rootNode.getChildByName("btn_node");
        this.blockNode.active = false;
        this.jsonConfig = guideConfig;
        this.isInGuide = false;
        this.observer = new observer();
        this.step = step;
        if (isNext) {
          var guideData = this.jsonConfig[this.step];
          guideData && (this.step = guideData.next);
        }
      };
      GuideManager.prototype.check = function() {
        if (-1 === this.step) {
          kit_1.kit.manager.Event.emit(event_1.NOVICE_GUIDE_FINISH);
          return;
        }
        var guideData = this.jsonConfig[this.step];
        if (guideData) {
          var isContinue = this.observer.check(this.step);
          if (!isContinue) return;
          this.observer.begin(this.step);
          this.isInGuide = true;
          this.rootNode.active = true;
          this.blockNode.active = false;
          var stepNode = this.guideNode.getChildByName("step_" + guideData.step);
          this.maskNode.width = stepNode.width;
          this.maskNode.height = stepNode.height;
          this.maskNode.x = stepNode.x;
          this.maskNode.y = stepNode.y;
          var desNode = this.maskNode.getChildByName("tips_node");
          var desLabel = desNode.getChildByName("des_bg").getComponentInChildren(cc.Label);
          desLabel.string = guideData.style.des.text;
          "" == desLabel.string ? desNode.active = false : desNode.active = true;
          var desX = 0;
          var desY = 0;
          if ("top" === guideData.style.des.align) desY = this.maskNode.height / 2 + desNode.height / 2 + 100; else if ("left" === guideData.style.des.align) desX = -(this.maskNode.width / 2 + desNode.width / 2 + 100); else if ("right" === guideData.style.des.align) desX = this.maskNode.width / 2 + desNode.width / 2 + 100; else if ("bottom" === guideData.style.des.align) desY = -(this.maskNode.height / 2 + desNode.height / 2 + 100); else {
            var pos = guideData.style.des.align.split("|");
            if (2 === pos.length) {
              desX = Number(pos[0]);
              desY = Number(pos[1]);
            } else desY = -(this.maskNode.height / 2 + desNode.height / 2 + 50);
          }
          desNode.x = desX;
          desNode.y = desY;
          var hintNode = this.rootNode.getChildByName("hint_node");
          hintNode.x = stepNode.x;
          hintNode.y = stepNode.y;
          if (guideData.style.hint.offsetX || guideData.style.hint.offsetY) {
            guideData.style.hint.offsetX && (hintNode.x += guideData.style.hint.offsetX);
            guideData.style.hint.offsetY && (hintNode.y += guideData.style.hint.offsetY);
          }
          if (guideData.btnNodePosition) {
            this.btnNode.x = guideData.btnNodePosition.x;
            this.btnNode.y = guideData.btnNodePosition.y;
          }
          if (guideData.end) {
            this.btnNode.active = false;
            var right_arrow = this.rootNode.getChildByName("right_arrow");
            right_arrow.active = true;
          }
          var arrow = this.rootNode.getChildByName("arrow_node");
          if (guideData.arrow) {
            arrow.active = true;
            this.playHintSpine(false);
          } else {
            arrow.active = false;
            this.playHintSpine(true);
          }
          var woedPpos = this.rootNode.convertToWorldSpaceAR(cc.v2(0, 0));
          var zeroPos = this.maskNode.convertToNodeSpaceAR(woedPpos);
          this.maskNode.getChildByName("guide_mask").position = cc.v3(zeroPos.x, zeroPos.y);
        }
      };
      GuideManager.prototype.next = function() {
        var guideData = this.jsonConfig[this.step];
        if (guideData) {
          var nextStepId = guideData.next;
          this.step = nextStepId;
          var nextGuideData = this.jsonConfig[this.step];
          nextGuideData && true === nextGuideData.auto && this.check();
        }
        if (-1 == this.step) {
          this.observer.end(this.step);
          kit_1.kit.manager.Event.emit(event_1.NOVICE_GUIDE_FINISH);
          return;
        }
      };
      GuideManager.prototype.onClickEvent = function() {
        if (!this.isInGuide) return;
        this.rootNode.active = false;
        var guideData = this.jsonConfig[this.step];
        if (guideData) {
          this.observer.end(this.step);
          true === guideData.block ? this.blockNode.active = true : this.blockNode.active = false;
        }
        this.isInGuide = false;
        this.next();
      };
      GuideManager.prototype.playHintSpine = function(isClick) {
        var hintNode = this.rootNode.getChildByName("hint_node");
        var hintSpineNode = cc.find("hint/shou", hintNode);
        if (!hintSpineNode) {
          cc.warn("playHintSpine hintSpine not find");
          return;
        }
        var spCmpt = hintSpineNode.getComponent(sp.Skeleton);
        spCmpt.setCompleteListener(null);
        if (isClick) {
          spCmpt.setAnimation(0, "dian", true);
          return;
        }
        spCmpt.setAnimation(0, "you-zuo", false);
        spCmpt.setCompleteListener(function() {
          var animName = spCmpt.animation;
          "you-zuo" == animName ? spCmpt.setAnimation(0, "zuoyou", false) : spCmpt.setAnimation(0, "you-zuo", false);
        });
      };
      GuideManager.prototype.skip = function() {
        this.step = -1;
        this.observer.end(-1);
        this.next();
      };
      var GuideManager_1;
      GuideManager._instance = null;
      GuideManager = GuideManager_1 = __decorate([ ccclass ], GuideManager);
      return GuideManager;
    }();
    exports.default = GuideManager;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../kit/kit": void 0
  } ],
  guideObserver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7bf38xg7VFLIwf7yWn0RvP", "guideObserver");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var userDataManager_1 = require("../../../../Script/manager/userDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideObserver = function() {
      function GuideObserver() {}
      GuideObserver.prototype.check = function(stepId) {
        return true;
      };
      GuideObserver.prototype.begin = function(stepId) {};
      GuideObserver.prototype.end = function(stepId) {
        userDataManager_1.UserDataManager.instance.guideStep = stepId;
      };
      GuideObserver = __decorate([ ccclass ], GuideObserver);
      return GuideObserver;
    }();
    exports.default = GuideObserver;
    cc._RF.pop();
  }, {
    "../../../../Script/manager/userDataManager": void 0
  } ],
  lessonCompleteData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9fe9Zd5GZF1ovOHW5SFH0/", "lessonCompleteData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lessonCompleteData = exports.MUSIC_PATH = exports.BUNDLE_NAME = exports.MESSAGE_COMPLETE = void 0;
    exports.MESSAGE_COMPLETE = "message_complete";
    exports.BUNDLE_NAME = "components";
    exports.MUSIC_PATH = "lessonComplete/audio/";
    var lessonCompleteData = function() {
      function lessonCompleteData() {
        this.lessonInfo = [];
        this.curChapterId = null;
        this.lessonType = 1;
      }
      lessonCompleteData.prototype.init = function(data) {
        this.lessonInfo = data.lessonInfo.chapters;
        this.curChapterData = data.curChapterData;
        this.curChapterId = data.curChapterData.chapterId;
        this.lessonType = data.lessonType;
      };
      lessonCompleteData.prototype.getAllBoxState = function() {
        var arr = [];
        this.lessonInfo.map(function(item, index) {
          arr[index] = item.complete;
        });
        return arr;
      };
      lessonCompleteData.prototype.getCurChapterIndex = function() {
        var _this = this;
        var c_index = 0;
        this.lessonInfo.find(function(item, index) {
          item.chapterId == _this.curChapterId && (c_index = index);
        });
        return c_index;
      };
      lessonCompleteData.prototype.getCurChapterIsFirstComplete = function() {
        return this.curChapterData.isFirstComplete || false;
      };
      lessonCompleteData.prototype.getCurChapterIcon = function() {
        var icon_config = {
          3: [ "lessonComplete/res/chapter3_1", "lessonComplete/res/chapter3_2", "lessonComplete/res/chapter3_3" ],
          4: [ "lessonComplete/res/chapter4_1", "lessonComplete/res/chapter4_2", "lessonComplete/res/chapter4_3", "lessonComplete/res/chapter4_4" ]
        };
        var len = this.lessonInfo.length;
        var c_index = this.getCurChapterIndex();
        var c_data = icon_config[len];
        return c_data[c_index];
      };
      Object.defineProperty(lessonCompleteData, "instance", {
        get: function() {
          lessonCompleteData._instance || (lessonCompleteData._instance = new lessonCompleteData());
          return lessonCompleteData._instance;
        },
        enumerable: false,
        configurable: true
      });
      return lessonCompleteData;
    }();
    exports.lessonCompleteData = lessonCompleteData;
    cc._RF.pop();
  }, {} ],
  lessonComplete: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c89c1aES09PX7PPHM8SErp/", "lessonComplete");
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
    var kit_1 = require("../../../kit/kit");
    var lessonCompleteData_1 = require("./script/lessonCompleteData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var lessonComplete = function(_super) {
      __extends(lessonComplete, _super);
      function lessonComplete() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chapterRewardPre = null;
        _this.commonCompletePre = null;
        _this.completeBack = null;
        return _this;
      }
      lessonComplete.prototype.onLoad = function() {
        kit_1.kit.manager.Event.on(lessonCompleteData_1.MESSAGE_COMPLETE, this.eventCompleteBack.bind(this), this);
      };
      lessonComplete.prototype.init = function(data) {
        this.completeBack = data.callback;
        lessonCompleteData_1.lessonCompleteData.instance.init(data);
        this.refreshUI();
      };
      lessonComplete.prototype.start = function() {};
      lessonComplete.prototype.refreshUI = function() {
        var IsFirstComplete = lessonCompleteData_1.lessonCompleteData.instance.getCurChapterIsFirstComplete();
        if (IsFirstComplete) {
          var node = cc.instantiate(this.chapterRewardPre);
          this.node.addChild(node);
        } else {
          var node = cc.instantiate(this.commonCompletePre);
          this.node.addChild(node);
        }
      };
      lessonComplete.prototype.eventCompleteBack = function() {
        cc.log("completeEndBack ==");
        this.completeBack && this.completeBack();
        this.node.removeFromParent();
      };
      lessonComplete.prototype.onDisable = function() {
        kit_1.kit.manager.Event.off(lessonCompleteData_1.MESSAGE_COMPLETE, this.eventCompleteBack.bind(this), this);
      };
      __decorate([ property(cc.Prefab) ], lessonComplete.prototype, "chapterRewardPre", void 0);
      __decorate([ property(cc.Prefab) ], lessonComplete.prototype, "commonCompletePre", void 0);
      lessonComplete = __decorate([ ccclass ], lessonComplete);
      return lessonComplete;
    }(cc.Component);
    exports.default = lessonComplete;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0,
    "./script/lessonCompleteData": "lessonCompleteData"
  } ],
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8407czC/odIkqkkYHzRtBuv", "loading");
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
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingAnimation = null;
        return _this;
      }
      Loading.prototype.onLoad = function() {};
      Loading.prototype.onDestroy = function() {};
      Loading.prototype.showAnimation = function() {};
      __decorate([ property(sp.Skeleton) ], Loading.prototype, "loadingAnimation", void 0);
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {} ],
  noviceGuide: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52a72G3vjVOk41WCJ3HrJF1", "noviceGuide");
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
    var kit_1 = require("../../../../kit/kit");
    var event_1 = require("../../../../Script/config/event");
    var userDataManager_1 = require("../../../../Script/manager/userDataManager");
    var baseComponent_1 = require("../../baseComponent");
    var guideManager_1 = require("./guideManager");
    var guideObserver_1 = require("./guideObserver");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NoviceGuide = function(_super) {
      __extends(NoviceGuide, _super);
      function NoviceGuide() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.guideConfig = null;
        return _this;
      }
      NoviceGuide.prototype.init = function(data) {
        var _this = this;
        kit_1.kit.manager.Event.on(event_1.NOVICE_GUIDE_ENTER, this.enterGuide, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
        kit_1.kit.system.timer.doFrameOnce(2, function() {
          _this.enterGuide();
        });
      };
      NoviceGuide.prototype.enterGuide = function() {
        var step = 1e3;
        var next = false;
        if (0 != userDataManager_1.UserDataManager.instance.guideStep) {
          step = userDataManager_1.UserDataManager.instance.guideStep;
          next = true;
        }
        guideManager_1.default.instance.init(this.node, this.guideConfig.json, guideObserver_1.default, step, next);
        guideManager_1.default.instance.check();
      };
      NoviceGuide.prototype.onClick = function() {
        guideManager_1.default.instance.onClickEvent();
      };
      NoviceGuide.prototype.onClickSkip = function() {
        guideManager_1.default.instance.skip();
      };
      NoviceGuide.prototype.onDestroy = function() {
        kit_1.kit.manager.Event.off(event_1.NOVICE_GUIDE_ENTER, this.enterGuide, this);
      };
      __decorate([ property(cc.JsonAsset) ], NoviceGuide.prototype, "guideConfig", void 0);
      NoviceGuide = __decorate([ ccclass ], NoviceGuide);
      return NoviceGuide;
    }(baseComponent_1.default);
    exports.default = NoviceGuide;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/userDataManager": void 0,
    "../../../../kit/kit": void 0,
    "../../baseComponent": "baseComponent",
    "./guideManager": "guideManager",
    "./guideObserver": "guideObserver"
  } ],
  quitLessonAlert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02212Fw7KZJuqfbDIX6+4nB", "quitLessonAlert");
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
    var kit_1 = require("../../../kit/kit");
    var event_1 = require("../../../Script/config/event");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuitLessonAlert = function(_super) {
      __extends(QuitLessonAlert, _super);
      function QuitLessonAlert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      QuitLessonAlert.prototype.onLoad = function() {};
      QuitLessonAlert.prototype.init = function(data) {};
      QuitLessonAlert.prototype.onClickClose = function() {
        this.hide();
        kit_1.kit.manager.Audio.stopEffect();
        kit_1.kit.manager.Audio.stopMusic();
        kit_1.kit.manager.Event.emit(event_1.BACK);
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_UNBLOCK);
      };
      QuitLessonAlert.prototype.onClickOk = function() {
        this.hide();
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_UNBLOCK);
      };
      __decorate([ property(cc.Label) ], QuitLessonAlert.prototype, "label", void 0);
      QuitLessonAlert = __decorate([ ccclass ], QuitLessonAlert);
      return QuitLessonAlert;
    }(kit_1.kit.manager.Popup.Base);
    exports.default = QuitLessonAlert;
    cc._RF.pop();
  }, {
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0
  } ],
  topBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d8f3POtw5AxbyKNdI6Btam", "topBar");
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
    var event_1 = require("../../../Script/config/event");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TopBar = function(_super) {
      __extends(TopBar, _super);
      function TopBar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nextBtnNode = null;
        return _this;
      }
      TopBar.prototype.init = function(data) {
        var isShowNext = true;
        void 0 !== data && (isShowNext = !!data.isShowNext);
        this.nextBtnNode.active = isShowNext;
      };
      TopBar.prototype.onBack = function() {
        kit_1.kit.manager.Event.emit(event_1.POPUP_QUIT_LESSON_ALERT);
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_BLOCK);
      };
      TopBar.prototype.onNext = function() {
        kit_1.kit.manager.Event.emit(event_1.NEXT_LESSON);
      };
      __decorate([ property(cc.Node) ], TopBar.prototype, "nextBtnNode", void 0);
      TopBar = __decorate([ ccclass ], TopBar);
      return TopBar;
    }(cc.Component);
    exports.default = TopBar;
    cc._RF.pop();
  }, {
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0
  } ],
  videoInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd678qgRGBP/6NapOYQP2SN", "videoInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../kit/kit");
    var VideoInterface = function() {
      function VideoInterface() {}
      VideoInterface.playVideo = function(url) {
        if (kit_1.kit.system.platform.isNative) {
          cc.Camera.main.backgroundColor = cc.color(0, 0, 0, 0);
          kit_1.kit.system.platform.isAndroid ? kit_1.kit.system.platform.adapter.callFunction("play", url, VideoInterface.className) : kit_1.kit.system.platform.isIOS && jsb.reflection.callStaticMethod(VideoInterface.className, "play:", url);
        } else cc.log("only support native platform!");
      };
      VideoInterface.pauseVideo = function() {
        kit_1.kit.system.platform.isNative ? kit_1.kit.system.platform.isAndroid ? kit_1.kit.system.platform.adapter.callFunction("pauseVideo", "", VideoInterface.className) : kit_1.kit.system.platform.isIOS && jsb.reflection.callStaticMethod(VideoInterface.className, "pauseVideo") : cc.log("only surport native platform!");
      };
      VideoInterface.resumeVideo = function() {
        kit_1.kit.system.platform.isNative ? kit_1.kit.system.platform.isAndroid ? kit_1.kit.system.platform.adapter.callFunction("resumeVideo", "", VideoInterface.className) : kit_1.kit.system.platform.isIOS && jsb.reflection.callStaticMethod(VideoInterface.className, "resumeVideo") : cc.log("only support native platform!");
      };
      VideoInterface.seekToVideo = function(time) {
        if (kit_1.kit.system.platform.isNative) {
          kit_1.kit.system.platform.isAndroid || kit_1.kit.system.platform.isIOS;
          cc.log("TODO:");
        } else cc.log("only support native platform!");
      };
      VideoInterface.updateVideoStatus = function(paramObj) {
        cc.log(JSON.stringify(paramObj));
        var param = JSON.parse(paramObj.param);
        cc.log("====>>updateVideoStatus: " + paramObj + "  curT: " + param.curT + " totalT: " + param.totalT + " per: " + param.per);
        var params = {
          type: kit_1.kit.video.videoTransType.C2M_UPDATE_PLAY_STATUS,
          updateParams: {
            curT: param.curT,
            totalT: param.totalT,
            per: param.per
          }
        };
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.events.VIDEO_CLIENT_TO_MODULE, params);
      };
      VideoInterface.videoPlayStart = function(paramObj) {
        var param = JSON.parse(paramObj.param);
        cc.log("====>>videoPlayEnd: " + paramObj + "  videoUrl: " + param.videoUrl);
        var params = {
          type: kit_1.kit.video.videoTransType.C2M_VIDEO_PLAY_START,
          completeParams: {
            videoUrl: param.videoUrl
          }
        };
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.events.VIDEO_CLIENT_TO_MODULE, params);
      };
      VideoInterface.videoPlayEnd = function(paramObj) {
        var param = JSON.parse(paramObj.param);
        cc.log("====>>videoPlayEnd: " + paramObj + "  videoUrl: " + param.videoUrl);
        var params = {
          type: kit_1.kit.video.videoTransType.C2M_VIDEO_PLAY_COMPLETE,
          completeParams: {
            videoUrl: param.videoUrl
          }
        };
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.events.VIDEO_CLIENT_TO_MODULE, params);
        kit_1.kit.system.timer.doOnce(100, function() {
          cc.Camera.main.backgroundColor = cc.color(0, 0, 0, 255);
        });
      };
      VideoInterface.VideoListener = function(msg) {
        cc.log("VideoListener \u6536\u5230\u4fe1\u606f", JSON.stringify(msg));
        switch (msg.mathName) {
         case VideoReturnStatus.VideoStart:
          VideoInterface.videoPlayStart(msg);
          break;

         case VideoReturnStatus.VideoEnd:
          VideoInterface.videoPlayEnd(msg);
          break;

         case VideoReturnStatus.VideoStatusUpdate:
          VideoInterface.updateVideoStatus(msg);
        }
      };
      VideoInterface.handleEvent = function(_data) {
        var data = _data.data;
        cc.log(" =====>>>>data: ", data);
        switch (data.type) {
         case kit_1.kit.video.videoTransType.M2C_VIDEO_INIT:
         case kit_1.kit.video.videoTransType.M2C_VIDEO_DESTROY:
          break;

         case kit_1.kit.video.videoTransType.M2C_VIDEO_PLAY_START:
          VideoInterface.playVideo(data.playParams.videoUrl);
          break;

         case kit_1.kit.video.videoTransType.M2C_VIDEO_PLAY_PAUSE:
          VideoInterface.pauseVideo();
          break;

         case kit_1.kit.video.videoTransType.M2C_VIDEO_PLAY_RESUME:
          VideoInterface.resumeVideo();
          break;

         case kit_1.kit.video.videoTransType.M2C_VIDEO_PLAY_SEEKTO:
          VideoInterface.seekToVideo(data.seekToParams.seekToT);
        }
      };
      VideoInterface.className = kit_1.kit.system.platform.isAndroid ? "videoView/VideoViewInterface" : kit_1.kit.system.platform.isIOS && "AVPlayerInterface";
      return VideoInterface;
    }();
    exports.default = VideoInterface;
    var VideoReturnStatus;
    (function(VideoReturnStatus) {
      VideoReturnStatus["VideoStart"] = "VideoStart";
      VideoReturnStatus["VideoEnd"] = "VideoEnd";
      VideoReturnStatus["VideoStatusUpdate"] = "VideoStatusUpdate";
    })(VideoReturnStatus || (VideoReturnStatus = {}));
    (function registEvent() {
      kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.VIDEO_MODULE_TO_CLIENT, VideoInterface.handleEvent);
    })();
    window.VideoProxyListen = VideoInterface.VideoListener;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0
  } ],
  videoTestInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bb4cWWV9ZEuob/fkV9uaut", "videoTestInterface");
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
    var videoInterface_1 = require("./videoInterface");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var videoTestInterface = function(_super) {
      __extends(videoTestInterface, _super);
      function videoTestInterface() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.videoPlayer = null;
        return _this;
      }
      videoTestInterface.prototype.onLoad = function() {
        this.videoPlayer = this.node.getChildByName("VideoPlayer").getComponent(cc.VideoPlayer);
      };
      videoTestInterface.prototype.onClick1 = function() {
        var url = "https://stage.cdn.lingoace.com/english/20210803/W5_3_conversation.mp4";
        console.log("onClick1");
        this.node.parent.getChildByName("bg").active = false;
        videoInterface_1.default.playVideo(url);
      };
      videoTestInterface.prototype.onClick2 = function() {
        console.log("onClick2");
        videoInterface_1.default.pauseVideo();
      };
      videoTestInterface.prototype.onClick3 = function() {
        console.log("onClick3");
        videoInterface_1.default.resumeVideo();
      };
      videoTestInterface.prototype.onClick4 = function() {
        var url = "https://cdn.lingoace.com/english/20210812/W5L4_video.mp4";
        console.log("onClick4");
        videoInterface_1.default.playVideo(url);
      };
      videoTestInterface.prototype.onClick5 = function() {
        this.node.parent.getChildByName("bg_img").active = false;
        this.videoPlayer.play();
      };
      __decorate([ property(cc.Label) ], videoTestInterface.prototype, "label", void 0);
      __decorate([ property ], videoTestInterface.prototype, "text", void 0);
      videoTestInterface = __decorate([ ccclass ], videoTestInterface);
      return videoTestInterface;
    }(cc.Component);
    exports.default = videoTestInterface;
    cc._RF.pop();
  }, {
    "./videoInterface": "videoInterface"
  } ]
}, {}, [ "IComponent", "baseComponent", "FollowReadQuestion", "PermissAlert", "RecordAin", "RecordComponent", "RecordConfig", "RecordCore", "RecordEngine", "RecordManager", "GuildHand", "lessonComplete", "chapterReward", "commonComplete", "lessonCompleteData", "loading", "ChapterConfig", "LoadingLesson", "WayPoint", "IGuideObserver", "guideManager", "guideObserver", "noviceGuide", "quitLessonAlert", "topBar", "videoInterface", "videoTestInterface" ]);