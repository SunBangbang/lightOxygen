(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-payment_on_behalf-pay_status"],{"373f":function(t,n,a){var i=a("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.main[data-v-762330b6]{width:100%;height:100vh;background-color:#fff}.main .payment-status[data-v-762330b6]{background-color:#fff;margin:%?0?% %?30?% 0 %?30?%;border-radius:%?10?%;padding:%?94?% 0 %?60?% 0;color:#333}.main .payment-status .icons[data-v-762330b6]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;border:%?6?% solid #f5f5f5;margin:%?0?% auto 0 auto;background-color:#999}.main .payment-status .rmb[data-v-762330b6]{font-size:%?33?%}.main .payment-status .status[data-v-762330b6]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?7?% 0}.main .payment-status .wrapper[data-v-762330b6]{text-align:center;color:#333;font-size:%?66?%;font-weight:700}.main .payment-status .head-other[data-v-762330b6]{display:flex;align-items:center;justify-content:center;padding-top:%?20?%}.main .payment-status .head-other .user-img[data-v-762330b6]{display:flex;align-items:center}.main .payment-status .head-other .user-img uni-image[data-v-762330b6]{width:%?50?%;height:%?50?%;border-radius:50%}.main .payment-status .head-other .order-status[data-v-762330b6]{margin-left:%?20?%;color:#666;padding:%?6?% %?13?%;font-size:%?24?%}.main .returnBnt[data-v-762330b6]{width:80%;height:%?86?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto;background-color:var(--view-theme)}',""]),t.exports=n},"3a8e":function(t,n,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("2826"),s=a("a110"),o=a("26cb"),r=i(a("9fdf")),u=a("8460"),d=void 0,c={mixins:[r.default],data:function(){return{loading:!1,isAuto:!1,isShowAuth:!1,resData:{}}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&d.getDetail()},deep:!0}},onLoad:function(t){if(this.options=t,!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id},onShow:function(){this.isLogin?this.getDetail():(0,s.toLogin)()},methods:{getDetail:function(){var t=this;(0,u.friendDetail)(this.orderId).then((function(n){if(0==t.resData.paid)return t.$util.Tips({title:"该订单暂未支付"},{tab:3,url:1});t.resData=n.data.info}))},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getDetail()},getOrderPayInfo:function(){var t=this,n=this;uni.showLoading({title:"正在加载中"}),(0,e.getOrderDetail)(n.orderId).then((function(a){uni.hideLoading(),n.$set(n,"order_pay_info",a.data),uni.setNavigationBarTitle({title:a.data.paid?"支付成功":"未支付"}),t.loading=!0})).catch((function(n){t.loading=!0,uni.hideLoading()}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})}}};n.default=c}).call(this,a("5a52")["default"])},"48e8":function(t,n,a){var i=a("373f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("1e809d55",i,!0,{sourceMap:!1,shadowMode:!1})},"53ae":function(t,n,a){"use strict";a.r(n);var i=a("3a8e"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,(function(){return i[t]}))}(s);n["default"]=e.a},6872:function(t,n,a){"use strict";var i=a("48e8"),e=a.n(i);e.a},b00a:function(t,n,a){"use strict";var i;a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return i}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"main",style:t.colorStyle},[a("v-uni-view",{staticClass:"payment-status"},[a("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg-color"}),a("v-uni-view",{staticClass:"status"},[t._v("代付成功")]),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"itemCom"},[a("v-uni-text",{staticClass:"rmb"},[t._v("¥")]),t._v(t._s(t.resData.pay_price||0))],1)],1),a("v-uni-view",{staticClass:"head-other"},[a("v-uni-view",{staticClass:"user-img"},[a("v-uni-image",{attrs:{src:t.resData.avatar,mode:""}})],1),a("v-uni-view",{staticClass:"order-status"},[t._v("谢谢你为我付款，还可以再去看看其他商品哟~")])],1)],1),a("v-uni-button",{staticClass:"returnBnt",attrs:{formType:"submit","hover-class":"none"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")])],1)},s=[]},e046:function(t,n,a){"use strict";a.r(n);var i=a("b00a"),e=a("53ae");for(var s in e)"default"!==s&&function(t){a.d(n,t,(function(){return e[t]}))}(s);a("6872");var o,r=a("f0c5"),u=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"762330b6",null,!1,i["a"],o);n["default"]=u.exports}}]);