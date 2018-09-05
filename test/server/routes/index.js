var express = require('express');
var router = express.Router();
var material = require('../model/material');
var bom = require('../model/bom')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all',function(req,res,next){
	material.sync({force:false}); 
	material.findAll().then(function(results){
		res.send(results);
	})
});

router.get('/bom', function(req,res,next){
	bom.sync({force:false}); //创建表
	bom.findAll().then(function(results){
		res.send(results);
	})
})


module.exports = router;
