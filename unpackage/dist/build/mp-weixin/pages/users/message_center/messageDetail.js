(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/message_center/messageDetail"],{"0acd":function(t,e,n){"use strict";n.r(e);var a=n("93bf"),u=n("b449");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("b7ae");var o,i=n("f0c5"),r=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"bc68ae4c",null,!1,a["a"],o);e["default"]=r.exports},"51bd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("6fa1"),u=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("af3d"))}.bind(null,n)).catch(n.oe)},c={components:{home:u},data:function(){return{msgData:{}}},onLoad:function(t){this.getMsgDetails(t.id)},methods:{getMsgDetails:function(e){var n=this;t.showLoading({title:"获取详情中"}),(0,a.getMsgDetails)(e).then((function(e){t.hideLoading(),n.msgData=e.data})).catch((function(e){return t.hideLoading(),n.$util.Tips({title:e})}))}}};e.default=c}).call(this,n("543d")["default"])},"8c91":function(t,e,n){"use strict";(function(t){n("8244");a(n("66fd"));var e=a(n("0acd"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"93bf":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},b449:function(t,e,n){"use strict";n.r(e);var a=n("51bd"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=u.a},b7ae:function(t,e,n){"use strict";var a=n("f36e"),u=n.n(a);u.a},f36e:function(t,e,n){}},[["8c91","common/runtime","common/vendor"]]]);