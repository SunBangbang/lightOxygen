(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{1019:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"5d9b":function(t,e,n){"use strict";n.r(e);var u=n("8ea3"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=a.a},"8ea3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("26cb"),a=n("e5d6"),r=o(n("8c9a"));function o(t){return t&&t.__esModule?t:{default:t}}var c={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(e){(0,a.goShopDetail)(e,this.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))}}};e.default=c}).call(this,n("543d")["default"])},cfba:function(t,e,n){"use strict";var u=n("eead"),a=n.n(u);a.a},e406:function(t,e,n){"use strict";n.r(e);var u=n("1019"),a=n("5d9b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("cfba");var o,c=n("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"628ebb5a",null,!1,u["a"],o);e["default"]=i.exports},eead:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e406"))
        })
    },
    [['components/recommend/index-create-component']]
]);
