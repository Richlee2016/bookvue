var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var opn = require('opn')
var proRequest = require('superagent')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var request = require('request-promise')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
//proxy
var proxySet = config.dev.proxyTable;
console.log(proxySet.context);
app.use(proxyMiddleware(proxySet.context, proxyTable.options)); 
//bodyParser 处理
app.use(bodyParser.urlencoded({extended:true}));
//正文解析
app.post('/book/read',function(req,res){
    var query = req.query;
    var id = req.body.id;
    var chapter = req.body.chapter;
    var geturl =`http://dushu.xiaomi.com/drm/v0/fiction/link?fiction_id=${id}&chapter_id=${chapter}&format=jsonp`;
    var options = {
      method:'GET',
      uri:geturl,
      headers:{
          'Cookie':'uLocale=zh_CN; app_id=mi_wap; build=8888; device_id=D950FH275FLEFLJX; user_type=2; device_hash=76dc2d8d805f607f7e10f8596e06730a; user_id=1236127735; token=s4xOpaiEvnQH-8h_y541nhFPb6E-Nf3j_8ZBQDTS5gYkuzGxs5cko2iW-tJ9Mvl8; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1489632936,1489720605,1489996190,1490060009; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1490077093'
       },
       json:true
    } 
    request(options)
    .then( body => {
          request(body.url)
          .then( text => {
              var reg = /\'(.*)\'/g;
              var txt = reg.exec(text);
              var result = new Buffer(txt[1], 'base64').toString()
              res.json({txt:result})
              console.log(result);
          })
          .catch( err => {

          })
    })
    .catch( err => {
        console.log(err);
    })
    
})



// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  // opn(uri)
})
