(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ucFoot2"],{"2b7b":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var c=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"3d14":function(t,e,n){"use strict";n.r(e);var a=n("cbf5"),c=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=c.a},6471:function(t,e,n){"use strict";n.r(e);var a=n("2b7b"),c=n("3d14");for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var u,r=n("f0c5"),i=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=i.exports},cbf5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"ucFoot2",props:{selectIndex:{type:Number,default:0}},data:function(){return{list:[{pagePath:"/pages/index/index",iconPath:n("1092"),selectedIconPath:n("0be7"),text:"首页"},{pagePath:"/pages/goods_cate/goods_cate",iconPath:n("c678"),selectedIconPath:n("752b"),text:"分类"},{pagePath:"/pages/subscription/index",iconPath:n("9a2f"),selectedIconPath:n("9a2f"),text:"认购区"},{pagePath:"/pages/telecast/index",iconPath:n("fefe"),selectedIconPath:n("b672"),text:"直播"},{pagePath:"/pages/user/index",iconPath:n("331e"),selectedIconPath:n("4f53"),text:"我的"}]}},created:function(){},methods:{btnGo:function(e){var n=e.currentTarget.dataset.url,a=getCurrentPages(),c="/"+a[a.length-1].route;c!=n&&t.switchTab({url:n})}}};e.default=a}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ucFoot2-create-component',
    {
        'components/ucFoot2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6471"))
        })
    },
    [['components/ucFoot2-create-component']]
]);
