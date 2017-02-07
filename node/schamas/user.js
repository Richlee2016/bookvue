/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username:{
    unique:true,
    type:String
  },
  password:String
});


module.exports = UserSchema;
