<template>
	<view>
		<tui-navigation-bar splitLine :scrollTop="scrollTop" title="学生学院学校事记" backgroundColor="#fff" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">

			</view>
		</tui-navigation-bar>
		<view class="page-title justify-content-item tn-margin tn-text-bold tn-text-xxl">
			学生学院学校事记
		</view>
		<view class="tn-margin-top-sm">
		  <tn-sticky :offsetTop="0" :customNavHeight="vuex_custom_bar_height">
		    <tn-tabs :list="tabs" :current="currentTab" :isScroll="true" activeColor="#5aa4ae" :bold="true" :fontSize="32" :badgeOffset="[20, 50]" @change="tabChange" backgroundColor="#FFFFFF99" :height="110"></tn-tabs>
		  </tn-sticky>
		</view>
		
		<!-- 图文 -->
		<view class="tn-flex tn-flex-direction-column">

			<block v-for="(item,index) in content[currentTab]" :key="index">
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
				tabs: [{
					name: "奖励奖项"
				}, {
					name: "暖心新闻"
				}, {
					name: "校友捐款"
				}, {
					name: "学校排名",
				}],
				currentTab: 0,
				content: [
					[{
							date: '2021年12月20日',
							label: ['兰州大学', '奖励奖项'],
							desc: '第十七届中国青年科技奖',
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/d5590d60-5561-4d44-9cd9-7b21f52153da.png',
							collectionCount: 236,
							likeCount: 168
						},
						{
							date: '2021年12月20日',
							label: ['文学院', '奖励奖项'],
							desc: "2022年汉教英雄会（西北片区）国际中文教学技能交流活动",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/5d9ae20d-7e9e-42c9-936e-16dac5a0fc20.png',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['青春兰大', '奖励奖项'],
							desc: "第六届中国青年志愿服务项目大赛",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/40a28a9d-dbce-4b42-bf59-88d8ec1e12f5.png',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['萃英学院', '奖励奖项'],
							desc: "第八届中国国际“互联网+”大学生创新创业大赛",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/a5677292-054a-4c66-ae77-8497ce03025c.png',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['兰州大学', '奖励奖项'],
							desc: "2022 iGEM",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/9d6a3699-bdc2-40fb-b8c0-d51c8a872c4b.jpg',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['兰州大学', '奖励奖项'],
							desc: "兰州大学首颗极大规模全异步电路芯片流片成功",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/471f7250-b44d-41da-a137-448aecc7e66a.jpg',
							collectionCount: 265,
							likeCount: 62
						}
					],
					[{
							date: '2021年12月20日',
							label: ['兰小e', '毕业'],
							desc: '一日在兰大，终身兰大人',
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/3ab7adaf-f268-4768-98ee-705e36fcb03b.jpg',
							collectionCount: 236,
							likeCount: 168
						},
						{
							date: '2021年12月20日',
							label: ['萃英在线', '毕业'],
							desc: "高举的院旗飘扬",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/8dda0494-5705-49f1-921f-acb691546988.jpg',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['萃英在线', '军训'],
							desc: "休息期间的同学情",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/6c79751a-f7ef-4611-85ab-e701f670d8d7.jpg',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['信息星空', '寝室视察'],
							desc: "走访学生宿舍，与同学们进行了亲切交谈",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/70a1b603-07ad-4299-a5df-8d01e5df1911.png',
							collectionCount: 265,
							likeCount: 62
						},
						{
							date: '2021年12月20日',
							label: ['萃英在线', '迎新'],
							desc: "严校长给学生上开学第一课",
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/211e4c2c-bb52-4e31-aa45-5f8ab8cb8ab4.png',
							collectionCount: 265,
							likeCount: 62
						},
						
					],
					[{
							date: '2021年12月20日',
							label: ['兰小e', '校友捐款'],
							desc: '校庆献礼，兰州大学单日接受捐赠110万元',
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/160edade-540c-4bec-a1da-a9f83b563dc0.jpg',
							collectionCount: 236,
							likeCount: 168
						},
						
					],
					[{
							date: '2021年12月20日',
							label: ['兰小e', '公众号'],
							desc: '中国大学理科实力评级，兰州大学位居第13名',
							mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/05d93a71-c14c-4495-8d20-a74f3175fe1e.png',
							collectionCount: 236,
							likeCount: 168
						}
						
					]
				]
			};
		},
		methods: {
			tabChange(index) {
			  this.currentTab = index
			},
			saveImage(urls, index) {
				console.log(urls);
				console.log(index);
				console.log(urls[index]);
				uni.saveImageToPhotosAlbum({
					filePath: urls[index],
					success: function() {
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
										success: function() {
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
