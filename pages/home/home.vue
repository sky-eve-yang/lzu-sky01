<template>
  <view class="index tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    
    <!-- 1 顶部文字 -->
    <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-top" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="justify-content-item tn-margin-left" @click="tn('')">
        <view class="tn-text-bold tn-text-lg tn-padding-bottom-xs">
          资讯兰大
        </view>
        <view class="tn-text-xs tn-color-cat" style="opacity: 0.5;">
          “同学情，师生情，学校情”
        </view>
      </view>
      <view class="justify-content-item tn-color-cat tn-text-right">
        <tn-button backgroundColor="#F1C68E00" fontColor="#838383" padding="10rpx 0" width="110rpx" shadow open-type="share">
          <text class="tn-icon-wechat-fill tn-text-xl"></text>
        </tn-button>
      </view>
    </view>
    
	<!-- 2 轮播图 -->
    <swiper class="card-swiper" @click="tn('')" :circular="true"
      :autoplay="true" duration="500" interval="8000" @change="cardSwiper"> 
      <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
        <!-- <view class="swiper-item image-banner">
          <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
        </view> -->
        <view class="swiper-item image-banner" :style="'background-image:url('+ item.url + ');background-size: cover;border-radius: 15rpx;'">
        </view>
        <view class="swiper-item-text">
          <view class="tn-text-bold tn-color-white" style="font-size: 50rpx;">{{item.title}}</view>
          <view class="tn-color-white tn-padding-top" style="font-size: 30rpx;">{{item.name}}</view>
          <view class="tn-text-sm tn-text-bold tn-color-white tn-padding-top-sm tn-padding-bottom-sm">{{item.text}}</view>
        </view>
      </swiper-item>
    </swiper>
    <view class="indication">
        <block v-for="(item,index) in swiperList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view>
    
    
    <!-- 3 多模块 -->
    <view v-if="isAndroid" class="tn-flex tn-padding-xs">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/pages/home/news/news')">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purplered--light tn-color-purplered">
            <view class="tn-icon-fire-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">教授开放日</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/pages/home/psyc-counsel/psyc-counsel')">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-indigo--light tn-color-indigo">
            <view class="tn-icon-flower-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">心理咨询</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/pages/home/things-help/things-help')">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-purple--light tn-color-purple">
            <view class="tn-icon-identity-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">实事记</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius" @click="tn('/pages/home/school-things/school-things')">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-main-gradient-orange--light tn-color-orange">
            <view class="tn-icon-star-fill tn-three"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">校事记</text>
          </view>
        </view>
      </view>
    </view>
    
    
    <!-- 4 信息展示 -->
    <view class="tn-padding-bottom-lg">
      <view class="tn-flex tn-flex-row-between" @click="tn('')">
        <view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
          精选动态
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
      
      
      <view class="tn-flex tn-flex-row-between tn-margin-top" @click="tn('')">
        <view class="justify-content-item tn-margin tn-text-bold tn-text-xxl">
          商圈活动
        </view>
        <view class="justify-content-item tn-margin tn-text-lg tn-color-cat">
          <text class="tn-padding-xs">全部</text>
          <text class="tn-icon-topics"></text>
        </view>
      </view>
      
      <!-- 图文 -->
      <view class="tn-flex tn-flex-direction-column">
        
        <block v-for="(item,index) in content" :key="index">
          <view class="tn-blogger-content__wrap" @click="tn('')">
            <view class="">
              <image 
                class="tn-blogger-content__main-image tn-blogger-content__main-image--1 tn-margin-bottom-xs"
                :src="item.mainImage"
                mode="aspectFill"
              ></image>
            </view>
            <view class="tn-blogger-content__label tn-text-justify">
              <text class="tn-blogger-content__label__desc tn-text-lg tn-text-bold tn-color-cat">{{ item.desc }}</text>  
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
                <view v-for="(label_item,label_index) in item.label" :key="label_index" class="tn-blogger-content__label__item tn-float-left">
                  <text class="tn-blogger-content__label__item--prefix tn-icon-topics-fill"></text> {{ label_item }}
                </view>
              </view>
            </view>
          </view>
          
        </block>
      </view>
      
    </view>

    <view class='tn-tabbar-height'></view>
    
  </view>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return {
        cardCur: 0,
        isAndroid: true,
        swiperList: [{
          id: 0,
          type: 'image',
          title: '同学情',
          name: '更多彩蛋等你探索',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner2.jpg',
        }, {
          id: 1,
          type: 'image',
          title: '兰大情',
          name: '作者微信 tnkewo',
          url: 'https://tnuiimage.tnkjapp.com/simple/image3.jpg',
        }, {
          id: 2,
          type: 'image',
          title: '师生情',
          name: '总有你想不到的创意',
          url: 'https://tnuiimage.tnkjapp.com/simple/image2.jpg',
        }, {
          id: 3,
          type: 'image',
          title: '数媒比赛',
          name: '更多彩蛋等你探索',
          url: 'https://tnuiimage.tnkjapp.com/simple/banner0.jpg',
        }],
        content: [
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '免费开源可商用组件',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image4.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 236,
            commentCount: 102,
            likeCount: 168
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '2023年祝福接力',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image0.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '寄给十年后的自己',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image1.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '我们结婚了',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image2.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '免费开源可商用组件',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/banner0.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '我们都是好孩子',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/banner2.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '免费开源可商用组件',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/banner1.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          },
          {
            userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
            userName: '可我会像',
            date: '2021年12月20日',
            label: ['开源','创意'],
            desc: '免费开源可商用组件',
            mainImage: 'https://tnuiimage.tnkjapp.com/simple/image6.jpg',
            viewUser: {
              latestUserAvatar: [
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'},
                {src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'},
              ],
              viewUserCount: 129
            },
            collectionCount: 265,
            commentCount: 22,
            likeCount: 62
          }
        ]
      }
    },
    created() {
      const systemInfo = uni.getSystemInfoSync()
      if (systemInfo.system.toLocaleLowerCase().includes('ios')) {
        this.isAndroid = false
      } else {
        this.isAndroid = true
      }
    },
    methods: {
      // cardSwiper
      cardSwiper(e) {
        this.cardCur = e.detail.current
      },

      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
    }
  }
