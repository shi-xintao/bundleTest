window.__require=function t(e,o,n){function i(a,s){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var l="function"==typeof __require&&__require;if(!s&&l)return l(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var p=o[a]={exports:{}};e[a][0].call(p.exports,function(t){return i(e[a][1][t]||t)},p,p.exports,t,e,o,n)}return o[a].exports}for(var r="function"==typeof __require&&__require,a=0;a<n.length;a++)i(n[a]);return i}({GameData:[function(t,e,o){"use strict";cc._RF.push(e,"8ac8cPDPYlJ/JwQzbg9KBxI","GameData"),Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this.node_path=[{nodePath:"game_one",questionNumber:4}],this.record_num="",this.totalStar_num=0,this.isFrist=!0}return Object.defineProperty(t,"getInstance",{get:function(){return this._Instance||(this._Instance=new t),this._Instance},enumerable:!1,configurable:!0}),t.prototype.getStarNum=function(){return this.totalStar_num},t.prototype.setStarNum=function(t){this.totalStar_num=Number(t)},t.prototype.addStarNum=function(t){this.totalStar_num+=t},t.prototype.setIsFirst=function(t){console.log("setIsFirst ================"+t),this.isFrist=t},t.prototype.getIsFirst=function(){return console.log("getIsFirst ================"+this.isFrist),this.isFrist},t.prototype.getNodePath=function(t){return this.node_path[t].nodePath?this.node_path[t].nodePath:this.node_path[0].nodePath},t.prototype.getQuizNumber=function(){return this.node_path.length},t.prototype.getQuestionNumber=function(t){return this.node_path[t].questionNumber?this.node_path[t].questionNumber:0},t.prototype.getTotalQuestionNumber=function(){return this.node_path.reduce(function(t,e){return t+e.questionNumber},0)},t}();o.default=n.getInstance,cc._RF.pop()},{}],HandEn:[function(t,e,o){"use strict";cc._RF.push(e,"8b7dfwDLtxECbL5slm/ZYIX","HandEn");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{c(n.next(t))}catch(e){r(e)}}function s(t){try{c(n.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,s)}c((n=n.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,l=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sp=null,e.cursor=null,e.mask=null,e.bg=null,e.tweens=[],e.currResolve=null,e.isLoop=!1,e.times=1,e.move_duration=.4,e}return i(e,t),e.prototype.onLoad=function(){var t=this;this.sp.setCompleteListener(function(){t.currResolve&&(0,t.currResolve)()})},e.prototype.play=function(t,e){return void 0===e&&(e=!1),a(this,void 0,void 0,function(){var o=this;return s(this,function(){return[2,new Promise(function(n){o.sp.setAnimation(0,t,e),o.currResolve=n})]})})},e.prototype.sleep=function(t){return a(this,void 0,void 0,function(){var e=this;return s(this,function(){return[2,new Promise(function(o){e.scheduleOnce(function(){o()},t)})]})})},e.prototype.playClick=function(){return a(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return this.fadeIn(),this.node.active=!0,this.cursor.rotation=0,[4,this.play("anxia")];case 1:return t.sent(),[4,this.sleep(.1)];case 2:return t.sent(),[4,this.play("taiqi")];case 3:return t.sent(),[2]}})})},e.prototype.fadeIn=function(){cc.tween(this.bg).to(this.move_duration,{opacity:255},{easing:"sineOut"}).start()},e.prototype.move=function(t,e,o){return a(this,void 0,void 0,function(){var n=this;return s(this,function(){return this.cursor.x=t.x,this.cursor.y=t.y,[2,new Promise(function(t){return a(n,void 0,void 0,function(){var n,i=this;return s(this,function(){return n=cc.tween(this.cursor).to(o,{x:e.x,y:e.y},{easing:"sineInOut"}).call(function(){i.tweens.forEach(function(t,e){t!=n||i.tweens.slice(e)}),t()}).start(),this.tweens.push(n),[2]})})})]})})},e.prototype.playDragTo=function(t,e,o,n){return void 0===o&&(o=!1),void 0===n&&(n=1),a(this,void 0,void 0,function(){var i=this;return s(this,function(){return this.fadeIn(),this.node.active=!0,this.isLoop=o,this.times=n,this.times<0&&(this.times=1),this.cursor.x=t.x,this.cursor.y=t.y,[2,new Promise(function(o){return a(i,void 0,void 0,function(){var n,i=this;return s(this,function(r){switch(r.label){case 0:n=function(){return!!i.isLoop||(i.times>0?(i.times--,i.times>=0):void 0)},r.label=1;case 1:return n()?[4,this.move(this.cursor,t,.5)]:[3,8];case 2:return r.sent(),[4,this.play("anxia")];case 3:return r.sent(),[4,this.sleep(.2)];case 4:return r.sent(),[4,this.move(t,e,1)];case 5:return r.sent(),[4,this.play("taiqi")];case 6:return r.sent(),[4,this.sleep(.5)];case 7:return r.sent(),[3,1];case 8:return o(),[2]}})})})]})})},e.prototype.hide=function(){this.node.active=!1,this.isLoop=!1,this.tweens.forEach(function(t){t.stop()}),this.tweens=[]},Object.defineProperty(e.prototype,"isShowing",{get:function(){return this.node.active},enumerable:!1,configurable:!0}),e.prototype.stop=function(){},e.prototype.setTargetBound=function(t,e,o,n){this.mask.width=o,this.mask.height=n,this.mask.x=t,this.mask.y=e;var i=cc.Canvas.instance.designResolution;this.bg.width=i.width,this.bg.height=i.height,this.bg.x=-this.mask.x,this.bg.y=-this.mask.y,this.cursor.x=this.mask.x,this.cursor.y=this.mask.y},e.prototype.setTargetNode=function(t,e){if(null!=t){var o=t.convertToWorldSpaceAR(cc.Vec2.ZERO);this.mask.width=t.width,this.mask.height=t.height;var n=e.convertToNodeSpaceAR(o);this.setTargetBound(n.x,n.y,t.width,t.height)}},r([p({type:sp.Skeleton,displayName:"\u624b\u52a8\u753b"})],e.prototype,"sp",void 0),r([p({type:cc.Node,displayName:"\u624b"})],e.prototype,"cursor",void 0),r([p({type:cc.Node,displayName:"Mask"})],e.prototype,"mask",void 0),r([p({type:cc.Node,displayName:"Bg"})],e.prototype,"bg",void 0),r([l],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Main:[function(t,e,o){"use strict";cc._RF.push(e,"5e85fX/yqJMgoHFcHEmkkfH","Main");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,s=a.ccclass,c=a.property,l=t("./GameData"),p=t("./Util"),u=t("./Tigo"),d=t("./constant");cc.game.on(cc.game.EVENT_GAME_INITED,function(){cc.macro.ENABLE_MULTI_TOUCH=!1,console.log("\u5173\u95ed\u4e86\u591a\u70b9\u89e6\u6478~",cc.macro.ENABLE_MULTI_TOUCH)});var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.menuPre=null,e.menuItem=null,e.node_nowShow=null,e.page_num=0,e.Lesson_Sign="TCL5",e.page="page",e.star="star",e.record_num="record_num",e.isSecgame=0,e.secKey="seckey",e.isTest=!1,e}return i(e,t),e.prototype.onLoad=function(){this.Lesson_Sign=d.gameState.Lesson_Sign;var t=this.Lesson_Sign+this.page,e=this.Lesson_Sign+this.star,o=this.Lesson_Sign+this.record_num;l.default.record_num=u.default.callAppToStorage("GET",o)||0;var n=u.default.callAppToStorage("GET",e)||0;l.default.setStarNum(n),console.log("\u5f53\u524d\u6e38\u620f\u5f00\u53e3\u6570===========\u300b"+l.default.record_num),this.page_num=u.default.callAppToStorage("GET",t)||this.page_num,console.log("\u5f53\u524d\u6e38\u620f\u9875\u6570============\u300b"+this.page_num);var i=this.Lesson_Sign+this.secKey;this.isSecgame=u.default.callAppToStorage("GET",i)||0,console.log("\u6e38\u620f isSec ==="+this.isSecgame),this.openGame(0),this.registerListener(),u.default.callAppToLoaded()},e.prototype.start=function(){var t=u.default.getBaseInfo();if(t){var e=JSON.parse(t);u.default.setClassId(e.lessonId),u.default.setUserId(e.userId),u.default.setModuleId(e.moduleId),u.default.setLessonModelId(e.lessonModuleId),console.log("lessonId == "+u.default.classId+"  userId == "+u.default.userId+"moduleId =="+u.default.moduleId+"lessonModuleId =="+u.default.lessonModuleId)}u.default.startGameCallApp()},e.prototype.registerListener=function(){},e.prototype.entryMenu=function(t){if(this.page_num++,this.page_num>=l.default.node_path.length-1&&u.default.callAppToSpeed(),console.log("this.page_num ==="+this.page_num),console.log("GameData.node_path.length ==="+l.default.node_path.length),this.page_num>=l.default.node_path.length){var e=this.Lesson_Sign+this.secKey;if(u.default.callAppToStorage("PUT",e,1),this.isSecgame=1,t)return console.log("into all game end ani"),void this.gameAllend();this.page_num=l.default.node_path.length-1}var o=this.Lesson_Sign+this.page,n=this.Lesson_Sign+this.star,i=this.Lesson_Sign+this.record_num;u.default.callAppToStorage("PUT",o,this.page_num),u.default.callAppToAnalyse("end",!1),u.default.callAppToStorage("PUT",n,l.default.totalStar_num),u.default.callAppToStorage("PUT",i,Number(l.default.record_num)),this.node_nowShow&&(p.default.voiceNode=null,this.node_nowShow.destroy()),this.openMenu(!0)},e.prototype.openMenu=function(t){void 0===t&&(t=!1),this.menuItem=cc.instantiate(this.menuPre),this.node.addChild(this.menuItem),this.menuItem.getComponent("gameMenu").initMenu(this.page_num,this.isSecgame,t,this)},e.prototype.openGame=function(){this.menuItem&&this.menuItem.destroy()},e.prototype.gameAllend=function(){var t=this.Lesson_Sign+this.star;console.log("\u672c\u90e8\u5206\u4e00\u5171\u83b7\u5f97\u91d1\u5e01 === "+l.default.totalStar_num),console.log("\u672c\u90e8\u5206\u4e00\u5171\u5f00\u53e3 === "+l.default.record_num+"\u6b21");var e={userId:u.default.userId,lessonId:u.default.classId,redVal:l.default.totalStar_num,openVal:l.default.record_num,lessonModelId:u.default.lessonModuleId};u.default.callAppToHttp("api/reward/info","POST",e),u.default.callAppToStorage("remove",t,0),u.default.callAppToAnalyse("end"),u.default.callAppToClose("replayOrNext",!0),u.default.exitGameCallApp()},e.prototype.loadPage=function(t){var e=this;console.log("\u5f53\u524d\u52a0\u8f7d\u7684\u6e38\u620f\u9875\u6570---------------\x3e"+t);var o="prefabs/"+l.default.getNodePath(t);cc.loader.loadRes(o,function(t,o){t?console.log(t,"err \u9884\u5236\u4f53\u52a0\u8f7d\u5931\u8d25==========>"):e.addPrefab(o)})},e.prototype.addPrefab=function(t){this.node_nowShow&&(p.default.voiceNode=null,this.node_nowShow.destroy()),cc.audioEngine.stopAllEffects(),this.node_nowShow=cc.instantiate(t),this.node.addChild(this.node_nowShow),this.node.getChildByName("coin")&&this.node.getChildByName("coin").destroy()},e.prototype.onDestroy=function(){console.log("\u5f53\u524d\u811a\u672c----onDestroy"),this.unRegisterListener(),u.default.exitGameCallApp()},e.prototype.unRegisterListener=function(){},e.prototype.testChangePage=function(t,e){var o=l.default.node_path.length-1;e<0&&0==this.page_num?console.log("\u6700\u5c0f\u9875\u4e86\uff5e\uff5e"):e>0&&this.page_num==o?console.log("\u6700\u5927\u9875\u4e86\uff5e\uff5e"):(this.page_num=this.page_num+Number(e),this.page_num=Math.max(this.page_num,0),this.page_num=Math.min(this.page_num,o),console.log("\u66f4\u6539\u540e\u7684\u9875\u6570============\u300b\u300b\u300b"+this.page_num),this.loadPage(this.page_num))},e.prototype.testQuickBtn=function(){this.isTest&&(this.node.getChildByName("left").zIndex=999,this.node.getChildByName("right").zIndex=999),this.node.getChildByName("left").active=this.isTest,this.node.getChildByName("right").active=this.isTest},r([c(cc.Prefab)],e.prototype,"menuPre",void 0),r([s],e)}(cc.Component);o.default=f,console.log("addEventListener=========="),window.addEventListener("message",function(t){console.log("get app data === ",t.data),t.data.action&&window.callCocos(t.data)},!1),console.log("addEventListener-----------"),cc._RF.pop()},{"./GameData":"GameData","./Tigo":"Tigo","./Util":"Util","./constant":"constant"}],Tigo:[function(t,e,o){"use strict";cc._RF.push(e,"595afJg4OFOfo+eyLz0cTJv","Tigo"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./constant"),i=function(){function t(){this.classId="",this.gameId="",this.userId="",this.moduleId="",this.lessonModuleId="",this.TotalGameNum=8,this.TotalGameErrorNum=0,this.TotalGameRightOnce=0,this.TotalGameRightTwice=0,this.SingleGameErrorNum=0,this.SingleGameRightOnce=0,this.SingleGameRightTwice=0,this.appData=null,this.TiGoTotalData={quizTotalNum:2,gameNum:0,questionTotlaNum:8,startGameTime:0,totalGameTime:0,errorNum:0,accuracy:{once:"0%",twice:"0%"}},this.TigoSingleData={MaxIndex:0,errorNum:0,answerData:{},accuracy:{once:"0%",twice:"0%"}}}return t.getInstance=function(){return this._instance||(this._instance=new t),console.log("TigoManager _instance is success"),this._instance},t.prototype.addGameError=function(){this.SingleGameErrorNum++,this.TotalGameErrorNum++,this.TigoSingleData.errorNum+=1,this.TiGoTotalData.errorNum+=1},t.prototype.addGameRightOnce=function(){this.SingleGameRightOnce+=1,this.TotalGameRightOnce+=1,this.TigoSingleData.accuracy.once=this.SingleGameRightOnce/this.TigoSingleData.MaxIndex*100+"%",this.TiGoTotalData.accuracy.once=this.TotalGameRightOnce/this.TiGoTotalData.gameNum*100+"%"},t.prototype.addGameRightTwice=function(){this.SingleGameRightTwice+=1,this.TotalGameRightTwice+=1,this.TigoSingleData.accuracy.twice=this.SingleGameRightTwice/this.TigoSingleData.MaxIndex*100+"%",this.TiGoTotalData.accuracy.twice=this.TotalGameRightTwice/this.TiGoTotalData.gameNum*100+"%"},t.prototype.refreshSingleData=function(){this.SingleGameRightOnce=0,this.SingleGameRightTwice=0,this.SingleGameErrorNum=0,this.TigoSingleData.errorNum=0,this.TigoSingleData.answerData={},this.TigoSingleData.accuracy.once="0%",this.TigoSingleData.accuracy.twice="0%"},t.prototype.setSingleAnswerData=function(t,e){var o="Q"+t+" wrong";this.TigoSingleData.answerData[o]=e},t.prototype.clearAllTigoData=function(){this.refreshSingleData(),this.TotalGameNum=0,this.TotalGameRightOnce=0,this.TotalGameRightTwice=0,this.TiGoTotalData.errorNum=0,this.TiGoTotalData.accuracy.once="0%",this.TiGoTotalData.accuracy.twice="0%"},t.prototype.setGameId=function(t){this.gameId=n.gameState.gameName+t},t.prototype.setSingleMax=function(t){this.TigoSingleData.MaxIndex=t},t.prototype.setClassId=function(t){this.classId=t},t.prototype.setUserId=function(t){this.userId=t},t.prototype.setModuleId=function(t){this.moduleId=t},t.prototype.setLessonModelId=function(t){this.lessonModuleId=t},t.prototype.callAppToSpeed=function(t){void 0===t&&(t=2);var e={userId:this.userId,type:this.moduleId,speedVal:t,lessonModelId:this.lessonModuleId};this.callAppToHttp("api/course/speed","POST",e)},t.prototype.exitGameCallApp=function(){},t.prototype.startGameCallApp=function(){},t.prototype.callAppToCollect=function(t,e,o){var n={action:"TiGoHttp",param:{url:"api/operate/infoV2",method:"POST",params:{userId:this.userId,lessonId:this.classId,lessonModelId:this.lessonModuleId,gameIndex:t,type:e,result:Number(o),timestamp:this.getTime()}}};console.log("callAppToStorage ============== "+JSON.stringify(n)),window.tiGo&&window.tiGo.callApp(JSON.stringify(n)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(n))},t.prototype.getTime=function(){var t=Date.now().toString();return t.substr(0,10)},t.prototype.callAppToAnalyse=function(t,e,o){void 0===e&&(e=!0),void 0===o&&(o={});var n={action:"TiGoAnalyse",param:{analyseAction:t,analyseParam:{analyseId:e?this.classId:this.gameId,analyseData:o}}};console.log("callAppToAnalyse ============== "+JSON.stringify(n)),window.tiGo&&window.tiGo.callApp(JSON.stringify(n)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(n))},t.prototype.callAppToClose=function(t,e){void 0===e&&(e=!1);var o=e?{action:"TiGoClose",param:{closeNext:t}}:{action:"TiGoClose",param:{}};console.log("callAppToClose ============== "+JSON.stringify(o)),window.tiGo&&window.tiGo.callApp(JSON.stringify(o)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(o))},t.prototype.callAppToSaveData=function(t){void 0===t&&(t=!1);var e={action:"TigoGameData",param:t?this.TiGoTotalData:this.TigoSingleData};console.log("callAppToSaveData ============== "+JSON.stringify(e)),window.tiGo&&window.tiGo.callApp(JSON.stringify(e)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(e))},t.prototype.callAppToRecord=function(t,e){var o={action:"TiGoStartRecord",param:{name:"game1",time:t.toString(),standardText:e}};console.log("callAppToRecord ============== "+JSON.stringify(o)),window.tiGo&&window.tiGo.callApp(JSON.stringify(o)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(o))},t.prototype.callAppToStopRecord=function(){var t={action:"TiGoStopRecord"};console.log("callAppToStopRecord ============== "+JSON.stringify(t)),window.tiGo&&window.tiGo.callApp(JSON.stringify(t)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(t))},t.prototype.callAppToResult=function(t,e){var o={action:"TiGoVoiceEvaluation",param:{standardText:t,path:e}};console.log("callAppToResult ============== "+JSON.stringify(o)),window.tiGo&&window.tiGo.callApp(JSON.stringify(o)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(o))},t.prototype.getAppData=function(){return cc.log("getAppData"),this.appData},t.prototype.callAppToStorage=function(t,e,o){void 0===o&&(o=0);var n="0";switch(t){case"PUT":n=String(o)}var i={action:"TiGoStorage",param:{method:t,key:e,value:n.toString()}};if(console.log("callAppToStorage ============== "+JSON.stringify(i)),window.tiGo)return window.tiGo.callApp(JSON.stringify(i));if(window.webkit){var r=window.prompt("callApp",JSON.stringify(i));return console.log(r),r}},t.prototype.callAppToHttp=function(t,e,o){var n={action:"TiGoHttp",param:{url:t,method:e,params:o,unique:this.classId}};console.log("callAppToStorage ============== "+JSON.stringify(n)),window.tiGo&&window.tiGo.callApp(JSON.stringify(n)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(n))},t.prototype.callAppToLoaded=function(){var t={action:"TiGoLifecycle",param:{name:"loaded",param:""}};console.log("callAppToLoaded ============== "+JSON.stringify(t)),window.tiGo&&window.tiGo.callApp(JSON.stringify(t)),window.webkit&&window.webkit.messageHandlers.callApp.postMessage(JSON.stringify(t))},t.prototype.getBaseInfo=function(){var t={action:"TiGoBaseInfo"};if(console.log("getBaseInfo ============== "+JSON.stringify(t)),window.tiGo){var e=window.tiGo.callApp(JSON.stringify(t));return console.log(e),e}if(window.webkit){var o=window.prompt("callApp",JSON.stringify(t));return console.log("webkit BaseInfo ==== "+o),o}},t._instance=null,t}();window.callCocos=function(t){return"TiGoLifecycle"==t.action?window.webframe.Notify.trigger("callCocos_loaded"):window.webframe.Notify.trigger("callCocos_data",t),"callByAndroidParam ok!"},o.default=i.getInstance(),cc._RF.pop()},{"./constant":"constant"}],Util:[function(t,e,o){"use strict";cc._RF.push(e,"9c8b9DRDi1I57SIVZ8ELjKO","Util");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0}),t("./Tigo");var a=cc._decorator,s=a.ccclass,c=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.coin_small=null,e.coin_mid=null,e.coin_large=null,e.PrefabNode=null,e.voiceNode=null,e.voice_name="prefab_common/voice",e.node_name="prefab_common/startLayer",e.coin_name_1="prefab_common/coin_small",e.coin_name_2="prefab_common/coin_mid",e.coin_name_3="prefab_common/coin_large",e.exitbutton="prefab_common/exitbutton",e.coin_new_name="prefab_common/coinNode",e}var o;return i(e,t),o=e,e.getInstance=function(){return null==this.instance&&(this.instance=new o),this.instance},e.prototype.onLoad=function(){cc.log(this.coin_small)},e.prototype.addVoice=function(t,e,o){var n=this;cc.loader.loadRes(this.voice_name,cc.Prefab,function(i,r){if(i)console.log(i,"Voice \u52a0\u8f7d\u5931\u8d25===============>>");else{var a=cc.instantiate(r);a.on("click",function(){e&&e.bind(o)()},o),t.addChild(a,996),a.name="voices",n.voiceNode=a}})},e.prototype.addExitButton=function(){},e.prototype.stopVoiceAni=function(){this.voiceNode&&this.voiceNode.getComponent(cc.Animation).play("voice_end")},e.prototype.playVoiceAni=function(){this.voiceNode&&this.voiceNode.getComponent(cc.Animation).play("voice")},e.prototype.addStartLayer=function(t,e,o){var n=this;cc.loader.loadRes(this.node_name,cc.Prefab,function(i,r){i?console.log(i,"startNode \u52a0\u8f7d\u5931\u8d25===============>>"):(n.PrefabNode=cc.instantiate(r),n.setStartBtnBack(e,o),t.addChild(n.PrefabNode,999))})},e.prototype.setStartBtnBack=function(t,e){var o=this;this.PrefabNode.getChildByName("start").on("click",function(){o.PrefabNode.active=!1,t&&t.bind(e)()},e)},e.prototype.addCoin_new=function(){var t=this;return new Promise(function(e,o){cc.loader.loadRes(t.coin_new_name,cc.Prefab,function(t,n){t?(o(t),console.log(t,"coinNodePrefab \u52a0\u8f7d\u5931\u8d25===============>>")):e(n)})})},e.prototype.addCoin_midAndMenu=function(t,e){void 0===e&&(e=!1),cc.loader.loadRes(this.coin_name_2,cc.Prefab,function(e,o){if(e)console.log(e,"prefab \u52a0\u8f7d\u5931\u8d25===============>>");else{var n=cc.instantiate(o);t.parent.addChild(n,999),n.name="coin";var i=n.getChildByName("spineNode").getComponent(sp.Skeleton);i.clearTracks(),i.setAnimation(0,"Animation",!0)}})},r([c(cc.Prefab)],e.prototype,"coin_small",void 0),r([c(cc.Prefab)],e.prototype,"coin_mid",void 0),r([c(cc.Prefab)],e.prototype,"coin_large",void 0),o=r([s],e)}(cc.Component);o.default=l.getInstance(),cc._RF.pop()},{"./Tigo":"Tigo"}],coinBoard:[function(t,e,o){"use strict";cc._RF.push(e,"b8cadSO2A5Dd6xldD0oQ1vE","coinBoard");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(i,r){function a(t){try{c(n.next(t))}catch(e){r(e)}}function s(t){try{c(n.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(a,s)}c((n=n.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return c([t,e])}}function c(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(s){r=[6,s],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var c=t("../../../kit/system/audio/AudioManager"),l=cc._decorator,p=l.ccclass,u=l.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.coin=[],e}return i(e,t),e.prototype.start=function(){},e.prototype.setCoinAni=function(t){return a(this,void 0,void 0,function(){var e=this;return s(this,function(){return[2,new Promise(function(o){for(var n=0;n<e.coin.length;n++)e.coin[n].active=n<t;e.node.getComponent(cc.Animation).play(),e.playCoinEffect(t),e.scheduleOnce(function(){o()},3)})]})})},e.prototype.reset=function(){for(var t=0;t<this.coin.length;t++)this.coin[t].active=!1},e.prototype.playCoinEffect=function(t){c.default.playEffect("common_en","coin_fly/jinbi"+t)},r([u(cc.Node)],e.prototype,"coin",void 0),r([p],e)}(cc.Component);o.default=d,cc._RF.pop()},{"../../../kit/system/audio/AudioManager":void 0}],constant:[function(t,e,o){"use strict";function n(t,e){return void 0===e&&(e=cc.Asset),new Promise(function(o,n){cc.loader.loadRes(t,e,function(t,e){t?n(t):o(e)})}).then(function(t){return t},function(t){return Promise.reject(t.message)})}cc._RF.push(e,"5735cdbNOpI+IoO8FGd7iBe","constant"),Object.defineProperty(o,"__esModule",{value:!0}),o.loadCocosResAsset=o.loadCocosPrefab=o.loadCocosResSkeletonData=o.loadCocosSpriteFrame=o.loadSpriteFrame=o.gameState=o.playSpineAnimation=void 0,o.playSpineAnimation=function(t,e,o,n){return void 0===o&&(o=!1),void 0===n&&(n=0),new Promise(function(i){o||t.setCompleteListener(i),t.setAnimation(n,e,o)})},o.gameState={isRecordState:!1,gameName:"cc_LV1_game",Lesson_Sign:"LV1"},o.loadSpriteFrame=function(t){return new Promise(function(e){cc.loader.loadRes(t,cc.SpriteFrame,function(t,o){t?console.log(t,"SpriteFrame \u52a0\u8f7d\u5931\u8d25===============>>"):e(o)})})},o.loadCocosSpriteFrame=function(t,e,o){cc.loader.loadRes(t,cc.SpriteFrame,function(t,n){if(t)return cc.error(t),void(o&&o(null));e.spriteFrame=n,o&&o(n)})},o.loadCocosResSkeletonData=function(t){return n(t,sp.SkeletonData)},o.loadCocosPrefab=function(t){return n(t,cc.Prefab)},o.loadCocosResAsset=n,cc._RF.pop()},{}],notifierCenter:[function(t,e,o){"use strict";cc._RF.push(e,"7b614I6CixNvK3bpLcRvpnD","notifierCenter");var n=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,a=(i.property,function(){function t(){var t=arguments[0];this._TAG="["+t+"/NotifierCenter]",this.events={},this.launch()}return t.prototype.getScopeName=function(t){try{return t?(t._TAG?t._TAG:t.name?t.name:"unknow").toString():"unknow"}catch(e){return"unknow"}},t.prototype.listen=function(t,e,o,n){if("string"==typeof t&&"function"==typeof e){for(var i={handler:e,scope:o,isOnce:n},r=this.events[t]||[],a=0;a<r.length;a++){var s=r[a];if(s.scope==o&&(s.handler==e||s.handler.toString()==e.toString()))return void cc.log(this._TAG,"\u6d88\u606f\u91cd\u590d\u6ce8\u518c:"+t+" function:"+e.name)}r.push(i),this.events[t]=r}else cc.log(this._TAG," listen err: eName :"+t+"handler:"+e)},t.prototype.ignore=function(t,e,o){if("string"!=typeof t)return cc.log("-----eventName----"+t),void this.ignoreScope(arguments[0]);if("string"==typeof t&&"function"==typeof e){var n=this.events[t];if(n&&0!==n.length){o=o||this;for(var i=-1,r=0;r<n.length;++r){var a=n[r];a.scope!=o||a.handler!=e&&a.handler.toString()!=e.toString()||(i=r)}i>-1&&this.events[t].splice(i,1)}}else cc.log(this._TAG,"NotifierCenter remove err: eName :"+t+"scope:"+o._TAG)},t.prototype.trigger=function(t,e){if(this.isRunning)if("string"==typeof t){Object.keys(this.events);var o=this.events[t];if(o){for(var n=Array.prototype.slice.call(arguments,1),i=this,r=0;r<o.length;r++){var a=o[r];a.scope&&a.scope instanceof cc.Component&&!cc.isValid(a.scope.node)||(a.handler.apply(a.scope,n),a.isOnce&&cc.log(i._TAG,"trigger and remove once listener",t))}(o=this.events[t])&&(this.events[t]=o.filter(function(t){return!(t.scope&&t.scope instanceof cc.Component&&!cc.isValid(t.scope.node)||t.isOnce)}))}}else cc.log(this._TAG," trigger err: eventName :"+t)},t.prototype.ignoreScope=function(t){var e=":";for(var o in this.events){var n=this.events[o];n&&(this.events[o]=n.filter(function(n){return n.scope!=t||(e=e+o+",",!1)}))}},t.prototype.destroy=function(){cc.log(this._TAG,"destroy"),this.events={}},t.prototype.shut=function(){cc.log(this._TAG,"--------shut"),this.isRunning=!1},t.prototype.launch=function(){cc.log(this._TAG,"--------launch"),this.isRunning=!0},n([r],t)}());o.default=a,cc._RF.pop()},{}],recordAin:[function(t,e,o){"use strict";cc._RF.push(e,"b12107oQEZI6LV9TdZg7cEl","recordAin");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,s=a.ccclass,c=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.centerNode=null,e.rightNode=[],e.leftNode=[],e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.initeAniFun=function(t){var e=this;cc.log("\u5f55\u97f3 sec == "+t);var o=this.centerNode.getComponent(cc.Animation),n=o.currentClip||o.defaultClip;n&&(n.speed=.1*t,o.play());var i=0;this.schedule(function(){e.rightNode[i].getComponent(cc.Animation).play(),e.leftNode[i].getComponent(cc.Animation).play(),i+=1},.2,4,.2)},e.prototype.start=function(){},r([c(cc.Node)],e.prototype,"centerNode",void 0),r([c({type:[cc.Node],displayName:"\u53f3\u8fb9\u52a8\u753b\u7ec4"})],e.prototype,"rightNode",void 0),r([c({type:[cc.Node],displayName:"\u53f3\u8fb9\u52a8\u753b\u7ec4"})],e.prototype,"leftNode",void 0),r([s],e)}(cc.Component);o.default=l,cc._RF.pop()},{}]},{},["GameData","Main","Tigo","Util","coinBoard","constant","HandEn","recordAin","notifierCenter"]);