(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/chat"],{1716:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return o})},2605:function(t,e,n){},"89ed":function(t,e,n){"use strict";var o=n("2605"),i=n.n(o);i.a},b0ab:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{scrollAnimation:!1,scrollTop:0,scrollToView:"",lineLength:15,InputBottom:0,topBar:{style:"height:"+this.CustomBar+"px;padding-top:"+this.StatusBar+"px;",back:!1,title:this.$config.title},modal:{name:null,history:[]},userInfo:this.$common.userInfo(),base:{lessClass:"less-gradual-pink line-gradual text-gradual"},chat:{id:1,type:"caht",nickname:"默毅",avatar:this.$config.logo,inputText:""},record:[]}},methods:{loadHistory:function(t){console.log("loadHistory",t)},InputFocus:function(t){console.log("InputFocus",t),this.InputBottom=t.detail.height},InputBlur:function(t){console.log("InputBlur",t),this.InputBottom=0},test3:function(){this.$soccket.open("wotamade"),this.$nextTick(function(){console.log("尝试调整id:","msg99"),this.scrollToView="msg99"})},test2:function(){this.$nextTick(function(){console.log("尝试调整id:","msg98"),this.scrollToView="msg98"})},sendBtn:function(){var t=this.chat.inputText;this.chat.inputText="",t&&this.send(t)},send:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",o={id:(new Date).getTime(),type:n,to:this.chat.id,from:this.userInfo.id,value:e,state:"Sending",time:(new Date).getTime()};this.$common.addRecord(this.chat.id,o),this.record.push(o),this.goViewId(o.id),t.sendSocketMessage({data:JSON.stringify(o)})},goViewId:function(t){var e=this;t&&this.$nextTick(function(){e.scrollToView="msg"+t})},test99:function(){console.log("test99",getCurrentPages())}},created:function(){this.pageState=!0},onShow:function(){},onLoad:function(e){var n=this;e.id?(this.record=this.$common.getRecord(e.id),this.chat=this.$common.getUserInfo(e.id),this.$nextTick(function(){this.scrollTop=99999}),t.$on("Message",function(t){if(t.to==e.id||t.form==e.id)switch(t.type){case"text":n.record.push(t),n.goViewId(t.id);break;case"tips":console.log("监听到提示消息"),n.record.push(t),n.goViewId(t.id);break;default:console.log("监听到未标记消息");break}else switch(t.type){case"text":var o=n.$common.getUserInfo(t.form);n.$refs["myMessage"].info(o.nickname+":"+t.value);break}}),t.$on("Response",function(t){if(t.to==e.id||t.form==e.id)for(var o=n.record,i=o.length-1;i>=0;i--)o[i].id==t.id&&(n.record[i].state=t.value,i=0)})):t.navigateBack()},onUnload:function(){this.$common.readNewMessageList(this.chat.id)},computed:{i18n:function(){return this.$t("chat")}}};e.default=n}).call(this,n("543d")["default"])},bdb4:function(t,e,n){"use strict";n.r(e);var o=n("1716"),i=n("fbc8");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("89ed");var c,a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=r.exports},ebde:function(t,e,n){"use strict";(function(t){n("81aa"),n("921b");o(n("66fd"));var e=o(n("bdb4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},fbc8:function(t,e,n){"use strict";n.r(e);var o=n("b0ab"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a}},[["ebde","common/runtime","common/vendor"]]]);