var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'dusto',    //数据库名
    'root',             //用户名
    '1234',             //密码
    {
        'dialect': 'mysql',
        'host': 'localhost',
        pool: {
        	max: 5,
        	min: 0,
        	idle: 10000
        }  
    });

sequelize.authenticate().then(function(){
	console.log("数据库连接成功");
}).catch(function(err){
	console.log(err);
	throw err;
})


exports.sequelize = sequelize;
exports.Sequelize = Sequelize;