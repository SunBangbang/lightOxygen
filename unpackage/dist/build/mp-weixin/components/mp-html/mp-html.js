(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/mp-html"],{5357:function(t,e,n){"use strict";n.r(e);var o=n("9617"),i=n("c602");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f651");var c,a=n("f0c5"),l=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=l.exports},9617:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},9912:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=[],i=n("4d99"),r=function(){n.e("components/mp-html/node/node").then(function(){return resolve(n("07bf"))}.bind(null,n)).catch(n.oe)},c={name:"mp-html",data:function(){return{nodes:[]}},props:{content:String,copyLink:{type:Boolean,default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:Boolean,default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:Boolean,default:!0},previewImg:{type:Boolean,default:!0},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:!0},showImgMenu:{type:Boolean,default:!0},tagStyle:Object,useAnchor:null},components:{node:r},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=o.length;t--;)this.plugins.push(new o[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,e,n){t&&e&&n&&(this._in={page:t,selector:e,scrollTop:n})},navigateTo:function(e,n){var o=this;return new Promise((function(i,r){if(!o.useAnchor)return r("Anchor is disabled");n=n||parseInt(o.useAnchor)||0;var c=" ";c=">>>";var a=t.createSelectorQuery().in(o._in?o._in.page:o).select((o._in?o._in.selector:"._root")+(e?"".concat(c,"#").concat(e):"")).boundingClientRect();o._in?a.select(o._in.selector).scrollOffset().select(o._in.selector).boundingClientRect():a.selectViewport().scrollOffset(),a.exec((function(e){if(!e[0])return r("Label not found");var c=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+n;o._in?o._in.page[o._in.scrollTop]=c:t.pageScrollTo({scrollTop:c,duration:300}),i()}))}))},getText:function(){var t="";return function e(n){for(var o=0;o<n.length;o++){var i=n[o];if("text"==i.type)t+=i.text.replace(/&amp;/g,"&");else if("br"==i.name)t+="\n";else{var r="p"==i.name||"div"==i.name||"tr"==i.name||"li"==i.name||"h"==i.name[0]&&i.name[1]>"0"&&i.name[1]<"7";r&&t&&"\n"!=t[t.length-1]&&(t+="\n"),i.children&&e(i.children),r&&"\n"!=t[t.length-1]?t+="\n":"td"!=i.name&&"th"!=i.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var e=this;return new Promise((function(n,o){t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):o("Root label not found")}))}))},setContent:function(t,e){var n=this;e&&this.imgList||(this.imgList=[]);var o,r=new i(this).parse(t);this.$set(this,"nodes",e?(this.nodes||[]).concat(r):r),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){n.getRect().then((function(t){t.height==o&&(n.$emit("ready",t),clearInterval(n._timer)),o=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var e=o.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}};e.default=c}).call(this,n("543d")["default"])},c602:function(t,e,n){"use strict";n.r(e);var o=n("9912"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},f651:function(t,e,n){"use strict";var o=n("f6e5"),i=n.n(o);i.a},f6e5:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/mp-html-create-component',
    {
        'components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5357"))
        })
    },
    [['components/mp-html/mp-html-create-component']]
]);
