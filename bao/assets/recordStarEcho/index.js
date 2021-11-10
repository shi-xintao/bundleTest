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
  RecordStarEchoConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fb63OK9BFNVr/dfvxR/+C8", "RecordStarEchoConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IdleAniConfig = exports.ColorConfig = exports.SpeakAniConfig = exports.RoundStartAniConfig = exports.GameStartAniConfig = exports.RecordTxt = exports.StarAudioConfig = exports.StarAniName = void 0;
    var StarAniName;
    (function(StarAniName) {
      StarAniName["Chuchang"] = "1.chuchang";
      StarAniName["SayHello"] = "2.dazhaohu";
      StarAniName["Idle1"] = "3.daiji-zhayanjing";
      StarAniName["Idle2"] = "4.daiji-weixiao";
      StarAniName["Speak"] = "5.shuohua";
      StarAniName["ShanShanzi1"] = "6.shanshanzi 1";
      StarAniName["ShanShanzi2"] = "6.shanshanzi 2";
      StarAniName["SuccAni0"] = "7.zhuanshanzi";
      StarAniName["SuccAni1"] = "8.rengshanzi";
      StarAniName["SuccAni2"] = "9.nachuhua";
      StarAniName["SpeakWithLight1"] = "10.faguang1";
      StarAniName["SpeakWithLight2"] = "10.faguang2";
      StarAniName["SpeakWithLight3"] = "10.faguang3";
    })(StarAniName = exports.StarAniName || (exports.StarAniName = {}));
    var StarAudioConfig;
    (function(StarAudioConfig) {
      StarAudioConfig["BG"] = "audios/BGM_guoshengri_01";
    })(StarAudioConfig = exports.StarAudioConfig || (exports.StarAudioConfig = {}));
    var GameStartAniConfig = [ {
      name: StarAniName.Chuchang,
      loop: false
    }, {
      name: StarAniName.SayHello,
      loop: false
    }, {
      name: StarAniName.Idle1,
      loop: true
    } ];
    exports.GameStartAniConfig = GameStartAniConfig;
    var RoundStartAniConfig = [ {
      name: StarAniName.ShanShanzi1,
      loop: false
    }, {
      name: StarAniName.ShanShanzi2,
      loop: false
    }, {
      name: StarAniName.Idle1,
      loop: true
    } ];
    exports.RoundStartAniConfig = RoundStartAniConfig;
    var SpeakAniConfig = [ {
      name: StarAniName.SpeakWithLight2,
      loop: true
    } ];
    exports.SpeakAniConfig = SpeakAniConfig;
    var IdleAniConfig = [ {
      name: StarAniName.Idle2,
      loop: true
    } ];
    exports.IdleAniConfig = IdleAniConfig;
    var SuccAniConfig = [ {
      name: StarAniName.Idle2,
      loop: true
    } ];
    var ColorConfig = [ "red", "blue", "yellow" ];
    exports.ColorConfig = ColorConfig;
    var RecordTxt;
    (function(RecordTxt) {
      RecordTxt["red"] = "\u7ea2\u8272";
      RecordTxt["blue"] = "\u84dd\u8272";
      RecordTxt["yellow"] = "\u9ec4\u8272";
    })(RecordTxt = exports.RecordTxt || (exports.RecordTxt = {}));
    cc._RF.pop();
  }, {} ],
  RecordStarEcho: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e362kEgKBHAKuCmg/uBIyM", "RecordStarEcho");
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
    var ChapterGameComponent_1 = require("../../../common/scripts/ChapterGameComponent");
    var SpineUtils_1 = require("../../../common/utils/SpineUtils");
    var kit_1 = require("../../../kit/kit");
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var RecordStarEchoConfig_1 = require("./RecordStarEchoConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RECORDSTARECHO = "recordStarEcho";
    var RecordStarEcho = function(_super) {
      __extends(RecordStarEcho, _super);
      function RecordStarEcho() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.xingqiu = null;
        _this.shanzi = null;
        _this.wordIcon = null;
        _this.roundIndex = 0;
        _this.maxRound = 3;
        return _this;
      }
      RecordStarEcho.prototype.start = function() {
        var _this = this;
        AudioManager_1.default.playMusic(RECORDSTARECHO, RecordStarEchoConfig_1.StarAudioConfig.BG);
        this.xingqiu.node.active = true;
        SpineUtils_1.SpineUtils.playSpineAniByConfig(this.xingqiu, RecordStarEchoConfig_1.GameStartAniConfig).then(function() {
          _this.roundStart();
        });
        SpineUtils_1.SpineUtils.playSpineAniByConfig(this.shanzi, RecordStarEchoConfig_1.GameStartAniConfig).then();
      };
      RecordStarEcho.prototype.roundStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var curColor, RoundStartAniConfig1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              curColor = RecordStarEchoConfig_1.ColorConfig[this.roundIndex];
              RecordStarEchoConfig_1.RoundStartAniConfig[1].func = function() {
                _this.changeWordCard();
              };
              RoundStartAniConfig1 = JSON.parse(JSON.stringify(RecordStarEchoConfig_1.RoundStartAniConfig));
              RoundStartAniConfig1[1].func = null;
              return [ 4, new Promise(function(resolve, reject) {
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.xingqiu, RecordStarEchoConfig_1.RoundStartAniConfig).then(function() {
                  return resolve();
                });
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.shanzi, RoundStartAniConfig1).then();
              }) ];

             case 1:
              _a.sent();
              this.startRecordAudio(RecordStarEchoConfig_1.RecordTxt[curColor], RECORDSTARECHO, "audios/" + curColor, "texture/icon_" + curColor, "follow");
              false;
              return [ 2 ];
            }
          });
        });
      };
      RecordStarEcho.prototype.afterRecordAni = function() {
        var _this = this;
        SpineUtils_1.SpineUtils.playSpineAniByConfig(this.xingqiu, RecordStarEchoConfig_1.SpeakAniConfig).then();
        SpineUtils_1.SpineUtils.playSpineAniByConfig(this.shanzi, RecordStarEchoConfig_1.SpeakAniConfig).then();
        false;
      };
      RecordStarEcho.prototype.afterPlayingRecordAni = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, new Promise(function(resolve, reject) {
                var succConfigAni = [ {
                  name: RecordStarEchoConfig_1.StarAniName["SuccAni" + _this.roundIndex],
                  loop: false
                }, {
                  name: RecordStarEchoConfig_1.StarAniName.Idle2,
                  loop: true
                } ];
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.xingqiu, succConfigAni).then(function() {
                  return resolve();
                });
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.shanzi, succConfigAni).then();
              }) ];

             case 1:
              _a.sent();
              this.reportRoundCompleted(this.roundIndex, true);
              this.roundIndex++;
              if (this.roundIndex >= this.maxRound) {
                this.onGameEnd(true);
                SpineUtils_1.SpineUtils.playSpineAniByConfig(this.xingqiu, RecordStarEchoConfig_1.IdleAniConfig).then();
                SpineUtils_1.SpineUtils.playSpineAniByConfig(this.shanzi, RecordStarEchoConfig_1.IdleAniConfig).then();
                return [ 2 ];
              }
              this.roundStart();
              return [ 2 ];
            }
          });
        });
      };
      RecordStarEcho.prototype.onRecordResult = function(result) {
        cc.log(" recordResult result.data: " + result.data);
        "StopRecordCb" == result.data.eventName ? this.afterRecordAni() : "AudioFinishPlaying" == result.data.eventName && this.afterPlayingRecordAni();
      };
      RecordStarEcho.prototype.changeWordCard = function() {
        var _this = this;
        kit_1.kit.manager.resources.loadRes(RECORDSTARECHO, "texture/icon_" + RecordStarEchoConfig_1.ColorConfig[this.roundIndex], ResourcesManager_1.ResourceType.Normal, cc.SpriteFrame, function(err, spf) {
          _this.wordIcon.spriteFrame = spf;
        });
      };
      RecordStarEcho.prototype.onDestroy = function() {};
      __decorate([ property(sp.Skeleton) ], RecordStarEcho.prototype, "xingqiu", void 0);
      __decorate([ property(sp.Skeleton) ], RecordStarEcho.prototype, "shanzi", void 0);
      __decorate([ property(cc.Sprite) ], RecordStarEcho.prototype, "wordIcon", void 0);
      RecordStarEcho = __decorate([ ccclass ], RecordStarEcho);
      return RecordStarEcho;
    }(ChapterGameComponent_1.default);
    exports.default = RecordStarEcho;
    cc._RF.pop();
  }, {
    "../../../common/scripts/ChapterGameComponent": void 0,
    "../../../common/utils/SpineUtils": void 0,
    "../../../kit/kit": void 0,
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "./RecordStarEchoConfig": "RecordStarEchoConfig"
  } ]
}, {}, [ "RecordStarEcho", "RecordStarEchoConfig" ]);
//# sourceMappingURL=index.js.map
