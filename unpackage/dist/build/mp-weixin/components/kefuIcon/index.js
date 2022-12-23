(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kefuIcon/index"],{"1cb4":function(t,e,n){"use strict";n.r(e);var u=n("8d2e"),c=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=c.a},"29e9":function(t,e,n){},"2cc7":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"8d2e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n("6e18"),c=(getApp(),{name:"kefuIcon",props:{ids:{type:Number,default:0},routineContact:{type:Number,default:0},storeInfo:{type:Object,default:function(){}},goodsCon:{type:Number,default:0}},data:function(){return{top:"480"}},mounted:function(){},methods:{goCustomer:function(){(0,u.getCustomer)("/pages/customer_list/chat?productId=".concat(this.ids))},setTouchMove:function(t){var e=this;t.touches[0].clientY<480&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)}},created:function(){}});e.default=c},a11d:function(t,e,n){"use strict";n.r(e);var u=n("2cc7"),c=n("1cb4");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("ea57");var r,a=n("f0c5"),i=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=i.exports},ea57:function(t,e,n){"use strict";var u=n("29e9"),c=n.n(u);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kefuIcon/index-create-component',
    {
        'components/kefuIcon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a11d"))
        })
    },
    [['components/kefuIcon/index-create-component']]
]);
