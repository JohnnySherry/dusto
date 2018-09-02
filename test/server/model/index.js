module.exports = function(sequelize,DataTypes){
	var table = sequelize.define('material',{
		id:{
			type:DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue:DataTypes.UUIDV1
		},
		'供应商':{
			type:DataTypes.STRING
		},
		'工厂':{
			type:DataTypes.STRING
		},
		'采购凭证':{
			type:DataTypes.STRING
		},
		'检验批':{
			type:DataTypes.STRING
		},
		'检验对象的短文本':{
			type:DataTypes.STRING
		},
		'物料':{
			type:DataTypes.STRING
		},
		'网格值':{
			type:DataTypes.STRING
		},
		'检验批数量':{
			type:DataTypes.STRING
		},
		'基本计量单位':{
			type:DataTypes.STRING
		},
		'系统状态':{
			type:DataTypes.STRING
		},
		'非限制使用库存':{
			type:DataTypes.STRING
		},
		'返回到供应商':{
			type:DataTypes.STRING
		},
		'检验开始日期':{
			type:DataTypes.STRING
		},
		'批量创建时间':{
			type:DataTypes.STRING
		},
		'物料凭证':{
			type:DataTypes.STRING
		},
		'UD代码日期':{
			type:DataTypes.STRING
		},
		'UD记录时间':{
			type:DataTypes.STRING
		},
		'使用决策代码':{
			type:DataTypes.STRING
		},
	}, {
		freezeTableName: true
	});
	return table;
};