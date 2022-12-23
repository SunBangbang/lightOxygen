<template>
	<view :style="colorStyle">
		<view class="my-appointment">
			<view class="header bg-color">
				<view class="name">预约</view>
			</view>
			<view class="jifen_box">
				<view>
					<view>金积分</view>
					<view class="jifen-num">{{money}}</view>
				</view>
				<view>
					<view>锁定金积分</view>
					<view class="jifen-num">{{lockmoney}}</view>
				</view>
			</view>
			<!-- 预约游戏 -->
			<view class="nav yuyue">
				<view>预约游戏</view>
				<u-form>
					<u-form-item label="金积分" label-width="140"><u-input v-model="jifen" placeholder="请输入预约游戏的金积分金"/></u-form-item>
					<u-form-item label="选择活动" label-width="140" right-icon="arrow-right">
						<u-input v-model="huodong" @click="show = true" placeholder="请选择" disabled />
					</u-form-item>
					<u-select
					 :list="actionSheetList"
					 mode="single-column"
					  v-model="show"
					  @confirm="confirm"
					></u-select>
				</u-form>
			</view>
			<view class="nav yuyue yuyue-bot">
				<block v-for="(item,index) in jinLists" :key="index">
					<view class="item-box">
						<view class="title">
							<view>{{item.desc}}</view>
							<view class="money num1" v-if="item.type==1">-{{item.money}}</view>
							<view class="money num2" v-if="item.type==2">+{{item.money}}</view>
						</view>
						<view class="dec">{{item.ctime}}</view>
					</view>
				</block>
			</view>
			<view class="foot-btn">
				<view class="btn-s" @click="clickSq">申请</view>
			</view>
			<view class="loadingicon acea-row row-center-wrapper" v-if="jinLists.length > 0">
				<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				{{ loadTitle }}
			</view>
			<view v-if="jinLists.length == 0">
				<emptyPage v-if="!loading" title="暂无数据~"></emptyPage>
				<view class="loadingicon acea-row row-center-wrapper">
					<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				</view>
			</view>
		</view>
		<!-- #ifndef MP -->
		<home></home>
		<!-- #endif -->
		<!-- <payment :payMode="payMode" :pay_close="pay_close" @onChangeFun="onChangeFun" :order_id="pay_order_id"
			:totalPrice="totalPrice"></payment> -->
	</view>
</template>

