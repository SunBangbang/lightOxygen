(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/telecast/index"],{"0857":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-tabbar/u-tabbar")]).then(n.bind(null,"87d7"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"2c26":function(e,t,n){},"3c36":function(e,t,n){"use strict";var a=n("2c26"),o=n.n(a);o.a},"517c":function(e,t,n){"use strict";(function(e){n("8244");a(n("66fd"));var t=a(n("ce43"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"90c4":function(e,t,n){"use strict";n.r(t);var a=n("a442"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},a442:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{html:'<view class="shipin mart" v-for="(item, index) in videoList" :key="index"><video :id="index" :src="item.video_url" @error="videoErrorCallback" :show-fullscreen-btn="false" @play="play(index)" :poster="item.image"></video></view>',videoList:[{id:1,video_url:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/1.mp4",image:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fegmian1.jpg"},{id:2,video_url:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/2.mp4",image:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fengmian2.jpg"},{id:3,video_url:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/3.mp4",image:"https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fengmian3.jpg"}],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,controls1:!1,controls2:!1,controls3:!1,swiperBg:{},list:[{iconPath:n("c6f5"),selectedIconPath:n("3171"),text:"首页",customIcon:!1,pagePath:"/pages/index/index"},{iconPath:n("e565"),selectedIconPath:n("ffa2"),text:"分类",customIcon:!1,pagePath:"/pages/goods_cate/goods_cate"},{iconPath:n("01ea"),selectedIconPath:n("01ea"),text:"预售区",midButton:!0,customIcon:!1,pagePath:"/pages/subscription/index"},{iconPath:n("6307"),selectedIconPath:n("baca"),text:"购物车",customIcon:!1,pagePath:"/pages/telecast/index"},{iconPath:n("9064"),selectedIconPath:n("2294"),text:"我的",isDot:!1,customIcon:!1,pagePath:"/pages/user/index"}],selectIndex:3}},onLoad:function(){},methods:{play:function(t){this.videoList.forEach((function(n,a){a!=t&&e.createVideoContext(a.toString()).pause()}))}}};t.default=a}).call(this,n("543d")["default"])},ce43:function(e,t,n){"use strict";n.r(t);var a=n("0857"),o=n("90c4");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("3c36");var c,d=n("f0c5"),u=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"6f45b837",null,!1,a["a"],c);t["default"]=u.exports}},[["517c","common/runtime","common/vendor"]]]);