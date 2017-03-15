var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();
var cors = require('koa-cors');
var httpService = require('./service/httpService.js');
//跨域请求
app.use(cors());

//首页
router.get('/api/index',function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_index_data();
})

//瀑布流
router.post('/api/ajax/pull',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_pull_data(this.request.body);
})

//搜索页面
router.post('/api/search',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_search_page(this.request.body);
})

//本周最火 更多
router.post('/api/moreone',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  var req = this.request.body || {};
  var start = req.start,
      count = req.count,
      list = req.list +'?';
  this.body =yield httpService.get_banner_page({start:start,count:count},list);
})

//频道更多
router.post('/api/moretwo',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  var req = this.request.body || {};
  var list = req.list;
  this.body =yield httpService.get_more_page({},list);
})

//free更多
router.post('/api/morethree',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_special_page(this.request.body);
})

//分类请求
router.get('/api/class',function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_class_page();
})

//排行请求
router.get('/api/rank',function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_rank_page();
})

//详情请求
router.post('/api/detail',koaBody,function* (){
  this.set('Cache-Control','no-cache');
  var req = this.request.body || {};
  var list = req.list;
  this.body =yield httpService.get_book_detail({},list);
})







app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);

