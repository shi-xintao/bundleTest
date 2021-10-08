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
  ASystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83181PcehlN3Lkdonoie2YE", "ASystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ASystem = function() {
      function ASystem() {}
      return ASystem;
    }();
    exports.default = ASystem;
    cc._RF.pop();
  }, {} ],
  AndroidAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a5b4XI4l9LHYP8ZFqPvpcJ", "AndroidAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AndroidAdapter = function() {
      function AndroidAdapter() {
        this.packageName = "org/cocos2dx/javascript/";
        this.isPrintLog = true;
      }
      AndroidAdapter.prototype.onGameExit = function() {};
      AndroidAdapter.prototype.onGameReady = function() {
        this.callFunction("hideSplash", "", "NativeInterface");
        cc.log("getWritablePath():" + jsb.fileUtils.getWritablePath());
      };
      AndroidAdapter.prototype.toast = function(message) {
        this.callFunction("toast", message, "NativeInterface");
      };
      AndroidAdapter.prototype.callFunction = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath += moduleName);
        jsb.reflection.callStaticMethod(packagePath, funcName, "(Ljava/lang/String;)V", parm);
      };
      return AndroidAdapter;
    }();
    exports.default = AndroidAdapter;
    cc._RF.pop();
  }, {} ],
  AtlasLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67447oZkbpB8JftK89SZy+K", "AtlasLoader");
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
    exports.AtlasLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var AtlasLoader = function(_super) {
      __extends(AtlasLoader, _super);
      function AtlasLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AtlasLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      AtlasLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AtlasLoader loadRemoteRes method not implemented.");
      };
      AtlasLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return AtlasLoader;
    }(BaseLoader_1.default);
    exports.AtlasLoader = AtlasLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  AudioLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "260b0c11AZDD5UM8P31pBmD", "AudioLoader");
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
    exports.AudioLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var AudioLoader = function(_super) {
      __extends(AudioLoader, _super);
      function AudioLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AudioLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      AudioLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AudioLoader loadRemoteRes method not implemented.");
      };
      AudioLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return AudioLoader;
    }(BaseLoader_1.default);
    exports.AudioLoader = AudioLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bff1fFLX3BIxrbKnejMeWrX", "AudioManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var audioUtil_1 = require("../../utils/audioUtil");
    var AudioManager = function() {
      function AudioManager() {}
      AudioManager.init = function() {
        var effectSwitch = "false" === cc.sys.localStorage.getItem(AudioManager.EFFECT_TAG);
        var musicSwitch = "false" === cc.sys.localStorage.getItem(AudioManager.MUSIC_TAG);
        AudioManager._effectFlag = !effectSwitch;
        AudioManager._musicFlag = !musicSwitch;
        this.setEffectStatus(AudioManager._effectFlag);
        this.setMusicStatus(AudioManager._musicFlag);
      };
      AudioManager.playEffect = function(bundleName, name, finishCb) {
        if (!bundleName || "" === bundleName) return;
        AudioManager._effectFlag && audioUtil_1.default.playEffect(bundleName, name, finishCb);
      };
      AudioManager.stopEffect = function() {
        audioUtil_1.default.stopEffect();
      };
      AudioManager.playLoopEffect = function(bundleName, name) {
        AudioManager._effectFlag && audioUtil_1.default.playLoopEffect(bundleName, name);
      };
      AudioManager.stopLoopEffect = function(bundleName, name) {
        audioUtil_1.default.stopLoopEffect(bundleName, name);
      };
      AudioManager.pauseLoopEffects = function() {
        audioUtil_1.default.pauseLoopEffects();
      };
      AudioManager.resumeLoopEffects = function() {
        AudioManager._effectFlag && audioUtil_1.default.resumeLoopEffects();
      };
      AudioManager.playMusic = function(bundleName, name) {
        if (!bundleName || "" === bundleName) return;
        AudioManager._curMusic = name;
        AudioManager._curBundle = bundleName;
        AudioManager._musicFlag && audioUtil_1.default.playMusic(bundleName, name);
      };
      AudioManager.stopMusic = function() {
        audioUtil_1.default.stopMusic();
      };
      AudioManager.passMusic = function() {
        audioUtil_1.default.passMusic();
      };
      AudioManager.resumeMusic = function() {
        audioUtil_1.default.resumeMusic();
      };
      AudioManager.setMusicStatus = function(flag) {
        AudioManager._musicFlag = flag;
        cc.sys.localStorage.setItem(AudioManager.MUSIC_TAG, flag);
        flag ? AudioManager.playMusic(AudioManager._curBundle, AudioManager._curMusic) : AudioManager.stopMusic();
      };
      AudioManager.setEffectStatus = function(flag) {
        AudioManager._effectFlag = flag;
        cc.sys.localStorage.setItem(AudioManager.EFFECT_TAG, flag);
        cc.log("AudioManager.setEffectStatus.flag" + flag);
        flag ? this.resumeLoopEffects() : this.pauseLoopEffects();
      };
      Object.defineProperty(AudioManager, "effectFlag", {
        get: function() {
          return AudioManager._effectFlag;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AudioManager, "musicFlag", {
        get: function() {
          return AudioManager._musicFlag;
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.EFFECT_TAG = "ChineseAi_EFFECT_TAG";
      AudioManager.MUSIC_TAG = "ChineseAi_MUSIC_TAG";
      AudioManager._effectFlag = true;
      AudioManager._musicFlag = true;
      AudioManager._curMusic = "";
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "../../utils/audioUtil": "audioUtil"
  } ],
  BackGroundMusicState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c699d1I55lFAZCcVqGcvvWo", "BackGroundMusicState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../config/config");
    var event_1 = require("../../config/event");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BackGroundMusicState = function() {
      function BackGroundMusicState() {
        this.bgPath = config_1.BUNDLE_COMMON_RESOURCES + "/sound/backgroundmusic2";
        this.isPlaying = false;
      }
      BackGroundMusicState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      BackGroundMusicState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_1.STOP_BACKGROUND_MUSIC, _this.stopBg, _this);
          kit_1.kit.manager.Event.on(event_1.PLAY_BACKGROUND_MUSIC, _this.playBg, _this);
          res();
        });
      };
      BackGroundMusicState.prototype.execute = function(data) {};
      BackGroundMusicState.prototype.exit = function(data) {
        this.stopBg();
        kit_1.kit.manager.Event.off(event_1.STOP_BACKGROUND_MUSIC, this.stopBg, this);
        kit_1.kit.manager.Event.off(event_1.PLAY_BACKGROUND_MUSIC, this.playBg, this);
      };
      BackGroundMusicState.prototype.playBg = function() {
        if (this.isPlaying) return;
        var bundle = cc.assetManager.getBundle(config_1.BUNDLE_COMPONENTS);
        !bundle;
        kit_1.kit.manager.Audio.playMusic(config_1.BUNDLE_COMPONENTS, this.bgPath);
        this.isPlaying = true;
      };
      BackGroundMusicState.prototype.stopBg = function() {
        this.isPlaying = false;
        kit_1.kit.manager.Audio.stopMusic();
      };
      BackGroundMusicState = __decorate([ ccclass ], BackGroundMusicState);
      return BackGroundMusicState;
    }();
    exports.default = BackGroundMusicState;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "../../config/config": "config",
    "../../config/event": "event"
  } ],
  BaseLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e03b3csSotFIIMkziwoBVvV", "BaseLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseLoader = function() {
      function BaseLoader() {}
      BaseLoader.prototype.loadRes = function(path, options, onComplete, bundle, onProgress) {
        this.isNetRes(path) ? this.loadNetRes(path, options, onComplete) : this.isRemoteRes(path) ? this.loadRemoteRes(path, options, onComplete) : this.loadLocalRes(path, options, onProgress, onComplete, bundle);
      };
      BaseLoader.prototype.isRemoteRes = function(path) {
        return false;
      };
      BaseLoader.prototype.isNetRes = function(path) {
        if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("zybhost://")) return true;
        return false;
      };
      return BaseLoader;
    }();
    exports.default = BaseLoader;
    cc._RF.pop();
  }, {} ],
  BaseUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b26930jq9NOErqS1/CtO+mr", "BaseUI");
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
    var BaseUI = function(_super) {
      __extends(BaseUI, _super);
      function BaseUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BaseUI.prototype.setParams = function(params) {};
      return BaseUI;
    }(cc.Component);
    exports.default = BaseUI;
    cc._RF.pop();
  }, {} ],
  ClickCmpt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4009206R4ZGvK7Imzc2YsFi", "ClickCmpt");
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
    var ResLoader_1 = require("../framework/load/ResLoader");
    var AudioManager_1 = require("../system/audio/AudioManager");
    var LogSystem_1 = require("../system/log/LogSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ClickCmpt = function(_super) {
      __extends(ClickCmpt, _super);
      function ClickCmpt() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clickSound = "commonRes/sound/btn_click";
        _this.bundleName = "components";
        _this.clickAudioEffect = true;
        _this.clickEvents = [];
        return _this;
      }
      ClickCmpt.prototype.onLoad = function() {
        this.clickEvents.length > 0 && this.onCilckEventHandler();
      };
      ClickCmpt.prototype.onCilckEventHandler = function() {
        var _this = this;
        this.clickEvents.forEach(function(item) {
          var targeNode = item.target;
          var tempCmpt = targeNode.getComponent(item["_componentName"]);
          _this.onClick(targeNode, tempCmpt[item.handler], tempCmpt, item.customEventData, _this.clickAudioEffect);
        });
      };
      ClickCmpt.prototype.onClick = function(node, handler, target, param, clickEffect, sound, bundleName) {
        var _this = this;
        if (!node) {
          LogSystem_1.default.warn("onClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        node.on(cc.Node.EventType.TOUCH_START, function(event) {
          var soundName = sound || _this.clickSound;
          var bundle = bundleName || _this.bundleName;
          clickEffect && AudioManager_1.default.playEffect(bundle, soundName);
          handler && handler.call(target, param);
        }, target);
      };
      ClickCmpt.prototype.offClick = function(node) {
        if (!node) {
          LogSystem_1.default.warn("offClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        node.off(cc.Node.EventType.TOUCH_START);
      };
      ClickCmpt.prototype.preloadClickEffect = function() {
        ResLoader_1.default.loadRes(this.clickSound, cc.AudioClip, function() {}, this.bundleName);
      };
      __decorate([ property(cc.String) ], ClickCmpt.prototype, "clickSound", void 0);
      __decorate([ property(cc.String) ], ClickCmpt.prototype, "bundleName", void 0);
      __decorate([ property({
        tooltip: "\u542f\u7528\u70b9\u51fb\u53cd\u9988"
      }) ], ClickCmpt.prototype, "clickAudioEffect", void 0);
      __decorate([ property({
        type: [ cc.Component.EventHandler ],
        tooltip: "\u70b9\u51fb\u4e8b\u4ef6\u5217\u8868"
      }) ], ClickCmpt.prototype, "clickEvents", void 0);
      ClickCmpt = __decorate([ ccclass ], ClickCmpt);
      return ClickCmpt;
    }(cc.Component);
    exports.default = ClickCmpt;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../system/audio/AudioManager": "AudioManager",
    "../system/log/LogSystem": "LogSystem"
  } ],
  ClientModuleEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69d1a8YbUVOpKM8/KTGeofy", "ClientModuleEnum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VideoEventTransType = void 0;
    var VideoEventTransType;
    (function(VideoEventTransType) {
      VideoEventTransType[VideoEventTransType["C2M_VIDEO_PLAY_START"] = 0] = "C2M_VIDEO_PLAY_START";
      VideoEventTransType[VideoEventTransType["C2M_UPDATE_PLAY_STATUS"] = 1] = "C2M_UPDATE_PLAY_STATUS";
      VideoEventTransType[VideoEventTransType["C2M_VIDEO_PLAY_COMPLETE"] = 2] = "C2M_VIDEO_PLAY_COMPLETE";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_START"] = 3] = "M2C_VIDEO_PLAY_START";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_PAUSE"] = 4] = "M2C_VIDEO_PLAY_PAUSE";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_RESUME"] = 5] = "M2C_VIDEO_PLAY_RESUME";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_PLAY_SEEKTO"] = 6] = "M2C_VIDEO_PLAY_SEEKTO";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_INIT"] = 7] = "M2C_VIDEO_INIT";
      VideoEventTransType[VideoEventTransType["M2C_VIDEO_DESTROY"] = 8] = "M2C_VIDEO_DESTROY";
    })(VideoEventTransType = exports.VideoEventTransType || (exports.VideoEventTransType = {}));
    cc._RF.pop();
  }, {} ],
  ClientModuleInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "612d0sEQsVKmIcZib6VJ0se", "ClientModuleInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ConfirmPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2d13AxLktOX6HJ7TLeeNFp", "ConfirmPopup");
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
    var PopupBase_1 = require("./PopupBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConfirmPopup = function(_super) {
      __extends(ConfirmPopup, _super);
      function ConfirmPopup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.contentLabel = null;
        _this.confirmBtn = null;
        return _this;
      }
      ConfirmPopup.prototype.onLoad = function() {
        this.registerEvent();
      };
      ConfirmPopup.prototype.onDestroy = function() {
        this.unregisterEvent();
      };
      ConfirmPopup.prototype.registerEvent = function() {
        this.confirmBtn.on(cc.Node.EventType.TOUCH_END, this.onConfirmBtnClick, this);
      };
      ConfirmPopup.prototype.unregisterEvent = function() {
        this.confirmBtn.targetOff(this);
      };
      ConfirmPopup.prototype.init = function() {};
      ConfirmPopup.prototype.updateDisplay = function(options) {
        this.titleLabel.string = options.title;
        this.contentLabel.string = options.content;
      };
      ConfirmPopup.prototype.onConfirmBtnClick = function() {
        this.options.confirmCallback && this.options.confirmCallback();
        this.hide();
      };
      __decorate([ property(cc.Label) ], ConfirmPopup.prototype, "titleLabel", void 0);
      __decorate([ property(cc.Label) ], ConfirmPopup.prototype, "contentLabel", void 0);
      __decorate([ property(cc.Node) ], ConfirmPopup.prototype, "confirmBtn", void 0);
      ConfirmPopup = __decorate([ ccclass ], ConfirmPopup);
      return ConfirmPopup;
    }(PopupBase_1.default);
    exports.default = ConfirmPopup;
    cc._RF.pop();
  }, {
    "./PopupBase": "PopupBase"
  } ],
  DebuggerAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30c6c9QHEpNB4SYdNDexZta", "DebuggerAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DebuggerAdapter = function() {
      function DebuggerAdapter() {
        this.isPrintLog = false;
      }
      DebuggerAdapter.prototype.onGameExit = function() {};
      DebuggerAdapter.prototype.onGameReady = function() {};
      DebuggerAdapter.prototype.toast = function(message) {};
      DebuggerAdapter.prototype.callFunction = function(funcName) {
        throw new Error("Method not implemented.");
      };
      return DebuggerAdapter;
    }();
    exports.default = DebuggerAdapter;
    cc._RF.pop();
  }, {} ],
  DefaultLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c29a9QrYPZOXo1dHLi1NQ3Y", "DefaultLoader");
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
    exports.DefaultLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var DefaultLoader = function(_super) {
      __extends(DefaultLoader, _super);
      function DefaultLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DefaultLoader.prototype.loadNetRes = function(path, options, callback) {
        cc.assetManager.loadRemote(path, options, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      DefaultLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("AtlasLoader loadRemoteRes method not implemented.");
      };
      DefaultLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return DefaultLoader;
    }(BaseLoader_1.default);
    exports.DefaultLoader = DefaultLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  DelayUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af047g7uK9BVIVW1c2532bq", "DelayUtils");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Delay = void 0;
    var Delay = function() {
      function Delay(k, v) {
        this.key = k;
        this.time = v;
      }
      return Delay;
    }();
    exports.Delay = Delay;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DelayUtils = function() {
      function DelayUtils() {}
      DelayUtils_1 = DelayUtils;
      DelayUtils.CheckDelay = function(key) {
        var delay = DelayUtils_1.delayMap[key];
        if (!delay) return true;
        var tick = new Date().getTime();
        var time = tick - delay.current;
        if (time < delay.time) return true;
        delay.current = tick;
        return false;
      };
      var DelayUtils_1;
      DelayUtils.delayMap = {
        button: new Delay("button", 400)
      };
      DelayUtils = DelayUtils_1 = __decorate([ ccclass ], DelayUtils);
      return DelayUtils;
    }();
    exports.default = DelayUtils;
    cc._RF.pop();
  }, {} ],
  EncourageWallDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2284d1/TlHj6ZmgQG5+bOj", "EncourageWallDataManager");
    "use strict";
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
    exports.EncourageWallDataManager = void 0;
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var interfaceVo_1 = require("../structure/interfaceVo");
    var ENCOURAGE_LIST_MANAGER_SAVE_KEY = "ENCOURAGE_LIST_MANAGER_SAVE_KEY";
    var EncourageWallDataManager = function() {
      function EncourageWallDataManager() {
        this.encourageItemList = [];
      }
      Object.defineProperty(EncourageWallDataManager, "instance", {
        get: function() {
          EncourageWallDataManager._instance || (EncourageWallDataManager._instance = new EncourageWallDataManager());
          return EncourageWallDataManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      EncourageWallDataManager.prototype.init = function() {
        return __awaiter(this, void 0, Promise, function() {
          var gameListConfig, unLockData, key, config, lockState, data;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getGameListConfig() ];

             case 1:
              gameListConfig = _a.sent();
              unLockData = kit_1.kit.util.LocalStorage.getObject(ENCOURAGE_LIST_MANAGER_SAVE_KEY) || {};
              for (key in gameListConfig) {
                config = gameListConfig[key];
                lockState = config.lockVal;
                unLockData && unLockData[config.lessonId] && 0 == unLockData[config.lessonId].lockVal && (lockState = 0);
                data = new interfaceVo_1.EncourageItemData(config, lockState);
                this.encourageItemList.push(data);
              }
              cc.log(" ===this.gameItemList: ", this.encourageItemList);
              return [ 2, Promise.resolve() ];
            }
          });
        });
      };
      EncourageWallDataManager.prototype.getGameListConfig = function() {
        return new Promise(function(res, rej) {
          res(config_1.ENCOURAGE_WALL_LIST_CONFIG);
        });
      };
      EncourageWallDataManager.prototype.getEncourageListData = function() {
        return this.encourageItemList;
      };
      EncourageWallDataManager.prototype.getEncourageDataById = function(lessonId) {
        return this.encourageItemList.find(function(ele) {
          return ele.lessonId == lessonId;
        });
      };
      EncourageWallDataManager.prototype.setEncourageItemUnlockById = function(lessonId) {
        var encourageData = this.encourageItemList.find(function(ele) {
          return ele.lessonId == lessonId;
        });
        encourageData ? encourageData.setUnlock() : cc.warn("encourage data nil! encourage id: " + lessonId);
        this.save();
      };
      EncourageWallDataManager.prototype.save = function() {
        var obj = {};
        this.encourageItemList.forEach(function(val) {
          var key = val.lessonId;
          obj[key] = {};
          obj[key]["lockVal"] = val.lockVal;
        });
        kit_1.kit.util.LocalStorage.setObject(ENCOURAGE_LIST_MANAGER_SAVE_KEY, obj);
      };
      return EncourageWallDataManager;
    }();
    exports.EncourageWallDataManager = EncourageWallDataManager;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../structure/interfaceVo": "interfaceVo"
  } ],
  EntityManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ba3cOf9c5G5Zjhzeqqey/y", "EntityManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EntityManager = function() {
      function EntityManager() {
        this._length = 0;
        this._entityMap = {};
      }
      Object.defineProperty(EntityManager, "instance", {
        get: function() {
          null == this._instance && (this._instance = new EntityManager());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      EntityManager.prototype.release = function() {
        this._entityMap = null;
        EntityManager._instance = null;
      };
      EntityManager.prototype.registerEntity = function(newEntity) {
        this._entityMap[newEntity.sid] = newEntity;
      };
      EntityManager.prototype.getEntityFromID = function(id) {
        return this._entityMap[id];
      };
      EntityManager.prototype.removeEntity = function(entity) {
        var key;
        for (key in this._entityMap) this._entityMap[key] == entity && delete this._entityMap[key];
      };
      EntityManager.prototype.getAllEntity = function() {
        return this._entityMap;
      };
      EntityManager.prototype.getAvailableEntity = function(clazz) {
        var key;
        var availableEntity;
        for (key in this._entityMap) {
          var entity = this._entityMap[key];
          if (entity instanceof clazz && null != entity) {
            availableEntity = entity;
            return availableEntity;
          }
        }
        availableEntity = this.createEntity(clazz);
        return availableEntity;
      };
      EntityManager.prototype.createEntity = function(clazz) {
        var entity = new clazz();
        this.registerEntity(entity);
        this._length++;
        return entity;
      };
      Object.defineProperty(EntityManager.prototype, "length", {
        get: function() {
          return this._length;
        },
        enumerable: false,
        configurable: true
      });
      return EntityManager;
    }();
    exports.default = EntityManager;
    cc._RF.pop();
  }, {} ],
  ErrorSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "385acEgvbxKU6sbhseWwvBC", "ErrorSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ErrorSendInterval = void 0;
    var ErrorSendInterval = function() {
      function ErrorSendInterval() {}
      ErrorSendInterval.RATE_DEFAULT = 5;
      ErrorSendInterval.RATE_LOW = 10;
      return ErrorSendInterval;
    }();
    exports.ErrorSendInterval = ErrorSendInterval;
    var ErrorSystem = function() {
      function ErrorSystem() {
        this.errorMap = {};
      }
      Object.defineProperty(ErrorSystem, "instance", {
        get: function() {
          null == ErrorSystem._instance && (ErrorSystem._instance = new ErrorSystem());
          return ErrorSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      ErrorSystem.prototype.init = function(isNative, outAdapter) {
        var _this = this;
        this.outAdapter = outAdapter;
        return new Promise(function(res, rea) {
          if (isNative) window.__errorHandler = function(errorMessage, file, line, message, error) {
            var exception = {};
            exception.errorMessage = errorMessage;
            exception.file = file;
            exception.line = line;
            exception.message = message;
            exception.error = error;
            window.exception != JSON.stringify(exception) && (window.exception = JSON.stringify(exception));
            _this.outAdapter(exception);
          }; else {
            window.addEventListener("unhandledrejection", function(event) {
              var message = String(event.reason.stack);
              _this.outAdapter({
                unhandledrejection: String(event.reason.stack)
              });
            });
            window.onerror = function(errorMessage, file, line, message, error) {
              var exception = {};
              exception.errorMessage = errorMessage;
              exception.file = file;
              exception.line = line;
              exception.message = message;
              exception.error = error;
              window.exception != JSON.stringify(exception) && (window.exception = JSON.stringify(exception));
              _this.outAdapter(exception);
            };
          }
          res();
        });
      };
      ErrorSystem.prototype.release = function() {
        this.outAdapter = null;
        this.errorMap = null;
        ErrorSystem._instance = null;
      };
      return ErrorSystem;
    }();
    exports.default = ErrorSystem;
    cc._RF.pop();
  }, {} ],
  EventEmitter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a51a4aKThlPqZz18lx6DJcI", "EventEmitter");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventEmitter = void 0;
    var EventEmitter = function() {
      function EventEmitter() {}
      EventEmitter.prototype.getListeners = function(event) {
        var events = this._getEvents();
        var response;
        var key;
        if (event instanceof RegExp) {
          response = {};
          for (key in events) events.hasOwnProperty(key) && event.test(key) && (response[key] = events[key]);
        } else response = events[event] || (events[event] = []);
        return response;
      };
      EventEmitter.prototype.addListener = function(event, listener, target) {
        void 0 === target && (target = null);
        if (!this.isValidListener(listener)) throw new TypeError("listener must be a function");
        var listeners = this.getListenersAsObject(event);
        var listenerIsWrapped = "object" === typeof listener;
        var key;
        for (key in listeners) listeners.hasOwnProperty(key) && -1 === this.indexOfListener(listeners[key], listener, target) && listeners[key].push(listenerIsWrapped ? listener : {
          listener: listener,
          once: false,
          target: target
        });
        return this;
      };
      EventEmitter.prototype.on = function(event, listener, target) {
        return this.addListener(event, listener, target);
      };
      EventEmitter.prototype.flattenListeners = function(listeners) {
        var flatListeners = [];
        var i;
        for (i = 0; i < listeners.length; i += 1) flatListeners.push(listeners[i].listener);
        return flatListeners;
      };
      EventEmitter.prototype.getListenersAsObject = function(event) {
        var listeners = this.getListeners(event);
        var response;
        if (listeners instanceof Array) {
          response = {};
          response[event] = listeners;
        }
        return response || listeners;
      };
      EventEmitter.prototype.addOnceListener = function(event, listener) {
        return this.addListener(event, {
          listener: listener,
          once: true
        });
      };
      EventEmitter.prototype.once = function(event, listener) {
        return this.addOnceListener(event, listener);
      };
      EventEmitter.prototype.defineEvent = function(event) {
        this.getListeners(event);
        return this;
      };
      EventEmitter.prototype.defineEvents = function(events) {
        for (var i = 0; i < events.length; i += 1) this.defineEvent(events[i]);
        return this;
      };
      EventEmitter.prototype.removeListener = function(event, listener, target) {
        void 0 === target && (target = null);
        var listeners = this.getListenersAsObject(event);
        var index;
        var key;
        for (key in listeners) if (listeners.hasOwnProperty(key)) {
          index = this.indexOfListener(listeners[key], listener, target);
          -1 !== index && listeners[key].splice(index, 1);
        }
        return this;
      };
      EventEmitter.prototype.off = function(event, listener, target) {
        void 0 === target && (target = null);
        return this.removeListener(event, listener, target);
      };
      EventEmitter.prototype.addListeners = function(event, listeners) {
        return this.manipulateListeners(false, event, listeners);
      };
      EventEmitter.prototype.removeListeners = function(event, listeners) {
        return this.manipulateListeners(true, event, listeners);
      };
      EventEmitter.prototype.manipulateListeners = function(remove, event, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;
        if ("object" !== typeof event || event instanceof RegExp) {
          i = listeners.length;
          while (i--) single.call(this, event, listeners[i]);
        } else for (i in event) event.hasOwnProperty(i) && (value = event[i]) && ("function" === typeof value ? single.call(this, i, value) : multiple.call(this, i, value));
        return this;
      };
      EventEmitter.prototype.removeEvent = function(event) {
        var type = typeof event;
        var events = this._getEvents();
        var key;
        if ("string" === type) delete events[event]; else if (event instanceof RegExp) for (key in events) events.hasOwnProperty(key) && event.test(key) && delete events[key]; else delete this._events;
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function(event) {
        return this.removeEvent(event);
      };
      EventEmitter.prototype.emitEvent = function(event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var listenersMap = this.getListenersAsObject(event);
        var listeners;
        var listener;
        var i;
        var key;
        var response;
        for (key in listenersMap) if (listenersMap.hasOwnProperty(key)) {
          listeners = listenersMap[key].slice(0);
          for (i = 0; i < listeners.length; i++) {
            listener = listeners[i];
            true === listener.once && this.removeListener(event, listener.listener);
            response = (_a = listener.listener).apply.apply(_a, __spreadArrays([ listener.target || this ], args || []));
            response === this.onceReturnValue && this.removeListener(event, listener.listener);
          }
        }
        return this;
      };
      EventEmitter.prototype.trigger = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return this.emitEvent.apply(this, __spreadArrays([ event ], args));
      };
      EventEmitter.prototype.emit = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return this.emitEvent(event, args);
      };
      Object.defineProperty(EventEmitter.prototype, "onceReturnValue", {
        get: function() {
          return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
        },
        set: function(value) {
          this._onceReturnValue = value;
        },
        enumerable: false,
        configurable: true
      });
      EventEmitter.prototype._getEvents = function() {
        return this._events || (this._events = {});
      };
      EventEmitter.prototype.isValidListener = function(listener) {
        return "function" === typeof listener || listener instanceof RegExp || !(!listener || "object" !== typeof listener) && this.isValidListener(listener);
      };
      EventEmitter.prototype.indexOfListener = function(listeners, listener, target) {
        var i = listeners.length;
        while (i--) if (listeners[i].listener === listener && target == listeners[i].target) return i;
        return -1;
      };
      return EventEmitter;
    }();
    exports.EventEmitter = EventEmitter;
    cc._RF.pop();
  }, {} ],
  EventSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f198474XdNBIZ+mj/EJxRti", "EventSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventEmitter_1 = require("./EventEmitter");
    var EventSystem = function() {
      function EventSystem() {}
      EventSystem.on = function(event, callback, target) {
        this._emitter.on(event, callback, target);
      };
      EventSystem.once = function(event, callback, target) {
        this._emitter.once(event, callback);
      };
      EventSystem.off = function(event, callback, target) {
        this._emitter.off(event, callback, target);
      };
      EventSystem.emit = function(event, eventData) {
        var params = {};
        params.event = event;
        params.data = eventData;
        this._emitter.emit(event, params);
      };
      EventSystem.release = function() {
        this._emitter.removeEvent();
      };
      EventSystem._emitter = new EventEmitter_1.EventEmitter();
      return EventSystem;
    }();
    exports.default = EventSystem;
    cc._RF.pop();
  }, {
    "./EventEmitter": "EventEmitter"
  } ],
  FixBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96b9dc2pw1OQYxzmomFx+qh", "FixBg");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FixBg = function(_super) {
      __extends(FixBg, _super);
      function FixBg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FixBg.prototype.onLoad = function() {};
      FixBg.prototype.onEnable = function() {
        this.relayout();
      };
      FixBg.prototype.relayout = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.node.width = width;
          this.node.height = screenSize.height;
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.node.width = screenSize.width;
          this.node.height = height;
        }
        var wdt = this.node.getComponent(cc.Widget);
        if (null == wdt) {
          this.node.addComponent(cc.Widget);
          wdt = this.node.getComponent(cc.Widget);
        }
        wdt.isAlignHorizontalCenter = true;
        wdt.isAlignVerticalCenter = true;
      };
      FixBg = __decorate([ ccclass ], FixBg);
      return FixBg;
    }(cc.Component);
    exports.default = FixBg;
    cc._RF.pop();
  }, {} ],
  FixScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97424rQ/DFEH6FcUMmhcUJg", "FixScreen");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FixScreen = function(_super) {
      __extends(FixScreen, _super);
      function FixScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lock = false;
        return _this;
      }
      FixScreen.prototype.onLoad = function() {
        this.relayout();
      };
      FixScreen.prototype.relayout = function() {
        if (this.lock) return;
        this.lock = true;
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        cc.log("canvas designSize:", designSize);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var designAspectRatio = designSize.width / designSize.height;
        var screenSize = __assign({}, designSize);
        frameAspectRatio < designAspectRatio ? screenSize.height = Math.ceil(designSize.width / frameAspectRatio) : screenSize.width = Math.ceil(designSize.height * frameAspectRatio);
        cc.Canvas.instance.designResolution = screenSize;
        this.lock = false;
      };
      FixScreen = __decorate([ ccclass ], FixScreen);
      return FixScreen;
    }(cc.Component);
    exports.default = FixScreen;
    cc._RF.pop();
  }, {} ],
  FollowReadState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4b34/BfWhAkbU79BNi4oob", "FollowReadState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../config/config");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FollowReadState = function() {
      function FollowReadState() {}
      FollowReadState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      FollowReadState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.addFollowRead(data);
        });
      };
      FollowReadState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      FollowReadState.prototype.exit = function(data) {
        this.recordPrefab.removeFromParent();
        this.recordPrefab.destroy();
        this.res.decRef();
      };
      FollowReadState.prototype.addFollowRead = function(data) {
        var _this = this;
        kit_1.kit.Loader.loadBundle(config_1.BUNDLE_COMPONENTS, null, function(err, bundle) {
          if (err) {
            cc.log(err);
            return;
          }
          bundle.load(config_1.BUNDLE_FOLLOW_READ + "/" + config_1.BUNDLE_FOLLOW_READ, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.log(error);
              return;
            }
            _this.res = prefab;
            _this.res.addRef();
            _this.recordPrefab = cc.instantiate(prefab);
            _this.entity.uiNode.addChild(_this.recordPrefab);
            _this.recordPrefab.zIndex = 99;
          });
        });
      };
      FollowReadState = __decorate([ ccclass ], FollowReadState);
      return FollowReadState;
    }();
    exports.default = FollowReadState;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "../../config/config": "config"
  } ],
  GameDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cefa48P8kJL2bziFJ7vKonb", "GameDataManager");
    "use strict";
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
    exports.GameDataManager = void 0;
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var interfaceVo_1 = require("../structure/interfaceVo");
    var GAME_LIST_MANAGER_SAVE_KEY = "GAME_LIST_MANAGER_SAVE_KEY";
    var GameDataManager = function() {
      function GameDataManager() {
        this.gameItemList = [];
      }
      Object.defineProperty(GameDataManager, "instance", {
        get: function() {
          GameDataManager._instance || (GameDataManager._instance = new GameDataManager());
          return GameDataManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      GameDataManager.prototype.init = function() {
        return __awaiter(this, void 0, Promise, function() {
          var gameListConfig, unLockData, key, config, data;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getGameListConfig() ];

             case 1:
              gameListConfig = _a.sent();
              unLockData = kit_1.kit.util.LocalStorage.getObject(GAME_LIST_MANAGER_SAVE_KEY) || {};
              for (key in gameListConfig) {
                config = gameListConfig[key];
                data = new interfaceVo_1.GameItemData(config, unLockData[config.id] && unLockData[config.id].unlock || config.unlock);
                this.gameItemList.push(data);
              }
              cc.log(" ===this.gameItemList: ", this.gameItemList);
              return [ 2 ];
            }
          });
        });
      };
      GameDataManager.prototype.getGameListConfig = function() {
        return new Promise(function(res, rej) {
          res(config_1.GAME_LIST_CONFIG);
        });
      };
      GameDataManager.prototype.getGameListData = function() {
        return this.gameItemList;
      };
      GameDataManager.prototype.getGameDataById = function(id) {
        return this.gameItemList.find(function(ele) {
          return ele.id == id;
        });
      };
      GameDataManager.prototype.setGameItemUnlockById = function(id) {
        var gameData = this.gameItemList.find(function(ele) {
          return ele.id == id;
        });
        gameData ? gameData.setUnlock() : cc.warn("game data nil! game id: " + id);
        this.save();
      };
      GameDataManager.prototype.save = function() {
        var obj = {};
        this.gameItemList.forEach(function(val) {
          var key = val.id;
          obj[key] = {};
          obj[key]["unlock"] = val.unlock;
        });
        kit_1.kit.util.LocalStorage.setObject(GAME_LIST_MANAGER_SAVE_KEY, obj);
      };
      return GameDataManager;
    }();
    exports.GameDataManager = GameDataManager;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../structure/interfaceVo": "interfaceVo"
  } ],
  HttpState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0513bSYAVtNlrEuf5+vlBbS", "HttpState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HttpStateMap = void 0;
    var HttpStateMap = function() {
      function HttpStateMap() {
        var _this = this;
        var line = HttpStateMap.map.split("\n");
        this.data = {};
        line.forEach(function(element) {
          var temp = element.split("\t");
          _this.data[temp[0]] = temp[1] + "\t" + temp[2];
        });
      }
      Object.defineProperty(HttpStateMap, "instance", {
        get: function() {
          null == HttpStateMap._instance && (HttpStateMap._instance = new HttpStateMap());
          return HttpStateMap._instance;
        },
        enumerable: false,
        configurable: true
      });
      HttpStateMap.prototype.getErrorInfoById = function(id) {
        return this.data[id];
      };
      HttpStateMap.map = '100\tContinue\t\u7ee7\u7eed\u3002\u5ba2\u6237\u7aef\u5e94\u7ee7\u7eed\u5176\u8bf7\u6c42\n101\tSwitching Protocols\t\u5207\u6362\u534f\u8bae\u3002\u670d\u52a1\u5668\u6839\u636e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u5207\u6362\u534f\u8bae\u3002\u53ea\u80fd\u5207\u6362\u5230\u66f4\u9ad8\u7ea7\u7684\u534f\u8bae\uff0c\u4f8b\u5982\uff0c\u5207\u6362\u5230HTTP\u7684\u65b0\u7248\u672c\u534f\u8bae\n0\terror\t\u8be6\u89c1\uff1ahttps://codeday.me/bug/20170705/34070.html\n200\tOK\t\u8bf7\u6c42\u6210\u529f\u3002\u4e00\u822c\u7528\u4e8eGET\u4e0ePOST\u8bf7\u6c42\n201\tCreated\t\u5df2\u521b\u5efa\u3002\u6210\u529f\u8bf7\u6c42\u5e76\u521b\u5efa\u4e86\u65b0\u7684\u8d44\u6e90\n202\tAccepted\t\u5df2\u63a5\u53d7\u3002\u5df2\u7ecf\u63a5\u53d7\u8bf7\u6c42\uff0c\u4f46\u672a\u5904\u7406\u5b8c\u6210\n203\tNon-Authoritative Information\t\u975e\u6388\u6743\u4fe1\u606f\u3002\u8bf7\u6c42\u6210\u529f\u3002\u4f46\u8fd4\u56de\u7684meta\u4fe1\u606f\u4e0d\u5728\u539f\u59cb\u7684\u670d\u52a1\u5668\uff0c\u800c\u662f\u4e00\u4e2a\u526f\u672c\n204\tNo Content\t\u65e0\u5185\u5bb9\u3002\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\uff0c\u4f46\u672a\u8fd4\u56de\u5185\u5bb9\u3002\u5728\u672a\u66f4\u65b0\u7f51\u9875\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u786e\u4fdd\u6d4f\u89c8\u5668\u7ee7\u7eed\u663e\u793a\u5f53\u524d\u6587\u6863\n205\tReset Content\t\u91cd\u7f6e\u5185\u5bb9\u3002\u670d\u52a1\u5668\u5904\u7406\u6210\u529f\uff0c\u7528\u6237\u7ec8\u7aef\uff08\u4f8b\u5982\uff1a\u6d4f\u89c8\u5668\uff09\u5e94\u91cd\u7f6e\u6587\u6863\u89c6\u56fe\u3002\u53ef\u901a\u8fc7\u6b64\u8fd4\u56de\u7801\u6e05\u9664\u6d4f\u89c8\u5668\u7684\u8868\u5355\u57df\n206\tPartial Content\t\u90e8\u5206\u5185\u5bb9\u3002\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u90e8\u5206GET\u8bf7\u6c42\n300\tMultiple Choices\t\u591a\u79cd\u9009\u62e9\u3002\u8bf7\u6c42\u7684\u8d44\u6e90\u53ef\u5305\u62ec\u591a\u4e2a\u4f4d\u7f6e\uff0c\u76f8\u5e94\u53ef\u8fd4\u56de\u4e00\u4e2a\u8d44\u6e90\u7279\u5f81\u4e0e\u5730\u5740\u7684\u5217\u8868\u7528\u4e8e\u7528\u6237\u7ec8\u7aef\uff08\u4f8b\u5982\uff1a\u6d4f\u89c8\u5668\uff09\u9009\u62e9\n301\tMoved Permanently\t\u6c38\u4e45\u79fb\u52a8\u3002\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u88ab\u6c38\u4e45\u7684\u79fb\u52a8\u5230\u65b0URI\uff0c\u8fd4\u56de\u4fe1\u606f\u4f1a\u5305\u62ec\u65b0\u7684URI\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5b9a\u5411\u5230\u65b0URI\u3002\u4eca\u540e\u4efb\u4f55\u65b0\u7684\u8bf7\u6c42\u90fd\u5e94\u4f7f\u7528\u65b0\u7684URI\u4ee3\u66ff\n302\tFound\t\u4e34\u65f6\u79fb\u52a8\u3002\u4e0e301\u7c7b\u4f3c\u3002\u4f46\u8d44\u6e90\u53ea\u662f\u4e34\u65f6\u88ab\u79fb\u52a8\u3002\u5ba2\u6237\u7aef\u5e94\u7ee7\u7eed\u4f7f\u7528\u539f\u6709URI\n303\tSee Other\t\u67e5\u770b\u5176\u5b83\u5730\u5740\u3002\u4e0e301\u7c7b\u4f3c\u3002\u4f7f\u7528GET\u548cPOST\u8bf7\u6c42\u67e5\u770b\n304\tNot Modified\t\u672a\u4fee\u6539\u3002\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u672a\u4fee\u6539\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6b64\u72b6\u6001\u7801\u65f6\uff0c\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u8d44\u6e90\u3002\u5ba2\u6237\u7aef\u901a\u5e38\u4f1a\u7f13\u5b58\u8bbf\u95ee\u8fc7\u7684\u8d44\u6e90\uff0c\u901a\u8fc7\u63d0\u4f9b\u4e00\u4e2a\u5934\u4fe1\u606f\u6307\u51fa\u5ba2\u6237\u7aef\u5e0c\u671b\u53ea\u8fd4\u56de\u5728\u6307\u5b9a\u65e5\u671f\u4e4b\u540e\u4fee\u6539\u7684\u8d44\u6e90\n305\tUse Proxy\t\u4f7f\u7528\u4ee3\u7406\u3002\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u5fc5\u987b\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\n306\tUnused\t\u5df2\u7ecf\u88ab\u5e9f\u5f03\u7684HTTP\u72b6\u6001\u7801\n307\tTemporary Redirect\t\u4e34\u65f6\u91cd\u5b9a\u5411\u3002\u4e0e302\u7c7b\u4f3c\u3002\u4f7f\u7528GET\u8bf7\u6c42\u91cd\u5b9a\u5411\n400\tBad Request\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8bed\u6cd5\u9519\u8bef\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u7406\u89e3\n401\tUnauthorized\t\u8bf7\u6c42\u8981\u6c42\u7528\u6237\u7684\u8eab\u4efd\u8ba4\u8bc1\n402\tPayment Required\t\u4fdd\u7559\uff0c\u5c06\u6765\u4f7f\u7528\n403\tForbidden\t\u670d\u52a1\u5668\u7406\u89e3\u8bf7\u6c42\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u4f46\u662f\u62d2\u7edd\u6267\u884c\u6b64\u8bf7\u6c42\n404\tNot Found\t\u670d\u52a1\u5668\u65e0\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u627e\u5230\u8d44\u6e90\uff08\u7f51\u9875\uff09\u3002\u901a\u8fc7\u6b64\u4ee3\u7801\uff0c\u7f51\u7ad9\u8bbe\u8ba1\u4eba\u5458\u53ef\u8bbe\u7f6e"\u60a8\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\u65e0\u6cd5\u627e\u5230"\u7684\u4e2a\u6027\u9875\u9762\n405\tMethod Not Allowed\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e2d\u7684\u65b9\u6cd5\u88ab\u7981\u6b62\n406\tNot Acceptable\t\u670d\u52a1\u5668\u65e0\u6cd5\u6839\u636e\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u5185\u5bb9\u7279\u6027\u5b8c\u6210\u8bf7\u6c42\n407\tProxy Authentication Required\t\u8bf7\u6c42\u8981\u6c42\u4ee3\u7406\u7684\u8eab\u4efd\u8ba4\u8bc1\uff0c\u4e0e401\u7c7b\u4f3c\uff0c\u4f46\u8bf7\u6c42\u8005\u5e94\u5f53\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u6388\u6743\n408\tRequest Time-out\t\u670d\u52a1\u5668\u7b49\u5f85\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u8bf7\u6c42\u65f6\u95f4\u8fc7\u957f\uff0c\u8d85\u65f6\n409\tConflict\t\u670d\u52a1\u5668\u5b8c\u6210\u5ba2\u6237\u7aef\u7684PUT\u8bf7\u6c42\u662f\u53ef\u80fd\u8fd4\u56de\u6b64\u4ee3\u7801\uff0c\u670d\u52a1\u5668\u5904\u7406\u8bf7\u6c42\u65f6\u53d1\u751f\u4e86\u51b2\u7a81\n410\tGone\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8d44\u6e90\u5df2\u7ecf\u4e0d\u5b58\u5728\u3002410\u4e0d\u540c\u4e8e404\uff0c\u5982\u679c\u8d44\u6e90\u4ee5\u524d\u6709\u73b0\u5728\u88ab\u6c38\u4e45\u5220\u9664\u4e86\u53ef\u4f7f\u7528410\u4ee3\u7801\uff0c\u7f51\u7ad9\u8bbe\u8ba1\u4eba\u5458\u53ef\u901a\u8fc7301\u4ee3\u7801\u6307\u5b9a\u8d44\u6e90\u7684\u65b0\u4f4d\u7f6e\n411\tLength Required\t\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u4e0d\u5e26Content-Length\u7684\u8bf7\u6c42\u4fe1\u606f\n412\tPrecondition Failed\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u4fe1\u606f\u7684\u5148\u51b3\u6761\u4ef6\u9519\u8bef\n413\tRequest Entity Too Large\t\u7531\u4e8e\u8bf7\u6c42\u7684\u5b9e\u4f53\u8fc7\u5927\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\uff0c\u56e0\u6b64\u62d2\u7edd\u8bf7\u6c42\u3002\u4e3a\u9632\u6b62\u5ba2\u6237\u7aef\u7684\u8fde\u7eed\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u4f1a\u5173\u95ed\u8fde\u63a5\u3002\u5982\u679c\u53ea\u662f\u670d\u52a1\u5668\u6682\u65f6\u65e0\u6cd5\u5904\u7406\uff0c\u5219\u4f1a\u5305\u542b\u4e00\u4e2aRetry-After\u7684\u54cd\u5e94\u4fe1\u606f\n414\tRequest-URI Too Large\t\u8bf7\u6c42\u7684URI\u8fc7\u957f\uff08URI\u901a\u5e38\u4e3a\u7f51\u5740\uff09\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\n415\tUnsupported Media Type\t\u670d\u52a1\u5668\u65e0\u6cd5\u5904\u7406\u8bf7\u6c42\u9644\u5e26\u7684\u5a92\u4f53\u683c\u5f0f\n416\tRequested range not satisfiable\t\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8303\u56f4\u65e0\u6548\n417\tExpectation Failed\t\u670d\u52a1\u5668\u65e0\u6cd5\u6ee1\u8db3Expect\u7684\u8bf7\u6c42\u5934\u4fe1\u606f\n500\tInternal Server Error\t\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\n501\tNot Implemented\t\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u7684\u529f\u80fd\uff0c\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\n502\tBad Gateway\t\u5145\u5f53\u7f51\u5173\u6216\u4ee3\u7406\u7684\u670d\u52a1\u5668\uff0c\u4ece\u8fdc\u7aef\u670d\u52a1\u5668\u63a5\u6536\u5230\u4e86\u4e00\u4e2a\u65e0\u6548\u7684\u8bf7\u6c42\n503\tService Unavailable\t\u7531\u4e8e\u8d85\u8f7d\u6216\u7cfb\u7edf\u7ef4\u62a4\uff0c\u670d\u52a1\u5668\u6682\u65f6\u7684\u65e0\u6cd5\u5904\u7406\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002\u5ef6\u65f6\u7684\u957f\u5ea6\u53ef\u5305\u542b\u5728\u670d\u52a1\u5668\u7684Retry-After\u5934\u4fe1\u606f\u4e2d\n504\tGateway Time-out\t\u5145\u5f53\u7f51\u5173\u6216\u4ee3\u7406\u7684\u670d\u52a1\u5668\uff0c\u672a\u53ca\u65f6\u4ece\u8fdc\u7aef\u670d\u52a1\u5668\u83b7\u53d6\u8bf7\u6c42\n505\tHTTP Version not supported\t\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u7684HTTP\u534f\u8bae\u7684\u7248\u672c\uff0c\u65e0\u6cd5\u5b8c\u6210\u5904\u7406';
      return HttpStateMap;
    }();
    exports.HttpStateMap = HttpStateMap;
    cc._RF.pop();
  }, {} ],
  HttpSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30f01uyN35PiKWrwKJIvwsz", "HttpSystem");
    "use strict";
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
    var Http_1 = require("./Http");
    var HttpSystem = function() {
      function HttpSystem() {}
      Object.defineProperty(HttpSystem, "instance", {
        get: function() {
          null == HttpSystem._instance && (HttpSystem._instance = new HttpSystem());
          return HttpSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      HttpSystem.prototype.init = function(outAdapter) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(res) {
              _this.outAdapter = outAdapter;
              res();
            }) ];
          });
        });
      };
      HttpSystem.prototype.release = function() {
        this.outAdapter = null;
        HttpSystem._instance = null;
      };
      HttpSystem.prototype.httpGet = function(url, params, header) {
        var _this = this;
        console.log("httpget:url = " + url);
        return new Promise(function(resolve, reject) {
          var headerJson = {
            "Content-Type": "application/json; charset=utf-8"
          };
          if (header && "" != header) {
            var json = JSON.parse(header);
            for (var key in json) headerJson[key] = json[key];
          }
          var xhr = new Http_1.Http();
          xhr.onComplete(resolve);
          xhr.onError(function(error, errInfo, response) {
            _this.outAdapter && _this.outAdapter("\u7f51\u7edc\u9519\u8bef " + error + "," + url, errInfo, response);
            reject();
          });
          xhr.openGet(Http_1.Http.getUrl(url, params));
          xhr.setRequestHeader(headerJson);
          xhr.send();
        }).catch(function(reason) {
          _this.outAdapter && _this.outAdapter(reason && reason.message || "\u7f51\u7edc\u9519\u8bef" + url);
        });
      };
      HttpSystem.prototype.httpPost = function(url, body, params, header) {
        var _this = this;
        console.log("httpPost:url = " + Http_1.Http.getUrl(url, params));
        return new Promise(function(resolve, reject) {
          var headerJson = {
            "Content-Type": "application/json; charset=utf-8"
          };
          if (header && "" != header) {
            var json = JSON.parse(header);
            for (var key in json) headerJson[key] = json[key];
          }
          var xhr = new Http_1.Http();
          xhr.onComplete(resolve);
          xhr.onError(function(error, errInfo, response) {
            _this.outAdapter && _this.outAdapter("\u7f51\u7edc\u9519\u8bef " + error + "," + url, errInfo, response);
            reject();
          });
          xhr.openPost(Http_1.Http.getUrl(url, params));
          xhr.setRequestHeader(headerJson);
          xhr.send(body);
        }).catch(function(reason) {
          _this.outAdapter && _this.outAdapter(reason && reason.message || "\u7f51\u7edc\u9519\u8bef" + url);
        });
      };
      return HttpSystem;
    }();
    exports.default = HttpSystem;
    cc._RF.pop();
  }, {
    "./Http": "Http"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ef56hfMAFBfIgLQBTAlyss", "Http");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Http = void 0;
    var HttpState_1 = require("./HttpState");
    var Http = function() {
      function Http() {
        try {
          window["XMLHttpRequest"] ? this.xhr = new window["XMLHttpRequest"]() : this.xhr = new ActiveXObject("MSXML2.XMLHTTP");
          this.xhr.timeout = 3e3;
        } catch (e) {
          console.error("Http create error", e);
        }
      }
      Http.prototype.open = function(url, method, data) {
        void 0 === method && (method = Http.GET);
        this.method = method || "get";
        "get" == this.method && data && (url = this.spliceUrl(url, data));
        this.url = url;
        this.data = data;
        this.xhr.open(method, url, true);
        return this;
      };
      Http.prototype.openGet = function(url, data) {
        this.open(url, Http.GET, data);
        return this;
      };
      Http.prototype.openPost = function(url, data) {
        this.open(url, Http.POST, data);
        return this;
      };
      Http.prototype.onComplete = function(callback, target) {
        this.target = target;
        this._onComplete = callback;
        return this;
      };
      Http.prototype.onError = function(callback, target) {
        this.target = target;
        this._onError = callback;
        return this;
      };
      Http.prototype.send = function(data) {
        data = data || this.data;
        if ("object" === typeof data) try {
          data = JSON.stringify(data);
        } catch (e) {
          console.error(e);
        }
        this.xhr.onreadystatechange = this.onReadyStateChange.bind(this);
        console.log("body = " + data);
        this.xhr.send(data);
      };
      Http.prototype.abort = function() {
        this.xhr && this.xhr.abort();
      };
      Http.prototype.setRequestHeader = function(data) {
        try {
          for (var key in data) this.xhr.setRequestHeader(key, data[key]);
        } catch (e) {
          console.error(e);
        }
        return this;
      };
      Http.prototype.getAllResponseHeaders = function() {
        if (!this.xhr) return "";
        var result = this.xhr.getAllResponseHeaders();
        return result || "";
      };
      Http.prototype.onDestroy = function() {
        this.xhr = null;
      };
      Http.prototype.spliceUrl = function(url, data) {
        var dataStr = "";
        for (var key in data) dataStr += key + "=" + data[key] + "&";
        dataStr = dataStr.substr(0, dataStr.length - 1);
        dataStr.length > 2 && (url += url.indexOf("?") < 0 ? "?" + dataStr : url + dataStr);
        return url;
      };
      Http.prototype.onReadyStateChange = function() {
        var xhr = this.xhr;
        if (4 == xhr.readyState) {
          var ioError = xhr.status >= 400 || 0 == xhr.status;
          var url = this.url;
          var self = this;
          ioError ? this._onError && this._onError(this.xhr.status, HttpState_1.HttpStateMap.instance.getErrorInfoById(this.xhr.status), JSON.parse(this.xhr.response)) : this.xhr.readyState == Http.DONE && (this.xhr.status >= 200 && this.xhr.status < 400 ? this._onComplete.call(this.target ? this.target : null, JSON.parse(this.xhr.response)) : this._onComplete.call(this.target ? this.target : null, HttpState_1.HttpStateMap.instance.getErrorInfoById(this.xhr.status)));
        }
      };
      Http.stringifyPrimitive = function(v) {
        switch (typeof v) {
         case "string":
          return v;

         case "boolean":
          return v ? "true" : "false";

         case "number":
          return isFinite(v) ? v : "";

         default:
          return "";
        }
      };
      Http.stringify = function(obj, sep, eq, name) {
        sep = sep || "&";
        eq = eq || "=";
        null === obj && (obj = void 0);
        if ("object" === typeof obj) return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(Http.stringifyPrimitive(k)) + eq;
          return Array.isArray(obj[k]) ? obj[k].map(function(v) {
            return ks + encodeURIComponent(Http.stringifyPrimitive(v));
          }).join(sep) : ks + encodeURIComponent(Http.stringifyPrimitive(obj[k]));
        }).join(sep);
        if (!name) return "";
        return encodeURIComponent(Http.stringifyPrimitive(name)) + eq + encodeURIComponent(Http.stringifyPrimitive(obj));
      };
      Http.getUrl = function(url, params) {
        var s = Http.stringify(params);
        var sep = url.indexOf("?") > -1 ? "&" : "?";
        return url + (s ? sep + s : "");
      };
      Http.GET = "get";
      Http.POST = "post";
      Http.UNSENT = 0;
      Http.OPENED = 1;
      Http.HEADERS_RECEIVED = 2;
      Http.LOADING = 3;
      Http.DONE = 4;
      return Http;
    }();
    exports.Http = Http;
    cc._RF.pop();
  }, {
    "./HttpState": "HttpState"
  } ],
  IEntity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc9e0jrA2pK67lnz1sLfNzT", "IEntity");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IHttpSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c605f1uQnJCLakIlXWp0vwk", "IHttpSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  INativeServer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d9f1yBah5PcLecWW9Msx9c", "INativeServer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IOpenComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c9cdNDywJGLaUsamQFrofF", "IOpenComponent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IPlatform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98867NVR7VKTq6Wa+4G7T8b", "IPlatform");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "155adKKMIxIXqzNu/s3VoKO", "IState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ImageLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57e7b7TrCVEkrghmKpashkT", "ImageLoader");
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
    exports.ImageLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var ImageLoader = function(_super) {
      __extends(ImageLoader, _super);
      function ImageLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ImageLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, tex) {
          e && cc.error(e);
          callback && callback(e, new cc.SpriteFrame(tex));
        });
      };
      ImageLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("ImageLoader loadRemoteRes method not implemented.");
      };
      ImageLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return ImageLoader;
    }(BaseLoader_1.default);
    exports.ImageLoader = ImageLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  IosAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76eacFTd2RKTIQYx/sW0z2a", "IosAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var IosAdapter = function() {
      function IosAdapter() {
        this.packageName = "CocosHelper";
        this.isPrintLog = true;
      }
      IosAdapter.prototype.onGameExit = function() {};
      IosAdapter.prototype.onGameReady = function() {
        cc.log("getWritablePath():" + jsb.fileUtils.getWritablePath());
      };
      IosAdapter.prototype.toast = function(message) {
        jsb.reflection.callStaticMethod(this.packageName, "toast:", message);
      };
      IosAdapter.prototype.callFunction = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath = moduleName);
        jsb.reflection.callStaticMethod(packagePath, funcName + ":", parm);
      };
      return IosAdapter;
    }();
    exports.default = IosAdapter;
    cc._RF.pop();
  }, {} ],
  JsonLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83626KoeEZNCZB4MKAkCgPh", "JsonLoader");
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
    exports.JsonLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var JsonLoader = function(_super) {
      __extends(JsonLoader, _super);
      function JsonLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      JsonLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      JsonLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("JsonLoader loadRemoteRes method not implemented.");
      };
      JsonLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return JsonLoader;
    }(BaseLoader_1.default);
    exports.JsonLoader = JsonLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  LinkedNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6862WSFq1O875ISKgdkx1l", "LinkedNode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LinkedNode = void 0;
    var LinkedNode = function() {
      function LinkedNode(element) {
        this.element = null;
        this.previous = null;
        this.element = element;
      }
      return LinkedNode;
    }();
    exports.LinkedNode = LinkedNode;
    var LinkedList = function() {
      function LinkedList(element) {
        this.length = 0;
        this.head = new LinkedNode(element);
        this.head.next = this.head;
        this.head.previous = this.head;
        this.length = 1;
      }
      LinkedList.from = function(array) {
        var length = array.length;
        var linkedList = new LinkedList(array.shift());
        linkedList.length = length;
        array.reduce(function(previous, current) {
          previous.next = new LinkedNode(current);
          previous.next.previous = previous;
          return previous.next;
        }, linkedList.head);
        return linkedList;
      };
      LinkedList.prototype.find = function(cb) {
        var i;
        var currentNode = this.head;
        for (i = 0; i < this.length; i++) {
          if (cb.call(this, currentNode)) break;
          currentNode = currentNode.next;
        }
        return i !== this.length ? currentNode : null;
      };
      LinkedList.prototype.insert = function(newElement, node) {
        var newNode = new LinkedNode(newElement);
        var previousNode = this.find(function(n) {
          return n === node;
        });
        if (previousNode) {
          var rawNextNode = previousNode.next;
          previousNode.next = newNode;
          newNode.previous = previousNode;
          newNode.next = rawNextNode;
          rawNextNode.previous = newNode;
          this.length++;
        }
      };
      LinkedList.prototype.remove = function(node) {
        var deletedNode = this.find(function(n) {
          return n === node;
        });
        if (deletedNode) {
          this.head === deletedNode && (this.head = deletedNode.next);
          deletedNode.previous.next = deletedNode.next;
          deletedNode.next.previous = deletedNode.previous;
          this.length--;
        }
      };
      return LinkedList;
    }();
    exports.default = LinkedList;
    cc._RF.pop();
  }, {} ],
  LoaderObserver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a966b6pQh1GOoS4z0cEO/TN", "LoaderObserver");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoaderObserverParam = void 0;
    var LoaderObserverParam = function() {
      function LoaderObserverParam(url, type, bundle, time, options) {
        this.url = url;
        this.type = type;
        this.bundle = bundle;
        this.time = time;
        this.options = options;
      }
      return LoaderObserverParam;
    }();
    exports.LoaderObserverParam = LoaderObserverParam;
    cc._RF.pop();
  }, {} ],
  LoadingTurnState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20408FWxQpEipYWjoDKBaja", "LoadingTurnState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var assetsManager_1 = require("../../manager/assetsManager");
    var config_1 = require("../../config/config");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingTurnState = function() {
      function LoadingTurnState() {}
      LoadingTurnState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      LoadingTurnState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          var loadingNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING);
          loadingNode.zIndex = cc.macro.MAX_ZINDEX;
          _this.entity.uiNode.addChild(loadingNode);
          res();
        });
      };
      LoadingTurnState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      LoadingTurnState.prototype.exit = function(data) {
        this.entity.uiNode.removeChild(assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING));
      };
      LoadingTurnState = __decorate([ ccclass ], LoadingTurnState);
      return LoadingTurnState;
    }();
    exports.default = LoadingTurnState;
    cc._RF.pop();
  }, {
    "../../config/config": "config",
    "../../manager/assetsManager": "assetsManager"
  } ],
  LocalStorageUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "676296dMfZL34SaOUS558rH", "LocalStorageUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LocalStorageUtils = void 0;
    var LocalStorageUtils = function() {
      function LocalStorageUtils() {}
      LocalStorageUtils.removeItem = function(key) {
        localStorage.removeItem(key);
      };
      LocalStorageUtils.setObject = function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      };
      LocalStorageUtils.getObject = function(key) {
        var obj = localStorage.getItem(key);
        if ("" == obj) return null;
        return JSON.parse(obj);
      };
      LocalStorageUtils.setBool = function(key, value) {
        localStorage.setItem(key, value.toString());
      };
      LocalStorageUtils.getBool = function(key) {
        return "true" == localStorage.getItem(key);
      };
      LocalStorageUtils.setInt = function(key, value) {
        localStorage.setItem(key, value.toString());
      };
      LocalStorageUtils.getInt = function(key) {
        return Number(localStorage.getItem(key));
      };
      LocalStorageUtils.setString = function(key, value) {
        localStorage.setItem(key, value);
      };
      LocalStorageUtils.getString = function(key) {
        return localStorage.getItem(key);
      };
      return LocalStorageUtils;
    }();
    exports.LocalStorageUtils = LocalStorageUtils;
    cc._RF.pop();
  }, {} ],
  LogSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b1c82Zoc5Hw6y5lTxDvSpX", "LogSystem");
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
    var kit_1 = require("../../kit");
    var ASystem_1 = require("../interface/ASystem");
    var LogSystem = function(_super) {
      __extends(LogSystem, _super);
      function LogSystem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isDebug = true;
        _this.gameName = "";
        _this.gameVersion = "";
        _this.isPrintTime = false;
        return _this;
      }
      Object.defineProperty(LogSystem, "instance", {
        get: function() {
          null == LogSystem._instance && (LogSystem._instance = new LogSystem());
          return LogSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      LogSystem.prototype.init = function(outAdapter, gameName, gameVersion, isPrintTime) {
        var _this = this;
        void 0 === isPrintTime && (isPrintTime = false);
        return new Promise(function(res, rea) {
          _this.gameName = gameName || "";
          _this.gameVersion = gameVersion || "";
          _this.outAdapter = outAdapter;
          _this.isPrintTime = isPrintTime;
          res();
        });
      };
      LogSystem.prototype.release = function() {
        this.outAdapter = null;
        LogSystem._instance = null;
      };
      LogSystem.prototype.print = function(type, messages) {
        var gameName = this.gameName ? "[" + this.gameName + "]" : "";
        var gameVersion = this.gameName ? "[" + this.gameVersion + "]" : "";
        console[type](new Date().toLocaleString() + " " + type + " " + gameName + " " + gameVersion + "\t", messages);
        this && this.outAdapter && this.outAdapter(new Date().toLocaleString() + type + " " + gameName + " " + gameVersion + "\t", messages);
      };
      LogSystem.prototype.obj2String = function(messages) {
        var str = "";
        messages.forEach(function(element) {
          str += "object" == typeof messages ? JSON.stringify(element) : element;
        });
        return str;
      };
      LogSystem.error = function(messages) {
        kit_1.kit.system.log.print("error", messages);
      };
      LogSystem.warn = function(messages) {
        kit_1.kit.system.log.print("warn", messages);
      };
      LogSystem.log = function(messages) {
        kit_1.kit.system.log.isDebug && kit_1.kit.system.log.print("log", messages);
      };
      LogSystem.info = function(messages) {
        kit_1.kit.system.log.print("info", messages);
      };
      return LogSystem;
    }(ASystem_1.default);
    exports.default = LogSystem;
    cc._RF.pop();
  }, {
    "../../kit": "kit",
    "../interface/ASystem": "ASystem"
  } ],
  MessageDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cc65yp7cJCq46IarVxd8u/", "MessageDispatcher");
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
    exports.TreeSet = exports.MessageDispatcher = void 0;
    var Telegram_1 = require("./Telegram");
    var EntityManager_1 = require("../entity/EntityManager");
    var MessageDispatcher = function() {
      function MessageDispatcher() {
        this.SEND_MSG_IMMEDIATELY = 0;
        this.NO_ADDITIONAL_INFO = 0;
        this.PriorityQ = new TreeSet(function(a, b) {
          return a - b;
        });
        this.showList = new Array();
      }
      Object.defineProperty(MessageDispatcher, "instance", {
        get: function() {
          null == this._instance && (this._instance = new MessageDispatcher());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      MessageDispatcher.prototype.Discharge = function(pReceiver, telegram) {
        this.showList.push(telegram);
        !pReceiver.stateMachine.HandleMessage(telegram);
      };
      Object.defineProperty(MessageDispatcher.prototype, "showListData", {
        get: function() {
          return this.showList;
        },
        enumerable: false,
        configurable: true
      });
      MessageDispatcher.prototype.DispatchMessage = function(sender, receiver, msg, info, delay) {
        void 0 === info && (info = null);
        void 0 === delay && (delay = 0);
        var pSender = EntityManager_1.default.instance.getEntityFromID(sender);
        var pReceiver = EntityManager_1.default.instance.getEntityFromID(receiver);
        if (null == pReceiver) {
          console.warn("\nWarning! No Receiver with ID of " + receiver + " found");
          return;
        }
        var telegram = new Telegram_1.default(0, sender, receiver, msg, info);
        if (delay <= 0) this.Discharge(pReceiver, telegram); else {
          telegram.DispatchTime = Date.now();
          this.PriorityQ.add(telegram);
        }
      };
      MessageDispatcher.prototype.DispatchDelayedMessages = function() {
        while (!this.PriorityQ.isEmpty && this.PriorityQ.first.DispatchTime <= Date.now() && this.PriorityQ.first.DispatchTime > 0) {
          var telegram = this.PriorityQ.first;
          var pReceiver = EntityManager_1.default.instance.getEntityFromID(telegram.Receiver);
          this.Discharge(pReceiver, telegram);
          this.PriorityQ.remove(this.PriorityQ.first);
        }
      };
      MessageDispatcher.prototype.DispatchSimpleMessage = function(sender, receiver) {
        var pSender = sender;
        var pReceiver = receiver;
        if (null == pReceiver) {
          console.warn("\nWarning! No Receiver with ID of " + receiver + " found");
          return;
        }
        var telegram = new Telegram_1.default(0, pSender.sid, receiver.sid, 0, null);
        this.Discharge(pReceiver, telegram);
      };
      return MessageDispatcher;
    }();
    exports.MessageDispatcher = MessageDispatcher;
    var TreeSet = function(_super) {
      __extends(TreeSet, _super);
      function TreeSet(sort) {
        var _this = _super.call(this) || this;
        _this.sortFun = sort;
        return _this;
      }
      TreeSet.prototype.add = function(data) {
        return _super.prototype.add.call(this, data);
      };
      TreeSet.prototype.remove = function(data) {
        return this.delete(data);
      };
      Object.defineProperty(TreeSet.prototype, "isEmpty", {
        get: function() {
          return 0 === this.size;
        },
        enumerable: false,
        configurable: true
      });
      return TreeSet;
    }(Set);
    exports.TreeSet = TreeSet;
    cc._RF.pop();
  }, {
    "../entity/EntityManager": "EntityManager",
    "./Telegram": "Telegram"
  } ],
  MessageType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d41cISs+hO0YY9dOHhPG2r", "MessageType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MessageType = void 0;
    var MessageType = function() {
      function MessageType() {}
      return MessageType;
    }();
    exports.MessageType = MessageType;
    cc._RF.pop();
  }, {} ],
  MonitorUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75942F4+MlARbFMFbgazvPL", "MonitorUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MonitorUtils = void 0;
    var MonitorUtils = function() {
      function MonitorUtils() {}
      MonitorUtils.init = function() {
        var _this = this;
        this.fps();
        this.elem = document.createElement("monitor");
        this.elem.setAttribute("width", "200");
        this.elem.setAttribute("height", "400");
        this.elem.style.fontSize = "10px";
        document.body.appendChild(this.elem);
        setInterval(function() {
          _this.performance();
          _this.elem.innerHTML = _this.getInfo();
        }, 1e3);
      };
      MonitorUtils.fps = function() {
        var times = [];
        var fps = 0;
        function refreshLoop() {
          window.requestAnimationFrame(function() {
            var now = (performance || Date).now();
            while (times.length > 0 && times[0] <= now - 1e3) times.shift();
            times.push(now);
            fps = times.length;
            refreshLoop();
            MonitorUtils.showData["FPS"] = fps;
          });
        }
        refreshLoop();
      };
      MonitorUtils.performance = function() {
        var performance = window["performance"] || window["msPerformance"] || window["webkitPerformance"];
        if (!performance) return;
        var m = performance.memory;
        this.showData["\u5185\u5b58\u5927\u5c0f\u9650\u5236"] = (m.jsHeapSizeLimit / 1048576).toFixed(2) + "MB";
        this.showData["\u53ef\u4f7f\u7528\u5185\u5b58"] = (m.totalJSHeapSize / 1048576).toFixed(2) + "MB";
        this.showData["\u5360\u7528\u5185\u5b58"] = (m.usedJSHeapSize / 1048576).toFixed(2) + "MB";
        var t = performance.timing;
        this.showData["\u767d\u5c4f\u8017\u65f6"] = t.responseStart - t.navigationStart + "ms";
        this.showData["DNS\u67e5\u8be2\u8017\u65f6"] = t.domainLookupEnd - t.domainLookupStart + "ms";
        this.showData["HTTP\u8bf7\u6c42\u8017\u65f6"] = t.responseEnd - t.requestStart + "ms";
        this.showData["TCP\u94fe\u63a5\u8017\u65f6"] = t.connectEnd - t.connectStart + "ms";
        this.showData["load\u4e8b\u4ef6\u8017\u65f6"] = t.loadEventEnd - t.loadEventStart + "ms";
        this.showData["onload\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u65f6\u95f4"] = t.loadEventEnd - t.navigationStart + "ms";
        var dataStr = "";
        for (var key in this.showData) dataStr += key + ": " + this.showData[key] + "\n";
      };
      MonitorUtils.getInfo = function() {
        var dataStr = "";
        for (var key in this.showData) dataStr += key + ": " + this.showData[key] + "</br>";
        return dataStr;
      };
      MonitorUtils.showData = {};
      MonitorUtils.elem = null;
      return MonitorUtils;
    }();
    exports.MonitorUtils = MonitorUtils;
    cc._RF.pop();
  }, {} ],
  NoviceGuideState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33a756rpttCt4CTRl4NmslI", "NoviceGuideState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var assetsManager_1 = require("../../manager/assetsManager");
    var config_1 = require("../../config/config");
    var event_1 = require("../../config/event");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NoviceGuideState = function() {
      function NoviceGuideState() {}
      NoviceGuideState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      NoviceGuideState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          var guideNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_NOVICE_GUIDE);
          if (guideNode) {
            _this.entity.uiNode.addChild(guideNode);
            kit_1.kit.manager.Event.emit(event_1.NOVICE_GUIDE_ENTER);
            res();
            return;
          }
          kit_1.kit.util.Bundle.loadBundle(config_1.BUNDLE_ROOT + "/" + config_1.BUNDLE_COMPONENTS).then(function(bundle) {
            bundle.load(config_1.BUNDLE_NOVICE_GUIDE + "/" + config_1.BUNDLE_NOVICE_GUIDE, cc.Prefab, function(error, prefab) {
              if (error) {
                rej(error);
                return;
              }
              guideNode = cc.instantiate(prefab);
              assetsManager_1.default.instance.addGlobalNode(guideNode);
              _this.entity.uiNode.addChild(guideNode);
              res();
            });
          });
        });
      };
      NoviceGuideState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      NoviceGuideState.prototype.exit = function(data) {
        var guideNode = assetsManager_1.default.instance.getGlobalNode("noviceGuide");
        this.entity.uiNode.removeChild(guideNode);
      };
      NoviceGuideState = __decorate([ ccclass ], NoviceGuideState);
      return NoviceGuideState;
    }();
    exports.default = NoviceGuideState;
    cc._RF.pop();
  }, {
    "../../../kit/kit": "kit",
    "../../config/config": "config",
    "../../config/event": "event",
    "../../manager/assetsManager": "assetsManager"
  } ],
  NumberUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6339tZeZ5DQKLKPcC5SkIm", "NumberUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NumberUtils = void 0;
    var NumberUtils = function() {
      function NumberUtils() {}
      NumberUtils.random = function(lower, upper) {
        var range = upper - lower + 1;
        return Math.floor(Math.random() * range) + lower;
      };
      NumberUtils.randomf = function(lower, upper) {
        return Math.random() * (upper - lower) + lower;
      };
      NumberUtils.floatSub = function(arg1, arg2) {
        var r1, r2, m, n;
        try {
          r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = r1 >= r2 ? r1 : r2;
        var result = (arg1 * m - arg2 * m) / m;
        var tmp = result.toFixed(n);
        return parseFloat(tmp);
      };
      NumberUtils.floatMul = function(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
          m += s1.split(".")[1].length;
        } catch (e) {}
        try {
          m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
      };
      NumberUtils.floatDiv = function(arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
          t1 = arg1.toString().split(".")[1].length;
        } catch (e) {}
        try {
          t2 = arg2.toString().split(".")[1].length;
        } catch (e) {}
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return r1 / r2 * Math.pow(10, t2 - t1);
      };
      NumberUtils.floatTok = function(arg1) {
        if (arg1 < 1e3) return arg1.toString();
        var t1 = Math.floor(arg1 / 1e3);
        var t2 = Math.floor(arg1 % 1e3 / 100);
        if (t2 > 0) return t1 + "." + t2 + "k";
        return t1 + "k";
      };
      NumberUtils.floatSqrt = function(arg1, arg2, arg3, arg4) {
        var len = Math.sqrt(arg1 * arg1 + arg2 * arg2);
        var mul = arg3 + arg4 / len;
        return mul;
      };
      return NumberUtils;
    }();
    exports.NumberUtils = NumberUtils;
    cc._RF.pop();
  }, {} ],
  ParseTemplateUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a826zgVG5PzJPSbnbPOIgg", "ParseTemplateUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ParseTemplateUtils = void 0;
    var ParseTemplateUtils = function() {
      function ParseTemplateUtils() {}
      ParseTemplateUtils.parseSrt = function(srtText) {
        var data = [];
        function ToSeconds(t) {
          var s = 0;
          if (t) {
            var p = t.split(":");
            for (var i = 0; i < p.length; i++) s = 60 * s + parseFloat(p[i].replace(",", "."));
          }
          return s;
        }
        var json = srtText;
        json.split(/\n\s\n/).filter(function(item) {
          return "" != item;
        }).map(function(item, index) {
          var textItem = item.split(/\n/);
          data.push({
            index: index,
            sort: textItem[0],
            text: textItem[2],
            translate: textItem[3],
            startTime: ToSeconds(textItem[1].split(" --\x3e ")[0]),
            endTime: ToSeconds(textItem[1].split(" --\x3e ")[1]),
            timeLine: textItem[1],
            isShow: false
          });
        });
        return data;
      };
      return ParseTemplateUtils;
    }();
    exports.ParseTemplateUtils = ParseTemplateUtils;
    cc._RF.pop();
  }, {} ],
  PicBookDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3da23ASgG1IvJSB0TvXSXQQ", "PicBookDataManager");
    "use strict";
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
    exports.PicBookDataManager = void 0;
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var interfaceVo_1 = require("../structure/interfaceVo");
    var BOOK_LIST_MANAGER_SAVE_KEY = "BOOK_LIST_MANAGER_SAVE_KEY";
    var PicBookDataManager = function() {
      function PicBookDataManager() {
        this.picBookItemList = [];
      }
      Object.defineProperty(PicBookDataManager, "instance", {
        get: function() {
          PicBookDataManager._instance || (PicBookDataManager._instance = new PicBookDataManager());
          return PicBookDataManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      PicBookDataManager.prototype.init = function() {
        return __awaiter(this, void 0, Promise, function() {
          var picBookListConfig, unLockData, key, config, data;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getPicBookListConfig() ];

             case 1:
              picBookListConfig = _a.sent();
              unLockData = kit_1.kit.util.LocalStorage.getObject(BOOK_LIST_MANAGER_SAVE_KEY) || {};
              for (key in picBookListConfig) {
                config = picBookListConfig[key];
                data = new interfaceVo_1.BookItemData(config, unLockData[config.id] && unLockData[config.id].unlock || config.unlock);
                this.picBookItemList.push(data);
              }
              cc.log(" ===this.picBookItemList: ", this.picBookItemList);
              return [ 2 ];
            }
          });
        });
      };
      PicBookDataManager.prototype.getPicBookListConfig = function() {
        return new Promise(function(res, rej) {
          res(config_1.PICTURE_BOOK_LIST_CONFIG);
        });
      };
      PicBookDataManager.prototype.getPicBookListData = function() {
        return this.picBookItemList;
      };
      PicBookDataManager.prototype.getPicBookDataById = function(id) {
        return this.picBookItemList.find(function(ele) {
          return ele.id == id;
        });
      };
      PicBookDataManager.prototype.setPicBookItemUnlockById = function(id) {
        var picBookData = this.picBookItemList.find(function(ele) {
          return ele.id == id;
        });
        picBookData ? picBookData.setUnlock() : cc.warn("picBook data nil! picBook id: " + id);
        this.save();
      };
      PicBookDataManager.prototype.save = function() {
        var obj = {};
        this.picBookItemList.forEach(function(val) {
          var key = val.id;
          obj[key] = {};
          obj[key]["unlock"] = val.unlock;
        });
        kit_1.kit.util.LocalStorage.setObject(BOOK_LIST_MANAGER_SAVE_KEY, obj);
      };
      return PicBookDataManager;
    }();
    exports.PicBookDataManager = PicBookDataManager;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../structure/interfaceVo": "interfaceVo"
  } ],
  PlatformSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "702da1e2StK1YdFjaEshRze", "PlatformSystem");
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
    var AndroidAdapter_1 = require("./AndroidAdapter");
    var IosAdapter_1 = require("./IosAdapter");
    var WebAdapter_1 = require("./WebAdapter");
    var WXLittleGameAdapter_1 = require("./WXLittleGameAdapter");
    var WXBrowserAdapter_1 = require("./WXBrowserAdapter");
    var ASystem_1 = require("../../system/interface/ASystem");
    var DebuggerAdapter_1 = require("./DebuggerAdapter");
    var PlatformSystem = function(_super) {
      __extends(PlatformSystem, _super);
      function PlatformSystem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(PlatformSystem.prototype, "isBrowser", {
        get: function() {
          return cc.sys.isBrowser;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isWXBrowser", {
        get: function() {
          return this.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isSafariBrowser", {
        get: function() {
          return this.isBrowser && cc.sys.browserType === cc.sys.BROWSER_TYPE_SAFARI;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isNative", {
        get: function() {
          return cc.sys.isNative;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isDebug", {
        get: function() {
          return this.adapter instanceof DebuggerAdapter_1.default;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isWeChat", {
        get: function() {
          return cc.sys.platform === cc.sys.WECHAT_GAME;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isAndroid", {
        get: function() {
          return cc.sys.os === cc.sys.OS_ANDROID;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PlatformSystem.prototype, "isIOS", {
        get: function() {
          return cc.sys.os === cc.sys.OS_IOS;
        },
        enumerable: false,
        configurable: true
      });
      PlatformSystem.prototype.init = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            this.isWeChat ? this.adapter = new WXLittleGameAdapter_1.default() : this.isBrowser ? this.isWXBrowser ? this.adapter = new WXBrowserAdapter_1.default() : window.location.href.indexOf("localhost:") > -1 ? this.adapter = new DebuggerAdapter_1.default() : this.adapter = new WebAdapter_1.default() : this.isNative && (this.isAndroid ? this.adapter = new AndroidAdapter_1.default() : this.isIOS && (this.adapter = new IosAdapter_1.default()));
            return [ 2, Promise.resolve() ];
          });
        });
      };
      PlatformSystem.prototype.release = function() {
        this.adapter = null;
        PlatformSystem._instance = null;
      };
      Object.defineProperty(PlatformSystem, "instance", {
        get: function() {
          null == PlatformSystem._instance && (PlatformSystem._instance = new PlatformSystem());
          return PlatformSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      return PlatformSystem;
    }(ASystem_1.default);
    exports.default = PlatformSystem;
    cc._RF.pop();
  }, {
    "../../system/interface/ASystem": "ASystem",
    "./AndroidAdapter": "AndroidAdapter",
    "./DebuggerAdapter": "DebuggerAdapter",
    "./IosAdapter": "IosAdapter",
    "./WXBrowserAdapter": "WXBrowserAdapter",
    "./WXLittleGameAdapter": "WXLittleGameAdapter",
    "./WebAdapter": "WebAdapter"
  } ],
  PointSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5aa4aeK1zFKrbmAgAmatMt0", "PointSystem");
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
    exports.PointType = void 0;
    var ASystem_1 = require("../interface/ASystem");
    var PointType = function() {
      function PointType() {}
      PointType.TYPE_UI_LOADE = "UI\u52a0\u8f7d";
      PointType.TYPE_HTTP = "HTTP\u8bf7\u6c42";
      PointType.TYPE_TEST = "\u6d4b\u8bd5";
      return PointType;
    }();
    exports.PointType = PointType;
    var PointSystem = function(_super) {
      __extends(PointSystem, _super);
      function PointSystem() {
        return _super.call(this) || this;
      }
      Object.defineProperty(PointSystem, "instance", {
        get: function() {
          null == PointSystem._instance && (PointSystem._instance = new PointSystem());
          return PointSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      PointSystem.prototype.init = function(isProduction, gameName, plarform, gameVersion) {
        var _this = this;
        return new Promise(function(res, rea) {
          _this.url = isProduction ? PointSystem.URL_BASE_PRODUCTION : PointSystem.URL_BASE_TEST;
          _this.gameName = gameName || "";
          _this.gameVersion = gameVersion || "version is null";
          _this.plarform = plarform || "";
          res();
        });
      };
      PointSystem.prototype.release = function() {
        PointSystem._instance = null;
      };
      PointSystem.prototype.send = function(type, detail) {};
      PointSystem.URL_BASE_TEST = "http://game.ivydad.com.cn";
      PointSystem.URL_BASE_PRODUCTION = "https://game.ivydad.com";
      PointSystem.URL_API = "/api/mobile/tool/recordLogWeex";
      return PointSystem;
    }(ASystem_1.default);
    exports.default = PointSystem;
    cc._RF.pop();
  }, {
    "../interface/ASystem": "ASystem"
  } ],
  PoolUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dca63Q85FtDGKRu9Y9GXL9l", "PoolUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PoolUtils = void 0;
    var LogSystem_1 = require("../system/log/LogSystem");
    var PoolUtils = function() {
      function PoolUtils() {}
      PoolUtils.initPool = function(type, className, num) {
        null == this.poolArray[type] && (this.poolArray[type] = new Array());
        this.classArray[type] = className;
        for (var i = 0; i < num; i++) {
          var object = new className();
          this.poolArray[type].push(object);
        }
        LogSystem_1.default.log("\u521d\u59cb\u5316" + type + "\u6570\u91cf\uff1a" + this.poolArray[type].length);
      };
      PoolUtils.getPool = function(type) {
        if (this.poolArray[type].length > 0) {
          var object = this.poolArray[type].shift();
          return object;
        }
        return new this.classArray[type]();
      };
      PoolUtils.putPool = function(type, object) {
        object && this.poolArray[type].push(object);
      };
      PoolUtils.clear = function(type) {
        while (this.poolArray[type] && this.poolArray[type].length > 0) {
          var object = this.poolArray[type].shift();
          object.parent = null;
        }
      };
      PoolUtils.clearAll = function() {
        if (this.poolArray) for (var key in this.poolArray) if (this.poolArray.hasOwnProperty(key)) {
          var pool = this.poolArray[key];
          while (pool && pool.length > 0) {
            var object = pool.shift();
            object.parent = null;
          }
        }
        this.poolArray = {};
        this.classArray = [];
      };
      PoolUtils.poolArray = {};
      PoolUtils.classArray = [];
      return PoolUtils;
    }();
    exports.PoolUtils = PoolUtils;
    cc._RF.pop();
  }, {
    "../system/log/LogSystem": "LogSystem"
  } ],
  PopupBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a8712icdtJ7IM58sMVyAGc", "PopupBase");
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
    var PopupBase = function(_super) {
      __extends(PopupBase, _super);
      function PopupBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.main = null;
        _this.animDuration = .3;
        _this.blocker = null;
        _this.options = null;
        _this.finishCallback = null;
        return _this;
      }
      PopupBase.prototype.show = function(options, duration) {
        var _this = this;
        void 0 === duration && (duration = this.animDuration);
        return new Promise(function(res) {
          _this.options = options;
          var background = _this.background;
          var main = _this.main;
          _this.node.active = true;
          background.active = true;
          background.opacity = 0;
          main.active = true;
          main.scale = .5;
          main.opacity = 0;
          _this.init(_this.options);
          _this.updateDisplay(_this.options);
          cc.tween(background).to(.8 * duration, {
            opacity: 200
          }).start();
          cc.tween(main).to(duration, {
            scale: 1,
            opacity: 255
          }, {
            easing: "backOut"
          }).call(function() {
            _this.onShow && _this.onShow();
            res();
          }).start();
        });
      };
      PopupBase.prototype.hide = function(suspended, duration) {
        var _this = this;
        void 0 === suspended && (suspended = false);
        void 0 === duration && (duration = this.animDuration);
        return new Promise(function(res) {
          var node = _this.node;
          if (0 !== duration) {
            var blocker = _this.blocker;
            if (!blocker) {
              blocker = _this.blocker = new cc.Node("blocker");
              blocker.addComponent(cc.BlockInputEvents);
              blocker.setParent(node);
              blocker.setContentSize(node.getContentSize());
            }
            blocker.active = true;
          }
          cc.tween(_this.background).delay(.2 * duration).to(.8 * duration, {
            opacity: 0
          }).start();
          cc.tween(_this.main).to(duration, {
            scale: .5,
            opacity: 0
          }, {
            easing: "backIn"
          }).call(function() {
            _this.blocker && (_this.blocker.active = false);
            node.active = false;
            _this.onHide && _this.onHide(suspended);
            res();
            _this.finishCallback && _this.finishCallback(suspended);
          }).start();
        });
      };
      PopupBase.prototype.init = function(options) {};
      PopupBase.prototype.updateDisplay = function(options) {};
      PopupBase.prototype.onShow = function() {};
      PopupBase.prototype.onHide = function(suspended) {};
      PopupBase.prototype.setFinishCallback = function(callback) {
        this.finishCallback = callback;
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: false
      }) ], PopupBase.prototype, "background", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: false
      }) ], PopupBase.prototype, "main", void 0);
      PopupBase = __decorate([ ccclass ], PopupBase);
      return PopupBase;
    }(cc.Component);
    exports.default = PopupBase;
    cc._RF.pop();
  }, {} ],
  PopupManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30430sT4sNHLZYjvqHRObhy", "PopupManager");
    "use strict";
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
    exports.PopupParams = exports.PopupShowResult = exports.PopupCacheMode = void 0;
    var PopupBase_1 = require("./PopupBase");
    var PopupCacheMode;
    (function(PopupCacheMode) {
      PopupCacheMode[PopupCacheMode["Once"] = 1] = "Once";
      PopupCacheMode[PopupCacheMode["Normal"] = 2] = "Normal";
      PopupCacheMode[PopupCacheMode["Frequent"] = 3] = "Frequent";
    })(PopupCacheMode = exports.PopupCacheMode || (exports.PopupCacheMode = {}));
    var PopupShowResult;
    (function(PopupShowResult) {
      PopupShowResult[PopupShowResult["Done"] = 1] = "Done";
      PopupShowResult[PopupShowResult["Failed"] = 2] = "Failed";
      PopupShowResult[PopupShowResult["Waiting"] = 3] = "Waiting";
    })(PopupShowResult = exports.PopupShowResult || (exports.PopupShowResult = {}));
    var PopupManager = function() {
      function PopupManager() {}
      Object.defineProperty(PopupManager, "prefabCache", {
        get: function() {
          return this._prefabCache;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "nodeCache", {
        get: function() {
          return this._nodeCache;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "current", {
        get: function() {
          return this._current;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "queue", {
        get: function() {
          return this._queue;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "suspended", {
        get: function() {
          return this._suspended;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "CacheMode", {
        get: function() {
          return PopupCacheMode;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PopupManager, "ShowResult", {
        get: function() {
          return PopupShowResult;
        },
        enumerable: false,
        configurable: true
      });
      PopupManager.show = function(targetNode, options, params) {
        var _this = this;
        var path = targetNode.uuid;
        targetNode.active || (targetNode.active = true);
        this._nodeCache.has(path) || this._nodeCache.set(path, targetNode);
        return new Promise(function(res) {
          return __awaiter(_this, void 0, void 0, function() {
            var node, prefab, popup, finishCallback;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                params = this.parseParams(params);
                if (!(this._current || this.locked)) return [ 3, 3 ];
                if (!(params && params.immediately)) return [ 3, 2 ];
                this.locked = false;
                return [ 4, this.suspend() ];

               case 1:
                _a.sent();
                return [ 3, 3 ];

               case 2:
                this.push(targetNode, options, params);
                res(PopupShowResult.Waiting);
                return [ 2 ];

               case 3:
                this._current = {
                  path: targetNode,
                  options: options,
                  params: params
                };
                node = this.getNodeFromCache(path);
                if (!!cc.isValid(node)) return [ 3, 5 ];
                this.loadStartCallback && this.loadStartCallback();
                return [ 4, this.load(path) ];

               case 4:
                prefab = _a.sent();
                this.loadFinishCallback && this.loadFinishCallback();
                if (!cc.isValid(prefab)) {
                  cc.warn("[PopupManager]", "\u5f39\u7a97\u52a0\u8f7d\u5931\u8d25", path);
                  this._current = null;
                  res(PopupShowResult.Failed);
                  return [ 2 ];
                }
                node = cc.instantiate(prefab);
                _a.label = 5;

               case 5:
                popup = node.getComponent(PopupBase_1.default);
                if (!popup) {
                  cc.warn("[PopupManager]", "\u672a\u627e\u5230\u5f39\u7a97\u7ec4\u4ef6", path);
                  this._current = null;
                  res(PopupShowResult.Failed);
                  return [ 2 ];
                }
                this._current.popup = popup;
                this._current.node = node;
                node.setParent(this.container || cc.Canvas.instance.node);
                node.setSiblingIndex(cc.macro.MAX_ZINDEX);
                finishCallback = function(suspended) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var _this = this;
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                       case 0:
                        if (suspended) return [ 2 ];
                        this.locked = this._suspended.length > 0 || this._queue.length > 0;
                        this.recycle(path, node, params.mode);
                        this._current = null;
                        res(PopupShowResult.Done);
                        return [ 4, new Promise(function(_res) {
                          cc.Canvas.instance.scheduleOnce(_res, _this.interval);
                        }) ];

                       case 1:
                        _a.sent();
                        this.next();
                        return [ 2 ];
                      }
                    });
                  });
                };
                popup.setFinishCallback(finishCallback);
                popup.show(options);
                return [ 2 ];
              }
            });
          });
        });
      };
      PopupManager.hide = function() {
        this._current.popup && this._current.popup.hide();
      };
      PopupManager.getNodeFromCache = function(path) {
        var nodeCache = this._nodeCache;
        if (nodeCache.has(path)) {
          var node = nodeCache.get(path);
          if (cc.isValid(node)) return node;
          nodeCache.delete(path);
        }
        var prefabCache = this._prefabCache;
        if (prefabCache.has(path)) {
          var prefab = prefabCache.get(path);
          if (cc.isValid(prefab)) return cc.instantiate(prefab);
          prefabCache.delete(path);
        }
        return null;
      };
      PopupManager.next = function() {
        if (this._current || 0 === this._suspended.length && 0 === this._queue.length) return;
        var request = null;
        request = this._suspended.length > 0 ? this._suspended.shift() : this._queue.shift();
        this.locked = false;
        if (cc.isValid(request.popup)) {
          this._current = request;
          request.popup.show(request.options);
          return;
        }
        this.show(request.path, request.options, request.params);
      };
      PopupManager.push = function(path, options, params) {
        if (!this._current && !this.locked) {
          this.show(path, options, params);
          return;
        }
        this._queue.push({
          path: path,
          options: options,
          params: params
        });
        this._queue.sort(function(a, b) {
          return a.params.priority - b.params.priority;
        });
      };
      PopupManager.suspend = function() {
        return __awaiter(this, void 0, void 0, function() {
          var request;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this._current) return [ 2 ];
              request = this._current;
              this._suspended.push(request);
              return [ 4, request.popup.hide(true) ];

             case 1:
              _a.sent();
              this._current = null;
              return [ 2 ];
            }
          });
        });
      };
      PopupManager.recycle = function(path, node, mode) {
        switch (mode) {
         case PopupCacheMode.Once:
          node.destroy();
          this._nodeCache.delete(path);
          this.release(path);
          break;

         case PopupCacheMode.Normal:
          node.destroy();
          this._nodeCache.delete(path);
          break;

         case PopupCacheMode.Frequent:
          node.removeFromParent(false);
          this._nodeCache.set(path, node);
        }
      };
      PopupManager.load = function(path) {
        var _this = this;
        return new Promise(function(res) {
          var prefabMap = _this._prefabCache;
          if (prefabMap.has(path)) {
            var prefab = prefabMap.get(path);
            if (cc.isValid(prefab)) {
              res(prefab);
              return;
            }
            prefabMap.delete(path);
          }
          cc.resources.load(path, function(error, prefab) {
            if (error) {
              res(null);
              return;
            }
            prefabMap.set(path, prefab);
            prefab.addRef();
            res(prefab);
          });
        });
      };
      PopupManager.release = function(path) {
        var nodeCache = this._nodeCache;
        var node = nodeCache.get(path);
        if (node) {
          nodeCache.delete(path);
          cc.isValid(node) && node.destroy();
          node = null;
        }
        var prefabCache = this._prefabCache;
        var prefab = prefabCache.get(path);
        if (prefab) {
          prefabCache.delete(path);
          prefab.decRef();
          prefab = null;
        }
      };
      PopupManager.parseParams = function(params) {
        if (void 0 == params) return new PopupParams();
        if ("[object Object]" !== Object.prototype.toString.call(params)) {
          cc.warn("[PopupManager]", "\u5f39\u7a97\u53c2\u6570\u65e0\u6548\uff0c\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570");
          return new PopupParams();
        }
        void 0 == params.mode && (params.mode = PopupCacheMode.Normal);
        void 0 == params.priority && (params.priority = 0);
        void 0 == params.immediately && (params.immediately = false);
        return params;
      };
      PopupManager._prefabCache = new Map();
      PopupManager._nodeCache = new Map();
      PopupManager._current = null;
      PopupManager._queue = [];
      PopupManager._suspended = [];
      PopupManager.locked = false;
      PopupManager.container = null;
      PopupManager.interval = .05;
      PopupManager.loadStartCallback = null;
      PopupManager.loadFinishCallback = null;
      return PopupManager;
    }();
    exports.default = PopupManager;
    var PopupParams = function() {
      function PopupParams() {
        this.mode = PopupCacheMode.Normal;
        this.priority = 0;
        this.immediately = false;
      }
      return PopupParams;
    }();
    exports.PopupParams = PopupParams;
    cc._RF.pop();
  }, {
    "./PopupBase": "PopupBase"
  } ],
  PrefabLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d87c0jqE9EgIrXZzwV2exI", "PrefabLoader");
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
    exports.PrefabLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var PrefabLoader = function(_super) {
      __extends(PrefabLoader, _super);
      function PrefabLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PrefabLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      PrefabLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("PrefabLoader loadRemoteRes method not implemented.");
      };
      PrefabLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return PrefabLoader;
    }(BaseLoader_1.default);
    exports.PrefabLoader = PrefabLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  ResLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8978du3zhZMF5QbzeUiEX0m", "ResLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RemoteSpineData = void 0;
    var loader_index_1 = require("./base/loader-index");
    var LoaderObserver_1 = require("./LoaderObserver");
    var RemoteSpineData = function() {
      function RemoteSpineData() {}
      return RemoteSpineData;
    }();
    exports.RemoteSpineData = RemoteSpineData;
    var ResLoader = function() {
      function ResLoader() {}
      ResLoader.init = function() {
        if (!ResLoader._init) {
          ResLoader._defaultMap = new Map();
          ResLoader._defaultMap.set(cc.SpriteFrame, new loader_index_1.ImageLoader());
          ResLoader._defaultMap.set(cc.SpriteAtlas, new loader_index_1.AtlasLoader());
          ResLoader._defaultMap.set(cc.AudioClip, new loader_index_1.AudioLoader());
          ResLoader._defaultMap.set(cc.JsonAsset, new loader_index_1.JsonLoader());
          ResLoader._defaultMap.set(cc.TextAsset, new loader_index_1.TextLoader());
          ResLoader._defaultMap.set(cc.Prefab, new loader_index_1.PrefabLoader());
          ResLoader._defaultMap.set(sp.SkeletonData, new loader_index_1.SpineLoader());
          ResLoader._defaultLoader = new loader_index_1.DefaultLoader();
        }
        ResLoader._init = true;
      };
      ResLoader.addObserver = function(observer) {
        ResLoader._observerList.push(observer);
      };
      ResLoader.removeObserver = function(observer) {
        for (var i = ResLoader._observerList.length - 1; i >= 0; i--) {
          var obs = ResLoader._observerList[i];
          if (obs === observer) {
            ResLoader._observerList.splice(i, 1);
            return true;
          }
        }
        return false;
      };
      ResLoader.loadRes = function(path, options, onComplete, bundle, onProgress) {
        ResLoader.init();
        var curBundle = null;
        var tempType = null;
        if ("object" !== typeof options) {
          tempType = options;
          curBundle = bundle && "string" === typeof bundle && "" !== bundle ? cc.assetManager.getBundle(bundle) : bundle && "string" !== typeof bundle ? bundle : cc.resources;
          if (curBundle) {
            var as = curBundle.get(path, tempType);
            if (as) {
              ResLoader.__beforeLoadRes(new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null));
              onComplete(null, as);
              ResLoader.__afterLoadRes(new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null));
              return;
            }
          }
        }
        var param = new LoaderObserver_1.LoaderObserverParam(path, tempType, curBundle, 0, null);
        ResLoader.__beforeLoadRes(param);
        var loader = ResLoader._defaultMap.get(tempType);
        if (!loader) {
          "object" !== typeof options && cc.log("assets type: " + tempType + " is not exists, default loader insteaded!");
          loader = ResLoader._defaultLoader;
        }
        var startTime = new Date().getTime();
        loader.loadRes(path, options, function(_err, _res) {
          if (onComplete) {
            param.time = new Date().getTime() - startTime;
            ResLoader.__afterLoadRes(param);
            onComplete(_err, _res);
          }
        }, curBundle, onProgress);
      };
      ResLoader.__beforeLoadRes = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.beforeLoadRes(param);
        }
      };
      ResLoader.__afterLoadRes = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.afterLoadRes(param);
        }
      };
      ResLoader.loadDir = function(dir, type, onProgress, onComplete, bundle) {
        var curBundle = null;
        curBundle = bundle && "string" === typeof bundle && "" !== bundle ? cc.assetManager.getBundle(bundle) : bundle && "string" !== typeof bundle ? bundle : cc.resources;
        if (!curBundle) {
          onComplete(new Error("bundle " + bundle + " is not exists!"), null);
          return;
        }
        curBundle.loadDir(dir, type, onProgress, onComplete);
      };
      ResLoader.loadBundle = function(nameOrUrl, options, onComplete) {
        var param = new LoaderObserver_1.LoaderObserverParam(nameOrUrl, null, null, 0, null);
        var startTime = new Date().getTime();
        ResLoader.__beforeLoadBundle(param);
        cc.assetManager.loadBundle(nameOrUrl, options, function(_err, _bundle) {
          param.time = new Date().getTime() - startTime;
          ResLoader.__afterLoadBundle(param);
          onComplete && onComplete(_err, _bundle);
        });
      };
      ResLoader.__beforeLoadBundle = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.beforeLoadBundle(param);
        }
      };
      ResLoader.__afterLoadBundle = function(param) {
        for (var _i = 0, _a = ResLoader._observerList; _i < _a.length; _i++) {
          var obs = _a[_i];
          obs.afterLoadBundle(param);
        }
      };
      ResLoader._defaultLoader = null;
      ResLoader._init = false;
      ResLoader._observerList = [];
      return ResLoader;
    }();
    exports.default = ResLoader;
    cc._RF.pop();
  }, {
    "./LoaderObserver": "LoaderObserver",
    "./base/loader-index": "loader-index"
  } ],
  ResourcesManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28e8651lA1PI5a/mxI+Tgc2", "ResourcesManager");
    "use strict";
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
    exports.ResourceType = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var LogSystem_1 = require("../system/log/LogSystem");
    var ResourceType;
    (function(ResourceType) {
      ResourceType[ResourceType["default"] = 0] = "default";
      ResourceType[ResourceType["Global"] = 1] = "Global";
      ResourceType[ResourceType["Normal"] = 2] = "Normal";
    })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
    var Asset = function() {
      function Asset(resType) {
        this.assetMap = new Map();
        this.resType = resType;
      }
      Asset.prototype.loadBundle = function(bundleName) {
        var _this = this;
        return new Promise(function(reslove, reject) {
          ResLoader_1.default.loadBundle(bundleName, null, function(e, bundle) {
            if (e) {
              reject(e);
              return;
            }
            _this.bundle = bundle;
            reslove(bundle);
          });
        }).catch(function(e) {
          return cc.log(e);
        });
      };
      Asset.prototype.loadRes = function(path, type, finishCb) {
        var _this = this;
        if (this.assetMap.has(path)) {
          var asset = this.assetMap.get(path);
          finishCb && finishCb(null, asset);
          return;
        }
        ResLoader_1.default.loadRes(path, type, function(e, res) {
          _this.assetMap.set(path, res);
          if (finishCb) {
            finishCb(null, _this.assetMap.get(path));
            return;
          }
        }, this.bundle);
      };
      Asset.prototype.release = function(releaseComponents) {
        var _this = this;
        if ("components" == this.bundle.name && !releaseComponents) {
          cc.log("components \u4e0d\u91ca\u653e");
          return;
        }
        this.assetMap.forEach(function(res, key) {
          cc.log("\u91ca\u653e" + res.name);
          cc.assetManager.releaseAsset(res);
          _this.bundle.release(key);
        });
        this.assetMap.clear();
        if (this.resType == ResourceType.Global) return "";
        cc.log("\u91ca\u653ebundle" + this.bundle.name);
        cc.assetManager.removeBundle(this.bundle);
        return this.bundle.name;
      };
      Asset.prototype.releaseWithOutBundle = function(releaseComponents) {
        var _this = this;
        this.assetMap.forEach(function(res, key) {
          cc.log("\u91ca\u653e" + res.name);
          cc.log(_this.bundle);
          _this.bundle.release(key);
        });
        this.assetMap.clear();
        if (this.resType == ResourceType.Global) return "";
        return this.bundle.name;
      };
      return Asset;
    }();
    var ResourcesManager = function() {
      function ResourcesManager() {
        this.assetsMap = new Map();
      }
      Object.defineProperty(ResourcesManager, "instance", {
        get: function() {
          ResourcesManager._instance || (ResourcesManager._instance = new ResourcesManager());
          return ResourcesManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      ResourcesManager.prototype.loadRes = function(bundleName, resPath, resType, assetType, finishCb) {
        var _this = this;
        return new Promise(function(resolve, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var asset, assetClip;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if ("" == bundleName || "" == resPath) {
                  LogSystem_1.default.error("ResourcesManager loadRes bundleName or resPath null");
                  rej();
                  return [ 2 ];
                }
                if (this.assetsMap.has(bundleName)) {
                  asset = this.assetsMap.get(bundleName);
                  asset.loadRes(resPath, assetType, function(e, res) {
                    finishCb && finishCb(e, res);
                    e ? rej(e) : resolve(res);
                  });
                  return [ 2 ];
                }
                assetClip = new Asset(resType);
                return [ 4, assetClip.loadBundle(bundleName) ];

               case 1:
                _a.sent();
                assetClip.loadRes(resPath, assetType, function(e, asset) {
                  _this.assetsMap.set(bundleName, assetClip);
                  finishCb && finishCb(e, asset);
                  e ? rej(e) : resolve(asset);
                });
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          return cc.log(e);
        });
      };
      ResourcesManager.prototype.releaseAsset = function(bundleName, releaseComponents) {
        var _this = this;
        if (bundleName && "" != bundleName) {
          var element = this.assetsMap.get(bundleName);
          var releaseKey = element.release(releaseComponents);
          "" != releaseKey && this.assetsMap.delete(releaseKey);
          return;
        }
        this.assetsMap.forEach(function(element) {
          var releaseKey = element.release(releaseComponents);
          "" != releaseKey && _this.assetsMap.delete(releaseKey);
        });
      };
      ResourcesManager.prototype.releaseRes = function(bundle) {
        if (bundle) {
          var element = this.assetsMap.get(bundle.name);
          if (!element) {
            cc.assetManager.removeBundle(bundle);
            return;
          }
          var releaseKey = element.releaseWithOutBundle();
          "" != releaseKey && this.assetsMap.delete(releaseKey);
          cc.log(this.assetsMap);
          cc.assetManager.removeBundle(bundle);
        }
      };
      return ResourcesManager;
    }();
    exports.default = ResourcesManager;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../system/log/LogSystem": "LogSystem"
  } ],
  SpineLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4be47Vbo+JPB4loyE9tyhHs", "SpineLoader");
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
    exports.SpineLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var SpineLoader = function(_super) {
      __extends(SpineLoader, _super);
      function SpineLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SpineLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      SpineLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("TextLoader loadRemoteRes method not implemented.");
      };
      SpineLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return SpineLoader;
    }(BaseLoader_1.default);
    exports.SpineLoader = SpineLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2c811BybaxF1LHZgLPG8eIg", "StateMachine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateMachine = function() {
      function StateMachine(owner) {
        this.m_pOwner = owner;
        this.m_pCurrentState = null;
        this.m_pPreviousState = null;
        this.m_pGlobalState = {};
      }
      StateMachine.prototype.release = function() {
        this.m_pCurrentState && this.m_pCurrentState.exit();
        if (this.m_pGlobalState) {
          for (var key in this.m_pGlobalState) {
            this.m_pGlobalState[key].exit();
            delete this.m_pGlobalState[key];
          }
          this.m_pGlobalState = null;
        }
      };
      StateMachine.prototype.AddGlobalState = function(state, data) {
        var newState = new state();
        newState.entity = this.m_pOwner;
        this.m_pGlobalState[state] = newState;
        newState.enter(data);
      };
      StateMachine.prototype.RemoveGlobalState = function(state) {
        if (this.m_pGlobalState[state]) {
          this.m_pGlobalState[state].exit();
          delete this.m_pGlobalState[state];
        }
      };
      StateMachine.prototype.Update = function(dt) {
        if (null !== this.m_pGlobalState) for (var key in this.m_pGlobalState) this.m_pGlobalState[key].execute(dt);
        null !== this.m_pCurrentState && this.m_pCurrentState.execute(dt);
      };
      StateMachine.prototype.Transition = function(onTransition) {
        this.m_pPreviousState = this.m_pCurrentState;
        var newState = onTransition(this.m_pPreviousState);
        this.m_pCurrentState = newState;
      };
      StateMachine.prototype.ChangeState = function(pNewState, data) {
        this.m_pPreviousState = this.m_pCurrentState;
        this.m_pPreviousState && this.m_pPreviousState.exit(this.m_pOwner);
        this.m_pCurrentState = new pNewState();
        this.m_pCurrentState.entity = this.m_pOwner;
        this.m_pCurrentState.enter(data);
      };
      StateMachine.prototype.HandleMessage = function(msg) {
        var _this = this;
        if (this.m_pCurrentState && this.m_pCurrentState.onMessage(this.m_pOwner, msg)) return true;
        this.m_pGlobalState && this.m_pGlobalState.forEach(function(element) {
          element.onMessage(_this.m_pOwner, msg);
        });
        return false;
      };
      StateMachine.prototype.RevertPreviousState = function() {
        this.ChangeState(this.m_pPreviousState);
      };
      StateMachine.prototype.isInState = function(state) {
        return this.m_pCurrentState instanceof state;
      };
      StateMachine.prototype.exitCurrentState = function(data) {
        this.CurrentState && this.CurrentState.exit(data);
        this.m_pCurrentState.entity = null;
        this.m_pPreviousState = null;
        this.m_pCurrentState = null;
      };
      Object.defineProperty(StateMachine.prototype, "CurrentState", {
        get: function() {
          return this.m_pCurrentState;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateMachine.prototype, "GlobalState", {
        get: function() {
          return this.m_pGlobalState;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(StateMachine.prototype, "PreviousState", {
        get: function() {
          return this.m_pPreviousState;
        },
        enumerable: false,
        configurable: true
      });
      return StateMachine;
    }();
    exports.default = StateMachine;
    cc._RF.pop();
  }, {} ],
  StringUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2814b97+99CUL+Cwm+WscmL", "StringUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringUtils = void 0;
    var StringUtils = function() {
      function StringUtils() {}
      StringUtils.replaceStr = function(fromIndex, len, sourceStr, replaceCode) {
        void 0 === replaceCode && (replaceCode = "*");
        var tempStr = "";
        var tempLen = sourceStr.length;
        for (var index = 0; index < tempLen; ++index) tempStr += index >= fromIndex && index < fromIndex + len ? replaceCode : sourceStr.charAt(index);
        return tempStr;
      };
      StringUtils.strLength = function(str) {
        if (void 0 === str) return 0;
        var len = 0;
        for (var i = 0; i < str.length; i++) {
          0 != (65280 & str.charCodeAt(i)) && len++;
          len++;
        }
        return len;
      };
      StringUtils.isEmpty = function(obj) {
        return "undefined" == typeof obj || null == obj || "" == obj;
      };
      StringUtils.moreText = function(text, max, moreText) {
        void 0 === moreText && (moreText = "...");
        return text.length > max ? text.substring(0, max - 2) + "..." : text;
      };
      return StringUtils;
    }();
    exports.StringUtils = StringUtils;
    cc._RF.pop();
  }, {} ],
  Telegram: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "547f3B3PUVOD5LDhr3pwNyx", "Telegram");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Telegram = function() {
      function Telegram(time, sender, receiver, msg, info) {
        void 0 === info && (info = null);
        this.SmallestDelay = .25;
        this.Sender = sender;
        this.Receiver = receiver;
        this.Msg = msg;
        this.DispatchTime = time;
        this.time = Date.now();
        this.ExtraInfo = info;
      }
      Object.defineProperty(Telegram.prototype, "sortSerial", {
        get: function() {
          return this.DispatchTime;
        },
        enumerable: false,
        configurable: true
      });
      return Telegram;
    }();
    exports.default = Telegram;
    cc._RF.pop();
  }, {} ],
  TextLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d202eVq+5tNhL8BJUTIDMZp", "TextLoader");
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
    exports.TextLoader = void 0;
    var BaseLoader_1 = require("./BaseLoader");
    var TextLoader = function(_super) {
      __extends(TextLoader, _super);
      function TextLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TextLoader.prototype.loadNetRes = function(path, type, callback) {
        cc.assetManager.loadRemote(path, type, function(e, res) {
          e && cc.error(e);
          callback && callback(e, res);
        });
      };
      TextLoader.prototype.loadRemoteRes = function(path, type, callback) {
        cc.log(path, type, callback);
        throw new Error("TextLoader loadRemoteRes method not implemented.");
      };
      TextLoader.prototype.loadLocalRes = function(path, type, onProgress, callback, bundle) {
        bundle ? bundle.load(path, type, onProgress, callback) : cc.resources.load(path, type, onProgress, callback);
      };
      return TextLoader;
    }(BaseLoader_1.default);
    exports.TextLoader = TextLoader;
    cc._RF.pop();
  }, {
    "./BaseLoader": "BaseLoader"
  } ],
  TimeUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0072fwCK0JFt7Z8LVxyNUC2", "TimeUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TimeUtils = void 0;
    var NumberUtils_1 = require("./NumberUtils");
    var TimeUtils = function() {
      function TimeUtils() {}
      TimeUtils.dateToFormate = function(date, fmt) {
        var o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
          "q+": Math.floor((date.getMonth() + 3) / 3),
          S: date.getMilliseconds()
        };
        /(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
      };
      TimeUtils.toDate = function(time) {
        var result = "";
        if (time <= 0) return "00:00:00";
        var hour = 0;
        if (time >= 3600) {
          hour = Math.floor(NumberUtils_1.NumberUtils.floatDiv(time, 3600));
          time %= 3600;
        }
        var minute = 0;
        if (time >= 60) {
          minute = Math.floor(NumberUtils_1.NumberUtils.floatDiv(time, 60));
          time %= 60;
        }
        var second = Math.floor(time);
        result += hour < 10 ? "0" + hour : hour.toFixed();
        result += ":";
        result += minute < 10 ? "0" + minute : minute.toFixed();
        result += ":";
        result += second < 10 ? "0" + second : second.toFixed();
        return result;
      };
      return TimeUtils;
    }();
    exports.TimeUtils = TimeUtils;
    cc._RF.pop();
  }, {
    "./NumberUtils": "NumberUtils"
  } ],
  TimerSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c5beWHUBpF7qmfxwfaWwte", "TimerSystem");
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
    var ASystem_1 = require("../interface/ASystem");
    var TimerSystem = function(_super) {
      __extends(TimerSystem, _super);
      function TimerSystem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pool = new Array();
        _this._handlers = {};
        _this._currTimer = 0;
        _this._currFrame = 0;
        _this._count = 0;
        _this._index = 0;
        _this._startTime = 0;
        return _this;
      }
      Object.defineProperty(TimerSystem, "instance", {
        get: function() {
          null == TimerSystem._instance && (TimerSystem._instance = new TimerSystem());
          return TimerSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      TimerSystem.prototype.init = function() {
        var _this = this;
        return new Promise(function(res, rej) {
          _this._startTime = Date.now();
          _this._currTimer = Date.now();
          cc.director.getScheduler().enableForTarget(_this);
          cc.director.getScheduler().schedule(_this.onEnterFrame, _this, TimerSystem.INTERVAL);
          res();
        });
      };
      TimerSystem.prototype.onEnterFrame = function(elapsed) {
        this._currFrame++;
        this._currTimer = Date.now();
        var k;
        for (k in this._handlers) if ("undefined" !== k) {
          var handler = this._handlers[k];
          var t = handler.userFrame ? this._currFrame : this._currTimer;
          if (t >= handler.exeTime) {
            var method = handler.method;
            var args = handler.args || [ elapsed ];
            if (handler.repeat) while (t >= handler.exeTime && k in this._handlers) {
              handler.exeTime += handler.delay;
              method.apply(handler.thisObj, args);
            } else {
              method.apply(handler.thisObj, args);
              this.clearTimer(k);
            }
          }
        } else console.log(k);
      };
      TimerSystem.prototype.create = function(useFrame, repeat, delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        var key;
        if (cover) {
          this.clearTimer(method);
          key = method;
        } else key = this._index++;
        if (delay < 1) {
          method.apply(null, args);
          return -1;
        }
        var handler = this._pool.length > 0 ? this._pool.pop() : new TimerHandler();
        handler.userFrame = useFrame;
        handler.repeat = repeat;
        handler.delay = delay;
        handler.method = method;
        handler.thisObj = thisObj;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this._currFrame : this._currTimer);
        this._handlers[key] = handler;
        this._count++;
        return key;
      };
      TimerSystem.prototype.doOnce = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(false, false, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doLoop = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(false, true, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doFrameOnce = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(true, false, delay, method, thisObj, args, cover);
      };
      TimerSystem.prototype.doFrameLoop = function(delay, method, thisObj, args, cover) {
        void 0 === thisObj && (thisObj = null);
        void 0 === args && (args = null);
        void 0 === cover && (cover = true);
        return this.create(true, true, delay, method, thisObj, args, cover);
      };
      Object.defineProperty(TimerSystem.prototype, "count", {
        get: function() {
          return this._count;
        },
        enumerable: false,
        configurable: true
      });
      TimerSystem.prototype.clearTimer = function(method) {
        var handler = this._handlers[method];
        if (null != handler) {
          delete this._handlers[method];
          handler.clear();
          this._pool.push(handler);
          this._count--;
        }
      };
      TimerSystem.prototype.running = function(method) {
        if (null != this._handlers[method]) return true;
        return false;
      };
      TimerSystem.prototype.release = function() {
        for (var handler in this._handlers) this.clearTimer(this._handlers[handler]);
      };
      TimerSystem.INTERVAL = 1 / 60;
      return TimerSystem;
    }(ASystem_1.default);
    exports.default = TimerSystem;
    var TimerHandler = function() {
      function TimerHandler() {
        this.delay = 0;
        this.exeTime = 0;
      }
      TimerHandler.prototype.clear = function() {
        this.method = null;
        this.args = null;
        this.thisObj = null;
      };
      return TimerHandler;
    }();
    cc._RF.pop();
  }, {
    "../interface/ASystem": "ASystem"
  } ],
  UIDataInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef8560ppUdBhbsoxPI9mRRN", "UIDataInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIDataInfo = exports.UIDataFrameType = exports.UIType = void 0;
    var UIType;
    (function(UIType) {
      UIType[UIType["TYPE_UI"] = 0] = "TYPE_UI";
      UIType[UIType["TYPE_POP"] = 1] = "TYPE_POP";
      UIType[UIType["TYPE_TIPS"] = 2] = "TYPE_TIPS";
      UIType[UIType["TYPE_TOP"] = 3] = "TYPE_TOP";
    })(UIType = exports.UIType || (exports.UIType = {}));
    var UIDataFrameType;
    (function(UIDataFrameType) {
      UIDataFrameType[UIDataFrameType["Dialog"] = 0] = "Dialog";
      UIDataFrameType[UIDataFrameType["Screen"] = 1] = "Screen";
    })(UIDataFrameType = exports.UIDataFrameType || (exports.UIDataFrameType = {}));
    var UIDataInfo = function() {
      function UIDataInfo(name, uiType, uiPath, openAnime, initType) {
        void 0 === initType && (initType = 0);
        this.name = name;
        this.uiType = uiType;
        this.uiPath = uiPath;
        this.openAnime = openAnime;
        this.initType = initType;
      }
      Object.defineProperty(UIDataInfo.prototype, "fullPath", {
        get: function() {
          var localPath = "";
          return this.uiPath ? localPath + this.uiPath + "/" + this.name : localPath + this.name;
        },
        enumerable: false,
        configurable: true
      });
      return UIDataInfo;
    }();
    exports.UIDataInfo = UIDataInfo;
    window["_UIDataInfo"] = UIDataInfo;
    cc._RF.pop();
  }, {} ],
  UIKitUIDataInfoList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f44c6TnFPFKAYhgEbvMverF", "UIKitUIDataInfoList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIKitUIDataInfoList = void 0;
    var UIDataInfo_1 = require("./UIDataInfo");
    var UIKitUIDataInfoList = function() {
      function UIKitUIDataInfoList() {}
      UIKitUIDataInfoList.ConfirmDialog = new UIDataInfo_1.UIDataInfo("ConfirmDialog", UIDataInfo_1.UIType.TYPE_POP, "../script/uikit/ConfirmDialog", 0, 1);
      UIKitUIDataInfoList.JudgeScoreAni = new UIDataInfo_1.UIDataInfo("JudgeScoreAni", UIDataInfo_1.UIType.TYPE_POP, "../script/uikit/JudgeScore", 0, 1);
      UIKitUIDataInfoList.GameEndAni = new UIDataInfo_1.UIDataInfo("GameEndAni", UIDataInfo_1.UIType.TYPE_POP, "../script/uikit/GameEnd", 0, 1);
      UIKitUIDataInfoList.ContinualCorrect = new UIDataInfo_1.UIDataInfo("ContinualCorrect", UIDataInfo_1.UIType.TYPE_POP, "../script/uikit/ContinualCorrect", 0, 1);
      UIKitUIDataInfoList.AnalyseWrongQuestion = new UIDataInfo_1.UIDataInfo("AnalyseWrongQuestion", UIDataInfo_1.UIType.TYPE_POP, "../script/uikit/AnalyseWrongQuestion", 0, 1);
      return UIKitUIDataInfoList;
    }();
    exports.UIKitUIDataInfoList = UIKitUIDataInfoList;
    cc._RF.pop();
  }, {
    "./UIDataInfo": "UIDataInfo"
  } ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afe99EDhylCKJOnbaXmFH79", "UIManager");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ENUM_UIKIT_INNER_PREFAB = void 0;
    var BaseUI_1 = require("./BaseUI");
    var UIDataInfo_1 = require("./UIDataInfo");
    var ENUM_UIKIT_INNER_PREFAB;
    (function(ENUM_UIKIT_INNER_PREFAB) {
      ENUM_UIKIT_INNER_PREFAB[ENUM_UIKIT_INNER_PREFAB["ENUM_UIKIT_INNER_PREFAB_JUDGE_SCORE"] = 1] = "ENUM_UIKIT_INNER_PREFAB_JUDGE_SCORE";
      ENUM_UIKIT_INNER_PREFAB[ENUM_UIKIT_INNER_PREFAB["ENUM_UIKIT_INNER_PREFAB_GAME_END_GOODJOB"] = 2] = "ENUM_UIKIT_INNER_PREFAB_GAME_END_GOODJOB";
      ENUM_UIKIT_INNER_PREFAB[ENUM_UIKIT_INNER_PREFAB["ENUM_UIKIT_INNER_PREFAB_CONFIRM_DIALOG"] = 3] = "ENUM_UIKIT_INNER_PREFAB_CONFIRM_DIALOG";
      ENUM_UIKIT_INNER_PREFAB[ENUM_UIKIT_INNER_PREFAB["ENUM_UIKIT_INNER_PREFAB_CONTINUAL_CORRECT"] = 4] = "ENUM_UIKIT_INNER_PREFAB_CONTINUAL_CORRECT";
      ENUM_UIKIT_INNER_PREFAB[ENUM_UIKIT_INNER_PREFAB["ENUM_UIKIT_INNER_PREFAB_ANALYSE_WRONG_QUESTION"] = 5] = "ENUM_UIKIT_INNER_PREFAB_ANALYSE_WRONG_QUESTION";
    })(ENUM_UIKIT_INNER_PREFAB = exports.ENUM_UIKIT_INNER_PREFAB || (exports.ENUM_UIKIT_INNER_PREFAB = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.uiLayer = null;
        _this.popLayer = null;
        _this.tipsLayer = null;
        _this.topLayer = null;
        _this.judgeScorePrefab = null;
        _this.gameEndPrefab = null;
        _this.confirmDialogPrefab = null;
        _this.continualCorrectPrefab = null;
        _this.analyseWrongQuestionPrefab = null;
        _this.prefabEnumMap = {};
        _this.runtimeUINodeEnumMap = {};
        _this.delayShowArray = [];
        _this.gameLiveState = true;
        return _this;
      }
      UIManager_1 = UIManager;
      UIManager.Instance = function() {
        if (null != UIManager_1._Instance) return UIManager_1._Instance;
        return null;
      };
      UIManager.prototype.attackWidget = function(node) {
        if (!node.getComponent(cc.Widget)) {
          var widget = node.addComponent(cc.Widget);
          widget.isAlignTop = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.isAlignBottom = true;
          widget.top = 0;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
        }
      };
      UIManager.prototype.onLoad = function() {
        console.log("UIManager onLoad");
        UIManager_1._Instance && console.error("UIManager onLoad error: UIManager should be single instance, please check need not attached UIManager.");
        UIManager_1._Instance = this;
        var need_add = false;
        if (null == this.uiLayer) {
          this.uiLayer = new cc.Node();
          this.node.addChild(this.uiLayer);
          need_add = true;
        }
        this.attackWidget(this.uiLayer);
        if (null == this.popLayer) {
          this.popLayer = new cc.Node();
          this.node.addChild(this.popLayer);
          need_add = true;
        }
        this.attackWidget(this.popLayer);
        if (null == this.tipsLayer) {
          this.tipsLayer = new cc.Node();
          this.node.addChild(this.tipsLayer);
          need_add = true;
        }
        this.attackWidget(this.tipsLayer);
        if (null == this.topLayer) {
          this.topLayer = new cc.Node();
          this.node.addChild(this.topLayer);
          need_add = true;
        }
        this.attackWidget(this.topLayer);
        if (need_add) {
          this.uiLayer.zIndex = 10001;
          this.popLayer.zIndex = 10002;
          this.tipsLayer.zIndex = 10003;
          this.topLayer.zIndex = 10004;
        }
        this.prefabEnumMap[ENUM_UIKIT_INNER_PREFAB.ENUM_UIKIT_INNER_PREFAB_JUDGE_SCORE] = this.judgeScorePrefab;
        this.prefabEnumMap[ENUM_UIKIT_INNER_PREFAB.ENUM_UIKIT_INNER_PREFAB_GAME_END_GOODJOB] = this.gameEndPrefab;
        this.prefabEnumMap[ENUM_UIKIT_INNER_PREFAB.ENUM_UIKIT_INNER_PREFAB_CONFIRM_DIALOG] = this.confirmDialogPrefab;
        this.prefabEnumMap[ENUM_UIKIT_INNER_PREFAB.ENUM_UIKIT_INNER_PREFAB_CONTINUAL_CORRECT] = this.continualCorrectPrefab;
        this.prefabEnumMap[ENUM_UIKIT_INNER_PREFAB.ENUM_UIKIT_INNER_PREFAB_ANALYSE_WRONG_QUESTION] = this.analyseWrongQuestionPrefab;
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
      };
      UIManager.getPrefab = function(prefabEnum) {
        if (!this._Instance) return null;
        return this._Instance.prefabEnumMap[prefabEnum];
      };
      UIManager.OpenUI = function(dataInfo) {
        var para = [];
        for (var _i = 1; _i < arguments.length; _i++) para[_i - 1] = arguments[_i];
        if (!this.Instance()) {
          console.log("UIManager.OpenUI _instance is null or undefined");
          return;
        }
        if (!dataInfo) {
          console.log("UIManager.OpenUI dataInfo is null or undefined");
          return;
        }
        var fullPath = dataInfo.fullPath;
        var self = this.Instance();
      };
      UIManager.OpenUIByPrefabEnum = function(prefab, dataInfo) {
        var para = [];
        for (var _i = 2; _i < arguments.length; _i++) para[_i - 2] = arguments[_i];
        UIManager_1.OpenUIByPrefab.apply(UIManager_1, __spreadArrays([ UIManager_1.getPrefab(prefab), dataInfo ], para));
      };
      UIManager.OpenUIByPrefab = function(prefab, dataInfo) {
        var para = [];
        for (var _i = 2; _i < arguments.length; _i++) para[_i - 2] = arguments[_i];
        if (!this.Instance()) {
          console.log("UIManager.OpenUIByPrefab _instance is null or undefined");
          return;
        }
        if (!prefab) {
          console.log("UIManager.OpenUIByPrefab prefab is null or undefined");
          return;
        }
        if (!dataInfo) {
          console.log("UIManager.OpenUIByPrefab dataInfo is null or undefined");
          return;
        }
        if (!this.Instance().gameLiveState) {
          var delayShowArray = this.Instance().delayShowArray;
          delayShowArray && delayShowArray.push({
            prefab: prefab,
            dataInfo: dataInfo,
            para: para
          });
          return;
        }
        var prefabNode = cc.instantiate(prefab);
        this.Instance().newShowUI(prefabNode, dataInfo, para);
      };
      UIManager.prototype.newShowUI = function(prefabNode, dataInfo, para) {
        var parent = this.GetLayer(dataInfo.uiType);
        if (prefabNode) {
          parent.addChild(prefabNode);
          var baseUI = prefabNode.getComponent(BaseUI_1.default);
          baseUI && baseUI.setParams(para);
          this.runtimeUINodeEnumMap[dataInfo.name] = prefabNode;
        } else console.log("UIManager newShowUI error prefabNode is null " + prefabNode + " dataInfo " + JSON.stringify(dataInfo));
      };
      UIManager.clearNode = function(node) {
        if (this.Instance()) {
          var map = this.Instance().runtimeUINodeEnumMap;
          for (var key in map) map[key] == node && delete map[key];
        }
      };
      UIManager.getNodeByName = function(key) {
        if (this.Instance()) {
          var map = this.Instance().runtimeUINodeEnumMap;
          return map[key];
        }
      };
      UIManager.CloseUI = function(uiComonent) {};
      UIManager.CloseUIByNode = function(node) {};
      UIManager.CloseUIByName = function(name) {
        var node = this.getNodeByName(name);
        this.CloseUIByNode(node);
      };
      UIManager.prototype.GetLayer = function(type) {
        var layer = this.popLayer;
        layer = type == UIDataInfo_1.UIType.TYPE_UI ? this.uiLayer : type == UIDataInfo_1.UIType.TYPE_POP ? this.popLayer : type == UIDataInfo_1.UIType.TYPE_TIPS ? this.tipsLayer : type == UIDataInfo_1.UIType.TYPE_TOP ? this.topLayer : this.popLayer;
        return layer;
      };
      UIManager.prototype.onGameShow = function() {
        this.gameLiveState = true;
        if (this.delayShowArray && this.delayShowArray.length > 0) {
          for (var i = 0; i < this.delayShowArray.length; i++) {
            var param_array = this.delayShowArray[i];
            if (param_array) {
              var prefab = param_array.prefab;
              var dataInfo = param_array.dataInfo;
              var para = param_array.para;
              UIManager_1.OpenUIByPrefab.apply(UIManager_1, __spreadArrays([ prefab, dataInfo ], para));
            }
          }
          this.delayShowArray.splice(0, this.delayShowArray.length);
        }
      };
      UIManager.prototype.onGameHide = function() {
        this.gameLiveState = false;
      };
      UIManager.prototype.onDestroy = function() {
        cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
        cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);
        UIManager_1._Instance = null;
        console.log("UIManager onDestroy");
      };
      UIManager.destroyUIManager = function() {
        UIManager_1._Instance && (UIManager_1._Instance = null);
      };
      var UIManager_1;
      UIManager._Instance = null;
      __decorate([ property(cc.Node) ], UIManager.prototype, "uiLayer", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "popLayer", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "tipsLayer", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "topLayer", void 0);
      __decorate([ property(cc.Prefab) ], UIManager.prototype, "judgeScorePrefab", void 0);
      __decorate([ property(cc.Prefab) ], UIManager.prototype, "gameEndPrefab", void 0);
      __decorate([ property(cc.Prefab) ], UIManager.prototype, "confirmDialogPrefab", void 0);
      __decorate([ property(cc.Prefab) ], UIManager.prototype, "continualCorrectPrefab", void 0);
      __decorate([ property(cc.Prefab) ], UIManager.prototype, "analyseWrongQuestionPrefab", void 0);
      UIManager = UIManager_1 = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "./BaseUI": "BaseUI",
    "./UIDataInfo": "UIDataInfo"
  } ],
  UIUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "217a3MOlyJJl7f6Mm711CIy", "UIUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIContainer = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var kit_1 = require("../kit");
    var LogSystem_1 = require("../system/log/LogSystem");
    var UIUtils = function() {
      function UIUtils() {}
      UIUtils.createSubNodeMap = function(node, map) {
        var children = node.children;
        if (!children) return;
        for (var t = 0, len = children.length; t < len; ++t) {
          var subChild = children[t];
          map.set(subChild.name, subChild);
          UIUtils.createSubNodeMap(subChild, map);
        }
      };
      UIUtils.seekAllSubView = function(node) {
        var map = new Map();
        UIUtils.createSubNodeMap(node, map);
        return new UIContainer(map);
      };
      return UIUtils;
    }();
    exports.default = UIUtils;
    var UIContainer = function() {
      function UIContainer(nodesMap) {
        this._clickSound = "commonRes/sound/btn_click";
        this._bundleName = "components";
        this._uiNodesMap = nodesMap;
        this.preloadClickEffect();
      }
      UIContainer.prototype.getNode = function(name) {
        return this._uiNodesMap.get(name);
      };
      UIContainer.prototype.getComponent = function(name, com) {
        var node = this._uiNodesMap.get(name);
        if (node) return node.getComponent(com);
        return null;
      };
      UIContainer.prototype.onClick = function(node, handler, target, param, sound, bundleName) {
        var _this = this;
        if (!node) {
          LogSystem_1.default.warn("onClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        var tempNode = null;
        tempNode = "string" === typeof node ? this.getNode(node) : node;
        tempNode.on(cc.Node.EventType.TOUCH_START, function(event) {
          var soundName = "string" == typeof sound ? sound : _this._clickSound;
          var bundle = "string" == typeof bundleName ? bundleName : _this._bundleName;
          kit_1.kit.manager.Audio.playEffect(bundle, soundName);
          handler && handler.call(target, param);
        }, target);
      };
      UIContainer.prototype.offClick = function(node) {
        if (!node) {
          LogSystem_1.default.warn("offClick\u53c2\u6570node\u4e0d\u80fd\u4e3a\u7a7a\uff1a" + node);
          return;
        }
        var tempNode = null;
        tempNode = "string" === typeof node ? this.getNode(node) : node;
        tempNode.off(cc.Node.EventType.TOUCH_START);
      };
      UIContainer.prototype.preloadClickEffect = function() {
        ResLoader_1.default.loadRes(this._clickSound, cc.AudioClip, function() {}, this._bundleName);
      };
      return UIContainer;
    }();
    exports.UIContainer = UIContainer;
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../kit": "kit",
    "../system/log/LogSystem": "LogSystem"
  } ],
  UrlUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "148cdyvjMdJspMddi1biOem", "UrlUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UrlUtils = function() {
      function UrlUtils() {}
      UrlUtils.getQueryString = function(key) {
        var reg = new RegExp(key + "=([^&]*)(?:&)?");
        var rs = window.location.search.substr(1).match(reg);
        if (null != rs) return rs[1];
        return null;
      };
      UrlUtils.getUrlArrayByFileType = function(jsonObj, type) {
        console.log("getUrlArrayByFileType");
        if (!jsonObj) {
          console.log("jsonObj is null , please check your json!!!");
          return;
        }
        var urls = [];
        var len = type.length;
        function traverseJson(obj) {
          for (var o in obj) "object" === typeof obj[o] ? traverseJson(obj[o]) : "string" === typeof obj[o] && obj[o].slice(-len, obj[o].length) === type && urls.push(obj[o]);
        }
        traverseJson(jsonObj);
        if (urls.length > 1) {
          var list = [ urls[0] ];
          urls.sort();
          for (var i = 0; i < urls.length; i++) urls[i] !== list[list.length - 1] && list.push(urls[i]);
          return list;
        }
        return urls;
      };
      UrlUtils.parseUrl = function(url) {
        var m = url.match(/^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/), r = {
          hash: m[10] || "",
          host: m[3] || "",
          hostname: m[6] || "",
          href: m[0] || "",
          origin: m[1] || "",
          pathname: m[8] || (m[1] ? "/" : ""),
          port: m[7] || "",
          protocol: m[2] || "",
          search: m[9] || "",
          username: m[4] || "",
          password: m[5] || ""
        };
        if (2 == r.protocol.length) {
          r.protocol = "file:///" + r.protocol.toUpperCase();
          r.origin = r.protocol + "//" + r.host;
        }
        r.href = r.origin + r.pathname + r.search + r.hash;
        return m && r;
      };
      UrlUtils.getUrlPathName = function(url) {
        var ret = this.parseUrl(url);
        if (ret && ret.pathname) return ret.pathname;
        return "";
      };
      return UrlUtils;
    }();
    exports.default = UrlUtils;
    cc._RF.pop();
  }, {} ],
  WXBrowserAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73acbsl8/RFP6xZYxiM2vNI", "WXBrowserAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WXBrowserAdapter = function() {
      function WXBrowserAdapter() {
        this.isPrintLog = true;
      }
      WXBrowserAdapter.prototype.onGameExit = function() {};
      WXBrowserAdapter.prototype.onGameReady = function() {};
      WXBrowserAdapter.prototype.toast = function(message) {};
      WXBrowserAdapter.prototype.callFunction = function(funcName, parm) {
        throw new Error("Method not implemented.");
      };
      return WXBrowserAdapter;
    }();
    exports.default = WXBrowserAdapter;
    cc._RF.pop();
  }, {} ],
  WXLittleGameAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75f02HLhD5EN7fAbwl+6D7W", "WXLittleGameAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WXLittleGameAdapter = function() {
      function WXLittleGameAdapter() {
        this.isPrintLog = true;
      }
      WXLittleGameAdapter.prototype.onGameExit = function() {};
      WXLittleGameAdapter.prototype.onGameReady = function() {};
      WXLittleGameAdapter.prototype.toast = function(message) {};
      WXLittleGameAdapter.prototype.callFunction = function(funcName) {
        throw new Error("Method not implemented.");
      };
      return WXLittleGameAdapter;
    }();
    exports.default = WXLittleGameAdapter;
    cc._RF.pop();
  }, {} ],
  WebAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7691PuCoVBgZ/+zqYNjAoA", "WebAdapter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WebAdapter = function() {
      function WebAdapter() {
        this.packageName = "";
        this.isPrintLog = true;
      }
      WebAdapter.prototype.onGameExit = function() {};
      WebAdapter.prototype.onGameReady = function() {};
      WebAdapter.prototype.toast = function(message) {};
      WebAdapter.prototype.callFunction = function(funcName, parm) {
        throw new Error("Method not implemented.");
      };
      return WebAdapter;
    }();
    exports.default = WebAdapter;
    cc._RF.pop();
  }, {} ],
  app: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b00fcHaS5RE1b3+lmKayIrY", "app");
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
    var config_1 = require("./config/config");
    var initState_1 = require("./state/initState");
    var event_1 = require("./config/event");
    var LoadingTurnState_1 = require("./state/globalState/LoadingTurnState");
    var kit_1 = require("../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.uiNode = null;
        _this.contentNode = null;
        _this.sid = "Main";
        _this.host = config_1.URL_BASE;
        return _this;
      }
      Main.prototype.onLoad = function() {
        cc.debug.setDisplayStats(false);
        kit_1.kit.system.platform.init();
        kit_1.kit.system.log.init(this.onLog, config_1.GAME_NAME, config_1.GAME_VERSION, true);
        kit_1.kit.system.error.init(cc.sys.isNative, this.onError);
        kit_1.kit.system.timer.init();
        kit_1.kit.manager.Audio.init();
        this.stateMachine = new kit_1.kit.fsm.StateManager(this);
        this.stateMachine.ChangeState(initState_1.default, this);
        cc.game.on(cc.game.EVENT_HIDE, function() {
          cc.log("\u6e38\u620f\u8fdb\u5165\u540e\u53f0");
          kit_1.kit.manager.Event.emit(event_1.ON_GAME_PASS);
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function() {
          cc.log("\u6e38\u620f\u8fdb\u5165\u524d\u53f0");
          kit_1.kit.manager.Event.emit(event_1.ON_GAME_RESUME);
        }, this);
      };
      Main.prototype.onError = function(exception) {
        kit_1.kit.system.platform.adapter.toast(exception);
      };
      Main.prototype.onLog = function(message) {};
      Main.prototype.changeState = function(stateClass, data) {
        var _this = this;
        this.stateMachine.AddGlobalState(LoadingTurnState_1.default);
        this.stateMachine.Transition(function(currentState) {
          var newState = new stateClass();
          newState.entity = _this;
          newState.enter(data).then(function() {
            _this.stateMachine.RemoveGlobalState(LoadingTurnState_1.default);
            currentState.exit();
          });
          return newState;
        });
      };
      Main.prototype.onDestroy = function() {
        kit_1.kit.system.timer.release();
        kit_1.kit.system.error.release();
        kit_1.kit.system.log.release();
        kit_1.kit.system.platform.release();
        this.stateMachine.release();
      };
      __decorate([ property(cc.Node) ], Main.prototype, "uiNode", void 0);
      __decorate([ property(cc.Node) ], Main.prototype, "contentNode", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {
    "../kit/kit": "kit",
    "./config/config": "config",
    "./config/event": "event",
    "./state/globalState/LoadingTurnState": "LoadingTurnState",
    "./state/initState": "initState"
  } ],
  assetsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10b839JEodOUJDOajR1DY8U", "assetsManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AssetsManager = function() {
      function AssetsManager() {
        this.assetsMap = [];
      }
      Object.defineProperty(AssetsManager, "instance", {
        get: function() {
          AssetsManager._instance || (AssetsManager._instance = new AssetsManager());
          return AssetsManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      AssetsManager.prototype.addGlobalNode = function(node) {
        cc.log("add node to global :" + node.name);
        this.assetsMap[node.name] = node;
      };
      AssetsManager.prototype.getGlobalNode = function(nodeName) {
        return this.assetsMap[nodeName];
      };
      AssetsManager.prototype.release = function() {
        for (var key in this.assetsMap) delete this.assetsMap[key];
      };
      return AssetsManager;
    }();
    exports.default = AssetsManager;
    cc._RF.pop();
  }, {} ],
  audioUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "add409ipDFJYJUeydNf1/aE", "audioUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MusicType = void 0;
    var ResLoader_1 = require("../framework/load/ResLoader");
    var kit_1 = require("../kit");
    var LogSystem_1 = require("../system/log/LogSystem");
    var MusicType;
    (function(MusicType) {
      MusicType[MusicType["SOUND"] = 0] = "SOUND";
      MusicType[MusicType["MUSIC"] = 1] = "MUSIC";
      MusicType[MusicType["LOOP_SOUND"] = 2] = "LOOP_SOUND";
    })(MusicType = exports.MusicType || (exports.MusicType = {}));
    var AudioUtil = function() {
      function AudioUtil() {}
      AudioUtil.playEffect = function(bundleName, path, finishCb) {
        if (AudioUtil._pauseFlag) return;
        var curTime = new Date().getTime();
        if (path === AudioUtil._curSound) {
          var tempTime = curTime - AudioUtil._lastSoundTime;
          if (tempTime < 50) return;
        }
        AudioUtil._curSound = path;
        AudioUtil._lastSoundTime = curTime;
        var cachePath = bundleName;
        "object" == typeof bundleName && (cachePath = bundleName.name);
        var source = AudioUtil.getEffectFromPool(cachePath + "/" + path);
        if (source) source.play(false, finishCb); else {
          source = new __AudioSource(bundleName, path, MusicType.SOUND);
          AudioUtil.addEffectToPool(cachePath + "/" + path, source);
          source.play(false, finishCb);
        }
      };
      AudioUtil.stopEffect = function() {
        AudioUtil._soundPool.forEach(function(value, key, map) {
          if (value) for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var source = value_1[_i];
            source.stop();
          }
        });
      };
      AudioUtil.playLoopEffect = function(bundleName, path) {
        if (AudioUtil._pauseFlag) return;
        var source = AudioUtil._loopSoundPool.get(path);
        if (!source) {
          var cachePath = bundleName;
          "object" == typeof bundleName && (cachePath = bundleName.name);
          source = new __AudioSource(bundleName, path, MusicType.LOOP_SOUND);
          AudioUtil._loopSoundPool.set(cachePath + "/" + path, source);
          source.play(true);
        }
      };
      AudioUtil.stopLoopEffect = function(bundleName, path) {
        var source = AudioUtil._loopSoundPool.get(bundleName + "/" + path);
        if (source) {
          source.destroy();
          AudioUtil._loopSoundPool.delete(bundleName + "/" + path);
        }
      };
      AudioUtil.playMusic = function(bundleName, path) {
        if (AudioUtil._pauseFlag) return;
        AudioUtil._curMusic && AudioUtil._curMusic.stop();
        var cachePath = bundleName;
        "object" == typeof bundleName && (cachePath = bundleName.name);
        var source = AudioUtil._musicPool.get(cachePath + "/" + path);
        if (source) source.play(true); else {
          source = new __AudioSource(bundleName, path, MusicType.MUSIC);
          AudioUtil._musicPool.set(cachePath + "/" + path, source);
          source.play(true);
        }
        AudioUtil._curMusic = source;
      };
      AudioUtil.stopMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.stop();
      };
      AudioUtil.passMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.pause();
      };
      AudioUtil.resumeMusic = function() {
        AudioUtil._curMusic && AudioUtil._curMusic.resume();
      };
      AudioUtil.getEffectFromPool = function(path) {
        var list = AudioUtil._soundPool.get(path);
        if (list) for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
          var source = list_1[_i];
          if (!source.isPlaying()) return source;
        }
        return null;
      };
      AudioUtil.addEffectToPool = function(path, source) {
        var list = AudioUtil._soundPool.get(path);
        if (list) list.push(source); else {
          list = [];
          list.push(source);
          AudioUtil._soundPool.set(path, list);
        }
      };
      AudioUtil.setPauseFlag = function(flag, level) {
        void 0 === level && (level = 0);
        AudioUtil._level = level;
        AudioUtil._pauseFlag = flag;
        if (flag) {
          AudioUtil._curMusic && AudioUtil._curMusic.pause();
          AudioUtil.pauseLoopEffects();
        } else {
          AudioUtil._curMusic && AudioUtil._curMusic.resume();
          AudioUtil.resumeLoopEffects();
        }
      };
      AudioUtil.pauseLoopEffects = function() {
        AudioUtil._loopSoundPool.forEach(function(v, key) {
          v.pause();
        });
      };
      AudioUtil.resumeLoopEffects = function() {
        AudioUtil._loopSoundPool.forEach(function(v, key) {
          v.resume();
        });
      };
      AudioUtil._musicPool = new Map();
      AudioUtil._soundPool = new Map();
      AudioUtil._loopSoundPool = new Map();
      AudioUtil._curSound = "";
      AudioUtil._lastSoundTime = 0;
      AudioUtil._pauseFlag = false;
      AudioUtil._level = 0;
      return AudioUtil;
    }();
    exports.default = AudioUtil;
    var __AudioSource = function() {
      function __AudioSource(bundleName, path, type) {
        this._loaded = false;
        this._audioSource = new cc.AudioSource();
        this._path = "";
        this._bundleName = bundleName;
        this._path = path;
        this._musicType = type;
      }
      __AudioSource.prototype.loadRes = function(cb) {
        var _this = this;
        this._loaded || ResLoader_1.default.loadRes(this._path, cc.AudioClip, function(err, res) {
          if (err) LogSystem_1.default.warn("\u97f3\u9891\u8d44\u6e90\u52a0\u8f7d\u51fa\u9519:" + _this._path); else {
            _this._audioSource.clip = res;
            _this._loaded = true;
            cb && cb();
          }
        }, this._bundleName);
      };
      __AudioSource.prototype.play = function(isLoop, cb) {
        var _this = this;
        this._isStop = false;
        if (this._loaded) {
          this._audioSource.loop = isLoop;
          this._audioSource.play();
          if (cb) {
            var duration = this._audioSource.clip.duration;
            kit_1.kit.system.timer.doOnce(1e3 * duration, function() {
              cb();
            }, this, null, false);
          }
        } else this.loadRes(function() {
          _this._isStop || _this.play(isLoop, cb);
        });
      };
      __AudioSource.prototype.isPlaying = function() {
        return this._audioSource.isPlaying;
      };
      __AudioSource.prototype.stop = function() {
        this._isStop = true;
        this._loaded && this._audioSource.stop();
      };
      __AudioSource.prototype.pause = function() {
        this._loaded && this._audioSource.pause();
      };
      __AudioSource.prototype.resume = function() {
        this._loaded && this._audioSource.resume();
      };
      __AudioSource.prototype.destroy = function() {
        this._audioSource.stop();
        this._audioSource = null;
      };
      return __AudioSource;
    }();
    cc._RF.pop();
  }, {
    "../framework/load/ResLoader": "ResLoader",
    "../kit": "kit",
    "../system/log/LogSystem": "LogSystem"
  } ],
  bundleUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db0b9sCVSJJSZZYy99YOdP3", "bundleUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.loadBundles = exports.loadBundleScene = exports.loadBundle = void 0;
    var kit_1 = require("../kit");
    function loadBundle(bundleName) {
      return new Promise(function(res, rej) {
        console.time(bundleName);
        cc.assetManager.loadBundle(bundleName, function(error, bundle) {
          console.timeEnd(bundleName);
          if (error) {
            rej(error);
            return;
          }
          res(bundle);
        });
      });
    }
    exports.loadBundle = loadBundle;
    function loadBundleScene(bundleName, sceneName) {
      return new Promise(function(res, rej) {
        loadBundle(bundleName).then(function(bundle) {
          bundle.loadScene(sceneName, function(error, scene) {
            if (error) {
              rej(error);
              return;
            }
            res(scene);
          });
        }).catch(function(error) {
          rej(error);
        });
      });
    }
    exports.loadBundleScene = loadBundleScene;
    function loadBundles(nameList) {
      var list = [];
      for (var key in nameList) list.push(loadBundle(nameList[key]));
      return Promise.all(list);
    }
    exports.loadBundles = loadBundles;
    cc._RF.pop();
  }, {
    "../kit": "kit"
  } ],
  bundleUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "077d2JCFApLP573m5wIAdrl", "bundleUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BundleUtil = function() {
      function BundleUtil() {}
      BundleUtil.loadBundle = function(bundleName) {
        return new Promise(function(res, rej) {
          console.time(bundleName);
          cc.assetManager.loadBundle(bundleName, function(error, bundle) {
            console.timeEnd(bundleName);
            if (error) {
              rej(error);
              return;
            }
            res(bundle);
          });
        });
      };
      BundleUtil.loadBundleScene = function(bundleName, sceneName) {
        return new Promise(function(res, rej) {
          BundleUtil.loadBundle(bundleName).then(function(bundle) {
            bundle.loadScene(sceneName, function(error, scene) {
              if (error) {
                rej(error);
                return;
              }
              res(scene);
            });
          }).catch(function(error) {
            rej(error);
          });
        });
      };
      BundleUtil.loadBundles = function(nameList) {
        var list = [];
        for (var key in nameList) list.push(BundleUtil.loadBundle(nameList[key]));
        return Promise.all(list);
      };
      return BundleUtil;
    }();
    exports.default = BundleUtil;
    cc._RF.pop();
  }, {} ],
  config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "930d4yAULFALrMpLUuA/VI7", "config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HAS_CLICK_PICKBOOK = exports.HAS_CLICK_LESSON_ITEM = exports.COMMON_CLICK_SOUND = exports.LESSON_LIST = exports.URL_BASE_TEST = exports.URL_BASE = exports.ENCOURAGE_WALL_LIST_CONFIG = exports.GAME_LIST_CONFIG = exports.PICTURE_BOOK_LIST_CONFIG = exports.LESSON_LIST_CONFIG = exports.PRELOAD_LIST = exports.BUNDLE_ENCOURAGE_LIST = exports.BUNDLE_BOOK_BASE = exports.BUNDLE_COMMON_RESOURCES = exports.BUNDLE_NOVICE_GUIDE = exports.BUNDLE_LOADING_LESSON = exports.BUNDLE_LOADING = exports.BUNDLE_LESSON_AWARD = exports.BUNDLE_QUIT_LESSON_ALERT = exports.BUNDLE_TOP_BAR = exports.BUNDLE_VIDEO = exports.BUNDLE_LESSON_COMPLETE = exports.BUNDLE_FOLLOW_READ = exports.BUNDLE_COMPONENTS = exports.BUNDLE_PICTURE_BOOK_LIST = exports.BUNDLE_GAME_LIST = exports.BUNDLE_REPORT = exports.BUNDLE_FIRST_PAGE = exports.BUNDLE_HALL = exports.BUNDLE_ROOT = exports.CHAPTER_CONFIG_LIST = exports.LESSON_TYPE_PICTURE_BOOK = exports.LESSON_TYPE_GAME = exports.LESSON_TYPE_VIDEO = exports.USER_ID = exports.CHANNEL = exports.GAME_VERSION = exports.GAME_NAME = void 0;
    exports.GAME_NAME = "chinese ai";
    exports.GAME_VERSION = "1.0.1.0";
    exports.CHANNEL = "99999";
    exports.USER_ID = "007";
    exports.LESSON_TYPE_VIDEO = "video";
    exports.LESSON_TYPE_GAME = "game";
    exports.LESSON_TYPE_PICTURE_BOOK = "pictureBook";
    exports.CHAPTER_CONFIG_LIST = [ {
      id: 10,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day1"
      }
    }, {
      id: 11,
      main: "quizGameBlue",
      assets: [ "common", "templateGame", "quizGameBlue" ],
      params: {}
    }, {
      id: 12,
      main: "book_base",
      assets: [ "book_base", "PicktureBookNode1" ],
      params: {
        bookNum: 1,
        maxPage: 7
      }
    }, {
      id: 13,
      main: "redSantaClaus",
      assets: [ "common", "redSantaClaus" ],
      params: {}
    }, {
      id: 1,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day2"
      }
    }, {
      id: 2,
      main: "SweepLeaves",
      assets: [ "common", "SweepLeaves" ],
      params: {}
    }, {
      id: 3,
      main: "book_base",
      assets: [ "book_base", "PicktureBookNode1" ],
      params: {
        bookNum: 1,
        maxPage: 7
      }
    }, {
      id: 4,
      main: "rocketProject",
      assets: [ "common", "rocketProject" ],
      params: {}
    }, {
      id: 20,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day3"
      }
    }, {
      id: 21,
      main: "paintingColor",
      assets: [ "common", "paintingColor" ],
      params: {}
    }, {
      id: 22,
      main: "book_base",
      assets: [ "book_base", "PicktureBookNode8" ],
      params: {
        bookNum: 8,
        maxPage: 10
      }
    }, {
      id: 23,
      main: "quizGameBlue",
      assets: [ "common", "templateGame", "quizGameBlue" ],
      params: {}
    }, {
      id: 15,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day4"
      }
    }, {
      id: 16,
      main: "Bubble",
      assets: [ "common", "Bubble" ],
      params: {}
    }, {
      id: 17,
      main: "book_base",
      assets: [ "book_base", "PicktureBookNode7" ],
      params: {
        bookNum: 7,
        maxPage: 10
      }
    }, {
      id: 18,
      main: "quziGamePanda",
      assets: [ "common", "templateGame", "quziGamePanda" ],
      params: {}
    }, {
      id: 5,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day5_1"
      }
    }, {
      id: 6,
      main: "game_lesson_5",
      assets: [ "game_lesson_5" ],
      params: {}
    }, {
      id: 7,
      main: "video",
      assets: [ "video" ],
      params: {
        url: "mp4/day5_2"
      }
    } ];
    exports.BUNDLE_ROOT = "bundles";
    exports.BUNDLE_HALL = "hall";
    exports.BUNDLE_FIRST_PAGE = "firstPage";
    exports.BUNDLE_REPORT = "report";
    exports.BUNDLE_GAME_LIST = "gameList";
    exports.BUNDLE_PICTURE_BOOK_LIST = "pictureBookList";
    exports.BUNDLE_COMPONENTS = "components";
    exports.BUNDLE_FOLLOW_READ = "followRead";
    exports.BUNDLE_LESSON_COMPLETE = "lessonComplete";
    exports.BUNDLE_VIDEO = "video";
    exports.BUNDLE_TOP_BAR = "topBar";
    exports.BUNDLE_QUIT_LESSON_ALERT = "quitLessonAlert";
    exports.BUNDLE_LESSON_AWARD = "lessonAward";
    exports.BUNDLE_LOADING = "loading";
    exports.BUNDLE_LOADING_LESSON = "loadingLesson";
    exports.BUNDLE_NOVICE_GUIDE = "noviceGuide";
    exports.BUNDLE_COMMON_RESOURCES = "commonRes";
    exports.BUNDLE_BOOK_BASE = "book_base";
    exports.BUNDLE_ENCOURAGE_LIST = "encourageList";
    exports.PRELOAD_LIST = [ exports.BUNDLE_TOP_BAR, exports.BUNDLE_LESSON_COMPLETE, exports.BUNDLE_QUIT_LESSON_ALERT, exports.BUNDLE_LOADING, exports.BUNDLE_LOADING_LESSON ];
    exports.LESSON_LIST_CONFIG = [ {
      lessonId: 1,
      lessonType: 1,
      chapters: [ {
        chapterId: 10,
        chapterType: 1,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      }, {
        chapterId: 11,
        chapterType: 2,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      }, {
        chapterId: 12,
        chapterType: 3,
        type: exports.LESSON_TYPE_PICTURE_BOOK,
        complete: false
      }, {
        chapterId: 13,
        chapterType: 4,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      } ],
      report: {
        isComplete: false
      },
      rewardInfo: {
        type: 2,
        iconUrl: "item_1001",
        propId: 1003,
        gameId: 0
      }
    }, {
      lessonId: 2,
      lessonType: 1,
      chapters: [ {
        chapterId: 1,
        chapterType: 1,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      }, {
        chapterId: 2,
        chapterType: 2,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      }, {
        chapterId: 3,
        chapterType: 3,
        type: exports.LESSON_TYPE_PICTURE_BOOK,
        complete: false
      }, {
        chapterId: 4,
        chapterType: 4,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      } ],
      report: {
        isComplete: false
      },
      rewardInfo: {
        type: 2,
        iconUrl: "item_1002",
        propId: 1004,
        gameId: 0
      }
    }, {
      lessonId: 3,
      lessonType: 1,
      chapters: [ {
        chapterId: 20,
        chapterType: 1,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      }, {
        chapterId: 21,
        chapterType: 2,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      }, {
        chapterId: 22,
        chapterType: 3,
        type: exports.LESSON_TYPE_PICTURE_BOOK,
        complete: false
      }, {
        chapterId: 23,
        chapterType: 4,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      } ],
      report: {
        isComplete: false
      },
      rewardInfo: {
        type: 2,
        iconUrl: "item_1003",
        propId: -1,
        gameId: 1
      }
    }, {
      lessonId: 4,
      lessonType: 1,
      chapters: [ {
        chapterId: 15,
        chapterType: 1,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      }, {
        chapterId: 16,
        chapterType: 2,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      }, {
        chapterId: 17,
        chapterType: 3,
        type: exports.LESSON_TYPE_PICTURE_BOOK,
        complete: false
      }, {
        chapterId: 18,
        chapterType: 4,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      } ],
      report: {
        isComplete: false
      },
      rewardInfo: {
        type: 1,
        iconUrl: "item_1004",
        propId: -1,
        gameId: 1
      }
    }, {
      lessonId: 5,
      lessonType: 1,
      chapters: [ {
        chapterId: 5,
        chapterType: 1,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      }, {
        chapterId: 6,
        chapterType: 2,
        type: exports.LESSON_TYPE_GAME,
        complete: false
      }, {
        chapterId: 7,
        chapterType: 3,
        type: exports.LESSON_TYPE_VIDEO,
        complete: false
      } ],
      report: {
        isComplete: false
      },
      rewardInfo: {
        type: 3,
        iconUrl: "item_1005",
        propId: -1,
        gameId: 0
      }
    } ];
    exports.PICTURE_BOOK_LIST_CONFIG = [ {
      id: 0,
      url: "",
      main: "PicktureBookNode",
      assets: [],
      params: {
        bookNum: 0,
        maxPage: 11
      },
      unlock: true
    }, {
      id: 1,
      url: "",
      main: "PicktureBookNode2",
      assets: [],
      params: {
        bookNum: 2,
        maxPage: 11
      },
      unlock: true
    }, {
      id: 2,
      url: "",
      main: "PicktureBookNode3",
      assets: [],
      params: {
        bookNum: 3,
        maxPage: 10
      },
      unlock: true
    }, {
      id: 3,
      url: "",
      main: "PicktureBookNode4",
      assets: [],
      params: {
        bookNum: 4,
        maxPage: 9
      },
      unlock: true
    }, {
      id: 4,
      url: "",
      main: "PicktureBookNode5",
      assets: [],
      params: {
        bookNum: 5,
        maxPage: 9
      },
      unlock: true
    }, {
      id: 5,
      url: "",
      main: "PicktureBookNode6",
      assets: [],
      params: {
        bookNum: 6,
        maxPage: 9
      },
      unlock: true
    } ];
    exports.GAME_LIST_CONFIG = [ {
      id: 0,
      url: "",
      main: "paint",
      assets: [],
      params: {},
      unlock: true
    }, {
      id: 1,
      url: "",
      main: "exploreGame",
      assets: [ "common", "exploreGame" ],
      params: {},
      unlock: false
    }, {
      id: 2,
      url: "",
      main: "game1",
      assets: [],
      params: {}
    } ];
    exports.ENCOURAGE_WALL_LIST_CONFIG = [ {
      lessonId: 1,
      shipUrl: "",
      iconUrl: "item_1001",
      type: 2,
      bookId: -1,
      gameId: 0,
      propId: 1003,
      lockVal: 1
    }, {
      lessonId: 2,
      shipUrl: "",
      iconUrl: "item_1002",
      type: 2,
      bookId: -1,
      gameId: 0,
      propId: 1004,
      lockVal: 1
    }, {
      lessonId: 3,
      shipUrl: "",
      iconUrl: "item_1003",
      type: 2,
      bookId: -1,
      gameId: 1,
      propId: -1,
      lockVal: 1
    }, {
      lessonId: 4,
      shipUrl: "",
      iconUrl: "item_1004",
      type: 1,
      bookId: -1,
      gameId: 1,
      propId: -1,
      lockVal: 1
    }, {
      lessonId: 5,
      shipUrl: "",
      iconUrl: "item_1005",
      type: 3,
      bookId: 0,
      gameId: -1,
      propId: -1,
      lockVal: 1
    } ];
    exports.URL_BASE = "http://localhost/";
    exports.URL_BASE_TEST = "https://shi-xintao.github.io/bundleTest/";
    exports.LESSON_LIST = exports.URL_BASE_TEST + "lesson";
    exports.COMMON_CLICK_SOUND = "commonRes/sound/btn_click";
    exports.HAS_CLICK_LESSON_ITEM = "HAS_CLICK_LESSON_ITEM";
    exports.HAS_CLICK_PICKBOOK = "HAS_CLICK_PICKBOOK";
    cc._RF.pop();
  }, {} ],
  encourageListState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c88d6rBm19JI4+edT6uk+As", "encourageListState");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var extracurricularBooKState_1 = require("./extracurricularBooKState");
    var extracurricularGameState_1 = require("./extracurricularGameState");
    var hallState_1 = require("./hallState");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EncourageListState = function() {
      function EncourageListState() {
        this.prefabNode = null;
      }
      EncourageListState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      EncourageListState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, _this.toHall, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_GAME, _this.toGameList, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_PICTURE_BOOK, _this.toBookList, _this);
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "prefab/" + config_1.BUNDLE_ENCOURAGE_LIST, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(error, result) {
            error && rej(error);
            _this.prefabNode = cc.instantiate(result);
            _this.entity.contentNode.addChild(_this.prefabNode);
            res();
          });
        });
      };
      EncourageListState.prototype.execute = function(data) {};
      EncourageListState.prototype.exit = function(data) {
        this.prefabNode.destroy();
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.toHall, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_GAME, this.toGameList, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_PICTURE_BOOK, this.toBookList, this);
        kit_1.kit.manager.resources.releaseAsset(config_1.BUNDLE_ENCOURAGE_LIST);
      };
      EncourageListState.prototype.toGameList = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(extracurricularGameState_1.default, data);
      };
      EncourageListState.prototype.toBookList = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(extracurricularBooKState_1.default, data);
      };
      EncourageListState.prototype.toHall = function(event) {
        this.entity.changeState(hallState_1.default);
      };
      EncourageListState = __decorate([ ccclass ], EncourageListState);
      return EncourageListState;
    }();
    exports.default = EncourageListState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "./extracurricularBooKState": "extracurricularBooKState",
    "./extracurricularGameState": "extracurricularGameState",
    "./hallState": "hallState"
  } ],
  enum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b988dUp7DxD55xOl6PaObAH", "enum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.REWARD_TYPE = exports.BACK_STATE = exports.CHAPTER_STATE = exports.PicAndGameLockState = exports.UpdateChapterType = exports.LESSON_TYPE = exports.CHAPTER_TYPE = void 0;
    var CHAPTER_TYPE;
    (function(CHAPTER_TYPE) {
      CHAPTER_TYPE[CHAPTER_TYPE["Context"] = 1] = "Context";
      CHAPTER_TYPE[CHAPTER_TYPE["Word"] = 2] = "Word";
      CHAPTER_TYPE[CHAPTER_TYPE["Story"] = 3] = "Story";
      CHAPTER_TYPE[CHAPTER_TYPE["Tasks"] = 4] = "Tasks";
      CHAPTER_TYPE[CHAPTER_TYPE["Rhyme"] = 1] = "Rhyme";
      CHAPTER_TYPE[CHAPTER_TYPE["BreakThrough"] = 2] = "BreakThrough";
      CHAPTER_TYPE[CHAPTER_TYPE["Culture"] = 3] = "Culture";
      CHAPTER_TYPE[CHAPTER_TYPE["Report"] = 100] = "Report";
    })(CHAPTER_TYPE = exports.CHAPTER_TYPE || (exports.CHAPTER_TYPE = {}));
    var LESSON_TYPE;
    (function(LESSON_TYPE) {
      LESSON_TYPE[LESSON_TYPE["L1"] = 1] = "L1";
      LESSON_TYPE[LESSON_TYPE["L2"] = 2] = "L2";
    })(LESSON_TYPE = exports.LESSON_TYPE || (exports.LESSON_TYPE = {}));
    var UpdateChapterType;
    (function(UpdateChapterType) {
      UpdateChapterType[UpdateChapterType["enterChapter"] = 1] = "enterChapter";
      UpdateChapterType[UpdateChapterType["completeChapter"] = 2] = "completeChapter";
    })(UpdateChapterType = exports.UpdateChapterType || (exports.UpdateChapterType = {}));
    var PicAndGameLockState;
    (function(PicAndGameLockState) {
      PicAndGameLockState[PicAndGameLockState["lock"] = 0] = "lock";
      PicAndGameLockState[PicAndGameLockState["unlock"] = 1] = "unlock";
    })(PicAndGameLockState = exports.PicAndGameLockState || (exports.PicAndGameLockState = {}));
    var CHAPTER_STATE;
    (function(CHAPTER_STATE) {
      CHAPTER_STATE[CHAPTER_STATE["lock"] = 0] = "lock";
      CHAPTER_STATE[CHAPTER_STATE["next2view"] = 1] = "next2view";
      CHAPTER_STATE[CHAPTER_STATE["viewed"] = 2] = "viewed";
      CHAPTER_STATE[CHAPTER_STATE["learned"] = 3] = "learned";
    })(CHAPTER_STATE = exports.CHAPTER_STATE || (exports.CHAPTER_STATE = {}));
    var BACK_STATE;
    (function(BACK_STATE) {
      BACK_STATE[BACK_STATE["LessonState"] = 0] = "LessonState";
      BACK_STATE[BACK_STATE["GameListState"] = 1] = "GameListState";
      BACK_STATE[BACK_STATE["PictureBookListState"] = 2] = "PictureBookListState";
      BACK_STATE[BACK_STATE["EncourageListState"] = 3] = "EncourageListState";
    })(BACK_STATE = exports.BACK_STATE || (exports.BACK_STATE = {}));
    var REWARD_TYPE;
    (function(REWARD_TYPE) {
      REWARD_TYPE[REWARD_TYPE["prop"] = 1] = "prop";
      REWARD_TYPE[REWARD_TYPE["game"] = 2] = "game";
      REWARD_TYPE[REWARD_TYPE["pictureBook"] = 3] = "pictureBook";
    })(REWARD_TYPE = exports.REWARD_TYPE || (exports.REWARD_TYPE = {}));
    cc._RF.pop();
  }, {} ],
  events: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05bb462CRRFpYfv3+5aWs2Z", "events");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SET_TOP_BAR_ACTIVE = exports.VIDEO_MODULE_TO_CLIENT = exports.VIDEO_CLIENT_TO_MODULE = exports.FOLLOW_MODULE_TO_CLIENT = exports.FOLLOW_CLIENT_TO_MODULE = exports.LIFE_CYCLE_BACK = exports.LIFE_CYCLE_PARAMS = exports.LIFE_CYCLE_UNBLOCK = exports.LIFE_CYCLE_BLOCK = exports.LIFE_CYCLE_COMPLETE = exports.LIFE_CYCLE_READY = exports.LIFE_CYCLE_CREATED = void 0;
    exports.LIFE_CYCLE_CREATED = "lifeCycleCreated";
    exports.LIFE_CYCLE_READY = "lifeCycleReady";
    exports.LIFE_CYCLE_COMPLETE = "lifeCycleComplete";
    exports.LIFE_CYCLE_BLOCK = "lifeCycleBlock";
    exports.LIFE_CYCLE_UNBLOCK = "lifeCycleUnblock";
    exports.LIFE_CYCLE_PARAMS = "lifeCycleParams";
    exports.LIFE_CYCLE_BACK = "lifeCycleBack";
    exports.FOLLOW_CLIENT_TO_MODULE = "followClientToModule";
    exports.FOLLOW_MODULE_TO_CLIENT = "followModuleToClient";
    exports.VIDEO_CLIENT_TO_MODULE = "voidClient2Module";
    exports.VIDEO_MODULE_TO_CLIENT = "voidModule2Client";
    exports.SET_TOP_BAR_ACTIVE = "setTopBarActive";
    var Events = function() {
      function Events() {}
      Events.LIFE_CYCLE_CREATED = "lifeCycleCreated";
      Events.LIFE_CYCLE_READY = "lifeCycleReady";
      Events.LIFE_CYCLE_COMPLETE = "lifeCycleComplete";
      Events.LIFE_CYCLE_BLOCK = "lifeCycleBlock";
      Events.LIFE_CYCLE_UNBLOCK = "lifeCycleUnblock";
      Events.LIFE_CYCLE_PARAMS = "lifeCycleParams";
      Events.LIFE_CYCLE_BACK = "lifeCycleBack";
      Events.FOLLOW_CLIENT_TO_MODULE = "followClientToModule";
      Events.FOLLOW_MODULE_TO_CLIENT = "followModuleToClient";
      Events.VIDEO_CLIENT_TO_MODULE = "voidClient2Module";
      Events.VIDEO_MODULE_TO_CLIENT = "voidModule2Client";
      Events.SET_TOP_BAR_ACTIVE = "setTopBarActive";
      return Events;
    }();
    exports.default = Events;
    cc._RF.pop();
  }, {} ],
  event: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea1c6i6oeRK0Js1I4gpP9GG", "event");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HIDE_COMMON_HAND_GUILD = exports.SHOW_COMMON_HAND_GUILD = exports.ON_GAME_RESUME = exports.ON_GAME_PASS = exports.STATE_TO_GAME = exports.STATE_TO_PICTURE_BOOK = exports.PLAY_BACKGROUND_MUSIC = exports.STOP_BACKGROUND_MUSIC = exports.LOADING_LESSON_BUNDLE_ENDED = exports.LOADING_LESSON_ENDED = exports.ADD_GUILD_HAND_TIMER = exports.SHOW_TIGO_GREET = exports.SCROLL_LESSON_2_LEARN = exports.SYNC_LESSON_INFO = exports.NOVICE_GUIDE_FINISH = exports.NOVICE_GUIDE_ENTER = exports.POPUP_QUIT_LESSON_ALERT = exports.BACK = exports.NEXT_LESSON = exports.STATE_TO_ENCOURAGE_LIST = exports.STATE_TO_BOOK_LIST = exports.STATE_TO_GAME_LIST = exports.STATE_TO_HALL = exports.STATE_TO_REPORT = exports.STATE_TO_LESSON = void 0;
    exports.STATE_TO_LESSON = "stateToLesson";
    exports.STATE_TO_REPORT = "stateToReport";
    exports.STATE_TO_HALL = "stateToHall";
    exports.STATE_TO_GAME_LIST = "stateToGameList";
    exports.STATE_TO_BOOK_LIST = "stateToBookList";
    exports.STATE_TO_ENCOURAGE_LIST = "stateToEncourageList";
    exports.NEXT_LESSON = "nextLesson";
    exports.BACK = "back";
    exports.POPUP_QUIT_LESSON_ALERT = "popupQuitLessonAlert";
    exports.NOVICE_GUIDE_ENTER = "novice_guide_enter";
    exports.NOVICE_GUIDE_FINISH = "novice_guide_finish";
    exports.SYNC_LESSON_INFO = "syncLessonInfo";
    exports.SCROLL_LESSON_2_LEARN = "scrollLesson2Learn";
    exports.SHOW_TIGO_GREET = "showTigoGreet";
    exports.ADD_GUILD_HAND_TIMER = "addGuidHandTimer";
    exports.LOADING_LESSON_ENDED = "loading_lesson_ended";
    exports.LOADING_LESSON_BUNDLE_ENDED = "loading_lesson_bundle_ended";
    exports.STOP_BACKGROUND_MUSIC = "stopBgMusic";
    exports.PLAY_BACKGROUND_MUSIC = "playBgMusic";
    exports.STATE_TO_PICTURE_BOOK = "stateToPictureBook";
    exports.STATE_TO_GAME = "stateToGame";
    exports.ON_GAME_PASS = "on_game_pass";
    exports.ON_GAME_RESUME = "on_game_resume";
    exports.SHOW_COMMON_HAND_GUILD = "show_common_hand_guild";
    exports.HIDE_COMMON_HAND_GUILD = "hide_common_hand_guild";
    cc._RF.pop();
  }, {} ],
  extracurricularBooKState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23b64aP5EVJHZuqS8UJaJNu", "extracurricularBooKState");
    "use strict";
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
    var assetsManager_1 = require("../manager/assetsManager");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var pictureBookListState_1 = require("./pictureBookListState");
    var kit_1 = require("../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExtracurricularBooKState = function() {
      function ExtracurricularBooKState() {}
      ExtracurricularBooKState.prototype.onMessage = function(entity, telegram) {
        return true;
      };
      ExtracurricularBooKState.prototype.enter = function(_data) {
        return __awaiter(this, void 0, Promise, function() {
          var data, loadingNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = _data.data;
              return [ 4, this.openBook(data.id) ];

             case 1:
              _a.sent();
              loadingNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING);
              loadingNode.zIndex = cc.macro.MAX_ZINDEX;
              this.entity.uiNode.addChild(loadingNode);
              kit_1.kit.manager.Event.on(event_1.BACK, this.onBack, this);
              kit_1.kit.manager.Event.on(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
              return [ 2, Promise.resolve() ];
            }
          });
        });
      };
      ExtracurricularBooKState.prototype.openBook = function(chapterId) {
        var _this = this;
        return new Promise(function(res, rej) {
          var list = [];
          cc.log("\u52a0\u8f7d\u8bfe\u7a0bid\uff1a" + chapterId);
          var config = config_1.PICTURE_BOOK_LIST_CONFIG.find(function(element) {
            if (chapterId === element.id) {
              element.assets.forEach(function(url) {
                list.push("" + url);
              });
              return true;
            }
          });
          list.unshift(config.main);
          list.unshift("book_base");
          kit_1.kit.util.Bundle.loadBundles(list).then(function(result) {
            _this.bookBundle = result;
            var bundle = null;
            bundle = result.find(function(element) {
              return "book_base" === element.name;
            });
            bundle.load("" + config.main, cc.Prefab, function(error, prefab) {
              if (error) {
                cc.error(error);
                return;
              }
              _this.bookNode = cc.instantiate(prefab);
              _this.entity.contentNode.addChild(_this.bookNode);
              kit_1.kit.system.timer.doFrameOnce(1, function() {
                kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, config.params);
              });
              _this.entity.uiNode.removeChild(assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING));
              var topBar = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
              _this.entity.uiNode.addChild(topBar);
              topBar.getComponent(config_1.BUNDLE_TOP_BAR).init({
                isShowNext: false
              });
              res();
            });
          }).catch(function(error) {
            cc.error(error);
            rej(error);
          });
        });
      };
      ExtracurricularBooKState.prototype.closeBook = function() {
        if (!cc.isValid(this.bookNode)) return;
        if (this.bookNode) {
          this.bookNode.destroy();
          this.bookNode = null;
        }
        this.bookBundle.forEach(function(element) {
          cc.assetManager.removeBundle(element);
        });
      };
      ExtracurricularBooKState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      ExtracurricularBooKState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.BACK, this.onBack, this);
        kit_1.kit.manager.Event.off(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
        var ui = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
        this.entity.uiNode.removeChild(ui);
        this.closeBook();
      };
      ExtracurricularBooKState.prototype.popupQuitAlert = function() {
        var alert = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_QUIT_LESSON_ALERT);
        kit_1.kit.manager.Popup.show(alert, null, {
          mode: kit_1.kit.manager.Popup.cacheMode.Frequent
        });
      };
      ExtracurricularBooKState.prototype.onLessonComplete = function() {
        var _this = this;
        var param = {
          type: 1,
          callback: function() {
            _this.onBack();
          }
        };
        var node = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LESSON_COMPLETE);
        node.getComponent(config_1.BUNDLE_LESSON_COMPLETE).init(param);
        this.entity.uiNode.addChild(node);
      };
      ExtracurricularBooKState.prototype.onBack = function() {
        this.entity.changeState(pictureBookListState_1.default);
      };
      ExtracurricularBooKState = __decorate([ ccclass ], ExtracurricularBooKState);
      return ExtracurricularBooKState;
    }();
    exports.default = ExtracurricularBooKState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "../manager/assetsManager": "assetsManager",
    "./pictureBookListState": "pictureBookListState"
  } ],
  extracurricularGameState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebc24llmAxCKKPAA8uMOJWc", "extracurricularGameState");
    "use strict";
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
    var assetsManager_1 = require("../manager/assetsManager");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var gameListState_1 = require("./gameListState");
    var kit_1 = require("../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExtracurricularGameState = function() {
      function ExtracurricularGameState() {}
      ExtracurricularGameState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      ExtracurricularGameState.prototype.enter = function(_data) {
        return __awaiter(this, void 0, Promise, function() {
          var data, loadingNode;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = _data.data;
              return [ 4, this.openGame(data.id) ];

             case 1:
              _a.sent();
              loadingNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING);
              loadingNode.zIndex = cc.macro.MAX_ZINDEX;
              this.entity.uiNode.addChild(loadingNode);
              kit_1.kit.manager.Event.on(event_1.BACK, this.onBack, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.SET_TOP_BAR_ACTIVE, this.setTopBarActive, this);
              kit_1.kit.manager.Event.on(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
              return [ 2 ];
            }
          });
        });
      };
      ExtracurricularGameState.prototype.openGame = function(chapterId) {
        var _this = this;
        return new Promise(function(res, rej) {
          var list = [];
          cc.log("\u52a0\u8f7d\u8bfe\u7a0bid\uff1a" + chapterId);
          var config = config_1.GAME_LIST_CONFIG.find(function(element) {
            if (chapterId === element.id) {
              element.assets.forEach(function(url) {
                list.push("" + _this.entity.host + url);
              });
              return true;
            }
          });
          list.unshift("" + _this.entity.host + config.main);
          kit_1.kit.util.Bundle.loadBundles(list).then(function(result) {
            _this.gameBundle = result;
            var bundle = result.find(function(element) {
              return element.name === config.main;
            });
            bundle.load("" + config.main, cc.Prefab, function(error, prefab) {
              if (error) {
                cc.error(error);
                return;
              }
              _this.gameNode = cc.instantiate(prefab);
              _this.entity.contentNode.addChild(_this.gameNode);
              kit_1.kit.system.timer.doFrameOnce(1, function() {
                kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, config.params);
              });
              _this.entity.uiNode.removeChild(assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING));
              var topBar = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
              _this.entity.uiNode.addChild(topBar);
              topBar.getComponent(config_1.BUNDLE_TOP_BAR).init({
                isShowNext: false
              });
              res();
            });
          }).catch(function(error) {
            cc.error(error);
            rej(error);
          });
        });
      };
      ExtracurricularGameState.prototype.closeGame = function() {
        if (!cc.isValid(this.gameNode)) return;
        if (this.gameNode) {
          this.gameNode.destroy();
          this.gameNode = null;
        }
        this.gameBundle.forEach(function(element) {
          cc.assetManager.removeBundle(element);
        });
      };
      ExtracurricularGameState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      ExtracurricularGameState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.BACK, this.onBack, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.SET_TOP_BAR_ACTIVE, this.setTopBarActive, this);
        kit_1.kit.manager.Event.off(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
        var ui = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
        this.entity.uiNode.removeChild(ui);
        this.closeGame();
      };
      ExtracurricularGameState.prototype.popupQuitAlert = function() {
        var alert = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_QUIT_LESSON_ALERT);
        kit_1.kit.manager.Popup.show(alert, null, {
          mode: kit_1.kit.manager.Popup.cacheMode.Frequent
        });
      };
      ExtracurricularGameState.prototype.onLessonComplete = function() {
        var _this = this;
        var param = {
          type: 1,
          callback: function() {
            _this.onBack();
          }
        };
        var node = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LESSON_COMPLETE);
        node.getComponent(config_1.BUNDLE_LESSON_COMPLETE).init(param);
        this.entity.uiNode.addChild(node);
      };
      ExtracurricularGameState.prototype.setTopBarActive = function(eventData) {
        var data = eventData.data;
        this.entity.uiNode.getChildByName(config_1.BUNDLE_TOP_BAR).active = data.active;
      };
      ExtracurricularGameState.prototype.onBack = function() {
        this.entity.changeState(gameListState_1.default);
      };
      ExtracurricularGameState = __decorate([ ccclass ], ExtracurricularGameState);
      return ExtracurricularGameState;
    }();
    exports.default = ExtracurricularGameState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "../manager/assetsManager": "assetsManager",
    "./gameListState": "gameListState"
  } ],
  firstPageState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a969tERhVMiLRcIqJ2tECl", "firstPageState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var BackGroundMusicState_1 = require("./globalState/BackGroundMusicState");
    var hallState_1 = require("./hallState");
    var FirstPageState = function() {
      function FirstPageState() {}
      FirstPageState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      FirstPageState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, _this.toHall, _this);
          kit_1.kit.util.Bundle.loadBundle("bundles/" + config_1.BUNDLE_FIRST_PAGE).then(function(bundle) {
            _this.bundle = bundle;
            bundle.load("prefab/" + config_1.BUNDLE_FIRST_PAGE, cc.Prefab, function(error, prefab) {
              if (error) {
                rej(error);
                return;
              }
              _this.firstPage = cc.instantiate(prefab);
              _this.entity.contentNode.addChild(_this.firstPage);
              res();
            });
          });
        });
      };
      FirstPageState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      FirstPageState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.toHall, this);
        this.entity.contentNode.removeChild(this.firstPage);
        this.firstPage.destroy();
        cc.assetManager.removeBundle(this.bundle);
      };
      FirstPageState.prototype.toHall = function(event) {
        this.entity.stateMachine.AddGlobalState(BackGroundMusicState_1.default);
        this.entity.stateMachine.ChangeState(hallState_1.default);
      };
      return FirstPageState;
    }();
    exports.default = FirstPageState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "./globalState/BackGroundMusicState": "BackGroundMusicState",
    "./hallState": "hallState"
  } ],
  gameListState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "783f80xkNBOsY5qKIzMnbUh", "gameListState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var extracurricularGameState_1 = require("./extracurricularGameState");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var hallState_1 = require("./hallState");
    var kit_1 = require("../../kit/kit");
    var GameListState = function() {
      function GameListState() {}
      GameListState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      GameListState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_GAME_LIST, "prefab/" + config_1.BUNDLE_GAME_LIST, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              rej(error);
              return;
            }
            _this.gameListNode = cc.instantiate(prefab);
            _this.entity.contentNode.addChild(_this.gameListNode);
            kit_1.kit.manager.Event.emit(event_1.PLAY_BACKGROUND_MUSIC);
            kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, _this.showHall, _this);
            kit_1.kit.manager.Event.on(event_1.STATE_TO_GAME, _this.onGameListClick, _this);
            res();
          });
        });
      };
      GameListState.prototype.onGameListClick = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(extracurricularGameState_1.default, data);
      };
      GameListState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      GameListState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.showHall, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_GAME, this.onGameListClick, this);
        this.entity.contentNode.removeChild(this.gameListNode);
        this.gameListNode.destroy();
        kit_1.kit.manager.resources.releaseAsset(config_1.BUNDLE_GAME_LIST);
      };
      GameListState.prototype.showHall = function() {
        this.entity.changeState(hallState_1.default);
      };
      return GameListState;
    }();
    exports.default = GameListState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "./extracurricularGameState": "extracurricularGameState",
    "./hallState": "hallState"
  } ],
  hallState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3658cD0OelG/oo3JvhbTksm", "hallState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var event_1 = require("./../config/event");
    var config_1 = require("../config/config");
    var event_2 = require("../config/event");
    var reportState_1 = require("./reportState");
    var gameListState_1 = require("./gameListState");
    var pictureBookListState_1 = require("./pictureBookListState");
    var userDataManager_1 = require("../manager/userDataManager");
    var enum_1 = require("../config/enum");
    var firstPageState_1 = require("./firstPageState");
    var NoviceGuideState_1 = require("./globalState/NoviceGuideState");
    var loadingState_1 = require("./loadingState");
    var encourageListState_1 = require("./encourageListState");
    var kit_1 = require("../../kit/kit");
    var lessonState_1 = require("./lessonState");
    var HallState = function() {
      function HallState() {}
      HallState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      HallState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_2.STATE_TO_LESSON, _this.onLessonItemClick, _this);
          kit_1.kit.manager.Event.on(event_2.STATE_TO_REPORT, _this.onReportItemClick, _this);
          kit_1.kit.manager.Event.on(event_2.STATE_TO_GAME_LIST, _this.onGameListClick, _this);
          kit_1.kit.manager.Event.on(event_2.STATE_TO_BOOK_LIST, _this.onBookListClick, _this);
          kit_1.kit.manager.Event.on(event_2.NOVICE_GUIDE_FINISH, _this.onNoviceGuideFinish, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_ENCOURAGE_LIST, _this.onEncourageListClick, _this);
          kit_1.kit.manager.Event.emit(event_1.PLAY_BACKGROUND_MUSIC);
          var _guideStep = userDataManager_1.UserDataManager.instance.guideStep;
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_HALL, "prefab/" + config_1.BUNDLE_HALL, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              rej(error);
              return;
            }
            _this.hallNode = cc.instantiate(prefab);
            _this.entity.contentNode.addChild(_this.hallNode);
            -1 !== _guideStep && _this.entity.stateMachine.AddGlobalState(NoviceGuideState_1.default);
            var preState = _this.entity.stateMachine.PreviousState;
            if (preState instanceof firstPageState_1.default) {
              var _guideStep_1 = userDataManager_1.UserDataManager.instance.guideStep;
              -1 === _guideStep_1 && kit_1.kit.system.timer.doFrameOnce(1, function() {
                kit_1.kit.manager.Event.emit(event_1.SHOW_TIGO_GREET);
              }, _this);
            }
            var clickPicBook = kit_1.kit.util.LocalStorage.getBool(config_1.HAS_CLICK_PICKBOOK) || false;
            if (preState instanceof lessonState_1.default && !clickPicBook) kit_1.kit.system.timer.doFrameOnce(30, function() {
              var hallComp = _this.hallNode.getComponent("hall");
              var worldPos = hallComp.picBookNode.parent.convertToWorldSpaceAR(hallComp.picBookNode.position);
              kit_1.kit.manager.Event.emit(event_1.SHOW_COMMON_HAND_GUILD, worldPos);
            }); else {
              var _guideStep_2 = userDataManager_1.UserDataManager.instance.guideStep;
              -1 == _guideStep_2 && kit_1.kit.manager.Event.emit(event_1.ADD_GUILD_HAND_TIMER);
            }
            res();
          });
        });
      };
      HallState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      HallState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.emit(event_1.HIDE_COMMON_HAND_GUILD);
        this.entity.contentNode.removeChild(this.hallNode);
        this.hallNode.destroy();
        kit_1.kit.manager.resources.releaseAsset(config_1.BUNDLE_HALL);
        kit_1.kit.manager.Event.off(event_2.STATE_TO_LESSON, this.onLessonItemClick, this);
        kit_1.kit.manager.Event.off(event_2.STATE_TO_REPORT, this.onReportItemClick, this);
        kit_1.kit.manager.Event.off(event_2.STATE_TO_GAME_LIST, this.onGameListClick, this);
        kit_1.kit.manager.Event.off(event_2.STATE_TO_BOOK_LIST, this.onBookListClick, this);
        kit_1.kit.manager.Event.off(event_2.NOVICE_GUIDE_FINISH, this.onNoviceGuideFinish, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_ENCOURAGE_LIST, this.onEncourageListClick, this);
      };
      HallState.prototype.onLessonItemClick = function(event) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        userDataManager_1.UserDataManager.instance.backState = enum_1.BACK_STATE.LessonState;
        this.entity.changeState(loadingState_1.default, event.data);
      };
      HallState.prototype.onReportItemClick = function(event) {
        this.entity.changeState(reportState_1.default, event.data);
      };
      HallState.prototype.onGameListClick = function(event) {
        userDataManager_1.UserDataManager.instance.backState = enum_1.BACK_STATE.GameListState;
        this.entity.changeState(gameListState_1.default, event.data);
      };
      HallState.prototype.onBookListClick = function(event) {
        userDataManager_1.UserDataManager.instance.backState = enum_1.BACK_STATE.PictureBookListState;
        this.entity.changeState(pictureBookListState_1.default);
      };
      HallState.prototype.onEncourageListClick = function(event) {
        userDataManager_1.UserDataManager.instance.backState = enum_1.BACK_STATE.EncourageListState;
        this.entity.changeState(encourageListState_1.default);
      };
      HallState.prototype.onNoviceGuideFinish = function(event) {
        this.entity.stateMachine.RemoveGlobalState(NoviceGuideState_1.default);
        kit_1.kit.manager.Event.emit(event_1.SHOW_TIGO_GREET);
        kit_1.kit.manager.Event.emit(event_1.ADD_GUILD_HAND_TIMER);
      };
      return HallState;
    }();
    exports.default = HallState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/enum": "enum",
    "../config/event": "event",
    "../manager/userDataManager": "userDataManager",
    "./../config/event": "event",
    "./encourageListState": "encourageListState",
    "./firstPageState": "firstPageState",
    "./gameListState": "gameListState",
    "./globalState/NoviceGuideState": "NoviceGuideState",
    "./lessonState": "lessonState",
    "./loadingState": "loadingState",
    "./pictureBookListState": "pictureBookListState",
    "./reportState": "reportState"
  } ],
  initState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87af1mhnlFMIbfY91FRhVLN", "initState");
    "use strict";
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
    var EncourageWallDataManager_1 = require("./../manager/EncourageWallDataManager");
    var config_1 = require("../config/config");
    var lessonManager_1 = require("../manager/lessonManager");
    var firstPageState_1 = require("./firstPageState");
    var hallState_1 = require("./hallState");
    var BackGroundMusicState_1 = require("./globalState/BackGroundMusicState");
    var FollowReadState_1 = require("./globalState/FollowReadState");
    var GameDataManager_1 = require("../manager/GameDataManager");
    var PicBookDataManager_1 = require("../manager/PicBookDataManager");
    var kit_1 = require("../../kit/kit");
    var assetsManager_1 = require("../manager/assetsManager");
    var InitState = function() {
      function InitState() {}
      InitState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      InitState.prototype.enter = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.entity.host = kit_1.kit.system.platform.isDebug ? config_1.URL_BASE_TEST : config_1.URL_BASE;
              lessonManager_1.default.instance.init();
              GameDataManager_1.GameDataManager.instance.init();
              PicBookDataManager_1.PicBookDataManager.instance.init();
              return [ 4, EncourageWallDataManager_1.EncourageWallDataManager.instance.init() ];

             case 1:
              _a.sent();
              this.entity.stateMachine.AddGlobalState(FollowReadState_1.default);
              if (kit_1.kit.system.platform.isDebug) {
                this.preloadComponents(function() {
                  _this.entity.stateMachine.AddGlobalState(BackGroundMusicState_1.default);
                  _this.entity.stateMachine.ChangeState(hallState_1.default);
                });
                return [ 2 ];
              }
              this.entity.stateMachine.ChangeState(firstPageState_1.default);
              this.preloadComponents();
              return [ 2, Promise.resolve() ];
            }
          });
        });
      };
      InitState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      InitState.prototype.exit = function(data) {};
      InitState.prototype.preloadComponents = function(loadCb) {
        kit_1.kit.util.Bundle.loadBundle(config_1.BUNDLE_ROOT + "/" + config_1.BUNDLE_COMPONENTS).then(function(bundle) {
          loadCb && loadCb();
          config_1.PRELOAD_LIST.forEach(function(element) {
            bundle.load(element + "/" + element, cc.Prefab, function(error, prefab) {
              if (error) {
                cc.error("preload components error,target is empty.component name:" + element);
                return;
              }
              var node = cc.instantiate(prefab);
              assetsManager_1.default.instance.addGlobalNode(node);
            });
          });
        });
      };
      return InitState;
    }();
    exports.default = InitState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../manager/GameDataManager": "GameDataManager",
    "../manager/PicBookDataManager": "PicBookDataManager",
    "../manager/assetsManager": "assetsManager",
    "../manager/lessonManager": "lessonManager",
    "./../manager/EncourageWallDataManager": "EncourageWallDataManager",
    "./firstPageState": "firstPageState",
    "./globalState/BackGroundMusicState": "BackGroundMusicState",
    "./globalState/FollowReadState": "FollowReadState",
    "./hallState": "hallState"
  } ],
  interfaceVo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5badVH4HtCDYRjlt76aCju", "interfaceVo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EncourageItemData = exports.GameItemData = exports.BookItemData = void 0;
    var BookItemData = function() {
      function BookItemData(data, unlock) {
        this.parse(data, unlock);
      }
      BookItemData.prototype.parse = function(data, unlock) {
        this.id = data.id;
        this.url = data.url;
        this.main = data.main;
        this.assets = data.assets;
        this.params = data.params;
        this.unlock = !!unlock;
      };
      Object.defineProperty(BookItemData.prototype, "isLock", {
        get: function() {
          return this.unlock;
        },
        enumerable: false,
        configurable: true
      });
      BookItemData.prototype.setUnlock = function() {
        this.unlock = true;
      };
      return BookItemData;
    }();
    exports.BookItemData = BookItemData;
    var GameItemData = function() {
      function GameItemData(data, unlock) {
        this.parse(data, unlock);
      }
      GameItemData.prototype.parse = function(data, unlock) {
        cc.log(" ====unlock: ", unlock);
        this.id = data.id;
        this.url = data.url;
        this.main = data.main;
        this.assets = data.assets;
        this.params = data.params;
        this.unlock = !!unlock;
      };
      Object.defineProperty(GameItemData.prototype, "isLock", {
        get: function() {
          return this.unlock;
        },
        enumerable: false,
        configurable: true
      });
      GameItemData.prototype.setUnlock = function() {
        this.unlock = true;
      };
      return GameItemData;
    }();
    exports.GameItemData = GameItemData;
    var EncourageItemData = function() {
      function EncourageItemData(data, unlock) {
        this.parse(data, unlock);
      }
      EncourageItemData.prototype.parse = function(data, unlock) {
        cc.log(" ====unlock: ", unlock);
        this.lessonId = data.lessonId;
        this.shipUrl = data.shipUrl;
        this.iconUrl = data.iconUrl;
        this.type = data.type;
        this.bookId = data.bookId;
        this.gameId = data.gameId;
        this.propId = data.propId;
        this.lockVal = unlock;
      };
      Object.defineProperty(EncourageItemData.prototype, "isLock", {
        get: function() {
          return !!this.lockVal;
        },
        enumerable: false,
        configurable: true
      });
      EncourageItemData.prototype.setUnlock = function() {
        this.lockVal = 0;
      };
      return EncourageItemData;
    }();
    exports.EncourageItemData = EncourageItemData;
    cc._RF.pop();
  }, {} ],
  kit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0021bLOR+9Et4c4N6n3aMR9", "kit");
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
    exports.kit = void 0;
    var ClickCmpt_1 = require("./component/ClickCmpt");
    var ResLoader_1 = require("./framework/load/ResLoader");
    var PlatformSystem_1 = require("./framework/platform/PlatformSystem");
    var PopupBase_1 = require("./manager/popupManager.ts/PopupBase");
    var PopupManager_1 = require("./manager/popupManager.ts/PopupManager");
    var ResourcesManager_1 = require("./manager/ResourcesManager");
    var ClientModuleEnum_1 = require("./structure/ClientModuleEnum");
    var AudioManager_1 = require("./system/audio/AudioManager");
    var ErrorSystem_1 = require("./system/error/ErrorSystem");
    var EventSystem_1 = require("./system/event/EventSystem");
    var Telegram_1 = require("./system/fsm/message/Telegram");
    var StateMachine_1 = require("./system/fsm/StateMachine");
    var LogSystem_1 = require("./system/log/LogSystem");
    var HttpSystem_1 = require("./system/net/http/HttpSystem");
    var TimerSystem_1 = require("./system/timer/TimerSystem");
    var bundleUtil_1 = require("./utils/bundleUtil");
    var LocalStorageUtils_1 = require("./utils/LocalStorageUtils");
    var TimeUtils_1 = require("./utils/TimeUtils");
    var UIUtils_1 = require("./utils/UIUtils");
    var LinkedNode_1 = require("./structure/LinkedNode");
    var events_1 = require("./events/events");
    var kit;
    (function(kit) {
      var util;
      (function(util) {
        var Time = function(_super) {
          __extends(Time, _super);
          function Time() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Time;
        }(TimeUtils_1.TimeUtils);
        util.Time = Time;
        var Bundle = function(_super) {
          __extends(Bundle, _super);
          function Bundle() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Bundle;
        }(bundleUtil_1.default);
        util.Bundle = Bundle;
        var Ui = function(_super) {
          __extends(Ui, _super);
          function Ui() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Ui;
        }(UIUtils_1.default);
        util.Ui = Ui;
        var UiContainer = function(_super) {
          __extends(UiContainer, _super);
          function UiContainer() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return UiContainer;
        }(UIUtils_1.UIContainer);
        util.UiContainer = UiContainer;
        var LocalStorage = function(_super) {
          __extends(LocalStorage, _super);
          function LocalStorage() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return LocalStorage;
        }(LocalStorageUtils_1.LocalStorageUtils);
        util.LocalStorage = LocalStorage;
      })(util = kit.util || (kit.util = {}));
      var system;
      (function(system) {
        system.log = LogSystem_1.default.instance;
        system.error = ErrorSystem_1.default.instance;
        system.timer = TimerSystem_1.default.instance;
        system.platform = PlatformSystem_1.default.instance;
      })(system = kit.system || (kit.system = {}));
      var manager;
      (function(manager) {
        manager.resources = ResourcesManager_1.default.instance;
        var Resources;
        (function(Resources) {
          Resources.Type = ResourcesManager_1.ResourceType;
        })(Resources = manager.Resources || (manager.Resources = {}));
        var Audio = function(_super) {
          __extends(Audio, _super);
          function Audio() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Audio;
        }(AudioManager_1.default);
        manager.Audio = Audio;
        var Event = function(_super) {
          __extends(Event, _super);
          function Event() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Event;
        }(EventSystem_1.default);
        manager.Event = Event;
        var Http = function(_super) {
          __extends(Http, _super);
          function Http() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Http;
        }(HttpSystem_1.default);
        manager.Http = Http;
        var Popup = function(_super) {
          __extends(Popup, _super);
          function Popup() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          Popup.cacheMode = PopupManager_1.PopupCacheMode;
          Popup.showResult = PopupManager_1.PopupShowResult;
          Popup.Base = PopupBase_1.default;
          return Popup;
        }(PopupManager_1.default);
        manager.Popup = Popup;
      })(manager = kit.manager || (kit.manager = {}));
      var consts;
      (function(consts) {
        var Event = function(_super) {
          __extends(Event, _super);
          function Event() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Event;
        }(events_1.default);
        consts.Event = Event;
      })(consts = kit.consts || (kit.consts = {}));
      var structure;
      (function(structure) {
        var LinkList = function(_super) {
          __extends(LinkList, _super);
          function LinkList() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return LinkList;
        }(LinkedNode_1.default);
        structure.LinkList = LinkList;
      })(structure = kit.structure || (kit.structure = {}));
      var video;
      (function(video) {
        video.videoTransType = ClientModuleEnum_1.VideoEventTransType;
      })(video = kit.video || (kit.video = {}));
      var component;
      (function(component) {
        var Click = function(_super) {
          __extends(Click, _super);
          function Click() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Click;
        }(ClickCmpt_1.default);
        component.Click = Click;
      })(component = kit.component || (kit.component = {}));
      var Loader = function(_super) {
        __extends(Loader, _super);
        function Loader() {
          return null !== _super && _super.apply(this, arguments) || this;
        }
        return Loader;
      }(ResLoader_1.default);
      kit.Loader = Loader;
      var fsm;
      (function(fsm) {
        var StateManager = function(_super) {
          __extends(StateManager, _super);
          function StateManager() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return StateManager;
        }(StateMachine_1.default);
        fsm.StateManager = StateManager;
        var Telegrams = function(_super) {
          __extends(Telegrams, _super);
          function Telegrams() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Telegrams;
        }(Telegram_1.default);
        fsm.Telegrams = Telegrams;
      })(fsm = kit.fsm || (kit.fsm = {}));
    })(kit = exports.kit || (exports.kit = {}));
    cc._RF.pop();
  }, {
    "./component/ClickCmpt": "ClickCmpt",
    "./events/events": "events",
    "./framework/load/ResLoader": "ResLoader",
    "./framework/platform/PlatformSystem": "PlatformSystem",
    "./manager/ResourcesManager": "ResourcesManager",
    "./manager/popupManager.ts/PopupBase": "PopupBase",
    "./manager/popupManager.ts/PopupManager": "PopupManager",
    "./structure/ClientModuleEnum": "ClientModuleEnum",
    "./structure/LinkedNode": "LinkedNode",
    "./system/audio/AudioManager": "AudioManager",
    "./system/error/ErrorSystem": "ErrorSystem",
    "./system/event/EventSystem": "EventSystem",
    "./system/fsm/StateMachine": "StateMachine",
    "./system/fsm/message/Telegram": "Telegram",
    "./system/log/LogSystem": "LogSystem",
    "./system/net/http/HttpSystem": "HttpSystem",
    "./system/timer/TimerSystem": "TimerSystem",
    "./utils/LocalStorageUtils": "LocalStorageUtils",
    "./utils/TimeUtils": "TimeUtils",
    "./utils/UIUtils": "UIUtils",
    "./utils/bundleUtil": "bundleUtil"
  } ],
  lessonManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea21bRx+k5JDbpiLVgMj4YC", "lessonManager");
    "use strict";
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
    var EncourageWallDataManager_1 = require("./EncourageWallDataManager");
    var userDataManager_1 = require("./userDataManager");
    var enum_1 = require("./../config/enum");
    var config_1 = require("../config/config");
    var lessonVo_1 = require("../structure/lessonVo");
    var PicBookDataManager_1 = require("./PicBookDataManager");
    var GameDataManager_1 = require("./GameDataManager");
    var kit_1 = require("../../kit/kit");
    var LESSON_MANAGER_SAVE_KEY = "LESSON_MANAGER_SAVE_KEY";
    var LESSON_COMPLETE_SAVE_KEY = "LESSON_COMPLETE_SAVE_KEY";
    var LessonManager = function() {
      function LessonManager() {
        this.lessonList = [];
        this.registerEvent();
      }
      Object.defineProperty(LessonManager, "instance", {
        get: function() {
          LessonManager._instance || (LessonManager._instance = new LessonManager());
          return LessonManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      LessonManager.prototype.destroy = function() {
        this.lessonList = [];
        this.unRegisterEvent();
      };
      LessonManager.prototype.registerEvent = function() {};
      LessonManager.prototype.unRegisterEvent = function() {};
      LessonManager.prototype.updateChapterViewState = function() {};
      LessonManager.prototype.setCurViewLessonId = function(lessonId) {
        this._curViewLessonId = lessonId;
        this.getCurViewLessonData().reportViewed = true;
        this.save();
      };
      LessonManager.prototype.setReportCompleteState = function(com) {
        void 0 === com && (com = true);
        this.getCurViewLessonData().setLessonReportCompleteState(com);
        this.save();
      };
      LessonManager.prototype.init = function() {
        return __awaiter(this, void 0, Promise, function() {
          var lessonConfig, temp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getLessonConfig() ];

             case 1:
              lessonConfig = _a.sent();
              this.initLessonData(lessonConfig);
              temp = [];
              this.lessonList.forEach(function(element) {
                element.chapters.forEach(function(lesson) {
                  temp.push(lesson);
                });
              });
              this.lessonStructureList = kit_1.kit.structure.LinkList.from(temp);
              cc.log("lessonStructureList:", this.lessonStructureList);
              return [ 2 ];
            }
          });
        });
      };
      LessonManager.prototype.getLessonConfig = function() {
        return new Promise(function(res, rej) {
          false;
          res(config_1.LESSON_LIST_CONFIG);
        });
      };
      LessonManager.prototype.initLessonData = function(lessonConfig) {
        var stateConfig = kit_1.kit.util.LocalStorage.getObject(LESSON_MANAGER_SAVE_KEY) || {};
        for (var key in lessonConfig) if (Object.prototype.hasOwnProperty.call(lessonConfig, key)) {
          var config = lessonConfig[key];
          var lessonData = new lessonVo_1.LessonListVo(config);
          var lessonState = stateConfig[lessonData.lessonId];
          if (lessonState) {
            lessonData.setLessonReportCompleteState(lessonState["report"]["isComplete"]);
            lessonData.setLessonChapterCompleteState(lessonState["chapters"]);
            lessonData.reportViewed = lessonState.reportViewed;
            lessonData.rewardInfo = lessonState.rewardInfo;
          }
          cc.log(" lessonId: " + lessonData.lessonId + "  complete: " + lessonData.complete, lessonData);
          this.lessonList.push(lessonData);
        }
        this.updateNext2LearnChapter();
      };
      LessonManager.prototype.getLessonDataById = function(lessonId) {
        var lessonData = this.lessonList.find(function(ele) {
          return ele.lessonId == lessonId;
        });
        return lessonData;
      };
      Object.defineProperty(LessonManager.prototype, "totalLessonData", {
        get: function() {
          return this.lessonList;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LessonManager.prototype, "currentChapterData", {
        get: function() {
          return this._currentChapter;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LessonManager.prototype, "allLessonViewed", {
        get: function() {
          return this.lessonList.every(function(ele) {
            return ele.chapterAllViewed;
          });
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LessonManager.prototype, "allLessonComplete", {
        get: function() {
          return this.lessonList.every(function(ele) {
            return ele.complete;
          });
        },
        enumerable: false,
        configurable: true
      });
      LessonManager.prototype.chapterBegin = function(chapterData) {
        this._currentChapter = chapterData;
        this._curViewLessonId = chapterData.lessonId;
        var lessonData = this.getLessonDataById(chapterData.lessonId);
        lessonData.setChapterState(chapterData.chapterId, enum_1.CHAPTER_STATE.viewed);
        this.updateNext2LearnChapter();
        this.save();
      };
      LessonManager.prototype.updateNext2LearnChapter = function() {
        var next2LearnIndex = this.lessonList.findIndex(function(lessonData) {
          for (var index_1 = 0; index_1 < lessonData.chapters.length; index_1++) {
            var chapterDta = lessonData.chapters[index_1];
            if (chapterDta.chapterState == enum_1.CHAPTER_STATE.next2view) return true;
          }
          return false;
        });
        if (next2LearnIndex > -1) return;
        var cData = null;
        var index = this.lessonList.findIndex(function(lessonData) {
          for (var index_2 = 0; index_2 < lessonData.chapters.length; index_2++) {
            var chapterDta = lessonData.chapters[index_2];
            if (chapterDta.chapterState == enum_1.CHAPTER_STATE.lock) {
              cData = chapterDta;
              return true;
            }
          }
          return false;
        });
        if (cData) {
          var lessonData = this.getLessonDataById(cData.lessonId);
          lessonData.setChapterState(cData.chapterId, enum_1.CHAPTER_STATE.next2view);
        }
        cc.log(" ===>>this.lessonList\uff1a ", this.lessonList);
      };
      LessonManager.prototype.chapterComplete = function(chapterData) {
        var lessonData = this.getLessonDataById(chapterData.lessonId);
        lessonData.setChapterFirstCompByChapterId(chapterData.chapterId, true);
        lessonData.setChapterCompStateByChapterId(chapterData.chapterId, true);
        this.save();
        if (lessonData.complete) {
          this.updateItemUnLockState(chapterData);
          var lessonIds = kit_1.kit.util.LocalStorage.getObject(LESSON_COMPLETE_SAVE_KEY) || [];
          if (-1 == lessonIds.indexOf(lessonData.lessonId)) {
            lessonIds.push(lessonData.lessonId);
            kit_1.kit.util.LocalStorage.setObject(LESSON_COMPLETE_SAVE_KEY, lessonIds);
            userDataManager_1.UserDataManager.instance.setLessonFinished();
          }
        }
      };
      LessonManager.prototype.updateItemUnLockState = function(chapterData) {
        var lessonData = this.getLessonDataById(chapterData.lessonId);
        var itemInfo = lessonData.rewardInfo;
        if (itemInfo) {
          EncourageWallDataManager_1.EncourageWallDataManager.instance.setEncourageItemUnlockById(lessonData.lessonId);
          itemInfo.type == enum_1.REWARD_TYPE.game ? GameDataManager_1.GameDataManager.instance.setGameItemUnlockById(itemInfo.gameId) : itemInfo.type == enum_1.REWARD_TYPE.pictureBook ? PicBookDataManager_1.PicBookDataManager.instance.setPicBookItemUnlockById(itemInfo.gameId) : itemInfo.type == enum_1.REWARD_TYPE.prop && GameDataManager_1.GameDataManager.instance.setGameItemUnlockById(itemInfo.gameId);
        }
      };
      LessonManager.prototype.chapterExit = function(lesson) {};
      LessonManager.prototype.reportEnter = function(lessonData) {
        this.setCurViewLessonId(lessonData.lessonId);
        this.getLessonDataById(lessonData.lessonId).reportViewed = true;
      };
      LessonManager.prototype.getChapterDataByType = function(type) {
        var curLessonData = this.getLessonDataById(this._curViewLessonId);
        if (!curLessonData) {
          cc.error("lesson data null! lessonid: " + this._curViewLessonId);
          return;
        }
        var chapterData = curLessonData.chapters.find(function(data) {
          return data.chapterType == type;
        });
        chapterData || cc.error("find data fail! lessonid: " + this._curViewLessonId + " chapterType: " + type);
        return chapterData;
      };
      LessonManager.prototype.getNextChapterData = function() {
        var nextType = this._currentChapter.chapterType + 1;
        return this.getChapterDataByType(nextType);
      };
      LessonManager.prototype.getChapterData = function() {
        var preType = this._currentChapter.chapterType - 1;
        return this.getChapterDataByType(preType);
      };
      LessonManager.prototype.getCurViewLessonData = function() {
        return this.getLessonDataById(this._curViewLessonId);
      };
      LessonManager.prototype.save = function() {
        var obj = {};
        this.lessonList.forEach(function(val) {
          var key = val.lessonId;
          obj[key] = {};
          obj[key]["report"] = val.report;
          obj[key]["chapters"] = val.chapters;
          obj[key]["reportViewed"] = val.reportViewed;
          obj[key]["rewardInfo"] = val.rewardInfo;
        });
        kit_1.kit.util.LocalStorage.setObject(LESSON_MANAGER_SAVE_KEY, obj);
      };
      return LessonManager;
    }();
    exports.default = LessonManager;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../structure/lessonVo": "lessonVo",
    "./../config/enum": "enum",
    "./EncourageWallDataManager": "EncourageWallDataManager",
    "./GameDataManager": "GameDataManager",
    "./PicBookDataManager": "PicBookDataManager",
    "./userDataManager": "userDataManager"
  } ],
  lessonState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e0cdGDAYlJp4gy2mIPyFzf", "lessonState");
    "use strict";
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
    var assetsManager_1 = require("../manager/assetsManager");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var lessonManager_1 = require("../manager/lessonManager");
    var hallState_1 = require("./hallState");
    var loadingState_1 = require("./loadingState");
    var reportState_1 = require("./reportState");
    var kit_1 = require("../../kit/kit");
    var LessonState = function() {
      function LessonState() {
        this.lesson = null;
      }
      LessonState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      LessonState.prototype.enter = function(data) {
        return __awaiter(this, void 0, Promise, function() {
          var topBar;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              kit_1.kit.util.LocalStorage.setBool(config_1.HAS_CLICK_LESSON_ITEM, true);
              this.lessonBundle = data.bundles;
              this.lesson = data.lesson;
              topBar = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
              this.entity.uiNode.addChild(topBar);
              topBar.getComponent(config_1.BUNDLE_TOP_BAR).init({
                isShowNext: true
              });
              kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, this.toHall, this);
              kit_1.kit.manager.Event.on(event_1.NEXT_LESSON, this.toNext, this);
              kit_1.kit.manager.Event.on(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
              kit_1.kit.manager.Event.on(event_1.BACK, this.onBack, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_CREATED, this.onLessonCreated, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_READY, this.onLessonReady, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
              kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_BACK, this.onBack, this);
              return [ 4, this.openLesson(this.lesson) ];

             case 1:
              _a.sent();
              return [ 2, Promise.resolve() ];
            }
          });
        });
      };
      LessonState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      LessonState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.toHall, this);
        kit_1.kit.manager.Event.off(event_1.NEXT_LESSON, this.toNext, this);
        kit_1.kit.manager.Event.off(event_1.POPUP_QUIT_LESSON_ALERT, this.popupQuitAlert, this);
        kit_1.kit.manager.Event.off(event_1.BACK, this.onBack, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_CREATED, this.onLessonCreated, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_READY, this.onLessonReady, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE, this.onLessonComplete, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_BACK, this.onBack, this);
        var ui = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_TOP_BAR);
        this.entity.uiNode.removeChild(ui);
        this.closeLesson();
      };
      LessonState.prototype.openLesson = function(lessonData) {
        lessonManager_1.default.instance.chapterBegin(lessonData);
        switch (lessonData.type) {
         case config_1.LESSON_TYPE_VIDEO:
         case config_1.LESSON_TYPE_PICTURE_BOOK:
         case config_1.LESSON_TYPE_GAME:
          return this.loadLocalProject(lessonData);

         default:
          return Promise.reject("lesson state openLesson not match");
        }
      };
      LessonState.prototype.closeLesson = function() {
        if (!cc.isValid(this.lessonNode)) return;
        if (this.lessonNode) {
          this.lessonNode.destroy();
          this.lessonNode = null;
        }
        this.lessonBundle.forEach(function(element) {
          kit_1.kit.manager.resources.releaseRes(element);
        });
      };
      LessonState.prototype.loadLocalProject = function(lessonData) {
        var _this = this;
        return new Promise(function(res, rej) {
          var chapterId = lessonData.chapterId;
          var bundleName = "";
          cc.log("\u52a0\u8f7d\u8bfe\u7a0bid\uff1a" + chapterId);
          var config = config_1.CHAPTER_CONFIG_LIST.find(function(element) {
            return chapterId === element.id;
          });
          bundleName = config.main;
          var bundle = _this.lessonBundle.find(function(ele) {
            return ele.name === bundleName;
          });
          var bookName = "PicktureBookNode" + config.params.bookNum;
          var mainPrefab = lessonData.type === config_1.LESSON_TYPE_PICTURE_BOOK ? bookName : bundleName;
          bundle.load("" + mainPrefab, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              rej(error);
              return;
            }
            _this.lessonNode = cc.instantiate(prefab);
            _this.entity.contentNode.addChild(_this.lessonNode);
            kit_1.kit.system.timer.doFrameOnce(1, function() {
              kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, config.params);
            });
            res();
          });
        });
      };
      LessonState.prototype.toHall = function() {
        lessonManager_1.default.instance.chapterExit(lessonManager_1.default.instance.currentChapterData);
        this.entity.changeState(hallState_1.default);
      };
      LessonState.prototype.toNext = function() {
        this.closeLesson();
        kit_1.kit.manager.Audio.stopMusic();
        kit_1.kit.manager.Audio.stopEffect();
        var lesson = lessonManager_1.default.instance.getNextChapterData();
        if (lesson) this.entity.changeState(loadingState_1.default, lesson); else {
          var lessonData = lessonManager_1.default.instance.getCurViewLessonData();
          this.entity.changeState(reportState_1.default, lessonData);
        }
      };
      LessonState.prototype.popupQuitAlert = function() {
        var alert = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_QUIT_LESSON_ALERT);
        kit_1.kit.manager.Popup.show(alert, null, {
          mode: kit_1.kit.manager.Popup.cacheMode.Frequent
        });
      };
      LessonState.prototype.onLessonCreated = function() {
        cc.log("onLessonCreated");
      };
      LessonState.prototype.onLessonReady = function() {
        cc.log("onLessonReady");
      };
      LessonState.prototype.onBack = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      LessonState.prototype.onLessonComplete = function() {
        cc.log("onLessonComplete");
        lessonManager_1.default.instance.chapterComplete(lessonManager_1.default.instance.currentChapterData);
        var lessonType = lessonManager_1.default.instance.getCurViewLessonData().lessonType;
        var lessonInfo = lessonManager_1.default.instance.getCurViewLessonData();
        var curChapterData = lessonManager_1.default.instance.currentChapterData;
        cc.log(" =====lessonType: ", lessonType);
        var param = {
          lessonType: lessonType,
          lessonInfo: lessonInfo,
          curChapterData: curChapterData,
          callback: function() {
            kit_1.kit.manager.Event.emit(event_1.NEXT_LESSON);
          }
        };
        var node = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LESSON_COMPLETE);
        node.getComponent(config_1.BUNDLE_LESSON_COMPLETE).init(param);
        this.entity.uiNode.addChild(node);
      };
      return LessonState;
    }();
    exports.default = LessonState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "../manager/assetsManager": "assetsManager",
    "../manager/lessonManager": "lessonManager",
    "./hallState": "hallState",
    "./loadingState": "loadingState",
    "./reportState": "reportState"
  } ],
  lessonVo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c0b2tqErNGsoJweSXNZNQ/", "lessonVo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LessonVo = exports.LessonListVo = void 0;
    var enum_1 = require("../config/enum");
    var LessonVo = function() {
      function LessonVo(data) {
        data && this.parse(data);
      }
      LessonVo.prototype.parse = function(data) {
        this.lessonId = null === data || void 0 === data ? void 0 : data.lessonId;
        this.chapterType = null === data || void 0 === data ? void 0 : data.chapterType;
        this.type = null === data || void 0 === data ? void 0 : data.type;
        this.chapterId = null === data || void 0 === data ? void 0 : data.chapterId;
        this.complete = null === data || void 0 === data ? void 0 : data.complete;
        this.chapterState = (null === data || void 0 === data ? void 0 : data.lessonState) || enum_1.CHAPTER_STATE.lock;
        this.isFirstComplete = false;
      };
      LessonVo.prototype.getFirstCompleteState = function() {
        return this.isFirstComplete;
      };
      return LessonVo;
    }();
    exports.LessonVo = LessonVo;
    exports.default = LessonVo;
    var LessonListVo = function() {
      function LessonListVo(data) {
        data && this.parse(data);
      }
      LessonListVo.prototype.parse = function(data) {
        this.lessonId = null === data || void 0 === data ? void 0 : data.lessonId;
        this.lessonType = null === data || void 0 === data ? void 0 : data.lessonType;
        this.reportViewed = (null === data || void 0 === data ? void 0 : data.reportViewed) || false;
        this.chapters = [];
        if (null === data || void 0 === data ? void 0 : data.chapters) for (var index = 0; index < (null === data || void 0 === data ? void 0 : data.chapters.length); index++) {
          var lesConfig = null === data || void 0 === data ? void 0 : data.chapters[index];
          lesConfig.lessonId = this.lessonId;
          var lesVo = new LessonVo(lesConfig);
          this.chapters.push(lesVo);
        }
        this.report = null === data || void 0 === data ? void 0 : data.report;
        this.rewardInfo = null === data || void 0 === data ? void 0 : data.rewardInfo;
      };
      Object.defineProperty(LessonListVo.prototype, "complete", {
        get: function() {
          return this.chapters.every(function(val) {
            return val.complete;
          });
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LessonListVo.prototype, "chapterAllViewed", {
        get: function() {
          return this.chapters.every(function(val) {
            return val.chapterState >= enum_1.CHAPTER_STATE.viewed;
          });
        },
        enumerable: false,
        configurable: true
      });
      LessonListVo.prototype.setLessonReportCompleteState = function(comp) {
        this.report.isComplete = comp;
      };
      LessonListVo.prototype.setLessonChapterCompleteState = function(chapters) {
        var _this = this;
        if (!chapters) return;
        chapters.forEach(function(element) {
          _this.setChapterCompStateByChapterId(element.chapterId, element.complete);
          _this.setChapterState(element.chapterId, element.chapterState);
        });
      };
      LessonListVo.prototype.setChapterCompStateByChapterId = function(chapterId, comp) {
        var chapterData = this.chapters.find(function(ele) {
          return ele.chapterId == chapterId;
        });
        if (!chapterData) return;
        comp && (chapterData.complete = comp);
        comp && (chapterData.chapterState = enum_1.CHAPTER_STATE.learned);
      };
      LessonListVo.prototype.setChapterFirstCompByChapterId = function(chapterId, comp) {
        var chapterData = this.chapters.find(function(ele) {
          return ele.chapterId == chapterId;
        });
        if (!chapterData) return;
        !chapterData.complete && comp ? chapterData.isFirstComplete = true : chapterData.isFirstComplete = false;
      };
      LessonListVo.prototype.setChapterState = function(chapterId, state) {
        var chapterData = this.chapters.find(function(ele) {
          return ele.chapterId == chapterId;
        });
        if (chapterData) {
          chapterData.chapterState < state && (chapterData.chapterState = state);
          chapterData.chapterState == enum_1.CHAPTER_STATE.learned && (chapterData.complete = true);
        }
      };
      return LessonListVo;
    }();
    exports.LessonListVo = LessonListVo;
    cc._RF.pop();
  }, {
    "../config/enum": "enum"
  } ],
  "loader-index": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92035WBrztOKZjOXhKIeiH/", "loader-index");
    "use strict";
    var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      void 0 === k2 && (k2 = k);
      o[k2] = m[k];
    });
    var __exportStar = this && this.__exportStar || function(m, exports) {
      for (var p in m) "default" === p || Object.prototype.hasOwnProperty.call(exports, p) || __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __exportStar(require("./DefaultLoader"), exports);
    __exportStar(require("./ImageLoader"), exports);
    __exportStar(require("./JsonLoader"), exports);
    __exportStar(require("./AudioLoader"), exports);
    __exportStar(require("./AtlasLoader"), exports);
    __exportStar(require("./TextLoader"), exports);
    __exportStar(require("./PrefabLoader"), exports);
    __exportStar(require("./SpineLoader"), exports);
    cc._RF.pop();
  }, {
    "./AtlasLoader": "AtlasLoader",
    "./AudioLoader": "AudioLoader",
    "./DefaultLoader": "DefaultLoader",
    "./ImageLoader": "ImageLoader",
    "./JsonLoader": "JsonLoader",
    "./PrefabLoader": "PrefabLoader",
    "./SpineLoader": "SpineLoader",
    "./TextLoader": "TextLoader"
  } ],
  loadingState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a86e/YowJLHKoq8tGqwRW0", "loadingState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var assetsManager_1 = require("../manager/assetsManager");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var lessonManager_1 = require("../manager/lessonManager");
    var lessonState_1 = require("./lessonState");
    var kit_1 = require("../../kit/kit");
    var LoadingState = function() {
      function LoadingState() {
        this.lessonLoaded = false;
        this.loadingEnded = false;
        this.lock = false;
        this.lesson = null;
      }
      LoadingState.prototype.onMessage = function(entity, telegram) {
        return true;
      };
      LoadingState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.lesson = data;
          kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_READY, _this.onLifeCycleReady, _this);
          kit_1.kit.manager.Event.on(event_1.LOADING_LESSON_ENDED, _this.onLoadingLessonEnded, _this);
          _this.openLesson(_this.lesson);
          var loadingNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING_LESSON);
          loadingNode.zIndex = cc.macro.MAX_ZINDEX;
          _this.entity.uiNode.addChild(loadingNode);
          res();
        });
      };
      LoadingState.prototype.onLoadingLessonEnded = function() {
        cc.log("LOADING_LESSON_ENDED...");
        this.loadingEnded = true;
        this.judgeState();
      };
      LoadingState.prototype.onLifeCycleReady = function() {};
      LoadingState.prototype.loadOldProject = function(chapterId) {
        var _this = this;
        var list = [];
        cc.log("\u52a0\u8f7d\u8bfe\u7a0bid\uff1a" + chapterId);
        var config = config_1.CHAPTER_CONFIG_LIST.find(function(element) {
          if (chapterId === element.id) {
            element.assets.forEach(function(url) {
              list.push("" + _this.entity.host + element.url + "/" + url);
            });
            return true;
          }
        });
        var loadingNode = assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING_LESSON);
        loadingNode.zIndex = cc.macro.MAX_ZINDEX;
        this.entity.uiNode.addChild(loadingNode);
        kit_1.kit.util.Bundle.loadBundles(list).then(function(res) {
          _this.lessonBundle = res;
          var bundle = res.find(function(element) {
            return element.name === config.main;
          });
          bundle.load("" + config.main, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              return;
            }
          });
        }).catch(function(error) {
          cc.error(error);
        });
      };
      LoadingState.prototype.loadLocalProject = function(chapterId) {
        var _this = this;
        var list = [];
        cc.log("\u52a0\u8f7d\u8bfe\u7a0bid\uff1a" + chapterId);
        var config = config_1.CHAPTER_CONFIG_LIST.find(function(element) {
          if (chapterId === element.id) {
            element.assets.forEach(function(url) {
              list.push(url);
            });
            return true;
          }
        });
        kit_1.kit.util.Bundle.loadBundles(list).then(function(res) {
          _this.lessonBundle = res;
          var bundle = res.find(function(element) {
            return element.name === config.main;
          });
          var mainPrefab = _this.lesson.type === config_1.LESSON_TYPE_PICTURE_BOOK ? "PicktureBookNode1" : config.main;
          bundle.load("" + mainPrefab, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              return;
            }
            _this.lessonLoaded = true;
            _this.judgeState();
          });
        }).catch(function(error) {
          cc.error(error);
        });
      };
      LoadingState.prototype.judgeState = function() {
        if (this.loadingEnded && this.lessonLoaded && !this.lock) {
          this.lock = true;
          this.entity.uiNode.removeChild(assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING_LESSON));
          this.entity.stateMachine.ChangeState(lessonState_1.default, {
            bundles: this.lessonBundle,
            lesson: this.lesson
          });
        }
      };
      LoadingState.prototype.openLesson = function(lessonData) {
        lessonManager_1.default.instance.chapterBegin(lessonData);
        switch (lessonData.type) {
         case config_1.LESSON_TYPE_VIDEO:
         case config_1.LESSON_TYPE_PICTURE_BOOK:
         case config_1.LESSON_TYPE_GAME:
          this.loadLocalProject(lessonData.chapterId);
        }
      };
      LoadingState.prototype.execute = function(data) {};
      LoadingState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_READY, this.onLifeCycleReady, this);
        this.entity.uiNode.removeChild(assetsManager_1.default.instance.getGlobalNode(config_1.BUNDLE_LOADING_LESSON));
      };
      return LoadingState;
    }();
    exports.default = LoadingState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "../manager/assetsManager": "assetsManager",
    "../manager/lessonManager": "lessonManager",
    "./lessonState": "lessonState"
  } ],
  pictureBookListState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "933b1NPzLNPc6B0srgAOqiJ", "pictureBookListState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var extracurricularBooKState_1 = require("./extracurricularBooKState");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var hallState_1 = require("./hallState");
    var kit_1 = require("../../kit/kit");
    var PictureBookListState = function() {
      function PictureBookListState() {}
      PictureBookListState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      PictureBookListState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, _this.showHall, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_PICTURE_BOOK, _this.onLessonItemClick, _this);
          kit_1.kit.util.LocalStorage.setBool(config_1.HAS_CLICK_PICKBOOK, true);
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_PICTURE_BOOK_LIST, "prefab/" + config_1.BUNDLE_PICTURE_BOOK_LIST, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(error, prefab) {
            if (error) {
              rej(error);
              return;
            }
            _this.bookListNode = cc.instantiate(prefab);
            _this.entity.contentNode.addChild(_this.bookListNode);
            res();
          });
        });
      };
      PictureBookListState.prototype.execute = function(data) {
        throw new Error("Method not implemented.");
      };
      PictureBookListState.prototype.showHall = function() {
        this.entity.changeState(hallState_1.default);
      };
      PictureBookListState.prototype.onLessonItemClick = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(extracurricularBooKState_1.default, data);
      };
      PictureBookListState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.showHall, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_PICTURE_BOOK, this.onLessonItemClick, this);
        this.entity.contentNode.removeChild(this.bookListNode);
        this.bookListNode.destroy();
        kit_1.kit.manager.resources.releaseAsset(config_1.BUNDLE_PICTURE_BOOK_LIST);
      };
      return PictureBookListState;
    }();
    exports.default = PictureBookListState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "./extracurricularBooKState": "extracurricularBooKState",
    "./hallState": "hallState"
  } ],
  reportState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a00e8FLRRVBoZ+68F1oaPzj", "reportState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../kit/kit");
    var config_1 = require("../config/config");
    var event_1 = require("../config/event");
    var lessonManager_1 = require("../manager/lessonManager");
    var extracurricularBooKState_1 = require("./extracurricularBooKState");
    var extracurricularGameState_1 = require("./extracurricularGameState");
    var gameListState_1 = require("./gameListState");
    var hallState_1 = require("./hallState");
    var loadingState_1 = require("./loadingState");
    var pictureBookListState_1 = require("./pictureBookListState");
    var ReportState = function() {
      function ReportState() {}
      ReportState.prototype.onMessage = function(entity, telegram) {
        throw new Error("Method not implemented.");
      };
      ReportState.prototype.enter = function(data) {
        var _this = this;
        return new Promise(function(res, rej) {
          kit_1.kit.manager.Event.on(event_1.STATE_TO_HALL, _this.toHall, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_LESSON, _this.onLessonItemClick, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_GAME_LIST, _this.onGameListClick, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_BOOK_LIST, _this.onBookListClick, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_GAME, _this.toGameList, _this);
          kit_1.kit.manager.Event.on(event_1.STATE_TO_PICTURE_BOOK, _this.toBookList, _this);
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_REPORT, "prefab/" + config_1.BUNDLE_REPORT, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(error, result) {
            if (error) {
              rej(error);
              return;
            }
            lessonManager_1.default.instance.reportEnter(data);
            _this.reportNode = cc.instantiate(result);
            _this.entity.contentNode.addChild(_this.reportNode);
            res();
          });
        });
      };
      ReportState.prototype.execute = function(data) {};
      ReportState.prototype.exit = function(data) {
        kit_1.kit.manager.Event.off(event_1.STATE_TO_HALL, this.toHall, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_LESSON, this.onLessonItemClick, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_GAME_LIST, this.onGameListClick, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_BOOK_LIST, this.onBookListClick, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_GAME, this.toGameList, this);
        kit_1.kit.manager.Event.off(event_1.STATE_TO_PICTURE_BOOK, this.toBookList, this);
        this.entity.contentNode.removeChild(this.reportNode);
        this.reportNode.destroy();
        this.encourageNode && this.encourageNode.destroy();
        kit_1.kit.manager.Event.emit(event_1.HIDE_COMMON_HAND_GUILD);
        kit_1.kit.manager.resources.releaseAsset(config_1.BUNDLE_REPORT);
      };
      ReportState.prototype.toHall = function(event) {
        this.entity.changeState(hallState_1.default);
      };
      ReportState.prototype.onLessonItemClick = function(event) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(loadingState_1.default, event.data);
      };
      ReportState.prototype.onGameListClick = function(event) {
        this.entity.changeState(gameListState_1.default);
      };
      ReportState.prototype.onBookListClick = function(event) {
        this.entity.changeState(pictureBookListState_1.default);
      };
      ReportState.prototype.toGameList = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        this.entity.changeState(extracurricularGameState_1.default, data);
      };
      ReportState.prototype.toBookList = function(data) {
        kit_1.kit.manager.Event.emit(event_1.STOP_BACKGROUND_MUSIC);
        cc.log("\u8df3\u8f6c\u7ed8\u672c", data);
        this.entity.changeState(extracurricularBooKState_1.default, data);
      };
      return ReportState;
    }();
    exports.default = ReportState;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "../config/config": "config",
    "../config/event": "event",
    "../manager/lessonManager": "lessonManager",
    "./extracurricularBooKState": "extracurricularBooKState",
    "./extracurricularGameState": "extracurricularGameState",
    "./gameListState": "gameListState",
    "./hallState": "hallState",
    "./loadingState": "loadingState",
    "./pictureBookListState": "pictureBookListState"
  } ],
  userDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a43fdtm8VFFBZw5oDPuipBe", "userDataManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UserDataManager = void 0;
    var kit_1 = require("../../kit/kit");
    var enum_1 = require("./../config/enum");
    var lessonManager_1 = require("./lessonManager");
    var USER_GUILD_STEP = "USER_GUILD_STEP";
    var UserDataManager = function() {
      function UserDataManager() {
        this._picAndGameLockState = enum_1.PicAndGameLockState.lock;
        this._guideStep = 0;
        this._backState = 0;
        this._guideStep = kit_1.kit.util.LocalStorage.getInt(USER_GUILD_STEP) || 0;
      }
      Object.defineProperty(UserDataManager.prototype, "guideStep", {
        get: function() {
          return this._guideStep;
        },
        set: function(value) {
          this._guideStep = value;
          kit_1.kit.util.LocalStorage.setInt(USER_GUILD_STEP, value);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UserDataManager.prototype, "backState", {
        get: function() {
          return this._backState;
        },
        set: function(value) {
          this._backState = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UserDataManager, "instance", {
        get: function() {
          UserDataManager._instance || (UserDataManager._instance = new UserDataManager());
          return UserDataManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      UserDataManager.prototype.getPicAndGameLockState = function() {
        var allCom = lessonManager_1.default.instance.allLessonComplete;
        this._picAndGameLockState = allCom ? enum_1.PicAndGameLockState.unlock : this.getLessonFinished() ? enum_1.PicAndGameLockState.unlock : enum_1.PicAndGameLockState.lock;
        return enum_1.PicAndGameLockState.unlock;
      };
      UserDataManager.prototype.setLessonFinished = function() {
        var date = new Date();
        var str = kit_1.kit.util.Time.dateToFormate(date, "yyyy-MM-dd");
        kit_1.kit.util.LocalStorage.setBool(str, true);
      };
      UserDataManager.prototype.getLessonFinished = function() {
        var date = new Date();
        var str = kit_1.kit.util.Time.dateToFormate(date, "yyyy-MM-dd");
        return !!kit_1.kit.util.LocalStorage.getBool(str);
      };
      return UserDataManager;
    }();
    exports.UserDataManager = UserDataManager;
    cc._RF.pop();
  }, {
    "../../kit/kit": "kit",
    "./../config/enum": "enum",
    "./lessonManager": "lessonManager"
  } ]
}, {}, [ "app", "config", "enum", "event", "FixBg", "FixScreen", "EncourageWallDataManager", "GameDataManager", "PicBookDataManager", "assetsManager", "lessonManager", "userDataManager", "encourageListState", "extracurricularBooKState", "extracurricularGameState", "firstPageState", "gameListState", "BackGroundMusicState", "FollowReadState", "LoadingTurnState", "NoviceGuideState", "hallState", "initState", "lessonState", "loadingState", "pictureBookListState", "reportState", "interfaceVo", "lessonVo", "ClickCmpt", "events", "LoaderObserver", "ResLoader", "AtlasLoader", "AudioLoader", "BaseLoader", "DefaultLoader", "ImageLoader", "JsonLoader", "PrefabLoader", "SpineLoader", "TextLoader", "loader-index", "AndroidAdapter", "DebuggerAdapter", "INativeServer", "IPlatform", "IosAdapter", "PlatformSystem", "WXBrowserAdapter", "WXLittleGameAdapter", "WebAdapter", "kit", "ResourcesManager", "ConfirmPopup", "PopupBase", "PopupManager", "ClientModuleEnum", "ClientModuleInterface", "LinkedNode", "AudioManager", "ErrorSystem", "EventEmitter", "EventSystem", "StateMachine", "EntityManager", "IEntity", "MessageDispatcher", "MessageType", "Telegram", "IState", "ASystem", "LogSystem", "PointSystem", "Http", "HttpState", "HttpSystem", "IHttpSystem", "TimerSystem", "BaseUI", "IOpenComponent", "UIDataInfo", "UIKitUIDataInfoList", "UIManager", "DelayUtils", "LocalStorageUtils", "MonitorUtils", "NumberUtils", "ParseTemplateUtils", "PoolUtils", "StringUtils", "TimeUtils", "UIUtils", "UrlUtils", "audioUtil", "bundleUtil", "bundleUtils" ]);