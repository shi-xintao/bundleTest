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
  QuizGameRedConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8a0db3ym1Id6cE4HzWHYLc", "QuizGameRedConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.round2WrongConfig = exports.round2CorrectConfig = exports.round1CorrectConfig = exports.QuizRedSoundConfig = exports.SpineType = exports.EleSpineName = void 0;
    var EleSpineName;
    (function(EleSpineName) {
      EleSpineName["Walk"] = "walk";
      EleSpineName["stay"] = "stay";
      EleSpineName["WalkWithCar"] = "qiche_walk";
      EleSpineName["WalkWithBall"] = "piqiu_walk2";
      EleSpineName["WalkWithBook"] = "book_walk2";
      EleSpineName["stayWithBall"] = "stay-qiu";
      EleSpineName["stayWithCar"] = "stay-qiche";
      EleSpineName["stayWithBook"] = "stay-book2";
      EleSpineName["dropBall"] = "fangqiu-JH";
      EleSpineName["dropCar"] = "fangqiche-JH";
      EleSpineName["dropBook"] = "fangshu_Jh";
      EleSpineName["happy"] = "happy";
      EleSpineName["kunhuo"] = "KunHuo";
    })(EleSpineName = exports.EleSpineName || (exports.EleSpineName = {}));
    var SpineType;
    (function(SpineType) {
      SpineType["ce"] = "tuzi-ce";
      SpineType["zheng"] = "tuzi-zhengmian";
      SpineType["bei"] = "tuzi-Beimian";
    })(SpineType = exports.SpineType || (exports.SpineType = {}));
    var QuizRedSoundConfig;
    (function(QuizRedSoundConfig) {
      QuizRedSoundConfig["BG"] = "audios/BGM_shoushifangjian01";
      QuizRedSoundConfig["KeyWord"] = "audios/hongse";
      QuizRedSoundConfig["SE_shoushifangjian01"] = "audios/SE_shoushifangjian01";
      QuizRedSoundConfig["SE_shoushifangjian02"] = "audios/SE_shoushifangjian02";
      QuizRedSoundConfig["SE_shoushifangjian03"] = "audios/SE_shoushifangjian03";
      QuizRedSoundConfig["SE_shoushifangjian04"] = "audios/SE_shoushifangjian04";
      QuizRedSoundConfig["SE_shoushifangjian05"] = "audios/SE_shoushifangjian05";
    })(QuizRedSoundConfig = exports.QuizRedSoundConfig || (exports.QuizRedSoundConfig = {}));
    var round1CorrectConfig = [];
    exports.round1CorrectConfig = round1CorrectConfig;
    var round1CorrectWrong = [];
    var round2CorrectConfig = [];
    exports.round2CorrectConfig = round2CorrectConfig;
    var round2WrongConfig = [];
    exports.round2WrongConfig = round2WrongConfig;
    cc._RF.pop();
  }, {} ],
  QuizGameRed: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40d59ZMwXxAXqYPX6f3JAud", "QuizGameRed");
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
    var CompEnum_1 = require("../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var TemplateGameBase_1 = require("../../templateGame/scripts/TemplateGameBase");
    var QuizGameRedConfig_1 = require("./QuizGameRedConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QUIZGAMERED = "quizGameRed";
    var QuizGameRed = function(_super) {
      __extends(QuizGameRed, _super);
      function QuizGameRed() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.eleSpine = null;
        _this.idlePosNode = null;
        _this.game4Item = null;
        _this.tuzice = null;
        _this.tuzizheng = null;
        _this.tuzibei = null;
        _this.targetPos1 = null;
        _this.selectTargetNode = null;
        _this.selectCorrect = false;
        _this.guidFun = null;
        return _this;
      }
      QuizGameRed.prototype.start = function() {
        this.eleSpine.node.zIndex = 100;
        AudioManager_1.default.playMusic(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.BG);
      };
      QuizGameRed.prototype.guidRound12 = function() {
        AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.KeyWord);
        var nodeArr = this.roundNodeArr[this.curRoundIndex].children;
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
      QuizGameRed.prototype.openAniStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a;
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
                return [ 3, 5 ];
              }
              return [ 3, 7 ];

             case 1:
              return [ 4, this.playOpenAniStart1() ];

             case 2:
              _b.sent();
              AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.KeyWord);
              this.guidFun = this.guidRound12.bind(this);
              this.schedule(this.guidFun, 5);
              return [ 3, 9 ];

             case 3:
              return [ 4, this.playOpenAniStart2() ];

             case 4:
              _b.sent();
              AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.KeyWord);
              this.guidFun = this.guidRound12.bind(this);
              this.schedule(this.guidFun, 5);
              return [ 3, 9 ];

             case 5:
              return [ 4, this.playOpenAniStart3() ];

             case 6:
              _b.sent();
              return [ 3, 9 ];

             case 7:
              return [ 4, this.playOpenAniStart4() ];

             case 8:
              _b.sent();
              return [ 3, 9 ];

             case 9:
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundOpenAniComplete);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameRed.prototype.endAniStart = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _a, skinName, skinName2, pos;
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
                return [ 3, 13 ];
              }
              return [ 3, 23 ];

             case 1:
              this.playWalkSound(true);
              skinName = 0 == this.curRoundIndex ? QuizGameRedConfig_1.EleSpineName.WalkWithBall : QuizGameRedConfig_1.EleSpineName.WalkWithCar;
              skinName2 = 0 == this.curRoundIndex ? QuizGameRedConfig_1.EleSpineName.dropBall : QuizGameRedConfig_1.EleSpineName.dropCar;
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.ce) ];

             case 2:
              _b.sent();
              this.playEleAnimation(skinName, true, -.5);
              return [ 4, this.move2TargetPos(2, cc.v3(this.targetPos1.x, this.eleSpine.node.y)) ];

             case 3:
              _b.sent();
              this.playWalkSound(false);
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.bei) ];

             case 4:
              _b.sent();
              this.scheduleOnce(function() {
                _this.selectTargetNode.getChildByName("item").active = true;
              }, .5);
              AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian02);
              return [ 4, this.playEleAnimation(skinName2, false, .5) ];

             case 5:
              _b.sent();
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.zheng) ];

             case 6:
              _b.sent();
              if (!this.selectCorrect) return [ 3, 8 ];
              return [ 4, new Promise(function(resolve, reject) {
                AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian03);
                _this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.happy, false, .5).then(function() {
                  resolve();
                });
              }) ];

             case 7:
              _b.sent();
              return [ 3, 10 ];

             case 8:
              return [ 4, new Promise(function(resolve, reject) {
                AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian04);
                _this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.kunhuo, false, .5).then(function() {
                  resolve();
                });
              }) ];

             case 9:
              _b.sent();
              _b.label = 10;

             case 10:
              return [ 3, 24 ];

             case 11:
              return [ 4, this.showResultSpine() ];

             case 12:
              _b.sent();
              return [ 3, 24 ];

             case 13:
              pos = this.game4Item.position;
              if (!(1 == this.curRoundResult.win)) return [ 3, 20 ];
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.ce) ];

             case 14:
              _b.sent();
              this.playWalkSound(true);
              this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.WalkWithBook, true, -.5);
              return [ 4, this.move2TargetPos(2, cc.v3(pos.x, this.eleSpine.node.y)) ];

             case 15:
              _b.sent();
              this.playWalkSound(false);
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.bei) ];

             case 16:
              _b.sent();
              this.scheduleOnce(function() {
                _this.game4Item.getChildByName("book").active = true;
              }, .5);
              AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian05);
              return [ 4, this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.dropBook, false, .5) ];

             case 17:
              _b.sent();
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.zheng) ];

             case 18:
              _b.sent();
              return [ 4, new Promise(function(resolve, reject) {
                AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian03);
                _this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.happy, false, .5).then(function() {
                  resolve();
                });
              }) ];

             case 19:
              _b.sent();
              return [ 3, 22 ];

             case 20:
              return [ 4, new Promise(function(resolve, reject) {
                AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian04);
                _this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.kunhuo, false, .5).then(function() {
                  resolve();
                });
              }) ];

             case 21:
              _b.sent();
              _b.label = 22;

             case 22:
             case 23:
              return [ 3, 24 ];

             case 24:
              console.log(" endAniStart  ===this.curRoundIndex: 1111", this.curRoundIndex);
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundEndAniComplete);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameRed.prototype.showResultSpine = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!(1 == this.curRoundResult.win)) return [ 3, 1 ];
                cc.find("puzzleComponent/showSp", this.node).active = true;
                cc.find("puzzleComponent/tipSp", this.node).active = false;
                cc.find("puzzleComponent/heartContr", this.node).active = false;
                cc.tween(this.node).delay(1).call(function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                       case 0:
                        this.eleSpine.node.active = true;
                        this.roundNodeArr[this.curRoundIndex].active = false;
                        AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian03);
                        return [ 4, this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.happy, false, .5) ];

                       case 1:
                        _a.sent();
                        resolve();
                        return [ 2 ];
                      }
                    });
                  });
                }).start();
                return [ 3, 3 ];

               case 1:
                this.eleSpine.node.active = true;
                this.roundNodeArr[this.curRoundIndex].active = false;
                AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian04);
                return [ 4, this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.kunhuo, false, .5) ];

               case 2:
                _a.sent();
                resolve();
                _a.label = 3;

               case 3:
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          console.log(e);
        });
      };
      QuizGameRed.prototype.startAudioCallFunc = function() {
        var _this = this;
        cc.log("QuizGameBlue start record!");
        this.startRecordAudio("\u7ea2\u8272", QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.KeyWord, "images/hongse");
        false;
      };
      QuizGameRed.prototype.onRecordResult = function(result) {
        cc.log("onRecordResult ===== ", result);
        "ResultCb" == result.data.eventName && (result.data.success ? this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 1
        }) : this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: 0
        }));
      };
      QuizGameRed.prototype.playOpenAniStart1 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.playWalkSound(true);
          _this.eleMove1TargetPosWithAni(QuizGameRedConfig_1.EleSpineName.Walk, 3, _this.idlePosNode.position, QuizGameRedConfig_1.EleSpineName.stayWithBall).then(function() {
            _this.playWalkSound(false);
            resolve();
          });
        });
      };
      QuizGameRed.prototype.playOpenAniStart2 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.playWalkSound(true);
          _this.eleMove1TargetPosWithAni(QuizGameRedConfig_1.EleSpineName.Walk, 3, _this.idlePosNode.position, QuizGameRedConfig_1.EleSpineName.stayWithCar).then(function() {
            _this.playWalkSound(false);
            resolve();
          });
        });
      };
      QuizGameRed.prototype.playOpenAniStart3 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.playWalkSound(true);
          _this.eleMove1TargetPosWithAni(QuizGameRedConfig_1.EleSpineName.Walk, 3, _this.idlePosNode.position, QuizGameRedConfig_1.EleSpineName.stay).then(function() {
            _this.playWalkSound(false);
            AudioManager_1.default.playEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian04);
            _this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.kunhuo, false, .5).then(function() {
              _this.eleSpine.node.active = false;
              resolve();
            });
          });
        });
      };
      QuizGameRed.prototype.playOpenAniStart4 = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, this.playEleAnimation(QuizGameRedConfig_1.EleSpineName.stayWithBook, true, .5) ];

               case 1:
                _a.sent();
                cc.tween(this.game4Item).to(1, {
                  opacity: 255
                }).start();
                resolve();
                return [ 2 ];
              }
            });
          });
        });
      };
      QuizGameRed.prototype.eleMove2TargetPosWithAni = function(moveAniName, time, pos, stayAniName) {
        return __awaiter(this, void 0, void 0, function() {
          var scaleX;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.ce) ];

             case 1:
              _a.sent();
              scaleX = this.eleSpine.node.x > pos.x ? .5 : -.5;
              this.playEleAnimation(moveAniName, true, scaleX);
              return [ 4, this.move2TargetPos(time, pos) ];

             case 2:
              _a.sent();
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.bei) ];

             case 3:
              _a.sent();
              this.playEleAnimation(stayAniName, true, .5);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameRed.prototype.eleMove1TargetPosWithAni = function(moveAniName, time, pos, stayAniName) {
        return __awaiter(this, void 0, void 0, function() {
          var scaleX;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.ce) ];

             case 1:
              _a.sent();
              scaleX = this.eleSpine.node.x > pos.x ? .5 : -.5;
              this.playEleAnimation(moveAniName, true, scaleX);
              return [ 4, this.move2TargetPos(time, pos) ];

             case 2:
              _a.sent();
              return [ 4, this.changeSpine(QuizGameRedConfig_1.SpineType.zheng) ];

             case 3:
              _a.sent();
              this.playEleAnimation(stayAniName, true, .5);
              return [ 2 ];
            }
          });
        });
      };
      QuizGameRed.prototype.playEleAnimation = function(aniName, loop, scale) {
        var _this = this;
        void 0 === loop && (loop = true);
        void 0 === scale && (scale = .5);
        if (!loop) return new Promise(function(resolve, reject) {
          _this.eleSpine.node.scaleX = scale;
          var le = _this.eleSpine.setAnimation(0, aniName, loop);
          _this.eleSpine.setTrackCompleteListener(le, function() {
            resolve();
          });
        }).catch(function(e) {
          console.log(e);
        });
        Promise.resolve().then(function() {
          _this.eleSpine.node.scaleX = scale;
          var le = _this.eleSpine.setAnimation(0, aniName, loop);
        });
      };
      QuizGameRed.prototype.changeSpine = function(spineName) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          switch (spineName) {
           case QuizGameRedConfig_1.SpineType.ce:
            _this.eleSpine.skeletonData = _this.tuzice;
            break;

           case QuizGameRedConfig_1.SpineType.zheng:
            _this.eleSpine.skeletonData = _this.tuzizheng;
            break;

           case QuizGameRedConfig_1.SpineType.bei:
            _this.eleSpine.skeletonData = _this.tuzibei;
          }
          resolve();
        });
      };
      QuizGameRed.prototype.move2TargetPos = function(time, pos) {
        var _this = this;
        void 0 === time && (time = 1);
        return new Promise(function(resolve, reject) {
          cc.tween(_this.eleSpine.node).to(time, {
            position: pos
          }).call(function() {
            resolve();
          }).start();
        });
      };
      QuizGameRed.prototype.itemTouchCall = function(event, data) {
        this.unschedule(this.guidFun);
        var target = event.currentTarget;
        this.selectTargetNode = target;
        var worldPos = target.parent.convertToWorldSpaceAR(target.position);
        this.targetPos1 = this.node.convertToNodeSpaceAR(worldPos);
        var n = Number(data);
        this.selectCorrect = 0 == n;
        console.log(" ====this.selectCorrect: ", this.selectCorrect, " n: ", n);
        if (0 == n) {
          AudioManager_1.default.playEffect(QUIZGAMERED, "audios/game_right");
          this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 1
          });
        } else {
          AudioManager_1.default.playEffect(QUIZGAMERED, "audios/game_error");
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
      QuizGameRed.prototype.playWalkSound = function(play) {
        void 0 === play && (play = true);
        play ? AudioManager_1.default.playLoopEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian01) : AudioManager_1.default.stopLoopEffect(QUIZGAMERED, QuizGameRedConfig_1.QuizRedSoundConfig.SE_shoushifangjian01);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u5927\u8c61\u52a8\u753b"
      }) ], QuizGameRed.prototype, "eleSpine", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5927\u8c61\u5f85\u673a\u4f4d\u7f6e"
      }) ], QuizGameRed.prototype, "idlePosNode", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u4e66\u67b6"
      }) ], QuizGameRed.prototype, "game4Item", void 0);
      __decorate([ property({
        type: sp.SkeletonData,
        displayName: "\u5154\u5b50\u4fa7\u9762"
      }) ], QuizGameRed.prototype, "tuzice", void 0);
      __decorate([ property({
        type: sp.SkeletonData,
        displayName: "\u5154\u5b50\u6b63\u9762"
      }) ], QuizGameRed.prototype, "tuzizheng", void 0);
      __decorate([ property({
        type: sp.SkeletonData,
        displayName: "\u5154\u5b50\u80cc\u9762"
      }) ], QuizGameRed.prototype, "tuzibei", void 0);
      QuizGameRed = __decorate([ ccclass ], QuizGameRed);
      return QuizGameRed;
    }(TemplateGameBase_1.default);
    exports.default = QuizGameRed;
    cc._RF.pop();
  }, {
    "../../../common/structure/CompEnum": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../templateGame/scripts/TemplateGameBase": void 0,
    "./QuizGameRedConfig": "QuizGameRedConfig"
  } ]
}, {}, [ "QuizGameRed", "QuizGameRedConfig" ]);
//# sourceMappingURL=index.js.map
