(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/index"],{"1c4a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=h(n("8c9a")),a=n("9101"),c=(n("c8b1"),n("8bb3")),s=n("26cb"),r=n("a042"),u=n("e5d6"),d=n("cf5b"),l=n("0ddd");function h(t){return t&&t.__esModule?t:{default:t}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}getApp();var f=function(){Promise.all([n.e("common/vendor"),n.e("components/couponWindow/index")]).then(function(){return resolve(n("4587b"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/Authorize").then(function(){return resolve(n("5c82"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("pages/index/diy/components/activeParty").then(function(){return resolve(n("73be"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("pages/index/diy/components/headerSerch").then(function(){return resolve(n("a54f"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("pages/index/diy/components/swipers").then(function(){return resolve(n("7a65"))}.bind(null,n)).catch(n.oe)},S=function(){n.e("pages/index/diy/components/coupon").then(function(){return resolve(n("7095"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("pages/index/diy/components/articleList").then(function(){return resolve(n("d665"))}.bind(null,n)).catch(n.oe)},w=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/bargain")]).then(function(){return resolve(n("f703"))}.bind(null,n)).catch(n.oe)},x=function(){n.e("pages/index/diy/components/blankPage").then(function(){return resolve(n("72c4"))}.bind(null,n)).catch(n.oe)},L=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/combination")]).then(function(){return resolve(n("b6f9"))}.bind(null,n)).catch(n.oe)},T=function(){n.e("pages/index/diy/components/customerService").then(function(){return resolve(n("10b6"))}.bind(null,n)).catch(n.oe)},C=function(){n.e("pages/index/diy/components/goodList").then(function(){return resolve(n("9636"))}.bind(null,n)).catch(n.oe)},P=function(){n.e("pages/index/diy/components/guide").then(function(){return resolve(n("27ff"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("pages/index/diy/components/liveBroadcast").then(function(){return resolve(n("56fb"))}.bind(null,n)).catch(n.oe)},D=function(){n.e("pages/index/diy/components/menus").then(function(){return resolve(n("b3f2"))}.bind(null,n)).catch(n.oe)},A=function(){n.e("pages/index/diy/components/news").then(function(){return resolve(n("9972"))}.bind(null,n)).catch(n.oe)},k=function(){n.e("pages/index/diy/components/pictureCube").then(function(){return resolve(n("29bf"))}.bind(null,n)).catch(n.oe)},O=function(){n.e("pages/index/diy/components/promotionList").then(function(){return resolve(n("1209"))}.bind(null,n)).catch(n.oe)},N=function(){n.e("pages/index/diy/components/richText").then(function(){return resolve(n("7e3b"))}.bind(null,n)).catch(n.oe)},I=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/diy/components/seckill")]).then(function(){return resolve(n("2d8d"))}.bind(null,n)).catch(n.oe)},R=function(){n.e("pages/index/diy/components/swiperBg").then(function(){return resolve(n("9fab"))}.bind(null,n)).catch(n.oe)},B=function(){n.e("pages/index/diy/components/tabNav").then(function(){return resolve(n("36df"))}.bind(null,n)).catch(n.oe)},$=function(){n.e("pages/index/diy/components/titles").then(function(){return resolve(n("612b"))}.bind(null,n)).catch(n.oe)},E=function(){n.e("components/update/app-update").then(function(){return resolve(n("4e06"))}.bind(null,n)).catch(n.oe)},G=function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("1b2f"))}.bind(null,n)).catch(n.oe)},H=function(){n.e("components/Loading/index").then(function(){return resolve(n("a13b"))}.bind(null,n)).catch(n.oe)},j=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("e406"))}.bind(null,n)).catch(n.oe)},F=(o={computed:(0,s.mapGetters)(["isLogin","uid"]),mixins:[i.default],components:{recommend:j,Loading:H,pageFooter:G,couponWindow:f,authorize:p,activeParty:m,headerSerch:b,swipers:v,coupon:S,articleList:y,bargain:w,blankPage:x,combination:L,customerService:T,goodList:C,guide:P,liveBroadcast:_,menus:D,pictureCube:k,news:A,promotionList:O,richText:N,seckill:I,swiperBg:R,tabNav:B,titles:$,appUpdate:E}},g(o,"computed",(0,s.mapGetters)(["isLogin","cartNum"])),g(o,"data",(function(){var t;return t={showSkeleton:!0,isNodes:0,styleConfig:[],tempArr:[],goodType:3,loading:!1,loadend:!1,loadTitle:"下拉加载更多",page:1,limit:this.$config.LIMIT,iSshowH:!1,numConfig:0,code:"",isCouponShow:!1,couponObj:{},couponObjs:{show:!1},shareInfo:{},footConfig:{},isSortType:0,sortList:"",sortAll:[],goodPage:1,goodList:[],newData:{},sid:0,curSort:0,sortMpTop:0,loaded:!1},g(t,"loading",!1),g(t,"hostProduct",[]),g(t,"hotScroll",!1),g(t,"hotPage",1),g(t,"hotLimit",10),g(t,"domOffsetTop",50),g(t,"isFixed",!0),g(t,"site_config",""),g(t,"errorNetwork",!1),g(t,"privacyStatus",!1),g(t,"footerStatus",!1),g(t,"isHeaderSerch",!1),g(t,"bgColor",""),g(t,"bgPic",""),g(t,"bgTabVal",""),g(t,"pageShow",!0),g(t,"windowHeight",0),g(t,"activeRouter",""),g(t,"countNum",0),t})),g(o,"onPullDownRefresh",(function(){this.diyData()})),g(o,"created",(function(e){var n=this;t.hideTabBar();var o=this;this.$nextTick((function(){t.getSystemInfo({success:function(t){o.windowHeight=t.windowHeight}})}));var i=getCurrentPages(),c=i[i.length-1].route;this.activeRouter="/"+c,this.diyData(),this.getIndexData(),this.getTemlIds(),(0,a.siteConfig)().then((function(t){n.site_config=t.data.record_No})).catch((function(t){})),this.isLogin&&(this.getCoupon(),(0,d.getCartCounts)().then((function(e){n.countNum=e.data.count,n.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count+""),e.data.count>0?wx.setTabBarBadge({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2,text:e.data.count+""}):wx.hideTabBarRedDot({index:Number(t.getStorageSync("FOOTER_ADDCART"))||2})})))})),g(o,"watch",{isLogin:{deep:!0,handler:function(e,n){var o=(new Date).toLocaleDateString();if(e){try{var i=t.getStorageSync("oldDate")||""}catch(a){}i!=o&&this.getCoupon()}}}}),g(o,"onReady",(function(){})),g(o,"methods",{reconnect:function(){var e=this;t.showLoading({title:"加载中"}),this.diyData(),this.getIndexData(),getShare().then((function(t){e.shareInfo=t.data}))},goICP:function(){t.navigateTo({url:"/pages/annex/web_view/index?url=https://beian.miit.gov.cn/"})},bindHeighta:function(t){},bindHeight:function(e){t.hideLoading(),this.domOffsetTop=e.top},goGoodsDetail:function(e){(0,u.goShopDetail)(e,this.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},get_host_product:function(){var t=this;t.hotScroll||(0,r.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},changeSort:function(t,e){this.curSort!=e&&(this.curSort=e,this.sid=t.id,this.goodList=[],this.goodPage=1,this.loaded=!1,this.getGoodsList())},bindSortId:function(t){this.isSortType=-99==t?0:1,this.getProductList(t),0==this.hostProduct.length&&this.get_host_product()},getProductList:function(t){var e=this;this.curSort=0,this.loaded=!1,this.sortAll.length>0?(this.sortAll.forEach((function(n,o){n.id==t&&(e.$set(e,"sortList",n),e.sid=n.children.length?n.children[0].id:"")})),this.goodList=[],this.goodPage=1,this.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))):(0,r.getCategoryList)().then((function(n){e.sortAll=n.data,n.data.forEach((function(n,o){n.id==t&&(e.sortList=n,e.sid=n.children.length?n.children[0].id:"")})),e.goodList=[],e.goodPage=1,e.$nextTick((function(){""!=e.sortList&&e.getGoodsList()}))}))},getGoodsList:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,r.getProductslist)({sid:this.sid,keyword:"",priceOrder:"",salesOrder:"",news:0,page:this.goodPage,limit:10,cid:this.sortList.id}).then((function(e){t.loading=!1,t.loaded=e.data.length<10,t.goodPage++,t.goodList=t.goodList.concat(e.data)})))},getNewCoupon:function(){var e=this,n=t.getStorageSync("oldUser")||0;n||(0,a.getCouponNewUser)().then((function(n){var o=n.data;o.show?o.list.length&&(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("oldUser",1)):t.setStorageSync("oldUser",1)}))},getCoupon:function(){var e=this,n=t.getStorageSync("tagDate")||"",o=(new Date).toLocaleDateString();n===o?this.getNewCoupon():(0,a.getCouponV2)().then((function(n){var o=n.data;o.list.length?(e.isCouponShow=!0,e.couponObj=o,t.setStorageSync("tagDate",(new Date).toLocaleDateString())):e.getNewCoupon()}))},couponClose:function(){this.isCouponShow=!1,t.getStorageSync("oldUser")||this.getNewCoupon()},onLoadFun:function(){},getTemlIds:function(){var t=wx.getStorageSync(c.SUBSCRIBE_MESSAGE);t||(0,a.getTemlIds)().then((function(t){t.data&&wx.setStorageSync(c.SUBSCRIBE_MESSAGE,JSON.stringify(t.data))}))},objToArr:function(t){var e=Object.keys(t),n=e.map((function(e){return t[e]}));return n},diyData:function(){var e=this,n=this;(0,a.getDiy)(0).then((function(o){setTimeout((function(){e.isNodes++}),0),e.errorNetwork=!1;var i=o.data;i.is_bg_color&&(e.bgColor=i.color_picker),i.is_bg_pic&&(e.bgPic=i.bg_pic,e.bgTabVal=i.bg_tab_val),e.pageShow=i.is_show,t.setNavigationBarTitle({title:o.data.title});var a=[],c=n.objToArr(o.data.value);function s(t,e){return t.timestamp-e.timestamp}c.forEach((function(o,i,c){"headerSerch"==o.name&&(e.isHeaderSerch=!0),"pageFoot"==o.name&&(o.status&&o.status.status&&(e.newData=o,setTimeout((function(t){n.$set(n,"footerStatus",!0)}),50)),t.setStorageSync("FOOTER_BAR",!(!o.status||!o.status.status)),o.menuList.map((function(e,n){"/pages/order_addcart/order_addcart"===e.link&&t.setStorageSync("FOOTER_ADDCART",n)})),c.splice(i,1)),"promotionList"==o.name&&(n.numConfig=o.numConfig.val,n.goodType=o.tabConfig.list[0].link.activeVal,n.getGroomList()),o.name,a=c})),a.sort(s),n.styleConfig=a,setTimeout((function(){e.showSkeleton=!1}),300),t.stopPullDownRefresh({success:function(t){}})})).catch((function(t){}))},getIndexData:function(){},changeBarg:function(e){this.isLogin?t.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(e.id,"&bargain=").concat(this.$store.state.app.uid)}):(0,l.toLogin)()},changeTab:function(t){this.goodType=t,this.tempArr=[],this.page=1,this.loadend=!1;var e=!0;this.getGroomList(e)},getGroomList:function(t){var e=this,n=this,o=n.goodType;return!n.loadend&&(!n.loading&&(t&&n.$set(n,"iSshowH",!0),void(0,r.getGroomList)(o,{page:n.page,limit:this.numConfig}).then((function(t){var o=t.data;n.$set(n,"iSshowH",!1);var i=Math.ceil(e.numConfig/e.limit),a=o.list,c=a.length<n.limit||n.page>=i,s=n.$util.SplitArray(a,n.tempArr);n.$set(n,"tempArr",s.slice(0,e.numConfig)),n.loadend=c,n.loadTitle=c?"没有更多内容啦~":"加载更多",n.page=n.page+1,n.loading=!1})).catch((function(t){n.loading=!1,n.loadTitle="加载更多"}))))},goRouter:function(e){var n=getCurrentPages(),o=n[n.length-1].$page.fullPath;e.link!=o&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},goDetail:function(e){(0,u.goShopDetail)(e,this.$store.state.app.uid).then((function(n){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},onsollBotton:function(){0==this.isSortType||this.getGoodsList()}}),g(o,"onReachBottom",(function(){})),g(o,"onPageScroll",(function(t){})),g(o,"onShareAppMessage",(function(){return{title:this.shareInfo.title,path:"/pages/index/index"}})),g(o,"onShareTimeline",(function(){return{title:this.shareInfo.title,imageUrl:this.shareInfo.img}})),o);e.default=F}).call(this,n("543d")["default"])},"1e04":function(t,e,n){},"28c0":function(t,e,n){"use strict";n.r(e);var o=n("bfc5"),i=n("db99");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("db47");var c,s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=r.exports},bfc5:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},db47:function(t,e,n){"use strict";var o=n("1e04"),i=n.n(o);i.a},db99:function(t,e,n){"use strict";n.r(e);var o=n("1c4a"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/index-create-component',
    {
        'pages/index/diy/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("28c0"))
        })
    },
    [['pages/index/diy/index-create-component']]
]);