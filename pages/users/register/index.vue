<template>
	<view class="body_bg">
	<view class="login-wrapper" :style="colorStyle">
		<view class="shading">
			<image src="/static/images/dl_logo.png"/>
		</view>
		<view class="whiteBg">
			<view class="list">
				<!-- <view class="item">
					<view class="acea-row row-middle">
						<image src="/static/images/dl_icon1.png" style="width: 32rpx; height: 32rpx;"></image>
						<input type="text" placeholder="输入登录账号" v-model="account" maxlength="11" required />
					</view>
				</view> -->
				<view class="item">
					<view class="acea-row row-middle">
						<view style="width:40rpx">
							<image src="/static/images/mobile_icon.png" style="width: 36rpx; height: 34rpx;"></image>
						</view>
						<input type="text" placeholder="输入手机号码" v-model="phone" maxlength="11" />
					</view>
				</view>
				<view class="item">
					<view class="acea-row row-middle">
						<view style="width:40rpx">
							<image src="/static/images/dl_icon2.png" style="width: 30rpx; height: 32rpx;"></image>
						</view>
						<input type="password" placeholder="输入登录密码" v-model="password" required />
					</view>
				</view>
				<view class="item">
					<view class="acea-row row-middle">
						<view style="width:40rpx">
							<image src="/static/images/mima_icon.png" style="width: 30rpx; height: 32rpx;"></image>
						</view>
						<input type="password" placeholder="确认登陆密码" v-model="respass" required />
					</view>
				</view>
				<view class="item">
					<view class="acea-row row-middle">
						<view style="width:40rpx">
							<image src="/static/images/code_img.png" style="width: 40rpx; height: 38rpx;"></image>
						</view>
						<input type="text" placeholder="输入验证码" maxlength="6" class="codeIput" v-model="captcha" />
						<button class="code" :disabled="disabled" :class="disabled === true ? 'on' : ''" @click="code">
							{{ text }}
						</button>
					</view>
				</view>
			</view>
			<view class="logon" @click="loginMobile">立即注册</view>
		</view>
		<view class="bottom"></view>
	</view>
	</view>
