(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-annex-offline_pay-index"],{"0378":function(i,t,n){var a=n("1929");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("416d4a0a",a,!0,{sourceMap:!1,shadowMode:!1})},1929:function(i,t,n){var a=n("24fb");t=a(!1),t.push([i.i,"uni-page-body[data-v-ba273b82]{background-color:#fff}body.?%PAGE?%[data-v-ba273b82]{background-color:#fff}",""]),i.exports=t},3419:function(i,t,n){"use strict";var a=n("b45a"),e=n.n(a);e.a},6440:function(i,t,n){"use strict";var a=n("0378"),e=n.n(a);e.a},"93fe":function(i,t,n){"use strict";n.r(t);var a=n("e17b"),e=n("f603");for(var o in e)"default"!==o&&function(i){n.d(t,i,(function(){return e[i]}))}(o);n("6440"),n("3419");var s,c=n("f0c5"),u=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"ba273b82",null,!1,a["a"],s);t["default"]=u.exports},b45a:function(i,t,n){var a=n("bed1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("36f7ad76",a,!0,{sourceMap:!1,shadowMode:!1})},bed1:function(i,t,n){var a=n("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-ba273b82] uni-radio .uni-radio-input.uni-radio-input-checked{border:1px solid #fdc383!important;background-color:#fdc383!important}.input-section .section-hd[data-v-ba273b82]{padding:%?30?%;font-size:%?28?%;color:#666}.input-section .section-bd[data-v-ba273b82]{padding-right:%?30?%;padding-left:%?30?%}.input-section .input-group[data-v-ba273b82]{display:flex;align-items:flex-end;padding:%?45?% %?20?% %?47?%;font-size:%?80?%;color:#999}.input-section .input[data-v-ba273b82]{flex:1;height:%?110?%;margin-left:%?15?%;font-size:%?100?%;color:#282828}.input-section .discount[data-v-ba273b82]{padding:%?27?% %?20?%;border-top:%?1?% solid #eee;font-size:%?28?%;color:#e93323}.radio-section[data-v-ba273b82]{border-top:%?20?% solid #f5f5f5}.radio-section .section-hd[data-v-ba273b82]{padding:%?30?%;font-size:%?28?%;color:#666}.radio-section .section-bd[data-v-ba273b82]{padding-left:%?50?%}.radio-section .item[data-v-ba273b82]{display:flex;align-items:center;padding-top:%?30?%;padding-right:%?30?%;padding-bottom:%?30?%;border-bottom:%?1?% solid #f5f5f5}.radio-section .iconfont[data-v-ba273b82]{font-size:%?44?%}.radio-section .icon-yue[data-v-ba273b82]{color:#fe960f}.radio-section .icon-weixinzhifu[data-v-ba273b82]{color:#41b035}.radio-section .icon-zhifubao[data-v-ba273b82]{color:#099bdf}.radio-section .name[data-v-ba273b82]{flex:1;margin-left:%?30?%;font-size:%?30?%;color:#333}.radio-section .money[data-v-ba273b82]{float:right;padding-right:%?20?%;font-size:%?20?%}.button[data-v-ba273b82]{height:%?86?%;border-radius:%?43?%;margin:%?114?% %?30?% %?30?%;background:linear-gradient(90deg,#fee2b7,#fdc383);font-size:%?30?%;line-height:%?86?%;color:#5d3324}.alipay[data-v-ba273b82]{display:none}',""]),i.exports=t},d22d:function(i,t,n){"use strict";n("99af"),n("ac1f"),n("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2826"),e=n("a110"),o=n("26cb"),s=getApp(),c={data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1}},watch:{money:function(i,t){i&&"number"===typeof i?this.checkPrice():this.payPrice=""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(i){if(this.isLogin||(0,e.toLogin)(),i.code){var t=s.globalData.spid?s.globalData.spid:"";wechatAuthV2(i.code,t).then((function(t){location.href=decodeURIComponent(decodeURIComponent(i.back_url))}))}},onShow:function(){this.isLogin&&this.getPayType(),this.isWeixin=this.$wechat.isWeixin()},methods:{inputChange:function(i){var t=this;i.target.value=i.target.value.match(/^\d*(.?\d{0,2})/g)[0]||"",this.$nextTick((function(){t.money=i.target.value,t.checkPrice()}))},getPayType:function(){var i=this;(0,a.orderOfflinePayType)().then((function(t){var n=t.data,a=n.ali_pay_status,e=n.pay_weixin_open,o=n.yue_pay_status,s=n.offline_pay_status,c=n.site_name,u=n.now_money;i.alipay="1"===a,i.wxpay=1===e,i.yuePay=1===o,i.now_money=u,i.site_name=c,s||uni.showModal({title:"支付提醒",content:"线下支付已关闭，请点击确认按钮返回主页",showCancel:!1,success:function(){uni.switchTab({url:"/pages/index/index"})}}),c&&uni.setNavigationBarTitle({title:c})})).catch((function(i){uni.showToast({title:i,icon:"none"})}))},checkForm:function(i){var t=i.detail.value,n=t.money,a=t.method;n?this.combData(a):uni.showToast({title:"请输入支付金额",icon:"none"})},checkPrice:function(){var i=this;(0,a.offlineCheckPrice)({pay_price:this.money}).then((function(t){i.payPrice=t.data.pay_price})).catch((function(i){uni.showToast({title:i,icon:"none"})}))},combData:function(i){var t=this,n={type:3,pay_type:i,from:"weixinh5",price:this.payPrice||this.money,money:this.money};this.isWeixin&&(n.from="weixin"),this.paying||(this.paying=!0,uni.showLoading({title:"正在确认…"}),(0,a.offlineCreate)(n).then((function(i){uni.hideLoading(),t.callPay(i)})).catch((function(i){t.paying=!1,uni.showToast({title:i,icon:"none"})})))},callPay:function(i){var t=this,n=i.data,a=n.status,e=n.result,o=e.orderId,s=e.jsConfig,c="/pages/annex/offline_result/index?site_name="+this.site_name;switch(a){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:i.msg},{tab:5,url:c});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:i.msg,icon:"success"},{tab:5,url:c});break;case"WECHAT_PAY":this.$wechat.pay(e.jsConfig).then((function(i){t.paying=!1,t.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})})).catch((function(i){t.paying=!1,"chooseWXPay:cancel"==i.errMsg&&uni.showToast({title:"取消支付",icon:"none"})}));break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:i.msg});break;case"WECHAT_H5_PAY":this.paying=!1,uni.showToast({title:i.msg,success:function(){location.href=s.mweb_url}});break;case"ALIPAY_PAY":this.paying=!1,this.$wechat.isWeixin()?uni.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(s.qrCode)}):(this.alipayHtml=s,this.$nextTick((function(){document.getElementById("alipaysubmit").submit()})));break}}}};t.default=c},e17b:function(i,t,n){"use strict";var a;n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-form",{staticClass:"form",on:{submit:function(t){arguments[0]=t=i.$handleEvent(t),i.checkForm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-section"},[n("v-uni-view",{staticClass:"section-hd"},[i._v("支付金额")]),n("v-uni-view",{staticClass:"section-bd"},[n("v-uni-view",{staticClass:"input-group"},[i._v("￥"),n("v-uni-input",{staticClass:"input",attrs:{name:"money",type:"digit",placeholder:"0.00"},on:{input:function(t){arguments[0]=t=i.$handleEvent(t),i.inputChange.apply(void 0,arguments)}},model:{value:i.money,callback:function(t){i.money=i._n(t)},expression:"money"}})],1),i.payPrice?n("v-uni-view",{staticClass:"discount"},[i._v("会员优惠价：￥"+i._s(i.payPrice))]):i._e()],1)],1),n("v-uni-view",{staticClass:"radio-section"},[n("v-uni-view",{staticClass:"section-hd"},[i._v("支付方式")]),n("v-uni-radio-group",{staticClass:"section-bd",attrs:{name:"method"}},[i.yuePay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-yue"}),n("v-uni-text",{staticClass:"name"},[i._v("购物券支付"),n("v-uni-text",{staticClass:"money"},[i._v("可用购物券:"+i._s(i.now_money||0)+"￥")])],1),n("v-uni-radio",{attrs:{value:"yue",checked:"yue"===i.payType}})],1):i._e(),i.wxpay?n("v-uni-label",{staticClass:"item"},[n("v-uni-text",{staticClass:"iconfont icon-weixinzhifu"}),n("v-uni-text",{staticClass:"name"},[i._v("微信支付")]),n("v-uni-radio",{attrs:{value:"weixin",checked:"weixin"===i.payType}})],1):i._e()],1)],1),n("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit"}},[i._v("确认")]),n("v-uni-view",{staticClass:"alipay",domProps:{innerHTML:i._s(i.alipayHtml)}})],1)},o=[]},f603:function(i,t,n){"use strict";n.r(t);var a=n("d22d"),e=n.n(a);for(var o in a)"default"!==o&&function(i){n.d(t,i,(function(){return a[i]}))}(o);t["default"]=e.a}}]);