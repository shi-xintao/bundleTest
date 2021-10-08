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
  QuziGamePanda: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "06d51S8HYFKfqkeGefA1bVd", "QuziGamePanda");
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
    var CompEnum_1 = require("../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var TemplateGameBase_1 = require("../../templateGame/scripts/TemplateGameBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuziGamePanda = function(_super) {
      __extends(QuziGamePanda, _super);
      function QuziGamePanda() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.panda = null;
        _this.shucai = null;
        _this.baiyan = null;
        _this.heiyan = null;
        _this.faguang = null;
        _this.animationNames = [ [ "daotiaoliao", "haowen", "daotiaoliao", "nanwen" ], [ "jitiaoweijiang", "haowen", "jitiaoweijiang", "nanwen" ] ];
        _this.effectUrl = "res/audios/SE_xiongmaochushen";
        return _this;
      }
      QuziGamePanda.prototype.start = function() {};
      QuziGamePanda.prototype.openAniStart = function() {
        var _this = this;
        cc.log("openAniStart");
        var time = 5;
        switch (this.curRoundIndex) {
         case 0:
          this.panda.clearTracks();
          this.panda.setAnimation(0, "zou", false);
          this.scheduleOnce(function() {
            AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "01", function() {
              AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "01");
            });
          }, 1);
          this.panda.addAnimation(0, "stay", true);
          break;

         case 1:
          time = 3;
          break;

         case 2:
          time = 3;
          this.shucai.node.active = true;
          this.shucai.clearTracks();
          this.shucai.setAnimation(0, "shucai", false);
          AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "07");
          break;

         case 3:
          time = 6;
          this.panda.clearTracks();
          this.panda.setCompleteListener(function() {
            _this.panda.setCompleteListener(function() {
              _this.panda.clearTracks();
              _this.panda.setCompleteListener(function() {});
              _this.panda.setAnimation(0, "jiaoban2", false);
              AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "11");
            });
            _this.panda.clearTracks();
            _this.panda.setAnimation(0, "jiaoban", false);
          });
          this.panda.setAnimation(0, "guo", false);
        }
        this.scheduleOnce(function() {
          _this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundOpenAniComplete);
        }, time);
      };
      QuziGamePanda.prototype.openAniComplete = function() {
        _super.prototype.openAniComplete.call(this);
        cc.log("openAniComplete");
        switch (this.curRoundIndex) {
         case 0:
         case 1:
          AudioManager_1.default.playEffect("quziGamePanda", "res/audios/qiqiu");
          this.schedule(function() {
            AudioManager_1.default.playEffect("quziGamePanda", "res/audios/qiqiu");
          }, 5);
        }
      };
      QuziGamePanda.prototype.startAudioCallFunc = function() {
        cc.log("GamePanda start record!");
        this.startRecordAudio("\u6c14\u7403", "quziGamePanda", "res/audios/qiqiu");
      };
      QuziGamePanda.prototype.onRecordResult = function(result) {
        cc.log("onRecordResult ===== ", result);
        "ResultCb" == result.data.eventName && (result.data.success ? this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 1
        }) : this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 0
        }));
      };
      QuziGamePanda.prototype.endAniStart = function() {
        var _this = this;
        cc.log("endAniStart");
        this.unscheduleAllCallbacks();
        switch (this.curRoundIndex) {
         case 0:
          if (1 == this.curRoundResult.win) {
            this.panda.clearTracks();
            this.panda.setAnimation(0, this.animationNames[this.curRoundIndex][0], false);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "02", function() {
              _this.scheduleOnce(function() {
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "03", function() {
                  _this.scheduleOnce(function() {
                    AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "04");
                  }, 1);
                });
              }, .5);
            });
            this.panda.addAnimation(0, this.animationNames[this.curRoundIndex][1], false);
            this.panda.addAnimation(0, "stay", true);
          } else {
            this.panda.clearTracks();
            this.panda.setAnimation(0, this.animationNames[this.curRoundIndex][2], false);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "02", function() {
              _this.scheduleOnce(function() {
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "03", function() {
                  _this.scheduleOnce(function() {
                    AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "05");
                  }, 1);
                });
              }, .5);
            });
            this.panda.addAnimation(0, this.animationNames[this.curRoundIndex][3], false);
            this.panda.addAnimation(0, "stay", true);
          }
          break;

         case 1:
          if (1 == this.curRoundResult.win) {
            this.panda.clearTracks();
            this.panda.setAnimation(0, this.animationNames[this.curRoundIndex][0], false);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "02", function() {
              _this.scheduleOnce(function() {
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "06", function() {
                  _this.scheduleOnce(function() {
                    AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "04");
                  }, 1);
                });
              }, .5);
            });
            this.panda.addAnimation(0, this.animationNames[this.curRoundIndex][1], false);
            this.panda.addAnimation(0, "stay", true);
          } else {
            this.panda.clearTracks();
            this.panda.setAnimation(0, this.animationNames[this.curRoundIndex][2], false);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "02", function() {
              _this.scheduleOnce(function() {
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "06", function() {
                  _this.scheduleOnce(function() {
                    AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "05");
                  }, 1);
                });
              }, .5);
            });
            this.panda.addAnimation(0, this.animationNames[this.curRoundIndex][3], false);
            this.panda.addAnimation(0, "stay", true);
          }
          break;

         case 2:
          this.shucai.clearTracks();
          this.shucai.setCompleteListener(function() {
            _this.shucai.node.active = false;
            if (1 == _this.curRoundResult.win) {
              _this.baiyan.node.active = true;
              _this.baiyan.clearTracks();
              _this.baiyan.setCompleteListener(function() {
                _this.panda.clearTracks();
                _this.panda.setAnimation(0, "happy", false);
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "09");
                _this.panda.addAnimation(0, "stay", true);
              });
              _this.baiyan.setAnimation(0, "animation", false);
            } else {
              _this.heiyan.node.active = true;
              _this.heiyan.clearTracks();
              _this.heiyan.setCompleteListener(function() {
                _this.panda.clearTracks();
                _this.panda.setAnimation(0, "aonao", false);
                AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "10");
                _this.panda.addAnimation(0, "stay", true);
              });
              _this.heiyan.setAnimation(0, "animation", false);
            }
          });
          this.shucai.setAnimation(0, "shucai-fei", false);
          AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "08");
          break;

         case 3:
          if (1 == this.curRoundResult.win) {
            this.panda.addAnimation(0, "stay", true);
            this.faguang.node.active = true;
            this.faguang.clearTracks();
            this.faguang.setAnimation(0, "animation", true);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "12");
            this.scheduleOnce(function() {
              _this.panda.clearTracks();
              _this.panda.setAnimation(0, "happy", false);
              AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "09");
            }, 1);
          } else {
            this.heiyan.node.active = true;
            this.panda.addAnimation(0, "stay", true);
            this.heiyan.clearTracks();
            this.heiyan.setAnimation(0, "animation", false);
            AudioManager_1.default.playEffect("quziGamePanda", this.effectUrl + "13");
            this.scheduleOnce(function() {
              _this.panda.clearTracks();
              _this.panda.setAnimation(0, "aonao", false);
              AudioManager_1.default.playEffect("quziGamePanda", _this.effectUrl + "10");
            }, 1);
          }
        }
        this.scheduleOnce(function() {
          _this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundEndAniComplete);
        }, 6);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u718a\u732b\u52a8\u753b"
      }) ], QuziGamePanda.prototype, "panda", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u852c\u83dc\u52a8\u753b"
      }) ], QuziGamePanda.prototype, "shucai", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u767d\u70df\u52a8\u753b"
      }) ], QuziGamePanda.prototype, "baiyan", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u9ed1\u70df\u52a8\u753b"
      }) ], QuziGamePanda.prototype, "heiyan", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u53d1\u5149\u52a8\u753b"
      }) ], QuziGamePanda.prototype, "faguang", void 0);
      QuziGamePanda = __decorate([ ccclass ], QuziGamePanda);
      return QuziGamePanda;
    }(TemplateGameBase_1.default);
    exports.default = QuziGamePanda;
    cc._RF.pop();
  }, {
    "../../../common/structure/CompEnum": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../templateGame/scripts/TemplateGameBase": void 0
  } ]
}, {}, [ "QuziGamePanda" ]);