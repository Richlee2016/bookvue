/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');

var CartopnSchema = new mongoose.Schema({
  name:String,
  title:String
});


module.exports = CartopnSchema;
