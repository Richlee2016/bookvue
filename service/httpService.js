/**
 * Created by dell on 2017/2/9.
 */
var fs = require('fs')
var http = require('http')
var Mock = {};
var _getData = (client) => {
  var http = require('http')
  var client = client || {};
  var getData = (data) => {
    var data = data || {};
    return (cb) => {
      var queryString = require('querystring');
      var query  = data;
      var qs = queryString.stringify(query);
      var http_request = {
        hostname : client.hostname,
        port : 80,
        path : client.path + qs
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
var get_index ={
  hostname : "dushu.xiaomi.com",
  path : '/hs/v3/channel/418'
}
Mock.get_index_data = _getData(get_index);

//瀑布流请求
var get_pull = {
  hostname : "dushu.xiaomi.com",
  path : '/rock/book/recommend?'
}
Mock.get_pull_data = _getData(get_pull);

module .exports = Mock;


