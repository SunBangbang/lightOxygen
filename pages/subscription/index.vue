<template>
    <view >
        <view class="uc-wrap uc-home">
            <view class="c-header">
                <!-- <ucBar></ucBar> -->
                <view class="header">
                    <view class="header-title">预售区</view>
                </view>
            </view>
            <!-- <ucBar></ucBar> -->
            <view class="c-header-space"></view>
           <view class="banner-box">
                <!-- <image src="@/static/images/home.banner.png" mode="aspectFill"></image> -->
				<u-swiper :list="listBanner"></u-swiper>
            </view>
            <view class="center-menu">
                <view class="item" url="" hover-class="none" @click="gotoGuize">
                    <image src="@/static/imgs/yushouxieyi.png" mode="widthFix"></image>预售协议
                </view>
                <view class="item" url="" hover-class="none" @click="gotoJilu">
                    <image src="@/static/imgs/duihuan.png" mode="widthFix"></image>预售订单
                </view>
                <view class="item" url="" hover-class="none">
                    <image src="@/static/imgs/yinhangka.png" mode="widthFix" @click="gotoYyue"></image>兑换
                </view>
                <view class="item" url="" hover-class="none">
                    <image src="@/static/imgs/shangjialiebiao.png" mode="widthFix"  @click="comClick"></image>商家列表
                </view>
            </view>
            <view class="filter">
                <view class="title"></view>
                <view class="tabHeader">
                    <view :class="current==1?'item on':'item'" @click="changqu(1)">商品一区</view>
                    <view :class="current==2?'item on':'item'" @click="changqu(2)">商品二区</view>
                    <view :class="current==3?'item on':'item'" @click="changqu(3)">商品三区</view>
                    <view :class="current==4?'item on':'item'" @click="changqu(4)">商品四区</view>
                </view>
                <view class="tabHeader2">
                    <view :class="current2==1?'item on':'item'" @click="changqu2(1)">全部</view>
                    <view :class="current2==2?'item on':'item'" @click="changqu2(2)">进行中</view>
                    <view :class="current2==3?'item on':'item'" @click="changqu2(3)">待发放</view>
                    <view :class="current2==4?'item on':'item'" @click="changqu2(4)">已结算</view>
                </view>
            </view>
            <!-- 红区 -->
            <view v-if="current==1"><!-- 红区 --></view>
            <!-- /红区 -->
            <!-- 蓝区 -->
            <view v-if="current==2"></view>
            <!-- /蓝区 -->
            <!-- 2区 -->
            <view v-if="current==3"></view>
            <!-- /2区 -->
            <!-- 3区 -->
            <view v-if="current==4"></view>
            <!-- /3区 -->
            <!-- 二次分类 -->
            <!-- 全部 -->
            <view>
				<view class="empty-txt">暂无数据~</view>
               <!-- <view class="list">
					<block v-for="(item,index) in zhuanquListCom" :key="index">
						<view class="item-box">
							<view class="item">
							    <navigator class="face" url="" hover-class="none">
									<image src="@/static/imgs/product.png" class='product-img'></image></navigator>
							    <view class="right">
							        <view class="name"><text class="big">{{item.name}}</text></view>
							        <view class="txt">{{item.dec}}</view>
							        <view class="txt">单人限购： <text class="uc-green">{{item.nums}}</text>份</view>
							       <view class="price-box">
									   <text class="price-nu1">￥{{item.sjPrice}}</text>
									   <text class="price-nu2">￥{{item.oldPrice}}</text>
									   <text class="uc-btn green" v-if="item.status == 1">进行中</text>
									   <text class="uc-btn green" v-if="item.status == 2">成功</text>
									   <text class="gray" v-if="item.status == 1">暂未开始</text>
								   </view>
							    </view>
							    
							</view>
							<view class="qi-bottom">
								<view>{{item.title}}</view>
								<view class="rengou-text">{{item.rengou}}</view>
							</view>
						</view>
						
					</block>
                </view> -->
            </view>
            <!-- /全部 -->
            <!-- 种植中 -->
            <view v-if="current2==2"></view>
            <!-- /种植中 -->
            <!-- 待采摘 -->
            <view v-if="current2==3"></view>
            <!-- /待采摘 -->
            <!-- 已采摘 -->
            <view v-if="current2==4"></view>
            <!-- /已采摘 -->
            <!-- 采摘失败 -->
            <view v-if="current2==5"></view>
            <!-- /采摘失败 -->
        </view>
        <!-- <ucFoot :selectIndex="0"></ucFoot> -->
		<!-- 预约弹窗 -->
		<uni-popup ref="popup" type="center">
			<view class="popup_box">
				<view class="popup_box_top">
					<view class="yy-title">请输入金额</view>
					<input  type="number" v-model="amount" placeholder="请输入数字" class="uni-input" focus/>
				</view>
				<view class="btns_box">
					<view class="btns_box_left" @click="clickCancel">取消</view>
					<view class="btns_box_left btns_bg" @click="confirm">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 规则弹窗 -->
		<uni-popup ref="guize"  type="dialog">
			<uni-popup-dialog
			 mode="input" 
			 message="成功消息" 
			 :duration="2000" 
			 :before-close="true" 
			 @close="closeGz" 
			 @confirm="confirmbtn" 
			 title="规则说明"
			 confirmText="同意并继续">
				
				<view class="popup_box_guize" @click="closeGz()">
					<!-- <view class="gz_title">规则说明</view> -->
					<view class="font30">
						用户协议<br />
						尊敬的用户，为维护您的自身权益，在您参与商城活动之前，请您务必审慎阅读，充分理解本协议内的各项条款，在您点击“同意并继续”按钮后，即表示您已充分阅读、理解并接受协议的全部内容，并与杭州三甡健康管理有限公司签署本协议，即对双方构成具有约束力的法律文件。阅读本协议过程中，如您不同意本协议或其中任何条款的约定，请您立即停止相应操作。<br />
					</view>
					<view class="font30">
						1、消费体验<br />
						<br />
					</view>
					<view class="font30">
						2、积分补贴<br />
						<br />
					</view>
					<view class="font30">
						3、产品<br />
						<br />
						您选择“我已阅读同意并继续”按钮即视为您完全接受本协议，本协议立即生效。故在点击之前，请您再次确认已经知悉并完全理解本协议的全部内容。<br />
					</view>
				</view>
			</uni-popup-dialog>
					
		</uni-popup>
		
		<u-tabbar v-model="selectIndex" :list="list" :mid-button="true" active-color="#3981A5" inactive-color="#808080"></u-tabbar>
		<!-- <ucFoot2 :selectIndex="2"></ucFoot2> -->
		
    </view>
