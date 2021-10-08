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
  gameIconItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba2a3sa7aBDh45Ox1UDM5MW", "gameIconItem");
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
    var kit_1 = require("../../../../kit/kit");
    var event_1 = require("../../../../Script/config/event");
    var userDataManager_1 = require("../../../../Script/manager/userDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var gameIconItem = function(_super) {
      __extends(gameIconItem, _super);
      function gameIconItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.lockSpine = null;
        _this.spriteFrame_arr = [];
        _this.lessonType = 0;
        _this.isLock = false;
        _this.isClick = true;
        return _this;
      }
      gameIconItem.prototype.onLoad = function() {};
      gameIconItem.prototype.start = function() {};
      gameIconItem.prototype.init = function(data) {
        this.bookInfo = data;
        this.lessonType = userDataManager_1.UserDataManager.instance.getPicAndGameLockState();
        this.isLock = this.bookInfo.unlock;
        this.lockSpine.node.active = !this.isLock;
        this.item.getComponent(cc.Sprite).spriteFrame = this.spriteFrame_arr[this.bookInfo.id];
      };
      gameIconItem.prototype.onClick = function() {
        var _this = this;
        if (!this.isClick) return;
        if (this.isLock) kit_1.kit.manager.Event.emit(event_1.STATE_TO_GAME, this.bookInfo); else {
          this.isClick = false;
          this.lockSpine.clearTracks();
          this.lockSpine.setToSetupPose();
          this.lockSpine.setAnimation(0, "dou", false);
          this.lockSpine.setCompleteListener(function() {
            0 == _this.bookInfo.id && kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
            _this.isClick = true;
          });
        }
      };
      gameIconItem.prototype.open = function() {};
      gameIconItem.prototype.close = function() {};
      __decorate([ property(cc.Node) ], gameIconItem.prototype, "item", void 0);
      __decorate([ property(sp.Skeleton) ], gameIconItem.prototype, "lockSpine", void 0);
      __decorate([ property(cc.SpriteFrame) ], gameIconItem.prototype, "spriteFrame_arr", void 0);
      gameIconItem = __decorate([ ccclass ], gameIconItem);
      return gameIconItem;
    }(cc.Component);
    exports.default = gameIconItem;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/userDataManager": void 0,
    "../../../../kit/kit": void 0
  } ],
  gameItemLimit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03e96h7tqRPPoXQJFnz276Y", "gameItemLimit");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  gameList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70111OJ0v9PZpONOMx2+j08", "gameList");
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
    var kit_1 = require("../../../../kit/kit");
    var event_1 = require("../../../../Script/config/event");
    var GameDataManager_1 = require("../../../../Script/manager/GameDataManager");
    var gameIconItem_1 = require("./gameIconItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameList = function(_super) {
      __extends(GameList, _super);
      function GameList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.listNode = null;
        return _this;
      }
      GameList.prototype.onLoad = function() {
        this.initList();
      };
      GameList.prototype.initList = function() {
        var _this = this;
        var gameData = GameDataManager_1.GameDataManager.instance.getGameListData();
        gameData.forEach(function(element) {
          var bookItem = cc.instantiate(_this.itemPrefab);
          var pictureBookItemComponent = bookItem.getComponent(gameIconItem_1.default);
          pictureBookItemComponent.init(element);
          _this.listNode.addChild(bookItem);
        });
      };
      GameList.prototype.onBackClick = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      GameList.prototype.onDestroy = function() {};
      __decorate([ property(cc.Prefab) ], GameList.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Node) ], GameList.prototype, "listNode", void 0);
      GameList = __decorate([ ccclass ], GameList);
      return GameList;
    }(cc.Component);
    exports.default = GameList;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/GameDataManager": void 0,
    "../../../../kit/kit": void 0,
    "./gameIconItem": "gameIconItem"
  } ]
}, {}, [ "gameIconItem", "gameItemLimit", "gameList" ]);