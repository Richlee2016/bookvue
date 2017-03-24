const path = require('path')
const express = require('express');
const request = require('request-promise')
const bodyParser = require('body-parser');
const proxyMiddleware = require('http-proxy-middleware')
const app = new express();
app.use('/static', express.static(__dirname + '/dist/static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendfile('./dist/index.html');
})


app.listen(8080);