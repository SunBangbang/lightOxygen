(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/swiperBg"],{"3a75":function(t,i,n){"use strict";var e=n("6147"),a=n.n(e);a.a},"3b15":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{circular:!0,autoplay:!0,interval:3e3,duration:500,imgUrls:[],bgColor:this.dataConfig.bgColor.color,marginTop:this.dataConfig.mbConfig.val,paddinglr:2*this.dataConfig.lrConfig.val,docConfig:this.dataConfig.docConfig.type,imgConfig:this.dataConfig.imgConfig.type,imageH:280,isColor:this.dataConfig.isShow.val,txtStyle:this.dataConfig.txtStyle.type,dotColor:this.dataConfig.dotColor.color[0].item,current:1,active:0}},watch:{imageH:function(t,i){this.imageH=t}},created:function(){this.imgUrls=this.dataConfig.swiperConfig.list},mounted:function(){var i=this;if(this.imgUrls.length){var n=this;this.$nextTick((function(e){t.getImageInfo({src:n.setDomain(n.imgUrls[0].img),success:function(t){if(t&&t.height>0){var e=t.height*((750-2*i.paddinglr)/t.width);n.$set(n,"imageH",e)}else n.$set(n,"imageH",375)},fail:function(t){n.$set(n,"imageH",375)}})}))}},methods:{bannerfun:function(t){this.active=t.detail.current,this.current=t.detail.current+1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goDetail:function(i){var n=i.info[1].value;-1!=n.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(n)}):-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n)?t.navigateTo({url:n}):t.reLaunch({url:n})}}};i.default=n}).call(this,n("543d")["default"])},6147:function(t,i,n){},"7b14":function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement;t._self._c},o=[]},"9b1b":function(t,i,n){"use strict";n.r(i);var e=n("3b15"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"9fab":function(t,i,n){"use strict";n.r(i);var e=n("7b14"),a=n("9b1b");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("3a75");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);i["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/swiperBg-create-component',
    {
        'pages/index/diy/components/swiperBg-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9fab"))
        })
    },
    [['pages/index/diy/components/swiperBg-create-component']]
]);
