<template>
  <view class="start-index">
    <view v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <Home ref="home"></Home>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <t-circle ref="circle"></t-circle>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <Discovery ref="discovery"></Discovery>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <Message ref="message"></Message>
      </scroll-view>
    </view>
    <view v-if="tabberPageLoadFlag[4]" :style="{display: currentIndex === 4 ? '' : 'none'}">
      <scroll-view class="custom-tabbar-page" scroll-y enable-back-to-top @scrolltolower="tabbarPageScrollLower">
        <Mine ref="mine"></Mine>
      </scroll-view>
    </view>
    
    <tn-tabbar
      v-model="currentIndex"
      :list="tabbarList"
      activeColor="#838383"
      inactiveColor="#AAAAAA"
      activeIconColor="#3668FC"
      :animation="true"
      :safeAreaInsetBottom="true"
      @change="switchTabbar"
    ></tn-tabbar>
  </view>
</template>

<script>
  import Home from './home/home.vue'
  import TCircle from './circle/circle.vue'
  import Discovery from './discovery/discovery.vue'
  import Message from './message/message.vue'
  import Mine from './mine/mine.vue'
  
  export default {
    components: {
      Home,
      TCircle,
      Discovery,
      Message,
      Mine
    },
    data() {
      return {
        // ??????tabbar????????????
        tabbarList: [
          {
            title: '??????',
            activeIcon: 'message-fill',
            inactiveIcon: 'message'
          },
          {
            title: '?????????',
            activeIcon: 'camera-fill',
            inactiveIcon: 'camera'
          },
          {
            title: '??????',
            activeIcon: 'rocket',
            inactiveIcon: 'cube',
            activeIconColor: '#FFFFFF',
            inactiveIconColor: '#FFFFFF',
            iconSize: 50,
            out: true
          },
          {
            title: '??????',
            activeIcon: 'team-fill',
            inactiveIcon: 'team',
            count: 12
          },
          {
            title: '??????',
            activeIcon: 'my-fill',
            inactiveIcon: 'my'
          }
        ],
        // tabbar????????????????????????
        currentIndex: 0, 
        // ??????????????????????????????????????????
        tabberPageLoadFlag: []
      }
    },
    onLoad(options) {
      const index = Number(options.index || 0)
      // ????????????tabbar?????????????????????????????????????????????
      this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
        return index === tabbar_index
      })
      this.switchTabbar(index)
    },
	onShow() {
		this.getLoadStatue()
	},
    methods: {
		getLoadStatue() {
			const db = uniCloud.database();
			const usersTable = db.collection('uni-id-users').get().then((res)=> {
				console.log(222,res);
			})
			console.log(1111,usersTable);
		}, 
      // ????????????
      switchTabbar(index) {
        this._switchTabbarPage(index)
      },
      
      
      // ????????????????????????????????????
      tabbarPageScrollLower(e) {
        if (this.currentIndex === 2) {
          this.$refs.discovery.getRandomData && this.$refs.discovery.getRandomData()
        }
      },
      
      // ??????????????????
      _switchTabbarPage(index) {
        const selectPageFlag = this.tabberPageLoadFlag[index]
        if (selectPageFlag === undefined) {
          return
        }
        if (selectPageFlag === false) {
          this.tabberPageLoadFlag[index] = true
        }
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
