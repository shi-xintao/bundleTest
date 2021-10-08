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
  bookListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3370eoivVLg4b83Gsl5+cJ", "bookListItem");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  pictureBookItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31a697BRUNCmY6nStBVYqhE", "pictureBookItem");
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
    var pictureBookItem = function(_super) {
      __extends(pictureBookItem, _super);
      function pictureBookItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.lock = null;
        _this.spriteFrame_arr = [];
        _this.lessonType = 0;
        _this.isLock = false;
        return _this;
      }
      pictureBookItem.prototype.onLoad = function() {};
      pictureBookItem.prototype.start = function() {};
      pictureBookItem.prototype.setItemFrame = function() {};
      pictureBookItem.prototype.init = function(data) {
        this.bookInfo = data;
        this.lessonType = userDataManager_1.UserDataManager.instance.getPicAndGameLockState();
        this.isLock = this.bookInfo.unlock;
        this.lock.active = !this.isLock;
        this.item.getComponent(cc.Sprite).spriteFrame = this.spriteFrame_arr[this.bookInfo.id];
      };
      pictureBookItem.prototype.onClick = function() {
        this.isLock ? kit_1.kit.manager.Event.emit(event_1.STATE_TO_PICTURE_BOOK, this.bookInfo) : kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      pictureBookItem.prototype.open = function() {};
      pictureBookItem.prototype.close = function() {};
      __decorate([ property(cc.Node) ], pictureBookItem.prototype, "item", void 0);
      __decorate([ property(cc.Node) ], pictureBookItem.prototype, "lock", void 0);
      __decorate([ property(cc.SpriteFrame) ], pictureBookItem.prototype, "spriteFrame_arr", void 0);
      pictureBookItem = __decorate([ ccclass ], pictureBookItem);
      return pictureBookItem;
    }(cc.Component);
    exports.default = pictureBookItem;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/userDataManager": void 0,
    "../../../../kit/kit": void 0
  } ],
  pictureBookList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0188bUV9ftHR5ePZQauF+gE", "pictureBookList");
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
    var event_1 = require("../../../../Script/config/event");
    var PicBookDataManager_1 = require("../../../../Script/manager/PicBookDataManager");
    var pictureBookItem_1 = require("./pictureBookItem");
    var kit_1 = require("../../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var pictureBookList = function(_super) {
      __extends(pictureBookList, _super);
      function pictureBookList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.listNode = null;
        return _this;
      }
      pictureBookList.prototype.onLoad = function() {
        this.initList();
      };
      pictureBookList.prototype.start = function() {};
      pictureBookList.prototype.initList = function() {
        var _this = this;
        var bookData = PicBookDataManager_1.PicBookDataManager.instance.getPicBookListData();
        bookData.forEach(function(element) {
          var bookItem = cc.instantiate(_this.itemPrefab);
          var pictureBookItemComponent = bookItem.getComponent(pictureBookItem_1.default);
          pictureBookItemComponent.init(element);
          _this.listNode.addChild(bookItem);
        });
      };
      pictureBookList.prototype.onBackClick = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      pictureBookList.prototype.onDestroy = function() {};
      __decorate([ property(cc.Prefab) ], pictureBookList.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Node) ], pictureBookList.prototype, "listNode", void 0);
      pictureBookList = __decorate([ ccclass ], pictureBookList);
      return pictureBookList;
    }(cc.Component);
    exports.default = pictureBookList;
    cc._RF.pop();
  }, {
    "../../../../Script/config/event": void 0,
    "../../../../Script/manager/PicBookDataManager": void 0,
    "../../../../kit/kit": void 0,
    "./pictureBookItem": "pictureBookItem"
  } ]
}, {}, [ "bookListItem", "pictureBookItem", "pictureBookList" ]);