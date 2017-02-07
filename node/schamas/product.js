/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title:String,
  price:Number
});


module.exports = ProductSchema;
