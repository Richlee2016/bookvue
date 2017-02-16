var Koa = require('koa');
var router = require('koa-route');
var cors = require('koa-cors');
var superagent = require('superagent');
var app = Koa();
app.use(cors());
var mockService = require('./service/mockService.js');
var httpService = require('./service/httpService.js');
//解析请求头
//var bodyParser = (context) => {
//  var queryString = require('querystring');
//  var params = queryString.parse(context.req._parsedUrl.query);
//  return params;
//}
////章节
//app.use(router.get('/api/chapter',function* (){
//  this.set('Cache-Control','no-cache');
//  this.body = mockService.get_chapter_data();
//}));
//
//app.use(router.get('/api/read',function* (){
//  this.set('Cache-Control','no-cache');
//  var params = bodyParser(this);
//  var chapter = params.chapter;
//  var res=mockService.get_read_data(chapter);
//  this.body =res;
//}));


app.use(router.get('/api/index',function* (){
  this.set('Cache-Control','no-cache');
  this.body =yield httpService.get_index_data();
}));


app.listen(3000);

