<template>
	<view>
		<view class="c-footer2">
			<view class="c-list">
				<block v-for="(item,index) in list" :key="index">
					<button class="item" @click="btnGo" :data-url="item.pagePath" :class="index==selectIndex?'on':''">
						<image :src="index==selectIndex?item.selectedIconPath:item.iconPath" mode="widthFix"></image>
						{{item.text}}
					</button>
				</block>
			</view>
		</view>
		<view class="c-footer-space2">
			<view class="footer-space"></view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'ucFoot2',
	props: {
		selectIndex: {
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			list: [{
				pagePath: "/pages/index/index",
				iconPath: require("@/static/images/ft1.png"),
				selectedIconPath: require("@/static/images/ft1-on.png"),
				text: "首页"
			},
			{
				pagePath: "/pages/goods_cate/goods_cate",
				iconPath: require("@/static/images/fenlei_icon.png"),
				selectedIconPath: require("@/static/images/fenlei_icon_active.png"),
				text: "分类"
			},
			{
				pagePath: "/pages/subscription/index",
				iconPath: require("@/static/images/rengou_icon.png"),
				selectedIconPath: require("@/static/images/rengou_icon.png"),
				text: "认购区"
			},
			{
				pagePath: "/pages/telecast/index",
				iconPath: require("@/static/images/zhibo_icon.png"),
				selectedIconPath: require("@/static/images/zhibo_icon_active.png"),
				text: "直播"
			},
			{
				pagePath: "/pages/user/index",
				iconPath: require("@/static/images/ft3.png"),
				selectedIconPath: require("@/static/images/ft3-on.png"),
				text: "我的"
			}
			],
		}
	},



	created() {
	},
	methods: {
		btnGo(e) {
			var url = e.currentTarget.dataset.url
			console.log(url,'url')
			var pages = getCurrentPages();
			var page = '/' + (pages[pages.length - 1]).route;
			console.log(page,'page')
			if (page != url) {
				uni.switchTab({ url: url })
			}
		},
	}
}
</script>