<script>
	import {
		getOrderList,
		orderData,
		orderCancel,
		orderDel,
		orderPay
	} from '@/api/order.js';
	import {
		breakOrderList,
		getSchoolList,
		getmoney,
		booking
		} from '@/api/subscription.js'
	import {
		getUserInfo,
		getCommissionInfo
	} from '@/api/user.js';
	import {
		openOrderSubscribe
	} from '@/utils/SubscribeMessage.js';
	import home from '@/components/home';
	import payment from '@/components/payment';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from 'vuex';
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	import emptyPage from '@/components/emptyPage.vue';
	import colors from '@/mixins/color.js';
	export default {
		components: {
			payment,
			home,
			emptyPage,
			// #ifdef MP
			authorize
			// #endif
		},
		mixins: [colors],
		data() {
			return {
				type: 'select',
				show: false,
				border: true,
				jifen:'',
				huodong:'',
				lockmoney:'',
				money:'',
				// actionSheetList: [],
				actionSheetList: [
								],
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: '加载更多', //提示语
				orderList: [], //订单数组
				orderData: {}, //订单详细统计
				orderStatus: 3, //订单状态
				page: 1,
				limit: 20,
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				bname:'',
				name:'',
				jinLists:[],//资金列表
				quId: ''
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			console.log(this.actionSheetList,"actionSheetList22222");
		},
		onShow() {
			if (this.isLogin) {
				this.page = 1;
				this.orderList = []
				this.loadend = false;
				this.getSchoolList();
				this.getmoney()
			} else {
				toLogin();
			}
			
		},
		methods: {
			clickSq(){
				let that = this;
				let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				console.log(userInfo.uid,"userInfo")
				booking({
						id:that.quId,
						amount:that.jifen,
						user_id: userInfo.uid
					})
					.then(res => {
						console.log(res,'res')
						that.$util.Tips({
							title: res.msg,
						});
						if(res.status == 200){
							this.getmoney()
							that.quId = ''
							that.huodong= ''
							that.jifen = ''
						}
						
					})
					.catch(err => {
					});
			},
			confirm(e) {
				let that = this
				that.huodong = e[0].label
				that.quId = e[0].value
			},
			clickSelect(){
				this.showSex = true
			},
		
			/**
			 * 生命周期函数--监听页面加载
			 */
			onLoad: function(options) {
				if (options.status) this.orderStatus = options.status;
			},
			/**
			 * 获取活动列表
			 */
			getmoney: function() {
				console.log('res')
				let that = this;
				that.loading = true;
				that.loadTitle = '加载更多';
				let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				console.log(userInfo.uid,"userInfo")
				getmoney({
						// type: that.orderStatus,
						// page: that.page,
						// limit: that.limit,
						uid: userInfo.uid
					})
					.then(res => {
						console.log(res,'res')
						that.jinLists = res.data.list.loglist || [];
						that.lockmoney = res.data.list.lockmoney
						that.money = res.data.list.money
						console.log(that.jinLists,'that.jinLists')
						// let loadend = list.length < that.limit;
						// that.jinLists = that.$util.SplitArray(list, that.jinLists);
						// that.$set(that, 'jinLists', that.jinLists);
						that.loadend = loadend;
						that.loading = false;
						that.loadTitle = loadend ? '我也是有底线的' : '加载更多';
						// that.page = that.page + 1;
					})
					.catch(err => {
						that.loading = false;
						that.loadTitle = '加载更多';
					});
			},
			/**
			 * 获取活动列表
			 */
			getSchoolList: function() {
				let that = this;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = '加载更多';
				// let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				// console.log(userInfo.uid,"userInfo")
				getSchoolList({
						// type: that.orderStatus,
						// page: that.page,
						// limit: that.limit,
						// uid: userInfo.uid
					})
					.then(res => {
						this.actionSheetList = res.data.list || [];
						
						// let loadend = list.length < that.limit;
						// that.orderList = that.$util.SplitArray(list, that.orderList);
						// that.$set(that, 'orderList', that.orderList);
						that.loadend = loadend;
						that.loading = false;
						that.loadTitle = loadend ? '我也是有底线的' : '加载更多';
						// that.page = that.page + 1;
					})
					.catch(err => {
						that.loading = false;
						that.loadTitle = '加载更多';
					});
			},
		},
		onReachBottom: function() {
			this.getSchoolList();
			this.getmoney()
		}
	};
</script>

<style scoped lang="scss">
	page{
		background: #f2f2f2;
	}
	.foot-btn{
		position:fixed;
		bottom:0;
		left:0;
		width: 100vw;
		height: 144rpx;
		background: #ffffff;
		box-shadow: 0px -3px 6px 0px rgba(0,0,0,0.1);
		padding:0 30rpx;
		display: flex;
		align-items: center;
		z-index: 99;
	}
	.yuyue-bot{
		margin-bottom:120rpx;
	}
	.btn-s{
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		background: #8CD383;
		border-radius: 20rpx;
		text-align: center;
		color:#ffffff;
		font-size: 36rpx;
		font-family: PingFangSC;
		font-weight: 500;
	}
	.my-appointment{
		height: 450rpx;
		background: url(../../static/images/jlmx_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-color: var(--view-theme);
		padding:0 30rpx;
	}
	.yuyue{
		border-radius: 20rpx;
		margin-top:40rpx;
		padding:30rpx 30rpx;
	}
	.item-box{
		font-size: 30rpx;
		font-family: PingFangSC;
		font-weight: 500;
		color: #6B6B6B;
		padding:30rpx 0;
		border-bottom:2rpx solid #e4e7ed;
	}
	.item-box .title{
		display: flex;
		justify-content: space-between;
		margin-bottom:10rpx;
	}
	.item-box .dec{
		font-family: PingFangSC;
		font-weight: 400;
		color: #6B6B6B;
		font-size: 24rpx;
	}
	.item-box .money{
		font-size: 35rpx;
		font-family: PingFangSC;
		font-weight: 400;
		
	}
	.item-box .num1{
		color: #FF687E;
	}
	.item-box .num2{
		color: #B7DBBD;
	}
	.my-appointment .jifen_box{
		display: flex;
		justify-content: space-around;
		align-items: center;
		color:#ffffff;
		font-size:34rpx;
		font-weight: 600;
		margin-top: 30rpx;
	}
	.jifen-num{
		font-family: Arial;
		font-weight: bold;
		color: #FEFEFE;
		font-size: 56rpx;
		margin-top:20rpx;
	}
	.img_logo{
		width: 100rpx;
		height: 100rpx;
		margin-right:20rpx;
	}
	.my-appointment .header {
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		background: #88d488!important;
	}
	.my-appointment .header .name {
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 20rpx;
	}
	.my-appointment .nav {
		background-color: #fff;
	}

	.my-appointment .nav .item {
		text-align: center;
		font-size: 26rpx;
		color: #282828;
		padding: 27rpx 0;
		margin-top:20rpx;
		border-bottom: 5rpx solid transparent;
	}

	.my-appointment .nav .item.on {
		color: #88d488;
		/* #ifdef H5 || MP */
		font-weight: bold;
		/* #endif */
		/* #ifdef APP-PLUS */
		color: #88d488;
		/* #endif */
		border-color: var(--view-theme);
	}

	.my-appointment .nav .item .num {
		margin-top: 18rpx;
	}
	.my-appointment .list {
		margin: 20rpx auto;
		font-size: 26rpx;
	}
	.my-appointment .list .item_box{
		background: #ffffff;
		padding:30rpx 0;
		margin-bottom:20rpx;
	}
	.item_box_title{
		margin:0 40rpx;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom:20rpx;
	}
	.my-appointment .list .item_box .lifk{
		width: 150rpx;
		height: 60rpx;
		text-align: center;
		border-radius: 40rpx;
		background: #88d488;
		color:#ffffff;
	}
	.my-appointment .list .item_box .line{
		height: 2rpx;
		background: #f2f2f2;
	}
	.lifk_bg{
		background: #f2f2f2!important;
		color:#333!important;
	}
	.item_box_com{
		margin:30rpx 30rpx 10rpx;
		display: flex;
		align-items: center;
	}
	.item_box_com_title{
		margin-bottom: 20rpx;
		font-size:28rpx;
		font-weight: 600;
	}
	.item_box_com_dec{
		display: flex!important;
		justify-content: space-between!important;
	}
	.item_box_com_box{
		width: 80%;
	}
</style>
