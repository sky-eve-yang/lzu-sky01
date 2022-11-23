<template>
	
	<view class="set-total flex-column align-center">
		<tui-navigation-bar splitLine :scrollTop="scrollTop"
			title="设置" backgroundColor="#fff" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">
		
			</view>
		</tui-navigation-bar>
		<view style="width: 90vw;" class="page-title justify-content-item tn-margin tn-text-bold tn-text-xxl">
			设置
		</view>
		
		<view class="form-box">
			<tn-form :model="form" ref="uForm" :errorType="['message']">
			  <tn-form-item label="姓名" prop="name">
			    <tn-input v-model="form.name" />
			  </tn-form-item>
			  <tn-form-item label="简介" prop="intro">
			    <tn-input v-model="form.intro" />
			  </tn-form-item>
			  <tn-form-item label="性别" prop="sex">
			    <tn-input v-model="form.sex" type="select" />
			  </tn-form-item>
			  <tn-form-item label="爱好" prop="hobby">
			    <tn-checkbox-group v-model="form.hobby">
			      <tn-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
			        {{ item.name }}
			      </tn-checkbox>
			    </tn-checkbox-group>
			  </tn-form-item>
			  <tn-form-item label="学历" prop="radio">
			    <tn-radio-group v-model="form.radio">
			      <tn-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
			        {{ item.name }}
			      </tn-radio>
			    </tn-radio-group>
			  </tn-form-item>
			  <tn-form-item label="保密" prop="security">
			    <tn-switch slot="right" v-model="form.security"></tn-switch>
			  </tn-form-item>
			</tn-form>
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
        form: {
          name: '',
          intro: '',
          sex: '',
          hobby: [],
          radio: '',
          security: false
        },
        checkboxList: [{
            name: '编程',
            checked: false,
            disabled: false
          },
          {
            name: '羽毛球',
            checked: false,
            disabled: false
          },
          {
            name: '篮球',
            checked: false,
            disabled: false
          }
        ],
        radioList: [{
            name: '小学',
            disabled: false
          },
          {
            name: '大学',
            disabled: false
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
	.set-total {
		min-height: 100vh;
		width: 100vw;
	}
	
	.form-box {
		width: 90vw;
	}
</style>
