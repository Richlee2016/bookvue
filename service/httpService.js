/**
 * Created by dell on 2017/2/9.
 */
var fs = require('fs')
var http = require('http')
var Mock = {};
//Mock.test = () => {
//  var content = fs.readFileSync('./mock/test.json','utf-8');
//  return content;
//}

Mock.get_search_data = (keyword,start,end) => {
  return (cb) => {
    var Http = require('http');
    var queryString = require('querystring');
    //关键字
    var data = {
      keyword: keyword,
      start: start,
      end: end
    };
    //路径
    var content = queryString.stringify(data);
    var http_request = {
      hostname : "dushu.xiaomi.com",
      port : 80,
      path : '/store/v0/lib/query/onebox?' + content
    }
    //请求
    req_obj = http.request(http_request,(_res) => {
      var content = '';
      _res.setEncoding('utf8');
      _res.on('data',(chunk) => {
        //分块返回  进行拼接
        content += chunk;
      })
      _res.on('end',() => {
        //错误代码，返回内容
        cb(null,content)
      })
    })

    req_obj.on('error',() => {

    })
    req_obj.end();
  }
}

module .exports = Mock;


