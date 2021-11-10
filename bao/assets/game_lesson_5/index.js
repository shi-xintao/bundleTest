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
  gameMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c12feFtWr1A4pZeJ9Kgv346", "gameMain");
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
    var player_1 = require("./player");
    false;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameMain = function(_super) {
      __extends(gameMain, _super);
      function gameMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._player = null;
        _this.BGMID = -1;
        _this.vsLayerAudio = null;
        _this.gameOverAudio = null;
        _this.playerNode = null;
        _this.mask = null;
        _this.gameLayer = null;
        _this.gameOverLayer = null;
        _this.backgrounds = [];
        _this.missons = [];
        _this.vsNodes = [];
        _this.monsters = [];
        _this.playerHpNodes = [];
        _this.touchTime = 0;
        _this.missonIndex = 0;
        _this.playerHp = 5;
        _this.bgDefaultX = 0;
        return _this;
      }
      gameMain.prototype.onLoad = function() {
        this.playerNode && (this._player = this.playerNode.getComponent("player"));
        EventSystem_1.default.on("Day5_Game_Restart", this.GameRestart, this);
        EventSystem_1.default.on("Day5_Game_Next", this.GameQuit, this);
        EventSystem_1.default.on("Day5_Misson_Next", this.MissonComplete, this);
        EventSystem_1.default.on("Day5_Player_Hurt", this.playerHurt, this);
      };
      gameMain.prototype.fixScreen = function() {
        var bo = this.playerNode.getComponent(cc.Widget).bottom;
        var h = 190;
        var bg_h = 750;
        var real_h = cc.Canvas.instance.designResolution.height;
        var fix_h = h * (real_h / bg_h);
        this.playerNode.getComponent(cc.Widget).bottom = bo + fix_h - h;
        for (var i = 0; i < this.monsters.length; i++) this.monsters[i].getComponent(cc.Widget).bottom += fix_h - h;
      };
      gameMain.prototype.start = function() {
        this.fixScreen();
        this.initGame();
        this.playerHpNodes[0].getComponent(cc.Animation).on("finished", this.gameOverBack.bind(this), this);
      };
      gameMain.prototype.gameOverBack = function() {
        0 == this.playerHp && this.GameOver();
      };
      gameMain.prototype.initGame = function() {
        var _this = this;
        this.bgDefaultX = this.backgrounds[0].x;
        cc.log(this.bgDefaultX);
        AudioManager_1.default.playMusic("game_lesson_5", "res/audios/BGM_dachuangguan-01");
        cc.tween(this.node).delay(1).call(function() {
          _this._player.playerRun(3, 400, 1);
        }).delay(4).call(function() {
          _this._player.playerRun(1, 450, 2);
        }).delay(2).call(function() {
          _this.changeMisson(_this.missonIndex);
        }).start();
      };
      gameMain.prototype.playerHurt = function() {
        cc.log("player hp -1");
        this.playerHp -= 1;
        this.playerHpNodes[this.playerHp].getComponent(cc.Animation).play("hurt");
      };
      gameMain.prototype.movePlayer = function(event) {
        var _this = this;
        cc.log("touch");
        this.mask.active = true;
        this._player.playerRun(1, 150);
        this.scheduleOnce(function() {
          _this.mask.active = false;
          _this.touchTime += 1;
          if (3 == _this.touchTime) {
            _this.node.off("touchend", _this.movePlayer, _this);
            _this.scheduleOnce(function() {
              _this.changeMisson(_this.missonIndex);
            }, 1);
          }
        }, 1);
      };
      gameMain.prototype.changeMisson = function(index) {
        var _this = this;
        if (index >= 3) {
          EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
          return;
        }
        var vsn = cc.instantiate(this.vsNodes[index]);
        this.node.addChild(vsn);
        vsn.y = 900;
        vsn.getComponent(cc.Animation).on("finished", function() {
          vsn.destroy();
        }, this);
        vsn.getComponent(cc.Animation).play();
        cc.audioEngine.play(this.vsLayerAudio, false, 1);
        this.scheduleOnce(function() {
          var game = cc.instantiate(_this.missons[index]);
          _this.gameLayer.addChild(game);
          _this.playerNode.active = false;
          _this.monsters[index].active = false;
          EventSystem_1.default.emit("Player_Hp_Init", _this.playerHp);
        }, 1);
      };
      gameMain.prototype.MissonComplete = function() {
        var _this = this;
        this.missonIndex += 1;
        this.playerNode.active = true;
        for (var i = this.playerHp; i < 5; i++) this._player.hearts[i].getChildByName("heart1").active = false;
        this._player.playerRun(6, 0, 2);
        for (var i = 0; i < 4; i++) cc.tween(this.backgrounds[i]).by(6, {
          x: -1334
        }).start();
        this.scheduleOnce(function() {
          _this.changeMisson(_this.missonIndex);
        }, 6);
      };
      gameMain.prototype.GameOver = function() {
        cc.log("GameOver ========>");
        var node = cc.instantiate(this.gameOverLayer);
        this.node.addChild(node);
        cc.audioEngine.stop(this.BGMID);
        cc.audioEngine.play(this.gameOverAudio, false, 1);
        node.name = "gameOverLayer";
        this.gameLayer.destroyAllChildren();
      };
      gameMain.prototype.GameRestart = function() {
        var _this = this;
        this.gameLayer.destroyAllChildren();
        this.playerHp = 5;
        this._player.reStartPlayer();
        this.touchTime = 0;
        this.missonIndex = 0;
        this.playerNode.x = -867;
        this.playerNode.active = true;
        this.monsters.forEach(function(node) {
          node.active = true;
        });
        this.backgrounds.forEach(function(node, i) {
          node.active = false;
          node.x = 1333 * i;
        });
        this.playerHpNodes.forEach(function(node) {
          node.getChildByName("heart1").getComponent(cc.Sprite).fillRange = 1;
        });
        this.scheduleOnce(function() {
          _this.backgrounds.forEach(function(node, i) {
            node.active = true;
            node.getComponent(cc.Widget).left = 1333 * i;
          });
        });
        this.initGame();
      };
      gameMain.prototype.GameQuit = function(event, data) {};
      gameMain.prototype.onDestroy = function() {
        EventSystem_1.default.off("Day5_Game_Restart", this.GameRestart, this);
        EventSystem_1.default.off("Day5_Game_Next", this.GameQuit, this);
        EventSystem_1.default.off("Day5_Misson_Next", this.MissonComplete, this);
        EventSystem_1.default.off("Day5_Player_Hurt", this.playerHurt, this);
        this.playerHpNodes[0].getComponent(cc.Animation).on("finished", this.gameOverBack.bind(this), this);
      };
      __decorate([ property({
        type: player_1.default,
        displayName: "player"
      }) ], gameMain.prototype, "_player", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], gameMain.prototype, "vsLayerAudio", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], gameMain.prototype, "gameOverAudio", void 0);
      __decorate([ property(cc.Node) ], gameMain.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], gameMain.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], gameMain.prototype, "gameLayer", void 0);
      __decorate([ property(cc.Prefab) ], gameMain.prototype, "gameOverLayer", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], gameMain.prototype, "backgrounds", void 0);
      __decorate([ property({
        type: [ cc.Prefab ]
      }) ], gameMain.prototype, "missons", void 0);
      __decorate([ property({
        type: [ cc.Prefab ]
      }) ], gameMain.prototype, "vsNodes", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], gameMain.prototype, "monsters", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], gameMain.prototype, "playerHpNodes", void 0);
      gameMain = __decorate([ ccclass ], gameMain);
      return gameMain;
    }(cc.Component);
    exports.default = gameMain;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./player": "player"
  } ],
  gameOverLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7947lazuZDHqQ1D+dpmdog", "gameOverLayer");
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameOverLayer = function(_super) {
      __extends(gameOverLayer, _super);
      function gameOverLayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      gameOverLayer.prototype.onLoad = function() {};
      gameOverLayer.prototype.start = function() {};
      gameOverLayer.prototype.replayBtnCall = function(event, data) {
        event.target.active = false;
        cc.log("replayBtnCall1111");
        EventSystem_1.default.emit("Day5_Game_Restart");
        this.node.destroy();
      };
      gameOverLayer.prototype.nextBtnCall = function(event, data) {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_BACK);
      };
      gameOverLayer = __decorate([ ccclass ], gameOverLayer);
      return gameOverLayer;
    }(cc.Component);
    exports.default = gameOverLayer;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0
  } ],
  mission_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aec65U9501DZYwRYSyjzdc3", "mission_1");
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var player_1 = require("./player");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var mission1 = function(_super) {
      __extends(mission1, _super);
      function mission1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._player = null;
        _this.playerNode = null;
        _this.monster = null;
        _this.shields = [];
        _this.gameAudios = [];
        _this.attackAudio = null;
        _this.monsterTurn = 0;
        _this.playerTurn = 0;
        _this.recordTimes = 0;
        _this.touchGameAnswer = [ 1, 0, 2 ];
        _this.wordData = [ "\u7ea2\u8272", "\u9ec4\u8272", "\u84dd\u8272" ];
        _this.monsterSkin = [ "hongse", "huangse", "lanse" ];
        _this.isTest = false;
        return _this;
      }
      mission1.prototype.onLoad = function() {
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      mission1.prototype.start = function() {
        var _this = this;
        this.playerNode && (this._player = this.playerNode.getComponent("player"));
        this.shields.forEach(function(node, i) {
          node.getComponent(cc.Button).interactable = false;
        });
        this.scheduleOnce(function() {
          _this.runGameMonsterTurn(_this.monsterTurn);
        }, 3);
      };
      mission1.prototype.playGameWord = function() {
        cc.audioEngine.play(this.gameAudios[this.monsterTurn], false, 1);
      };
      mission1.prototype.runGameMonsterTurn = function(index) {
        cc.audioEngine.play(this.gameAudios[index], false, 1);
        this.schedule(this.playGameWord, 5);
        this.shields.forEach(function(node, i) {
          node.active = true;
          node.y = 100 - 130 * i;
          node.getComponent(cc.Button).interactable = true;
        });
      };
      mission1.prototype.runGamePlayerTurn = function(index) {
        var _this = this;
        var recordData = {
          evaluatingType: 1,
          evaluatingText: this.wordData[index],
          tryTimes: 0,
          evaluationScore: 30,
          recordTime: 3
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "initComponent",
          extra: recordData
        });
        var url = "res/audios/" + this.monsterSkin[index];
        var configs = [ "img_red", "img_yellow", "img_blue" ];
        var imgUrl = "res/images/" + configs[index];
        var startRecordData = {
          evaluatingText: this.wordData[index],
          bundleName: "game_lesson_5",
          audioUrl: url,
          iconPath: imgUrl
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "startRecord",
          extra: startRecordData
        });
        this.isTest && this.scheduleOnce(function() {
          _this.playerWin(_this.playerTurn, 2);
        }, 3);
      };
      mission1.prototype.recordResult = function(result) {
        console.log("recordResult" + result.data);
        "ResultCb" == result.data.eventName && (result.data.success ? this.playerWin(this.playerTurn, 2) : 0 == this.recordTimes ? this.monsterWin(this.playerTurn, 2) : this.playerWin(this.playerTurn, 2));
      };
      mission1.prototype.shieldTouch = function(event, data) {
        var _this = this;
        this.unschedule(this.playGameWord);
        var n = Number(data);
        if (n == this.touchGameAnswer[this.monsterTurn]) {
          for (var i = 0; i < this.shields.length; i++) {
            n != i && (this.shields[i].active = false);
            this.shields[i].getComponent(cc.Button).interactable = false;
          }
          cc.tween(this.shields[n]).to(1, {
            y: 0
          }).call(function() {
            _this.playerWin(_this.monsterTurn, 1);
          }).delay(1).call(function() {
            _this.shields[n].active = false;
          }).start();
        } else {
          for (var i = 0; i < this.shields.length; i++) this.shields[i].active = false;
          this.monsterWin(this.monsterTurn, 1);
        }
      };
      mission1.prototype.monsterWin = function(index, type) {
        var _this = this;
        if (1 == type) {
          this.monster.setSkin(this.monsterSkin[index]);
          this.monsterTurn += 1;
          this.monster.clearTracks();
          this.monster.setCompleteListener(function() {
            _this.monster.setSkin("default");
            _this.monster.setCompleteListener(function() {});
            _this.monster.addAnimation(0, "happy", false);
            _this.monster.addAnimation(0, "stay", false);
          });
          this.monster.setAnimation(0, "reng", false);
          this.scheduleOnce(function() {
            _this._player.onHurt();
            cc.audioEngine.play(_this.attackAudio, false, 1);
          }, .5);
          if (0 == this._player.hp) return;
          this.scheduleOnce(function() {
            _this.runGamePlayerTurn(_this.playerTurn);
          }, 2.5);
        } else {
          this.recordTimes += 1;
          this._player.PlayerAtkWrong(index);
          if (0 == this._player.hp) return;
          this.scheduleOnce(function() {
            if (3 == _this.playerTurn) {
              _this.gameWin();
              return;
            }
            _this.runGamePlayerTurn(_this.playerTurn);
          }, 3.5);
        }
      };
      mission1.prototype.playerWin = function(index, type) {
        var _this = this;
        if (1 == type) {
          this.monster.setSkin(this.monsterSkin[index]);
          this.monsterTurn += 1;
          this.monster.clearTracks();
          this.monster.setCompleteListener(function() {
            _this.monster.setSkin("default");
            _this.monster.setCompleteListener(function() {});
            _this.monster.addAnimation(0, "stay", false);
          });
          this.monster.setAnimation(0, "reng2", false);
          this.scheduleOnce(function() {
            cc.audioEngine.play(_this.attackAudio, false, 1);
          }, .5);
          this.scheduleOnce(function() {
            _this.runGamePlayerTurn(_this.playerTurn);
          }, 2.5);
        } else {
          this.playerTurn += 1;
          this._player.PlayerAtkRight(index);
          this._player.node.zIndex = 99;
          this.scheduleOnce(function() {
            cc.audioEngine.play(_this.attackAudio, false, 1);
            _this.monster.clearTracks();
            _this.monster.setAnimation(0, "yun", false);
            _this.monster.addAnimation(0, "stay", true);
          }, 1.5);
          this.scheduleOnce(function() {
            _this._player.node.zIndex = 0;
            if (3 == _this.playerTurn) {
              _this.gameWin();
              return;
            }
            _this.runGameMonsterTurn(_this.monsterTurn);
            _this.recordTimes = 0;
          }, 3.5);
        }
      };
      mission1.prototype.gameWin = function() {
        var _this = this;
        cc.log(this._player.hp);
        this.monster.clearTracks();
        this.monster.setAnimation(0, "yun2", false);
        cc.tween(this.node).delay(2).to(1.5, {
          y: 900
        }).call(function() {
          _this.node.destroy();
          EventSystem_1.default.emit("Day5_Misson_Next");
        }).start();
      };
      mission1.prototype.onDestroy = function() {
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
        this.recordTimes = 0;
      };
      __decorate([ property(player_1.default) ], mission1.prototype, "_player", void 0);
      __decorate([ property(cc.Node) ], mission1.prototype, "playerNode", void 0);
      __decorate([ property(sp.Skeleton) ], mission1.prototype, "monster", void 0);
      __decorate([ property({
        type: cc.Node
      }) ], mission1.prototype, "shields", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], mission1.prototype, "gameAudios", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], mission1.prototype, "attackAudio", void 0);
      mission1 = __decorate([ ccclass ], mission1);
      return mission1;
    }(cc.Component);
    exports.default = mission1;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./player": "player"
  } ],
  mission_2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ebf9wSqbBOl696RDAlCAbZ", "mission_2");
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
    var player_1 = require("./player");
    var events_1 = require("../../../kit/events/events");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var mission2 = function(_super) {
      __extends(mission2, _super);
      function mission2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._player = null;
        _this.playerNode = null;
        _this.monsters = [];
        _this.hulu = null;
        _this.gameAudios = [];
        _this.wordData = [ "\u84dd\u8272", "\u7ea2\u8272", "\u9ec4\u8272" ];
        _this.monsterSkin = [ "lanse", "hongse", "huangse" ];
        _this.gameIndex = 0;
        _this.isTest = false;
        return _this;
      }
      mission2.prototype.onLoad = function() {
        this.playerNode && (this._player = this.playerNode.getComponent("player"));
        EventSystem_1.default.on("Player_Hp_Init", this.changPlayerHp, this);
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      mission2.prototype.start = function() {
        var _this = this;
        this.hulu.active = false;
        this.scheduleOnce(function() {
          _this.gameRun(_this.gameIndex);
        }, 4);
      };
      mission2.prototype.changPlayerHp = function(data) {
        this._player.hp = data.data;
        for (var i = this._player.hp; i < 5; i++) this._player.hearts[i].getChildByName("heart1").active = false;
      };
      mission2.prototype.gameRun = function(index) {
        var _this = this;
        if (index >= 3) {
          cc.tween(this.node).delay(2).to(1.5, {
            y: 900
          }).call(function() {
            _this.node.destroy();
            EventSystem_1.default.emit("Day5_Misson_Next");
            EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, _this.recordResult, _this);
          }).start();
          return;
        }
        var recordData = {
          evaluatingType: 1,
          evaluatingText: this.wordData[index],
          tryTimes: 0,
          evaluationScore: 30,
          recordTime: 3
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "initComponent",
          extra: recordData
        });
        var url = "res/audios/" + this.monsterSkin[index];
        var configs = [ "img_blue", "img_red", "img_yellow" ];
        var imgUrl = "res/images/" + configs[index];
        var startRecordData = {
          evaluatingText: this.wordData[index],
          bundleName: "game_lesson_5",
          audioUrl: url,
          iconPath: imgUrl
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "startRecord",
          extra: startRecordData
        });
        this.isTest && this.scheduleOnce(function() {
          _this.checkResult(1);
        }, 3);
      };
      mission2.prototype.recordResult = function(result) {
        console.log("recordResult" + result.data);
        "ResultCb" == result.data.eventName && (result.data.success ? this.checkResult(1) : this.checkResult(2));
      };
      mission2.prototype.checkResult = function(type) {
        var _this = this;
        if (1 == type) {
          this.hulu.active = true;
          var sk = this.hulu.getComponent(sp.Skeleton);
          sk.clearTracks();
          sk.setAnimation(0, "hulu", false);
          cc.tween(this.monsters[this.gameIndex]).to(2, {
            opacity: 0,
            x: -392,
            y: 168,
            scaleX: -.1,
            scaleY: .1
          }).call(function() {
            _this.hulu.active = false;
            _this.monsters[_this.gameIndex].active = false;
            _this.gameIndex += 1;
            _this.gameRun(_this.gameIndex);
          }).start();
        } else {
          this.hulu.active = true;
          var sk = this.hulu.getComponent(sp.Skeleton);
          var defaultX_1 = this.playerNode.x;
          var defaultY_1 = this.playerNode.y;
          sk.clearTracks();
          sk.setAnimation(0, "hulu", false);
          cc.tween(this.playerNode).to(2, {
            opacity: 0,
            x: -392,
            y: 168,
            scaleX: .1,
            scaleY: .1
          }).delay(1).call(function() {
            _this.playerNode.opacity = 255;
            _this.playerNode.x = defaultX_1;
            _this.playerNode.y = defaultY_1;
            _this.playerNode.scaleX = .7;
            _this.playerNode.scaleY = .7;
            _this._player.onHurt_2();
            _this.hulu.active = false;
            _this.gameIndex += 1;
          }).delay(1).call(function() {
            if (0 == _this._player.hp) return;
            _this.gameRun(_this.gameIndex);
          }).start();
        }
      };
      mission2.prototype.onDestroy = function() {
        EventSystem_1.default.off("Player_Hp_Init", this.changPlayerHp, this);
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      __decorate([ property(player_1.default) ], mission2.prototype, "_player", void 0);
      __decorate([ property(cc.Node) ], mission2.prototype, "playerNode", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], mission2.prototype, "monsters", void 0);
      __decorate([ property(cc.Node) ], mission2.prototype, "hulu", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], mission2.prototype, "gameAudios", void 0);
      mission2 = __decorate([ ccclass ], mission2);
      return mission2;
    }(cc.Component);
    exports.default = mission2;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./player": "player"
  } ],
  mission_3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f875cmCC85JSZ1TbICfix1i", "mission_3");
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
    var player_1 = require("./player");
    var events_1 = require("../../../kit/events/events");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var TimerSystem_1 = require("../../../kit/system/timer/TimerSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var mission2 = function(_super) {
      __extends(mission2, _super);
      function mission2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._player = null;
        _this.playerNode = null;
        _this.handNode = null;
        _this.monsters = [];
        _this.BallItem = [];
        _this.gameAudios = [];
        _this.targetsPos = [];
        _this.wordData = "\u6c14\u7403";
        _this.ballMaxNum = 10;
        _this.ballNumNow = 0;
        _this.gameIndex = 0;
        _this.isTest = false;
        return _this;
      }
      mission2.prototype.onLoad = function() {
        this.playerNode && (this._player = this.playerNode.getComponent("player"));
        EventSystem_1.default.on("Ball_On_Clicked", this.CountBall, this);
        EventSystem_1.default.on("Player_Hp_Init", this.changPlayerHp, this);
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      mission2.prototype.start = function() {
        var _this = this;
        this.scheduleOnce(function() {
          _this.gameBegin();
          _this.addGuidHandTimer();
        }, 4);
      };
      mission2.prototype.addGuidHandTimer = function() {
        var _this = this;
        this.guildHandTimer && this.clearGuidHand();
        var t = 4;
        this.guildHandTimer = TimerSystem_1.default.instance.doOnce(1e3 * t, function() {
          if (!cc.isValid(_this.node)) return;
          _this.handNode.active = true;
          _this.handNode.zIndex = cc.macro.MAX_ZINDEX;
        }, this);
      };
      mission2.prototype.clearGuidHand = function() {
        TimerSystem_1.default.instance.clearTimer(this.guildHandTimer);
        this.guildHandTimer = null;
        this.handNode.active = false;
      };
      mission2.prototype.CountBall = function() {
        var _this = this;
        this.ballNumNow += 1;
        this.ballMaxNum == this.ballNumNow && this.scheduleOnce(function() {
          _this.clearGuidHand();
          _this.gameRun(_this.gameIndex);
        }, 1.5);
        this.addGuidHandTimer();
      };
      mission2.prototype.gameBegin = function() {
        for (var i = 0; i < this.ballMaxNum; i++) {
          var n = this.getBallColorNum();
          var node = cc.instantiate(this.BallItem[n]);
          this.node.addChild(node);
          var x = 100 * i - 450;
          var y = -150;
          node.x = x;
          node.y = y;
          var dis = this.targetsPos[i].y;
          cc.tween(node).to(1, {
            y: dis
          }).start();
        }
      };
      mission2.prototype.getBallColorNum = function() {
        var n = 100 * Math.random();
        return n <= 33 ? 0 : n > 33 && n <= 66 ? 1 : 2;
      };
      mission2.prototype.changPlayerHp = function(data) {
        this._player.hp = data.data;
        for (var i = this._player.hp; i < 5; i++) this._player.hearts[i].getChildByName("heart1").active = false;
      };
      mission2.prototype.gameRun = function(index) {
        var _this = this;
        cc.log("\u5f53\u524d\u8840\u91cf");
        if (this._player.hp <= 0) return;
        var recordData = {
          evaluatingType: 1,
          evaluatingText: this.wordData[index],
          tryTimes: 0,
          evaluationScore: 30,
          recordTime: 3
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "initComponent",
          extra: recordData
        });
        var startRecordData = {
          evaluatingText: this.wordData[index],
          bundleName: "game_lesson_5",
          audioUrl: "res/audios/qiqiu",
          iconPath: "res/images/img_qiqiu"
        };
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "startRecord",
          extra: startRecordData
        });
        this.isTest && this.scheduleOnce(function() {
          _this.checkResult(2);
        }, 3);
      };
      mission2.prototype.recordResult = function(result) {
        console.log("recordResult", result.data);
        "ResultCb" == result.data.eventName && (result.data.success ? this.checkResult(1) : this.checkResult(2));
      };
      mission2.prototype.checkResult = function(type) {
        var _this = this;
        if (1 == type) {
          this.monsters[0].getComponent(sp.Skeleton).clearTracks();
          this.monsters[0].getComponent(sp.Skeleton).setAnimation(0, "cry", false);
          cc.tween(this.monsters[0]).by(2, {
            y: 900
          }).call(function() {
            EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
          }).start();
        } else {
          this._player.hp -= 1;
          this._player.playerSp.clearTracks();
          this._player.playerSp.setAnimation(0, "fei", false);
          var px_1 = this.playerNode.x;
          var py_1 = this.playerNode.y;
          cc.tween(this.playerNode).by(2, {
            y: 900
          }).call(function() {
            _this.playerNode.x = px_1;
            _this.playerNode.y = py_1;
            _this._player.playerSp.addAnimation(0, "stay", true);
            if (0 == _this._player.hp) {
              _this._player.playerSp.clearTracks();
              _this._player.playerSp.addAnimation(0, "yun", false);
              _this.scheduleOnce(function() {
                EventSystem_1.default.emit("Day5_Player_Hurt");
              }, 1.5);
            } else {
              EventSystem_1.default.emit("Day5_Player_Hurt");
              _this.gameRun(_this.gameIndex);
            }
          }).start();
        }
      };
      mission2.prototype.onDestroy = function() {
        EventSystem_1.default.off("Ball_On_Clicked", this.CountBall, this);
        EventSystem_1.default.off("Player_Hp_Init", this.changPlayerHp, this);
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.recordResult, this);
      };
      __decorate([ property(player_1.default) ], mission2.prototype, "_player", void 0);
      __decorate([ property(cc.Node) ], mission2.prototype, "playerNode", void 0);
      __decorate([ property(cc.Node) ], mission2.prototype, "handNode", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], mission2.prototype, "monsters", void 0);
      __decorate([ property({
        type: [ cc.Prefab ]
      }) ], mission2.prototype, "BallItem", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], mission2.prototype, "gameAudios", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], mission2.prototype, "targetsPos", void 0);
      mission2 = __decorate([ ccclass ], mission2);
      return mission2;
    }(cc.Component);
    exports.default = mission2;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../../../kit/system/timer/TimerSystem": void 0,
    "./player": "player"
  } ],
  player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6fcf7ojxCNNfKY1SFOQ4BNf", "player");
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var player = function(_super) {
      __extends(player, _super);
      function player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.playerSp = null;
        _this.hearts = [];
        _this.heartContainer = null;
        _this.skins = [ "hongqiu", "huangqiu", "lanqiu" ];
        _this.hp = 5;
        return _this;
      }
      player.prototype.start = function() {};
      player.prototype.reStartPlayer = function() {
        this.hp = 5;
        this.hearts.forEach(function(node, i) {
          node.active = true;
          node.getChildByName("heart1").active = true;
          node.getComponent(cc.Sprite).fillRange = 1;
        });
      };
      player.prototype.playerRun = function(sec, distance, type) {
        var _this = this;
        void 0 === distance && (distance = 0);
        void 0 === type && (type = 1);
        this.playerSp.timeScale = 1 == type ? 1 : 2;
        this.playerSp.clearTracks();
        this.playerSp.setAnimation(0, "walk", false);
        this.playerSp.addAnimation(0, "walk1", true);
        this.scheduleOnce(function() {
          _this.playerSp.clearTracks();
          _this.playerSp.setAnimation(0, "walk2", false);
          _this.playerSp.addAnimation(0, "stay", true);
        }, sec);
        cc.tween(this.node).by(sec, {
          x: distance
        }).start();
      };
      player.prototype.onHurt = function() {
        var _this = this;
        this.hp -= 1;
        this.scheduleOnce(function() {
          _this.hearts[_this.hp].getComponent(cc.Animation).play("hurt");
          0 == _this.hp && _this.hearts[_this.hp].getComponent(cc.Animation).on("finished", function() {
            _this.playerSp.clearTracks();
            _this.playerSp.setAnimation(0, "yun", false);
            _this.scheduleOnce(function() {}, 1.5);
          });
        }, .5);
        this.playerSp.clearTracks();
        this.playerSp.setAnimation(0, "beida", false);
        this.playerSp.addAnimation(0, "stay", true);
        EventSystem_1.default.emit("Day5_Player_Hurt");
      };
      player.prototype.onHurt_2 = function() {
        var _this = this;
        this.hp -= 1;
        this.scheduleOnce(function() {
          _this.hearts[_this.hp].getComponent(cc.Animation).play("hurt");
          0 == _this.hp && _this.hearts[_this.hp].getComponent(cc.Animation).on("finished", function() {
            _this.playerSp.clearTracks();
            _this.playerSp.setAnimation(0, "yun", false);
            _this.scheduleOnce(function() {}, 1.5);
          });
        }, .5);
        EventSystem_1.default.emit("Day5_Player_Hurt");
      };
      player.prototype.Playerfly = function() {
        this.hp -= 1;
        this.playerSp.clearTracks();
        this.playerSp.setAnimation(0, "fei", false);
      };
      player.prototype.PlayerAtkRight = function(index) {
        var _this = this;
        this.playerSp.setSkin(this.skins[index]);
        this.playerSp.clearTracks();
        this.playerSp.setCompleteListener(function() {
          _this.playerSp.setSkin("default");
          _this.playerSp.clearTracks();
          _this.playerSp.setCompleteListener(function() {});
          _this.playerSp.setAnimation(0, "stay", false);
        });
        this.playerSp.setAnimation(0, "reng", false);
      };
      player.prototype.PlayerAtkWrong = function(index) {
        var _this = this;
        this.playerSp.setSkin(this.skins[index]);
        this.playerSp.clearTracks();
        this.playerSp.setCompleteListener(function() {
          _this.playerSp.setSkin("default");
          _this.playerSp.clearTracks();
          _this.playerSp.setCompleteListener(function() {});
          _this.playerSp.setAnimation(0, "stay", false);
          _this.onHurt_2();
        });
        this.playerSp.setAnimation(0, "reng2", false);
      };
      player.prototype.PlayerDie = function() {};
      __decorate([ property(sp.Skeleton) ], player.prototype, "playerSp", void 0);
      __decorate([ property({
        type: [ cc.Node ]
      }) ], player.prototype, "hearts", void 0);
      __decorate([ property(cc.Layout) ], player.prototype, "heartContainer", void 0);
      player = __decorate([ ccclass ], player);
      return player;
    }(cc.Component);
    exports.default = player;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0
  } ],
  qiqiu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da011R4Qb5CV5UyXJkhOJFf", "qiqiu");
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.qiqiu = null;
        _this.qiqiu2 = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.onClickCall = function(event, data) {
        var _this = this;
        var n = Number(data);
        var id = cc.audioEngine.play(this.qiqiu, false, 1);
        cc.audioEngine.setFinishCallback(id, function() {
          cc.audioEngine.play(_this.qiqiu2, false, 1);
        });
        var spName = "";
        switch (n) {
         case 0:
          spName = "hong-bao";
          break;

         case 1:
          spName = "huang-bao";
          break;

         case 2:
          spName = "lan-bao";
        }
        var _sp = this.node.getComponent(sp.Skeleton);
        _sp.clearTracks();
        _sp.setCompleteListener(function() {
          _this.node.destroy();
          EventSystem_1.default.emit("Ball_On_Clicked");
        });
        _sp.setAnimation(0, spName, false);
        this.node.getComponent(cc.Button).interactable = false;
      };
      __decorate([ property({
        type: cc.AudioClip
      }) ], NewClass.prototype, "qiqiu", void 0);
      __decorate([ property({
        type: cc.AudioClip
      }) ], NewClass.prototype, "qiqiu2", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0
  } ]
}, {}, [ "gameMain", "gameOverLayer", "mission_1", "mission_2", "mission_3", "player", "qiqiu" ]);
//# sourceMappingURL=index.js.map
