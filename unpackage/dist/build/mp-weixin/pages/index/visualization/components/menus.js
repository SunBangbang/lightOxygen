(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/menus"],{4829:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("e5d6"),i=getApp(),u={name:"menus",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.menus=t.imgList.list,this.isShow=t.isShow.val)}}},data:function(){return{menus:[],name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=i.globalData.isIframe},mounted:function(){},methods:{menusTap:function(n){(0,a.goPage)().then((function(e){-1!=n.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n)?t.navigateTo({url:n}):t.switchTab({url:n}))}))}}};n.default=u}).call(this,e("543d")["default"])},"647e":function(t,n,e){},"81f4":function(t,n,e){"use strict";var a=e("647e"),i=e.n(a);i.a},8922:function(t,n,e){"use strict";e.r(n);var a=e("afd2"),i=e("ed73");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("81f4");var o,r=e("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=s.exports},afd2:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},ed73:function(t,n,e){"use strict";e.r(n);var a=e("4829"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/menus-create-component',
    {
        'pages/index/visualization/components/menus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8922"))
        })
    },
    [['pages/index/visualization/components/menus-create-component']]
]);
