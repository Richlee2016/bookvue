var Koa = require('koa');
var router = require('koa-route');
var cors = require('koa-cors');
var superagent = require('superagent');
var app = Koa();
app.use(cors());
var mockService = require('./service/mockService.js');
//解析请求头
var bodyParser = (context) => {
  var queryString = require('querystring');
  var params = queryString.parse(context.req._parsedUrl.query);
  return params;
}
//章节
app.use(router.get('/api/chapter',function* (){
  this.set('Cache-Control','no-cache');
  this.body = mockService.get_chapter_data();
}));

app.use(router.get('/api/read',function* (){
  this.set('Cache-Control','no-cache');
  var params = bodyParser(this);
  var chapter = params.chapter;
  var res=  mockService.get_read_data(chapter);
  var result = JSON.parse(res);
  var turnBook = "";
  if(result.result === 0){
    superagent.get(result.jsonp).end((err, read) => {
      var reg = /[']([\w\W]+)[']/g;
      var readBook = reg.exec(read.text);
      var go = readBook.replace(/\/+/g,"");
      turnBook = new Buffer(readBook[1], 'base64').toString()
      console.log(JSON.stringify(turnBook));
    });
    this.body =turnBook;
  };
}));


//app.use(router.get('/api/search',function* (){
//  this.set('Cache-Control','no-cache')
//  //解析
//  var queryString = require('querystring');
//  var params = queryString.parse(this.req._parsedUrl.query);
//  var start = params.start;
//  var end = params.end;
//  var keyword = params.keyword;
//  this.body = yield service.get_search_data(keyword, start, end );
//}));


app.listen(3000);

