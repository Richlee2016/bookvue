var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var opn = require('opn')
var proRequest = require('superagent')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
    // default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware


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
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
var proxySet = config.dev.proxyTable;
app.use(proxyMiddleware(proxySet.context, proxySet.options));

//bodyParser 处理
app.use(bodyParser.urlencoded({ extended: true }));

//需要cookie获取的信息
var cookieApi = require('../service/api');
app.post('/book/read', cookieApi.read)
app.get('/api/free', cookieApi.free)
app.get('/api/searchpage', cookieApi.searchpage)
    //免费小说获取
app.get('/api/chapter/:id', cookieApi.freeSearch, cookieApi.freeChapter);
app.get('/api/read/:id', cookieApi.freeRead);

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
module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
        // opn(uri)
})