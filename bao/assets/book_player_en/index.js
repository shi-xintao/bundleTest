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
  PBAudio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fba3xeslhEs7bXOxQquPUA", "PBAudio");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PBAudio = function() {
      function PBAudio(clip) {
        this.clip = null;
        this.audioID = 0;
        this.loop = false;
        this.duration = 0;
        this.progress = 0;
        this.onPlayEnded = null;
        this.isMusic = false;
        this.playing = false;
        this.clip = clip;
        this.duration = clip.duration;
      }
      PBAudio.prototype.playAsEffect = function(single, loop) {
        void 0 === single && (single = true);
        void 0 === loop && (loop = false);
        this.loop = loop;
        single && this.stop();
        this.isMusic = false;
        this.audioID = cc.audioEngine.playEffect(this.clip, this.loop);
        this.progress = 0;
        this.playing = true;
        return this.audioID;
      };
      PBAudio.prototype.playAsMusic = function(loop) {
        void 0 === loop && (loop = true);
        this.loop = loop;
        this.audioID = cc.audioEngine.playMusic(this.clip, this.loop);
        this.progress = 0;
        this.playing = true;
        this.isMusic = true;
        return this.audioID;
      };
      Object.defineProperty(PBAudio.prototype, "key", {
        get: function() {
          return this.clip.nativeUrl;
        },
        enumerable: false,
        configurable: true
      });
      PBAudio.prototype.stop = function() {
        if (this.isMusic) {
          cc.audioEngine.stopMusic();
          this.audioID = 0;
          this.playing = false;
          this.progress = 0;
          return;
        }
        if (0 != this.audioID) {
          this.playing = false;
          cc.audioEngine.stopEffect(this.audioID);
          this.audioID = 0;
          this.progress = 0;
        }
      };
      PBAudio.prototype.update = function(dt) {
        if (this.playing && !this.loop) {
          this.progress += dt;
          if (this.progress >= this.duration) {
            this.playing = false;
            this.audioID = 0;
            if (this.onPlayEnded) {
              var cb = this.onPlayEnded;
              cb(this);
            }
          }
        }
      };
      PBAudio.toArray = function(arr) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
          var element = arr[i];
          ret.push(new PBAudio(element));
        }
        return ret;
      };
      return PBAudio;
    }();
    exports.default = PBAudio;
    cc._RF.pop();
  }, {} ],
  PBBottomAreaEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e17be4ya5OA4n59chc1RXn", "PBBottomAreaEn");
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
    var PBTextEn_1 = require("./PBTextEn");
    var PBTrumpetEn_1 = require("./PBTrumpetEn");
    var PictureBookPlayerEn_1 = require("./PictureBookPlayerEn");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PBBottomArea = function(_super) {
      __extends(PBBottomArea, _super);
      function PBBottomArea() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.trumpet = null;
        _this.text = null;
        _this.page_num = null;
        _this.head_icon = null;
        _this.bottom_bar_spriteframes = [];
        return _this;
      }
      PBBottomArea.prototype.initUI = function() {
        this.trumpet = cc.find("trumpet", this.node).getComponent(PBTrumpetEn_1.default);
        this.text = cc.find("text", this.node).getComponent(PBTextEn_1.default);
        this.page_num = cc.find("page_num", this.node).getComponent(cc.RichText);
        var head_mask = cc.find("head_mask", this.node);
        this.head_icon = cc.find("head_icon", head_mask).getComponent(cc.Sprite);
        this.text.text.string = "";
      };
      PBBottomArea.prototype.onTrumpetClicked = function() {
        console.log("on pbbottomarea >>>>>>>>>>>>");
        var page = PictureBookPlayerEn_1.default.instance.pageContainer.currPage;
        page && page.voice && page.playVoices();
      };
      PBBottomArea.prototype.setBg = function(isTurn) {
        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = isTurn ? this.bottom_bar_spriteframes[1] : this.bottom_bar_spriteframes[0];
      };
      PBBottomArea.prototype.onLoad = function() {};
      PBBottomArea.prototype.start = function() {};
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        displayName: "\u5e95\u677f"
      }) ], PBBottomArea.prototype, "bottom_bar_spriteframes", void 0);
      PBBottomArea = __decorate([ ccclass ], PBBottomArea);
      return PBBottomArea;
    }(cc.Component);
    exports.default = PBBottomArea;
    cc._RF.pop();
  }, {
    "./PBTextEn": "PBTextEn",
    "./PBTrumpetEn": "PBTrumpetEn",
    "./PictureBookPlayerEn": "PictureBookPlayerEn"
  } ],
  PBPageContainerEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a12adoEawRP1o6ghulayGz8", "PBPageContainerEn");
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
    var verlet_render_en_1 = require("../verlet/verlet-render-en");
    var PBPageEn_1 = require("./PBPageEn");
    var PictureBookPlayerEn_1 = require("./PictureBookPlayerEn");
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
        this.verlet = cc.find("verlet", this.node).getComponent(verlet_render_en_1.default);
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
              _this.verlet = node.addComponent(verlet_render_en_1.default);
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
        this.verlet.node.removeComponent(verlet_render_en_1.default);
      };
      PBPageContainer.prototype.start = function() {};
      PBPageContainer.prototype.addPrefab = function(prefab, index) {
        return __awaiter(this, void 0, void 0, function() {
          var page, eduPage;
          return __generator(this, function(_a) {
            if (cc.isValid(prefab)) {
              this.prefabs.set(index, prefab);
              page = cc.instantiate(prefab).addComponent(PBPageEn_1.default);
              page.index = index;
              if (0 == index) {
                eduPage = page.node.getComponent("EduPage");
                PictureBookPlayerEn_1.default.page_count = eduPage.pageNum;
                PictureBookPlayerEn_1.default.turn_mode = PBPageContainer_1.PageModeEnum[eduPage._turn_mode];
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
          if (this.currPageIndex + 1 < PictureBookPlayerEn_1.default.page_count) return this.pages.get(this.currPageIndex + 1);
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
      PBPageContainer.prototype.updateBottom = function(page) {
        if (0 == page.text.length) PictureBookPlayerEn_1.default.instance.bottomArea.node.active = false; else {
          PictureBookPlayerEn_1.default.instance.bottomArea.node.active = true;
          PictureBookPlayerEn_1.default.instance.setText(0);
        }
      };
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
                    if (!("3d" == PictureBookPlayerEn_1.default.turn_mode)) return [ 3, 2 ];
                    cc.Camera.main.ortho = false;
                    return [ 3, 4 ];

                   case 2:
                    if (!("verlet" == PictureBookPlayerEn_1.default.turn_mode)) return [ 3, 4 ];
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
                      _this.updateBottom(nextPage);
                      resolve();
                    }).start();
                    _a.label = 4;

                   case 4:
                    if ("verlet" != PictureBookPlayerEn_1.default.turn_mode) {
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
                        nextPage.node.active = true;
                        "3d" == PictureBookPlayerEn_1.default.turn_mode && (cc.Camera.main.ortho = true);
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
                    if (!("3d" == PictureBookPlayerEn_1.default.turn_mode)) return [ 3, 2 ];
                    cc.Camera.main.ortho = false;
                    return [ 3, 4 ];

                   case 2:
                    if (!("verlet" == PictureBookPlayerEn_1.default.turn_mode)) return [ 3, 4 ];
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
                      _this.updateBottom(prevPage);
                      resolve();
                    }).start();
                    _a.label = 4;

                   case 4:
                    if ("verlet" != PictureBookPlayerEn_1.default.turn_mode) {
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
                        prevPage.node.active = true;
                        "3d" == PictureBookPlayerEn_1.default.turn_mode && (cc.Camera.main.ortho = true);
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
          var name = PictureBookPlayerEn_1.default.instance.getPrefabName(index);
          page && page.node.destroy();
          var prefab = this.prefabs.get(index);
          if (prefab) {
            cc.assetManager.releaseAsset(prefab);
            prefab.destroy();
          }
          this.uniqMap.delete(index);
          this.pages.delete(index);
          PictureBookPlayerEn_1.default.instance.book_bundle.release(name, cc.Prefab);
        }
      };
      PBPageContainer.prototype.unloadNext = function() {
        var index = this.currPageIndex + 2;
        if (index < PictureBookPlayerEn_1.default.page_count) {
          var page = this.pages.get(index);
          var name = PictureBookPlayerEn_1.default.instance.getPrefabName(index);
          page && page.node.destroy();
          var prefab = this.prefabs.get(index);
          if (prefab) {
            cc.assetManager.releaseAsset(prefab);
            prefab.destroy();
          }
          this.uniqMap.delete(index);
          this.pages.delete(index);
          PictureBookPlayerEn_1.default.instance.book_bundle.release(name, cc.Prefab);
        }
      };
      PBPageContainer.prototype.forward = function() {
        return __awaiter(this, void 0, void 0, function() {
          var nextPage;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.turningLock) {
                console.warn("this.turningLock");
                return [ 2, false ];
              }
              nextPage = this.nextPage;
              if (null == nextPage) {
                console.warn("nextPage == null");
                return [ 2, false ];
              }
              this.turningLock = true;
              PictureBookPlayerEn_1.default.instance.bottomArea.node.active = false;
              AudioManager_1.default.playEffect("book_player_en", "sound/changepage");
              return [ 4, this.toNextPage() ];

             case 1:
              _a.sent();
              PictureBookPlayerEn_1.default.instance.updatePageNum();
              this.unloadPrev();
              this.turningLock = false;
              return [ 2, true ];
            }
          });
        });
      };
      PBPageContainer.prototype.backward = function() {
        return __awaiter(this, void 0, void 0, function() {
          var prevPage;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.turningLock) return [ 2 ];
              prevPage = this.prevPage;
              if (null == prevPage) {
                console.warn("prevPage == null");
                return [ 2, false ];
              }
              this.turningLock = true;
              PictureBookPlayerEn_1.default.instance.bottomArea.node.active = false;
              AudioManager_1.default.playEffect("book_player_en", "sound/changepage");
              return [ 4, this.toPrevPage() ];

             case 1:
              _a.sent();
              PictureBookPlayerEn_1.default.instance.updatePageNum();
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
                    return [ 4, PictureBookPlayerEn_1.default.instance.loadPage(this.currPageIndex + 1) ];

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
                    return [ 4, PictureBookPlayerEn_1.default.instance.loadPage(this.currPageIndex - 1) ];

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
    "../verlet/verlet-render-en": "verlet-render-en",
    "./PBPageEn": "PBPageEn",
    "./PictureBookPlayerEn": "PictureBookPlayerEn"
  } ],
  PBPageEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aff77MUKIRIzqqQGulf+52C", "PBPageEn");
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
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var PBPageContainerEn_1 = require("./PBPageContainerEn");
    var PBAudio_1 = require("./PBAudio");
    var PictureBookPlayerEn_1 = require("./PictureBookPlayerEn");
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
        _this.voice = [];
        _this.sound = null;
        _this.soundLoop = true;
        _this.text = [];
        _this.head_icons = [];
        _this.turningText = false;
        _this.soundMap = new Map();
        _this.currVoice = null;
        _this.currVoiceIndex = 0;
        _this.currPlayVoicesResolve = null;
        return _this;
      }
      PBPage.prototype.onLoad = function() {
        var _this = this;
        var eduPage = this.node.getComponent("EduPage");
        eduPage.music && (this.music = new PBAudio_1.default(eduPage.music));
        if (eduPage.voices && eduPage.voices.length > 0) {
          this.voice = PBAudio_1.default.toArray(eduPage.voices);
          this.voice.forEach(function(audio) {
            audio.onPlayEnded = _this.onVoiceEnded.bind(_this);
          });
        }
        eduPage.sound && (this.sound = new PBAudio_1.default(eduPage.sound));
        this.soundLoop = eduPage.soundLoop;
        this.text = eduPage.text;
        this.head_icons = eduPage.head_icons;
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
          var eduPage;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.image = cc.find("bg", this.node).getComponent(cc.Sprite);
              eduPage = this.node.getComponent("EduPage");
              this.fixBg();
              return [ 4, this.capture() ];

             case 1:
              _a.sent();
              PictureBookPlayerEn_1.default.instance.onPageLoaded(this);
              this.music && this.music.playAsMusic();
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
        var imageSize = cc.size(1334, 750);
        var ratio = imageSize.width / imageSize.height;
        if (ratio > frameAspectRatio) {
          var width = imageSize.width * screenSize.height / imageSize.height;
          var scale = width / imageSize.width;
          this.node.scale = scale;
        } else {
          var height = imageSize.height * screenSize.width / imageSize.width;
          var scale = height / imageSize.height;
          this.node.scale = scale;
        }
      };
      PBPage.prototype.turnNextText = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            if (this.turningText) return [ 2 ];
            this.turningText = true;
            return [ 2, new Promise(function(resolve) {
              if (_this.currVoiceIndex + 1 < _this.text.length) {
                _this.stopVoice(_this.currVoiceIndex);
                var cp_1 = cc.instantiate(PictureBookPlayerEn_1.default.instance.bottomArea.node);
                cp_1.parent = PictureBookPlayerEn_1.default.instance.bottomArea.node.parent;
                PictureBookPlayerEn_1.default.instance.setText(_this.currVoiceIndex + 1);
                cc.tween(cp_1).call(function() {
                  AudioManager_1.default.playEffect("book_player_en", "sound/changepage");
                }).by(.5, {
                  x: -cp_1.width
                }).delay(1).call(function() {
                  cp_1.destroy();
                  _this.playVoice(_this.currVoiceIndex + 1);
                  _this.turningText = false;
                  resolve();
                }).start();
              }
            }) ];
          });
        });
      };
      PBPage.prototype.turnPrevText = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            if (this.turningText) return [ 2 ];
            this.turningText = true;
            return [ 2, new Promise(function(resolve) {
              if (_this.currVoiceIndex - 1 >= 0) {
                _this.stopVoice(_this.currVoiceIndex);
                var cp_2 = cc.instantiate(PictureBookPlayerEn_1.default.instance.bottomArea.node);
                cp_2.parent = PictureBookPlayerEn_1.default.instance.bottomArea.node.parent;
                PictureBookPlayerEn_1.default.instance.setText(_this.currVoiceIndex - 1);
                cc.tween(cp_2).call(function() {
                  AudioManager_1.default.playEffect("book_player_en", "sound/changepage");
                }).by(.5, {
                  x: cp_2.width
                }).delay(1).call(function() {
                  cp_2.destroy();
                  _this.playVoice(_this.currVoiceIndex - 1);
                  _this.turningText = false;
                  resolve();
                }).start();
              }
            }) ];
          });
        });
      };
      PBPage.prototype.hasNextText = function() {
        if (this.currVoiceIndex < this.text.length - 1) return true;
        return false;
      };
      PBPage.prototype.hasPrevText = function() {
        if (this.currVoiceIndex > 0) return true;
        return false;
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
              PBPageContainerEn_1.default.instance.onCaptured(_this);
            }) ];
          });
        });
      };
      PBPage.prototype.getVoice = function(index) {
        if (!this.voice) return null;
        if (0 == this.voice.length) return null;
        if (index < 0 || index > this.voice.length - 1) return null;
        return this.voice[index];
      };
      PBPage.prototype.onClickedAt = function(worldPos) {
        var nodePos = this.node.convertToNodeSpaceAR(worldPos);
        for (var i = 0; i < this.node.children.length; i++) {
          var element = this.node.children[i];
          var box = element.getBoundingBox();
          if (box.contains(nodePos)) {
            var eduSpineAnim = element.getComponent("EduSpineAnim");
            eduSpineAnim && eduSpineAnim.onClicked();
          }
        }
      };
      PBPage.prototype.playVoice = function(index) {
        this.currVoiceIndex = index;
        var sound = this.getVoice(index);
        if (sound) {
          PictureBookPlayerEn_1.default.instance.bottomArea.trumpet.play();
          this.currVoice && this.currVoice.stop();
          this.currVoice = sound;
          sound.playAsEffect();
        }
      };
      PBPage.prototype.update = function(dt) {
        this.music && this.music.update(dt);
        this.sound && this.sound.update(dt);
        if (this.voice.length > 0) for (var i = 0; i < this.voice.length; i++) {
          var element = this.voice[i];
          element.update(dt);
        }
      };
      PBPage.prototype.onVoiceEnded = function(_) {
        if (this.currVoiceIndex + 1 < this.voice.length) this.turnNextText(); else if (this.currPlayVoicesResolve) {
          var cb = this.currPlayVoicesResolve;
          cb();
        }
      };
      PBPage.prototype.playVoices = function(cb) {
        void 0 === cb && (cb = function() {});
        this.currPlayVoicesResolve = cb;
        this.playVoice(0);
      };
      PBPage.prototype.playSound = function(index) {
        var sound = this.sound;
        sound && sound.playAsEffect(true, this.soundLoop);
      };
      PBPage.prototype.pause = function() {};
      PBPage.prototype.resume = function() {};
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
      PBPage.prototype.stopVoice = function(index) {
        if (index >= 0 && index < this.voice.length) {
          var clip = this.voice[index];
          clip.stop();
        }
      };
      PBPage.prototype.stopAllSounds = function() {
        if (this.sound) {
          var clip = this.sound;
          clip.stop();
        }
        if (this.voice && this.voice.length > 0) for (var i = 0; i < this.voice.length; i++) this.stopVoice(i);
        this.music && this.music.stop();
      };
      PBPage = __decorate([ ccclass ], PBPage);
      return PBPage;
    }(cc.Component);
    exports.default = PBPage;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./PBAudio": "PBAudio",
    "./PBPageContainerEn": "PBPageContainerEn",
    "./PictureBookPlayerEn": "PictureBookPlayerEn"
  } ],
  PBTextEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22f624SY35EhbUzTadeRRC8", "PBTextEn");
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
  PBTrumpetEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e710e/ajt5NioaTKk71oXsn", "PBTrumpetEn");
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
      PBTrumpet.prototype.onLoad = function() {};
      PBTrumpet.prototype.play = function() {};
      PBTrumpet.prototype.stop = function() {};
      PBTrumpet.prototype.start = function() {};
      PBTrumpet = __decorate([ ccclass ], PBTrumpet);
      return PBTrumpet;
    }(cc.Component);
    exports.default = PBTrumpet;
    cc._RF.pop();
  }, {} ],
  PictureBookPlayerEn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bfa9tmN4dAR6Cki01uk1jW", "PictureBookPlayerEn");
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
    var BaseChapterComponent_1 = require("../../../common/scripts/BaseChapterComponent");
    var kit_1 = require("../../../kit/kit");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var bundleUtils_1 = require("../../../kit/utils/bundleUtils");
    var PBBottomAreaEn_1 = require("./PBBottomAreaEn");
    var PBPageContainerEn_1 = require("./PBPageContainerEn");
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
        _this.mode_frames = [];
        _this.play_frames = [];
        _this.bottomArea = null;
        _this.left_arrow = null;
        _this.right_arrow = null;
        _this.book_bundle_name = "";
        _this.pageContainer = null;
        _this.playMode = PictureBookPlayer_1.PLAY_MODE_AUTO;
        _this.mode_btn = null;
        _this.playing = true;
        _this.modeImage = null;
        _this.playImage = null;
        _this.touchMask = null;
        _this.autoturnpage = 10;
        _this.autoturnpage_after_voice = 5;
        _this._needAutoTurnPage = false;
        _this.restTime = 0;
        _this.initPos = cc.Vec2.ZERO;
        _this.currPos = cc.Vec2.ZERO;
        return _this;
      }
      PictureBookPlayer_1 = PictureBookPlayer;
      PictureBookPlayer.prototype.setText = function(index) {
        var texts = this.pageContainer.currPage.text;
        var txt = "";
        index >= 0 && index < texts.length && (txt = texts[index]);
        index < texts.length - 1 ? this.bottomArea.setBg(true) : this.bottomArea.setBg(false);
        this.bottomArea.text.text.string = txt;
      };
      PictureBookPlayer.prototype.setBottomBg = function(isTurn) {
        this.bottomArea.setBg(isTurn);
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
        this.bottomArea = cc.find("bottom_area", this.bottom_slot).getComponent(PBBottomAreaEn_1.default);
        this.bottomArea.initUI();
        this.bottomArea.node.active = false;
        this.page_slot = cc.find("page_slot", this.node);
        this.pageContainer = cc.find("page", this.page_slot).getComponent(PBPageContainerEn_1.default);
        this.modeImage = cc.find("mode_btn", this.node).getComponent(cc.Sprite);
        this.playImage = cc.find("play_btn", this.node).getComponent(cc.Sprite);
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.onParams, this);
        this.mode_btn = cc.find("mode_btn", this.node).getComponent(cc.Button);
        this.touchMask = cc.find("touchMask", this.node);
        this.touchMask.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.touchMask.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchMask.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchMask.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
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
            if (page.index == this.pageContainer.currPageIndex) {
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
        if (page.voice.length > 0) this.autoturnpage > 0 ? page.playVoices(function() {
          if (_this.playMode == PictureBookPlayer_1.PLAY_MODE_AUTO) {
            _this.needAutoTurnPage = true;
            _this.restTime = _this.autoturnpage_after_voice;
          }
        }) : page.playVoices(); else {
          this.needAutoTurnPage = true;
          this.restTime = this.autoturnpage;
        }
      };
      Object.defineProperty(PictureBookPlayer.prototype, "needAutoTurnPage", {
        get: function() {
          return this._needAutoTurnPage;
        },
        set: function(value) {
          this._needAutoTurnPage = value;
        },
        enumerable: false,
        configurable: true
      });
      PictureBookPlayer.prototype.update = function(dt) {
        if (this.playMode == PictureBookPlayer_1.PLAY_MODE_AUTO && this.needAutoTurnPage && this.restTime > 0) {
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
        page.index == this.pageContainer.currPageIndex && AudioManager_1.default.stopEffect();
      };
      PictureBookPlayer.prototype.updatePageNum = function() {
        this.bottomArea.page_num.string = this.pageContainer.currPageIndex + 1 + "/" + PictureBookPlayer_1.page_count;
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
                    return [ 4, this.pageContainer.addPrefab(prefab, 0) ];

                   case 3:
                    _a.sent();
                    this.pageContainer.loadNext();
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
              if (this.pageContainer.currPage.hasPrevText()) {
                this.pageContainer.currPage.turnPrevText();
                return [ 2 ];
              }
              if (0 == this.pageContainer.currPageIndex) return [ 2 ];
              if (this.pageContainer.turningLock) return [ 2 ];
              this.needAutoTurnPage = false;
              this.restTime = 0;
              this.onPageUnLoaded(this.pageContainer.currPage);
              return [ 4, this.pageContainer.backward() ];

             case 1:
              _a.sent();
              this.onPageLoaded(this.pageContainer.currPage);
              if (!(this.pageContainer.currPageIndex > 0)) return [ 3, 3 ];
              return [ 4, this.pageContainer.loadPrev() ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
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
              if (this.pageContainer.currPage.hasNextText()) {
                this.pageContainer.currPage.turnNextText();
                return [ 2 ];
              }
              if (this.pageContainer.currPageIndex == PictureBookPlayer_1.page_count) return [ 2 ];
              if (this.pageContainer.turningLock) return [ 2 ];
              if (null == this.pageContainer.nextPage) return [ 2 ];
              this.needAutoTurnPage = false;
              this.restTime = 0;
              this.onPageUnLoaded(this.pageContainer.currPage);
              return [ 4, this.pageContainer.forward() ];

             case 1:
              b = _a.sent();
              if (!b) return [ 3, 3 ];
              this.onPageLoaded(this.pageContainer.currPage);
              if (!(this.pageContainer.currPageIndex < PictureBookPlayer_1.page_count - 1)) return [ 3, 3 ];
              return [ 4, this.pageContainer.loadNext() ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      PictureBookPlayer.prototype.onModeChanged = function() {
        if (this.playMode == PictureBookPlayer_1.PLAY_MODE_AUTO) {
          this.playMode = PictureBookPlayer_1.PLAY_MODE_MANAUL;
          this.modeImage.spriteFrame = this.mode_frames[1];
        } else {
          this.playMode = PictureBookPlayer_1.PLAY_MODE_AUTO;
          var page = this.pageContainer.currPage;
          this.modeImage.spriteFrame = this.mode_frames[0];
          this.pageTimer(page);
        }
      };
      PictureBookPlayer.prototype.playOrPauseBook = function(b) {
        console.log("change playing state:" + b);
      };
      PictureBookPlayer.prototype.onPlayChanged = function() {
        if (this.playing) {
          this.playing = false;
          this.playImage.spriteFrame = this.play_frames[1];
          var page = this.pageContainer.currPage;
          page && page.pause();
          this.scheduleOnce(function() {
            cc.game.pause();
          }, .1);
        } else {
          this.playing = true;
          this.playImage.spriteFrame = this.play_frames[0];
          var page = this.pageContainer.currPage;
          page && page.resume();
          cc.game.resume();
        }
        this.playOrPauseBook(this.playing);
      };
      PictureBookPlayer.prototype.onExit = function() {};
      PictureBookPlayer.prototype.onTouchBegan = function(event) {
        var currX = event.getLocationX();
        var currY = event.getLocationY();
        this.initPos.x = currX;
        this.initPos.y = currY;
        this.currPos.x = currX;
        this.currPos.y = currY;
      };
      PictureBookPlayer.prototype.onTouchMove = function(event) {
        var deltaX = event.getDeltaX();
        var deltaY = event.getDeltaY();
        this.currPos.x += deltaX;
        this.currPos.y += deltaY;
        var worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
      };
      PictureBookPlayer.prototype.onTouchEnd = function(event) {
        console.log("PictureBookPlayerEn.onTouchEnd");
        var currX = event.getLocationX();
        var currY = event.getLocationY();
        var dis = Math.abs(currX - this.initPos.x);
        if (dis >= 100) currX < this.initPos.x ? PictureBookPlayer_1.instance.onRightArrowClicked() : PictureBookPlayer_1.instance.onLeftArrowClicked(); else {
          var page = this.pageContainer.currPage;
          page && page.onClickedAt(cc.v2(currX, currY));
        }
      };
      var PictureBookPlayer_1;
      PictureBookPlayer.instance = null;
      PictureBookPlayer.turn_mode = "verlet";
      PictureBookPlayer.PLAY_MODE_AUTO = 0;
      PictureBookPlayer.PLAY_MODE_MANAUL = 1;
      PictureBookPlayer.page_count = 0;
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        displayName: "\u4e66"
      }) ], PictureBookPlayer.prototype, "mode_frames", void 0);
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        displayName: "\u64ad\u653e"
      }) ], PictureBookPlayer.prototype, "play_frames", void 0);
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
    "./PBBottomAreaEn": "PBBottomAreaEn",
    "./PBPageContainerEn": "PBPageContainerEn"
  } ],
  "page-effect-assembler-base-en": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "804934gNZBPAb1plsVpD2d8", "page-effect-assembler-base-en");
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
  "verlet-assembler-en": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e84c31k7wJPE55qM1YxBV/n", "verlet-assembler-en");
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
    var page_effect_assembler_base_en_1 = require("./page-effect-assembler-base-en");
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
    }(page_effect_assembler_base_en_1.default);
    exports.default = VerletAssembler;
    cc._RF.pop();
  }, {
    "./page-effect-assembler-base-en": "page-effect-assembler-base-en"
  } ],
  "verlet-render-en": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b45417VCLZNUZoh0yeaIExO", "verlet-render-en");
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
    var verlet_assembler_en_1 = require("./verlet-assembler-en");
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
        var assembler = this["_assembler"] = new verlet_assembler_en_1.default();
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
    "./verlet-assembler-en": "verlet-assembler-en"
  } ]
}, {}, [ "PBAudio", "PBBottomAreaEn", "PBPageContainerEn", "PBPageEn", "PBTextEn", "PBTrumpetEn", "PictureBookPlayerEn", "page-effect-assembler-base-en", "verlet-assembler-en", "verlet-render-en" ]);
//# sourceMappingURL=index.js.map
