<template>
	<view :style="colorStyle">
		<view class="my-order">
			<view class="header bg-color">
				<view class="name">订单</view>
			</view>
			<view class="nav acea-row row-around">
				<view class="item" :class="orderStatus == 3 ? 'on' : ''" @click="statusClick(3)">
					<view>全部</view>
				</view>
				<view class="item" :class="orderStatus == -1 ? 'on' : ''" @click="statusClick(-1)">
					<view>预售中</view>
				</view>
				<view class="item" :class="orderStatus == 0 ? 'on' : ''" @click="statusClick(0)">
					<view>待结算</view>
				</view>
				<view class="item" :class="orderStatus == 1 ? 'on' : ''" @click="statusClick(1)">
					<view>已结算</view>
				</view>
				<view class="item" :class="orderStatus == 2 ? 'on' : ''" @click="statusClick(2)">
					<view>预售失败</view>
				</view>
			</view>
			<view class="list">
				<block v-for="(item, index) in orderList" :key="index">
					<view class="item_box">
						<view class="item_box_title">
							<view>订单号：#{{item.id}}</view>
							<view class="lifk" v-if="item.status == -1">预售中</view>
							<view class="lifk" v-if="item.status == 0">待结算</view>
							<view class="lifk lifk_bg" v-if="item.status == 1">已结算</view>
							<view class="lifk lifk_bg" v-if="item.status == 2">预售失败</view>
						</view>
						<view class="line"></view>
						<view class="item_box_com">
							<image :src="item.logo" mode="aspectFill" class="img_logo"></image>
							<view class="item_box_com_box">
								<view class="item_box_com_title">
									{{item.bname}}
								</view>
								<view class="item_box_com_dec">
									<view>交易金额：{{item.money}}</view>
									<view>{{item.ctime}}</view>
								</view>
							</view>
							
						</view>
					</view>
				</block>
			</view>
			<view class="loadingicon acea-row row-center-wrapper" v-if="orderList.length > 0">
				<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				{{ loadTitle }}
			</view>
			<view v-if="orderList.length == 0">
				<emptyPage v-if="!loading" title="暂无数据~"></emptyPage>
				<view class="loadingicon acea-row row-center-wrapper">
					<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
				</view>
			</view>
		</view>
		<!-- #ifndef MP -->
		<home></home>
		<!-- #endif -->
		<payment :payMode="payMode" :pay_close="pay_close" @onChangeFun="onChangeFun" :order_id="pay_order_id"
			:totalPrice="totalPrice"></payment>
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
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: '加载更多', //提示语
				orderList1:[
					{
						order_num:'#0213620450',
						status:'立即付款',
						img:'@/static/images/home-img.png',
						title:'购买名称测试',
						money:'470',
						time:'2018-04-07 13：00',
					},
					{
						order_num:'#0213620450',
						status:'立即付款',
						img:'@/static/images/home-img.png',
						title:'购买名称测试',
						money:'470',
						time:'2018-04-07 13：00',
					}
				],
				orderList: [
					
				], //订单数组
				orderData: {}, //订单详细统计
				orderStatus: 3, //订单状态
				page: 1,
				limit: 20,
				payMode: [{
						name: '微信支付',
						icon: 'icon-weixinzhifu',
						value: 'weixin',
						title: '使用微信快捷支付',
						payStatus: true
					},
					{
						name: '支付宝支付',
						icon: 'icon-zhifubao',
						value: 'alipay',
						title: '使用线上支付宝支付',
						payStatus: true
					},
					{
						name: '余额支付',
						icon: 'icon-yuezhifu',
						value: 'yue',
						title: '当前可用余额：',
						number: 0,
						payStatus: true
					}, {
						"name": "好友代付",
						"icon": "icon-haoyoudaizhifu",
						value: 'friend',
						title: '找微信好友支付',
						payStatus: 1,
					}
				],
				pay_close: false,
				pay_order_id: '',
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				bname:'',
				name:''
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			
		},
		onShow() {
			
			if (this.isLogin) {
				this.page = 1;
				this.orderList = []
				this.loadend = false;
				this.onLoadFun();
				this.breakOrderList();
			} else {
				toLogin();
			}
			
		},
		methods: {
			onLoadFun() {
				
				this.getOrderData();
				// this.getUserInfo();
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e;
			},
			/**
			 * 事件回调
			 *
			 */
			onChangeFun: function(e) {
				let opt = e;
				let action = opt.action || null;
				let value = opt.value != undefined ? opt.value : null;
				action && this[action] && this[action](value);
			},
		
			/**
			 * 关闭支付组件
			 *
			 */
			payClose: function() {
				this.pay_close = false;
			},
			/**
			 * 生命周期函数--监听页面加载
			 */
			onLoad: function(options) {
				if (options.status) this.orderStatus = options.status;
			},
			/**
			 * 获取订单统计数据
			 *
			 */
			getOrderData: function() {
				let that = this;
				orderData().then(res => {
					that.$set(that, 'orderData', res.data);
					that.payMode.map(item => {
						if (item.value == 'weixin') {
							item.payStatus = res.data.pay_weixin_open ? true : false;
						}
						if (item.value == 'alipay') {
							item.payStatus = res.data.ali_pay_status ? true : false;
						}
						if (item.value == 'yue') {
							item.payStatus = res.data.yue_pay_status == 1 ? true : false;
						}
						if (item.value == 'friend') {
							item.payStatus = res.data.friend_pay_status == 1 ? true : false;
						}
					});
					//#ifdef MP
					this.payMode[1].payStatus = false;
					//#endif
				});
			},
			/**
			 * 取消订单
			 *
			 */
			cancelOrder: function(index, order_id) {
				let that = this;
				if (!order_id)
					return that.$util.Tips({
						title: '缺少订单号无法取消订单'
					});
				orderCancel(order_id)
					.then(res => {
						return that.$util.Tips({
								title: res.msg,
								icon: 'success'
							},
							function() {
								that.orderList.splice(index, 1);
								that.$set(that, 'orderList', that.orderList);
								that.$set(that.orderData, 'unpaid_count', that.orderData.unpaid_count - 1);
								that.getOrderData();
							}
						);
					})
					.catch(err => {
						return that.$util.Tips({
							title: err
						});
					});
			},
			/**
			 * 打开支付组件
			 *
			 */
			goPay: function(pay_price, order_id) {
				this.$set(this, 'pay_close', true);
				this.$set(this, 'pay_order_id', order_id);
				this.$set(this, 'totalPrice', pay_price);
			},
			/**
			 * 支付成功回调
			 *
			 */
			pay_complete: function() {
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.pay_close = false;
				uni.navigateTo({
					url: '/pages/order_pay_status/index?order_id=' + this.pay_order_id +
						'&msg=支付成功&type=3&totalPrice=' + this.totalPrice
				})
				this.pay_order_id = '';
				this.getOrderData();
				this.getOrderList();
			},
			/**
			 * 支付失败回调
			 *
			 */
			pay_fail: function() {
				this.pay_close = false;
				this.pay_order_id = '';
			},
			/**
			 * 去订单详情
			 */
			goOrderDetails: function(order_id) {
				if (!order_id)
					return that.$util.Tips({
						title: '缺少订单号无法查看订单详情'
					});
				// #ifdef MP
				uni.showLoading({
					title: '正在加载'
				});
				openOrderSubscribe()
					.then(() => {
						uni.hideLoading();
						uni.navigateTo({
							url: '/pages/users/order_details/index?order_id=' + order_id
						})
					})
					.catch(err => {
						uni.hideLoading();
					});
				// #endif
				// #ifndef MP
				uni.navigateTo({
					url: '/pages/users/order_details/index?order_id=' + order_id
				});
				// #endif
			},
			/**
			 * 切换类型
			 */
			statusClick: function(status) {
				console.log(status,'status')
				if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.breakOrderList();
			},
			/**
			 * 获取订单列表
			 */
			breakOrderList: function() {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = '加载更多';
				let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				console.log(userInfo.uid,"userInfo")
				breakOrderList({
						type: that.orderStatus,
						page: that.page,
						limit: that.limit,
						uid: userInfo.uid
					})
					.then(res => {
						let list = res.data.list.data || [];
						console.log(list,'list')
						let loadend = list.length < that.limit;
						that.orderList = that.$util.SplitArray(list, that.orderList);
						that.$set(that, 'orderList', that.orderList);
						that.loadend = loadend;
						that.loading = false;
						that.loadTitle = loadend ? '我也是有底线的' : '加载更多';
						that.page = that.page + 1;
					})
					.catch(err => {
						that.loading = false;
						that.loadTitle = '加载更多';
					});
			},

			/**
			 * 删除订单
			 */
			delOrder: function(order_id, index) {
				let that = this;
				uni.showModal({
					title: '删除订单',
					content: '确定删除该订单',
					success: function(res) {
						if (res.confirm) {
							orderDel(order_id)
								.then(res => {
									that.orderList.splice(index, 1);
									that.$set(that, 'orderList', that.orderList);
									that.$set(that.orderData, 'unpaid_count', that.orderData
										.unpaid_count - 1);
									that.getOrderData();
									return that.$util.Tips({
										title: '删除成功',
										icon: 'success'
									});
								})
								.catch(err => {
									return that.$util.Tips({
										title: err
									});
								});
						} else if (res.cancel) {
							return that.$util.Tips({
								title: '已取消'
							});
						}
					}
				});

			}
		},
		onReachBottom: function() {
			this.getOrderList();
		}
	};
