/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');
var UserSchema = require('../schamas/user');

module.exports = mongoose.model('user',UserSchema);


