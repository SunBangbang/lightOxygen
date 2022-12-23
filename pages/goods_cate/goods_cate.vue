<template>
	<view :style="colorStyle" class="main-body">
		<view class="wrap">
			<u-swiper :list="bannerList" height="290"></u-swiper>
		</view>
		<view class="product-box">
			<block v-for="(item,index) in tempArr" :key="index">
				<view class="item-box" @click="goDetail(item)">
					<image :src="item.image" style="width: 100%;height: 320rpx;" mode="scaleToFill"></image>
					<view class="item-bot">
						<view class="item-bot-title">{{item.store_name}}</view>
						<view class="item-bot-num"><span class="icon-img">￥</span>{{item.ot_price}}</view>
						<view class="item-bot-price"><span class="icon-img">￥</span>{{item.price}}</view>
					</view>
				</view>
			</block>
		</view>
		<!-- <goodsCate1 v-show="category==1" ref="classOne"></goodsCate1>
		<goodsCate2 v-show="category==2" ref="classTwo" @jumpIndex="jumpIndex"></goodsCate2>
		<goodsCate3 v-show="category==3" ref="classThree" @jumpIndex="jumpIndex"></goodsCate3> -->
		
		<u-tabbar v-model="selectIndex" :list="list" :mid-button="true" active-color="#3981A5" inactive-color="#808080"></u-tabbar>
	</view>
</template>

