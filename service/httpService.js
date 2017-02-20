/**
 * Created by dell on 2017/2/9.
 */
var fs = require('fs')
var http = require('http')
var Mock = {};
var _getData = (path) => {
  var http = require('http')
  var client = path || "";
  var getData = (data,list) => {
    var data = data || {};
    var list = list || "";
    return (cb) => {
      var queryString = require('querystring');
      var query  = data;
      var qs = queryString.stringify(query);
      console.log(path + list + qs);
      var http_request = {
        hostname : "dushu.xiaomi.com",
        port : 80,
        path : path + list + qs
      }
      //请求
      req_obj = http.request(http_request,(_res) => {
        var content = '';
        _res.setEncoding('utf8');
        _res.on('data',(chunk) => {
          content += chunk;
        })
        _res.on('end',() => {
          cb(null,content)
        })
      })
      req_obj.on('error',() => {})
      req_obj.end();
    }
  };
  return getData;
}


//首页
Mock.get_index_data = _getData('/hs/v3/channel/418');

//瀑布流请求
Mock.get_pull_data = _getData('/rock/book/recommend?');

//搜索页面
Mock.get_search_page = _getData('/store/v0/ad?');

//banner
Mock.get_banner_page = _getData('/store/v0/fiction/list/');
module .exports = Mock;


