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
  ReportData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "015a3rVVIRN75r9xaCVX38y", "ReportData");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_1 = require("../../../Script/config/config");
    var EncourageWallDataManager_1 = require("../../../Script/manager/EncourageWallDataManager");
    var lessonManager_1 = require("../../../Script/manager/lessonManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReportData = function() {
      function ReportData() {}
      ReportData_1 = ReportData;
      Object.defineProperty(ReportData, "instance", {
        get: function() {
          null == ReportData_1._instance && (ReportData_1._instance = new ReportData_1());
          return ReportData_1._instance;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReportData.prototype, "lessonListVo", {
        get: function() {
          var _lessonListVo = lessonManager_1.default.instance.getCurViewLessonData();
          return _lessonListVo;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReportData.prototype, "starCount", {
        get: function() {
          var count = 0;
          if (!this.lessonListVo) return 0;
          this.lessonListVo.chapters.find(function(item) {
            item.complete && count++;
          });
          return count;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReportData.prototype, "guideIndex", {
        get: function() {
          var index = -1;
          for (var i = 0; i < this.lessonListVo.chapters.length; i++) {
            if (-1 != index) return index;
            this.lessonListVo.chapters[i].complete || (index = i);
          }
          return index;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReportData.prototype, "encourageData", {
        get: function() {
          var lessonListVo = this.lessonListVo;
          return lessonListVo.rewardInfo;
        },
        enumerable: false,
        configurable: true
      });
      ReportData.prototype.showEncourage = function() {
        var encourageData = this.getEncourageInfo();
        var reportComplete = this.lessonListVo.report.isComplete;
        if (reportComplete) return false;
        if (-1 != this.guideIndex) return false;
        return true;
      };
      Object.defineProperty(ReportData.prototype, "gameInfo", {
        get: function() {
          var rewardInfo = this.lessonListVo.rewardInfo;
          var resInfo = {};
          config_1.GAME_LIST_CONFIG.find(function(item) {
            item.id == rewardInfo.gameId && (resInfo = item);
          });
          resInfo["params"] = {
            propId: rewardInfo.propId
          };
          cc.log("\u83b7\u53d6\u6e38\u620f\u4fe1\u606f", resInfo);
          return resInfo;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ReportData.prototype, "bookInfo", {
        get: function() {
          var rewardInfo = this.lessonListVo.rewardInfo;
          var resInfo = {};
          config_1.PICTURE_BOOK_LIST_CONFIG.find(function(item) {
            item.id == rewardInfo.gameId && (resInfo = item);
          });
          resInfo["params"] = {
            propId: rewardInfo.propId
          };
          cc.log("\u83b7\u53d6\u7ed8\u672c\u4fe1\u606f", resInfo);
          return resInfo;
        },
        enumerable: false,
        configurable: true
      });
      ReportData.prototype.reportFinish = function() {
        lessonManager_1.default.instance.setReportCompleteState();
      };
      ReportData.prototype.getEncourageInfo = function() {
        return EncourageWallDataManager_1.EncourageWallDataManager.instance.getEncourageDataById(this.lessonListVo.lessonId);
      };
      var ReportData_1;
      ReportData._instance = null;
      ReportData = ReportData_1 = __decorate([ ccclass ], ReportData);
      return ReportData;
    }();
    exports.default = ReportData;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/manager/EncourageWallDataManager": void 0,
    "../../../Script/manager/lessonManager": void 0
  } ],
  ReportEncourage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13411BHWW9ODLnZ6GgZXjt9", "ReportEncourage");
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
    var baseComponent_1 = require("../../components/baseComponent");
    var ReportData_1 = require("./ReportData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReportEncourage = function(_super) {
      __extends(ReportEncourage, _super);
      function ReportEncourage() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ReportEncourage.prototype.init = function(data) {
        var _this = this;
        this.ui.onClick("btn_item", this.onClickBtnList, this);
        if (!ReportData_1.default.instance.encourageData) {
          this.node.active = false;
          cc.log("\u6ca1\u6709\u6fc0\u52b1\u6570\u636e");
          return;
        }
        var type = ReportData_1.default.instance.encourageData.type;
        type == enum_1.REWARD_TYPE.pictureBook && kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_REPORT, "texture/pictureBook", kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
          var btnSprite = _this.ui.getComponent("btn_item", cc.Sprite);
          btnSprite.spriteFrame = res;
        });
        kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_REPORT, "texture/encourage/item/" + ReportData_1.default.instance.encourageData.iconUrl, kit_1.kit.manager.Resources.Type.Normal, cc.SpriteFrame, function(e, res) {
          var icon = _this.ui.getComponent("icon", cc.Sprite);
          icon.spriteFrame = res;
        });
        this.playPinTu();
      };
      Object.defineProperty(ReportEncourage.prototype, "pintuType", {
        get: function() {
          var lessonCount = ReportData_1.default.instance.lessonListVo.chapters.length;
          return lessonCount;
        },
        enumerable: false,
        configurable: true
      });
      ReportEncourage.prototype.onClickContent = function() {
        this.finish();
        ReportData_1.default.instance.reportFinish();
        this.ui.offClick("content");
      };
      ReportEncourage.prototype.onClickBtnList = function() {
        ReportData_1.default.instance.reportFinish();
        this.changeList();
      };
      ReportEncourage.prototype.playPinTu = function() {
        var _this = this;
        this.playSpine("fudai", "fudai2", true, function() {
          _this.playSpine("fudai", "fudai", true);
        }, 4 == this.pintuType ? 3 : 2);
        var itemNode = this.ui.getNode("item_node");
        itemNode.scale = 0;
        itemNode.angle = -150;
        var pintuAnim = 4 == this.pintuType ? 2 : 3;
        var spine = this.ui.getComponent("pintu", sp.Skeleton);
        spine.setAnimation(0, pintuAnim.toString(), false);
        cc.tween(itemNode).delay(1.5).call(function() {
          _this.ui.getNode("pintu").active = false;
          _this.ui.getNode("fudai").active = false;
          _this.ui.getNode("btn_item").active = true;
        }).call(function() {
          _this.ui.getNode("guang").active = false;
        }).to(.3, {
          scale: 1.3,
          angle: 0
        }).to(.2, {
          scale: 1
        }).call(function() {
          kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_REPORT, "audio/hecheng");
          var shaHua = _this.ui.getNode("sahua");
          shaHua.active = true;
          _this.playSpine("sahua", "animation", false, function() {
            shaHua.active = false;
          });
          _this.ui.onClick("content", _this.onClickContent, _this, null, "", "");
        }).start();
      };
      ReportEncourage.prototype.finish = function() {
        var _this = this;
        var xing = this.ui.getNode("xing");
        var type = ReportData_1.default.instance.encourageData.type;
        type == enum_1.REWARD_TYPE.pictureBook ? xing.scaleX = 1 : xing.scaleX = -1;
        var itemNode = this.ui.getNode("item_node");
        cc.tween(itemNode).to(.3, {
          scale: 0,
          angle: 160
        }).call(function() {
          _this.ui.getNode("bg").active = false;
          _this.ui.getNode("btn_item").active = false;
          _this.ui.getNode("xing").active = true;
          kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_REPORT, "audio/star");
          _this.playSpine("xing", "xing", false, function() {
            _this.node.active = false;
          });
        }).start();
      };
      ReportEncourage.prototype.changeList = function() {
        var gameData;
        switch (ReportData_1.default.instance.encourageData.type) {
         case enum_1.REWARD_TYPE.game:
         case enum_1.REWARD_TYPE.prop:
          gameData = ReportData_1.default.instance.gameInfo;
          kit_1.kit.manager.Event.emit(event_1.STATE_TO_GAME, gameData);
          break;

         case enum_1.REWARD_TYPE.pictureBook:
          gameData = ReportData_1.default.instance.bookInfo;
          kit_1.kit.manager.Event.emit(event_1.STATE_TO_PICTURE_BOOK, gameData);
        }
      };
      ReportEncourage.prototype.playSpine = function(node, animName, loop, finishCb, finishCount, nextName, nextLoop) {
        void 0 === finishCount && (finishCount = 1);
        var spinCmpt = this.ui.getComponent(node, sp.Skeleton);
        if (!spinCmpt) {
          cc.warn("playSpine:" + animName + ", sp.Skeleton null");
          return;
        }
        if ("" == animName) {
          cc.warn("playSpine:" + animName);
          return;
        }
        spinCmpt.setAnimation(0, animName, loop);
        spinCmpt.setCompleteListener(null);
        "fudai2" == animName && kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_REPORT, "audio/pintu");
        if (finishCb) {
          var count_1 = 0;
          spinCmpt.setCompleteListener(function() {
            if (spinCmpt.animation == animName) {
              count_1++;
              "fudai2" == animName && count_1 < finishCount && kit_1.kit.manager.Audio.playEffect(config_1.BUNDLE_REPORT, "audio/pintu");
              if (count_1 >= finishCount) {
                finishCb();
                nextName && "" != nextName && spinCmpt.setAnimation(0, nextName, nextLoop);
                spinCmpt.setCompleteListener(null);
              }
            }
          });
          return;
        }
        nextName && "" != nextName && spinCmpt.addAnimation(0, nextName, nextLoop);
      };
      ReportEncourage = __decorate([ ccclass ], ReportEncourage);
      return ReportEncourage;
    }(baseComponent_1.default);
    exports.default = ReportEncourage;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/config/enum": void 0,
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0,
    "../../components/baseComponent": void 0,
    "./ReportData": "ReportData"
  } ],
  adaptation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cfa7qoG+RFza2oUNvf7AVC", "adaptation");
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
    var Adaptation = function(_super) {
      __extends(Adaptation, _super);
      function Adaptation() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.adaptNode = [];
        return _this;
      }
      Adaptation.prototype.onLoad = function() {
        var _this = this;
        this.adaptNode.forEach(function(item) {
          return _this.adapta(item);
        });
      };
      Adaptation.prototype.adapta = function(node) {
        var widthScale = cc.winSize.width / 1334;
        node.width *= widthScale;
        node.height *= widthScale;
        var widget = node.getComponent(cc.Widget);
        widget && widget.updateAlignment();
      };
      __decorate([ property([ cc.Node ]) ], Adaptation.prototype, "adaptNode", void 0);
      Adaptation = __decorate([ ccclass ], Adaptation);
      return Adaptation;
    }(cc.Component);
    exports.default = Adaptation;
    cc._RF.pop();
  }, {} ],
  report: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e138IvpB9MZ4C7AHcC5Jss", "report");
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
    var baseComponent_1 = require("../../components/baseComponent");
    var ReportData_1 = require("./ReportData");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Report = function(_super) {
      __extends(Report, _super);
      function Report() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.starPrefab = null;
        _this.graySprite = null;
        _this.grayMat = null;
        _this.starRoot = null;
        _this.label_star = null;
        _this.hand_node = null;
        _this.starNodelist = [];
        _this.reportData = null;
        return _this;
      }
      Report.prototype.init = function(data) {
        var _this = this;
        this.reportData = ReportData_1.default.instance;
        this.starRoot = this.ui.getNode("stars_node");
        this.label_star = this.ui.getComponent("label_gotstar", cc.Label);
        this.hand_node = this.ui.getNode("hand");
        this.label_star.string = "You got " + this.reportData.starCount + " stars";
        this.ui.onClick("btn_story", this.onClickStory, this);
        this.ui.onClick("btn_game", this.onClickGame.bind(this), this);
        this.ui.onClick("btn_back", this.onBlackClick, this);
        this.refreshView();
        if (this.reportData.showEncourage()) {
          kit_1.kit.manager.resources.loadRes(config_1.BUNDLE_REPORT, "prefab/encouragePre", kit_1.kit.manager.Resources.Type.Normal, cc.Prefab, function(e, res) {
            var encourageNode = cc.instantiate(res);
            _this.node.addChild(encourageNode);
          });
          return;
        }
        this.scheduleOnce(function() {
          if (_this.reportData && -1 != _this.reportData.guideIndex) _this.guide(_this.reportData.guideIndex); else {
            var tempParm = _this.reportData.lessonListVo.lessonId + "report";
            var clickPicBook = kit_1.kit.util.LocalStorage.getBool(tempParm) || false;
            if (clickPicBook) return;
            var encourage = _this.reportData.getEncourageInfo();
            var node = encourage.type == enum_1.REWARD_TYPE.pictureBook ? _this.ui.getNode("btn_story") : _this.ui.getNode("btn_game");
            var worldPos = _this.node.convertToWorldSpaceAR(node.position);
            kit_1.kit.manager.Event.emit(event_1.SHOW_COMMON_HAND_GUILD, worldPos);
          }
        }, 1);
      };
      Report.prototype.refreshView = function() {
        if (-1 != this.reportData.guideIndex) {
          this.ui.getComponent("btn_story_bg", cc.Sprite).setMaterial(0, this.grayMat);
          this.ui.getComponent("btn_game", cc.Sprite).setMaterial(0, this.grayMat);
          this.ui.getComponent("btn_story", cc.Sprite).setMaterial(0, this.grayMat);
        }
        this.loadStar();
      };
      Report.prototype.onClickStar = function(index) {
        console.log("\u70b9\u51fb" + index);
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_LESSON, this.getLessonVo(index));
      };
      Report.prototype.onClickStory = function() {
        if (-1 != this.reportData.guideIndex) return;
        var tempParm = this.reportData.lessonListVo.lessonId + "report";
        kit_1.kit.util.LocalStorage.setBool(tempParm, true);
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_BOOK_LIST);
      };
      Report.prototype.onClickGame = function() {
        if (-1 != this.reportData.guideIndex) return;
        var tempParm = this.reportData.lessonListVo.lessonId + "report";
        kit_1.kit.util.LocalStorage.setBool(tempParm, true);
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_GAME_LIST);
      };
      Report.prototype.onBlackClick = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      Report.prototype.guide = function(index) {
        var starNode = this.starNodelist[index];
        if (!starNode) return;
        var wordPos = starNode.parent.convertToWorldSpaceAR(starNode.position);
        var nodePos = starNode.parent.convertToNodeSpaceAR(wordPos);
        this.hand_node.position = nodePos;
        this.hand_node.active = true;
        this.hand_node.x += 30;
        this.hand_node.y += 30;
      };
      Report.prototype.loadStar = function() {
        if (!this.reportData.lessonListVo) return;
        var lessonList = this.reportData.lessonListVo.chapters;
        console.log(lessonList);
        for (var i = 0; i < lessonList.length; i++) this.creatStarNode(i);
      };
      Report.prototype.creatStarNode = function(index) {
        var lessonV0 = this.getLessonVo(index);
        var starNode = cc.instantiate(this.starPrefab);
        lessonV0.complete || (starNode.getComponent(cc.Sprite).spriteFrame = this.graySprite);
        this.ui.onClick(starNode, this.onClickStar, this, index);
        this.starNodelist.push(starNode);
        this.starRoot.addChild(starNode);
      };
      Report.prototype.getLessonVo = function(index) {
        return this.reportData.lessonListVo.chapters[index];
      };
      __decorate([ property(cc.Prefab) ], Report.prototype, "starPrefab", void 0);
      __decorate([ property(cc.SpriteFrame) ], Report.prototype, "graySprite", void 0);
      __decorate([ property(cc.Material) ], Report.prototype, "grayMat", void 0);
      Report = __decorate([ ccclass ], Report);
      return Report;
    }(baseComponent_1.default);
    exports.default = Report;
    cc._RF.pop();
  }, {
    "../../../Script/config/config": void 0,
    "../../../Script/config/enum": void 0,
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0,
    "../../components/baseComponent": void 0,
    "./ReportData": "ReportData"
  } ]
}, {}, [ "ReportData", "ReportEncourage", "adaptation", "report" ]);