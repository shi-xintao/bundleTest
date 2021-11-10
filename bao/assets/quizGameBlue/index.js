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
  QuizGameBlueConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfc74FCTL1A+I8Z3In/BxRL", "QuizGameBlueConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.round2WrongConfig = exports.round2CorrectConfig = exports.round1CorrectWrong = exports.round1CorrectConfig = exports.QuizBlueSoundConfig = exports.SpineType = exports.EleSpineName = void 0;
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var QuizGameBlue_1 = require("./QuizGameBlue");
    var EleSpineName;
    (function(EleSpineName) {
      EleSpineName["Walk"] = "walk2";
      EleSpineName["WalkWithGun"] = "walk";
      EleSpineName["Chuiqi"] = "chuiqi";
      EleSpineName["Chailiwu"] = "chai li wu";
      EleSpineName["Chailiwu2"] = "chai li wu2";
      EleSpineName["chuipaopao"] = "chuipaopao";
      EleSpineName["chuipaopao2"] = "chuipaopao2";
      EleSpineName["chuipaopao2Huai"] = "chuipaopao2-huai";
      EleSpineName["daiji"] = "daiji";
      EleSpineName["gaoxing"] = "gaoxing";
      EleSpineName["ku"] = "ku";
      EleSpineName["kunhuo"] = "kunhuo";
      EleSpineName["kunhuo2"] = "kunhuo2";
      EleSpineName["qidai"] = "qidai";
      EleSpineName["zhanshi"] = "zhanshi";
      EleSpineName["zhanshi2"] = "zhanshi2";
      EleSpineName["naqiang"] = "naqiang";
      EleSpineName["kunhuoGun"] = "kunhuo-kan";
      EleSpineName["kunhuoGun1"] = "kunhuo2-kan";
      EleSpineName["kan"] = "kan";
    })(EleSpineName = exports.EleSpineName || (exports.EleSpineName = {}));
    var SpineType;
    (function(SpineType) {
      SpineType["ce"] = "xiang-ce";
      SpineType["zheng"] = "xiang-zhengmian";
    })(SpineType = exports.SpineType || (exports.SpineType = {}));
    var QuizBlueSoundConfig;
    (function(QuizBlueSoundConfig) {
      QuizBlueSoundConfig["BG"] = "audios/BGM_guoshengri_01";
      QuizBlueSoundConfig["SE_guoshengri01"] = "audios/SE_guoshengri01";
      QuizBlueSoundConfig["SE_guoshengri02"] = "audios/SE_guoshengri02";
      QuizBlueSoundConfig["SE_guoshengri03"] = "audios/SE_guoshengri03";
      QuizBlueSoundConfig["SE_guoshengri04"] = "audios/SE_guoshengri04";
      QuizBlueSoundConfig["SE_guoshengri05"] = "audios/SE_guoshengri05";
      QuizBlueSoundConfig["SE_guoshengri06"] = "audios/SE_guoshengri06";
      QuizBlueSoundConfig["SE_guoshengri07"] = "audios/SE_guoshengri07";
      QuizBlueSoundConfig["SE_guoshengri08"] = "audios/SE_guoshengri08";
      QuizBlueSoundConfig["SE_guoshengri09"] = "audios/SE_guoshengri09";
    })(QuizBlueSoundConfig = exports.QuizBlueSoundConfig || (exports.QuizBlueSoundConfig = {}));
    var round1CorrectConfig = [ {
      name: EleSpineName.Chailiwu,
      loop: false,
      func: function() {
        AudioManager_1.default.playEffect(QuizGameBlue_1.QUIZGAMEBLUE, QuizBlueSoundConfig.SE_guoshengri02);
      }
    }, {
      name: EleSpineName.zhanshi,
      loop: false
    }, {
      name: EleSpineName.zhanshi2,
      loop: true,
      duration: 3,
      func: function() {
        AudioManager_1.default.playEffect(QuizGameBlue_1.QUIZGAMEBLUE, QuizBlueSoundConfig.SE_guoshengri03);
      }
    } ];
    exports.round1CorrectConfig = round1CorrectConfig;
    var round1CorrectWrong = [ {
      name: EleSpineName.Chailiwu2,
      loop: false,
      func: function() {
        AudioManager_1.default.playEffect(QuizGameBlue_1.QUIZGAMEBLUE, QuizBlueSoundConfig.SE_guoshengri02);
      }
    }, {
      name: EleSpineName.kunhuo,
      loop: false
    }, {
      name: EleSpineName.kunhuo2,
      loop: true,
      duration: 2,
      func: function() {
        AudioManager_1.default.playEffect(QuizGameBlue_1.QUIZGAMEBLUE, QuizBlueSoundConfig.SE_guoshengri07);
      }
    } ];
    exports.round1CorrectWrong = round1CorrectWrong;
    var round2CorrectConfig = [ {
      name: EleSpineName.chuipaopao,
      loop: false
    }, {
      name: EleSpineName.chuipaopao2,
      loop: true,
      duration: 2
    } ];
    exports.round2CorrectConfig = round2CorrectConfig;
    var round2WrongConfig = [ {
      name: EleSpineName.chuipaopao,
      loop: false
    }, {
      name: EleSpineName.chuipaopao2Huai,
      loop: false
    }, {
      name: EleSpineName.kunhuoGun,
      loop: false
    }, {
      name: EleSpineName.kunhuoGun1,
      loop: true,
      duration: 2,
      func: function() {
        AudioManager_1.default.playEffect(QuizGameBlue_1.QUIZGAMEBLUE, QuizBlueSoundConfig.SE_guoshengri08);
      }
    } ];
    exports.round2WrongConfig = round2WrongConfig;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./QuizGameBlue": "QuizGameBlue"
  } ],
  QuizGameBlue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c7650XNGAZPcq4FDqTvUswr", "QuizGameBlue");
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
    exports.QUIZGAMEBLUE = void 0;
    var SpineUtils_1 = require("./../../../common/utils/SpineUtils");
    var CompEnum_1 = require("../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var TemplateGameBase_1 = require("../../templateGame/scripts/TemplateGameBase");
    var QuizGameBlueConfig_1 = require("./QuizGameBlueConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    exports.QUIZGAMEBLUE = "quizGameBlue";
    var MOVE_SPEED = 200;
    var QuizGameBlue = function(_super) {
      __extends(QuizGameBlue, _super);
      function QuizGameBlue() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.eleSpine = null;
        _this.cakeSpine = null;
        _this.idlePosNode = null;
        _this.xiangce = null;
        _this.xiangzheng = null;
        _this.iconOpen = null;
        _this.decBox = null;
        _this.decZhuozi = null;
        _this.guidHand = null;
        _this.decoNodes = [];
        _this.targetPos1 = null;
        _this.selectTargetNode = null;
        _this.selectCorrect = false;
        _this.guidFun = null;
        return _this;
      }
      QuizGameBlue.prototype.start = function() {
        this.eleSpine.node.zIndex = 100;
        this.roundNodeArr[2].zIndex = 110;
        this.decBox.zIndex = 101;
        this.decoNodes.map(function(node) {
          return node.zIndex = 102;
        });
        AudioManager_1.default.playMusic(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.BG);
      };
      QuizGameBlue.prototype.guidRound12 = function() {
        var nodeArr = this.roundNodeArr[this.curRoundIndex].children;
        AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, "audios/blue");
        nodeArr.map(function(node) {
          cc.tween(node).call(function() {}).to(.15, {
            scale: 1.1
          }).to(.15, {
            scale: .9
          }).to(.15, {
            scale: 1.1
          }).to(.15, {
            scale: 1
          }).start();
        });
      };
      QuizGameBlue.prototype.openAniStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              cc.log(" openAniStart =====this.curRoundIndex: ", this.curRoundIndex);
              _a = this.curRoundIndex;
              switch (_a) {
               case 0:
                return [ 3, 1 ];

               case 1:
                return [ 3, 3 ];

               case 2:
                return [ 3, 4 ];
              }
              return [ 3, 6 ];

             case 1:
              return [ 4, this.playOpenAniStart1() ];

             case 2:
              _b.sent();
              this.guidFun = this.guidRound12.bind(this);
              this.schedule(this.guidFun, 5);
              return [ 3, 8 ];

             case 3:
              this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.daiji, true, 1);
              this.guidFun = this.guidRound12.bind(this);
              this.schedule(this.guidFun, 5);
              return [ 3, 8 ];

             case 4:
              this.decBox.active = true;
              return [ 4, this.playOpenAniStart3() ];

             case 5:
              _b.sent();
              this.scheduleOnce(function() {
                _this.guidHand.active = false;
              }, 2);
              return [ 3, 8 ];

             case 6:
              this.decZhuozi.active = true;
              return [ 4, this.playOpenAniStart4() ];

             case 7:
              _b.sent();
              return [ 3, 8 ];

             case 8:
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundOpenAniComplete);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameBlue.prototype.roundStart = function() {
        _super.prototype.roundStart.call(this);
        this.curRoundIndex == this.MaxRoundIndex - 1 || AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, "audios/blue");
      };
      QuizGameBlue.prototype.endAniStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, skinName, round3CorrectConfig_1, round3WrongConfig_1;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              console.log(" endAniStart  ===this.curRoundIndex: ", this.curRoundIndex);
              _a = this.curRoundIndex;
              switch (_a) {
               case 0:
               case 1:
                return [ 3, 1 ];

               case 2:
                return [ 3, 11 ];

               case 3:
                return [ 3, 17 ];
              }
              return [ 3, 28 ];

             case 1:
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.ce) ];

             case 2:
              _b.sent();
              this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.Walk, true, -1);
              this.playWalkSound(true);
              return [ 4, this.move2TargetPos(cc.v3(this.targetPos1.x, this.eleSpine.node.y)) ];

             case 3:
              _b.sent();
              this.playWalkSound(false);
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.zheng) ];

             case 4:
              _b.sent();
              skinName = 0 == this.curRoundIndex ? "jiqiren" : "huoche";
              this.eleSpine.setSkin(skinName);
              if (!this.selectCorrect) return [ 3, 7 ];
              return [ 4, new Promise(function(resolve, reject) {
                _this.eleSpine.node.scaleX = 1;
                QuizGameBlueConfig_1.round1CorrectConfig[1].func = function() {
                  _this.selectTargetNode.active = false;
                  var node = cc.instantiate(_this.iconOpen);
                  node.parent = _this.selectTargetNode.parent;
                  var pos = _this.selectTargetNode.position;
                  node.position = pos.add(cc.v3(78));
                };
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, QuizGameBlueConfig_1.round1CorrectConfig).then(function() {
                  return resolve();
                });
              }) ];

             case 5:
              _b.sent();
              if (!cc.isValid(this.node)) return [ 2 ];
              return [ 4, new Promise(function(resolve, reject) {
                _this.playWalkSound(true);
                _this.eleMove2TargetPosWithAni(QuizGameBlueConfig_1.EleSpineName.Walk, _this.idlePosNode.position, QuizGameBlueConfig_1.EleSpineName.daiji).then(function() {
                  _this.playWalkSound(false);
                  resolve();
                });
              }) ];

             case 6:
              _b.sent();
              return [ 3, 10 ];

             case 7:
              this.eleSpine.setSkin("moren");
              this.scheduleOnce(function() {
                _this.eleSpine.node.x = _this.eleSpine.node.x - 200;
                _this.selectTargetNode.active = false;
                var node = cc.instantiate(_this.iconOpen);
                node.parent = _this.selectTargetNode.parent;
                var pos = _this.selectTargetNode.position;
                node.position = pos.add(cc.v3(78));
              }, 2.8);
              return [ 4, new Promise(function(resolve, reject) {
                _this.eleSpine.node.scaleX = 1;
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, QuizGameBlueConfig_1.round1CorrectWrong).then(function() {
                  return resolve();
                });
              }) ];

             case 8:
              _b.sent();
              if (!cc.isValid(this.node)) return [ 2 ];
              return [ 4, new Promise(function(resolve, reject) {
                _this.playWalkSound(true);
                _this.eleMove2TargetPosWithAni(QuizGameBlueConfig_1.EleSpineName.Walk, _this.idlePosNode.position, QuizGameBlueConfig_1.EleSpineName.daiji).then(function() {
                  _this.playWalkSound(false);
                  resolve();
                });
              }) ];

             case 9:
              _b.sent();
              _b.label = 10;

             case 10:
              return [ 3, 29 ];

             case 11:
              this.decBox.active = false;
              this.eleSpine.setSkin("shuiqiang");
              if (!(1 == this.curRoundResult.win)) return [ 3, 13 ];
              this.scheduleOnce(function() {
                AudioManager_1.default.playLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri04);
              }, .5);
              return [ 4, new Promise(function(resolve, reject) {
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, QuizGameBlueConfig_1.round2CorrectConfig).then(function() {
                  return resolve();
                });
              }) ];

             case 12:
              _b.sent();
              AudioManager_1.default.stopLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri04);
              return [ 3, 15 ];

             case 13:
              return [ 4, new Promise(function(resolve, reject) {
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, QuizGameBlueConfig_1.round2WrongConfig).then(function() {
                  return resolve();
                });
              }) ];

             case 14:
              _b.sent();
              _b.label = 15;

             case 15:
              if (!cc.isValid(this.node)) return [ 2 ];
              return [ 4, new Promise(function(resolve, reject) {
                _this.playWalkSound(true);
                _this.eleMove2TargetPosWithAni(QuizGameBlueConfig_1.EleSpineName.WalkWithGun, _this.idlePosNode.position, QuizGameBlueConfig_1.EleSpineName.daiji).then(function() {
                  _this.playWalkSound(false);
                  resolve();
                });
              }) ];

             case 16:
              _b.sent();
              return [ 3, 29 ];

             case 17:
              if (!(1 == this.curRoundResult.win)) return [ 3, 22 ];
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.ce) ];

             case 18:
              _b.sent();
              this.scheduleOnce(function() {
                _this.cakeSpine.setAnimation(0, "lazhu-mie", false);
                _this.cakeSpine.addAnimation(0, "lazhu-mie2", true);
              }, 1.2);
              this.scheduleOnce(function() {
                AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri05);
              }, .8);
              return [ 4, this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.Chuiqi, false, -1) ];

             case 19:
              _b.sent();
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.zheng) ];

             case 20:
              _b.sent();
              round3CorrectConfig_1 = [ {
                name: QuizGameBlueConfig_1.EleSpineName.gaoxing,
                loop: true,
                duration: 3,
                func: function() {
                  AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri06);
                }
              } ];
              return [ 4, new Promise(function(resolve, reject) {
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, round3CorrectConfig_1).then(function() {
                  return resolve();
                });
              }) ];

             case 21:
              _b.sent();
              return [ 3, 27 ];

             case 22:
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.ce) ];

             case 23:
              _b.sent();
              this.scheduleOnce(function() {
                _this.cakeSpine.setAnimation(0, "lazhu-fei", false);
              }, 1.2);
              this.scheduleOnce(function() {
                AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri09);
              }, .4);
              return [ 4, this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.Chuiqi, false, -1) ];

             case 24:
              _b.sent();
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.zheng) ];

             case 25:
              _b.sent();
              round3WrongConfig_1 = [ {
                name: QuizGameBlueConfig_1.EleSpineName.kunhuo,
                loop: false
              }, {
                name: QuizGameBlueConfig_1.EleSpineName.kunhuo2,
                loop: true,
                duration: 3
              } ];
              return [ 4, new Promise(function(resolve, reject) {
                SpineUtils_1.SpineUtils.playSpineAniByConfig(_this.eleSpine, round3WrongConfig_1).then(function() {
                  return resolve();
                });
              }) ];

             case 26:
              _b.sent();
              _b.label = 27;

             case 27:
             case 28:
              return [ 3, 29 ];

             case 29:
              console.log(" endAniStart  ===this.curRoundIndex: 1111", this.curRoundIndex);
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundEndAniComplete);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameBlue.prototype.startAudioCallFunc = function() {
        var _this = this;
        cc.log("QuizGameBlue start record!");
        this.startRecordAudio("\u84dd\u8272", exports.QUIZGAMEBLUE, "audios/blue", "texture/blue");
        false;
      };
      QuizGameBlue.prototype.onRecordResult = function(result) {
        cc.log("onRecordResult ===== ", result);
        "ResultCb" == result.data.eventName && (result.data.success ? this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 1
        }) : this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 0
        }));
      };
      QuizGameBlue.prototype.playOpenAniStart1 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.playWalkSound(true);
          _this.eleMove2TargetPosWithAni(QuizGameBlueConfig_1.EleSpineName.Walk, _this.idlePosNode.position, QuizGameBlueConfig_1.EleSpineName.daiji).then(function() {
            _this.playWalkSound(false);
            resolve();
          });
        });
      };
      QuizGameBlue.prototype.playOpenAniStart3 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pos, scaleX;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.eleSpine.setSkin("shuiqiang");
                return [ 4, this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.naqiang, false, 1) ];

               case 1:
                _a.sent();
                return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.ce) ];

               case 2:
                _a.sent();
                pos = this.decBox.position;
                scaleX = this.eleSpine.node.x > pos.x ? 1 : -1;
                this.playWalkSound(true);
                this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.WalkWithGun, true, scaleX);
                return [ 4, this.move2TargetPos(cc.v3(pos.x + 50, this.eleSpine.node.y)) ];

               case 3:
                _a.sent();
                this.playWalkSound(false);
                return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.zheng) ];

               case 4:
                _a.sent();
                return [ 4, this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.kan, false, scaleX) ];

               case 5:
                _a.sent();
                this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.daiji, true, 1);
                resolve();
                return [ 2 ];
              }
            });
          });
        });
      };
      QuizGameBlue.prototype.playOpenAniStart4 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              this.eleSpine.setSkin("moren");
              this.playEleAnimation(QuizGameBlueConfig_1.EleSpineName.daiji, true, 1);
              resolve();
              return [ 2 ];
            });
          });
        });
      };
      QuizGameBlue.prototype.eleMove2TargetPosWithAni = function(moveAniName, pos, stayAniName) {
        return __awaiter(this, void 0, void 0, function() {
          var scaleX;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.ce) ];

             case 1:
              _a.sent();
              scaleX = this.eleSpine.node.x > pos.x ? 1 : -1;
              this.playEleAnimation(moveAniName, true, scaleX);
              return [ 4, this.move2TargetPos(pos) ];

             case 2:
              _a.sent();
              return [ 4, this.changeSpine(QuizGameBlueConfig_1.SpineType.zheng) ];

             case 3:
              _a.sent();
              this.playEleAnimation(stayAniName, true, 1);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameBlue.prototype.playEleAnimation = function(aniName, loop, scale) {
        var _this = this;
        void 0 === loop && (loop = true);
        void 0 === scale && (scale = 1);
        if (!loop) return new Promise(function(resolve, reject) {
          _this.eleSpine.node.scaleX = scale;
          var le = _this.eleSpine.setAnimation(0, aniName, loop);
          _this.eleSpine.setTrackCompleteListener(le, function() {
            resolve();
          });
        });
        Promise.resolve().then(function() {
          _this.eleSpine.node.scaleX = scale;
          var le = _this.eleSpine.setAnimation(0, aniName, loop);
        });
      };
      QuizGameBlue.prototype.changeSpine = function(spineName) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.eleSpine.skeletonData = spineName == QuizGameBlueConfig_1.SpineType.ce ? _this.xiangce : _this.xiangzheng;
          resolve();
        });
      };
      QuizGameBlue.prototype.move2TargetPos = function(pos) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var p = _this.eleSpine.node.position;
          var len = p.sub(pos).len();
          var time = len / MOVE_SPEED;
          cc.tween(_this.eleSpine.node).to(time, {
            position: pos
          }).call(function() {
            resolve();
          }).start();
        });
      };
      QuizGameBlue.prototype.itemTouchCall = function(event, data) {
        if (this.curRoundStateType < CompEnum_1.RoundStateType.RoundStart) {
          cc.log("round not start curRoundIndex\uff1a" + this.curRoundStateType);
          return;
        }
        this.unschedule(this.guidFun);
        var target = event.currentTarget;
        this.selectTargetNode = target;
        var worldPos = target.parent.convertToWorldSpaceAR(target.position);
        this.targetPos1 = this.node.convertToNodeSpaceAR(worldPos);
        var n = Number(data);
        this.selectCorrect = 0 == n;
        console.log(" ====this.selectCorrect: ", this.selectCorrect, " n: ", n);
        if (0 == n) {
          AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, "audios/game_right");
          this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 1
          });
        } else {
          AudioManager_1.default.playEffect(exports.QUIZGAMEBLUE, "audios/game_error");
          this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 0
          });
        }
        this.roundNodeArr[this.curRoundIndex].children.map(function(node) {
          var btn = node.getComponent(cc.Button);
          btn && (btn.interactable = false);
        });
        var nodeArr = this.roundNodeArr[this.curRoundIndex].children;
        nodeArr.map(function(node) {
          node != target && (node.active = false);
        });
      };
      QuizGameBlue.prototype.playWalkSound = function(play) {
        void 0 === play && (play = true);
        play ? AudioManager_1.default.playLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri01) : AudioManager_1.default.stopLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri01);
      };
      QuizGameBlue.prototype.unregisterEvent = function() {
        _super.prototype.unregisterEvent.call(this);
        AudioManager_1.default.stopLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri01);
        AudioManager_1.default.stopLoopEffect(exports.QUIZGAMEBLUE, QuizGameBlueConfig_1.QuizBlueSoundConfig.SE_guoshengri04);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u5927\u8c61\u52a8\u753b"
      }) ], QuizGameBlue.prototype, "eleSpine", void 0);
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u86cb\u7cd5\u52a8\u753b"
      }) ], QuizGameBlue.prototype, "cakeSpine", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5927\u8c61\u5f85\u673a\u4f4d\u7f6e"
      }) ], QuizGameBlue.prototype, "idlePosNode", void 0);
      __decorate([ property({
        type: sp.SkeletonData,
        displayName: "\u5927\u8c61\u4fa7\u9762"
      }) ], QuizGameBlue.prototype, "xiangce", void 0);
      __decorate([ property({
        type: sp.SkeletonData,
        displayName: "\u5927\u8c61\u6b63\u9762"
      }) ], QuizGameBlue.prototype, "xiangzheng", void 0);
      __decorate([ property(cc.Node) ], QuizGameBlue.prototype, "iconOpen", void 0);
      __decorate([ property(cc.Node) ], QuizGameBlue.prototype, "decBox", void 0);
      __decorate([ property(cc.Node) ], QuizGameBlue.prototype, "decZhuozi", void 0);
      __decorate([ property(cc.Node) ], QuizGameBlue.prototype, "guidHand", void 0);
      __decorate([ property([ cc.Node ]) ], QuizGameBlue.prototype, "decoNodes", void 0);
      QuizGameBlue = __decorate([ ccclass ], QuizGameBlue);
      return QuizGameBlue;
    }(TemplateGameBase_1.default);
    exports.default = QuizGameBlue;
    cc._RF.pop();
  }, {
    "../../../common/structure/CompEnum": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../templateGame/scripts/TemplateGameBase": void 0,
    "./../../../common/utils/SpineUtils": void 0,
    "./QuizGameBlueConfig": "QuizGameBlueConfig"
  } ]
}, {}, [ "QuizGameBlue", "QuizGameBlueConfig" ]);
//# sourceMappingURL=index.js.map
