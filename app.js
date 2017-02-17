var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var cors = require('koa-cors');
var querystring = require('querystring');
var httpService = require('./service/httpService.js');
//跨域请求
app.use(cors());

router.get('/api/index',function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_index_data();
})

router.post('/api/ajax/pull',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_pull_data(this.request.body);
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

