(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/order/index"],{"13ef":function(t,n,e){},1644:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("17df"),a=function(){e.e("components/Loading/index").then(function(){return resolve(e("a13b"))}.bind(null,e)).catch(e.oe)},o={name:"adminOrder",components:{Loading:a},data:function(){return{census:{},list:[],where:{page:1,limit:15},loaded:!1,loading:!1}},onLoad:function(){this.getIndex(),this.getList()},methods:{getIndex:function(){var t=this;(0,i.getStatisticsInfo)().then((function(n){t.census=n.data}),(function(n){t.$util.Tips({title:n})}))},getList:function(){var t=this;t.loading||t.loaded||(t.loading=!0,(0,i.getStatisticsMonth)(t.where).then((function(n){t.loading=!1,t.loaded=n.data.length<t.where.limit,t.list.push.apply(t.list,n.data),t.where.page=t.where.page+1}),(function(n){t.$util.Tips({title:n})}),300))}},onReachBottom:function(){this.getList()}};n.default=o},"185b":function(t,n,e){"use strict";var i=e("13ef"),a=e.n(i);a.a},"189c":function(t,n,e){"use strict";(function(t){e("8244");i(e("66fd"));var n=i(e("2d41"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"280c":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"2d41":function(t,n,e){"use strict";e.r(n);var i=e("280c"),a=e("3a9f");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("185b");var u,c=e("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=r.exports},"3a9f":function(t,n,e){"use strict";e.r(n);var i=e("1644"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a}},[["189c","common/runtime","common/vendor"]]]);