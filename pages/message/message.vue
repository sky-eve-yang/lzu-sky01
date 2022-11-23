<template>
	<view>
		<tui-navigation-bar splitLine :scrollTop="scrollTop"
			title="校友" backgroundColor="#fff" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">

			</view>
		</tui-navigation-bar>
		<view class="page-title justify-content-item tn-margin tn-text-bold tn-text-xxl">
			校友
		</view>
		
		<view class="tn-margin-top-sm" @click="tn('')">
			<view class="tn-flex tn-flex-row-between tn-round tn-padding-xs tn-margin"
				style="border: 1rpx solid #D6D1F0;background: linear-gradient(-160deg, #F1F7FF, #DEE6FF, #F3F8FF, #D0DBFF);">
				<view class="justify-content-item tn-text-center tn-flex" style="padding: 25rpx 30rpx">
					<tn-avatar-group :lists="latestUserAvatar" size="sm"></tn-avatar-group>
					<text class="tn-padding-xs">1629 人</text>
				</view>
				<view class="justify-content-item tn-text-right tn-padding-top-sm">
					<view class="tn-text-bold">
						校友入驻
					</view>
					<view class="tn-text-xs tn-color-gray--dark tn-padding-top-xs">
						入驻校友圈，交流学习进步
					</view>
				</view>
				<view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
					<text class="tn-icon-right tn-color-gray--dark"></text>
				</view>
			</view>
		</view>

		<!-- 图文 -->
		<view class="tn-flex tn-flex-direction-column">

			<block v-for="(item,index) in content" :key="index">
				<view class="tn-blogger-content__wrap">
					<view class="" @click="previewImage(item.mainImage, item.link)">
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
    name: 'Message',
		data() {
			return {
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
				top: '100',
					opacity: 1,
					scrollTop: 0,
					content: [
						{
						  date: '2021年12月20日',
						  label: ['兰州大学','公众号', '校友'],
						  desc: '杜亚平校友',
						  link: 'https://mp.weixin.qq.com/s/AA_GaA_cT70oERRk3O_I9Q',
						  mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/df9972fd-296b-487d-9b60-2f4ba7399962.jpg',
						  collectionCount: 236,
						  likeCount: 168
						},
					  {
						date: '2021年12月20日',
						label: ['兰州大学','公众号', '校友'],
						desc: '陈炜校友',
						link: 'https://mp.weixin.qq.com/s/1kjU9NWNsBmRzFqi11PtpA',
						mainImage: 'https://mp-cbb8aa6f-11aa-426c-b3e6-3c394a4471ff.cdn.bspapp.com/cloudstorage/b26769d2-23e2-4514-951c-585c329747af.jpg',
						collectionCount: 236,
						likeCount: 168
					  },
					  {
						date: '2021年12月20日',
						label: ['兰州大学', '公众号', '校友'],
						desc: "何力校友",
						link: 'https://mp.weixin.qq.com/s/rRYAE_LBOvkM8E4Gj8mBuw',
						mainImage: 'https://sky01-1307577475.cos.ap-nanjing.myqcloud.com/sky01-lzu-imgs/%E5%9B%BE3-%E5%85%AC%E4%BC%97%E5%8F%B7-%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6-2020-6-18.jpg',
						collectionCount: 265,
						likeCount: 62
					  },
					]
				};
		},
		onLoad() {

		},
		methods: {
		  // 跳转
		  tn(e) {
			uni.navigateTo({
			  url: e,
			});
		  },
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
		  	previewImage(url, link) {
		  		let urls = []
		  		urls.push(url)
		  		let that = this
		  		uni.previewImage({
		  			urls: urls,
		  			longPressActions: {
		  				itemList: ['发送给朋友', '保存图片', '收藏', '复制原文链接'],
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
								case 4:
									uni.setClipboardData({
										data: link,
										success() {
											uni.showToast({
												title: '复制成功, 可粘贴至浏览器查看原文',
												icon: 'success'
											})
										},
										fail() {
											uni.showToast({
												title: '复制失败',
												icon:'error'
											})
										}
										
									})
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
	.message{
	  max-height: 100vh;
	}
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      flex-basis: 5%;
      width: 100rpx;
      position: absolute;
    }
  }
  /* 自定义导航栏内容 end */
  
  /* 底部安全边距 start*/
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
    height: calc(140rpx + constant(safe-area-inset-bottom));
  }
  
  .tn-message-fixed{
    position: fixed;
    background-color: rgba(255,255,255,1);
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    top: 0;
    width: 100%;
    transition: all 0.25s ease-out;
    z-index: 100;
  }
  
  
  
  /* 图标容器1 start */
  .icon1 {
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
        width: 90rpx;
        height: 90rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
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
  
  .tn-color-cat{
    color: #1D2541;
  }
  
  /* 页面阴影 start*/
  .tn-cat-shadow {
    border-radius: 15rpx;
    box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  
  /* 标签*/
  .tag{
    margin: 10rpx 0 10rpx 10rpx;
    color: #7C8191;
    background-color: #F3F2F7;
    padding: 4rpx 14rpx 6rpx;
    border-radius: 10rpx;
    font-size: 20rpx;
  }
  
  /* 图标容器15 start */
  .icon15 {
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
        width: 105rpx;
        height: 105rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
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
  
            
        }
      }
    }
  }
  
  /* 用户头像 start */
  .logo-image {
    width: 100rpx;
    height: 100rpx;
    position: relative;
  }
  
  .logo-pic {
    background-size: cover;
    background-repeat: no-repeat;
    // background-attachment:fixed;
    background-position: top;
    border: 1rpx solid rgba(255,255,255,0.05);
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
    // background-color: #FFFFFF;
  }
  
</style>
