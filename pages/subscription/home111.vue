<template>
    <view>
        <view class="uc-wrap uc-home">
            <view class="c-header">
                <ucBar></ucBar>
                <view class="header">
                    <view class="header-title">认购区</view>
                </view>
            </view>
            <ucBar></ucBar>
            <view class="c-header-space"></view>
            <view class="banner-box">
                <image src="@/static/images/home.banner.png" mode="aspectFill"></image>
            </view>
            <view class="center-menu">
                <view class="item" url="" hover-class="none" @click="gotoGuize">
                    <image src="@/static/images/home-icon-1-1.png" mode="widthFix"></image>规则说明
                </view>
                <view class="item" url="" hover-class="none" @click="gotoJilu">
                    <image src="@/static/images/home-icon-1-2.png" mode="widthFix"></image>抢购记录
                </view>
                <view class="item" url="" hover-class="none">
                    <image src="@/static/images/home-icon-1-3.png" mode="widthFix"></image>红包兑换
                </view>
                <view class="item" url="" hover-class="none">
                    <image src="@/static/images/home-icon-1-4.png" mode="widthFix"  @click="gotoTuiguang"></image>兑换记录
                </view>
            </view>
            <view class="filter">
                <view class="title">认购专区</view>
                <view class="tabHeader">
                    <view :class="current==1?'item on':'item'" @click="changqu(1)">认购一区</view>
                    <view :class="current==2?'item on':'item'" @click="changqu(2)">认购二区</view>
                    <view :class="current==3?'item on':'item'" @click="changqu(3)">认购三区</view>
                    <view :class="current==4?'item on':'item'" @click="changqu(4)">认购四区</view>
                </view>
                <view class="tabHeader2">
                    <view :class="current2==1?'item on':'item'" @click="changqu2(1)">全部</view>
                    <view :class="current2==2?'item on':'item'" @click="changqu2(2)">种植中</view>
                    <view :class="current2==3?'item on':'item'" @click="changqu2(3)">待采摘</view>
                    <view :class="current2==4?'item on':'item'" @click="changqu2(4)">已采摘</view>
                    <view :class="current2==5?'item on':'item'" @click="changqu2(5)">采摘失败</view>
                </view>
            </view>
            <!-- 红区 -->
            <view v-if="current==1"><!-- 红区 --></view>
            <!-- /红区 -->
            <!-- 蓝区 -->
            <view v-if="current==2"></view>
            <!-- /蓝区 -->
            <!-- 2区 -->
            <view v-if="current==3"></view>
            <!-- /2区 -->
            <!-- 3区 -->
            <view v-if="current==4"></view>
            <!-- /3区 -->
            <!-- 二次分类 -->
            <!-- 全部 -->
            <view>
                <view class="list">
					<block v-for="(item,index) in zhuanquList" :key="index">
						<view class="item">
						    <navigator class="face" url="" hover-class="none"><image src="@/static/images/home-img.png" mode="aspectFill"></image></navigator>
						    <view class="right">
						        <view class="name"><text class="big"><!-- [红区] 6期 -->{{item.name}}</text>{{item.title}}</view>
						        <view class="txt">认购种植补贴</view>
						        <view class="txt">每人限种： <text class="uc-green">{{item.min}}-{{item.max}}（棵）</text></view>
						        <!-- <view class="txt">进度： <text class="uc-green">{{item.percent}}</text></view> -->
						       <view class="progress-box mart">
									<progress :percent="item.percent" show-info="false" stroke-width="5" activeColor="#88d488" backgroundColor="#cfcfcf"/>
						       </view>
						    </view>
						    <text class="uc-btn green" v-if="item.status == 1" @click="open(item)">种植中</text>
							<text class="uc-btn green" v-if="item.status == 2">待采</text>
							<text class="uc-btn green" v-if="item.status == 3">已采摘</text>
							<text class="uc-btn green" v-if="item.status == 4">采摘失败</text>
						    <text class="uc-tag green" v-if="item.status == 1">种植中</text>
							<text class="uc-tag green" v-if="item.status == 2">待采</text>
							<text class="uc-tag green" v-if="item.status == 3">已采摘</text>
							<text class="uc-tag green" v-if="item.status == 4">采摘失败</text>
							<navigator class="uc-btn btn-appointment" url="" hover-class="none" v-if="item.status == 0" @click="open(item)">预约</navigator>
							<text class="uc-btn gray" v-if="item.status == 0" @click="weikaishi()">暂未开始</text>
						</view>
					</block>
                </view>
            </view>
            <!-- /全部 -->
            <!-- 种植中 -->
            <view v-if="current2==2"></view>
            <!-- /种植中 -->
            <!-- 待采摘 -->
            <view v-if="current2==3"></view>
            <!-- /待采摘 -->
            <!-- 已采摘 -->
            <view v-if="current2==4"></view>
            <!-- /已采摘 -->
            <!-- 采摘失败 -->
            <view v-if="current2==5"></view>
            <!-- /采摘失败 -->
        </view>
        <!-- <ucFoot :selectIndex="0"></ucFoot> -->
		<!-- 预约弹窗 -->
		<uni-popup ref="popup" type="center">
			<view class="popup_box">
				<view class="popup_box_top">
					<view class="yy-title">请输入金额</view>
					<input  type="number" v-model="amount" placeholder="请输入数字" class="uni-input" focus/>
				</view>
				<view class="btns_box">
					<view class="btns_box_left" @click="clickCancel">取消</view>
					<view class="btns_box_left btns_bg" @click="confirm">确定</view>
				</view>
			</view>
		</uni-popup>
		<!-- 规则弹窗 -->
		<uni-popup ref="guize" type="center">
					<view class="popup_box_guize" @click="closeGz()">
						<view class="gz_title">规则说明</view>
						<view class="font30">
							三国杀，身份牌分为主公、忠臣、反贼和内奸，主公是整个游戏的成败也是唯一可以亮出自己身份的角色，忠臣就是保护主公不让其他玩家杀害主公，反贼主要任务就是杀害主公顺带打败其他玩家，内奸这个身份比较特殊需要杀害忠臣反贼之后最后和主公形成一对一然后杀害主公才算胜利一局游戏中最多一个主公和一个内奸、两个忠臣和三个反贼，除了主公和内奸是固定的一个人其他可以按照玩家人数的多少适当增加或者减少，忠臣的数量要始终少于反贼。
						</view>
						<view class="font30">
							三国杀，身份牌分为主公、忠臣、反贼和内奸，主公是整个游戏的成败也是唯一可以亮出自己身份的角色，忠臣就是保护主公不让其他玩家杀害主公，反贼主要任务就是杀害主公顺带打败其他玩家，内奸这个身份比较特殊需要杀害忠臣反贼之后最后和主公形成一对一然后杀害主公才算胜利一局游戏中最多一个主公和一个内奸、两个忠臣和三个反贼，除了主公和内奸是固定的一个人其他可以按照玩家人数的多少适当增加或者减少，忠臣的数量要始终少于反贼。
						</view>
					</view>
		</uni-popup>
		
		
		
    </view>
