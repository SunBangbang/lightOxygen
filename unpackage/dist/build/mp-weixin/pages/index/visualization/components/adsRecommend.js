(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/adsRecommend"],{4275:function(n,t,e){"use strict";e.r(t);var a=e("b9b1"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"5b28":function(n,t,e){"use strict";var a=e("9b43"),i=e.n(a);i.a},"9b43":function(n,t,e){},a8f8:function(n,t,e){"use strict";e.r(t);var a=e("cfc4"),i=e("4275");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("5b28");var u,c=e("f0c5"),f=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=f.exports},b9b1:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("e5d6"),i=getApp(),o={name:"adsRecommend",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(n,t){n&&(this.recommendList=n.imgList.list,this.isShow=n.isShow.val)}}},data:function(){return{recommendList:[],name:this.$options.name,isIframe:i.globalData.isIframe,isShow:!0}},created:function(){},mounted:function(){},methods:{goDetail:function(t){(0,a.goPage)(t).then((function(e){n.navigateTo({url:t.info[0].value})}))}}};t.default=o}).call(this,e("543d")["default"])},cfc4:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement;n._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/adsRecommend-create-component',
    {
        'pages/index/visualization/components/adsRecommend-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a8f8"))
        })
    },
    [['pages/index/visualization/components/adsRecommend-create-component']]
]);
