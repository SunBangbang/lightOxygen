(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/guide/index"],{"0916":function(t,e,n){"use strict";(function(t){n("8244");a(n("66fd"));var e=a(n("89bd"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},3107:function(t,e,n){},"39b5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;u(n("acbf"));var a=n("9101");function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){n.e("components/guide/index").then(function(){return resolve(n("56a3"))}.bind(null,n)).catch(n.oe)},o={components:{guide:i},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var e=this,n=t.getStorageSync("guideDate")||"",u=(new Date).toLocaleDateString();n!==u?(0,a.getOpenAdv)().then((function(n){0==n.data.status||0==n.data.value.length?t.switchTab({url:"/pages/index/index"}):n.data.status&&(n.data.value.length||n.data.video_link)&&(e.advData=n.data,t.setStorageSync("guideDate",(new Date).toLocaleDateString()),e.guidePages=!0)})).catch((function(e){t.switchTab({url:"/pages/index/index"})})):t.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};e.default=o}).call(this,n("543d")["default"])},6138:function(t,e,n){"use strict";n.r(e);var a=n("39b5"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},7452:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"89bd":function(t,e,n){"use strict";n.r(e);var a=n("7452"),u=n("6138");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("d8a3");var o,c=n("f0c5"),d=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=d.exports},d8a3:function(t,e,n){"use strict";var a=n("3107"),u=n.n(a);u.a}},[["0916","common/runtime","common/vendor"]]]);