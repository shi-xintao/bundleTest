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
  BackgroundComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5336GRr9lDVYTcisunFfVp", "BackgroundComponent");
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
    var Mtype;
    (function(Mtype) {
      Mtype[Mtype["VERTICAL_P"] = 0] = "VERTICAL_P";
      Mtype[Mtype["VERTICAL_N"] = 1] = "VERTICAL_N";
      Mtype[Mtype["HORIZONTAL_P"] = 2] = "HORIZONTAL_P";
      Mtype[Mtype["HORIZONTAL_N"] = 3] = "HORIZONTAL_N";
    })(Mtype || (Mtype = {}));
    var BackgroundComponent = function(_super) {
      __extends(BackgroundComponent, _super);
      function BackgroundComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lubg1 = null;
        _this.lubg2 = null;
        _this.speed = 200;
        _this.mtype = Mtype.VERTICAL_P;
        _this.isRunmap = false;
        _this.cur_lubg = null;
        _this.luOffset = 0;
        return _this;
      }
      BackgroundComponent.prototype.onLoad = function() {
        this.lubg1 = this.node.getChildByName("bgNode1");
        this.lubg2 = this.node.getChildByName("bgNode2");
        this.isRunmap = true;
      };
      BackgroundComponent.prototype.start = function() {
        this.cur_lubg = this.lubg1;
        this.setbgfix();
      };
      BackgroundComponent.prototype.setbgfix = function() {
        var frameSize = cc.winSize;
        cc.log("frameSize", frameSize);
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, frameSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.lubg1.width = width;
          this.lubg1.height = screenSize.height;
          this.lubg2.width = width;
          this.lubg2.height = screenSize.height;
          switch (this.mtype) {
           case Mtype.VERTICAL_P:
            this.lubg2.y = screenSize.height;
            this.luOffset = screenSize.height;
            break;

           case Mtype.VERTICAL_N:
            this.lubg2.y = -screenSize.height;
            this.luOffset = screenSize.height;
            break;

           case Mtype.HORIZONTAL_P:
            this.lubg2.x = width;
            this.luOffset = width;
            break;

           case Mtype.HORIZONTAL_N:
            this.lubg2.x = -width;
            this.luOffset = width;
          }
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.lubg1.width = screenSize.width;
          this.lubg1.height = height;
          this.lubg2.width = screenSize.width;
          this.lubg2.height = height;
          switch (this.mtype) {
           case Mtype.VERTICAL_P:
            this.lubg2.y = height;
            this.luOffset = height;
            break;

           case Mtype.VERTICAL_N:
            this.lubg2.y = -height;
            this.luOffset = height;
            break;

           case Mtype.HORIZONTAL_P:
            this.lubg2.x = screenSize.width;
            this.luOffset = screenSize.width;
            break;

           case Mtype.HORIZONTAL_N:
            this.lubg2.x = -screenSize.width;
            this.luOffset = screenSize.width;
          }
        }
      };
      BackgroundComponent.prototype.runlubg = function(dt) {
        var s = dt * this.speed;
        switch (this.mtype) {
         case Mtype.VERTICAL_P:
          this.lubg1.y -= s;
          this.lubg2.y -= s;
          if (this.cur_lubg.y <= -this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.y = this.lubg1.y + this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.y = this.lubg2.y + this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.VERTICAL_N:
          this.lubg1.y += s;
          this.lubg2.y += s;
          if (this.cur_lubg.y >= this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.y = this.lubg1.y - this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.y = this.lubg2.y - this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.HORIZONTAL_P:
          this.lubg1.x -= s;
          this.lubg2.x -= s;
          if (this.cur_lubg.x <= -this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.x = this.lubg1.x + this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.x = this.lubg2.x + this.luOffset;
            this.cur_lubg = this.lubg2;
          }
          break;

         case Mtype.HORIZONTAL_N:
          this.lubg1.x += s;
          this.lubg2.x += s;
          if (this.cur_lubg.x >= this.luOffset) if (this.cur_lubg == this.lubg2) {
            this.lubg2.x = this.lubg1.x - this.luOffset;
            this.cur_lubg = this.lubg1;
          } else {
            this.lubg1.x = this.lubg2.x - this.luOffset;
            this.cur_lubg = this.lubg2;
          }
        }
      };
      BackgroundComponent.prototype.update = function(dt) {
        this.isRunmap && this.runlubg(dt);
      };
      __decorate([ property({
        type: cc.Integer,
        tooltip: "\u5faa\u73af\u901f\u5ea6",
        min: 0,
        max: 1e3,
        step: 50,
        slide: true
      }) ], BackgroundComponent.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Enum(Mtype),
        tooltip: "VERTICAL_P:\u5782\u76f4\u5411\u4e0b\u6eda\u52a8  VERTICAL_N:\u5782\u76f4\u5411\u4e0a\u6eda\u52a8 HORIZONTAL_P:\u6c34\u5e73\u5411\u5de6\u6eda\u52a8 HORIZONTAL_N:\u6c34\u5e73\u5411\u53f3\u6eda\u52a8"
      }) ], BackgroundComponent.prototype, "mtype", void 0);
      BackgroundComponent = __decorate([ ccclass ], BackgroundComponent);
      return BackgroundComponent;
    }(cc.Component);
    exports.default = BackgroundComponent;
    cc._RF.pop();
  }, {} ],
  ComponentBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3b93VNoztAmr1fnmc0vz9F", "ComponentBase");
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
    var ComponentBase = function(_super) {
      __extends(ComponentBase, _super);
      function ComponentBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameBase = null;
        return _this;
      }
      ComponentBase.prototype.start = function() {};
      ComponentBase.prototype.initData = function(data) {
        this.gameBase = data;
      };
      ComponentBase = __decorate([ ccclass ], ComponentBase);
      return ComponentBase;
    }(cc.Component);
    exports.default = ComponentBase;
    cc._RF.pop();
  }, {} ],
  GameMapComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51562yPCJxIZLNhO1NbQKrz", "GameMapComponent");
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
    var GameMapComponent = function(_super) {
      __extends(GameMapComponent, _super);
      function GameMapComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mapStart = null;
        _this.mapEnd = null;
        _this.mapItem = [];
        _this.lubg1 = null;
        _this.lubg2 = null;
        _this.isRunmap = false;
        _this.cur_lubg = null;
        _this.speed = 0;
        _this.luOffset = 2668;
        _this.halfFrame = 0;
        _this.mapIndex = 0;
        _this.gameEndTag = false;
        return _this;
      }
      GameMapComponent.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        var map1 = cc.instantiate(this.mapStart);
        var map2 = cc.instantiate(this.mapItem[0]);
        this.lubg1 = this.node.getChildByName("pathNode1");
        this.lubg2 = this.node.getChildByName("pathNode2");
        this.lubg1.addChild(map1);
        this.lubg2.addChild(map2);
        this.setMapSpeed(400);
      };
      GameMapComponent.prototype.start = function() {
        var _this = this;
        var frameSize = cc.winSize;
        this.halfFrame = frameSize.width / 2;
        this.cur_lubg = this.lubg1;
        this.scheduleOnce(function() {
          _this.lubg2.x = _this.lubg1.x + _this.luOffset;
        }, .2);
      };
      GameMapComponent.prototype.setMapSpeed = function(spd) {
        if (spd && spd > 0) {
          this.speed = spd;
          this.isRunmap = true;
        } else this.isRunmap = false;
      };
      GameMapComponent.prototype.runlubg = function(dt) {
        var s = dt * this.speed;
        this.lubg1.x -= s;
        this.lubg2.x -= s;
        if (this.cur_lubg.x <= -this.luOffset - this.halfFrame) if (this.cur_lubg == this.lubg2) {
          this.addMapToLubg(this.lubg2);
          this.lubg2.x = this.lubg1.x + this.luOffset;
          this.cur_lubg = this.lubg1;
        } else {
          this.addMapToLubg(this.lubg1);
          this.lubg1.x = this.lubg2.x + this.luOffset;
          this.cur_lubg = this.lubg2;
        }
      };
      GameMapComponent.prototype.addMapToLubg = function(lu) {
        lu.destroyAllChildren();
        var map = null;
        map = this.gameEndTag ? cc.instantiate(this.mapEnd) : cc.instantiate(this.mapItem[this.mapIndex]);
        lu.addChild(map);
        this.mapIndex = this.mapIndex + 1 >= this.mapItem.length ? 0 : this.mapIndex + 1;
      };
      GameMapComponent.prototype.update = function(dt) {
        this.isRunmap && this.runlubg(dt);
      };
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u7b2c\u4e00\u5757\u5730\u56fe"
      }) ], GameMapComponent.prototype, "mapStart", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "\u6700\u540e\u4e00\u5757\u5730\u56fe"
      }) ], GameMapComponent.prototype, "mapEnd", void 0);
      __decorate([ property(cc.Prefab) ], GameMapComponent.prototype, "mapItem", void 0);
      GameMapComponent = __decorate([ ccclass ], GameMapComponent);
      return GameMapComponent;
    }(cc.Component);
    exports.default = GameMapComponent;
    cc._RF.pop();
  }, {} ],
  LevelIndicator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "273f6UiSY5DDYBciC3zYB/D", "LevelIndicator");
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
    var LevelIndicator = function(_super) {
      __extends(LevelIndicator, _super);
      function LevelIndicator() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.indicatorImgs = [];
        _this.lineImgs = [];
        _this.itemNode = null;
        _this.lineNode = null;
        _this.content = null;
        _this.indicatorNodes = [];
        _this.lineNodes = [];
        _this.maxRound = -1;
        return _this;
      }
      LevelIndicator.prototype.initData = function(maxRound) {
        this.maxRound = maxRound;
        this.initIndicator();
      };
      LevelIndicator.prototype.initIndicator = function() {
        var _this = this;
        for (var index = 0; index < this.maxRound; index++) {
          var node = cc.instantiate(this.itemNode);
          node.active = true;
          node.parent = this.content;
          this.indicatorNodes.push(node);
        }
        this.indicatorNodes.reverse();
        this.scheduleOnce(function() {
          _this.content.getComponent(cc.Layout).enabled = false;
          _this.initLine();
        });
      };
      LevelIndicator.prototype.initLine = function() {
        for (var index = 1; index < this.maxRound; index++) {
          var node = cc.instantiate(this.lineNode);
          node.active = true;
          node.parent = this.content;
          this.lineNodes.push(node);
          node.zIndex = cc.macro.MIN_ZINDEX;
          node.x = this.indicatorNodes[index].x - this.indicatorNodes[index].width / 2 - 9;
          node.getComponent(cc.Sprite).spriteFrame = this.lineImgs[1];
        }
      };
      LevelIndicator.prototype.updateCurIndicator = function(index, comp) {
        var spIndex = comp ? 1 : 2;
        this.indicatorNodes[index].getComponent(cc.Sprite).spriteFrame = this.indicatorImgs[spIndex];
        index > 0 && (this.lineNodes[index - 1].getComponent(cc.Sprite).spriteFrame = this.lineImgs[0]);
      };
      __decorate([ property([ cc.SpriteFrame ]) ], LevelIndicator.prototype, "indicatorImgs", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], LevelIndicator.prototype, "lineImgs", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "itemNode", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "lineNode", void 0);
      __decorate([ property(cc.Node) ], LevelIndicator.prototype, "content", void 0);
      LevelIndicator = __decorate([ ccclass ], LevelIndicator);
      return LevelIndicator;
    }(cc.Component);
    exports.default = LevelIndicator;
    cc._RF.pop();
  }, {} ],
  PaoKuPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b620j+/ylMmZzGnqX3qJp2", "PaoKuPlayer");
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
    var PaoKuPlayer = function(_super) {
      __extends(PaoKuPlayer, _super);
      function PaoKuPlayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaoKuPlayer = __decorate([ ccclass ], PaoKuPlayer);
      return PaoKuPlayer;
    }(cc.Component);
    exports.default = PaoKuPlayer;
    cc._RF.pop();
  }, {} ],
  PaokuBuff: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e321EXBv9H0oVFRYBVcavR", "PaokuBuff");
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
    var PaokuBuff = function(_super) {
      __extends(PaokuBuff, _super);
      function PaokuBuff() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      PaokuBuff.prototype.start = function() {};
      __decorate([ property(cc.Label) ], PaokuBuff.prototype, "label", void 0);
      __decorate([ property ], PaokuBuff.prototype, "text", void 0);
      PaokuBuff = __decorate([ ccclass ], PaokuBuff);
      return PaokuBuff;
    }(cc.Component);
    exports.default = PaokuBuff;
    cc._RF.pop();
  }, {} ],
  PaokuClickComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4079bjgrBNX6q52fGC7byN", "PaokuClickComponent");
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
    var PaokuClickComponent = function(_super) {
      __extends(PaokuClickComponent, _super);
      function PaokuClickComponent() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaokuClickComponent.prototype.start = function() {};
      PaokuClickComponent.prototype.ontouchStart = function() {};
      PaokuClickComponent = __decorate([ ccclass ], PaokuClickComponent);
      return PaokuClickComponent;
    }(cc.Component);
    exports.default = PaokuClickComponent;
    cc._RF.pop();
  }, {} ],
  PaokuCollisionComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "317ba0cCalCDYFgI2txdr+w", "PaokuCollisionComponent");
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
    var PaokuCollisionComponent = function(_super) {
      __extends(PaokuCollisionComponent, _super);
      function PaokuCollisionComponent() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaokuCollisionComponent = __decorate([ ccclass ], PaokuCollisionComponent);
      return PaokuCollisionComponent;
    }(cc.Component);
    exports.default = PaokuCollisionComponent;
    cc._RF.pop();
  }, {} ],
  PaokuConfigBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c59afgISZhAVru0DBMkxDqe", "PaokuConfigBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PaoKuPlayerConfigBase = function() {
      function PaoKuPlayerConfigBase() {}
      PaoKuPlayerConfigBase.backGroundMoveSpeed = 200;
      PaoKuPlayerConfigBase.frountNodeMoveSpeed = 400;
      return PaoKuPlayerConfigBase;
    }();
    exports.default = PaoKuPlayerConfigBase;
    cc._RF.pop();
  }, {} ],
  PaokuEntity: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7cfc1Y+xNREjLXdFI8VlZAr", "PaokuEntity");
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
    var PaokuGameController_1 = require("./PaokuGameController");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaokuEntity = function(_super) {
      __extends(PaokuEntity, _super);
      function PaokuEntity() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaokuEntity.prototype.create = function(gameSystem, gameConfig) {
        gameSystem.entity = this;
        PaokuGameController_1.default.instance.initGame(gameSystem, gameConfig);
      };
      PaokuEntity = __decorate([ ccclass ], PaokuEntity);
      return PaokuEntity;
    }(cc.Component);
    exports.default = PaokuEntity;
    cc._RF.pop();
  }, {
    "./PaokuGameController": "PaokuGameController"
  } ],
  PaokuGameController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76ae6WTfw5KQ6AkrPWy1I4v", "PaokuGameController");
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
    exports.PaokuState = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaokuGameController = function(_super) {
      __extends(PaokuGameController, _super);
      function PaokuGameController() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaokuGameController_1 = PaokuGameController;
      Object.defineProperty(PaokuGameController, "instance", {
        get: function() {
          PaokuGameController_1._instance && (PaokuGameController_1._instance = new PaokuGameController_1());
          return PaokuGameController_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      PaokuGameController.prototype.initGame = function(paokuSystem, gameConfig) {
        this.paokuSystem = paokuSystem;
        this.gameConfig = gameConfig;
        this.goState(PaokuState.onGameStart);
      };
      PaokuGameController.prototype.goState = function(state) {
        this.paokuSystem[state] && this.paokuSystem[state]();
      };
      var PaokuGameController_1;
      PaokuGameController._instance = null;
      PaokuGameController = PaokuGameController_1 = __decorate([ ccclass ], PaokuGameController);
      return PaokuGameController;
    }(cc.Component);
    exports.default = PaokuGameController;
    var PaokuState;
    (function(PaokuState) {
      PaokuState["onGameStart"] = "onGameStart";
      PaokuState["onStartAni"] = "onStartAni";
      PaokuState["onGuideStep"] = "onGuideStep";
      PaokuState["onAnswerCorrect"] = "onAnswerCorrect";
      PaokuState["onAnswerWrong"] = "onAnswerWrong";
      PaokuState["onInspirinAfter"] = "onInspirinAfter";
      PaokuState["onFollowRead"] = "onFollowRead";
      PaokuState["onEnterObstacle"] = "onEnterObstacle";
      PaokuState["onEnterProp"] = "onEnterProp";
      PaokuState["onEnterEnergy"] = "onEnterEnergy";
      PaokuState["onNextLevel"] = "onNextLevel";
      PaokuState["onGameOver"] = "onGameOver";
    })(PaokuState = exports.PaokuState || (exports.PaokuState = {}));
    cc._RF.pop();
  }, {} ],
  PaokuGameSystem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38ce4jpGhhG2Jkn+6+m1lqP", "PaokuGameSystem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PaokuPropController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "334086RPFpPEZOHCW7qmeO6", "PaokuPropController");
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
    var PaokuPropController = function(_super) {
      __extends(PaokuPropController, _super);
      function PaokuPropController() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaokuPropController = __decorate([ ccclass ], PaokuPropController);
      return PaokuPropController;
    }(cc.Component);
    exports.default = PaokuPropController;
    cc._RF.pop();
  }, {} ],
  PaokuProp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3204a6JgadC74bSi38gU4dJ", "PaokuProp");
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
    var PaokuProp = function(_super) {
      __extends(PaokuProp, _super);
      function PaokuProp() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      __decorate([ property(cc.Label) ], PaokuProp.prototype, "label", void 0);
      __decorate([ property ], PaokuProp.prototype, "text", void 0);
      PaokuProp = __decorate([ ccclass ], PaokuProp);
      return PaokuProp;
    }(cc.Component);
    exports.default = PaokuProp;
    cc._RF.pop();
  }, {} ],
  PuzzleComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca155Vp2ylPFLuPKtX7T6GP", "PuzzleComponent");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DRAG_CORRECT_DISTANCE = 50;
    var PuzzleComponent = function(_super) {
      __extends(PuzzleComponent, _super);
      function PuzzleComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.puzzleCount = -1;
        _this.bloodCount = 3;
        _this.puzzleItemNodes = [];
        _this.puzzleDesNodes = [];
        _this.bloodNodes = [];
        return _this;
      }
      PuzzleComponent.prototype.onLoad = function() {
        this.initPuzzleDesNodes();
        this.initPuzzleItem();
        this.initDragEvent();
        this.initBloodNode();
      };
      PuzzleComponent.prototype.initPuzzleDesNodes = function() {
        var length = this.puzzleCount;
        for (var index = 1; index <= length; index++) {
          var node = this.node.getChildByName("ptbg" + index);
          this.puzzleDesNodes.push(node);
        }
      };
      PuzzleComponent.prototype.initPuzzleItem = function() {
        for (var index = 1; index <= this.puzzleCount; index++) {
          var node = this.node.getChildByName("dragItem" + index);
          this.puzzleItemNodes.push(node);
          node["originpos"] = node.position;
        }
      };
      PuzzleComponent.prototype.initBloodNode = function() {
        for (var index = 1; index <= this.bloodCount; index++) {
          var node = cc.find("heartContr/heartsp" + index, this.node);
          this.bloodNodes.push(node);
        }
        this.node.getChildByName("heartContr").getComponent(cc.Layout).enabled = false;
      };
      PuzzleComponent.prototype.initDragEvent = function() {
        for (var index = 0; index < this.puzzleItemNodes.length; index++) {
          var node = this.puzzleItemNodes[index];
          node.on(cc.Node.EventType.TOUCH_START, this.onBegin, this);
          node.on(cc.Node.EventType.TOUCH_MOVE, this.onMove, this);
          node.on(cc.Node.EventType.TOUCH_END, this.onEnd, this);
          node.on(cc.Node.EventType.TOUCH_CANCEL, this.onCancel, this);
        }
      };
      PuzzleComponent.prototype.gameOver = function(succ) {
        cc.log(" game over succ: " + succ);
        this.offAllDragEvent();
        this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
          win: succ ? 1 : 0
        });
      };
      PuzzleComponent.prototype.onBegin = function(e) {
        var touchNode = e.target;
        var local = e.getLocation();
        local = touchNode.parent.convertToNodeSpaceAR(local);
        this._offsetPos = cc.v2(touchNode.position.sub(cc.v3(local)));
        touchNode.zIndex = cc.macro.MAX_ZINDEX;
      };
      PuzzleComponent.prototype.onMove = function(e) {
        var touchNode = e.target;
        var local = e.getLocation();
        local = touchNode.parent.convertToNodeSpaceAR(local);
        touchNode.position = cc.v3(local.add(this._offsetPos));
        this.showHotTips(touchNode);
        this.checkDragRight(touchNode);
      };
      PuzzleComponent.prototype.showHotTips = function(node) {
        var len = this.puzzleDesNodes.length;
        for (var i = 0; i < len; i++) {
          var dragPos = node.position;
          var targetPos = this.puzzleDesNodes[i].position;
          var lens = dragPos.sub(targetPos).len();
          this.puzzleDesNodes[i].color = lens <= DRAG_CORRECT_DISTANCE ? cc.color(80, 80, 80) : cc.color(255, 255, 255);
        }
      };
      PuzzleComponent.prototype.checkDragRight = function(node, dragEnd) {
        void 0 === dragEnd && (dragEnd = false);
        var index = +node.name[node.name.length - 1] - 1;
        if (index >= 0 && index < this.puzzleCount) {
          var dragPos = node.position;
          var targetPos = this.puzzleDesNodes[index].position;
          var len = dragPos.sub(targetPos).len();
          len <= DRAG_CORRECT_DISTANCE ? dragEnd && this.dragCorrect(node, targetPos) : dragEnd && this.dragWrong(node);
        } else cc.error("drag error! name: " + node.name);
      };
      PuzzleComponent.prototype.dragCorrect = function(node, targetPos) {
        node.position = targetPos;
        node.scale = 1.85;
        this.offTouchEvent(node);
        var index = this.puzzleItemNodes.indexOf(node);
        this.puzzleItemNodes.splice(index, 1);
        this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundProceeding);
        this.puzzleItemNodes.length <= 0 && this.gameOver(true);
      };
      PuzzleComponent.prototype.dragWrong = function(node) {
        node.position = node["originpos"];
        AudioManager_1.default.playEffect("templateGame", "puzzleComponent/audio/game_error");
        var bloodNode = this.bloodNodes.pop();
        bloodNode.destroy();
        this.bloodNodes.length <= 0 && this.gameOver(false);
      };
      PuzzleComponent.prototype.onEnd = function(e) {
        var touchNode = e.target;
        this.checkDragRight(touchNode, true);
        touchNode.zIndex = 1;
        this.puzzleDesNodes.map(function(item) {
          return item.color = cc.color(255, 255, 255);
        });
      };
      PuzzleComponent.prototype.onCancel = function(e) {
        var touchNode = e.target;
        touchNode.zIndex = 1;
      };
      PuzzleComponent.prototype.offAllDragEvent = function() {
        for (var index = 0; index < this.puzzleItemNodes.length; index++) {
          var node = this.puzzleItemNodes[index];
          this.offTouchEvent(node);
        }
      };
      PuzzleComponent.prototype.offTouchEvent = function(node) {
        node.off(cc.Node.EventType.TOUCH_START);
        node.off(cc.Node.EventType.TOUCH_MOVE);
        node.off(cc.Node.EventType.TOUCH_END);
        node.off(cc.Node.EventType.TOUCH_CANCEL);
      };
      __decorate([ property({
        displayName: "\u62d6\u62fd\u5143\u7d20\u6570\u91cf"
      }) ], PuzzleComponent.prototype, "puzzleCount", void 0);
      __decorate([ property({
        displayName: "\u5fc3\u7684\u6570\u91cf"
      }) ], PuzzleComponent.prototype, "bloodCount", void 0);
      PuzzleComponent = __decorate([ ccclass ], PuzzleComponent);
      return PuzzleComponent;
    }(ComponentBase_1.default);
    exports.default = PuzzleComponent;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ],
  TemplateGameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d51deoEEOBKebgD6ev3k+1A", "TemplateGameBase");
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
    var CompEnum_1 = require("../../../common/structure/CompEnum");
    var events_1 = require("../../../kit/events/events");
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var LevelIndicator_1 = require("../levelIndicator/scripts/LevelIndicator");
    var ComponentBase_1 = require("./ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TemplateGameBase = function(_super) {
      __extends(TemplateGameBase, _super);
      function TemplateGameBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.roundNodeArr = [];
        _this.curRoundIndex = 0;
        _this.MaxRoundIndex = 4;
        _this.curRoundResult = null;
        _this.levelIndicator = null;
        _this.curRoundStateType = CompEnum_1.RoundStateType.None;
        return _this;
      }
      TemplateGameBase.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.initLevelIndicator();
        this.change2NextRound();
      };
      TemplateGameBase.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
      };
      TemplateGameBase.prototype.initLevelIndicator = function() {
        var _this = this;
        ResourcesManager_1.default.instance.loadRes("templateGame", "levelIndicator/prefab/levelIndicator", ResourcesManager_1.ResourceType.Normal, cc.Prefab, function(err, asset) {
          var node = cc.instantiate(asset);
          var size = cc.winSize;
          _this.levelIndicator = node.getComponent(LevelIndicator_1.default);
          _this.levelIndicator.initData(_this.MaxRoundIndex);
          _this.node.addChild(node);
          node.x = size.width / 2 - 30;
          node.y = size.height / 2 - 70;
        });
      };
      TemplateGameBase.prototype.roundStateTypeChanged = function(stateType, params) {
        this.curRoundStateType = stateType;
        cc.log("===>stateType: ", stateType);
        switch (stateType) {
         case CompEnum_1.RoundStateType.RoundOpenAniStart:
          this.openAniStart();
          break;

         case CompEnum_1.RoundStateType.RoundOpenAniComplete:
          this.openAniComplete();
          break;

         case CompEnum_1.RoundStateType.RoundStart:
          this.roundStart();
          break;

         case CompEnum_1.RoundStateType.RoundProceeding:
          this.roundProceeding(params);
          break;

         case CompEnum_1.RoundStateType.RoundComplete:
          this.roundComplete(params);
          break;

         case CompEnum_1.RoundStateType.RoundEndAniStart:
          this.endAniStart();
          break;

         case CompEnum_1.RoundStateType.RoundEndAniComplete:
          this.endAniComplete();
        }
      };
      TemplateGameBase.prototype.openAniStart = function() {};
      TemplateGameBase.prototype.openAniComplete = function() {
        this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundStart);
      };
      TemplateGameBase.prototype.roundStart = function() {
        if (this.curRoundIndex == this.MaxRoundIndex - 1) this.startAudioCallFunc(); else for (var index = 0; index < this.roundNodeArr.length; index++) {
          var node = this.roundNodeArr[index];
          node.active = this.curRoundIndex === index;
        }
      };
      TemplateGameBase.prototype.roundProceeding = function(params) {};
      TemplateGameBase.prototype.roundComplete = function(params) {
        this.curRoundResult = params;
        this.updateRoundStateDisplay();
        this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundEndAniStart, params);
      };
      TemplateGameBase.prototype.endAniStart = function() {};
      TemplateGameBase.prototype.endAniComplete = function() {
        cc.log("===>>> curRoundIndex: " + this.curRoundIndex + "    MaxRoundIndex:" + this.MaxRoundIndex);
        this.curRoundIndex++;
        this.curRoundIndex >= this.MaxRoundIndex ? this.gameEnd() : this.change2NextRound();
      };
      TemplateGameBase.prototype.startAudioCallFunc = function() {
        cc.warn(" \u5f00\u59cb\u8bed\u97f3\u6d4b\u8bc4\uff0c\u91cd\u5199startAudioCallFunc");
      };
      TemplateGameBase.prototype.gameEnd = function() {
        cc.log("game end!");
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
      };
      TemplateGameBase.prototype.change2NextRound = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.gameRoundInit() ];

             case 1:
              _a.sent();
              this.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundOpenAniStart);
              return [ 2 ];
            }
          });
        });
      };
      TemplateGameBase.prototype.gameRoundInit = function() {
        for (var index = 0; index < this.roundNodeArr.length; index++) {
          var node = this.roundNodeArr[index];
          node.active = false;
        }
        this.roundNodeArr[this.curRoundIndex] ? this.roundNodeArr[this.curRoundIndex].getComponent(ComponentBase_1.default).initData(this) : cc.log("this.roundNodeArr[this.curRoundIndex] nil!  curRoundIndex: " + this.curRoundIndex + " ");
      };
      TemplateGameBase.prototype.updateRoundStateDisplay = function() {
        if (!cc.isValid(this.node)) return;
        this.levelIndicator.updateCurIndicator(this.curRoundIndex, !!this.curRoundResult.win);
      };
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u73af\u8282\u4e92\u52a8\u7ec4\u4ef6"
      }) ], TemplateGameBase.prototype, "roundNodeArr", void 0);
      TemplateGameBase = __decorate([ ccclass ], TemplateGameBase);
      return TemplateGameBase;
    }(ChapterGameComponent_1.default);
    exports.default = TemplateGameBase;
    cc._RF.pop();
  }, {
    "../../../common/scripts/ChapterGameComponent": void 0,
    "../../../common/structure/CompEnum": void 0,
    "../../../kit/events/events": void 0,
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../levelIndicator/scripts/LevelIndicator": "LevelIndicator",
    "./ComponentBase": "ComponentBase"
  } ],
  chooseGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d796703O6ZCFaI4lWLDqiLC", "chooseGame");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var chooseGame = function(_super) {
      __extends(chooseGame, _super);
      function chooseGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.answerNumber = 0;
        _this.touchItems = [];
        return _this;
      }
      chooseGame.prototype.start = function() {
        this.schedule(this.showTips, 5);
        this.showTips();
      };
      chooseGame.prototype.showTips = function() {
        this.touchItems.forEach(function(node) {
          cc.tween(node).by(.2, {
            scale: .1
          }).by(.2, {
            scale: -.1
          }).union().repeat(2).start();
        });
      };
      chooseGame.prototype.itemTouchCall = function(event, data) {
        var _this = this;
        var n = Number(data);
        this.answerNumber == n ? AudioManager_1.default.playEffect("quziGamePanda", "res/audios/game_right") : AudioManager_1.default.playEffect("quziGamePanda", "res/audios/game_error");
        cc.tween(this.node).to(.5, {
          opacity: 0
        }).call(function() {
          _this.answerNumber == n ? _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 1
          }) : _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: 0
          });
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      __decorate([ property({
        type: cc.Integer,
        displayName: "\u6b63\u786e\u9009\u9879"
      }) ], chooseGame.prototype, "answerNumber", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u9009\u9879Node"
      }) ], chooseGame.prototype, "touchItems", void 0);
      chooseGame = __decorate([ ccclass ], chooseGame);
      return chooseGame;
    }(ComponentBase_1.default);
    exports.default = chooseGame;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ],
  selectGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00adcik625DXbmQzXeC5qW1", "selectGame");
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
    var CompEnum_1 = require("../../../../common/structure/CompEnum");
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ComponentBase_1 = require("../../scripts/ComponentBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SelectGame = function(_super) {
      __extends(SelectGame, _super);
      function SelectGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.heartsArr = [];
        _this.answerItemsArr = [];
        _this.rightTimes = 0;
        _this.wrongTiems = 0;
        _this.touchItems = [];
        _this.isGameEnd = false;
        return _this;
      }
      SelectGame.prototype.start = function() {
        var _this = this;
        cc.tween(this.node).to(1, {
          y: 0
        }).call(function() {
          _this.schedule(_this.showTips, 5);
          _this.showTips();
        }).start();
      };
      SelectGame.prototype.showTips = function() {
        this.touchItems.forEach(function(node) {
          cc.tween(node).by(.2, {
            scale: .1
          }).by(.2, {
            scale: -.1
          }).union().repeat(2).start();
        });
      };
      SelectGame.prototype.itemTouchCall = function(event, data) {
        if (this.isGameEnd) {
          cc.warn("game end");
          return;
        }
        var n = Number(data);
        var node = event.target;
        node.active = false;
        if (0 == n) {
          this.answerItemsArr[this.rightTimes].active = true;
          AudioManager_1.default.playEffect("templateGame", "selectGame/audios/game_right");
          if (this.rightTimes >= 1) {
            this.gameEnd(1);
            return;
          }
          this.rightTimes += 1;
        } else {
          AudioManager_1.default.playEffect("templateGame", "selectGame/audios/game_error");
          this.heartsArr[this.wrongTiems].active = false;
          this.wrongTiems += 1;
          this.wrongTiems >= 3 && this.gameEnd(0);
        }
      };
      SelectGame.prototype.gameEnd = function(w) {
        var _this = this;
        this.isGameEnd = true;
        cc.tween(this.node).to(2, {
          y: 900
        }).call(function() {
          _this.gameBase.roundStateTypeChanged(CompEnum_1.RoundStateType.RoundComplete, {
            win: w
          });
        }).call(function() {
          _this.node.destroy();
        }).start();
      };
      SelectGame.prototype.onEnable = function() {
        cc.tween(this.node).to(1, {
          y: 0
        });
      };
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u6b65\u6570\u6307\u793a\u5668"
      }) ], SelectGame.prototype, "heartsArr", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u4efb\u52a1\u6307\u793a\u5668"
      }) ], SelectGame.prototype, "answerItemsArr", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u9009\u9879Node"
      }) ], SelectGame.prototype, "touchItems", void 0);
      SelectGame = __decorate([ ccclass ], SelectGame);
      return SelectGame;
    }(ComponentBase_1.default);
    exports.default = SelectGame;
    cc._RF.pop();
  }, {
    "../../../../common/structure/CompEnum": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../scripts/ComponentBase": "ComponentBase"
  } ]
}, {}, [ "chooseGame", "LevelIndicator", "BackgroundComponent", "GameMapComponent", "PaoKuPlayer", "PaokuBuff", "PaokuClickComponent", "PaokuCollisionComponent", "PaokuConfigBase", "PaokuEntity", "PaokuGameController", "PaokuGameSystem", "PaokuProp", "PaokuPropController", "PuzzleComponent", "ComponentBase", "TemplateGameBase", "selectGame" ]);
//# sourceMappingURL=index.js.map
