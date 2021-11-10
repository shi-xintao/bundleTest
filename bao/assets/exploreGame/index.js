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
  CameraMove: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c90eagcHe1LFoKeL4ad6Wnt", "CameraMove");
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
    var ExploreGameData_1 = require("./ExploreGameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraMove = function(_super) {
      __extends(CameraMove, _super);
      function CameraMove() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.moveSpeed = 5;
        _this.delta = 1;
        _this.isTouch = false;
        _this.clickMove = {
          x: false,
          y: false
        };
        _this.touchDir = cc.v2(0, 0);
        _this.movePos = cc.v2(0, 0);
        return _this;
      }
      CameraMove_1 = CameraMove;
      CameraMove.prototype.start = function() {
        this.camera = this.node.getChildByName("camera");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        EventSystem_1.default.on(ExploreGameData_1.default.MoveCamera, this.moveCamera, this);
        CameraMove_1.maxX = this.node.width / 2 - cc.winSize.width / 2;
        CameraMove_1.maxY = this.node.height / 2 - cc.winSize.height / 2;
      };
      CameraMove.prototype.update = function(dt) {
        if (!ExploreGameData_1.default.instance.canTouch) {
          this.clickMove = {
            x: false,
            y: false
          };
          this.isTouch = false;
          return;
        }
        if (this.isTouch) {
          this.target.position = this.target.position.add(cc.v3(this.touchDir.x, this.touchDir.y).multiply(cc.v3(this.moveSpeed, this.moveSpeed)));
          this.camera.position = this.target.position;
          this.check();
          var dir = 0;
          this.touchDir.x > 0 ? dir = 1 : this.touchDir.x < 0 && (dir = -1);
          EventSystem_1.default.emit(ExploreGameData_1.default.PlayerMove, dir);
        }
        if (this.clickMove.x) {
          if (Math.abs(this.target.x - this.movePos.x) <= 3) {
            this.touchDir.x = 0;
            this.clickMove.x = false;
          }
          this.check();
        }
        if (this.clickMove.y) {
          if (Math.abs(this.target.y - this.movePos.y) <= 3) {
            this.touchDir.y = 0;
            this.clickMove.y = false;
          }
          this.check();
          EventSystem_1.default.emit(ExploreGameData_1.default.PlayerMove, 0);
        }
        if (!this.clickMove.x && !this.clickMove.y && 0 == this.touchDir.y && 0 == this.touchDir.x) {
          this.isTouch = false;
          EventSystem_1.default.emit(ExploreGameData_1.default.PlayerMoveEnd);
        }
      };
      CameraMove.prototype.moveCamera = function(event) {
        event && event.data && "number" == typeof event.data.x ? cc.tween(this.camera).to(.3, {
          x: event.data.x
        }).start() : this.camera.x = this.target.x;
        event && event.data && "number" == typeof event.data.y ? cc.tween(this.camera).to(.3, {
          y: event.data.y
        }).start() : this.camera.y = this.target.y;
        this.check();
      };
      CameraMove.prototype.onTouchStart = function(event) {
        if (!ExploreGameData_1.default.instance.canTouch) return;
        this.touchDir = cc.v2(0, 0);
        this.clickMove = {
          x: false,
          y: false
        };
        this.setTouchDir(event.getLocation());
        this.isTouch = true;
        EventSystem_1.default.emit(ExploreGameData_1.default.PlayerMoveStart);
      };
      CameraMove.prototype.setTouchDir = function(location) {
        var pos = this.node.convertToNodeSpaceAR(location);
        var dist = cc.v2(0, 0);
        dist.x = pos.x + this.camera.x;
        dist.y = pos.y + this.camera.y;
        var targetPos = cc.v2(this.target.position.x, this.target.position.y);
        var direction = dist.sub(targetPos).normalize();
        this.touchDir = direction;
      };
      CameraMove.prototype.onTouchMove = function(event) {
        if (!ExploreGameData_1.default.instance.canTouch) return;
        this.setTouchDir(event.getLocation());
      };
      CameraMove.prototype.onTouchEnd = function(event) {
        if (!ExploreGameData_1.default.instance.canTouch) return;
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.movePos.x = pos.x + this.camera.x;
        this.movePos.y = pos.y + this.camera.y;
        this.clickMove = {
          x: true,
          y: true
        };
      };
      CameraMove.prototype.check = function() {
        this.camera.x > CameraMove_1.maxX && (this.camera.x = CameraMove_1.maxX);
        this.camera.x < -CameraMove_1.maxX && (this.camera.x = -CameraMove_1.maxX);
        this.camera.y > CameraMove_1.maxY && (this.camera.y = CameraMove_1.maxY);
        this.camera.y < -CameraMove_1.maxY && (this.camera.y = -CameraMove_1.maxY);
        if (!this.target) return;
        var maxXTarget = this.node.width / 2 - this.target.width / 2 - this.target.width / 2;
        var maxYTarget = this.node.height / 2 - this.target.height / 2 - this.target.height / 2;
        if (this.target.x > maxXTarget) {
          this.target.x = maxXTarget;
          this.clickMove.x = false;
          this.touchDir.x = 0;
        }
        if (this.target.x < -maxXTarget) {
          this.target.x = -maxXTarget;
          this.clickMove.x = false;
          this.touchDir.x = 0;
        }
        if (this.target.y > maxYTarget + this.target.height / 2) {
          this.target.y = maxYTarget + this.target.height / 2;
          this.clickMove.y = false;
          this.touchDir.y = 0;
        }
        if (this.target.y < -maxYTarget) {
          this.target.y = -maxYTarget;
          this.touchDir.y = 0;
          this.clickMove.y = false;
        }
      };
      CameraMove.prototype.onDestroy = function() {
        EventSystem_1.default.off(ExploreGameData_1.default.MoveCamera, this.moveCamera, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      var CameraMove_1;
      __decorate([ property(cc.Node) ], CameraMove.prototype, "target", void 0);
      CameraMove = CameraMove_1 = __decorate([ ccclass ], CameraMove);
      return CameraMove;
    }(cc.Component);
    exports.default = CameraMove;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreGameData": "ExploreGameData"
  } ],
  ExploreBall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ba22B9GnpCZKIyfYvfTEJi", "ExploreBall");
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
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreBall = function(_super) {
      __extends(ExploreBall, _super);
      function ExploreBall() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ExploreBall.prototype.onLoad = function() {};
      ExploreBall.prototype.onBeginContact = function(contact, selfCollider, otherCollider) {
        "wall" == otherCollider.node.name && ExploreGameAudio_1.default.instance.playBallCollision();
      };
      ExploreBall = __decorate([ ccclass ], ExploreBall);
      return ExploreBall;
    }(cc.Component);
    exports.default = ExploreBall;
    cc._RF.pop();
  }, {
    "./ExploreGameAudio": "ExploreGameAudio"
  } ],
  ExploreBaseGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47a39bJfuBK5bs6/FoQ+eA5", "ExploreBaseGame");
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
    var ExploreGameData_1 = require("./ExploreGameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreBaseGame = function(_super) {
      __extends(ExploreBaseGame, _super);
      function ExploreBaseGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentGame = ExploreGameData_1.ExploreGameType.Default;
        _this.camera = null;
        return _this;
      }
      ExploreBaseGame.prototype.onEnter = function(camera) {
        if (!camera) {
          this.exit();
          return;
        }
        this.camera = camera;
        EventSystem_1.default.emit(ExploreGameData_1.default.HidePlayer);
        cc.tween(camera.node).to(.5, {
          x: this.centerPos.x,
          y: this.centerPos.y
        }).start();
      };
      ExploreBaseGame.prototype.exit = function(data) {
        cc.log("\u6e38\u620f\u7ed3\u675f");
        EventSystem_1.default.emit(ExploreGameData_1.default.SubGameExit, data);
      };
      ExploreBaseGame.prototype.hidePlayer = function() {
        EventSystem_1.default.emit(ExploreGameData_1.default.HidePlayer);
      };
      ExploreBaseGame = __decorate([ ccclass ], ExploreBaseGame);
      return ExploreBaseGame;
    }(cc.Component);
    exports.default = ExploreBaseGame;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreGameData": "ExploreGameData"
  } ],
  ExploreGameAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1498+RYehJEI7sqbIUgToV", "ExploreGameAudio");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var ccclass = cc._decorator.ccclass;
    var ExploreGameAudio = function() {
      function ExploreGameAudio() {
        this.bundleName = "exploreGame";
      }
      ExploreGameAudio_1 = ExploreGameAudio;
      Object.defineProperty(ExploreGameAudio, "instance", {
        get: function() {
          ExploreGameAudio_1._instance || (ExploreGameAudio_1._instance = new ExploreGameAudio_1());
          return ExploreGameAudio_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      ExploreGameAudio.prototype.bgm = function() {
        AudioManager_1.default.playMusic(this.bundleName, "audio/BGM_shoushifangjian01");
      };
      ExploreGameAudio.prototype.playPress = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/press");
      };
      ExploreGameAudio.prototype.playDrag = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/drag");
      };
      ExploreGameAudio.prototype.playClick = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/dianyidian_1");
      };
      ExploreGameAudio.prototype.stopClick = function() {
        AudioManager_1.default.stopEffectByName(this.bundleName + "/audio/dianyidian_1");
      };
      ExploreGameAudio.prototype.playTigoInAudio = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_01");
      };
      ExploreGameAudio.prototype.playMoveAudio = function() {
        AudioManager_1.default.playLoopEffect(this.bundleName, "audio/SE_tansuowanjuwu_02");
      };
      ExploreGameAudio.prototype.stopMoveAudio = function() {
        AudioManager_1.default.stopLoopEffect(this.bundleName, "audio/SE_tansuowanjuwu_02");
      };
      ExploreGameAudio.prototype.playYuGang = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_03");
      };
      ExploreGameAudio.prototype.playBudaowengOnce = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_10");
      };
      ExploreGameAudio.prototype.playBudaoweng = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_09");
      };
      ExploreGameAudio.prototype.stopEffect = function() {
        AudioManager_1.default.stopEffect();
      };
      ExploreGameAudio.prototype.playXiaqiIn = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_11");
      };
      ExploreGameAudio.prototype.playXiaqiX = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_13");
      };
      ExploreGameAudio.prototype.playXiaqiO = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_12");
      };
      ExploreGameAudio.prototype.playXiaqiOve = function(isWin) {
        var audioName = isWin ? "audio/SE_tansuowanjuwu_14" : "audio/SE_tansuowanjuwu_15";
        AudioManager_1.default.playEffect(this.bundleName, audioName);
      };
      ExploreGameAudio.prototype.playPaopaoJi = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_16");
      };
      ExploreGameAudio.prototype.playPaoPao = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_17");
      };
      ExploreGameAudio.prototype.playBallIn = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_04");
      };
      ExploreGameAudio.prototype.playBallAudio = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_08");
      };
      ExploreGameAudio.prototype.playBallHand = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_06");
      };
      ExploreGameAudio.prototype.playBallEnergy = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_05");
      };
      ExploreGameAudio.prototype.playBallCollision = function() {
        AudioManager_1.default.playEffect(this.bundleName, "audio/SE_tansuowanjuwu_07");
      };
      var ExploreGameAudio_1;
      ExploreGameAudio._instance = null;
      ExploreGameAudio = ExploreGameAudio_1 = __decorate([ ccclass ], ExploreGameAudio);
      return ExploreGameAudio;
    }();
    exports.default = ExploreGameAudio;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  ExploreGameControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1bd39MPS15CKrX+NeMWlPz5", "ExploreGameControl");
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
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameData_1 = require("./ExploreGameData");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var ExploreTigo_1 = require("./ExploreTigo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreControl = function(_super) {
      __extends(ExploreControl, _super);
      function ExploreControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameNode = null;
        _this.tigoNode = null;
        _this.playedIndex = [];
        return _this;
      }
      ExploreControl.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
      };
      ExploreControl.prototype.start = function() {
        ExploreGameAudio_1.default.instance.bgm();
        var mainCamera = cc.Canvas.instance.node.getChildByName("Main Camera").getComponent(cc.Camera);
        mainCamera.clearFlags = 6;
        mainCamera.cullingMask &= -3;
        this.camera = this.node.getChildByName("camera").getComponent(cc.Camera);
        this.camera.zoomRatio = 1.7;
        this.camera.node.position = cc.v3(-374, -128);
        this.gameNode = this.node.getChildByName("gameNode");
        this.tigoNode = this.node.getChildByName("player_tigo");
        this.initSubGame();
        if (!this.tigoNode) {
          cc.error("tigoNode null");
          return;
        }
        this.exploreTigo = this.tigoNode.addComponent(ExploreTigo_1.default);
        this.exploreTigo.init();
        cc.log(this.exploreTigo);
        this.onTigoIn();
        EventSystem_1.default.on(ExploreGameData_1.default.HidePlayer, this.hideTigoNode, this);
        EventSystem_1.default.on(ExploreGameData_1.default.SubGameExit, this.onSubGameExit, this);
        EventSystem_1.default.on(ExploreGameData_1.default.PlayerMove, this.checkGameNode, this);
        EventSystem_1.default.on(ExploreGameData_1.default.MoveTiGo, this.moveTigo, this);
        EventSystem_1.default.on(ExploreGameData_1.default.PlayerMoveStart, this.PlayerMoveStart, this);
        EventSystem_1.default.on(ExploreGameData_1.default.PlayerMoveEnd, this.playerMoveEnd, this);
      };
      ExploreControl.prototype.update = function(dt) {
        if (this.scaleCamera) {
          this.camera.zoomRatio -= dt;
          if (this.camera.zoomRatio <= 1) {
            this.camera.zoomRatio = 1;
            this.scaleCamera = false;
          }
        }
        if (this.narrowCamera) {
          this.camera.zoomRatio += .5 * dt;
          if (this.camera.zoomRatio >= this.subGameZoomRatio) {
            this.camera.zoomRatio = this.subGameZoomRatio;
            this.narrowCamera = false;
          }
        }
      };
      ExploreControl.prototype.onDestroy = function() {
        cc.director.getPhysicsManager().enabled = false;
        EventSystem_1.default.off(ExploreGameData_1.default.HidePlayer, this.hideTigoNode, this);
        EventSystem_1.default.off(ExploreGameData_1.default.SubGameExit, this.onSubGameExit, this);
        EventSystem_1.default.off(ExploreGameData_1.default.PlayerMove, this.checkGameNode, this);
        EventSystem_1.default.off(ExploreGameData_1.default.MoveTiGo, this.moveTigo, this);
        EventSystem_1.default.off(ExploreGameData_1.default.PlayerMoveStart, this.PlayerMoveStart, this);
        EventSystem_1.default.off(ExploreGameData_1.default.PlayerMoveEnd, this.playerMoveEnd, this);
        var mainCamera = cc.Canvas.instance.node.getChildByName("Main Camera").getComponent(cc.Camera);
        mainCamera.clearFlags = 7;
        mainCamera.cullingMask |= 2;
        EventSystem_1.default.emit("hide_common_hand_guild");
      };
      ExploreControl.prototype.initSubGame = function() {
        this.subGameMap = new Map();
        this.subGameMap.set(ExploreGameData_1.ExploreGameType.Xiaqi, this.node.getChildByName("xiaqi").getComponent(ExploreBaseGame_1.default));
        this.subGameMap.set(ExploreGameData_1.ExploreGameType.Yugang, this.node.getChildByName("yugang").getComponent(ExploreBaseGame_1.default));
        this.subGameMap.set(ExploreGameData_1.ExploreGameType.Budaoweng, this.node.getChildByName("budaoweng").getComponent(ExploreBaseGame_1.default));
        this.subGameMap.set(ExploreGameData_1.ExploreGameType.Renqiu, this.node.getChildByName("fangziyouxi").getComponent(ExploreBaseGame_1.default));
        this.subGameMap.set(ExploreGameData_1.ExploreGameType.PaoPaoji, this.node.getChildByName("paopaoji").getComponent(ExploreBaseGame_1.default));
      };
      ExploreControl.prototype.onTigoIn = function() {
        var _this = this;
        ExploreGameData_1.default.instance.canTouch = false;
        this.exploreTigo.lutou();
        cc.tween(this.camera.node).to(4, {
          x: 270
        }).start();
        cc.tween(this.tigoNode).to(4, {
          x: 257
        }).call(function() {
          _this.tigoNode.setSiblingIndex(_this.node.childrenCount - 1);
          ExploreGameAudio_1.default.instance.playTigoInAudio();
          _this.exploreTigo.appear(function() {
            _this.scaleCamera = true;
            cc.tween(_this.camera.node).to(1, {
              y: _this.tigoNode.y,
              x: _this.tigoNode.x
            }).call(function() {
              ExploreGameData_1.default.instance.canTouch = true;
            }).start();
            ExploreGameAudio_1.default.instance.playMoveAudio();
            _this.exploreTigo.idle();
          });
        }).start();
      };
      ExploreControl.prototype.changeGameIng = function(gameType) {
        var baseGame = this.subGameMap.get(gameType);
        this.exitPos = this.camera.node.position;
        if (baseGame) {
          ExploreGameAudio_1.default.instance.stopMoveAudio();
          baseGame.onEnter(this.camera);
          this.subGameZoomRatio = baseGame.cameraZoomRatio;
          baseGame.playerPos && (this.tigoNode.position = baseGame.playerPos);
          this.narrowCamera = true;
          ExploreGameData_1.default.instance.canTouch = false;
        }
      };
      ExploreControl.prototype.onSubGameExit = function(eventData) {
        var _this = this;
        this.tigoNode.active = true;
        this.exploreTigo.setIdle();
        this.scaleCamera = true;
        ExploreGameAudio_1.default.instance.playMoveAudio();
        if (eventData.data && eventData.data.MoveCamera) {
          EventSystem_1.default.emit(ExploreGameData_1.default.MoveCamera, eventData.data);
          cc.tween(this.camera.node).delay(.7).call(function() {
            ExploreGameData_1.default.instance.canTouch = true;
          }).delay(4).call(function() {
            var index = _this.playedIndex.splice(0, 1);
            for (var i = 0; i < _this.gameNode.childrenCount; i++) if (index[0] == i) {
              var child = _this.gameNode.children[i];
              child.active = true;
            }
          }).start();
          return;
        }
        cc.tween(this.camera.node).to(.7, {
          x: this.exitPos.x,
          y: this.exitPos.y
        }).call(function() {
          EventSystem_1.default.emit(ExploreGameData_1.default.MoveCamera);
          ExploreGameData_1.default.instance.canTouch = true;
        }).delay(4).call(function() {
          var index = _this.playedIndex.splice(0, 1);
          for (var i = 0; i < _this.gameNode.childrenCount; i++) if (index[0] == i) {
            var child = _this.gameNode.children[i];
            child.active = true;
          }
        }).start();
      };
      ExploreControl.prototype.hideTigoNode = function() {
        this.tigoNode.active = false;
      };
      ExploreControl.prototype.moveTigo = function(event) {
        var _this = this;
        cc.tween(this.tigoNode).to(event.data.time, {
          x: event.data.x,
          y: event.data.y
        }).call(function() {
          _this.exploreTigo.idle();
        }).start();
        this.tigoNode.scaleX = event.data.dir;
      };
      ExploreControl.prototype.playerMoveEnd = function() {
        this.exploreTigo.idle();
      };
      ExploreControl.prototype.PlayerMoveStart = function() {
        this.exploreTigo.move();
      };
      ExploreControl.prototype.checkGameNode = function(dir) {
        0 != dir.data && this.exploreTigo.turn(dir.data);
        var tigoRect = new cc.Rect(this.tigoNode.x - this.tigoNode.width / 2, this.tigoNode.y - this.tigoNode.height / 2, this.tigoNode.width, this.tigoNode.height);
        for (var i = 0; i < this.gameNode.childrenCount; i++) {
          var child = this.gameNode.children[i];
          if (!child.active) continue;
          var childRect = new cc.Rect(child.x, child.y, child.width, child.height);
          if (tigoRect.contains(cc.v2(child.x, child.y))) {
            cc.log("\u78b0\u649e");
            var gameType = ExploreGameUtil_1.default.gameTypeByName(child.name);
            this.changeGameIng(gameType);
            child.active = false;
            this.playedIndex.push(i);
          }
        }
      };
      ExploreControl = __decorate([ ccclass ], ExploreControl);
      return ExploreControl;
    }(cc.Component);
    exports.default = ExploreControl;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameData": "ExploreGameData",
    "./ExploreGameUtil": "ExploreGameUtil",
    "./ExploreTigo": "ExploreTigo"
  } ],
  ExploreGameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce4fbSMhvRMFJS2ZpaqFdF8", "ExploreGameData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExploreGameType = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreGameData = function() {
      function ExploreGameData() {
        this._canTouch = false;
      }
      ExploreGameData_1 = ExploreGameData;
      Object.defineProperty(ExploreGameData, "instance", {
        get: function() {
          ExploreGameData_1._instance || (ExploreGameData_1._instance = new ExploreGameData_1());
          return ExploreGameData_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ExploreGameData.prototype, "canTouch", {
        get: function() {
          return this._canTouch;
        },
        set: function(value) {
          this._canTouch = value;
        },
        enumerable: false,
        configurable: true
      });
      var ExploreGameData_1;
      ExploreGameData.PlayerMove = "playerMove";
      ExploreGameData.PlayerMoveStart = "playerMoveStart";
      ExploreGameData.PlayerMoveEnd = "playerMoveEnd";
      ExploreGameData.HidePlayer = "hidePlayer";
      ExploreGameData.SubGameExit = "subGameExit";
      ExploreGameData.MoveCamera = "moveCamera";
      ExploreGameData.MoveTiGo = "moveTigo";
      ExploreGameData._instance = null;
      ExploreGameData = ExploreGameData_1 = __decorate([ ccclass ], ExploreGameData);
      return ExploreGameData;
    }();
    exports.default = ExploreGameData;
    var ExploreGameType;
    (function(ExploreGameType) {
      ExploreGameType["Default"] = "default";
      ExploreGameType["Xiaqi"] = "xiaqi";
      ExploreGameType["Yugang"] = "yugang";
      ExploreGameType["Budaoweng"] = "budaoweng";
      ExploreGameType["Renqiu"] = "renqiu";
      ExploreGameType["PaoPaoji"] = "paopaoji";
    })(ExploreGameType = exports.ExploreGameType || (exports.ExploreGameType = {}));
    cc._RF.pop();
  }, {} ],
  ExploreGameUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3cf45izSxBtKNgEzxbA6K6", "ExploreGameUtil");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ExploreGameData_1 = require("./ExploreGameData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreGameUtil = function() {
      function ExploreGameUtil() {}
      ExploreGameUtil.playSpine = function(spinCmpt, animName, loop, finishCb, finishCount, nextName, nextLoop) {
        void 0 === finishCount && (finishCount = 1);
        if (!spinCmpt) {
          cc.warn("playSpine:" + animName + ", sp.Skeleton null");
          return;
        }
        if ("" == animName) {
          cc.warn("playSpine:" + animName);
          return;
        }
        spinCmpt.node.active = true;
        spinCmpt.setAnimation(0, animName, loop);
        spinCmpt.setCompleteListener(null);
        if (finishCb) {
          var count_1 = 0;
          spinCmpt.setCompleteListener(function() {
            if (spinCmpt.animation == animName) {
              count_1++;
              if (count_1 >= finishCount) {
                finishCb();
                nextName && "" != nextName && spinCmpt.setAnimation(0, nextName, nextLoop);
                spinCmpt.setCompleteListener(null);
              }
            }
          });
          return;
        }
        nextName && "" != nextName && spinCmpt.addAnimation(0, nextName, nextLoop);
      };
      ExploreGameUtil.intersection = function(rectA, rectB) {
        return rectA.intersects(rectB);
      };
      ExploreGameUtil.gameTypeByName = function(type) {
        switch (type) {
         case "game_xiaqi":
          return ExploreGameData_1.ExploreGameType.Xiaqi;

         case "game_yugang":
          return ExploreGameData_1.ExploreGameType.Yugang;

         case "game_budaoweng":
          return ExploreGameData_1.ExploreGameType.Budaoweng;

         case "game_renqiu":
          return ExploreGameData_1.ExploreGameType.Renqiu;

         case "game_paopaoji":
          return ExploreGameData_1.ExploreGameType.PaoPaoji;
        }
      };
      ExploreGameUtil = __decorate([ ccclass ], ExploreGameUtil);
      return ExploreGameUtil;
    }();
    exports.default = ExploreGameUtil;
    cc._RF.pop();
  }, {
    "./ExploreGameData": "ExploreGameData"
  } ],
  ExploreTigo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1baa1akkSlF0JUj6YlINezA", "ExploreTigo");
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
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ExploreTigo = function(_super) {
      __extends(ExploreTigo, _super);
      function ExploreTigo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ExploreTigo.prototype.init = function() {
        this.tigoSpine = this.node.getComponentInChildren(sp.Skeleton);
      };
      ExploreTigo.prototype.lutou = function() {
        ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.lutou, true);
      };
      ExploreTigo.prototype.appear = function(cb) {
        ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.appear, false, function() {
          cb && cb();
        }, 1, TigoSpineName.idle, true);
      };
      ExploreTigo.prototype.move = function() {
        this.isMoving = true;
        if (this.isTurning) return;
        if (this.tigoSpine.animation == TigoSpineName.prepare || this.tigoSpine.animation == TigoSpineName.move) return;
        ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.prepare, false, null, 1, TigoSpineName.move, true);
      };
      ExploreTigo.prototype.setIdle = function() {
        this.tigoSpine.setAnimation(0, TigoSpineName.idle, true);
      };
      ExploreTigo.prototype.idle = function() {
        var _this = this;
        if (this.isTurning) return;
        this.isMoving = false;
        if (this.tigoSpine.animation == TigoSpineName.stop || this.tigoSpine.animation == TigoSpineName.idle) return;
        if (this.tigoSpine.animation != TigoSpineName.move) {
          var anim = this.tigoSpine.animation;
          this.tigoSpine.setMix(anim, TigoSpineName.idle, .2);
          ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.idle, true);
          return;
        }
        ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.stop, false, function() {
          _this.tigoSpine.setMix(TigoSpineName.stop, TigoSpineName.idle, .2);
        }, 1, TigoSpineName.idle, true);
      };
      ExploreTigo.prototype.turn = function(dir) {
        var _this = this;
        var curDir = this.node.scaleX;
        if (dir == curDir) {
          this.isTurning = false;
          return;
        }
        if (this.isTurning) return;
        this.isTurning = true;
        if (this.tigoSpine.animation == TigoSpineName.idle || this.tigoSpine.animation == TigoSpineName.stop || this.tigoSpine.animation == TigoSpineName.prepare) {
          ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.turn, false, function() {
            if (_this.isMoving) {
              _this.isTurning = false;
              _this.node.scaleX = dir;
              _this.isMoving ? _this.move() : ExploreGameUtil_1.default.playSpine(_this.tigoSpine, TigoSpineName.idle, false);
            }
          });
          return;
        }
        if (this.tigoSpine.animation == TigoSpineName.move) {
          ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.move_turn, false, function() {
            if (_this.isMoving) {
              _this.isTurning = false;
              _this.node.scaleX = dir;
              ExploreGameUtil_1.default.playSpine(_this.tigoSpine, TigoSpineName.move, true);
            }
          });
          return;
        }
        this.node.scaleX = dir;
      };
      ExploreTigo = __decorate([ ccclass ], ExploreTigo);
      return ExploreTigo;
    }(cc.Component);
    exports.default = ExploreTigo;
    var TigoSpineName;
    (function(TigoSpineName) {
      TigoSpineName["idle"] = "idle";
      TigoSpineName["lutou"] = "chuchang-lutou";
      TigoSpineName["appear"] = "chuchang-chuxian";
      TigoSpineName["move"] = "move";
      TigoSpineName["move_turn"] = "move-turn";
      TigoSpineName["prepare"] = "prepare";
      TigoSpineName["stop"] = "stop";
      TigoSpineName["turn"] = "turn";
    })(TigoSpineName || (TigoSpineName = {}));
    cc._RF.pop();
  }, {
    "./ExploreGameUtil": "ExploreGameUtil"
  } ],
  GameBall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d7410sLLpBEYl/rTkBzuUJ", "GameBall");
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
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameData_1 = require("./ExploreGameData");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameBall = function(_super) {
      __extends(GameBall, _super);
      function GameBall() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1.8;
        _this.centerPos = cc.v3(-1390, 674);
        _this.angleMove = 0;
        _this.isPlaying = false;
        return _this;
      }
      GameBall.prototype.onEnter = function(camera) {
        var _this = this;
        this.camera = camera;
        this.progressBar = cc.find("game/progressBar", this.node).getComponent(cc.ProgressBar);
        this.progressBar.progress = 0;
        this.progressBar.node.active = false;
        cc.tween(camera.node).to(.5, {
          x: this.centerPos.x,
          y: this.centerPos.y
        }).delay(1).call(function() {
          _this.gaming();
          EventSystem_1.default.emit(ExploreGameData_1.default.HidePlayer);
        }).start();
        EventSystem_1.default.emit(ExploreGameData_1.default.MoveTiGo, {
          x: -1524,
          y: 660,
          dir: -1,
          time: 1
        });
      };
      GameBall.prototype.gaming = function() {
        var _this = this;
        var spineNode = this.node.getChildByName("game");
        this.roomSpine = spineNode.getComponent(sp.Skeleton);
        spineNode.active = true;
        this.isPlaying = false;
        var addTouch = function() {
          var touchNode = _this.node.getChildByName("touchNode");
          touchNode.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
          touchNode.on(cc.Node.EventType.TOUCH_END, _this.onTouchEnd, _this);
          touchNode.on(cc.Node.EventType.TOUCH_CANCEL, _this.onTouchEnd, _this);
        };
        ExploreGameAudio_1.default.instance.playBallIn();
        ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-naqiu", false, function() {
          var worldPos = _this.node.convertToWorldSpaceAR(cc.v2(10, 10));
          ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/hand", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
            _this.scheduleOnce(function() {
              if (_this.isTouching) return;
              var prefab = cc.instantiate(res);
              _this.node.addChild(prefab);
              prefab.position = cc.v2(-1358, 700);
              ExploreGameAudio_1.default.instance.playPress();
            }, 2);
          });
          _this.scheduleOnce(function() {
            addTouch();
          }, 1);
        }, 1, "T-naqiudaiji", true);
      };
      GameBall.prototype.exit = function() {
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.roomSpine.node.active = false;
        _super.prototype.exit.call(this, {
          MoveCamera: true
        });
      };
      GameBall.prototype.onTouchStart = function(event) {
        if (this.isPlaying) return;
        ExploreGameAudio_1.default.instance.playBallEnergy();
        this.spineTrack = this.roomSpine.setAnimation(0, "T-xuli", false);
        this.angleMove = 0;
        this.spineTrack.animationStart = this.angleMove;
        this.spineTrack.animationEnd = this.angleMove;
        this.isTouching = true;
        this.progressBar.node.active = true;
        var hand = this.node.getChildByName("hand");
        hand && hand.destroy();
      };
      GameBall.prototype.update = function(dt) {
        if (!this.isTouching) return;
        this.angleMove += .6 * dt;
        this.angleMove <= 0 && (this.angleMove = 0);
        this.angleMove >= 1.3 && (this.angleMove = 1.3);
        var progress = this.angleMove / 1.1;
        this.progressBar.progress = progress;
        this.spineTrack.animationStart = this.angleMove;
        this.spineTrack.animationEnd = this.angleMove;
      };
      GameBall.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (this.isPlaying) return;
        this.isTouching = false;
        this.isPlaying = true;
        this.progressBar.node.active = false;
        if (this.angleMove >= 1.3) {
          cc.tween(this.node).delay(1).call(function() {
            ExploreGameAudio_1.default.instance.playBallHand();
          }).delay(.1).call(function() {
            ExploreGameAudio_1.default.instance.playBallAudio();
          }).start();
          ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-rengqiu2", false, function() {
            _this.exit();
          });
          return;
        }
        ExploreGameAudio_1.default.instance.playBallHand();
        ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-rengqiu1", false, null, 1, "TC-daiji", true);
        var ball = this.node.getChildByName("ball");
        var rigidBody = ball.getComponent(cc.RigidBody);
        ball.position = cc.v3(-1519, 604);
        cc.tween(this.node).delay(.2).call(function() {
          ball.active = true;
          rigidBody.angularVelocity = 30;
          rigidBody.linearVelocity = cc.v2(1800 * _this.angleMove, 500 * _this.angleMove);
        }).delay(7).call(function() {
          ball.active = false;
          rigidBody.linearVelocity = cc.v2(0, 0);
          _this.exit();
        }).start();
      };
      GameBall = __decorate([ ccclass ], GameBall);
      return GameBall;
    }(ExploreBaseGame_1.default);
    exports.default = GameBall;
    cc._RF.pop();
  }, {
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameData": "ExploreGameData",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ],
  GameBudaoweng: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cbba9ZKnPxIV55okU/faBBP", "GameBudaoweng");
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
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameData_1 = require("./ExploreGameData");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameBudaoweng = function(_super) {
      __extends(GameBudaoweng, _super);
      function GameBudaoweng() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1.3;
        _this.centerPos = cc.v3(-123, 724);
        _this.angleMove = 0;
        _this.isPlaying = false;
        _this.isBreak = false;
        _this.isTouch = false;
        _this.timer = 0;
        return _this;
      }
      GameBudaoweng.prototype.onEnter = function(camera) {
        var _this = this;
        this.camera = camera;
        cc.tween(camera.node).to(.5, {
          x: this.centerPos.x,
          y: this.centerPos.y
        }).start();
        this.isTouch = false;
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.isPlaying = false;
        this.budaowengBg = this.node.getChildByName("bg_node");
        this.budaowengSpine = this.node.getChildByName("budaoweng").getComponent(sp.Skeleton);
        ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/hand", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
          _this.scheduleOnce(function() {
            if (_this.isTouch) return;
            var prefab = cc.instantiate(res);
            _this.node.addChild(prefab);
            prefab.position = _this.budaowengBg.position;
            prefab.y += 200;
            var spin = prefab.getComponentInChildren(sp.Skeleton);
            ExploreGameUtil_1.default.playSpine(spin, "zuoyou", true);
            ExploreGameAudio_1.default.instance.playDrag();
          }, 2);
        });
        EventSystem_1.default.emit(ExploreGameData_1.default.MoveTiGo, {
          x: -500,
          y: 724,
          dir: 1,
          time: .5
        });
      };
      GameBudaoweng.prototype.exit = function() {
        var _this = this;
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.timer = 0;
        this.isPlaying = false;
        this.budaowengBg.y = 606;
        this.budaowengBg.angle = 0;
        this.angleMove = 0;
        var motorJoint = this.budaowengBg.getComponent(cc.MotorJoint);
        var rigidBody = this.budaowengBg.getComponent(cc.RigidBody);
        rigidBody.active = false;
        motorJoint.enabled = false;
        this.isBreak = false;
        cc.tween(this.camera.node).to(.3, {
          x: -500,
          y: 724
        }).call(function() {
          _super.prototype.exit.call(_this, {
            MoveCamera: true
          });
        }).start();
      };
      GameBudaoweng.prototype.onTouchStart = function(event) {
        if (this.isBreak) return;
        this.break();
        this.isTouch = true;
        var hand = this.node.getChildByName("hand");
        hand && hand.destroy();
      };
      GameBudaoweng.prototype.onTouchMove = function(event) {
        if (this.isBreak) return;
        var delta = event.getDelta();
        this.angleMove = .3 * delta.x;
        this.budaowengBg.angle -= this.angleMove;
        this.budaowengBg.angle > 61 && (this.budaowengBg.angle = 61);
        this.budaowengBg.angle < -61 && (this.budaowengBg.angle = -61);
        this.budaowengBg.y = Math.abs(1.1 * this.budaowengBg.angle * (this.budaowengBg.angle / 90)) + 606;
      };
      GameBudaoweng.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (this.isBreak) return;
        if (Math.abs(this.budaowengBg.angle) > 60) {
          this.isBreak = true;
          this.budaowengSpine.node.active = true;
          this.budaowengBg.active = false;
          this.budaowengBg.angle = 0;
          this.budaowengBg.y = 606;
          ExploreGameAudio_1.default.instance.playBudaoweng();
          ExploreGameUtil_1.default.playSpine(this.budaowengSpine, "budaoweng", false, function() {
            _this.budaowengSpine.node.active = false;
            _this.budaowengBg.active = true;
            _this.scheduleOnce(function() {
              _this.exit();
            }, 1);
          });
          return;
        }
        this.isPlaying = true;
        var rigidBody = this.budaowengBg.getComponent(cc.RigidBody);
        rigidBody.active = true;
        var motorJoint = this.budaowengBg.getComponent(cc.MotorJoint);
        motorJoint.enabled = true;
        ExploreGameAudio_1.default.instance.playBudaowengOnce();
      };
      GameBudaoweng.prototype.update = function(dt) {
        if (!this.isPlaying) return;
        this.timer += dt;
        this.timer >= 2 && this.exit();
        this.budaowengBg.angle > 2 && (this.timer = 0);
      };
      GameBudaoweng.prototype.break = function() {
        ExploreGameAudio_1.default.instance.stopEffect();
        this.budaowengBg.angle = 0;
        this.budaowengBg.y = 606;
        var motorJoint = this.budaowengBg.getComponent(cc.MotorJoint);
        var rigidBody = this.budaowengBg.getComponent(cc.RigidBody);
        rigidBody.active = false;
        motorJoint.enabled = false;
        this.angleMove = 0;
        this.isPlaying = false;
        this.timer = 0;
      };
      GameBudaoweng = __decorate([ ccclass ], GameBudaoweng);
      return GameBudaoweng;
    }(ExploreBaseGame_1.default);
    exports.default = GameBudaoweng;
    cc._RF.pop();
  }, {
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameData": "ExploreGameData",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ],
  GamePaoPaoJi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8543buduyNFoo8IGv9U0FFo", "GamePaoPaoJi");
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
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameData_1 = require("./ExploreGameData");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GamePaoPaoJi = function(_super) {
      __extends(GamePaoPaoJi, _super);
      function GamePaoPaoJi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1.5;
        _this.centerPos = cc.v3(1313, -270);
        _this.playerPos = cc.v3(1313, -270);
        _this.isTouch = false;
        return _this;
      }
      GamePaoPaoJi.prototype.onEnter = function(camera) {
        this.paopaoji = this.node.getChildByName("paopaoji").getComponent(sp.Skeleton);
        this.paopao = this.node.getChildByName("paopao").getComponent(sp.Skeleton);
        if (!camera) {
          this.exit();
          return;
        }
        this.camera = camera;
        EventSystem_1.default.emit(ExploreGameData_1.default.HidePlayer);
        this.gaming();
      };
      GamePaoPaoJi.prototype.exit = function(data) {
        this.paopao.node.active = false;
        this.paopao.node.position = cc.v3(1616, -226);
        this.paopao.node.scale = .2;
        _super.prototype.exit.call(this, data);
      };
      GamePaoPaoJi.prototype.loadGuide = function() {
        var _this = this;
        ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/hand", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
          _this.scheduleOnce(function() {
            if (_this.isTouch) return;
            var prefab = cc.instantiate(res);
            _this.node.addChild(prefab);
            prefab.position = _this.paopao.node.position;
            var spin = prefab.getComponentInChildren(sp.Skeleton);
            ExploreGameUtil_1.default.playSpine(spin, "dian", true);
            ExploreGameAudio_1.default.instance.playClick();
          }, 2);
        });
      };
      GamePaoPaoJi.prototype.gaming = function() {
        var _this = this;
        ExploreGameUtil_1.default.playSpine(this.paopaoji, "paopaoji-chui", false, null, 1, "paopaoji-chui-daiji1", true);
        cc.tween(this.camera.node).to(.6, {
          x: 1510,
          y: -651
        }).delay(1).call(function() {
          ExploreGameAudio_1.default.instance.playPaopaoJi();
        }).to(2.6, {
          y: -260
        }).to(.9, {
          x: 1313,
          y: -281
        }).delay(5).call(function() {
          _this.paopao.node.on(cc.Node.EventType.TOUCH_END, _this.touchPaopao, _this);
          _this.loadGuide();
        }).start();
        this.scheduleOnce(function() {
          _this.paopao.node.active = true;
          cc.tween(_this.paopao.node).to(.4, {
            x: 1313,
            y: -281,
            scale: .8
          }).start();
          ExploreGameUtil_1.default.playSpine(_this.paopao, "daiji", true);
        }, 4.4);
      };
      GamePaoPaoJi.prototype.touchPaopao = function() {
        var _this = this;
        var hand = this.node.getChildByName("hand");
        hand && hand.destroy();
        ExploreGameAudio_1.default.instance.stopClick();
        this.unscheduleAllCallbacks();
        ExploreGameAudio_1.default.instance.playPaoPao();
        var anim = this.paopaoji.animation;
        this.paopaoji.setMix(anim, "paopaoji-paopaozhakai", .2);
        ExploreGameUtil_1.default.playSpine(this.paopaoji, "paopaoji-paopaozhakai", false);
        ExploreGameUtil_1.default.playSpine(this.paopao, "zhakai", false, function() {
          _this.exit({
            MoveCamera: true
          });
        });
        this.paopao.node.off(cc.Node.EventType.TOUCH_END, this.touchPaopao, this);
      };
      GamePaoPaoJi = __decorate([ ccclass ], GamePaoPaoJi);
      return GamePaoPaoJi;
    }(ExploreBaseGame_1.default);
    exports.default = GamePaoPaoJi;
    cc._RF.pop();
  }, {
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameData": "ExploreGameData",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ],
  GameXiaqi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1686frq7k5FnL7AiR3MEmZB", "GameXiaqi");
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
    var ClickCmpt_1 = require("../../../kit/component/ClickCmpt");
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameXiaqi = function(_super) {
      __extends(GameXiaqi, _super);
      function GameXiaqi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1;
        _this.centerPos = cc.v3(1336, -26);
        _this.playerPos = cc.v3(1336, -26);
        _this.canClick = true;
        _this.clickMap = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        return _this;
      }
      GameXiaqi.prototype.onEnter = function(camera) {
        var _this = this;
        _super.prototype.onEnter.call(this, camera);
        this.clickCmpt = this.node.addComponent(ClickCmpt_1.default);
        ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/xiaqi", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
          var prefab = cc.instantiate(res);
          _this.node.addChild(prefab);
          _this.gameIn();
        });
      };
      GameXiaqi.prototype.gameIn = function() {
        var _this = this;
        this.gameNode = cc.find("xiaqi/game_node", this.node);
        this.tigoKuhesikao = cc.find("xiaqi/Tigo-kuhesikao", this.node).getComponent(sp.Skeleton);
        this.qipanData = new QipanData();
        this.clickMap = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        var spineNode = cc.find("xiaqi/qipan", this.node);
        var spine = spineNode.getComponent(sp.Skeleton);
        cc.tween(this.node).delay(.4).call(function() {
          spineNode.active = true;
          ExploreGameAudio_1.default.instance.playXiaqiIn();
          ExploreGameUtil_1.default.playSpine(spine, "qipan", false, function() {
            _this.canClick = true;
          });
        }).start();
        var worldPos;
        this.gameNode.children.forEach(function(item, index) {
          4 == index && (worldPos = _this.node.convertToWorldSpaceAR(item.position));
          _this.clickCmpt.onClick(item, _this.onClick, _this, {
            target: item,
            index: index
          }, false, null);
        });
        this.scheduleOnce(function() {
          cc.log("show_common_hand_guild");
          EventSystem_1.default.emit("show_common_hand_guild", worldPos);
        }, 1);
      };
      GameXiaqi.prototype.onClick = function(parm) {
        var _this = this;
        if (!this.canClick) return;
        EventSystem_1.default.emit("hide_common_hand_guild");
        this.canClick = false;
        cc.log("\u73a9\u5bb6\u4e0b\u68cb", parm);
        if (!this.qipanData.clickItem(parm.index, player.wanjia)) {
          this.canClick = true;
          return;
        }
        this.clickMap[parm.index] = -1;
        cc.log(this.clickMap.toString());
        ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/qipan_yuan", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
          var prefab = cc.instantiate(res);
          parm.target.addChild(prefab);
          ExploreGameAudio_1.default.instance.playXiaqiO();
          ExploreGameUtil_1.default.playSpine(prefab.getComponent(sp.Skeleton), "animation", false);
          cc.tween(prefab).delay(1).call(function() {
            if (_this.qipanData.checkGame(_this.clickMap)) {
              _this.gameOver();
              return;
            }
            _this.tigoPut();
          }).start();
        });
      };
      GameXiaqi.prototype.tigoPut = function() {
        var _this = this;
        var temp = [];
        this.clickMap.forEach(function(item) {
          -1 != item && temp.push(item);
        });
        var randomIndex = Math.floor(Math.random() * temp.length);
        var putIndex = temp[randomIndex];
        var targetNode = this.gameNode.getChildByName("qipan_item_" + putIndex);
        this.qipanData.clickItem(putIndex - 1, player.tigo);
        this.clickMap.forEach(function(item, index) {
          item == putIndex && (_this.clickMap[index] = -1);
        });
        cc.log(this.clickMap.toString());
        ResourcesManager_1.default.instance.loadRes("exploreGame", "prefabs/qipan_cha", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(e, res) {
          var prefab = cc.instantiate(res);
          targetNode.addChild(prefab);
          ExploreGameAudio_1.default.instance.playXiaqiX();
          ExploreGameUtil_1.default.playSpine(prefab.getComponent(sp.Skeleton), "cha", false, function() {
            if (_this.qipanData.checkGame(_this.clickMap)) {
              _this.gameOver();
              return;
            }
            _this.canClick = true;
          });
        });
      };
      GameXiaqi.prototype.gameOver = function() {
        var _this = this;
        var winer = this.qipanData.curPlauer;
        if (winer == player.default) {
          cc.tween(this.node).delay(1).call(function() {
            _this.gameNode.active = false;
            _this.tigoKuhesikao.node.active = true;
            ExploreGameUtil_1.default.playSpine(_this.tigoKuhesikao, "sikao", false, function() {
              _this.tigoKuhesikao.node.active = false;
              _this.exit({
                MoveCamera: true
              });
              _this.node.destroyAllChildren();
            });
          }).start();
          return;
        }
        if (winer == player.wanjia) {
          var yanhua = cc.find("xiaqi/effect_yanhua", this.node);
          var cmpt = yanhua.getComponent(sp.Skeleton);
          ExploreGameAudio_1.default.instance.playXiaqiOve(true);
          ExploreGameUtil_1.default.playSpine(cmpt, "animation", false, function() {
            _this.exit({
              MoveCamera: true
            });
            _this.node.destroyAllChildren();
          });
        } else {
          ExploreGameAudio_1.default.instance.playXiaqiOve(false);
          this.scheduleOnce(function() {
            _this.gameNode.active = false;
            ExploreGameUtil_1.default.playSpine(_this.tigoKuhesikao, "wrong", false, function() {
              _this.exit({
                MoveCamera: true
              });
              _this.tigoKuhesikao.node.active = false;
              _this.node.destroyAllChildren();
            });
          }, 1);
        }
      };
      GameXiaqi = __decorate([ ccclass ], GameXiaqi);
      return GameXiaqi;
    }(ExploreBaseGame_1.default);
    exports.default = GameXiaqi;
    var QipanData = function() {
      function QipanData() {
        this.checkCount = 0;
        this.qipanData = [];
        for (var i = 1; i < 10; i++) this.qipanData.push(new QipanItem(i));
      }
      QipanData.prototype.clickItem = function(index, player) {
        var item = this.qipanData[index];
        this.clickData = item;
        this.curPlauer = player;
        return item.click(player);
      };
      QipanData.prototype.checkGame = function(clickMap) {
        if (this.checkItem1(1)) {
          cc.log("\u8fd9\u91cc\u68c0\u67e51");
          return true;
        }
        if (this.checkItem2(1)) {
          cc.log("\u8fd9\u91cc\u68c0\u67e52");
          return true;
        }
        if (this.checkItem3()) {
          cc.log("\u8fd9\u91cc\u68c0\u67e53");
          return true;
        }
        var over = clickMap.find(function(item) {
          return -1 != item;
        });
        if (!over) {
          cc.log("\u7ed3\u675f\u4e86" + over);
          this.curPlauer = player.default;
          return true;
        }
        return false;
      };
      QipanData.prototype.checkItem1 = function(index) {
        this.checkCount >= 3 && (this.checkCount = 0);
        if (index > 9) return false;
        this.checkCount++;
        var curItem = this.qipanData[index - 1];
        var nextItem = this.qipanData[index];
        if (curItem.player == nextItem.player && nextItem.player != player.default) {
          if (2 == this.checkCount) return true;
          return this.checkItem1(index + 1);
        }
        if (curItem.player != nextItem.player || nextItem.player == player.default) {
          var nextIndex = index + 4 - this.checkCount;
          this.checkCount = 0;
          return this.checkItem1(nextIndex);
        }
      };
      QipanData.prototype.checkItem2 = function(index) {
        this.checkCount >= 3 && (this.checkCount = 0);
        this.checkCount++;
        var curItem = this.qipanData[index - 1];
        var nextItem = this.qipanData[index + 2];
        if (curItem.player == nextItem.player && nextItem.player != player.default) {
          if (2 == this.checkCount) return true;
          return this.checkItem2(index + 3);
        }
        if (curItem.player != nextItem.player || nextItem.player == player.default) {
          var nextIndex = index + 3 - 3 * this.checkCount + 1;
          this.checkCount = 0;
          if (nextIndex > 3) return false;
          return this.checkItem2(nextIndex);
        }
      };
      QipanData.prototype.checkItem3 = function() {
        var item1 = this.qipanData[0];
        var item5 = this.qipanData[4];
        var item9 = this.qipanData[8];
        var item3 = this.qipanData[2];
        var item7 = this.qipanData[6];
        if (item1.player == item5.player && item5.player == item9.player && item5.player != player.default) return true;
        if (item3.player == item5.player && item5.player == item7.player && item5.player != player.default) return true;
        return false;
      };
      return QipanData;
    }();
    var QipanItem = function() {
      function QipanItem(id) {
        this.player = player.default;
        this.id = id;
      }
      QipanItem.prototype.click = function(player) {
        if (this.isClick) {
          cc.log("\u4e0b\u9505\u4e86");
          return false;
        }
        cc.log("\u9996\u6b21\u70b9\u51fb");
        this.player = player;
        this.isClick = true;
        return true;
      };
      return QipanItem;
    }();
    var player;
    (function(player) {
      player[player["default"] = 0] = "default";
      player[player["tigo"] = 1] = "tigo";
      player[player["wanjia"] = 2] = "wanjia";
    })(player || (player = {}));
    cc._RF.pop();
  }, {
    "../../../kit/component/ClickCmpt": void 0,
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ],
  GameYugang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dce28Qll7BE9IoFVzjF95bV", "GameYugang");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameAudio_1 = require("./ExploreGameAudio");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameYugang = function(_super) {
      __extends(GameYugang, _super);
      function GameYugang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1.5;
        _this.centerPos = cc.v3(-1436, 0);
        _this.playerPos = cc.v3(-1609, -150);
        return _this;
      }
      GameYugang.prototype.onEnter = function(camera) {
        var _this = this;
        _super.prototype.onEnter.call(this, camera);
        this.scheduleOnce(function() {
          _this.gaming();
        }, .5);
      };
      GameYugang.prototype.gaming = function() {
        var _this = this;
        AudioManager_1.default.passMusic();
        var yugang = this.node.getChildByName("yugang");
        var spine = yugang.getComponent(sp.Skeleton);
        cc.tween(this.node).delay(.9).call(function() {
          ExploreGameAudio_1.default.instance.playYuGang();
        }).start();
        ExploreGameUtil_1.default.playSpine(spine, "yugang", false, function() {
          _this.exit({
            MoveCamera: true,
            x: false,
            y: true
          });
          AudioManager_1.default.resumeMusic();
        });
      };
      GameYugang = __decorate([ ccclass ], GameYugang);
      return GameYugang;
    }(ExploreBaseGame_1.default);
    exports.default = GameYugang;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameAudio": "ExploreGameAudio",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ]
}, {}, [ "CameraMove", "ExploreBall", "ExploreBaseGame", "ExploreGameAudio", "ExploreGameControl", "ExploreGameData", "ExploreGameUtil", "ExploreTigo", "GameBall", "GameBudaoweng", "GamePaoPaoJi", "GameXiaqi", "GameYugang" ]);
//# sourceMappingURL=index.js.map
