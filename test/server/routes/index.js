var express = require('express');
var router = express.Router();
var material = require('../model/material')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all',function(req,res,next){
	material.findAll().then(function(results){
		res.send(results);
	})
})


module.exports = router;
