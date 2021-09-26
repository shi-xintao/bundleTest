window.__require=function t(e,o,n){function i(a,c){if(!o[a]){if(!e[a]){var s=a.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!c&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return i(e[a][1][t]||t)},l,l.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({box:[function(t,e,o){"use strict";cc._RF.push(e,"d5749LG4ZVEOby5uzLaGhvM","box");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=t("./comp"),c=t("./redSantaClaus"),s=cc._decorator,u=s.ccclass,l=s.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mainNode=null,e.objNode=null,e.endBoxNode=null,e.yanSk=null,e.objectIndex=0,e.objectTypeArr=[],e.objPosition=[cc.v2(-60,0),cc.v2(40,0)],e}return i(e,t),e.prototype.start=function(){},e.prototype.checkBox=function(t){return!!this.checkCollision(t)&&this.checkPutIn(t)},e.prototype.checkPutIn=function(t){var e=t.name.substring(0,t.name.length-1);return!this.objectTypeArr.includes(e)&&(this.objectTypeArr.push(e),!0)},e.prototype.checkCollision=function(t){var e=this.node.getBoundingBoxToWorld(),o=t.getBoundingBoxToWorld();return!!e.intersects(o)},e.prototype.putInBox=function(t){t.parent=this.objNode,"apple"===t.name.substring(0,t.name.length-1)?t.setPosition(this.objPosition[0]):t.setPosition(this.objPosition[1]),this.checkBoxEnd()},e.prototype.checkBoxEnd=function(){var t=this;this.objectTypeArr.length>=2&&(this.yanSk.node.active=!0,this.yanSk.node.setPosition(this.node.getPosition()),a.playSpineAnimation(this.yanSk,"animation").then(function(){t.yanSk.node.active=!1}),this.endBoxNode.active=!0,this.mainNode.getComponent(c.default).nextGameLevel())},r([l(cc.Node)],e.prototype,"mainNode",void 0),r([l(cc.Node)],e.prototype,"objNode",void 0),r([l(cc.Node)],e.prototype,"endBoxNode",void 0),r([l(sp.Skeleton)],e.prototype,"yanSk",void 0),r([u],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./comp":"comp","./redSantaClaus":"redSantaClaus"}],comp:[function(t,e,o){"use strict";cc._RF.push(e,"47921YtQoxP053zZ6yW36x/","comp"),Object.defineProperty(o,"__esModule",{value:!0}),o.loadSpriteFrame=o.playSpineAnimation=void 0,o.playSpineAnimation=function(t,e,o,n){if(void 0===o&&(o=!1),void 0===n&&(n=0),!o)return new Promise(function(i){var r=t.setAnimation(n,e,o);t.setTrackCompleteListener(r,function(){i(null)})});Promise.resolve().then(function(){t.setAnimation(n,e,o)})},o.loadSpriteFrame=function(t){return new Promise(function(e){cc.resources.load(t,cc.SpriteFrame,function(t,o){t?console.log(t,"SpriteFrame \u52a0\u8f7d\u5931\u8d25===============>>"):e(o)})})},cc._RF.pop()},{}],moveItem:[function(t,e,o){"use strict";cc._RF.push(e,"26be69cd0lDpqtNkrl1oIPn","moveItem");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{s(n.next(t))}catch(e){r(e)}}function c(t){try{s(n.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,c)}s((n=n.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return s([t,e])}}function s(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var s=t("../../../kit/system/audio/AudioManager"),u=t("./box"),l=t("./role"),d=cc._decorator,p=d.ccclass,h=d.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.boxNode=null,e.roleNode=null,e.mainNode=null,e.MUSIC_PATH="audio/",e.BUNDLE_NAME="redSantaClaus",e.AUDIO_NAME="red",e.AUDIO_ERROR="game_error",e.originPos=null,e.mainComp=null,e}return i(e,t),e.prototype.start=function(){this.onClick()},e.prototype.onClick=function(){var t=cc.Node.EventType,e=t.TOUCH_START,o=t.TOUCH_MOVE,n=t.TOUCH_END,i=t.TOUCH_CANCEL;this.node.on(e,this.touchStart,this),this.node.on(o,this.touchMove,this),this.node.on(n,this.touchEnd,this),this.node.on(i,this.touchCancel,this)},e.prototype.touchStart=function(){this.originPos=this.node.getPosition()},e.prototype.touchMove=function(t){this.node.x+=t.getDelta().x,this.node.y+=t.getDelta().y},e.prototype.touchEnd=function(){this.checkMoveObj()?(this.cancel(),this.playRight()):(this.playWrong(),this.node.setPosition(this.originPos))},e.prototype.playWrong=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return s.default.playEffect(this.BUNDLE_NAME,""+this.MUSIC_PATH+this.AUDIO_ERROR),[4,this.roleNode.getComponent(l.default).palyThinkAnimation()];case 1:return t.sent(),this.roleNode.getComponent(l.default).palyIdleAnimation(),[2]}})})},e.prototype.playRight=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return s.default.playEffect(this.BUNDLE_NAME,""+this.MUSIC_PATH+this.AUDIO_NAME),[4,this.roleNode.getComponent(l.default).palyHappyAnimation()];case 1:return t.sent(),this.roleNode.getComponent(l.default).palyIdleAnimation(),[2]}})})},e.prototype.touchCancel=function(){this.node.setPosition(this.originPos)},e.prototype.checkMoveObj=function(){var t=this,e=!1;return this.boxNode.children.forEach(function(o){o.getComponent(u.default).checkBox(t.node)&&!e&&(e=!0,o.getComponent(u.default).putInBox(t.node))}),e},e.prototype.playWrongAni=function(){var t=this,e=this.node.getComponent(cc.Animation);e.play(),e.on("finished",function(){t.node.setPosition(t.originPos)},this)},e.prototype.cancel=function(){var t=cc.Node.EventType,e=t.TOUCH_START,o=t.TOUCH_MOVE,n=t.TOUCH_END,i=t.TOUCH_CANCEL;this.node.off(e,this.touchStart,this),this.node.off(o,this.touchMove,this),this.node.off(n,this.touchEnd,this),this.node.off(i,this.touchCancel,this)},r([h(cc.Node)],e.prototype,"boxNode",void 0),r([h(cc.Node)],e.prototype,"roleNode",void 0),r([h(cc.Node)],e.prototype,"mainNode",void 0),r([p],e)}(cc.Component);o.default=f,cc._RF.pop()},{"../../../kit/system/audio/AudioManager":void 0,"./box":"box","./role":"role"}],redSantaClaus:[function(t,e,o){"use strict";cc._RF.push(e,"882f6LDd2JEq6jSBSgU0i3h","redSantaClaus");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{s(n.next(t))}catch(e){r(e)}}function c(t){try{s(n.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,c)}s((n=n.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return s([t,e])}}function s(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var s,u=t("../../../kit/system/audio/AudioManager"),l=t("../../../kit/system/event/EventSystem"),d=t("../../../kit/events/events"),p=t("../../../kit/system/timer/TimerSystem"),h=t("./role"),f=t("../../../common/hand/Hand"),y=t("../../../common/scripts/ChapterGameComponent"),m=t("./wardrobe");(function(t){t.YELLOW="luoshui"})(s||(s={}));var v=cc._decorator,g=v.ccclass,_=v.property,b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.roleNode=null,e.moveNode=null,e.bgNode=null,e.wardrobeNode=null,e.blockInputNode=null,e.handPrefab=null,e.hand=null,e.gameHandCount=0,e.gameHandFunc=null,e.gameFirstCount=0,e.gameTotal=5,e.gameFirstTotal=3,e.gameIndex=0,e.gameWordData=["\u7ea2\u8272","\u7ea2\u8272","\u7ea2\u8272","\u7ea2\u8272","\u7ea2\u8272","\u7ea2\u8272"],e.gameWordAudio=["red","red","red","red","red","red"],e.startRecordFunc=null,e.recordAudio="red",e.MUSIC_PATH="audio/",e.BUNDLE_NAME="redSantaClaus",e}return i(e,t),e.prototype.onLoad=function(){t.prototype.onLoad.call(this),l.default.on(d.FOLLOW_MODULE_TO_CLIENT,this.recordResult,this)},e.prototype.start=function(){l.default.on(d.LIFE_CYCLE_BLOCK,this.block,this),l.default.on(d.LIFE_CYCLE_UNBLOCK,this.onBlock,this),this.initAllNode(),this.showBlockNode(),this.startRunGame(),this.setBg()},e.prototype.initData=function(){this.recordData={evaluatingType:1,evaluatingText:"",tryTimes:1,evaluationScore:30,recordTime:3},this.taskData={bundleName:"redSantaClaus",imgList:["res/task1","res/task2"]}},e.prototype.block=function(){},e.prototype.onBlock=function(){},e.prototype.onDestroy=function(){l.default.off(d.FOLLOW_MODULE_TO_CLIENT,this.recordResult,this),l.default.off(d.LIFE_CYCLE_BLOCK,this.block,this),l.default.off(d.LIFE_CYCLE_UNBLOCK,this.onBlock,this),cc.isValid(this.node)&&this.node.destroy()},e.prototype.initAllNode=function(){this.blockInputNode=this.node.getChildByName("blockInputNode");var t=cc.instantiate(this.handPrefab);t.active=!1,this.node.addChild(t),this.hand=t.getComponent(f.default),this.hand.onCompleted=this.onHandCompleted.bind(this)},e.prototype.onHandCompleted=function(){if(cc.log("\u624b\u52a8\u753b\u56de\u8c03~~"),this.gameHandCount+=1,this.gameHandCount>=2)return this.gameHandCount=0,this.hand.hide(),this.gameHandFunc=null,cc.log("\u53d6\u6d88\u5f15\u5bfc~~"),void this.hideBlockNode();this.gameHandFunc&&this.gameHandFunc()},e.prototype.onClickBtn=function(){},e.prototype.showHand=function(t){this.hand.setTargetNode(t,this.moveNode),this.hand.node.active=!0},e.prototype.startRunGame=function(){return a(this,void 0,void 0,function(){var t=this;return c(this,function(e){switch(e.label){case 0:return this.roleNode.getComponent(h.default).initRole(),[4,this.roleNode.getComponent(h.default).startWalkInScene()];case 1:return e.sent(),this.gameHandFunc=function(){t.showHand(t.moveNode.children[0]),t.hand.playSwipeRight(),cc.log("\u5f15\u5bfc~~")},p.default.instance.doFrameOnce(1,function(){t.showTask(0,!1,function(){},function(){},function(){t.gameHandFunc()})}),[2]}})})},e.prototype.showBlockNode=function(){this.blockInputNode.active=!0},e.prototype.hideBlockNode=function(){this.blockInputNode.active=!1},e.prototype.nextGameLevel=function(){return a(this,void 0,void 0,function(){var t=this;return c(this,function(){return this.gameIndex++,this.gameFirstCount++,cc.log("this.gameIndex ===",this.gameIndex),this.gameIndex>=this.gameTotal?(cc.log("\u6e38\u620f\u7ed3\u675f~~"),this.showTask(1,!0,null,null,function(){t.roleNode.getComponent(h.default).gameEnd(),u.default.stopMusic(),l.default.emit(d.LIFE_CYCLE_COMPLETE)}),[2]):(cc.log("\u6e38\u620f\u7ee7\u7eed~~"),this.gameFirstCount===this.gameFirstTotal?(cc.log("\u7b2c\u4e00\u90e8\u5206\u6e38\u620f\u7ed3\u675f~~"),this.gameTaskCom.taskHideTime=2,this.scheduleOnce(function(){t.roleNode.getComponent(h.default).gameFirstEnd(function(){t.showTask(0,!0,null,null,function(){t.gameFirstEndFunc(),t.gameTaskCom.taskHideTime=4})})},1)):this.gameRunRecord(),[2])})})},e.prototype.gameFirstEndFunc=function(){return a(this,void 0,void 0,function(){var t=this;return c(this,function(e){switch(e.label){case 0:return this.roleNode.getChildByName("bag_on").active=!1,this.roleNode.getChildByName("bag_off").active=!1,this.roleNode.getComponent(h.default).palyWalkAnimation(),this.palyWardrobeMove(),[4,this.palyBgMove()];case 1:return e.sent(),[4,this.roleNode.getComponent(h.default).gameSecondStart()];case 2:return e.sent(),this.roleNode.getComponent(h.default).setBagPosition(),this.roleNode.getComponent(h.default).palyIdleAnimation(),this.showTask(1,!1,null,null,function(){t.gameRunRecord()}),[2]}})})},e.prototype.setBg=function(){var t=this.wardrobeNode.getChildByName("bg2");t.width=this.bgNode.children[0].width,t.height=this.bgNode.children[0].height,this.wardrobeNode.x=this.bgNode.children[0].width},e.prototype.palyWardrobeMove=function(){var t=this;return new Promise(function(e){cc.tween(t.wardrobeNode).by(3,{x:-t.bgNode.children[0].width}).call(function(){e()}).start()})},e.prototype.palyBgMove=function(){var t=this;return new Promise(function(e){cc.tween(t.bgNode).by(3,{x:-t.bgNode.children[0].width}).call(function(){e()}).start()})},e.prototype.showTask=function(t,e,o,n,i){var r={taskIndex:t,complete:e,callFunc1:function(){o&&o()},callFunc2:function(){n&&n()},callFunc3:function(){i&&i()}};this.gameTaskCom.showTaskList(r)},e.prototype.palyRightAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return cc.log("\u8ddf\u8bfb\u6b63\u786e~~",this.gameIndex),[4,this.roleNode.getComponent(h.default).recordRight(this.gameIndex-3)];case 1:return t.sent(),3!==this.gameIndex?[3,3]:[4,this.wardrobeNode.getComponent(m.default).playDoorAnimation()];case 2:return t.sent(),this.nextGameLevel(),[3,4];case 3:this.nextGameLevel(),t.label=4;case 4:return[2]}})})},e.prototype.palyWrongAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return cc.log("\u8ddf\u8bfb\u9519\u8bef~~"),[4,this.roleNode.getComponent(h.default).recordWrong(this.gameIndex-3)];case 1:return t.sent(),this.gameRunRecord(),[2]}})})},e.prototype.palyBGM=function(){},e.prototype.palyAudioByIdx=function(t){Number(t)<=2&&u.default.playEffect(this.BUNDLE_NAME,""+this.MUSIC_PATH+s.YELLOW)},e.prototype.gameRunRecord=function(){var t=this;cc.log("gameRunRecord~~~"),this.scheduleOnce(function(){var e={evaluatingType:1,evaluatingText:t.gameWordData[t.gameIndex],tryTimes:1,evaluationScore:30,recordTime:3};l.default.emit(d.FOLLOW_CLIENT_TO_MODULE,{eventName:"initComponent",extra:e}),l.default.emit(d.FOLLOW_CLIENT_TO_MODULE,{eventName:"startRecord"})},2.5),u.default.playEffect(this.BUNDLE_NAME,""+this.MUSIC_PATH+this.recordAudio)},e.prototype.recordResult=function(t){console.log("recordResult",t.data),"ResultCb"==t.data.eventName&&(t.data.success?this.palyRightAnimation():this.palyWrongAnimation())},r([_(cc.Node)],e.prototype,"roleNode",void 0),r([_(cc.Node)],e.prototype,"moveNode",void 0),r([_(cc.Node)],e.prototype,"bgNode",void 0),r([_(cc.Node)],e.prototype,"wardrobeNode",void 0),r([_(cc.Node)],e.prototype,"blockInputNode",void 0),r([_({type:cc.Prefab,displayName:"\u5f15\u5bfc\u624b"})],e.prototype,"handPrefab",void 0),r([g],e)}(y.default);o.default=b,cc._RF.pop()},{"../../../common/hand/Hand":void 0,"../../../common/scripts/ChapterGameComponent":void 0,"../../../kit/events/events":void 0,"../../../kit/system/audio/AudioManager":void 0,"../../../kit/system/event/EventSystem":void 0,"../../../kit/system/timer/TimerSystem":void 0,"./role":"role","./wardrobe":"wardrobe"}],role:[function(t,e,o){"use strict";cc._RF.push(e,"42130GKOFlG4YSTSSuch/Kl","role");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{s(n.next(t))}catch(e){r(e)}}function c(t){try{s(n.throw(t))}catch(e){r(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,c)}s((n=n.apply(t,e||[])).next())})},c=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(e){return s([t,e])}}function s(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(c){r=[6,c],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var s,u,l=t("./comp"),d=t("./wardrobe"),p=cc._decorator,h=p.ccclass,f=p.property;(function(t){t.SDZ_IDLE="SDZ-daiji",t.SDZ_DISLIKE="SDZ-xiangqi2",t.SDZ_WALK="SDZ-zou",t.XZ_THINK="XZ-sikao",t.IDLE="daiji",t.HAPPY="kaixin",t.THINK="sikao",t.DISLIKE="xianqi",t.WALK="zoulu"})(s||(s={})),function(t){t.DEFAULT="default",t.KC="KC",t.QY_SY="QY-SY",t.XZ_SY="XZ-SY",t.SDZ_SY="SDZ-SY",t.SDZ_SY_QK="SDZ-SY-QK",t.SDZ_SY_XK="SDZ-SY-XK",t.SDZ="SDZ"}(u||(u={}));var y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sk=null,e.boxNode=null,e.wardrobeNode=null,e.yanSk=null,e.moveLen=450,e.curTime=3,e}return i(e,t),e.prototype.start=function(){},e.prototype.palyIdleAnimation=function(){l.playSpineAnimation(this.sk,s.IDLE,!0)},e.prototype.palyWalkAnimation=function(){l.playSpineAnimation(this.sk,s.WALK,!0)},e.prototype.palyHappyAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,l.playSpineAnimation(this.sk,s.HAPPY)];case 1:return t.sent(),[2]}})})},e.prototype.palyDislikeAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,l.playSpineAnimation(this.sk,s.DISLIKE)];case 1:return t.sent(),[2]}})})},e.prototype.palyThinkAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,l.playSpineAnimation(this.sk,s.THINK)];case 1:return t.sent(),[2]}})})},e.prototype.palyEndAnimation=function(){return a(this,void 0,void 0,function(){return c(this,function(){return this.sk.node.scaleX=-1,this.node.getChildByName("bag_off").active=!1,l.playSpineAnimation(this.sk,s.SDZ_WALK,!0),[2]})})},e.prototype.initRole=function(){var t=cc.view.getFrameSize();cc.log(t),this.node.x=-t.width-260,this.node.y=50-t.height,this.moveLen=250-t.width,cc.log(this.node.x,this.node.y,this.moveLen)},e.prototype.startWalkInScene=function(){var t=this;return new Promise(function(e){t.palyWalkAnimation(),cc.tween(t.node).to(2,{x:t.moveLen}).call(function(){return a(t,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.palyDislikeAnimation()];case 1:return t.sent(),this.palyIdleAnimation(),e(),[2]}})})}).start()})},e.prototype.gameFirstEnd=function(t){var e=this;this.node.getChildByName("bag_on").active=!0;var o=this.node.getPosition();this.boxNode.children.forEach(function(t){cc.tween(t).to(.6,{x:o.x+185,y:o.y+400,scale:.4}).to(.4,{x:o.x+185,y:o.y+210,scale:0}).start()}),this.scheduleOnce(function(){e.yanSk.node.active=!0,e.yanSk.node.setPosition(e.node.getPosition().x+200,e.node.getPosition().y+200),l.playSpineAnimation(e.yanSk,"animation").then(function(){e.yanSk.node.active=!1,t&&t()})},1.5),this.scheduleOnce(function(){e.node.getChildByName("bag_on").active=!1,e.node.getChildByName("bag_off").active=!0},1.7)},e.prototype.setBagPosition=function(){this.node.getChildByName("bag_on").active=!1,this.node.getChildByName("bag_off").active=!0;var t=this.node.getChildByName("bag_off").getPosition();this.node.getChildByName("bag_off").setPosition(-t.x-10,t.y-30),this.node.getChildByName("bag_off").scale=.8},e.prototype.gameEnd=function(){var t=this;return new Promise(function(e){t.palyEndAnimation();var o=cc.view.getFrameSize();cc.tween(t.node).to(2,{x:-o.width-600}).call(function(){t.palyIdleAnimation(),e()}).start()})},e.prototype.gameSecondStart=function(){var t=this;return new Promise(function(e){cc.tween(t.node).by(.3,{x:150}).call(function(){e()}).start()})},e.prototype.recordRight=function(t){var e=this;return void 0===t&&(t=0),new Promise(function(o){var n=null;0===t?(n="sy1",e.sk.setSkin(u.SDZ_SY)):(n="kz1",e.sk.setSkin(u.SDZ)),e.wardrobeNode.getComponent(d.default).wardrobeWrong(t,n,!1),e.palyHappyAnimation().then(function(){o(),e.palyIdleAnimation()})})},e.prototype.recordWrong=function(t){var e=this;return void 0===t&&(t=0),new Promise(function(o){var n=null;0===t?Math.random()>.5?(e.sk.setSkin(u.QY_SY),n="sy3"):(e.sk.setSkin(u.XZ_SY),n="sy2"):Math.random()>.5?(n="kz2",e.sk.setSkin(u.SDZ_SY_XK)):(n="kz3",e.sk.setSkin(u.SDZ_SY_QK)),e.wardrobeNode.getComponent(d.default).wardrobeWrong(t,n,!1),e.palyDislikeAnimation().then(function(){o(),0===t?e.sk.setSkin(u.KC):e.sk.setSkin(u.SDZ_SY),e.palyIdleAnimation(),e.wardrobeNode.getComponent(d.default).wardrobeWrong(t,n,!0)})})},r([f(sp.Skeleton)],e.prototype,"sk",void 0),r([f(cc.Node)],e.prototype,"boxNode",void 0),r([f(cc.Node)],e.prototype,"wardrobeNode",void 0),r([f(sp.Skeleton)],e.prototype,"yanSk",void 0),r([h],e)}(cc.Component);o.default=y,cc._RF.pop()},{"./comp":"comp","./wardrobe":"wardrobe"}],wardrobe:[function(t,e,o){"use strict";cc._RF.push(e,"798e4JHYWlOm5IdjsSil2DH","wardrobe");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,c=a.ccclass,s=a.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.syNode=null,e.kzNode=null,e.doorNode=null,e}return i(e,t),e.prototype.playDoorAnimation=function(){var t=this;return new Promise(function(e){var o=t.doorNode.getPosition();cc.tween(t.doorNode).to(1,{x:-o.x}).call(function(){e(),t.syNode.active=!1}).start()})},e.prototype.wardrobeRight=function(t){void 0===t&&(t=0),0===t?this.syNode.getChildByName("sy1").active=!1:this.kzNode.getChildByName("kz1").active=!1},e.prototype.wardrobeWrong=function(t,e,o){0===t?this.syNode.getChildByName(e).active=o:this.kzNode.getChildByName(e).active=o},e.prototype.start=function(){},r([s(cc.Node)],e.prototype,"syNode",void 0),r([s(cc.Node)],e.prototype,"kzNode",void 0),r([s(cc.Node)],e.prototype,"doorNode",void 0),r([c],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["box","comp","moveItem","redSantaClaus","role","wardrobe"]);