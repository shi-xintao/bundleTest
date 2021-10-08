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
  firstPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07488jmeipIGa1FhgIgfWIi", "firstPage");
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
    var event_1 = require("../../../Script/config/event");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FirstPage = function(_super) {
      __extends(FirstPage, _super);
      function FirstPage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logoSp = null;
        _this.bgm = null;
        return _this;
      }
      FirstPage.prototype.start = function() {
        var _this = this;
        kit_1.kit.system.platform.adapter.onGameReady();
        this.logoSp.setCompleteListener(function(event) {
          cc.tween(_this.logoSp.node).delay(1).to(.6, {
            opacity: 0
          }).call(function() {
            _this.onStartLearning();
          }).start();
        });
      };
      FirstPage.prototype.onStartLearning = function() {
        kit_1.kit.manager.Event.emit(event_1.STATE_TO_HALL);
      };
      FirstPage.prototype.onLogin = function() {};
      __decorate([ property(sp.Skeleton) ], FirstPage.prototype, "logoSp", void 0);
      __decorate([ property(cc.AudioSource) ], FirstPage.prototype, "bgm", void 0);
      FirstPage = __decorate([ ccclass ], FirstPage);
      return FirstPage;
    }(cc.Component);
    exports.default = FirstPage;
    cc._RF.pop();
  }, {
    "../../../Script/config/event": void 0,
    "../../../kit/kit": void 0
  } ]
}, {}, [ "firstPage" ]);