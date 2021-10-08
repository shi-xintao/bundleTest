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
  EncourageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e66ffq5J9HMpL+2/y3zBVW", "EncourageData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../../Script/config/config");
    var EncourageWallDataManager_1 = require("../../../Script/manager/EncourageWallDataManager");
    var ccclass = cc._decorator.ccclass;
    var EncourageData = function() {
      function EncourageData() {
        this.paintGameId = 0;
        this.paintPropId = [ 1001, 1002, 1003, 1004, 1005 ];
        this._clickLessonId = -1;
        this.assetMap = [];
      }
      EncourageData_1 = EncourageData;
      Object.defineProperty(EncourageData, "instance", {
        get: function() {
          null == EncourageData_1._instance && (EncourageData_1._instance = new EncourageData_1());
          return EncourageData_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(EncourageData.prototype, "clickLesson", {
        get: function() {
          return this._clickLessonId;
        },
        set: function(value) {
          this._clickLessonId = value;
        },
        enumerable: false,
        configurable: true
      });
      EncourageData.prototype.encourageList = function() {
        return EncourageWallDataManager_1.EncourageWallDataManager.instance.getEncourageListData();
      };
      EncourageData.prototype.encourageInfo = function(lessonId) {
        var list = this.encourageList();
        for (var i = 0; i < list.length; i++) if (list[i].lessonId == lessonId) return list[i];
        return null;
      };
      EncourageData.prototype.nextEncourageInfo = function(index) {
        var list = this.encourageList();
        if (index == list.length - 1) return null;
        return list[index + 1];
      };
      EncourageData.prototype.gameInfo = function(lessonId) {
        var info = this.encourageInfo(lessonId);
        var resInfo = {};
        config_1.GAME_LIST_CONFIG.find(function(item) {
          item.id == info.gameId && (resInfo = item);
        });
        resInfo["params"]["gameId"] = info.gameId.toString();
        resInfo["params"]["propId"] = info.propId.toString();
        cc.log("\u83b7\u53d6\u6e38\u620f\u4fe1\u606f", resInfo);
        return resInfo;
      };
      EncourageData.prototype.bookInfo = function(lessonId) {
        var info = this.encourageInfo(lessonId);
        var resInfo = {};
        config_1.PICTURE_BOOK_LIST_CONFIG.find(function(item) {
          item.id == info.gameId && (resInfo = item);
        });
        resInfo["params"]["gameId"] = info.bookId.toString();
        resInfo["params"]["propId"] = "0";
        cc.log("\u83b7\u53d6\u7ed8\u672c\u4fe1\u606f", resInfo);
        return resInfo;
      };
      EncourageData.prototype.getPaintIcon = function(propId) {
        var _this = this;
        if (!kit_1.kit.system.platform.isNative) return Promise.resolve(null);
        return new Promise(function(reslove, reject) {
          var filePath = "" + jsb.fileUtils.getWritablePath() + propId + "paint.png";
          if (!jsb.fileUtils.isFileExist(filePath)) {
            reslove(null);
            return;
          }
          cc.assetManager.loadRemote(filePath, function(err, res) {
            console.log(res);
            if (err || !res) {
              console.log("\u52a0\u8f7d\u5931\u8d25", err);
              reslove(null);
              return;
            }
            res.addRef();
            _this.assetMap.push(res);
            var spr = new cc.SpriteFrame();
            spr.setTexture(res);
            reslove(spr);
          });
        });
      };
      EncourageData.prototype.release = function() {
        for (var i = 0; i < this.assetMap.length; i++) this.assetMap[i].decRef();
        this.assetMap = [];
      };
      var EncourageData_1;
      EncourageData.SHOW_DETAIL = "show_detail";
      EncourageData._instance = null;
      EncourageData = EncourageData_1 = __decorate([ ccclass ], EncourageData);
      return EncourageData;
    }();
    exports.default = EncourageData;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/manager/EncourageWallDataManager": void 0,
    "../../../kit/kit": void 0
  } ],
  EncourageDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d02dbKvXLhOc4jwdm8C07tF", "EncourageDetail");
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
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../../Script/config/config");
    var enum_1 = require("../../../Script/config/enum");
    var event_1 = require("../../../Script/config/event");
    var EncourageData_1 = require("./EncourageData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EncourageDetail = function(_super) {
      __extends(EncourageDetail, _super);
      function EncourageDetail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.btn_item = null;
        _this.contentNode = null;
        return _this;
      }
      EncourageDetail.prototype.init = function(lessonId) {
        var _this = this;
        this.clickCmpt = this.node.addComponent(kit_1.kit.component.Click);
        this.lessonId = lessonId;
        var data = EncourageData_1.default.instance.encourageInfo(lessonId);
        var type = data.type;
        type == enum_1.REWARD_TYPE.pictureBook && kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "textures/pictureBook", kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
          if (e) {
            cc.log("loadRes textures/icon/" + data.iconUrl + " error " + e);
            return;
          }
          _this.btn_item.spriteFrame = res;
        });
        this.icon.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        this.icon.node.width = 227;
        this.icon.node.height = 227;
        kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "textures/icon/" + data.iconUrl, kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
          if (e) {
            cc.log("loadRes textures/icon/" + data.iconUrl + " error " + e);
            return;
          }
          _this.icon.spriteFrame = res;
        });
        this.clickCmpt.onClick(this.contentNode, this.onClose, this);
        this.clickCmpt.onClick(this.btn_item.node, this.changeGame, this);
      };
      EncourageDetail.prototype.changeGame = function() {
        var gameData;
        var data = EncourageData_1.default.instance.encourageInfo(this.lessonId);
        switch (data.type) {
         case enum_1.REWARD_TYPE.game:
         case enum_1.REWARD_TYPE.prop:
          gameData = EncourageData_1.default.instance.gameInfo(this.lessonId);
          kit_1.kit.manager.Event.emit(event_1.STATE_TO_GAME, gameData);
          break;

         case enum_1.REWARD_TYPE.pictureBook:
          gameData = EncourageData_1.default.instance.bookInfo(this.lessonId);
          kit_1.kit.manager.Event.emit(event_1.STATE_TO_PICTURE_BOOK, gameData);
        }
      };
      EncourageDetail.prototype.onClose = function() {
        this.node.destroy();
      };
      __decorate([ property(cc.Sprite) ], EncourageDetail.prototype, "icon", void 0);
      __decorate([ property(cc.Sprite) ], EncourageDetail.prototype, "btn_item", void 0);
      __decorate([ property(cc.Node) ], EncourageDetail.prototype, "contentNode", void 0);
      EncourageDetail = __decorate([ ccclass ], EncourageDetail);
      return EncourageDetail;
    }(cc.Component);
    exports.default = EncourageDetail;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/config/enum": void 0,
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0,
    "./EncourageData": "EncourageData"
  } ],
  EncourageItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54345QT97tNbb+Hzzdj18ey", "EncourageItem");
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
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../../Script/config/config");
    var EncourageData_1 = require("./EncourageData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EncourageItem = function(_super) {
      __extends(EncourageItem, _super);
      function EncourageItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.jiantou_right = null;
        _this.jiantou_down = null;
        _this.jiantou_top = null;
        _this.icon_bg = null;
        _this.canClick = true;
        return _this;
      }
      EncourageItem.prototype.init = function(data, index, direction) {
        this.icon = cc.find("content/mask/icon", this.node).getComponent(cc.Sprite);
        this.jiantou_right = this.node.getChildByName("jiantou_right").getComponent(cc.Sprite);
        this.jiantou_down = this.node.getChildByName("jiantou_down").getComponent(cc.Sprite);
        this.jiantou_top = this.node.getChildByName("jiantou_top").getComponent(cc.Sprite);
        this.icon_bg = cc.find("content/icon_bg", this.node).getComponent(cc.Sprite);
        this.currentData = data;
        this.currentIndex = index;
        this.loadIcon();
        this.showJiantou(direction);
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      };
      EncourageItem.prototype.touchStart = function(event) {
        this.touchpos = event.getLocation();
      };
      EncourageItem.prototype.touchEnd = function(event) {
        var endPos = event.getLocation();
        if (Math.abs(endPos.x - this.touchpos.x) > 5 || Math.abs(endPos.y - this.touchpos.y) > 5) return;
        this.onClick();
      };
      EncourageItem.prototype.loadIcon = function() {
        return __awaiter(this, void 0, void 0, function() {
          var icon, sprite;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              icon = this.currentData.iconUrl;
              if (1 == this.currentData.lockVal) {
                icon += "_lock";
                kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "textures/bg_lock", kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
                  if (e) {
                    cc.log("loadRes textures/$bg_lock error " + e);
                    return;
                  }
                  _this.icon_bg.spriteFrame = res;
                });
              }
              if (!(this.currentData.gameId == EncourageData_1.default.instance.paintGameId)) return [ 3, 2 ];
              if (!(EncourageData_1.default.instance.paintPropId.indexOf(this.currentData.propId) > -1)) return [ 3, 2 ];
              return [ 4, EncourageData_1.default.instance.getPaintIcon(this.currentData.propId) ];

             case 1:
              sprite = _a.sent();
              if (sprite) {
                this.fullBg(sprite);
                return [ 2 ];
              }
              _a.label = 2;

             case 2:
              kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "textures/icon/" + icon, kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
                if (e) {
                  cc.log("loadRes textures/icon/" + icon + " error " + e);
                  return;
                }
                _this.fullBg(res);
              });
              return [ 2 ];
            }
          });
        });
      };
      EncourageItem.prototype.showJiantou = function(direction) {
        this.jiantou_right.node.active = false;
        this.jiantou_down.node.active = false;
        this.jiantou_top.node.active = false;
        var activeJianTou;
        var nextInfo = EncourageData_1.default.instance.nextEncourageInfo(this.currentIndex - 1);
        if (!nextInfo) return;
        if (1 == direction) {
          this.jiantou_down.node.active = true;
          activeJianTou = this.jiantou_down;
        } else if (2 == direction) {
          this.jiantou_right.node.active = true;
          activeJianTou = this.jiantou_right;
        } else {
          this.jiantou_top.node.active = true;
          activeJianTou = this.jiantou_top;
        }
        1 == nextInfo.lockVal && kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "textures/jiantou_lock", kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
          if (e) {
            cc.log("loadRes textures/jiantou_lock error " + e);
            return;
          }
          activeJianTou.spriteFrame = res;
        });
      };
      EncourageItem.prototype.onClick = function() {
        if (1 == this.currentData.lockVal) {
          this.shakeOptions();
          return;
        }
        EncourageData_1.default.instance.clickLesson = this.currentData.lessonId;
        kit_1.kit.manager.Event.emit(EncourageData_1.default.SHOW_DETAIL);
      };
      EncourageItem.prototype.shakeOptions = function() {
        var _this = this;
        if (!this.canClick) return;
        kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_ENCOURAGE_LIST, "audio/wrong");
        this.canClick = false;
        var content = this.node.getChildByName("content");
        cc.tween(content).by(16.67 * 6 / 1e3, {
          angle: -15
        }).by(16.67 * 6 / 1e3, {
          angle: 25
        }).by(16.67 * 6 / 1e3, {
          angle: -15
        }).by(16.67 * 6 / 1e3, {
          angle: 8
        }).by(16.67 * 6 / 1e3, {
          angle: -3
        }).call(function() {
          _this.canClick = true;
        }).start();
      };
      EncourageItem.prototype.onDestroy = function() {};
      EncourageItem.prototype.fullBg = function(sprite) {
        if (!sprite) return;
        var rect = sprite.getRect();
        this.icon.spriteFrame = sprite;
        if (rect.width == rect.height) {
          this.icon.node.width = 230;
          this.icon.node.height = 230;
          return;
        }
        cc.log(rect);
        if (rect.width > rect.height) {
          this.icon.node.height = 230;
          this.icon.node.width = 230 * rect.width / rect.height;
        }
        if (rect.width < rect.height) {
          this.icon.node.width = 230;
          this.icon.node.width = 230 * rect.height / rect.width;
        }
      };
      EncourageItem = __decorate([ ccclass ], EncourageItem);
      return EncourageItem;
    }(cc.Component);
    exports.default = EncourageItem;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../kit/kit": void 0,
    "./EncourageData": "EncourageData"
  } ],
  EncourageList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fee6GArCdGW5TeIdllLb81", "EncourageList");
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
    var kit_1 = require("../../../kit/kit");
    var config_1 = require("../../../Script/config/config");
    var event_1 = require("../../../Script/config/event");
    var baseComponent_1 = require("../../components/baseComponent");
    var EncourageData_1 = require("./EncourageData");
    var EncourageDetail_1 = require("./EncourageDetail");
    var EncourageItem_1 = require("./EncourageItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EncourageList = function(_super) {
      __extends(EncourageList, _super);
      function EncourageList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.encourageItem = null;
        _this.startPos = cc.v2(256, 194);
        _this.offsetY = 362;
        _this.offsetX = 362;
        return _this;
      }
      EncourageList.prototype.init = function(data) {
        kit_1.kit.manager.Event.on(EncourageData_1.default.SHOW_DETAIL, this.showDetail, this);
        this.ui.onClick("btn_back", this.onBtnBack, this);
        this.showList();
      };
      EncourageList.prototype.showList = function() {
        var list = EncourageData_1.default.instance.encourageList();
        for (var i = 0; i < list.length; i++) {
          var prefab = cc.instantiate(this.encourageItem);
          prefab.name = "item_node" + (i + 1);
          this.ui.getNode("content").addChild(prefab);
          this.setItemPosition(prefab, i + 1, list[i]);
        }
      };
      EncourageList.prototype.setItemPosition = function(node, index, data) {
        var direction;
        if (index % 4 == 1) {
          node.x = this.startPos.x + (1 == index ? 0 : 2 * Math.floor(index / 4) * 362);
          node.y = this.startPos.y;
          direction = 1;
        }
        if (index % 4 == 2) {
          node.x = this.startPos.x + (2 == index ? 0 : 2 * Math.floor(index / 4) * 362);
          node.y = this.startPos.y - this.offsetY;
          direction = 2;
        }
        if (index % 4 == 3) {
          node.x = this.startPos.x + (3 == index ? 362 : 362 * (2 * Math.floor(index / 4) + 1));
          node.y = this.startPos.y - this.offsetY;
          direction = 3;
        }
        if (index % 4 == 0) {
          node.x = this.startPos.x + (4 == index ? 362 : 362 * (2 * Math.floor(index / 4) - 1));
          node.y = this.startPos.y;
          direction = 2;
        }
        var component = node.getComponent(EncourageItem_1.default);
        component.init(data, index, direction);
      };
      EncourageList.prototype.showDetail = function() {
        var _this = this;
        var lessonId = EncourageData_1.default.instance.clickLesson;
        EncourageData_1.default.instance.clickLesson = -1;
        if (-1 == lessonId) return;
        kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_ENCOURAGE_LIST, "prefab/encourageDetail", kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(e, res) {
          if (e) {
            cc.log("prefab/encourageDetail error " + e);
            return;
          }
          var detail = cc.instantiate(res);
          _this.ui.getNode("detailNode").addChild(detail);
          detail.getComponent(EncourageDetail_1.default).init(lessonId);
        });
      };
      EncourageList.prototype.onBtnBack = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      EncourageList.prototype.onDestroy = function() {
        EncourageData_1.default.instance.release();
        kit_1.kit.manager.Event.off(EncourageData_1.default.SHOW_DETAIL, this.showDetail, this);
      };
      __decorate([ property(cc.Prefab) ], EncourageList.prototype, "encourageItem", void 0);
      EncourageList = __decorate([ ccclass ], EncourageList);
      return EncourageList;
    }(baseComponent_1.default);
    exports.default = EncourageList;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0,
    "../../components/baseComponent": void 0,
    "./EncourageData": "EncourageData",
    "./EncourageDetail": "EncourageDetail",
    "./EncourageItem": "EncourageItem"
  } ]
}, {}, [ "EncourageData", "EncourageDetail", "EncourageItem", "EncourageList" ]);