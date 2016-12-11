var express = require('express');
var router = express.Router();

var Order_info = require('../models/order_info');
var Seats = require('../models/seats');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});
router.get('/typography', function(req, res, next) {
  Seats.get(function (err, seatsNumber) {
    console.log(seatsNumber);
    res.render('typography', {
      title: 'typography',
      seatsNumber:seatsNumber
    });
  })
  
});
router.post('/order/info', function(req, res, next) {
  var bobo = req.body.obj;//获取前端页面传来的obj数据；
  var str = JSON.parse(bobo);
  console.log(str);
  var newOrder = new Order_info({
    user_name: str[0],
    user_No:str[1],
    user_phone:str[2]
  });
  newOrder.save(function (err,result) {
    if (err) {
      req.flash('error', err);
      return res.redirect('/error');//注册失败返回患者注册页
    }
    Seats.reduce(function (err,result1) {
      if(err){
        req.flash('error', err);
        return res.redirect('/error');//注册失败返回患者注册页
      }
      res.send('ok');
    });
  });
});
module.exports = router;
