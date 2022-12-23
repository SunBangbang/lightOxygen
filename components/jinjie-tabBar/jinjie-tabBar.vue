<template>
	<view class="tab-block">
		<ul
			class='tab-list flex flex-center'
			:class="showMiddleButton === true?'tab-list-middle':'tab-list-default'"
		>
			<li
				v-for="(item, index) in tabList"
				:class="'list-item flex flex-column flex-middle ' + item.middleClass"
				@click="handlePush(item, index)"
				:key="index"
			>
				<view class="item-img-box">
					<image
						class="item-img"
						:src="tabIndex == index ? item.selectedIconPath : item.iconPath"
					/>
				</view>
				<view class="item-text font-20 color-black">
					{{item.text}}
				</view>
			</li>
		</ul>
		<view class="tab-bar" v-show="showTabBar === true"></view>
	</view>
</template>

<script>
	export default {
		props: {
			tabIndex: { //当前选中的tab项
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				/*
				 * iconPath: 默认icon图片路径
				 * selectedIconPath: 选中icon图片路径 
				 * text: tab按钮文字
				 * pagePath:页面路径
				 * middleClass:中间按钮样式类名
				 * tabList最小两项，最多五项
				 * tabList长度为奇数时，中间按钮才会突出显示
				 * 
				 */
				tabList: [{
						iconPath: '../../static/jinjie-tabBar/icons/home.png',
						selectedIconPath: '../../static/jinjie-tabBar/icons/homed.png',
						text: '首页',
						pagePath: '/pages/index/index',
						middleClass: ''
					},
					{
						iconPath: '../../static/jinjie-tabBar/icons/shop.png',
						selectedIconPath: '../../static/jinjie-tabBar/icons/shoped.png',
						text: '商城',
						pagePath: '/pages/shop/shop',
						middleClass: ''
					},
					{
						iconPath: '../../static/jinjie-tabBar/icons/code.png',
						selectedIconPath: '../../static/jinjie-tabBar/icons/code.png',
						text: '会员',
						pagePath: '/pages/code/code',
						middleClass: ''
					},
					{
						iconPath: '../../static/jinjie-tabBar/icons/task.png',
						selectedIconPath: '../../static/jinjie-tabBar/icons/tasked.png',
						text: '任务',
						pagePath: '/pages/task/task'
					},
					{
						iconPath: '../../static/jinjie-tabBar/icons/user.png',
						selectedIconPath: '../../static/jinjie-tabBar/icons/usered.png',
						text: '我的',
						pagePath: '/pages/user/user',
						middleClass: ''
					}
				],
				showTabBar: false,
				showMiddleButton: false,
			};
		},
		computed: {
			getHeight() {
				return Number(this.height);
			},
		},
		mounted() {
			this.getSystemInfo()
			this.setTabBar()
		},
		methods: {
			//判断中间按钮是否突出显示
			setTabBar(){
				let tabLength = this.tabList.length
				if (tabLength % 2) {
					this.showMiddleButton = true
					let middleIndex = Math.floor(tabLength / 2)
					this.tabList[middleIndex].middleClass = 'mid-button'
				}
			},
			//点击按钮
			handlePush(item, index) {
				if (this.tabIndex !== index) {
					uni.reLaunch({
						url: `${item.pagePath}?tabIndex=${index}`,
					})
				}
			},
			//兼容iPhoneX以上底部黑线条的显示
			getSystemInfo() {
				uni.getSystemInfo({
					success: (res) => {
						// X及以上的异形屏top为44，非异形屏为20
						if (res.safeArea.top > 20) {
							this.showTabBar = true
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.flex {
		display: flex;
		flex-flow: row wrap;
	}

	.flex-center {
		align-items: center;
		justify-content: center;
	}

	.flex-column {
		flex-direction: column;
	}

	.flex-middle {
		align-items: center;
	}
	.font-20 {
		font-size: 20rpx;
	}
	.tab-block {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		background-size: contain;
		width: 100vw;
		.tab-list{
			height:100rpx;
		}
		.tab-list-default{
			background-color: #FFFFFF;
			border-top: 1px #dddddd solid;
		}
		.tab-list-middle {
			position: relative;
			background: url('https://res.paquapp.com/popmartvip/home/nav_bar_bg_2x.png') no-repeat center center;
			background-size: cover;
		}
		.list-item {
			flex: 1;
			.item-img-box {
				width: 44rpx;
				height: 42rpx;
				margin-bottom: 9rpx;
				position: relative;
			}

			.item-img {
				width: 44rpx;
				height: 42rpx;
			}
		}

		.mid-button {
			position: relative;

			.item-img-box {
				width: 106rpx;
				height: 106rpx;
				margin-bottom: 9rpx;
				position: absolute;
				z-index: 1002;
				top: -104rpx;
			}

			.item-img {
				width: 106rpx;
				height: 106rpx;
			}

			.item-text {
				font-size: 20rpx;
				position: absolute;
				z-index: 1002;
				bottom: -40rpx;
			}
		}

		.tab-bar {
			height: 30rpx;
			background-color: #FFFFFF;
		}
	}
</style>
