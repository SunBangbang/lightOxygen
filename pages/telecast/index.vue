<template>
	<view>
		<view>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item>
						<view class="swiper-item uni-bg-red">
							<image src="http://xam.zigood.com/uploads/attach/2022/09/20220906/48306a4bc4c6ae0d64ecee1904c1d76e.jpg" class="banner-img">
							</image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">
							<image src="http://xam.zigood.com/uploads/attach/2022/09/20220906/7a07374b6c17fb3b22cdce41790d8fc0.jpg" class="banner-img">
							</image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">
							<image src="http://xam.zigood.com/uploads/attach/2022/09/20220906/c287e68f9a70d0e140aa0b35d2f4a840.jpg" class="banner-img">
							</image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view v-html="html" style="height: 750rpx;width: 750rpx;">
				<!-- <view class="shipin mart" v-for="(item, index) in videoList" :key="index">
					<video 
					:id="index" 
					:src="item.video_url"
					@error="videoErrorCallback" 
					:show-fullscreen-btn="false"
					 @play="play(index)"
					 :poster="item.image"
					></video>
				</view> -->
			</view>
		</view>
		<u-tabbar v-model="selectIndex" :list="list" :mid-button="true" active-color="#3981A5" inactive-color="#808080" class="tab"></u-tabbar>
	</view>
	
</template>

<script>
	export default {

		data() {
			return {
				html:'<view class="shipin mart" v-for="(item, index) in videoList" :key="index"><video :id="index" :src="item.video_url" @error="videoErrorCallback" :show-fullscreen-btn="false" @play="play(index)" :poster="item.image"></video></view>',
				videoList:[
					{id:1,video_url:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/1.mp4',image:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fegmian1.jpg'},
					{id:2,video_url:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/2.mp4',image:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fengmian2.jpg'},
					{id:3,video_url:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/3.mp4',image:'https://dachengxiaoai-1313591130.cos.ap-nanjing.myqcloud.com/video/fengmian3.jpg'}
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				controls1:false,
				controls2:false,
				controls3:false,
				swiperBg: {}, //轮播
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
						text: '分类',
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
						text: '购物车',
						customIcon: false,
						pagePath: "/pages/telecast/index",
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
				selectIndex: 3
			}
		},
		onLoad() {
			console.log(this.html,'html')
		},
		methods:{
			play(index) {
				this.videoList.forEach((item, ind) => {
					if (ind != index) {
						uni.createVideoContext(ind.toString()).pause(); //执行暂停
					}
				});
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	/deep/.u-tabbar{
		z-index:9999999999!important;
	}
	.shipin{
		margin-bottom:20rpx;
		padding:0 20rpx;
	}
	.uni-margin-wrap {
			width: 690rpx;
			width: 100%;
		}
		.swiper {
			height:400rpx;
		}
		.swiper-item {
			display: block;
			height: 400rpx;
			line-height: 400rpx;
			text-align: center;
		}
		.swiper-list {
			margin-top: 40rpx;
			margin-bottom: 0;
		}
		.uni-common-mt {
			margin-top: 60rpx;
			// position: relative;
		}
		.info {
			// position: absolute;
			right: 20rpx;
		}
		.uni-padding-wrap {
			width:400rpx;
			padding: 0 100rpx;
		}
	// .banner-img{
	// 	height: 400rpx;
	// }
	.zhibo-box{
		padding:0 20rpx;
		z-index:-22;
	}
	.vid{
		z-index:1;
	}
	.mart{
		margin-top:20rpx;
	}
	

</style>