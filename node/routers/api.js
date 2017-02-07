/**
 * Created by dell on 2016/10/12.
 */
var express = require('express');
var CartoonModel = require('../models/Cartoon');
var nodeFetch = require('node-fetch');
var router = express.Router();
var responseData;
function responseDataFn(code,message){
  var code = code? code:0;
  var message = message? message:"";
  responseData={
    code:code,
    message:message
  }
};
router.use(function(req,res,next){
    responseDataFn();
    next();
});
router.get('/cartoonnav',function(req, res, next){
  CartoonModel.findOne({title:'cartoonnav'},function(err,doc){
    res.json(doc.name);
  });
});



module.exports = router;
