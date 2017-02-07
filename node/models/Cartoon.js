/**
 * Created by dell on 2016/10/12.
 */
var mongoose = require('mongoose');
var CartoonSchema = require('../schamas/cartoon');

module.exports = mongoose.model('cartoon',CartoonSchema);