</template>
<script>
	import dayjs from "@/plugin/dayjs/dayjs.min.js";
	import sendVerifyCode from "@/mixins/SendVerifyCode";
	import {
		loginH5,
		loginMobile,
		loginRegister,
		registerVerify,
		register,
		getCodeApi,
		getUserInfo,
		appleLogin
	} from "@/api/user";
	import attrs, {
		required,
		alpha_num,
		chs_phone
	} from "@/utils/validate";
	import {
		getLogo
	} from "@/api/public";
	// import cookie from "@/utils/store/cookie";
	import {
		VUE_APP_API_URL
	} from "@/utils";
	// #ifdef APP-PLUS
	import {
		wechatAppAuth
	} from '@/api/api.js'
	// #endif
	const BACK_URL = "login_back_url";
	import colors from '@/mixins/color.js';
	export default {
		name: "Login",
		mixins: [sendVerifyCode, colors],
		data: function() {
			return {
				navList: ["快速登录", "账号登录"],
				current: 0,
				account: "",
				phone:"",
				password: "",
				respass: "",
				showreg:true,
				captcha: "",
				formItem: 1,
				type: "login",
				logoUrl: "",
				keyCode: "",
				codeUrl: "",
				codeVal: "",
				isShowCode: false,
				appLoginStatus: false, // 微信登录强制绑定手机号码状态
				appUserInfo: null, // 微信登录保存的用户信息
				appleLoginStatus: false, // 苹果登录强制绑定手机号码状态
				appleUserInfo: null,
				appleShow: false, // 苹果登录版本必须要求ios13以上的
				keyLock: true
			};
		},
		watch: {
			formItem: function(nval, oVal) {
				if (nval == 1) {
					this.type = 'login'
				} else {
					this.type = 'register'
				}
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showreg = false
			// #endif
			let self = this
			uni.getSystemInfo({
				success: (res) => {
					if (res.platform.toLowerCase() == 'ios' && this.getSystem(res.system)) {
						self.appleShow = true
					}
				}
			});
		},
		mounted: function() {
			// this.getCode();
			this.getLogoImage();
		},
		methods: {
			// IOS 版本号判断
			getSystem(system) {
				let str
				system.toLowerCase().indexOf('ios') === -1 ? str = system : str = system.split(' ')[1]
				if (str.indexOf('.'))
					return str.split('.')[0] >= 13
				return str >= 13
			},
			// 苹果登录
			appleLogin() {
				let self = this
				this.account = ''
				this.captcha = ''
				uni.showLoading({
					title: '登录中'
				})
				uni.login({
					provider: 'apple',
					timeout: 10000,
					success(loginRes) {
						uni.getUserInfo({
							provider: 'apple',
							success: function(infoRes) {
								self.appleUserInfo = infoRes.userInfo
								self.appleLoginApi()
							},
							fail() {
								uni.showToast({
									title: '获取用户信息失败',
									icon: 'none',
									duration: 2000
								})
							},
							complete() {
								uni.hideLoading()
							}
						});
					},
					fail(error) {
						console.log(error)
					}
				})
			},
			// 苹果登录Api
			appleLoginApi() {
				let self = this
				appleLogin({
					openId: self.appleUserInfo.openId,
					email: self.appleUserInfo.email || '',
					phone: this.account,
					captcha: this.captcha
				}).then(({
					data
				}) => {
					if (data.isbind) {
						uni.showModal({
							title: '提示',
							content: '请绑定手机号后，继续操作',
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									self.current = 1
									self.appleLoginStatus = true
								}
							}
						});
					} else {
						self.$store.commit("LOGIN", {
							'token': data.token,
							'time': data.expires_time - self.$Cache.time()
						});
						let backUrl = self.$Cache.get(BACK_URL) || "/pages/index/index";
						self.$Cache.clear(BACK_URL);
						self.$store.commit("SETUID", data.userInfo.uid);
						uni.reLaunch({
							url: backUrl
						});
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: `错误信息${error}`,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				})
			},
			// App微信登录
			wxLogin() {
				let self = this
				this.account = ''
				this.captcha = ''
				uni.showLoading({
					title: '登录中'
				})
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						// 获取用户信息
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								self.appUserInfo = infoRes.userInfo
								self.wxLoginApi()
							},
							fail() {
								uni.showToast({
									title: '获取用户信息失败',
									icon: 'none',
									duration: 2000
								})
							},
							complete() {
								uni.hideLoading()
							}
						});
					},
					fail() {
						uni.showToast({
							title: '登录失败',
							icon: 'none',
							duration: 2000
						})
					}
				});
			},

			wxLoginApi() {
				let self = this
				wechatAppAuth({
					userInfo: self.appUserInfo,
					phone: this.account,
					code: this.captcha
				}).then(({
					data
				}) => {
					if (data.isbind) {
						uni.showModal({
							title: '提示',
							content: '请绑定手机号后，继续操作',
							showCancel: false,
							success: function(res) {
								if (res.confirm) {
									self.current = 1
									self.appLoginStatus = true
								}
							}
						});
					} else {
						self.$store.commit("LOGIN", {
							'token': data.token,
							'time': data.expires_time - self.$Cache.time()
						});
						let backUrl = self.$Cache.get(BACK_URL) || "/pages/index/index";
						self.$Cache.clear(BACK_URL);
						self.$store.commit("SETUID", data.userInfo.uid);
						uni.reLaunch({
							url: backUrl
						});
					}
				}).catch(error => {
					uni.showModal({
						title: '提示',
						content: `错误信息${error}`,
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				})
			},
			again() {
				this.codeUrl =
					VUE_APP_API_URL +
					"/sms_captcha?" +
					"key=" +
					this.keyCode +
					Date.parse(new Date());
			},
			code() {
				let that = this
				getCodeApi()
					.then(res => {
						that.keyCode = res.data.key;
						that.getCode();
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			async getLogoImage() {
				let that = this;
				getLogo(2).then(res => {
					that.logoUrl = res.data.logo_url;
				});
			},
			async loginMobile() {
				console.log('注册')
				let that = this;
				// if (!that.account) return that.$util.Tips({
				// 	title: '请填写登录账号'
				// })
				// if (!/^[a-zA-Z0-9_]{6,12}$/i.test(that.account)) return that.$util.Tips({
				// 	title: '账号必须为6-12位字母、数字'
				// });
				
				if (!that.password) return that.$util.Tips({
					title: '请填写密码'
				});
				if (!that.password) return that.$util.Tips({
					title: '请填写确认密码'
				});
				if (!that.phone) return that.$util.Tips({
					title: '请填写手机号码'
				});
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.phone)) return that.$util.Tips({
					title: '请输入正确的手机号码'
				});
				if (!that.captcha) return that.$util.Tips({
					title: '请填写验证码'
				});
				if (!/^[\w\d]+$/i.test(that.captcha)) return that.$util.Tips({
					title: '请输入正确的验证码'
				});
				if (that.appLoginStatus) {
					that.wxLoginApi()
				} else if (that.appleLoginStatus) {
					that.appleLoginApi()
				} else {
					if (this.keyLock) {
						this.keyLock = !this.keyLock
					} else {
						return that.$util.Tips({
							title: '请勿重复点击'
						});
					}
					loginRegister({
							// account: that.account,
							password: that.password,
							respass: that.respass,
							phone: that.phone,
							captcha: that.captcha,
							spread: that.$Cache.get("spread")
						})
						.then(res => {
							that.$util.Tips({
								title: res.msg
							});
							console.log(res)
							// that.keyLock = true
							// that.$util.Tips({
							// 	title: res.msg
							// });
							setTimeout(function() {
								// that.formItem = 1;
								// that.current=0;
								// window.location.href='https://down.chengtuomeijia.com/m/index.html'
								window.location.href='https://down.xiaoaimall.cn'
							}, 2000);
							
						})
						.catch(res => {
							that.keyLock = true
							that.$util.Tips({
								title: res
							});
						});
				}

			},
			async register() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: '请填写手机号码'
				});
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.account)) return that.$util.Tips({
					title: '请输入正确的手机号码'
				});
				if (!that.captcha) return that.$util.Tips({
					title: '请填写验证码'
				});
				if (!/^[\w\d]+$/i.test(that.captcha)) return that.$util.Tips({
					title: '请输入正确的验证码'
				});
				if (!that.password) return that.$util.Tips({
					title: '请填写密码'
				});
				if (/^([0-9]|[a-z]|[A-Z]){0,6}$/i.test(that.password)) return that.$util.Tips({
					title: '您输入的密码过于简单'
				});
				register({
						account: that.account,
						captcha: that.captcha,
						password: that.password,
						spread: that.$Cache.get("spread")
					})
					.then(res => {
						that.$util.Tips({
							title: res
						});
						that.formItem = 1;
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			async getCode() {
				let that = this;
				if (!that.phone) return that.$util.Tips({
					title: '请填写手机号码'
				});
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(that.phone)) return that.$util.Tips({
					title: '请输入正确的手机号码'
				});
				if (that.formItem == 2) that.type = "register";

				await registerVerify({
						phone: that.phone,
						type: that.type,
						key: that.keyCode,
						code: that.codeVal
					})
					.then(res => {
						that.$util.Tips({
							title: res.msg
						});
						that.sendCode();
					})
					.catch(res => {
						that.$util.Tips({
							title: res
						});
					});
			},
			navTap: function(index) {
				this.current = index;
			},
			async submit() {
				let that = this;
				if (!that.account) return that.$util.Tips({
					title: '请填写账号'
				});
				if (!/^[\w\d]{5,16}$/i.test(that.account)) return that.$util.Tips({
					title: '请输入正确的账号'
				});
				if (!that.password) return that.$util.Tips({
					title: '请填写密码'
				});
				if (this.keyLock) {
					this.keyLock = !this.keyLock
				} else {
					return that.$util.Tips({
						title: '请勿重复点击'
					});
				}
				loginH5({
						account: that.account,
						password: that.password,
						spread: that.$Cache.get("spread")
					})
					.then(({
						data
					}) => {
						that.$store.commit("LOGIN", {
							'token': data.token,
							'time': data.expires_time - this.$Cache.time()
						});
						let backUrl = that.$Cache.get(BACK_URL) || "/pages/index/index";
						that.$Cache.clear(BACK_URL);
						getUserInfo().then(res => {
							this.keyLock = true
							that.$store.commit("SETUID", res.data.uid);
							uni.reLaunch({
								url: backUrl
							});
						}).catch(error => {
							this.keyLock = true
						})
					})
					.catch(e => {
						this.keyLock = true
						that.$util.Tips({
							title: e
						});
					});
			}
		}
	};
