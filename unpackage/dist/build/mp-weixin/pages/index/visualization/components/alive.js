(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/alive"],{5863:function(t,i,n){"use strict";var e=n("9e63"),a=n.n(e);a.a},"5ff2":function(t,i,n){"use strict";n.r(i);var e=n("78d9"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"635b":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement;t._self._c},o=[]},"78d9":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("9101"),a=getApp().globalData,o={name:"alive",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,i){t&&(this.numConfig=t.numConfig.val,this.titleInfo=t.titleInfo.list,this.isShow=t.isShow.val,this.getLiveList())}}},data:function(){return{isIframe:!1,liveList:[],numConfig:0,limit:this.$config.LIMIT,name:this.$options.name,titleInfo:[],isShow:!0,custom_params:""}},created:function(){this.isIframe=a.isIframe},mounted:function(){this.custom_params=encodeURIComponent(JSON.stringify({spid:this.$store.state.app.uid}))},methods:{getLiveList:function(){var t=this;(0,e.getLiveList)(1,this.numConfig<=this.limit?this.numConfig:this.limit).then((function(i){t.liveList=i.data})).catch((function(t){}))}}};i.default=o},8903:function(t,i,n){"use strict";n.r(i);var e=n("635b"),a=n("5ff2");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("5863");var s,u=n("f0c5"),f=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"12dcdaaf",null,!1,e["a"],s);i["default"]=f.exports},"9e63":function(t,i,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/alive-create-component',
    {
        'pages/index/visualization/components/alive-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8903"))
        })
    },
    [['pages/index/visualization/components/alive-create-component']]
]);