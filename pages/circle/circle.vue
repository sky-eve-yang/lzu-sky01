<template>
	<view class="circle tn-safe-area-inset-bottom">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
				<view class="tn-margin-top tn-margin-left"
					style="text-shadow:  1rpx 0 0 #FFF, 0 1rpx 0 #FFF, -1rpx 0 0 #FFF , 0 -1rpx 0 #FFF;">
					<tn-tabs :list="scrollList" :current="current" @change="tabChange" activeColor="#000" :bold="true"
						:fontSize="36"></tn-tabs>
				</view>
			</view>

		</tn-nav-bar>


		<!-- 发现 -->
		<view style="margin-top: 160rpx;" class="" v-if="current==0">
			
			<view class="tn-padding-bottom-lg">
				
				<view class="tn-flex tn-flex-row-between" @click="tn('')">
				  <view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
				    精选图片
				  </view> 
				  <view class="justify-content-item tn-margin tn-text-lg tn-color-cat">
				    <text class="tn-padding-xs">全部</text>
				    <text class="tn-icon-topics"></text>
				  </view>
				</view>
				
				<view class="tn-flex tn-margin-left tn-margin-right tn-margin-top-sm">
				  <view class="tn-flex-2"> 
				    <view class="image-pic tn-margin-right" style="background-image:url('https://tnuiimage.tnkjapp.com/simple/image1.jpg')" @click="tn('')">
				      <view class="image-tuniao1">
				      </view>
				    </view> 
				  </view>
				  <view class="tn-flex-1">
				    <view class="image-pic" style="background-image:url('https://tnuiimage.tnkjapp.com/simple/image5.jpg')" @click="tn('')">
				      <view class="image-tuniao2">
				      </view>
				    </view> 
				    <view class="image-pic tn-margin-top" style="background-image:url('https://tnuiimage.tnkjapp.com/simple/banner1.jpg')" @click="tn('')">
				      <view class="image-tuniao2">
				      </view>
				    </view> 
				  </view>
				</view>
				
			</view>
			

			<!-- 次级导航栏 -->
			<view class="tn-margin-top-sm">
				<tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
					<tn-tabs :list="fixedList" :current="currentSubTab" :isScroll="true" activeColor="#000" :bold="true"
						:fontSize="32" :badgeOffset="[20, 50]" @change="tabSubChange" backgroundColor="#FFFFFF99"
						:height="110"></tn-tabs>
				</tn-sticky>
			</view>


			<view class="" v-if="list[currentSubTab].length">
				<view class="" style="padding: 30rpx 20rpx;" >
					<tn-waterfall ref="waterfall" v-model="list[currentSubTab]" @finish="handleWaterFallFinish">
						<template v-slot:left="{ leftList }">
							<view v-for="(item, index) in leftList" :key="item.id" class="product__item"
								@click="tn('')">
								<view class="item__image">
									<tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage"
										:index="item.id" imgMode="widthFix"></tn-lazy-load>
								</view>
								<view class="item__data">
									<view class="item__title-container">
		
										<text class="item__title tn-color-cat">{{ item.title }}</text>
									</view>
									<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
										<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex"
											class="item__tag">{{ tagItem }}</view>
									</view>



								</view>
							</view>
						</template>
						<template v-slot:right="{ rightList }">
							<view v-for="(item, index) in rightList" :key="item.id" class="product__item"
								@click="tn('')">
								<view class="item__image">
									<tn-lazy-load :threshold="-450" height="100%" :image="item.mainImage"
										:index="item.id" imgMode="widthFix"></tn-lazy-load>
								</view>
								<view class="item__data">
									<view class="item__title-container">
										
										<text class="item__title tn-color-cat">{{ item.title }}</text>
									</view>
									<view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
										<view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex"
											class="item__tag">{{ tagItem }}</view>
									</view>



								</view>
							</view>
						</template>
					</tn-waterfall>
				</view>
				<tn-load-more :status="loadStatus"></tn-load-more>
			</view>
			
			<view v-else>
				<view class="" style="padding: 30rpx 20rpx;">
					<view class="tn-text-center" style="font-size: 200rpx;padding-top: 30rpx;">
					  <text class="tn-icon-wea-wind tn-color-gray--light"></text>
					</view>
					<view class="tn-color-gray--disabled tn-text-center tn-text-lg">内容被台风吹走了~</view>
				</view>
			</view>



			<view class='tn-tabbar-height'></view>

		</view>


		<!-- 活动 -->
		<view class="" v-if="current==1">
			<view class="tn-margin-bottom-lg" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
				<block v-for="(item, index) in reserve" :key="index">
					<view class="article-shadow tn-margin" @click="tn('')">
						<view class="tn-flex">
							<view class="image-pic tn-margin-sm"
								:style="'background-image:url(' + item.userAvatar + ')'">
								<view class="image-article">
								</view>
							</view>
							<view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
								<view class="tn-text-lg tn-text-bold clamp-text-1 tn-text-justify">
									{{ item.title }}
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-between tn-padding-top-xs"
									style="min-height: 105rpx;">
									<view class="justify-content-item tn-flex tn-flex-col-center">
										<tn-avatar-group :lists="item.viewUser.latestUserAvatar" size="sm">
										</tn-avatar-group>
									</view>
									<view class="justify-content-item tn-flex tn-flex-col-center">
										<text class="tn-color-gray">{{ item.viewUser.viewUserCount }} 人参与</text>
									</view>
								</view>
								<view class="tn-flex tn-flex-row-between tn-flex-col-between">
									<view v-for="(label_item,label_index) in item.label" :key="label_index"
										class="justify-content-item tn-tag-content__item tn-margin-right tn-text-sm tn-text-bold">
										<text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
									</view>
									<view
										class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
										style="padding-top: 5rpx;">
										<text class="tn-icon-eye tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-padding-right tn-text-df">{{ item.collectionCount }}</text>
										<text class="tn-icon-fire tn-padding-right-xs tn-text-lg"></text>
										<text class="tn-text-df">{{ item.likeCount }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			<view class='tn-tabbar-height'></view>
		</view>

		<!-- 压屏窗-->
		<tn-landscape :show="show2" @close="closeLandscape" closePosition="bottom" :closeSize="60">

			<!-- 方式9 start-->
			<view class="tn-flex" style="margin-bottom: 100rpx;padding-top: 46vh;">
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cat tn-color-white">
							<view class="tn-icon-camera-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发布图片</text>
						</view>
					</view>
				</view>
				<view class="tn-flex-1 tn-margin-sm tn-radius" @click="">
					<view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
						<view
							class="icon9__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-cat tn-color-white">
							<view class="tn-icon-flag-fill"></view>
						</view>
						<view class="tn-color-white tn-text-sm tn-text-center">
							<text class="tn-text-ellipsis">发起活动</text>
						</view>
					</view>
				</view>
			</view>


		</tn-landscape>

		<view class="edit tnxuanfu" @tap="showLandscape">
			<view class="bg0 pa">
				<view class="bg1">
					<image src="https://tnuiimage.tnkjapp.com/my/my6.png" class="button-shop shadow"></image>
				</view>
			</view>
			<view class="hx-box pa">
				<view class="pr">
					<view class="hx-k1 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k2 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k3 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k4 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k5 pa0">
						<view class="span"></view>
					</view>
					<view class="hx-k6 pa0">
						<view class="span"></view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
	export default {
		name: 'TCircle',
		mixins: [template_page_mixin],
		data() {
			return {
				currentSubTab: 0,
				loadStatus: 'loadmore',
				list: [],

				fixedList: [{
						name: '美景'
					},
					{
						name: '动物'
					},
					{
						name: '植物'
					},
				],
				data: [
					[{
						title: '花海',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/56709106-4190-48a8-83d3-4975dab9f82b.jpg',
						tags: ['信息星空', '风景'],
					},
					{
						title: '卷云',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/d8273fc5-5e74-436c-9bcd-4dc13fd7109a.jpg',
						tags: ['信息星空', '风景'],
					},
					{
						title: '昆仑堂',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/afc119aa-ed6e-4cf2-8776-2cfe06e1d743.jpg',
						tags: ['信息星空', '风景'],
					}],
					
					[{
						title: '不白猫',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/e37fad96-0a23-4de0-8041-3f5e101e8e8d.jpg',
						tags: ['信息星空', '动物', '猫'],
					},
					{
						title: '橘猫',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/356a62cd-bdfd-4d9e-95a5-a59b7381f484.jpg',
						tags: ['信息星空', '动物', '猫'],
					},
					{
						title: '金钱豹',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/975541d6-7ab2-4cc0-bd59-5287e79e0b25.jpg',
						tags: ['信息星空', '动物', '金钱豹'],
					}],
					[]
				],


				cardCur: 0,
				current: 0,
				scrollList: [{
						name: '图片流'
					},
					{
						name: '活动'
					}
				],
				
				// 内容默认隐藏显示的高度
				contentHideShowHeight: 0,
				reserve: [{
						userAvatar: 'https://tnuiimage.tnkjapp.com/simple/image5.jpg',
						userName: '图鸟北北',
						date: '2022年9月20日',
						color: 'red',
						label: ['新年祝福'],
						title: '2023年祝福接力',
						desc: '祝福接力活动：预约接龙的用户，将收到祝福通知',
						mainImage: 'https://tnuiimage.tnkjapp.com/simple/image0.jpg',
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 567
						},
						collectionCount: 543,
						commentCount: 543,
						likeCount: 206
					},
					{
						userAvatar: 'https://tnuiimage.tnkjapp.com/simple/image8.jpg',
						userName: '图鸟北北',
						date: '2022年9月20日',
						color: 'cyan',
						label: ['时光信件'],
						title: '寄给十年后自己',
						desc: '时光邮局：预约接龙的用户，十年后，将收到一份来着十年前发出的信件',
						mainImage: 'https://tnuiimage.tnkjapp.com/simple/image1.jpg',
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 987
						},
						collectionCount: 567,
						commentCount: 69,
						likeCount: 65
					},
					{
						userAvatar: 'https://tnuiimage.tnkjapp.com/simple/image4.jpg',
						userName: '图鸟北北',
						date: '2022年9月20日',
						color: 'blue',
						label: ['纪念日'],
						title: '常常忘记纪念日？',
						desc: '纪念日提醒：预约接龙的用户，微信上将收到纪念日提醒通知',
						mainImage: 'https://tnuiimage.tnkjapp.com/simple/image3.jpg',
						viewUser: {
							latestUserAvatar: [{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
								},
								{
									src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
								},
							],
							viewUserCount: 321
						},
						collectionCount: 654,
						commentCount: 232,
						likeCount: 543
					}
				],
				adList: [{
						image: 'https://tnuiimage.tnkjapp.com/simple/image1.jpg'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/simple/image9.jpg'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/simple/image3.jpg'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/simple/image8.jpg'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/simple/image0.jpg'
					}
				],
				adAutoplay: false,

				/* 压屏窗*/
				show2: false,
				maskCloseable: true,
			}
		},
		onLoad() {
			this.initContentData()
			this.contentHideShowHeight = uni.upx2px(56) * 3
		},
		created() {
			this.getRandomData()
		},
		onReady() {
			// this.$nextTick(() => {
			//   this.getContentRectInfo()
			// })
		},
		onShow() {
			this.adAutoplay = true
		},
		onHide() {
			this.adAutoplay = false
		},
		methods: {
			// tab选项卡切换
			tabChange(index) {
				this.current = index
			},
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 处理内容，给内容添加对应的标识信息
			initContentData() {
				this.content.forEach((item, index) => {
					// 是否需要隐藏内容
					item.hideContent = false
					// 显示所有内容
					item.showAllContent = false
					// 内容容器的实际高度
					item.contentContainerHeight = 0
					// 内容容器是否初始化完成
					item.contentContainerInit = false
					this.$set(this.content, index, item)
				})
			},
			// 获取内容容器的信息
			getContentRectInfo() {
				let contentRect = {}
				const query = uni.createSelectorQuery().in(this)
				// 筛选出存在内容的数据
				this.content.forEach((item, index) => {
					if (item?.content) {
						query.select(`#blogger__content--${index}`).boundingClientRect()
						contentRect[index] = item
					}
				})
				// 获取所有内容的宽高信息
				query.exec(res => {
					if (!res) {
						setTimeout(() => {
							this.getContentRectInfo()
						}, 10)
						return
					}
					// console.log(res);
					res.map((item) => {
						// console.log(item.height, this.contentHideShowHeight);
						// 获取对应的标号
						const id = item.id
						const idIndex = /blogger__content--(\d)/.exec(id)[1]
						let contentItem = this.content[idIndex]
						contentItem.hideContent = item.height > this.contentHideShowHeight
						contentItem.showAllContent = false
						contentItem.contentContainerHeight = item.height
						contentItem.contentContainerInit = true
						this.$set(this.content, idIndex, contentItem)

						// console.log(/blogger__content--(\d)/.exec(id)[1]);
					})
				})
			},
			// 切换内容的显示与隐藏
			switchContentShowStatus(index) {
				const contentItem = this.content[index]
				contentItem.showAllContent = !contentItem.showAllContent
				this.$set(this.content, index, contentItem)
			},

			// 弹出压屏窗
			showLandscape() {
				this.openLandscape()
			},
			// 打开压屏窗
			openLandscape() {
				// wx.vibrateLong();
				this.show2 = true
			},
			// 关闭压屏窗
			closeLandscape() {
				this.show2 = false
			},
			// tab选项卡切换
			tabSubChange(index) {
				this.currentSubTab = index
			},
			/* 瀑布流*/
			// 获取随机数据
			getRandomData() {
				
				this.loadStatus = 'loading'
				
				for (let j = 0; j < this.data.length; j++) {
					this.list.push([])
					if (this.data[j].length) {
						for (let i = 0; i < 10; i++) {
							let index = this.$t.number.randomInt(0, this.data[j].length - 1)
							let item = JSON.parse( JSON.stringify(this.data[j][index]) )
							item.id = this.$t.uuid()
							this.list[j].push(item)
						}
					}
					
				}
					
					

				
			},
			// 瀑布流加载完毕事件
			handleWaterFallFinish() {
				this.loadStatus = 'loadmore'
			},
			// 获取价格整数和小数部分
			getPrice(price) {
				const priceStr = String(price)
				if (priceStr.indexOf('.') !== -1) {
					return priceStr.split('.')
				} else {
					return [priceStr, '00']
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.circle {
		max-height: 100vh;
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 5rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			margin-left: 30rpx;
			flex-basis: 5%;
		}

		&__search {
			flex-basis: 60%;
			width: 100%;
			height: 100%;

			&__box {
				width: 100%;
				height: 70%;
				padding: 10rpx 0;
				margin: 0 30rpx;
				border-radius: 60rpx 60rpx 0 60rpx;
				font-size: 24rpx;
			}

			&__icon {
				padding-right: 10rpx;
				margin-left: 20rpx;
				font-size: 30rpx;
			}

			&__text {
				color: #AAAAAA;
			}
		}
	}

	.logo-image {
		width: 60rpx;
		height: 60rpx;
		position: relative;
		margin-top: -15rpx;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 50%;
	}

	/* 自定义导航栏内容 end */
	/* 博主头像 start*/
	.image-circle {
		// padding: 95rpx;
		width: 190rpx;
		height: 190rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		border: 1rpx solid #F8F7F8;
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.tn-color-cat {
		color: #1D2541;
	}

	.tn-bg-cat {
		background-color: #1D2541;
	}

	/* 文章内容 start*/
	.blogger {
		&__item {
			padding: 30rpx;
		}

		&__author {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__desc {
			line-height: 30rpx;

			&__label {

				color: #1D2541;
				background-color: #F3F2F7;
				border-radius: 10rpx;
				font-size: 22rpx;

				padding: 5rpx 15rpx;
				margin: 5rpx 18rpx 0 0;

				&--prefix {
					font-size: 24rpx;
					color: #1D2541;
					padding-right: 10rpx;
				}
			}

			&__content {
				line-height: 50rpx;
			}
		}

		&__content {
			margin-top: 18rpx;
			padding-right: 18rpx;

			&__data {
				line-height: 46rpx;
				text-align: justify;
				overflow: hidden;
				transition: all 0.25s ease-in-out;

			}

			&__status {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #82B2FF;
			}
		}

		&__main-image {
			border: 1rpx solid #F8F7F8;
			border-radius: 16rpx;

			&--1 {
				max-width: 80%;
				max-height: 300rpx;
			}

			&--2 {
				max-width: 260rpx;
				max-height: 260rpx;
			}

			&--3 {
				height: 212rpx;
				width: 100%;
			}
		}

		&__count-icon {
			font-size: 40rpx;
			padding-right: 5rpx;
		}

		&__ad {
			width: 100%;
			height: 500rpx;
			transform: translate3d(0px, 0px, 0px) !important;

			::v-deep .uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			.uni-swiper-slide-frame {
				transform: translate3d(0px, 0px, 0px) !important;
			}

			&__item {
				position: absolute;
				width: 100%;
				height: 100%;
				transform-origin: left center;
				transform: translate3d(100%, 0px, 0px) scale(1) !important;
				transition: transform 0.25s ease-in-out;
				z-index: 1;

				&--0 {
					transform: translate3d(0%, 0px, 0px) scale(1) !important;
					z-index: 4;
				}

				&--1 {
					transform: translate3d(13%, 0px, 0px) scale(0.9) !important;
					z-index: 3;
				}

				&--2 {
					transform: translate3d(26%, 0px, 0px) scale(0.8) !important;
					z-index: 2;
				}
			}

			&__content {
				border-radius: 40rpx;
				width: 640rpx;
				height: 500rpx;
				overflow: hidden;
			}

			&__image {
				width: 100%;
				height: 100%;
			}
		}
	}

	/* 文章内容 end*/

	/* 间隔线 start*/
	.tn-strip-bottom {
		width: 100%;
		border-bottom: 20rpx solid rgba(241, 241, 241, 0.8);
	}

	/* 间隔线 end*/
	
	/* 热门图片 start*/
	.image-tuniao1{
	  padding: 164rpx 0rpx;
	  font-size: 40rpx;
	  font-weight: 300;
	  position: relative;
	}
	.image-tuniao2{
	  padding: 75rpx 0rpx;
	  font-size: 40rpx;
	  font-weight: 300;
	  position: relative;
	}
	.image-tuniao3{
	  padding: 90rpx 0rpx;
	  font-size: 40rpx;
	  font-weight: 300;
	  position: relative;
	}
	.image-pic{
	  border: 1rpx solid #F8F7F8;
	  background-size: cover;
	  background-repeat:no-repeat;
	  // background-attachment:fixed;
	  background-position:top;
	  border-radius: 10rpx;
	}

	/* 广告内容 start */
	.ad-image {
		width: 80rpx;
		height: 80rpx;
		position: relative;
	}

	.ad-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 20%;
	}

	/* 自定义导航栏内容 end */


	/* 全屏轮播  start*/
	.card-swiper {
		height: 100vh !important;
	}

	.card-swiper swiper-item {
		width: 750rpx !important;
		left: 0rpx;
		box-sizing: border-box;
		overflow: initial;
	}

	.card-swiper swiper-item .swiper-item {
		width: 100%;
		display: block;
		height: 100vh;
		border-radius: 0rpx;
		transform: scale(1);
		transition: all 0.2s ease-in 0s;
		overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.card-swiper swiper-item .swiper-item-png {
		margin-top: -50vh;
		width: 100%;
		display: block;
		border-radius: 0rpx;
		transform: translate(1040rpx, 20rpx) scale(0.5, 0.5);
		transition: all 0.6s ease 0s;
		// overflow: hidden;
	}

	.card-swiper swiper-item.cur .swiper-item-png {
		margin-top: -100vh;
		width: 900rpx;
		transform: translate(-80rpx, 0rpx) scale(1, 1);
		transition: all 0.6s ease 0s;
	}

	.image-banner {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-banner image {
		width: 100%;
	}

	/* 轮播指示点 start*/
	.indication {
		z-index: 9999;
		width: 100%;
		height: 36rpx;
		position: fixed;
		// display:flex;
		display: block;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.spot {
		background-color: #000;
		opacity: 0.3;
		width: 10rpx;
		height: 10rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 !important;
		left: 95vw;
		top: -60vh;
		position: relative;
	}

	.spot.active {
		opacity: 0.6;
		height: 30rpx;
		background-color: #000;
	}

	/* 资讯主图 start*/
	.image-article {
		border-radius: 8rpx;
		border: 1rpx solid #F8F7F8;
		width: 200rpx;
		height: 200rpx;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}

	.article-shadow {
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
	}

	/* 文字截取*/
	.clamp-text-1 {
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.clamp-text-2 {
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	/* 标签内容 start*/
	.tn-tag-content {
		&__item {
			display: inline-block;
			line-height: 35rpx;
			color: #1D2541;
			background-color: #F3F2F7;
			border-radius: 10rpx;
			font-size: 22rpx;
			padding: 5rpx 15rpx;

			&--prefix {
				padding-right: 10rpx;
			}
		}
	}


	/* 图标容器9 start */
	.icon9 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 110rpx;
				height: 110rpx;
				font-size: 65rpx;
				border-radius: 50%;
				margin: 20rpx 40rpx;
				position: relative;
				z-index: 1;

				&::after {
					content: " ";
					position: absolute;
					z-index: -1;
					width: 100%;
					height: 100%;
					left: 0;
					bottom: 0;
					border-radius: inherit;
					opacity: 1;
					transform: scale(1, 1);
					background-size: 100% 100%;
					background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
				}
			}
		}
	}


	/* 悬浮 */
	.tnxuanfu {
		animation: suspension 3s ease-in-out infinite;
	}

	@keyframes suspension {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-0.8rem);
		}
	}

	/* 悬浮按钮 */
	.button-shop {
		width: 90rpx;
		height: 90rpx;
		display: flex;
		flex-direction: row;
		position: fixed;
		/* bottom:200rpx;
      right: 20rpx; */
		left: 5rpx;
		top: 5rpx;
		z-index: 1001;
		border-radius: 100px;
		opacity: 0.9;
	}


	/* 按钮 */
	.edit {
		bottom: 300rpx;
		right: 75rpx;
		position: fixed;
		z-index: 9999;
	}


	.pa,
	.pa0 {
		position: absolute
	}

	.pa0 {
		left: 0;
		top: 0
	}


	.bg0 {
		width: 100rpx;
		height: 100rpx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.bg1 {
		width: 100%;
		height: 100%;
	}




	.hx-box {
		top: 50%;
		left: 50%;
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
	}

	.hx-box .pr {
		width: 100rpx;
		height: 100rpx;
		transform-style: preserve-3d;
		animation: hxz 20s linear infinite;
	}

	@keyframes hxz {
		0% {
			transform: rotateX(0deg);
		}

		100% {
			transform: rotateX(-360deg);
		}
	}



	.hx-box .pr .pa0 {
		width: 100rpx;
		height: 100rpx;
		/* border: 4px solid #5ec0ff; */
		border-radius: 1000px;
	}

	.hx-box .pr .pa0 .span {
		display: block;
		width: 100%;
		height: 100%;
		background: url(https://tnuiimage.tnkjapp.com/cool_bg_image/arc4.png) no-repeat center center;
		background-size: 100% 100%;
		animation: hx 4s linear infinite;
	}

	@keyframes hx {
		to {
			transform: rotate(360deg);
		}
	}

	.hx-k1 {
		transform: rotateX(-60deg) rotateZ(-60deg)
	}

	.hx-k2 {
		transform: rotateX(-30deg) rotateZ(-30deg)
	}

	.hx-k3 {
		transform: rotateX(0deg) rotateZ(0deg)
	}

	.hx-k4 {
		transform: rotateX(30deg) rotateZ(30deg)
	}

	.hx-k5 {
		transform: rotateX(60deg) rotateZ(60deg)
	}

	.hx-k6 {
		transform: rotateX(90deg) rotateZ(90deg)
	}

	/* 用户头像 start */
	.logo-image {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.logo-pic {
		background-size: cover;
		background-repeat: no-repeat;
		width: 40rpx;
		height: 40rpx;
		// background-attachment:fixed;
		background-position: top;
		border: 1rpx solid rgba(255, 255, 255, 0.05);
		// box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		overflow: hidden;
		// background-color: #FFFFFF;
	}

	/* 瀑布流*/
	.product__item {
		background-color: #FFFFFF;
		overflow: hidden;
		margin: 0 10rpx;
		margin-bottom: 40rpx;
		// box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

		.item {

			/* 图片 start */
			&__image {
				width: 100%;
				height: auto;
				background-color: #FFFFFF;
				border: 1rpx solid #F8F7F8;
				border-radius: 10rpx;
				overflow: hidden;
			}

			/* 图片 end */

			/* 内容 start */
			&__data {
				padding: 14rpx 0rpx;
			}

			/* 标题 start */
			&__title-container {
				text-align: justify;
				line-height: 38rpx;
				vertical-align: middle;
			}

			&__store-type {
				height: 28rpx;
				font-size: 20rpx;
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 4rpx;
				border-radius: 6rpx;
				white-space: nowrap;
				text-align: center;
				top: -2rpx;
				margin-right: 6rpx;
			}

			&__title {
				font-size: 30rpx;
			}

			/* 标题 end */

			/* 标签 start */
			&__tags-container {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: flex-start;
			}

			&__tag {
				margin: 10rpx;
				color: #7C8191;
				background-color: #F3F2F7;
				padding: 4rpx 14rpx 6rpx;
				border-radius: 10rpx;
				font-size: 20rpx;

				&:first-child {
					margin-left: 0rpx !important;
				}
			}

			/* 标签 end */

			/* 价格 start */
			&__price-container {
				font-size: 24rpx;
				color: #E83A30;
				font-weight: bold;
			}

			&__price {
				&--unit {}

				&--integer {
					font-size: 38rpx;
				}

				&--decimal {}
			}

			/* 价格 end */
			/* 内容 end */
		}
	}

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 120rpx;
		height: calc(140rpx + env(safe-area-inset-bottom) / 2);
		height: calc(140rpx + constant(safe-area-inset-bottom));
	}
</style>
