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
			</div>
		</b-card>
	</div>
</template>
<script>
	import {AgGridVue} from "ag-grid-vue";

	export default {
		name: "production",
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
				   	headerName: '供应商',
				   	field: "供应商",
				   	width: 100,
				   },
				   {
				   	headerName: '工厂',
				   	field: "工厂",
				   	width: 100,
				   },
				   {
				   	headerName: '采购凭证',
				   	field: "采购凭证",
				   	width: 100,
				   },
				   {
				   	headerName: '检验批',
				   	field: "检验批",
				   	width: 100,
				   },
				   {
				   	headerName: '检验对象的短文本',
				   	field: "检验对象的短文本",
				   	width: 100,
				   },
				   {
				   	headerName: '物料',
				   	field: "物料",
				   	width: 100,
				   },
				   {
				   	headerName: '网格值',
				   	field: "网格值",
				   	width: 100,
				   },
				   {
				   	headerName: '检验批数量',
				   	field: "检验批数量",
				   	width: 100,
				   },
				   {
				   	headerName: '基本计量单位',
				   	field: "基本计量单位",
				   	width: 100,
				   },
				   {
				   	headerName: '系统状态',
				   	field: "系统状态",
				   	width: 100,
				   },
				   {
				   	headerName: '非限制性库存',
				   	field: "非限制性库存",
				   	width: 100,
				   },
				   {
				   	headerName: '返回到供应商',
				   	field: "返回到供应商",
				   	width: 100,
				   },
				   	{
				   	headerName: '检验开始日期',
				   	field: "检验开始日期",
				   	width: 100,
				   },
				   {
				   	headerName: '批量创建时间',
				   	field: "批量创建时间",
				   	width: 100,
				   },
				   	{
				   	headerName: '物料凭证',
				   	field: "物料凭证",
				   	width: 100,
				   },
				   {
				   	headerName: 'UD 代码日期',
				   	field: "UD 代码日期",
				   	width: 100,
				   },
				   {
				   	headerName: 'UD 记录时间',
				   	field: "UD 记录时间",
				   	width: 100,
				   },
				   {
				   	headerName: '使用决策代码',
				   	field: "使用决策代码",
				   	width: 100,
				   },		   				   				   				   				   				   				   				 
				],
				rowData: [],
				gridApi: {},
				columnApi: {}
			}
		},
		methods: {
			createRowData(productionList){
				this.rowData = productionList;
			},
			reloadingData(){
				this.$http.get('/all').then(res=>{
					res=res.body;
					console.log(res);
					this.createRowData(res);
				})
			}
		},
	}
</script>