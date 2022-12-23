<template>
	<view>
		<diy ref="diy" v-if="isDiy"></diy>
		<visualization v-else></visualization>
		<!-- <ucFoot2 :selectIndex="0"></ucFoot2> -->
		<!-- <newtabbar :selectIndex="0"></newtabbar> -->
		<view class="shipin-box" >
			<view class="mart" v-for="(item, index) in videoList" :key="index">
				<video
				:data-id="item.id"
				:id="item.id"
				:src="item.video_url"
				:show-fullscreen-btn="false"
				 @play="play"
				>
				</video>
			</view>
		</view>
		
		<u-tabbar v-model="selectIndex" :list="list" :mid-button="true" active-color="#3981A5" inactive-color="#808080"></u-tabbar>
	</view>
	
</template>

<script>
	import diy from './diy'
	import visualization from './visualization'
	import {
		getShare
	} from "@/api/public.js";
	export default {
		data() {
			return {
				html:'<view class="mart" v-for="(item, index) in videoList" :key="index"><video :id="index" :src="item.video_url" @error="videoErrorCallback" :show-fullscreen-btn="false" @play="play(index)" :poster="item.image"></video></view>',
				videoList:[
					{id:"1",video_url:'https://sanshen-1255748753.cos.ap-shanghai.myqcloud.com/video/017b5c827071356695513d884de69f8e.mp4'},
					{id:"2",video_url:'https://sanshen-1255748753.cos.ap-shanghai.myqcloud.com/video/25c971e44e03ae207fdb857bf2d6980f.mp4'},
					{id:"3",video_url:'https://sanshen-1255748753.cos.ap-shanghai.myqcloud.com/video/487240510e5de526a0f74aa4ea5f82b5.mp4'},
					{id:"4",video_url:'https://sanshen-1255748753.cos.ap-shanghai.myqcloud.com/video/7afdc5e79d13e54b721cbc399c2bd3ca.mp4'}
				],
				isDiy: uni.getStorageSync('is_diy'),
				shareInfo: {},
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
						pagePath: "/pages/point_mall/index",
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
				selectIndex: 0,
				isShow:true,
			}
		},
		components: {
			diy,
			visualization
		},
		
		onHide() {
			// this.isDiy = -1
		},
		onLoad() {
			console.log(this.html,'html')
			uni.$on('is_diy', (data) => {
				this.isDiy = data
			})
			this.setOpenShare();
			uni.hideTabBar()
		
		},
		methods: {
		play(e) {
			console.log(e,'e')
			// 获取当前视频id
			let currentId = e.currentTarget.dataset.id
			// uni.createVideoContext获取视频上下文对象
			this.videoContent = uni.createVideoContext(currentId)
			// 获取json对象并遍历, 停止非当前视频
			let videoList = this.videoList
			for (let i = 0; i < videoList.length; i++) {
			  let temp = videoList[i].id
			  if (temp !== currentId) {
				uni.createVideoContext(temp).pause()
			  }
			}
		  },

			// play(index) {
			// 	console.log('22')
			// 	this.isShow = false
			// 	this.videoList.forEach((item, ind) => {
			// 		if (ind != index) {
			// 			uni.createVideoContext(ind.toString()).pause(); //执行暂停
			// 		}
			// 	});
			// },
			async beforeSwitch(index) {
				console.log(index,'index111')
				// await等待一个请求，请求回来后再返回true，再进行切换
				
				// let data = await this.$u.post('');
				// return true; // 或者根据逻辑返回false
			},
			// 微信分享；
			setOpenShare: function() {
				let that = this;
				getShare().then((res) => {
					let data = res.data;
					this.shareInfo = data;
					// #ifdef H5
					let url = location.href;
					if (this.$store.state.app.uid) {
						url =
							url.indexOf("?") === -1 ?
							url + "?spread=" + this.$store.state.app.uid :
							url + "&spread=" + this.$store.state.app.uid;
					}
					if (that.$wechat.isWeixin()) {
						let configAppMessage = {
							desc: data.synopsis,
							title: data.title,
							link: url,
							imgUrl: data.img,
						};
						that.$wechat.wechatEvevt(
							["updateAppMessageShareData", "updateTimelineShareData"],
							configAppMessage
						);
					}
					// #endif
				});
			},
		},
		onReachBottom: function() {
			if (this.isDiy) {
				this.$refs.diy.onsollBotton()
			}
		},
		// #ifdef MP
		//发送给朋友
		onShareAppMessage(res) {
			// 此处的distSource为分享者的部分信息，需要传递给其他人
			let that = this;
			return {
				title: this.shareInfo.title,
				path: "/pages/index/index",
				imageUrl: this.shareInfo.img,
			};
		},
		//分享到朋友圈
		onShareTimeline() {
			return {
				title: this.shareInfo.title,
				imageUrl: this.shareInfo.img,
			};
		},
		// #endif
		
	}
</script>

<style lang="scss" scoped>
.shipin-box{
	margin:20rpx 22rpx 0!important;
}
.shipin{
	margin-bottom:20rpx;
	padding:0 20rpx;
}
.mart{
	margin-top:20rpx;
}
</style>
