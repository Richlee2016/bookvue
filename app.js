const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const proxyMiddleware = require('http-proxy-middleware')
const config = require('./config')
const app = new express();
app.use('/static', express.static(__dirname + '/dist/static'));
app.use(bodyParser.urlencoded({ extended: true }));

var proxySet = config.dev.proxyTable;
app.use(proxyMiddleware(proxySet.context, proxySet.options));

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
})

var cookieApi = require('./service/api');
app.post('/book/read', cookieApi.read)
app.get('/api/free', cookieApi.free)
app.get('/api/searchpage', cookieApi.searchpage)

app.listen(3000);