var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
//post请求处理
app.use(bodyParser.json());

//跨域支持  这个设置要在 后台路由设置之前
app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

//后台路由处理
app.use('/api',require('./node/routers/api'));
mongoose.connect('mongodb://localhost:27017/richhome',function(err){
  if(err){
    console.log(err);
  }else{
    console.log('链接服务器成功');
  }
  app.listen(8088);
});