<script>
	import colors from "@/mixins/color";
	import goodsCate1 from './goods_cate1';
	import goodsCate2 from './goods_cate2';
	import goodsCate3 from './goods_cate3';
	import {
		colorChange
	} from '@/api/api.js';
	import tabBar from "@/pages/index/visualization/components/tabBar.vue"
	import ParabalaBall from '@/components/parabolaBall/ParabolaBall.vue'
	import {
		getCategoryList,
		getProductslist,
		getAttr,
		postCartNum
	} from '@/api/store.js';
	import {
		vcartList,
		getCartCounts,
		cartDel
	} from '@/api/order.js';
	import productWindow from '@/components/productWindow';
	import goodClass from '@/components/goodClass';
	import cartList from '@/components/cartList';
	import {
		mapGetters
	} from 'vuex';
	import {
		goShopDetail
	} from '@/libs/order.js';
	import {
		toLogin
	} from '@/libs/login.js';
	export default {
		computed: mapGetters(['isLogin', 'uid']),
		components: {
			goodsCate1,
			goodsCate2,
			goodsCate3,
			tabBar,
			productWindow,
			goodClass,
			cartList,
			ParabalaBall
		},
		mixins: [colors],
		data() {
			return {
				
				bannerList: [{
						image: 'https://sanshen.zigood.com/uploads/attach/2022/10/20221011/540814216ceee5384378736a671e38eb.jpg',
					},
					{
						image: 'https://sanshen.zigood.com/uploads/attach/2022/10/20221011/0aef3dbb454452aa409669bf150f4714.jpg',
					},
					{
						image: 'https://sanshen.zigood.com/uploads/attach/2022/10/20221011/65f0ee2b66b0e3515f900b9c8d71dff9.jpg',
					},
					{
						image: 'https://sanshen.zigood.com/uploads/attach/2022/10/20221011/277010a0439e59fff5a02e9993850a84.jpg',
					}
				],
				category: '',
				is_diy: uni.getStorageSync('is_diy'),
				status: 0,
				list: [{
						iconPath: require("@/static/imgs/index.png"),
						selectedIconPath: require("@/static/imgs/index-active.png"),
						text: '首页',
						customIcon: false,
						pagePath: "/pages/index/index",
					},
					{
						iconPath: require("@/static/imgs/fenlei.png"),
						selectedIconPath: require("@/static/imgs/fenlei-active.png"),
						text: '认购区',
						customIcon: false,
						pagePath: "/pages/goods_cate/goods_cate",
					},
					{
						iconPath: require("@/static/imgs/zhongjian.png"),
						selectedIconPath: require("@/static/imgs/zhongjian.png"),
						text: '预售区',
						midButton: true,
						customIcon: false,
						pagePath: "/pages/subscription/index",
					},
					{
						iconPath: require("@/static/imgs/gouwuche.png"),
						selectedIconPath: require("@/static/imgs/gouwuche-active.png"),
						text: '换购区',
						customIcon: false,
						pagePath: "/pages/order_addcart/order_addcart",
					},
					{
						iconPath: require("@/static/imgs/my.png"),
						selectedIconPath: require("@/static/imgs/active-my.png"),
						text: '我的',
						isDot: false,
						customIcon: false,
						pagePath: "/pages/user/index",
					},
				],
				selectIndex: 1,
				noShow:false,
				categoryList: [],
				navActive: 0,
				categoryTitle: '',
				categoryErList: [],
				tabLeft: 0,
				isWidth: 0, //每个导航栏占位
				tabClick: 0, //导航栏被点击
				iSlong: true,
				tempArr: [],
				loading: false,
				loadend: false,
				loadTitle: '加载更多',
				page: 1,
				limit: 10,
				cid: 0, //一级分类
				sid: 0, //二级分类
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				attr: {
					cartAttr: false,
					productAttr: [],
					productSelect: {}
				},
				productValue: [],
				attrValue: '', //已选属性
				storeName: '', //多属性产品名称
				id: 0,
				cartData: {
					cartList: [],
					iScart: false
				},
				cartCount: 0,
				totalPrice: 0.00,
				lengthCart: 0,
				is_vip: 0, //是否是会员
				cart_num: 0,
				storeInfo: {},
				endLocation: {}
			}
		},
		onLoad() {
			this.getAllCategory()
			// this.classStyle();
		},
		onReady() {

		},
		onShow() {
			if (this.status == 2 || this.status == 3) {
				uni.hideTabBar();
			} else if (this.status == 1) {
				if (!this.is_diy) {
					uni.hideTabBar();
				} else {
					this.$refs.classOne.getNav();
				}
			}
		},
		methods: {
			// 去详情页
			goDetail(item) {
				if (!this.isLogin) {
					toLogin();
				} else {
					goShopDetail(item, this.uid).then(res => {
						uni.navigateTo({
							url: `/pages/goods_details/index?id=${item.id}`
						});
					});
				}
			},
			getAllCategory: function() {
				let that = this;
				getCategoryList().then(res => {
					let data = res.data;
					data.forEach(item => {
						item.children.unshift({
							'id': 0,
							'cate_name': '全部'
						})
					})
					that.categoryTitle = data[0].cate_name;
					that.cid = data[0].id;
					that.sid = 0;
					that.navActive = 0;
					that.tabClick = 0;
					that.categoryList = data;
					that.categoryErList = res.data[0].children ? res.data[0].children : [];
					that.page = 1;
					that.loadend = false;
					that.tempArr = [];
					that.productslist();
				})
			},
			// 产品列表
			productslist: function() {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = '';
				getProductslist({
					page: that.page,
					limit: that.limit,
					type: 1,
					cid: that.cid,
					sid: that.sid
				}).then(res => {
					let list = res.data,
						loadend = list.length < that.limit;
					that.tempArr = that.$util.SplitArray(list, that.tempArr);
					console.log(that.tempArr,'that.tempArr')
					that.$set(that, 'tempArr', that.tempArr);
					that.loading = false;
					that.loadend = loadend;
					that.loadTitle = loadend ? "人家是有底线的~" : "加载更多";
					that.page = that.page + 1;
				}).catch(err => {
					that.loading = false,
						that.loadTitle = '加载更多'
				});
			},
			// jumpIndex() {
			// 	if (this.is_diy) {
			// 		if (!uni.getStorageSync('FOOTER_BAR')) {
			// 			uni.showTabBar()
			// 		}
			// 	}
			// },
			// classStyle() {
			// 	colorChange('category').then(res => {
			// 		let status = res.data.status;
			// 		this.status = res.data.status
			// 		this.category = status
			// 		if (status == 2) {
			// 			if (this.isLogin) {
			// 				// this.$refs.classTwo.getCartNum();
			// 				this.$refs.classTwo.getCartList(1);
			// 			}
			// 			this.$refs.classTwo.getAllCategory()
			// 		}
			// 		if (status == 3) {
			// 			if (this.isLogin) {
			// 				this.$refs.classThree.getCartNum();
			// 				this.$refs.classThree.getCartList(1);
			// 			}
			// 			this.$refs.classThree.getAllCategory()
			// 		}
			// 		if (status == 2 || status == 3) {
			// 			uni.hideTabBar()
			// 		} else {
			// 			if (!this.is_diy) {
			// 				uni.hideTabBar()
			// 			} else {
			// 				this.$refs.classOne.getNav();
			// 			}
			// 		}
			// 	})
			// }
		},
		onReachBottom: function() {
			if (this.category == 2) {
				this.$refs.classTwo.productslist();
			}
			if (this.category == 3) {
				this.$refs.classThree.productslist();
			}
		}
	}
</script>
<style scoped lang="scss">
	page{
		background: rgb(246,246,246);
	}
	.item-box{
		width: 48.5%;
		margin-top:20rpx;
	}
	.item-box:nth-child(odd){
		margin-right: 3%;
	}
	.item-bot-title{
		font-weight: 600;
		width:300rpx;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-bot-num{
		margin:15rpx 0 10rpx;
		font-size: 24rpx;
		color:#999;
		text-decoration:line-through;
	}
	.item-bot-price{
		color:red;
	}
	.icon-img{
		font-size: 10px;
	}
	.item-bot{
		background: #ffffff;
		padding:20rpx 10rpx;
		border-radius: 0 0 10rpx 10rpx;
	}
	.product-box{
		margin:0 20rpx 20rpx;
		display: flex;
		flex-wrap: wrap;
	}
	/deep/.mask {
		z-index: 99;
	}
.wrap {
		padding: 20rpx 20rpx 0;
	}

</style>
