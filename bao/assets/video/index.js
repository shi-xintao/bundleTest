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
  videoCr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9468vmiftPprCBCCYXY4dd", "videoCr");
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
    var videoCr = function(_super) {
      __extends(videoCr, _super);
      function videoCr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.time = 3;
        return _this;
      }
      videoCr.prototype.start = function() {
        var _this = this;
        this.node.on("touchend", this.showControl, this);
        this.scheduleOnce(function() {
          return _this.showControl();
        }, this.time);
      };
      videoCr.prototype.onEnable = function() {};
      videoCr.prototype.showControl = function() {
        var _this = this;
        this.content.active = !this.content.active;
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function() {
          return _this.hide();
        }, this.time);
      };
      videoCr.prototype.hide = function() {
        this.content.active && (this.content.active = false);
      };
      videoCr.prototype.show = function() {
        var _this = this;
        this.content.active = true;
        this.unscheduleAllCallbacks();
        console.log("\u91cd\u65b0\u8ba1\u65f6========");
        this.scheduleOnce(function() {
          return _this.hide();
        }, this.time);
      };
      videoCr.prototype.schHide = function() {
        var _this = this;
        this.scheduleOnce(function() {
          return _this.hide();
        }, this.time);
      };
      __decorate([ property(cc.Node) ], videoCr.prototype, "content", void 0);
      videoCr = __decorate([ ccclass ], videoCr);
      return videoCr;
    }(cc.Component);
    exports.default = videoCr;
    cc._RF.pop();
  }, {} ],
  videoPlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "750d0LMo3VLmpqvyHoP0WsR", "videoPlayerMgr");
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
    var events_1 = require("../../kit/events/events");
    var kit_1 = require("../../kit/kit");
    var ClientModuleEnum_1 = require("../../kit/structure/ClientModuleEnum");
    var ClientTipsEnum_1 = require("../../kit/structure/ClientTipsEnum");
    var EventSystem_1 = require("../../kit/system/event/EventSystem");
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VideoPlayerMgr = function(_super) {
      __extends(VideoPlayerMgr, _super);
      function VideoPlayerMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.video = null;
        _this.progress = null;
        _this.videoControl = null;
        _this.slider = null;
        _this.curTime = null;
        _this.maxTime = null;
        _this.pauseBtn = null;
        _this.resumeBtn = null;
        _this.handelBtn = null;
        _this.isReady = false;
        _this.progressMax = 0;
        return _this;
      }
      VideoPlayerMgr.prototype.onLoad = function() {
        this.regisEvent();
        this.videoControl.active = false;
        this.progress.getComponent(cc.ProgressBar).progress = 0;
      };
      VideoPlayerMgr.prototype.checkNetWorkStatus = function() {
        var _this = this;
        var tips_type = "";
        var net_work = kit_1.kit.model.nativeInfo.getNetworkStatus();
        if (net_work === kit_1.kit.model.netWork.networkType.NETWORK_NO) tips_type = ClientTipsEnum_1.TIPS_TYPE.NO_NETWORK; else {
          if (net_work == kit_1.kit.model.netWork.networkType.NETWORK_WIFI) return;
          tips_type = ClientTipsEnum_1.TIPS_TYPE.NOT_WIFI;
        }
        this.video.pause();
        var params = {
          tipsType: tips_type,
          confirmCallback: function() {
            _this.video.play();
          },
          cancelCallback: function() {
            kit_1.kit.manager.Event.emit("back");
          }
        };
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.SHOW_COMMON_TIPS_POP, params);
      };
      VideoPlayerMgr.prototype.loadVideo = function(event) {
        this.video.remoteURL = event.data.url;
      };
      VideoPlayerMgr.prototype.start = function() {};
      VideoPlayerMgr.prototype.regisEvent = function() {
        this.video.node.on("ready-to-play", this.videoReady, this);
        this.video.node.on("meta-loaded", this.videoLoaded, this);
        this.video.node.on("playing", this.videoPlaying, this);
        this.video.node.on("paused", this.videoPaused, this);
        this.video.node.on("completed", this.videoCompleted, this);
        this.slider.node.on("slide", this.changeProgress, this);
        this.slider.node.on("touchend", this.slideClickEnd, this);
        this.handelBtn.on("touchstart", this.handelBtn_start, this);
        this.handelBtn.on("touchend", this.handelBtn_end, this);
        this.handelBtn.on("touchcancel", this.handelBtn_cancel, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.videoPause, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_PARAMS, this.loadVideo, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.videoResume, this);
      };
      VideoPlayerMgr.prototype.videoReady = function() {
        cc.log("videoReady===");
        this.progress.getComponent(cc.ProgressBar).progress = 0;
        this.video.play();
        this.isReady = true;
        this.videoControl.active = true;
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_READY);
        this.videoControl.getComponent("videoCr").show();
        this.checkNetWorkStatus();
      };
      VideoPlayerMgr.prototype.setProgress = function() {
        this.video.currentTime += .01;
        this.slider.progress = this.video.currentTime / this.progressMax;
        this.progress.getComponent(cc.ProgressBar).progress = this.slider.progress;
        this.curTime.string = this.secondToDate(this.video.currentTime);
      };
      VideoPlayerMgr.prototype.videoLoaded = function() {
        this.progressMax = this.video.getDuration();
        cc.log("video time ==== " + this.video.getDuration());
        0 == this.progressMax && (this.progressMax = .1);
        this.maxTime.string = "/" + this.secondToDate(this.progressMax);
      };
      VideoPlayerMgr.prototype.videoPlaying = function() {};
      VideoPlayerMgr.prototype.slideClickEnd = function() {
        this.videoControl.getComponent("videoCr").show();
      };
      VideoPlayerMgr.prototype.videoPaused = function() {};
      VideoPlayerMgr.prototype.videoCompleted = function() {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
      };
      VideoPlayerMgr.prototype.videoPause = function(event, choose) {
        this.video.pause();
        this.pauseBtn.active = false;
        this.resumeBtn.active = true;
        EventSystem_1.default.emit(events_1.default.VIDEO_MODULE_TO_CLIENT, {
          type: ClientModuleEnum_1.VideoEventTransType.M2C_VIDEO_PLAY_PAUSE
        });
        cc.log(events_1.default.VIDEO_MODULE_TO_CLIENT + ", type:" + ClientModuleEnum_1.VideoEventTransType.M2C_VIDEO_PLAY_PAUSE);
      };
      VideoPlayerMgr.prototype.videoResume = function(event, choose) {
        this.video.play();
        this.pauseBtn.active = true;
        this.resumeBtn.active = false;
        EventSystem_1.default.emit(events_1.default.VIDEO_MODULE_TO_CLIENT, {
          type: ClientModuleEnum_1.VideoEventTransType.M2C_VIDEO_PLAY_RESUME
        });
        cc.log(events_1.default.VIDEO_MODULE_TO_CLIENT + ", type:" + ClientModuleEnum_1.VideoEventTransType.M2C_VIDEO_PLAY_RESUME);
      };
      VideoPlayerMgr.prototype.secondToDate = function(result) {
        var m = Math.floor(result / 60 % 60) < 10 ? "0" + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);
        var s = Math.floor(result % 60) < 10 ? "0" + Math.floor(result % 60) : Math.floor(result % 60);
        return m + ":" + s;
      };
      VideoPlayerMgr.prototype.handelBtn_start = function() {
        this.videoControl.getComponent("videoCr").show();
      };
      VideoPlayerMgr.prototype.handelBtn_end = function() {
        this.videoControl.getComponent("videoCr").schHide();
      };
      VideoPlayerMgr.prototype.handelBtn_cancel = function() {
        this.videoControl.getComponent("videoCr").schHide();
      };
      VideoPlayerMgr.prototype.update = function(dt) {
        if (this.isReady && !Number.isNaN(this.video.currentTime)) {
          this.slider.progress = this.video.currentTime / this.progressMax;
          this.progress.getComponent(cc.ProgressBar).progress = this.slider.progress;
          this.curTime.string = this.secondToDate(this.video.currentTime);
        }
      };
      VideoPlayerMgr.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.LIFE_CYCLE_BLOCK, this.videoPause, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_PARAMS, this.loadVideo, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_UNBLOCK, this.videoResume, this);
        if (this.video.node && cc.isValid(this.video.node)) {
          this.video.node.off("ready-to-play", this.videoReady, this);
          this.video.node.off("meta-loaded", this.videoLoaded, this);
          this.video.node.off("playing", this.videoPlaying, this);
          this.video.node.off("paused", this.videoPaused, this);
          this.video.node.off("completed", this.videoCompleted, this);
          this.slider.node.off("touchend", this.slideClickEnd, this);
          this.handelBtn.off("touchstart", this.handelBtn_start, this);
          this.handelBtn.off("touchend", this.handelBtn_end, this);
          this.handelBtn.off("touchcancel", this.handelBtn_cancel, this);
        }
      };
      VideoPlayerMgr.prototype.changeProgress = function() {
        this.progress.getComponent(cc.ProgressBar).progress = this.slider.progress;
        this.video.currentTime = this.slider.progress * this.progressMax;
      };
      __decorate([ property(cc.VideoPlayer) ], VideoPlayerMgr.prototype, "video", void 0);
      __decorate([ property(cc.Node) ], VideoPlayerMgr.prototype, "progress", void 0);
      __decorate([ property(cc.Node) ], VideoPlayerMgr.prototype, "videoControl", void 0);
      __decorate([ property(cc.Slider) ], VideoPlayerMgr.prototype, "slider", void 0);
      __decorate([ property(cc.Label) ], VideoPlayerMgr.prototype, "curTime", void 0);
      __decorate([ property(cc.Label) ], VideoPlayerMgr.prototype, "maxTime", void 0);
      __decorate([ property(cc.Node) ], VideoPlayerMgr.prototype, "pauseBtn", void 0);
      __decorate([ property(cc.Node) ], VideoPlayerMgr.prototype, "resumeBtn", void 0);
      __decorate([ property(cc.Node) ], VideoPlayerMgr.prototype, "handelBtn", void 0);
      VideoPlayerMgr = __decorate([ ccclass ], VideoPlayerMgr);
      return VideoPlayerMgr;
    }(cc.Component);
    exports.default = VideoPlayerMgr;
    cc._RF.pop();
  }, {
    "../../kit/events/events": void 0,
    "../../kit/kit": void 0,
    "../../kit/structure/ClientModuleEnum": void 0,
    "../../kit/structure/ClientTipsEnum": void 0,
    "../../kit/system/event/EventSystem": void 0
  } ]
}, {}, [ "videoCr", "videoPlayerMgr" ]);
//# sourceMappingURL=index.js.map
