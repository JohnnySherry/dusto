<template>
	<div class="card" style="margin-right:5px!important;box-shadow: 3px 3px 8px #a6acad; text-align: left">
		<div class="card-header mt-5 mb-2 text-muted menuTitle">Home</div>
		<div class="card-header mt-5 mb-2 text-muted menuTitle">CN performance</div>
		<b-list-group>
			<b-list-group-item button @click="handleMenuClick">{{menuText.performanceRating}}</b-list-group-item>
			<b-list-group-item button @click="handleMenuClick">{{menuText.performanceQuery}}</b-list-group-item>
			<b-list-group-item button>{{menuText.performanceRelease}}</b-list-group-item>
		</b-list-group>

		<div class="card-header mt-5 mb-2 text-muted menuTitle">CM Events</div>
		<b-list-group>
			<b-list-group-item button @click="handleMenuClick">{{menuText.quickNotes}}</b-list-group-item>
			<b-list-group-item button>{{menuText.eventInsight}}</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
	export default {
		name: 'LeftFloatComponent',
		data() {
			return {
				menuText: {
					performanceRating: '大东生产数据',
					performanceQuery: '大东销售数据',
					performanceRelease: '大东物控数据',
				}
			};
		},
		methods: {
			handleMenuClick(e){
				switch (e.target.textContent) {
					case this.menuText.performanceRating:
					   this.$router.push("/production");
					   break;
					case this.menuText.performanceQuery:
					   this.$router.push("/home/sales");
					   break;
					case this.menuText.performanceRelease:
					   this.$router.push("/home/PMC");
					   break;
				}
			},
		}
	}
</script>