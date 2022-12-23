<template>
	<view>
		<view class="c-footer">
			<view class="c-list">
				<block v-for="(item,index) in list" :key="index" @click="goToPage(item)">
					<button class="item" @click="btnGo" :data-url="item.pagePath" :class="index==selectIndex?'on':''">
						<image :src="index==selectIndex?item.selectedIconPath:item.iconPath" mode="widthFix" class="uc-icon50"></image>
						{{item.text}}
					</button>
				</block>
			</view>
		</view>
		<view class="c-footer-space">
			<view class="footer-space"></view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'ucFoot',
	props: {
		selectIndex: {
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			list: [{
				pagePath: "/pages/page08/page08",
				iconPath: require("@/static/images/ft1.png"),
				selectedIconPath: require("@/static/images/ft1-on.png"),
				text: "首页"
			},
			// {
			// 	pagePath: "/pages/waiter/list",
			// 	iconPath: require("@/static/images/ft2.png"),
			// 	selectedIconPath: require("@/static/images/ft2-on.png"),
			// 	text: "认购区"
			// },
			{
				pagePath: "/pages/pageList/pageList",
				iconPath: require("@/static/images/ft3.png"),
				selectedIconPath: require("@/static/images/ft3-on.png"),
				text: "我的"
			},
			],
		}
	},
	created() {
	},
	methods: {
		btnGo(e) {
			var url = e.currentTarget.dataset.url
			var pages = getCurrentPages();
			var page = '/' + (pages[pages.length - 1]).route;
			if (page != url) {
				uni.redirectTo({ url: url })
			}
		},
	}
}
</script>