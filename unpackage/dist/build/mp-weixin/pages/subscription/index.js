(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/subscription/index","pages/index/visualization/components/tabBar"],{"1ac8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("6fa1"),i=(a(n("9938")),n("4713"));function a(t){return t&&t.__esModule?t:{default:t}}var u=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("af3d"))}.bind(null,n)).catch(n.oe)},s={name:"home",components:{home:u},data:function(){return{listBanner:["https://cdn.uviewui.com/uview/swiper/swiper1.png","https://cdn.uviewui.com/uview/swiper/swiper2.png","https://cdn.uviewui.com/uview/swiper/swiper3.png"],endTime:"",endTimeStr:"",endTimeDate:null,current:1,current2:1,zhuanquListCom:[{name:"SK-||神仙水体验装",dec:"SK-||神仙水体验装",nums:"25",sjPrice:100,oldPrice:200,title:"第1轮 第50期",rengou:"第53期认购满，发放本期广告补贴",status:1,btns:1}],zhuanquList:[],pgList:[20,0,0,0],showPop:!0,amount:"",good_id:"",userInfo:"",title:"",list:[{iconPath:n("c6f5"),selectedIconPath:n("3171"),text:"首页",customIcon:!1,pagePath:"/pages/index/index",activeColor:"#3981A5",inactiveColor:"#808080"},{iconPath:n("e565"),selectedIconPath:n("ffa2"),text:"认购区",customIcon:!1,pagePath:"/pages/goods_cate/goods_cate",activeColor:"#3981A5",inactiveColor:"#808080"},{iconPath:n("01ea"),selectedIconPath:n("01ea"),text:"预售区",midButton:!0,customIcon:!1,pagePath:"/pages/subscription/index",activeColor:"#3981A5",inactiveColor:"#808080"},{iconPath:n("6307"),selectedIconPath:n("baca"),text:"换购区",customIcon:!1,pagePath:"/pages/points_mall/index",activeColor:"#3981A5",inactiveColor:"#808080"},{iconPath:n("9064"),selectedIconPath:n("2294"),text:"我的",isDot:!1,customIcon:!1,pagePath:"/pages/user/index",activeColor:"#3981A5",inactiveColor:"#808080"}],selectIndex:2,is_openbreak:"",countdownh:"",countdownm:"",countdowns:"",countdownh2:"",countdownm2:"",countdowns2:"",timer:null,end_time:"",start_time:""}},onShow:function(){this.getUserInfo()},watch:{},onLoad:function(){var e=this;this.timer=setInterval((function(){e.showtime(),e.showtime2()})),t.showLoading({title:"正在加载",mask:!0})},methods:{comClick:function(){var t=this;t.$util.Tips({title:"暂未开放"})},showtime:function(){var t=new Date,e=new Date("2022/09/22 11:30:00"),n=e.getTime()-t.getTime(),o=Math.floor(n/864e5),i=Math.floor(n/36e5%24+24*o)<10?"0"+Math.floor(n/36e5%24+24*o):Math.floor(n/36e5%24+24*o),a=Math.floor(n/6e4%60)<10?"0"+Math.floor(n/6e4%60):Math.floor(n/6e4%60),u=Math.floor(n/1e3%60)<10?"0"+Math.floor(n/1e3%60):Math.floor(n/1e3%60);this.countdownh=i,this.countdownm=a,this.countdowns=u,n<0&&(this.countdownh=this.countdownm=this.countdowns="00")},showtime2:function(){var t=new Date,e=new Date("2022/09/22 20:30:00"),n=e.getTime()-t.getTime(),o=Math.floor(n/864e5),i=Math.floor(n/36e5%24+24*o)<10?"0"+Math.floor(n/36e5%24+24*o):Math.floor(n/36e5%24+24*o),a=Math.floor(n/6e4%60)<10?"0"+Math.floor(n/6e4%60):Math.floor(n/6e4%60),u=Math.floor(n/1e3%60)<10?"0"+Math.floor(n/1e3%60):Math.floor(n/1e3%60);this.countdownh2=i,this.countdownm2=a,this.countdowns2=u,n<0&&(this.countdownh2=this.countdownm2=this.countdowns2="00")},closebtn:function(){this.$refs.guize.close("center")},confirmbtn:function(){this.$refs.guize.close("center")},gotoYyue:function(){t.navigateTo({url:"/pages/users/user_cash/index"})},gotoJilu:function(){t.navigateTo({url:"/pages/subscription/order"})},confirm:function(){0===this.status&&(this.bookingUserList(),this.getBreaklists()),1===this.status&&(this.joinbreak(),this.getBreaklists())},joinbreak:function(){var t=this,e=this;(0,i.joinbreak)({amount:e.amount,user_id:e.userInfo.uid,id:e.good_id}).then((function(n){200!=n.status?(e.$util.Tips({title:n.msg}),t.amount=""):(e.$util.Tips({title:"抢购成功",icon:"success"}),t.$refs.popup.close("center"))}))},gotoGuize:function(){this.$refs.guize.open("center")},closeGz:function(){this.$refs.guize.close("center")},getBreaklists:function(){var t=this;1===t.is_openbreak?(0,i.breaklist)({type:2,status:this.current2}).then((function(e){t.zhuanquList=e.data.lists})):(0,i.breaklist)({type:this.current,status:this.current2}).then((function(e){t.zhuanquList=e.data.lists}))},weikaishi:function(){var t=this;t.$util.Tips({title:"暂未开始抢购"})},bookingUserList:function(){var t=this,e=this;(0,i.bookingUserList)({amount:e.amount,user_id:e.userInfo.uid,id:e.good_id}).then((function(n){200!=n.status?(e.$util.Tips({title:n.msg}),t.amount=""):(e.$util.Tips({title:"预约成功",icon:"success"}),t.$refs.popup.close("center"))}))},clickCancel:function(){this.$refs.popup.close("center")},open:function(t){this.good_id=t.id,this.status=t.status,this.$refs.popup.open("center")},changqu:function(t){this.current=t,this.getBreaklists()},changqu2:function(t){this.current2=t,this.getBreaklists()},getUserInfo:function(){var e=this,n=this;(0,o.getUserInfo)().then((function(o){t.hideLoading(),n.userInfo=o.data,n.is_openbreak=n.userInfo.is_openbreak,e.getBreaklists(),n.$store.commit("SETUID",o.data.uid),n.$store.commit("UPDATE_USERINFO",o.data),n.isStatus=!0}))}}};e.default=s}).call(this,n("543d")["default"])},2370:function(t,e,n){},4743:function(t,e,n){"use strict";n.r(e);var o=n("8a40"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"561e":function(t,e,n){},"56a01":function(t,e,n){"use strict";var o=n("561e"),i=n.n(o);i.a},6735:function(t,e,n){"use strict";(function(t){n("8244");o(n("66fd"));var e=o(n("aa3b"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"7e04":function(t,e,n){"use strict";var o=n("2370"),i=n.n(o);i.a},"8a40":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("9101"),i=n("e5d6"),a=u(n("8c9a"));function u(t){return t&&t.__esModule?t:{default:t}}var s=getApp(),c={name:"tabBar",props:{pagePath:null,dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val)}}},mixins:[a.default],data:function(){return{name:this.$options.name,page:"/pages/index/index",tabbar:this.$Cache.get("TAB_BAR")?JSON.parse(this.$Cache.get("TAB_BAR")):[],isShow:!0,isIframe:s.globalData.isIframe}},mounted:function(){this.tabbar.length||this.getDiyData()},methods:{getDiyData:function(){var e=this;(0,o.getDiy)().then((function(t){var n=t.data.tabBar.default.tabBarList.list;e.$Cache.set("TAB_BAR",n),e.tabbar=n})).catch((function(e){t.showToast({title:e,icon:"none"})}))},changeTab:function(e){var n=this;(0,i.goPage)().then((function(o){n.page=e.link,t.switchTab({url:n.page,fail:function(){t.navigateTo({url:n.page})}})}))}}};e.default=c}).call(this,n("543d")["default"])},9938:function(t,e,n){"use strict";n.r(e);var o=n("d05a"),i=n("4743");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("7e04");var u,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3909482c",null,!1,o["a"],u);e["default"]=c.exports},aa3b:function(t,e,n){"use strict";n.r(e);var o=n("ea79"),i=n("d1be");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("56a01");var u,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=c.exports},d05a:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},d1be:function(t,e,n){"use strict";n.r(e);var o=n("1ac8"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},ea79:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uSwiper:function(){return n.e("node-modules/uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"63c3"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"fbc2"))},uniPopupDialog:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(n.bind(null,"c5a0"))},uTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-tabbar/u-tabbar")]).then(n.bind(null,"87d7"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]}},[["6735","common/runtime","common/vendor"]]]);