</template>
<script>
	import home from '@/components/home';
	import {
		getUserInfo
	} from "@/api/user";
	import tabBar from "@/pages/index/visualization/components/tabBar.vue";
import { 
	breaklist, 
	bookingUserList,
	joinbreak
	} from '@/api/subscription.js'
export default {
    name: 'home',
    components: { home },
    data() {
        return {
			listBanner:[
				'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				'https://cdn.uviewui.com/uview/swiper/swiper2.png',
				'https://cdn.uviewui.com/uview/swiper/swiper3.png'
			],
			endTime:'',
			endTimeStr:'',
			endTimeDate:null,//
            current: 1,
            current2: 1,
			zhuanquListCom:[
				{
					name:'SK-||神仙水体验装',
					dec:'SK-||神仙水体验装',
					nums:'25',
					sjPrice:100,
					oldPrice:200,
					title:'第1轮 第50期',
					rengou:'第53期认购满，发放本期广告补贴',
					status:1,//进行中
					btns:1,
				},
				// {
				// 	name:'SK-||神仙水体验装',
				// 	dec:'SK-||神仙水体验装',
				// 	nums:'25',
				// 	sjPrice:100,
				// 	oldPrice:200,
				// 	title:'第1轮 第50期',
				// 	rengou:'第53期认购满，发放本期广告补贴',
				// 	status:2,//进行中
				// 	btns:0,
				// },
				// {
				// 	name:'SK-||神仙水体验装',
				// 	dec:'SK-||神仙水体验装',
				// 	nums:'25',
				// 	sjPrice:100,
				// 	oldPrice:200,
				// 	title:'第1轮 第50期',
				// 	rengou:'第53期认购满，发放本期广告补贴',
				// 	status:2,//进行中
				// 	btns:1,
				// },
				// {
				// 	name:'SK-||神仙水体验装',
				// 	dec:'SK-||神仙水体验装',
				// 	nums:'25',
				// 	sjPrice:100,
				// 	oldPrice:200,
				// 	title:'第1轮 第50期',
				// 	rengou:'第53期认购满，发放本期广告补贴',
				// 	status:1,//进行中
				// 	btns:1,
				// },
			],
			zhuanquList:[],
			pgList: [20, 0, 0, 0],
			showPop:true,
			amount:'',
			good_id:'',
			userInfo:'',
			title:'',
			list: [{
					iconPath: require("@/static/imgs/index.png"),
					selectedIconPath: require("@/static/imgs/index-active.png"),
					text: '首页',
					customIcon: false,
					pagePath: "/pages/index/index",
					activeColor:'#3981A5',
					inactiveColor:'#808080',
				},
				{
					iconPath: require("@/static/imgs/fenlei.png"),
					selectedIconPath: require("@/static/imgs/fenlei-active.png"),
					text: '认购区',
					customIcon: false,
					pagePath: "/pages/goods_cate/goods_cate",
					activeColor:'#3981A5',
					inactiveColor:'#808080',
				},
				{
					iconPath: require("@/static/imgs/zhongjian.png"),
					selectedIconPath: require("@/static/imgs/zhongjian.png"),
					text: '预售区',
					midButton: true,
					customIcon: false,
					pagePath: "/pages/subscription/index",
					activeColor:'#3981A5',
					inactiveColor:'#808080',
				},
				{
					iconPath: require("@/static/imgs/gouwuche.png"),
					selectedIconPath: require("@/static/imgs/gouwuche-active.png"),
					text: '换购区',
					customIcon: false,
					pagePath: "/pages/points_mall/index",
					activeColor:'#3981A5',
					inactiveColor:'#808080',
				},
				{
					iconPath: require("@/static/imgs/my.png"),
					selectedIconPath: require("@/static/imgs/active-my.png"),
					text: '我的',
					isDot: false,
					customIcon: false,
					pagePath: "/pages/user/index",
					activeColor:'#3981A5',
					inactiveColor:'#808080',
				},
			],
			selectIndex: 2,
			is_openbreak:'',
			countdownh:'',
			countdownm:'',
			countdowns:'',
			countdownh2:'',
			countdownm2:'',
			countdowns2:'',
			timer: null, //重复执行
			end_time:'',
			start_time:'',
			}
    },
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		this.getUserInfo()
	},
	watch: {
	    // is_openbreak: {
	    //     handler(openbreaks, is_openbreak) {
	    //         console.log(openbreaks,'111')
	    //     },
	    //     immediate: true,
	    //     deep: true
	    // },
		
	},

	onLoad: function() {
		this.timer = setInterval(()=>{
			this.showtime()
			this.showtime2()
		})
		uni.showLoading({
			title: '正在加载',
			mask: true,
		})
	},
	
    methods: {
		comClick(){			var that = this			that.$util.Tips({				title: "暂未开放",			});		},
		showtime () {
				var nowtime = new Date(),  //获取当前时间
				endtime = new Date("2022/09/22 11:30:00");  //定义结束时间
				var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
				
				leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
				lefth = Math.floor((lefttime/(1000*60*60)%24)+leftd*24) < 10 ? "0" + Math.floor((lefttime/(1000*60*60)%24)+leftd*24) : Math.floor((lefttime/(1000*60*60)%24)+leftd*24),  //计算小时数
				leftm = Math.floor(lefttime/(1000*60)%60) < 10 ? "0" + Math.floor(lefttime/(1000*60)%60) : Math.floor(lefttime/(1000*60)%60),  //计算分钟数
				lefts = Math.floor(lefttime/1000%60) < 10 ? "0" + Math.floor(lefttime/1000%60) : Math.floor(lefttime/1000%60);  //计算秒数
				this.countdownh = lefth  //返回倒计时的字符串
				this.countdownm = leftm//返回倒计时的字符串
				this.countdowns = lefts  //返回倒计时的字符串
				// 倒计时结束时，显示00:00:00
				if(lefttime < 0) {
					this.countdownh = this.countdownm= this.countdowns = "00"
				}
			},
			showtime2 () {
					var nowtime = new Date(),  //获取当前时间
					endtime = new Date("2022/09/22 20:30:00");  //定义结束时间
					var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
					
					leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
					lefth = Math.floor((lefttime/(1000*60*60)%24)+leftd*24) < 10 ? "0" + Math.floor((lefttime/(1000*60*60)%24)+leftd*24) : Math.floor((lefttime/(1000*60*60)%24)+leftd*24),  //计算小时数
					leftm = Math.floor(lefttime/(1000*60)%60) < 10 ? "0" + Math.floor(lefttime/(1000*60)%60) : Math.floor(lefttime/(1000*60)%60),  //计算分钟数
					lefts = Math.floor(lefttime/1000%60) < 10 ? "0" + Math.floor(lefttime/1000%60) : Math.floor(lefttime/1000%60);  //计算秒数
					this.countdownh2 = lefth  //返回倒计时的字符串
					this.countdownm2 = leftm//返回倒计时的字符串
					this.countdowns2 = lefts  //返回倒计时的字符串
					// 倒计时结束时，显示00:00:00
					if(lefttime < 0) {
						this.countdownh2 = this.countdownm2= this.countdowns2 = "00"
					}
				},
		closebtn(){
			this.$refs.guize.close('center')
		},
		confirmbtn(){
			this.$refs.guize.close('center')
		},
		gotoYyue(){
			uni.navigateTo({
				url: '/pages/users/user_cash/index'
			});
		},
		gotoJilu(){
			uni.navigateTo({
				url: '/pages/subscription/order'
			});
		},
		// gotoTuiguang(){
		// 	uni.navigateTo({
		// 		url: '/pages/extension/index'
		// 	});
		// },
		confirm(){
			console.log('1111')
			console.log(this.status,'this.status')
			if(this.status===0){
				this.bookingUserList()
				this.getBreaklists()
			}
			if(this.status===1){
				this.joinbreak()
				this.getBreaklists()
			}
		},
		joinbreak: function() {
			let that = this;
			joinbreak({amount:that.amount,user_id:that.userInfo.uid,id:that.good_id}).then(res => {
				console.log(res,'222')
				if(res.status!=200){
					that.$util.Tips({
						title: res.msg,
					});
					this.amount = ''
				}else{
					that.$util.Tips({
						title: "抢购成功",
						icon: "success",
					});
					this.$refs.popup.close('center')
				}
			});
		},
		gotoGuize(){
			this.$refs.guize.open('center')
		},
		closeGz(){
			
			this.$refs.guize.close('center')
		},
		getBreaklists: function() {
			let that = this;
			if(that.is_openbreak === 1){
				console.log('shi813')
				breaklist({type:2,status:this.current2}).then(res => {
					that.zhuanquList = res.data.lists;
					console.log(that.zhuanquList,'that.zhuanquList')
					// that.start_time = that.zhuanquList.btime
					// that.etimeetime = that.zhuanquList.etime
				});
			}else{
				console.log('993')
				breaklist({type:this.current,status:this.current2}).then(res => {
					that.zhuanquList = res.data.lists;
					console.log(that.zhuanquList,'that.zhuanquList')
				});
			}
			
		},
		weikaishi(){
			let that = this;
			that.$util.Tips({
				title: "暂未开始抢购",
			});
		},
		bookingUserList: function() {
			let that = this;
			bookingUserList({amount:that.amount,user_id:that.userInfo.uid,id:that.good_id}).then(res => {
				console.log(res,'222')
				if(res.status!=200){
					that.$util.Tips({
						title: res.msg,
					});
					this.amount = ''
				}else{
					that.$util.Tips({
						title: "预约成功",
						icon: "success",
					});
					this.$refs.popup.close('center')
				}
			});
		},
		clickCancel(){
			this.$refs.popup.close('center')
		},
		open(e){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			console.log(e,'e')
			this.good_id = e.id
			this.status = e.status
			this.$refs.popup.open('center')
		},
		changqu(type){
			this.current = type
			this.getBreaklists()
		},
		changqu2(type){
			this.current2 = type
			this.getBreaklists()
		},
		/**
		 * 获取个人用户信息
		 */
		getUserInfo: function() {
			let that = this;
			getUserInfo().then(res => {
				uni.hideLoading();
				that.userInfo = res.data
				that.is_openbreak = that.userInfo.is_openbreak
				// if(that.is_openbreak===1){
				// 	console.log('813hahahha')
				// 	that.type = 2
				// 	this.getBreaklists()
					
				// }else{
				// 	console.log('no')
				// 	this.getBreaklists()
				// }
				this.getBreaklists()
				console.log(that.userInfo.uid,'that.userInfo11')
				that.$store.commit("SETUID", res.data.uid);
				that.$store.commit("UPDATE_USERINFO", res.data);
				that.isStatus = true
				// that.close()
			});
			
			
		},
	}
}
</script>
<style >
	.wrap {
		padding: 40rpx;
	}
	.time_btn{
		display: flex;
		justify-content: space-around;
		background: #ffffff!important;
	}
	.left_time{
		height: 100rpx;
		background: #ffffff;
		text-align: center;
		color:red;
		font-weight: 600;
		margin-top:10rpx;
	}
	.time-num{
		color: #88d488;
		font-weight: 600;
		margin-top:10rpx;
	}
	.shijian{
		padding:16rpx 10rpx;
		background: #ffffff;
		margin:0 10rpx;
		color: #88d488;
		font-weight: 600;
	}
	.time-box{
		display: flex;
		margin-bottom:20rpx;
		align-items: center;
	}
	.orange{
		background: orange;
		color:#ffffff;
	}
	.popup_box_guize{
		max-height: 600rpx;
		background: #ffffff;
		border-radius: 10rpx;
		overflow-y: scroll;
	}
	.gz_title{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-weight: 600;
		font-size: 32rpx;
		margin-bottom:30rpx;
	}
	.font30{
		font-size: 28rpx;
		margin-top:10rpx;
	}
	.btns_box{
		display: flex;
		justify-content: space-around;
		border-top:2rpx solid #cfcfcf;
	}
	.btns_box_left{
		width: 180rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size:30rpx;
		width: 50%;
	}
	.btns_bg{
		color:orange;
		border-left:2rpx solid #cfcfcf;
	}
	.uni-input{
		height: 82rpx!important;
		padding-left:20rpx;
		font-size:32rpx;
		font-weight: 600;
		border-radius: 10rpx;
	}
	
	.popup_box{
		background: #ffffff;
		padding:20rpx 0 0;
		width: 600rpx;
		border-radius: 10rpx;
	}
	.popup_box_top{
		padding:10rpx 60rpx 0;
		margin-bottom:50rpx;
	}
	/deep/.uni-input-placeholder{
		border:2rpx solie #cfcfcf!important;
	}
	/deep/.uni-input-form, .uni-input-wrapper{
		height: 82rpx!important;
	}
	/deep/.uni-input-input{
		height: 82rpx!important;
		border:2rpx solie #cfcfcf!important;
	}
	.yy-title{
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size:32rpx;
		font-weight: 500;
	}
	/deep/.uni-progress-box {
			display: flex;
			height: 50rpx;
			margin-bottom: 60rpx;
			
		}
		.mart{
			margin-top: 16rpx;
		}
		/deep/.uni-progress{
			width: 300rpx!important;
		}
		/deep/.uni-progress-bar{
			border-radius: 20rpx;
		}
		.empty-txt {
			height: 60rpx;
			line-height: 60rpx;
			text-align: center;
			font-size: 24rpx;
			color: #999;
		}
</style>