</script>

<style lang="scss" scoped>
  .index{
    max-height: 100vh;
  }
  /* 底部安全边距 start*/
  .tn-tabbar-height {
  	min-height: 120rpx;
  	height: calc(140rpx + env(safe-area-inset-bottom) / 2);
    height: calc(140rpx + constant(safe-area-inset-bottom));
  }

  /* 轮播视觉差 start */
  .card-swiper {
    height: 330rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    padding: 40rpx 30rpx 30rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    border-radius: 15rpx;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    // overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    margin-top: -160rpx;
    text-align: center;
    width: 100%;
    display: block;
    height: 50%;
    border-radius: 10rpx;
    transform: translate(100rpx, -60rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    margin-top: -220rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
  }
  
  .image-banner{
    border: 1rpx solid #F8F7F8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  /* 轮播指示点 start*/
  .indication{
    z-index: 9999;
    width: 100%;
    height: 36rpx;
    position: absolute;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  
  .spot{
    background-color: #FFFFFF;
    opacity: 0.6;
    width: 10rpx;
    height: 10rpx;
    border-radius: 20rpx;
    top: -70rpx;
    margin: 0 8rpx !important;
    position: relative;
  }
  
  .spot.active{
    opacity: 1;
    width: 30rpx;
    background-color: #FFFFFF;
  }
  

  
 /* 图标容器12 start */
 .tn-three{
     position: absolute;
     top: 50%;
     right: 50%;
     bottom: 50%;
     left: 50%;
     transform: translate(-38rpx, -20rpx) rotateX(20deg) rotateY(10deg) rotateZ(-20deg);
     text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
 }
 .icon12 {
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
       width: 100rpx;
       height: 100rpx;
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
         background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg6.png);
 
           
       }
     }
   }
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
        // color: #AAAAAA;
      }
    }
  }
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
    border: 1rpx solid #F8F7F8;
    border-radius: 50%;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  

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
  
  .image-wallpaper{
    padding: 160rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 10rpx;
  }
  /* 文章内容 end*/
  
</style>