</script>
<style>
	page {
		background: #fff;
	}
</style>
<style lang="scss">
	.body_bg{
		height: 100vh;
		width: 100vw;
		background: url(../../../static/images/dl_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.appLogin {
		margin-top: 60rpx;

		.hds {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 24rpx;
			color: #B4B4B4;

			.line {
				width: 68rpx;
				height: 1rpx;
				background: #CCCCCC;
			}

			p {
				margin: 0 20rpx;
			}
		}

		.btn-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 30rpx;

			.btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 68rpx;
				height: 68rpx;
				border-radius: 50%;
			}

			.apple-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 68rpx;
				height: 68rpx;
				border-radius: 50%;
				background: #000;


				.icon-s-pingguo {
					color: #fff;
					font-size: 44rpx;
				}
			}

			.iconfont {
				font-size: 40rpx;
				color: #fff;
			}

			.wx {
				margin-right: 30rpx;
				background-color: #61C64F;
			}

			.mima {
				margin-right: 30rpx;
				background-color: #28B3E9;
			}

			.yanzheng {
				margin-right: 30rpx;
				background-color: #F89C23;
			}

		}
	}

	.code img {
		width: 100%;
		height: 100%;
	}

	.acea-row.row-middle {
		input {
			margin-left: 20rpx;
			display: block;
		}
	}

	.login-wrapper {
		padding: 30rpx;

		.shading {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;

			/* #ifdef APP-VUE */
			margin-top: 50rpx;
			/* #endif */
			/* #ifndef APP-VUE */

			margin-top: 100rpx;
			/* #endif */


			image {
				width: 240rpx;
				height: 240rpx;
			}
		}

		.whiteBg {
			margin-top: 200rpx;
			padding:0 20rpx;
			.list {
				border-radius: 16rpx;
				overflow: hidden;

				.item {
					border-bottom: 1px solid #F0F0F0;

					.row-middle {
						position: relative;
						padding: 16rpx 20rpx;

						input {
							flex: 1;
							font-size: 28rpx;
							height: 80rpx;
						}

						.code {
							position: absolute;
							right: 30rpx;
							top: 50%;
							color: var(--view-theme);
							font-size: 26rpx;
							transform: translateY(-50%);
						}
					}
				}
			}

			.logon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 86rpx;
				margin-top: 80rpx;
				background-color: var(--view-theme);
				border-radius: 120rpx;
				color: #FFFFFF;
				font-size: 30rpx;
				background:#88D488!important;
			}

			.tips {
				margin: 30rpx;
				text-align: center;
				color: #999;
			}
		}
	}
</style>
