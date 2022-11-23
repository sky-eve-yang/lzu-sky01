<script>
	import Vue from 'vue'
	import store from './store/index.js'
	import updateCustomBarInfo from './tuniao-ui/libs/function/updateCustomBarInfo.js'
	import uniIdPageInit from './uni_modules/uni-id-pages/init.js';

	export default {
		onLaunch: async function() {
			await uniIdPageInit()
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef H5
					// 获取手机系统版本
					const system = e.system.toLowerCase()
					const platform = e.platform.toLowerCase()
					// 判断是否为ios设备
					if (platform.indexOf('ios') != -1 && (system.indexOf('ios') != -1 || system.indexOf(
							'macos') != -1)) {
						Vue.prototype.SystemPlatform = 'apple'
					} else if (platform.indexOf('android') != -1 && (system.indexOf('android') != -1)) {
						Vue.prototype.SystemPlatform = 'android'
					} else {
						Vue.prototype.SystemPlatform = 'devtools'
					}
					// #endif
				}
			})

			// 获取设备的状态栏信息和自定义顶栏信息
			// store.dispatch('updateCustomBarInfo')
			updateCustomBarInfo().then((res) => {
				store.commit('$tStore', {
					name: 'vuex_status_bar_height',
					value: res.statusBarHeight
				})
				store.commit('$tStore', {
					name: 'vuex_custom_bar_height',
					value: res.customBarHeight
				})
			})


			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
			clipboard(data, event) {
				thorui.getClipboardData(data, (res) => {
					if (res) {
						uni.showToast({
							title: '复制成功',
							icon: 'success'
						})
					} else {
						uni.showToast({
							title: '复制失败',
							icon: 'error'
						})
					}
				}, event)
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';

	.sky-shadow {
		box-shadow:
			2.7px 2.1px -17.8px -69px rgba(0, 0, 0, 0.042),
			6.4px 5.1px -35.3px -69px rgba(0, 0, 0, 0.055),
			12px 9.6px -51.3px -69px rgba(0, 0, 0, 0.063),
			21.4px 17.2px -62.6px -69px rgba(0, 0, 0, 0.07),
			40.1px 32.2px -58.4px -69px rgba(0, 0, 0, 0.08),
			96px 77px 172px -69px rgba(0, 0, 0, 0.11);
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
	}

	.align-center {
		align-items: center;
	}

	.justify-center {
		justify-content: center;
	}

	.justify-between {
		justify-content: space-between;
	}

	.justify-around {
		justify-content: space-around;
	}
</style>
