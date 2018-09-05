var {sequelize,Sequelize} = require('../sql');

//定义表的模型
var bom = sequelize.define('BOM', {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            defaultValue:Sequelize.UUIDV1
        },
        '紧急程度':{
            type:Sequelize.STRING
        },
        '发起人员':{
            type:Sequelize.STRING
        },
        '流程编号':{
            type:Sequelize.STRING
        },
        '申请日期':{
            type:Sequelize.STRING
        },
        '责任人':{
            type:Sequelize.STRING
        },
        '分部':{
            type:Sequelize.STRING
        },
        '申请部门':{
            type:Sequelize.STRING
        },
        '申请岗位':{
            type:Sequelize.STRING
        },
        '变更内容':{
            type:Sequelize.STRING
        },
        '责任原因':{
            type:Sequelize.STRING
        },
        '图片':{
            type:Sequelize.STRING
        },
        '工厂':{
            type:Sequelize.STRING
        },
        '部门上线日期':{
            type:Sequelize.STRING
        },
        '货号':{
            type:Sequelize.STRING
        },
        '材料名称':{
            type:Sequelize.STRING
        },
        '材料规格':{
            type:Sequelize.STRING
        },
        '部件名称':{
            type:Sequelize.STRING
        },
        '复合工艺':{
            type:Sequelize.STRING
        }, 
        '标准用量双/M':{
            type:Sequelize.STRING
        }, 
        '实际用量双/M':{
            type:Sequelize.STRING
        },
        'f22':{
            type:Sequelize.STRING
        }, 
        '原因':{
            type:Sequelize.STRING
        },             
    }, {
        timestamps:false,
        freezeTableName: true
});
// bom.sync({force:false}); //创建表

module.exports = bom;

