(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/delivery/index"],{"0129":function(e,t,i){"use strict";i.r(t);var n=i("25be"),r=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},"25be":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("a34a")),r=i("17df");i("a0c8");function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i,n,r,o,s){try{var a=e[o](s),d=a.value}catch(u){return void i(u)}a.done?t(d):Promise.resolve(d).then(n,r)}function a(e){return function(){var t=this,i=arguments;return new Promise((function(n,r){var o=e.apply(t,i);function a(e){s(o,n,r,a,d,"next",e)}function d(e){s(o,n,r,a,d,"throw",e)}a(void 0)}))}}var d={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:"express",title:"发货",key:1},{type:"send",title:"送货",key:2},{type:"fictitious",title:"无需物流",key:3}],expressType:[{title:"手动填写",key:1},{title:"电子面单打印",key:2}],curExpress:1,active:0,order_id:"",delivery:[],logistics:[],delivery_type:"1",delivery_name:"",delivery_id:"",seIndex:0,expIndex:0,expTemp:[],to_name:"",to_tel:"",to_addr:"",postPeople:[],postIndex:0,fictitious_content:""}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.getIndex(),this.getLogistics(),this.orderDeliveryInfo(),this.geTorderOrderDelivery()},methods:{scanCode:function(){var t=this;e.scanCode({scanType:["barCode"],success:function(e){t.delivery_id=e.result.replace("CODE_128,","")}})},previewImage:function(){e.previewImage({urls:[this.expTemp[this.expIndex].pic],success:function(){},fail:function(e){}})},geTorderOrderDelivery:function(){var e=this;(0,r.orderOrderDelivery)().then((function(t){e.postPeople=t.data}))},bindPostChange:function(e){this.postIndex=e.detail.value},changeExpTpe:function(e,t){this.curExpress=e.key,this.getLogistics(t||"")},changeType:function(e,t){this.active=t,this.delivery_type=e.key},getIndex:function(){var e=this;(0,r.getAdminOrderDelivery)(e.order_id).then((function(t){e.delivery=t.data}),(function(t){e.$util.Tips({title:t})}))},getLogistics:function(e){var t=this;(0,r.getLogistics)({status:e}).then((function(e){t.logistics=e.data,t.getExpTemp(e.data[0].code)}),(function(e){t.$util.Tips({title:e})}))},saveInfo:function(){var e=this;return a(n.default.mark((function t(){var i,r,o,s,a,d,u,c;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,r=i.delivery_type,o=i.logistics[i.seIndex].name,s=i.delivery_id,i.delivery_name,a={},a.delivery_type=o,a.delivery_code=i.logistics[i.seIndex].code,a.delivery_name=i.logistics[i.seIndex].id,a.type=i.active+1,1!=r||1!=e.curExpress){t.next=11;break}if(s){t.next=8;break}return t.abrupt("return",e.$util.Tips({title:"请填写快递单号"}));case 8:a.express_record_type=i.curExpress,a.delivery_id=s,i.setInfo(a);case 11:if(1!=r||2!=e.curExpress){t.next=28;break}if(i.to_name){t.next=14;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人姓名"}));case 14:if(i.to_tel){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人手机号码"}));case 16:if(/^1[3456789]\d{9}$/.test(i.to_tel)){t.next=18;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人手机号码"}));case 18:if(i.to_addr){t.next=20;break}return t.abrupt("return",e.$util.Tips({title:"请填写寄件人地址"}));case 20:if(0!=i.expTemp.length){t.next=22;break}return t.abrupt("return",e.$util.Tips({title:"请选择电子面单"}));case 22:a.express_record_type=i.curExpress,a.to_name=i.to_name,a.to_tel=i.to_tel,a.to_addr=i.to_addr,a.express_temp_id=i.expTemp[i.expIndex].temp_id,i.setInfo(a);case 28:2==r&&(d=e.postPeople[e.postIndex],u={},u.type=i.delivery_type,u.sh_delivery_name=d.wx_name,u.sh_delivery_id=d.phone,u.sh_delivery_uid=d.uid,i.setInfo(u)),3==r&&(c={},c.type=i.delivery_type,c.fictitious_content=i.fictitious_content,i.setInfo(c));case 30:case"end":return t.stop()}}),t)})))()},setInfo:function(t){var i=this;(0,r.setAdminOrderDelivery)(i.delivery.id,t).then((function(t){i.$util.Tips({title:t.msg,icon:"success",mask:!0}),setTimeout((function(t){e.navigateBack()}),2e3)}),(function(e){i.$util.Tips({title:e})}))},bindPickerChange:function(e){this.seIndex=e.detail.value,this.getExpTemp(this.logistics[e.detail.value].code)},bindTempChange:function(e){this.expIndex=e.detail.value},getExpTemp:function(e){var t=this;(0,r.orderExportTemp)({com:e}).then((function(e){t.expTemp=e.data.data}))},orderDeliveryInfo:function(){var e=this;(0,r.orderDeliveryInfo)().then((function(t){e.to_name=t.data.to_name,e.to_tel=t.data.to_tel,e.to_addr=t.data.to_add}))}}};t.default=d}).call(this,i("543d")["default"])},4555:function(e,t,i){},7972:function(e,t,i){"use strict";var n=i("4555"),r=i.n(n);r.a},"7a29":function(e,t,i){"use strict";i.r(t);var n=i("f54d"),r=i("0129");for(var o in r)"default"!==o&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("7972");var s,a=i("f0c5"),d=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=d.exports},cdfc:function(e,t,i){"use strict";(function(e){i("8244");n(i("66fd"));var t=n(i("7a29"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},f54d:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},o=[]}},[["cdfc","common/runtime","common/vendor"]]]);