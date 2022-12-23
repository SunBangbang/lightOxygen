<template>
	<view :style="'width: 100%;height:'+ statusBarHeight +'px;'"></view>
</template>
<script>
	export default {
		name: 'ucBar',
		data() {
			return {
				statusBarHeight: 22
			};
		},
		created() {
			var _this = this
			uni.getSystemInfo({
				success(res) {
					_this.statusBarHeight = res.statusBarHeight
				}
			});
		}
	}
</script>