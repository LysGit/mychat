(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"09a1":function(t,e,o){"use strict";o.r(e);var n=o("fbb8"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"0b7e":function(t,e,o){"use strict";var n,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},"107e":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{base:{avatar:this.$config.avatar,CustomBar:this.CustomBar,title:this.$config.title},userInfo:this.$common.userInfo(),moreData:{show:!1,type:"cosmos",id:0},contacts:{list:[]},messageCount:0}},created:function(){var t=this;this.$api.friendsList({},(function(e){1!=e.code?t.$common.errorToShow(e.msg):(e.data.forEach((function(e,o){e.user.avatar=t.$common.CDN(e.user.avatar)})),t.contacts.list=e.data,e.data.forEach((function(e,o){t.$db.set("uid_"+e.user.id,e.user)})))}))},onLoad:function(){console.log("listchatonLoad")},methods:{openChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=[];o=null==e?this.userInfo:this.newMessageList[e].user,console.log(o),this.$db.set("chat",o),t.navigateTo({url:"/pages/chat/index"}),this.$common.readNewMessageList(o.user_id)},reMessgaeList:function(){var t=this,e=0;this.newMessageList=this.$common.getNewMessageList(),this.newMessageList.forEach((function(o,n){e+=o.tips.count,e>99&&(t.messageCount=e)})),this.messageCount=e},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};e.default=o}).call(this,o("543d")["default"])},"10bf":function(t,e,o){"use strict";var n=o("bf93"),r=o.n(n);r.a},1117:function(t,e,o){"use strict";var n,r=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},"1c73":function(t,e,o){"use strict";o.r(e);var n=o("830c"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"1f13":function(t,e,o){"use strict";(function(t){o("aff0"),o("921b");var e=b(o("66fd")),n=b(o("67b6")),r=v(o("d20c")),i=v(o("4c98")),s=v(o("c2d5")),a=v(o("9674")),u=v(o("b2f5")),c=v(o("5aa1")),f=v(o("949c")),l=b(o("2395")),d=b(o("2c5f")),m=b(o("3199")),p=b(o("c614"));function h(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return h=function(){return t},t}function v(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=h();if(e&&e.has(t))return e.get(t);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=n?Object.getOwnPropertyDescriptor(t,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=t[r]}return o.default=t,e&&e.set(t,o),o}function b(t){return t&&t.__esModule?t:{default:t}}function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){w(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function w(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}e.default.prototype.$config=r,e.default.prototype.$api=s,e.default.prototype.$common=a,e.default.prototype.$db=i,e.default.prototype.$socket=u,e.default.prototype.$audio=c,e.default.prototype.$mysocket=f;var L=function(){o.e("colorui/components/cu-custom").then(function(){return resolve(o("d2f5"))}.bind(null,o)).catch(o.oe)};e.default.component("cu-custom",L);var $=function(){o.e("colorui/components/my-button").then(function(){return resolve(o("149b"))}.bind(null,o)).catch(o.oe)};e.default.component("myButton",$);var O=function(){o.e("colorui/components/my-input").then(function(){return resolve(o("a00b"))}.bind(null,o)).catch(o.oe)};e.default.component("myInput",O);var M=function(){o.e("colorui/components/my-message").then(function(){return resolve(o("fc04"))}.bind(null,o)).catch(o.oe)};e.default.component("myMessage",M);var _=function(){o.e("colorui/components/my-bar").then(function(){return resolve(o("c863"))}.bind(null,o)).catch(o.oe)};e.default.component("myBar",_);var j=function(){o.e("colorui/components/my-preview").then(function(){return resolve(o("f109"))}.bind(null,o)).catch(o.oe)};e.default.component("preview",j);var C=function(){o.e("moyiui/components/load-modal").then(function(){return resolve(o("5e15"))}.bind(null,o)).catch(o.oe)};e.default.component("loadModal",C);var B=function(){o.e("moyiui/components/bottom-menu").then(function(){return resolve(o("24a3"))}.bind(null,o)).catch(o.oe)};e.default.component("bottomMenu",B);var T=function(){o.e("moyiui/components/more-modal").then(function(){return resolve(o("19ee"))}.bind(null,o)).catch(o.oe)};e.default.component("moreModal",T);var k=function(){o.e("moyiui/components/preview-modal").then(function(){return resolve(o("b762"))}.bind(null,o)).catch(o.oe)};e.default.component("previewModal",k),e.default.component("cosmos",l.default),e.default.component("chat",d.default),e.default.component("contacts",m.default),e.default.component("center",p.default),e.default.config.productionTip=!1,n.default.mpType="app";var I=new e.default(y({},n.default));t(I).$mount()}).call(this,o("543d")["createApp"])},2395:function(t,e,o){"use strict";o.r(e);var n=o("e9fd"),r=o("09a1");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("7cbf");var s,a=o("f0c5"),u=o("94fd"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);"function"===typeof u["a"]&&Object(u["a"])(c),e["default"]=c.exports},"2a45":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var i={onLaunch:function(){t.getSystemInfo({success:function(t){n.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();e?(n.default.prototype.Custom=e,n.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight):n.default.prototype.CustomBar=t.statusBarHeight+50}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=i}).call(this,o("543d")["default"])},"2c5f":function(t,e,o){"use strict";o.r(e);var n=o("69a8"),r=o("1c73");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("10bf");var s,a=o("f0c5"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},3199:function(t,e,o){"use strict";o.r(e);var n=o("0b7e"),r=o("edce");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("f6bb");var s,a=o("f0c5"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},"5af9":function(t,e,o){},6092:function(t,e,o){},"67b6":function(t,e,o){"use strict";o.r(e);var n=o("8efe");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("b42c");var i,s,a,u,c=o("f0c5"),f=Object(c["a"])(n["default"],i,s,!1,null,null,null,!1,a,u);e["default"]=f.exports},"69a8":function(t,e,o){"use strict";var n,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.newMessageList,(function(e,o){var n=t.$common.timeToDate(e.tips.time);return{$orig:t.__get_orig(e),g0:n}})));t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},"6d8e":function(t,e,o){},"7a58":function(t,e,o){"use strict";o.r(e);var n=o("c886"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"7cbf":function(t,e,o){"use strict";var n=o("6d8e"),r=o.n(n);r.a},"830c":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{base:{avatar:this.$config.avatar,CustomBar:this.CustomBar,title:this.$config.title},moreData:{show:!1,type:"cosmos",id:0},newMessageList:[],messageCount:0}},created:function(){var e=this;this.reMessgaeList(),t.$on("reMessgaeList",(function(){e.reMessgaeList()}))},onLoad:function(){console.log("listchatonLoad")},methods:{openChat:function(e){var o=this.newMessageList[e].user;console.log(o),this.$db.set("chat",o),t.navigateTo({url:"/pages/chat/index"}),this.$common.readNewMessageList(o.user_id)},reMessgaeList:function(){var t=this,e=0;this.newMessageList=this.$common.getNewMessageList(),this.newMessageList.forEach((function(o,n){e+=o.tips.count,e>99&&(t.messageCount=e)})),this.messageCount=e},InputFocus:function(t){this.InputBottom=t.detail.height},InputBlur:function(t){this.InputBottom=0}}};e.default=o}).call(this,o("543d")["default"])},"8efe":function(t,e,o){"use strict";o.r(e);var n=o("2a45"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"94fd":function(t,e,o){"use strict";var n=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[]),t.options.wxsCallMethods.push("cosmosTrigger")};e["a"]=n},ae24:function(t,e,o){},b42c:function(t,e,o){"use strict";var n=o("6092"),r=o.n(n);r.a},bf93:function(t,e,o){},c614:function(t,e,o){"use strict";o.r(e);var n=o("1117"),r=o("7a58");for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);o("fb7a");var s,a=o("f0c5"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},c886:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{base:{avatar:this.$config.avatar,CustomBar:this.CustomBar,title:this.$config.title},userInfo:this.$common.userInfo()}},created:function(){var e=this;t.$on("refreshUser",(function(t){e.userInfo=t}))},methods:{logout:function(){var e=this;t.reLaunch({url:"/pages/user/login"},(function(){}),(function(){t.clearStorageSync(),e.$common.errorToShow("已安全退出"),e.$api.logout()}))},navigateTo:function(e){t.navigateTo({url:e})}}};e.default=o}).call(this,o("543d")["default"])},e9fd:function(t,e,o){"use strict";var n,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.cosmosList,(function(e,o){var n=t.$common.timeToDate(e.createtime);return{$orig:t.__get_orig(e),g0:n}})));t._isMounted||(t.e0=function(e){return t.$common.errorToShow("点击了推荐userOpenuserOpen")}),t.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},edce:function(t,e,o){"use strict";o.r(e);var n=o("107e"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},f6bb:function(t,e,o){"use strict";var n=o("ae24"),r=o.n(n);r.a},fb7a:function(t,e,o){"use strict";var n=o("5af9"),r=o.n(n);r.a},fbb8:function(t,e,o){"use strict";(function(t){function o(t){return i(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{moreData:{show:!1,type:"cosmos",id:0},modalName:null,base:{avatar:this.$config.avatar,CustomBar:this.CustomBar,title:this.$config.title},operate:{id:1},preview:{list:["https://image.aishencn.com/2020/03/17/095817937_81909778-bbs.jpg"],show:!1,index:0},cosmos:{scrollTop:0,propValue:!0,loadMore:!1},cosmosList:[],tabScroll:0,currentTab:0,tabScrollItem:0,currentTabItem:0}},onLoad:function(){console.log("onLoad~")},created:function(){console.log("this.cosmosList.length",this.cosmosList.length),0==this.cosmosList.length&&(this.cosmosGetList(),console.log("created??"))},methods:{like:function(t){var e=this;this.cosmosList[t].isLike=!this.cosmosList[t].isLike,this.$api.cosmosLike({pid:this.cosmosList[t].id},(function(o){o.code&&(e.cosmosList[t].isLike=o.data,o.data?e.cosmosList[t].likes++:e.cosmosList[t].likes--)}))},userOpen:function(e){this.$db.set("user",this.cosmosList[e]),t.navigateTo({url:"/pages/user/index"})},previews:function(t,e){this.preview.index=e,this.preview.list=t,this.preview.show=!this.preview.show},puls:function(){t.navigateTo({url:"/pages/cosmos/push"})},cosmosMoreOperate:function(t){this.moreData.show=!this.moreData.show},cosmosGetList:function(t){var e=this;this.$api.getCosmosList({id:t},(function(t){t.code&&(e.cosmosList=[].concat(o(e.cosmosList),o(t.data)),e.cosmos.loadMore=!0)}))},cosmosOpen:function(e){this.$db.set("cosmos",this.cosmosList[e]),t.navigateTo({url:"/pages/cosmos/details?id="+this.operate.id})},cosmosTrigger:function(e){var o=this;switch(e){case 0:break;case 1:this.$api.getCosmosList({},(function(t){t.code?(o.cosmosList=t.data,o.cosmos.propValue=!o.cosmos.propValue):o.$common.errorToShow("空空如也")}));break;case 2:var n=t.createSelectorQuery().in(this);n.select("#more-text").boundingClientRect((function(t){t.top<1500&&o.cosmos.loadMore&&(o.cosmos.loadMore=!1,o.cosmosGetList(o.cosmosList.length?o.cosmosList[o.cosmosList.length-1].id:0))})).exec();break;case 3:break;default:break}}}};e.default=s}).call(this,o("543d")["default"])}},[["1f13","common/runtime","common/vendor"]]]);