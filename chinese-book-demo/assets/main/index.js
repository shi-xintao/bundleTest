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
    cc._RF.push(module, "d5873YdKHxPY4ulEy/XCh9R", "ASystem");
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
    cc._RF.push(module, "32739imPsBKf612ucPehKm3", "AndroidAdapter");
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
      AndroidAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath += moduleName);
        var result = jsb.reflection.callStaticMethod(packagePath, funcName, "(Ljava/lang/String;)Ljava/lang/String;", parm);
        return result;
      };
      return AndroidAdapter;
    }();
    exports.default = AndroidAdapter;
    cc._RF.pop();
  }, {} ],
  AtlasLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89e833Eox5JkZNuMVCevggz", "AtlasLoader");
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
    cc._RF.push(module, "5f9baTvywpJKq6vi6bSGc4g", "AudioLoader");
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
    cc._RF.push(module, "579beOGJ61BqoM9Nb+r4Lh5", "AudioManager");
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
      AudioManager.playEffectByName = function(bundleName, name, isSingle, isLoop) {
        void 0 === isSingle && (isSingle = true);
        void 0 === isLoop && (isLoop = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!bundleName || "" === bundleName) return [ 2 ];
              if (!AudioManager._effectFlag) return [ 3, 2 ];
              return [ 4, audioUtil_1.default.playEffectByName(bundleName, name, isSingle, isLoop) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      AudioManager.stopEffect = function() {
        audioUtil_1.default.stopEffect();
      };
      AudioManager.stopEffectByName = function(name) {
        audioUtil_1.default.stopEffectByName(name);
      };
      AudioManager.destroyAudio = function(bundleName, name) {
        audioUtil_1.default.destroyAudio(bundleName, name);
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
  BaseLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df313sEGMFJSpN9rdwIyyuz", "BaseLoader");
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
  ClickCmpt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48aab7v76tEa7IxLPKAERLI", "ClickCmpt");
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
    cc._RF.push(module, "0775d4Hdu5PAYEgihvrmBUu", "ClientModuleEnum");
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
    cc._RF.push(module, "75c83yM6phE1bKBFimHfWDn", "ClientModuleInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ConfirmPopup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6c2c84eInlMNKToDpjoJqF3", "ConfirmPopup");
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
    cc._RF.push(module, "a9a91rCqJJKhIzeV0XwdwRD", "DebuggerAdapter");
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
      DebuggerAdapter.prototype.callFunction = function(funcName) {};
      DebuggerAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        throw new Error("Method not implemented.");
      };
      return DebuggerAdapter;
    }();
    exports.default = DebuggerAdapter;
    cc._RF.pop();
  }, {} ],
  DefaultLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26ac6LIK/RGP6x298F7GFkd", "DefaultLoader");
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
    cc._RF.push(module, "f53c7aiBvhKUaL/08loZNy2", "DelayUtils");
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
  EntityManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6379ez49ShAT6YXIWFINSyN", "EntityManager");
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
    cc._RF.push(module, "fa38dM2OVNAfJ8UP50zSnGd", "ErrorSystem");
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
    cc._RF.push(module, "6d3d1HNuiNOM7ZdchLMa8Ms", "EventEmitter");
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
    cc._RF.push(module, "20004UDVphM9p3CKJ32NUxi", "EventSystem");
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
  HttpState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d801fc0h7ZDfYNDlJ6kJmHO", "HttpState");
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
    cc._RF.push(module, "54e1dremsxJga7O4JAGGxiu", "HttpSystem");
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
    cc._RF.push(module, "5613bFNASxALYfLCcho1Cyx", "Http");
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
    cc._RF.push(module, "17c0aUwF1dPMKfFAEk809Q5", "IEntity");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IHttpSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "542d2HVgXFK3pLvnLae0Q2g", "IHttpSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  INativeServer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f0b8ejz/eVKPJHvjC9MWgg5", "INativeServer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IPlatform: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d16b38d1nJOr7A52iI54Pdm", "IPlatform");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  IState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0dc5du7McBA7bNK4NeNVN3v", "IState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ImageLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91b65EuBphJmIMhC7CDNybS", "ImageLoader");
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
    cc._RF.push(module, "9fe23PmshZKKbhoZPFue29J", "IosAdapter");
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
      IosAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        var packagePath = this.packageName;
        moduleName && "" != moduleName && (packagePath = moduleName);
        var result = jsb.reflection.callStaticMethod(packagePath, funcName + ":", parm);
        return result;
      };
      return IosAdapter;
    }();
    exports.default = IosAdapter;
    cc._RF.pop();
  }, {} ],
  JsonLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4a075ocK1Hr78CcQ/1PQo/", "JsonLoader");
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
    cc._RF.push(module, "a462ewuJwFJVYRXDXjB3T9b", "LinkedNode");
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
    cc._RF.push(module, "fbc23mqRsJHSpI9T49CIFne", "LoaderObserver");
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
  LocalStorageUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "677630XJQJO54seYg9ie2GQ", "LocalStorageUtils");
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
    cc._RF.push(module, "1b7f8RxVXZIg7qC2OUXAcLI", "LogSystem");
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
  MessageBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6763b6cDn1Hc45Oh0hGQ6Nd", "MessageBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MessageBase = void 0;
    var MessageBase = function() {
      function MessageBase() {
        this.showTips = true;
      }
      return MessageBase;
    }();
    exports.MessageBase = MessageBase;
    cc._RF.pop();
  }, {} ],
  MessageDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ab7cjSYgBC+IdYo5QAOix3", "MessageDispatcher");
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
    cc._RF.push(module, "183d3ftWc9C5p3xCTC8ZBqb", "MessageType");
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
  ModelBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86fd8KNlyJPOaObgix3wxOL", "ModelBase");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetHelper_1 = require("./NetHelper");
    var ccclass = cc._decorator.ccclass;
    var ModelBase = function() {
      function ModelBase() {
        this.cbMap = new Map();
      }
      ModelBase.prototype.init = function() {};
      ModelBase.prototype.sendMessage = function(message) {
        this.regiestReponse(message);
        NetHelper_1.default.sendMessage(message);
      };
      ModelBase.prototype.sendMessageWithOutToken = function(message) {
        this.regiestReponse(message);
        NetHelper_1.default.sendMessageWithOutToken(message);
      };
      ModelBase.prototype.registerCallBack = function(messageBase, callBack) {
        this.cbMap.set(messageBase.messageApi, callBack);
      };
      ModelBase.prototype.regiestReponse = function(message) {
        NetHelper_1.default.registCb(message.messageApi, this.responseMessage.bind(this));
      };
      ModelBase.prototype.responseMessage = function(api, msg) {
        var cb = this.cbMap.get(api);
        cb && cb(msg);
      };
      ModelBase.prototype.clear = function() {
        this.cbMap = new Map();
      };
      ModelBase = __decorate([ ccclass ], ModelBase);
      return ModelBase;
    }();
    exports.default = ModelBase;
    cc._RF.pop();
  }, {
    "./NetHelper": "NetHelper"
  } ],
  ModelManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c061DHrupHNLAl3qP9jUYA", "ModelManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalStorageUtils_1 = require("../utils/LocalStorageUtils");
    var NativeInfo_1 = require("./NativeInfo");
    var NetHelper_1 = require("./NetHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ModelManager = function() {
      function ModelManager() {
        this._modelList = new Map();
      }
      ModelManager_1 = ModelManager;
      Object.defineProperty(ModelManager, "instance", {
        get: function() {
          ModelManager_1._instance || (ModelManager_1._instance = new ModelManager_1());
          return ModelManager_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "UserToken", {
        get: function() {
          return this.userToken;
        },
        set: function(value) {
          this.userToken = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "phoneInfo", {
        get: function() {
          return this.generateInfo;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ModelManager.prototype, "timestamp", {
        get: function() {
          return this._timestamp;
        },
        enumerable: false,
        configurable: true
      });
      ModelManager.prototype.init = function() {
        NetHelper_1.default.init();
        this.generateInfo = NativeInfo_1.default.generateInfo();
        this._timestamp = NativeInfo_1.default.currentTimeStamp();
        this.userToken = LocalStorageUtils_1.LocalStorageUtils.getObject("USER_TOKEN") || "";
      };
      ModelManager.prototype.registerModel = function(model) {
        var key = model;
        if (this._modelList.get(key)) ; else {
          var m = new model();
          m.init();
          this._modelList.set(key, m);
        }
      };
      ModelManager.prototype.getModel = function(model) {
        var key = model;
        this._modelList.has(key) || this.registerModel(model);
        return this._modelList.get(key);
      };
      ModelManager.prototype.removeAllModel = function() {
        for (var key in this._modelList) {
          var model = this._modelList[key];
          model.clear();
          this._modelList.delete(key);
        }
        this._modelList.clear();
      };
      ModelManager.prototype.clearAllModel = function() {
        var keyList = Array.from(this._modelList.keys());
        for (var _i = 0, keyList_1 = keyList; _i < keyList_1.length; _i++) {
          var key = keyList_1[_i];
          var model = this._modelList.get(key);
          model && model.clear();
        }
      };
      ModelManager.prototype.reInitAllModel = function() {
        var keyList = Array.from(this._modelList.keys());
        for (var _i = 0, keyList_2 = keyList; _i < keyList_2.length; _i++) {
          var key = keyList_2[_i];
          var model = this._modelList.get(key);
          model && model.init();
        }
      };
      var ModelManager_1;
      ModelManager._instance = null;
      ModelManager = ModelManager_1 = __decorate([ ccclass ], ModelManager);
      return ModelManager;
    }();
    exports.default = ModelManager;
    cc._RF.pop();
  }, {
    "../utils/LocalStorageUtils": "LocalStorageUtils",
    "./NativeInfo": "NativeInfo",
    "./NetHelper": "NetHelper"
  } ],
  MonitorUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4179vwGadMz4hSbaVv/FcO", "MonitorUtils");
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
  NativeInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba3eas3aBFLkIxp3J2KTHC0", "NativeInfo");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetworkType = exports.GenerateInfo = void 0;
    var PlatformSystem_1 = require("../framework/platform/PlatformSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NativeInfo = function() {
      function NativeInfo() {}
      NativeInfo_1 = NativeInfo;
      NativeInfo.generateInfo = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return {
          device_uuid: "lingoChineseAi"
        };
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("generateCommNode", "", NativeInfo_1.moduleName);
        return result;
      };
      NativeInfo.currentTimeStamp = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return new Date().getTime();
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("currentTimeStamp", "", NativeInfo_1.moduleName);
        return result;
      };
      NativeInfo.getNetworkStatus = function() {
        if (PlatformSystem_1.default.instance.isBrowser) return NetworkType.NETWORK_WIFI;
        var adapter = PlatformSystem_1.default.instance.adapter;
        var result = adapter.callFunctionResult("getNetworkStatus", "", NativeInfo_1.moduleName);
        return result;
      };
      var NativeInfo_1;
      NativeInfo.moduleName = PlatformSystem_1.default.instance.isAndroid ? "NativeInterface" : "CocosHelper";
      NativeInfo = NativeInfo_1 = __decorate([ ccclass ], NativeInfo);
      return NativeInfo;
    }();
    exports.default = NativeInfo;
    var GenerateInfo = function() {
      function GenerateInfo() {}
      return GenerateInfo;
    }();
    exports.GenerateInfo = GenerateInfo;
    var NetworkType;
    (function(NetworkType) {
      NetworkType["NETWORK_WIFI"] = "NETWORK_WIFI";
      NetworkType["NETWORK_5G"] = "NETWORK_5G";
      NetworkType["NETWORK_4G"] = "NETWORK_4G";
      NetworkType["NETWORK_3G"] = "NETWORK_3G";
      NetworkType["NETWORK_2G"] = "NETWORK_2G";
      NetworkType["NETWORK_UNKNOWN"] = "NETWORK_UNKNOWN";
      NetworkType["NETWORK_NO"] = "NETWORK_NO";
    })(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
    cc._RF.pop();
  }, {
    "../framework/platform/PlatformSystem": "PlatformSystem"
  } ],
  NetHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be0d1zC4X9KQ546Agcoj+AU", "NetHelper");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Test_HostUrl = void 0;
    var events_1 = require("../events/events");
    var EventSystem_1 = require("../system/event/EventSystem");
    var HttpSystem_1 = require("../system/net/http/HttpSystem");
    var ModelManager_1 = require("./ModelManager");
    var NativeInfo_1 = require("./NativeInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NetHelper = function() {
      function NetHelper() {}
      NetHelper_1 = NetHelper;
      NetHelper.init = function() {
        HttpSystem_1.default.instance.init(this.onError);
      };
      NetHelper.registCb = function(message, callBack) {
        NetHelper_1.cbMap.set(message, callBack);
      };
      NetHelper.sendMessage = function(message) {
        NetHelper_1.currentMessage = message;
        var url = this.formatUrl(message.messageApi);
        var header = {
          timestamp: ModelManager_1.default.instance.timestamp,
          phoneInfo: ModelManager_1.default.instance.phoneInfo,
          Authorization: "Bearer " + ModelManager_1.default.instance.UserToken
        };
        HttpSystem_1.default.instance.httpPost(url, message.param, null, JSON.stringify(header)).then(function(msg) {
          cc.log("\u8bf7\u6c42\u8fd4\u56de", msg);
          msg && 200 == msg.code || NetHelper_1.onError("\u8bf7\u6c42\u9519\u8bef", msg, msg);
          NetHelper_1.dispatcher(message.messageApi, msg);
        });
      };
      NetHelper.sendMessageWithOutToken = function(message) {
        var url = this.formatUrl(message.messageApi);
        var header = {
          timestamp: ModelManager_1.default.instance.timestamp,
          phoneInfo: ModelManager_1.default.instance.phoneInfo
        };
        NetHelper_1.currentMessage = message;
        NetHelper_1.currentMessage["noHeader"] = true;
        HttpSystem_1.default.instance.httpPost(url, message.param, null, JSON.stringify(header)).then(function(msg) {
          msg && 200 == msg.code || NetHelper_1.onError("\u8bf7\u6c42\u9519\u8bef", msg, msg);
          NetHelper_1.dispatcher(message.messageApi, msg);
        });
      };
      NetHelper.dispatcher = function(api, msg) {
        var cb = NetHelper_1.cbMap.get(api);
        if (cb) {
          cb(api, msg);
          NetHelper_1.cbMap.delete(api);
        }
      };
      NetHelper.onError = function(states, message, response) {
        console.log("nethelper onError  -------");
        if (!response) return;
        cc.log(response);
        var netWork = NativeInfo_1.default.getNetworkStatus();
        if (netWork == NativeInfo_1.NetworkType.NETWORK_NO) {
          var params = {
            tipsConfig: "NO_NETWORK",
            confirmCallback: function() {
              if (NetHelper_1.currentMessage["noHeader"]) {
                NetHelper_1.sendMessageWithOutToken(NetHelper_1.currentMessage);
                return;
              }
              NetHelper_1.sendMessage(NetHelper_1.currentMessage);
            },
            cancelCallback: function() {
              EventSystem_1.default.emit("back");
            }
          };
          EventSystem_1.default.emit(events_1.default.SHOW_COMMON_TIPS_POP, params);
          return;
        }
        if (response && 10009 == response.code) return;
        if (NetHelper_1.currentMessage.showTips) {
          var params = {
            tipsConfig: "NO_NETWORK",
            confirmCallback: function() {
              if (NetHelper_1.currentMessage["noHeader"]) {
                NetHelper_1.sendMessageWithOutToken(NetHelper_1.currentMessage);
                return;
              }
            },
            cancelCallback: function() {
              EventSystem_1.default.emit("back");
            }
          };
          EventSystem_1.default.emit(events_1.default.SHOW_COMMON_TIPS_POP, params);
        }
        cc.warn("\u7f51\u7edc\u8bf7\u6c42\u9519\u8bef", message, response);
      };
      NetHelper.formatUrl = function(api) {
        return "" + exports.Test_HostUrl + api;
      };
      var NetHelper_1;
      NetHelper.cbMap = new Map();
      NetHelper = NetHelper_1 = __decorate([ ccclass ], NetHelper);
      return NetHelper;
    }();
    exports.default = NetHelper;
    exports.Test_HostUrl = "https://test235-cnapi.lingo-ace.com";
    cc._RF.pop();
  }, {
    "../events/events": "events",
    "../system/event/EventSystem": "EventSystem",
    "../system/net/http/HttpSystem": "HttpSystem",
    "./ModelManager": "ModelManager",
    "./NativeInfo": "NativeInfo"
  } ],
  NumberUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c270wdiepEpYqM8vOwQvnt", "NumberUtils");
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
    cc._RF.push(module, "af645nBnb1At4IHpLxNBC+N", "ParseTemplateUtils");
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
  PlatformSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da008tICfZLn5P1AgFjCZ93", "PlatformSystem");
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
            this.isWeChat || (this.isBrowser ? window.location.href.indexOf("localhost:") > -1 ? this.adapter = new DebuggerAdapter_1.default() : this.adapter = new WebAdapter_1.default() : this.isNative && (this.isAndroid ? this.adapter = new AndroidAdapter_1.default() : this.isIOS && (this.adapter = new IosAdapter_1.default())));
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
    "./WebAdapter": "WebAdapter"
  } ],
  PoolUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dfdeV5X/ZJkrVfXi8cq8Oy", "PoolUtils");
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
    cc._RF.push(module, "797d8G8TSlKvKzKmfv66eZK", "PopupBase");
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
    cc._RF.push(module, "9e542UZmERMCIx7EolEmfkc", "PopupManager");
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
      PopupManager.cacheMode = PopupCacheMode;
      PopupManager.showResult = PopupShowResult;
      PopupManager.Base = PopupBase_1.default;
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
    cc._RF.push(module, "23230/8irZP6plTLo6FGdrL", "PrefabLoader");
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
    cc._RF.push(module, "397eb7dwEVIJ4xr+S1/GX1X", "ResLoader");
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
    cc._RF.push(module, "149cdE7Xf5Dgam8GRYPI4xV", "ResourcesManager");
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
          cc.assetManager.releaseAsset(res);
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
          return function() {
            finishCb && finishCb(e, null);
          };
        });
      };
      ResourcesManager.prototype.loadBundleList = function(nameList) {
        var list = [];
        for (var key in nameList) list.push(this.loadBundle(nameList[key]));
        return Promise.all(list).catch(function(e) {
          return cc.log(e);
        });
      };
      ResourcesManager.prototype.loadBundle = function(bundleName) {
        var _this = this;
        return new Promise(function(res, rej) {
          return __awaiter(_this, void 0, void 0, function() {
            var bundle, assetClip;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (this.assetsMap.has(bundleName)) {
                  bundle = this.assetsMap.get(bundleName).bundle;
                  res(bundle);
                  return [ 2 ];
                }
                assetClip = new Asset(ResourceType.Normal);
                this.assetsMap.set(bundleName, assetClip);
                return [ 4, assetClip.loadBundle(bundleName) ];

               case 1:
                _a.sent();
                res(assetClip.bundle);
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          cc.log(e);
        });
      };
      ResourcesManager.prototype.releaseAsset = function(bundleName, releaseComponents) {
        var _this = this;
        cc.log("\u91ca\u653e\u8d44\u6e90", bundleName);
        if (bundleName && "string" == typeof bundleName && "" != bundleName) {
          var element = this.assetsMap.get(bundleName);
          var releaseKey = element.release(releaseComponents);
          "" != releaseKey && this.assetsMap.delete(releaseKey);
          return;
        }
        if (bundleName && "object" == typeof bundleName) {
          bundleName.forEach(function(item) {
            var element = _this.assetsMap.get(item);
            var releaseKey = element.release(releaseComponents);
            "" != releaseKey && _this.assetsMap.delete(releaseKey);
          });
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
    cc._RF.push(module, "00dac77qUFIkqcxanTWr/0n", "SpineLoader");
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
  SpotSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "834e285FhNK4LaJBN1Ppgqz", "SpotSystem");
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
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlatformSystem_1 = require("../../framework/platform/PlatformSystem");
    var StringUtils_1 = require("../../utils/StringUtils");
    var ASystem_1 = require("../interface/ASystem");
    var HttpSystem_1 = require("../net/http/HttpSystem");
    var SpotSystem = function(_super) {
      __extends(SpotSystem, _super);
      function SpotSystem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(SpotSystem, "instance", {
        get: function() {
          null == SpotSystem._instance && (SpotSystem._instance = new SpotSystem());
          return SpotSystem._instance;
        },
        enumerable: false,
        configurable: true
      });
      SpotSystem.prototype.init = function(baseInfo) {
        var _this = this;
        return new Promise(function(res, rej) {
          _this.baseInfo = baseInfo;
          res();
        });
      };
      SpotSystem.prototype.send = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        this.sendHttp.apply(this, __spreadArrays([ name ], args));
      };
      SpotSystem.prototype.sendSdk = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var str = name;
        args && (str = StringUtils_1.StringUtils.format.apply(StringUtils_1.StringUtils, __spreadArrays([ name ], args)));
        cc.log("spot: " + str);
        PlatformSystem_1.default.instance.adapter.callFunction(SpotSystem.LOG_EVENT, str, SpotSystem.packagePath);
      };
      SpotSystem.prototype.sendHttp = function(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        var str = name;
        args && (str = StringUtils_1.StringUtils.format.apply(StringUtils_1.StringUtils, __spreadArrays([ name ], args)));
        var obj = {
          api_key: SpotSystem.APP_KEY,
          events: [ __assign({
            event_type: str,
            time: Date.now()
          }, this.baseInfo) ]
        };
        cc.log("spot: " + JSON.stringify(obj));
        HttpSystem_1.default.instance.httpPost(SpotSystem.HTTP_HOST, obj);
      };
      SpotSystem.prototype.release = function() {};
      SpotSystem.LOG_EVENT = "la_logEvent";
      SpotSystem.LOG_INIT = "la_logInitWithApiKey";
      SpotSystem.LOG_SET_USER_ID = "la_logUserId";
      SpotSystem.APP_KEY = "3437b23f038afa01e3c220886da2deda";
      SpotSystem.HTTP_HOST = "https://api2.amplitude.com/batch";
      SpotSystem.NAME_SPACE_IOS = "LaLogUtli";
      SpotSystem.NAME_SPACE_ANDROID = "amplitude/LaLogUtli";
      SpotSystem.packagePath = PlatformSystem_1.default.instance.isAndroid ? SpotSystem.NAME_SPACE_ANDROID : SpotSystem.NAME_SPACE_IOS;
      return SpotSystem;
    }(ASystem_1.default);
    exports.default = SpotSystem;
    cc._RF.pop();
  }, {
    "../../framework/platform/PlatformSystem": "PlatformSystem",
    "../../utils/StringUtils": "StringUtils",
    "../interface/ASystem": "ASystem",
    "../net/http/HttpSystem": "HttpSystem"
  } ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "114c68UsyBHdpCc9odMVjmz", "StateMachine");
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
    cc._RF.push(module, "5076c2ryTtH6aqyTYUwkZNc", "StringUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringUtils = void 0;
    var StringUtils = function() {
      function StringUtils() {}
      StringUtils.format = function(sourceStr) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        if (0 === args.length) return sourceStr;
        var str = sourceStr;
        for (var i = 0; i < args.length; i++) str = str.replace(new RegExp("\\{" + i + "\\}", "g"), args[i]);
        return str;
      };
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
    cc._RF.push(module, "c1a52rr4yZPb5zZ4GQOUVg2", "Telegram");
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
    cc._RF.push(module, "15fa1M9Ds5PtZ8M7paNGh4l", "TextLoader");
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
    cc._RF.push(module, "3b07fePrYZOyIg4gG6AXRvI", "TimeUtils");
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
    cc._RF.push(module, "02fdbp0N2lKQL73Ji/+Er8C", "TimerSystem");
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
  UIUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "362a2mc8ONKrpmZEL/T0gBJ", "UIUtils");
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
    cc._RF.push(module, "a5b0dw6wXxCBJaBu32I92qg", "UrlUtils");
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
  WebAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fec37rn+BhELIW58cFAK2zF", "WebAdapter");
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
      WebAdapter.prototype.callFunctionResult = function(funcName, parm, moduleName) {
        return {};
      };
      return WebAdapter;
    }();
    exports.default = WebAdapter;
    cc._RF.pop();
  }, {} ],
  audioUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5468cBvyQtDpJdr8HIk06qy", "audioUtil");
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
      AudioUtil.getFixedPath = function(bundleName, path) {
        var cachePath = "";
        cachePath = bundleName instanceof cc.AssetManager.Bundle ? bundleName.name : bundleName;
        return cachePath + "/" + path;
      };
      AudioUtil.playEffect = function(bundleName, path, finishCb) {
        if (AudioUtil._pauseFlag) return;
        var curTime = new Date().getTime();
        if (path === AudioUtil._curSound) {
          var tempTime = curTime - AudioUtil._lastSoundTime;
          if (tempTime < 50) return;
        }
        AudioUtil._curSound = path;
        AudioUtil._lastSoundTime = curTime;
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil.getEffectFromPool(fixedPath);
        if (source) source.play(false, finishCb); else {
          source = new __AudioSource(bundleName, path, MusicType.SOUND);
          AudioUtil.addEffectToPool(fixedPath, source);
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
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._loopSoundPool.get(fixedPath);
        if (!source) {
          source = new __AudioSource(bundleName, path, MusicType.LOOP_SOUND);
          AudioUtil._loopSoundPool.set(fixedPath, source);
        }
        source.play(true);
      };
      AudioUtil.stopLoopEffect = function(bundleName, path) {
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._loopSoundPool.get(fixedPath);
        source && source.stop();
      };
      AudioUtil.playMusic = function(bundleName, path) {
        if (AudioUtil._pauseFlag) return;
        AudioUtil._curMusic && AudioUtil._curMusic.stop();
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        var source = AudioUtil._musicPool.get(fixedPath);
        if (source) source.play(true); else {
          source = new __AudioSource(bundleName, path, MusicType.MUSIC);
          AudioUtil._musicPool.set(fixedPath, source);
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
      AudioUtil.stopEffectByName = function(path) {
        var list = AudioUtil._soundPool.get(path);
        list && list.forEach(function(value) {
          value.stop();
        });
      };
      AudioUtil.playEffectByName = function(bundleName, path, isSingle, isLoop) {
        void 0 === isSingle && (isSingle = true);
        void 0 === isLoop && (isLoop = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              if (AudioUtil._pauseFlag) {
                resolve();
                return;
              }
              var curTime = new Date().getTime();
              if (path === AudioUtil._curSound) {
                var tempTime = curTime - AudioUtil._lastSoundTime;
                if (tempTime < 50) {
                  resolve();
                  return;
                }
              }
              var fixedPath = AudioUtil.getFixedPath(bundleName, path);
              isSingle && AudioUtil.stopEffectByName(fixedPath);
              AudioUtil._curSound = path;
              AudioUtil._lastSoundTime = curTime;
              var source = null;
              source = isLoop ? AudioUtil._loopSoundPool.get(fixedPath) : AudioUtil.getEffectFromPool(fixedPath);
              if (source) source.play(isLoop, function() {
                resolve();
              }); else {
                source = new __AudioSource(bundleName, path, MusicType.SOUND);
                isLoop ? AudioUtil._loopSoundPool.set(fixedPath, source) : AudioUtil.addEffectToPool(fixedPath, source);
                source.play(isLoop, function() {
                  resolve();
                });
              }
            }) ];
          });
        });
      };
      AudioUtil.destroyAudio = function(bundleName, path) {
        var fixedPath = AudioUtil.getFixedPath(bundleName, path);
        if (AudioUtil._soundPool.has(fixedPath)) {
          AudioUtil.stopEffectByName(fixedPath);
          var list = AudioUtil._soundPool.get(fixedPath);
          list.forEach(function(element) {
            element.destroy();
          });
          AudioUtil._soundPool.delete(fixedPath);
        }
        if (AudioUtil._musicPool.has(fixedPath)) {
          AudioUtil.stopMusic();
          var clip = AudioUtil._musicPool.get(fixedPath);
          clip.destroy();
          AudioUtil._musicPool.delete(fixedPath);
        }
        if (AudioUtil._loopSoundPool.has(fixedPath)) {
          AudioUtil.stopLoopEffect(bundleName, path);
          var clip = AudioUtil._loopSoundPool.get(fixedPath);
          clip.destroy();
          AudioUtil._loopSoundPool.delete(fixedPath);
        }
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
        this._audioSource = null;
        this._path = "";
        this.state = {};
        this._bundleName = bundleName;
        this._path = path;
        this._musicType = type;
      }
      __AudioSource.prototype.loadRes = function(cb) {
        var _this = this;
        this._loaded || ResLoader_1.default.loadRes(this._path, cc.AudioClip, function(err, res) {
          if (err) LogSystem_1.default.warn("\u97f3\u9891\u8d44\u6e90\u52a0\u8f7d\u51fa\u9519:" + _this._path); else {
            _this._audioSource = res;
            _this._loaded = true;
            cb && cb();
          }
        }, this._bundleName);
      };
      __AudioSource.prototype.play = function(isLoop, cb) {
        var _this = this;
        this._isStop = false;
        if (this._loaded) {
          this.stop();
          isLoop || (isLoop = false);
          this.state.isLoop = isLoop;
          this.state.isPlaying = true;
          this._musicType == MusicType.MUSIC ? this.state.id = cc.audioEngine.playMusic(this._audioSource, isLoop) : this.state.id = cc.audioEngine.playEffect(this._audioSource, isLoop);
          if (cb) {
            var duration = this._audioSource.duration;
            kit_1.kit.system.timer.doOnce(1e3 * duration, function() {
              cb();
            }, this, null, false);
          }
        } else this.loadRes(function() {
          _this._isStop || _this.play(isLoop, cb);
        });
      };
      __AudioSource.prototype.playEffect = function(isLoop) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.play(isLoop, function() {
                resolve();
              });
            }) ];
          });
        });
      };
      __AudioSource.prototype.isPlaying = function() {
        return this.state.isPlaying;
      };
      __AudioSource.prototype.stop = function() {
        this._isStop = true;
        this._loaded && null != this.state.id && void 0 != this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.stopMusic() : cc.audioEngine.stopEffect(this.state.id));
      };
      __AudioSource.prototype.pause = function() {
        this._loaded && this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.pauseMusic() : cc.audioEngine.pauseEffect(this.state.id));
      };
      __AudioSource.prototype.resume = function() {
        this._loaded && this.state.id && (this._musicType == MusicType.MUSIC ? cc.audioEngine.resumeMusic() : cc.audioEngine.resumeEffect(this.state.id));
      };
      __AudioSource.prototype.destroy = function() {
        this.stop();
        if (this._audioSource) {
          cc.assetManager.releaseAsset(this._audioSource);
          this._audioSource.destroy();
          this._audioSource = null;
        }
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
    cc._RF.push(module, "187f7Y53EhCkaPMGW/JoNyi", "bundleUtils");
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
    cc._RF.push(module, "4ca57WMN+lCIbPmfyO28HGa", "bundleUtil");
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
  events: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b9a5I6/r1Eoa1BWRVlI6EB", "events");
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
      Events.SHOW_COMMON_TIPS_POP = "showCommonTipsPop";
      return Events;
    }();
    exports.default = Events;
    cc._RF.pop();
  }, {} ],
  kit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66a811SvIRC8pQs+rdxMGTe", "kit");
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
    var events_1 = require("./events/events");
    var ResLoader_1 = require("./framework/load/ResLoader");
    var PlatformSystem_1 = require("./framework/platform/PlatformSystem");
    var PopupManager_1 = require("./manager/popupManager.ts/PopupManager");
    var ResourcesManager_1 = require("./manager/ResourcesManager");
    var ClientModuleEnum_1 = require("./structure/ClientModuleEnum");
    var LinkedNode_1 = require("./structure/LinkedNode");
    var AudioManager_1 = require("./system/audio/AudioManager");
    var ErrorSystem_1 = require("./system/error/ErrorSystem");
    var EventSystem_1 = require("./system/event/EventSystem");
    var Telegram_1 = require("./system/fsm/message/Telegram");
    var StateMachine_1 = require("./system/fsm/StateMachine");
    var LogSystem_1 = require("./system/log/LogSystem");
    var HttpSystem_1 = require("./system/net/http/HttpSystem");
    var TimerSystem_1 = require("./system/timer/TimerSystem");
    var LocalStorageUtils_1 = require("./utils/LocalStorageUtils");
    var TimeUtils_1 = require("./utils/TimeUtils");
    var UIUtils_1 = require("./utils/UIUtils");
    var ModelManager_1 = require("./model/ModelManager");
    var ModelBase_1 = require("./model/ModelBase");
    var MessageBase_1 = require("./model/MessageBase");
    var NativeInfo_1 = require("./model/NativeInfo");
    var SpotSystem_1 = require("./system/log/SpotSystem");
    var kit;
    (function(kit) {
      var util;
      (function(util) {
        util.Time = TimeUtils_1.TimeUtils;
        util.Ui = UIUtils_1.default;
        util.UiContainer = UIUtils_1.UIContainer;
        util.LocalStorage = LocalStorageUtils_1.LocalStorageUtils;
      })(util = kit.util || (kit.util = {}));
      var system;
      (function(system) {
        system.log = LogSystem_1.default.instance;
        system.error = ErrorSystem_1.default.instance;
        system.timer = TimerSystem_1.default.instance;
        system.platform = PlatformSystem_1.default.instance;
        system.spot = SpotSystem_1.default.instance;
      })(system = kit.system || (kit.system = {}));
      var manager;
      (function(manager) {
        manager.resources = ResourcesManager_1.default.instance;
        var Resources;
        (function(Resources) {
          Resources.Type = ResourcesManager_1.ResourceType;
        })(Resources = manager.Resources || (manager.Resources = {}));
        manager.Audio = AudioManager_1.default;
        manager.Event = EventSystem_1.default;
        manager.Http = HttpSystem_1.default;
        manager.Popup = PopupManager_1.default;
      })(manager = kit.manager || (kit.manager = {}));
      var consts;
      (function(consts) {
        consts.Event = events_1.default;
      })(consts = kit.consts || (kit.consts = {}));
      var structure;
      (function(structure) {
        structure.LinkList = LinkedNode_1.default;
      })(structure = kit.structure || (kit.structure = {}));
      var video;
      (function(video) {
        video.videoTransType = ClientModuleEnum_1.VideoEventTransType;
      })(video = kit.video || (kit.video = {}));
      var component;
      (function(component) {
        component.Click = ClickCmpt_1.default;
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
        fsm.StateManager = StateMachine_1.default;
        fsm.Telegrams = Telegram_1.default;
      })(fsm = kit.fsm || (kit.fsm = {}));
      var model;
      (function(model) {
        model.modelManager = ModelManager_1.default.instance;
        var modelBase = function(_super) {
          __extends(modelBase, _super);
          function modelBase() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return modelBase;
        }(ModelBase_1.default);
        model.modelBase = modelBase;
        var messageBase = function(_super) {
          __extends(messageBase, _super);
          function messageBase() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return messageBase;
        }(MessageBase_1.MessageBase);
        model.messageBase = messageBase;
        var nativeInfo = function(_super) {
          __extends(nativeInfo, _super);
          function nativeInfo() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return nativeInfo;
        }(NativeInfo_1.default);
        model.nativeInfo = nativeInfo;
        var netWork;
        (function(netWork) {
          netWork.networkType = NativeInfo_1.NetworkType;
        })(netWork = model.netWork || (model.netWork = {}));
      })(model = kit.model || (kit.model = {}));
    })(kit = exports.kit || (exports.kit = {}));
    cc._RF.pop();
  }, {
    "./component/ClickCmpt": "ClickCmpt",
    "./events/events": "events",
    "./framework/load/ResLoader": "ResLoader",
    "./framework/platform/PlatformSystem": "PlatformSystem",
    "./manager/ResourcesManager": "ResourcesManager",
    "./manager/popupManager.ts/PopupManager": "PopupManager",
    "./model/MessageBase": "MessageBase",
    "./model/ModelBase": "ModelBase",
    "./model/ModelManager": "ModelManager",
    "./model/NativeInfo": "NativeInfo",
    "./structure/ClientModuleEnum": "ClientModuleEnum",
    "./structure/LinkedNode": "LinkedNode",
    "./system/audio/AudioManager": "AudioManager",
    "./system/error/ErrorSystem": "ErrorSystem",
    "./system/event/EventSystem": "EventSystem",
    "./system/fsm/StateMachine": "StateMachine",
    "./system/fsm/message/Telegram": "Telegram",
    "./system/log/LogSystem": "LogSystem",
    "./system/log/SpotSystem": "SpotSystem",
    "./system/net/http/HttpSystem": "HttpSystem",
    "./system/timer/TimerSystem": "TimerSystem",
    "./utils/LocalStorageUtils": "LocalStorageUtils",
    "./utils/TimeUtils": "TimeUtils",
    "./utils/UIUtils": "UIUtils"
  } ],
  "loader-index": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9cd2OISWhFW79sejRXyuvb", "loader-index");
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
  main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1626vz3OVFVYPBwVgTfAPA", "main");
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
    var events_1 = require("../kit/events/events");
    var PlatformSystem_1 = require("../kit/framework/platform/PlatformSystem");
    var AudioManager_1 = require("../kit/system/audio/AudioManager");
    var EventSystem_1 = require("../kit/system/event/EventSystem");
    var TimerSystem_1 = require("../kit/system/timer/TimerSystem");
    var bundleUtils_1 = require("../kit/utils/bundleUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var cdn_root = "https://math-thinking.oss-cn-beijing.aliyuncs.com/qt/tools/book/ice-v1.2";
    var book_id = "09f45230-9db8-4eaa-ba95-a45e21f81c0d";
    var CONFIG = {
      id: 1,
      main: "book_player",
      assets: [ cdn_root + "/internal-ice", cdn_root + "/resources-ice", cdn_root + "/main-ice", cdn_root + "/" + book_id, "common", "book_player" ],
      params: {
        bundle: cdn_root + "/" + book_id
      }
    };
    var main = function(_super) {
      __extends(main, _super);
      function main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.lessonNode = null;
        _this.lock = false;
        return _this;
      }
      main.prototype.onLoad = function() {
        this.relayout();
        cc.debug.setDisplayStats(false);
        PlatformSystem_1.default.instance.init();
        TimerSystem_1.default.instance.init();
        AudioManager_1.default.init();
        this.loadLocalProject();
      };
      main.prototype.relayout = function() {
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
      main.prototype.loadLocalProject = function() {
        var _this = this;
        var list = [];
        CONFIG.assets.forEach(function(url) {
          list.push("" + url);
        });
        console.log("list: ", list);
        var bundle = null;
        bundleUtils_1.loadBundles(list).then(function(res) {
          bundle = res.find(function(element) {
            return element.name === CONFIG.main;
          });
          bundle.load("" + CONFIG.main, cc.Prefab, function(error, prefab) {
            if (error) {
              cc.error(error);
              return;
            }
            _this.lessonNode = cc.instantiate(prefab);
            var comp = _this.lessonNode.getComponent("BaseChapterComponent");
            comp && comp.initParams(CONFIG.params);
            _this.contentNode.addChild(_this.lessonNode);
            TimerSystem_1.default.instance.doFrameOnce(1, function() {
              EventSystem_1.default.emit(events_1.LIFE_CYCLE_PARAMS, CONFIG.params);
            });
          });
        }).catch(function(error) {
          cc.error(error);
        });
      };
      __decorate([ property(cc.Node) ], main.prototype, "contentNode", void 0);
      main = __decorate([ ccclass ], main);
      return main;
    }(cc.Component);
    exports.default = main;
    cc._RF.pop();
  }, {
    "../kit/events/events": "events",
    "../kit/framework/platform/PlatformSystem": "PlatformSystem",
    "../kit/system/audio/AudioManager": "AudioManager",
    "../kit/system/event/EventSystem": "EventSystem",
    "../kit/system/timer/TimerSystem": "TimerSystem",
    "../kit/utils/bundleUtils": "bundleUtils"
  } ]
}, {}, [ "ClickCmpt", "events", "LoaderObserver", "ResLoader", "AtlasLoader", "AudioLoader", "BaseLoader", "DefaultLoader", "ImageLoader", "JsonLoader", "PrefabLoader", "SpineLoader", "TextLoader", "loader-index", "AndroidAdapter", "DebuggerAdapter", "INativeServer", "IPlatform", "IosAdapter", "PlatformSystem", "WebAdapter", "kit", "ResourcesManager", "ConfirmPopup", "PopupBase", "PopupManager", "MessageBase", "ModelBase", "ModelManager", "NativeInfo", "NetHelper", "ClientModuleEnum", "ClientModuleInterface", "LinkedNode", "AudioManager", "ErrorSystem", "EventEmitter", "EventSystem", "StateMachine", "EntityManager", "IEntity", "MessageDispatcher", "MessageType", "Telegram", "IState", "ASystem", "LogSystem", "SpotSystem", "Http", "HttpState", "HttpSystem", "IHttpSystem", "TimerSystem", "DelayUtils", "LocalStorageUtils", "MonitorUtils", "NumberUtils", "ParseTemplateUtils", "PoolUtils", "StringUtils", "TimeUtils", "UIUtils", "UrlUtils", "audioUtil", "bundleUtil", "bundleUtils", "main" ]);
//# sourceMappingURL=index.js.map
