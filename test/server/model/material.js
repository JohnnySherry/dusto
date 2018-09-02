var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'dusto',    //数据库名
    'root',             //用户名
    '1234',             //密码
    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306
    }
);

//定义表的模型
var material = sequelize.define('material', {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            defaultValue:Sequelize.UUIDV1
        },
        '供应商':{
            type:Sequelize.STRING
        },
        '工厂':{
            type:Sequelize.STRING
        },
        '采购凭证':{
            type:Sequelize.STRING
        },
        '检验批':{
            type:Sequelize.STRING
        },
        '检验对象的短文本':{
            type:Sequelize.STRING
        },
        '物料':{
            type:Sequelize.STRING
        },
        '网格值':{
            type:Sequelize.STRING
        },
        '检验批数量':{
            type:Sequelize.STRING
        },
        '基本计量单位':{
            type:Sequelize.STRING
        },
        '系统状态':{
            type:Sequelize.STRING
        },
        '非限制使用库存':{
            type:Sequelize.STRING
        },
        '返回到供应商':{
            type:Sequelize.STRING
        },
        '检验开始日期':{
            type:Sequelize.STRING
        },
        '批量创建时间':{
            type:Sequelize.STRING
        },
        '物料凭证':{
            type:Sequelize.STRING
        },
        'UD 代码日期':{
            type:Sequelize.STRING
        },
        'UD 记录时间':{
            type:Sequelize.STRING
        },
        '使用决策代码':{
            type:Sequelize.STRING
        },
    }, {
        timestamps:false,
        freezeTableName: true
});
material.sync({force:false}); //创建表

module.exports = material;

