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
  EatBeansConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "599ecwn7eJA4KQMi2OGq8+w", "EatBeansConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EATBEANS_SOUND_CONFIG = void 0;
    var EATBEANS_SOUND_CONFIG;
    (function(EATBEANS_SOUND_CONFIG) {
      EATBEANS_SOUND_CONFIG["C"] = "sound/C";
      EATBEANS_SOUND_CONFIG["D"] = "sound/D";
      EATBEANS_SOUND_CONFIG["clickandlisten"] = "sound/clickandlisten";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_01"] = "sound/SE_zimuchidou_01";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_02"] = "sound/SE_zimuchidou_02";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_03"] = "sound/SE_zimuchidou_03";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_04"] = "sound/SE_zimuchidou_04";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_05"] = "sound/SE_zimuchidou_05";
      EATBEANS_SOUND_CONFIG["SE_zimuchidou_06"] = "sound/SE_zimuchidou_06";
    })(EATBEANS_SOUND_CONFIG = exports.EATBEANS_SOUND_CONFIG || (exports.EATBEANS_SOUND_CONFIG = {}));
    cc._RF.pop();
  }, {} ],
  EatBeans: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b2f1FGXfVCI6iOhDZ6DIbv", "EatBeans");
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
    var ResourcesManager_1 = require("../../../kit/manager/ResourcesManager");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var TimerSystem_1 = require("../../../kit/system/timer/TimerSystem");
    var notifierCenter_1 = require("../../common_en/notifierCenter");
    var Tigo_1 = require("../../common_en/Tigo");
    var EatBeansConfig_1 = require("./EatBeansConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BUNDLE_NAME = "eatBeans";
    var aniNameConfig = [ [ [ "day5_1_BigC_idle", "day5_1_BigC_JZ" ], [ "day5_1_C_small_idle", "day5_1_C_small_JZ" ] ], [ [ "day5_1_BigD_idle", "day5_1_BigD_JZ" ], [ "day5_1_D_small_idle", "day5_1_D_small_JZ" ] ] ];
    var TIME_1 = 4, TIME_2 = 2.8;
    var EatBeans = function(_super) {
      __extends(EatBeans, _super);
      function EatBeans() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.smallcCount = 6;
        _this.smalldCount = 4;
        _this.bigcCount = 6;
        _this.bigdCount = 4;
        _this.clickItemPrefab = null;
        _this.zimuCArr = [];
        _this.zimuDArr = [];
        _this.rightNode = null;
        _this.rectNode = null;
        _this.posNodeArr = [];
        _this.spCSpine = null;
        _this.spDSpine = null;
        _this.shadingBg = null;
        _this.clickBtn = null;
        _this.handSpine = null;
        _this.itemContent = null;
        _this.caidaiSpine = null;
        _this.jinbiSpine = null;
        _this.bg = null;
        _this.curZimu = "c";
        _this.clickItems = [];
        _this.bigZimuCount = 0;
        _this.smallZimuCount = 0;
        _this.hasGuidUser = false;
        _this.guildSoundTimer = null;
        return _this;
      }
      EatBeans.prototype.onLoad = function() {
        this.initUI();
        this.initNative();
        Tigo_1.default.callAppToLoaded();
      };
      EatBeans.prototype.start = function() {
        var _this = this;
        this.fixBg();
        this.scheduleOnce(function() {
          _this.showZimuSpine();
        }, 3);
      };
      EatBeans.prototype.fixBg = function() {
        var frameSize = cc.winSize;
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.bg.width / this.bg.height;
        if (ratio > frameAspectRatio) {
          var width = this.bg.width * screenSize.height / this.bg.height;
          this.bg.width = width;
          this.bg.height = screenSize.height;
        } else {
          var scale = frameSize.width / designSize.width;
          this.bg.width = designSize.width * scale;
          this.bg.height = designSize.height * scale;
        }
        this.bg.x = 0;
        this.bg.y = 0;
      };
      EatBeans.prototype.addGuildSoundTimer = function() {
        var _this = this;
        this.guildSoundTimer && this.clearGuidHand();
        var t = 5;
        this.guildSoundTimer = TimerSystem_1.default.instance.doOnce(1e3 * t, function() {
          if (!cc.isValid(_this.node)) return;
          _this.handSpine.active = true;
        }, this);
      };
      EatBeans.prototype.clearGuidHand = function() {
        this.handSpine.active = false;
        TimerSystem_1.default.instance.clearTimer(this.guildSoundTimer);
        this.guildSoundTimer = null;
      };
      EatBeans.prototype.initNative = function() {
        window["webframe"] = {};
        window.webframe.Notify = new notifierCenter_1.default();
        window.webframe.Notify.listen("callCocos_loaded", function() {
          console.log(" ===callCocos_loaded=== ");
        }, this, true);
      };
      EatBeans.prototype.initUI = function() {
        this.rightNode = cc.find("right_node", this.node);
        this.rectNode = cc.find("right_node/rect_node", this.node);
        this.shadingBg = cc.find("right_node/bg2", this.node);
        this.clickBtn = cc.find("right_node/button", this.node).getComponent(cc.Button);
        for (var index = 1; index < 5; index++) {
          var node = cc.find("right_node/pos_" + index, this.node);
          this.posNodeArr.push(node);
        }
        this.itemContent = cc.find("right_node/item_content", this.node);
        this.spCSpine = cc.find("right_node/sprite_node/c", this.node).getComponent(sp.Skeleton);
        this.spDSpine = cc.find("right_node/sprite_node/d", this.node).getComponent(sp.Skeleton);
        this.handSpine = cc.find("right_node/shou", this.node);
        this.bg = cc.find("bg", this.node);
        this.caidaiSpine = cc.find("spineNode", this.node).getComponent(sp.Skeleton);
        this.jinbiSpine = cc.find("W4L2-SPINE-1", this.node).getComponent(sp.Skeleton);
        this.handSpine.zIndex = cc.macro.MAX_ZINDEX;
      };
      EatBeans.prototype.showZimuSpine = function() {
        return __awaiter(this, void 0, void 0, function() {
          var zimuNodeArr, width, pos, index, config;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              zimuNodeArr = "c" == this.curZimu ? this.zimuCArr : this.zimuDArr;
              this.shadingBg.active = true;
              width = cc.winSize.width;
              pos = [ 130, -130 ];
              zimuNodeArr.map(function(node, index) {
                node.x = -pos[index];
                node.scale = 2;
                node.active = true;
                "d" == _this.curZimu && 1 == index && (node.getChildByName("spine").scale = .227);
              });
              index = "c" == this.curZimu ? 0 : 1;
              config = aniNameConfig[index];
              return [ 4, this.playZimuStartAni(zimuNodeArr[0], config[0][0], config[0][1]) ];

             case 1:
              _a.sent();
              return [ 4, this.playZimuStartAni(zimuNodeArr[1], config[1][0], config[1][1]) ];

             case 2:
              _a.sent();
              this.shadingBg.active = false;
              return [ 4, this.playZimuMoveAni() ];

             case 3:
              _a.sent();
              AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.clickandlisten);
              this.clickBtn.interactable = true;
              this.smallZimuCount = 0;
              this.bigZimuCount = 0;
              if (this.hasGuidUser) {
                cc.tween(this.node).repeatForever(cc.tween(this.node).delay(1.8).call(function() {
                  _this.createClickItem().then(function(item) {
                    _this.itemMoveAni(item);
                  });
                })).start();
                this.addGuildSoundTimer();
              } else this.startCreateItem();
              return [ 2 ];
            }
          });
        });
      };
      EatBeans.prototype.playZimuStartAni = function(zimuNode, jumpName, idleName) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var zimuSound = "c" == _this.curZimu ? EatBeansConfig_1.EATBEANS_SOUND_CONFIG.C : EatBeansConfig_1.EATBEANS_SOUND_CONFIG.D;
          AudioManager_1.default.playEffect(BUNDLE_NAME, zimuSound, function() {
            var spine = zimuNode.getChildByName("spine").getComponent(sp.Skeleton);
            spine["curCount"] = 0;
            var te = spine.setAnimation(0, jumpName, false);
            spine.addAnimation(0, idleName, false);
            spine.setTrackCompleteListener(te, function(entry, loopCount) {
              resolve();
            });
            AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_05);
          });
        });
      };
      EatBeans.prototype.playZimuMoveAni = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_04);
          var zimuNodeArr = "c" == _this.curZimu ? _this.zimuCArr : _this.zimuDArr;
          cc.tween(zimuNodeArr[0]).to(.5, {
            x: _this.spCSpine.node.x,
            y: -146,
            scale: 1
          }).start();
          "d" == _this.curZimu && cc.tween(zimuNodeArr[1].getChildByName("spine")).to(.5, {
            scale: .2
          }).start();
          cc.tween(zimuNodeArr[1]).to(.5, {
            x: _this.spCSpine.node.x,
            y: 190,
            scale: 1
          }).call(function() {
            resolve();
          }).start();
        });
      };
      EatBeans.prototype.startCreateItem = function() {
        var _this = this;
        var res = "texture/icon_big_c5";
        this.createClickItem(res).then(function(item) {
          cc.tween(item).to(TIME_1, {
            position: _this.posNodeArr[1].position
          }).to(TIME_2 / 2, {
            position: _this.rectNode.position
          }).call(function() {
            _this.changeClickItemAniState(true);
            _this.node.pauseAllActions();
            _this.handSpine.active = true;
            _this.addGuildSoundTimer();
          }).start();
          cc.tween(_this.node).repeatForever(cc.tween(_this.node).delay(1.8).call(function() {
            _this.createClickItem().then(function(item) {
              _this.itemMoveAni(item);
            });
          })).start();
        });
      };
      EatBeans.prototype.randomClickItem = function() {
        var res = "texture/icon_jimu";
        var arr = [ "big", "big", "small", "small", "daoju" ];
        this.smallZimuCount >= 3 ? arr = [ "big", "big", "daoju" ] : this.bigZimuCount >= 3 && (arr = [ "small", "small", "daoju" ]);
        var ranIndex = this.getRandomNum(arr.length) - 1;
        var ranIconIndex;
        if ("big" == arr[ranIndex]) {
          var count = "c" == this.curZimu ? this.bigcCount : this.bigdCount;
          ranIconIndex = this.getRandomNum(count);
          res = "texture/icon_big_" + this.curZimu + ranIconIndex;
        } else if ("small" == arr[ranIndex]) {
          var count = "c" == this.curZimu ? this.smallcCount : this.smalldCount;
          ranIconIndex = this.getRandomNum(count);
          res = "texture/icon_small_" + this.curZimu + ranIconIndex;
        } else {
          ranIconIndex = this.getRandomNum(2);
          res = "texture/icon_daoju_" + ranIconIndex;
        }
        return res;
      };
      EatBeans.prototype.getRandomNum = function(num) {
        return Math.floor(Math.random() * num + 1);
      };
      EatBeans.prototype.createClickItem = function(_res) {
        return __awaiter(this, void 0, void 0, function() {
          var item, res, sp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              item = cc.instantiate(this.clickItemPrefab);
              res = _res || this.randomClickItem();
              return [ 4, this.loadItemSprite(res) ];

             case 1:
              sp = _a.sent();
              item.getComponent(cc.Sprite).spriteFrame = sp;
              item.parent = this.itemContent;
              item.position = this.posNodeArr[0].position;
              item.name = res.split("/")[1];
              "icon_daoju_1" == item.name && (item.scale = .8);
              this.clickItems.push(item);
              return [ 2, item ];
            }
          });
        });
      };
      EatBeans.prototype.loadItemSprite = function(res) {
        return new Promise(function(resolve, reject) {
          ResourcesManager_1.default.instance.loadRes(BUNDLE_NAME, res, ResourcesManager_1.ResourceType.Normal, cc.SpriteFrame, function(err, sp) {
            resolve(sp);
          });
        });
      };
      EatBeans.prototype.itemMoveAni = function(item) {
        var _this = this;
        cc.tween(item).to(TIME_1, {
          position: this.posNodeArr[1].position
        }).to(TIME_2, {
          position: this.posNodeArr[2].position
        }).to(TIME_1, {
          position: this.posNodeArr[3].position
        }).call(function() {
          _this.removeClickItem(item);
          item.destroy();
        }).start();
      };
      EatBeans.prototype.onPickBtnClicked = function() {
        this.addGuildSoundTimer();
        var targetRect = this.rectNode.getBoundingBox();
        for (var index = 0; index < this.clickItems.length; index++) {
          var item = this.clickItems[index];
          if (targetRect.intersects(item.getBoundingBox())) {
            this.dealClickedItem(item);
            this.dealSpriteAni(item.name);
            break;
          }
        }
        if (!this.hasGuidUser) {
          this.hasGuidUser = true;
          this.handSpine.active = false;
          this.changeClickItemAniState(false);
          this.node.resumeAllActions();
        }
      };
      EatBeans.prototype.dealClickedItem = function(item) {
        var spine = "c" == this.curZimu ? this.spCSpine : this.spDSpine;
        this.removeClickItem(item);
        cc.tween(item).to(.3, {
          position: spine.node.position.add(cc.v3(0, 60)),
          scale: 0
        }).call(function() {
          item.destroy();
        }).start();
      };
      EatBeans.prototype.dealSpriteAni = function(res) {
        var _this = this;
        var spine = "c" == this.curZimu ? this.spCSpine : this.spDSpine;
        var zimuSound = "c" == this.curZimu ? EatBeansConfig_1.EATBEANS_SOUND_CONFIG.C : EatBeansConfig_1.EATBEANS_SOUND_CONFIG.D;
        var te, opt;
        if (res.includes("daoju_2")) {
          te = spine.setAnimation(0, "zha", false);
          opt = "daoju_2";
          AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_02);
        } else if (res.includes("daoju_1")) {
          te = spine.setAnimation(0, "ganga", false);
          opt = "daoju_1";
          AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_01);
        } else if (res.includes("small")) {
          te = spine.setAnimation(0, "chi", false);
          opt = "small";
          this.smallZimuCount++;
          this.scheduleOnce(function() {
            _this.dealZimuAni(opt);
          }, .5);
          AudioManager_1.default.playEffect(BUNDLE_NAME, zimuSound);
        } else if (res.includes("big")) {
          te = spine.setAnimation(0, "chi", false);
          opt = "big";
          this.bigZimuCount++;
          this.scheduleOnce(function() {
            _this.dealZimuAni(opt);
          }, .5);
          AudioManager_1.default.playEffect(BUNDLE_NAME, zimuSound);
        }
        spine.addAnimation(0, "idle", true);
        this.checkComplete();
      };
      EatBeans.prototype.dealZimuAni = function(opt) {
        var _this = this;
        var zimuNodeArr = "c" == this.curZimu ? this.zimuCArr : this.zimuDArr;
        var aniNameConfig = [ [ [ "day5_1_BigC_1", "day5_1_BigC_2", "day5_1_BigC_3" ], [ "day5_1_C_small_1", "day5_1_C_small_2", "day5_1_C_small_3" ] ], [ [ "day5_1_BigD_1", "day5_1_BigD_2", "day5_1_BigD_3" ], [ "day5_1_D_small_1", "day5_1_D_small_2", "day5_1_D_small_3" ] ] ];
        var index = "c" == this.curZimu ? 0 : 1;
        var config = aniNameConfig[index];
        var zimuNode, spineName, count;
        if ("small" == opt) {
          zimuNode = zimuNodeArr[1];
          spineName = config[1][this.smallZimuCount - 1];
          count = this.smallZimuCount;
        } else if ("big" == opt) {
          zimuNode = zimuNodeArr[0];
          spineName = config[0][this.bigZimuCount - 1];
          count = this.bigZimuCount;
        }
        if (count > 3) return;
        if (zimuNode) {
          var shadingNode_1 = zimuNode.getChildByName("shading");
          if (count <= 3) {
            shadingNode_1.active = true;
            cc.Tween.stopAllByTarget(shadingNode_1);
            cc.tween(shadingNode_1).delay(.5).call(function() {
              shadingNode_1.active = false;
              var spine = zimuNode.getChildByName("spine").getComponent(sp.Skeleton);
              if (spineName) {
                var te = spine.setAnimation(0, spineName, false);
                3 == count && spine.setTrackCompleteListener(te, function() {
                  var spSpine = "c" == _this.curZimu ? _this.spCSpine : _this.spDSpine;
                  spSpine.setAnimation(0, "baoge", false);
                  spine.addAnimation(0, "idle", true);
                  AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_03);
                });
              }
            }).start();
          } else shadingNode_1.active = false;
        }
      };
      EatBeans.prototype.checkComplete = function() {
        var _this = this;
        if (this.smallZimuCount >= 3 && this.bigZimuCount >= 3) {
          this.clickBtn.interactable = false;
          this.node.stopAllActions();
          this.clearGuidHand();
          this.scheduleOnce(function() {
            if ("c" == _this.curZimu) {
              _this.spCSpine.node.active = false;
              _this.spDSpine.node.active = true;
              _this.zimuCArr.map(function(node) {
                return node.active = false;
              });
              _this.curZimu = "d";
              _this.showZimuSpine();
            } else _this.gameOverAni();
          }, 3);
        }
      };
      EatBeans.prototype.gameOverAni = function() {
        cc.log("game over");
        this.shadingBg.active = true;
        var width = cc.winSize.width;
        var posX = [ -100 - width / 6, 100 - width / 6 ];
        var config = aniNameConfig[0];
        this.zimuCArr.map(function(node, index) {
          node.y = 0 == index ? 0 : -56;
          node.x = posX[index];
          node.scale = 2;
          node.getChildByName("shading").active = false;
          node.active = true;
          var spine = node.getChildByName("spine").getComponent(sp.Skeleton);
          var aniName = config[index][1];
          console.log(" ====== aniName\uff1b ", aniName);
          spine.setAnimation(0, aniName, true);
        });
        posX = [ width / 6 - 100, width / 6 + 100 ];
        config = aniNameConfig[1];
        this.zimuDArr.map(function(node, index) {
          node.y = 0 == index ? 0 : -41;
          node.x = posX[index] + 30;
          node.scale = 2;
          1 == index && (node.getChildByName("spine").scale = .227);
          node.getChildByName("shading").active = false;
          node.active = true;
          var spine = node.getChildByName("spine").getComponent(sp.Skeleton);
          var aniName = config[index][1];
          console.log(" ====== aniName\uff1b ", aniName);
          spine.setAnimation(0, aniName, true);
        });
        this.gameOverSoundAndAni();
      };
      EatBeans.prototype.gameOverSoundAndAni = function() {
        return __awaiter(this, void 0, void 0, function() {
          var te;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.playZimuEndAni(this.zimuCArr, aniNameConfig[0], EatBeansConfig_1.EATBEANS_SOUND_CONFIG.C) ];

             case 1:
              _a.sent();
              return [ 4, this.playZimuEndAni(this.zimuDArr, aniNameConfig[1], EatBeansConfig_1.EATBEANS_SOUND_CONFIG.D) ];

             case 2:
              _a.sent();
              this.caidaiSpine.node.active = true;
              te = this.caidaiSpine.setAnimation(0, "caidai", false);
              this.caidaiSpine.setTrackCompleteListener(te, function(entry, loopCount) {
                cc.log("\u6492\u82b1\u7ed3\u675f");
                _this.jinbiSpine.node.active = true;
                _this.jinbiSpine.setAnimation(0, "Animation", true);
                AudioManager_1.default.playEffect(BUNDLE_NAME, "sound/coin_large");
                _this.scheduleOnce(function() {
                  Tigo_1.default.callAppToClose("replayOrNext", true);
                }, 4);
              });
              return [ 2 ];
            }
          });
        });
      };
      EatBeans.prototype.playZimuEndAni = function(nodeArr, config, zimuSound) {
        return new Promise(function(resolve, reject) {
          AudioManager_1.default.playEffect(BUNDLE_NAME, zimuSound, function() {
            nodeArr.map(function(zimuNode, index) {
              AudioManager_1.default.playEffect(BUNDLE_NAME, EatBeansConfig_1.EATBEANS_SOUND_CONFIG.SE_zimuchidou_05);
              var spine = zimuNode.getChildByName("spine").getComponent(sp.Skeleton);
              var te = spine.setAnimation(0, config[index][0], false);
              spine.addAnimation(0, config[index][1], false);
              spine.setTrackCompleteListener(te, function(entry, loopCount) {
                resolve();
              });
            });
          });
        });
      };
      EatBeans.prototype.removeClickItem = function(item) {
        var index = this.clickItems.indexOf(item);
        this.clickItems.splice(index, 1);
        cc.Tween.stopAllByTarget(item);
      };
      EatBeans.prototype.changeClickItemAniState = function(pause) {
        for (var index = 0; index < this.clickItems.length; index++) {
          var item = this.clickItems[index];
          pause ? item.pauseAllActions() : item.resumeAllActions();
        }
      };
      __decorate([ property(cc.Prefab) ], EatBeans.prototype, "clickItemPrefab", void 0);
      __decorate([ property([ cc.Node ]) ], EatBeans.prototype, "zimuCArr", void 0);
      __decorate([ property([ cc.Node ]) ], EatBeans.prototype, "zimuDArr", void 0);
      EatBeans = __decorate([ ccclass ], EatBeans);
      return EatBeans;
    }(cc.Component);
    exports.default = EatBeans;
    cc._RF.pop();
  }, {
    "../../../kit/manager/ResourcesManager": void 0,
    "../../../kit/system/audio/AudioManager": void 0,
    "../../../kit/system/timer/TimerSystem": void 0,
    "../../common_en/Tigo": void 0,
    "../../common_en/notifierCenter": void 0,
    "./EatBeansConfig": "EatBeansConfig"
  } ]
}, {}, [ "EatBeans", "EatBeansConfig" ]);
//# sourceMappingURL=index.js.map
