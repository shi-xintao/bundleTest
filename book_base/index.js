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
  CConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "624b89YT3FOkYcmBNx4EL5p", "CConst");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CConst = void 0;
    var CConst = {
      WRONG_VALUE: -1,
      PREFAB_BASE_PATH: "prefabs/",
      PAGE_CHANGE: "page_change",
      PAGE_TURN: "page_turn",
      PAGE_TURN_CANCEL: "page_turn_cancel",
      WORD_SPRITE_CLICK: "word_sprite_click",
      WORD_BOOK_HIDE: "word_book_hide",
      ADD_COIN: "add_coin"
    };
    exports.CConst = CConst;
    cc._RF.pop();
  }, {} ],
  Csentence: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b7f4DOJOlJLK+16bhcLot5", "Csentence");
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
    var Csentence = function(_super) {
      __extends(Csentence, _super);
      function Csentence() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      Csentence.prototype.start = function() {};
      __decorate([ property(cc.Label) ], Csentence.prototype, "label", void 0);
      __decorate([ property ], Csentence.prototype, "text", void 0);
      Csentence = __decorate([ ccclass ], Csentence);
      return Csentence;
    }(cc.Component);
    exports.default = Csentence;
    cc._RF.pop();
  }, {} ],
  Tigo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10a90LogpBD1brCsOOGYEUN", "Tigo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TigoManager = function() {
      function TigoManager() {
        this.classId = "";
        this.gameId = "";
        this.moduleId = "";
        this.lessonModuleId = "";
        this.userId = "";
        this.TotalGameNum = 8;
        this.TotalGameErrorNum = 0;
        this.TotalGameRightOnce = 0;
        this.TotalGameRightTwice = 0;
        this.SingleGameErrorNum = 0;
        this.SingleGameRightOnce = 0;
        this.SingleGameRightTwice = 0;
        this.appData = null;
        this.TiGoTotalData = {
          quizTotalNum: 2,
          questionTotlaNum: 8,
          startGameTime: 0,
          gameNum: 0,
          totalGameTime: 0,
          errorNum: 0,
          accuracy: {
            once: "0%",
            twice: "0%"
          }
        };
        this.TigoSingleData = {
          MaxIndex: 0,
          errorNum: 0,
          answerData: {},
          accuracy: {
            once: "0%",
            twice: "0%"
          }
        };
      }
      TigoManager.prototype.addGameError = function() {
        this.SingleGameErrorNum++;
        this.TotalGameErrorNum++;
        this.TigoSingleData.errorNum += 1;
        this.TiGoTotalData.errorNum += 1;
      };
      TigoManager.prototype.addGameRightOnce = function() {
        this.SingleGameRightOnce += 1;
        this.TotalGameRightOnce += 1;
        this.TigoSingleData.accuracy.once = this.SingleGameRightOnce / this.TigoSingleData.MaxIndex * 100 + "%";
        this.TiGoTotalData.accuracy.once = this.TotalGameRightOnce / this.TiGoTotalData.gameNum * 100 + "%";
      };
      TigoManager.prototype.addGameRightTwice = function() {
        this.SingleGameRightTwice += 1;
        this.TotalGameRightTwice += 1;
        this.TigoSingleData.accuracy.twice = this.SingleGameRightTwice / this.TigoSingleData.MaxIndex * 100 + "%";
        this.TiGoTotalData.accuracy.twice = this.TotalGameRightTwice / this.TiGoTotalData.gameNum * 100 + "%";
      };
      TigoManager.prototype.refreshSingleData = function() {
        this.SingleGameRightOnce = 0;
        this.SingleGameRightTwice = 0;
        this.SingleGameErrorNum = 0;
        this.TigoSingleData.errorNum = 0;
        this.TigoSingleData.answerData = {};
        this.TigoSingleData.accuracy.once = "0%";
        this.TigoSingleData.accuracy.twice = "0%";
      };
      TigoManager.prototype.setSingleAnswerData = function(index, num) {
        var q = "Q" + index + " wrong";
        this.TigoSingleData.answerData[q] = num;
      };
      TigoManager.prototype.clearAllTigoData = function() {
        this.refreshSingleData();
        this.TotalGameNum = 0;
        this.TotalGameRightOnce = 0;
        this.TotalGameRightTwice = 0;
        this.TiGoTotalData.errorNum = 0;
        this.TiGoTotalData.accuracy.once = "0%";
        this.TiGoTotalData.accuracy.twice = "0%";
      };
      TigoManager.prototype.setGameId = function(id) {
        this.gameId = "cc_Week1L3_Book" + id;
      };
      TigoManager.prototype.setSingleMax = function(num) {
        this.TigoSingleData.MaxIndex = num;
      };
      TigoManager.prototype.setClassId = function(id) {
        this.classId = id;
      };
      TigoManager.prototype.setUserId = function(id) {
        this.userId = id;
      };
      TigoManager.prototype.setModuleId = function(id) {
        this.moduleId = id;
      };
      TigoManager.prototype.setlessonModuleId = function(id) {
        this.lessonModuleId = id;
      };
      TigoManager.prototype.callAppToAnalyse = function(action, total, param) {
        void 0 === total && (total = true);
        void 0 === param && (param = {});
        var handleData = {
          action: "TiGoAnalyse",
          param: {
            analyseAction: action,
            analyseParam: {
              analyseId: total ? this.classId : this.gameId,
              analyseData: param
            }
          }
        };
        console.log("callAppToAnalyse ============== " + JSON.stringify(handleData));
        window.tiGo && window.tiGo.callApp(JSON.stringify(handleData));
        window.webkit && window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(handleData));
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
      TigoManager.prototype.callAppToSaveData = function(total) {
        void 0 === total && (total = false);
        var handleData = {
          action: "TigoGameData",
          param: total ? this.TiGoTotalData : this.TigoSingleData
        };
        console.log("callAppToSaveData ============== " + JSON.stringify(handleData));
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
      TigoManager.prototype.getAppData = function() {
        return this.appData;
      };
      TigoManager.prototype.callAppToStorage = function(method, key, val) {
        void 0 === val && (val = 0);
        var value = "";
        switch (method) {
         case "PUT":
          value = val.toString();
        }
        var handleData = {
          action: "TiGoStorage",
          param: {
            method: method,
            key: key,
            value: value.toString()
          }
        };
        console.log("callAppToStorage ============== " + JSON.stringify(handleData));
        if (window.tiGo) {
          var page_num = window.tiGo.callApp(JSON.stringify(handleData));
          return page_num;
        }
        if (window.webkit) {
          var page_num = window.prompt("callApp", JSON.stringify(handleData));
          console.log(page_num);
          return page_num;
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
      TigoManager.prototype.getTime = function() {
        var time = Date.now().toString();
        time = time.substr(0, 10);
        return time;
      };
      TigoManager.getInstance = function() {
        this._instance || (this._instance = new TigoManager());
        console.log("TigoManager _instance is success");
        return this._instance;
      };
      TigoManager._instance = null;
      return TigoManager;
    }();
    exports.default = TigoManager.getInstance();
    cc._RF.pop();
  }, {} ],
  Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb683WaB09Ff7o91RnIK8y0", "Tools");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tools = void 0;
    var Tools = {
      delayCallback: function(callback, timer) {
        void 0 === timer && (timer = 1e3);
        var timeOutPoint = setTimeout(callback, timer);
        return timeOutPoint;
      },
      getAngle: function(start, end) {
        var dx = end.x - start.x;
        var dy = end.y - start.y;
        var dir = cc.v2(dx, dy);
        var angle = dir.signAngle(cc.v2(1, 0));
        var degree = angle / Math.PI * 180;
        return -degree;
      },
      checkArrayTheSame: function(array1, array2) {
        if (array1.length != array2.length) return false;
        if (array1.toString() == array2.toString()) return true;
        var count = 0;
        for (var i = 0; i < array1.length; ++i) {
          var val = array1[i];
          array2.includes(val) && count++;
        }
        return count == array1.length;
      },
      updatePartialSkin: function(skeleton, slotName, skinName) {
        var slot = skeleton.findSlot(slotName);
        var skeletonData = skeleton.skeletonData.getRuntimeData();
        var skin = skeletonData.findSkin(skinName);
        var slotIndex = skeletonData.findSlotIndex(slotName);
        if (-1 == slotIndex) {
          console.log("updatePartialSkin -> +++++++++++++++++++++++\u63d2\u69fd\u4e0b\u6807\u9519\u8bef \u8bf7\u67e5\u770b\u8d44\u6e90");
          return;
        }
        var attachment = skin.getAttachment(slotIndex, slotName);
        slot.setAttachment(attachment);
        skeleton.invalidAnimationCache();
      },
      getRandom: function(start, end, fixed) {
        void 0 === fixed && (fixed = 0);
        var differ = end - start;
        var random = Math.random();
        return (start + differ * random).toFixed(fixed);
      },
      clone: function(Obj) {
        var buf;
        if (Obj instanceof Array) {
          buf = [];
          var i = Obj.length;
          while (i--) buf[i] = this.clone(Obj[i]);
          return buf;
        }
        if (Obj instanceof Object) {
          buf = {};
          for (var k in Obj) buf[k] = this.clone(Obj[k]);
          return buf;
        }
        return Obj;
      },
      getCurrentDate: function(format, _time) {
        void 0 === _time && (_time = 0);
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var date = now.getDate();
        var day = now.getDay();
        var hour = now.getHours();
        var minu = now.getMinutes();
        var sec = now.getSeconds();
        month += 1;
        month < 10 && (month = "0" + month);
        date < 10 && (date = "0" + date);
        hour < 10 && (hour = "0" + hour);
        minu < 10 && (minu = "0" + minu);
        sec < 10 && (sec = "0" + sec);
        var time = "";
        1 == format ? time = year + "-" + month + "-" + date : 2 == format ? time = year + "-" + month + "-" + date + " " + hour + ":" + minu : 3 == format && (time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec);
        return time;
      }
    };
    exports.Tools = Tools;
    cc._RF.pop();
  }, {} ],
  "bezier-assembler": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "127a1Pl8H1Ah6HR7eXmaI7E", "bezier-assembler");
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
    var page_effect_assembler_base_1 = require("./page-effect-assembler-base");
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
    var BezierAssembler = function(_super) {
      __extends(BezierAssembler, _super);
      function BezierAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.angle = 0;
        return _this;
      }
      BezierAssembler.prototype.updateRenderData = function(comp) {
        if (comp) {
          var pointNum = comp.getPointCount();
          if (pointNum < 2) return;
          var node = comp.node;
          var height = node.height;
          var width = node.width;
          var posX = -width * node.anchorX;
          var posY = -height * node.anchorY;
          var ctrlPosData = this._getCtrlPosByAngle(width);
          var startPos = ctrlPosData.startPos;
          var endPos = ctrlPosData.endPos;
          var ctrlPos1 = ctrlPosData.ctrlPos1;
          var ctrlPos2 = ctrlPosData.ctrlPos2;
          var bezierPosList = [];
          bezierPosList[0] = startPos;
          var realWidth = 0;
          var lastU = 0;
          var nextU = 0;
          var floatsPerVert = this.floatsPerVert;
          var verts = this.renderData.vDatas[0];
          var dstOffset = 0;
          for (var i = 1; i < pointNum; i++) {
            var isTail = i === pointNum - 1;
            var lastBezierPos = bezierPosList[i - 1];
            var nextBezierPos = this._getBezierPos(i / (pointNum - 1), startPos, endPos, ctrlPos1, ctrlPos2);
            var fixedData = this._fixWidth(lastBezierPos, nextBezierPos, width, realWidth, isTail);
            var gapWidth = fixedData.gapWidth;
            nextBezierPos = fixedData.nextBezierPos;
            realWidth += gapWidth;
            bezierPosList[i] = nextBezierPos;
            var gapU = gapWidth / width;
            nextU = lastU + gapU;
            dstOffset = floatsPerVert * (i - 1) * 4;
            verts[dstOffset] = posX + lastBezierPos.x;
            verts[dstOffset + 1] = posY + lastBezierPos.y;
            verts[dstOffset + 2] = lastU;
            verts[dstOffset + 3] = 1;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + nextBezierPos.x;
            verts[dstOffset + 1] = posY + nextBezierPos.y;
            verts[dstOffset + 2] = nextU;
            verts[dstOffset + 3] = 1;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + lastBezierPos.x;
            verts[dstOffset + 1] = posY + height + lastBezierPos.y;
            verts[dstOffset + 2] = lastU;
            verts[dstOffset + 3] = 0;
            dstOffset += floatsPerVert;
            verts[dstOffset] = posX + nextBezierPos.x;
            verts[dstOffset + 1] = posY + height + nextBezierPos.y;
            verts[dstOffset + 2] = nextU;
            verts[dstOffset + 3] = 0;
            lastU = nextU;
          }
          this.updateColor(comp, null);
          this.updateIsFront(comp, 5);
        }
      };
      BezierAssembler.prototype.init = function(comp) {
        _super.prototype.init.call(this, comp);
        var segmentCount = comp.getPointCount() - 1;
        this.verticesCount = 4 * segmentCount;
        this.indicesCount = 6 * segmentCount;
        this.floatsPerVert = 6;
        this.initData();
      };
      BezierAssembler.prototype.getVfmt = function() {
        return vfmtPosUvColorFront;
      };
      BezierAssembler.prototype._getCtrlPosByAngle = function(width) {
        var startPos = new cc.Vec2(0, 0);
        var endPos = null;
        var ctrlPos1 = null;
        var ctrlPos2 = null;
        var rad = this.angle * Math.PI / 180;
        var per = 2 * rad / Math.PI;
        if (this.angle <= 90) {
          var endPosX = width * (1 - Math.pow(per, 3));
          var endPosY = width / 4 * (1 - Math.pow(1 - per, 4));
          endPos = new cc.Vec2(endPosX, endPosY);
          var ctrlPosX = width * (1 - .25 * per);
          var ctrlPos1Y = 1 * width / 16 * per;
          var ctrlPos2Y = 3 * width / 16 * per;
          ctrlPos1 = new cc.Vec2(ctrlPosX, ctrlPos1Y);
          ctrlPos2 = new cc.Vec2(ctrlPosX, ctrlPos2Y);
        } else {
          per -= 1;
          var endPosX = -width * (1 - Math.pow(1 - per, 3));
          var endPosY = width / 4 * (1 - Math.pow(per, 4));
          endPos = new cc.Vec2(endPosX, endPosY);
          var ctrlPos1X = 3 * width / 4 * (1 - per);
          var ctrlPos2X = 3 * width / 4 * Math.pow(1 - per, 3);
          var ctrlPos1Y = 1 * width / 16 * (1 - per);
          var ctrlPos2Y = 3 * width / 16 * (1 - Math.pow(per, 4));
          ctrlPos1 = new cc.Vec2(ctrlPos1X, ctrlPos1Y);
          ctrlPos2 = new cc.Vec2(ctrlPos2X, ctrlPos2Y);
        }
        return {
          startPos: startPos,
          endPos: endPos,
          ctrlPos1: ctrlPos1,
          ctrlPos2: ctrlPos2
        };
      };
      BezierAssembler.prototype._fixWidth = function(lastBezierPos, nextBezierPos, width, realWidth, isTail) {
        var deltaVector = nextBezierPos.sub(lastBezierPos);
        var gapWidth = deltaVector.mag();
        var curWidth = realWidth + gapWidth;
        if (isTail) {
          gapWidth = width - realWidth;
          var direction = deltaVector.normalize();
          nextBezierPos = lastBezierPos.add(direction.mul(gapWidth));
        } else if (curWidth >= width) {
          var delta = curWidth - width;
          gapWidth -= 1.1 * delta;
          gapWidth = Math.max(0, gapWidth);
          var direction = deltaVector.normalize();
          nextBezierPos = lastBezierPos.add(direction.mul(gapWidth));
        }
        return {
          gapWidth: gapWidth,
          nextBezierPos: nextBezierPos
        };
      };
      BezierAssembler.prototype._getBezierPos = function(t, startPos, endPos, ctrlPos1, ctrlPos2) {
        startPos = startPos.mul(Math.pow(1 - t, 3));
        ctrlPos1 = ctrlPos1.mul(3 * t * Math.pow(1 - t, 2));
        ctrlPos2 = ctrlPos2.mul(3 * (1 - t) * Math.pow(t, 2));
        endPos = endPos.mul(Math.pow(t, 3));
        return startPos.add(ctrlPos1.add(ctrlPos2.add(endPos)));
      };
      return BezierAssembler;
    }(page_effect_assembler_base_1.default);
    exports.default = BezierAssembler;
    cc._RF.pop();
  }, {
    "./page-effect-assembler-base": "page-effect-assembler-base"
  } ],
  "bezier-render": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "33e45xqc9pJ/agYa1E+jVYa", "bezier-render");
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
    var bezier_assembler_1 = require("./bezier-assembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BezierRender = function(_super) {
      __extends(BezierRender, _super);
      function BezierRender() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.textureList = [];
        _this.pointsCount = 10;
        _this._initedMaterial = false;
        return _this;
      }
      BezierRender.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        this.init();
      };
      BezierRender.prototype.init = function() {
        this._initedMaterial || this.updateMaterial();
        this["setVertsDirty"]();
      };
      BezierRender.prototype._resetAssembler = function() {
        var assembler = this["_assembler"] = new bezier_assembler_1.default();
        assembler.init(this);
      };
      BezierRender.prototype._updateMaterial = function() {
        var material = this.getMaterial(0);
        if (material) {
          material.define("CC_USE_MODEL", 1);
          if (2 === this.textureList.length) {
            material.setProperty("texture0", this.textureList[0]);
            material.setProperty("texture1", this.textureList[1]);
          }
        }
      };
      BezierRender.prototype.updateMaterial = function() {
        if (2 === this.textureList.length) {
          this._updateMaterial();
          this._initedMaterial = true;
          return;
        }
      };
      BezierRender.prototype.getPointCount = function() {
        return this.pointsCount;
      };
      BezierRender.prototype.updateAngle = function(angle) {
        if (!this["_assembler"]) return;
        this["_assembler"].angle = angle;
        this["_assembler"].updateRenderData(this);
      };
      __decorate([ property({
        type: [ cc.Texture2D ],
        displayName: "\u7eb9\u7406"
      }) ], BezierRender.prototype, "textureList", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u6761\u8fb9\u4e0a\u7684\u9876\u70b9\u6570\u91cf"
      }) ], BezierRender.prototype, "pointsCount", void 0);
      BezierRender = __decorate([ ccclass ], BezierRender);
      return BezierRender;
    }(cc.RenderComponent);
    exports.default = BezierRender;
    cc._RF.pop();
  }, {
    "./bezier-assembler": "bezier-assembler"
  } ],
  common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc03f/GRqpLLLlYsO/d95fS", "common");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.common = void 0;
    var notifier_center_1 = require("./notifier_center");
    var common = {
      reDebug: false,
      maxPageNum: 11,
      curPageNum: 1,
      lessonID: 0,
      webframe: new notifier_center_1.NotifierCenter(),
      setCurPageNum: function(num) {
        this.curPageNum = num;
        console.log("\u9875\u7801\uff1a", this.curPageNum + "/" + this.maxPageNum);
      },
      getCurPageNum: function() {
        return this.curPageNum;
      },
      getMaxPageNum: function() {
        return this.maxPageNum;
      },
      isUndefined: function(val) {
        return "undefined" == typeof val;
      },
      setMaxPageNum: function(num) {
        this.maxPageNum = num;
      },
      getLessonId: function() {
        return this.lessonID;
      },
      setLessonId: function(id) {
        this.lessonID = id;
      },
      getBundlePath: function() {
        var name = "PicktureBookNode";
        this.lessonID > 0 && (name += this.lessonID);
        return name;
      }
    };
    exports.common = common;
    cc._RF.pop();
  }, {
    "./notifier_center": "notifier_center"
  } ],
  main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76539nVwLJAIrG3+G3YPdf2", "main");
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
    false;
    var kit_1 = require("../../../kit/kit");
    var common_1 = require("./common/common");
    var CConst_1 = require("./config/CConst");
    var node_config_1 = require("./config/node_config");
    var pageData_1 = require("./pageData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var main = function(_super) {
      __extends(main, _super);
      function main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageNode = null;
        _this.verlet = null;
        _this.sentence = null;
        _this.pageLabel = null;
        _this.prefab_nowShow = null;
        _this.nodePrefab_ob = [];
        _this.maxLoadPrefabNum = 3;
        return _this;
      }
      main.prototype.onLoad = function() {
        this.addEventListener();
      };
      main.prototype.changeBookDate = function(data) {
        cc.log(data);
        if (data) {
          common_1.common.setLessonId(data.data.bookNum);
          common_1.common.setMaxPageNum(data.data.maxPage);
        }
        cc.log(common_1.common.getLessonId());
        this.initData();
      };
      main.prototype.start = function() {
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.changeBookDate, this);
        kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_READY);
        this.initBottomPages();
      };
      main.prototype.initBottomPages = function() {
        cc.log("fixscreen");
        var defaultPage = cc.find("defaultPage", this.verlet);
        var left = cc.find("left", defaultPage);
        var right = cc.find("right", defaultPage);
        var vwidth = left.parent.width;
        var vheight = left.parent.height;
        left.width = vwidth / 2;
        left.height = vheight;
        right.width = vwidth / 2;
        right.height = vheight;
      };
      main.prototype.initUserData = function() {};
      main.prototype.initData = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              for (i = 0; i < common_1.common.getMaxPageNum(); i++) ;
              _a = this;
              return [ 4, this.loadPrefab(common_1.common.getCurPageNum()) ];

             case 1:
              _a.prefab_nowShow = _b.sent();
              this.addPrefab(this.prefab_nowShow, common_1.common.getCurPageNum());
              this.updatePageShow();
              return [ 2 ];
            }
          });
        });
      };
      main.prototype.loadResFont = function() {
        var _this = this;
        cc.loader.loadRes("font/LingoAce", cc.Font, function(err, font) {
          if (err) {
            cc.log("\u5b57\u4f53\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25");
            return _this.loadResFont();
          }
        });
      };
      main.prototype.pagePrefabs = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, page_num, self;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < this.maxLoadPrefabNum)) return [ 3, 4 ];
              page_num = common_1.common.getCurPageNum() + i - 1;
              self = this;
              if (!(node_config_1.node_config[page_num] && !this.nodePrefab_ob[page_num])) return [ 3, 3 ];
              if (page_num > common_1.common.getMaxPageNum()) return [ 2 ];
              return [ 4, self.loadPrefab(page_num) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      main.prototype.loadPrefab = function(page_num) {
        return __awaiter(this, void 0, Promise, function() {
          var prefabPath;
          var _this = this;
          return __generator(this, function(_a) {
            prefabPath = CConst_1.CConst.PREFAB_BASE_PATH + node_config_1.node_config[page_num].nodePath;
            return [ 2, new Promise(function(resolve, reject) {
              var name = common_1.common.getBundlePath();
              kit_1.kit.manager.resources.loadRes(name, prefabPath, kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(e, prefab) {
                if (e) {
                  reject(e);
                  return;
                }
                _this.nodePrefab_ob[page_num] = prefab;
                resolve(prefab);
              });
            }) ];
          });
        });
      };
      main.prototype.destroyPrefab = function(page_num) {
        if (cc.isValid(this.nodePrefab_ob[page_num])) {
          this.nodePrefab_ob[page_num].destroy();
          this.nodePrefab_ob[page_num] = null;
          delete this.nodePrefab_ob[page_num];
        }
      };
      main.prototype.destroyAllPrefabs = function() {
        this.nodePrefab_ob.forEach(function(node) {
          node.destroy();
        });
        this.nodePrefab_ob = [];
        this.prefab_nowShow = null;
      };
      main.prototype.addPrefab = function(prefab, page_num) {
        cc.log("prefab =====> ", prefab);
        cc.log("\u68c0\u6d4b\u662f\u5426\u4e3a\u5f53\u524d\u9875\u7684\u9884\u5236\u4f53" + this.checkPrefabIsCur(prefab, page_num));
        if (!this.checkPrefabIsCur(prefab, page_num)) {
          this.loadPrefab(page_num);
          return;
        }
        common_1.common.isUndefined(prefab) && cc.log("\u9884\u5236\u4f53\u6ca1\u6709");
        this.prefab_nowShow = cc.instantiate(prefab);
        this.pageNode.destroyAllChildren();
        this.pageNode.addChild(this.prefab_nowShow);
        this.nodePrefab_ob[page_num] = prefab;
        var pageNode = this.prefab_nowShow;
        pageNode.width = pageNode.parent.width;
        pageNode.height = pageNode.parent.height;
        if (pageNode.children.length >= 2) {
          var left = pageNode.children[0];
          var right = pageNode.children[1];
          left.width = left.parent.width / 2;
          left.height = left.parent.height;
          left.anchorX = 0;
          left.x = 0;
          right.width = right.parent.width / 2;
          right.height = right.parent.height;
          right.anchorX = 0;
          right.x = 0;
        }
        this.pagePrefabs();
      };
      main.prototype.checkPrefabIsCur = function(prefab, page_num) {
        if (!prefab) return false;
        var prefabName = prefab._name;
        var curNodePath = node_config_1.node_config[page_num].nodePath;
        return curNodePath == prefabName;
      };
      main.prototype.updatePageShow = function() {
        var totalNum = common_1.common.getMaxPageNum();
        var page_num = common_1.common.getCurPageNum();
        this.pageLabel.string = page_num + "/" + totalNum;
      };
      main.prototype.changePageHandle = function() {
        var _this = this;
        cc.log("changePage--------" + common_1.common.getMaxPageNum());
        if (cc.isValid(this.prefab_nowShow)) {
          this.prefab_nowShow.destroy();
          this.prefab_nowShow = null;
        }
        var page_num = common_1.common.getCurPageNum();
        pageData_1.default.changePageMax(page_num);
        this.updatePageShow();
        this.prefab_nowShow = this.nodePrefab_ob[page_num];
        this.addPrefab(this.prefab_nowShow, page_num);
        this.scheduleOnce(function() {
          _this.pageNode.active = true;
          cc.log(_this.pageNode);
        }, 1);
      };
      main.prototype.turnPageHandle = function() {
        cc.log("\u7ffb\u9875\u5f00\u59cb");
        this.pageNode.active = false;
      };
      main.prototype.showWordBoard = function() {};
      main.prototype.addEventListener = function() {
        common_1.common.webframe.listen(CConst_1.CConst.PAGE_CHANGE, this.changePageHandle, this);
        common_1.common.webframe.listen(CConst_1.CConst.PAGE_TURN, this.turnPageHandle, this);
      };
      main.prototype.removeEventListener = function() {
        common_1.common.webframe.ignore(CConst_1.CConst.PAGE_CHANGE, this.changePageHandle, this);
        common_1.common.webframe.ignore(CConst_1.CConst.PAGE_TURN, this.turnPageHandle, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.changeBookDate, this);
      };
      main.prototype.onDestroy = function() {
        var name = common_1.common.getBundlePath();
        common_1.common.setCurPageNum(1);
        this.removeEventListener();
        this.unscheduleAllCallbacks();
      };
      __decorate([ property(cc.Node) ], main.prototype, "pageNode", void 0);
      __decorate([ property(cc.Node) ], main.prototype, "verlet", void 0);
      __decorate([ property(cc.Node) ], main.prototype, "sentence", void 0);
      __decorate([ property(cc.Label) ], main.prototype, "pageLabel", void 0);
      main = __decorate([ ccclass ], main);
      return main;
    }(cc.Component);
    exports.default = main;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0,
    "./common/common": "common",
    "./config/CConst": "CConst",
    "./config/node_config": "node_config",
    "./pageData": "pageData"
  } ],
  node_config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ece9adOH5xLBI13g0w8U0jW", "node_config");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.node_config = void 0;
    var node_config = {
      1: {
        id: 1,
        nodePath: "page_1"
      },
      2: {
        id: 2,
        nodePath: "page_2"
      },
      3: {
        id: 3,
        nodePath: "page_3"
      },
      4: {
        id: 4,
        nodePath: "page_4"
      },
      5: {
        id: 5,
        nodePath: "page_5"
      },
      6: {
        id: 6,
        nodePath: "page_6"
      },
      7: {
        id: 7,
        nodePath: "page_7"
      },
      8: {
        id: 8,
        nodePath: "page_8"
      },
      9: {
        id: 9,
        nodePath: "page_9"
      },
      10: {
        id: 10,
        nodePath: "page_10"
      },
      11: {
        id: 11,
        nodePath: "page_11"
      }
    };
    exports.node_config = node_config;
    cc._RF.pop();
  }, {} ],
  notifier_center: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "59ee8HFyAFIgpRiwKyD9ZzF", "notifier_center");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NotifierCenter = void 0;
    var NotifierCenter = function() {
      function NotifierCenter(type) {
        void 0 === type && (type = null);
        var key = type;
        this._TAG = "[" + key + "/NotifierCenter]";
        this.events = new Map();
        this.isRunning = false;
        this.launch();
      }
      NotifierCenter.prototype.getScopeName = function(scope) {
        void 0 === scope && (scope = null);
        try {
          return scope ? (scope._TAG ? scope._TAG : scope.name ? scope.name : "unknow").toString() : "unknow";
        } catch (e) {
          return "unknow";
        }
      };
      NotifierCenter.prototype.listen = function(eventName, handler, scope, isOnce) {
        void 0 === handler && (handler = null);
        void 0 === scope && (scope = null);
        void 0 === isOnce && (isOnce = false);
        if ("string" != typeof eventName || "function" !== typeof handler) {
          cc.log(this._TAG, " listen err: eName :" + eventName + "handler:" + handler);
          return;
        }
        var observers = this.events.get(eventName) || [];
        for (var i = 0; i < observers.length; i++) {
          var obs = observers[i];
          if (obs.scope == scope && (obs.handler == handler || obs.handler.toString() == handler.toString())) {
            cc.log(this._TAG, "\u6d88\u606f\u91cd\u590d\u6ce8\u518c:" + eventName + " function:" + handler.name);
            return;
          }
        }
        var observer = {
          handler: handler,
          scope: scope,
          isOnce: isOnce
        };
        observers.push(observer);
        this.events.set(eventName, observers);
      };
      NotifierCenter.prototype.ignore = function(eventName, handler, scope) {
        void 0 === handler && (handler = null);
        void 0 === scope && (scope = null);
        if ("string" != typeof eventName) {
          cc.log("-----eventName----" + eventName);
          this.ignoreScope(arguments[0]);
          return;
        }
        if ("string" != typeof eventName || "function" != typeof handler) {
          cc.log(this._TAG, "NotifierCenter remove err: eName :" + eventName + "scope:" + scope._TAG);
          return;
        }
        var observers = this.events.get(eventName);
        if (!observers || 0 === observers.length) return;
        scope = scope || this;
        var idx = -1;
        for (var i = 0; i < observers.length; ++i) {
          var observer = observers[i];
          observer.scope != scope || observer.handler != handler && observer.handler.toString() != handler.toString() || (idx = i);
        }
        idx > -1 && observers.splice(idx, 1);
        observers.length <= 0 ? this.events.delete(eventName) : this.events.set(eventName, observers);
        console.log("remove eventName " + eventName + " current Events length " + observers.length);
      };
      NotifierCenter.prototype.trigger = function(eventName, params) {
        void 0 === params && (params = null);
        if (!this.isRunning) return;
        if ("string" != typeof eventName) {
          cc.log(this._TAG, " trigger err: eventName :" + eventName);
          return;
        }
        var obs = this.events.get(eventName);
        if (!obs) return;
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;
        for (var i = 0; i < obs.length; i++) {
          var ob = obs[i];
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) continue;
          ob.handler.apply(ob.scope, args);
          ob.isOnce && cc.log(self._TAG, "trigger and remove once listener", eventName);
        }
        var tempEvents = obs.filter(function(ob) {
          if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) return false;
          return !ob.isOnce;
        });
        this.events.set(eventName, tempEvents);
      };
      NotifierCenter.prototype.ignoreScope = function(scope) {
        var _this = this;
        void 0 === scope && (scope = null);
        var ignoreMsgs = ":";
        this.events.forEach(function(obs, eventName) {
          var retainEvents = obs.filter(function(ob) {
            if (ob.scope != scope) return true;
            ignoreMsgs = ignoreMsgs + eventName + ",";
            return false;
          });
          _this.events.set(eventName, retainEvents);
        });
      };
      NotifierCenter.prototype.destroy = function() {
        console.log(this._TAG, "destroy");
        this.events.clear();
      };
      NotifierCenter.prototype.shut = function() {
        console.log(this._TAG, "--------shut");
        this.isRunning = false;
      };
      NotifierCenter.prototype.launch = function() {
        console.log(this._TAG, "--------launch");
        this.isRunning = true;
      };
      return NotifierCenter;
    }();
    exports.NotifierCenter = NotifierCenter;
    cc._RF.pop();
  }, {} ],
  "page-effect-assembler-base": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ad298hcoFFPjqeo9GC0tsCB", "page-effect-assembler-base");
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
  pageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a76dbz+usJPi70uq1H9E5FE", "pageData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var common_1 = require("./common/common");
    var PageData = function() {
      function PageData() {
        this.coins = 0;
        this.isFirst = 1;
        this.pageNowMax = 1;
        this.spineData1 = {
          1: {
            0: {
              id: 0,
              actionName: "animation3",
              effectName: "zimu"
            }
          },
          2: {
            0: {
              id: 0,
              actionName: "zhangwang",
              effectName: ""
            }
          },
          3: {
            0: {
              id: 0,
              actionName: "nanhai",
              effectName: "shuoxiao"
            },
            1: {
              id: 1,
              actionName: "nuhai",
              effectName: "hudie"
            }
          },
          4: {
            0: {
              id: 0,
              actionName: "dazhaohu",
              effectName: "nsHi"
            },
            1: {
              id: 1,
              actionName: "dazhaohu2",
              effectName: "nvshengHi"
            }
          },
          5: {
            0: {
              id: 0,
              actionName: "animation",
              effectName: "nsHei"
            }
          },
          6: {
            0: {
              id: 0,
              actionName: "animation",
              effectName: "pai"
            }
          },
          7: {
            0: {
              id: 0,
              actionName: "diqianbao",
              effectName: ""
            }
          },
          8: {
            0: {
              id: 0,
              actionName: "idle",
              effectName: "weifeng"
            }
          },
          9: {
            0: {
              id: 0,
              actionName: "pai",
              effectName: "nvshengHi"
            }
          },
          10: {
            0: {
              id: 0,
              actionName: "still2",
              effectName: ""
            },
            1: {
              id: 1,
              actionName: "still2",
              effectName: ""
            },
            2: {
              id: 2,
              actionName: "still2",
              effectName: ""
            },
            3: {
              id: 3,
              actionName: "still2",
              effectName: ""
            },
            4: {
              id: 4,
              actionName: "still2",
              effectName: ""
            },
            5: {
              id: 5,
              actionName: "still2",
              effectName: ""
            },
            6: {
              id: 6,
              actionName: "still2",
              effectName: ""
            }
          },
          11: {
            0: {
              id: 0,
              actionName: "z1and2",
              effectName: "shuoxiao"
            },
            1: {
              id: 1,
              actionName: "z3and4",
              effectName: "shuoxiao"
            },
            2: {
              id: 2,
              actionName: "R123",
              effectName: "shuoxiao"
            }
          },
          12: {
            0: {
              id: 0,
              actionName: "idle1",
              effectName: ""
            },
            1: {
              id: 1,
              actionName: "idle",
              effectName: ""
            }
          },
          13: {
            0: {
              id: 0,
              actionName: "idle1",
              effectName: ""
            },
            1: {
              id: 1,
              actionName: "idle3",
              effectName: ""
            }
          }
        };
        this.spineData = [ [ "biaoti_idle", "nanhai_idle", "huoji_idle", "still" ], [ "huoji_idle", "shuye_idle", "xiaoniao_idle", "still" ], [ "huoji_idle", "nanhai_idle", "still" ], [ "idle", "still" ], [ "huo_idle", "shui_idle" ], [ "huoji_idle", "nanhai_idle", "yeye_idle", "still" ], [ "idle", "still" ], [ "idle", "still" ], [ "huoji_idle", "shushi_idle", "still" ], [ "idle", "still" ], [ "fuwuyuan_idle", "fuwuyuan_still", "nanhai_idle", "nanhai_still" ], [ "nanhai_idle", "shushi_idle", "yeye_idle", "nainai_idle", "still" ] ];
        this.sentenceData = [ [ [ "\u5154\u5b50" ], [], [], [ "\u5431\u5431\uff0c\u5154\u5b50\u3002" ], [], [ "\u54af\u54af\uff0c\u5154\u5b50\uff01" ], [], [], [ "\u5154\u5b50" ], [ "\u5154\u5b50\uff01" ], [], [], [] ], [ [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ], [ "\u9ec4\u8272" ] ], [ [], [ "\u554a\uff1f\uff01" ], [], [], [ "\u4e94\u5757\u7ea2\u8272\u7684\u77f3\u5934" ], [ "\u4e94\u5757\u84dd\u8272\u7684\u77f3\u5934" ], [ "\u4e94\u5757\u9ec4\u8272\u7684\u77f3\u5934" ], [ "\u4e94\u5757\u9ed1\u8272\u7684\u77f3\u5934" ], [ "\u55ef\uff1f" ], [ "\u4e94\u5757\u7eff\u8272\u7684\u77f3\u5934" ], [], [], [] ], [ [], [ "\u725b\uff1f" ], [ "\u864e\uff01\u9a6c\uff01" ], [], [ "\u7f8a\uff01\u72d7\uff01\u732a\uff01" ], [], [ "\u8001\u9f20\uff01\u8001\u9f20\uff01\u8001\u9f20\uff01" ], [], [], [ "\u8001\u9f20\uff01\u8001\u9f20\uff01\u8001\u9f20\uff01" ], [], [], [] ], [ [], [ "\u7c89\u8272\u51b0\u6dc7\u51cc" ], [ "\u7c89\u8272\u751c\u751c\u5708" ], [ "\u7c89\u8272\u68d2\u68d2\u7cd6" ], [ "\u7c89\u8272\u5e03\u4e01" ], [ "\u7c89\u8272\u679c\u6c41" ], [ "\u7c89\u8272\u86cb\u7cd5" ], [ "\u54ce\u5440\uff5e\u54ce\u5440\uff5e" ], [ "\u5c11\u5403\u4e00\u70b9\u70b9" ], [], [], [], [] ], [ [ "\u6211\u662f\u8c01" ], [ "\u6211\u6709\u4e00\u4e2a\u5934" ], [ "\u6211\u6709\u4e24\u53ea\u773c" ], [ "\u6211\u6709\u4e00\u5f20\u5634" ], [ "\u6211\u65e9\u4e0a\u56db\u6761\u817f" ], [ "\u6211\u4e2d\u5348\u4e24\u6761\u817f" ], [ "\u6211\u665a\u4e0a\u4e09\u6761\u817f" ], [ "\u731c\u731c\u6211\u662f\u8c01" ], [ "\u6211\u662f\u4eba" ], [], [], [], [] ], [ [ "\u4f60\u662f\u8c01\uff1f" ], [ "\u4f60\u662f\u80e1\u841d\u535c\uff1f" ], [ "\u4f60\u662f\u88ab\u5b50\uff1f" ], [ "\u4f60\u662f\u6811\uff1f" ], [ "\u4f60\u662f\u7ef3\u5b50\uff1f" ], [ "\u4f60\u662f\u5899\uff1f" ], [ "\u4f60\u662f\u6c34\u7ba1\uff1f" ], [ "\u4f60\u662f\u8c01\uff1f" ], [ "\u4f60\u662f\u5927\u8c61\uff01" ], [], [], [], [] ], [ [], [ "\u54c7\uff0c\u6c14\u7403\uff01" ], [ "\u6c14\u7403\u5440\uff0c\u6c14\u7403" ], [], [ "\u7ea2\u8272\u6c14\u7403" ], [ "\u9ec4\u8272\u6c14\u7403" ], [ "\u84dd\u8272\u6c14\u7403" ], [ "\u54c7\uff0c\u6c14\u7403\uff01" ], [], [ "\u6c14\u7403\uff0c\u6c14\u7403\u2026\u2026" ] ], [ [ "\u84dd\u8272\u6c34\u58f6\uff01" ], [ "\u84dd\u8272\uff01" ], [ "\u84dd\u8272\uff01" ], [], [ "\u84dd\u8272\uff01" ], [ "\u84dd\u8272\u6c34\u58f6\uff01" ], [ "\u84dd\u8272\uff01" ], [ "\u55ef\uff1f" ], [ "\u84dd\u8272\uff01" ], [ "\u54c8\u54c8\uff0c\u84dd\u8272\uff01" ] ] ];
        this.voicesTimeData = [ {
          page: 1,
          voiceTimes: [ 1, 1, 1.6 ]
        }, {
          page: 2,
          voiceTimes: [ 1, 1, 1, 1, 1, 1, 1, 4.5 ]
        }, {
          page: 3,
          voiceTimes: [ 1, 1, 1, 1, 2.8 ]
        }, {
          page: 4,
          voiceTimes: [ 1, 1, 1, 2.8 ]
        }, {
          page: 5,
          voiceTimes: [ 1, 1, 1, 1, 1, 3.9 ]
        }, {
          page: 6,
          voiceTimes: [ 1, 1, 1, 1, 3.6 ]
        }, {
          page: 7,
          voiceTimes: [ 1, 1, 1, 1, 3.8 ]
        }, {
          page: 8,
          voiceTimes: [ 1, 1, 1, 1, 3.7 ]
        }, {
          page: 9,
          voiceTimes: [ 1, 1, 1, 1, 3.6 ]
        }, {
          page: 10,
          voiceTimes: [ 1, 1, 1, 1, 3.5 ]
        }, {
          page: 11,
          voiceTimes: [ 1, 1, 1, 1, 3.2 ]
        }, {
          page: 12,
          voiceTimes: [ 1, 1, 1, 1, 1, 3 ]
        }, {
          page: 13,
          voiceTimes: [ 1, 1, 1, 1, 1, 1, 1, 4.5 ]
        } ];
        this.FindId = [ 0, 0, 0, 0 ];
        this.CanOrder = [ false, false, false, false, false, false, false, false, false, false, false, false, false ];
      }
      Object.defineProperty(PageData, "getInstance", {
        get: function() {
          this._Instance || (this._Instance = new PageData());
          return this._Instance;
        },
        enumerable: false,
        configurable: true
      });
      PageData.prototype.getVoiceTimes = function(_pageNum) {
        for (var i = 0; i < this.voicesTimeData.length; i++) {
          var element = this.voicesTimeData[i];
          if (element.page === _pageNum) return element.voiceTimes;
        }
      };
      PageData.prototype.getVoiceTotalTime = function(_pageNum) {
        var tempArr = this.getVoiceTimes(_pageNum);
        if (!tempArr) return;
        return tempArr[tempArr.length - 1];
      };
      PageData.prototype.getSentenceData = function(num) {
        if (num <= common_1.common.getMaxPageNum()) return this.sentenceData[common_1.common.getLessonId()][num - 1];
      };
      PageData.prototype.getSpineData = function(num) {
        if (num <= common_1.common.getMaxPageNum()) return this.spineData1[num];
      };
      PageData.prototype.getSpineOrder = function(num) {
        if (num <= common_1.common.getMaxPageNum()) return this.CanOrder[num - 1];
      };
      PageData.prototype.setFindId = function(n) {
        this.FindId[n] = 1;
      };
      PageData.prototype.getFindIdArr = function() {
        return this.FindId;
      };
      PageData.prototype.getFindId = function(n) {
        return this.FindId[n];
      };
      PageData.prototype.getFirst = function() {
        return this.isFirst;
      };
      PageData.prototype.setFirst = function(n) {
        this.isFirst = n;
      };
      PageData.prototype.setCoin = function(n) {
        this.coins = n;
      };
      PageData.prototype.getCoin = function() {
        if (this.coins > 0) return this.coins;
      };
      PageData.prototype.addCoin = function(n) {
        this.coins += n;
      };
      PageData.prototype.changePageMax = function(n) {};
      return PageData;
    }();
    exports.default = PageData.getInstance;
    cc._RF.pop();
  }, {
    "./common/common": "common"
  } ],
  pageNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f65drDMtJPf4AyVIYJukjU", "pageNode");
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
    var pageNode = function(_super) {
      __extends(pageNode, _super);
      function pageNode() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageNum = 1;
        _this.canOrder = false;
        return _this;
      }
      pageNode.prototype.onLoad = function() {
        this.initPage();
      };
      pageNode.prototype.start = function() {};
      pageNode.prototype.initPage = function() {};
      pageNode.prototype.showTips = function() {
        cc.log("show");
      };
      pageNode.prototype.wordClick = function(event, data) {};
      __decorate([ property ], pageNode.prototype, "pageNum", void 0);
      pageNode = __decorate([ ccclass ], pageNode);
      return pageNode;
    }(cc.Component);
    exports.default = pageNode;
    cc._RF.pop();
  }, {} ],
  page: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f20ffFFn1GyZqIezO01S4H", "page");
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
    var CConst_1 = require("./config/CConst");
    var common_1 = require("./common/common");
    var verlet_render_1 = require("./verlet-render");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Page = function(_super) {
      __extends(Page, _super);
      function Page() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verletRender = null;
        _this.buttons = [];
        _this._angle = 0;
        _this._rightToLeft = -1;
        _this._waitTime = 0;
        _this._canTrun = false;
        _this._pageNum = common_1.common.getCurPageNum();
        _this._canChangePage = false;
        _this._isChangging = false;
        _this.startPos = cc.v2(0, 0);
        return _this;
      }
      Page.prototype.start = function() {
        this._angle = 0;
        this.verletRender.updateAngle(this._angle);
        this._pageNum == common_1.common.getMaxPageNum() ? this.buttons[0].active = false : 1 == this._pageNum && (this.buttons[1].active = false);
        common_1.common.webframe.listen("auto_page_turn", this.turnLeft_auto, this);
      };
      Page.prototype.turnLeft_auto = function() {
        var _this = this;
        if (this._pageNum >= common_1.common.getMaxPageNum()) return;
        for (var i = 0; i < 2; i++) this.buttons[i].active = false;
        this.scheduleOnce(function() {
          for (var i = 0; i < 2; i++) _this.buttons[i].active = true;
          _this._pageNum == common_1.common.getMaxPageNum() ? _this.buttons[0].active = false : 1 == _this._pageNum && (_this.buttons[1].active = false);
        }, 2);
        if (this._isChangging) return;
        this._isChangging = true;
        this._angle = 0;
        this._rightToLeft = 1;
        this.verletRender.node.opacity = 0;
        this.verletRender._changePage(this._pageNum, 1);
        this.verletRender.updateAngle(this._angle);
        this.verletRender.node.opacity = 255;
        this.scheduleOnce(function() {
          common_1.common.webframe.trigger(CConst_1.CConst.PAGE_TURN);
          _this._canTrun = true;
          kit_1.kit.manager.Audio.playEffect("book_base", "audios/changepage");
        }, .5);
      };
      Page.prototype.turnLeft = function(event, data) {
        var _this = this;
        common_1.common.webframe.trigger("user_touch_turn");
        if (this._pageNum >= common_1.common.getMaxPageNum()) return;
        for (var i = 0; i < 2; i++) this.buttons[i].active = false;
        this.scheduleOnce(function() {
          for (var i = 0; i < 2; i++) _this.buttons[i].active = true;
          _this._pageNum == common_1.common.getMaxPageNum() ? _this.buttons[0].active = false : 1 == _this._pageNum && (_this.buttons[1].active = false);
        }, 2);
        if (this._isChangging) return;
        this._isChangging = true;
        this._angle = 0;
        this._rightToLeft = 1;
        this.verletRender.node.opacity = 0;
        this.verletRender._changePage(this._pageNum, 1);
        this.verletRender.updateAngle(this._angle);
        this.verletRender.node.opacity = 255;
        this.scheduleOnce(function() {
          common_1.common.webframe.trigger(CConst_1.CConst.PAGE_TURN);
          _this._canTrun = true;
          kit_1.kit.manager.Audio.playEffect("book_base", "audios/changepage");
        }, .5);
      };
      Page.prototype.turnRight = function(event, data) {
        var _this = this;
        common_1.common.webframe.trigger("user_touch_turn");
        if (this._pageNum <= 1) return;
        for (var i = 0; i < 2; i++) this.buttons[i].active = false;
        this.scheduleOnce(function() {
          for (var i = 0; i < 2; i++) _this.buttons[i].active = true;
          _this._pageNum == common_1.common.getMaxPageNum() ? _this.buttons[0].active = false : 1 == _this._pageNum && (_this.buttons[1].active = false);
        }, 2);
        if (this._isChangging) return;
        this._isChangging = true;
        this._angle = 180;
        this._rightToLeft = 0;
        this.verletRender.node.opacity = 0;
        this.verletRender._changePage(this._pageNum, 2);
        this.verletRender.updateAngle(this._angle);
        this.verletRender.node.opacity = 255;
        this.scheduleOnce(function() {
          common_1.common.webframe.trigger(CConst_1.CConst.PAGE_TURN);
          _this._canTrun = true;
          kit_1.kit.manager.Audio.playEffect("book_base", "audios/changepage");
        }, .5);
      };
      Page.prototype.touchStart = function(event) {
        this.startPos = event.getLocation();
      };
      Page.prototype.touchMove = function(event) {
        var x2 = event.getLocation().x;
        var delta = -(x2 - this.startPos.x);
        var d = Math.abs(delta);
        if (d < 30) {
          if (delta > 0) {
            if (this._pageNum >= common_1.common.getMaxPageNum()) return;
          } else if (delta < 0) {
            if (this._pageNum <= 1) return;
            this._angle = 180;
            this._rightToLeft = 0;
            this.verletRender._changePage(this._pageNum, 2);
          }
          if (d >= 20) {
            this._canChangePage = true;
            common_1.common.webframe.trigger(CConst_1.CConst.PAGE_TURN);
          }
        }
        this.verletRender.updateAngle(this._angle);
      };
      Page.prototype.touchEnd = function(event) {
        this._canTrun = true;
        var x2 = event.getLocation().x;
        var delta = -(x2 - this.startPos.x);
        var d = Math.abs(delta);
        cc.log(d);
        d > 40 && this._canChangePage && cc.log("10101010110");
      };
      Page.prototype.update = function(dt) {
        var anglePerDt = 240;
        if (false == this._canTrun) return;
        if (1 == this._rightToLeft) {
          this._angle += dt * anglePerDt;
          if (this._angle > 180) {
            this._angle = 180;
            this._canTrun = false;
            this._canChangePage = false;
            this._pageNum += 1;
            this._pageNum > common_1.common.getMaxPageNum() && (this._pageNum = common_1.common.getMaxPageNum());
            cc.log("page ==== " + this._pageNum);
            this._rightToLeft = -1;
            common_1.common.setCurPageNum(this._pageNum);
            common_1.common.webframe.trigger(CConst_1.CConst.PAGE_CHANGE);
            this._isChangging = false;
          }
        } else if (0 == this._rightToLeft) {
          this._angle -= dt * anglePerDt;
          if (this._angle < 0) {
            this._angle = 0;
            this._canTrun = false;
            this._canChangePage = false;
            this._pageNum -= 1;
            this._pageNum < 1 && (this._pageNum = 1);
            this._rightToLeft = -1;
            cc.log("page ==== " + this._pageNum);
            common_1.common.setCurPageNum(this._pageNum);
            common_1.common.webframe.trigger(CConst_1.CConst.PAGE_CHANGE);
            this._isChangging = false;
          }
        }
        this.verletRender.updateAngle(this._angle);
      };
      Page.prototype.onDestroy = function() {
        common_1.common.webframe.ignore("auto_page_turn", this.turnLeft, this);
      };
      __decorate([ property({
        type: verlet_render_1.default,
        displayName: "Verlet\u79ef\u5206\u7b97\u6cd5"
      }) ], Page.prototype, "verletRender", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "\u7ffb\u9875\u6309\u94ae"
      }) ], Page.prototype, "buttons", void 0);
      Page = __decorate([ ccclass ], Page);
      return Page;
    }(cc.Component);
    exports.default = Page;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0,
    "./common/common": "common",
    "./config/CConst": "CConst",
    "./verlet-render": "verlet-render"
  } ],
  sentence: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "795178QRD9CjK/47O7vmCj9", "sentence");
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
    var CConst_1 = require("./config/CConst");
    var common_1 = require("./common/common");
    var pageData_1 = require("./pageData");
    var kit_1 = require("../../../kit/kit");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var sentence = function(_super) {
      __extends(sentence, _super);
      function sentence() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wordLayout = null;
        _this.btnPlay = null;
        _this.arr_word_Nodes = [];
        _this.is_touch = true;
        _this.is_first = 1;
        _this.sentenceId = -1;
        _this.NeedPlayNums = [ [ 1, 4, 6, 9, 10 ], [ 1, 2, 3, 4, 5, 6, 7 ], [ 2, 5, 6, 7, 8, 9, 10 ], [ 2, 3, 5, 7, 10 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 5, 6, 7, 8, 10 ], [ 1, 2, 3, 5, 6, 7, 8, 9, 10 ] ];
        return _this;
      }
      sentence.prototype.onLoad = function() {
        this.addEventListener();
      };
      sentence.prototype.start = function() {
        kit_1.kit.manager.Event.on(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.changeDate, this);
      };
      sentence.prototype.changeDate = function(data) {
        cc.log(data);
        if (data) {
          common_1.common.setLessonId(data.data.bookNum);
          common_1.common.setMaxPageNum(data.data.maxPage);
        }
        cc.log(common_1.common.getLessonId());
        this.init();
      };
      sentence.prototype.init = function() {
        var page_num = common_1.common.getCurPageNum();
        -1 == this.NeedPlayNums[common_1.common.getLessonId()].indexOf(page_num) ? this.node.opacity = 0 : this.node.opacity = 255;
        this.refreshWordNode(page_num);
        this.playEffectSentences();
      };
      sentence.prototype.refreshWordNode = function(num) {
        var s = pageData_1.default.getSentenceData(num);
        cc.log(" n ==== " + s);
        if (!s) return;
        this.removeFromParent();
        for (var i = 0; i < s.length; i++) {
          var node = this.arr_word_Nodes[i];
          if (!node) {
            var template = cc.find("template", this.wordLayout);
            node = cc.instantiate(template);
            this.arr_word_Nodes.push(node);
          }
          node.color = cc.Color.BLACK;
          node.active = true;
          var l = node.getComponent(cc.Label);
          l.string = s[i];
          this.wordLayout.addChild(node);
        }
      };
      sentence.prototype.voicesEffect = function() {
        var _this = this;
        var voicesTime = pageData_1.default.getVoiceTotalTime(common_1.common.getCurPageNum());
        var length = this.arr_word_Nodes.length;
        var itemTime = voicesTime / length;
        var _loop_1 = function(i) {
          var delayTime = i * itemTime;
          this_1.scheduleOnce(function() {
            for (var j = 0; j < _this.arr_word_Nodes.length; j++) {
              var element = _this.arr_word_Nodes[j];
              element.color = i === j ? new cc.Color(33, 193, 124, 255) : cc.Color.BLACK;
            }
          }, delayTime);
        };
        var this_1 = this;
        for (var i = 0; i < length + 1; i++) _loop_1(i);
      };
      sentence.prototype.voiceSingleEffect = function(_id) {
        var _this = this;
        var voiceArr = pageData_1.default.getVoiceTimes(common_1.common.getCurPageNum());
        var voiceTime = voiceArr[_id];
        if (!voiceTime) {
          cc.log("\u58f0\u97f3\u65f6\u957f\u83b7\u53d6\u5931\u8d25--");
          return;
        }
        this.unscheduleAllCallbacks();
        var _loop_2 = function(i) {
          var delayTime = i * voiceTime;
          this_2.scheduleOnce(function() {
            for (var i_1 = 0; i_1 < _this.arr_word_Nodes.length; i_1++) {
              var element = _this.arr_word_Nodes[i_1];
              element.color = cc.Color.BLACK;
            }
            _this.arr_word_Nodes[_id].color = 0 === i ? new cc.Color(33, 193, 124, 255) : cc.Color.BLACK;
          }, delayTime);
        };
        var this_2 = this;
        for (var i = 0; i < 2; i++) _loop_2(i);
      };
      sentence.prototype.playEffect = function(_index) {
        var page = common_1.common.getCurPageNum();
        var url = "P" + page + "/word_" + _index;
        this.voiceSingleEffect(_index);
      };
      sentence.prototype.playEffectSentences = function() {
        var _this = this;
        var n = common_1.common.getCurPageNum();
        if (-1 == this.NeedPlayNums[common_1.common.getLessonId()].indexOf(n)) {
          n == common_1.common.getMaxPageNum() ? this.scheduleOnce(function() {
            kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE);
          }, 4) : this.scheduleOnce(function() {
            common_1.common.webframe.trigger("auto_page_turn");
          }, 4);
          return;
        }
        cc.log("\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\u5f00\u59cb\u64ad\u653e\u53e5\u5b50");
        this.btnPlay.getComponent(cc.Animation).play();
        this.btnPlay.getComponent(cc.Button).interactable = false;
        var page = common_1.common.getCurPageNum();
        var url = "audios/P" + page + "/sentences";
        var name = common_1.common.getBundlePath();
        if (-1 != this.sentenceId) {
          cc.audioEngine.stop(this.sentenceId);
          this.sentenceId = -1;
        }
        kit_1.kit.manager.Audio.playEffect(name, url, function() {
          if (cc.isValid(_this.node)) {
            cc.log("\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\u53e5\u5b50\u64ad\u653e\u5b8c\u6bd5----");
            _this.is_touch = false;
            _this.btnPlay.getComponent(cc.Button).interactable = true;
            _this.btnPlay.getComponent(cc.Animation).play("voice", 0);
            _this.btnPlay.getComponent(cc.Animation).sample("voice");
            _this.btnPlay.getComponent(cc.Animation).stop();
            n == common_1.common.getMaxPageNum() ? _this.scheduleOnce(function() {
              kit_1.kit.manager.Event.emit(kit_1.kit.consts.Event.LIFE_CYCLE_COMPLETE);
            }, 1) : _this.scheduleOnce(function() {
              common_1.common.webframe.trigger("auto_page_turn");
            }, 1);
          }
        });
      };
      sentence.prototype.bookHideCall = function() {};
      sentence.prototype.onPlayClick = function() {
        this.is_touch = false;
        this.playEffectSentences();
      };
      sentence.prototype.removeFromParent = function() {
        for (var i = 0; i < this.arr_word_Nodes.length; i++) {
          var element = this.arr_word_Nodes[i];
          element.removeFromParent();
        }
        this.arr_word_Nodes.length = 0;
      };
      sentence.prototype.changePageHandle = function() {
        var page_num = common_1.common.getCurPageNum();
        -1 == this.NeedPlayNums[common_1.common.getLessonId()].indexOf(page_num) ? this.node.opacity = 0 : this.node.opacity = 255;
        this.refreshWordNode(page_num);
        kit_1.kit.manager.Audio.stopEffect();
        this.unscheduleAllCallbacks();
        this.is_touch = true;
        this.scheduleOnce(this.playEffectSentences, 1);
      };
      sentence.prototype.userTurnPage = function() {
        this.unscheduleAllCallbacks();
        kit_1.kit.manager.Audio.stopEffect();
        this.btnPlay.getComponent(cc.Button).interactable = true;
        this.btnPlay.getComponent(cc.Animation).play("voice", 0);
        this.btnPlay.getComponent(cc.Animation).sample("voice");
        this.btnPlay.getComponent(cc.Animation).stop();
      };
      sentence.prototype.addEventListener = function() {
        common_1.common.webframe.listen(CConst_1.CConst.PAGE_CHANGE, this.changePageHandle, this);
        common_1.common.webframe.listen(CConst_1.CConst.WORD_BOOK_HIDE, this.bookHideCall, this);
        common_1.common.webframe.listen("user_touch_turn", this.userTurnPage, this);
      };
      sentence.prototype.removeEventListener = function() {
        common_1.common.webframe.ignore(CConst_1.CConst.PAGE_CHANGE, this.changePageHandle, this);
        common_1.common.webframe.ignore(CConst_1.CConst.WORD_BOOK_HIDE, this.bookHideCall, this);
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.changeDate, this);
        common_1.common.webframe.ignore("user_touch_turn", this.userTurnPage, this);
      };
      sentence.prototype.onDisable = function() {
        kit_1.kit.manager.Event.off(kit_1.kit.consts.Event.LIFE_CYCLE_PARAMS, this.changeDate, this);
        this.removeEventListener();
        this.unscheduleAllCallbacks();
        this.sentenceId = -1;
      };
      __decorate([ property({
        type: cc.Node,
        displayName: "\u53e5\u5b50\u5e03\u5c40"
      }) ], sentence.prototype, "wordLayout", void 0);
      __decorate([ property(cc.Node) ], sentence.prototype, "btnPlay", void 0);
      sentence = __decorate([ ccclass ], sentence);
      return sentence;
    }(cc.Component);
    exports.default = sentence;
    cc._RF.pop();
  }, {
    "../../../kit/kit": void 0,
    "./common/common": "common",
    "./config/CConst": "CConst",
    "./pageData": "pageData"
  } ],
  "verlet-assembler": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1836aBqBwNJS4Bqqs+WHwuq", "verlet-assembler");
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
    var page_effect_assembler_base_1 = require("./page-effect-assembler-base");
    var gfx = cc["gfx"];
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
    }(page_effect_assembler_base_1.default);
    exports.default = VerletAssembler;
    cc._RF.pop();
  }, {
    "./page-effect-assembler-base": "page-effect-assembler-base"
  } ],
  "verlet-render": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50dbcjXYhpDxpAmkQwp0/H6", "verlet-render");
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
    var verlet_assembler_1 = require("./verlet-assembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PagePoint = function() {
      function PagePoint(x, y) {
        this.oldPos = this.newPos = cc.v2(x, y);
      }
      return PagePoint;
    }();
    var VerletRender = function(_super) {
      __extends(VerletRender, _super);
      function VerletRender() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.textureList = [];
        _this.PagetextureList = [];
        _this.defualtPages = [];
        _this.pointsCount = 30;
        _this.constraintTimes = 100;
        _this.damping = .1;
        _this.gravity = 0;
        _this._initedMaterial = false;
        _this._pointList = [];
        _this._angle = 0;
        _this.pageNow = 0;
        return _this;
      }
      VerletRender.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        this.initPointList();
        this.draw();
      };
      VerletRender.prototype._resetAssembler = function() {
        var assembler = this["_assembler"] = new verlet_assembler_1.default();
        assembler.init(this);
      };
      VerletRender.prototype.fixScreen = function() {
        console.log("fixscreen");
        var left = this.defualtPages[0].node;
        var right = this.defualtPages[1].node;
        var vwidth = left.parent.width;
        var vheight = left.parent.height;
        left.width = vwidth / 2;
        left.height = vheight;
        right.width = vwidth / 2;
        right.height = vheight;
        this.node.width = left.width;
        this.node.height = left.height;
        this.node.x = left.width / 2;
      };
      VerletRender.prototype._changePage = function(page, type) {
        if (this.pageNow == page) return;
        this.pageNow = page;
        if (1 == type) {
          var n = 2 * page;
          this.textureList[0] = this.PagetextureList[n - 1]["_texture"];
          this.textureList[1] = this.PagetextureList[n]["_texture"];
          this.defualtPages[0].spriteFrame = this.PagetextureList[n - 2];
          this.defualtPages[1].spriteFrame = this.PagetextureList[n + 1];
          this._updateMaterial();
          this.updateAngle(0);
        } else {
          var n = 2 * page;
          this.textureList[0] = this.PagetextureList[n - 3]["_texture"];
          this.textureList[1] = this.PagetextureList[n - 2]["_texture"];
          this.defualtPages[0].spriteFrame = this.PagetextureList[n - 4];
          this.defualtPages[1].spriteFrame = this.PagetextureList[n - 1];
          this._updateMaterial();
          this.updateAngle(180);
        }
      };
      VerletRender.prototype._updateMaterial = function() {
        var material = this.getMaterial(0);
        if (material) {
          material.define("CC_USE_MODEL", 1);
          if (2 === this.textureList.length) {
            material.setProperty("texture0", this.textureList[0]);
            material.setProperty("texture1", this.textureList[1]);
          }
          this.fixScreen();
        }
      };
      VerletRender.prototype.updateMaterial = function() {
        if (2 === this.textureList.length) {
          this._updateMaterial();
          this._initedMaterial = true;
          return;
        }
      };
      VerletRender.prototype.updateAngle = function(angle) {
        this._angle = angle;
      };
      VerletRender.prototype.getPointList = function() {
        var pointList = [];
        for (var _i = 0, _a = this._pointList; _i < _a.length; _i++) {
          var point = _a[_i];
          pointList.push(new cc.Vec2(point.newPos.x, point.newPos.y));
        }
        return pointList;
      };
      VerletRender.prototype.initPointList = function() {
        for (var i = 0; i < this.pointsCount; ++i) {
          var posX = i / (this.pointsCount - 1) * this.node.width;
          this._pointList.push(new PagePoint(posX, 0));
        }
      };
      VerletRender.prototype.update = function() {
        this.simulate();
        this.applyConstraint();
        this.draw();
      };
      VerletRender.prototype.simulate = function() {
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
      VerletRender.prototype._updateEndPos = function(endPos) {
        var tailPoint = this._pointList[this.pointsCount - 1];
        tailPoint.newPos = new cc.Vec2(endPos.x, endPos.y);
      };
      VerletRender.prototype._getEndPos = function() {
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
      VerletRender.prototype.applyConstraint = function() {
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
            if (distance < normalDistance) fixDirection = delatPos.normalize().negate(); else {
              if (!(distance > normalDistance)) continue;
              fixDirection = delatPos.normalize();
            }
            var fixLen = Math.abs(distance - normalDistance);
            if (1 == i) {
              var fixVector = fixDirection.mul(fixLen);
              secondPoint.newPos.subSelf(fixVector);
            } else {
              var fixHalfVector = fixDirection.mul(.5 * fixLen);
              firstPoint.newPos.addSelf(fixHalfVector);
              secondPoint.newPos.subSelf(fixHalfVector);
            }
          }
        }
      };
      VerletRender.prototype.draw = function() {
        this._initedMaterial || this.updateMaterial();
        this["setVertsDirty"]();
      };
      __decorate([ property({
        type: [ cc.Texture2D ],
        displayName: "\u7eb9\u7406"
      }) ], VerletRender.prototype, "textureList", void 0);
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        displayName: "\u7ed8\u672c\u7eb9\u7406"
      }) ], VerletRender.prototype, "PagetextureList", void 0);
      __decorate([ property({
        type: [ cc.Sprite ],
        displayName: "\u5de6\u53f3\u5e95\u56fe"
      }) ], VerletRender.prototype, "defualtPages", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u6761\u8fb9\u4e0a\u7684\u9876\u70b9\u6570\u91cf"
      }) ], VerletRender.prototype, "pointsCount", void 0);
      __decorate([ property({
        displayName: "\u7ea0\u6b63\u6b21\u6570"
      }) ], VerletRender.prototype, "constraintTimes", void 0);
      __decorate([ property({
        displayName: "\u901f\u5ea6\u8870\u51cf\u7cfb\u6570"
      }) ], VerletRender.prototype, "damping", void 0);
      __decorate([ property({
        displayName: "\u91cd\u529b"
      }) ], VerletRender.prototype, "gravity", void 0);
      VerletRender = __decorate([ ccclass ], VerletRender);
      return VerletRender;
    }(cc.RenderComponent);
    exports.default = VerletRender;
    cc._RF.pop();
  }, {
    "./verlet-assembler": "verlet-assembler"
  } ]
}, {}, [ "Csentence", "bezier-assembler", "bezier-render", "Tigo", "Tools", "common", "notifier_center", "CConst", "node_config", "main", "page-effect-assembler-base", "page", "pageData", "pageNode", "sentence", "verlet-assembler", "verlet-render" ]);