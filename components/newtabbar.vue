<template>
	<view>
		<u-tabbar v-model="selectIndex" :list="list" :mid-button="true" active-color="#88d488"></u-tabbar>
	</view>
</template>

<script>
	export default {
		name: 'newtabbar',
		props: {
			selectIndex: {
				type: Number,
				default: 0,
		},
		data() {
			return {
				list: [{
						iconPath: require("@/static/images/ft1.png"),
						selectedIconPath: require("@/static/images/ft1-on.png"),
						text: '首页',
						customIcon: false,
						pagePath: "/pages/index/index",
					},
					{
						iconPath: require("@/static/images/fenlei_icon.png"),
						selectedIconPath: require("@/static/images/fenlei_icon_active.png"),
						text: '分类',
						customIcon: false,
						pagePath: "/pages/goods_cate/goods_cate",
					},
					{
						iconPath: require("@/static/images/rengou_icon.png"),
						selectedIconPath: require("@/static/images/rengou_icon.png"),
						text: '认购区',
						midButton: true,
						customIcon: false,
						pagePath: "/pages/subscription/index",
					},
					{
						iconPath: require("@/static/images/zhibo_icon.png"),
						selectedIconPath: require("@/static/images/zhibo_icon_active.png"),
						text: '直播',
						customIcon: false,
						pagePath: "/pages/telecast/index",
					},
					{
						iconPath: require("@/static/images/ft3.png"),
						selectedIconPath: require("@/static/images/ft3-on.png"),
						text: '我的',
						isDot: false,
						customIcon: false,
						pagePath: "/pages/user/index",
					},
				],
				selectIndex: 0
			}
		}
		}
	}
</script>