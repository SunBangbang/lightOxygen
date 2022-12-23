<template>
	<view :style="colorStyle">
		<view class="my-order">
			<view class="head-top">
				<view class="header bg-top">
					<view class="name">推广</view>
				</view>
				<view class="head-bot">
					<view class="head_img">
						<view class="head-level">等级：{{totalLevel}}</view>
					</view>
					<view class="head-right">
						<view>推广人数：{{teamCount}}人</view>
						<view class="tj-num">推广金额：{{zongyeji}}元</view>
					</view>
				</view>
			</view>
			<view>
				<view class="nav acea-row row-around">
					<view class="item" :class="orderStatus == 0 ? 'on' : ''" @click="statusClick(0)">
						<view>推广人数</view>
					</view>
					<view class="item" :class="orderStatus == 1 ? 'on' : ''" @click="statusClick1(1)">
						<view>推广订单</view>
					</view>
					<view class="item" :class="orderStatus == 2 ? 'on' : ''" @click="statusClick3(2)">
						<view>奖励明细</view>
					</view>
				</view>
				<view>
					<!-- <view class="nav-dec-one" v-if="orderStatus == 0">
						<view :class="navBtn == 2 ? 'navActive' : 'navBtn'" @click="navClick(2)">全部</view>
						<view :class="navBtn == 0 ? 'navActive' : 'navBtn'" @click="navClick(0)">一级</view>
						<view :class="navBtn == 1 ? 'navActive' : 'navBtn'" @click="navClick(1)">二级</view>
					</view> -->
					<view class="nav-dec" v-if="orderStatus == 2">
						<view :class="detBtn == 0 ? 'navActive' : 'navBtn'" @click="detClick(0)">红包</view>
						<view :class="detBtn == 1 ? 'navActive' : 'navBtn'" @click="detClick(1)">产品券</view>
						<view :class="detBtn == 2 ? 'navActive' : 'navBtn'" @click="detClick(2)">贡献值</view>
						<view :class="detBtn == 3 ? 'navActive' : 'navBtn'" @click="detClick(3)">培育奖</view>
						<view :class="detBtn == 4 ? 'navActive' : 'navBtn'" @click="detClick(4)">加权分红</view>
					</view>
				</view>
			</view>
			<view v-if="orderStatus == 2">
				<view class='sign-record'>
					<view class='list_mx' >
						<view class='item' v-for="(item,index) in userBillList" :key="index">
								<view>
									<view class='name line1'>{{item.title}}</view>
									<view  class='num'>{{item.add_time}}</view>
								</view>
								<view class='num' v-if="item.pm">+{{item.number}}</view>
								<view class='num font-color' v-else>-{{item.number}}</view>
							</view>
						</view>
					</view>
					<view class='loadingicon acea-row row-center-wrapper' v-if="userBillList.length>0">
						<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>{{loadTitle}}
					</view>
					<view v-if="userBillList.length == 0">
						<emptyPage title="暂无账单的记录哦～"></emptyPage>
					</view>
				
			</view>
			<view v-if="orderStatus == 1">
				<view>
					<view class='list' v-if="recordOrderList.length>0">
						<block v-for="(item,index) in recordOrderList" :key="index">
							<view class='item'>
								<view class='title acea-row row-column row-center'>
									<view class='data'>{{item.time}}</view>
									<view>本月累计推广订单：{{item.count || 0}}单</view>
								</view>
								<view class='listn'>
									<block v-for="(child,indexn) in item.child" :key="indexn">
										<view class='itenm'>
											<view class='top acea-row row-between-wrapper'>
												<view class='pictxt acea-row row-between-wrapper'>
													<view class='pictrue'>
														<image :src='child.avatar'></image>
													</view>
													<view class='text line1'>{{child.nickname}}</view>
												</view>
												<view class='money' v-if="child.type == 'brokerage'">返佣：<text
														class='font-color'>￥{{child.number}}</text></view>
												<view class='money' v-else>暂未返佣：<text
														class='font-color'>￥{{child.number}}</text></view>
											</view>
											<view class='bottom'>
												<view><text class='name'>订单编号：</text>{{child.order_id}}</view>
												<view v-if="child.type == 'brokerage'"><text
														class='name'>返佣时间：</text>{{child.time}}</view>
												<view v-else><text class='name'>下单时间：</text>{{child.time}}</view>
												<view class="more" v-if="child.children && child.children.length"
													@click="open(child)">
													{{child.open?"收起":"更多"}}
													<text class="iconfont"
														:class="child.open?'icon-xiangshang':'icon-xiangxia'"></text>
												</view>
											</view>
											<view class="more-record" v-if="child.open">
												<view class="more-record-list" v-for="(sp,indexs) in child.children"
													:key="indexs">
													<view class="more-record-box">
														<view><text class='name'>单号：</text>{{sp.order_id}}</view>
														<view class='money' v-if="sp.type == 'brokerage'">返佣：<text
																class='font-color'>￥{{sp.number}}</text></view>
														<view class='money' v-else>暂未返佣：<text
																class='font-color'>￥{{sp.number}}</text></view>
													</view>
												</view>
											</view>
										</view>
									</block>
								</view>
							</view>
						</block>
					</view>
					<view v-if="recordOrderList.length == 0">
						<emptyPage title="暂无推广订单～"></emptyPage>
					</view>
				</view>
			</view>
			<!-- 推广订单 -->
			<view v-if="orderStatus == 0">
				<view class="list">
					<view class="item-bg">
					<block v-for="(item, index) in recordList" :key="index">
						<view class="item_box">
							<view class='item acea-row row-between-wrapper'>
								<view class="picTxt acea-row row-between-wrapper">
									<view class='pictrue'>
										<image :src='item.avatar'></image>
									</view>
									<view class='text'>
										<view class='name line1'>{{item.nickname}}</view>
										<view>加入时间: {{item.time}}</view>
									</view>
								</view>
								<view class="right">
									<view><text class='num font-num'>{{item.childCount ? item.childCount : 0}}</text>人</view>
									<view><text class="num">{{item.orderCount ? item.orderCount : 0}}</text>单</view>
									<view><text class="num">{{item.numberCount ? item.numberCount : 0}}</text>元</view>
								</view>
							</view>
						</view>
					</block>
					</view>
				</view>
				
				<view class="loadingicon acea-row row-center-wrapper" v-if="recordList.length > 0">
					<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
					{{ loadTitle }}
				</view>
				<view v-if="recordList.length == 0">
					<emptyPage v-if="!loading" title="暂无数据~"></emptyPage>
					<view class="loadingicon acea-row row-center-wrapper">
						<text class="loading iconfont icon-jiazai" :hidden="loading == false"></text>
					</view>
				</view>
			</view>
			
		</view>
		<!-- #ifndef MP -->
		<home></home>
		<!-- #endif -->
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
		spreadPeople,
		spreadOrder,
		divisionOrder,
		getCommissionInfo
	} from '@/api/user.js';
	import {
		breakOrderList,
		} from '@/api/subscription.js'
	import {
		getUserInfo
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
				userInfo:'',
				loading: false, //是否加载中
				loadend: false, //是否加载完毕
				loadTitle: '加载更多', //提示语
				orderData: {}, //订单详细统计
				orderStatus: 0, //订单状态
				navBtn:2,
				detBtn:0,
				page: 1,
				limit: 20,
				pay_close: false,
				pay_order_id: '',
				totalPrice: '0',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				bname:'',
				name:'',
				total: 0,
				totalLevel: 0,
				teamCount: 0,
				page: 1,
				limit: 20,
				keyword: '',
				sort: '',
				grade: 2,
				status: false,
				recordList: [],
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false ,//是否隐藏授权
				zongyeji:'',
				status: false,
				recordOrderList: [],
				times: [],
				recordCount: 0,
				count: 0,
				orderType: 0,
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				
				loadTitle: '加载更多',
				loading: false,
				loadend: false,
				page: 1,
				limit: 15,
				type: 0,
				userBillList: [],
				times:[],
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false //是否隐藏授权
			};
		},
		computed: mapGetters(['isLogin','uid']),
		
		
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			console.log(this.uid,"222222222")
			if (options.status) this.orderStatus = options.status;
		},
		onShow() {
			if (this.isLogin) {
				this.page = 1;
				this.orderList = []
				this.loadend = false;
				this.onLoadFun();
				this.userSpreadNewList(0);
			} else {
				toLogin();
			}
			this.getUserInfo();
		},
		methods: {
			onLoadFun() {
				
				// this.getOrderData();
				// this.getUserInfo();
			},
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					uni.hideLoading();
					that.userInfo = res.data
					console.log(that.userInfo.uid,'that.userInfo1111')
					that.$store.commit("SETUID", res.data.uid);
					that.$store.commit("UPDATE_USERINFO", res.data);
					that.isStatus = true
					// this.close()
				});
			},
			// 点击一级类 推广人数 奖励说明
			statusClick: function(status) {
				console.log(status,'status111dianji')
				if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.userSpreadNewList();
			},
			// 推广订单
			statusClick1: function(status) {
				console.log(status,'status111dianji')
				if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'recordOrderList', []);
				this.getRecordOrderList()
				
			},
			// 点击一级类 奖励说明
			statusClick3: function(status) {
				console.log(status,'奖励说明')
				// if (status == this.orderStatus) return;
				this.orderStatus = status;
				this.type = status;
				this.loadend = false;
				this.page = 1;
				this.times = [];
				this.$set(this, 'userBillList', []);
				this.getUserBillList();
			},
			/**
			 * 获取账户明细
			 */
			getUserBillList: function() {
				console.log(status,'奖励说明2')
				let that = this;
				let page = that.page;
				let limit = that.limit;
				// if (that.loading) return;
				// if (that.loadend) return;
				that.loading = true;
				that.loadTitle = '';
				getCommissionInfo({
					page: page,
					limit: limit,
					type: 2,
				},that.type).then(res => {
					this.userBillList = res.data.list || []
					// for (let i = 0; i < res.data.time.length; i++) {
						
					// 	if (!this.times.includes(res.data.time[i])) {
					// 		this.times.push(res.data.time[i])
					// 		this.userBillList.push({
					// 			time: res.data.time[i],
					// 			child: []
					// 		})
					// 	}
					// }
					
					// for (let x = 0; x < this.times.length; x++) {
					// 	for (let j = 0; j < res.data.list.length; j++) {
					// 		if (this.times[x] === res.data.list[j].time_key) {
					// 			this.userBillList[x].child.push(res.data.list[j])
					// 		}
					// 	}
					// }
					let loadend = res.data.list.length < that.limit;
					that.loadend = loadend;
					that.loadTitle = loadend ? '没有更多内容啦~' : '加载更多';
					that.page += 1;
					that.loading = false;
				}).catch(err=>{
					that.loading = false;
					that.loadTitle = '加载更多';
				})
			},
			/**
			 * 切换类型
			 */
			navClick: function(e) {
				console.log(e,'e')
				// if (status == this.orderStatus) return;
				this.grade = e 
				this.navBtn = e;
			
				this.page = 1;
				this.status=false
				this.onLoadFun();
				this.userSpreadNewList();
			},
			/**
			 * 切换类型
			 */
			detClick: function(e) {
				// if (detBtn == this.orderStatus) return;
				this.detBtn = e;
				this.loadend = false;
				this.page = 1;
				this.$set(this, 'orderList', []);
				this.breakOrderList();
			},
			// 推广订单
			// getRecordOrderList() {
			// 	console.log('aaaa')
			// 	let that = this;
			// 	let page = that.page;
			// 	let limit = that.limit;
			// 	let status = that.status;
			// 	// if (status == true) return;
			// 	let fun
			// 	if (this.orderType) {
			// 		fun = divisionOrder
			// 		uni.setNavigationBarTitle({
			// 			title: '推广订单列表'
			// 		})
			// 	} else {
			// 		fun = spreadOrder
			// 	}
			// 	console.log(fun)
			// 	fun({
			// 		page: page,
			// 		limit: limit
			// 	}).then(res => {
			// 		for (let i = 0; i < res.data.time.length; i++) {
			// 			if (!this.times.includes(res.data.time[i].time)) {
			// 				this.times.push(res.data.time[i].time)
			// 				this.recordList.push({
			// 					time: res.data.time[i].time,
			// 					count: res.data.time[i].count,
			// 					child: []
			// 				})
			// 			}
			// 		}
			// 		console.log(this.recordList, this.times.length)
			// 		for (let x = 0; x < this.times.length; x++) {
			// 			for (let j = 0; j < res.data.list.length; j++) {
			// 				if (this.times[x] === res.data.list[j].time_key) {
			// 					res.data.list[j].open = false
			// 					this.recordList[x].child.push(res.data.list[j])
			// 				}
			// 			}
			// 		}
			// 		console.log(this.recordList)
			// 		that.count = res.data.count || 0;
			// 		that.status = res.data.list.length < 5;
			// 		that.page += 1;
			// 	});
			// },
			// 推广订单
			getRecordOrderList: function() {
				console.log('推广列表')
				let that = this;
				let page = that.page;
				let limit = that.limit;
				let status = that.status;
				let keyword = that.keyword;
				let sort = that.sort;
				let grade = that.grade;
				let recordOrderList = that.recordOrderList;
				let recordListNew = [];
			
				// if (status == true) return;
				spreadOrder({
					page: page,
					limit: limit,
					keyword: keyword,
					grade: grade,
					sort: sort,
				}).then(res => {
					let len = res.data.list.length;
					let recordListData = res.data.list;
					recordListNew = recordListData;
					// that.total = res.data.total;
					// that.totalLevel = res.data.totalLevel;
					// that.zongyeji = res.data.zongyeji
					that.teamCount = res.data.count;
					that.status = limit > len;
					that.page = page + 1;
					that.$set(that, 'recordOrderList', recordListNew);
				});
			},
			// 推广人数列表
			userSpreadNewList: function() {
				let that = this;
				let page = that.page;
				let limit = that.limit;
				let status = that.status;
				let keyword = that.keyword;
				let sort = that.sort;
				let grade = that.grade;
				let recordList = that.recordList;
				let recordListNew = [];
				console.log('111ddddd',this.uid)
				// let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				// console.log(userInfo.uid,"userInfo111")
				if (status == true) return;
				spreadPeople({
					page: page,
					limit: limit,
					keyword: keyword,
					grade: grade,
					sort: sort,
					uid: this.uid
				}).then(res => {
					let len = res.data.list.length;
					let recordListData = res.data.list;
					console.log(recordListData,'recordListData')
					recordListNew = recordListData;
					that.total = res.data.total;
					that.totalLevel = res.data.userlevel;
					that.zongyeji = res.data.zongyeji
					that.teamCount = res.data.count;
					that.status = limit > len;
					that.page = page + 1;
					that.$set(that, 'recordList', recordListNew);
				});
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
				// let userInfo = JSON.parse(uni.getStorageSync('USER_INFO'))
				// console.log(userInfo.uid,"userInfo")
				breakOrderList({
						type: that.orderStatus,
						page: that.page,
						limit: that.limit,
						uid: that.userInfo.uid
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

		},
		onReachBottom: function() {
			// this.getOrderList();
			this.getRecordOrderList();
			this.getUserBillList();
		}
	};
</script>

<style scoped lang="scss">
	page{
		background: #f2f2f2;
	}
	.head-top{
		height: 349rpx;
		background: #ffffff;
		background: url(../../static/images/tg_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.head_img{
		width: 125rpx;
		height: 125rpx;
		border:10rpx solid #ffffff;
		border-radius: 50%;
		background: url(../../static/images/head_icon.png);
		background-size: 100% 100%;
		margin-left: 40rpx;
		position: relative;
	}
	.head-level{
		width: 140rpx;
		height: 48rpx;
		position: absolute;
		bottom: -30rpx;
		left:0;
		transform: translateX(-18rpx);
		text-align: center;
		line-height: 48rpx;
		background: #FFFFFF;
		border-radius: 34rpx;
		font-size: 18rpx;
		font-family: PingFangSC;
		font-weight: 500;
		color: #88D488;
	}
	.head-right{
		margin-left: 30rpx;
		font-size: 30rpx;
		font-family: PingFangSC;
		font-weight: 500;
		color: #FFFFFF;
		padding-top: 6rpx;
	}
	.tj-num{
		font-size: 24rpx;
		margin-top: 20rpx;
	}
	.nav-dec{
		display: flex;
		justify-content: space-around;
		background: #ffffff;
		padding:30rpx 40rpx;
	}
	.nav-dec-one{
		display: flex;
		justify-content: space-around;
		background: #ffffff;
		padding:30rpx 100rpx;
	}
	.navBtn{
		padding:10rpx 20rpx;
		background: #EFEFEF;
		border-radius: 40rpx;
		font-size: 22rpx;
		font-family: PingFangSC;
	}
	.navActive{
		background: #E6FFEB;
		color: #76C045;
		padding:10rpx 20rpx;
		border-radius: 40rpx;
		font-size: 22rpx;
		font-family: PingFangSC;
	}
	.head-bot{
		display: flex;
		align-items: center;
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
		background: #88d488!important;
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
		color: #88d488;
		/* #ifdef H5 || MP */
		font-weight: bold;
		/* #endif */
		/* #ifdef APP-PLUS */
		color: #88d488;
		/* #endif */
		border-color: var(--view-theme);
	}

	.num {
		margin-top: 18rpx;
	}
	.my-order .list {
		margin: 20rpx auto;
		font-size: 26rpx;
	}
	.item-bg{
		background: #FFFFFF;
		padding:0 30rpx 60rpx;
	}
	.my-order .list .item_box{
		background: #ffffff;
		padding:30rpx 10rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom:2rpx solid #EBEBEB;
	}
	.item_box-title{
		font-size: 30rpx;
		font-family: PingFangSC;
		font-weight: 500;
		color: #666666;
		margin-bottom:18rpx;
	}
	.item_box-title .dec{
		font-size: 24rpx;
	}
	.item_box .mon{
		font-size: 36rpx;
		font-family: PingFangSC;
		color: #666666;
	}
	
.list .sortNav .sortItem {
		text-align: center;
		flex: 1;
	}
	
.list .sortNav .sortItem image {
		width: 24rpx;
		height: 24rpx;
		margin-left: 6rpx;
		vertical-align: -3rpx;
	}
	
.list .item {
		background-color: #fff;
		// border-bottom: 1rpx solid #eee;
		display: flex!important;
		justify-content: space-between;
		height: 152rpx;
		// padding: 0 30rpx 0 20rpx;
		font-size: 24rpx;
		color: #666;
	}
	
.item .picTxt .pictrue {
		width: 106rpx;
		height: 106rpx;
		border-radius: 50%;
		margin-right:20rpx;
	}
	
.item .picTxt .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 3rpx solid #fff;
		box-shadow: 0 0 10rpx #aaa;
		box-sizing: border-box;
	}
	
.item .picTxt .text {
		width: 304rpx;
		font-size: 24rpx;
		color: #666;
	}
	
.item .picTxt .text .name {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 13rpx;
	}
	
	.item .right {
		width: 240rpx;
		text-align: right;
		font-size: 22rpx;
		color: #333;
	}
	
	.item .right .num{
		margin-right: 7rpx;
	}
	
	.bill-details .nav {
		background-color: #fff;
		height: 90rpx;
		width: 100%;
		line-height: 90rpx;
	}
	
	.bill-details .nav .item {
		flex: 1;
		text-align: center;
		font-size: 30rpx;
		color: #282828;
	}
	
	.bill-details .nav .item.on {
		color: var(--view-theme);
		border-bottom: 3rpx solid var(--view-theme);
	}
	.sign-record .list .item .data {
		height: 80rpx;
		line-height: 80rpx;
		padding: 0 30rpx;
		font-size: 24rpx;
		color: #666
	}
	.sign-record{
		background: #ffffff;
		margin-top:20rpx;
	}
	.sign-record .list_mx{
		background: #ffffff;
		margin:30rpx;
		padding:30rpx 10rpx;
	}
	.sign-record .list_mx .item{
		padding:20rpx 0;
		border-bottom:2rpx solid #ddd;
		display: flex;
		justify-content: space-between;
	}
	
</style>
