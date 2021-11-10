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
  DragableLetter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e210b+wGqRPD7KWNJ4+oCgA", "DragableLetter");
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
    var DroppableLetter_1 = require("./DroppableLetter");
    var FloatMain_1 = require("./FloatMain");
    var FloatUtil_1 = require("./FloatUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragableLetter = function(_super) {
      __extends(DragableLetter, _super);
      function DragableLetter() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.initPos = cc.Vec2.ZERO;
        _this.currPos = cc.Vec2.ZERO;
        _this.dropArea = [];
        _this.letter = "";
        _this.freezed = false;
        _this.lastPos = cc.Vec2.ZERO;
        return _this;
      }
      DragableLetter.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.dropArea.push(cc.find("btn_c", this.node.parent).getComponent(DroppableLetter_1.default));
        this.dropArea.push(cc.find("btn_d", this.node.parent).getComponent(DroppableLetter_1.default));
        this.letter = cc.find("l", this.node).getComponent(cc.Label).string;
      };
      DragableLetter.prototype.onTouchBegan = function(event) {
        if (!FloatMain_1.default.instance.canDrag) return;
        if (this.freezed) return;
        FloatMain_1.default.instance.dragged = true;
        FloatMain_1.default.instance.hand.hide();
        this.currPos.x = this.node.x;
        this.currPos.y = this.node.y;
        this.initPos.x = this.node.x;
        this.initPos.y = this.node.y;
      };
      DragableLetter.prototype.onTouchMove = function(event) {
        if (!FloatMain_1.default.instance.canDrag) return;
        if (this.freezed) return;
        var deltaX = event.getDeltaX();
        var deltaY = event.getDeltaY();
        this.currPos.x += deltaX;
        this.currPos.y += deltaY;
        this.node.x = this.currPos.x;
        this.node.y = this.currPos.y;
      };
      DragableLetter.prototype.onTouchEnd = function(event) {
        return __awaiter(this, void 0, void 0, function() {
          var currX, currY, i, element, pos, box;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!FloatMain_1.default.instance.canDrag) return [ 2 ];
              if (this.freezed) return [ 2 ];
              currX = event.getLocationX();
              currY = event.getLocationY();
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < this.dropArea.length)) return [ 3, 5 ];
              element = this.dropArea[i];
              pos = FloatUtil_1.default.convertToNodeSpace(this.node.parent, element.node.parent, this.node.x, this.node.y);
              box = element.node.getBoundingBox();
              if (!box.contains(pos)) return [ 3, 4 ];
              if (!(this.letter == element.letter)) return [ 3, 2 ];
              "C" == this.letter ? FloatMain_1.default.instance.playVoice("Big C") : "c" == this.letter ? FloatMain_1.default.instance.playVoice("Small c") : "D" == this.letter ? FloatMain_1.default.instance.playVoice("Big D") : "d" == this.letter && FloatMain_1.default.instance.playVoice("Small d");
              element.put(this);
              return [ 2 ];

             case 2:
              FloatMain_1.default.instance.playVoice("wrong");
              FloatMain_1.default.instance.wrongNum++;
              return [ 4, FloatMain_1.default.instance.shakeBtnByNode(this.node) ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              i++;
              return [ 3, 1 ];

             case 5:
              this.goBack();
              return [ 2 ];
            }
          });
        });
      };
      DragableLetter.prototype.goBack = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.tween(_this.node).to(.3, {
                x: _this.lastPos.x,
                y: _this.lastPos.y
              }).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      DragableLetter.poses = [ cc.v2(-250, 93.153), cc.v2(-150, 93.153), cc.v2(-50, 93.153), cc.v2(50, 93.153), cc.v2(150, 93.153), cc.v2(250, 93.153) ];
      __decorate([ property(cc.Vec2) ], DragableLetter.prototype, "lastPos", void 0);
      DragableLetter = __decorate([ ccclass ], DragableLetter);
      return DragableLetter;
    }(cc.Component);
    exports.default = DragableLetter;
    cc._RF.pop();
  }, {
    "./DroppableLetter": "DroppableLetter",
    "./FloatMain": "FloatMain",
    "./FloatUtil": "FloatUtil"
  } ],
  DroppableLetter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71842vvhKZAXLZ7eIwV4F5Y", "DroppableLetter");
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
    var Tigo_1 = require("../../common_en/Tigo");
    var FloatMain_1 = require("./FloatMain");
    var FloatUtil_1 = require("./FloatUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DroppableLetter = function(_super) {
      __extends(DroppableLetter, _super);
      function DroppableLetter() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.poses = [ cc.v2(0, 37), cc.v2(-45, -31), cc.v2(45, -31) ];
        _this.usages = [ 0, 0, 0 ];
        _this.other = null;
        _this.letter = "";
        return _this;
      }
      DroppableLetter.prototype.put = function(letter) {
        return __awaiter(this, void 0, void 0, function() {
          var i, element, pos, pp, cb, stars, inst;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < this.usages.length)) return [ 3, 8 ];
              element = this.usages[i];
              if (!(0 == element)) return [ 3, 7 ];
              pos = FloatUtil_1.default.convertToNodeSpace(this.node, this.node.parent, this.poses[i]);
              letter.freezed = true;
              return [ 4, this.moveTo(letter, pos) ];

             case 2:
              _a.sent();
              this.usages[i] = 1;
              if (!this.isCompleted()) return [ 3, 6 ];
              pp = FloatMain_1.default.instance;
              pp.canDrag = false;
              if (!pp.currResolve) return [ 3, 6 ];
              cb = pp.currResolve;
              pp.currResolve = null;
              console.log("answer is right, continue>>>>>");
              stars = 3;
              inst = FloatMain_1.default.instance;
              stars = 0 == inst.wrongNum ? 3 : 1 == inst.wrongNum ? 2 : 1;
              inst.total_star += stars;
              Tigo_1.default.callAppToCollect(inst.gid, 1004, stars);
              return [ 4, inst.sleep(3) ];

             case 3:
              _a.sent();
              FloatMain_1.default.instance.playVoice("right");
              return [ 4, inst.coin_board.setCoinAni(stars) ];

             case 4:
              _a.sent();
              return [ 4, inst.sleep(1) ];

             case 5:
              _a.sent();
              cb();
              _a.label = 6;

             case 6:
              return [ 3, 8 ];

             case 7:
              i++;
              return [ 3, 1 ];

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      DroppableLetter.prototype.isCompleted = function() {
        return this.isFull() && this.other.isFull();
      };
      DroppableLetter.prototype.isFull = function() {
        var ret = true;
        for (var i = 0; i < this.usages.length; i++) {
          var element = this.usages[i];
          if (0 == element) {
            ret = false;
            break;
          }
        }
        return ret;
      };
      DroppableLetter.prototype.moveTo = function(letter, pos) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.tween(letter.node).to(.2, {
                x: pos.x,
                y: pos.y
              }).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      DroppableLetter.prototype.reset = function() {
        for (var i = 0; i < this.usages.length; i++) this.usages[i] = 0;
      };
      DroppableLetter.prototype.onLoad = function() {};
      DroppableLetter.prototype.start = function() {};
      DroppableLetter = __decorate([ ccclass ], DroppableLetter);
      return DroppableLetter;
    }(cc.Component);
    exports.default = DroppableLetter;
    cc._RF.pop();
  }, {
    "../../common_en/Tigo": void 0,
    "./FloatMain": "FloatMain",
    "./FloatUtil": "FloatUtil"
  } ],
  FloatMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ae25dyss9MXqobA/2e2cpV", "FloatMain");
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
    var DragableLetter_1 = require("./DragableLetter");
    var DroppableLetter_1 = require("./DroppableLetter");
    var FloatUtil_1 = require("./FloatUtil");
    var Unit_1 = require("./Unit");
    var Tigo_1 = require("../../common_en/Tigo");
    var GameData_1 = require("../../common_en/GameData");
    var recordAin_1 = require("../../common_en/mic/recordAin");
    var notifierCenter_1 = require("../../common_en/notifierCenter");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var HandEn_1 = require("../../common_en/hand/HandEn");
    var coinBoard_1 = require("../../common_en/coin_fly/coinBoard");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Float = function(_super) {
      __extends(Float, _super);
      function Float() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.map = null;
        _this.board = null;
        _this.highlight = null;
        _this.btn_c = null;
        _this.btn_d = null;
        _this.boat = null;
        _this.black_mask = null;
        _this.trumpet = null;
        _this.tip = null;
        _this.tigoInMap = null;
        _this.tigoInBoat = null;
        _this.tigoOnSnail = null;
        _this.monster1 = null;
        _this.monster2 = null;
        _this.monster3 = null;
        _this.snail = null;
        _this.box1 = null;
        _this.box = null;
        _this.tigo = null;
        _this.boardPosY = 666;
        _this.screenSize = null;
        _this.screenRealSize = null;
        _this.screenScaledSize = null;
        _this.isDev = false;
        _this.currStage = 1;
        _this.big_letter = null;
        _this.mapRight = 0;
        _this.mapLeft = 0;
        _this.barLeft = -205;
        _this.barRight = 205;
        _this.bgLeft = 0;
        _this.bgRight = 0;
        _this.cursor = null;
        _this.farBg = null;
        _this.currMapScale = 1;
        _this.ui = null;
        _this.mic = null;
        _this.reward = null;
        _this.gid = 1;
        _this.coin = null;
        _this.hand = null;
        _this.coin_board = null;
        _this.dragged = false;
        _this.total_star = 0;
        _this.currTime = 0;
        _this.canDrag = false;
        _this.currBigLetterDestPos = null;
        _this.isBoardShowing = false;
        _this.currAnswer = "C";
        _this.currResolve = null;
        _this.tweenBtnC = null;
        _this.tweenBtnD = null;
        _this.isFollow = false;
        _this.currFollowUnit = null;
        _this.timer_drag = 0;
        _this.timer_drag_callback = null;
        _this.timer_select = 0;
        _this.timer_select_callback = null;
        _this.record_num = 0;
        _this.wrongNum = 0;
        _this.currAction = "";
        _this.currWord = "";
        return _this;
      }
      Float_1 = Float;
      Float.prototype.init = function() {
        window.webframe || (window.webframe = {});
        window.webframe.Notify || (window.webframe.Notify = new notifierCenter_1.default());
        window.webframe.Notify.listen("callCocos_data", this.receiveAppData, this, false);
        Float_1.instance = this;
        this.board = this.getNodeFromMap("board");
        this.btn_c = cc.find("btn_c", this.board);
        this.btn_d = cc.find("btn_d", this.board);
        this.hand = cc.find("handen", this.board).getComponent(HandEn_1.default);
        this.hand.mask.active = false;
        this.hand.node.active = false;
        this.trumpet = cc.find("voice", this.board);
        this.highlight = cc.find("blur_small", this.board);
        var pos_born = this.getNodeFromMap("p_born");
        this.screenRealSize = cc.size(cc.Canvas.instance.designResolution.width, cc.Canvas.instance.designResolution.height);
        this.currMapScale = this.screenRealSize.height / this.map.height;
        this.map.scale = this.currMapScale;
        var screenw = this.screenRealSize.width / this.screenRealSize.height * this.map.height;
        this.screenSize = cc.size(screenw, this.map.height);
        console.log("screen size:" + this.screenSize.width + "," + this.screenSize.height);
        this.map.x = 0;
        this.mapLeft = 0;
        this.mapRight = this.map.width - this.screenSize.width;
        this.farBg = cc.find("far_bg", this.node);
        this.farBg.scale = this.currMapScale;
        this.bgLeft = -this.farBg.width + this.screenSize.width;
        this.bgRight = 0;
        this.farBg.x = this.bgRight;
        this.switchTigo(this.tigoInMap);
        this.tigo.node.x = pos_born.x;
        this.black_mask.opacity = 0;
        this.tip.node.opacity = 0;
        this.boat.opacity = 0;
        this.snail.node.opacity = 0;
        var pos_boat1 = this.getNodeFromMap("p_boat1");
        this.boat.x = pos_boat1.x;
        var pos_snail1 = this.getNodeFromMap("p_snail1");
        this.snail.node.x = pos_snail1.x;
        this.tigoInBoat.node.active = false;
        this.tigoOnSnail.node.active = false;
        this.big_letter = cc.find("big_letter", this.board).getComponent(cc.Label);
        this.big_letter.node.active = false;
        var ui = cc.find("ui", this.node);
        this.progressBar = cc.find("progress_bar", this.map);
        this.cursor = cc.find("cursor", this.progressBar);
        this.coin_board = cc.find("coinborder", ui).getComponent(coinBoard_1.default);
        this.coin_board.node.scale = 1334 / 2048;
        if (!this.isDev) {
          for (var i = 0; i < this.map.children.length; i++) {
            var element = this.map.children[i];
            if (element.name.startsWith("p_")) {
              var bg = cc.find("bg", element);
              bg.active = false;
            }
          }
          for (var i = 0; i < this.boat.children.length; i++) {
            var element = this.boat.children[i];
            if (element.name.startsWith("p_")) {
              var bg = cc.find("bg", element);
              bg.active = false;
            }
          }
          for (var i = 0; i < this.snail.node.children.length; i++) {
            var element = this.snail.node.children[i];
            if (element.name.startsWith("p_")) {
              var bg = cc.find("bg", element);
              bg.active = false;
            }
          }
          for (var i = 0; i < this.board.children.length; i++) {
            var element = this.board.children[i];
            if (element.name.startsWith("p_")) {
              var bg = cc.find("bg", element);
              bg.active = false;
            }
          }
        }
        this.ui = cc.find("ui", this.node);
        this.mic = cc.find("mic", this.board);
        this.reward = cc.find("reward", this.ui).getComponent(Unit_1.default);
        this.coin = cc.find("coin_mid", this.ui).getComponent(Unit_1.default);
      };
      Float.prototype.onDisable = function() {
        window.webframe && window.webframe.Notify.ignore("callCocos_data", this.receiveAppData, this, false);
      };
      Float.prototype.fixScreen = function() {};
      Float.prototype.sleep = function(seconds) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.currTime = Date.now();
            return [ 2, new Promise(function(resolve) {
              _this.scheduleOnce(function() {
                resolve();
              }, seconds);
            }) ];
          });
        });
      };
      Float.prototype.switchTigo = function(unit) {
        this.tigo && (this.tigo.node.active = false);
        unit.node.active = true;
        this.tigo = unit;
      };
      Float.prototype.getNodeFromMap = function(name) {
        return cc.find(name, this.map);
      };
      Float.prototype.answerQuestion = function(answer) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var func, txt, txt2, isFirst4, voice, i, element, pos, da, lc, ld, letters, leftDrop, rightDrop, i, element, l, voice_1, center, duration, pos_center, destPos, uiPos, pos_l, unit_1, unit_2, pos_center, destPos, uiPos, pos_l, unit_3, pos_center_1, destPos, uiPos_1, flag_1, func2_1, unit_4, centraled_1, hadCentraled_1, _loop_1, this_1, i, pos_center, destPos, uiPos, pos_l, unit_5;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    func = function() {
                      return __awaiter(_this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                          switch (_a.label) {
                           case 0:
                            this.big_letter.node.active = false;
                            return [ 4, this.showBoard(false) ];

                           case 1:
                            _a.sent();
                            resolve();
                            return [ 2 ];
                          }
                        });
                      });
                    };
                    txt = cc.find("Cc", this.btn_c);
                    txt2 = cc.find("Dd", this.btn_d);
                    this.enableBtns(false);
                    isFirst4 = this.currStage >= 1 && this.currStage <= 4;
                    voice = cc.find("voice", this.board);
                    voice.active = isFirst4;
                    for (i = 0; i < 6; i++) {
                      element = cc.find("bletter" + (i + 1), this.board);
                      element.active = 5 == this.currStage || 6 == this.currStage;
                      pos = DragableLetter_1.default.poses[i];
                      element.x = pos.x;
                      element.y = pos.y;
                      element.opacity = 255;
                    }
                    da = cc.find("drag_area", this.board);
                    da.active = 5 == this.currStage || 6 == this.currStage;
                    da.opacity = 255;
                    lc = cc.find("lc", this.board);
                    ld = cc.find("ld", this.board);
                    if (da.active) {
                      lc.active = true;
                      ld.active = true;
                    } else {
                      lc.active = false;
                      ld.active = false;
                    }
                    if (1 == this.currStage || 2 == this.currStage) {
                      if (1 == this.currStage) {
                        this.big_letter.string = "C";
                        txt.getComponent(cc.RichText).string = "<color=#F4AC5E>Cc</color>";
                        txt2.getComponent(cc.RichText).string = "<color=#F4AC5E>Dd</color>";
                      } else {
                        this.big_letter.string = "D";
                        txt.getComponent(cc.RichText).string = "<color=#F4AC5E>Cc</color>";
                        txt2.getComponent(cc.RichText).string = "<color=#F4AC5E>Dd</color>";
                      }
                      txt.getComponent(cc.RichText).fontSize = 100;
                      txt2.getComponent(cc.RichText).fontSize = 100;
                    } else if (3 == this.currStage || 4 == this.currStage) {
                      if (3 == this.currStage) {
                        this.big_letter.string = "c";
                        txt.getComponent(cc.RichText).string = "<color=#F4AC5E>c</c><color=#f4c46a>ow</color>";
                        txt2.getComponent(cc.RichText).string = "<color=#F4AC5E>d</c><color=#f4c46a>og</color>";
                      } else {
                        this.big_letter.string = "d";
                        txt.getComponent(cc.RichText).string = "<color=#F4AC5E>c</c><color=#f4c46a>arrot</color>";
                        txt2.getComponent(cc.RichText).string = "<color=#F4AC5E>d</c><color=#f4c46a>uck</color>";
                      }
                      txt.getComponent(cc.RichText).fontSize = 60;
                      txt2.getComponent(cc.RichText).fontSize = 60;
                    } else if (5 == this.currStage || 6 == this.currStage) {
                      this.canDrag = false;
                      this.big_letter.string = "";
                      txt.getComponent(cc.RichText).string = "";
                      txt2.getComponent(cc.RichText).string = "";
                      lc.getComponent(cc.Label).string = "C";
                      ld.getComponent(cc.Label).string = "c";
                      letters = [ "C", "C", "c", "C", "c", "c" ];
                      leftDrop = this.btn_c.getComponent(DroppableLetter_1.default);
                      leftDrop.reset();
                      leftDrop.letter = "C";
                      rightDrop = this.btn_d.getComponent(DroppableLetter_1.default);
                      rightDrop.reset();
                      rightDrop.letter = "c";
                      leftDrop.other = rightDrop;
                      rightDrop.other = leftDrop;
                      if (6 == this.currStage) {
                        letters = [ "d", "d", "D", "D", "d", "D" ];
                        lc.getComponent(cc.Label).string = "D";
                        ld.getComponent(cc.Label).string = "d";
                        leftDrop.letter = "D";
                        rightDrop.letter = "d";
                      }
                      lc.active = true;
                      lc.opacity = 35;
                      ld.active = true;
                      ld.opacity = 35;
                      for (i = 0; i < 6; i++) {
                        element = cc.find("bletter" + (i + 1), this.board);
                        l = cc.find("l", element).getComponent(cc.Label);
                        element.getComponent(DragableLetter_1.default).freezed = false;
                        l.string = letters[i];
                        element.x = DragableLetter_1.default.poses[i].x;
                        element.y = DragableLetter_1.default.poses[i].y;
                        element.getComponent(DragableLetter_1.default).lastPos = DragableLetter_1.default.poses[i];
                        element.getComponent(DragableLetter_1.default).letter = letters[i];
                      }
                      voice_1 = cc.find("voice", this.board);
                      voice_1.active = false;
                      this.dragged = false;
                    } else if (7 == this.currStage || 8 == this.currStage) {
                      this.big_letter.string = "C";
                      txt.getComponent(cc.RichText).string = "Cc";
                      txt.getComponent(cc.RichText).fontSize = 100;
                      this.currWord = "see";
                      if (8 == this.currStage) {
                        this.big_letter.string = "d";
                        txt.getComponent(cc.RichText).string = "Dd";
                        this.currWord = "dee";
                      }
                      txt2.getComponent(cc.RichText).string = "";
                      center = cc.find("p_center", this.board);
                      this.btn_c.x = center.x;
                      this.btn_d.active = false;
                      this.btn_c.y = center.y + 90;
                      this.highlight.y = this.btn_c.y;
                      this.wrongNum = 0;
                    }
                    this.wrongNum = 0;
                    return [ 4, this.showBoard(true) ];

                   case 1:
                    _a.sent();
                    this.playTrumpet("voice");
                    if (!(1 == this.currStage)) return [ 3, 5 ];
                    return [ 4, this.playVoice("listen and click") ];

                   case 2:
                    _a.sent();
                    return [ 4, this.sleep(1) ];

                   case 3:
                    _a.sent();
                    return [ 4, this.playVoice("C") ];

                   case 4:
                    _a.sent();
                    return [ 3, 23 ];

                   case 5:
                    if (!(2 == this.currStage)) return [ 3, 9 ];
                    return [ 4, this.playVoice("listen and click") ];

                   case 6:
                    _a.sent();
                    return [ 4, this.sleep(1) ];

                   case 7:
                    _a.sent();
                    return [ 4, this.playVoice("D") ];

                   case 8:
                    _a.sent();
                    return [ 3, 23 ];

                   case 9:
                    if (!(3 == this.currStage)) return [ 3, 11 ];
                    return [ 4, this.playVoice('find the "c" in the words') ];

                   case 10:
                    _a.sent();
                    return [ 3, 23 ];

                   case 11:
                    if (!(4 == this.currStage)) return [ 3, 13 ];
                    return [ 4, this.playVoice('find the "d" in the words') ];

                   case 12:
                    _a.sent();
                    return [ 3, 23 ];

                   case 13:
                    if (!(5 == this.currStage)) return [ 3, 15 ];
                    return [ 4, this.playVoice("Drag and drop") ];

                   case 14:
                    _a.sent();
                    return [ 3, 23 ];

                   case 15:
                    if (!(6 == this.currStage)) return [ 3, 17 ];
                    return [ 4, this.playVoice("Drag and drop") ];

                   case 16:
                    _a.sent();
                    return [ 3, 23 ];

                   case 17:
                    if (!(7 == this.currStage)) return [ 3, 19 ];
                    return [ 4, this.playVoice("Listen and say, C.") ];

                   case 18:
                    _a.sent();
                    return [ 3, 23 ];

                   case 19:
                    if (!(8 == this.currStage)) return [ 3, 21 ];
                    return [ 4, this.playVoice("Listen and say, D.") ];

                   case 20:
                    _a.sent();
                    return [ 3, 23 ];

                   case 21:
                    return [ 4, this.playVoice("listen and click") ];

                   case 22:
                    _a.sent();
                    _a.label = 23;

                   case 23:
                    this.playTrumpet("voice_end");
                    return [ 4, this.waitingForAnswer(answer) ];

                   case 24:
                    _a.sent();
                    duration = .5;
                    if (!(1 == this.currStage || 2 == this.currStage)) return [ 3, 26 ];
                    this.highlight.active = false;
                    return [ 4, this.hideBoard(duration) ];

                   case 25:
                    _a.sent();
                    pos_center = cc.find("p_center", this.board);
                    destPos = this.getNodeFromMap("p_letter" + this.currStage);
                    uiPos = FloatUtil_1.default.convertToNodeSpace(this.map, this.board, destPos.x, destPos.y);
                    pos_l = cc.find("p_l" + this.currStage, this.board);
                    this.big_letter.node.x = pos_l.x;
                    this.big_letter.node.y = pos_l.y;
                    this.big_letter.node.active = true;
                    this.big_letter.node.opacity = 255;
                    if (1 == this.currStage) {
                      unit_1 = cc.find("unit_C", this.big_letter.node).getComponent(Unit_1.default);
                      unit_1.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_1.node.active = true;
                      cc.tween(this.big_letter.node).to(duration, {
                        x: pos_center.x
                      }).delay(1).to(duration, {
                        x: uiPos.x,
                        y: uiPos.y,
                        scale: 1
                      }).call(function() {
                        _this.playVoice("blink");
                        unit_1.play("shan");
                      }).delay(.5).call(function() {
                        unit_1.node.active = false;
                        func();
                      }).start();
                    } else {
                      unit_2 = cc.find("unit_D", this.big_letter.node).getComponent(Unit_1.default);
                      unit_2.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_2.node.active = true;
                      cc.tween(this.big_letter.node).to(duration, {
                        x: pos_center.x
                      }).delay(1).to(duration, {
                        x: uiPos.x,
                        y: uiPos.y
                      }).call(function() {
                        _this.playVoice("blink");
                        unit_2.play("shan");
                      }).delay(.5).call(function() {
                        unit_2.node.active = false;
                        func();
                      }).start();
                    }
                    return [ 3, 32 ];

                   case 26:
                    if (!(3 == this.currStage || 4 == this.currStage)) return [ 3, 28 ];
                    this.highlight.active = false;
                    return [ 4, this.hideBoard(duration) ];

                   case 27:
                    _a.sent();
                    pos_center = cc.find("p_center", this.board);
                    destPos = this.getNodeFromMap("p_letter" + this.currStage);
                    uiPos = FloatUtil_1.default.convertToNodeSpace(this.map, this.board, destPos.x, destPos.y);
                    pos_l = cc.find("p_l" + this.currStage, this.board);
                    this.big_letter.node.x = pos_l.x;
                    this.big_letter.node.y = pos_l.y;
                    this.big_letter.node.active = true;
                    this.big_letter.node.opacity = 255;
                    unit_3 = null;
                    if (3 == this.currStage) {
                      unit_3 = cc.find("unit_c", this.big_letter.node).getComponent(Unit_1.default);
                      unit_3.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_3.node.active = true;
                    } else {
                      unit_3 = cc.find("unit_d", this.big_letter.node).getComponent(Unit_1.default);
                      unit_3.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_3.node.active = true;
                    }
                    cc.tween(this.big_letter.node).to(duration, {
                      x: pos_center.x
                    }).delay(1).to(duration, {
                      x: uiPos.x,
                      y: uiPos.y
                    }).call(function() {
                      _this.playVoice("blink");
                      unit_3.play("shan");
                    }).delay(.5).call(func).start();
                    return [ 3, 32 ];

                   case 28:
                    if (!(5 == this.currStage || 6 == this.currStage)) return [ 3, 30 ];
                    this.highlight.active = false;
                    this.big_letter.node.active = false;
                    return [ 4, this.hideBoard(duration) ];

                   case 29:
                    _a.sent();
                    pos_center_1 = cc.find("p_center", this.board);
                    destPos = this.getNodeFromMap("p_letter" + this.currStage);
                    uiPos_1 = FloatUtil_1.default.convertToNodeSpace(this.map, this.board, destPos.x, destPos.y);
                    flag_1 = false;
                    func2_1 = function() {
                      if (!flag_1) {
                        flag_1 = true;
                        func();
                      }
                    };
                    unit_4 = null;
                    centraled_1 = null;
                    hadCentraled_1 = false;
                    if (5 == this.currStage) {
                      unit_4 = cc.find("unit_C", this.big_letter.node).getComponent(Unit_1.default);
                      unit_4.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_4.node.active = true;
                      centraled_1 = function() {
                        if (false == hadCentraled_1) {
                          hadCentraled_1 = true;
                          _this.big_letter.node.x = pos_center_1.x;
                          _this.big_letter.node.y = pos_center_1.y;
                          _this.big_letter.node.active = true;
                          cc.tween(_this.big_letter.node).delay(1).to(duration, {
                            x: uiPos_1.x,
                            y: uiPos_1.y
                          }).call(function() {
                            _this.playVoice("blink");
                            unit_4.play("shan");
                          }).delay(.5).call(function() {
                            func2_1();
                          }).start();
                        }
                      };
                    } else {
                      unit_4 = cc.find("unit_D", this.big_letter.node).getComponent(Unit_1.default);
                      unit_4.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_4.node.active = true;
                      centraled_1 = function() {
                        if (false == hadCentraled_1) {
                          hadCentraled_1 = true;
                          _this.big_letter.node.x = pos_center_1.x;
                          _this.big_letter.node.y = pos_center_1.y;
                          _this.big_letter.node.active = true;
                          cc.tween(_this.big_letter.node).delay(1).to(duration, {
                            x: uiPos_1.x,
                            y: uiPos_1.y,
                            scaleX: .3,
                            scaleY: .4
                          }).call(function() {
                            _this.playVoice("blink");
                            unit_4.play("shan");
                          }).delay(.5).call(function() {
                            func2_1();
                          }).start();
                        }
                      };
                    }
                    _loop_1 = function(i) {
                      var element = cc.find("bletter" + (i + 1), this_1.board);
                      var letter = element.getComponent(DragableLetter_1.default);
                      "C" != letter.letter && "D" != letter.letter || cc.tween(letter.node).to(duration, {
                        x: pos_center_1.x,
                        y: pos_center_1.y
                      }).call(function() {
                        letter.node.active = false;
                        centraled_1();
                      }).start();
                    };
                    this_1 = this;
                    for (i = 0; i < 6; i++) _loop_1(i);
                    return [ 3, 32 ];

                   case 30:
                    if (!(7 == this.currStage || 8 == this.currStage)) return [ 3, 32 ];
                    this.highlight.active = false;
                    return [ 4, this.hideBoard(duration) ];

                   case 31:
                    _a.sent();
                    pos_center = cc.find("p_center", this.board);
                    destPos = this.getNodeFromMap("p_letter" + this.currStage);
                    uiPos = FloatUtil_1.default.convertToNodeSpace(this.map, this.board, destPos.x, destPos.y);
                    pos_l = pos_center;
                    this.big_letter.node.x = pos_l.x;
                    this.big_letter.node.y = pos_l.y;
                    this.big_letter.node.active = true;
                    this.big_letter.node.opacity = 255;
                    unit_5 = null;
                    if (7 == this.currStage) {
                      unit_5 = cc.find("unit_c", this.big_letter.node).getComponent(Unit_1.default);
                      unit_5.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_5.node.active = true;
                    } else {
                      unit_5 = cc.find("unit_d", this.big_letter.node).getComponent(Unit_1.default);
                      unit_5.play("idle2");
                      this.big_letter.string = "";
                      this.big_letter.node.scale = .1;
                      unit_5.node.active = true;
                    }
                    cc.tween(this.big_letter.node).to(duration, {
                      x: uiPos.x,
                      y: uiPos.y,
                      scale: 7 == this.currStage ? .1 : .5
                    }).call(function() {
                      _this.playVoice("blink");
                      unit_5.play("shan");
                    }).delay(.5).call(func).start();
                    _a.label = 32;

                   case 32:
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      Float.prototype.runStage1 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pos_boat_onland, pos_boat_inside, pos_boat_onland2, p_landing1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 1;
              this.setHighlight();
              return [ 4, this.tigo.jumpTo(this.getNodeFromMap("p_start")) ];

             case 1:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(this.getNodeFromMap("p_dock")) ];

             case 2:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 3:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_boat_view").x) ];

             case 4:
              _a.sent();
              return [ 4, this.answerQuestion("C") ];

             case 5:
              _a.sent();
              this.playVoice("appear");
              return [ 4, this.fade(this.boat, 255, 1.5) ];

             case 6:
              _a.sent();
              this.switchTigo(this.tigoInBoat);
              pos_boat_onland = cc.find("p_on_land", this.boat);
              this.tigo.node.x = pos_boat_onland.x;
              this.tigo.node.y = pos_boat_onland.y;
              pos_boat_inside = cc.find("p_in_boat", this.boat);
              this.onBoat(this.boat, true, .7);
              return [ 4, this.tigo.jumpTo(pos_boat_inside) ];

             case 7:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              this.followMap(true, this.boat);
              AudioManager_1.default.playLoopEffect("Float", "sound/SE_qihuanpiaoliu_03");
              return [ 4, this.moveTo(this.boat, this.getNodeFromMap("p_boat2").x) ];

             case 8:
              _a.sent();
              AudioManager_1.default.stopLoopEffect("sound/SE_qihuanpiaoliu_03");
              pos_boat_onland2 = cc.find("p_on_land2", this.boat);
              this.onBoat(this.boat, false, .1);
              return [ 4, this.tigo.jumpTo(pos_boat_onland2) ];

             case 9:
              _a.sent();
              this.switchTigo(this.tigoInMap);
              p_landing1 = this.getNodeFromMap("p_landing1");
              this.tigo.node.x = p_landing1.x;
              this.tigo.node.y = p_landing1.y;
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 10:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage2 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, pos_c, pos_d, p_vine1_land;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 2;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_landing1");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              pos_c = cc.find("p_c", this.board);
              pos_d = cc.find("p_d", this.board);
              this.btn_c.x = pos_c.x;
              this.btn_d.x = pos_d.x;
              this.btn_c.opacity = 255;
              this.btn_d.opacity = 255;
              this.followMap(true, this.tigo.node);
              this.setHighlight();
              return [ 4, this.tigo.walkTo(this.getNodeFromMap("p_vine")) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_vine_view").x) ];

             case 5:
              _a.sent();
              return [ 4, this.answerQuestion("D") ];

             case 6:
              _a.sent();
              this.tigo.showVine(true);
              this.playVoice("slide", .5);
              return [ 4, this.tigo.play(Unit_1.default.TIGO_MOVE) ];

             case 7:
              _a.sent();
              return [ 4, this.sleep(.3) ];

             case 8:
              _a.sent();
              this.tigo.showVine(false);
              p_vine1_land = this.getNodeFromMap("p_vine1_land");
              this.tigo.node.x = p_vine1_land.x;
              this.tigo.node.y = p_vine1_land.y;
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.moveMap(p_vine1_land.x) ];

             case 9:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage3 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, m1;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 3;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_vine1_land");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.setHighlight();
              m1 = this.getNodeFromMap("p_m1");
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(m1) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m1_view").x) ];

             case 5:
              _a.sent();
              return [ 4, this.answerQuestion("C") ];

             case 6:
              _a.sent();
              this.playVoice("wave", .5);
              this.tigo.play(Unit_1.default.TIGO_SHOOT1).then(function() {
                _this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              });
              return [ 4, this.sleep(1) ];

             case 7:
              _a.sent();
              this.playVoice("destroyed", .3);
              return [ 4, this.monster1.play(Unit_1.default.MONSTER1_HITTED) ];

             case 8:
              _a.sent();
              this.playVoice("disappear", 1);
              return [ 4, this.monster1.play(Unit_1.default.MONSTER1_DISAPPEAR) ];

             case 9:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage4 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, m2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 4;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_m1");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m1_view").x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.setHighlight();
              m2 = this.getNodeFromMap("p_m2");
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(m2) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m2_view").x) ];

             case 5:
              _a.sent();
              return [ 4, this.answerQuestion("D") ];

             case 6:
              _a.sent();
              this.playVoice("wave", 1);
              this.tigo.play(Unit_1.default.TIGO_SHOOT2).then(function() {
                _this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              });
              return [ 4, this.sleep(.2) ];

             case 7:
              _a.sent();
              this.playVoice("destroyed", 1);
              return [ 4, this.monster2.play(Unit_1.default.MONSTER2_HITTED) ];

             case 8:
              _a.sent();
              this.playVoice("disappear", .4);
              return [ 4, this.monster2.play(Unit_1.default.MONSTER2_DISAPPEAR) ];

             case 9:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage5 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, p_grab_land;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 5;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_m2");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m2_view").x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.followMap(true, this.tigo.node);
              this.setHighlight();
              return [ 4, this.sleep(1) ];

             case 3:
              _a.sent();
              return [ 4, this.tigo.walkTo(this.getNodeFromMap("p_tree")) ];

             case 4:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 5:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_grab_view").x) ];

             case 6:
              _a.sent();
              return [ 4, this.answerQuestion("C") ];

             case 7:
              _a.sent();
              this.playVoice("machine", .3);
              return [ 4, this.tigo.play(Unit_1.default.TIGO_GRAB) ];

             case 8:
              _a.sent();
              return [ 4, this.sleep(.3) ];

             case 9:
              _a.sent();
              p_grab_land = this.getNodeFromMap("p_grab_land");
              this.tigo.node.x = p_grab_land.x;
              this.tigo.node.y = p_grab_land.y;
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.moveMap(p_grab_land.x) ];

             case 10:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage6 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, m2, cover, doorBack;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 6;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_grab_land");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_grab_land").x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.setHighlight();
              m2 = this.getNodeFromMap("p_stone");
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(m2) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_stone_view").x) ];

             case 5:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.answerQuestion("D") ];

             case 6:
              _a.sent();
              cover = cc.find("stone_cover", this.map);
              this.playVoice("open");
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.fade(cover, 0, 2) ];

             case 7:
              _a.sent();
              doorBack = this.getNodeFromMap("p_stone2");
              return [ 4, this.tigo.jumpTo(doorBack) ];

             case 8:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 9:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage7 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, m2;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 7;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_stone2");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.setHighlight();
              m2 = this.getNodeFromMap("p_m3");
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(m2) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m3_view").x) ];

             case 5:
              _a.sent();
              return [ 4, this.answerQuestion("C") ];

             case 6:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SHOOT3).then(function() {
                _this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              });
              return [ 4, this.sleep(.8) ];

             case 7:
              _a.sent();
              this.playVoice("destroyed", .2);
              return [ 4, this.monster3.play(Unit_1.default.MONSTER3_HITTED) ];

             case 8:
              _a.sent();
              this.playVoice("disappear", .3);
              return [ 4, this.monster3.play(Unit_1.default.MONSTER3_DISAPPEAR) ];

             case 9:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.runStage8 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var lastPos, m2, pos_snail_land1, pos_snail_inside, pos_snail_onland2, pos_landing2, pbox;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.currStage = 8;
              if (!this.isDev) return [ 3, 2 ];
              lastPos = this.getNodeFromMap("p_m3");
              this.tigo.node.x = lastPos.x;
              this.tigo.node.y = lastPos.y;
              this.followMap(false);
              return [ 4, this.moveMap(this.getNodeFromMap("p_m3_view").x) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.setHighlight();
              m2 = this.getNodeFromMap("p_snail");
              this.followMap(true, this.tigo.node);
              return [ 4, this.tigo.walkTo(m2) ];

             case 3:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_SCRATCH, true);
              return [ 4, this.sleep(1) ];

             case 4:
              _a.sent();
              return [ 4, this.moveMap(this.getNodeFromMap("p_snail_view").x) ];

             case 5:
              _a.sent();
              return [ 4, this.answerQuestion("D") ];

             case 6:
              _a.sent();
              return [ 4, this.fade(this.snail.node, 255, 1.5) ];

             case 7:
              _a.sent();
              this.switchTigo(this.tigoOnSnail);
              pos_snail_land1 = cc.find("p_snail_land1", this.snail.node);
              this.tigo.node.x = pos_snail_land1.x;
              this.tigo.node.y = pos_snail_land1.y;
              pos_snail_inside = cc.find("p_snail_ride", this.snail.node);
              this.onBoat(this.snail.node, true, .7);
              return [ 4, this.tigo.jumpTo(pos_snail_inside) ];

             case 8:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              this.followMap(true, this.snail.node);
              AudioManager_1.default.playLoopEffect("Float", "sound/SE_qihuanpiaoliu_03");
              return [ 4, this.moveTo(this.snail.node, this.getNodeFromMap("p_snail2").x) ];

             case 9:
              _a.sent();
              AudioManager_1.default.stopLoopEffect("sound/SE_qihuanpiaoliu_03");
              pos_snail_onland2 = cc.find("p_snail_land2", this.snail.node);
              this.onBoat(this.snail.node, false, .1);
              return [ 4, this.tigo.jumpTo(pos_snail_onland2) ];

             case 10:
              _a.sent();
              this.switchTigo(this.tigoInMap);
              pos_landing2 = this.getNodeFromMap("p_landing2");
              this.tigo.node.x = pos_landing2.x;
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              this.followMap(false);
              return [ 4, this.moveMap(this.tigo.node.x) ];

             case 11:
              _a.sent();
              this.followMap(true, this.tigo.node);
              pbox = this.getNodeFromMap("p_box");
              return [ 4, this.tigo.walkTo(pbox) ];

             case 12:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 4, this.box.play(Unit_1.default.BOX_OPENING) ];

             case 13:
              _a.sent();
              this.box.play(Unit_1.default.BOX_OPENED);
              return [ 4, this.playVoice("box") ];

             case 14:
              _a.sent();
              AudioManager_1.default.playEffect("Float", "sound/amazing");
              return [ 4, this.tigo.play(Unit_1.default.TIGO_SURPRISE, true) ];

             case 15:
              _a.sent();
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.enableBtns = function(b) {
        this.btn_c.getComponent(cc.Button).enabled = b;
        this.btn_d.getComponent(cc.Button).enabled = b;
      };
      Float.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.init();
              return [ 4, this.sleep(2) ];

             case 1:
              _a.sent();
              return [ 4, this.runStage1() ];

             case 2:
              _a.sent();
              return [ 4, this.runStage2() ];

             case 3:
              _a.sent();
              return [ 4, this.runStage3() ];

             case 4:
              _a.sent();
              return [ 4, this.runStage4() ];

             case 5:
              _a.sent();
              return [ 4, this.runStage5() ];

             case 6:
              _a.sent();
              return [ 4, this.runStage6() ];

             case 7:
              _a.sent();
              return [ 4, this.runStage7() ];

             case 8:
              _a.sent();
              return [ 4, this.runStage8() ];

             case 9:
              _a.sent();
              this.reward.node.active = true;
              return [ 4, this.reward.play("caidai") ];

             case 10:
              _a.sent();
              return [ 4, this.sleep(1) ];

             case 11:
              _a.sent();
              this.coin.node.active = true;
              AudioManager_1.default.playEffect("Float", "sound/coin_large");
              console.warn("float total stars:" + this.total_star);
              GameData_1.default.addStarNum(this.total_star);
              return [ 4, this.coin.play("Animation") ];

             case 12:
              _a.sent();
              Tigo_1.default.callAppToClose("replayOrNext", true);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.hideBoard = function(duration) {
        return __awaiter(this, void 0, void 0, function() {
          var box, btn_c, btn_d, voice, drop_area, lc, ld, i, element, letter;
          return __generator(this, function(_a) {
            box = cc.find("box", this.board);
            this.fade(box, 0, duration);
            this.highlight.active = false;
            btn_c = cc.find("btn_c", this.board);
            this.fade(btn_c, 0, duration);
            btn_d = cc.find("btn_d", this.board);
            this.fade(btn_d, 0, duration);
            voice = cc.find("voice", this.board);
            this.fade(this.black_mask, 0, duration / 4);
            drop_area = cc.find("drag_area", this.board);
            lc = cc.find("lc", this.board);
            this.fade(lc, 0, duration / 4);
            ld = cc.find("ld", this.board);
            this.fade(ld, 0, duration / 4);
            drop_area.active = false;
            this.coin_board.reset();
            this.mic.active = false;
            for (i = 0; i < 6; i++) {
              element = cc.find("bletter" + (i + 1), this.board);
              letter = element.getComponent(DragableLetter_1.default);
              "C" == letter.letter || "D" == letter.letter || this.fade(element, duration);
            }
            return [ 2, this.fade(voice, 0, duration) ];
          });
        });
      };
      Float.prototype.initBoard = function() {
        var box = cc.find("box", this.board);
        box.opacity = 255;
        this.highlight.active = false;
        var btn_c = cc.find("btn_c", this.board);
        btn_c.opacity = 255;
        var btn_d = cc.find("btn_d", this.board);
        btn_d.opacity = 255;
        var voice = cc.find("voice", this.board);
        voice.opacity = 255;
      };
      Float.prototype.showBoard = function(isShow) {
        return __awaiter(this, void 0, void 0, function() {
          var bY, opa;
          var _this = this;
          return __generator(this, function(_a) {
            bY = 0;
            opa = 123;
            if (!isShow) {
              bY = this.boardPosY;
              opa = 0;
            }
            this.board.x = -this.map.x / this.currMapScale + this.screenSize.width / 2;
            this.board.y = this.boardPosY;
            this.initBoard();
            return [ 2, new Promise(function(resolve) {
              var duration = .5;
              cc.tween(_this.board).to(duration, {
                y: bY
              }, {
                easing: "backOut"
              }).call(function() {
                _this.isBoardShowing = isShow;
                resolve();
              }).start();
              _this.fade(_this.black_mask, opa, duration);
            }) ];
          });
        });
      };
      Float.prototype.getBtn = function(name) {
        return "C" == name ? this.btn_c : this.btn_d;
      };
      Float.prototype.scaleBtn = function(btn) {
        var duration = .2;
        return cc.tween(btn).to(duration, {
          scale: 1.2
        }, {
          easing: "sineOut"
        }).to(duration, {
          scale: 1
        }, {
          easing: "sineIn"
        }).to(duration, {
          scale: 1.2
        }, {
          easing: "sineOut"
        }).to(duration, {
          scale: 1
        }, {
          easing: "sineIn"
        }).start();
      };
      Float.prototype.waitingForAnswer = function(answer) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var from, to;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    this.canDrag = true;
                    this.currAnswer = answer;
                    this.currResolve = resolve;
                    if (this.currStage >= 1 && this.currStage <= 4) {
                      this.enableBtns(true);
                      this.startSelectTimer(5, function() {
                        _this.tweenBtnC = _this.scaleBtn(_this.btn_c);
                        _this.tweenBtnD = _this.scaleBtn(_this.btn_d);
                        _this.startSelectTimer(6);
                      });
                    } else if (5 == this.currStage || 6 == this.currStage) {
                      from = cc.find("bletter1", this.board);
                      to = this.btn_c;
                      6 == this.currStage && (to = this.btn_d);
                      this.dragged || this.hand.playDragTo(from, to, true);
                    }
                    if (!(this.currStage >= 7 && this.currStage <= 8)) return [ 3, 2 ];
                    return [ 4, this.playVoice("record") ];

                   case 1:
                    _a.sent();
                    this.record(this.currWord);
                    _a.label = 2;

                   case 2:
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      Float.prototype.onVoice = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.playTrumpet("voice");
              return [ 4, this.playVoice(this.currAnswer) ];

             case 1:
              _a.sent();
              this.playTrumpet("voice_end");
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.onSelected = function(btn, answer) {
        return __awaiter(this, void 0, void 0, function() {
          var cb, stars;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.enableBtns(false);
              this.setHighlight(answer);
              this.timer_select = 0;
              if (null != this.tweenBtnC) {
                this.tweenBtnC.stop();
                this.tweenBtnC = null;
                this.btn_c.scale = 1;
              }
              if (null != this.tweenBtnD) {
                this.tweenBtnD.stop();
                this.tweenBtnD = null;
                this.btn_d.scale = 1;
              }
              if (!(this.currAnswer != answer)) return [ 3, 2 ];
              this.playVoice("wrong");
              return [ 4, this.shakeBtn(answer) ];

             case 1:
              _a.sent();
              this.enableBtns(true);
              this.startSelectTimer(5);
              this.wrongNum++;
              return [ 3, 4 ];

             case 2:
              if (!this.currResolve) return [ 3, 4 ];
              cb = this.currResolve;
              this.currResolve = null;
              console.log("answer is right, continue>>>>>");
              this.playVoice("right");
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              stars = 3;
              stars = 0 == this.wrongNum ? 3 : 1 == this.wrongNum ? 2 : 1;
              this.total_star += stars;
              Tigo_1.default.callAppToCollect(this.gid, 1004, stars);
              return [ 4, this.coin_board.setCoinAni(stars) ];

             case 3:
              _a.sent();
              cb();
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.setHighlight = function(name) {
        if (!name) {
          this.highlight.active = false;
          return;
        }
        this.highlight.active = true;
        var btn = this.getBtn(name);
        this.highlight.x = btn.x;
      };
      Float.prototype.shakeBtn = function(name) {
        return __awaiter(this, void 0, void 0, function() {
          var btn;
          return __generator(this, function(_a) {
            btn = this.getBtn(name);
            return [ 2, this.shakeBtnByNode(btn) ];
          });
        });
      };
      Float.prototype.shakeBtnByNode = function(btn) {
        return __awaiter(this, void 0, void 0, function() {
          var duration, currX;
          return __generator(this, function(_a) {
            duration = .2;
            currX = btn.x;
            return [ 2, new Promise(function(resolve) {
              cc.tween(btn).to(duration / 2, {
                x: currX - 10
              }).to(duration / 2, {
                x: currX + 10
              }).to(duration / 2, {
                x: currX - 10
              }).to(duration / 2, {
                x: currX + 10
              }).to(duration / 2, {
                x: currX
              }).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      Float.prototype.playTrumpet = function(name) {
        this.trumpet.getComponent(cc.Animation).play(name);
      };
      Float.prototype.stopTrumpet = function() {
        this.trumpet.getComponent(cc.Animation).stop();
      };
      Float.prototype.followMap = function(b, target) {
        this.currFollowUnit = target;
        this.isFollow = b;
      };
      Float.prototype.getSafeMapX = function(xInMap) {
        xInMap < this.screenSize.width / 2 && (xInMap = this.screenSize.width / 2);
        xInMap > this.map.width - this.screenSize.width / 2 && (xInMap = this.map.width - this.screenSize.width / 2);
        return xInMap;
      };
      Float.prototype.walkMap = function(xInMap) {
        xInMap = this.getSafeMapX(xInMap);
        var destX = (-xInMap + this.screenSize.width / 2) * this.currMapScale;
        if (destX > this.map.x) return;
        this.map.x = destX;
      };
      Float.prototype.moveMap = function(xInMap) {
        return __awaiter(this, void 0, void 0, function() {
          var duration;
          var _this = this;
          return __generator(this, function(_a) {
            duration = Math.abs(-this.map.x - xInMap) * this.currMapScale / Unit_1.default.walkSpeed;
            duration = 1;
            xInMap = this.getSafeMapX(xInMap);
            return [ 2, new Promise(function(resolve) {
              cc.tween(_this.map).to(duration, {
                x: (-xInMap + _this.screenSize.width / 2) * _this.currMapScale
              }, {
                easing: "sineInOut"
              }).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      Float.prototype.fade = function(target, opa, duration) {
        void 0 === duration && (duration = 1);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.tween(target).to(duration, {
                opacity: opa
              }, {
                easing: "sineOut"
              }).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      Float.prototype.startDragTimer = function(time, callback) {
        void 0 === callback && (callback = null);
        this.timer_drag = time;
        null != callback && (this.timer_drag_callback = callback);
      };
      Float.prototype.startSelectTimer = function(time, callback) {
        void 0 === callback && (callback = null);
        this.timer_select = time;
        null != callback && (this.timer_select_callback = callback);
      };
      Float.prototype.update = function(dt) {
        this.isFollow && this.currFollowUnit && this.walkMap(this.currFollowUnit.x);
        var barx = -this.map.x / this.currMapScale + this.progressBar.width / 2 + 130;
        this.progressBar.x = barx;
        if (this.farBg) {
          var cur = (-this.map.x - this.mapLeft) / (this.mapRight - this.mapLeft);
          var x = cur * (this.barRight - this.barLeft) + this.barLeft;
          this.cursor.x = x;
          var min = this.bgLeft;
          var max = this.bgRight;
          this.farBg.x = this.bgRight - (this.farBg.width - this.screenSize.width) * cur;
        }
        if (this.timer_drag > 0) {
          this.timer_drag -= dt;
          if (this.timer_drag <= 0 && null != this.timer_drag_callback) {
            var cb = this.timer_drag_callback;
            cb();
          }
        }
        if (this.timer_select > 0) {
          this.timer_select -= dt;
          if (this.timer_select <= 0 && null != this.timer_select_callback) {
            var cb = this.timer_select_callback;
            cb();
          }
        }
      };
      Float.prototype.playVoice = function(name, delay) {
        void 0 === delay && (delay = 0);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            "wrong" != name && "right" != name && "try again" != name && "record" != name && this.playTrumpet("voice");
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    if (!(delay > 0)) return [ 3, 2 ];
                    return [ 4, this.sleep(delay) ];

                   case 1:
                    _a.sent();
                    _a.label = 2;

                   case 2:
                    switch (name) {
                     case "Big C":
                      AudioManager_1.default.stopEffect();
                      AudioManager_1.default.playEffect("Float", "sound/big C", function() {
                        resolve();
                      });
                      break;

                     case "Small c":
                      AudioManager_1.default.stopEffect();
                      AudioManager_1.default.playEffect("Float", "sound/small c", function() {
                        resolve();
                      });
                      break;

                     case "Big D":
                      AudioManager_1.default.stopEffect();
                      AudioManager_1.default.playEffect("Float", "sound/big D", function() {
                        resolve();
                      });
                      break;

                     case "Small d":
                      AudioManager_1.default.stopEffect();
                      AudioManager_1.default.playEffect("Float", "sound/small d", function() {
                        resolve();
                      });
                      break;

                     case "listen and click":
                      AudioManager_1.default.playEffect("Float", "sound/listen_and_click", function() {
                        resolve();
                      });
                      break;

                     case "Listen and say, C.":
                      AudioManager_1.default.playEffect("Float", "sound/listen and say", function() {
                        _this.scheduleOnce(function() {
                          AudioManager_1.default.playEffect("Float", "sound/C", function() {
                            resolve();
                          });
                        }, 1);
                      });
                      break;

                     case "Listen and say, D.":
                      AudioManager_1.default.playEffect("Float", "sound/listen and say", function() {
                        _this.scheduleOnce(function() {
                          AudioManager_1.default.playEffect("Float", "sound/D", function() {
                            resolve();
                          });
                        }, 1);
                      });
                      break;

                     case "C":
                      AudioManager_1.default.playEffect("Float", "sound/C", function() {
                        resolve();
                      });
                      break;

                     case "D":
                      AudioManager_1.default.playEffect("Float", "sound/D", function() {
                        resolve();
                      });
                      break;

                     case 'find the "c" in the words':
                      AudioManager_1.default.playEffect("Float", "sound/find the C in the words", function() {
                        resolve();
                      });
                      break;

                     case 'find the "d" in the words':
                      AudioManager_1.default.playEffect("Float", "sound/find the D in the words", function() {
                        resolve();
                      });
                      break;

                     case "Drag and drop":
                      AudioManager_1.default.playEffect("Float", "sound/drag and drop", function() {
                        resolve();
                      });
                      break;

                     case "blink":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_01", function() {
                        resolve();
                      });
                      break;

                     case "appear":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_02", function() {
                        resolve();
                      });
                      break;

                     case "water":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_03", function() {
                        resolve();
                      });
                      break;

                     case "slide":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_04", function() {
                        resolve();
                      });
                      break;

                     case "wave":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_05", function() {
                        resolve();
                      });
                      break;

                     case "walk":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_06", function() {
                        resolve();
                      });
                      break;

                     case "dart":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_07", function() {
                        resolve();
                      });
                      break;

                     case "machine":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_08", function() {
                        resolve();
                      });
                      break;

                     case "jump":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_09", function() {
                        resolve();
                      });
                      break;

                     case "open":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_10", function() {
                        resolve();
                      });
                      break;

                     case "destroyed":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_11", function() {
                        resolve();
                      });
                      break;

                     case "disappear":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_12", function() {
                        resolve();
                      });
                      break;

                     case "box":
                      AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_13", function() {
                        resolve();
                      });
                      break;

                     case "wrong":
                      AudioManager_1.default.playEffect("Float", "sound/game_error", function() {
                        resolve();
                      });
                      break;

                     case "right":
                      AudioManager_1.default.playEffect("common_en", "sound/game_right", function() {
                        resolve();
                      });
                      break;

                     case "try again":
                      AudioManager_1.default.playEffect("common_en", "sound/try_again", function() {
                        resolve();
                      });
                      break;

                     case "record":
                      AudioManager_1.default.playEffect("common_en", "sound/record", function() {
                        resolve();
                      });
                      break;

                     default:
                      AudioManager_1.default.playEffect("Float", name, function() {
                        resolve();
                      });
                    }
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      Float.prototype.showTip = function(msg) {
        this.tip.string = msg;
        cc.tween(this.tip.node).to(.5, {
          opacity: 255
        }, {
          easing: "sineOut"
        }).delay(2).to(.5, {
          opacity: 0
        }, {
          easing: "sineOut"
        }).start();
      };
      Float.prototype.moveTo = function(target, destX) {
        return __awaiter(this, void 0, void 0, function() {
          var duration, A;
          return __generator(this, function(_a) {
            duration = (destX - target.x) / Unit_1.default.walkSpeed;
            A = 20;
            return [ 2, new Promise(function(resolve) {
              cc.tween(target).parallel(cc.tween().to(duration, {
                x: destX
              }).call(function() {
                resolve();
              }), cc.tween().repeat(2, cc.tween().by(duration / 8, {
                y: -A / 2
              }, {
                easing: "sineOut"
              }).by(duration / 4, {
                y: A
              }, {
                easing: "sineInOut"
              }).by(duration / 8, {
                y: -A / 2
              }, {
                easing: "sineIn"
              }))).start();
            }) ];
          });
        });
      };
      Float.prototype.onBoat = function(target, isOn, delay) {
        return __awaiter(this, void 0, void 0, function() {
          var duration, A;
          return __generator(this, function(_a) {
            duration = .2;
            A = 0;
            A = isOn ? 12 : -10;
            return [ 2, new Promise(function(resolve) {
              cc.tween(target).delay(delay).by(duration, {
                y: -A
              }, {
                easing: "sineOut"
              }).by(duration, {
                y: A
              }, {
                easing: "backOut"
              }).delay(.5).call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      Float.prototype.record = function(word) {
        var _this = this;
        console.log("record begin");
        this.mic.active = true;
        this.mic.getComponent(recordAin_1.default).initeAniFun(3);
        this.currAction = "";
        Tigo_1.default.callAppToRecord(3e3, word);
        this.isDev && this.scheduleOnce(function() {
          _this.receiveAppData({
            action: "TiGoRecordFinish",
            param: {
              path: ""
            }
          });
          _this.scheduleOnce(function() {
            _this.receiveAppData({
              action: "TiGoVoiceEvaluationFinish",
              param: {
                code: "200",
                score: 30
              }
            });
          }, 2);
        }, 3);
      };
      Float.prototype.playRight = function(score) {
        return __awaiter(this, void 0, void 0, function() {
          var cb;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.currResolve) return [ 3, 2 ];
              cb = this.currResolve;
              this.currResolve = null;
              console.log("answer is right, continue>>>>>");
              this.tigo.play(Unit_1.default.TIGO_IDLE, true);
              Tigo_1.default.callAppToCollect(this.gid, 1004, score);
              this.playVoice("right");
              score < 1 && (score = 1);
              score > 3 && (score = 3);
              this.total_star += score;
              return [ 4, this.coin_board.setCoinAni(score) ];

             case 1:
              _a.sent();
              cb();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.playWrong = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.wrongNum++;
              if (this.wrongNum >= 3) {
                this.playRight(1);
                return [ 2 ];
              }
              return [ 4, this.playVoice("try again") ];

             case 1:
              _a.sent();
              return [ 4, this.sleep(1) ];

             case 2:
              _a.sent();
              return [ 4, this.playVoice("record") ];

             case 3:
              _a.sent();
              this.record(this.currWord);
              return [ 2 ];
            }
          });
        });
      };
      Float.prototype.receiveAppData = function(data) {
        console.warn("offbus:receiveAppData  ====  " + JSON.stringify(data));
        switch (data.action) {
         case "TiGoRecordFinish":
          if ("" == this.currAction) {
            this.currAction = data.action;
            Tigo_1.default.callAppToResult(this.currWord, data.param.path);
            var n = Number(GameData_1.default.record_num);
            n += 1;
            GameData_1.default.record_num = n.toString();
            console.warn("record finished >>>>>>>>>");
          }
          break;

         case "TiGoVoiceEvaluationFinish":
          if ("TiGoRecordFinish" == this.currAction) {
            this.mic.active = false;
            this.currAction = data.action;
            if (200 == parseInt(data.param.code)) {
              console.warn("evaluation code 200 >>>>>>>>>" + this.currWord);
              parseInt(data.param.score) > 0 ? this.playRight(parseInt(data.param.score)) : this.playWrong();
            } else {
              console.warn("evaluation failed >>>>>>>>>" + this.currWord);
              this.playWrong();
            }
          }
        }
      };
      var Float_1;
      Float.instance = null;
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5730\u56fe"
      }) ], Float.prototype, "map", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u8239"
      }) ], Float.prototype, "boat", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9ed1\u80cc\u666f"
      }) ], Float.prototype, "black_mask", void 0);
      __decorate([ property({
        type: cc.Label,
        displayName: "tip"
      }) ], Float.prototype, "tip", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "tigo map"
      }) ], Float.prototype, "tigoInMap", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "tigo boat"
      }) ], Float.prototype, "tigoInBoat", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "tigo snail"
      }) ], Float.prototype, "tigoOnSnail", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "\u602a\u7269I"
      }) ], Float.prototype, "monster1", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "\u602a\u7269II"
      }) ], Float.prototype, "monster2", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "\u602a\u7269III"
      }) ], Float.prototype, "monster3", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "\u8717\u725b"
      }) ], Float.prototype, "snail", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5b9d\u7bb11"
      }) ], Float.prototype, "box1", void 0);
      __decorate([ property({
        type: Unit_1.default,
        displayName: "\u5b9d\u7bb1"
      }) ], Float.prototype, "box", void 0);
      Float = Float_1 = __decorate([ ccclass ], Float);
      return Float;
    }(cc.Component);
    exports.default = Float;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "../../common_en/GameData": void 0,
    "../../common_en/Tigo": void 0,
    "../../common_en/coin_fly/coinBoard": void 0,
    "../../common_en/hand/HandEn": void 0,
    "../../common_en/mic/recordAin": void 0,
    "../../common_en/notifierCenter": void 0,
    "./DragableLetter": "DragableLetter",
    "./DroppableLetter": "DroppableLetter",
    "./FloatUtil": "FloatUtil",
    "./Unit": "Unit"
  } ],
  FloatUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4865ffv42lMYYWU6HfA2d0T", "FloatUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FloatUtil = function() {
      function FloatUtil() {}
      FloatUtil.convertToNodeSpace = function(src, dest, xy, y) {
        var worldPos;
        worldPos = "object" == typeof xy ? src.convertToWorldSpaceAR(xy) : src.convertToWorldSpaceAR(cc.v2(xy, y));
        var nodePos = dest.convertToNodeSpaceAR(worldPos);
        return nodePos;
      };
      return FloatUtil;
    }();
    exports.default = FloatUtil;
    cc._RF.pop();
  }, {} ],
  Unit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b52a+78XFCLrTj56LVUVpf", "Unit");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Unit = function(_super) {
      __extends(Unit, _super);
      function Unit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.anchor = null;
        _this.vine = null;
        _this.spine_name = "";
        _this.currResolve = null;
        return _this;
      }
      Unit_1 = Unit;
      Unit.prototype.onLoad = function() {
        var _this = this;
        if (this.spine_name == Unit_1.NAME_TIGO) {
          var slot = this.spine.findSlot("tengtiao");
          this.vine = slot.getAttachment();
          this.showVine(false);
        }
        this.showVine(false);
        this.spine.setCompleteListener(function() {
          if (_this.currResolve) {
            var cb = _this.currResolve;
            _this.currResolve = null;
            cb();
          }
        });
      };
      Unit.prototype.start = function() {};
      Unit.prototype.play = function(name, loop) {
        void 0 === loop && (loop = false);
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.spine.setAnimation(0, name, loop);
              _this.currResolve = resolve;
            }) ];
          });
        });
      };
      Unit.prototype.jumpTo = function(dest) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            AudioManager_1.default.playEffect("Float", "sound/SE_qihuanpiaoliu_09");
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    cc.tween(this.node).delay(.3).to(.4, {
                      x: dest.x,
                      y: dest.y
                    }, {
                      easing: "sineInOut"
                    }).start();
                    return [ 4, this.play(Unit_1.TIGO_JUMP, false) ];

                   case 1:
                    _a.sent();
                    resolve();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      Unit.prototype.walkTo = function(dest) {
        return __awaiter(this, void 0, void 0, function() {
          var duration;
          var _this = this;
          return __generator(this, function(_a) {
            AudioManager_1.default.playLoopEffect("Float", "sound/SE_qihuanpiaoliu_06");
            duration = (dest.x - this.node.x) / Unit_1.walkSpeed;
            return [ 2, new Promise(function(resolve) {
              _this.play(Unit_1.TIGO_WALK, true);
              cc.tween(_this.node).delay(.1).to(duration, {
                x: dest.x
              }).call(function() {
                AudioManager_1.default.stopLoopEffect("sound/SE_qihuanpiaoliu_06");
                resolve();
              }).start();
            }) ];
          });
        });
      };
      Unit.prototype.showVine = function(b) {
        if (this.spine_name == Unit_1.NAME_TIGO) {
          var slot = this.spine.findSlot("tengtiao");
          b ? slot.setAttachment(this.vine) : slot.setAttachment(null);
        }
      };
      var Unit_1;
      Unit.NAME_TIGO = "tigo";
      Unit.TIGO_HAPPY = "happy";
      Unit.TIGO_IDLE = "idle";
      Unit.TIGO_JUMP = "jump";
      Unit.TIGO_MOVE = "move";
      Unit.TIGO_SCRATCH = "naotou";
      Unit.TIGO_SHOOT1 = "shoot1";
      Unit.TIGO_SHOOT2 = "shoot2";
      Unit.TIGO_SHOOT3 = "shoot3";
      Unit.TIGO_SURPRISE = "surprise";
      Unit.TIGO_WALK = "walk";
      Unit.TIGO_GRAB = "zhua";
      Unit.MONSTER1_IDLE = "daiji";
      Unit.MONSTER1_HITTED = "hit";
      Unit.MONSTER1_DISAPPEAR = "xiaoshi";
      Unit.MONSTER2_IDLE = "daiji";
      Unit.MONSTER2_HITTED = "beijida";
      Unit.MONSTER2_DISAPPEAR = "xiaoshi";
      Unit.MONSTER3_IDLE = "daiji_idle";
      Unit.MONSTER3_HITTED = "shouji_idle";
      Unit.MONSTER3_DISAPPEAR = "xiaoshi_idle";
      Unit.SNAIL_IDLE = "idle";
      Unit.SNAIL_HAPPY = "happy";
      Unit.SNAIL_SWIM = "swim";
      Unit.BOX_CLOSED = "idle2";
      Unit.BOX_OPENING = "open";
      Unit.BOX_OPENED = "idle1";
      Unit.JUMP_DUARATION = 1;
      Unit.walkSpeed = 400;
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "spine"
      }) ], Unit.prototype, "spine", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u53c2\u8003\u70b9"
      }) ], Unit.prototype, "anchor", void 0);
      __decorate([ property({
        displayName: "\u540d\u79f0"
      }) ], Unit.prototype, "spine_name", void 0);
      Unit = Unit_1 = __decorate([ ccclass ], Unit);
      return Unit;
    }(cc.Component);
    exports.default = Unit;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ]
}, {}, [ "DragableLetter", "DroppableLetter", "FloatMain", "FloatUtil", "Unit" ]);
//# sourceMappingURL=index.js.map
