/**
 * Created by dell on 2017/2/9.
 */
var fs = require('fs')
var http = require('http')
var Mock = {};
var _getData = (path) => {
    var http = require('http');
    var client = path || "";
    var getData = (data,list) => {
        var data = data || {};
        var list = list || "";
        return (cb) => {
            //解析请求数据
            var queryString = require('querystring');
            var query  = data;
            var qs = queryString.stringify(query);
            console.log(path + list + qs);
            //请求地址
            var http_request = {
                hostname : "dushu.xiaomi.com",
                port : 80,
                path : path + list + qs
            }
            //请求
            req = http.request(http_request,(res) => {
                var content = '';
                res.setEncoding('utf8');
                res.on('data',(chunk) => { content += chunk;});
                res.on('end',() => { cb(null,content)});
            })
            req.on('error',() => {})
            req.end();
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

//频道更多
Mock.get_more_page = _getData('/hs/v3/channel/');

//更多专题
Mock.get_special_page =  _getData('/store/v0/ad/persistent?');

//分类
Mock.get_class_page =  _getData('/hs/v0/android/store/category');

//分类
Mock.get_rank_page =  _getData('/store/v0/ad/ranks');

//详情
Mock.get_book_detail =  _getData('/hs/v0/android/fiction/book/');

module .exports = Mock;


