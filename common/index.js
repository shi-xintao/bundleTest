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
  AdapterBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56679+s58RNK7n1JJzo2Bfy", "AdapterBg");
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
    var AdapterBg = function(_super) {
      __extends(AdapterBg, _super);
      function AdapterBg() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdapterBg.prototype.onLoad = function() {};
      AdapterBg.prototype.onEnable = function() {
        this.relayout();
      };
      AdapterBg.prototype.relayout = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
        var ratio = this.node.width / this.node.height;
        if (ratio > frameAspectRatio) {
          var width = this.node.width * screenSize.height / this.node.height;
          this.node.width = width;
          this.node.height = screenSize.height;
        } else {
          var height = this.node.height * screenSize.width / this.node.width;
          this.node.width = screenSize.width;
          this.node.height = height;
        }
        var wdt = this.node.getComponent(cc.Widget);
        if (null == wdt) {
          this.node.addComponent(cc.Widget);
          wdt = this.node.getComponent(cc.Widget);
        }
        wdt.isAlignHorizontalCenter = true;
        wdt.isAlignVerticalCenter = true;
      };
      AdapterBg = __decorate([ ccclass ], AdapterBg);
      return AdapterBg;
    }(cc.Component);
    exports.default = AdapterBg;
    cc._RF.pop();
  }, {} ],
  AdapterScreen: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e1efgBZJVEzbXhhZxeZPt+", "AdapterScreen");
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
    var AdapterScreen = function(_super) {
      __extends(AdapterScreen, _super);
      function AdapterScreen() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lock = false;
        return _this;
      }
      AdapterScreen.prototype.onLoad = function() {
        this.relayout();
      };
      AdapterScreen.prototype.relayout = function() {
        if (this.lock) return;
        this.lock = true;
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        cc.log("canvas designSize:", designSize);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var designAspectRatio = designSize.width / designSize.height;
        var screenSize = __assign({}, designSize);
        frameAspectRatio < designAspectRatio ? screenSize.height = Math.ceil(designSize.width / frameAspectRatio) : screenSize.width = Math.ceil(designSize.height * frameAspectRatio);
        cc.Canvas.instance.designResolution = screenSize;
        this.lock = false;
      };
      AdapterScreen = __decorate([ ccclass ], AdapterScreen);
      return AdapterScreen;
    }(cc.Component);
    exports.default = AdapterScreen;
    cc._RF.pop();
  }, {} ],
  Assembler2D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cd782uoZlAwL58fihw/d0g", "Assembler2D");
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
    var Assembler2D = function(_super) {
      __extends(Assembler2D, _super);
      function Assembler2D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verticesCount = 4;
        _this.indecesCount = 6;
        _this.floatsPerVert = 5;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this._renderData = null;
        _this._local = null;
        return _this;
      }
      Assembler2D.prototype.init = function(comp) {
        _super.prototype.init.call(this, comp);
        this._renderData = new cc.RenderData();
        this._renderData.init(this);
        this.initLocal();
        this.initData();
      };
      Object.defineProperty(Assembler2D.prototype, "verticesFloats", {
        get: function() {
          return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
      });
      Assembler2D.prototype.initLocal = function() {
        this._local = [];
        this._local.length = 4;
      };
      Assembler2D.prototype.initData = function() {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indecesCount);
      };
      Assembler2D.prototype.updateColor = function(comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        color = null != color ? color : comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        for (var i = colorOffset, len = uintVerts.length; i < len; i += floatsPerVert) uintVerts[i] = color;
      };
      Assembler2D.prototype.updateUVs = function(comp) {
        var uv = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      Assembler2D.prototype.updateVerts = function(comp) {
        var node = comp.node;
        var cw = node.width;
        var ch = node.height;
        var appx = node.anchorX * cw;
        var appy = node.anchorX * ch;
        var l = -appx;
        var b = -appy;
        var r = appx;
        var t = appy;
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(comp);
      };
      Assembler2D.prototype.updateRenderData = function(comp) {
        if (comp._vertsDirty) {
          this.updateUVs(comp);
          this.updateVerts(comp);
          comp._vertsDirty = false;
        }
      };
      Assembler2D.prototype.updateWorldVerts = function(comp) {
        true;
        this.updateWorldVertsNative(comp);
      };
      Assembler2D.prototype.updateWorldVertsWebGL = function(comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matirx = new cc.Mat4();
        comp.node.getWorldMatrix(matirx);
        var matirxM = matirx.m;
        var a = matirxM[0];
        var b = matirxM[1];
        var c = matirxM[4];
        var d = matirxM[5];
        var tx = matirxM[12];
        var ty = matirxM[13];
        var vl = local[0];
        var vb = local[1];
        var vr = local[2];
        var vt = local[3];
        var justTranslate = 1 === a && 0 === b && 0 === c && 1 === d;
        var index = 0;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
          verts[index] = vl + tx;
          verts[index + 1] = vb + ty;
          index += floatsPerVert;
          verts[index] = vr + tx;
          verts[index + 1] = vb + ty;
          index += floatsPerVert;
          verts[index] = vl + tx;
          verts[index + 1] = vt + ty;
          index += floatsPerVert;
          verts[index] = vr + tx;
          verts[index + 1] = vt + ty;
        } else {
          var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
          verts[index] = al + cb + tx;
          verts[index + 1] = bl + db + ty;
          index += floatsPerVert;
          verts[index] = ar + cb + tx;
          verts[index + 1] = br + db + ty;
          index += floatsPerVert;
          verts[index] = al + ct + tx;
          verts[index + 1] = bl + dt + ty;
          index += floatsPerVert;
          verts[index] = ar + ct + tx;
          verts[index + 1] = br + dt + ty;
        }
      };
      Assembler2D.prototype.updateWorldVertsNative = function(comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var index = 0;
        verts[index] = vl;
        verts[index + 1] = vb;
        index += floatsPerVert;
        verts[index] = vr;
        verts[index + 1] = vb;
        index += floatsPerVert;
        verts[index] = vl;
        verts[index + 1] = vt;
        index += floatsPerVert;
        verts[index] = vr;
        verts[index + 1] = vt;
      };
      Assembler2D.prototype.fillBuffers = function(comp, renderer) {
        renderer.worldMatDirty && this.updateWorldVerts(comp);
        var renderData = this._renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indecesCount);
        var vertexOffset = offsetInfo.byteOffset >> 2;
        var vbuf = buffer._vData;
        vData.length + vertexOffset > vbuf.length ? vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset) : vbuf.set(vData, vertexOffset);
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0, l = iData.length; i < l; i++) ibuf[indiceOffset++] = vertexId + iData[i];
      };
      Assembler2D.prototype.packToDynamicAtlas = function(comp, frame) {
        false;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
          var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
          packedFrame && frame._setDynamicAtlasFrame(packedFrame);
        }
        var material = comp._materials[0];
        if (!material) return;
        if (material.getProperty("texture") !== frame._texture) {
          comp._vertsDirty = true;
          comp._updateMaterial();
        }
      };
      Assembler2D.prototype.getBuffer = function() {
        return cc.renderer._handle._meshBuffer;
      };
      return Assembler2D;
    }(cc.Assembler);
    exports.default = Assembler2D;
    cc._RF.pop();
  }, {} ],
  BaseChapterComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b586bYjLNlKjYC4Jdqadcrh", "BaseChapterComponent");
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
    var EventSystem_1 = require("../../kit/system/event/EventSystem");
    var ccclass = cc._decorator.ccclass;
    var BaseChapterComponent = function(_super) {
      __extends(BaseChapterComponent, _super);
      function BaseChapterComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.params = null;
        return _this;
      }
      BaseChapterComponent.prototype.initParams = function(params) {
        this.params = params;
      };
      BaseChapterComponent.prototype.onLoad = function() {
        console.log("BaseChapterComponent onLoad params: ", this.params);
        this.registerEvent();
      };
      BaseChapterComponent.prototype.registerEvent = function() {
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.onLifeCycleBlock, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.onLifeCycleUnBlock, this);
      };
      BaseChapterComponent.prototype.unregisterEvent = function() {
        EventSystem_1.default.on(events_1.LIFE_CYCLE_BLOCK, this.onLifeCycleBlock, this);
        EventSystem_1.default.on(events_1.LIFE_CYCLE_UNBLOCK, this.onLifeCycleUnBlock, this);
      };
      BaseChapterComponent.prototype.onChapterReady = function() {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_READY);
      };
      BaseChapterComponent.prototype.onLifeCycleBlock = function() {};
      BaseChapterComponent.prototype.onLifeCycleUnBlock = function() {};
      BaseChapterComponent.prototype.onChapterComplete = function() {
        EventSystem_1.default.emit(events_1.LIFE_CYCLE_COMPLETE);
      };
      BaseChapterComponent.prototype.onDestroy = function() {
        console.log("BaseChapterComponent onDestroy do sth");
        this.unregisterEvent();
      };
      BaseChapterComponent = __decorate([ ccclass ], BaseChapterComponent);
      return BaseChapterComponent;
    }(cc.Component);
    exports.default = BaseChapterComponent;
    cc._RF.pop();
  }, {
    "../../kit/events/events": void 0,
    "../../kit/system/event/EventSystem": void 0
  } ],
  ChapterGameComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "958028/8dZBqrKjuACCZIlm", "ChapterGameComponent");
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
    var EventSystem_1 = require("../../kit/system/event/EventSystem");
    var BaseChapterComponent_1 = require("./BaseChapterComponent");
    var ccclass = cc._decorator.ccclass;
    var ChapterGameComponent = function(_super) {
      __extends(ChapterGameComponent, _super);
      function ChapterGameComponent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.recordData = null;
        _this.taskData = null;
        _this.gameTaskCom = null;
        return _this;
      }
      ChapterGameComponent.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        cc.log("ChapterGameComponent onLoad params: " + this.params);
        this.initData();
        this.initComponents();
      };
      ChapterGameComponent.prototype.initData = function() {
        this.recordData = {
          evaluatingType: 1,
          evaluatingText: "",
          tryTimes: 1,
          evaluationScore: 30,
          recordTime: 3
        };
      };
      ChapterGameComponent.prototype.registerEvent = function() {
        _super.prototype.registerEvent.call(this);
        EventSystem_1.default.on(events_1.FOLLOW_MODULE_TO_CLIENT, this.onRecordResult, this);
      };
      ChapterGameComponent.prototype.unregisterEvent = function() {
        _super.prototype.unregisterEvent.call(this);
        EventSystem_1.default.off(events_1.FOLLOW_MODULE_TO_CLIENT, this.onRecordResult, this);
      };
      ChapterGameComponent.prototype.componentsLoadComplete = function() {
        cc.log("components load complete");
        this.onChapterReady();
      };
      ChapterGameComponent.prototype.initComponents = function() {
        var _this = this;
        Promise.all([ this.initRecordAudioComp(), this.initTaskComp() ]).then(function() {
          _this.componentsLoadComplete();
        }).catch(function(error) {
          cc.warn("initComponents error: " + error);
        });
      };
      ChapterGameComponent.prototype.initRecordAudioComp = function() {
        var _this = this;
        return new Promise(function(resolve) {
          EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
            eventName: "initComponent",
            extra: _this.recordData
          });
          resolve();
        }).catch(function(error) {
          cc.warn("initRecordAudioComp error: " + error);
        });
      };
      ChapterGameComponent.prototype.initTaskComp = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (_this.taskData) {
            var bundle = cc.assetManager.getBundle("common");
            bundle ? bundle.load("gameTask/gameTask", cc.Prefab, function(error, assets) {
              var taskNode = cc.instantiate(assets);
              _this.gameTaskCom = taskNode.getComponent("gameTask");
              _this.gameTaskCom && _this.gameTaskCom.initData(_this.taskData);
              taskNode.parent = _this.node;
              resolve();
            }) : resolve();
          } else resolve();
        }).catch(function(error) {
          cc.warn("initTaskComp error: " + error);
        });
      };
      ChapterGameComponent.prototype.startRecordAudio = function(evaluatingText, bundleName, audioUrl) {
        EventSystem_1.default.emit(events_1.FOLLOW_CLIENT_TO_MODULE, {
          eventName: "startRecord",
          extra: {
            evaluatingText: evaluatingText,
            bundleName: bundleName,
            audioUrl: audioUrl
          }
        });
      };
      ChapterGameComponent.prototype.onRecordResult = function(result) {
        cc.log(" recordResult result.data: " + result.data);
      };
      ChapterGameComponent.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
      };
      ChapterGameComponent = __decorate([ ccclass ], ChapterGameComponent);
      return ChapterGameComponent;
    }(BaseChapterComponent_1.default);
    exports.default = ChapterGameComponent;
    cc._RF.pop();
  }, {
    "../../kit/events/events": void 0,
    "../../kit/system/event/EventSystem": void 0,
    "./BaseChapterComponent": "BaseChapterComponent"
  } ],
  CompEnum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87736T2PNRKu54WeQCTjJBw", "CompEnum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RoundStateType = void 0;
    var RoundStateType;
    (function(RoundStateType) {
      RoundStateType[RoundStateType["None"] = -1] = "None";
      RoundStateType[RoundStateType["RoundOpenAniStart"] = 0] = "RoundOpenAniStart";
      RoundStateType[RoundStateType["RoundOpenAniComplete"] = 1] = "RoundOpenAniComplete";
      RoundStateType[RoundStateType["RoundStart"] = 2] = "RoundStart";
      RoundStateType[RoundStateType["RoundProceeding"] = 3] = "RoundProceeding";
      RoundStateType[RoundStateType["RoundComplete"] = 4] = "RoundComplete";
      RoundStateType[RoundStateType["RoundEndAniStart"] = 5] = "RoundEndAniStart";
      RoundStateType[RoundStateType["RoundEndAniComplete"] = 6] = "RoundEndAniComplete";
    })(RoundStateType = exports.RoundStateType || (exports.RoundStateType = {}));
    cc._RF.pop();
  }, {} ],
  CompInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49600mpkTxJDq3v+0++6IWC", "CompInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  Hand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f09diGkVNHEKi3Xqx86KFS", "Hand");
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
    var Hand = function(_super) {
      __extends(Hand, _super);
      function Hand() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sp = null;
        _this.cursor = null;
        _this.mask = null;
        _this.bg = null;
        _this.onCompleted = null;
        _this.move_duration = .4;
        return _this;
      }
      Hand.prototype.onLoad = function() {
        var _this = this;
        this.sp.setCompleteListener(function() {
          if (_this.onCompleted) {
            var cb = _this.onCompleted;
            cb();
          }
        });
      };
      Hand.prototype.playClick = function() {
        this.fadeIn();
        this.node.active = true;
        this.cursor.rotation = 0;
        this.sp.setAnimation(0, "dian", false);
      };
      Hand.prototype.fadeIn = function() {
        var fade = cc.fadeIn(this.move_duration).easing(cc.easeSineOut());
        this.bg.runAction(fade);
      };
      Hand.prototype.playSwipeLeft = function() {
        this.playSwipeByAngle(0, "you-zuo", false);
      };
      Hand.prototype.playSwipeRight = function() {
        this.playSwipeByAngle(0, "zuoyou", false);
      };
      Hand.prototype.playSwipeUp = function() {
        this.playSwipeByAngle(90, "zuoyou", false);
      };
      Hand.prototype.playSwipeDown = function() {
        this.playSwipeByAngle(90, "you-zuo", false);
      };
      Hand.prototype.playSwipeByAngle = function(angle, name, loop) {
        this.fadeIn();
        this.node.active = true;
        this.cursor.rotation = angle;
        this.sp.setAnimation(0, name, loop);
      };
      Hand.prototype.hide = function() {
        this.node.active = false;
      };
      Object.defineProperty(Hand.prototype, "isShowing", {
        get: function() {
          return this.node.active;
        },
        enumerable: false,
        configurable: true
      });
      Hand.prototype.stop = function() {};
      Hand.prototype.setTargetBound = function(x, y, w, h) {
        this.mask.width = w;
        this.mask.height = h;
        this.mask.x = x;
        this.mask.y = y;
        var screenSize = cc.Canvas.instance.designResolution;
        this.bg.width = screenSize.width;
        this.bg.height = screenSize.height;
        this.bg.x = -this.mask.x;
        this.bg.y = -this.mask.y;
        this.cursor.x = this.mask.x;
        this.cursor.y = this.mask.y;
      };
      Hand.prototype.setTargetNode = function(target, parent) {
        if (null == target) return;
        var worldPos = target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this.mask.width = target.width;
        this.mask.height = target.height;
        var localPos = parent.convertToNodeSpaceAR(worldPos);
        this.setTargetBound(localPos.x, localPos.y, target.width, target.height);
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u624b\u52a8\u753b"
      }) ], Hand.prototype, "sp", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u624b"
      }) ], Hand.prototype, "cursor", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "Mask"
      }) ], Hand.prototype, "mask", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "Bg"
      }) ], Hand.prototype, "bg", void 0);
      Hand = __decorate([ ccclass ], Hand);
      return Hand;
    }(cc.Component);
    exports.default = Hand;
    cc._RF.pop();
  }, {} ],
  LSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "436bcJ8ijFIjpRpNC7fC71i", "LSprite");
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
    var SpriteAssembler_1 = require("./SpriteAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LSprite = function(_super) {
      __extends(LSprite, _super);
      function LSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.colorList = [];
        return _this;
      }
      LSprite.prototype.flushProperties = function() {};
      LSprite.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new SpriteAssembler_1.default();
        assembler.colorList = this.colorList;
        this.flushProperties();
        assembler.init(this);
        this._updateColor();
      };
      __decorate([ property({
        type: [ cc.Color ],
        displayName: "\u9876\u70b9\u989c\u8272",
        tooltip: "\u5de6\u4e0b->\u53f3\u4e0b->\u5de6\u4e0a->\u53f3\u4e0a"
      }) ], LSprite.prototype, "colorList", void 0);
      LSprite = __decorate([ ccclass ], LSprite);
      return LSprite;
    }(cc.Sprite);
    exports.default = LSprite;
    cc._RF.pop();
  }, {
    "./SpriteAssembler": "SpriteAssembler"
  } ],
  RollerAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "373bbYeaw5JopWo11ayc/Rp", "RollerAnimation");
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
    var ChapterGameComponent_1 = require("../../scripts/ChapterGameComponent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RollerAnimation = function(_super) {
      __extends(RollerAnimation, _super);
      function RollerAnimation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.farNode = null;
        _this.middleNode = null;
        _this.nearNode = null;
        _this.farSpeed = 100;
        _this.middleSpeed = 200;
        _this.nearSpeed = 300;
        _this.isHorizontal = true;
        _this.isStopMove = false;
        return _this;
      }
      RollerAnimation.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
      };
      RollerAnimation.prototype.start = function() {};
      RollerAnimation.prototype.initData = function() {};
      RollerAnimation.prototype.stopMove = function() {
        this.isStopMove = true;
      };
      RollerAnimation.prototype.resumeMove = function() {
        this.isStopMove = false;
      };
      RollerAnimation.prototype.setFarSpeed = function(speed) {
        this.farSpeed = speed;
      };
      RollerAnimation.prototype.getFarSpeed = function() {
        return this.farSpeed;
      };
      RollerAnimation.prototype.setMiddleSpeed = function(speed) {
        this.middleSpeed = speed;
      };
      RollerAnimation.prototype.getMiddleSpeed = function() {
        return this.middleSpeed;
      };
      RollerAnimation.prototype.setNearSpeed = function(speed) {
        this.nearSpeed = speed;
      };
      RollerAnimation.prototype.getNearSpeed = function() {
        return this.nearSpeed;
      };
      RollerAnimation.prototype.onDestroy = function() {
        _super.prototype.onDestroy.call(this);
      };
      RollerAnimation.prototype.changeSpeedMove = function(FSpeed, MSpeed, NSpeed) {
        var _this = this;
        this.farNode.childrenCount > 0 && this.farNode.children.forEach(function(v) {
          _this.isHorizontal ? v.x -= FSpeed : v.y -= FSpeed;
          _this.checkNode(v, FSpeed);
        });
        this.nearNode.childrenCount > 0 && this.nearNode.children.forEach(function(v) {
          _this.isHorizontal ? v.x -= NSpeed : v.y -= NSpeed;
          _this.checkNode(v, NSpeed);
        });
        this.middleNode.childrenCount > 0 && this.middleNode.children.forEach(function(v) {
          _this.isHorizontal ? v.x -= MSpeed : v.y -= MSpeed;
          _this.checkNode(v, MSpeed);
        });
      };
      RollerAnimation.prototype.checkNode = function(node, dir) {
        var w = cc.view.getFrameSize().width + node.width / 2;
        var h = cc.view.getFrameSize().height + node.height / 2;
        this.isHorizontal ? dir >= 0 ? node.x < -w && (node.x = w) : node.x > w && (node.x = -w) : dir >= 0 ? node.y < -h && (node.y = h) : node.y > h && (node.y = -h);
      };
      RollerAnimation.prototype.update = function(dt) {
        if (this.isStopMove) return;
        var farSpeed = dt * this.farSpeed;
        var middleSpeed = dt * this.middleSpeed;
        var nearSpeed = dt * this.nearSpeed;
        this.changeSpeedMove(farSpeed, middleSpeed, nearSpeed);
      };
      __decorate([ property(cc.Node) ], RollerAnimation.prototype, "farNode", void 0);
      __decorate([ property(cc.Node) ], RollerAnimation.prototype, "middleNode", void 0);
      __decorate([ property(cc.Node) ], RollerAnimation.prototype, "nearNode", void 0);
      __decorate([ property({
        displayName: "\u8fdc\u666f\u901f\u5ea6",
        tooltip: "\u5982\u679c\u8981\u4ece\u5de6\u5f80\u53f3\u8bf7\u586b\u5199\u8d1f\u6570"
      }) ], RollerAnimation.prototype, "farSpeed", void 0);
      __decorate([ property({
        displayName: "\u4e2d\u666f\u901f\u5ea6",
        tooltip: "\u5982\u679c\u8981\u4ece\u5de6\u5f80\u53f3\u8bf7\u586b\u5199\u8d1f\u6570"
      }) ], RollerAnimation.prototype, "middleSpeed", void 0);
      __decorate([ property({
        displayName: "\u8fd1\u666f\u901f\u5ea6",
        tooltip: "\u5982\u679c\u8981\u4ece\u5de6\u5f80\u53f3\u8bf7\u586b\u5199\u8d1f\u6570"
      }) ], RollerAnimation.prototype, "nearSpeed", void 0);
      __decorate([ property({
        displayName: "\u6a2a\u5411\u79fb\u52a8",
        tooltip: "\u9ed8\u8ba4\u4ece\u53f3\u5f80\u5de6"
      }) ], RollerAnimation.prototype, "isHorizontal", void 0);
      RollerAnimation = __decorate([ ccclass ], RollerAnimation);
      return RollerAnimation;
    }(ChapterGameComponent_1.default);
    exports.default = RollerAnimation;
    cc._RF.pop();
  }, {
    "../../scripts/ChapterGameComponent": "ChapterGameComponent"
  } ],
  SpineUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d68eTK4/NFsINkE8apGdaz", "SpineUtils");
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
    exports.SpineUtils = void 0;
    var TimerSystem_1 = require("../../kit/system/timer/TimerSystem");
    var SpineUtils = function() {
      function SpineUtils() {}
      SpineUtils.playSpineAsync = function(sp, info) {
        return new Promise(function(resolve, reject) {
          info.func && info.func();
          if (info.loop) {
            sp.setAnimation(0, info.name, true);
            TimerSystem_1.default.instance.doOnce(1e3 * info.duration || 0, function() {
              if (cc.isValid(sp.node)) resolve(true); else {
                cc.warn("sp.node  is valid false! animation name " + info.name);
                resolve(false);
              }
            });
          } else {
            var te = sp.setAnimation(0, info.name, false);
            if (!te) {
              resolve(true);
              return;
            }
            sp.setTrackCompleteListener(te, function() {
              resolve(true);
            });
          }
        });
      };
      SpineUtils.playSpineAniByConfig = function(sp, config) {
        return __awaiter(this, void 0, void 0, function() {
          var index, info;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              index = 0;
              _a.label = 1;

             case 1:
              if (!(index < config.length)) return [ 3, 4 ];
              info = config[index];
              info.func && info.func();
              return [ 4, SpineUtils.playSpineAsync(sp, info) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              index++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      return SpineUtils;
    }();
    exports.SpineUtils = SpineUtils;
    cc._RF.pop();
  }, {
    "../../kit/system/timer/TimerSystem": void 0
  } ],
  SpriteAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b650dFASNlN5LNScvHc4Bsi", "SpriteAssembler");
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
    var Assembler2D_1 = require("./Assembler2D");
    var SpriteAssembler = function(_super) {
      __extends(SpriteAssembler, _super);
      function SpriteAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._whiteColor = 4294967295;
        _this._colorList = [];
        return _this;
      }
      Object.defineProperty(SpriteAssembler.prototype, "colorList", {
        set: function(val) {
          var newColorList = [];
          for (var i = 0; i < val.length; i++) {
            var v = 0;
            var color = val[i];
            newColorList[i] = color._val;
          }
          this._colorList = newColorList;
        },
        enumerable: false,
        configurable: true
      });
      SpriteAssembler.prototype.updateRenderData = function(sprite) {
        this.packToDynamicAtlas(sprite, sprite._spriteFrame);
        _super.prototype.updateRenderData.call(this, sprite);
      };
      SpriteAssembler.prototype.updateUVs = function(sprite) {
        var uv = sprite._spriteFrame.uv;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      SpriteAssembler.prototype.updateVerts = function(sprite) {
        var node = sprite.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        if (sprite.trim) {
          l = -appx;
          b = -appy;
          r = cw - appx;
          t = ch - appy;
        } else {
          var frame = sprite.spriteFrame, ow = frame._originalSize.width, oh = frame._originalSize.height, rw = frame._rect.width, rh = frame._rect.height, offset = frame._offset, scaleX = cw / ow, scaleY = ch / oh;
          var trimLeft = offset.x + (ow - rw) / 2;
          var trimRight = offset.x - (ow - rw) / 2;
          var trimBottom = offset.y + (oh - rh) / 2;
          var trimTop = offset.y - (oh - rh) / 2;
          l = trimLeft * scaleX - appx;
          b = trimBottom * scaleY - appy;
          r = cw + trimRight * scaleX - appx;
          t = ch + trimTop * scaleY - appy;
        }
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
      };
      SpriteAssembler.prototype.updateColor = function(comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        color = null != color ? color : comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        var d = 0;
        for (var i = colorOffset, len = uintVerts.length; i < len; i += floatsPerVert) {
          color = this._colorList[d];
          color ? null : color = this._whiteColor;
          uintVerts[i] = color;
          d++;
        }
      };
      return SpriteAssembler;
    }(Assembler2D_1.default);
    exports.default = SpriteAssembler;
    cc._RF.pop();
  }, {
    "./Assembler2D": "Assembler2D"
  } ],
  TaskBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a2f11eZoVPcJMgqd3ZLEq9", "TaskBoard");
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
    var TaskBoard = function(_super) {
      __extends(TaskBoard, _super);
      function TaskBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.contents = [];
        _this.contentNodes = [];
        _this.finishIcon = null;
        _this.poses = [];
        _this.move_duration = .4;
        _this.currPage = 0;
        _this.isShowing = false;
        _this.panel = null;
        _this.mask = null;
        _this.safearea = null;
        _this.onClosed = null;
        _this.flag_block = false;
        _this.initPos = cc.Vec2.ZERO;
        _this.currPos = cc.Vec2.ZERO;
        return _this;
      }
      TaskBoard.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        var sw = cc.Canvas.instance.designResolution;
        this.poses[0].x = sw.width / 2 - 220;
        this.poses[0].y = -sw.height / 2;
        this.poses[1].x = sw.width / 2 + 220;
        this.poses[1].y = -sw.height / 2;
        this.panel.x = this.poses[1].x;
        this.panel.y = this.poses[1].y;
      };
      TaskBoard.prototype.start = function() {};
      TaskBoard.prototype.show = function(pageIndex, onMoveEnded) {
        var _this = this;
        void 0 === onMoveEnded && (onMoveEnded = null);
        this.finishIcon.node.active = false;
        this.node.active = true;
        if (this.contents.length > 0) {
          var pre = this.contents[pageIndex];
          var ch = cc.instantiate(pre);
          ch.active = true;
          this.safearea.addChild(ch);
          ch.x = 0;
          ch.y = 0;
        } else if (this.contentNodes.length > 0) {
          var pre = this.contentNodes[pageIndex];
          var ch = cc.instantiate(pre);
          ch.active = true;
          this.safearea.addChild(ch);
          ch.x = 0;
          ch.y = 0;
        }
        this.panel.active = true;
        var fade = cc.fadeIn(this.move_duration).easing(cc.easeSineOut());
        this.mask.runAction(fade);
        this.moveTo(this.poses[0], this.move_duration, function() {
          _this.isShowing = true;
          onMoveEnded && onMoveEnded(_this.isShowing);
        });
      };
      TaskBoard.prototype.hide = function(onMoveEnded) {
        var _this = this;
        void 0 === onMoveEnded && (onMoveEnded = null);
        var fade = cc.fadeOut(this.move_duration).easing(cc.easeSineOut());
        this.mask.runAction(fade);
        this.moveTo(this.poses[1], this.move_duration, function() {
          _this.isShowing = false;
          _this.node.active = false;
          _this.panel.active = false;
          if (_this.safearea.children.length > 0) {
            var ch = _this.safearea.children[0];
            ch.removeFromParent();
            ch.destroy();
          }
          _this.hideFinishIcon();
          onMoveEnded && onMoveEnded(_this.isShowing);
          if (_this.onClosed) {
            var oc = _this.onClosed;
            oc();
          }
        });
      };
      TaskBoard.prototype.setPrefabs = function(prefabs) {
        this.contents = prefabs;
      };
      TaskBoard.prototype.setNodes = function(nodes) {
        this.contentNodes = nodes;
      };
      TaskBoard.prototype.playFinished = function() {
        this.finishIcon.node.active = true;
        this.finishIcon.setAnimation(0, "gaizhang", false);
      };
      TaskBoard.prototype.hideFinishIcon = function() {
        this.finishIcon.node.active = false;
      };
      TaskBoard.prototype.onClick = function() {};
      TaskBoard.prototype.moveTo = function(pos, duration, callback) {
        var _this = this;
        void 0 === duration && (duration = 1);
        void 0 === callback && (callback = function() {
          return;
        });
        this.flag_block = true;
        var mov = cc.moveTo(duration, pos.x, pos.y).easing(cc.easeBackOut());
        var seq = cc.sequence(mov, cc.callFunc(function() {
          _this.flag_block = false;
          callback();
        }));
        this.panel.runAction(seq);
      };
      TaskBoard.prototype.onTouchBegan = function(event) {
        console.log("onTouchBegan >>>>>>>>>>>>");
        this.currPos.x = event.getLocationX();
        this.currPos.y = event.getLocationY();
        this.initPos.x = event.getLocationX();
        this.initPos.y = event.getLocationY();
      };
      TaskBoard.prototype.onTouchEnd = function(event) {
        console.log("onTouchEnd >>>>>>>>>>>>");
        var currX = event.getLocationX();
        var currY = event.getLocationY();
        var dis = Math.sqrt((currX - this.initPos.x) * (currX - this.initPos.x) + (currY - this.initPos.y) * (currY - this.initPos.y));
        dis < 20 && this.hide();
      };
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "\u4efb\u52a1\u5b8c\u6210"
      }) ], TaskBoard.prototype, "finishIcon", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u9762\u677f\u4f4d\u7f6e"
      }) ], TaskBoard.prototype, "poses", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u9762\u677f"
      }) ], TaskBoard.prototype, "panel", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "mask"
      }) ], TaskBoard.prototype, "mask", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u5185\u5bb9\u533a\u57df"
      }) ], TaskBoard.prototype, "safearea", void 0);
      TaskBoard = __decorate([ ccclass ], TaskBoard);
      return TaskBoard;
    }(cc.Component);
    exports.default = TaskBoard;
    cc._RF.pop();
  }, {} ],
  gameTask: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be38dnTC39MVqV63hKcsrc+", "gameTask");
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
    var gameTask = function(_super) {
      __extends(gameTask, _super);
      function gameTask() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeWidget = null;
        _this.topBtn = null;
        _this.moveLen = 400;
        _this.taskHideTime = 4;
        _this.moveTime = .5;
        _this.taskData = null;
        return _this;
      }
      gameTask.prototype.initData = function(taskData) {
        this.taskData = taskData;
      };
      gameTask.prototype.onLoad = function() {
        this.node.active = false;
        this.topBtn.active = false;
        this.updateTaskPos();
      };
      gameTask.prototype.updateTaskPos = function() {
        this.nodeWidget.right = -this.node.width;
        this.nodeWidget.updateAlignment();
      };
      gameTask.prototype.showTaskList = function(params) {
        return __awaiter(this, void 0, void 0, function() {
          var taskIndex, complete;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!params || void 0 == params.taskIndex) {
                cc.error("show task params error! params:" + JSON.stringify(params));
                return [ 2 ];
              }
              taskIndex = params.taskIndex;
              complete = params.complete;
              if (taskIndex >= this.taskData.imgList.length) {
                cc.error("task index error!");
                return [ 2 ];
              }
              return [ 4, this.updateTaskImg(taskIndex) ];

             case 1:
              _a.sent();
              this.moveAni(params, function() {
                _this.showSealSpine(complete);
              });
              return [ 2 ];
            }
          });
        });
      };
      gameTask.prototype.updateTaskImg = function(taskIndex) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var bundle = cc.assetManager.getBundle(_this.taskData.bundleName);
          bundle && bundle.load(_this.taskData.imgList[taskIndex], cc.SpriteFrame, function(err, asset) {
            _this.node.getChildByName("task").getComponent(cc.Sprite).spriteFrame = asset;
            _this.node.active = true;
            resolve();
          });
        });
      };
      gameTask.prototype.showSealSpine = function(complete) {
        if (!complete) return;
        var sealNode = this.node.getChildByName("sealNode");
        sealNode.active = true;
        var sk = sealNode.getComponent(sp.Skeleton);
        var en = sk.setAnimation(0, "gaizhang", false);
        sk.setTrackCompleteListener(en, function() {
          AudioManager_1.default.playEffect("common", "gameTask/audio/SE_luoyefense_03");
          AudioManager_1.default.playEffect("common", "gameTask/audio/6_congratulations");
        });
      };
      gameTask.prototype.moveAni = function(params, callFuc) {
        var _this = this;
        this.params = params;
        cc.tween(this.node).by(this.moveTime, {
          x: -this.moveLen
        }).call(function() {
          params.callFunc1 && params.callFunc1();
          callFuc && callFuc();
          _this.topBtn.active = true;
        }).delay(this.taskHideTime).call(function() {
          params.callFunc2 && params.callFunc2();
          _this.topBtn.active = false;
        }).by(this.moveTime, {
          x: this.moveLen
        }).call(function() {
          params.callFunc3 && params.callFunc3();
          var sealNode = _this.node.getChildByName("sealNode");
          sealNode.active = false;
        }).start();
      };
      gameTask.prototype.onTopBtnClicked = function(event) {
        var _this = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).by(this.moveTime, {
          x: this.moveLen
        }).call(function() {
          _this.params && _this.params.callFunc3 && _this.params.callFunc3();
          var sealNode = _this.node.getChildByName("sealNode");
          sealNode.active = false;
        }).start();
        this.topBtn.active = false;
        this.params && this.params.callFunc2 && this.params.callFunc2();
      };
      __decorate([ property(cc.Widget) ], gameTask.prototype, "nodeWidget", void 0);
      __decorate([ property(cc.Node) ], gameTask.prototype, "topBtn", void 0);
      gameTask = __decorate([ ccclass ], gameTask);
      return gameTask;
    }(cc.Component);
    exports.default = gameTask;
    cc._RF.pop();
  }, {
    "../../../kit/system/audio/AudioManager": void 0
  } ],
  rollBg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21412fmy2dPw5+Rg+4D4EhN", "rollBg");
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
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
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
      NewClass.prototype.start = function() {
        this.cur_lubg = this.lubg1;
        this.setbgfix();
        this.isRunmap = true;
      };
      NewClass.prototype.setbgfix = function() {
        var frameSize = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        var designSize = cc.size(designResolution.width, designResolution.height);
        var frameAspectRatio = frameSize.width / frameSize.height;
        var screenSize = __assign({}, designSize);
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
      NewClass.prototype.runlubg = function(dt) {
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
      NewClass.prototype.update = function(dt) {
        this.isRunmap && this.runlubg(dt);
      };
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u5f53\u524d\u5c4f\u7684\u80cc\u666f\u8282\u70b9"
      }) ], NewClass.prototype, "lubg1", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u4e0b\u4e00\u5c4f\u7684\u80cc\u666f\u8282\u70b9"
      }) ], NewClass.prototype, "lubg2", void 0);
      __decorate([ property({
        type: cc.Integer,
        tooltip: "\u5faa\u73af\u901f\u5ea6",
        min: 0,
        max: 1e3,
        step: 50,
        slide: true
      }) ], NewClass.prototype, "speed", void 0);
      __decorate([ property({
        type: cc.Enum(Mtype),
        tooltip: "VERTICAL_P:\u5782\u76f4\u5411\u4e0b\u6eda\u52a8  VERTICAL_N:\u5782\u76f4\u5411\u4e0a\u6eda\u52a8 HORIZONTAL_P:\u6c34\u5e73\u5411\u5de6\u6eda\u52a8 HORIZONTAL_N:\u6c34\u5e73\u5411\u53f3\u6eda\u52a8"
      }) ], NewClass.prototype, "mtype", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ]
}, {}, [ "TaskBoard", "gameTask", "Hand", "RollerAnimation", "AdapterBg", "AdapterScreen", "BaseChapterComponent", "ChapterGameComponent", "rollBg", "CompEnum", "CompInterface", "SpineUtils", "Assembler2D", "LSprite", "SpriteAssembler" ]);