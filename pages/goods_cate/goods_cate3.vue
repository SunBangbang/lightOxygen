<template>
	<view class="goodCate">
		<view class="header acea-row row-center-wrapper">
			<!-- <navigator open-type="switchTab" url='/pages/index/index' @click="jumpIndex"
				class="pageIndex acea-row row-center-wrapper" hover-class="none">
				<text class="iconfont icon-fanhuishouye"></text>
			</navigator> -->
			<navigator url="/pages/goods_search/index" class="search acea-row row-middle" hover-class="none">
				<text class="iconfont icon-sousuo5"></text>
				ๆ็ดขๅๅ
			</navigator>
			<view class="top_img">
				<image src="/static/images/ui002.png" class="img_tupian1"></image>
			</view>
		</view>
		<view class="conter">
			<view class='aside'>
				<scroll-view scroll-y="true" scroll-with-animation='true' style="height: calc(100% - 100rpx)">
					<view class='item acea-row row-center-wrapper' :class='index==navActive?"on":""'
						v-for="(item,index) in categoryList" :key="index" @click="tapNav(index,item)">
						<text>{{item.cate_name}}</text>
					</view>
				</scroll-view>
				
			</view>
			<view class="wrapper">
				<view class="bgcolor" v-if="iSlong">
					<view class="longTab acea-row row-middle">
						<scroll-view scroll-x="true" style="white-space: nowrap; display: flex;height:44rpx;"
							scroll-with-animation :scroll-left="tabLeft" show-scrollbar="true">
							<view class="longItem" :style='"width:"+isWidth+"px"' :class="index===tabClick?'click':''"
								v-for="(item,index) in categoryErList" :key="index" @click="longClick(index)">
								{{item.cate_name}}
							</view>
						</scroll-view>
					</view>
					<view class="openList" @click="openTap"><text class="iconfont icon-xiangxia"></text></view>
				</view>
				<view v-else>
					<view class="downTab">
						<view class="title acea-row row-between-wrapper">
							<view>{{categoryTitle}}</view>
							<view class="closeList" @click="closeTap"><text class="iconfont icon-xiangxia"></text>
							</view>
						</view>
						<view class="children">
							<view class="acea-row row-middle">
								<view class="item line1" :class="index===tabClick?'click':''"
									v-for="(item,index) in categoryErList" :key="index" @click="longClick(index)">
									{{item.cate_name}}
								</view>
							</view>
						</view>
					</view>
					<view class="mask" @click="closeTap"></view>
				</view>
				<goodClass ref="goodClass" :tempArr="tempArr" :isLogin="isLogin" @gocartduo="goCartDuo"
					@gocartdan="goCartDan" @ChangeCartNumDan="ChangeCartNumDan" @detail="goDetail"
					:endLocation="endLocation" @addCart="addCart"></goodClass>
				<view class='loadingicon acea-row row-center-wrapper'>
					<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>{{loadTitle}}
				</view>
			</view>
		</view>
		<view class="bottom_img">
			<image src="/static/images/ui001.png" class="img_tupian"></image>
		</view>
		<!-- <view class="footer acea-row row-between-wrapper" id="cart">
			<view class="cartIcon acea-row row-center-wrapper" @click="getCartList(0)" v-if="cartData.cartList.length">
				<view class="iconfont icon-gouwuche-yangshi1"></view>
				<view class="num">{{cartCount}}</view>
			</view>
			<view class="cartIcon acea-row row-center-wrapper noCart" v-else>
				<view class="iconfont icon-gouwuche-yangshi1"></view>
			</view>
			<view class="acea-row row-middle">
				<view class="money">๏ฟฅ<text class="num">{{totalPrice}}</text></view>
				<view class="bnt" :class="cartCount?'':'on'"   @tap="subOrder">ๅป็ป็ฎ</view>
			</view>
		</view> -->
		<!-- <cartList :cartData="cartData" @closeList="closeList" @ChangeCartNumDan="ChangeCartList"
			@ChangeSubDel="ChangeSubDel" @ChangeOneDel="ChangeOneDel"></cartList>
		<productWindow :attr="attr" :isShow='1' :iSplus='1' :iScart='1' @myevent="onMyEvent" @ChangeAttr="ChangeAttr"
			@ChangeCartNum="ChangeCartNumDuo" @attrVal="attrVal" @iptCartNum="iptCartNum" @goCat="goCatNum"
			:is_vip="is_vip" id='product-window'></productWindow>
		<ParabalaBall ref="Ball"></ParabalaBall>
		<view class="acea-row row-middle bntsssssssssssss" @tap="subOrder">
			<view class="bnt" :class="cartCount?'':'on'">ๅป็ป็ฎ</view>
		</view> -->
		
		
	</view>
