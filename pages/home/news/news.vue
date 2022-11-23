<template>
	<view class="total-content flex-column align-center">
		<tui-navigation-bar splitLine @init="initNavigation" @change="opacityChange" :scrollTop="scrollTop"
			title="教授开放日" backgroundColor="#fff" color="#333">
			<view class="tui-header-icon" :style="{ marginTop: top + 'px' }">
				
			</view>
		</tui-navigation-bar>
		<view class="page-title justify-content-item tn-margin tn-text-bold tn-text-xxl">
			教授开放日
		</view>

		<view class="info-box" v-for="(item, index) in teacTimeData">
			<uni-link :href="item.link" showUnderLine="false" text="">
				<view class="sky-shadow info-item flex-column justify-between">
					<view class="title">{{item.title}}安排表</view>
					<view class="date">{{item.date}}</view>
				</view>
			</uni-link>
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
				teacTimeData: [{
						"title": "榆中校区",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221023194540.xls",
						"date": "2022-09-09"
					},
					{
						"title": "城关校区",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20220909145951.xls",
						"date": "2022-09-09"
					},
					{
						"title": "第13周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221120154845.xls",
						"date": "2022-11-20"
					},
					{
						"title": "第12周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221113213712.xls",
						"date": "2022-11-13"
					},
					{
						"title": "第11周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221106223853.xls",
						"date": "2022-11-06"
					},
					{
						"title": "第10周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221030202927.xls",
						"date": "2022-10-30"
					},
					{
						"title": "第9周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221023194528.xls",
						"date": "2022-10-23"
					},
					{
						"title": "第8周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221016163248.xls",
						"date": "2022-10-16"
					},
					{
						"title": "第7周线上",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20221009182056.xls",
						"date": "2022-10-09"
					},
					{
						"title": "第5周",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20220925100521.xls",
						"date": "2022-09-22"
					},
					{
						"title": "第4周 ",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20220916175157.xls",
						"date": "2022-09-16"
					},
					{
						"title": "第3周",
						"link": "https://jwc.lzu.edu.cn/upload/doc/N20220909145920.xls",
						"date": "2022-09-09"
					}
				]
			};
		},
		onShow() {
			this.getDate()
		},
		methods: {
			initNavigation() {

			},
			opacityChange() {

			},
			back() {

			},
			getDate() {


				const db = uniCloud.database()
				db.collection("teac-commu-time-data").get().then((res) => {
					// res 为数据库查询结果
					console.log(1);
					console.log(res)
				}).catch((e) => {
					console.log(2);
					console.log(e)
				});

			},

		}
	}
</script>

<style lang="scss" scoped>
	.page-title {
		width: 90vw;
		font-size: 48rpx;
		font-weight: bold;
	}

	.total-content {
		min-height: 100vh;
		width: 100vw;
		background-color: #f8f9fa;
	}

	.info-item {
		width: 90vw;
		height: 160rpx;
		background-color: #ffff;
		border-radius: 15px;
		padding: 40rpx 30rpx;
		margin: 30rpx 0;
		line-height: 32rpx;

		.title {
			color: #108b96;
			font-size: 36rpx;
			opacity: 0.8;
			width: 100%;
		}

		.date {
			color: #6ca8af;
			opacity: 0.5;
			width: 100%;
			text-align: right;
		}
	}
</style>
