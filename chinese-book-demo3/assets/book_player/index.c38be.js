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
  PBBottomArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f548faqjfJFjo+DYy6nON4N", "PBBottomArea");
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
    var PBText_1 = require("./PBText");
    var PBTrumpet_1 = require("./PBTrumpet");
    var PictureBookPlayer_1 = require("./PictureBookPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PBBottomArea = function(_super) {
      __extends(PBBottomArea, _super);
      function PBBottomArea() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.trumpet = null;
        _this.text = null;
        _this.page_num = null;
        return _this;
      }
      PBBottomArea.prototype.onTrumpetClicked = function() {
        console.log("on pbbottomarea >>>>>>>>>>>>");
        var page = PictureBookPlayer_1.default.instance.page.currPage;
        page && page.voice && page.playVoice(0);
      };
      PBBottomArea.prototype.onLoad = function() {
        this.text.text.string = "";
      };
      PBBottomArea.prototype.start = function() {};
      __decorate([ property({
        type: PBTrumpet_1.default,
        displayName: "\u5c0f\u5587\u53ed"
      }) ], PBBottomArea.prototype, "trumpet", void 0);
      __decorate([ property({
        type: PBText_1.default,
        displayName: "\u6587\u672c"
      }) ], PBBottomArea.prototype, "text", void 0);
      __decorate([ property({
        type: cc.RichText,
        displayName: "\u9875\u7801"
      }) ], PBBottomArea.prototype, "page_num", void 0);
      PBBottomArea = __decorate([ ccclass ], PBBottomArea);
      return PBBottomArea;
    }(cc.Component);
    exports.default = PBBottomArea;
    cc._RF.pop();
  }, {
    "./PBText": "PBText",
    "./PBTrumpet": "PBTrumpet",
    "./PictureBookPlayer": "PictureBookPlayer"
  } ],
  PBPageContainer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc9bcirlvhKGJHMFG/SB/lc", "PBPageContainer");
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
    var verlet_render2_1 = require("../verlet/verlet-render2");
    var PBPage_1 = require("./PBPage");
    var PictureBookPlayer_1 = require("./PictureBookPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PBPageContainer = function(_super) {
      __extends(PBPageContainer, _super);
      function PBPageContainer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pages = new Map();
        _this.uniqMap = new Map();
        _this.prefabs = new Map();
        _this.currPageIndex = 0;
        _this.leftHalf = null;
        _this.rightHalf = null;
        _this.leftHalf2 = null;
        _this.rightHalf2 = null;
        _this.verlet = null;
        _this.page_material = null;
        _this.turningLock = false;
        return _this;
      }
      PBPageContainer_1 = PBPageContainer;
      PBPageContainer.prototype.onLoad = function() {
        PBPageContainer_1.instance = this;
        this.node.group = "bookplayer";
        this.verlet = cc.find("verlet", this.node).getComponent(verlet_render2_1.default);
      };
      PBPageContainer.prototype.onEnable = function() {
        var leftNode = cc.find("left1", this.node);
        this.leftHalf = leftNode.getComponent(cc.Sprite);
        leftNode.is3DNode = false;
        leftNode.anchorX = 1;
        leftNode.width = this.node.width / 2;
        leftNode.height = this.node.height;
        leftNode.x = 0;
        leftNode.y = 0;
        var rightNode = cc.find("right1", this.node);
        this.rightHalf = rightNode.getComponent(cc.Sprite);
        rightNode.is3DNode = true;
        rightNode.anchorX = 0;
        rightNode.width = this.node.width / 2;
        rightNode.height = this.node.height;
        rightNode.x = 0;
        rightNode.y = 0;
        var leftNode2 = cc.find("left2", this.node);
        this.leftHalf2 = leftNode2.getComponent(cc.Sprite);
        leftNode2.is3DNode = true;
        leftNode2.anchorX = 1;
        leftNode2.width = this.node.width / 2;
        leftNode2.height = this.node.height;
        leftNode2.x = 0;
        leftNode2.y = 0;
        var rightNode2 = cc.find("right2", this.node);
        this.rightHalf2 = rightNode2.getComponent(cc.Sprite);
        rightNode2.is3DNode = true;
        rightNode2.anchorX = 0;
        rightNode2.width = this.node.width / 2;
        rightNode2.height = this.node.height;
        rightNode2.x = 0;
        rightNode2.y = 0;
      };
      PBPageContainer.prototype.addVerlet = function(page1, page2, initAngle, isNext) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              var node = _this.verlet.node;
              node.active = true;
              node.zIndex = 1e4;
              node.width = _this.node.width / 2;
              node.height = _this.node.height;
              node.anchorX = 0;
              node.x = 0;
              node.y = 0;
              _this.verlet = node.addComponent(verlet_render2_1.default);
              _this.verlet.setMaterial(0, _this.page_material);
              _this.verlet._resetAssembler();
              _this.verlet.updateAngle(initAngle);
              _this.verlet.setTextures(page1.rightSpf.getTexture(), page2.leftSpf.getTexture());
              resolve();
            }) ];
          });
        });
      };
      PBPageContainer.prototype.removeVerlet = function() {
        this.verlet.node.active = false;
        this.verlet.node.removeComponent(verlet_render2_1.default);
      };
      PBPageContainer.prototype.start = function() {};
      PBPageContainer.prototype.addPrefab = function(prefab, index) {
        return __awaiter(this, void 0, void 0, function() {
          var page, eduPage;
          return __generator(this, function(_a) {
            if (cc.isValid(prefab)) {
              this.prefabs.set(index, prefab);
              page = cc.instantiate(prefab).addComponent(PBPage_1.default);
              page.index = index;
              if (0 == index) {
                eduPage = page.node.getComponent("EduPage");
                PictureBookPlayer_1.default.page_count = eduPage.pageNum;
                PictureBookPlayer_1.default.turn_mode = PBPageContainer_1.PageModeEnum[eduPage._turn_mode];
              }
              this.addPage(page);
            } else console.error("prefab is invalid!");
            return [ 2 ];
          });
        });
      };
      PBPageContainer.prototype.addPage = function(page) {
        if (this.uniqMap.has(page.index)) return;
        this.uniqMap.set(page.index, true);
        page.node.zIndex = 10 * -page.index;
        this.node.addChild(page.node);
        this.pages.set(page.index, page);
      };
      Object.defineProperty(PBPageContainer.prototype, "currPage", {
        get: function() {
          return this.pages.get(this.currPageIndex);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PBPageContainer.prototype, "nextPage", {
        get: function() {
          if (this.currPageIndex + 1 < PictureBookPlayer_1.default.page_count) return this.pages.get(this.currPageIndex + 1);
          return null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(PBPageContainer.prototype, "prevPage", {
        get: function() {
          if (this.currPageIndex - 1 >= 0) return this.pages.get(this.currPageIndex - 1);
          return null;
        },
        enumerable: false,
        configurable: true
      });
      PBPageContainer.prototype.onCaptured = function(page) {};
      PBPageContainer.prototype.toNextPage = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var nextPage, currPage;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    nextPage = this.nextPage;
                    if (null == nextPage) {
                      console.log("nextPage is null2>>>");
                      resolve();
                      return [ 2 ];
                    }
                    currPage = this.currPage;
                    return [ 4, currPage.capture() ];

                   case 1:
                    _a.sent();
                    currPage.stopAllSounds();
                    if (!("3d" == PictureBookPlayer_1.default.turn_mode)) return [ 3, 2 ];
                    cc.Camera.main.ortho = false;
                    return [ 3, 4 ];

                   case 2:
                    if (!("verlet" == PictureBookPlayer_1.default.turn_mode)) return [ 3, 4 ];
                    this.leftHalf.node.active = true;
                    this.leftHalf.spriteFrame = currPage.leftSpf;
                    this.rightHalf.node.active = false;
                    this.rightHalf.spriteFrame = nextPage.rightSpf;
                    this.leftHalf2.node.active = false;
                    this.rightHalf2.node.active = false;
                    this.leftHalf.node.eulerAngles = cc.Vec3.ZERO;
                    this.rightHalf.node.eulerAngles = cc.Vec3.ZERO;
                    currPage.node.zIndex = 101;
                    nextPage.node.zIndex = 100;
                    this.leftHalf.node.zIndex = 101;
                    this.rightHalf.node.zIndex = 102;
                    return [ 4, this.addVerlet(currPage, nextPage, 0, true) ];

                   case 3:
                    _a.sent();
                    cc.tween(this.verlet).delay(.05).call(function() {
                      currPage.node.zIndex = 0;
                      nextPage.node.zIndex = 100;
                      _this.rightHalf.node.active = true;
                    }).to(.7, {
                      _angle: 180
                    }).delay(.5).call(function() {
                      _this.leftHalf.node.active = false;
                      _this.rightHalf.node.active = false;
                      _this.currPageIndex = nextPage.index;
                      _this.removeVerlet();
                      resolve();
                    }).start();
                    _a.label = 4;

                   case 4:
                    if ("verlet" != PictureBookPlayer_1.default.turn_mode) {
                      this.leftHalf.spriteFrame = currPage.leftSpf;
                      this.rightHalf.spriteFrame = currPage.rightSpf;
                      this.leftHalf2.spriteFrame = nextPage.leftSpf;
                      this.rightHalf2.spriteFrame = nextPage.rightSpf;
                      this.leftHalf.node.eulerAngles = cc.Vec3.ZERO;
                      this.rightHalf.node.eulerAngles = cc.Vec3.ZERO;
                      this.leftHalf2.node.eulerAngles = cc.v3(0, 90, 0);
                      this.rightHalf2.node.eulerAngles = cc.Vec3.ZERO;
                      this.leftHalf.node.active = true;
                      this.rightHalf.node.active = true;
                      this.leftHalf2.node.active = false;
                      this.rightHalf2.node.active = true;
                      currPage.node.zIndex = 0;
                      nextPage.node.zIndex = 100;
                      this.leftHalf.node.zIndex = nextPage.node.zIndex + 1;
                      this.rightHalf2.node.zIndex = nextPage.node.zIndex;
                      this.rightHalf.node.zIndex = this.rightHalf2.node.zIndex + 1;
                      this.leftHalf2.node.zIndex = this.leftHalf.node.zIndex + 1;
                      cc.tween(this.rightHalf.node).to(PBPageContainer_1.TURN_DURATION / 2, {
                        eulerAngles: cc.v3(0, -90, 0)
                      }, {
                        easing: "sineIn"
                      }).call(function() {
                        _this.rightHalf.node.active = false;
                      }).start();
                      cc.tween(this.leftHalf2.node).delay(PBPageContainer_1.TURN_DURATION / 2).call(function() {
                        _this.leftHalf2.node.active = true;
                      }).to(PBPageContainer_1.TURN_DURATION / 2, {
                        eulerAngles: cc.v3(0, 0, 0)
                      }, {
                        easing: "sineOut"
                      }).call(function() {
                        _this.leftHalf2.node.active = false;
                        _this.leftHalf.node.active = false;
                        _this.rightHalf.node.active = false;
                        _this.currPageIndex = nextPage.index;
                        "3d" == PictureBookPlayer_1.default.turn_mode && (cc.Camera.main.ortho = true);
                        resolve();
                      }).start();
                    }
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      PBPageContainer.prototype.toPrevPage = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var prevPage, currPage;
                var _this = this;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    prevPage = this.prevPage;
                    if (null == prevPage) {
                      resolve();
                      return [ 2 ];
                    }
                    currPage = this.currPage;
                    return [ 4, currPage.capture() ];

                   case 1:
                    _a.sent();
                    currPage.stopAllSounds();
                    if (!("3d" == PictureBookPlayer_1.default.turn_mode)) return [ 3, 2 ];
                    cc.Camera.main.ortho = false;
                    return [ 3, 4 ];

                   case 2:
                    if (!("verlet" == PictureBookPlayer_1.default.turn_mode)) return [ 3, 4 ];
                    this.leftHalf.node.active = false;
                    this.leftHalf.spriteFrame = prevPage.leftSpf;
                    this.rightHalf.node.active = true;
                    this.rightHalf.spriteFrame = currPage.rightSpf;
                    this.leftHalf2.node.active = false;
                    this.rightHalf2.node.active = false;
                    this.leftHalf.node.eulerAngles = cc.Vec3.ZERO;
                    this.rightHalf.node.eulerAngles = cc.Vec3.ZERO;
                    currPage.node.zIndex = 101;
                    prevPage.node.zIndex = 100;
                    this.leftHalf.node.zIndex = 101;
                    this.rightHalf.node.zIndex = 100;
                    return [ 4, this.addVerlet(prevPage, currPage, 180, false) ];

                   case 3:
                    _a.sent();
                    cc.tween(this.verlet).delay(.05).call(function() {
                      currPage.node.zIndex = 0;
                      prevPage.node.zIndex = 100;
                      _this.leftHalf.node.active = true;
                    }).to(.7, {
                      _angle: 0
                    }).delay(.5).call(function() {
                      _this.leftHalf2.node.active = false;
                      _this.rightHalf.node.active = false;
                      _this.rightHalf2.node.active = false;
                      _this.leftHalf.node.active = false;
                      _this.currPageIndex = prevPage.index;
                      _this.removeVerlet();
                      resolve();
                    }).start();
                    _a.label = 4;

                   case 4:
                    if ("verlet" != PictureBookPlayer_1.default.turn_mode) {
                      this.leftHalf.spriteFrame = currPage.leftSpf;
                      this.rightHalf.spriteFrame = currPage.rightSpf;
                      this.leftHalf2.spriteFrame = prevPage.leftSpf;
                      this.rightHalf2.spriteFrame = prevPage.rightSpf;
                      this.leftHalf.node.eulerAngles = cc.Vec3.ZERO;
                      this.rightHalf.node.eulerAngles = cc.Vec3.ZERO;
                      this.leftHalf2.node.eulerAngles = cc.Vec3.ZERO;
                      this.rightHalf2.node.eulerAngles = cc.v3(0, -90, 0);
                      this.leftHalf.node.active = true;
                      this.rightHalf.node.active = true;
                      this.leftHalf2.node.active = true;
                      this.rightHalf2.node.active = false;
                      currPage.node.zIndex = 0;
                      prevPage.node.zIndex = 100;
                      this.leftHalf2.node.zIndex = prevPage.node.zIndex + 1;
                      this.rightHalf.node.zIndex = this.leftHalf2.node.zIndex;
                      this.rightHalf2.node.zIndex = this.rightHalf.node.zIndex + 1;
                      this.leftHalf.node.zIndex = this.leftHalf2.node.zIndex + 1;
                      cc.tween(this.leftHalf.node).to(PBPageContainer_1.TURN_DURATION / 2, {
                        eulerAngles: cc.v3(0, 90, 0)
                      }, {
                        easing: "sineIn"
                      }).call(function() {
                        _this.leftHalf.node.active = false;
                      }).start();
                      cc.tween(this.rightHalf2.node).delay(PBPageContainer_1.TURN_DURATION / 2).call(function() {
                        _this.rightHalf2.node.active = true;
                      }).to(PBPageContainer_1.TURN_DURATION / 2, {
                        eulerAngles: cc.v3(0, 0, 0)
                      }, {
                        easing: "sineOut"
                      }).call(function() {
                        _this.rightHalf2.node.active = false;
                        _this.leftHalf2.node.active = false;
                        _this.rightHalf.node.active = false;
                        _this.currPageIndex = prevPage.index;
                        "3d" == PictureBookPlayer_1.default.turn_mode && (cc.Camera.main.ortho = true);
                        resolve();
                      }).start();
                    }
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      PBPageContainer.prototype.unloadPrev = function() {
        var index = this.currPageIndex - 2;
        if (index >= 0) {
          var page = this.pages.get(index);
          var name = PictureBookPlayer_1.default.instance.getPrefabName(index);
          page && page.node.destroy();
          var prefab = this.prefabs.get(index);
          if (prefab) {
            cc.assetManager.releaseAsset(prefab);
            prefab.destroy();
          }
          this.uniqMap.delete(index);
          this.pages.delete(index);
          PictureBookPlayer_1.default.instance.book_bundle.release(name, cc.Prefab);
        }
      };
      PBPageContainer.prototype.unloadNext = function() {
        var index = this.currPageIndex + 2;
        if (index < PictureBookPlayer_1.default.page_count) {
          var page = this.pages.get(index);
          var name = PictureBookPlayer_1.default.instance.getPrefabName(index);
          page && page.node.destroy();
          var prefab = this.prefabs.get(index);
          if (prefab) {
            cc.assetManager.releaseAsset(prefab);
            prefab.destroy();
          }
          this.uniqMap.delete(index);
          this.pages.delete(index);
          PictureBookPlayer_1.default.instance.book_bundle.release(name, cc.Prefab);
        }
      };
      PBPageContainer.prototype.forward = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nextPage;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.turningLock) return [ 2, false ];
              nextPage = this.nextPage;
              if (null == nextPage) return [ 2, false ];
              this.turningLock = true;
              AudioManager_1.default.playEffect("book_player", "sound/changepage");
              return [ 4, this.toNextPage() ];

             case 1:
              _a.sent();
              if (!(this.currPageIndex < PictureBookPlayer_1.default.page_count - 1)) return [ 3, 3 ];
              return [ 4, this.loadNext() ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              PictureBookPlayer_1.default.instance.updatePageNum();
              this.unloadPrev();
              this.turningLock = false;
              return [ 2, true ];
            }
          });
        });
      };
      PBPageContainer.prototype.backward = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.turningLock) return [ 2 ];
              this.turningLock = true;
              AudioManager_1.default.playEffect("book_player", "sound/changepage");
              return [ 4, this.toPrevPage() ];

             case 1:
              _a.sent();
              if (!(this.currPageIndex > 0)) return [ 3, 3 ];
              return [ 4, this.loadPrev() ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              PictureBookPlayer_1.default.instance.updatePageNum();
              this.unloadNext();
              this.turningLock = false;
              return [ 2 ];
            }
          });
        });
      };
      PBPageContainer.prototype.loadNext = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var prefab;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    console.warn("load next:" + (this.currPageIndex + 1));
                    return [ 4, PictureBookPlayer_1.default.instance.loadPage(this.currPageIndex + 1) ];

                   case 1:
                    prefab = _a.sent();
                    prefab && this.addPrefab(prefab, this.currPageIndex + 1);
                    resolve();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      PBPageContainer.prototype.loadPrev = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              return __awaiter(_this, void 0, void 0, function() {
                var prefab;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    return [ 4, PictureBookPlayer_1.default.instance.loadPage(this.currPageIndex - 1) ];

                   case 1:
                    prefab = _a.sent();
                    prefab && this.addPrefab(prefab, this.currPageIndex - 1);
                    resolve();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      var PBPageContainer_1;
      PBPageContainer.instance = null;
      PBPageContainer.PageModeEnum = cc.Enum({
        verlet: 0,
        "2d": 1,
        "3d": 2
      });
      PBPageContainer.TURN_DURATION = .8;
      __decorate([ property({
        type: cc.Material,
        displayName: "\u7ffb\u9875"
      }) ], PBPageContainer.prototype, "page_material", void 0);
      PBPageContainer = PBPageContainer_1 = __decorate([ ccclass ], PBPageContainer);
      return PBPageContainer;
    }(cc.Component);
    exports.default = PBPageContainer;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "../verlet/verlet-render2": "verlet-render2",
    "./PBPage": "PBPage",
    "./PictureBookPlayer": "PictureBookPlayer"
  } ],
  PBPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "efab8iXeKxH3I2GfRPcgqKQ", "PBPage");
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
    var PBPageContainer_1 = require("./PBPageContainer");
    var PictureBookPlayer_1 = require("./PictureBookPlayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PBPage = function(_super) {
      __extends(PBPage, _super);
      function PBPage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.renderTexture = null;
        _this.index = 0;
        _this.leftSpf = null;
        _this.rightSpf = null;
        _this.music = null;
        _this.voice = null;
        _this.sound = null;
        _this.soundLoop = true;
        _this.text = "";
        _this.soundMap = new Map();
        return _this;
      }
      PBPage.prototype.onLoad = function() {
        var eduPage = this.node.getComponent("EduPage");
        this.music = eduPage.music;
        this.voice = eduPage.voice;
        this.sound = eduPage.sound;
        this.soundLoop = eduPage.soundLoop;
        this.text = eduPage.text;
      };
      PBPage.prototype.sleep = function(seconds) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.scheduleOnce(function() {
                resolve();
              }, seconds);
            }) ];
          });
        });
      };
      PBPage.findImage = function(root) {
        var img = root.getComponent(cc.Sprite);
        if (img && root.width >= 1334 && root.height >= 750) return img;
        for (var i = 0; i < root.children.length; i++) {
          var element = root.children[i];
          img = this.findImage(element);
          if (img) return img;
        }
        return null;
      };
      PBPage.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          var eduPage, music;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.image = cc.find("bg", this.node).getComponent(cc.Sprite);
              eduPage = this.node.getComponent("EduPage");
              music = eduPage.music;
              this.fixBg();
              return [ 4, this.capture() ];

             case 1:
              _a.sent();
              PictureBookPlayer_1.default.instance.onPageLoaded(this);
              this.music && cc.audioEngine.playMusic(this.music, true);
              return [ 2 ];
            }
          });
        });
      };
      PBPage.prototype.fixBg = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.image.node.width / this.image.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.image.node.width * screenSize.height / this.image.node.height;
          this.image.node.width = width;
          this.image.node.height = screenSize.height;
        } else {
          var height = this.image.node.height * screenSize.width / this.image.node.width;
          this.image.node.width = screenSize.width;
          this.image.node.height = height;
        }
        this.image.node.x = 0;
        this.image.node.y = 0;
      };
      PBPage.prototype.setLeftRight = function(left, right) {};
      PBPage.prototype.capture = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              var width = cc.visibleRect.width;
              var height = cc.visibleRect.height;
              var node = new cc.Node("capture node");
              node.parent = _this.node;
              var camera = node.addComponent(cc.Camera);
              camera.backgroundColor = cc.Color.TRANSPARENT;
              camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
              camera.cullingMask = 4;
              camera.rect = cc.rect(0, 0, 1, 1);
              var renderTexture = new cc.RenderTexture();
              var gl = cc.game["_renderContext"];
              var fmt = gl.STENCIL_INDEX8;
              renderTexture.initWithSize(width, height, fmt);
              camera.targetTexture = renderTexture;
              camera.render();
              var arr = new Uint8Array(width * height * 4);
              renderTexture.readPixels(arr, 0, 0, width / 2, height);
              var texture = new cc.Texture2D();
              texture.setFlipY(true);
              texture.initWithData(arr, fmt, width / 2, height);
              var sp = new cc.SpriteFrame(texture);
              _this.leftSpf = sp;
              var arr2 = new Uint8Array(width * height * 4);
              renderTexture.readPixels(arr2, width / 2, 0, width / 2, height);
              var texture2 = new cc.Texture2D();
              texture2.setFlipY(true);
              texture2.initWithData(arr2, fmt, width / 2, height);
              var sp2 = new cc.SpriteFrame(texture2);
              _this.rightSpf = sp2;
              renderTexture = null;
              arr = null;
              arr2 = null;
              node.destroy();
              resolve();
              PBPageContainer_1.default.instance.onCaptured(_this);
            }) ];
          });
        });
      };
      PBPage.prototype.getSound = function(index) {
        return this.sound;
      };
      PBPage.prototype.getVoice = function(index) {
        return this.voice;
      };
      PBPage.prototype.playEffect = function(clip, single, loop) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              var duration = clip.duration;
              if (single && _this.soundMap.has(clip.nativeUrl)) {
                var id_1 = _this.soundMap.get(clip.nativeUrl);
                cc.audioEngine.stopEffect(id_1);
              }
              var id = cc.audioEngine.playEffect(clip, loop);
              _this.soundMap.set(clip.nativeUrl, id);
              _this.scheduleOnce(function() {
                _this.soundMap.has(clip.nativeUrl) && _this.soundMap.delete(clip.nativeUrl);
                console.log("sound play over" + clip.nativeUrl);
                resolve();
              }, duration);
            }) ];
          });
        });
      };
      PBPage.prototype.playVoice = function(index) {
        return __awaiter(this, void 0, void 0, function() {
          var sound;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              sound = this.getVoice(index);
              if (!sound) return [ 3, 2 ];
              PictureBookPlayer_1.default.instance.bottomArea.trumpet.play();
              return [ 4, this.playEffect(sound, true, false) ];

             case 1:
              _a.sent();
              PictureBookPlayer_1.default.instance.bottomArea.trumpet.stop();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      PBPage.prototype.playSound = function(index) {
        return __awaiter(this, void 0, void 0, function() {
          var sound;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              sound = this.getSound(index);
              if (!sound) return [ 3, 2 ];
              return [ 4, this.playEffect(sound, true, this.soundLoop) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      PBPage.prototype.onDestroy = function() {
        console.log("destroy page: " + this.index);
        if (this.leftSpf) {
          this.leftSpf.destroy();
          this.leftSpf = null;
        }
        if (this.rightSpf) {
          this.rightSpf.destroy();
          this.rightSpf = null;
        }
      };
      PBPage.prototype.stopAllSounds = function() {
        if (this.sound) {
          var clip = this.sound;
          if (this.soundMap.has(clip.nativeUrl)) {
            var id = this.soundMap.get(clip.nativeUrl);
            cc.audioEngine.stopEffect(id);
          }
        }
        if (this.voice) {
          var clip = this.voice;
          if (this.soundMap.has(clip.nativeUrl)) {
            var id = this.soundMap.get(clip.nativeUrl);
            cc.audioEngine.stopEffect(id);
          }
        }
        this.music && cc.audioEngine.stopMusic();
      };
      PBPage = __decorate([ ccclass ], PBPage);
      return PBPage;
    }(cc.Component);
    exports.default = PBPage;
    cc._RF.pop();
  }, {
    "./PBPageContainer": "PBPageContainer",
    "./PictureBookPlayer": "PictureBookPlayer"
  } ],
  PBText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4d31ZAMe1EuLuYb1+YH/en", "PBText");
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
    var PBText = function(_super) {
      __extends(PBText, _super);
      function PBText() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.text = null;
        return _this;
      }
      PBText.prototype.start = function() {};
      __decorate([ property({
        type: cc.RichText,
        displayName: "\u6587\u672c"
      }) ], PBText.prototype, "text", void 0);
      PBText = __decorate([ ccclass ], PBText);
      return PBText;
    }(cc.Component);
    exports.default = PBText;
    cc._RF.pop();
  }, {} ],
  PBTrumpet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c97c0GQQjZPhqQ/b0IPc4iv", "PBTrumpet");
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
    var PBTrumpet = function(_super) {
      __extends(PBTrumpet, _super);
      function PBTrumpet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
      }
      PBTrumpet.prototype.onLoad = function() {
        this.anim = cc.find("icon", this.node).getComponent(cc.Animation);
      };
      PBTrumpet.prototype.play = function() {
        this.anim.play("playing");
      };
      PBTrumpet.prototype.stop = function() {
        this.anim.play("pausing");
      };
      PBTrumpet.prototype.start = function() {};
      PBTrumpet = __decorate([ ccclass ], PBTrumpet);
      return PBTrumpet;
    }(cc.Component);
    exports.default = PBTrumpet;
    cc._RF.pop();
  }, {} ],
  PictureBookPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "220631Y0ZFIpYIcbmbmelck", "PictureBookPlayer");
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
    var bundleUtils_1 = require("../../../kit/utils/bundleUtils");
    var PBBottomArea_1 = require("./PBBottomArea");
    var PBPageContainer_1 = require("./PBPageContainer");
    var BaseChapterComponent_1 = require("../../../common/scripts/BaseChapterComponent");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PictureBookPlayer = function(_super) {
      __extends(PictureBookPlayer, _super);
      function PictureBookPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.left_slot = null;
        _this.right_slot = null;
        _this.bottom_slot = null;
        _this.page_slot = null;
        _this.book_bundle = null;
        _this.bottomArea = null;
        _this.left_arrow = null;
        _this.right_arrow = null;
        _this.book_bundle_name = "";
        _this.page = null;
        _this.playMode = PictureBookPlayer_1.PLAY_MODE_AUTO;
        _this.mode_btn = null;
        _this.autoturnpage = 10;
        _this.autoturnpage_after_voice = 5;
        _this.needAutoTurnPage = false;
        _this.restTime = 0;
        return _this;
      }
      PictureBookPlayer_1 = PictureBookPlayer;
      PictureBookPlayer.prototype.setText = function(txt) {
        this.bottomArea.text.text.string = txt;
      };
      Object.defineProperty(PictureBookPlayer.prototype, "bookBundleName", {
        set: function(name) {
          this.book_bundle_name = name;
        },
        enumerable: false,
        configurable: true
      });
      PictureBookPlayer.prototype.loadBook = function(bundleName) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.bookBundleName = bundleName;
            return [ 2, new Promise(function(resolve) {
              bundleUtils_1.loadBundle(_this.book_bundle_name).then(function(bundle) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      this.book_bundle = bundle;
                      return [ 4, this.loadFirstPage() ];

                     case 1:
                      _a.sent();
                      this.updatePageNum();
                      kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_READY);
                      return [ 2 ];
                    }
                  });
                });
              });
            }) ];
          });
        });
      };
      PictureBookPlayer.prototype.onLoad = function() {
        PictureBookPlayer_1.instance = this;
        this.left_slot = cc.find("left_slot", this.node);
        this.right_slot = cc.find("right_slot", this.node);
        this.bottom_slot = cc.find("bottom_slot", this.node);
        this.left_arrow = cc.find("left_arrow", this.left_slot);
        this.left_arrow.active = true;
        this.right_arrow = cc.find("right_arrow", this.right_slot);
        this.right_arrow.active = true;
        this.bottomArea = cc.find("bottom_area", this.bottom_slot).getComponent(PBBottomArea_1.default);
        this.bottomArea.node.active = true;
        this.page_slot = cc.find("page_slot", this.node);
        this.page = cc.find("page", this.page_slot).getComponent(PBPageContainer_1.default);
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.onParams, this);
        this.mode_btn = cc.find("mode_btn", this.node).getComponent(cc.Button);
      };
      PictureBookPlayer.prototype.onDestroy = function() {
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.onParams, this);
      };
      PictureBookPlayer.prototype.onParams = function(data) {
        this.params = data.data;
        this.loadBook(this.params.bundle);
      };
      PictureBookPlayer.prototype.onPageLoaded = function(page) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            if (page.index == this.page.currPageIndex) {
              page.text && page.text.length > 0 && PictureBookPlayer_1.instance.setText(page.text);
              page.sound && page.playSound(0);
              this.pageTimer(page);
            }
            return [ 2 ];
          });
        });
      };
      PictureBookPlayer.prototype.pageTimer = function(page) {
        var _this = this;
        this.needAutoTurnPage = false;
        if (page.voice) this.autoturnpage > 0 ? page.playVoice(0).then(function() {
          if (_this.playMode == PictureBookPlayer_1.PLAY_MODE_AUTO) {
            _this.needAutoTurnPage = true;
            _this.restTime = _this.autoturnpage_after_voice;
          }
        }) : page.playVoice(0); else {
          this.needAutoTurnPage = true;
          this.restTime = this.autoturnpage;
        }
      };
      PictureBookPlayer.prototype.update = function(dt) {
        if (this.needAutoTurnPage && this.restTime > 0) {
          this.restTime -= dt;
          if (this.restTime <= 0) {
            console.log("auto turn page >>>>>");
            this.onRightArrowClicked();
          }
        }
      };
      PictureBookPlayer.prototype.sleep = function(seconds) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              _this.scheduleOnce(function() {
                resolve();
              }, seconds);
            }) ];
          });
        });
      };
      PictureBookPlayer.prototype.onPageUnLoaded = function(page) {
        if (page.index == this.page.currPageIndex) {
          PictureBookPlayer_1.instance.setText("");
          AudioManager_1.default.stopEffect();
        }
      };
      PictureBookPlayer.prototype.updatePageNum = function() {
        this.bottomArea.page_num.string = this.page.currPageIndex + 1 + "/" + PictureBookPlayer_1.page_count;
      };
      PictureBookPlayer.prototype.loadFirstPage = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var prefab, error_1;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    prefab = null;
                    _a.label = 1;

                   case 1:
                    _a.trys.push([ 1, 4, , 5 ]);
                    return [ 4, this.loadPage(0) ];

                   case 2:
                    prefab = _a.sent();
                    null == prefab;
                    return [ 4, this.page.addPrefab(prefab, 0) ];

                   case 3:
                    _a.sent();
                    this.page.loadNext();
                    return [ 3, 5 ];

                   case 4:
                    error_1 = _a.sent();
                    return [ 3, 5 ];

                   case 5:
                    resolve();
                    return [ 2 ];
                  }
                });
              });
            }) ];
          });
        });
      };
      PictureBookPlayer.prototype.getPrefabName = function(index) {
        var prefabName = "EduPage";
        if (0 == index) return prefabName;
        if (index > 0) {
          var str = "" + index;
          1 == str.length ? prefabName += " - 00" + str : 2 == str.length ? prefabName += " - 0" + str : prefabName += " - " + str;
        }
        return prefabName;
      };
      PictureBookPlayer.prototype.loadPage = function(index) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              var prefabName = _this.getPrefabName(index);
              _this.book_bundle.load(prefabName, cc.Prefab, function(error, prefab) {
                error && resolve(null);
                resolve(prefab);
              });
            }) ];
          });
        });
      };
      PictureBookPlayer.prototype.start = function() {};
      PictureBookPlayer.prototype.onLeftArrowClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (0 == this.page.currPageIndex) return [ 2 ];
              this.needAutoTurnPage = false;
              this.restTime = 0;
              this.onPageUnLoaded(this.page.currPage);
              return [ 4, this.page.backward() ];

             case 1:
              _a.sent();
              this.onPageLoaded(this.page.currPage);
              return [ 2 ];
            }
          });
        });
      };
      PictureBookPlayer.prototype.onRightArrowClicked = function() {
        return __awaiter(this, void 0, void 0, function() {
          var b;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.page.currPageIndex == PictureBookPlayer_1.page_count) return [ 2 ];
              this.needAutoTurnPage = false;
              this.restTime = 0;
              this.onPageUnLoaded(this.page.currPage);
              return [ 4, this.page.forward() ];

             case 1:
              b = _a.sent();
              b && this.onPageLoaded(this.page.currPage);
              return [ 2 ];
            }
          });
        });
      };
      PictureBookPlayer.prototype.onModeChanged = function() {
        var label = cc.find("Label", cc.find("Background", this.mode_btn.node)).getComponent(cc.Label);
        if (this.playMode == PictureBookPlayer_1.PLAY_MODE_AUTO) {
          this.playMode = PictureBookPlayer_1.PLAY_MODE_MANAUL;
          label.string = "\u624b\u52a8";
        } else {
          this.playMode = PictureBookPlayer_1.PLAY_MODE_AUTO;
          label.string = "\u81ea\u52a8";
          var page = this.page.currPage;
          this.pageTimer(page);
        }
      };
      var PictureBookPlayer_1;
      PictureBookPlayer.instance = null;
      PictureBookPlayer.turn_mode = "verlet";
      PictureBookPlayer.PLAY_MODE_AUTO = 0;
      PictureBookPlayer.PLAY_MODE_MANAUL = 1;
      PictureBookPlayer.page_count = 0;
      PictureBookPlayer = PictureBookPlayer_1 = __decorate([ ccclass ], PictureBookPlayer);
      return PictureBookPlayer;
    }(BaseChapterComponent_1.default);
    exports.default = PictureBookPlayer;
    cc._RF.pop();
  }, {
    "../../../common/scripts/BaseChapterComponent": void 0,
    "../../../kit/kit": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/utils/bundleUtils": void 0,
    "./PBBottomArea": "PBBottomArea",
    "./PBPageContainer": "PBPageContainer"
  } ],
  "page-effect-assembler-base2": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e9c0ehihUtGgbBcyfQaq4E/", "page-effect-assembler-base2");
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
    var PageEffectAssemblerBase = function(_super) {
      __extends(PageEffectAssemblerBase, _super);
      function PageEffectAssemblerBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.colorOffset = 4;
        _this.renderData = null;
        return _this;
      }
      Object.defineProperty(PageEffectAssemblerBase.prototype, "verticesFloats", {
        get: function() {
          return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
      });
      PageEffectAssemblerBase.prototype.getBuffer = function() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
      };
      PageEffectAssemblerBase.prototype.getVfmt = function() {
        return null;
      };
      PageEffectAssemblerBase.prototype.updateColor = function(comp, color) {
        var uintVerts = this.renderData.uintVDatas[0];
        if (!uintVerts) return;
        color = null != color ? color : comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) uintVerts[i] = color;
      };
      PageEffectAssemblerBase.prototype.updateIsFront = function(comp, dataOffset) {
        var verts = this.renderData.vDatas[0];
        var index = 0;
        var floatsPerVert = this.floatsPerVert;
        for (var i = 0, n = this.verticesCount; i < n; ++i) {
          index = i * floatsPerVert;
          var isFirstVert = i % 2 === 0;
          var firstVertX = isFirstVert ? verts[index] : verts[index - floatsPerVert];
          var secondVertX = isFirstVert ? verts[index + floatsPerVert] : verts[index];
          var isFront = firstVertX < secondVertX ? 1 : 0;
          verts[index + dataOffset] = isFront;
        }
      };
      PageEffectAssemblerBase.prototype.initData = function() {
        this.renderData = new cc.RenderData();
        this.renderData.init(this);
        var data = this.renderData;
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
          var vertextID = 4 * i;
          indices[idx++] = vertextID;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 2;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 3;
          indices[idx++] = vertextID + 2;
        }
      };
      PageEffectAssemblerBase.prototype.fillBuffers = function(comp, renderer) {
        var renderData = this.renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        vData.length + vertexOffset > vbuf.length ? vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset) : vbuf.set(vData, vertexOffset);
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0, l = iData.length; i < l; i++) ibuf[indiceOffset++] = vertexId + iData[i];
      };
      return PageEffectAssemblerBase;
    }(cc.Assembler);
    exports.default = PageEffectAssemblerBase;
    cc._RF.pop();
  }, {} ],
  "verlet-assembler2": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4be4a/wWC5PZZauUX4QVERd", "verlet-assembler2");
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
    var page_effect_assembler_base2_1 = require("./page-effect-assembler-base2");
    var gfx = cc.gfx;
    var vfmtPosUvColorFront = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV0,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_COLOR,
      type: gfx.ATTR_TYPE_UINT8,
      num: 4,
      normalize: true
    }, {
      name: "a_isFront",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 1
    } ]);
    var VerletAssembler = function(_super) {
      __extends(VerletAssembler, _super);
      function VerletAssembler() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      VerletAssembler.prototype.init = function(comp) {
        _super.prototype["init"].call(this, comp);
        var segmentCount = comp.pointsCount - 1;
        this.verticesCount = 4 * segmentCount;
        this.indicesCount = 6 * segmentCount;
        this.floatsPerVert = 6;
        this.initData();
      };
      VerletAssembler.prototype.getVfmt = function() {
        return vfmtPosUvColorFront;
      };
      VerletAssembler.prototype.updateRenderData = function(comp) {
        if (comp) {
          var pointList = comp.getPointList();
          var pointNum = pointList.length;
          if (pointNum < 2) return;
          var node = comp.node;
          var height = node.height;
          var width = node.width;
          var posX = -width * node.anchorX;
          var posY = -height * node.anchorY;
          var gapU = 1 / (pointNum - 1);
          var lastU = 0;
          var nextU = 0;
          var floatsPerVert = this.floatsPerVert;
          var verts = this.renderData.vDatas[0];
          var dstOffset = 0;
          for (var i = 1; i < pointNum; i++) {
            var lastPoint = pointList[i - 1];
            var nextPoint = pointList[i];
            nextU = lastU + gapU;
            dstOffset = floatsPerVert * (i - 1) * 4;
            verts[dstOffset] = posX + lastPoint.x;
            verts[dstOffset + 1] = posY + lastPoint.y;
            verts[dstOffset + 2] = lastU;
            verts[dstOffset + 3] = 1;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + nextPoint.x;
            verts[dstOffset + 1] = posY + nextPoint.y;
            verts[dstOffset + 2] = nextU;
            verts[dstOffset + 3] = 1;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + lastPoint.x;
            verts[dstOffset + 1] = posY + height + lastPoint.y;
            verts[dstOffset + 2] = lastU;
            verts[dstOffset + 3] = 0;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + nextPoint.x;
            verts[dstOffset + 1] = posY + height + nextPoint.y;
            verts[dstOffset + 2] = nextU;
            verts[dstOffset + 3] = 0;
            lastU = nextU;
          }
          this.updateColor(comp, null);
          this.updateIsFront(comp, 5);
        }
      };
      return VerletAssembler;
    }(page_effect_assembler_base2_1.default);
    exports.default = VerletAssembler;
    cc._RF.pop();
  }, {
    "./page-effect-assembler-base2": "page-effect-assembler-base2"
  } ],
  "verlet-render2": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e59fXHoFNJk7aQAFr6Gayi", "verlet-render2");
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
    var verlet_assembler2_1 = require("./verlet-assembler2");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PagePoint = function() {
      function PagePoint(x, y) {
        this.oldPos = this.newPos = cc.v2(x, y);
      }
      return PagePoint;
    }();
    var VerletRender2 = function(_super) {
      __extends(VerletRender2, _super);
      function VerletRender2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pointsCount = 10;
        _this.constraintTimes = 50;
        _this.damping = .7;
        _this.gravity = -.2;
        _this._initedMaterial = false;
        _this._pointList = [];
        _this._angle = 0;
        _this.pointListShadow = [];
        return _this;
      }
      VerletRender2.prototype.start = function() {
        this.initPointList();
        this.update();
      };
      VerletRender2.prototype._resetAssembler = function() {
        var assembler = this["_assembler"] = new verlet_assembler2_1.default();
        assembler.init(this);
      };
      VerletRender2.prototype.setTextures = function(texture1, texture2) {
        var material = this.getMaterial(0);
        if (material) {
          material.define("CC_USE_MODEL", 1);
          material.setProperty("texture0", texture1);
          material.setProperty("texture1", texture2);
        }
      };
      VerletRender2.prototype.updateAngle = function(angle) {
        this._angle = angle;
      };
      VerletRender2.prototype.getPointList = function() {
        var pointList = this.pointListShadow;
        this._pointList.forEach(function(pp, i) {
          pointList[i].x = pp.newPos.x;
          pointList[i].y = pp.newPos.y;
        });
        return pointList;
      };
      VerletRender2.prototype.initPointList = function() {
        for (var i = 0; i < this.pointsCount; ++i) {
          var posX = i / (this.pointsCount - 1) * this.node.width;
          this._pointList.push(new PagePoint(posX, 0));
          this.pointListShadow.push(cc.v2(this._pointList[i].newPos.x, this._pointList[i].newPos.y));
        }
      };
      VerletRender2.prototype.update = function() {
        this.simulate();
        this.applyConstraint();
        this.draw();
      };
      VerletRender2.prototype.simulate = function() {
        var gravity = cc.v2(0, this.gravity);
        for (var i = this.pointsCount - 1; i >= 1; i--) {
          var point = this._pointList[i];
          var velocity = point.newPos.sub(point.oldPos).mul(this.damping);
          point.newPos.y <= 0 && (gravity.y = Math.max(0, gravity.y));
          point.oldPos = point.newPos;
          point.newPos = point.newPos.add(velocity);
          point.newPos = point.newPos.add(gravity);
        }
      };
      VerletRender2.prototype._updateEndPos = function(endPos) {
        var tailPoint = this._pointList[this.pointsCount - 1];
        tailPoint.newPos = new cc.Vec2(endPos.x, endPos.y);
      };
      VerletRender2.prototype._getEndPos = function() {
        var endPos = new cc.Vec2(0, 0);
        var width = this.node.width;
        var rad = this._angle * Math.PI / 180;
        var per = 2 * rad / Math.PI;
        if (this._angle <= 90) {
          var endPosX = width * (1 - Math.pow(per, 3));
          var endPosY = 1 * width / 4 * (1 - Math.pow(1 - per, 4));
          endPos = new cc.Vec2(endPosX, endPosY);
        } else {
          per -= 1;
          var endPosX = -width * (1 - Math.pow(1 - per, 3));
          var endPosY = 1 * width / 4 * (1 - Math.pow(per, 4));
          endPos = new cc.Vec2(endPosX, endPosY);
        }
        return endPos;
      };
      VerletRender2.prototype.applyConstraint = function() {
        var normalDistance = this.node.width / (this.pointsCount - 1);
        var endPos = this._getEndPos();
        for (var t = 0; t < this.constraintTimes; t++) {
          this._updateEndPos(endPos);
          for (var i = this.pointsCount - 1; i >= 1; i--) {
            var firstPoint = this._pointList[i - 1];
            var secondPoint = this._pointList[i];
            var delatPos = secondPoint.newPos.sub(firstPoint.newPos);
            var distance = delatPos.mag();
            var fixDirection = null;
            var fixDirection2 = null;
            if (distance < normalDistance) {
              fixDirection = delatPos.normalize().negate();
              fixDirection2 = delatPos.normalize();
            } else {
              if (!(distance > normalDistance)) continue;
              fixDirection = delatPos.normalize();
              fixDirection2 = delatPos.normalize().negate();
            }
            var fixLen = Math.abs(distance - normalDistance);
            if (1 == i) {
              var fixVector = fixDirection2.mul(fixLen);
              secondPoint.newPos.addSelf(fixVector);
            } else {
              var fixHalfVector1 = fixDirection.mul(.5 * fixLen);
              firstPoint.newPos.addSelf(fixHalfVector1);
              var fixHalfVector2 = fixDirection2.mul(.5 * fixLen);
              secondPoint.newPos.addSelf(fixHalfVector2);
            }
          }
        }
      };
      VerletRender2.prototype.draw = function() {
        this["setVertsDirty"]();
      };
      VerletRender2 = __decorate([ ccclass ], VerletRender2);
      return VerletRender2;
    }(cc.RenderComponent);
    exports.default = VerletRender2;
    cc._RF.pop();
  }, {
    "./verlet-assembler2": "verlet-assembler2"
  } ]
}, {}, [ "PBBottomArea", "PBPage", "PBPageContainer", "PBText", "PBTrumpet", "PictureBookPlayer", "page-effect-assembler-base2", "verlet-assembler2", "verlet-render2" ]);
//# sourceMappingURL=index.js.map
