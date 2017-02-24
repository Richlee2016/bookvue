var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var cors = require('koa-cors');
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

router.post('/api/search',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_search_page(this.request.body);
})

router.post('/api/moreone',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  var req = this.request.body || {};
  var start = req.start,
      count = req.count,
      list = req.list +'?';
  this.body =yield httpService.get_banner_page({start:start,count:count},list);
})

router.post('/api/moretwo',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  var req = this.request.body || {};
  var list = req.list;
  this.body =yield httpService.get_more_page({},list);
})

router.post('/api/morethree',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_special_page(this.request.body);
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

