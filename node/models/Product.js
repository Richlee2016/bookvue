/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');
var ProductSchema = require('../schamas/product');

module.exports = mongoose.model('product',ProductSchema);


