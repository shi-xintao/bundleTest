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
        _this.moveSpeed = 4;
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
      CameraMove.prototype.start = function() {
        this.camera = this.node.getChildByName("camera");
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        EventSystem_1.default.on(ExploreGameData_1.default.MoveCamera, this.moveCamera, this);
        this.maxX = this.node.width / 2 - cc.winSize.width / 2;
        this.maxY = this.node.height / 2 - cc.winSize.height / 2;
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
          this.target.position = this.target.position.add(cc.v3(this.touchDir.x, this.touchDir.y).multiply(cc.v3(4, 4)));
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
        this.clickMove.x || this.clickMove.y || 0 != this.touchDir.y || 0 != this.touchDir.x || (this.isTouch = false);
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
        this.touchDir = cc.v2(0, 0);
        this.clickMove = {
          x: false,
          y: false
        };
        this.setTouchDir(event.getLocation());
        this.isTouch = true;
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
        this.setTouchDir(event.getLocation());
      };
      CameraMove.prototype.onTouchEnd = function(event) {
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.movePos.x = pos.x + this.camera.x;
        this.movePos.y = pos.y + this.camera.y;
        this.clickMove = {
          x: true,
          y: true
        };
      };
      CameraMove.prototype.check = function() {
        this.camera.x > this.maxX && (this.camera.x = this.maxX);
        this.camera.x < -this.maxX && (this.camera.x = -this.maxX);
        this.camera.y > this.maxY && (this.camera.y = this.maxY);
        this.camera.y < -this.maxY && (this.camera.y = -this.maxY);
        if (!this.target) return;
        var maxXTarget = this.node.width / 2 - this.target.width / 2;
        var maxYTarget = this.node.height / 2 - this.target.height / 2;
        if (this.target.x > maxXTarget) {
          this.target.x = maxXTarget;
          this.clickMove.x = false;
        }
        if (this.target.x < -maxXTarget) {
          this.target.x = -maxXTarget;
          this.clickMove.x = false;
        }
        if (this.target.y > maxYTarget) {
          this.target.y = maxYTarget;
          this.clickMove.y = false;
        }
        if (this.target.y < -maxYTarget) {
          this.target.y = -maxYTarget;
          this.clickMove.y = false;
        }
      };
      CameraMove.prototype.onDestroy = function() {
        EventSystem_1.default.off(ExploreGameData_1.default.MoveCamera, this.moveCamera, this);
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      };
      __decorate([ property(cc.Node) ], CameraMove.prototype, "target", void 0);
      CameraMove = __decorate([ ccclass ], CameraMove);
      return CameraMove;
    }(cc.Component);
    exports.default = CameraMove;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreGameData": "ExploreGameData"
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
        cc.tween(camera.node).to(.3, {
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
    var ExploreGameData_1 = require("./ExploreGameData");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
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
      };
      ExploreControl.prototype.start = function() {
        var mainCamera = cc.Canvas.instance.node.getChildByName("Main Camera").getComponent(cc.Camera);
        mainCamera.clearFlags = 6;
        mainCamera.cullingMask &= -3;
        this.camera = this.node.getChildByName("camera").getComponent(cc.Camera);
        this.camera.zoomRatio = 1.7;
        this.camera.node.position = cc.v3(-419, -128);
        this.gameNode = this.node.getChildByName("gameNode");
        this.tigoNode = this.node.getChildByName("player_tigo");
        this.initSubGame();
        if (!this.tigoNode) {
          cc.error("tigoNode null");
          return;
        }
        this.tigoSpine = this.tigoNode.getComponentInChildren(sp.Skeleton);
        this.onTigoIn();
        EventSystem_1.default.on(ExploreGameData_1.default.HidePlayer, this.hideTigoNode, this);
        EventSystem_1.default.on(ExploreGameData_1.default.SubGameExit, this.onSubGameExit, this);
        EventSystem_1.default.on(ExploreGameData_1.default.PlayerMove, this.checkGameNode, this);
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
          this.camera.zoomRatio += dt;
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
        var mainCamera = cc.Canvas.instance.node.getChildByName("Main Camera").getComponent(cc.Camera);
        mainCamera.clearFlags = 7;
        mainCamera.cullingMask |= 2;
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
        ExploreGameUtil_1.default.playSpine(this.tigoSpine, TigoSpineName.move, true);
        cc.tween(this.camera.node).to(5, {
          x: 270
        }).start();
        cc.tween(this.tigoNode).to(5, {
          x: 257
        }).call(function() {
          _this.tigoNode.setSiblingIndex(_this.node.childrenCount - 1);
          ExploreGameUtil_1.default.playSpine(_this.tigoSpine, TigoSpineName.appear, false, function() {
            _this.scaleCamera = true;
            cc.tween(_this.camera.node).to(1, {
              y: _this.tigoNode.y,
              x: _this.tigoNode.x
            }).call(function() {
              ExploreGameData_1.default.instance.canTouch = true;
            }).start();
          }, 1, TigoSpineName.daiji, true);
        }).start();
      };
      ExploreControl.prototype.changeGameIng = function(gameType) {
        var baseGame = this.subGameMap.get(gameType);
        this.exitPos = this.camera.node.position;
        if (baseGame) {
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
        this.scaleCamera = true;
        if (eventData.data && eventData.data.MoveCamera) {
          EventSystem_1.default.emit(ExploreGameData_1.default.MoveCamera, eventData.data);
          cc.tween(this.camera.node).delay(.7).call(function() {
            ExploreGameData_1.default.instance.canTouch = true;
          }).delay(5).call(function() {
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
        }).delay(5).call(function() {
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
      ExploreControl.prototype.checkGameNode = function(dir) {
        0 != dir.data && (this.tigoNode.scaleX = dir.data);
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
    var TigoSpineName;
    (function(TigoSpineName) {
      TigoSpineName["daiji"] = "daiji";
      TigoSpineName["move"] = "chuchang-lutou";
      TigoSpineName["appear"] = "chuchang-chuxian";
    })(TigoSpineName || (TigoSpineName = {}));
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameData": "ExploreGameData",
    "./ExploreGameUtil": "ExploreGameUtil"
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
      ExploreGameData.HidePlayer = "hidePlayer";
      ExploreGameData.SubGameExit = "subGameExit";
      ExploreGameData.MoveCamera = "moveCamera";
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
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
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
        _super.prototype.onEnter.call(this, camera);
        this.gaming();
      };
      GameBall.prototype.gaming = function() {
        var _this = this;
        var spineNode = this.node.getChildByName("game");
        this.roomSpine = spineNode.getComponent(sp.Skeleton);
        spineNode.active = true;
        this.isPlaying = false;
        ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-naqiu", false, function() {
          var touchNode = _this.node.getChildByName("touchNode");
          touchNode.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
          touchNode.on(cc.Node.EventType.TOUCH_MOVE, _this.onTouchMove, _this);
          touchNode.on(cc.Node.EventType.TOUCH_END, _this.onTouchEnd, _this);
        }, 1, "T-naqiudaiji", true);
      };
      GameBall.prototype.exit = function() {
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.roomSpine.node.active = false;
        _super.prototype.exit.call(this);
      };
      GameBall.prototype.onTouchStart = function(event) {
        if (this.isPlaying) return;
        this.spineTrack = this.roomSpine.setAnimation(0, "T-xuli", false);
        this.angleMove = 0;
        this.spineTrack.animationStart = this.angleMove;
        this.spineTrack.animationEnd = this.angleMove;
      };
      GameBall.prototype.onTouchMove = function(event) {
        if (this.isPlaying) return;
        var delta = event.getDelta();
        this.angleMove += .003 * -delta.x;
        this.angleMove <= 0 && (this.angleMove = 0);
        this.angleMove >= 2.3 && (this.angleMove = 2.3);
        this.spineTrack.animationStart = this.angleMove;
        this.spineTrack.animationEnd = this.angleMove;
      };
      GameBall.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (this.isPlaying) return;
        this.isPlaying = true;
        cc.log(this.angleMove);
        if (this.angleMove >= 1.3) {
          ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-rengqiu2", false, function() {
            _this.exit();
          });
          return;
        }
        ExploreGameUtil_1.default.playSpine(this.roomSpine, "T-rengqiu1", false, null, 1, "TC-daiji", true);
        var ball = this.node.getChildByName("ball");
        var rigidBody = ball.getComponent(cc.RigidBody);
        ball.position = cc.v3(-1519, 604);
        cc.tween(this.node).delay(.2).call(function() {
          ball.active = true;
          rigidBody.angularVelocity = 30;
          rigidBody.linearVelocity = cc.v2(1e3 * _this.angleMove, 500 * _this.angleMove);
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
    "./ExploreBaseGame": "ExploreBaseGame",
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
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameBudaoweng = function(_super) {
      __extends(GameBudaoweng, _super);
      function GameBudaoweng() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1.5;
        _this.centerPos = cc.v3(-123, 724);
        _this.playerPos = cc.v3(-123, 724);
        _this.angleMove = 0;
        _this.isPlaying = false;
        _this.timer = 0;
        return _this;
      }
      GameBudaoweng.prototype.onEnter = function(camera) {
        _super.prototype.onEnter.call(this, camera);
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.isPlaying = false;
        this.budaowengBg = this.node.getChildByName("bg_node");
        this.budaowengSpine = this.node.getChildByName("budaoweng").getComponent(sp.Skeleton);
      };
      GameBudaoweng.prototype.exit = function() {
        var touchNode = this.node.getChildByName("touchNode");
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        _super.prototype.exit.call(this, {
          MoveCamera: true
        });
      };
      GameBudaoweng.prototype.onTouchStart = function(event) {
        var rigidBody = this.budaowengBg.getComponent(cc.RigidBody);
        rigidBody.active = true;
      };
      GameBudaoweng.prototype.onTouchMove = function(event) {
        if (this.isPlaying) return;
        var delta = event.getDelta();
        this.angleMove = .1 * delta.x;
        this.budaowengBg.angle -= this.angleMove;
      };
      GameBudaoweng.prototype.onTouchEnd = function(event) {
        var _this = this;
        if (this.isPlaying) return;
        if (Math.abs(this.budaowengBg.angle) > 60) {
          this.budaowengSpine.node.active = true;
          this.budaowengBg.active = false;
          this.budaowengBg.angle = 0;
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
        var motorJoint = this.budaowengBg.getComponent(cc.MotorJoint);
        motorJoint.enabled = true;
      };
      GameBudaoweng.prototype.update = function(dt) {
        if (!this.isPlaying) return;
        this.timer += dt;
        if (this.timer >= 2) {
          this.exit();
          this.timer = 0;
          this.isPlaying = false;
          this.budaowengBg.angle = 0;
          var motorJoint = this.budaowengBg.getComponent(cc.MotorJoint);
          var rigidBody = this.budaowengBg.getComponent(cc.RigidBody);
          rigidBody.active = false;
          motorJoint.enabled = false;
        }
        this.budaowengBg.angle > 2 && (this.timer = 0);
      };
      GameBudaoweng = __decorate([ ccclass ], GameBudaoweng);
      return GameBudaoweng;
    }(ExploreBaseGame_1.default);
    exports.default = GameBudaoweng;
    cc._RF.pop();
  }, {
    "./ExploreBaseGame": "ExploreBaseGame",
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
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
    var ExploreGameUtil_1 = require("./ExploreGameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GamePaoPaoJi = function(_super) {
      __extends(GamePaoPaoJi, _super);
      function GamePaoPaoJi() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cameraZoomRatio = 1;
        _this.centerPos = cc.v3(-1436, 0);
        _this.playerPos = cc.v3(1475, -500);
        return _this;
      }
      GamePaoPaoJi.prototype.onEnter = function(camera) {
        this.paopaoji = this.node.getChildByName("paopaoji").getComponent(sp.Skeleton);
        this.paopao = this.node.getChildByName("paopao").getComponent(sp.Skeleton);
        this.centerPos = camera.node.position;
        this.centerPos.y = -500;
        this.playerPos = camera.node.position;
        _super.prototype.onEnter.call(this, camera);
        this.gaming();
        this.paopao.node.on(cc.Node.EventType.TOUCH_END, this.touchPaopao, this);
        var worldPos = this.node.convertToWorldSpaceAR(this.paopao.node.position);
        this.scheduleOnce(function() {
          cc.log("show_common_hand_guild");
          EventSystem_1.default.emit("show_common_hand_guild", worldPos);
        }, 3);
      };
      GamePaoPaoJi.prototype.exit = function(data) {
        this.paopao.node.active = false;
        this.paopao.node.position = cc.v3(1616, -226);
        this.paopao.node.scale = .2;
        _super.prototype.exit.call(this);
      };
      GamePaoPaoJi.prototype.gaming = function() {
        var _this = this;
        ExploreGameUtil_1.default.playSpine(this.paopaoji, "paopaoji-chui", false);
        this.scheduleOnce(function() {
          _this.paopao.node.active = true;
          cc.tween(_this.paopao.node).to(.4, {
            x: 1475,
            y: -460,
            scale: 1
          }).start();
          ExploreGameUtil_1.default.playSpine(_this.paopao, "daiji", true);
        }, 4.4);
      };
      GamePaoPaoJi.prototype.touchPaopao = function() {
        var _this = this;
        this.unscheduleAllCallbacks();
        ExploreGameUtil_1.default.playSpine(this.paopao, "zhakai", false, function() {
          _this.exit();
        });
      };
      GamePaoPaoJi = __decorate([ ccclass ], GamePaoPaoJi);
      return GamePaoPaoJi;
    }(ExploreBaseGame_1.default);
    exports.default = GamePaoPaoJi;
    cc._RF.pop();
  }, {
    "../../../kit/system/event/EventSystem": void 0,
    "./ExploreBaseGame": "ExploreBaseGame",
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
        this.qipanData = new QipanData();
        this.clickMap = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        var spineNode = cc.find("xiaqi/qipan", this.node);
        var spine = spineNode.getComponent(sp.Skeleton);
        cc.tween(this.node).delay(.4).call(function() {
          spineNode.active = true;
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
        if (winer == player.wanjia) {
          var yanhua = cc.find("xiaqi/effect_yanhua", this.node);
          var cmpt = yanhua.getComponent(sp.Skeleton);
          ExploreGameUtil_1.default.playSpine(cmpt, "animation", false, function() {
            _this.exit({
              MoveCamera: true
            });
            _this.node.destroyAllChildren();
          });
        } else this.scheduleOnce(function() {
          _this.exit({
            MoveCamera: true
          });
          _this.node.destroyAllChildren();
        }, 1);
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
    var ExploreBaseGame_1 = require("./ExploreBaseGame");
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
        var yugang = this.node.getChildByName("yugang");
        var spine = yugang.getComponent(sp.Skeleton);
        ExploreGameUtil_1.default.playSpine(spine, "yugang", false, function() {
          _this.exit({
            MoveCamera: true,
            x: false,
            y: true
          });
        });
      };
      GameYugang = __decorate([ ccclass ], GameYugang);
      return GameYugang;
    }(ExploreBaseGame_1.default);
    exports.default = GameYugang;
    cc._RF.pop();
  }, {
    "./ExploreBaseGame": "ExploreBaseGame",
    "./ExploreGameUtil": "ExploreGameUtil"
  } ]
}, {}, [ "CameraMove", "ExploreBaseGame", "ExploreGameControl", "ExploreGameData", "ExploreGameUtil", "GameBall", "GameBudaoweng", "GamePaoPaoJi", "GameXiaqi", "GameYugang" ]);