</template>
<script>
	import home from '@/components/home';
	import {
		getUserInfo
	} from "@/api/user";
	import tabBar from "@/pages/index/visualization/components/tabBar.vue";
import { 
	breaklist, 
	bookingUserList,
	joinbreak
	} from '@/api/subscription.js'
export default {
    name: 'home',
    components: { home },
    data() {
        return {
            current: 1,
            current2: 1,
			zhuanquList:[],
			pgList: [20, 0, 0, 0],
			showPop:true,
			amount:'',
			good_id:'',
			userInfo:'',
			title:''
        }
    },
	/**
	 * 生命周期函数--监听页面显示
	 */
	onLoad: function() {
		this.getBreaklists()
		this.getUserInfo()
	},
    mounted() {},
    methods: {
		gotoJilu(){
			uni.navigateTo({
				url: '/pages/subscription/order'
			});
		},
		// gotoTuiguang(){
		// 	uni.navigateTo({
		// 		url: '/pages/extension/index'
		// 	});
		// },
		confirm(){
			if(this.status===0){
				this.bookingUserList()
				this.getBreaklists()
			}
			if(this.status===1){
				this.joinbreak()
				this.getBreaklists()
			}
		},
		joinbreak: function() {
			let that = this;
			joinbreak({amount:that.amount,user_id:that.userInfo.uid,id:that.good_id}).then(res => {
				console.log(res,'222')
				if(res.status!=200){
					that.$util.Tips({
						title: res.msg,
					});
					this.amount = ''
				}else{
					that.$util.Tips({
						title: "种植成功",
						icon: "success",
					});
					this.$refs.popup.close('center')
				}
			});
		},
		gotoGuize(){
			this.$refs.guize.open('center')
		},
		closeGz(){
			this.$refs.guize.close('center')
		},
		getBreaklists: function() {
			let that = this;
			breaklist({type:this.current,status:this.current2}).then(res => {
				that.zhuanquList = res.data.lists;
				console.log(that.zhuanquList,'that.zhuanquList')
			});
		},
		weikaishi(){
			let that = this;
			that.$util.Tips({
				title: "暂未开始抢购",
			});
		},
		bookingUserList: function() {
			let that = this;
			bookingUserList({amount:that.amount,user_id:that.userInfo.uid,id:that.good_id}).then(res => {
				console.log(res,'222')
				if(res.status!=200){
					that.$util.Tips({
						title: res.msg,
					});
					this.amount = ''
				}else{
					that.$util.Tips({
						title: "预约成功",
						icon: "success",
					});
					this.$refs.popup.close('center')
				}
			});
		},
		clickCancel(){
			this.$refs.popup.close('center')
		},
		open(e){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			console.log(e,'e')
			this.good_id = e.id
			this.status = e.status
			this.$refs.popup.open('center')
		},
		changqu(type){
			this.current = type
			this.getBreaklists()
		},
		changqu2(type){
			this.current2 = type
			this.getBreaklists()
		},
		/**
		 * 获取个人用户信息
		 */
		getUserInfo: function() {
			let that = this;
			getUserInfo().then(res => {
				uni.hideLoading();
				that.userInfo = res.data
				console.log(that.userInfo.uid,'that.userInfo')
				that.$store.commit("SETUID", res.data.uid);
				that.$store.commit("UPDATE_USERINFO", res.data);
				that.isStatus = true
				this.close()
			});
		},
	}
}
</script>
<style >
	.popup_box_guize{
		min-height: 200rpx;
		background: #ffffff;
		width: 660rpx;
		padding:30rpx;
		border-radius: 10rpx;
	}
	.gz_title{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-weight: 600;
		font-size: 32rpx;
		margin-bottom:30rpx;
	}
	.font30{
		font-size: 30rpx;
	}
	.btns_box{
		display: flex;
		justify-content: space-around;
		border-top:2rpx solid #cfcfcf;
	}
	.btns_box_left{
		width: 180rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size:30rpx;
		width: 50%;
	}
	.btns_bg{
		color:orange;
		border-left:2rpx solid #cfcfcf;
	}
	.uni-input{
		height: 82rpx!important;
		padding-left:20rpx;
		font-size:32rpx;
		font-weight: 600;
		border-radius: 10rpx;
	}
	
	.popup_box{
		background: #ffffff;
		padding:20rpx 0 0;
		width: 600rpx;
		border-radius: 10rpx;
	}
	.popup_box_top{
		padding:10rpx 60rpx 0;
		margin-bottom:50rpx;
	}
	/deep/.uni-input-placeholder{
		border:2rpx solie #cfcfcf!important;
	}
	/deep/.uni-input-form, .uni-input-wrapper{
		height: 82rpx!important;
	}
	/deep/.uni-input-input{
		height: 82rpx!important;
		border:2rpx solie #cfcfcf!important;
	}
	.yy-title{
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size:32rpx;
		font-weight: 500;
	}
	/deep/.uni-progress-box {
			display: flex;
			height: 50rpx;
			margin-bottom: 60rpx;
			
		}
		.mart{
			margin-top: 16rpx;
		}
		/deep/.uni-progress{
			width: 300rpx!important;
		}
		/deep/.uni-progress-bar{
			border-radius: 20rpx;
		}
</style>