(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_spread_money/index"],{"00a5":function(t,e,n){"use strict";(function(t){n("8244");i(n("66fd"));var e=i(n("7bcf"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"2d5f":function(t,e,n){"use strict";var i=n("cb9f"),o=n.n(i);o.a},"7bcf":function(t,e,n){"use strict";n.r(e);var i=n("91c7"),o=n("a6df");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("2d5f");var c,r=n("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"725c880c",null,!1,i["a"],c);e["default"]=u.exports},"91c7":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},a6df:function(t,e,n){"use strict";n.r(e);var i=n("e344"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},cb9f:function(t,e,n){},e344:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("6fa1"),o=n("0ddd"),a=n("26cb"),c=r(n("8c9a"));function r(t){return t&&t.__esModule?t:{default:t}}var u=function(){n.e("components/Authorize").then(function(){return resolve(n("5c82"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/emptyPage").then(function(){return resolve(n("e4fe"))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("af3d"))}.bind(null,n)).catch(n.oe)},l={components:{authorize:u,emptyPage:d,home:s},mixins:[c.default],data:function(){return{name:"",type:0,page:1,limit:15,loading:!1,loadend:!1,loadTitle:"加载更多",recordList:[],recordType:0,recordCount:0,extractCount:0,times:[]}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin?this.type=t.type:(0,o.toLogin)()},onShow:function(){var e=this.type;1==e?(t.setNavigationBarTitle({title:"提现记录"}),this.name="提现总额",this.recordType=4,this.getRecordList(),this.getRecordListCount()):2==e?(t.setNavigationBarTitle({title:"佣金记录"}),this.name="佣金明细",this.recordType=3,this.getRecordList(),this.getRecordListCount()):t.showToast({title:"参数错误",icon:"none",duration:1e3,mask:!0,success:function(e){setTimeout((function(){t.navigateBack({delta:1})}),1200)}})},methods:{getRecordList:function(){var t=this,e=this,n=e.page,o=e.limit,a=e.recordType;e.loading||e.loadend||(e.loading=!0,e.loadTitle="",(0,i.getCommissionInfo)({page:n,limit:o},a).then((function(n){for(var i=0;i<n.data.time.length;i++)t.times.includes(n.data.time[i])||(t.times.push(n.data.time[i]),t.recordList.push({time:n.data.time[i],child:[]}));for(var o=0;o<t.times.length;o++)for(var a=0;a<n.data.list.length;a++)t.times[o]===n.data.list[a].time_key&&t.recordList[o].child.push(n.data.list[a]);var c=n.data.list.length<e.limit;e.loadend=c,e.loadTitle=c?"没有更多内容啦~":"加载更多",e.page+=1,e.loading=!1})).catch((function(t){e.loading=!1,e.loadTitle="加载更多"})))},getRecordListCount:function(){var t=this;(0,i.getSpreadInfo)().then((function(e){t.recordCount=e.data.commissionCount,t.extractCount=e.data.extractCount}))}},onReachBottom:function(){this.getRecordList()}};e.default=l}).call(this,n("543d")["default"])}},[["00a5","common/runtime","common/vendor"]]]);