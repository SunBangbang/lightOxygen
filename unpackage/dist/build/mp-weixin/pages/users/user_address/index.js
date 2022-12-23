(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_address/index"],{"57de":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("6fa1"),s=e("9101"),r=e("0ddd"),o=e("26cb"),d=c(e("8c9a"));function c(t){return t&&t.__esModule?t:{default:t}}var u=function(){e.e("components/Authorize").then(function(){return resolve(e("5c82"))}.bind(null,e)).catch(e.oe)},a=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("af3d"))}.bind(null,e)).catch(e.oe)},l={components:{authorize:u,home:a},mixins:[d.default],data:function(){return{regionDval:["浙江省","杭州市","滨江区"],cartId:"",pinkId:0,couponId:0,id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101",news:"",noCoupon:0}},computed:(0,o.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserAddress()},deep:!0}},onLoad:function(i){this.isLogin?(this.cartId=i.cartId||"",this.pinkId=i.pinkId||0,this.couponId=i.couponId||0,this.id=i.id||0,this.noCoupon=i.noCoupon||0,this.news=i.new||"",t.setNavigationBarTitle({title:i.id?"修改地址":"添加地址"}),this.getUserAddress(),this.getCityList()):(0,r.toLogin)()},methods:{getCityList:function(){var t=this,i=this;(0,s.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=this,i=this,e=[],n=[],s=[],r=i.district[0].c||[];r.length&&r[0].c;i.district.forEach((function(i,n){e.push(i.n),i.n===t.region[0]&&(t.valueRegion[0]=n,t.multiIndex[0]=n)})),i.district[this.valueRegion[0]].c.forEach((function(i,e){t.region[1]==i.c&&(t.valueRegio[1]=e,t.multiIndex[1]=e),n.push(i.n)})),i.district[this.valueRegion[0]].c[this.valueRegion[1]].c.forEach((function(i,e){t.region[2]==i.c&&(t.valueRegio[2]=e,t.multiIndex[2]=e),s.push(i.n)})),this.multiArray=[e,n,s]},bindRegionChange:function(t){var i=this.multiIndex,e=this.district[i[0]]||{c:[]},n=e.c[i[1]]||{v:0},s=this.multiArray,r=t.detail.value;this.region=[s[0][r[0]],s[1][r[1]],s[2][r[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=this,e=t.detail.column,n=t.detail.value,s=this.district[n]||{c:[]},r=i.multiArray,o=i.multiIndex;switch(o[e]=n,e){case 0:var d=s.c[0]||{c:[]};r[1]=s.c.map((function(t){return t.n})),r[2]=d.c.map((function(t){return t.n}));break;case 1:var c=i.district[o[0]].c[o[1]].c||[];r[2]=c.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,r[0]),this.$set(this.multiArray,1,r[1]),this.$set(this.multiArray,2,r[2]),this.multiIndex=o},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,n.getAddressDetail)(this.id).then((function(i){var e=[i.data.province,i.data.city,i.data.district];t.$set(t,"userAddress",i.data),t.$set(t,"region",e),t.cityId=i.data.city_id}))},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(e){var s={};s.province=e.provinceName,s.city=e.cityName,s.district=e.countyName,(0,n.editAddress)({address:s,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(i.cartId){var n=i.cartId,s=i.pinkId,r=i.couponId;i.cartId="",i.pinkId="",i.couponId="",t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+n+"&addressId="+(i.id?i.id:e.data.id)+"&pinkId="+s+"&couponId="+r+"&new="+i.news+"&noCoupon="+i.noCoupon})}else t.navigateBack({delta:1})}),1e3),i.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:"取消选择"})}})},fail:function(e){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var i=this,e=this;e.$wechat.openAddress().then((function(s){(0,n.editAddress)({id:i.id,real_name:s.userName,phone:s.telNumber,address:{province:s.provinceName,city:s.cityName,district:s.countryName},detail:s.detailInfo,is_default:1,post_code:s.postalCode,type:1}).then((function(){setTimeout((function(){if(e.cartId){var i=e.cartId,n=e.pinkId,s=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+i+"&addressId="+(e.id?e.id:res.data.id)+"&pinkId="+n+"&couponId="+s+"&new="+e.news+"&noCoupon="+e.noCoupon})}else t.navigateTo({url:"/pages/users/user_address_list/index"})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(i){var e=this,s=i.detail.value;if(!s.real_name.trim())return e.$util.Tips({title:"请填写收货人姓名"});if(!s.phone)return e.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(s.phone))return e.$util.Tips({title:"请输入正确的手机号码"});if("省"==e.region[0])return e.$util.Tips({title:"请选择所在地区"});if(!s.detail.trim())return e.$util.Tips({title:"请填写详细地址"});s.id=e.id;var r=e.region;s.address={province:r[0],city:r[1],district:r[2],city_id:e.cityId},s.is_default=e.userAddress.is_default?1:0,t.showLoading({title:"保存中",mask:!0}),(0,n.editAddress)(s).then((function(i){e.id?e.$util.Tips({title:"修改成功",icon:"success"}):e.$util.Tips({title:"添加成功",icon:"success"}),setTimeout((function(){if(!e.cartId)return t.navigateBack({delta:1});var n=e.cartId,s=e.pinkId,r=e.couponId;e.cartId="",e.pinkId="",e.couponId="",t.navigateTo({url:"/pages/users/order_confirm/index?new="+e.news+"&cartId="+n+"&addressId="+(e.id?e.id:i.data.id)+"&pinkId="+s+"&couponId="+r+"&noCoupon="+e.noCoupon})}),1e3)})).catch((function(t){return e.$util.Tips({title:t})}))},ChangeIsDefault:function(t){this.$set(this.userAddress,"is_default",!this.userAddress.is_default)}}};i.default=l}).call(this,e("543d")["default"])},"5d86":function(t,i,e){"use strict";var n=e("cb30"),s=e.n(n);s.a},68753:function(t,i,e){"use strict";e.r(i);var n=e("e139"),s=e("d867");for(var r in s)"default"!==r&&function(t){e.d(i,t,(function(){return s[t]}))}(r);e("5d86");var o,d=e("f0c5"),c=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"37c8e1d0",null,!1,n["a"],o);i["default"]=c.exports},"7a1b":function(t,i,e){"use strict";(function(t){e("8244");n(e("66fd"));var i=n(e("68753"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},cb30:function(t,i,e){},d867:function(t,i,e){"use strict";e.r(i);var n=e("57de"),s=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=s.a},e139:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement;t._self._c},r=[]}},[["7a1b","common/runtime","common/vendor"]]]);