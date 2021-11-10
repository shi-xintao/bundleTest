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
  Gallery: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa53cb74GhH4J4O5x/ciVbL", "Gallery");
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
    var paintDataManager_1 = require("../paintDataManager");
    var galleryitem_1 = require("./galleryitem");
    var tianSeManager_1 = require("../tianSeManager");
    var paintAssetsManager_1 = require("../paintAssetsManager");
    var TigoManager_1 = require("../TigoManager");
    var EventSystem_1 = require("../../../../kit/system/event/EventSystem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Gallery = function(_super) {
      __extends(Gallery, _super);
      function Gallery() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.showItemPrefab = null;
        _this.galleryItemPrefab = null;
        _this.listNode = null;
        _this.scrollView = null;
        _this.frame_arr = [];
        _this.select_Index = -1;
        _this.paintItemComponentMap = new Map();
        _this.assetMap = [];
        return _this;
      }
      Gallery.prototype.onLoad = function() {
        console.log("\u8fdb\u5165\u753b\u5eca ===");
        EventSystem_1.default.on("callCocos_data", this.callCocos_data, this);
      };
      Gallery.prototype.callCocos_data = function(_data) {
        return __awaiter(this, void 0, void 0, function() {
          var data, saveData;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              console.log("tianSeNode==========\u300b", _data);
              data = _data.data;
              if (!("TiGoStorageSuccess" == data.action)) return [ 3, 2 ];
              if (!("gallery_all" == data.param.unique)) return [ 3, 2 ];
              saveData = paintDataManager_1.default.getSavePaintData();
              return [ 4, Promise.all(saveData.map(function(element) {
                return new Promise(function(resolve, reject) {
                  var base64 = data.param.data["paint_" + element.propId];
                  if (base64) {
                    console.log("\u5f53\u524dBase64\u6587\u4ef6 paint_" + element.propId);
                    var img = new Image();
                    img.src = base64;
                    var texture = new cc.Texture2D();
                    texture.initWithElement(img);
                    paintAssetsManager_1.paintAssetsManager.instance.setPaintTextureById(element.propId, texture);
                    resolve();
                  } else resolve();
                });
              })) ];

             case 1:
              _a.sent();
              this.initList();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      Gallery.prototype.start = function() {
        if (tianSeManager_1.tianSeManager.instance.open_gallery_in_firstPaint) this.initList(); else {
          tianSeManager_1.tianSeManager.instance.m_pOwner.setShowLoading(true);
          var platform = paintDataManager_1.default.getPlatform();
          if ("cn" == platform) this.loadPaintFrame(); else {
            var params = {
              method: "GET",
              key: "",
              getAll: "1",
              type: "file",
              unique: "gallery_all"
            };
            console.log("\u83b7\u53d6\u539f\u751f\u7aef\u6240\u6709Base64===========");
            TigoManager_1.default.instance.callAppToStorage(params);
          }
        }
      };
      Gallery.prototype.loadPaintFrame = function() {
        return __awaiter(this, void 0, void 0, function() {
          var data;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              data = paintDataManager_1.default.getSavePaintData();
              return [ 4, Promise.all(data.map(function(element, i) {
                return new Promise(function(resolve, reject) {
                  if (cc.sys.isNative) {
                    var path = paintDataManager_1.default.getNativePathByIndex(element.propId);
                    var filePath = jsb.fileUtils.getWritablePath() + path;
                    if (!jsb.fileUtils.isFileExist(filePath)) {
                      console.log(filePath + " \u4e0d\u5b58\u5728");
                      resolve();
                      return;
                    }
                    cc.assetManager.loadRemote(filePath, function(err, res) {
                      err && console.log("\u52a0\u8f7d\u5931\u8d25", err);
                      _this.assetMap.push(res);
                      console.log("\u52a0\u8f7d\u6210\u529f" + element.native_path);
                      paintAssetsManager_1.paintAssetsManager.instance.setPaintTextureById(element.propId, res);
                      resolve();
                    });
                  } else resolve();
                });
              })) ];

             case 1:
              _a.sent();
              this.initList();
              return [ 2 ];
            }
          });
        });
      };
      Gallery.prototype.initList = function() {
        var _this = this;
        console.log("\u521d\u59cb\u5316\u753b\u5eca\u5217\u8868");
        tianSeManager_1.tianSeManager.instance.m_pOwner.setShowLoading(false);
        var data = paintDataManager_1.default.getPaintListData();
        var len = data.length;
        for (var i = 0; i < len; i += 4) {
          var galleryNode = cc.instantiate(this.itemPrefab);
          this.listNode.addChild(galleryNode);
          for (var j = 0; j < 4; j++) {
            var paintData = data[i + j];
            if (paintData) {
              var galleryItem = cc.instantiate(this.galleryItemPrefab);
              var galleryitemComponent = galleryItem.getComponent(galleryitem_1.default);
              galleryitemComponent.init(paintData);
              this.paintItemComponentMap.set(paintData.propId, galleryitemComponent);
              var posNode = galleryNode.getChildByName("pos" + j);
              galleryItem.position = posNode.position;
              galleryNode.addChild(galleryItem);
            }
          }
        }
        tianSeManager_1.tianSeManager.instance.m_pOwner.setShowLoading(false);
        var num = len % 4;
        var a = Math.floor(.25 * len);
        if (0 != num) {
          var designResolution = cc.Canvas.instance.designResolution;
          var windths_1 = designResolution.width;
          this.scheduleOnce(function() {
            _this.setScrollViewOffset();
            _this.listNode.getComponent(cc.Layout).enabled = false;
            _this.listNode.width = windths_1 * a + windths_1 * num * .25;
            _this.listNode.width < _this.scrollView.node.width && (_this.listNode.width = _this.scrollView.node.width);
          }, .3);
        }
      };
      Gallery.prototype.setScrollViewOffset = function() {
        tianSeManager_1.tianSeManager.instance.propId && "0" != tianSeManager_1.tianSeManager.instance.propId && "" != tianSeManager_1.tianSeManager.instance.propId && this.setMoveOffset(tianSeManager_1.tianSeManager.instance.propId);
      };
      Gallery.prototype.setMoveOffset = function(propId) {
        var designResolution = cc.Canvas.instance.designResolution;
        var windths = designResolution.width;
        console.log("\u8fdb\u5165\u753b\u5eca\u5b9a\u4f4d" + propId);
        var galleryitemComponent = this.paintItemComponentMap.get(Number(propId));
        galleryitemComponent.node.getChildByName("num").color = cc.color(0, 255, 0);
        var pos = galleryitemComponent.node.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos1 = this.scrollView.node.convertToNodeSpaceAR(pos);
        var p = cc.v2(pos1.x - windths / 2, pos1.y);
        this.scrollView.scrollToOffset(p, .5);
      };
      Gallery.prototype.refreshItem = function() {
        var ind = tianSeManager_1.tianSeManager.instance.TanseIndex;
        console.log("\u8fdb\u5165\u5237\u65b0\u5bf9\u5e94\u9053\u5177" + ind);
        var galleryitemComponent = this.paintItemComponentMap.get(ind);
        var data = paintDataManager_1.default.getPaintDataById(ind);
        galleryitemComponent.init(data);
        galleryitemComponent.node.active = false;
        var node = cc.instantiate(this.showItemPrefab);
        var tex = paintAssetsManager_1.paintAssetsManager.instance.getPaintTextureById(ind);
        if (tex) {
          var spr = new cc.SpriteFrame(tex);
          node.getChildByName("paint").getComponent(cc.Sprite).spriteFrame = spr;
        } else {
          var line = paintAssetsManager_1.paintAssetsManager.instance.getPaintLineTextureById(ind);
          var spr1 = new cc.SpriteFrame(line);
          node.getChildByName("paint").getComponent(cc.Sprite).spriteFrame = spr1;
        }
        this.node.addChild(node);
        var pos = galleryitemComponent.node.convertToWorldSpaceAR(cc.v2(0, 0));
        var pos1 = this.node.convertToNodeSpaceAR(pos);
        cc.tween(node).to(0, {
          scale: 3.5
        }).to(1.5, {
          scale: 1,
          position: pos1
        }).call(function() {
          galleryitemComponent.node.active = true;
          node.destroy();
        }).start();
      };
      Gallery.prototype.onDestroy = function() {
        for (var i = 0; i < this.assetMap.length; i++) cc.assetManager.releaseAsset(this.assetMap[i]);
        this.assetMap = [];
        EventSystem_1.default.off("callCocos_data", this.callCocos_data, this);
      };
      __decorate([ property(cc.Prefab) ], Gallery.prototype, "itemPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Gallery.prototype, "showItemPrefab", void 0);
      __decorate([ property(cc.Prefab) ], Gallery.prototype, "galleryItemPrefab", void 0);
      __decorate([ property(cc.Node) ], Gallery.prototype, "listNode", void 0);
      __decorate([ property(cc.ScrollView) ], Gallery.prototype, "scrollView", void 0);
      Gallery = __decorate([ ccclass ], Gallery);
      return Gallery;
    }(cc.Component);
    exports.default = Gallery;
    cc._RF.pop();
  }, {
    "../../../../kit/system/event/EventSystem": void 0,
    "../TigoManager": "TigoManager",
    "../paintAssetsManager": "paintAssetsManager",
    "../paintDataManager": "paintDataManager",
    "../tianSeManager": "tianSeManager",
    "./galleryitem": "galleryitem"
  } ],
  GaussianBlur: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e7beBX0MhJNo+dKdS/WNXr", "GaussianBlur");
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
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, executionOrder = _a.executionOrder;
    var GaussianBlur = function(_super) {
      __extends(GaussianBlur, _super);
      function GaussianBlur() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._effect = null;
        _this._radius = 10;
        _this.sprite = null;
        _this.material = null;
        return _this;
      }
      Object.defineProperty(GaussianBlur.prototype, "effect", {
        get: function() {
          return this._effect;
        },
        set: function(value) {
          this._effect = value;
          this.init();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(GaussianBlur.prototype, "radius", {
        get: function() {
          return this._radius;
        },
        set: function(value) {
          this._radius = value > 50 ? 50 : value;
          this.updateProperties();
        },
        enumerable: false,
        configurable: true
      });
      GaussianBlur.prototype.onLoad = function() {
        this.init();
      };
      GaussianBlur.prototype.resetInEditor = function() {
        this.init();
      };
      GaussianBlur.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            if (!this._effect) return [ 2 ];
            this.sprite = this.node.getComponent(cc.Sprite);
            this.sprite.spriteFrame && (this.sprite.spriteFrame.getTexture().packable = false);
            this.material = cc.Material.create(this._effect);
            this.sprite.setMaterial(0, this.material);
            this.updateProperties();
            return [ 2 ];
          });
        });
      };
      GaussianBlur.prototype.updateProperties = function() {
        console.log("\u66f4\u65b0\u6750\u8d28\u8bbe\u7f6e=========");
        this.material.setProperty("size", this.getNodeSize());
        this.material.setProperty("radius", this.radius);
      };
      GaussianBlur.prototype.getNodeSize = function() {
        return cc.v2(this.node.width, this.node.height);
      };
      __decorate([ property ], GaussianBlur.prototype, "_effect", void 0);
      __decorate([ property({
        type: cc.EffectAsset,
        tooltip: false,
        readonly: true
      }) ], GaussianBlur.prototype, "effect", null);
      __decorate([ property ], GaussianBlur.prototype, "_radius", void 0);
      __decorate([ property({
        tooltip: false
      }) ], GaussianBlur.prototype, "radius", null);
      GaussianBlur = __decorate([ ccclass, requireComponent(cc.Sprite), executeInEditMode, disallowMultiple, executionOrder(-100) ], GaussianBlur);
      return GaussianBlur;
    }(cc.Component);
    exports.default = GaussianBlur;
    cc._RF.pop();
  }, {} ],
  TigoManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33e15H+kn5Pta3BiYMebosR", "TigoManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TigoManager = function() {
      function TigoManager() {
        this.token = "";
        this.classId = "";
        this.gameId = "";
        this.userId = "";
        this.propId = null;
        this.moduleId = "";
        this.lessonModuleId = "";
      }
      TigoManager.prototype.setClassId = function(id) {
        this.classId = id;
      };
      TigoManager.prototype.setGameId = function(id) {
        this.gameId = id;
      };
      TigoManager.prototype.setPropId = function(id) {
        this.propId = id;
      };
      TigoManager.prototype.setUserId = function(id) {
        this.userId = id;
      };
      TigoManager.prototype.setModuleId = function(id) {
        this.moduleId = id;
      };
      TigoManager.prototype.setLessonModuleId = function(id) {
        this.lessonModuleId = id;
      };
      TigoManager.prototype.getBaseInfo = function() {
        var handleData = {
          action: "TiGoBaseInfo"
        };
        console.log("getBaseInfo ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var BaseInfo = window.tiGo.callApp(JSON.stringify(handleData));
          console.log(BaseInfo);
          return BaseInfo;
        }
        if (window.webkit) {
          var BaseInfo = window.prompt("callApp", JSON.stringify(handleData));
          console.log("webkit BaseInfo ==== " + BaseInfo);
          return BaseInfo;
        }
      };
      TigoManager.prototype.callAppToClose = function(data, next) {
        void 0 === next && (next = false);
        var handleData = next ? {
          action: "TiGoClose",
          param: {
            closeNext: data
          }
        } : {
          action: "TiGoClose",
          param: {}
        };
        console.log("callAppToClose ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToRecord = function(sec, word) {
        var handleData = {
          action: "TiGoStartRecord",
          param: {
            name: "game1",
            time: sec.toString(),
            standardText: word
          }
        };
        console.log("callAppToRecord ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToStopRecord = function() {
        var handleData = {
          action: "TiGoStopRecord"
        };
        console.log("callAppToStopRecord ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToResult = function(word, path) {
        var handleData = {
          action: "TiGoVoiceEvaluation",
          param: {
            standardText: word,
            path: path
          }
        };
        console.log("callAppToResult ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToStorage = function(params) {
        var value = "";
        switch (params.method) {
         case "PUT":
          value = params.value;
        }
        var handleData = {
          action: "TiGoStorage",
          param: {
            method: params.method,
            key: params.key,
            type: params.type ? params.type : "",
            getAll: params.getAll ? params.getAll : "",
            value: value,
            unique: params.unique ? params.unique : ""
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var page_num = window.tiGo.callApp(JSON.stringify(handleData));
          console.log(page_num);
          return page_num;
        }
        if (window.webkit) {
          var page_num_1;
          if ("file" == params.type) {
            console.log("\u975e\u8f7b\u91cf\u7ea7\u5b58\u50a8 file \b");
            window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
          } else {
            console.log("\u8f7b\u91cf\u7ea7\u5b58\u50a8");
            page_num_1 = window.prompt("callApp", JSON.stringify(handleData));
          }
          console.log(page_num_1);
          return page_num_1;
        }
      };
      TigoManager.prototype.callAppToHttp = function(api, method, params) {
        var handleData = {
          action: "TiGoHttp",
          param: {
            url: api,
            method: method,
            params: params,
            unique: this.classId
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToLoaded = function() {
        var handleData = {
          action: "TiGoLifecycle",
          param: {
            name: "loaded",
            param: ""
          }
        };
        console.log("callAppToLoaded ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callApp = function(handleData) {
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.callAppToCollect = function(gameIndex, type, result) {
        var h = {
          userId: this.userId,
          lessonId: this.classId,
          lessonModelId: this.lessonModuleId,
          gameIndex: gameIndex,
          type: type,
          result: result,
          timestamp: this.getTime()
        };
        var handleData = {
          action: "TiGoHttp",
          param: {
            url: "api/operate/infoV2",
            method: "POST",
            params: h
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
      };
      TigoManager.prototype.getTime = function() {
        var time = Date.now().toString();
        time = time.substr(0, 10);
        return time;
      };
      Object.defineProperty(TigoManager, "instance", {
        get: function() {
          TigoManager._instance || (TigoManager._instance = new TigoManager());
          return TigoManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      TigoManager.prototype.callAppToSpeed = function() {
        var url = "api/course/speed";
        var params = {
          userId: this.userId,
          type: this.moduleId,
          speedVal: 2,
          lessonModelId: this.lessonModuleId
        };
        this.callAppToHttp(url, "POST", params);
      };
      return TigoManager;
    }();
    exports.default = TigoManager;
    cc._RF.pop();
  }, {} ],
  galleryNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de736nOhG5D5JXajqreNSBa", "galleryNode");
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
    var galleryNode = function(_super) {
      __extends(galleryNode, _super);
      function galleryNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.posNode = null;
        return _this;
      }
      galleryNode.prototype.start = function() {};
      __decorate([ property(cc.Node) ], galleryNode.prototype, "posNode", void 0);
      galleryNode = __decorate([ ccclass ], galleryNode);
      return galleryNode;
    }(cc.Component);
    exports.default = galleryNode;
    cc._RF.pop();
  }, {} ],
  galleryitem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d372meuHpDIZtpsckUFjo9", "galleryitem");
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
    var ResLoader_1 = require("../../../../kit/framework/load/ResLoader");
    var paintConfig_1 = require("../paintConfig");
    var paintAssetsManager_1 = require("../paintAssetsManager");
    var tianSeManager_1 = require("../tianSeManager");
    var paintDataManager_1 = require("../paintDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var galleryitem = function(_super) {
      __extends(galleryitem, _super);
      function galleryitem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lock = null;
        _this.light = null;
        _this.mubu = null;
        _this.paint = null;
        _this.itemInfo = {};
        _this.isClick = false;
        return _this;
      }
      galleryitem.prototype.onLoad = function() {};
      galleryitem.prototype.init = function(data) {
        this.itemInfo = data;
        this.isClick = false;
        this.node.getChildByName("num").active = false;
        this.node.getChildByName("num").getComponent(cc.Label).string = data.propId;
        if (data.isSave) {
          var tex = paintAssetsManager_1.paintAssetsManager.instance.getPaintTextureById(data.propId);
          if (tex) {
            console.log("\u7f13\u5b58\u53d6\u5230\u4e86" + data.propId);
            var spr = new cc.SpriteFrame();
            spr.setTexture(tex);
            this.paint.getComponent(cc.Sprite).spriteFrame = spr;
            this.isClick = true;
          } else {
            console.log("\u7f13\u5b58\u6ca1\u53d6\u5230\u4e86", tex);
            this.loadDefaultTexture();
          }
        } else {
          console.log("\u6ca1\u6709\u4fdd\u5b58\u8fc7" + data.propId);
          this.loadDefaultTexture();
        }
        this.light.active = data.isSave;
        this.mubu.active = 1 == data.lockVal;
        this.lock.active = 1 == data.lockVal;
      };
      galleryitem.prototype.clickEvent = function(event, choose) {
        if (1 == this.itemInfo.lockVal || !this.isClick) return;
        tianSeManager_1.tianSeManager.instance.TanseIndex = this.itemInfo.propId;
        tianSeManager_1.tianSeManager.instance.ColorIndex = -1;
        this.loadPropDetail();
      };
      galleryitem.prototype.loadPropDetail = function() {
        return __awaiter(this, void 0, void 0, function() {
          var result;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, paintDataManager_1.default.getSeverPropDetails(this.itemInfo.propId) ];

             case 1:
              result = _a.sent();
              tianSeManager_1.tianSeManager.instance.openPaint(this.itemInfo);
              return [ 2 ];
            }
          });
        });
      };
      galleryitem.prototype.loadDefaultTexture = function() {
        var _this = this;
        var tex_line = paintAssetsManager_1.paintAssetsManager.instance.getPaintLineTextureById(this.itemInfo.propId);
        if (tex_line) {
          var spr = new cc.SpriteFrame();
          spr.setTexture(tex_line);
          this.paint.getComponent(cc.Sprite).spriteFrame = spr;
          this.isClick = true;
        } else ResLoader_1.default.loadRes(this.itemInfo.iconUrl, cc.Texture2D, function(err, res) {
          err && console.log("\u52a0\u8f7d\u5931\u8d25", err);
          console.log("\u52a0\u8f7d\u6210\u529f" + _this.itemInfo.propId);
          var spr = new cc.SpriteFrame();
          spr.setTexture(res);
          _this.paint.getComponent(cc.Sprite).spriteFrame = spr;
          _this.isClick = true;
          paintAssetsManager_1.paintAssetsManager.instance.setPaintLineTextureById(_this.itemInfo.propId, res);
        }, paintConfig_1.BUNDLE_NAME);
      };
      galleryitem.prototype.showUnlock = function() {
        this.node.getChildByName("num").active = true;
        this.node.getChildByName("num").getComponent(cc.Label).string = "\u89e3\u9501\u4e86";
      };
      __decorate([ property(cc.Node) ], galleryitem.prototype, "lock", void 0);
      __decorate([ property(cc.Node) ], galleryitem.prototype, "light", void 0);
      __decorate([ property(cc.Node) ], galleryitem.prototype, "mubu", void 0);
      __decorate([ property(cc.Node) ], galleryitem.prototype, "paint", void 0);
      galleryitem = __decorate([ ccclass ], galleryitem);
      return galleryitem;
    }(cc.Component);
    exports.default = galleryitem;
    cc._RF.pop();
  }, {
    "../../../../kit/framework/load/ResLoader": void 0,
    "../paintAssetsManager": "paintAssetsManager",
    "../paintConfig": "paintConfig",
    "../paintDataManager": "paintDataManager",
    "../tianSeManager": "tianSeManager"
  } ],
  paintAlert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7858WbbtRLObengVBsNrMe", "paintAlert");
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
    var events_1 = require("../../../kit/events/events");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var tianSeManager_1 = require("../src/tianSeManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QuitLessonAlert = function(_super) {
      __extends(QuitLessonAlert, _super);
      function QuitLessonAlert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      QuitLessonAlert.prototype.onLoad = function() {};
      QuitLessonAlert.prototype.init = function(data) {};
      QuitLessonAlert.prototype.onClickClose = function() {
        this.node.active = false;
        EventSystem_1.default.emit(events_1.SET_TOP_BAR_ACTIVE, {
          active: true
        });
        tianSeManager_1.tianSeManager.instance.MainNode.tianseNode.active = false;
        tianSeManager_1.tianSeManager.instance.MainNode.refreshItem();
      };
      QuitLessonAlert.prototype.onClickOk = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], QuitLessonAlert.prototype, "label", void 0);
      QuitLessonAlert = __decorate([ ccclass ], QuitLessonAlert);
      return QuitLessonAlert;
    }(cc.Component);
    exports.default = QuitLessonAlert;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../src/tianSeManager": "tianSeManager"
  } ],
  paintAssetsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e70d9ECa11KLYrgTlESpxT7", "paintAssetsManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.paintAssetsManager = void 0;
    var paintAssetsManager = function() {
      function paintAssetsManager() {
        this.paintTextureMap = new Map();
        this.paintLineTextureMap = new Map();
      }
      paintAssetsManager.prototype.setPaintTextureById = function(id, texture) {
        this.paintTextureMap.set(id, texture);
        console.log("\u6dfb\u52a0\u7f13\u5b58\u4e0b\u6765\u7684\u5df2\u7ecf\u6d82\u8272ID----\x3e", id);
      };
      paintAssetsManager.prototype.getPaintTextureById = function(id) {
        this.paintTextureMap.get(id) && console.log("\u8bfb\u53d6\u7f13\u5b58\u4e0b\u6765\u7684\u5df2\u7ecf\u6d82\u8272ID----\x3e", id);
        return this.paintTextureMap.get(id);
      };
      paintAssetsManager.prototype.setPaintLineTextureById = function(id, texture) {
        this.paintLineTextureMap.set(id, texture);
        console.log("\u6dfb\u52a0\u7f13\u5b58\u4e0b\u6765\u7684\u7ebf\u7a3fID----\x3e", id);
      };
      paintAssetsManager.prototype.getPaintLineTextureById = function(id) {
        this.paintLineTextureMap.get(id) && console.log("\u8bfb\u53d6\u7f13\u5b58\u4e0b\u6765\u7684\u7ebf\u7a3fID----\x3e", id);
        return this.paintLineTextureMap.get(id);
      };
      paintAssetsManager.prototype.getPaintTextureData = function() {
        return this.paintTextureMap;
      };
      Object.defineProperty(paintAssetsManager, "instance", {
        get: function() {
          paintAssetsManager._instance || (paintAssetsManager._instance = new paintAssetsManager());
          return paintAssetsManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      return paintAssetsManager;
    }();
    exports.paintAssetsManager = paintAssetsManager;
    cc._RF.pop();
  }, {} ],
  paintConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "620a7aW6r1OIbGbs7spmsWJ", "paintConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LOCAL_PROP_DETAIL = exports.PAINT_DATA_CONFIG = exports.TEST_SEVER_URL = exports.MESSAGE_IN_GALLERY = exports.SAVE_PAINT_SIGN = exports.BUNDLE_NAME = exports.MUSIC_PATH = exports.SEVER_INTERFACE = exports.Music = exports.GUIDE_STATE = void 0;
    var GUIDE_STATE;
    (function(GUIDE_STATE) {
      GUIDE_STATE["INIT"] = "init";
      GUIDE_STATE["CLICK_HB"] = "clickHb";
      GUIDE_STATE["CLICK_FILL"] = "clickFill";
      GUIDE_STATE["DONE"] = "done";
    })(GUIDE_STATE = exports.GUIDE_STATE || (exports.GUIDE_STATE = {}));
    var Music;
    (function(Music) {
      Music["bgm"] = "BGM_tuse_01";
      Music["clickHb"] = "SE_tuse_01";
      Music["clickFill"] = "SE_tuse_02";
      Music["done"] = "SE_tuse_03";
    })(Music = exports.Music || (exports.Music = {}));
    var SEVER_INTERFACE;
    (function(SEVER_INTERFACE) {
      SEVER_INTERFACE["proplist"] = "proplist";
      SEVER_INTERFACE["prop"] = "prop/";
    })(SEVER_INTERFACE = exports.SEVER_INTERFACE || (exports.SEVER_INTERFACE = {}));
    exports.MUSIC_PATH = "audio/";
    exports.BUNDLE_NAME = "paint";
    exports.SAVE_PAINT_SIGN = "save_paint";
    exports.MESSAGE_IN_GALLERY = "open_gallery";
    exports.TEST_SEVER_URL = "https://ebu-api.lingoace.com/api/game/";
    exports.PAINT_DATA_CONFIG = [ {
      propId: 1e3,
      lockVal: 0,
      isSave: false,
      isPlayUnlockSpine: true,
      iconUrl: "res/ts/paint1",
      native_path: "paint1.png"
    }, {
      propId: 1001,
      lockVal: 0,
      isSave: false,
      isPlayUnlockSpine: true,
      iconUrl: "res/ts/paint2",
      native_path: "paint2.png"
    }, {
      propId: 1002,
      lockVal: 0,
      isSave: false,
      isPlayUnlockSpine: true,
      iconUrl: "res/ts/paint3",
      native_path: "paint3.png"
    }, {
      propId: 1003,
      lockVal: 0,
      isSave: false,
      isPlayUnlockSpine: false,
      iconUrl: "res/ts/paint4",
      native_path: "paint4.png"
    }, {
      propId: 1004,
      lockVal: 0,
      isSave: false,
      isPlayUnlockSpine: false,
      iconUrl: "res/ts/paint5",
      native_path: "paint5.png"
    } ];
    exports.LOCAL_PROP_DETAIL = [ {
      propId: 1e3,
      itemData: [ {
        sort: 0,
        colorName: "fense-yph",
        colorValue: "f2b9b2"
      }, {
        sort: 1,
        colorName: "lanse-yph",
        colorValue: "2775b6"
      }, {
        sort: 2,
        colorName: "huangse-yph",
        colorValue: "f8df72"
      }, {
        sort: 3,
        colorName: "hongse-yph",
        colorValue: "d23e28"
      }, {
        sort: 4,
        colorName: "chengse-yph",
        colorValue: "f97d1c"
      }, {
        sort: 5,
        colorName: "baise-yph",
        colorValue: "ffffff"
      } ]
    }, {
      propId: 1001,
      itemData: [ {
        sort: 0,
        colorName: "huangse-yph",
        colorValue: "eeee4a"
      }, {
        sort: 1,
        colorName: "lvse-yph",
        colorValue: "83cbac"
      }, {
        sort: 2,
        colorName: "fense-yph",
        colorValue: "f2b9b2"
      }, {
        sort: 3,
        colorName: "hongse-yph",
        colorValue: "f17666"
      }, {
        sort: 4,
        colorName: "zise-yph",
        colorValue: "c8adc4"
      }, {
        sort: 5,
        colorName: "baise-yph",
        colorValue: "ffffff"
      } ]
    }, {
      propId: 1002,
      itemData: [ {
        sort: 0,
        colorName: "hongse-yph",
        colorValue: "f17666"
      }, {
        sort: 1,
        colorName: "qianlanse-yph",
        colorValue: "7edde4"
      }, {
        sort: 2,
        colorName: "shenlanse-yph",
        colorValue: "144a74"
      }, {
        sort: 3,
        colorName: "fense-yph",
        colorValue: "fee1e5"
      }, {
        sort: 4,
        colorName: "huangse-yph",
        colorValue: "fecc11"
      }, {
        sort: 5,
        colorName: "baise-yph",
        colorValue: "ffffff"
      } ]
    }, {
      propId: 1003,
      itemData: [ {
        sort: 0,
        colorName: "hongse-yph",
        colorValue: "d23e28"
      }, {
        sort: 1,
        colorName: "lvse-yph",
        colorValue: "20a162"
      }, {
        sort: 2,
        colorName: "zongse-yph",
        colorValue: "A5725F"
      }, {
        sort: 3,
        colorName: "huangse-yph",
        colorValue: "FCE59B"
      }, {
        sort: 4,
        colorName: "heise-yph",
        colorValue: "422A1A"
      }, {
        sort: 5,
        colorName: "baise-yph",
        colorValue: "ffffff"
      } ]
    }, {
      propId: 1004,
      itemData: [ {
        sort: 0,
        colorName: "fense-yph",
        colorValue: "ef82a0"
      }, {
        sort: 1,
        colorName: "hongse-yph",
        colorValue: "ed3321"
      }, {
        sort: 2,
        colorName: "huangse-yph",
        colorValue: "eeee4a"
      }, {
        sort: 3,
        colorName: "zise-yph",
        colorValue: "806d9e"
      }, {
        sort: 4,
        colorName: "zongse-yph",
        colorValue: "945833"
      }, {
        sort: 5,
        colorName: "baise-yph",
        colorValue: "ffffff"
      } ]
    } ];
    cc._RF.pop();
  }, {} ],
  paintDataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d51d3Dli91I6Jl/amC7lcao", "paintDataManager");
    "use strict";
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
    var ResLoader_1 = require("../../../kit/framework/load/ResLoader");
    var HttpSystem_1 = require("../../../kit/system/net/http/HttpSystem");
    var LocalStorageUtils_1 = require("../../../kit/utils/LocalStorageUtils");
    var paintAssetsManager_1 = require("./paintAssetsManager");
    var paintConfig_1 = require("./paintConfig");
    var TigoManager_1 = require("./TigoManager");
    var PAINT_ITEM_LIST_SAVE_KEY = "PAINT_ITEM_LIST_SAVE_KEY";
    var paintDataManager = function() {
      function paintDataManager() {
        this.open_gallery = null;
        this.playUnlockSpineData = [];
        this.paintPropDetailMap = new Map();
        this.cur_Platform = "";
        this.paintItemList = [];
      }
      paintDataManager.prototype.init = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            this.cur_Platform = this.getPlatform();
            this.open_gallery = this.getSeverOpenGalleryState();
            HttpSystem_1.default.instance.init(function(status, err, response) {
              console.log(" PAINT response", response);
              if (10009 == response.code) {
                var extrdata = {};
                extrdata["target"] = "login";
                extrdata["isFinish"] = true;
                extrdata["gameId"] = "";
                extrdata["propId"] = "";
                extrdata["downloadUrl"] = "";
                TigoManager_1.default.instance.callApp({
                  action: "TiGoNativePage",
                  param: extrdata
                });
              }
            });
            return [ 2, new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    return [ 4, this.loadPropList() ];

                   case 1:
                    _a.sent();
                    return [ 4, this.loadPropLineTexture() ];

                   case 2:
                    _a.sent();
                    return [ 4, this.loadFirstPropDetail() ];

                   case 3:
                    _a.sent();
                    resolve(null);
                    return [ 2 ];
                  }
                });
              });
            }).catch(function(e) {
              cc.error(e);
            }) ];
          });
        });
      };
      paintDataManager.prototype.getPlatform = function() {
        if (cc.sys.isNative || false) return "cn";
        if (!cc.sys.isNative || false) return "en";
      };
      paintDataManager.prototype.loadPropList = function() {
        var _this = this;
        var saveListConfig = {};
        var paintItemListConfig = [];
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var params, sever_obj, params1, data, len, i, element;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (!("en" == this.cur_Platform)) return [ 3, 2 ];
                params = {
                  userId: TigoManager_1.default.instance.userId,
                  gameId: TigoManager_1.default.instance.gameId
                };
                return [ 4, this.getSeverPaintData(params) ];

               case 1:
                sever_obj = _a.sent();
                console.log("\u670d\u52a1\u7aef\u8fd4\u56de\u9053\u5177\u5217\u8868=====", sever_obj);
                sever_obj && (paintItemListConfig = sever_obj.data || []);
                params1 = {
                  method: "GET",
                  key: PAINT_ITEM_LIST_SAVE_KEY
                };
                data = TigoManager_1.default.instance.callAppToStorage(params1);
                data && (saveListConfig = JSON.parse(data));
                console.log("\u539f\u751f\u7aef\u50a8\u5b58\u72b6\u6001 saveListConfig=====", saveListConfig);
                return [ 3, 4 ];

               case 2:
                return [ 4, this.getLocalPaintData() ];

               case 3:
                paintItemListConfig = _a.sent();
                saveListConfig = LocalStorageUtils_1.LocalStorageUtils.getObject(PAINT_ITEM_LIST_SAVE_KEY) || {};
                _a.label = 4;

               case 4:
                len = paintItemListConfig.length;
                for (i = 0; i < len; i++) {
                  element = paintItemListConfig[i];
                  if (saveListConfig[i] && saveListConfig[i].isSave) {
                    element.isSave = saveListConfig[i].isSave;
                    element.lockVal = saveListConfig[i].lockVal;
                    element.isPlayUnlockSpine = saveListConfig[i].isPlayUnlockSpine;
                  }
                  this.paintItemList[i] = element;
                }
                resolve(null);
                console.log("===\u9053\u5177\u5217\u8868===", this.paintItemList);
                return [ 2 ];
              }
            });
          });
        }).catch(function(e) {
          cc.error(e);
        });
      };
      paintDataManager.prototype.loadPropLineTexture = function() {
        var unlockData = this.getUnlockPaintList();
        var preload = unlockData.slice(5);
        var loadData = unlockData.slice(0, 5);
        preload.map(function(element, i) {
          ResLoader_1.default.loadRes(element.iconUrl, cc.Texture2D, function(err, res) {
            console.log("\u540e\u53f0\u52a0\u8f7d\u7684\u9053\u5177id===========\u300b" + element.propId);
            paintAssetsManager_1.paintAssetsManager.instance.setPaintLineTextureById(element.propId, res);
          }, paintConfig_1.BUNDLE_NAME);
        });
        return Promise.all(loadData.map(function(element, i) {
          return new Promise(function(resolve, reject) {
            ResLoader_1.default.loadRes(element.iconUrl, cc.Texture2D, function(err, res) {
              console.log("\u9884\u5148\u52a0\u8f7d\u7684\u9053\u5177id===========\u300b" + element.propId);
              paintAssetsManager_1.paintAssetsManager.instance.setPaintLineTextureById(element.propId, res);
              resolve();
            }, paintConfig_1.BUNDLE_NAME);
          }).catch(function(e) {
            cc.error(e);
          });
        }));
      };
      paintDataManager.prototype.loadFirstPropDetail = function() {
        var propId = 0;
        var unlockData = this.getUnlockPaintList();
        unlockData[0] && (propId = unlockData[0].propId || 0);
        console.log("\u9996\u4e2a\u9053\u5177ID" + propId);
        return this.getSeverPropDetails(propId);
      };
      paintDataManager.prototype.getSeverPaintData = function(params) {
        var url = paintConfig_1.TEST_SEVER_URL + paintConfig_1.SEVER_INTERFACE.proplist;
        return HttpSystem_1.default.instance.httpPost(url, params, null, '{"Authorization": "Bearer ' + TigoManager_1.default.instance.token + '"}');
      };
      paintDataManager.prototype.getLocalPaintData = function() {
        return new Promise(function(res, rej) {
          res(paintConfig_1.PAINT_DATA_CONFIG);
        });
      };
      paintDataManager.prototype.getSeverOpenGalleryState = function() {
        if ("en" == this.cur_Platform) {
          var params = {
            method: "GET",
            key: paintConfig_1.SAVE_PAINT_SIGN
          };
          var able = TigoManager_1.default.instance.callAppToStorage(params);
          console.log("\u662f\u5426\u5f00\u542f\u4e86\u753b\u5eca", able);
          return able || false;
        }
        return LocalStorageUtils_1.LocalStorageUtils.getBool(paintConfig_1.SAVE_PAINT_SIGN);
      };
      paintDataManager.prototype.getOpenGalleryState = function() {
        return this.open_gallery;
      };
      paintDataManager.prototype.setPaintPropDetailById = function(id, data) {
        this.paintPropDetailMap.set(id, data);
        console.log("\u6dfb\u52a0\u7f13\u5b58\u4e0b\u6765\u7684\u9053\u5177\u8be6\u60c5ID----\x3e", id);
      };
      paintDataManager.prototype.getPaintPropDetailById = function(id) {
        console.log("\u8bfb\u53d6\u5230\u4e86\u9053\u5177\u8be6\u60c5\u7f13\u5b58ID==" + id);
        console.log("\u8bfb\u53d6\u5230\u4e86\u9053\u5177\u8be6\u60c5", this.paintPropDetailMap.get(id));
        return this.paintPropDetailMap.get(id);
      };
      paintDataManager.prototype.getSeverPropDetails = function(id) {
        var _this = this;
        var data = this.getPaintPropDetailById(id);
        if (data) {
          console.log("\u8be5\u9053\u5177\u8be6\u60c5\u5df2\u7ecf\u7f13\u5b58 \u53ef\u76f4\u63a5\u8bfb\u53d6");
          return Promise.resolve(null);
        }
        return new Promise(function(resolve, reject) {
          if ("en" == _this.cur_Platform) {
            var url = paintConfig_1.TEST_SEVER_URL + paintConfig_1.SEVER_INTERFACE.prop + id;
            HttpSystem_1.default.instance.httpGet(url, null, '{"Authorization": "Bearer ' + TigoManager_1.default.instance.token + '"}').then(function(res) {
              if (res.data) {
                console.log("\u670d\u52a1\u5668\u8fd4\u56de\u7684\u753b\u7b14\u6570\u636e", res);
                var data_1 = JSON.parse(res.data.expandDes);
                console.log("\u670d\u52a1\u5668\u8fd4\u56de\u7684\u753b\u7b14data", data_1);
                _this.setPaintPropDetailById(id, data_1);
              } else {
                console.log("\u6ca1\u52a0\u8f7d\u5230 ========================== \u8bfb\u53d6\u9ed8\u8ba4\u989c\u8272\u914d\u7f6e");
                _this.setPaintPropDetailById(id, paintConfig_1.LOCAL_PROP_DETAIL[0]);
              }
              resolve(res);
            });
          } else {
            var resultData = void 0;
            var tempData = paintConfig_1.LOCAL_PROP_DETAIL.find(function(item) {
              return item.propId == id;
            });
            resultData = tempData || paintConfig_1.LOCAL_PROP_DETAIL[0];
            _this.setPaintPropDetailById(id, resultData);
            resolve(resultData);
          }
        }).catch(function(e) {
          cc.error(e);
        });
      };
      paintDataManager.prototype.getUnlockPaintList = function() {
        var data = this.paintItemList.filter(function(item) {
          return 0 == item.lockVal;
        });
        return data;
      };
      paintDataManager.prototype.getSavePaintData = function() {
        var data = this.paintItemList.filter(function(item) {
          return true == item.isSave;
        });
        return data;
      };
      paintDataManager.prototype.getPaintListData = function() {
        return this.paintItemList;
      };
      paintDataManager.prototype.getNativePathByIndex = function(propId) {
        return propId + "paint.png";
      };
      paintDataManager.prototype.getPaintDataById = function(id) {
        return this.paintItemList.find(function(ele) {
          return ele.propId == id;
        });
      };
      paintDataManager.prototype.setPaintItemUnlockById = function(id) {
        var paintData = this.paintItemList.find(function(ele) {
          return ele.propId == id;
        });
        paintData.isSave = true;
        console.log("\u6539\u53d8\u7ebf\u7a3f\u4e3a\u4fdd\u5b58\u72b6\u6001----\x3e" + id, " -----------\x3e");
        this.save();
      };
      paintDataManager.prototype.setENPaintItemUnlockById = function(id) {
        var paintData = this.paintItemList.find(function(ele) {
          return ele.propId == id;
        });
        paintData.lockVal = 0;
        console.log("\u6539\u53d8\u9053\u5177\u4e3a\u89e3\u9501\u72b6\u6001----\x3e" + id, " -----------\x3e");
        this.save();
      };
      paintDataManager.prototype.setENPaintItemPlayUnlockSpineById = function(id) {
        var paintData = this.paintItemList.find(function(ele) {
          return ele.propId == id;
        });
        paintData.isPlayUnlockSpine = true;
        console.log("\u6539\u53d8\u9053\u5177\u4e3a\u5df2\u64ad\u653e\u89e3\u9501\u52a8\u753b\u72b6\u6001----\x3e" + id, " -----------\x3e");
        this.save();
      };
      paintDataManager.prototype.save = function() {
        var obj = {};
        this.paintItemList.forEach(function(val, index) {
          var key = index;
          obj[key] = {};
          obj[key]["isSave"] = val.isSave;
          obj[key]["lockVal"] = val.lockVal;
          obj[key]["isPlayUnlockSpine"] = val.isPlayUnlockSpine;
        });
        if ("en" == this.cur_Platform) {
          var params = {
            method: "PUT",
            key: PAINT_ITEM_LIST_SAVE_KEY,
            value: JSON.stringify(obj)
          };
          console.log("\u4fdd\u5b58\u5217\u8868\u6bcf\u4e2a\u9053\u5177\u72b6\u6001===============\u300b" + obj);
          TigoManager_1.default.instance.callAppToStorage(params);
        } else LocalStorageUtils_1.LocalStorageUtils.setObject(PAINT_ITEM_LIST_SAVE_KEY, obj);
      };
      paintDataManager.prototype.getUnlockSpineData = function() {
        var unLockPropData = {
          1: {
            propId: 1e3
          }
        };
        for (var key in unLockPropData) {
          var element = unLockPropData[key];
          var propData = this.getPaintDataById(element.propId);
          if (propData && !propData.isPlayUnlockSpine) {
            this.setENPaintItemUnlockById(element.propId);
            this.playUnlockSpineData.push(element);
            this.playUnlockSpineData.sort(function(item1, item2) {
              return item1.propId - item2.propId;
            });
          }
        }
      };
      Object.defineProperty(paintDataManager, "instance", {
        get: function() {
          paintDataManager._instance || (paintDataManager._instance = new paintDataManager());
          return paintDataManager._instance;
        },
        enumerable: false,
        configurable: true
      });
      return paintDataManager;
    }();
    exports.default = paintDataManager.instance;
    cc._RF.pop();
  }, {
    "../../../kit/framework/load/ResLoader": void 0,
    "../../../kit/system/net/http/HttpSystem": void 0,
    "../../../kit/utils/LocalStorageUtils": void 0,
    "./TigoManager": "TigoManager",
    "./paintAssetsManager": "paintAssetsManager",
    "./paintConfig": "paintConfig"
  } ],
  paintInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e09atmU0JCo5rGMbQEDc4d", "paintInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  paintMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "048f428ivlEjaT0QZAYOfOY", "paintMain");
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
    var events_1 = require("../../../../kit/events/events");
    var EventSystem_1 = require("../../../../kit/system/event/EventSystem");
    var tianSeManager_1 = require("../tianSeManager");
    var Gallery_1 = require("./Gallery");
    var tianSeNodeInGallery_1 = require("./tianSeNodeInGallery");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var paintMain = function(_super) {
      __extends(paintMain, _super);
      function paintMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.galleryPre = null;
        _this.tiansePre = null;
        _this.quitAlertPre = null;
        _this.quitAlertNode = null;
        _this.galleryNode = null;
        _this.tianseNode = null;
        return _this;
      }
      paintMain.prototype.onLoad = function() {
        tianSeManager_1.tianSeManager.instance.init(this);
        this.galleryNode = cc.instantiate(this.galleryPre);
        this.node.addChild(this.galleryNode);
        this.galleryNode.active = true;
      };
      paintMain.prototype.start = function() {
        this.quitAlertNode = cc.instantiate(this.quitAlertPre);
        this.node.addChild(this.quitAlertNode);
        this.quitAlertNode.active = false;
        this.quitAlertNode.zIndex = cc.macro.MAX_ZINDEX;
      };
      paintMain.prototype.openPaint = function(data) {
        EventSystem_1.default.emit(events_1.SET_TOP_BAR_ACTIVE, {
          active: false
        });
        tianSeManager_1.tianSeManager.instance.m_pOwner.setBackVisit(false);
        if (!this.tianseNode) {
          this.tianseNode = cc.instantiate(this.tiansePre);
          this.node.addChild(this.tianseNode);
        }
        this.tianseNode.active = true;
        this.tianseNode.getComponent(tianSeNodeInGallery_1.default).initPaint(data);
      };
      paintMain.prototype.closePaint = function() {
        this.refreshItem();
        this.tianseNode.active = false;
        tianSeManager_1.tianSeManager.instance.m_pOwner.setBackVisit(true);
        EventSystem_1.default.emit(events_1.SET_TOP_BAR_ACTIVE, {
          active: true
        });
      };
      paintMain.prototype.refreshItem = function() {
        this.galleryNode.getComponent(Gallery_1.default).refreshItem();
      };
      paintMain.prototype.showQuitAlertPre = function() {
        this.quitAlertNode.active = true;
      };
      __decorate([ property(cc.Node) ], paintMain.prototype, "contentNode", void 0);
      __decorate([ property(cc.Prefab) ], paintMain.prototype, "galleryPre", void 0);
      __decorate([ property(cc.Prefab) ], paintMain.prototype, "tiansePre", void 0);
      __decorate([ property(cc.Prefab) ], paintMain.prototype, "quitAlertPre", void 0);
      paintMain = __decorate([ ccclass ], paintMain);
      return paintMain;
    }(cc.Component);
    exports.default = paintMain;
    cc._RF.pop();
  }, {
    "../../../../kit/events/events": void 0,
    "../../../../kit/system/event/EventSystem": void 0,
    "../tianSeManager": "tianSeManager",
    "./Gallery": "Gallery",
    "./tianSeNodeInGallery": "tianSeNodeInGallery"
  } ],
  paintTopBar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab6c8UQemRH2LNqyjQFw29j", "paintTopBar");
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
    var events_1 = require("../../../kit/events/events");
    var EventSystem_1 = require("../../../kit/system/event/EventSystem");
    var tianSeManager_1 = require("../src/tianSeManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TopBar = function(_super) {
      __extends(TopBar, _super);
      function TopBar() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TopBar.prototype.onBack = function() {
        if (cc.sys.isNative) {
          EventSystem_1.default.emit(events_1.SET_TOP_BAR_ACTIVE, {
            active: true
          });
          tianSeManager_1.tianSeManager.instance.MainNode.tianseNode.active = false;
        } else {
          tianSeManager_1.tianSeManager.instance.m_pOwner.setBackVisit(true);
          tianSeManager_1.tianSeManager.instance.MainNode.tianseNode.active = false;
        }
      };
      TopBar.prototype.onNext = function() {};
      TopBar = __decorate([ ccclass ], TopBar);
      return TopBar;
    }(cc.Component);
    exports.default = TopBar;
    cc._RF.pop();
  }, {
    "../../../kit/events/events": void 0,
    "../../../kit/system/event/EventSystem": void 0,
    "../src/tianSeManager": "tianSeManager"
  } ],
  paint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b259wqiEFA/oB5ZfxGqy+O", "paint");
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
    var events_1 = require("../../kit/events/events");
    var ResLoader_1 = require("../../kit/framework/load/ResLoader");
    var AudioManager_1 = require("../../kit/system/audio/AudioManager");
    var EventSystem_1 = require("../../kit/system/event/EventSystem");
    var paintConfig_1 = require("./src/paintConfig");
    var paintDataManager_1 = require("./src/paintDataManager");
    var tianSeManager_1 = require("./src/tianSeManager");
    var TigoManager_1 = require("./src/TigoManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var paint = function(_super) {
      __extends(paint, _super);
      function paint() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.btnBack = null;
        _this.firstPaintGame = null;
        _this.paintGroup = null;
        _this.paintGroupNode = null;
        _this.loadingNode = null;
        _this.firstPaintGameNode = null;
        return _this;
      }
      paint.prototype.start = function() {
        this.setBackVisit(true);
      };
      paint.prototype.onLoad = function() {
        var userData = TigoManager_1.default.instance.getBaseInfo();
        if (userData) {
          var ud = JSON.parse(userData);
          TigoManager_1.default.instance.token = ud.token;
          TigoManager_1.default.instance.setUserId(ud.userId);
          TigoManager_1.default.instance.setGameId(ud.gameId);
          TigoManager_1.default.instance.setPropId(ud.propId);
          tianSeManager_1.tianSeManager.instance.setPropId(ud.propId);
          TigoManager_1.default.instance.setClassId(ud.lessonId);
          TigoManager_1.default.instance.setModuleId(ud.moduleId);
          TigoManager_1.default.instance.setLessonModuleId(ud.lessonModuleId);
          console.log("gameId == " + TigoManager_1.default.instance.classId + "  userId == " + TigoManager_1.default.instance.userId);
        }
        tianSeManager_1.tianSeManager.instance.setOwner(this);
        this.regisEvent();
        this.initPaintData();
      };
      paint.prototype.initPaintData = function() {
        var _this = this;
        paintDataManager_1.default.init().then(function() {
          ResLoader_1.default.loadRes("prefab/loaDing", cc.Prefab, function(err, res) {
            _this.loadingNode = cc.instantiate(res);
            _this.loadingNode.active = false;
            _this.node.getChildByName("uiNode").addChild(_this.loadingNode);
            var unLockData = paintDataManager_1.default.getUnlockPaintList();
            0 == unLockData.length && console.log("\u60a8\u5c1a\u672a\u83b7\u5f97\u4efb\u4f55\u514d\u8d39\u9053\u5177");
            if (!cc.sys.isNative) {
              var splash = document.getElementById("splash");
              splash.style.display = "none";
            }
            _this.initUI();
          }, paintConfig_1.BUNDLE_NAME);
        }, function() {
          _this.initUI();
        });
      };
      paint.prototype.openPaint = function() {
        this.firstPaintGameNode = cc.instantiate(this.firstPaintGame);
        this.content.addChild(this.firstPaintGameNode);
      };
      paint.prototype.setShowLoading = function(able) {
        this.loadingNode.active = able;
      };
      paint.prototype.openPaintGroup = function() {
        cc.isValid(this.firstPaintGameNode) && this.firstPaintGameNode.destroy();
        this.paintGroupNode = cc.instantiate(this.paintGroup);
        this.content.addChild(this.paintGroupNode);
      };
      paint.prototype.initUI = function() {
        var openGallery = paintDataManager_1.default.getOpenGalleryState();
        openGallery ? this.openPaintGroup() : this.openPaint();
        console.log("\u662f\u5426\u8fdb\u5165\u753b\u5eca---\x3e", openGallery);
        AudioManager_1.default.playMusic(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + paintConfig_1.Music.bgm);
      };
      paint.prototype.setBackVisit = function(able) {
        cc.sys.isNative ? this.btnBack.active = false : this.btnBack.active = able;
      };
      paint.prototype.Back = function(event, choose) {
        console.log("\u8fd4\u56de\u539f\u751f========\u300b");
        event.target.active = false;
        AudioManager_1.default.stopEffect();
        AudioManager_1.default.stopMusic();
        cc.audioEngine.pauseMusic();
        cc.audioEngine.pauseAllEffects();
        cc.game.pause();
        TigoManager_1.default.instance.callAppToClose("replayOrNext", true);
      };
      paint.prototype.regisEvent = function() {
        EventSystem_1.default.on(paintConfig_1.MESSAGE_IN_GALLERY, this.openPaintGroup, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_PARAMS, this.setPropId, this);
      };
      paint.prototype.setPropId = function(_data) {
        var data = _data.data;
        console.log("\u7ed9\u5b50\u6e38\u620f\u4f20\u53c2\u6570\u4e86========>", _data);
        tianSeManager_1.tianSeManager.instance.setPropId(data.propId);
      };
      paint.prototype.onDestroy = function() {
        EventSystem_1.default.off(paintConfig_1.MESSAGE_IN_GALLERY, this.openPaintGroup, this);
        EventSystem_1.default.off(events_1.LIFE_CYCLE_PARAMS, this.setPropId, this);
      };
      __decorate([ property(cc.Node) ], paint.prototype, "content", void 0);
      __decorate([ property(cc.Node) ], paint.prototype, "btnBack", void 0);
      __decorate([ property(cc.Prefab) ], paint.prototype, "firstPaintGame", void 0);
      __decorate([ property(cc.Prefab) ], paint.prototype, "paintGroup", void 0);
      paint = __decorate([ ccclass ], paint);
      return paint;
    }(cc.Component);
    exports.default = paint;
    cc._RF.pop();
  }, {
    "../../kit/events/events": void 0,
    "../../kit/framework/load/ResLoader": void 0,
    "../../kit/system/audio/AudioManager": void 0,
    "../../kit/system/event/EventSystem": void 0,
    "./src/TigoManager": "TigoManager",
    "./src/paintConfig": "paintConfig",
    "./src/paintDataManager": "paintDataManager",
    "./src/tianSeManager": "tianSeManager"
  } ],
  pen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f86fcM2TflBIZoB3rL3g9kQ", "pen");
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
    var paintConfig_1 = require("./paintConfig");
    var tianSeManager_1 = require("./tianSeManager");
    var AudioManager_1 = require("../../../kit/system/audio/AudioManager");
    var paintDataManager_1 = require("./paintDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var pen = function(_super) {
      __extends(pen, _super);
      function pen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.penList = [];
        _this.basicX = 80;
        _this.color_config = null;
        return _this;
      }
      pen.prototype.onEnable = function() {};
      pen.prototype.refreshColorNode = function() {
        var len = this.penList.length;
        var tanse_index = tianSeManager_1.tianSeManager.instance.TanseIndex;
        var color_index = tianSeManager_1.tianSeManager.instance.ColorIndex;
        console.log("tanse_index =================================================>" + tanse_index);
        console.log("ColorIndex =================================================>" + color_index);
        var data = paintDataManager_1.default.getPaintPropDetailById(tanse_index);
        this.color_config = data.itemData;
        if (!this.color_config) {
          console.log("pen ====> \u8bfb\u53d6\u9ed8\u8ba4\u989c\u8272\u914d\u7f6e");
          this.color_config = paintConfig_1.LOCAL_PROP_DETAIL[0].itemData;
        }
        console.log("this.color_config =================================================>", this.color_config);
        for (var i = 0; i < len; i++) {
          var able = i == color_index;
          var node = this.penList[i];
          var floor = node.getChildByName("floor");
          var select = node.getChildByName("select");
          var unselect = node.getChildByName("unselect");
          var _color = this.color_config[i].colorValue;
          floor.color = new cc.Color().fromHEX("#" + _color);
          select.active = able;
          unselect.active = !able;
          node.x = true == able ? 37 : this.basicX;
          able && (tianSeManager_1.tianSeManager.instance.CurColor = floor.color);
        }
      };
      pen.prototype.clickEventBack = function(event, choose) {
        if (choose == tianSeManager_1.tianSeManager.instance.ColorIndex) return;
        tianSeManager_1.tianSeManager.instance.ColorIndex = Number(choose);
        this.refreshColorNode();
        if (tianSeManager_1.tianSeManager.instance.guideState == paintConfig_1.GUIDE_STATE.INIT) {
          tianSeManager_1.tianSeManager.instance.guideState = paintConfig_1.GUIDE_STATE.CLICK_HB;
          tianSeManager_1.tianSeManager.instance.setGuide();
        }
        var effect = this.color_config[choose].colorName;
        AudioManager_1.default.playEffect(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + effect);
      };
      __decorate([ property(cc.Node) ], pen.prototype, "penList", void 0);
      pen = __decorate([ ccclass ], pen);
      return pen;
    }(cc.Component);
    exports.default = pen;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0,
    "./paintConfig": "paintConfig",
    "./paintDataManager": "paintDataManager",
    "./tianSeManager": "tianSeManager"
  } ],
  showPaint: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81b03MOTrJGgYTzdK3DkdJU", "showPaint");
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
    var EventSystem_1 = require("../../../../kit/system/event/EventSystem");
    var paintAssetsManager_1 = require("../paintAssetsManager");
    var paintConfig_1 = require("../paintConfig");
    var tianSeManager_1 = require("../tianSeManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scaleNode = null;
        _this.guideNode = null;
        _this.showNode = null;
        _this.isTouch = false;
        _this.left_pos = cc.v3(0, 0);
        _this.right_pos = cc.v3(0, 0);
        _this.left_light = null;
        _this.right_light = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.recordLightPos();
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
      };
      NewClass.prototype.onEnable = function() {
        var _this = this;
        this.scaleNode.scale = 1.5;
        this.guideNode.active = false;
        this.showNode.active = false;
        this.scheduleOnce(function() {
          _this.guideNode.active = true;
        }, 4);
      };
      NewClass.prototype.recordLightPos = function() {
        this.left_light = this.node.getChildByName("left_light");
        this.right_light = this.node.getChildByName("right_light");
        this.left_pos = this.left_light.position;
        this.right_pos = this.right_light.position;
      };
      NewClass.prototype.setScaleNode = function() {
        var _this = this;
        var left_node = this.node.getChildByName("left_node");
        var right_node = this.node.getChildByName("right_node");
        this.left_light.position = this.left_pos;
        this.right_light.position = this.right_pos;
        cc.tween(this.left_light).to(1.5, {
          position: left_node.position
        }).start();
        cc.tween(this.right_light).to(1.5, {
          position: right_node.position
        }).start();
        cc.tween(this.scaleNode).to(1.5, {
          scale: 1
        }).call(function() {
          return _this.isTouch = true;
        }).start();
      };
      NewClass.prototype.touchStart = function() {
        if (this.isTouch) {
          this.unscheduleAllCallbacks();
          this.guideNode.active = false;
          this.isTouch = false;
          this.node.active = false;
          tianSeManager_1.tianSeManager.instance.curIsGallery ? tianSeManager_1.tianSeManager.instance.closePaint() : tianSeManager_1.tianSeManager.instance.unLockCount >= tianSeManager_1.tianSeManager.instance.max_tanse_index && EventSystem_1.default.emit(paintConfig_1.MESSAGE_IN_GALLERY);
        }
      };
      NewClass.prototype.setShowImage = function(tanIndex) {
        var _this = this;
        this.scheduleOnce(function() {
          var _tex = null;
          var tex = paintAssetsManager_1.paintAssetsManager.instance.getPaintTextureById(tanIndex);
          var tex_line = paintAssetsManager_1.paintAssetsManager.instance.getPaintLineTextureById(tanIndex);
          if (tex) {
            console.log("\u53d6\u5230\u4e86\u5df2\u7ecf\u6d82\u8fc7\u7f13\u5b58 ======");
            _tex = tex;
          } else {
            console.log("\u53d6\u5230\u4e86\u7ebf\u7a3f\u7f13\u5b58 ======");
            _tex = tex_line;
          }
          var spr = new cc.SpriteFrame();
          _this.showNode.active = true;
          spr.setTexture(_tex);
          _this.showNode.getComponent(cc.Sprite).spriteFrame = spr;
          _this.setScaleNode();
        });
      };
      NewClass.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "scaleNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "guideNode", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "showNode", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../kit/system/event/EventSystem": void 0,
    "../paintAssetsManager": "paintAssetsManager",
    "../paintConfig": "paintConfig",
    "../tianSeManager": "tianSeManager"
  } ],
  tanseMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bcd4t0tDNDUbPT36L9ieiu", "tanseMain");
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
    var tianSeNode_1 = require("./tianSeNode");
    var paintConfig_1 = require("../paintConfig");
    var tianSeManager_1 = require("../tianSeManager");
    var paintDataManager_1 = require("../paintDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tanseMain = function(_super) {
      __extends(tanseMain, _super);
      function tanseMain() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.penPre = null;
        _this.guidePre = null;
        _this.tansePre = null;
        _this.showPaintPre = null;
        _this.isGuide = true;
        _this.penNode = null;
        _this.guideNode = null;
        _this.tanseNode = null;
        return _this;
      }
      tanseMain.prototype.onLoad = function() {
        tianSeManager_1.tianSeManager.instance.init(this, true, true);
        this.loadPropDetail();
      };
      tanseMain.prototype.loadPropDetail = function() {
        var _this = this;
        paintDataManager_1.default.getSeverPropDetails(tianSeManager_1.tianSeManager.instance.TanseIndex).then(function() {
          _this.tanseNode = cc.instantiate(_this.tansePre);
          _this.node.addChild(_this.tanseNode);
          _this.guideNode = cc.instantiate(_this.guidePre);
          _this.node.addChild(_this.guideNode);
          _this.guideNode.active = false;
          _this.setGuide();
        });
      };
      tanseMain.prototype.start = function() {};
      tanseMain.prototype.nextPaint = function() {
        this.loadCurPropDetail();
      };
      tanseMain.prototype.loadCurPropDetail = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            paintDataManager_1.default.getSeverPropDetails(tianSeManager_1.tianSeManager.instance.TanseIndex).then(function() {
              _this.tanseNode.getComponent(tianSeNode_1.default).initPaint();
            });
            return [ 2 ];
          });
        });
      };
      tanseMain.prototype.setGuide = function() {
        var _this = this;
        this.guideNode.active = false;
        this.unscheduleAllCallbacks();
        if (!this.isGuide || tianSeManager_1.tianSeManager.instance.guideState == paintConfig_1.GUIDE_STATE.DONE) return;
        switch (tianSeManager_1.tianSeManager.instance.guideState) {
         case paintConfig_1.GUIDE_STATE.INIT:
          this.scheduleOnce(function() {
            _this.guideNode.active = true;
            _this.guideNode.x = _this.tanseNode.getChildByName("penNode").x + 100;
          }, 2);
          break;

         case paintConfig_1.GUIDE_STATE.CLICK_HB:
          this.scheduleOnce(function() {
            _this.guideNode.active = true;
            _this.guideNode.x = _this.tanseNode.x - 100;
          }, 2);
          break;

         case paintConfig_1.GUIDE_STATE.CLICK_FILL:
          tianSeManager_1.tianSeManager.instance.guideState = paintConfig_1.GUIDE_STATE.DONE;
          this.tanseNode.getChildByName("done").active = true;
          break;

         case paintConfig_1.GUIDE_STATE.DONE:
          this.tanseNode.getChildByName("done").active = false;
        }
      };
      __decorate([ property(cc.Prefab) ], tanseMain.prototype, "penPre", void 0);
      __decorate([ property(cc.Prefab) ], tanseMain.prototype, "guidePre", void 0);
      __decorate([ property(cc.Prefab) ], tanseMain.prototype, "tansePre", void 0);
      __decorate([ property(cc.Prefab) ], tanseMain.prototype, "showPaintPre", void 0);
      tanseMain = __decorate([ ccclass ], tanseMain);
      return tanseMain;
    }(cc.Component);
    exports.default = tanseMain;
    cc._RF.pop();
  }, {
    "../paintConfig": "paintConfig",
    "../paintDataManager": "paintDataManager",
    "../tianSeManager": "tianSeManager",
    "./tianSeNode": "tianSeNode"
  } ],
  tianSeManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4db9fhi+65HMLQLu9HallKy", "tianSeManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tianSeManager = void 0;
    var paintConfig_1 = require("./paintConfig");
    var paintDataManager_1 = require("./paintDataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tianSeManager = function() {
      function tianSeManager() {
        this.propId = null;
        this.guideState = "";
        this.curIsGallery = false;
        this.MainNode = null;
        this.unLockCount = 0;
        this.m_pOwner = null;
        this.tanse_index = null;
        this.color_index = null;
        this.max_tanse_index = 0;
        this.open_gallery_in_firstPaint = false;
        this.cur_Color = cc.color(255, 255, 255);
      }
      tianSeManager_1 = tianSeManager;
      tianSeManager.prototype.init = function(main, isGuide, firstGame) {
        void 0 === isGuide && (isGuide = false);
        void 0 === firstGame && (firstGame = false);
        this.MainNode = main;
        this.color_index = -1;
        if (firstGame) {
          var unLockData = paintDataManager_1.default.getUnlockPaintList();
          if (unLockData) {
            this.tanse_index = unLockData[this.unLockCount].propId;
            this.max_tanse_index = unLockData.length;
          }
        } else {
          this.curIsGallery = true;
          this.unLockCount = 0;
          this.tanse_index = 0;
          this.max_tanse_index = 0;
        }
        isGuide && (this.guideState = paintConfig_1.GUIDE_STATE.INIT);
      };
      tianSeManager.prototype.change = function() {
        this.unLockCount++;
        if (this.unLockCount >= this.max_tanse_index) {
          this.open_gallery_in_firstPaint = true;
          return;
        }
        var unLockData = paintDataManager_1.default.getUnlockPaintList();
        if (unLockData) {
          tianSeManager_1.instance.TanseIndex = unLockData[this.unLockCount].propId;
          this.MainNode.nextPaint();
        }
      };
      tianSeManager.prototype.setPropId = function(id) {
        var able = paintDataManager_1.default.getOpenGalleryState();
        able && (this.propId = id);
      };
      tianSeManager.prototype.setOwner = function(owner) {
        this.m_pOwner = owner;
      };
      tianSeManager.prototype.openPaint = function(data) {
        this.MainNode.openPaint(data);
      };
      tianSeManager.prototype.closePaint = function() {
        this.MainNode.closePaint();
      };
      tianSeManager.prototype.refreshItem = function() {
        this.MainNode.refreshItem();
      };
      tianSeManager.prototype.showQuitAlertPre = function() {
        this.MainNode.showQuitAlertPre();
      };
      tianSeManager.prototype.setGuide = function() {
        this.MainNode.setGuide();
      };
      Object.defineProperty(tianSeManager.prototype, "TanseIndex", {
        get: function() {
          return this.tanse_index;
        },
        set: function(value) {
          this.tanse_index = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(tianSeManager.prototype, "ColorIndex", {
        get: function() {
          return this.color_index;
        },
        set: function(value) {
          this.color_index = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(tianSeManager.prototype, "CurColor", {
        get: function() {
          return this.cur_Color;
        },
        set: function(value) {
          this.cur_Color = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(tianSeManager, "instance", {
        get: function() {
          tianSeManager_1._instance || (tianSeManager_1._instance = new tianSeManager_1());
          return tianSeManager_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      var tianSeManager_1;
      tianSeManager = tianSeManager_1 = __decorate([ ccclass ], tianSeManager);
      return tianSeManager;
    }();
    exports.tianSeManager = tianSeManager;
    cc._RF.pop();
  }, {
    "./paintConfig": "paintConfig",
    "./paintDataManager": "paintDataManager"
  } ],
  tianSeNodeInGallery: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "662435cMblKNpnyGXHKl3UM", "tianSeNodeInGallery");
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
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ResLoader_1 = require("../../../../kit/framework/load/ResLoader");
    var paintConfig_1 = require("../../src/paintConfig");
    var tianSeManager_1 = require("../tianSeManager");
    var paintAssetsManager_1 = require("../paintAssetsManager");
    var pen_1 = require("../pen");
    var TigoManager_1 = require("../TigoManager");
    var paintDataManager_1 = require("../paintDataManager");
    var showPaint_1 = require("../firstPaint/showPaint");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tianSeNodeInGallery = function(_super) {
      __extends(tianSeNodeInGallery, _super);
      function tianSeNodeInGallery() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.paint_Camera = null;
        _this.paint1 = null;
        _this.paint2 = null;
        _this.doneBtn = null;
        _this.topMask = null;
        _this.penPre = null;
        _this.topBarPre = null;
        _this.showPaintPre = null;
        _this.tetTexture = null;
        _this.curDrawTexture2D = null;
        _this.winWidth = 0;
        _this.winHeight = 0;
        _this.curTextureData = {};
        _this.savedTexutreData = {};
        _this.b_inited = false;
        _this.curDrawMode = 0;
        _this.checkedPointDic = {};
        _this.checkPointList = [];
        _this.paintFrame = [];
        _this.penNode = null;
        _this.isTouch = false;
        _this.showPaintNode = null;
        _this.data = {};
        return _this;
      }
      tianSeNodeInGallery.prototype.onLoad = function() {
        this.addEvent();
        this.penNode = cc.instantiate(this.penPre);
        this.node.addChild(this.penNode);
        var topBar = cc.instantiate(this.topBarPre);
        this.node.addChild(topBar);
        topBar.zIndex = cc.macro.MAX_ZINDEX;
      };
      tianSeNodeInGallery.prototype.initPaint = function(data) {
        this.data = data;
        this.b_inited = false;
        this.isTouch = false;
        this.showPaintNode && (this.showPaintNode.active = false);
        this.node.getChildByName("done").active = true;
        this.penNode.getComponent(pen_1.default).refreshColorNode();
        this.loadPaintFrame(data);
      };
      tianSeNodeInGallery.prototype.loadPaintFrame = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          var tex_paint, spr_paint, tex_line, spr;
          var _this = this;
          return __generator(this, function(_a) {
            tex_paint = paintAssetsManager_1.paintAssetsManager.instance.getPaintTextureById(data.propId);
            spr_paint = new cc.SpriteFrame();
            spr_paint.setTexture(tex_paint);
            console.log("\u8bfb\u53d6\u5df2\u6d82\u8272\u56fe\u7247\u6210\u529f" + data.propId);
            this.paint2.getComponent(cc.Sprite).spriteFrame = spr_paint;
            tex_line = paintAssetsManager_1.paintAssetsManager.instance.getPaintLineTextureById(tianSeManager_1.tianSeManager.instance.TanseIndex);
            if (tex_line) {
              console.log("\u8bfb\u53d6\u7cbe\u7075\u6210\u529f" + tianSeManager_1.tianSeManager.instance.TanseIndex);
              spr = new cc.SpriteFrame(tex_line);
              this.paint1.getComponent(cc.Sprite).spriteFrame = spr;
              this.initView();
            } else {
              console.log("\u672a\u53d6\u5230\u91cd\u65b0\u52a0\u8f7d", tianSeManager_1.tianSeManager.instance.TanseIndex);
              ResLoader_1.default.loadRes(data.iconUrl, cc.Texture2D, function(err, res) {
                err && console.log("\u52a0\u8f7d\u5931\u8d25" + tianSeManager_1.tianSeManager.instance.TanseIndex);
                console.log("\u52a0\u8f7d\u6210\u529f", tianSeManager_1.tianSeManager.instance.TanseIndex);
                var spr = new cc.SpriteFrame(res);
                _this.paint1.getComponent(cc.Sprite).spriteFrame = spr;
                paintAssetsManager_1.paintAssetsManager.instance.setPaintLineTextureById(_this.data.propId, res);
                _this.initView();
              }, paintConfig_1.BUNDLE_NAME);
            }
            return [ 2 ];
          });
        });
      };
      tianSeNodeInGallery.prototype.initView = function() {
        var _this = this;
        this.curDrawMode = 0;
        this.topMask.active = false;
        this.paint_Camera.ortho = true;
        this.paint_Camera.alignWithScreen = false;
        this.tetTexture = new cc.RenderTexture();
        this.curDrawTexture2D = new cc.Texture2D();
        this.scheduleOnce(function() {
          _this.resetRendData();
        });
      };
      tianSeNodeInGallery.prototype.resetRendData = function() {
        var _this = this;
        this.paint2.active = false;
        this.paint_Camera.orthoSize = .5 * this.paint1.height;
        this.winWidth = this.paint1.width;
        this.winHeight = this.paint1.height;
        this.paint2.x = this.paint1.x;
        this.paint2.y = this.paint1.y;
        this.paint_Camera.node.x = this.paint1.x;
        this.paint_Camera.node.y = this.paint1.y;
        this.paint2.setContentSize(this.paint1.getContentSize());
        this.paint_Camera.node.setContentSize(this.paint1.getContentSize());
        this.tetTexture._depthStencilBuffer = null;
        this.tetTexture.initWithSize(this.paint1.width, this.paint1.height, cc.gfx.RB_FMT_S8);
        this.paint_Camera.targetTexture = this.tetTexture;
        this.paint_Camera.render(this.paint1);
        this.paint2.active = true;
        var textureData = this.tetTexture.readPixels();
        this.savedTexutreData = textureData.slice();
        var tetTexture1 = new cc.RenderTexture();
        tetTexture1._depthStencilBuffer = null;
        tetTexture1.initWithSize(this.paint1.width, this.paint1.height, cc.gfx.RB_FMT_S8);
        this.paint_Camera.targetTexture = tetTexture1;
        this.paint_Camera.render(this.paint2);
        this.scheduleOnce(function() {
          _this.curTextureData = tetTexture1.readPixels();
        }, .1);
        this.b_inited = true;
      };
      tianSeNodeInGallery.prototype.filpYImage = function(data, width, height) {
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var start = srow * width * 4;
          var reStart = row * width * 4;
          for (var i = 0; i < rowBytes; i++) picData[reStart + i] = data[start + i];
        }
        return picData;
      };
      tianSeNodeInGallery.prototype.addEvent = function() {
        var _this = this;
        this.paint1.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!_this.b_inited || !_this.curTextureData || -1 == tianSeManager_1.tianSeManager.instance.ColorIndex) return;
          _this.isTouch = true;
          var tempPoint = event.getLocation();
          var pos = _this.paint1.convertToNodeSpaceAR(cc.v2(tempPoint.x, tempPoint.y));
          pos.x = pos.x + .5 * _this.paint1.width;
          pos.y = pos.y + .5 * _this.paint1.height;
          _this.checkColorFill(Math.floor(pos.x), Math.floor(pos.y));
          var spr = new cc.SpriteFrame();
          _this.curDrawTexture2D.initWithData(_this.filpYImage(_this.curTextureData, _this.winWidth, _this.winHeight), cc.Texture2D.PixelFormat.RGBA8888, _this.winWidth, _this.winHeight);
          spr.setTexture(_this.curDrawTexture2D);
          _this.paint2.getComponent(cc.Sprite).spriteFrame = spr;
        }, this);
      };
      tianSeNodeInGallery.prototype.checkColorFill = function(x, y) {
        if (!this.inArea(x, y)) return;
        this.checkPointList = [];
        this.checkedPointDic = {};
        this.checkPushPoint(this.checkedPointDic, {
          x: x,
          y: y
        });
        var _checkPoint = this.checkPointList[0];
        var _curIndex = Math.floor(this.winWidth * _checkPoint.y * 4 + 4 * _checkPoint.x);
        var _b_IsWhite1 = this.savedTexutreData[_curIndex] + this.savedTexutreData[_curIndex + 1] + this.savedTexutreData[_curIndex + 2];
        _b_IsWhite1 && AudioManager_1.default.playEffect(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + paintConfig_1.Music.clickFill);
        while (this.checkPointList.length > 0) {
          var checkPoint = this.checkPointList.pop();
          if (!checkPoint) continue;
          if (!this.inArea(checkPoint.x, checkPoint.y)) continue;
          var curIndex = Math.floor(this.winWidth * checkPoint.y * 4 + 4 * checkPoint.x);
          var colorTotal = this.savedTexutreData[curIndex] + this.savedTexutreData[curIndex + 1] + this.savedTexutreData[curIndex + 2];
          var opi = this.savedTexutreData[curIndex + 3];
          var b_IsWhite = colorTotal > 300;
          if (!b_IsWhite) continue;
          switch (this.curDrawMode) {
           case 0:
            this.curTextureData[curIndex] = tianSeManager_1.tianSeManager.instance.CurColor.r;
            this.curTextureData[curIndex + 1] = tianSeManager_1.tianSeManager.instance.CurColor.g;
            this.curTextureData[curIndex + 2] = tianSeManager_1.tianSeManager.instance.CurColor.b;
            break;

           case -1:
            this.curTextureData[curIndex] = 255;
            this.curTextureData[curIndex + 1] = 255;
            this.curTextureData[curIndex + 2] = 255;
          }
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x,
            y: checkPoint.y + 1
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x,
            y: checkPoint.y - 1
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x + 1,
            y: checkPoint.y
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x - 1,
            y: checkPoint.y
          });
        }
      };
      tianSeNodeInGallery.prototype.checkPushPoint = function(checkedPointDic, checkPoint) {
        if (checkedPointDic[checkPoint.x] && checkedPointDic[checkPoint.x][checkPoint.y]) return;
        checkedPointDic[checkPoint.x] || (checkedPointDic[checkPoint.x] = {});
        checkedPointDic[checkPoint.x][checkPoint.y] = true;
        this.checkPointList.push(checkPoint);
      };
      tianSeNodeInGallery.prototype.inArea = function(x, y) {
        return x >= 0 && x <= this.winWidth && y >= 0 && y <= this.winHeight;
      };
      tianSeNodeInGallery.prototype.doneCurTs = function(event, choose) {
        event.target.active = false;
        if (this.isTouch) {
          paintDataManager_1.default.setPaintItemUnlockById(tianSeManager_1.tianSeManager.instance.TanseIndex);
          paintAssetsManager_1.paintAssetsManager.instance.setPaintTextureById(tianSeManager_1.tianSeManager.instance.TanseIndex, this.curDrawTexture2D);
          this.saveFileToLocal(this.curTextureData);
        } else console.log("\u8be5\u6d82\u8272\u9053\u5177\u65e0\u4efb\u4f55\u53d8\u5316\uff5e\uff5e\uff5e");
        if (this.showPaintNode) {
          this.showPaintNode.active = true;
          this.showPaintNode.getComponent(showPaint_1.default).setShowImage(tianSeManager_1.tianSeManager.instance.TanseIndex);
        } else {
          this.showPaintNode = cc.instantiate(this.showPaintPre);
          this.node.addChild(this.showPaintNode);
          this.showPaintNode.getComponent(showPaint_1.default).setShowImage(tianSeManager_1.tianSeManager.instance.TanseIndex);
        }
        AudioManager_1.default.playEffect(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + paintConfig_1.Music.done);
      };
      tianSeNodeInGallery.prototype.saveFileToLocal = function(data) {
        if (cc.sys.isNative) {
          var path = paintDataManager_1.default.getNativePathByIndex(this.data.propId);
          var filePath = jsb.fileUtils.getWritablePath() + path;
          var _data = this.filpYImage(data, this.winWidth, this.winHeight);
          var success = jsb.saveImageData(_data, this.winWidth, this.winHeight, filePath);
          if (success) {
            this.resetTianSeData();
            console.log("save image data success, file: " + filePath);
          } else cc.error("save image data failed!");
        } else this.saveImageToWeb();
      };
      tianSeNodeInGallery.prototype.saveImageToWeb = function() {
        var canvas = document.createElement("canvas");
        var width = canvas.width = this.winWidth;
        var height = canvas.height = this.winHeight;
        var ctx = canvas.getContext("2d");
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var imageData = ctx.createImageData(width, 1);
          var start = srow * width * 4;
          for (var i = 0; i < rowBytes; i++) imageData.data[i] = this.curTextureData[start + i];
          ctx.putImageData(imageData, 0, row);
        }
        var dataURL = canvas.toDataURL();
        var params = {
          method: "PUT",
          key: "paint_" + tianSeManager_1.tianSeManager.instance.TanseIndex,
          type: "file",
          value: dataURL
        };
        TigoManager_1.default.instance.callAppToStorage(params);
        this.resetTianSeData();
      };
      tianSeNodeInGallery.prototype.resetTianSeData = function() {
        this.savedTexutreData = {};
        this.curTextureData = {};
        this.checkedPointDic = {};
        this.checkPointList = [];
      };
      tianSeNodeInGallery.prototype.onDestroy = function() {};
      __decorate([ property(cc.Camera) ], tianSeNodeInGallery.prototype, "paint_Camera", void 0);
      __decorate([ property(cc.Node) ], tianSeNodeInGallery.prototype, "paint1", void 0);
      __decorate([ property(cc.Node) ], tianSeNodeInGallery.prototype, "paint2", void 0);
      __decorate([ property(cc.Node) ], tianSeNodeInGallery.prototype, "doneBtn", void 0);
      __decorate([ property(cc.Node) ], tianSeNodeInGallery.prototype, "topMask", void 0);
      __decorate([ property(cc.Prefab) ], tianSeNodeInGallery.prototype, "penPre", void 0);
      __decorate([ property(cc.Prefab) ], tianSeNodeInGallery.prototype, "topBarPre", void 0);
      __decorate([ property(cc.Prefab) ], tianSeNodeInGallery.prototype, "showPaintPre", void 0);
      tianSeNodeInGallery = __decorate([ ccclass ], tianSeNodeInGallery);
      return tianSeNodeInGallery;
    }(cc.Component);
    exports.default = tianSeNodeInGallery;
    cc._RF.pop();
  }, {
    "../../../../kit/framework/load/ResLoader": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../src/paintConfig": "paintConfig",
    "../TigoManager": "TigoManager",
    "../firstPaint/showPaint": "showPaint",
    "../paintAssetsManager": "paintAssetsManager",
    "../paintDataManager": "paintDataManager",
    "../pen": "pen",
    "../tianSeManager": "tianSeManager"
  } ],
  tianSeNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98173k1sKdONJ0yBSDG+xzt", "tianSeNode");
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
    var AudioManager_1 = require("../../../../kit/system/audio/AudioManager");
    var ResLoader_1 = require("../../../../kit/framework/load/ResLoader");
    var paintConfig_1 = require("../paintConfig");
    var LocalStorageUtils_1 = require("../../../../kit/utils/LocalStorageUtils");
    var paintDataManager_1 = require("../paintDataManager");
    var paintAssetsManager_1 = require("../paintAssetsManager");
    var TigoManager_1 = require("../TigoManager");
    var tianSeManager_1 = require("../tianSeManager");
    var showPaint_1 = require("./showPaint");
    var pen_1 = require("../pen");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var tianSeNode = function(_super) {
      __extends(tianSeNode, _super);
      function tianSeNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.paint_Camera = null;
        _this.paint1 = null;
        _this.paint2 = null;
        _this.doneBtn = null;
        _this.topMask = null;
        _this.isFirstSave = false;
        _this.showPaintPre = null;
        _this.penPre = null;
        _this.tetTexture = null;
        _this.curDrawTexture2D = null;
        _this.winWidth = 0;
        _this.winHeight = 0;
        _this.curTextureData = {};
        _this.savedTexutreData = {};
        _this.b_inited = false;
        _this.curDrawMode = 0;
        _this.checkedPointDic = {};
        _this.checkPointList = [];
        _this.paintFrame = [];
        _this.penNode = null;
        _this.showPaintNode = null;
        return _this;
      }
      tianSeNode.prototype.onLoad = function() {
        this.addEvent();
        this.penNode = cc.instantiate(this.penPre);
        this.node.addChild(this.penNode);
        this.initPaint();
      };
      tianSeNode.prototype.initPaint = function() {
        this.b_inited = false;
        this.node.getChildByName("done").active = true;
        this.penNode.getComponent(pen_1.default).refreshColorNode();
        this.loadPaintFrame();
      };
      tianSeNode.prototype.loadPaintFrame = function() {
        var _this = this;
        var tex = paintAssetsManager_1.paintAssetsManager.instance.getPaintLineTextureById(tianSeManager_1.tianSeManager.instance.TanseIndex);
        if (tex) {
          console.log("\u8bfb\u53d6\u7cbe\u7075\u6210\u529f" + tianSeManager_1.tianSeManager.instance.TanseIndex);
          var spr = new cc.SpriteFrame(tex);
          this.paint1.getComponent(cc.Sprite).spriteFrame = spr;
          this.initView();
        } else {
          var data = paintDataManager_1.default.getPaintDataById(tianSeManager_1.tianSeManager.instance.TanseIndex);
          ResLoader_1.default.loadRes(data.iconUrl, cc.Texture2D, function(err, res) {
            if (err) console.log("\u52a0\u8f7d\u5931\u8d25ID=====>", tianSeManager_1.tianSeManager.instance.TanseIndex); else {
              console.log("\u52a0\u8f7d\u6210\u529f", res);
              var spr = new cc.SpriteFrame(res);
              _this.paint1.getComponent(cc.Sprite).spriteFrame = spr;
              paintAssetsManager_1.paintAssetsManager.instance.setPaintLineTextureById(tianSeManager_1.tianSeManager.instance.TanseIndex, res);
            }
            _this.initView();
          }, paintConfig_1.BUNDLE_NAME);
        }
      };
      tianSeNode.prototype.initView = function() {
        var _this = this;
        this.curDrawMode = 0;
        this.topMask.active = false;
        this.paint_Camera.ortho = true;
        this.paint_Camera.alignWithScreen = false;
        this.tetTexture = new cc.RenderTexture();
        this.curDrawTexture2D = new cc.Texture2D();
        this.scheduleOnce(function() {
          _this.resetRendData();
        });
      };
      tianSeNode.prototype.resetRendData = function() {
        var _this = this;
        this.paint2.active = false;
        this.paint_Camera.orthoSize = .5 * this.paint1.height;
        this.winWidth = this.paint1.width;
        this.winHeight = this.paint1.height;
        this.paint2.x = this.paint1.x;
        this.paint2.y = this.paint1.y;
        this.paint_Camera.node.x = this.paint1.x;
        this.paint_Camera.node.y = this.paint1.y;
        this.paint2.setContentSize(this.paint1.getContentSize());
        this.paint_Camera.node.setContentSize(this.paint1.getContentSize());
        this.tetTexture._depthStencilBuffer = null;
        this.tetTexture.initWithSize(this.paint1.width, this.paint1.height, cc.gfx.RB_FMT_S8);
        this.paint_Camera.targetTexture = this.tetTexture;
        this.paint_Camera.render(this.paint1);
        this.scheduleOnce(function() {
          var textureData = _this.tetTexture.readPixels();
          _this.savedTexutreData = textureData.slice();
          _this.curTextureData = textureData.slice();
          _this.b_inited = true;
          var spr = new cc.SpriteFrame();
          _this.curDrawTexture2D.initWithData(_this.filpYImage(_this.curTextureData, _this.winWidth, _this.winHeight), cc.Texture2D.PixelFormat.RGBA8888, _this.winWidth, _this.winHeight);
          spr.setTexture(_this.curDrawTexture2D);
          _this.paint2.getComponent(cc.Sprite).spriteFrame = spr;
          _this.paint2.active = true;
        }, 1);
      };
      tianSeNode.prototype.filpYImage = function(data, width, height) {
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var start = srow * width * 4;
          var reStart = row * width * 4;
          for (var i = 0; i < rowBytes; i++) picData[reStart + i] = data[start + i];
        }
        return picData;
      };
      tianSeNode.prototype.addEvent = function() {
        var _this = this;
        this.paint1.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!_this.b_inited || !_this.curTextureData) return;
          if (tianSeManager_1.tianSeManager.instance.guideState == paintConfig_1.GUIDE_STATE.CLICK_HB) {
            tianSeManager_1.tianSeManager.instance.guideState = paintConfig_1.GUIDE_STATE.CLICK_FILL;
            tianSeManager_1.tianSeManager.instance.setGuide();
          }
          var tempPoint = event.getLocation();
          var pos = _this.paint1.convertToNodeSpaceAR(cc.v2(tempPoint.x, tempPoint.y));
          pos.x = pos.x + .5 * _this.paint1.width;
          pos.y = pos.y + .5 * _this.paint1.height;
          _this.checkColorFill(Math.floor(pos.x), Math.floor(pos.y));
          var spr = new cc.SpriteFrame();
          _this.curDrawTexture2D.initWithData(_this.filpYImage(_this.curTextureData, _this.winWidth, _this.winHeight), cc.Texture2D.PixelFormat.RGBA8888, _this.winWidth, _this.winHeight);
          spr.setTexture(_this.curDrawTexture2D);
          _this.paint2.getComponent(cc.Sprite).spriteFrame = spr;
        }, this);
      };
      tianSeNode.prototype.checkColorFill = function(x, y) {
        if (!this.inArea(x, y)) return;
        this.checkPointList = [];
        this.checkedPointDic = {};
        this.checkPushPoint(this.checkedPointDic, {
          x: x,
          y: y
        });
        var _checkPoint = this.checkPointList[0];
        var _curIndex = Math.floor(this.winWidth * _checkPoint.y * 4 + 4 * _checkPoint.x);
        var _b_IsWhite1 = this.savedTexutreData[_curIndex] + this.savedTexutreData[_curIndex + 1] + this.savedTexutreData[_curIndex + 2];
        _b_IsWhite1 && AudioManager_1.default.playEffect(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + paintConfig_1.Music.clickFill);
        while (this.checkPointList.length > 0) {
          var checkPoint = this.checkPointList.pop();
          if (!checkPoint) continue;
          if (!this.inArea(checkPoint.x, checkPoint.y)) continue;
          var curIndex = Math.floor(this.winWidth * checkPoint.y * 4 + 4 * checkPoint.x);
          var colorTotal = this.savedTexutreData[curIndex] + this.savedTexutreData[curIndex + 1] + this.savedTexutreData[curIndex + 2];
          var opi = this.savedTexutreData[curIndex + 3];
          var b_IsWhite = colorTotal > 300;
          if (!b_IsWhite) continue;
          switch (this.curDrawMode) {
           case 0:
            this.curTextureData[curIndex] = tianSeManager_1.tianSeManager.instance.CurColor.r;
            this.curTextureData[curIndex + 1] = tianSeManager_1.tianSeManager.instance.CurColor.g;
            this.curTextureData[curIndex + 2] = tianSeManager_1.tianSeManager.instance.CurColor.b;
            break;

           case -1:
            this.curTextureData[curIndex] = 255;
            this.curTextureData[curIndex + 1] = 255;
            this.curTextureData[curIndex + 2] = 255;
          }
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x,
            y: checkPoint.y + 1
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x,
            y: checkPoint.y - 1
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x + 1,
            y: checkPoint.y
          });
          this.checkPushPoint(this.checkedPointDic, {
            x: checkPoint.x - 1,
            y: checkPoint.y
          });
        }
      };
      tianSeNode.prototype.checkPushPoint = function(checkedPointDic, checkPoint) {
        if (checkedPointDic[checkPoint.x] && checkedPointDic[checkPoint.x][checkPoint.y]) return;
        checkedPointDic[checkPoint.x] || (checkedPointDic[checkPoint.x] = {});
        checkedPointDic[checkPoint.x][checkPoint.y] = true;
        this.checkPointList.push(checkPoint);
      };
      tianSeNode.prototype.inArea = function(x, y) {
        return x >= 0 && x <= this.winWidth && y >= 0 && y <= this.winHeight;
      };
      tianSeNode.prototype.doneCurTs = function(event, choose) {
        event.target.active = false;
        paintDataManager_1.default.setPaintItemUnlockById(tianSeManager_1.tianSeManager.instance.TanseIndex);
        paintAssetsManager_1.paintAssetsManager.instance.setPaintTextureById(tianSeManager_1.tianSeManager.instance.TanseIndex, this.curDrawTexture2D);
        if (this.showPaintNode) {
          this.showPaintNode.active = true;
          this.showPaintNode.getComponent(showPaint_1.default).setShowImage(tianSeManager_1.tianSeManager.instance.TanseIndex);
        } else {
          this.showPaintNode = cc.instantiate(this.showPaintPre);
          if (this.showPaintNode) {
            this.node.addChild(this.showPaintNode);
            this.showPaintNode.getComponent(showPaint_1.default).setShowImage(tianSeManager_1.tianSeManager.instance.TanseIndex);
          }
        }
        this.saveFileToLocal(this.curTextureData);
        if (!this.isFirstSave) {
          var platform = paintDataManager_1.default.getPlatform();
          if ("cn" == platform) LocalStorageUtils_1.LocalStorageUtils.setBool(paintConfig_1.SAVE_PAINT_SIGN, true); else {
            var params = {
              method: "PUT",
              key: paintConfig_1.SAVE_PAINT_SIGN,
              value: "1"
            };
            console.log("H5 \u4fdd\u5b58\u4e86\u7b2c\u4e00\u5f20\u56fe\u7247\uff5e\uff5e\uff5e\uff5e");
            TigoManager_1.default.instance.callAppToStorage(params) || {};
          }
          this.isFirstSave = true;
          tianSeManager_1.tianSeManager.instance.guideState = paintConfig_1.GUIDE_STATE.DONE;
          tianSeManager_1.tianSeManager.instance.setGuide();
        }
        AudioManager_1.default.playEffect(paintConfig_1.BUNDLE_NAME, "" + paintConfig_1.MUSIC_PATH + paintConfig_1.Music.done);
      };
      tianSeNode.prototype.saveFileToLocal = function(data) {
        if (cc.sys.isNative) {
          console.log("\u4fdd\u5b58\u56fe\u7247 isNative ");
          var path = paintDataManager_1.default.getNativePathByIndex(tianSeManager_1.tianSeManager.instance.TanseIndex);
          var filePath = jsb.fileUtils.getWritablePath() + path;
          var _data = this.filpYImage(data, this.winWidth, this.winHeight);
          var success = jsb.saveImageData(_data, this.winWidth, this.winHeight, filePath);
          if (success) {
            tianSeManager_1.tianSeManager.instance.change();
            this.resetTianSeData();
            console.log("save image data success, file: " + filePath);
          } else cc.error("save image data failed!");
        } else {
          console.log("\u4fdd\u5b58\u56fe\u7247 isMobile ");
          this.saveImageToWeb();
        }
      };
      tianSeNode.prototype.saveImageToWeb = function() {
        var canvas = document.createElement("canvas");
        var width = canvas.width = this.winWidth;
        var height = canvas.height = this.winHeight;
        var ctx = canvas.getContext("2d");
        var rowBytes = 4 * width;
        for (var row = 0; row < height; row++) {
          var srow = height - 1 - row;
          var imageData = ctx.createImageData(width, 1);
          var start = srow * width * 4;
          for (var i = 0; i < rowBytes; i++) imageData.data[i] = this.curTextureData[start + i];
          ctx.putImageData(imageData, 0, row);
        }
        var dataURL = canvas.toDataURL();
        var params = {
          method: "PUT",
          key: "paint_" + tianSeManager_1.tianSeManager.instance.TanseIndex,
          type: "file",
          value: dataURL
        };
        TigoManager_1.default.instance.callAppToStorage(params);
        tianSeManager_1.tianSeManager.instance.change();
        this.resetTianSeData();
      };
      tianSeNode.prototype.resetTianSeData = function() {
        this.savedTexutreData = {};
        this.curTextureData = {};
        this.checkedPointDic = {};
        this.checkPointList = [];
      };
      tianSeNode.prototype.onDestroy = function() {};
      __decorate([ property(cc.Camera) ], tianSeNode.prototype, "paint_Camera", void 0);
      __decorate([ property(cc.Node) ], tianSeNode.prototype, "paint1", void 0);
      __decorate([ property(cc.Node) ], tianSeNode.prototype, "paint2", void 0);
      __decorate([ property(cc.Node) ], tianSeNode.prototype, "doneBtn", void 0);
      __decorate([ property(cc.Node) ], tianSeNode.prototype, "topMask", void 0);
      __decorate([ property(cc.Prefab) ], tianSeNode.prototype, "showPaintPre", void 0);
      __decorate([ property(cc.Prefab) ], tianSeNode.prototype, "penPre", void 0);
      tianSeNode = __decorate([ ccclass ], tianSeNode);
      return tianSeNode;
    }(cc.Component);
    exports.default = tianSeNode;
    cc._RF.pop();
  }, {
    "../../../../kit/framework/load/ResLoader": void 0,
    "../../../../kit/system/audio/AudioManager": void 0,
    "../../../../kit/utils/LocalStorageUtils": void 0,
    "../TigoManager": "TigoManager",
    "../paintAssetsManager": "paintAssetsManager",
    "../paintConfig": "paintConfig",
    "../paintDataManager": "paintDataManager",
    "../pen": "pen",
    "../tianSeManager": "tianSeManager",
    "./showPaint": "showPaint"
  } ]
}, {}, [ "paint", "paintAlert", "paintTopBar", "GaussianBlur", "TigoManager", "showPaint", "tanseMain", "tianSeNode", "Gallery", "galleryNode", "galleryitem", "paintMain", "tianSeNodeInGallery", "paintAssetsManager", "paintConfig", "paintDataManager", "paintInterface", "pen", "tianSeManager" ]);
//# sourceMappingURL=index.js.map
