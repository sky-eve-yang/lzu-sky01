<template>
	<view>
		<tui-navigation-bar splitLine :scrollTop="scrollTop"
			title="心理咨询" backgroundColor="#fff" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">

			</view>
		</tui-navigation-bar>
		<view class="page-title justify-content-item tn-margin tn-text-bold tn-text-xxl">
			心理咨询
		</view>

		<!-- 图文 -->
		<view class="tn-flex tn-flex-direction-column">

			<block v-for="(item,index) in content" :key="index">
				<view class="tn-blogger-content__wrap">
					<view class="" @click="previewImage(item.mainImage)">
						<image
							class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom-xs"
							:src="item.mainImage" mode="aspectFill"></image>
					</view>
					<view class="tn-blogger-content__label tn-text-justify">
						<text
							class="tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-color-cat">{{ item.desc }}</text>
					</view>

					<view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top-xs">
						<view class="justify-content-item tn-flex tn-flex-col-center">
							<view style="margin-right: 10rpx;margin-left: 0rpx;">
								<view class="tn-color-gray">
									<text class="tn-blogger-content__count-icon tn-icon-flower"></text>
									<text class="tn-padding-right">{{ item.collectionCount }}</text>
									<text class="tn-blogger-content__count-icon tn-icon-message"></text>
									<text class="tn-padding-right">{{ item.commentCount }}</text>
									<text class="tn-blogger-content__count-icon tn-icon-like"></text>
									<text class="">{{ item.likeCount }}</text>
								</view>
							</view>
						</view>
						<view class="justify-content-item tn-text-center">
							<view v-for="(label_item,label_index) in item.label" :key="label_index"
								class="tn-blogger-content__label__item tn-float-left">
								<text class="tn-blogger-content__label__item--prefix tn-icon-topics-fill"></text>
								{{ label_item }}
							</view>
						</view>
					</view>
				</view>

			</block>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top: '100',
				opacity: 1,
				scrollTop: 0,
				content: [
					{
					  date: '2021年12月20日',
					  label: ['兰州大学学工网','心理咨询'],
					  desc: '心理咨询联系方式',
					  mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/fd9c15be-a08d-4796-9839-5c6e2d7c5709.png',
					  collectionCount: 236,
					  likeCount: 168
					},
				  {
					date: '2021年12月20日',
					label: ['数学与统计学院','心理咨询'],
					desc: '防疫中的心理干预与自我调适',
					mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/527729b2-96f4-4cfc-a03e-eccadbce98e9.jpg',
					collectionCount: 236,
					likeCount: 168
				  },
				  {
					date: '2021年12月20日',
					label: ['兰州大学', '心理咨询'],
					desc: "把疫情当作人生中的“春化阶段”",
					mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/78b065ce-b3d8-4771-a95c-ba745367974c.png',
					collectionCount: 265,
					likeCount: 62
				  }
				]
			};
		},
		methods: {
			saveImage(urls, index) {
				console.log(urls);
				console.log(index);
				console.log(urls[index]);
				uni.saveImageToPhotosAlbum({
					filePath: urls[index],
					success: function () {
						uni.showToast({
							title: '保存成功',
							icon: 'success'
						})
						console.log(1);
					},fail(res) {
						console.log(res);
						uni.showToast({
							title: '保存失败',
							icon: 'error'
						})
						console.log(2);
					}
				});
			},
			wait2Product() {
				uni.showToast({
					title: '功能开发中，敬请期待',
					icon: 'none'
				})
			},
			previewImage(url) {
				let urls = []
				urls.push(url)
				let that = this
				uni.previewImage({
					urls: urls,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							let order = data.tapIndex + 1
							switch (order) {
								case 1: 
									that.wait2Product()
									break;
								case 2:
									let index = data.index
									uni.saveImageToPhotosAlbum({
										filePath: urls[data.index],
										success: function () {
											uni.showToast({
												title: '保存成功',
												icon: 'success'
											})
											console.log(1);
										},
										fail(res) {
											console.log(res);
											uni.showToast({
												title: '保存失败',
												icon: 'error'
											})
											console.log(2);
										}
									});
									break;
								case 3:
									that.wait2Product()
									break;
									
							}
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.image-tuniao1 {
		padding: 164rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao2 {
		padding: 75rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-tuniao3 {
		padding: 90rpx 0rpx;
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

	/* 文章内容 start*/
	.tn-blogger-content {
		&__wrap {
			margin: 30rpx;
		}

		&__info {
			&__btn {
				margin-right: -12rpx;
				opacity: 0.5;
			}
		}

		&__label {
			&__item {
				color: #1D2541;
				background-color: #F3F2F7;
				border-radius: 10rpx;
				font-size: 22rpx;

				padding: 5rpx 15rpx;
				margin: 5rpx 0 0 18rpx;

				&--prefix {
					font-size: 24rpx;
					color: #1D2541;
					padding-right: 10rpx;
				}
			}

			&__desc {
				line-height: 55rpx;
			}
		}

		&__main-image {
			border: 1rpx solid #F8F7F8;
			border-radius: 16rpx;

			&--1 {
				max-width: 690rpx;
				min-width: 690rpx;
				max-height: 400rpx;
				min-height: 400rpx;
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
	}

	.image-wallpaper {
		padding: 160rpx 0rpx;
		font-size: 40rpx;
		font-weight: 300;
		position: relative;
	}

	.image-pic {
		background-size: cover;
		background-repeat: no-repeat;
		// background-attachment:fixed;
		background-position: top;
		border-radius: 10rpx;
	}
</style>
