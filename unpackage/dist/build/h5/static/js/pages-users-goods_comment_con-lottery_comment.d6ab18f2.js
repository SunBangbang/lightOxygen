(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_comment_con-lottery_comment"],{"04a9":function(t,e,a){"use strict";var i=a("69f2"),n=a.n(i);n.a},"051d":function(t,e,a){"use strict";a.r(e);var i=a("0597"),n=a("c511");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e26c");var s,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"1a076b28",null,!1,i["a"],s);e["default"]=o.exports},"0597":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.aleartStatus?i("v-uni-view",{staticClass:"aleart"},[i("v-uni-image",{staticClass:"close",attrs:{src:a("273b")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.posterImageClose.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.aleartData.title))]),i("v-uni-view",{staticClass:"aleart-body"},[t.aleartData.img?i("v-uni-image",{staticClass:"goods-img",attrs:{src:t.aleartData.img,mode:""}}):t._e(),i("v-uni-text",{staticClass:"msg"},[t._v(t._s(t.aleartData.msg))])],1),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.posterImageClose()}}},[t._v(t._s(t.aleartData.btn))])],1):t._e()},r=[]},"0e3a":function(t,e,a){"use strict";a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=n,e.openPaySubscribe=r,e.openOrderSubscribe=s,e.openExtrctSubscribe=d,e.openPinkSubscribe=o,e.openBargainSubscribe=c,e.openOrderRefundSubscribe=l,e.openRechargeSubscribe=u,e.subscribe=f;var i=a("62d0");function n(){var t={},e=uni.getStorageSync(i.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function r(){var t=n();return f([t.order_pay_success,t.order_deliver_success,t.order_postage_success])}function s(){var t=n();return f([t.order_take,t.integral_accout,t.order_brokerage])}function d(){var t=n();return f([t.user_extract])}function o(){var t=n();return f([t.pink_true,t.pink_status])}function c(){var t=n();return f([t.bargain_success])}function l(){var t=n();return f([t.order_refund])}function u(){var t=n();return f([t.recharge_success])}function f(t){var e=wx;return new Promise((function(a,i){e.requestSubscribeMessage({tmplIds:t,success:function(t){return a(t)},fail:function(t){return a(t)}})}))}},1241:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{aleartData:{}}},props:{aleartType:{type:Number},alData:{type:Object},aleartStatus:{type:Boolean,default:!1}},watch:{aleartType:function(t){1===t?this.aleartData={title:"暂无抽奖资格",msg:"1、您未关注公众号\n2、您未获得VIP权限，获取VIP途径：\n（1）购买过打通版的用户可在会员群联系官方客服开通\n（2）官方小程序商城购买CRMEB打通版、企业版后自动开通",btn:"我知道了"}:2===t&&(this.aleartData={title:"抽奖结果",img:this.alData.image,msg:this.alData.prompt,btn:"好的",type:this.alData.type})},aleartStatus:function(t){t||(this.aleartData={})}},methods:{posterImageClose:function(t){this.$emit("close",!1)}}};e.default=i},"2c68":function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("d81d"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("8460"),r=a("2724"),s=a("a110"),d=a("26cb"),o=i(a("4d92")),c={components:{home:o.default},props:{aleartStatus:{type:Boolean,default:!1}},data:function(){return{regionDval:["浙江省","杭州市","滨江区"],id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101"}},computed:(0,d.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUserAddress()},deep:!0}},created:function(t){this.isLogin?(this.getCityList(),this.getUserAddress()):(0,s.toLogin)()},methods:{getCityList:function(){var t=this,e=this;(0,r.getCity)().then((function(a){t.district=a.data,e.initialize()}))},initialize:function(){var t=this,e=[],a=[],i=[];if(t.district.length){var n=t.district[0].c||[],r=n.length&&n[0].c||[];t.district.forEach((function(t){e.push(t.n)})),n.forEach((function(t){a.push(t.n)})),r.forEach((function(t){i.push(t.n)})),this.multiArray=[e,a,i]}},bindRegionChange:function(t){var e=this.multiIndex,a=this.district[e[0]]||{c:[]},i=a.c[e[1]]||{v:0},n=this.multiArray,r=t.detail.value;this.region=[n[0][r[0]],n[1][r[1]],n[2][r[2]]],this.cityId=i.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var e=this,a=t.detail.column,i=t.detail.value,n=this.district[i]||{c:[]},r=e.multiArray,s=e.multiIndex;switch(s[a]=i,a){case 0:var d=n.c[0]||{c:[]};r[1]=n.c.map((function(t){return t.n})),r[2]=d.c.map((function(t){return t.n}));break;case 1:var o=e.district[s[0]].c[s[1]].c||[];r[2]=o.map((function(t){return t.n}));break;case 2:break}this.multiArray=r,this.multiIndex=s},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,n.getAddressDetail)(this.id).then((function(e){var a=[e.data.province,e.data.city,e.data.district];t.$set(t,"userAddress",e.data),t.$set(t,"region",a),t.cityId=e.data.city_id}))},getWxAddress:function(){var t=this;uni.authorize({scope:"scope.address",success:function(e){uni.chooseAddress({success:function(e){var a={};a.province=e.provinceName,a.city=e.cityName,a.district=e.countyName,(0,n.editAddress)({address:a,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(t.cartId){t.cartId,t.pinkId,t.couponId;t.cartId="",t.pinkId="",t.couponId="",uni.navigateTo({url:t.id})}else uni.navigateBack({delta:1})}),1e3),t.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(e){return t.$util.Tips({title:e})}))},fail:function(e){if("chooseAddress:cancel"==e.errMsg)return t.$util.Tips({title:"取消选择"})}})},fail:function(e){uni.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)uni.openSetting({success:function(t){}});else if(e.cancel)return t.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var t=this,e=this;e.$wechat.openAddress().then((function(a){(0,n.editAddress)({id:t.id,real_name:a.userName,phone:a.telNumber,address:{province:a.provinceName,city:a.cityName,district:a.countryName},detail:a.detailInfo,is_default:1,post_code:a.postalCode,type:1}).then((function(){setTimeout((function(){uni.navigateTo({url:e.id})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(t){var e=this,a=t.detail.value;if(!a.name)return e.$util.Tips({title:"请填写收货人姓名"});if(!a.phone)return e.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(a.phone))return e.$util.Tips({title:"请输入正确的手机号码"});if("省"==e.region[0])return e.$util.Tips({title:"请选择所在地区"});if(!a.detail)return e.$util.Tips({title:"请填写详细地址"});var i=e.region;a.address={province:i[0],city:i[1],district:i[2],city_id:e.cityId},this.$emit("getAddress",a)},posterImageClose:function(){this.$emit("close",!1)}}};e.default=c},"2eae":function(t,e,a){"use strict";a.r(e);var i=a("2c68"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"333e":function(t,e,a){t.exports=a.p+"static/img/pay-lottery-bag.0a8c3de1.png"},3965:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAMAAACsn+1dAAAAsVBMVEUAAABAgP/vMCD/jwBAgP9AeP/vMCD/lwhGef9Fev/qMCD/lQtEe/9EfP/rMCD/lwxDfP/oMCBGfP/pMyP/lg1Gff/qMyNFff/qMiP/lQ1Fff//lQ5Eff/oMiL/lg5Eff/pMiJGfv/pMiL9lQ79lg79lQ7pMiLpMyP9lg7+lg/pMyP+lQ7oMyP+lg/oMiP+lg/+lQ/pMiL+lg/+lg/+lQ/pMiL+lQ/pMyL+lg/pMyP+lg+2dJnSAAAAOXRSTlMACBAQGCAgICgwMDA4QEBASE9QUFBYX2BgYGhvcHBweH+AgICPkJ+goK+wsL+/wMDP0NDf4O/v8PB4FfzlAAABYElEQVQYGe3B21LCMBQF0F2LFKmCclFQAWMUq1wKUoo5//9hMrUgrTlOEt8c1sJe+DRbES1mdwFc9FPamzVhK1xRwasPK52UShYBLPTpp9SHsTAljYUPUwlpSRjqEyOAmYQYEYyExElh5JlYTZiIiSVhIiGWhAnixTBBvAlMxMSSMBETawgTQ2IFMBEQJ4GZmBgSnPbDdPpwhVyT9BIfer21yqyv8WVCWh3ovai9MTL+O2lE0HtRB8bIhB/0wwR6DVXQQMZ/p5IIjLkqmOKLL+lQ0gGjqkqqyAXRB+US6YPTUCUNfGtKGUdyGOAXA1UygJ22KmnDTl2V1GFpowo2sPWoCh5h62SpDixPYK2+UXubOhxU5yq3rMJN701tvfVwdHT0H3nnl5dncFcbia37ChxVRiIz8uCmK3LncCN2buBG7NzAzb3IdeHmQuRqcOPdikwLrryWEGJ0gT/wTk/h5BNb3MO9jWlv4QAAAABJRU5ErkJggg=="},"4d34":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-532d2cb5]{color:#fff;background-color:var(--view-theme);display:flex;align-items:center;justify-content:center;flex-direction:column;padding:%?80?% 0}.header .pay-status[data-v-532d2cb5]{display:flex;align-items:center}.header .pay-status .iconfont[data-v-532d2cb5]{font-size:%?74?%;background:rgba(0,0,0,.08);border-radius:50%;margin-right:%?30?%;padding:%?9?%}.header .pay-status .pay-status-r[data-v-532d2cb5]{display:flex;flex-direction:column}.header .pay-status .pay-status-r .pay-status-text[data-v-532d2cb5]{font-size:%?38?%;font-weight:700;padding-bottom:%?10?%}.header .grids[data-v-532d2cb5] .grid_wrap .lottery_wrap .lottery_grid li:nth-of-type(9){background:hsla(0,0%,100%,.2)!important}.header .jump[data-v-532d2cb5]{display:flex;padding-top:%?40?%}.header .jump .jump-det[data-v-532d2cb5]{background:#fff;opacity:1;border-radius:22px;color:#e93323;padding:%?10?% %?38?%;margin-right:%?30?%}.header .jump .jump-index[data-v-532d2cb5]{border:1px solid #feffff;opacity:1;padding:%?10?% %?38?%;border-radius:22px}.grids-top[data-v-532d2cb5]{display:flex;justify-content:center;padding:%?30?% 0 0 0}.grids-top uni-image[data-v-532d2cb5]{width:%?40?%;height:%?40?%}.grids-top .grids-title[data-v-532d2cb5]{display:flex;justify-content:center;font-size:20px;color:#e93323;z-index:999;padding:0 %?14?%;font-weight:700}[data-v-532d2cb5] .lottery_grid{background-color:#e93323;border-radius:%?12?%}.date[data-v-532d2cb5]{font-size:%?26?%;color:#fff}.grids[data-v-532d2cb5]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?20?%;position:relative;padding:%?30?%}.grids .grids-bag[data-v-532d2cb5]{position:absolute;top:0;left:0;width:%?750?%;height:%?750?%;padding:%?20?%;display:flex;justify-content:center;align-items:center}.grids .grids-box[data-v-532d2cb5]{width:%?700?%;height:%?700?%;padding:%?20?%;background-color:#e74435}.grids .winning-tips-list[data-v-532d2cb5]{display:flex;align-items:center;justify-content:center;width:50%;font-size:%?20?%;line-height:%?40?%;height:%?40?%;font-weight:400;color:#fff8f8;margin:%?30?% 0;z-index:999;background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3) 51%,hsla(0,0%,100%,0))}.grids .winning-tips-list .iconfont[data-v-532d2cb5]{font-size:%?20?%;margin-right:%?10?%}',""]),t.exports=e},"5a7b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.aleart[data-v-1a076b28]{width:%?500?%;position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:9999;top:50%;margin-top:%?-357?%;background-color:#fff;padding:%?30?%;border-radius:%?12?%}.aleart .title[data-v-1a076b28]{font-size:18px;color:#e82c27;font-weight:700;text-align:center;padding-bottom:%?10?%;border-bottom:1px solid rgba(232,44,39,.2)}.aleart .aleart-body[data-v-1a076b28]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:%?60?% 0}.aleart .aleart-body .goods-img[data-v-1a076b28]{width:%?150?%;height:%?150?%}.aleart .aleart-body .msg[data-v-1a076b28]{font-size:%?30?%;color:#282828}.aleart .btn[data-v-1a076b28]{width:100%;padding:%?15?% 0;color:#fff;background:linear-gradient(90deg,#f34a46,#fa9532);border-radius:20px;text-align:center}.aleart .close[data-v-1a076b28]{width:%?46?%;height:%?75?%;position:fixed;right:0;top:%?-73?%;display:block}',""]),t.exports=e},"5ccd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.aleart[data-v-4f334523]{width:%?500?%;position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:999;top:50%;margin-top:%?-357?%;border-radius:%?12?%}.aleart .title[data-v-4f334523]{padding:0;margin:0;height:%?110?%}.aleart .title .title-img[data-v-4f334523]{width:100%;height:100%}.aleart .aleart-body[data-v-4f334523]{display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#fdf7e7}.aleart .aleart-body .form-data[data-v-4f334523]{width:100%}.aleart .aleart-body .goods-img[data-v-4f334523]{width:%?150?%;height:%?150?%}.aleart .aleart-body .msg[data-v-4f334523]{font-size:%?30?%;color:#282828}.aleart .close[data-v-4f334523]{width:%?46?%;height:%?75?%;position:fixed;right:%?20?%;top:%?-73?%;display:block}.addAddress[data-v-4f334523]{width:100%;padding:%?30?% %?30?%}.addAddress .list[data-v-4f334523]{background-color:#fdf7e7}.addAddress .list .item[data-v-4f334523]{border:%?1?% solid #a05644;margin-bottom:%?24?%;padding:%?10?%;border-radius:%?6?%}.addAddress .list .item .name[data-v-4f334523]{width:%?195?%;font-size:%?30?%;color:#333}.addAddress .list .item .address[data-v-4f334523]{flex:1;margin-left:%?20?%}.addAddress .list .item uni-input[data-v-4f334523]{font-size:%?30?%}.addAddress .list .item .placeholder[data-v-4f334523]{color:#ccc}.addAddress .list .item uni-picker .picker[data-v-4f334523]{font-size:%?30?%}.addAddress .list .item uni-picker .iconfont[data-v-4f334523]{font-size:%?43?%}.addAddress .default[data-v-4f334523]{padding:0 %?30?%;height:%?90?%;background-color:#fff;margin-top:%?23?%}.addAddress .default uni-checkbox[data-v-4f334523]{margin-right:%?15?%}.addAddress .keepBnt[data-v-4f334523]{width:100%;height:%?86?%;border-radius:%?6?%;text-align:center;line-height:%?86?%;font-size:%?32?%;color:#452015;font-weight:700;background:#eebe6b;box-shadow:0 5px 9px 0 rgba(220,166,72,.24)}.addAddress .wechatAddress[data-v-4f334523]{height:%?86?%;border-radius:%?6?%;text-align:center;line-height:%?86?%;margin:0 auto;font-size:%?32?%;color:#fe960f;border:1px solid #fe960f}',""]),t.exports=e},"69f2":function(t,e,a){var i=a("4d34");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6c79748e",i,!0,{sourceMap:!1,shadowMode:!1})},"7d5a":function(t,e,a){"use strict";a.r(e);var i=a("f28f"),n=a("8102");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("04a9");var s,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"532d2cb5",null,!1,i["a"],s);e["default"]=o.exports},8102:function(t,e,a){"use strict";a.r(e);var i=a("f7df"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"89f8":function(t,e,a){t.exports=a.p+"static/img/address-aleart-header.cf1d5133.png"},"92ee":function(t,e,a){var i=a("5ccd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("66a4b71b",i,!0,{sourceMap:!1,shadowMode:!1})},9570:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.aleartStatus?i("v-uni-view",{staticClass:"aleart"},[i("v-uni-image",{staticClass:"close",attrs:{src:a("273b")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.posterImageClose.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"title"},[i("v-uni-image",{staticClass:"title-img",attrs:{src:a("89f8"),mode:""}})],1),i("v-uni-view",{staticClass:"aleart-body"},[i("v-uni-form",{staticClass:"form-data",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"addAddress"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入姓名",name:"name",value:t.userAddress.name,"placeholder-class":"placeholder"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-input",{attrs:{type:"number",placeholder:"请输入联系电话",name:"phone",value:t.userAddress.phone,"placeholder-class":"placeholder",pattern:"\\d*"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"address"},[i("v-uni-picker",{attrs:{mode:"multiSelector",value:t.valueRegion,range:t.multiArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindRegionChange.apply(void 0,arguments)},columnchange:function(e){arguments[0]=e=t.$handleEvent(e),t.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"acea-row"},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.region[0])+"，"+t._s(t.region[1])+"，"+t._s(t.region[2]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请填写具体地址",name:"detail","placeholder-class":"placeholder",value:t.userAddress.detail}})],1)],1),i("v-uni-button",{staticClass:"keepBnt",attrs:{"form-type":"submit"}},[t._v("提交")])],1)],1)],1)],1):t._e()},r=[]},9631:function(t,e,a){var i=a("5a7b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1c5b6420",i,!0,{sourceMap:!1,shadowMode:!1})},"99b1":function(t,e,a){"use strict";var i=a("92ee"),n=a.n(i);n.a},c511:function(t,e,a){"use strict";a.r(e);var i=a("1241"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},d108:function(t,e,a){"use strict";a.r(e);var i=a("9570"),n=a("2eae");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("99b1");var s,d=a("f0c5"),o=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"4f334523",null,!1,i["a"],s);e["default"]=o.exports},e26c:function(t,e,a){"use strict";var i=a("9631"),n=a.n(i);n.a},ebdd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAMAAABuDnn5AAAApVBMVEUAAABAgP9AgP/vMCD/jwBAgP9AeP/vMCD/lwhAef9Gef9Fev/qMCD/lQtEfP/rMCD/lwxDfP9GfP/pMyP/lg3qMyP/lg1Fff/qMiP/lQ1Fff//lQ5Eff/oMiJEff/pMiL/lw5Gfv/pMiL9lQ79lQ79lQ79lg7+lg/pMyP+lQ7oMyPoMiP+lg/+lQ/+lg/+lg/+lQ/pMiL+lQ/pMyL+lg/pMyP+lg/7+mDCAAAANXRSTlMACBAQEBggICAoKDAwMEBAQFBQUFBfX2BgYGhvcHB4f3+AgICQn6CvsLC/wMDP0N/g7+/w8OucP4YAAAFCSURBVEjH7ZXdUoMwEEZRIsVWC6VoDSoaaam1tWps9v0fTUPrDzSB3cw40wvPLXMm2c23i+eh6Y8yIbLRqUcjuBE7JicUbyB+MXD0hAiw3nFeF/MjpJiIBkOk2PREjuzonihwnR3ui/3qQ3R30SOKukj/SSn1dkU/8VFVnFFr9LeeeqB2NdqJS+o7Yk40J2db43uPnFV/qb0xPuX593REt2O/Mz2Z2zzqDZBMPq0k8P45dOJzuhNeP4NGzi8ZRZvBD/Ie7XEJNV6QV55CE5livAIMIM7kJg9k2OUxaRRh7nRRTdwhbmziot1LwUq7WNrF9idZ2cXCrUSAaato92DlKpZ/U+PCLnKHpFa0DzSzemvPMQG8a2s4Hmiaf9Rw2BrLEauDralxszeIo/fjay2kIWEl869KN2VM/AmwOC2KGGt9AIHTrc8Q5oODAAAAAElFTkSuQmCC"},f28f:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.lotteryShow,expression:"lotteryShow"}],staticClass:"header"},[i("v-uni-view",{staticClass:"pay-status"},[i("v-uni-text",{staticClass:"iconfont icon-gou"}),i("v-uni-view",{staticClass:"pay-status-r"},[i("v-uni-text",{staticClass:"pay-status-text"},[t._v("评价完成")]),i("v-uni-text",{staticClass:"date"},[t._v(t._s(t.date))])],1)],1),i("v-uni-view",{staticClass:"jump"},[i("v-uni-view",{staticClass:"jump-index",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.lotteryShow,expression:"lotteryShow"}],staticClass:"grids-top"},[i("v-uni-image",{attrs:{src:a("ebdd"),mode:""}}),i("v-uni-view",{staticClass:"grids-title"},[i("v-uni-view",[t._v("恭喜您，")]),i("v-uni-view",{staticClass:"grids-frequency"},[t._v("获得"+t._s(t.lottery_num)+"次")]),i("v-uni-view",[t._v("抽奖机会")])],1),i("v-uni-image",{attrs:{src:a("3965"),mode:""}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.lotteryShow,expression:"lotteryShow"}],staticClass:"grids"},[i("v-uni-image",{staticClass:"grids-bag",attrs:{src:a("333e"),mode:""}}),i("v-uni-view",{staticClass:"grids-box"},[i("gridsLottery",{attrs:{prizeData:t.prize},on:{get_winingIndex:function(e){arguments[0]=e=t.$handleEvent(e),t.getWiningIndex.apply(void 0,arguments)},luck_draw_finish:function(e){arguments[0]=e=t.$handleEvent(e),t.luck_draw_finish.apply(void 0,arguments)}}})],1)],1),i("lotteryAleart",{attrs:{aleartStatus:t.aleartStatus,alData:t.alData,aleartType:t.aleartType},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeLottery.apply(void 0,arguments)}}}),t.aleartStatus||t.addressModel?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lotteryAleartClose.apply(void 0,arguments)}}}):t._e(),i("userAddress",{attrs:{aleartStatus:t.addressModel},on:{getAddress:function(e){arguments[0]=e=t.$handleEvent(e),t.getAddress.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.addressModel=!1}.apply(void 0,arguments)}}})],1)},r=[]},f7df:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("e25e"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r,s=i(a("ade3")),d=i(a("c822")),o=i(a("051d")),c=i(a("d108")),l=(a("0e3a"),a("a110")),u=a("7d58"),f=a("26cb"),p=i(a("9fdf")),g=(r={mixins:[p.default],components:{gridsLottery:d.default,lotteryAleart:o.default,userAddress:c.default},computed:(0,f.mapGetters)(["isLogin"]),data:function(){return{lotteryShow:!1,addressModel:!1,lottery_num:0,aleartType:0,aleartStatus:!1,lottery_draw_param:{startIndex:3,totalCount:3,winingIndex:1,speed:100},alData:{},type:"",prize:[],orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,couponsHidden:!0,couponList:[]}}},(0,s.default)(r,"computed",(0,f.mapGetters)(["isLogin"])),(0,s.default)(r,"watch",{isLogin:{handler:function(t,e){},deep:!0}}),(0,s.default)(r,"onLoad",(function(t){this.orderId=t.order_id,this.type=t.type,this.date=this.set_time(t.date),this.isLogin?this.getLotteryData(this.type):(0,l.toLogin)(),document.addEventListener("visibilitychange",(function(t){document.visibilityState}))})),(0,s.default)(r,"methods",(n={set_time:function(t){var e=parseInt(t),a=new Date(e),i=a.getFullYear(),n=a.getMonth()+1;n=n<10?"0"+n:n;var r=a.getDate();r=r<10?"0"+r:r;var s=a.getHours();s=s<10?"0"+s:s;var d=a.getMinutes();d=d<10?"0"+d:d;var o=i+"-"+n+"-"+r+" "+s+":"+d;return o},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},getWiningIndex:function(t){var e=this;this.aleartType=0,(0,u.startLottery)({id:this.id}).then((function(a){e.prize.forEach((function(i,n){a.data.id===i.id&&(e.alData=a.data,e.lottery_draw_param.winingIndex=n,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})},getLotteryData:function(t){var e=this;(0,u.getLotteryData)(t).then((function(t){e.lotteryShow=!0,e.factor_num=t.data.lottery.factor_num,e.id=t.data.lottery.id,e.prize=t.data.lottery.prize,e.lottery_num=t.data.lottery_num,e.prize.push({a:1})})).catch((function(t){uni.redirectTo({url:"/pages/users/order_details/index?order_id="+e.orderId})}))},closeLottery:function(t){this.aleartStatus=!1,this.getLotteryData(this.type),6===this.alData.type&&(this.addressModel=!0)},getAddress:function(t){var e=this,a=t;a.id=this.alData.lottery_record_id,a.address=t.address.province+t.address.city+t.address.district+t.detail,(0,u.receiveLottery)(a).then((function(t){e.$util.Tips({title:"领取成功"}),e.addressModel=!1})).catch((function(t){e.$util.Tips({title:t})}))}},(0,s.default)(n,"getWiningIndex",(function(t){var e=this;this.aleartType=0,(0,u.startLottery)({id:this.id}).then((function(a){e.prize.forEach((function(i,n){a.data.id===i.id&&(e.alData=a.data,e.lottery_draw_param.winingIndex=n,t(e.lottery_draw_param))}))})).catch((function(t){e.$util.Tips({title:t})}))})),(0,s.default)(n,"luck_draw_finish",(function(t){this.aleartType=2,this.aleartStatus=!0})),n)),r);e.default=g}}]);