</script>

<style scoped lang="scss">
	page{
		background: #f2f2f2;
	}
	.img_logo{
		width: 100rpx;
		height: 100rpx;
		margin-right:20rpx;
	}
	.my-order .header {
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		background: rgb(57, 129, 165)!important;
	}
	.my-order .header .name {
		font-size: 34rpx;
		font-weight: bold;
		color: #fff;
		margin-bottom: 20rpx;
	}
	.my-order .nav {
		background-color: #fff;
	}

	.my-order .nav .item {
		text-align: center;
		font-size: 26rpx;
		color: #282828;
		padding: 27rpx 0;
		margin-top:20rpx;
		border-bottom: 5rpx solid transparent;
	}

	.my-order .nav .item.on {
		color: rgb(57, 129, 165);
		/* #ifdef H5 || MP */
		font-weight: bold;
		/* #endif */
		/* #ifdef APP-PLUS */
		color: rgb(57, 129, 165);
		/* #endif */
		border-color: var(--view-theme);
	}

	.my-order .nav .item .num {
		margin-top: 18rpx;
	}
	.my-order .list {
		margin: 20rpx auto;
		font-size: 26rpx;
	}
	.my-order .list .item_box{
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
	.my-order .list .item_box .lifk{
		width: 150rpx;
		height: 60rpx;
		text-align: center;
		border-radius: 40rpx;
		background: #88d488;
		color:#ffffff;
	}
	.my-order .list .item_box .line{
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