</template>

<script>
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
			productWindow,
			goodClass,
			cartList,
			ParabalaBall
		},
		props: {},
		data() {
			return {
				noShow:false,
				categoryList: [],
				navActive: 0,
				categoryTitle: '',
				categoryErList: [],
				tabLeft: 0,
				isWidth: 0, //ๆฏไธชๅฏผ่ชๆ?ๅ?ไฝ
				tabClick: 0, //ๅฏผ่ชๆ?่ขซ็นๅป
				iSlong: true,
				tempArr: [],
				loading: false,
				loadend: false,
				loadTitle: 'ๅ?่ฝฝๆดๅค',
				page: 1,
				limit: 10,
				cid: 0, //ไธ็บงๅ็ฑป
				sid: 0, //ไบ็บงๅ็ฑป
				isAuto: false, //ๆฒกๆๆๆ็ไธไผ่ชๅจๆๆ
				isShowAuth: false, //ๆฏๅฆ้่ๆๆ
				attr: {
					cartAttr: false,
					productAttr: [],
					productSelect: {}
				},
				productValue: [],
				attrValue: '', //ๅทฒ้ๅฑๆง
				storeName: '', //ๅคๅฑๆงไบงๅๅ็งฐ
				id: 0,
				cartData: {
					cartList: [],
					iScart: false
				},
				cartCount: 0,
				totalPrice: 0.00,
				lengthCart: 0,
				is_vip: 0, //ๆฏๅฆๆฏไผๅ
				cart_num: 0,
				storeInfo: {},
				endLocation: {}
			}
		},
		onShow() {
			// if (this.isLogin) {
			// 	this.getCartNum();
			// 	this.getCartList(1);
			// }
		},
		onLoad() {
			console.log('aaaa')
			this.$nextTick(() => {
				uni.createSelectorQuery().select('#cart').boundingClientRect(res => {
					const {
						windowTop
					} = uni.getSystemInfoSync()
					this.endLocation = {
						x: res.left + uni.upx2px(120) / 2,
						// #ifdef H5
						y: res.top + windowTop,
						// #endif
						// #ifndef H5
						y: res.top,
						// #endif
					}
				}).exec()
			})
		},
		mounted() {
			let that = this;
			that.lengthCart = that.cartData.cartList;
			// ่ทๅ่ฎพๅคๅฎฝๅบฆ
			uni.getSystemInfo({
				success(e) {
					that.isWidth = e.windowWidth / 5
				}
			});
			// this.getAllCategory();
		},
		methods: {
			jumpIndex() {
				this.$emit('jumpIndex')
			},
			addCart(detail) {
				// #ifdef H5
				const {
					windowTop
				} = uni.getSystemInfoSync()
				detail.y += windowTop
				// #endif
				// this.$refs.Ball.showBall({
				// 	start: detail,
				// 	src: [detail.img, ''][Math.round(Math.random())],
				// 	end: this.endLocation
				// }).then(() => {})
			},
			// ็ๆ่ฎขๅ๏ผ
			subOrder: function() {
				console.log('ๅป็ป็ฎ')
				let that = this,
					list = that.cartData.cartList,
					ids = [];
				if (list.length) {
					list.forEach(item => {
						ids.push(item.id)
					});
					uni.navigateTo({
						url: '/pages/users/order_confirm/index?cartId=' + ids.join(',')
					});
					that.cartData.iScart = false;
				} else {
					return that.$util.Tips({
						title: '่ฏท้ๆฉไบงๅ'
					});
				}
			},
			// ่ฎก็ฎๆปไปท๏ผ
			getTotalPrice: function() {
				let that = this,
					list = that.cartData.cartList,
					totalPrice = 0.00;
				list.forEach(item => {
					if (item.attrStatus && item.status) {
						totalPrice = that.$util.$h.Add(totalPrice, that.$util.$h.Mul(item.cart_num, item
							.truePrice));
					}
				})
				that.$set(that, 'totalPrice', totalPrice);
			},
			ChangeSubDel: function(event) {
				let that = this,
					list = that.cartData.cartList,
					ids = [];
				list.forEach(item => {
					ids.push(item.id)
				});
				cartDel(ids.join(",")).then(res => {
					that.$set(that.cartData, 'cartList', []);
					that.cartData.iScart = false;
					that.totalPrice = 0.00;
					that.page = 1;
					that.loadend = false;
					that.tempArr = [];
					that.productslist();
					that.getCartNum();
				})
			},
			ChangeOneDel: function(id, index) {
				let that = this,
					list = that.cartData.cartList;
				cartDel(id.toString()).then(res => {
					list.splice(index, 1);
					if (!list.length) {
						that.cartData.iScart = false;
						that.page = 1;
						that.loadend = false;
						that.tempArr = [];
						that.productslist();
					};
					that.getCartNum();
				})
			},
			getCartList(iSshow) {
				let that = this;
				vcartList().then(res => {
					that.$set(that.cartData, 'cartList', res.data);
					if (res.data.length) {
						that.$set(that.cartData, 'iScart', iSshow ? false : !that.cartData.iScart);
					} else {
						that.$set(that.cartData, 'iScart', false);
					}
					that.getTotalPrice();
				})
			},
			closeList(e) {
				this.$set(this.cartData, 'iScart', e);
				this.page = 1;
				this.loadend = false;
				this.tempArr = [];
				this.productslist();
			},
			getCartNum: function() {
				let that = this;
				getCartCounts().then(res => {
					that.cartCount = res.data.count;
					console.log(that.$refs.goodClass)
					that.$refs.goodClass.addIng = false
				});
			},


			onMyEvent: function() {
				this.$set(this.attr, 'cartAttr', false);
			},
			/**
			 * ้ป่ฎค้ไธญๅฑๆง
			 * 
			 */
			DefaultSelect: function() {
				let productAttr = this.attr.productAttr;
				let value = [];
				for (let key in this.productValue) {
					if (this.productValue[key].stock > 0) {
						value = this.attr.productAttr.length ? key.split(",") : [];
						break;
					}
				}
				for (let i = 0; i < productAttr.length; i++) {
					this.$set(productAttr[i], "index", value[i]);
				}
				//sort();ๆๅบๅฝๆฐ:ๆฐๅญ-่ฑๆ-ๆฑๅญ๏ผ
				let productSelect = this.productValue[value.join(",")];
				if (productSelect && productAttr.length) {
					this.$set(
						this.attr.productSelect,
						"store_name",
						this.storeName
					);
					this.$set(this.attr.productSelect, "image", productSelect.image);
					this.$set(this.attr.productSelect, "price", productSelect.price);
					this.$set(this.attr.productSelect, "stock", productSelect.stock);
					this.$set(this.attr.productSelect, "unique", productSelect.unique);
					this.$set(this.attr.productSelect, "cart_num", 1);
					this.$set(this.attr.productSelect, 'vip_price', productSelect.vip_price);
					this.$set(this, "attrValue", value.join(","));
				} else if (!productSelect && productAttr.length) {
					this.$set(
						this.attr.productSelect,
						"store_name",
						this.storeName
					);
					this.$set(this.attr.productSelect, "image", this.storeInfo.image);
					this.$set(this.attr.productSelect, "price", this.storeInfo.price);
					this.$set(this.attr.productSelect, "stock", 0);
					this.$set(this.attr.productSelect, "unique", "");
					this.$set(this.attr.productSelect, "cart_num", 0);
					this.$set(this, "attrValue", "");
					this.$set(this.attr.productSelect, 'vip_price', this.storeInfo.vip_price);
				} else if (!productSelect && !productAttr.length) {
					this.$set(
						this.attr.productSelect,
						"store_name",
						this.storeName
					);
					this.$set(this.attr.productSelect, "image", this.storeInfo.image);
					this.$set(this.attr.productSelect, "price", this.storeInfo.price);
					this.$set(this.attr.productSelect, "stock", this.storeInfo.stock);
					this.$set(
						this.attr.productSelect,
						"unique",
						this.storeInfo.unique || ""
					);
					this.$set(this.attr.productSelect, "cart_num", 1);
					this.$set(this, "attrValue", "");
					this.$set(this.attr.productSelect, 'vip_price', this.storeInfo.vip_price);
				}
			},
			/**
			 * ๅฑๆงๅๅจ่ตๅผ
			 * 
			 */
			ChangeAttr: function(res) {
				let productSelect = this.productValue[res];
				if (productSelect && productSelect.stock > 0) {
					this.$set(this.attr.productSelect, "image", productSelect.image);
					this.$set(this.attr.productSelect, "price", productSelect.price);
					this.$set(this.attr.productSelect, "stock", productSelect.stock);
					this.$set(this.attr.productSelect, "unique", productSelect.unique);
					this.$set(this.attr.productSelect, 'vip_price', productSelect.vip_price);
					this.$set(this.attr.productSelect, "cart_num", 1);
					this.$set(this, "attrValue", res);
				} else if (productSelect && productSelect.stock == 0) {
					this.$set(this.attr.productSelect, "image", productSelect.image);
					this.$set(this.attr.productSelect, "price", productSelect.price);
					this.$set(this.attr.productSelect, "stock", 0);
					this.$set(this.attr.productSelect, "unique", "");
					this.$set(this.attr.productSelect, 'vip_price', productSelect.vip_price);
					this.$set(this.attr.productSelect, "cart_num", 0);
					this.$set(this, "attrValue", "");
				} else {
					this.$set(this.attr.productSelect, "image", this.storeInfo.image);
					this.$set(this.attr.productSelect, "price", this.storeInfo.price);
					this.$set(this.attr.productSelect, "stock", 0);
					this.$set(this.attr.productSelect, "unique", "");
					this.$set(this.attr.productSelect, 'vip_price', this.storeInfo.vip_price);
					this.$set(this.attr.productSelect, "cart_num", 0);
					this.$set(this, "attrValue", "");
				}
			},
			attrVal(val) {
				this.$set(this.attr.productAttr[val.indexw], 'index', this.attr.productAttr[val.indexw].attr_values[val
					.indexn]);
			},
			/**
			 * ่ดญ็ฉ่ฝฆๆๅจๅกซๅ
			 * 
			 */
			iptCartNum: function(e) {
				this.$set(this.attr.productSelect, 'cart_num', e);
			},
			onLoadFun() {},
			// ไบงๅๅ่กจ
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
					that.$set(that, 'tempArr', that.tempArr);
					that.loading = false;
					that.loadend = loadend;
					that.loadTitle = loadend ? "ไบบๅฎถๆฏๆๅบ็บฟ็~" : "ๅ?่ฝฝๆดๅค";
					that.page = that.page + 1;
				}).catch(err => {
					that.loading = false,
						that.loadTitle = 'ๅ?่ฝฝๆดๅค'
				});
			},

			// ๆนๅๅๅฑๆง่ดญ็ฉ่ฝฆ
			ChangeCartNumDan(changeValue, index, item) {
				let num = this.tempArr[index];
				let stock = this.tempArr[index].stock;
				this.ChangeCartNum(changeValue, num, stock, 0, item.id);
			},
			// ๆนๅๅคๅฑๆง่ดญ็ฉ่ฝฆ
			ChangeCartNumDuo(changeValue) {
				//่ทๅๅฝๅๅๅจๅฑๆง
				let productSelect = this.productValue[this.attrValue];
				//ๅฆๆๆฒกๆๅฑๆง,่ตๅผ็ปๅๅ้ป่ฎคๅบๅญ
				if (productSelect === undefined && !this.attr.productAttr.length)
					productSelect = this.attr.productSelect;
				//ๆ?ๅฑๆงๅผๅณๅบๅญไธบ0๏ผไธๅญๅจๅ?ๅ๏ผ
				if (productSelect === undefined) return;
				let stock = productSelect.stock || 0;
				let num = this.attr.productSelect;
				this.ChangeCartNum(changeValue, num, stock, 1, this.id);
			},
			// ๅทฒ็ปๅ?ๅฅ่ดญ็ฉ่ฝฆๆถ็่ดญ็ฉๅ?ๅ๏ผ
			ChangeCartList(changeValue, index) {
				let list = this.cartData.cartList;
				let num = list[index];
				let stock = list[index].trueStock;
				this.ChangeCartNum(changeValue, num, stock, 0, num.product_id, index, 1);
				if (!list.length) {
					this.cartData.iScart = false;
					this.page = 1;
					this.loadend = false;
					this.tempArr = [];
					this.productslist();
				}
			},
			// ่ดญ็ฉ่ฝฆๅ?ๅ่ฎก็ฎๅฝๆฐ
			ChangeCartNum(changeValue, num, stock, isDuo, id, index, cart) {
				if (changeValue) {
					num.cart_num++;
					if (num.cart_num > stock) {
						if (isDuo) {
							this.$set(this.attr.productSelect, "cart_num", stock ? stock : 1);
							this.$set(this, "cart_num", stock ? stock : 1);
						} else {
							num.cart_num = stock ? stock : 0;
							this.$set(this, 'tempArr', this.tempArr);
							this.$set(this.cartData, 'cartList', this.cartData.cartList);
						}
						return this.$util.Tips({
							title: "่ฏฅไบงๅๆฒกๆๆดๅคๅบๅญไบ"
						});
					} else {
						if (!isDuo) {
							if (cart) {
								this.goCat(0, id, 1, 1, num.product_attr_unique);
								this.getTotalPrice();
							} else {
								this.goCat(0, id, 1);
							}
						}
					}
				} else {
					num.cart_num--;
					if (num.cart_num == 0) {
						this.cartData.cartList.splice(index, 1);
						if (isDuo) {
							this.$set(this.attr.productSelect, "cart_num", 1);
							this.$set(this, "cart_num", 1);
						}
					}
					if (num.cart_num < 0) {
						if (isDuo) {
							this.$set(this.attr.productSelect, "cart_num", 1);
							this.$set(this, "cart_num", 1);
						} else {
							num.cart_num = 0;
							this.$set(this, 'tempArr', this.tempArr);
							this.$set(this.cartData, 'cartList', this.cartData.cartList);
						}
					} else {
						if (!isDuo) {
							if (cart) {
								this.goCat(0, id, 0, 1, num.product_attr_unique);
								this.getTotalPrice();
							} else {
								this.goCat(0, id, 0);
							}
						}
					}
				}

			},
			// ๅค่งๆ?ผๅ?ๅฅ่ดญ็ฉ่ฝฆ๏ผ
			goCatNum() {
				this.goCat(1, this.id, 1);
			},
			/*
			 * ๅ?ๅฅ่ดญ็ฉ่ฝฆ
			 */
			goCat: function(duo, id, type, cart, unique) {
				let that = this;
				if (duo) {
					let productSelect = that.productValue[this.attrValue];
					//ๅฆๆๆๅฑๆง,ๆฒกๆ้ๆฉ,ๆ็คบ็จๆท้ๆฉ
					if (
						that.attr.productAttr.length &&
						productSelect === undefined
					)
						return that.$util.Tips({
							title: "ไบงๅๅบๅญไธ่ถณ๏ผ่ฏท้ๆฉๅถๅฎๅฑๆง"
						});
				}
				let q = {
					product_id: id,
					num: duo ? that.attr.productSelect.cart_num : 1,
					type: type,
					unique: duo ? that.attr.productSelect.unique : cart ? unique : ""
				};
				postCartNum(q)
					.then(function(res) {
						if (duo) {
							that.attr.cartAttr = false;
							that.$util.Tips({
								title: "ๆทปๅ?่ดญ็ฉ่ฝฆๆๅ"
							});
							// that.page = 1;
							// that.loadend = false;
							that.tempArr.forEach((item, index) => {
								if (item.id == that.id) {
									let arrtStock = that.attr.productSelect.stock
									let objNum = parseInt(item.cart_num) + parseInt(that.attr.productSelect
										.cart_num);
									item.cart_num = objNum > arrtStock ? arrtStock : objNum
								}
							})
							// that.productslist();
						}
						that.getCartNum();
						if (!cart) {
							that.getCartList(1);
						}
					})
					.catch(err => {
						return that.$util.Tips({
							title: err
						});
					});
			},
			// ็นๅป้ป่ฎคๅๅฑๆง่ดญ็ฉ่ฝฆ
			goCartDan(item, index) {
				if (!this.isLogin) {
					this.getIsLogin();
				} else {
					if (!item.cart_button) {
						goShopDetail(item, this.uid).then(res => {
							uni.navigateTo({
								url: `/pages/goods_details/index?id=${item.id}`
							});
						});
						return
					}
					this.tempArr[index].cart_num = 1;
					this.$set(this, 'tempArr', this.tempArr);
					this.goCat(0, item.id, 1);
				}
			},
			goCartDuo(item) {
				if (!this.isLogin) {
					this.getIsLogin();
				} else {
					if (!item.cart_button) {
						goShopDetail(item, this.uid).then(res => {
							uni.navigateTo({
								url: `/pages/goods_details/index?id=${item.id}`
							});
						});
						return
					}
					uni.showLoading({
						title: 'ๅ?่ฝฝไธญ'
					});

					this.storeName = item.store_name;
					this.getAttrs(item.id);
					this.$set(this, 'id', item.id);
					this.$set(this.attr, 'cartAttr', true);
				}
			},
			getIsLogin() {
				toLogin();
			},
			// ๅๅ่ฏฆๆๆฅๅฃ๏ผ
			getAttrs(id) {
				let that = this;
				getAttr(id, 0).then(res => {
					uni.hideLoading();
					that.$set(that.attr, 'productAttr', res.data.productAttr);
					that.$set(that, 'productValue', res.data.productValue);
					that.$set(that, 'is_vip', res.data.storeInfo.is_vip);
					that.$set(that, 'storeInfo', res.data.storeInfo);
					that.DefaultSelect();
				})
			},
			// ๅป่ฏฆๆ้กต
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


			openTap() {
				this.iSlong = false
			},
			closeTap() {
				this.iSlong = true
			},
			getAllCategory: function() {
				let that = this;
				getCategoryList().then(res => {
					let data = res.data;
					data.forEach(item => {
						item.children.unshift({
							'id': 0,
							'cate_name': 'ๅจ้จ'
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
			tapNav(index, item) {
				let list = this.categoryList[index];
				this.navActive = index;
				this.categoryTitle = list.cate_name;
				this.categoryErList = item.children ? item.children : [];
				this.tabClick = 0;
				this.tabLeft = 0;
				this.cid = list.id;
				this.sid = 0;
				this.page = 1;
				this.loadend = false;
				this.tempArr = [];
				this.productslist();
			},
			// ๅฏผ่ชๆ?็นๅป
			longClick(index) {
				if (this.categoryErList.length > 3) {
					this.tabLeft = (index - 1) * (this.isWidth + 6) //่ฎพ็ฝฎไธๅ็บฟไฝ็ฝฎ
				};
				this.tabClick = index; //่ฎพ็ฝฎๅฏผ่ช็นๅปไบๅชไธไธช
				this.iSlong = true;
				this.sid = this.categoryErList[index].id;
				this.page = 1;
				this.loadend = false;
				this.tempArr = [];
				this.productslist();
			},
		},
		onReachBottom: function() {
			this.productslist();
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
	.img_tupian{
		width: 260rpx;
		height: 260rpx;
		z-index:9999999999999999999!important;
	}
	.img_tupian1{
		width: 160rpx;
		height:160rpx;
		z-index:9999999999999999999!important;
	}
	.top_img{
		position: fixed;
		top:0rpx;
		left:0;
	}
	.bottom_img{
		position: fixed;
		bottom:100rpx;
		right:0;
	}
	/deep/.product-window.joinCart {
		z-index: 999;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		display: none;
	}

	.goodCate {
		/deep/.mask {
			z-index: 99;
		}

		/deep/.attrProduct {
			.mask {
				z-index: 100;
			}
		}

		.header {
			position: fixed;
			height: 128rpx;
			background-color: #fff;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			border-bottom: 1px solid #eee;
			padding: 0 28rpx;

			.pageIndex {
				width: 68rpx;
				height: 68rpx;
				border-radius: 50%;
				background-color: var(--view-theme);

				.iconfont {
					color: #fff;
					font-size: 30rpx;
				}

				// image{
				// 	width: 29rpx;
				// 	height: 30rpx;
				// }
			}

			.search {
				width: 600rpx;
				height: 68rpx;
				border-radius: 36rpx;
				background-color: #F7F7F7;
				font-size: 26rpx;
				color: #cccccc;
				margin-left: 22rpx;
				padding: 0 30rpx;
				box-sizing: border-box;
				z-index:8888!important;
				.iconfont {
					font-size: 30rpx;
					margin-right: 18rpx;
					color: #666666;
				}

				// image{
				// 	width: 27rpx;
				// 	height: 27rpx;
				// 	margin-right: 18rpx;
				// }
			}
		}

		.conter {
			margin-top: 128rpx;
			height: 100vh;
			background-color: #fff;

			.aside {
				position: fixed;
				width: 23%;
				left: 0;
				bottom: 0;
				top: 0;
				background-color: #F7F7F7;
				overflow-y: auto;
				overflow-x: hidden;
				margin-top: 128rpx;
				z-index: 99;
				padding-bottom: 140rpx;

				.item {
					height: 100rpx;
					width: 100%;
					font-size: 26rpx;
					color: #333333;

					&.on {
						background-color: #FFFFFF;
						width: 100%;
						text-align: center;
						color: var(--view-theme);
						font-weight: 500;
						position: relative;

						&::after {
							content: "";
							position: absolute;
							width: 6rpx;
							height: 46rpx;
							background: var(--view-theme);
							border-radius: 0 4rpx 4rpx 0;
							left: 0
						}
					}
				}
			}

			.wrapper {
				margin-top: 104rpx;
				width: 77%;
				float: right;
				background-color: #FFFFFF;
				padding-bottom: 130rpx;

				.bgcolor {
					width: 100%;
					background-color: #FFFFFF;
				}

				.goodsList {
					margin-top: 0 !important;
				}

				.mask {
					z-index: 9;
				}

				.longTab {
					width: 65%;
					position: fixed;
					top: 0;
					margin-top: 128rpx;
					height: 100rpx;
					z-index: 99;
					background-color: #FFFFFF;

					.longItem {
						height: 44rpx;
						display: inline-block;
						line-height: 44rpx;
						text-align: center;
						font-size: 26rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color: #333333;
						background-color: #F7F7F7;
						border-radius: 22rpx;
						margin-left: 12rpx;

						&.click {
							font-weight: bold;
							background-color: var(--view-theme);
							color: #ffffff;
						}
					}

					.underlineBox {
						height: 3px;
						width: 20%;
						display: flex;
						align-content: center;
						justify-content: center;
						transition: .5s;

						.underline {
							width: 33rpx;
							height: 4rpx;
							background-color: #FFFFFF;
						}
					}
				}

				.openList {
					width: 12%;
					height: 100rpx;
					background-color: #FFFFFF;
					line-height: 100rpx;
					padding-left: 30rpx;
					position: fixed;
					right: 0;
					top: 128rpx;
					z-index: 99;

					.iconfont {
						font-size: 22rpx;
						color: #666666;
					}
				}

				.downTab {
					width: 77%;
					position: fixed;
					top: 0;
					margin-top: 128rpx;
					z-index: 99;
					background-color: #FFFFFF;
					right: 0;

					.title {
						height: 100rpx;
						font-size: 26rpx;
						color: #999999;
						padding-left: 20rpx;

						.closeList {
							width: 90rpx;
							height: 100%;
							line-height: 100rpx;
							padding-left: 30rpx;
							transform: rotate(180deg);

							.iconfont {
								font-size: 22rpx;
								color: #666666;
							}
						}
					}

					.children {
						max-height: 500rpx;
						overflow-x: hidden;
						overflow-y: auto;
						padding-bottom: 20rpx;

						.item {
							height: 60rpx;
							background-color: #F7F7F7;
							border-radius: 30rpx;
							line-height: 60rpx;
							padding: 0 15rpx;
							margin: 0 0 20rpx 20rpx;
							width: 165rpx;
							text-align: center;

							&.click {
								font-weight: bold;
								background-color: var(--view-theme);
								color: #ffffff;
							}
						}
					}
				}

				.goodsList {
					margin-top: 228rpx;
					padding: 0 20rpx 0 20rpx;

					/deep/.item {
						margin-bottom: 33rpx !important;

						// .pictrue {
						// 	height: 216rpx;
						// }

						.text {
							font-size: 26rpx;
						}

						.bottom {
							padding-right: 18rpx;

							.sales {
								.money {
									font-size: 34rpx;

									text {
										font-size: 26rpx;
									}
								}
							}

							.cart {
								.pictrue {
									width: 50rpx;
									height: 50rpx;
								}
							}
						}
					}
				}
			}
		}

		.footer {
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 0;
			background-color: #fff;
			box-shadow: 0px -3px 16px rgba(36, 12, 12, 0.05);
			z-index: 101;
			padding-left: 30rpx;
			box-sizing: border-box;
			height: 100rpx;
			bottom: 98rpx;

			.cartIcon {
				width: 124rpx;
				height: 106rpx;
				position: relative;
				margin-top: -64rpx;

				.iconfont {
					font-size: 100rpx;
					color: var(--view-theme);
				}

				.num {
					min-width: 12rpx;
					color: var(--view-theme);
					border-radius: 15px;
					position: absolute;
					right: 0;
					font-size: 16rpx;
					padding: 0 11rpx;
					background-color: #fff;
					height: 36rpx;
					line-height: 34rpx;
					top: 24rpx;
					border: 1rpx solid var(--view-theme)
				}
			}

			.money {
				font-size: 26rpx;
				font-weight: bold;
				color: var(--view-priceColor);
				margin-right: 34rpx;

				.num {
					font-size: 34rpx;
				}
			}

			// .bnt {
			// 	position: absolute;
			// 	width: 222rpx;
			// 	height: 76rpx;
			// 	background-color: var(--view-theme);
			// 	border-radius: 46px;
			// 	line-height: 76rpx;
			// 	text-align: center;
			// 	color: #fff;
			// 	font-size: 28rpx;
			// 	margin-right: 30rpx;
			// 	z-index:9999999999;
			// 	bottom:14rpx;
			// 	right:-12rpx;
			// 	&.on {
			// 		background: #bbbbbb;
			// 	}
			// }
		}
		.bntsssssssssssss{
			position: fixed;
			padding:20rpx 80rpx;
			background-color: var(--view-theme);
			border-radius: 46px;
			color: #fff;
			font-size: 28rpx;
			margin-right: 30rpx;
			z-index:9999999999999;
			bottom:110rpx;
			right:-12rpx;
			text-align: center!important;
		}
	}
</style>
