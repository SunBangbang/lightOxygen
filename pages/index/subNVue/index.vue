<template>
	<view>
		<view class="shipin-box">
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
	</view>
	
</template>

<script>

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
				
			}
		},

		onHide() {
		},
		onLoad() {
			
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

			
		
	}
</script>


