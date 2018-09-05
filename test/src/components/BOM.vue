<template>
	<div style="bodyContainer">
		<b-card style="height: 100%; padding-top:10px;">
			<b-button type="button" @click="reloadingData" variant="primary">Hi
			</b-button>
			<div class="row" style="height: 450px; width: 1300px">
				<ag-grid-vue style="width:100%; height:100%;" class="ag-theme-balham"
                             :columnDefs="columnDefs"
                             :rowData="rowData"
				>					
				</ag-grid-vue>	
				<div id="myChart" :style="{width: '900px', height: '300px'}"></div>			
			</div>
		</b-card>
	</div>
</template>
<script>
	import {AgGridVue} from "ag-grid-vue";
    let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
	export default {
		name: "BOM",
		components: {
			'ag-grid-vue': AgGridVue,
		},
		data(){
			return {
				reloadData: false,
				ErrorMsg: '',
				dismissCountDown: 0,
				gridOptions: {
					componentParent: this
				},
				columnDefs: [
				   {
				   	headerName: 'id',
				   	field: "id",
				   	width: 100,
				   },
				   {
				   	headerName: '请求标题',
				   	field: "请求标题",
				   	width: 100,
				   },
				   {
				   	headerName: '紧急程度',
				   	field: "紧急程度",
				   	width: 100,
				   },
				   {
				   	headerName: '发起人员',
				   	field: "发起人员",
				   	width: 100,
				   },
				   {
				   	headerName: '流程编号',
				   	field: "流程编号",
				   	width: 100,
				   },
				   {
				   	headerName: '申请日期',
				   	field: "申请日期",
				   	width: 100,
				   },
				   {
				   	headerName: '责任人',
				   	field: "责任人",
				   	width: 100,
				   },
				   {
				   	headerName: '分部',
				   	field: "分部",
				   	width: 100,
				   },
				   {
				   	headerName: '申请部门',
				   	field: "申请部门",
				   	width: 100,
				   },
				   {
				   	headerName: '申请岗位',
				   	field: "申请岗位",
				   	width: 100,
				   },
				   {
				   	headerName: '变更内容',
				   	field: "责任原因",
				   	width: 100,
				   },
				   {
				   	headerName: '图片',
				   	field: "图片",
				   	width: 100,
				   },
				   {
				   	headerName: '工厂',
				   	field: "工厂",
				   	width: 100,
				   },
				   	{
				   	headerName: '部门上线日期',
				   	field: "部门上线日期",
				   	width: 100,
				   },
				   {
				   	headerName: '货号',
				   	field: "货号",
				   	width: 100,
				   },
				   	{
				   	headerName: '材料名称',
				   	field: "材料名称",
				   	width: 100,
				   },
				   {
				   	headerName: '部件名称',
				   	field: "部件名称",
				   	width: 100,
				   },
				   {
				   	headerName: '复合工艺',
				   	field: "复合工艺",
				   	width: 100,
				   },
				   {
				   	headerName: '标准用量双/M',
				   	field: "标准用量双/M",
				   	width: 100,
				   },
				   {
				   	headerName: '实际用量双/M',
				   	field: "实际用量双/M",
				   	width: 100,
				   },
				   	{
				   	headerName: 'f22',
				   	field: "f22",
				   	width: 100,
				   },	
				   	{
				   	headerName: '原因',
				   	field: "原因",
				   	width: 100,
				   },			   		   				   				   				   				   				   				   				 
				],
				rowData: [],
				gridApi: {},
				columnApi: {}
			}
		},
		mounted(){
			this.drawLine();
		},
		methods: {
			createRowData(bomList){
				this.rowData = bomList;
			},
			reloadingData(){
				this.$http.get('/bom').then(res=>{
					res=res.body;
					console.log(res);
					this.createRowData(res);
				})
			},
			drawLine(){
            // let myChart = this.$echarts.init(document.getElementById('myChart'))
            let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
            myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["供应链平台","产品管理中心","豹子头鞋业","B2厂","男鞋事业部","A3厂","B厂","男鞋三厂"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 90, 100]
            }]
        });
			}
		},
	}
</script>